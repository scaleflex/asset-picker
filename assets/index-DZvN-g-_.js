const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/landing-Diq5G2Jo.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-B9JEfr0y.js","assets/api-Dl3UszFN.js","assets/theming-hrqYM8pb.js","assets/filters-Df1TuQYX.js","assets/types-DPNAgA2W.js","assets/basic-kmjsSdhM.js","assets/single-select-DYEdsYDP.js","assets/multi-select-B9lBKUpt.js","assets/disabled-assets-CT2t2fjE.js","assets/theming-CBrooBJT.js","assets/custom-theming-CFGsraVM.js","assets/default-filters-CNUYd--4.js","assets/forced-filters-CIHFZBpA.js","assets/enabled-filters-CV2tD1x8.js","assets/enabled-metadata-fields-DStvQJ-k.js","assets/approval-users-DcT9JC4B.js","assets/hidden-tabs-LJCUDzGt.js","assets/root-folder-BCVbMV3S.js","assets/events-CKmn0dES.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-Dz95aXR3.js","assets/sticky-filters-zubINgp6.js","assets/grid-size-CUwbs7zs.js","assets/preferences-BehAvpV3.js","assets/uploader-DFoUNkst.js","assets/folder-selection-sjknyU-p.js","assets/ai-search-B4VK1gtj.js","assets/transformations-oGHGHyW2.js","assets/variants-CXcNLTru.js","assets/language-switcher-Cw1ti0BJ.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const vo="modulepreload",mo=function(t){return"/asset-picker/"+t},Er={},j=function(e,s,i){let r=Promise.resolve();if(s&&s.length>0){let o=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=o(s.map(h=>{if(h=mo(h),h in Er)return;Er[h]=!0;const p=h.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":vo,p||(d.as="script"),d.crossOrigin="",d.href=h,l&&d.setAttribute("nonce",l),document.head.appendChild(d),p)return new Promise((g,m)=>{d.addEventListener("load",g),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return r.then(o=>{for(const n of o||[])n.status==="rejected"&&a(n.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=globalThis,er=ai.ShadowRoot&&(ai.ShadyCSS===void 0||ai.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tr=Symbol(),Fr=new WeakMap;let $a=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(er&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=Fr.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fr.set(s,e))}return e}toString(){return this.cssText}};const bo=t=>new $a(typeof t=="string"?t:t+"",void 0,tr),A=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new $a(s,t,tr)},xo=(t,e)=>{if(er)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=ai.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Or=er?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return bo(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_o,defineProperty:yo,getOwnPropertyDescriptor:$o,getOwnPropertyNames:wo,getOwnPropertySymbols:ko,getPrototypeOf:So}=Object,bt=globalThis,Tr=bt.trustedTypes,Co=Tr?Tr.emptyScript:"",Oi=bt.reactiveElementPolyfillSupport,Cs=(t,e)=>t,ci={toAttribute(t,e){switch(e){case Boolean:t=t?Co:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},sr=(t,e)=>!_o(t,e),Lr={attribute:!0,type:String,converter:ci,reflect:!1,useDefault:!1,hasChanged:sr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),bt.litPropertyMetadata??(bt.litPropertyMetadata=new WeakMap);let Jt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Lr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&yo(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:a}=$o(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){const n=r==null?void 0:r.call(this);a==null||a.call(this,o),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lr}static _$Ei(){if(this.hasOwnProperty(Cs("elementProperties")))return;const e=So(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cs("properties"))){const s=this.properties,i=[...wo(s),...ko(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(Or(r))}else e!==void 0&&s.push(Or(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var a;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:ci).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){var a,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:ci;this._$Em=r;const h=l.fromAttribute(s,n.type);this[r]=h??((o=this._$Ej)==null?void 0:o.get(r))??h,this._$Em=null}}requestUpdate(e,s,i,r=!1,a){var o;if(e!==void 0){const n=this.constructor;if(r===!1&&(a=this[e]),i??(i=n.getPropertyOptions(e)),!((i.hasChanged??sr)(a,s)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:a},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??s??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,o]of r){const{wrapped:n}=o,l=this[a];n!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[Cs("elementProperties")]=new Map,Jt[Cs("finalized")]=new Map,Oi==null||Oi({ReactiveElement:Jt}),(bt.reactiveElementVersions??(bt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=globalThis,Pr=t=>t,di=As.trustedTypes,Mr=di?di.createPolicy("lit-html",{createHTML:t=>t}):void 0,wa="$lit$",vt=`lit$${Math.random().toFixed(9).slice(2)}$`,ka="?"+vt,Ao=`<${ka}>`,Nt=document,Fs=()=>Nt.createComment(""),Os=t=>t===null||typeof t!="object"&&typeof t!="function",ir=Array.isArray,Eo=t=>ir(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ti=`[ 	
\f\r]`,xs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ir=/-->/g,Dr=/>/g,Et=RegExp(`>|${Ti}(?:([^\\s"'>=/]+)(${Ti}*=${Ti}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rr=/'/g,zr=/"/g,Sa=/^(?:script|style|textarea|title)$/i,Ca=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),c=Ca(1),mt=Ca(2),lt=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Nr=new WeakMap,Lt=Nt.createTreeWalker(Nt,129);function Aa(t,e){if(!ir(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mr!==void 0?Mr.createHTML(e):e}const Fo=(t,e)=>{const s=t.length-1,i=[];let r,a=e===2?"<svg>":e===3?"<math>":"",o=xs;for(let n=0;n<s;n++){const l=t[n];let h,p,f=-1,d=0;for(;d<l.length&&(o.lastIndex=d,p=o.exec(l),p!==null);)d=o.lastIndex,o===xs?p[1]==="!--"?o=Ir:p[1]!==void 0?o=Dr:p[2]!==void 0?(Sa.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=Et):p[3]!==void 0&&(o=Et):o===Et?p[0]===">"?(o=r??xs,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?Et:p[3]==='"'?zr:Rr):o===zr||o===Rr?o=Et:o===Ir||o===Dr?o=xs:(o=Et,r=void 0);const g=o===Et&&t[n+1].startsWith("/>")?" ":"";a+=o===xs?l+Ao:f>=0?(i.push(h),l.slice(0,f)+wa+l.slice(f)+vt+g):l+vt+(f===-2?n:g)}return[Aa(t,a+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ts{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let a=0,o=0;const n=e.length-1,l=this.parts,[h,p]=Fo(e,s);if(this.el=Ts.createElement(h,i),Lt.currentNode=this.el.content,s===2||s===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=Lt.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const f of r.getAttributeNames())if(f.endsWith(wa)){const d=p[o++],g=r.getAttribute(f).split(vt),m=/([.?@])?(.*)/.exec(d);l.push({type:1,index:a,name:m[2],strings:g,ctor:m[1]==="."?To:m[1]==="?"?Lo:m[1]==="@"?Po:wi}),r.removeAttribute(f)}else f.startsWith(vt)&&(l.push({type:6,index:a}),r.removeAttribute(f));if(Sa.test(r.tagName)){const f=r.textContent.split(vt),d=f.length-1;if(d>0){r.textContent=di?di.emptyScript:"";for(let g=0;g<d;g++)r.append(f[g],Fs()),Lt.nextNode(),l.push({type:2,index:++a});r.append(f[d],Fs())}}}else if(r.nodeType===8)if(r.data===ka)l.push({type:2,index:a});else{let f=-1;for(;(f=r.data.indexOf(vt,f+1))!==-1;)l.push({type:7,index:a}),f+=vt.length-1}a++}}static createElement(e,s){const i=Nt.createElement("template");return i.innerHTML=e,i}}function ts(t,e,s=t,i){var o,n;if(e===lt)return e;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const a=Os(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),a===void 0?r=void 0:(r=new a(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=ts(t,r._$AS(t,e.values),r,i)),e}class Oo{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Nt).importNode(s,!0);Lt.currentNode=r;let a=Lt.nextNode(),o=0,n=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new os(a,a.nextSibling,this,e):l.type===1?h=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(h=new Mo(a,this,e)),this._$AV.push(h),l=i[++n]}o!==(l==null?void 0:l.index)&&(a=Lt.nextNode(),o++)}return Lt.currentNode=Nt,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class os{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ts(this,e,s),Os(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Eo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Os(this._$AH)?this._$AA.nextSibling.data=e:this.T(Nt.createTextNode(e)),this._$AH=e}$(e){var a;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ts.createElement(Aa(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(s);else{const o=new Oo(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=Nr.get(e.strings);return s===void 0&&Nr.set(e.strings,s=new Ts(e)),s}k(e){ir(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const a of e)r===s.length?s.push(i=new os(this.O(Fs()),this.O(Fs()),this,this.options)):i=s[r],i._$AI(a),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=Pr(e).nextSibling;Pr(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class wi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,s=this,i,r){const a=this.strings;let o=!1;if(a===void 0)e=ts(this,e,s,0),o=!Os(e)||e!==this._$AH&&e!==lt,o&&(this._$AH=e);else{const n=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=ts(this,n[i+l],s,l),h===lt&&(h=this._$AH[l]),o||(o=!Os(h)||h!==this._$AH[l]),h===v?e=v:e!==v&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class To extends wi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Lo extends wi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Po extends wi{constructor(e,s,i,r,a){super(e,s,i,r,a),this.type=5}_$AI(e,s=this){if((e=ts(this,e,s,0)??v)===lt)return;const i=this._$AH,r=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class Mo{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ts(this,e)}}const ep={I:os},Li=As.litHtmlPolyfillSupport;Li==null||Li(Ts,os),(As.litHtmlVersions??(As.litHtmlVersions=[])).push("3.3.3");const Io=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const a=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new os(e.insertBefore(Fs(),a),a,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=globalThis;let E=class extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Io(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return lt}};var ya;E._$litElement$=!0,E.finalized=!0,(ya=It.litElementHydrateSupport)==null||ya.call(It,{LitElement:E});const Pi=It.litElementPolyfillSupport;Pi==null||Pi({LitElement:E});(It.litElementVersions??(It.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:sr},Ro=(t=Do,e,s)=>{const{kind:i,metadata:r}=s;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(n){const l=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,l,t,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(i==="setter"){const{name:o}=s;return function(n){const l=this[o];e.call(this,n),this.requestUpdate(o,l,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function u(t){return(e,s)=>typeof s=="object"?Ro(t,e,s):((i,r,a)=>{const o=r.hasOwnProperty(a);return r.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(r,a):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(t){return u({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wt(t,e){return(s,i,r)=>{const a=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(t))??null};return zo(s,i,{get(){return a(this)}})}}class No{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function Uo(){return new No({t:(t,e,s)=>{const i=(r,a)=>r.replace(/\{\{(\w+)\}\}/g,(o,n)=>String(a[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const r=e,a=r.count;if(a!==void 0){const o=String((a===1?r.defaultValue_one:r.defaultValue_other)??r.defaultValue??t);return i(o,r)}return i(String(r.defaultValue??t),r)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",cdnPermalinkEnabled:!1,isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const Mi=(t,e)=>t.replace(/\{\{(\w+)\}\}/g,(s,i)=>String(e[i]??"")),Ur=(t,e,s)=>{if(typeof e=="string")return Mi(e,s??{});if(typeof e=="object"&&e!==null){const i=e,r=i.count;if(r!==void 0){const a=String((r===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??t);return Mi(a,i)}return Mi(String(i.defaultValue??t),i)}return t},L=t=>typeof t=="string",_s=()=>{let t,e;const s=new Promise((i,r)=>{t=i,e=r});return s.resolve=t,s.reject=e,s},jr=t=>t==null?"":""+t,jo=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},Vo=/###/g,Vr=t=>t&&t.indexOf("###")>-1?t.replace(Vo,"."):t,Kr=t=>!t||L(t),Es=(t,e,s)=>{const i=L(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(Kr(t))return{};const a=Vr(i[r]);!t[a]&&s&&(t[a]=new s),Object.prototype.hasOwnProperty.call(t,a)?t=t[a]:t={},++r}return Kr(t)?{}:{obj:t,k:Vr(i[r])}},Br=(t,e,s)=>{const{obj:i,k:r}=Es(t,e,Object);if(i!==void 0||e.length===1){i[r]=s;return}let a=e[e.length-1],o=e.slice(0,e.length-1),n=Es(t,o,Object);for(;n.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),n=Es(t,o,Object),n&&n.obj&&typeof n.obj[`${n.k}.${a}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${a}`]=s},Ko=(t,e,s,i)=>{const{obj:r,k:a}=Es(t,e,Object);r[a]=r[a]||[],r[a].push(s)},hi=(t,e)=>{const{obj:s,k:i}=Es(t,e);if(s)return s[i]},Bo=(t,e,s)=>{const i=hi(t,s);return i!==void 0?i:hi(e,s)},Ea=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?L(t[i])||t[i]instanceof String||L(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):Ea(t[i],e[i],s):t[i]=e[i]);return t},Qt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ho={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const qo=t=>L(t)?t.replace(/[&<>"'\/]/g,e=>Ho[e]):t;class Go{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Yo=[" ",",","?","!",";"],Qo=new Go(20),Wo=(t,e,s)=>{e=e||"",s=s||"";const i=Yo.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const r=Qo.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let a=!r.test(t);if(!a){const o=t.indexOf(s);o>0&&!r.test(t.substring(0,o))&&(a=!0)}return a},Hi=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let r=t;for(let a=0;a<i.length;){if(!r||typeof r!="object")return;let o,n="";for(let l=a;l<i.length;++l)if(l!==a&&(n+=s),n+=i[l],o=r[n],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;a+=l-a+1;break}r=o}return r},pi=t=>t&&t.replace("_","-"),Xo={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class ui{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||Xo,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,r){return r&&!this.debug?null:(L(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new ui(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ui(this.logger,e)}}var Xe=new ui;class ki{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(s)||0;this.observers[i].set(s,r+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),r=1;r<s;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[n,l]=o;for(let h=0;h<l;h++)n(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[n,l]=o;for(let h=0;h<l;h++)n.apply(n,[e,...i])})}}class Hr extends ki{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let n;e.indexOf(".")>-1?n=e.split("."):(n=[e,s],i&&(Array.isArray(i)?n.push(...i):L(i)&&a?n.push(...i.split(a)):n.push(i)));const l=hi(this.data,n);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=n[0],s=n[1],i=n.slice(2).join(".")),l||!o||!L(i)?l:Hi(this.data&&this.data[e]&&this.data[e][s],i,a)}addResource(e,s,i,r){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let n=[e,s];i&&(n=n.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(n=e.split("."),r=s,s=n[1]),this.addNamespaces(s),Br(this.data,n,r),a.silent||this.emit("added",e,s,i,r)}addResources(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in i)(L(i[a])||Array.isArray(i[a]))&&this.addResource(e,s,a,i[a],{silent:!0});r.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},n=[e,s];e.indexOf(".")>-1&&(n=e.split("."),r=i,i=s,s=n[1]),this.addNamespaces(s);let l=hi(this.data,n)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?Ea(l,i,a):l={...l,...i},Br(this.data,n,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(r=>s[r]&&Object.keys(s[r]).length>0)}toJSON(){return this.data}}var Fa={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,r){return t.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,s,i,r))}),e}};const qr={};class fi extends ki{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),jo(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Xe.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,n=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!Wo(e,i,r);if(o&&!n){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:L(a)?[a]:a};const h=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(h[0])>-1)&&(a=h.shift()),e=h.join(r)}return{key:e,namespaces:L(a)?[a]:a}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:n}=this.extractFromKey(e[e.length-1],s),l=n[n.length-1],h=s.lng||this.language,p=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h&&h.toLowerCase()==="cimode"){if(p){const w=s.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${w}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const f=this.resolve(e,s);let d=f&&f.res;const g=f&&f.usedKey||o,m=f&&f.exactUsedKey||o,_=Object.prototype.toString.apply(d),x=["[object Number]","[object Function]","[object RegExp]"],F=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,T=!L(d)&&typeof d!="boolean"&&typeof d!="number";if(k&&d&&T&&x.indexOf(_)<0&&!(L(F)&&Array.isArray(d))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,d,{...s,ns:n}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(f.res=w,f.usedParams=this.getUsedParamsDetails(s),f):w}if(a){const w=Array.isArray(d),P=w?[]:{},K=w?m:g;for(const V in d)if(Object.prototype.hasOwnProperty.call(d,V)){const Z=`${K}${a}${V}`;P[V]=this.translate(Z,{...s,joinArrays:!1,ns:n}),P[V]===Z&&(P[V]=d[V])}d=P}}else if(k&&L(F)&&Array.isArray(d))d=d.join(F),d&&(d=this.extendTranslation(d,e,s,i));else{let w=!1,P=!1;const K=s.count!==void 0&&!L(s.count),V=fi.hasDefaultValue(s),Z=K?this.pluralResolver.getSuffix(h,s.count,s):"",ce=s.ordinal&&K?this.pluralResolver.getSuffix(h,s.count,{ordinal:!1}):"",B=K&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),X=B&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${Z}`]||s[`defaultValue${ce}`]||s.defaultValue;!this.isValidLookup(d)&&V&&(w=!0,d=X),this.isValidLookup(d)||(P=!0,d=o);const H=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&P?void 0:d,he=V&&X!==d&&this.options.updateMissing;if(P||w||he){if(this.logger.log(he?"updateKey":"missingKey",h,l,o,he?X:d),a){const z=this.resolve(o,{...s,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const Q=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Q&&Q[0])for(let z=0;z<Q.length;z++)I.push(Q[z]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(s.lng||this.language):I.push(s.lng||this.language);const G=(z,Ie,Be)=>{const gt=V&&Be!==d?Be:H;this.options.missingKeyHandler?this.options.missingKeyHandler(z,l,Ie,gt,he,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(z,l,Ie,gt,he,s),this.emit("missingKey",z,l,Ie,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&K?I.forEach(z=>{const Ie=this.pluralResolver.getSuffixes(z,s);B&&s[`defaultValue${this.options.pluralSeparator}zero`]&&Ie.indexOf(`${this.options.pluralSeparator}zero`)<0&&Ie.push(`${this.options.pluralSeparator}zero`),Ie.forEach(Be=>{G([z],o+Be,s[`defaultValue${Be}`]||X)})}):G(I,o,X))}d=this.extendTranslation(d,e,s,f,i),P&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(P||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?d:void 0):d=this.options.parseMissingKeyHandler(d))}return r?(f.res=d,f.usedParams=this.getUsedParamsDetails(s),f):d}extendTranslation(e,s,i,r,a){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const h=L(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(h){const d=e.match(this.interpolator.nestingRegexp);p=d&&d.length}let f=i.replace&&!L(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||r.usedLng,i),h){const d=e.match(this.interpolator.nestingRegexp),g=d&&d.length;p<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,g=new Array(d),m=0;m<d;m++)g[m]=arguments[m];return a&&a[0]===g[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):o.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,l=L(n)?[n]:n;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Fa.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,a,o,n;return L(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,s),p=h.key;r=p;let f=h.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const d=s.count!==void 0&&!L(s.count),g=d&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),m=s.context!==void 0&&(L(s.context)||typeof s.context=="number")&&s.context!=="",_=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);f.forEach(x=>{this.isValidLookup(i)||(n=x,!qr[`${_[0]}-${x}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(qr[`${_[0]}-${x}`]=!0,this.logger.warn(`key "${r}" for languages "${_.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),_.forEach(F=>{if(this.isValidLookup(i))return;o=F;const k=[p];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,p,F,x,s);else{let w;d&&(w=this.pluralResolver.getSuffix(F,s.count,s));const P=`${this.options.pluralSeparator}zero`,K=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(k.push(p+w),s.ordinal&&w.indexOf(K)===0&&k.push(p+w.replace(K,this.options.pluralSeparator)),g&&k.push(p+P)),m){const V=`${p}${this.options.contextSeparator}${s.context}`;k.push(V),d&&(k.push(V+w),s.ordinal&&w.indexOf(K)===0&&k.push(V+w.replace(K,this.options.pluralSeparator)),g&&k.push(V+P))}}let T;for(;T=k.pop();)this.isValidLookup(i)||(a=T,i=this.getResource(F,x,T,s))}))})}),{res:i,usedKey:r,exactUsedKey:a,usedLng:o,usedNS:n}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,r):this.resourceStore.getResource(e,s,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!L(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const a of s)delete r[a]}return r}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const Ii=t=>t.charAt(0).toUpperCase()+t.slice(1);class Gr{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Xe.create("languageUtils")}getScriptPartFromCode(e){if(e=pi(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=pi(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(L(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ii(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ii(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ii(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(s=r)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return s=r;s=this.options.supportedLngs.find(a=>{if(a===r)return a;if(!(a.indexOf("-")<0&&r.indexOf("-")<0)&&(a.indexOf("-")>0&&r.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===r||a.indexOf(r)===0&&r.length>1))return a})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),L(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),r=[],a=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return L(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):L(e)&&a(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&a(this.formatLanguageCode(o))}),r}}let Jo=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Zo={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const en=["v1","v2","v3"],tn=["v4"],Yr={zero:0,one:1,two:2,few:3,many:4,other:5},sn=()=>{const t={};return Jo.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:Zo[e.fc]}})}),t};class rn{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=Xe.create("pluralResolver"),(!this.options.compatibilityJSON||tn.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=sn(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=pi(e==="dev"?"en":e),r=s.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:i,type:r});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(i,{type:r})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[a]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${s}${r}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,a)=>Yr[r]-Yr[a]).map(r=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(s)}`:this.getSuffixRetroCompatible(r,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const a=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!en.includes(this.options.compatibilityJSON)}}const Qr=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=Bo(t,e,s);return!a&&r&&L(s)&&(a=Hi(t,s,i),a===void 0&&(a=Hi(e,s,i))),a},Di=t=>t.replace(/\$/g,"$$$$");class an{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Xe.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:r,prefix:a,prefixEscaped:o,suffix:n,suffixEscaped:l,formatSeparator:h,unescapeSuffix:p,unescapePrefix:f,nestingPrefix:d,nestingPrefixEscaped:g,nestingSuffix:m,nestingSuffixEscaped:_,nestingOptionsSeparator:x,maxReplaces:F,alwaysFormat:k}=e.interpolation;this.escape=s!==void 0?s:qo,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=a?Qt(a):o||"{{",this.suffix=n?Qt(n):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=p?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":p||"",this.nestingPrefix=d?Qt(d):g||Qt("$t("),this.nestingSuffix=m?Qt(m):_||Qt(")"),this.nestingOptionsSeparator=x||",",this.maxReplaces=F||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,r){let a,o,n;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=g=>{if(g.indexOf(this.formatSeparator)<0){const F=Qr(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(F,void 0,i,{...r,...s,interpolationkey:g}):F}const m=g.split(this.formatSeparator),_=m.shift().trim(),x=m.join(this.formatSeparator).trim();return this.format(Qr(s,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),x,i,{...r,...s,interpolationkey:_})};this.resetRegExp();const p=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,f=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Di(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Di(this.escape(g)):Di(g)}].forEach(g=>{for(n=0;a=g.regex.exec(e);){const m=a[1].trim();if(o=h(m),o===void 0)if(typeof p=="function"){const x=p(e,a,r);o=L(x)?x:""}else if(r&&Object.prototype.hasOwnProperty.call(r,m))o="";else if(f){o=a[0];continue}else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`),o="";else!L(o)&&!this.useRawValueToEscape&&(o=jr(o));const _=g.safeValue(o);if(e=e.replace(a[0],_),f?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=a[0].length):g.regex.lastIndex=0,n++,n>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,a,o;const n=(l,h)=>{const p=this.nestingOptionsSeparator;if(l.indexOf(p)<0)return l;const f=l.split(new RegExp(`${p}[ ]*{`));let d=`{${f[1]}`;l=f[0],d=this.interpolate(d,o);const g=d.match(/'/g),m=d.match(/"/g);(g&&g.length%2===0&&!m||m.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),h&&(o={...h,...o})}catch(_){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,_),`${l}${p}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!L(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let h=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const p=r[1].split(this.formatSeparator).map(f=>f.trim());r[1]=p.shift(),l=p,h=!0}if(a=s(n.call(this,r[1].trim(),o),o),a&&r[0]===e&&!L(a))return a;L(a)||(a=jr(a)),a||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),a=""),h&&(a=l.reduce((p,f)=>this.format(p,f,i.lng,{...i,interpolationkey:r[1].trim()}),a.trim())),e=e.replace(r[0],a),this.regexp.lastIndex=0}return e}}const on=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?s.currency||(s.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?s.range||(s.range=r.trim()):r.split(";").forEach(o=>{if(o){const[n,...l]=o.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),p=n.trim();s[p]||(s[p]=h),h==="false"&&(s[p]=!1),h==="true"&&(s[p]=!0),isNaN(h)||(s[p]=parseInt(h,10))}})}return{formatName:e,formatOptions:s}},Wt=t=>{const e={};return(s,i,r)=>{let a=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(a={...a,[r.interpolationkey]:void 0});const o=i+JSON.stringify(a);let n=e[o];return n||(n=t(pi(i),r),e[o]=n),n(s)}};class nn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Xe.create("formatter"),this.options=e,this.formats={number:Wt((s,i)=>{const r=new Intl.NumberFormat(s,{...i});return a=>r.format(a)}),currency:Wt((s,i)=>{const r=new Intl.NumberFormat(s,{...i,style:"currency"});return a=>r.format(a)}),datetime:Wt((s,i)=>{const r=new Intl.DateTimeFormat(s,{...i});return a=>r.format(a)}),relativetime:Wt((s,i)=>{const r=new Intl.RelativeTimeFormat(s,{...i});return a=>r.format(a,i.range||"day")}),list:Wt((s,i)=>{const r=new Intl.ListFormat(s,{...i});return a=>r.format(a)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=Wt(s)}format(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=s.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find(n=>n.indexOf(")")>-1)){const n=a.findIndex(l=>l.indexOf(")")>-1);a[0]=[a[0],...a.splice(1,n)].join(this.formatSeparator)}return a.reduce((n,l)=>{const{formatName:h,formatOptions:p}=on(l);if(this.formats[h]){let f=n;try{const d=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},g=d.locale||d.lng||r.locale||r.lng||i;f=this.formats[h](n,g,{...p,...r,...d})}catch(d){this.logger.warn(d)}return f}else this.logger.warn(`there was no format function for ${h}`);return n},e)}}const ln=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class cn extends ki{constructor(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Xe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,s,i,r){const a={},o={},n={},l={};return e.forEach(h=>{let p=!0;s.forEach(f=>{const d=`${h}|${f}`;!i.reload&&this.store.hasResourceBundle(h,f)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,p=!1,o[d]===void 0&&(o[d]=!0),a[d]===void 0&&(a[d]=!0),l[f]===void 0&&(l[f]=!0)))}),p||(n[h]=!0)}),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const r=e.split("|"),a=r[0],o=r[1];s&&this.emit("failedLoading",a,o,s),!s&&i&&this.store.addResourceBundle(a,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const n={};this.queue.forEach(l=>{Ko(l.loaded,[a],o),ln(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{n[h]||(n[h]={});const p=l.loaded[h];p.length&&p.forEach(f=>{n[h][f]===void 0&&(n[h][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",n),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:r,wait:a,callback:o});return}this.readingCalls++;const n=(h,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(h&&p&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,r+1,a*2,o)},a);return}o(h,p)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,s);h&&typeof h.then=="function"?h.then(p=>n(null,p)).catch(n):n(null,h)}catch(h){n(h)}return}return l(e,s,n)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();L(e)&&(e=this.languageUtils.toResolveHierarchy(e)),L(s)&&(s=[s]);const a=this.queueLoad(e,s,i,r);if(!a.toLoad.length)return a.pending.length||r(),null;a.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],a=i[1];this.read(r,a,"read",void 0,void 0,(o,n)=>{o&&this.logger.warn(`${s}loading namespace ${a} for language ${r} failed`,o),!o&&n&&this.logger.log(`${s}loaded namespace ${a} for language ${r}`,n),this.loaded(e,o,n)})}saveMissing(e,s,i,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:a},h=this.backend.create.bind(this.backend);if(h.length<6)try{let p;h.length===5?p=h(e,s,i,r,l):p=h(e,s,i,r),p&&typeof p.then=="function"?p.then(f=>n(null,f)).catch(n):n(null,p)}catch(p){n(p)}else h(e,s,i,r,n,l)}!e||!e[0]||this.store.addResource(e[0],s,i,r)}}}const Wr=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),L(t[1])&&(e.defaultValue=t[1]),L(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Xr=t=>(L(t.ns)&&(t.ns=[t.ns]),L(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),L(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Zs=()=>{},dn=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class Ls extends ki{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Xr(e),this.services={},this.logger=Xe,this.modules={external:[]},dn(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(L(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const r=Wr();this.options={...r,...this.options,...Xr(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const a=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?Xe.init(a(this.modules.logger),this.options):Xe.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=nn);const f=new Gr(this.options);this.store=new Hr(this.options.resources,this.options);const d=this.services;d.logger=Xe,d.resourceStore=this.store,d.languageUtils=f,d.pluralResolver=new rn(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(d.formatter=a(p),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new an(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new cn(a(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(g){for(var m=arguments.length,_=new Array(m>1?m-1:0),x=1;x<m;x++)_[x-1]=arguments[x];e.emit(g,..._)}),this.modules.languageDetector&&(d.languageDetector=a(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=a(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new fi(this.services,this.options),this.translator.on("*",function(g){for(var m=arguments.length,_=new Array(m>1?m-1:0),x=1;x<m;x++)_[x-1]=arguments[x];e.emit(g,..._)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Zs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=function(){return e.store[p](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=function(){return e.store[p](...arguments),e}});const l=_s(),h=()=>{const p=(f,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(f,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initImmediate?h():setTimeout(h,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zs;const r=L(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],o=n=>{if(!n||n==="cimode")return;this.services.languageUtils.toResolveHierarchy(n).forEach(h=>{h!=="cimode"&&a.indexOf(h)<0&&a.push(h)})};r?o(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(n=>o(n)),this.services.backendConnector.load(a,this.options.ns,n=>{!n&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(n)})}else i(null)}reloadResources(e,s,i){const r=_s();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=Zs),this.services.backendConnector.reload(e,s,a=>{r.resolve(),i(a)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Fa.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const r=_s();this.emit("languageChanging",e);const a=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,h)=>{h?(a(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},n=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const h=L(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||a(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(h)),this.loadResources(h,p=>{o(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),r}getFixedT(e,s,i){var r=this;const a=function(o,n){let l;if(typeof n!="object"){for(var h=arguments.length,p=new Array(h>2?h-2:0),f=2;f<h;f++)p[f-2]=arguments[f];l=r.options.overloadTranslationOptionHandler([o,n].concat(p))}else l={...n};l.lng=l.lng||a.lng,l.lngs=l.lngs||a.lngs,l.ns=l.ns||a.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||a.keyPrefix);const d=r.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(o)?g=o.map(m=>`${l.keyPrefix}${d}${m}`):g=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,r.t(g,l)};return L(e)?a.lng=e:a.lngs=e,a.ns=s,a.keyPrefix=i,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(n,l)=>{const h=this.services.backendConnector.state[`${n}|${l}`];return h===-1||h===0||h===2};if(s.precheck){const n=s.precheck(this,o);if(n!==void 0)return n}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(a,e)))}loadNamespaces(e,s){const i=_s();return this.options.ns?(L(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),s&&s(r)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=_s();L(e)&&(e=[e]);const r=this.options.preload||[],a=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return a.length?(this.options.preload=r.concat(a),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Gr(Wr());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Ls(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},a=new Ls(r);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(n=>{a[n]=this[n]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},i&&(a.store=new Hr(this.store.data,r),a.services.resourceStore=a.store),a.translator=new fi(a.services,r),a.translator.on("*",function(n){for(var l=arguments.length,h=new Array(l>1?l-1:0),p=1;p<l;p++)h[p-1]=arguments[p];a.emit(n,...h)}),a.init(r,s),a.translator.options=r,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ye=Ls.createInstance();ye.createInstance=Ls.createInstance;ye.createInstance;ye.dir;ye.init;ye.loadResources;ye.reloadResources;ye.use;ye.changeLanguage;ye.getFixedT;ye.t;ye.exists;ye.setDefaultNamespace;ye.hasLoadedNamespace;ye.loadNamespaces;ye.loadLanguages;const Oa=["__proto__","constructor","prototype"];function Ta(t){return!(typeof t!="string"||t.length===0||t.length>128||Oa.indexOf(t)>-1||t.indexOf("..")>-1||t.indexOf("\\")>-1||/[?#%\s@]/.test(t)||/[\x00-\x1F\x7F]/.test(t))}function La(t){return!(!Ta(t)||t.indexOf("/")>-1)}function hn(t){return Ta(t)}const pn={lng:La,ns:hn};function ei(t){return typeof t!="string"?t:t.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function un(t){if(typeof t!="string"||t.length===0)return t;try{const e=new URL(t);return e.username||e.password?(e.username="",e.password="",e.toString()):t}catch{return t.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function Pa(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function fn(t){return!!t&&typeof t.then=="function"}function gn(t){return fn(t)?t:Promise.resolve(t)}const vn=/\{\{(.+?)\}\}/g;function Jr(t,e){let s=!1;const i=t.replace(vn,(r,a)=>{const o=a.trim();if(Oa.indexOf(o)>-1)return r;const n=e[o];if(n==null)return r;const l=pn[o]||La,h=String(n).split("+");for(const p of h)if(!l(p))return s=!0,r;return h.join("+")});return s?null:i}const Dt=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let gi;typeof fetch=="function"?gi=fetch:Dt&&typeof Dt.fetch=="function"&&(gi=Dt.fetch);const Zr=Pa()&&Dt?Dt.XMLHttpRequest:void 0,mn=typeof ActiveXObject=="function"&&Dt?Dt.ActiveXObject:void 0,Ma=["__proto__","constructor","prototype"],qi=(t,e)=>{if(e&&typeof e=="object"){let s="";for(const i of Object.keys(e))Ma.indexOf(i)>-1||(s+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!s)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+s.slice(1)}return t},ea=(t,e,s,i)=>{const r=a=>{if(!a.ok)return s(a.statusText||"Error",{status:a.status});a.text().then(o=>{s(null,{status:a.status,data:o})}).catch(s)};if(i){const a=i(t,e);if(a instanceof Promise){a.then(r).catch(s);return}}typeof fetch=="function"?fetch(t,e).then(r).catch(s):gi(t,e).then(r).catch(s)},bn=(t,e,s,i)=>{t.queryStringParams&&(e=qi(e,t.queryStringParams));const r={...typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),s&&(r["Content-Type"]="application/json");const a=typeof t.requestOptions=="function"?t.requestOptions(s):t.requestOptions,o={method:s?"POST":"GET",body:s?t.stringify(s):void 0,headers:r,...t._omitFetchOptions?{}:a},n=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{ea(e,o,i,n)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(h=>{delete o[h]}),ea(e,o,i,n),t._omitFetchOptions=!0}catch(h){i(h)}}},xn=(t,e,s,i)=>{s&&typeof s=="object"&&(s=qi("",s).slice(1)),t.queryStringParams&&(e=qi(e,t.queryStringParams));try{const r=Zr?new Zr:new mn("MSXML2.XMLHTTP.3.0");r.open(s?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,s&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(const o of Object.keys(a))Ma.indexOf(o)>-1||r.setRequestHeader(o,a[o]);r.onreadystatechange=()=>{r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(s)}catch(r){console&&console.log(r)}},_n=(t,e,s,i)=>{if(typeof s=="function"&&(i=s,s=void 0),i=i||(()=>{}),gi&&e.indexOf("file:")!==0)return bn(t,e,s,i);if(Pa()||typeof ActiveXObject=="function")return xn(t,e,s,i);i(new Error("No fetch and no xhr implementation found!"))},yn=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:t=>JSON.parse(t),stringify:JSON.stringify,parsePayload:(t,e,s)=>({[e]:s||""}),parseLoadPayload:(t,e)=>{},request:_n,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var Ia=class{constructor(t,e={},s={}){this.services=t,this.options=e,this.allOptions=s,this.type="backend",this.init(t,e,s)}init(t,e={},s={}){if(this.services=t,this.options={...yn(),...this.options||{},...e},this.allOptions=s,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(t,e,s){this._readAny(t,t,e,e,s)}read(t,e,s){this._readAny([t],t,[e],e,s)}_readAny(t,e,s,i,r){let a=this.options.loadPath;typeof this.options.loadPath=="function"&&(a=this.options.loadPath(t,s)),a=gn(a),a.then(o=>{if(!o)return r(null,{});const n=Jr(o,{lng:t.join("+"),ns:s.join("+")});if(n==null){const l=t.map(ei).join(", "),h=s.map(ei).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+h+"]"),!1)}this.loadUrl(n,r,e,i)})}loadUrl(t,e,s,i){const r=typeof s=="string"?[s]:s,a=typeof i=="string"?[i]:i,o=this.options.parseLoadPayload(r,a),n=ei(un(t));this.options.request(this.options,t,o,(l,h)=>{if(h&&(h.status>=500&&h.status<600||!h.status))return e("failed loading "+n+"; status code: "+h.status,!0);if(h&&h.status>=400&&h.status<500)return e("failed loading "+n+"; status code: "+h.status,!1);if(!h&&l&&l.message){const d=l.message.toLowerCase();if(["failed","fetch","network","load"].find(g=>d.indexOf(g)>-1))return e("failed loading "+n+": "+ei(l.message),!0)}if(l)return e(l,!1);let p,f;try{typeof h.data=="string"?p=this.options.parse(h.data,s,i):p=h.data}catch{f="failed parsing "+n+" to json"}if(f)return e(f,!1);e(null,p)})}create(t,e,s,i,r){if(!this.options.addPath)return;typeof t=="string"&&(t=[t]);const a=this.options.parsePayload(e,s,i);let o=0;const n=[],l=[];t.forEach(h=>{let p=this.options.addPath;typeof this.options.addPath=="function"&&(p=this.options.addPath(h,e));const f=Jr(p,{lng:h,ns:e});if(f==null){o+=1,r&&o===t.length&&r(n,l);return}this.options.request(this.options,f,a,(d,g)=>{o+=1,n.push(d),l.push(g),o===t.length&&typeof r=="function"&&r(n,l)})})}reload(){const{backendConnector:t,languageUtils:e,logger:s}=this.services,i=t.language;if(i&&i.toLowerCase()==="cimode")return;const r=[],a=o=>{e.toResolveHierarchy(o).forEach(n=>{r.indexOf(n)<0&&r.push(n)})};a(i),this.allOptions.preload&&this.allOptions.preload.forEach(o=>a(o)),r.forEach(o=>{this.allOptions.ns.forEach(n=>{t.read(o,n,"read",null,null,(l,h)=>{l&&s.warn(`loading namespace ${n} for language ${o} failed`,l),!l&&h&&s.log(`loaded namespace ${n} for language ${o}`,h),t.loaded(`${o}|${n}`,l,h)})})})}};Ia.type="backend";const $n="https://i18n-fastly.ultrafast.io";function wn(t){const e=t.cdnUrl??$n;let s=null;const i=new Set,r=()=>{for(const p of i)p()},a=p=>(i.add(p),()=>i.delete(p));async function o(p="en"){return s?(s.language!==p&&(await s.changeLanguage(p),r()),{i18n:s,isNew:!1}):(s=ye.createInstance(),await s.use(Ia).init({lng:p,fallbackLng:"en",ns:[t.namespace],defaultNS:t.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${t.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(f,d){var _;const g=JSON.parse(f),m=Array.isArray(d)?d[0]:d;return m&&((_=g[m])!=null&&_.__without_namespace)?g[m].__without_namespace:g}}}),s.on("languageChanged",r),s.on("loaded",r),r(),{i18n:s,isNew:!0})}const n=()=>s,l=(p,f,d)=>!s||!s.isInitialized?Ur(p,f,d):typeof f=="string"?s.t(p,f,d??{}):s.t(p,f??{});class h{constructor(f){this._unsubscribe=null,this._host=f,f.addController(this)}hostConnected(){this._unsubscribe=a(()=>this._host.requestUpdate())}hostDisconnected(){var f;(f=this._unsubscribe)==null||f.call(this),this._unsubscribe=null}}return{initI18n:o,getInstance:n,onChange:a,t:l,fallbackT:Ur,I18nController:h}}function kn(t){const{lsKey:e,namespace:s,gridUuid:i,prodUrl:r,logPrefix:a}=t,o=typeof localStorage<"u"&&localStorage.getItem(e)==="true",n={};let l=null;const h=2e3;o&&console.log(`%c${a} TranslationMissingKeysHelper enabled`,"font-weight:600;");const p=()=>{console.group(`${a} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...n}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${r}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(n).map(([f,{value:d,ns:g}])=>({key:g&&f.startsWith(`${g}:`)?f.slice(g.length+1):f,lang:"en",default:d}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(f,d="",g=s){o&&(n[`${g}:${f}`]={value:d,ns:g},l&&clearTimeout(l),l=setTimeout(p,h))}}}const Da="a656ff82-0270-46dc-8de8-c734318d841d",Sn="https://i18n-fastly.ultrafast.io",Cn="https://neo.wordplex.io",Ra="asset-picker",An=wn({gridUuid:Da,namespace:Ra,cdnUrl:Sn}),En=An.initI18n,Fn=kn({lsKey:"apTranslationsMissingKeysEnabled",namespace:Ra,gridUuid:Da,prodUrl:Cn,logPrefix:"[asset-picker]"});class On{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Tn(t){return"extension"in t&&!("path"in t)}class Ln{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_wouldExceedMax(e){var i;const s=(i=this.store.getState().config)==null?void 0:i.maxSelections;return!!s&&e>s}_applyRangeSelection(e,s,i,r){const a=this.store.getState(),o=this._getCombinedList();for(let n=e;n<=s;n++){const l=o[n];l&&(Tn(l)?a.disabledAssetIds.has(l.uuid)||i.set(l.uuid,l):a.disabledFolderIds.has(l.uuid)||r.set(l.uuid,l))}}handleSelect(e,s,i){var n;const r=this.store.getState();if(r.disabledAssetIds.has(e.uuid))return;const a=new Map(r.selectedAssets);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){a.clear(),a.set(e.uuid,e),this.store.setState({selectedAssets:a,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const l=Math.min(this.lastClickedIndex,s),h=Math.max(this.lastClickedIndex,s),p=new Map(r.selectedFolders);if(this._applyRangeSelection(l,h,a,p),this._wouldExceedMax(a.size+p.size))return;this.store.setState({selectedAssets:a,selectedFolders:p})}else{const l=Math.min(this.lastClickedIndex,s),h=Math.max(this.lastClickedIndex,s),p=r.assets;for(let f=l;f<=h;f++)p[f]&&!r.disabledAssetIds.has(p[f].uuid)&&a.set(p[f].uuid,p[f]);if(this._wouldExceedMax(a.size))return;this.store.setState({selectedAssets:a})}else if(i.metaKey||i.ctrlKey){a.has(e.uuid)?a.delete(e.uuid):a.set(e.uuid,e);const l=a.size+(this._folderSelectionEnabled?r.selectedFolders.size:0);if(this._wouldExceedMax(l))return;this.store.setState({selectedAssets:a})}else a.clear(),a.set(e.uuid,e),this.store.setState({selectedAssets:a,selectedFolders:new Map});this.lastClickedIndex=s}selectAsset(e,s){var n;const i=this.store.getState();if(i.disabledAssetIds.has(e.uuid))return!1;if(i.selectedAssets.has(e.uuid))return!0;if(!(((n=i.config)==null?void 0:n.multiSelect)??!0)){const l=new Map([[e.uuid,e]]);return this.store.setState({selectedAssets:l,selectedFolders:new Map}),s!==void 0&&(this.lastClickedIndex=s),!0}const a=new Map(i.selectedAssets);a.set(e.uuid,e);const o=a.size+(this._folderSelectionEnabled?i.selectedFolders.size:0);return this._wouldExceedMax(o)?!1:(this.store.setState({selectedAssets:a}),s!==void 0&&(this.lastClickedIndex=s),!0)}handleFolderSelect(e,s,i){var n;if(!this._folderSelectionEnabled)return;const r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;const a=new Map(r.selectedFolders);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){a.clear(),a.set(e.uuid,e),this.store.setState({selectedFolders:a,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const l=Math.min(this.lastClickedIndex,s),h=Math.max(this.lastClickedIndex,s),p=new Map(r.selectedAssets);if(this._applyRangeSelection(l,h,p,a),this._wouldExceedMax(p.size+a.size))return;this.store.setState({selectedAssets:p,selectedFolders:a})}else if(i.metaKey||i.ctrlKey){a.has(e.uuid)?a.delete(e.uuid):a.set(e.uuid,e);const l=a.size+r.selectedAssets.size;if(this._wouldExceedMax(l))return;this.store.setState({selectedFolders:a})}else a.clear(),a.set(e.uuid,e),this.store.setState({selectedFolders:a,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,r=this._folderSelectionEnabled?s.selectedFolders.size:0,a=e.filter(h=>!s.disabledAssetIds.has(h.uuid)),o=new Map,n=i?Math.max(0,Math.min(a.length,i-r)):a.length;for(let h=0;h<n;h++)o.set(a[h].uuid,a[h]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,r=e.filter(l=>!s.disabledFolderIds.has(l.uuid)),a=new Map,o=i?Math.max(0,Math.min(r.length,i-s.selectedAssets.size)):r.length;for(let l=0;l<o;l++)a.set(r[l].uuid,r[l]);this.store.setState({selectedFolders:a})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}const ta=5,Xt=40,sa=15;class rr{constructor(e,s){this.host=e,this.options=s,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarquee=new Set,this.dragging=!1,this.scrollRAF=null,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null,this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.container!==e&&(this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown))}detach(){var e,s;(e=this.container)==null||e.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),(s=this.container)==null||s.classList.remove("marqueeing"),this.container=void 0,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null}isInteractiveTarget(e){return this.options.isInteractiveTarget?this.options.isInteractiveTarget(e):e.composedPath().some(s=>s instanceof HTMLElement?s instanceof HTMLButtonElement||s instanceof HTMLInputElement||s instanceof HTMLAnchorElement?!0:s.hasAttribute("data-uuid")||s.tagName==="TR"||s.tagName==="TABLE":!1)}onMouseDown(e){if(e.button!==0||!this.container||this.isInteractiveTarget(e))return;const s=this.container.getBoundingClientRect();this.startX=e.clientX-s.left+this.container.scrollLeft,this.startY=e.clientY-s.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this.preMarquee=new Set(this.options.getSelection(e)),this.dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this.dragging){const i=Math.abs(e.clientX-this.startClientX),r=Math.abs(e.clientY-this.startClientY);if(i<ta&&r<ta)return;this.dragging=!0,this.isActive=!0,this.container.classList.add("marqueeing"),document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.cacheCards()}this.lastMouseEvent=e,this.updateRect(e),this.maybeAutoScroll(e)}}updateRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,r=e.clientY-s.top+this.container.scrollTop;let a=Math.min(this.startX,i),o=Math.min(this.startY,r),n=Math.abs(i-this.startX),l=Math.abs(r-this.startY);a<0&&(n+=a,a=0),o<0&&(l+=o,o=0),a+n>this.container.scrollWidth&&(n=this.container.scrollWidth-a),o+l>this.container.scrollHeight&&(l=this.container.scrollHeight-o),this.rect={x:a,y:o,width:n,height:l},this.applyBoxStyle(),this.selectIntersecting()}maybeAutoScroll(e){if(!this.container||this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top<Xt||s.bottom-e.clientY<Xt;i&&this.scrollRAF==null?this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):i||this.stopAutoScroll()}autoScrollTick(){if(this.scrollRAF=null,!this.container||!this.dragging||!this.lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this.lastMouseEvent,i=s.clientY-e.top,r=e.bottom-s.clientY;let a=0;i<Xt?a=-sa*(1-i/Xt):r<Xt&&(a=sa*(1-r/Xt)),a!==0&&(this.container.scrollTop+=a,this.updateRect(s),this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this.scrollRAF!=null&&(cancelAnimationFrame(this.scrollRAF),this.scrollRAF=null)}onMouseUp(){var e;document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this.lastMouseEvent=null,this.dragging&&(this.dragging=!1,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.cardRects=[],this.appliedSelection=null,(e=this.container)==null||e.classList.remove("marqueeing"),this.host.requestUpdate())}cacheCards(){if(!this.container)return;const e=this.container.getBoundingClientRect(),s=this.container.scrollLeft,i=this.container.scrollTop;this.cardRects=[];for(const{uuid:r,el:a}of this.options.queryCards(this.container)){if(!r)continue;const o=a.getBoundingClientRect();this.cardRects.push({uuid:r,x:o.left-e.left+s,y:o.top-e.top+i,w:o.width,h:o.height})}}applyBoxStyle(){var s;const e=(s=this.container)==null?void 0:s.querySelector(".marquee-box");if(!e){this.host.requestUpdate();return}e.style.left=`${this.rect.x}px`,e.style.top=`${this.rect.y}px`,e.style.width=`${this.rect.width}px`,e.style.height=`${this.rect.height}px`}static sameSet(e,s){if(!s||e.size!==s.size)return!1;for(const i of e)if(!s.has(i))return!1;return!0}selectIntersecting(){const e=new Set(this.preMarquee),{x:s,y:i,width:r,height:a}=this.rect;for(const o of this.cardRects)s<o.x+o.w&&s+r>o.x&&i<o.y+o.h&&i+a>o.y&&e.add(o.uuid);rr.sameSet(e,this.appliedSelection)||(this.appliedSelection=e,this.options.setSelection(e))}}class Pn{constructor(e,s){this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s,i="200px"){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(r=>{var a;(a=r[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:i}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const Mn="https://api.filerobot.com",In=3e4,Dn=2,Rn=400;function zn(t){return t===404||t===408||t===429||t>=500}const Nn=t=>new Promise(e=>setTimeout(e,t));function za(t,e){return`${(e||Mn).replace(/\/+$/,"")}/${t}`}async function Un(t,e,s,i={}){const r=`${za(t,s)}/key/${encodeURIComponent(e)}`,a=i.retries??Dn,o=i.retryDelayMs??Rn;let n=new Error("SASS key exchange failed");for(let l=0;l<=a;l++){l>0&&await Nn(o*l);const h=new AbortController,p=setTimeout(()=>h.abort(),In);try{const f=await fetch(r,{signal:h.signal,cache:"no-store"});if(clearTimeout(p),!f.ok){if(n=new Error(`SASS key exchange failed (HTTP ${f.status})`),zn(f.status)&&l<a)continue;throw n}const d=await f.json();if(d.status==="error")throw new Error(`SASS key exchange failed: ${d.msg||"Unknown error"}`);return d.key}catch(f){if(clearTimeout(p),f instanceof DOMException&&f.name==="AbortError")throw new Error("SASS key exchange timed out");if(f instanceof TypeError&&l<a){n=f;continue}throw f}}throw n}function ia(t,e){const s={};switch(t.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");s["X-Filerobot-Key"]=e;break;case"sass-key":s["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(s["X-Filerobot-Airbox-Puid"]=t.airboxPuid),s}function jn(t){return t.mode==="securityTemplate"||t.mode==="sassKey"}function Vn(t){return jn(t)?t.mode==="securityTemplate"?{mode:"security-template",container:t.projectToken,securityTemplateId:t.securityTemplateKey,airboxPuid:t.airboxPuid}:{mode:"sass-key",container:t.projectToken,sassKey:t.sassKey,airboxPuid:t.airboxPuid}:t}async function ra(t,e){const s=Vn(t),i=za(s.container,e);if(s.mode==="security-template"){const r=await Un(s.container,s.securityTemplateId,e);return{apiBase:i,headers:ia(s,r),sassKey:r}}return{apiBase:i,headers:ia(s)}}const Kn=3e4;class ar{constructor(e,s,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=s,this.apiDomain=i}static async create(e,s){const i=await ra(e,s);return new ar(i,e,s)}get(e,s){const i=new URL(`${this.baseUrl}${e}`);if(s)for(const[r,a]of Object.entries(s))a!=null&&i.searchParams.set(r,Array.isArray(a)?a.join(","):String(a));return this.send(i,{method:"GET"})}post(e,s){return this.sendJson("POST",e,s)}put(e,s){return this.sendJson("PUT",e,s)}delete(e,s){return this.sendJson("DELETE",e,s)}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,s,i){return this.send(new URL(`${this.baseUrl}${s}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,s,i=!1){var o;const r=new AbortController,a=setTimeout(()=>r.abort(),Kn);try{const n=await fetch(e.toString(),{...s,headers:{...this.headers,...s.headers},signal:r.signal});if(clearTimeout(a),n.status===401&&!i&&((o=this.auth)==null?void 0:o.mode)==="security-template"){const p=await ra(this.auth,this.apiDomain);return this.headers=p.headers,this.send(e,s,!0)}if(!n.ok){let p=`API error: ${n.status} ${n.statusText}`;try{const f=await n.json();f!=null&&f.msg&&(p=`API error: ${n.status} - ${f.msg}`)}catch{}throw new Error(p)}if(n.status===204)return;const l=await n.text();if(!l)return;const h=JSON.parse(l);if((h==null?void 0:h.status)==="error")throw new Error(`API error: ${h.msg||"Unknown error"}`);return h}catch(n){throw clearTimeout(a),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}}function Bn(t){const e=t.path??t.name,s=e.replace(/\/[^/]*$/,"")||"/";return{uuid:t.uuid,name:t.name.split("/").pop()||t.name,path:e,parentPath:s,createdAt:t.created_at,modifiedAt:t.modified_at}}async function Hn(t,e,s){const i=s.replace(/\/+$/,""),r=i?`${i}/${e}`:`/${e}`,a=await t.post("/folders",{name:r});if(a.status!=="success"||!a.folder)throw new Error(a.msg||"Failed to create folder");return Bn(a.folder)}async function qn(t){return(await t.get("/labels")).labels??[]}function or(t,e){try{const s=new URL(t);return s.searchParams.set("p",e),s.toString()}catch{return t}}function Gn(t){return Array.isArray(t)?t.map(e=>typeof e=="string"?{name:e}:e&&typeof e.name=="string"?{name:e.name,desc:e.desc}:null).filter(e=>e!==null):[]}async function aa(t){var i,r,a;const e=await t.get("/settings"),s=(e==null?void 0:e.presets)??((i=e==null?void 0:e.cloudimg)==null?void 0:i.presets)??((a=(r=e==null?void 0:e.settings)==null?void 0:r.cloudimg)==null?void 0:a.presets)??void 0;return Gn(s)}const Yn=["cdn_permalink"],Na={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};function Qn(t){let e=t.fields??Yn;t.permalinksEnabled||(e=e.filter(o=>o!=="cdn_permalink"));const s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",r=t.sort_direction??"desc";s.sort=`${Na[i]||i}:${r}`,t.folder&&(s.folder=t.folder);const a=[];return t.search&&!t.with_ai&&a.push(t.search),t.q&&a.push(t.q),a.length>0&&(s.q=a.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}function Ft(t,e){return t.get("/files",Qn(e))}function ti(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.get("/files/stats",s)}function Wn(t,e={}){const s={recursive:e.recursive??0,folder:e.folderPath??"/",limit:e.limit??1e3,offset:e.offset??0};e.q&&(s.q=e.q);const i=e.sort_by??"created_at",r=e.sort_direction??"asc";return s.sort=`${Na[i]||i}:${r}`,t.get("/folders",s)}async function Xn(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}const y="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Jn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',rt=`data:image/svg+xml,${encodeURIComponent(Jn)}`,Gi={_default:y+"GENERIC.svg?vh=9a518a",png:y+"PNG.svg?vh=96cd9a",jpg:y+"JPG.svg?vh=06e819",jpg2:y+"JPG2.svg?vh=f0eb7f",jpeg:y+"JPEG.svg?vh=6a65e9",gif:y+"GIF.svg?vh=c3c2c3",bmp:y+"BMP.svg?vh=d2243a",webp:y+"WEBP.svg?vh=fedd74",svg:y+"SVG.svg?vh=a15e46",tiff:y+"TIFF.svg?vh=1f30c3",tif:y+"TIF.svg?vh=b383c9",heic:y+"HEIC.svg?vh=84adfe",avif:y+"AVIF.svg?vh=536b30",ico:y+"ICO.svg?vh=79063d",psd:y+"PSD.svg?vh=be6140",psb:y+"PSB.svg?vh=678646",ai:y+"AI.svg?vh=84b254",dwg:y+"DWG.svg?vh=971fb3",mp4:y+"MP4.svg?vh=42f175",webm:y+"WEBM.svg?vh=26a84a",avi:y+"AVI.svg?vh=d22ba8",mpeg:y+"MPEG.svg?vh=ba93bb",ogv:y+"OGV.svg?vh=74d453","3gp":y+"3GP.svg?vh=f0d388","3g2":y+"3G2.svg?vh=04c652",swf:y+"SWF.svg?vh=3955e2",fla:y+"FLA.svg?vh=daf585",m3u8:y+"M3U8.svg?vh=7d5e62",mp3:y+"MP3.svg?vh=66bbef",wav:y+"WAV.svg?vh=d7a7d5",aac:y+"AAC.svg?vh=07f3f9",oga:y+"OGA.svg?vh=a5c622",opus:y+"OPUS.svg?vh=9548b1",weba:y+"WEBA.svg?vh=4dcf70",mid:y+"MID.svg?vh=3f0e29",midi:y+"MIDI.svg?vh=9fedec",cda:y+"CDA.svg?vh=85b83b",pdf:y+"PDF.svg?vh=18c5f7",doc:y+"DOC.svg?vh=d1b47c",docx:y+"DOCX.svg?vh=1eb6b0",txt:y+"TXT.svg?vh=307979",rtf:y+"RTF.svg?vh=978c5f",xls:y+"XLS.svg?vh=13b5f7",xlsx:y+"XLSX.svg?vh=79d64a",ppt:y+"PPT.svg?vh=4ee29b",pptx:y+"PPTX.svg?vh=8b1568",csv:y+"CSV.svg?vh=4add78",odt:y+"ODT.svg?vh=940781",ods:y+"ODS.svg?vh=9fbe9a",odp:y+"ODP.svg?vh=bf892d",dbf:y+"DBF.svg?vh=457bd4",vsd:y+"VSD.svg?vh=8a9ccb",abw:y+"ABW.svg?vh=313dc7",epub:y+"EPUB.svg?vh=15263d",azw:y+"AZW.svg?vh=a018b1",ics:y+"ICS.svg?vh=909f63",ogx:y+"OGX.svg?vh=f694d2",zip:y+"ZIP.svg?vh=84f98b",rar:y+"RAR.svg?vh=1d6423","7z":y+"7Z.svg?vh=e007e5",tar:y+"TAR.svg?vh=603aed",gz:y+"GZ.svg?vh=de13f7",bz:y+"BZ.svg?vh=0374ff",bz2:y+"BZ2.svg?vh=e14294",arc:y+"ARC.svg?vh=942fad",jar:y+"JAR.svg?vh=149796",mpkg:y+"MPKG.svg?vh=dea655",ttf:y+"TTF.svg?vh=d2e2c1",otf:y+"OTF.svg?vh=c904fd",woff:y+"WOFF.svg?vh=4b8177",woff2:y+"WOFF2.svg?vh=b532d3",eot:y+"EOT.svg?vh=a54980",js:y+"JS.svg?vh=524691",mjs:y+"MJS.svg?vh=d57921",ts:y+"TS.svg?vh=9af3ae",css:y+"CSS.svg?vh=287863",html:y+"HTML.svg?vh=fa7a87",htm:y+"HTM.svg?vh=21323d",xhtml:y+"XHTML.svg?vh=e6d6a9",xul:y+"XUL.svg?vh=6c9c71",json:y+"JSON.svg?vh=104c9e",jsonld:y+"JSONLD.svg?vh=f30c0f",xml:y+"XML.svg?vh=7f7194",php:y+"PHP.svg?vh=503e36",sh:y+"SH.svg?vh=3b820e",csh:y+"CSH.svg?vh=08c0cc",exe:y+"EXE.svg?vh=ccca53",iso:y+"ISO.svg?vh=064b8f",bin:y+"BIN.svg?vh=1e9618",glb:rt,gltf:rt,obj:rt,fbx:rt,stl:rt,usdz:rt,ply:rt,"3ds":rt,dae:rt};function ss(){return Gi._default}function Gs(t){const e=(t.split(".").pop()||"").toLowerCase();return Gi[e]||Gi._default}function Zn(t,e){let s;const i=((...r)=>{clearTimeout(s),s=setTimeout(()=>t(...r),e)});return i.cancel=()=>clearTimeout(s),i}async function el(t){return t.get("/collections")}async function tl(t,e){return t.get(`/collections/${e}/folders`)}function Ua(t){return t.filter(e=>!!e.name).map(e=>({...e,children:Ua(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function sl(t){return((await t.get("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,r)=>i.label.localeCompare(r.label))}async function il(t){return await t.get("/public/settings")}const rl=3e4;async function al(t,e){const s=`${e}/key/${t.securityTemplateKey}`,i=new AbortController,r=setTimeout(()=>i.abort(),rl);try{const a=await fetch(s,{headers:{"X-Filerobot-Key":t.securityTemplateKey},signal:i.signal});if(clearTimeout(r),!a.ok){let n=`API error: ${a.status} ${a.statusText}`;try{const l=await a.json();l.msg&&(n=`API error: ${a.status} - ${l.msg}`)}catch{}throw new Error(n)}const o=await a.json();if(o.status==="error")throw new Error(`API error: ${o.msg||"Unknown error"}`);return{key:o.key,permissions:o.permissions??[]}}catch(a){throw clearTimeout(r),a instanceof DOMException&&a.name==="AbortError"?new Error("API request timed out"):a}}function ol(t,e){return t?t.includes(e):!1}const nl={FOLDER_CREATE:"DIR_CREATE"};function ll(t){var r,a;const e=(r=t.info)==null?void 0:r.playlists;if(!(e!=null&&e.length))return null;const s=(a=e[0])==null?void 0:a.playlists;return s!=null&&s.length&&s[0]||null}function Tt(t){return(t.type??"").startsWith("image")}function oa(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function na(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const cl={excellent:90,good:75,fair:60},dl=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],hl=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],pl=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],ul={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},fl=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),gl=new Set([...fl,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function Rt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function ja(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return gl.has(e)}function Si(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const vl=new Set(["png","svg","webp","gif","avif"]);function nr(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return vl.has(e)}const ml=new Set(["svg","svg+xml","png","pdf"]);function Va(t){return ml.has(Si(t).toLowerCase())}let Yi=null;function bl(t){Yi=t??null}function qe(t,e){if(!t||!Yi)return t;try{return Yi(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function Ka(t,e){var i,r;const s=((i=t.transformation)==null?void 0:i.url.cdn)??((r=t.url)==null?void 0:r.cdn)??"";return s?or(s,e):null}function xl(t,e){const s=t.info,i=(s==null?void 0:s.image_thumbnail)||(s==null?void 0:s.thumbnail)||(s==null?void 0:s.preview)||"";return i?or(i,e):Ka(t,e)}function vi(t,e){var r;if(e&&e!=="original"){const a=xl(t,e);if(a)return qe(a,{source:"asset",asset:t})}const s=t.info,i=(s==null?void 0:s.video_thumbnail)||(s==null?void 0:s.image_thumbnail)||(s==null?void 0:s.thumbnail)||(s==null?void 0:s.preview)||((r=t.url)==null?void 0:r.cdn)||"";return qe(is(i),{source:"asset",asset:t})}function Ba(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?qe(is(s),{source:"video",asset:t}):""}function lr(t){var s,i;let e=is(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),qe(zt(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function zt(t,e){try{const s=new URL(t);for(const[i,r]of Object.entries(e))s.searchParams.set(i,r);return s.toString()}catch{return t}}const la=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\/(?:v\d+\/)?/i;function is(t,e){if(!t)return"";const s=r=>r.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(la);if(i){const r=i[2],a=t.replace(la,`$1assets.filerobot.com/${r}/`);return s(a)}if(e)try{const r=new URL(t);return s(`https://assets.filerobot.com/${e}${r.pathname}${r.search}`)}catch{}return t}function Ha(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=is(s);const r=Rt(t.file_type),a=String(window.devicePixelRatio||1);let o;return r==="video"?o=zt(i,{w:e,dpr:a,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||Si(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),o=zt(i,{w:e,dpr:a,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):o=zt(i,{w:e,dpr:a}),qe(o,{source:"folder"})}function _l(t,e){const s={};return t.format&&(s.force_format=ul[t.format]),t.quality&&t.format!=="png"&&(s.q=String(cl[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}const $={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},C={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},M={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},yl={AND:"AND"},S={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",ULTRATAGS:"ultratags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},Ci={[S.DATE]:"date_",[S.BOOLEAN]:"bool_",[S.NUMERIC]:"num_",[S.DECIMAL2]:"dec_",[S.ATTACHMENTS_ASSETS]:"attach_",[S.ATTACHMENT_URI]:"uri_",[S.SELECT_ONE]:"one_",[S.MULTI_SELECT]:"multi_",[S.SUPERTAGS]:"tags_",[S.ULTRATAGS]:"utags_",[S.TEXT]:"text_",[S.TEXT_AREA]:"area_",[S.GEO_POINT]:"geo_",[S.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(Ci).map(([t,e])=>[e,t]));const $l=Object.values(Ci);function rs(t){for(const e of $l)if(t.startsWith(e))return t.slice(e.length);return t}const Ge={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},ca={EMPTY:"empty",NOT_EMPTY:"non-empty"},Oe="empty",Te="non-empty",Ot="specific",Ri=10,ys=10,$s=10,qa="filters:pinned:",Ga="metadata:pinned:",da=[$.DATE,$.TYPE,$.SIZE],Ya=M.IS,oi="20",ni="1",wl=0,kl=[{key:$.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:$.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:$.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:$.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:$.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:$.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:$.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:$.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:$.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],Sl={key:$.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},Cl={key:$.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},nt=[{key:C.STATUS,labelKey:"filterApprovalStatus",label:"Approval status",icon:"square-check",type:"string"},{key:C.APPROVER,labelKey:"filterApprovalApprover",label:"Approver",icon:"file-check-2",type:"string"},{key:C.REQUESTOR,labelKey:"filterApprovalRequester",label:"Requester",icon:"user-star",type:"string"},{key:C.DUE_DATE,labelKey:"filterApprovalDueDate",label:"Due date",icon:"calendar-check-2",type:"date"}],Ps=[Sl,...kl,Cl],Qa=new Set(Object.values(C)),Al=new Set([...Ps.map(t=>t.key),...Qa]),Pt={[$.TYPE]:"Format",[$.DATE]:"Date",[$.SIZE]:"Size",[$.LICENSE_EXPIRY]:"License expiry",[$.TAGS]:"Tags",[$.LABELS]:"Labels",[$.PRODUCT_REF]:"Products",[$.IMAGE]:"Image",[$.COLOR]:"Color",[$.METADATA]:"Metadata",[$.APPROVAL]:"Approval",...Object.fromEntries(nt.map(t=>[t.key,t.label]))},Zt={...Object.fromEntries(Ps.map(t=>[t.key,t.labelKey])),...Object.fromEntries(nt.map(t=>[t.key,t.labelKey]))},Fe={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},mi=[{value:Fe.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:Fe.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:Fe.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:Fe.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:Fe.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:Fe.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:Fe.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:Fe.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],El={[Fe.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[Fe.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[Fe.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[Fe.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[Fe.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[Fe.FONTS]:["ttf","otf","woff","woff2","eot"]},zi={RESOLUTION:0,ORIENTATION:1,FACES:2},Fl=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],Ol=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],Tl=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Wa=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],cr=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],Xa=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Ja=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Ll=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Pl=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],Ni=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Contains",value:M.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],at=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Is not",value:M.IS_NOT,labelKey:"operatorIsNot"}],si=at,Ui=[{label:"Is",value:M.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:M.IS,labelKey:"operatorContains"},{label:"Does not contain",value:M.IS_NOT,labelKey:"operatorDoesNotContain"}],ji=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Greater than",value:M.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:M.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:M.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:M.RANGE,labelKey:"operatorBetween"}],ha=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Is not",value:M.IS_NOT,labelKey:"operatorIsNot"}],es=M.IS,Ml=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--sfx-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--sfx-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--sfx-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"}],bi=[{label:"Empty",value:Oe,labelKey:"empty"},{label:"Not empty",value:Te,labelKey:"notEmpty"}],Il=[...bi,{label:"Specific",value:Ot,labelKey:"specific"}],Dl=[{label:"Empty",value:Oe,labelKey:"empty"},{label:"Not empty",value:Te,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],li={[S.DATE]:"calendar",[S.BOOLEAN]:"toggle-left",[S.NUMERIC]:"file-digit",[S.DECIMAL2]:"decimals-arrow-right",[S.ATTACHMENTS_ASSETS]:"paperclip",[S.ATTACHMENT_URI]:"link-2",[S.SELECT_ONE]:"circle-dot",[S.MULTI_SELECT]:"square-check",[S.SUPERTAGS]:"hash",[S.ULTRATAGS]:"hash",[S.TEXT]:"text-initial",[S.TEXT_AREA]:"text-align-justify",[S.GEO_POINT]:"locate",[S.INTEGER_LIST]:"list-ordered"},Za={[S.TEXT]:"text",[S.TEXT_AREA]:"text",[S.NUMERIC]:"number",[S.DECIMAL2]:"number",[S.BOOLEAN]:"boolean",[S.SELECT_ONE]:"select-one",[S.MULTI_SELECT]:"multi-select",[S.SUPERTAGS]:"tags",[S.ULTRATAGS]:"ultratags",[S.DATE]:"date",[S.GEO_POINT]:"geo",[S.ATTACHMENTS_ASSETS]:"attachment",[S.ATTACHMENT_URI]:"attachment",[S.INTEGER_LIST]:"attachment"};function ii(t){return Object.prototype.hasOwnProperty.call(Za,t)}async function Rl(t){var i;return(((i=(await t.get("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(r=>({name:r.name,value:r.value,count:r.count,category:r.category??r.value.split("_")[0],label:zl(r.name)}))}function zl(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function Nl(t){var g;const e=await t.get("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,a=((i==null?void 0:i.model)??[])[wl],o=i==null?void 0:i.store,l=((o==null?void 0:o.regional_variants_groups)??[]).map(m=>({uuid:m.uuid,label:m.label??m.name??"",variants:(m.variants??[]).map(_=>({api_value:_.api_value??_.value??"",internal_unique_value:_.internal_unique_value??_.api_value??"",label:_.label??_.name??""}))})).filter(m=>m.variants.length>1),h={};for(const m of l)h[m.uuid]=((g=m.variants[0])==null?void 0:g.api_value)??"";const p=!!((s==null?void 0:s._cdn_permalink_enabled)??e._cdn_permalink_enabled);if(!a)return{fields:[],regionalVariantGroups:l,regionalFilters:h,cdnPermalinkEnabled:p};const f=a.groups??[],d=[];for(const m of f){const _=m.name||"";for(const x of m.fields??[]){const F=x.type??S.TEXT,k=x.possible_values,T=k==null?void 0:k.map(w=>({api_value:w.api_value??w.value??"",internal_unique_value:w.internal_unique_value??w.api_value??"",label:w.label??w.name??w.api_value??""}));d.push({key:x.key??x.ckey,label:x.title??x.label??x.key??"",type:F,slug:x.slug,ckey:x.ckey,possible_values:T,group:_,regionalVariantsGroupUuid:x.regional_variants_group_uuid})}}return{fields:d,regionalVariantGroups:l,regionalFilters:h,cdnPermalinkEnabled:p}}function ot(t){return t.toLocaleDateString("en-CA")}function ne(t){if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const e=new Date(t);return Number.isNaN(e.getTime())?t:ot(e)}function ri(){return ot(new Date)}function dr(t){const e=new Date;switch(t){case"today":return{from:ri(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:ot(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:ri(),to:ot(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:ot(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:ri(),to:ot(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:ot(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:ri(),to:ot(s)}}default:return null}}function pa(t,e){return e?e.type==="date"?Ul(e):e.type==="string"?jl(e):!0:!1}function Ul(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function jl(t){return!t.values||!Array.isArray(t.values)||t.values.filter(Boolean).length===0?!1:t.operator===M.RANGE&&Vl(t)?!!t.values[0]&&!!t.values[1]:!0}function Vl(t){return t.metadataType===S.NUMERIC||t.metadataType===S.DECIMAL2}function Kl(t,e={}){const s=[];for(const[i,r]of Object.entries(t)){if(!r||!pa(i,r))continue;const a=Hl(i,r);s.push(...a)}for(const[i,r]of Object.entries(e)){if(!r||!pa(i,r))continue;const a=Jl(i,r);s.push(...a)}return Bl(s)}function Bl(t){const e=[],s=[],i=[];for(const r of t)r.startsWith("type:")||r.startsWith("type=")?e.push(r):r.startsWith("mimetype:")||r.startsWith("mimetype=")?s.push(r):i.push(r);if(e.length>0&&s.length>0){const r=[...e,...s].join(" , ");i.push(r)}else i.push(...e,...s);return i}function Hl(t,e){if(e.type==="date")return eo(t,e);if(t===$.IMAGE)return Xl(e);const s=e,{operator:i=Ya,values:r=[],logic:a}=s;if(r.length===0)return[];switch(t){case $.SIZE:return ql(t,r,"..");case $.FACES:return Gl(t,i,r);case $.TAGS:return Mt(t,i,ua(r),",",a);case $.LABELS:return Mt(t,i,ua(r),",",a);case $.COLOR:return Yl(i,r,a);case $.TYPE:return Ql(r,i);case $.MIME_TYPE:return Wl(t,r,i);case $.PRODUCT_REF:return Mt(t,"=%",r,",",a);default:return Mt(t,i,r,",",a)}}function eo(t,e){const s=e.field||"created";if(e.kind===Ge.PRESET&&e.preset){if(e.preset===ca.EMPTY)return[`${s}:"empty"`];if(e.preset===ca.NOT_EMPTY)return[`${s}:"non-empty"`];const i=dr(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===Ge.AFTER&&e.from)return[`${s}>"${e.from}"`];if(e.kind===Ge.BEFORE&&e.to)return[`${s}<"${e.to}"`];if(e.kind===Ge.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}>"${e.from}"`];if(!e.from&&e.to)return[`${s}<"${e.to}"`]}return e.kind===Ge.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function ql(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Gl(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function Mt(t,e,s,i,r){if(s.length===0)return[];if(r===yl.AND)return s.map(o=>`${t}${e}"${o}"`);const a=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${a}`]}function Yl(t,e,s){const i=[],r=Mt("color_search",t,e,",",s);return i.push(...r),i.push('color_operator:"AND"'),i}function Ql(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const a of t){const o=El[a];if(o)for(const n of o){const l=`${a}_${n}`;s.has(l)||(s.add(l),i.push(l))}else s.has(a)||(s.add(a),i.push(a))}const r=i.map(a=>`"${a}"`).join(",");return[`type${e}${r}`]}function Wl(t,e,s,i){if(e.length===0)return[];const r=e.map(a=>`"${a}"`).join(",");return[`${t}${s}${r}`]}function Xl(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,n=o.resolution,l=o.orientation,h=o.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),l!=null&&l.length&&e.push(`orientation:"${l.join(",")}"`),h!=null&&h.length&&e.push(`faces:"${h.join(",")}"`),e}const s=t,i=s[zi.RESOLUTION],r=s[zi.ORIENTATION],a=s[zi.FACES];return i&&e.push(`resolution:"${i}"`),r&&e.push(`orientation:"${r}"`),a&&e.push(`faces:"${a}"`),e}function Jl(t,e){const s=rs(t),i=ec(t);if(e.type==="date")return Zl(s,e,i);const r=e,{operator:a=Ya,values:o=[],logic:n,metadataType:l}=r;if(o.length===0)return[];if(o.length===1&&(o[0]===Oe||o[0]===Te)){const p=l===S.GEO_POINT?M.IS+"~":M.IS;return[`${s}${p}"${o[0]}"`]}const h=l===S.NUMERIC||l===S.DECIMAL2;if(h&&a===M.RANGE)return[`${s}${M.IS}"${o.join('","')}"`];if(h&&(a===M.GREATER_THAN_OR_EQUAL||a===M.LESS_THAN_OR_EQUAL)){const p=a===M.GREATER_THAN_OR_EQUAL?o[0]:o[1]??o[0];return p?[`${s}${a}"${p}"`]:[]}if(l===S.GEO_POINT){const p=o.map(f=>{const d=f.indexOf("..");if(d===-1)return`(${f})`;const g=f.slice(0,d),m=f.slice(d);return`(${g})${m}`});return Mt(s,a+"~",p,",",n)}return Mt(s,a,o,",",n)}function Zl(t,e,s){const i=eo(t,e);return!s||i.length===0?i:i.map(r=>{const a=r.search(/[^a-zA-Z0-9_]/);if(a===-1)return`"${r}"`;const o=r.slice(0,a),l=r.slice(a).replace(/"/g,"");return`"${o}${l}"`})}function ec(t){return t.startsWith("date_")}function ua(t){return t.map(e=>e.replace(/#/g,""))}const tc=new Set([$.DATE,$.LICENSE_EXPIRY,C.DUE_DATE]),sc={[$.DATE]:"created",[$.LICENSE_EXPIRY]:$.LICENSE_EXPIRY,[C.DUE_DATE]:C.DUE_DATE};function Qi(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=ic(s,i));return e}function ic(t,e){return e.type==="string"||e.type==="date"?e:tc.has(t)?{type:"date",field:e.field??sc[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function rc(t){const e=localStorage.getItem(qa+t),s=localStorage.getItem(Ga+t);let i;try{i=e?JSON.parse(e):[...da]}catch{i=[...da]}let r;try{r=s?JSON.parse(s):[]}catch{r=[]}return{pinnedFilters:i,pinnedMetadata:r}}function ac(t,e){localStorage.setItem(qa+t,JSON.stringify(e))}function oc(t,e){localStorage.setItem(Ga+t,JSON.stringify(e))}const to="sort-by",so="sort-order";function fa(t,e){try{localStorage.setItem(to,t),localStorage.setItem(so,e)}catch{}}function nc(){try{const t=localStorage.getItem(to),e=localStorage.getItem(so);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}function Wi(t,e,s){return t==="title"?s("metadataTitleLabel","Title"):t==="description"?s("metadataDescriptionLabel","Description"):e}function lc(t,e){let s=!1;const i=t.map(r=>{const a=Wi(r.key,r.label,e);return a===r.label?r:(s=!0,{...r,label:a})});return s?i:t}const io="ap-last-folder",ro="ap-last-view",ao="ap-last-tab";function ns(t,e){return e?`${t}:${e}`:t}function ga(t,e){try{localStorage.setItem(ns(io,e),t)}catch{}}function cc(t){try{return localStorage.getItem(ns(io,t))}catch{return null}}function dc(t,e){try{localStorage.setItem(ns(ro,e),t)}catch{}}function hc(t){try{return localStorage.getItem(ns(ro,t))}catch{return null}}function pc(t,e){try{localStorage.setItem(ns(ao,e),t)}catch{}}function uc(t){try{const e=localStorage.getItem(ns(ao,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function fc(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,r=parseInt(s.slice(2,4),16)/255,a=parseInt(s.slice(4,6),16)/255;return[i,r,a]}function Vi(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function gc(t,e,s){const i=Vi(t),r=Vi(e),a=Vi(s),o=.4122214708*i+.5363325363*r+.0514459929*a,n=.2119034982*i+.6806995451*r+.1073969566*a,l=.0883024619*i+.2817188376*r+.6299787005*a,h=Math.cbrt(o),p=Math.cbrt(n),f=Math.cbrt(l),d=.2104542553*h+.793617785*p-.0040720468*f,g=1.9779984951*h-2.428592205*p+.4505937099*f,m=.0259040371*h+.7827717662*p-.808675766*f,_=Math.sqrt(g*g+m*m);let x=Math.atan2(m,g)*(180/Math.PI);return x<0&&(x+=360),[d,_,x]}function vc(t){return t>.7}function mc(t,e){const s=["--sfx-primary","--sfx-primary-foreground","--sfx-primary-10","--sfx-primary-20","--sfx-accent","--sfx-accent-foreground","--sfx-ring","--sfx-selection-bg"];if(!e){for(const d of s)t.style.removeProperty(d);return}const[i,r,a]=fc(e),[o,n,l]=gc(i,r,a),h=`${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)}`,p=`oklch(${h})`,f=vc(o)?"#000":"#fff";t.style.setProperty("--sfx-primary",p),t.style.setProperty("--sfx-primary-foreground",f),t.style.setProperty("--sfx-primary-10",`oklch(${h} / 0.1)`),t.style.setProperty("--sfx-primary-20",`oklch(${h} / 0.2)`),t.style.setProperty("--sfx-accent",`oklch(${h} / 0.07)`),t.style.setProperty("--sfx-accent-foreground",p),t.style.setProperty("--sfx-ring",`oklch(${h} / 0.7)`),t.style.setProperty("--sfx-selection-bg",`oklch(${h} / 0.08)`)}const hr=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],bc=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...hr],xc=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],_c=[{value:"name",labelKey:"sortName",label:"Name"}],yc=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],$c=[{value:"name",labelKey:"sortName",label:"Name"}],Ys=A`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`,wc=A`
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,oo=A`
  @media (hover: none) and (pointer: coarse) {
    input,
    textarea,
    select {
      font-size: 16px !important;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kc={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Sc=t=>(...e)=>({_$litDirective$:t,values:e});class Cc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const Ki=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Ac extends Cc{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==kc.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return lt}update(e,[s]){if(s===this._lastStyles)return lt;this._lastStyles=s;const{style:i}=e.element,r=s??{};for(const a of this._appliedProps)(!(a in r)||r[a]==null||r[a]==="")&&(i.removeProperty(Ki(a)),this._appliedProps.delete(a));for(const[a,o]of Object.entries(r))o!=null&&o!==""?(i.setProperty(Ki(a),o),this._appliedProps.add(a)):this._appliedProps.has(a)&&(i.removeProperty(Ki(a)),this._appliedProps.delete(a));return lt}}const D=Sc(Ac);function Ec(t,e){customElements.get(t)||customElements.define(t,e)}const O=t=>e=>(Ec(t,e),e);var Fc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,pr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Oc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Fc(e,s,r),r};let Ms=class extends E{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return c`
      <dialog @click=${this._handleBackdropClick} @cancel=${this._handleCancel}>
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
    `}};Ms.styles=A`
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
      max-width: var(--sfx-modal-max-width, 1200px);
      height: var(--sfx-modal-height, 85vh);
      max-height: var(--sfx-modal-max-height, 85vh);
      margin: auto;
      padding: 0;
      border: none;
      border-radius: var(--sfx-modal-radius, 12px);
      box-shadow: var(--sfx-modal-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
      background: var(--sfx-background, oklch(1 0 0));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    dialog[open] {
      animation: ap-modal-in 200ms ease-out;
    }
    dialog.closing {
      animation: ap-modal-out 150ms ease-in forwards;
    }
    dialog::backdrop {
      background: var(--sfx-modal-backdrop, rgba(0, 0, 0, 0.5));
      animation: ap-backdrop-in 200ms ease-out;
    }
    @keyframes ap-modal-in {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes ap-modal-out {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.95);
      }
    }
    @keyframes ap-backdrop-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: var(--sfx-modal-max-height, 85vh);
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
      dialog[open],
      dialog::backdrop,
      dialog.closing {
        animation: none;
      }
    }
  `;pr([u({type:Boolean})],Ms.prototype,"open",2);pr([wt("dialog")],Ms.prototype,"dialog",2);Ms=pr([O("ap-modal")],Ms);const je=A`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var Tc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Qs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Lc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Tc(e,s,r),r};let Ut=class extends E{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return c`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalFiltersDropdownLabel","Regional settings")}
        title=${this.t("regionalFiltersDropdownLabel","Regional settings")}
      >
        <sfx-icon name="globe" .size=${18}></sfx-icon>
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
                    <span class="check-mark"
                      >${i?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:""}</span
                    >
                  </button>
                `})}
            </div>
          `)}
      </div>
    `}};Ut.styles=A`
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
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .trigger.active {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
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
      border-top: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .group-label {
      padding: 6px 12px 8px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-label {
      flex: 1;
    }
    .variant-option:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .variant-option[data-selected] {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      font-weight: 400;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
    .empty-msg {
      padding: 12px;
      font-size: 0.8125rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;Qs([u({type:Array})],Ut.prototype,"groups",2);Qs([u({type:Object})],Ut.prototype,"selectedFilters",2);Qs([u({attribute:!1})],Ut.prototype,"t",2);Qs([b()],Ut.prototype,"_open",2);Ut=Qs([O("ap-regional-settings")],Ut);var Pc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,Ce=(t,e,s,i)=>{for(var r=i>1?void 0:i?Mc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Pc(e,s,r),r};const Ic=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let ue=class extends E{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=Zn(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=Ic.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return c`
      <div class="header-row">
        ${e.length>1?c`<sfx-dropdown
              .value=${this.activeTab}
              .options=${e}
              @sfx-change=${this._handleTabChange}
            ></sfx-dropdown>`:v}
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${16}></sfx-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?t("aiSearchFoldersPlaceholder","AI search folders and assets"):t("aiSearchAssetsPlaceholder","AI search assets"):this.activeTab==="labels"&&!this.isInsideLabel?t("searchLabelsPlaceholder","Search labels"):this.activeTab==="collections"&&!this.isInsideCollection?t("searchCollectionsPlaceholder","Search collections"):this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?t("searchCollectionFoldersPlaceholder","Search collection folders"):this.activeTab==="folders"?t("searchFoldersPlaceholder","Search folders and assets"):t("searchAssetsPlaceholder","Search assets")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?c`
                  <button
                    class="clear-btn"
                    @click=${this._clearSearch}
                    aria-label=${t("clearSearch","Clear search")}
                  >
                    <sfx-icon name="close" .size=${14}></sfx-icon>
                  </button>
                `:""}
            ${this.enableAISearch?c`
                  <button
                    class="ai-toggle ${this.isAISearchActive?"active":""}"
                    @click=${this._toggleAISearch}
                    aria-label=${this.isAISearchActive?t("disableAISearch","Disable AI search"):t("enableAISearch","Enable AI search")}
                    title=${this.isAISearchActive?t("aiSearchOn","AI search on"):t("aiSearchOff","AI search off")}
                  >
                    <sfx-icon name="sparkles" .size=${12}></sfx-icon>
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
            <sfx-icon
              name=${this.viewMode==="grid"?"list":"layout-grid"}
              .size=${18}
            ></sfx-icon>
          </button>
          ${this.hideClose?v:c`
                <div class="divider"></div>
                <button
                  class="icon-btn icon-btn--muted"
                  @click=${this._handleClose}
                  aria-label=${t("close","Close")}
                >
                  <sfx-icon name="close" .size=${18}></sfx-icon>
                </button>
              `}
        </div>
      </div>
    `}};ue.styles=[je,A`
      :host {
        display: block;
        padding: 16px 20px;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
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
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }
      input {
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        padding: 0 34px 0 38px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-background, oklch(1 0 0));
        outline: none;
      }
      input:hover {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      input:focus {
        border-color: var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
        box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      }
      input:focus-visible {
        outline: none; /* already has focus ring via border-color + box-shadow */
      }
      input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        padding: 0;
      }
      .clear-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .ai-toggle {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 26px;
        padding: 0 8px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-size: 12px;
        font-weight: 500;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        cursor: pointer;
        white-space: nowrap;
      }
      .ai-toggle:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .ai-toggle.active {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: white;
        border-color: transparent;
      }
      .ai-toggle.active:hover {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        cursor: pointer;
      }
      .icon-btn:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .icon-btn:focus-visible {
        outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: -2px;
      }
      .tab-label {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        background: var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .icon-btn--muted {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
    `];Ce([u()],ue.prototype,"activeTab",2);Ce([u({type:Array})],ue.prototype,"tabs",2);Ce([u({type:Boolean})],ue.prototype,"isInsideLabel",2);Ce([u({type:Boolean})],ue.prototype,"isInsideCollection",2);Ce([u({type:Boolean})],ue.prototype,"isInsideCollectionLeaf",2);Ce([u()],ue.prototype,"viewMode",2);Ce([u()],ue.prototype,"searchQuery",2);Ce([u({type:Array})],ue.prototype,"regionalGroups",2);Ce([u({type:Object})],ue.prototype,"regionalFilters",2);Ce([u({type:Boolean})],ue.prototype,"hideClose",2);Ce([u({type:Boolean,reflect:!0,attribute:"ai-search"})],ue.prototype,"enableAISearch",2);Ce([u({type:Boolean})],ue.prototype,"isAISearchActive",2);Ce([u({attribute:!1})],ue.prototype,"t",2);Ce([b()],ue.prototype,"_localSearch",2);ue=Ce([O("ap-header")],ue);var Dc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,ur=(t,e,s,i)=>{for(var r=i>1?void 0:i?Rc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Dc(e,s,r),r};let Is=class extends E{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?c`
      <div class="popover">
        ${this.title?c`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:c``}};Is.styles=A`
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
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 12px;
    }
  `;ur([u()],Is.prototype,"title",2);ur([u({type:Boolean})],Is.prototype,"open",2);Is=ur([O("ap-filter-popover")],Is);var zc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,ls=(t,e,s,i)=>{for(var r=i>1?void 0:i?Nc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&zc(e,s,r),r};function va(t){var i;const e=new Map;for(const r of t){const a=r.category||r.value.split("_")[0];if(!e.has(a)){const n=mi.find(l=>l.value===a);e.set(a,{key:a,labelKey:(n==null?void 0:n.labelKey)||a,label:(n==null?void 0:n.label)||a.charAt(0).toUpperCase()+a.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const o=e.get(a);o.extensions.push({value:r.value,label:r.label||((i=r.value.split("_").pop())==null?void 0:i.toUpperCase())||r.value,count:r.count}),o.totalCount+=r.count}const s=mi.map(r=>r.value);return[...e.values()].sort((r,a)=>{const o=s.indexOf(r.key),n=s.indexOf(a.key);return(o===-1?999:o)-(n===-1?999:n)})}let _t=class extends E{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const r=new Set([t.key,...e]);i=this.selected.filter(a=>!r.has(a))}else{const r=new Set(e);i=this.selected.filter(a=>!r.has(a)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(r=>r!==e.key),i.push(...s)),i.includes(t)?i=i.filter(r=>r!==t):(i.push(t),s.every(r=>i.includes(r))&&(i=i.filter(r=>!s.includes(r)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.TYPE,values:t,operator:M.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const r=s.extensions.filter(a=>a.label.toLowerCase().includes(e)||a.value.toLowerCase().includes(e));return r.length===0?null:{...s,extensions:r}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=va(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=va(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return c`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder","Search formats...")}
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${s?c`<button class="clear-btn" @click=${this._clearAll}>
              ${this.t("clearAll","Clear all")}
            </button>`:v}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?c`<div class="no-results">${this.t("noFormatsFound","No formats found")}</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return c`
      <div
        class="group-header ${s||i?"selected":""}"
        @click=${()=>this._toggleExpand(t.key)}
      >
        <svg
          class="group-chevron ${e?"expanded":""}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <sfx-icon name=${t.icon} size="16"></sfx-icon>
        <span class="group-label">${this.t(t.labelKey,t.label)}</span>
        <sfx-checkbox
          ?checked=${s}
          ?indeterminate=${i}
          @click=${r=>r.stopPropagation()}
          @sfx-toggle=${()=>this._toggleGroup(t)}
        ></sfx-checkbox>
      </div>
      ${e?c`
            <div class="extensions">
              ${t.extensions.map(r=>c`
                  <div class="ext-row" @click=${()=>this._toggleExt(r.value,t)}>
                    <sfx-checkbox
                      ?checked=${this._isExtSelected(r.value,t.key)}
                      @click=${a=>a.stopPropagation()}
                      @sfx-toggle=${()=>this._toggleExt(r.value,t)}
                    ></sfx-checkbox>
                    <span class="ext-label">${r.label}</span>
                  </div>
                `)}
            </div>
          `:v}
    `}_renderFallback(){return c`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${mi.map(t=>c`
            <div
              class="option ${this.selected.includes(t.value)?"selected":""}"
              @click=${()=>this._toggleCategory(t.value)}
            >
              <sfx-checkbox ?checked=${this.selected.includes(t.value)}></sfx-checkbox>
              <sfx-icon name=${t.icon} size="16"></sfx-icon>
              <span class="option-label">${t.label}</span>
            </div>
          `)}
      </div>
    `}};_t.styles=A`
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
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: default;
    }

    .clear-btn {
      background: none;
      border: none;
      font-size: 0.75rem;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      padding: 2px 4px;
      border-radius: var(--sfx-radius-sm, 6px);
    }
    .clear-btn:hover {
      text-decoration: underline;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      margin-bottom: 8px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: var(--sfx-radius-sm, 6px);
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      background: var(--sfx-background, oklch(1 0 0));
      outline: none;
    }
    .search-input:focus {
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .search-input::placeholder {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
      border-radius: var(--sfx-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
      user-select: none;
    }
    .group-header:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }

    .group-chevron {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 150ms;
    }
    .group-chevron.expanded {
      transform: rotate(90deg);
    }

    sfx-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .group-header.selected sfx-icon {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }

    .group-label {
      flex: 1;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
      border-radius: var(--sfx-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .ext-row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }

    .ext-label {
      flex: 1;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
      border-radius: var(--sfx-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .option:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .option-label {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .option.selected sfx-icon {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }

    .no-results {
      padding: 12px;
      text-align: center;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;ls([u({type:Array})],_t.prototype,"selected",2);ls([u({type:Array})],_t.prototype,"fileTypes",2);ls([u({attribute:!1})],_t.prototype,"t",2);ls([b()],_t.prototype,"_search",2);ls([b()],_t.prototype,"_expanded",2);_t=ls([O("ap-filter-type")],_t);const ut=A`
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
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-weight: 400;
    color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
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
    background: var(--sfx-border, oklch(92.86% 0.009 247.92));
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: oklch(0.97 0.01 245);
    border: 1px solid oklch(0.92 0.015 245);
    border-radius: var(--sfx-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--sfx-info-foreground, oklch(0.391 0.091 241.289));
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert sfx-icon {
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--sfx-info, oklch(0.632 0.161 245.564));
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
    border-radius: var(--sfx-radius-sm, 6px);
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    background: var(--sfx-background, oklch(1 0 0));
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
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
    color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 4px;
  }
  .input-label[aria-disabled='true'] {
    opacity: 0.5;
  }

  /* ── Grid layouts ── */
  .grid-2 {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
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
    border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    background: var(--sfx-background, oklch(1 0 0));
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
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
    margin-top: 4px;
  }

  /* ── Search input (flush with popover edges, like tags) ── */
  .search-wrapper {
    position: sticky;
    top: -10px;
    z-index: 2;
    background: var(--sfx-card, oklch(1 0 0));
    margin: -10px -8px 10px;
  }
  .search-wrapper .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    pointer-events: none;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 32px;
    border: none;
    border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    border-radius: 0;
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    background: transparent;
    outline: none;
  }
  .search-input::placeholder {
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
  }
  .search-clear:hover {
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
    font-size: var(--sfx-font-size-sm, 0.875rem);
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
  }
`;var Uc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,kt=(t,e,s,i)=>{for(var r=i>1?void 0:i?jc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Uc(e,s,r),r};let Je=class extends E{constructor(){super(...arguments),this.filterKey=$.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===$.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?Xa:cr).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return Wa.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return ot(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=dr(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const r=new Date(s+"T23:59:59");this.to=r.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?v:c`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType","Date type")}</span>
        <sfx-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @sfx-change=${t=>this._selectField(t.detail.value)}
        ></sfx-radio-group>
      </div>
    `}_renderRangeSection(){return c`
      <div class="filter-section">
        <span class="section-label">${this.t("dateRange","Range")}</span>
        <sfx-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @sfx-change=${t=>this._selectPreset(t.detail.value)}
        ></sfx-radio-group>
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return v;const e=this.from?ne(this.from):"",s=this.to?ne(this.to):"",i=this._todayStr;return t==="specific"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
            <sfx-date-input
              max=${i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
        </div>
      `:t==="before"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <sfx-date-input
              max=${i}
              .value=${s}
              @change=${r=>this._handleDateInput("to",r)}
            ></sfx-date-input>
          </div>
        </div>
      `:t==="after"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <sfx-date-input
              max=${i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
        </div>
      `:c`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <sfx-date-input
              max=${s||i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <sfx-date-input
              min=${e}
              max=${i}
              .value=${s}
              @change=${r=>this._handleDateInput("to",r)}
            ></sfx-date-input>
          </div>
        </div>
      </div>
    `}render(){return c`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${()=>this._clearAll()}>
          ${this.t("clearAll","Clear all")}
        </button>
        ${this._renderDateTypeSection()} ${this._renderRangeSection()} ${this._renderDateInputs()}
      </div>
    `}};Je.styles=[ut,A`
      .date-inputs {
        margin-top: 4px;
      }
    `];kt([u()],Je.prototype,"filterKey",2);kt([u({attribute:!1})],Je.prototype,"t",2);kt([u()],Je.prototype,"field",2);kt([u()],Je.prototype,"kind",2);kt([u()],Je.prototype,"preset",2);kt([u()],Je.prototype,"from",2);kt([u()],Je.prototype,"to",2);Je=kt([O("ap-filter-date")],Je);var Vc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,Bt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Kc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Vc(e,s,r),r};let ct=class extends E{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=$.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=Ri}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:M.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:M.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:M.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Ri} tags`:v}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return c`
      <div class="filter-content">
        <div class="filter-header">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="tag-search"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?c`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button class="clear-btn" @click=${this._clearAll}>Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?c`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
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
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span>You can select up to ${Ri} tags.</span>
              </div>
            `:v}
      </div>
    `}_renderSearchResults(t){const e=r=>r.toLowerCase().includes(t),s=this._suggestedTags.filter(r=>e(r.label)).slice(0,50),i=this._otherTags.filter(r=>e(r.label)).slice(0,50);return s.length===0&&i.length===0?c`<div class="no-results">${this.t("noTagsFound","No tags found")}</div>`:c`
      ${s.length>0?c`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length===0}
                  @click=${this._clearAll}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
              <div class="options-list short">
                ${s.map(r=>this._renderTagItem(r))}
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
                      >
                        ${this.t("clearAll","Clear all")}
                      </button>`:c`<span class="section-label">${this.t("allTags","All tags")}</span>`}
              </div>
              <div class="options-list">
                ${i.map(r=>this._renderTagItem(r))}
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

      <div class="hint-message">
        ${this.t("findMoreTagsBySearch","Find more tags by using search")}
      </div>
    `}};ct.styles=[je,ut,A`
      .tag-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .tag-item:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .tag-item.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .tag-item.disabled:hover {
        background: none;
      }

      .tag-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .hint-message {
        font-size: 0.8125rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding: 8px 0;
      }

      /* Sticky search within popover scroll */
      .filter-header {
        position: sticky;
        top: -10px;
        z-index: 1;
        background: var(--sfx-card, oklch(1 0 0));
        margin: -10px -8px 10px;
      }

      .filter-header .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }

      .tag-search {
        width: 100%;
        padding: 8px 32px 8px 32px;
        border: none;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        outline: none;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .tag-search::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
    `];Bt([u({type:Array})],ct.prototype,"tags",2);Bt([u({type:Array})],ct.prototype,"selected",2);Bt([u()],ct.prototype,"filterKey",2);Bt([u({attribute:!1})],ct.prototype,"t",2);Bt([wt(".tag-search")],ct.prototype,"_searchInput",2);Bt([b()],ct.prototype,"_search",2);ct=Bt([O("ap-filter-tags")],ct);var Bc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,cs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Hc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Bc(e,s,r),r};let yt=class extends E{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=ys}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:s,operator:M.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:e,operator:M.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:[],operator:M.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${ys} labels`,{count:ys}):v}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="label-icon" ${D({color:t.color||"#94a3b8"})}>
          <sfx-icon name="tag" .size=${16}></sfx-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count??0}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchLabelsPlaceholder","Search labels")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?c`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?c`
                      <div class="chip">
                        <span class="chip-icon" ${D({color:i.color||"#94a3b8"})}>
                          <sfx-icon name="tag" .size=${12}></sfx-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
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
            >
              ${this.t("clearAll","Clear all")}
            </button>
          </div>
          <div class="options-list">
            ${e.length===0?c`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?c`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t("labelsLimitAlert",`You can select up to ${ys} labels.`,{count:ys})}</span
                >
              </div>
            `:v}
      </div>
    `}};yt.styles=[ut,A`
      .label-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .label-item:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .count {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        flex-shrink: 0;
      }

      .chip-icon {
        flex-shrink: 0;
        line-height: 0;
      }
    `];cs([u({type:Array})],yt.prototype,"labels",2);cs([u({type:Array})],yt.prototype,"selected",2);cs([u({attribute:!1})],yt.prototype,"t",2);cs([wt(".search-input")],yt.prototype,"_searchInput",2);cs([b()],yt.prototype,"_search",2);yt=cs([O("ap-filter-labels")],yt);var qc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Ht=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&qc(e,s,r),r};const Bi=3,Xi=/^#[0-9A-Fa-f]{6}$/;function Yc(t){const e=t.trim().split(/\s+/);return e.length<1||!Xi.test(e[0])?null:{hex:e[0],tolerance:e[1]||ni,coverage:e[3]||oi}}let dt=class extends E{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=Yc(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==ni||s.coverage!==oi)),this._initialized=!0)}}_selectColor(t){if(!Xi.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=Bi||(this._colors=[...this._colors,{hex:t,tolerance:ni,coverage:oi}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!Xi.test(i)||this._colors.some((o,n)=>n!==t&&o.hex.toLowerCase()===i.toLowerCase()))return;const a=[...this._colors];a[t]={...a[t],hex:i},this._colors=a,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const r=[...this._colors];r[t]={...r[t],coverage:String(i)},this._colors=r,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:ni,i=this._advanced?e.coverage:oi;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=Bi;return c`
      <div class="palette">
        ${Ll.map(s=>{const i=t.has(s),r=e&&!i;return c`
            <button
              class="swatch ${i?"selected":""} ${r?"disabled":""}"
              ${D({background:s,...s==="#ffffff"?{border:"1px solid #e4e4e7"}:{}})}
              @click=${()=>!r&&this._selectColor(s)}
              title=${s}
              ?disabled=${r}
            ></button>
          `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?c`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel","Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${D({background:t.hex})}></div>
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
          <sfx-dropdown
            .value=${t.tolerance}
            .options=${Pl.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
            @sfx-change=${s=>this._handleToleranceChange(e,s)}
          ></sfx-dropdown>
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
        <button
          class="remove-btn"
          title=${this.t("removeColor","Remove color")}
          @click=${()=>this._removeColor(e)}
        >
          <sfx-icon name="close" .size=${14}></sfx-icon>
        </button>
      </div>
    `:c`
        <div class="color-row">
          <div class="color-swatch-small" ${D({background:t.hex})}></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${t.hex}
            maxlength="7"
            @change=${s=>this._handleHexInput(e,s)}
          />
          <button
            class="remove-btn"
            title=${this.t("removeColor","Remove color")}
            @click=${()=>this._removeColor(e)}
          >
            <sfx-icon name="close" .size=${14}></sfx-icon>
          </button>
        </div>
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<Bi&&!this._showPalette;return c`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("colorLabel","Color")}</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?"on":""}">
              <span class="toggle-thumb"></span>
            </span>
            ${this.t("advanced","Advanced")}
          </label>
        </div>

        <div class="filter-section">${t?this._renderPalette():v}</div>

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
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t("addColor","Add color")}
                </button>
              </div>
            `:v}

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t("requiresImageProcessing","Requires image processing to be enabled.")}</span
          >
        </div>
      </div>
    `}};dt.styles=[je,ut,A`
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
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        cursor: pointer;
        user-select: none;
      }

      .toggle-track {
        position: relative;
        width: 32px;
        height: 18px;
        border-radius: 9px;
        background: var(--sfx-border, oklch(92.86% 0.009 247.92));
        transition: background 150ms;
        flex-shrink: 0;
      }

      .toggle-track.on {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        border-radius: var(--sfx-radius-sm, 6px);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        flex-shrink: 0;
      }

      .color-hex-input {
        height: 36px;
        padding: 0 8px;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        background: var(--sfx-background, oklch(1 0 0));
        min-width: 0;
      }

      .color-hex-input:focus {
        outline: none;
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        padding: 0;
        flex-shrink: 0;
        border-radius: 4px;
      }

      .remove-btn:hover {
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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

      .adv-field sfx-dropdown {
        display: block;
        width: 100%;
      }

      .adv-field-label {
        font-size: 0.6875rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        line-height: 1;
      }

      .coverage-wrap {
        display: flex;
        align-items: center;
        height: 36px;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
        overflow: hidden;
      }

      .coverage-wrap:focus-within {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .coverage-unit {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: var(--sfx-font-family, system-ui, sans-serif);
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        cursor: pointer;
        transition: opacity 150ms;
      }

      .add-color-btn:hover {
        opacity: 0.8;
      }
    `];Ht([u({type:Array})],dt.prototype,"values",2);Ht([u({attribute:!1})],dt.prototype,"t",2);Ht([b()],dt.prototype,"_colors",2);Ht([b()],dt.prototype,"_advanced",2);Ht([b()],dt.prototype,"_showPalette",2);Ht([b()],dt.prototype,"_initialized",2);dt=Ht([O("ap-filter-color")],dt);var Qc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,St=(t,e,s,i)=>{for(var r=i>1?void 0:i?Wc(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Qc(e,s,r),r};const Xc={KB:1/1e3,MB:1,GB:1e3},Jc=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let Ze=class extends E{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Xc[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.SIZE,values:[],operator:M.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.SIZE,values:[i],operator:M.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return c`
      <div class="filter-content">
        <span class="section-label">${this.t("sizeLabel","Size")}</span>
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

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
              placeholder=${this.t("any","Any")}
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeUnit","Unit")}</span>
            <sfx-dropdown
              .options=${Jc}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `}};Ze.styles=[ut,A`
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
      .size-grid sfx-dropdown {
        display: block;
        width: 100%;
      }
    `];St([u({type:Number})],Ze.prototype,"min",2);St([u({type:Number})],Ze.prototype,"max",2);St([u({attribute:!1})],Ze.prototype,"t",2);St([b()],Ze.prototype,"_minVal",2);St([b()],Ze.prototype,"_maxVal",2);St([b()],Ze.prototype,"_unit",2);St([b()],Ze.prototype,"_initialized",2);Ze=St([O("ap-filter-size")],Ze);var Zc=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,Ws=(t,e,s,i)=>{for(var r=i>1?void 0:i?ed(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Zc(e,s,r),r};const td=mt`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,sd=mt`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,id=mt`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,rd=mt`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,ad={portrait:td,landscape:sd,square:id,panorama:rd};let jt=class extends E{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return c`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${Fl.map(t=>c`
                <sfx-checkbox
                  ?checked=${this.selectedResolution.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleResolution(t.value)}}
                  >${this.t(t.labelKey,t.label)}</sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageOrientation","Orientation")}</span>
          <div class="options-vertical">
            ${Ol.map(t=>c`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleOrientation(t.value)}}
                  ><span class="orientation-label"
                    >${ad[t.value]}${this.t(t.labelKey,t.label)}</span
                  ></sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${Tl.map(t=>c`
                <sfx-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleFaces(t.value)}}
                  >${t.labelKey?this.t(t.labelKey,t.label):t.label}</sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t("imageProcessingNotice","Some images might not have been processed, so they won't be displayed.")}</span
          >
        </div>
      </div>
    `}};jt.styles=[ut,A`
      .options-horizontal {
        display: flex;
        gap: 28px;
      }
      .options-vertical {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .options-vertical sfx-checkbox {
        --sfx-checkbox-gap: 12px;
      }
      .orientation-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .orientation-label svg {
        flex-shrink: 0;
      }
    `];Ws([u({type:Array})],jt.prototype,"selectedResolution",2);Ws([u({type:Array})],jt.prototype,"selectedOrientation",2);Ws([u({type:Array})],jt.prototype,"selectedFaces",2);Ws([u({attribute:!1})],jt.prototype,"t",2);jt=Ws([O("ap-filter-image")],jt);const od="/meta/ultratags",nd="regvar:api",ld=50;async function cd(t,{meta:e,q:s,limit:i=ld}){const r=s==null?void 0:s.trim();return(await t.get(od,{meta:e,q:r?r.toLowerCase():void 0,sort:r?void 0:"slug",limit:i,format:nd})).items??[]}function Ji(t,e,s="en"){const{i18n:i}=t;if(i){for(const a of hd(e,s)){const o=i[a]??i[`~${a.toUpperCase()}`];if(o)return o}const r=Object.values(i).find(Boolean);if(r)return r}return t.slug}const no=new Map,lo=(t,e)=>`${t}::${e}`;function dd(t,e){for(const s of t){const i=s.sid||s.slug;i&&no.set(lo(e,i),Ji(s,e))}}function co(t,e){return no.get(lo(e,t))}function hd(t,e){const s=[];for(const i of[t,e]){if(!i)continue;s.push(i);const r=i.split("-")[0];r&&r!==i&&s.push(r)}return s}var pd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Y=(t,e,s,i)=>{for(var r=i>1?void 0:i?ud(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&pd(e,s,r),r};function N(t){return`${Ci[t.type]||""}${t.key}`}let q=class extends E{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._pendingOperators={},this._utagQueries={},this._utagEntries={},this._utagLoading={},this._utagLabels={},this._utagLoaded=new Set,this._utagRequestSeq={},this._tagDebounceTimers={},this._fieldsByPrefixedKeyCache=null}get _tTextOperatorOptions(){return Ni.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return ji.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return at.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tUltratagsOperatorOptions(){return si.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return Ui.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return Dl.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return bi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return Il.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}updated(){for(const t of this._visibleUltratagsFields())this._ensureUltratagsLoaded(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}_getField(t){var e;return((e=this._fieldsByPrefixedKeyCache)==null?void 0:e.fields)!==this.fields&&(this._fieldsByPrefixedKeyCache={fields:this.fields,map:new Map(this.fields.map(s=>[N(s),s]))}),this._fieldsByPrefixedKeyCache.map.get(t)}get _atFieldLimit(){return this.visibleFields.filter(t=>{const e=this._getField(t);return e&&ii(e.type)}).length>=$s}get _selectableFields(){return this.fields.filter(t=>ii(t.type))}_getUIType(t){return Za[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_getOperator(t,e){return this._getApplied(t).operator||this._pendingOperators[t]||e}_hasOperator(t){return!!(this._getApplied(t).operator||this._pendingOperators[t])}_clearPendingOperator(t){if(!(t in this._pendingOperators))return;const{[t]:e,...s}=this._pendingOperators;this._pendingOperators=s}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Oe||t[0]===Te}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===Oe?Oe:((i=e.values)==null?void 0:i[0])===Te?Te:this._specificModeFields.has(t)||e.values&&e.values.length>0?Ot:""}_emitFilterChange(t,e,s){const i=N(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=N(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=N(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=N(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._clearPendingOperator(N(t)),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const s=N(t),r=this._getApplied(s).values||[];this._pendingOperators={...this._pendingOperators,[s]:e},this._emitFilterChange(t,e,r)}_onContentModeChange(t,e){const s=N(t);if(e===Ot){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const r=this._getApplied(s);this._isSpecialValue(r.values)&&this._emitFilterChange(t,r.operator||this._pendingOperators[s],[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator||this._pendingOperators[s],[])}}}_clearFieldFilter(t){const e=N(t);if(this._specificModeFields.has(e)){const d=new Set(this._specificModeFields);d.delete(e),this._specificModeFields=d}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:r,...a}=this._dateFroms;this._dateFroms=a;const{[e]:o,...n}=this._dateTos;this._dateTos=n;const{[e]:l,...h}=this._selectSearches;this._selectSearches=h;const{[e]:p,...f}=this._tagInputs;this._tagInputs=f,t.type===S.ULTRATAGS&&this._utagQueries[e]&&this._onUltratagSearch(t,e,""),this._clearPendingOperator(e),this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,i=this._getOperator(N(t),Ni[0].value);this._emitFilterChange(t,i,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,r=N(t),a=this._getApplied(r),o=this._getOperator(r,ji[0].value),n=[...a.values||[]];s===0?n[0]=i:(n[1]=i,n[0]??(n[0]=""));const l=n.filter(h=>h!==""&&h!==void 0);if(l.length>0){const h=t.type===S.DECIMAL2;if(!l.every(f=>h?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,o,n)}_onBooleanSelect(t,e){var r;const s=this._getApplied(N(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,at[0].value),a=i.values||[];a.length===1&&a[0]===e?this._emitFilterChange(t,r,[]):this._emitFilterChange(t,r,[e])}_onMultiSelectToggle(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,Ui[0].value),a=i.values||[],o=a.includes(e)?a.filter(n=>n!==e):[...a,e];this._emitFilterChange(t,r,o)}_onTagKeydown(t,e){const s=N(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const r=i.replace(/,/g,"").trim();r&&(this._tagInputs={...this._tagInputs,[e]:r},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,at[0].value),a=i.values||[];a.includes(e)||this._emitFilterChange(t,r,[...a,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,r=await this.apiClient.get("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(r.tags||[]).map(a=>a.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),r=this._getOperator(e,at[0].value),a=i.values||[];a.includes(s)||this._emitFilterChange(t,r,[...a,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,at[0].value),a=i.values||[];this._emitFilterChange(t,r,a.filter(o=>o!==e))}_visibleUltratagsFields(){return this._showFieldSelection||this.mode==="selector"?[]:(this.mode==="field"?[this.activeFieldKey]:this.visibleFields).map(e=>this._getField(e)).filter(e=>!!e&&e.type===S.ULTRATAGS)}_cacheUltratagLabels(t){dd(t,this.locale);const e={};for(const s of t){const i=s.sid||s.slug;i&&(e[i]=Ji(s,this.locale))}Object.keys(e).length!==0&&(this._utagLabels={...this._utagLabels,...e})}_ultratagLabel(t){return this._utagLabels[t]||co(t,this.locale)||t}async _loadUltratags(t,e,s){if(!this.apiClient)return;const i=(this._utagRequestSeq[e]??0)+1;this._utagRequestSeq[e]=i;const r=()=>this._utagRequestSeq[e]===i;this._utagLoading={...this._utagLoading,[e]:!0};try{const a=await cd(this.apiClient,{meta:t.key,q:s});if(!r())return;this._utagEntries={...this._utagEntries,[e]:a},this._cacheUltratagLabels(a)}catch{if(!r())return;this._utagEntries={...this._utagEntries,[e]:[]}}finally{r()&&(this._utagLoading={...this._utagLoading,[e]:!1})}}_ensureUltratagsLoaded(t){const e=N(t);this._utagLoaded.has(e)||!this.apiClient||(this._utagLoaded.add(e),this._loadUltratags(t,e,""))}_onUltratagSearch(t,e,s){this._utagQueries={...this._utagQueries,[e]:s},this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),this._tagDebounceTimers[e]=setTimeout(()=>{this._loadUltratags(t,e,s.trim())},300)}_onUltratagToggle(t,e){const s=N(t),i=e.sid||e.slug;if(!i)return;const r=this._getApplied(s),a=this._getOperator(s,si[0].value),o=this._isSpecialValue(r.values)?[]:r.values||[];this._cacheUltratagLabels([e]),this._emitFilterChange(t,a,o.includes(i)?o.filter(n=>n!==i):[...o,i])}_removeUltratag(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,si[0].value),a=i.values||[];this._emitFilterChange(t,r,a.filter(o=>o!==e))}_onDatePreset(t,e){const s=N(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let r="",a="";switch(e){case"today":{const o=new Date(i);o.setHours(0,0,0,0),r=o.toISOString(),a=i.toISOString();break}case"last_week":{const o=new Date(i),n=o.getDay();o.setDate(o.getDate()-(n===0?6:n-1)),o.setHours(0,0,0,0);const l=new Date(o);l.setDate(l.getDate()-7),r=l.toISOString(),a=o.toISOString();break}case"last_month":{const o=new Date(i.getFullYear(),i.getMonth(),1),n=new Date(o);n.setMonth(n.getMonth()-1),r=n.toISOString(),a=o.toISOString();break}case"last_year":{const o=new Date(i.getFullYear(),0,1),n=new Date(o);n.setFullYear(n.getFullYear()-1),r=n.toISOString(),a=o.toISOString();break}}r&&a&&(this._dateFroms={...this._dateFroms,[s]:r},this._dateTos={...this._dateTos,[s]:a},this._emitFilterChange(t,"..",[r,a]))}_onDateInput(t,e,s){const i=s.target.value,r=N(t),a=this._datePresets[r]||"",o=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[r]:o}:this._dateTos={...this._dateTos,[r]:o};let n=this._dateFroms[r]||"",l=this._dateTos[r]||"";a==="after"&&n&&(l=new Date().toISOString(),this._dateTos={...this._dateTos,[r]:l}),a==="before"&&l&&(n=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[r]:n}),n&&l&&this._emitFilterChange(t,"..",[n,l])}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=N(t),r=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),a=(r==null?void 0:r.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(d=>d.trim());if(o.length!==2||o.some(d=>isNaN(Number(d))||d===""))return;const[n,l]=o,p=`${n},${l}..${a||"0"}`;this._emitFilterChange(t,M.IS,[p])}_onGeoRadiusInput(t,e){var l;const s=e.target.value,i=N(t),r=this._getApplied(i);if(!((l=r.values)!=null&&l[0]))return;const a=r.values[0],[o]=a.split("..");let n=o;s&&(n+=`..${s}`),this._emitFilterChange(t,M.IS,[n])}_onEmptyOption(t,e){var o;const s=N(t),i=this._getApplied(s),r=i.operator||this._pendingOperators[s],a=(o=i.values)==null?void 0:o[0];!e||a===e?this._emitFilterChange(t,r,[]):(this._clearPendingOperator(s),this._emitFilterChange(t,i.operator,[e]))}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this._selectableFields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,a)=>a.length===0?v:c`
        <div class="field-group-label">${r}</div>
        ${a.map(o=>{const n=N(o),l=this.visibleFields.includes(n),h=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${l?"selected":""} ${h?"disabled":""}"
              @click=${()=>!h&&!l&&this._addField(o)}
            >
              ${l?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:c`<sfx-icon
                    name=${li[o.type]||"file-text"}
                    .size=${14}
                    ${D({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
                  ></sfx-icon>`}
              <span>${o.label}</span>
            </div>
          `})}
      `;return c`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title"
            >${this.t("addMetadataField","Add metadata field")}</span
          >
          <button class="field-selection-close" @click=${this._closeFieldSelection}>
            <sfx-icon name="close" .size=${16}></sfx-icon>
          </button>
        </div>
        <div class="field-search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${r=>{this._fieldSearch=r.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?c`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:c`${[...s.entries()].map(([r,a])=>i(r,a))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var h,p;const e=N(t),s=this._getApplied(e),r=this._isSpecialValue(s.values)?"":((h=s.values)==null?void 0:h[0])||"",a=this._getContentMode(e),o=a===Oe||a===Te,n=this._getOperator(e,Ni[0].value),l=t.type===S.TEXT_AREA;return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((p=s.values)!=null&&p.length)&&!this._hasOperator(e)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("operator","Operator")}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${n}
            ?disabled=${o}
            @sfx-change=${f=>this._onOperatorChange(t,f.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${a}
            @sfx-change=${f=>this._onContentModeChange(t,f.detail.value)}
          ></sfx-radio-group>
        </div>

        ${a===Ot?c`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${l?c`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${f=>this._onTextInput(t,f)}
                      ></textarea>
                    `:c`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${f=>this._onTextInput(t,f)}
                        @keydown=${f=>{f.key==="Enter"&&f.preventDefault()}}
                      />
                    `}
              </div>
            `:v}
      </div>
    `}_renderNumberFilter(t){var k,T,w;const e=N(t),s=this._getApplied(e),i=this._getOperator(e,ji[0].value),r=this._isSpecialValue(s.values),a=this._getContentMode(e),o=a===Oe||a===Te,n=i===M.RANGE,l=i===M.GREATER_THAN_OR_EQUAL,h=i===M.LESS_THAN_OR_EQUAL,p=t.type===S.DECIMAL2,f=p?"0.01":"1",d=p?"0.00":"0",g=r?"":((k=s.values)==null?void 0:k[0])||"",m=r?"":((T=s.values)==null?void 0:T[1])||"",_=n||l||h,x=n||l||h?this.t("min","Min"):this.t("value","Value"),F=this.t("max","Max");return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((w=s.values)!=null&&w.length)&&!this._hasOperator(e)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <sfx-radio-group
            columns="2"
            .options=${this._tNumberOperatorOptions}
            .value=${i}
            ?disabled=${o}
            @sfx-change=${P=>this._onOperatorChange(t,P.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${a}
            @sfx-change=${P=>this._onContentModeChange(t,P.detail.value)}
          ></sfx-radio-group>
        </div>

        ${a===Ot?c`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${h?"true":v}
                      >${x}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${d}
                      .value=${g}
                      ?disabled=${h}
                      @change=${P=>this._onNumberInput(t,P,0)}
                    />
                  </div>
                  ${_?c`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${l?"true":v}
                            >${F}</span
                          >
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${d}
                            .value=${m}
                            ?disabled=${l}
                            @change=${P=>this._onNumberInput(t,P,1)}
                          />
                        </div>
                      `:v}
                </div>
              </div>
            `:v}
      </div>
    `}_renderBooleanFilter(t){var i,r;const e=this._getApplied(N(t)),s=((i=e.values)==null?void 0:i[0])||"";return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((r=e.values)!=null&&r.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("value","Value")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tBooleanOptions}
            .value=${s}
            @sfx-change=${a=>this._onBooleanSelect(t,a.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=t.possible_values||[],o=this._getOperator(e,at[0].value),n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,h=r.length>0||i,p=n?a.filter(d=>d.label.toLowerCase().includes(n)):a,f=r.length>=$s;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${d=>{this._selectSearches={...this._selectSearches,[e]:d.target.value}}}
          />
          ${l?c`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        ${l?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!this._hasOperator(e)}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!this._hasOperator(e)}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  @sfx-change=${d=>this._onOperatorChange(t,d.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(d=>{const g=a.find(m=>m.api_value===d);return c`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||d}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onSelectOneToggle(t,d)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
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
                <div class="option-item" @click=${()=>this._onEmptyOption(t,d.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></sfx-checkbox>
                  <span>${d.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${p.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(d=>{const g=r.includes(d.api_value),m=!g&&f;return c`
                    <div
                      class="option-item ${m?"disabled":""}"
                      @click=${()=>!m&&this._onSelectOneToggle(t,d.api_value)}
                    >
                      <sfx-checkbox ?checked=${g}></sfx-checkbox>
                      <span>${d.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=t.possible_values||[],o=this._getOperator(e,Ui[0].value),n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,h=r.length>0||i,p=n?a.filter(d=>d.label.toLowerCase().includes(n)):a,f=r.length>=$s;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${d=>{this._selectSearches={...this._selectSearches,[e]:d.target.value}}}
          />
          ${l?c`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        ${l?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!this._hasOperator(e)}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!this._hasOperator(e)}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${o}
                  @sfx-change=${d=>this._onOperatorChange(t,d.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(d=>{const g=a.find(m=>m.api_value===d);return c`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||d}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onMultiSelectToggle(t,d)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
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
                <div class="option-item" @click=${()=>this._onEmptyOption(t,d.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></sfx-checkbox>
                  <span>${d.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${p.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(d=>{const g=r.includes(d.api_value),m=!g&&f;return c`
                    <div
                      class="option-item ${m?"disabled":""}"
                      @click=${()=>!m&&this._onMultiSelectToggle(t,d.api_value)}
                    >
                      <sfx-checkbox ?checked=${g}></sfx-checkbox>
                      <span>${d.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=this._tagInputs[e]||"",o=this._getOperator(e,at[0].value),n=r.length>0||i,l=this._tagSuggestions[e]||[],h=this._tagLoading[e]||!1,p=a.trim().length>0,f=r.length>=$s;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${a}
            @input=${d=>this._onTagInput(t,e,d)}
            @keydown=${d=>this._onTagKeydown(t,d)}
          />
          ${p?c`
                <button
                  class="search-clear"
                  @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        ${p?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!n&&!this._hasOperator(e)}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("condition","Condition")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!n&&!this._hasOperator(e)}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  ?disabled=${i}
                  @sfx-change=${d=>this._onOperatorChange(t,d.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(d=>c`
                            <div class="chip">
                              <span class="chip-label">${d}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeTag(t,d)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
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
                        <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></sfx-checkbox>
                        <span>${d.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${p?c`
              <div class="filter-section">
                <div class="options-list">
                  ${h?c`<div class="option-item disabled">
                        <span>${this.t("loading","Loading...")}</span>
                      </div>`:l.length>0?l.map(d=>{const g=r.includes(d),m=!g&&f;return c`
                            <div
                              class="option-item ${m?"disabled":""}"
                              @click=${()=>!m&&(g?this._removeTag(t,d):this._selectTagSuggestion(t,d))}
                            >
                              <sfx-checkbox ?checked=${g}></sfx-checkbox>
                              <span>${d}</span>
                            </div>
                          `}):c`<div class="option-item disabled">
                          <span>${this.t("noResults","No results")}</span>
                        </div>`}
                </div>
              </div>
            `:v}
      </div>
    `}_renderUltratagsFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=this._getOperator(e,si[0].value),o=this._utagQueries[e]||"",n=o.trim().length>0,l=this._utagEntries[e]||[],h=this._utagLoading[e]||!1,p=r.length>0||i,f=r.length>=$s;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${o}
            @input=${d=>this._onUltratagSearch(t,e,d.target.value)}
          />
          ${n?c`
                <button
                  class="search-clear"
                  @click=${()=>this._onUltratagSearch(t,e,"")}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        ${n?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!p&&!this._hasOperator(e)}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("condition","Condition")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!p&&!this._hasOperator(e)}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tUltratagsOperatorOptions}
                  .value=${a}
                  ?disabled=${i}
                  @sfx-change=${d=>this._onOperatorChange(t,d.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(d=>c`
                            <div class="chip">
                              <span class="chip-label">${this._ultratagLabel(d)}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeUltratag(t,d)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:v}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          ${n?v:c`
                <!-- Empty/Not empty checkboxes -->
                <div class="options-list short">
                  ${this._tEmptyOptions.map(d=>{var g;return c`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,d.value)}
                      >
                        <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></sfx-checkbox>
                        <span>${d.label}</span>
                      </div>
                    `})}
                </div>

                <div class="separator"></div>
              `}

          <div class="options-list">
            ${h?c`<div class="option-item disabled">
                  <span>${this.t("loading","Loading...")}</span>
                </div>`:l.length===0?c`<div class="no-results">
                    ${this.t("noOptionsFound","No options found")}
                  </div>`:l.map(d=>{const g=d.sid||d.slug,m=r.includes(g),_=!m&&f;return c`
                      <div
                        class="option-item ${_?"disabled":""}"
                        @click=${()=>!_&&this._onUltratagToggle(t,d)}
                      >
                        <sfx-checkbox ?checked=${m}></sfx-checkbox>
                        <span>${Ji(d,this.locale)}</span>
                      </div>
                    `})}
          </div>
        </div>
      </div>
    `}_renderDateFilter(t){var p,f;const e=N(t),s=this._datePresets[e]||"",i=this._getApplied(e),a=this._isSpecialValue(i.values)?((p=i.values)==null?void 0:p[0])||"":s,o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=this._dateFroms[e]?ne(this._dateFroms[e]):"",l=this._dateTos[e]?ne(this._dateTos[e]):"",h=["before","after","between"].includes(a);return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!a&&!((f=i.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${o}
            .value=${a==="empty"||a==="non-empty"?a:""}
            @sfx-change=${d=>this._onDatePreset(t,d.detail.value)}
          ></sfx-radio-group>

          <div class="separator"></div>

          <sfx-radio-group
            clearable
            columns="2"
            .options=${cr.map(d=>({...d,label:this.t(d.labelKey,d.label)}))}
            .value=${a!=="empty"&&a!=="non-empty"?a:""}
            @sfx-change=${d=>this._onDatePreset(t,d.detail.value)}
          ></sfx-radio-group>
        </div>

        ${h?c`
              <div class="filter-section">
                <div class="grid-2">
                  ${a==="before"?c`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <sfx-date-input
                            .value=${l}
                            @change=${d=>this._onDateInput(t,"to",d)}
                          ></sfx-date-input>
                        </div>
                      `:a==="after"?c`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <sfx-date-input
                              .value=${n}
                              @change=${d=>this._onDateInput(t,"from",d)}
                            ></sfx-date-input>
                          </div>
                        `:c`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <sfx-date-input
                              .value=${n}
                              @change=${d=>this._onDateInput(t,"from",d)}
                            ></sfx-date-input>
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <sfx-date-input
                              .value=${l}
                              @change=${d=>this._onDateInput(t,"to",d)}
                            ></sfx-date-input>
                          </div>
                        `}
                </div>
              </div>
            `:v}
      </div>
    `}_renderGeoFilter(t){var p,f;const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._getContentMode(e);let a="",o="";if(!i&&((p=s.values)!=null&&p[0])){const d=s.values[0],[g,m]=d.split("..");a=g||"",o=m||""}const n=a.length>0,l=a.split(",").map(d=>d.trim()),h=!n||l.length===2&&l.every(d=>!isNaN(Number(d))&&d!=="");return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((f=s.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${r}
            @sfx-change=${d=>this._onContentModeChange(t,d.detail.value)}
          ></sfx-radio-group>
        </div>

        ${r===Ot?c`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${a}
                      @change=${d=>this._onGeoLocationInput(t,d)}
                    />
                    ${n&&!h?c`<div class="error-text">
                          ${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}
                        </div>`:v}
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
    `}_renderAttachmentFilter(t){var i,r;const e=this._getApplied(N(t)),s=((i=e.values)==null?void 0:i[0])||"";return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((r=e.values)!=null&&r.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${this._tEmptyOptions}
            .value=${s}
            @sfx-change=${a=>this._onEmptyOption(t,a.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=N(t),i=this._getApplied(e).values||[],r=this._getOperator(e,M.IS);return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${i.length===0&&!this._hasOperator(e)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${at}
            .value=${r}
            @sfx-change=${a=>this._onOperatorChange(t,a.detail.value)}
          ></sfx-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder","Search faces")}
            .value=${i.join(", ")}
            @change=${a=>{const n=a.target.value.split(",").map(l=>l.trim()).filter(Boolean);this._emitFilterChange(t,r,n)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"ultratags":return this._renderUltratagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===S.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return v}}_renderFieldSection(t){const e=this._getField(t);if(!e||!ii(e.type))return v;const s=this._collapsedFields.has(t);return c`
      <div class="field-section">
        <div class="field-header" @click=${()=>this._toggleCollapse(t)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${s?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${li[e.type]||"file-text"}
              .size=${14}
              ${D({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
            ></sfx-icon>
            <span>${e.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${i=>{i.stopPropagation(),this._removeField(e)}}
              title=${this.t("removeField","Remove field")}
            >
              <sfx-icon name="close" .size=${14}></sfx-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${s?"collapsed":""}">
          ${this._renderFieldControl(e)}
        </div>
      </div>
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this._selectableFields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,a)=>a.length===0?v:c`
        <div class="field-group-label">${r}</div>
        ${a.map(o=>{const n=N(o),l=this.visibleFields.includes(n),h=!!this.appliedMetadata[n]||!!this.appliedFilters[n],p=this.pinnedFields.includes(n),f=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${h?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(o)}
            >
              <sfx-icon
                name=${li[o.type]||"file-text"}
                .size=${14}
                ${D({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="field-item-label">${o.label}</span>
              <button
                class="field-item-pin ${p?"pinned":""}"
                @click=${d=>{d.stopPropagation(),this._emitPin(n,!p)}}
                title=${p?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${h?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:v}
            </div>
          `})}
      `;return c`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${r=>{this._fieldSearch=r.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?c`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:c`${[...s.entries()].map(([r,a])=>i(r,a))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return!t||!ii(t.type)?c`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`:this._renderFieldControl(t)}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return c`
      ${this._showFieldSelection||!t?this._renderFieldSelection():v}
      ${t?c`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?c`
                  <button class="add-field-btn" @click=${this._openFieldSelection}>
                    <sfx-icon name="filter" .size=${14}></sfx-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `:v}
          `:v}
    `}};q.styles=[je,ut,A`
      /* ── Field selection panel ─────────────────────────────── */

      .add-field-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border: 1px dashed var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        width: 100%;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        transition: all 150ms;
        margin-top: 8px;
      }

      .add-field-btn:hover {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .field-selection {
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
        margin-bottom: 12px;
      }

      .field-selection-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }

      .field-selection-title {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .field-selection-close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding: 2px;
        display: flex;
        align-items: center;
      }

      .field-selection-close:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }

      .field-search {
        width: 100%;
        height: 34px;
        padding: 0 20px 0 32px;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-card, oklch(1 0 0));
        outline: none;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .field-search::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-weight: 400;
      }

      .field-list {
        padding: 12px 0;
      }

      .field-group-label {
        padding: 6px 12px 4px;
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .field-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px 6px 24px;
        cursor: pointer;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        transition: background 100ms;
      }

      .field-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .field-item.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .field-item.selected {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .limit-note {
        padding: 8px 16px 8px 24px;
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }

      .limit-note.at-limit {
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
      }

      .empty-msg {
        padding: 16px 16px 16px 24px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }

      /* ── Per-field filter sections ─────────────────────────── */

      .field-filters {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .field-section {
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        overflow: hidden;
      }

      .field-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        cursor: pointer;
        user-select: none;
      }

      .field-header-left {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding: 2px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        transition: all 100ms;
      }

      .icon-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-border, oklch(92.86% 0.009 247.92));
      }

      .icon-btn.remove:hover {
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
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
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
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
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        flex: 1;
        min-width: 80px;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .tag-input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        transition: background 150ms;
      }

      .option-item:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      }

      .field-item-pin.pinned {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .field-item.has-filter {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      }
    `];Y([u({type:Array})],q.prototype,"fields",2);Y([u({type:Object})],q.prototype,"appliedFilters",2);Y([u({type:Array})],q.prototype,"visibleFields",2);Y([u()],q.prototype,"mode",2);Y([u()],q.prototype,"activeFieldKey",2);Y([u({type:Array})],q.prototype,"pinnedFields",2);Y([u({type:Object})],q.prototype,"appliedMetadata",2);Y([u({attribute:!1})],q.prototype,"apiClient",2);Y([u({attribute:!1})],q.prototype,"t",2);Y([u()],q.prototype,"locale",2);Y([b()],q.prototype,"_showFieldSelection",2);Y([b()],q.prototype,"_fieldSearch",2);Y([b()],q.prototype,"_collapsedFields",2);Y([b()],q.prototype,"_tagInputs",2);Y([b()],q.prototype,"_tagSuggestions",2);Y([b()],q.prototype,"_tagLoading",2);Y([b()],q.prototype,"_datePresets",2);Y([b()],q.prototype,"_dateFroms",2);Y([b()],q.prototype,"_dateTos",2);Y([b()],q.prototype,"_specificModeFields",2);Y([b()],q.prototype,"_selectSearches",2);Y([b()],q.prototype,"_pendingOperators",2);Y([b()],q.prototype,"_utagQueries",2);Y([b()],q.prototype,"_utagEntries",2);Y([b()],q.prototype,"_utagLoading",2);Y([b()],q.prototype,"_utagLabels",2);q=Y([O("ap-filter-metadata")],q);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var r=i>1?void 0:i?gd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&fd(e,s,r),r};let W=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.mode="field",this.activeKey=C.STATUS,this.appliedKeys=[],this.pinnedKeys=[],this.forcedKeys=[],this.selectedStatus=[],this.statusOperator=es,this.approverValues=[],this.approverOperator=es,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=es,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch="",this._pendingOperators={}}_operatorFor(t,e,s){return s.length>0?e:this._pendingOperators[t]||e}_setPendingOperator(t,e){this._pendingOperators={...this._pendingOperators,[t]:e}}_clearPendingOperator(t){const{[t]:e,...s}=this._pendingOperators;this._pendingOperators=s}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===Oe||t===Te)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _hasApproverUsers(){return this.approverUsers.length>0}get _hasRequesterUsers(){return this.requesterUsers.length>0}get _effectiveStatusOperator(){return this._operatorFor(C.STATUS,this.statusOperator,this.selectedStatus)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(i=>i!==t):[...this.selectedStatus,t];if(e.length>0&&e.every(i=>i===Oe||i===Te)){this._clearPendingOperator(C.STATUS),this._emitChange(C.STATUS,e,this.statusOperator);return}this._emitChange(C.STATUS,e,this._effectiveStatusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._setPendingOperator(C.STATUS,e),this._emitChange(C.STATUS,this.selectedStatus,e)}_clearStatus(){this._clearPendingOperator(C.STATUS),this._emitChange(C.STATUS,[],this.statusOperator)}get _effectiveApproverOperator(){return this._operatorFor(C.APPROVER,this.approverOperator,this.approverValues)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(C.APPROVER,e,this._effectiveApproverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._setPendingOperator(C.APPROVER,e),this._emitChange(C.APPROVER,this.approverValues,e)}_clearApprover(){this._clearPendingOperator(C.APPROVER),this._emitChange(C.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}get _effectiveRequesterOperator(){return this._operatorFor(C.REQUESTOR,this.requesterOperator,this.requesterValues)}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(C.REQUESTOR,e,this._effectiveRequesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._setPendingOperator(C.REQUESTOR,e),this._emitChange(C.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._clearPendingOperator(C.REQUESTOR),this._emitChange(C.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===Ge.BEFORE||t===Ge.AFTER||t===Ge.BETWEEN||t===Ge.SPECIFIC?t:Ge.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",r="";if(s===Ge.PRESET){const a=dr(e);a&&(i=a.from,r=a.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:r})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.DUE_DATE,values:{field:C.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var r;return i.name.toLowerCase().includes(s)||(((r=i.email)==null?void 0:r.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const e=this.selectedStatus.length>0||!!this._pendingOperators[C.STATUS];return c`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${this._clearStatus}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${ha.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
          .value=${this._effectiveStatusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${bi.map(s=>c`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(s.value)}
                @sfx-toggle=${()=>this._toggleStatus(s.value)}
                >${this.t(s.labelKey,s.label)}</sfx-checkbox
              >
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${Ml.map(s=>c`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(s.value)}
                @sfx-toggle=${()=>this._toggleStatus(s.value)}
              >
                <span class="status-icon-label">
                  <sfx-icon
                    name=${s.icon}
                    .size=${16}
                    ${D({color:s.iconColor})}
                  ></sfx-icon>
                  ${this.t(s.labelKey,s.label)}
                </span>
              </sfx-checkbox>
            `)}
        </div>
      </div>
    `}_renderUserItem(t,e,s){return c`
      <div class="user-item" @click=${s}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
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
        ${e.map(i=>{const r=t.find(a=>a.uuid===i);return r?c`
            <div class="chip">
              <span class="user-chip-avatar">
                ${r.avatarUrl?c`<img src=${r.avatarUrl} alt="" />`:c`<span>${this._getInitials(r)}</span>`}
              </span>
              <span class="chip-label">${r.name}</span>
              <button class="chip-remove" @click=${()=>s(i)}>
                <sfx-icon name="close" .size=${10}></sfx-icon>
              </button>
            </div>
          `:v})}
      </div>
    `}_renderUserPickerSection(t){const s=t.selectedValues.length>0||!!this._pendingOperators[t.filterKey],i=this._filterUsers(t.users,t.search);return c`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!s} @click=${t.onClear}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${ha.map(r=>({...r,label:this.t(r.labelKey,r.label)}))}
          .value=${t.operator}
          @sfx-change=${t.onOperatorChange}
        ></sfx-radio-group>

        ${this._renderUserSelectedChips(t.users,t.selectedValues,t.onToggle)}

        <div class="search-wrapper mt-12">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${t.searchPlaceholder}
            .value=${t.search}
            @input=${t.onSearchInput}
          />
          ${t.search?c`
                <button class="search-clear" @click=${t.onSearchClear}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        <div class="options-list users-list">
          ${i.length===0?c`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:i.map(r=>this._renderUserItem(r,t.selectedValues.includes(r.uuid),()=>t.onToggle(r.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this._effectiveApproverOperator,filterKey:C.APPROVER,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this._effectiveRequesterOperator,filterKey:C.REQUESTOR,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return c`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearDueDate}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${bi.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===Oe||this.dueDatePreset===Te?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${Ja.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==Oe&&this.dueDatePreset!==Te?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?c`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset!=="before"?c`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("startDate","Start date")}</span>
                        <sfx-date-input
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        ></sfx-date-input>
                      </div>
                    `:v}
                ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?c`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("endDate","End date")}</span>
                        <sfx-date-input
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        ></sfx-date-input>
                      </div>
                    `:v}
              </div>
            `:v}
      </div>
    `}get _availableSubFilters(){return nt.filter(t=>this.forcedKeys.includes(t.key)?!1:t.key===C.APPROVER?this._hasApproverUsers:t.key===C.REQUESTOR?this._hasRequesterUsers:!0)}_emitSubFilterSelect(t){this.dispatchEvent(new CustomEvent("approval-filter-select",{detail:{key:t},bubbles:!0,composed:!0}))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:e},bubbles:!0,composed:!0}))}_renderSelector(){return c`
      <div class="selector-wrap">
        ${this._availableSubFilters.map(t=>{const e=this.appliedKeys.includes(t.key),s=this.pinnedKeys.includes(t.key);return c`
            <div
              class="sub-filter-item ${e?"has-filter":""}"
              @click=${()=>this._emitSubFilterSelect(t.key)}
            >
              <sfx-icon
                name=${t.icon}
                .size=${14}
                ${D({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="sub-filter-label">${this.t(t.labelKey,t.label)}</span>
              <button
                class="sub-filter-pin ${s?"pinned":""}"
                title=${s?this.t("unpinFilter","Unpin filter"):this.t("pinFilter","Pin filter")}
                @click=${i=>{i.stopPropagation(),this._emitPin(t.key,!s)}}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${e?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:v}
            </div>
          `})}
      </div>
    `}render(){if(this.mode==="selector")return this._renderSelector();switch(this.activeKey){case C.APPROVER:return c`<div class="filter-content">${this._renderApproverSection()}</div>`;case C.REQUESTOR:return c`<div class="filter-content">${this._renderRequesterSection()}</div>`;case C.DUE_DATE:return c`<div class="filter-content">${this._renderDueDateSection()}</div>`;default:return c`<div class="filter-content">${this._renderStatusSection()}</div>`}}};W.styles=[je,ut,A`
      .options-list.short {
        max-height: none;
      }
      .date-input-col {
        display: flex;
        flex-direction: column;
        gap: 4px;
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
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }
      .user-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .user-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user-email {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user-chip-avatar {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        overflow: hidden;
        font-size: 0.625rem;
        font-weight: 500;
      }
      .user-chip-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .selector-wrap {
        padding: 4px 0;
        min-width: 220px;
      }
      .sub-filter-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        cursor: pointer;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        transition: background 100ms;
      }
      .sub-filter-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .sub-filter-label {
        flex: 1;
        white-space: nowrap;
      }
      .sub-filter-pin {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border: none;
        background: none;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0;
        transition:
          opacity 100ms,
          color 100ms;
      }
      .sub-filter-item:hover .sub-filter-pin,
      .sub-filter-pin.pinned {
        opacity: 1;
      }
      .sub-filter-pin.pinned {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .sub-filter-item.has-filter {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
    `];J([u({attribute:!1})],W.prototype,"t",2);J([u()],W.prototype,"mode",2);J([u()],W.prototype,"activeKey",2);J([u({type:Array})],W.prototype,"appliedKeys",2);J([u({type:Array})],W.prototype,"pinnedKeys",2);J([u({type:Array})],W.prototype,"forcedKeys",2);J([u({type:Array})],W.prototype,"selectedStatus",2);J([u()],W.prototype,"statusOperator",2);J([u({type:Array})],W.prototype,"approverValues",2);J([u()],W.prototype,"approverOperator",2);J([u({type:Array})],W.prototype,"approverUsers",2);J([u({type:Array})],W.prototype,"requesterValues",2);J([u()],W.prototype,"requesterOperator",2);J([u({type:Array})],W.prototype,"requesterUsers",2);J([u()],W.prototype,"dueDateKind",2);J([u()],W.prototype,"dueDatePreset",2);J([u()],W.prototype,"dueDateFrom",2);J([u()],W.prototype,"dueDateTo",2);J([b()],W.prototype,"_approverSearch",2);J([b()],W.prototype,"_requesterSearch",2);J([b()],W.prototype,"_pendingOperators",2);W=J([O("ap-filter-approval")],W);var vd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var r=i>1?void 0:i?md(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&vd(e,s,r),r};const bd=300;function xd(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let Re=class extends E{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=xd(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.PRODUCT_REF,values:e,operator:M.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},bd)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.get("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return c`
      <div class="product-item" @click=${()=>this._toggle(t)}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return c`
      <div class="filter-content">
        <div class="filter-header">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="product-search"
            type="text"
            .placeholder=${this.t("searchProductRefsPlaceholder","Search product references")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?c`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:v}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button class="clear-btn" @click=${this._clearAll}>
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:v}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>c`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:v}

        <!-- Search results -->
        ${this._isSearching?c`
              <div class="filter-section">
                <span class="section-label"
                  >${this.t("productReferences","Product references")}</span
                >
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
                ${t?c`<sfx-icon
                      name="box"
                      .size=${40}
                      ${D({color:"var(--sfx-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}
                    ></sfx-icon>`:v}
                <div class="placeholder-title">
                  ${this.t("findProductRef","Find product reference")}
                </div>
                <div class="placeholder-text">
                  ${this.t("productRefSearchHint","By using the search or pressing the button below to import the product references list.")}
                </div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
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
            <div
              class="dialog-overlay"
              @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}
            >
              <div class="dialog">
                <div class="dialog-header">
                  ${this.t("addProductRefsList","Add products references list")}
                </div>
                <div class="dialog-body">
                  <div class="info-alert" ${D({"margin-top":"0"})}>
                    <sfx-icon name="info" .size=${14}></sfx-icon>
                    <span
                      >${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span
                    >
                  </div>
                  <label
                    class="input-label"
                    ${D({"margin-bottom":"0","font-weight":"400",color:"var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89))"})}
                    >${this.t("productReferences","Product references")}</label
                  >
                  <textarea
                    class="dialog-textarea"
                    .placeholder=${this.t("productRefsTextareaPlaceholder","Enter product references separated by new lines")}
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>
                    ${this.t("cancel","Cancel")}
                  </button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>
                    ${this.t("continue","Continue")}
                  </button>
                </div>
              </div>
            </div>
          `:v}
    `}};Re.styles=[je,ut,A`
      .product-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .product-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .product-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        background: var(--sfx-card, oklch(1 0 0));
        margin: -10px -8px 10px;
      }

      .filter-header .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }

      .product-search {
        width: 100%;
        padding: 8px 32px 8px 32px;
        border: none;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        outline: none;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .product-search::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .placeholder-text {
        font-size: 0.8125rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .add-list-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        padding: 6px 14px;
        border: none;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        background: none;
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        cursor: pointer;
        transition: background 150ms;
      }

      .add-list-btn:hover {
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
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
        background: var(--sfx-card, oklch(1 0 0));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
        width: 420px;
        max-width: 90vw;
        padding: 0;
      }

      .dialog-header {
        padding: 16px 20px;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
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
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-background, oklch(1 0 0));
        resize: vertical;
        outline: none;
      }

      .dialog-textarea:focus {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .dialog-textarea::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .dialog-footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding: 12px 20px;
        border-top: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }

      .dialog-btn {
        padding: 8px 16px;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        cursor: pointer;
        transition: background 150ms;
      }

      .dialog-btn-cancel {
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .dialog-btn-cancel:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .dialog-btn-primary {
        border: none;
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
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
        border-radius: var(--sfx-radius-sm, 6px);
        background: linear-gradient(
          90deg,
          var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
          #e8e8ea 50%,
          var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .skeleton-item {
          animation: none;
        }
      }

      .wildcard-tooltip {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: 4px;
      }
    `];Qe([u({type:Array})],Re.prototype,"selected",2);Qe([u({attribute:!1})],Re.prototype,"apiClient",2);Qe([u({attribute:!1})],Re.prototype,"t",2);Qe([wt(".product-search")],Re.prototype,"_searchInput",2);Qe([b()],Re.prototype,"_search",2);Qe([b()],Re.prototype,"_debouncedSearch",2);Qe([b()],Re.prototype,"_products",2);Qe([b()],Re.prototype,"_isLoading",2);Qe([b()],Re.prototype,"_showAddList",2);Qe([b()],Re.prototype,"_addListText",2);Re=Qe([O("ap-filter-product-ref")],Re);var _d=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,U=(t,e,s,i)=>{for(var r=i>1?void 0:i?yd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&_d(e,s,r),r};let R=class extends E{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=hr,this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.enabledFilterKeys=null,this.enabledMetadataFields=null,this.metadataCategoryEnabled=!0,this.approverUsers=[],this.requesterUsers=[],this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(a=>{var o;return a instanceof HTMLElement&&a.classList.contains("chip")&&((o=a.closest)==null?void 0:o.call(a,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(r=>r instanceof HTMLElement?r.classList.contains("popover-anchor")||r.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&e.some(r=>r instanceof HTMLElement&&(r.classList.contains("dropdown-menu")||r.classList.contains("filter-dropdown")||r.classList.contains("submenu-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,r=e.offsetWidth;this._externalLeft+r>i-8&&(e.style.left=`${Math.max(8,i-r-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showApprovalSelector=!1,this._showMetadataSelector=!this._showMetadataSelector}_toggleApprovalSelector(){this._showMetadataSelector=!1,this._showApprovalSelector=!this._showApprovalSelector}_handleApprovalFilterSelect(t){t.stopPropagation();const e=t.detail.key;if(this._showApprovalSelector=!1,this._showDropdown=!1,!(e in this.filters.applied)){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:e},bubbles:!0,composed:!0}));return}this._openFilter=e,this._openMetadataField=null,this._clearExternalAnchor()}_clearExternalAnchor(){this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const r=t==="approval"&&this._isApprovalActive();if(!e&&!this._isFilterActive(t)&&!r){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleVariantDefaultChange(t){this.dispatchEvent(new CustomEvent("variant-default-change",{detail:{name:t.detail.value},bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalSubKey(t){return!!t&&nt.some(e=>e.key===t)}_isApprovalActive(){const t=this.filters.applied;return C.STATUS in t||C.APPROVER in t||C.REQUESTOR in t||C.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e,this._clearExternalAnchor()}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${Ci[e.type]||""}${e.key}`===t)return e.label;return t}get _visibleAppliedMetadataCount(){if(!this.metadataCategoryEnabled)return 0;const t=this.enabledMetadataFields;return t?Object.keys(this.filters.metadata.applied).filter(e=>t.includes(rs(e))).length:Object.keys(this.filters.metadata.applied).length}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Ps.find(s=>s.key===t)??nt.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var i;const{t:e}=this,s=this.filters.applied;switch(t){case"type":{const r=s.type;return c`<ap-filter-type
          .selected=${(r==null?void 0:r.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const r=s.tags;return c`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const r=s.labels;return c`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const r=s.color;return c`<ap-filter-color
          .values=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const r=s.date;return c`<ap-filter-date
          .filterKey=${"date"}
          .field=${(r==null?void 0:r.field)||"created"}
          .kind=${(r==null?void 0:r.kind)||null}
          .from=${(r==null?void 0:r.from)||""}
          .to=${(r==null?void 0:r.to)||""}
          .preset=${(r==null?void 0:r.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const r=s.asset_expiration;return c`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(r==null?void 0:r.kind)||null}
          .from=${(r==null?void 0:r.from)||""}
          .to=${(r==null?void 0:r.to)||""}
          .preset=${(r==null?void 0:r.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const r=s.size,a=((i=r==null?void 0:r.values)==null?void 0:i[0])||"",[o,n]=a.split(".."),l=o?parseFloat(o)/1e6:0,h=n?parseFloat(n)/1e6:0;return c`<ap-filter-size
          .min=${l}
          .max=${h}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const r=s.image,a=r&&"resolution"in r?r:null;return c`<ap-filter-image
          .selectedResolution=${(a==null?void 0:a.resolution)||[]}
          .selectedOrientation=${(a==null?void 0:a.orientation)||[]}
          .selectedFaces=${(a==null?void 0:a.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case $.APPROVAL:return this._renderApprovalSelector();case C.STATUS:case C.APPROVER:case C.REQUESTOR:case C.DUE_DATE:{const r=s[C.STATUS],a=s[C.APPROVER],o=s[C.REQUESTOR],n=s[C.DUE_DATE];return c`<ap-filter-approval
          mode="field"
          .activeKey=${t}
          .selectedStatus=${(r==null?void 0:r.values)||[]}
          .statusOperator=${(r==null?void 0:r.operator)||es}
          .approverValues=${(a==null?void 0:a.values)||[]}
          .approverOperator=${(a==null?void 0:a.operator)||es}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(o==null?void 0:o.values)||[]}
          .requesterOperator=${(o==null?void 0:o.operator)||es}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(n==null?void 0:n.kind)??null}
          .dueDatePreset=${(n==null?void 0:n.preset)||""}
          .dueDateFrom=${(n==null?void 0:n.from)||""}
          .dueDateTo=${(n==null?void 0:n.to)||""}
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
            .locale=${this.locale}
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
          .locale=${this.locale}
          .t=${e}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const r=s.product_ref;return c`<ap-filter-product-ref
          .selected=${(r==null?void 0:r.values)||[]}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return v}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",r=s?this._visibleAppliedMetadataCount>0:i?this._isApprovalActive():this._isFilterActive(t.key),a=this.pinnedFilters.includes(t.key),o=s||i,n=c`
      <button
        class="filter-btn ${r?"active":""} ${a?"pinned":""}"
        @click=${()=>{s?this._toggleMetadataSelector():i?this._toggleApprovalSelector():this.openFilterPanel(t.key)}}
      >
        <span class="filter-btn-icon">
          <sfx-icon name=${t.icon} .size=${18}></sfx-icon>
        </span>
        <span class="filter-btn-label"> ${e(t.labelKey,t.label)} </span>
        ${o?c`<span class="submenu-chevron"
              ><sfx-icon name="chevron-right" .size=${14}></sfx-icon
            ></span>`:c`
              <span
                class="pin-btn ${a?"pinned":""}"
                title=${a?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${l=>this._togglePin(t.key,l)}
              >
                <sfx-icon name="pin" .size=${14}></sfx-icon>
              </span>
            `}
      </button>
    `;return o?c`
      <div class="filter-btn-wrapper">
        ${n}
        ${s&&this._showMetadataSelector?c`
              <div class="submenu-overlay">
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
        ${i&&this._showApprovalSelector?c` <div class="submenu-overlay">${this._renderApprovalSelector()}</div> `:v}
      </div>
    `:n}_renderApprovalSelector(){return c`<ap-filter-approval
      mode="selector"
      .forcedKeys=${nt.map(t=>t.key).filter(t=>this.forcedFilterKeys.includes(t))}
      .appliedKeys=${nt.map(t=>t.key).filter(t=>t in this.filters.applied)}
      .pinnedKeys=${this.pinnedFilters.filter(t=>nt.some(e=>e.key===t))}
      .approverUsers=${this.approverUsers}
      .requesterUsers=${this.requesterUsers}
      .t=${this.t}
      @approval-filter-select=${this._handleApprovalFilterSelect}
    ></ap-filter-approval>`}render(){const{t}=this,e=Object.keys(this.filters.applied).length+this._visibleAppliedMetadataCount,s=Ps.filter(i=>!this.forcedFilterKeys.includes(i.key)&&(!this.enabledFilterKeys||this.enabledFilterKeys.includes(i.key)));return c`
      <div class="toolbar-row">
        ${this.isLoading?c`<span class="count-skeleton"></span>`:c`<span class="count"
              >${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span
            >`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters&&s.length>0?c`
                <div class="filter-dropdown">
                  <button
                    class="add-btn ${this._showDropdown?"open":""}"
                    @click=${this._toggleDropdown}
                  >
                    <sfx-icon name="filter" .size=${16}></sfx-icon>
                    ${t("filters","Filters")}
                    ${e>0?c`<span class="filter-count">${e}</span>`:c`<sfx-icon name="chevron-down" .size=${16}></sfx-icon>`}
                  </button>
                  ${this._showDropdown?c`
                        <div class="dropdown-menu">
                          ${s.map(i=>this._renderFilterButton(i))}
                        </div>
                      `:v}
                </div>
              `:v}
          <sfx-dropdown
            variant="borderless"
            .label=${t("sort","Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map(i=>({...i,label:t(i.labelKey,i.label)}))}
            @sfx-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></sfx-dropdown>
          ${this.showVariants?c`
                <sfx-dropdown
                  variant="borderless"
                  .label=${t("insertAs","Insert as")}
                  .value=${this.defaultVariantName}
                  .options=${this.variantOptions}
                  @sfx-change=${this._handleVariantDefaultChange}
                  @dropdown-open=${this._handleSortOpen}
                ></sfx-dropdown>
              `:v}
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection==="asc"?t("sortAscending","Sort ascending"):t("sortDescending","Sort descending")}
            title=${this.sortDirection==="asc"?t("ascending","Ascending"):t("descending","Descending")}
          >
            <sfx-icon
              name=${this.sortDirection==="asc"?"sort-asc":"sort-desc"}
              .size=${18}
            ></sfx-icon>
          </button>
          ${this.showCreateFolder?c`
                <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
                  <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
                  New folder
                </button>
              `:v}
          ${this.showUpload?c`
                <button class="upload-btn" @click=${this._handleUploadClick}>
                  <sfx-icon name="upload" .size=${16}></sfx-icon>
                  ${t("upload","Upload")}
                </button>
              `:v}
        </div>
      </div>
      ${this._openFilter?c`
            <div
              class="popover-anchor ${this._externalTrigger?"external":""}"
              ${D(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}
            >
              ${this._externalTrigger?v:c`
                    <div class="anchor-tab">
                      ${this._openFilter==="metadata"&&this._openMetadataField?c`
                            <button
                              class="anchor-back"
                              @click=${i=>{i.stopPropagation(),this._openMetadataField=null}}
                              title=${t("backToFields","Back to fields")}
                            >
                              <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                            </button>
                            ${this._getMetadataFieldLabel(this._openMetadataField)}
                          `:this._isApprovalSubKey(this._openFilter)?c`
                              <button
                                class="anchor-back"
                                @click=${i=>{i.stopPropagation(),this._openFilter=$.APPROVAL}}
                                title=${t("backToApproval","Back to approval filters")}
                              >
                                <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                              </button>
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${t(Zt[this._openFilter]??this._openFilter,Pt[this._openFilter]||this._openFilter)}
                            `:c`
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${t(Zt[this._openFilter]??this._openFilter,Pt[this._openFilter]||this._openFilter)}
                            `}
                      <button
                        class="anchor-close"
                        @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}}
                        title="Close"
                      >
                        <sfx-icon name="close" .size=${14}></sfx-icon>
                      </button>
                    </div>
                  `}
              <div
                class="popover-panel"
                ${D(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}
              >
                ${this._renderFilterContent(this._openFilter)}
              </div>
            </div>
          `:v}
    `}};R.styles=A`
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
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .count-skeleton {
        animation: none;
      }
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
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .add-btn sfx-icon {
      transition: transform 200ms;
    }
    .add-btn.open sfx-icon:last-child {
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
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: var(--sfx-primary-foreground, oklch(1 0 0));
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
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow:
        0 10px 25px -5px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
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
    .submenu-overlay {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      width: 280px;
      max-height: 400px;
      overflow-y: auto;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow:
        0 10px 25px -5px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      text-align: left;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn.active {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .filter-btn.active:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn.pinned {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .filter-btn.pinned:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon,
    .filter-btn.pinned .filter-btn-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label sfx-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .pin-btn.pinned {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .submenu-chevron {
      display: flex;
      align-items: center;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: auto;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
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
      background: var(--sfx-primary, oklch(0.65 0.19 258));
      color: var(--sfx-primary-foreground, #fff);
      cursor: pointer;
      white-space: nowrap;
      transition: opacity 150ms;
    }
    .upload-btn:hover {
      opacity: 0.9;
    }
    .upload-btn:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.65 0.19 258));
      outline-offset: 2px;
    }

    .new-folder-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: 1px solid var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .new-folder-btn:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .new-folder-btn:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
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
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-bottom: 1px solid var(--sfx-card, oklch(1 0 0));
      border-radius: 8px 8px 0 0;
      background: var(--sfx-card, oklch(1 0 0));
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-close:hover {
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .anchor-back {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-back:hover {
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
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
  `;U([u({type:Number})],R.prototype,"totalCount",2);U([u({type:Number})],R.prototype,"totalFolderCount",2);U([u({type:Boolean})],R.prototype,"isLoading",2);U([u({type:Boolean})],R.prototype,"showUpload",2);U([u({type:Boolean})],R.prototype,"showCreateFolder",2);U([u({type:Boolean})],R.prototype,"showFilters",2);U([u()],R.prototype,"countLabel",2);U([u()],R.prototype,"sortBy",2);U([u()],R.prototype,"sortDirection",2);U([u({type:Array})],R.prototype,"sortOptions",2);U([u({type:Boolean})],R.prototype,"showVariants",2);U([u({type:Array})],R.prototype,"variantOptions",2);U([u()],R.prototype,"defaultVariantName",2);U([u({type:Object})],R.prototype,"filters",2);U([u({type:Array})],R.prototype,"labels",2);U([u({type:Array})],R.prototype,"tags",2);U([u({type:Array})],R.prototype,"fileTypes",2);U([u({type:Array})],R.prototype,"metadataFields",2);U([u({type:Array})],R.prototype,"pinnedFilters",2);U([u({type:Array})],R.prototype,"forcedFilterKeys",2);U([u({type:Array})],R.prototype,"enabledFilterKeys",2);U([u({type:Array})],R.prototype,"enabledMetadataFields",2);U([u({type:Boolean})],R.prototype,"metadataCategoryEnabled",2);U([u({type:Array})],R.prototype,"approverUsers",2);U([u({type:Array})],R.prototype,"requesterUsers",2);U([u({attribute:!1})],R.prototype,"apiClient",2);U([u({attribute:!1})],R.prototype,"t",2);U([u()],R.prototype,"locale",2);U([wt("sfx-dropdown")],R.prototype,"_sortDropdown",2);U([b()],R.prototype,"_showDropdown",2);U([b()],R.prototype,"_showMetadataSelector",2);U([b()],R.prototype,"_showApprovalSelector",2);U([b()],R.prototype,"_openFilter",2);U([b()],R.prototype,"_openMetadataField",2);U([b()],R.prototype,"_externalTrigger",2);U([b()],R.prototype,"_externalLeft",2);U([b()],R.prototype,"_externalTop",2);R=U([O("ap-content-toolbar")],R);var $d=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,ge=(t,e,s,i)=>{for(var r=i>1?void 0:i?wd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&$d(e,s,r),r};let ie=class extends E{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en"}_mapTypeLabel(t){var i;const e=(i=mi.find(r=>r.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),r=s?parseFloat(s):null,a=i?parseFloat(i):null,o=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return r!==null&&a!==null?`${o(r)} – ${o(a)}`:r!==null?`> ${o(r)}`:a!==null?`< ${o(a)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===$.SIZE)return this._getSizeSummary(s);if(e===$.COLOR){const a=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return a.length===0?"":a.length===1?a[0]:`${a[0]} +${a.length-1}`}const i=a=>a===Oe?this.t("empty","Empty"):a===Te?this.t("notEmpty","Not empty"):null;if(s.metadataType===S.ULTRATAGS){const a=o=>i(o)??co(o,this.locale)??o;return s.values.length===1?a(s.values[0]):`${a(s.values[0])} +${s.values.length-1}`}const r=e===$.TYPE?a=>i(a)??this._mapTypeLabel(a):e===$.TAGS?a=>{var o;return i(a)??(((o=this.tags.find(n=>n.sid===a))==null?void 0:o.label)||a)}:e===$.LABELS?a=>{var o;return i(a)??(((o=this.labels.find(n=>n.sid===a))==null?void 0:o.name)||a)}:e===C.APPROVER?a=>{var o;return i(a)??(((o=this.approverUsers.find(n=>n.uuid===a))==null?void 0:o.name)||a)}:e===C.REQUESTOR?a=>{var o;return i(a)??(((o=this.requesterUsers.find(n=>n.uuid===a))==null?void 0:o.name)||a)}:a=>i(a)??a;return s.values.length===1?r(s.values[0]):`${r(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===C.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=t.preset||"";if(e===Oe)return this.t("empty","Empty");if(e===Te)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const s=Ja.find(i=>i.value===e);return s?this.t(s.labelKey,s.label):e}if(t.kind==="between"){if(t.from&&t.to)return`${ne(t.from)} – ${ne(t.to)}`;if(t.from)return`> ${ne(t.from)}`;if(t.to)return`< ${ne(t.to)}`}return t.kind==="after"&&t.from?`> ${ne(t.from)}`:t.kind==="before"&&t.to?`< ${ne(t.to)}`:t.kind==="specific"&&t.from?ne(t.from):""}_getDateSummary(t){const e=Wa.find(n=>n.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...cr,...Xa],r=t.preset?i.find(n=>n.value===t.preset):null,a=r?this.t(r.labelKey,r.label):t.preset||"";let o="";switch(t.kind){case"preset":o=a;break;case"before":o=t.to?`< ${ne(t.to)}`:a;break;case"after":o=t.from?`> ${ne(t.from)}`:a;break;case"between":t.from&&t.to?o=`${ne(t.from)} – ${ne(t.to)}`:t.from?o=`> ${ne(t.from)}`:t.to&&(o=`< ${ne(t.to)}`);break;case"specific":o=t.from?ne(t.from):"";break;default:o=a}return o?s?`${s}: ${o}`:o:""}_getFilterIcon(t){const e=Ps.find(s=>s.key===t)??nt.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_getMetadataLabel(t){const e=rs(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=rs(t),s=this.metadataFields.find(i=>i.key===e);return s&&li[s.type]||"file-text"}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const{t:s}=this,i=this._getFilterSummary(e,t),r=e.type==="date";return c`
      <span class="chip forced">
        ${(r||t===$.TYPE||t===$.SIZE)&&i?c`<span class="chip-label">${i}</span>`:c`
              <span class="chip-label"
                >${s(Zt[t]??t,Pt[t]||t)}</span
              >
              ${i?c`<span class="chip-summary">${i}</span>`:v}
            `}
        <span class="chip-lock">
          <sfx-icon name="lock" .size=${12}></sfx-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return c`
        <span
          class="chip pinned-empty ${t===this.activeFilter?"active":""}"
          @click=${a=>this._openFilter(t,a)}
        >
          <span class="chip-icon"
            ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
          ></span>
          <span class="chip-label"
            >${s(Zt[t]??t,Pt[t]||t)}</span
          >
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),r=t===$.DATE||t===$.TYPE||t===$.SIZE;return c`
      <span
        class="chip ${t===this.activeFilter?"active":""}"
        @click=${a=>this._openFilter(t,a)}
      >
        ${r&&i?c` <span class="chip-icon"
                ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
              ></span>
              <span class="chip-label">${i}</span>`:c`
              <span class="chip-label"
                >${s(Zt[t]??t,Pt[t]||t)}</span
              >
              ${i?c`<span class="chip-summary">${i}</span>`:v}
            `}
        <button
          class="chip-remove"
          @click=${a=>{a.stopPropagation(),this._removeFilter(t)}}
          title=${s("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const a=this._getMetadataLabel(t),o=this._getMetadataIcon(t);return c`
        <span
          class="chip pinned-empty ${t===this.activeMetadataField?"active":""}"
          @click=${n=>this._openMetadataFilter(t,n)}
        >
          <span class="chip-icon"><sfx-icon name=${o} .size=${16}></sfx-icon></span>
          <span class="chip-label">${a}</span>
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),r=this._getMetadataIcon(t);return c`
      <span
        class="chip ${t===this.activeMetadataField?"active":""}"
        @click=${a=>this._openMetadataFilter(t,a)}
      >
        <span class="chip-icon"><sfx-icon name=${r} .size=${16}></sfx-icon></span>
        <span class="chip-label">${i}</span>
        ${s?c`<span class="chip-summary">${s}</span>`:v}
        <button
          class="chip-remove"
          @click=${a=>{a.stopPropagation(),this._removeMetadataFilter(t)}}
          title=${this.t("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}render(){const t=Qi(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),r=new Set(this.pinnedFilters),a=new Set(this.pinnedMetadataFields),o=this.pinnedFilters.filter(g=>!e.has(g)),n=s.filter(g=>!r.has(g)),l=i.filter(g=>!a.has(g)),h=this.pendingFilter&&!r.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),p=this.pendingMetadataField&&!a.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),f=s.length+i.length>0;return e.size+o.length+this.pinnedMetadataFields.length+n.length+l.length+(h?1:0)+(p?1:0)===0?v:c`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${o.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${n.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${h?c`
                <span
                  class="chip pinned-empty active pending"
                  @click=${g=>this._openFilter(this.pendingFilter,g)}
                >
                  <span class="chip-icon"
                    ><sfx-icon
                      name=${this._getFilterIcon(this.pendingFilter)}
                      .size=${16}
                    ></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(Zt[this.pendingFilter]??this.pendingFilter,Pt[this.pendingFilter]||this.pendingFilter)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:v}
          ${l.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${p?c`
                <span
                  class="chip pinned-empty active pending"
                  @click=${g=>this._openMetadataFilter(this.pendingMetadataField,g)}
                >
                  <span class="chip-icon"
                    ><sfx-icon
                      name=${this._getMetadataIcon(this.pendingMetadataField)}
                      .size=${16}
                    ></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this._getMetadataLabel(this.pendingMetadataField)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:v}
          ${f?c`<button class="clear-all" @click=${this._clearAll}>
                ${this.t("clearFilters","Clear filters")}
              </button>`:v}
        </div>
      </div>
    `}};ie.styles=A`
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
      border: 1px solid var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      border-radius: 6px;
      font-size: 0.8125rem;
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.15));
    }
    .chip.active {
      background: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
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
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .chip.forced {
      cursor: default;
      opacity: 0.85;
    }
    .chip.forced:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
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
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--sfx-input, oklch(0.871 0.016 241.798));
      font-weight: 400;
    }
    .chip .chip-icon {
      display: flex;
      align-items: center;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .chip.pinned-empty .chip-icon {
      display: flex;
      align-items: center;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--sfx-input, oklch(0.871 0.016 241.798));
    }
    .chip.pinned-empty:hover .chip-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty.active {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip.pinned-empty.active .chip-icon {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .chip-chevron {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  `;ge([u({type:Object})],ie.prototype,"appliedFilters",2);ge([u({type:Object})],ie.prototype,"appliedMetadata",2);ge([u({type:Object})],ie.prototype,"forcedFilters",2);ge([u({type:Array})],ie.prototype,"metadataFields",2);ge([u({type:Array})],ie.prototype,"pinnedFilters",2);ge([u({type:Array})],ie.prototype,"pinnedMetadataFields",2);ge([u({type:Array})],ie.prototype,"tags",2);ge([u({type:Array})],ie.prototype,"labels",2);ge([u({type:Array})],ie.prototype,"approverUsers",2);ge([u({type:Array})],ie.prototype,"requesterUsers",2);ge([u()],ie.prototype,"activeFilter",2);ge([u()],ie.prototype,"activeMetadataField",2);ge([u()],ie.prototype,"pendingFilter",2);ge([u()],ie.prototype,"pendingMetadataField",2);ge([u({attribute:!1})],ie.prototype,"t",2);ge([u()],ie.prototype,"locale",2);ie=ge([O("ap-filters-bar")],ie);var kd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,ve=(t,e,s,i)=>{for(var r=i>1?void 0:i?Sd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&kd(e,s,r),r};const Cd=6;let re=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.variantOverrides={},this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return c`
      <div
        class="grid"
        role="list"
        aria-label="Assets"
        ${D({"--sfx-grid-min-col":String(t)})}
      >
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
              .showVariants=${this.showVariants}
              .variantOptions=${this.variantOptions}
              .selectedVariantName=${this.variantOverrides[e.uuid]??this.defaultVariantName}
              ${D({"--sfx-stagger-index":String(i)})}
              data-asset-uuid=${e.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-variant-change=${r=>this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-card>
          `})}
        ${this.isLoading?Array.from({length:Cd},()=>c`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                  </div>
                </div>`):v}
      </div>
    `}};re.styles=A`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .ghost-card {
      border-radius: var(--sfx-radius, 8px);
      overflow: hidden;
    }
    .ghost-thumb {
      aspect-ratio: 6/4;
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
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
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
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
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-thumb,
      .ghost-line {
        animation: none;
      }
    }
  `;ve([u({attribute:!1})],re.prototype,"t",2);ve([u({type:Array})],re.prototype,"assets",2);ve([u({type:Array})],re.prototype,"folders",2);ve([u({type:Object})],re.prototype,"folderPreviews",2);ve([u({type:Array})],re.prototype,"selectedIds",2);ve([u({type:Array})],re.prototype,"selectedFolderIds",2);ve([u({type:Array})],re.prototype,"disabledAssetIds",2);ve([u({type:Array})],re.prototype,"disabledFolderIds",2);ve([u({type:Boolean})],re.prototype,"isLoading",2);ve([u({type:Boolean})],re.prototype,"multiSelect",2);ve([u({type:Boolean})],re.prototype,"folderSelectable",2);ve([u({type:String})],re.prototype,"gridSize",2);ve([u({type:Boolean})],re.prototype,"showVariants",2);ve([u({type:Array})],re.prototype,"variantOptions",2);ve([u({type:String})],re.prototype,"defaultVariantName",2);ve([u({type:Object})],re.prototype,"variantOverrides",2);re=ve([O("ap-grid-view")],re);var Ad=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,ae=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ed(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ad(e,s,r),r};const Fd=5;let te=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.variantOverrides={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px");const s=this.showVariants&&this.variantOptions.length>1;return e.push(s?"96px":"64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(r=>t.has(r.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(r=>s.has(r.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return c`
      <div
        class="list-header"
        ${D({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
        role="row"
        aria-label="Column headers"
      >
        ${this.multiSelect?c`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div
                class="header-check-box ${s?"checked":e>0?"indeterminate":""}"
              >
                <svg
                  class="header-check-icon check"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg
                  class="header-check-icon dash"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
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
        ${this.folders.map((i,r)=>c`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              ?disabled=${this.disabledFolderIds.includes(i.uuid)}
              .index=${r}
              data-folder-uuid=${i.uuid}
              @folder-open=${a=>{a.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:a.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${a=>{a.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:a.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,r)=>c`
            <ap-asset-row
              .asset=${i}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+r:r}
              ?selected=${this.selectedIds.includes(i.uuid)}
              ?disabled=${this.disabledAssetIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              .showVariants=${this.showVariants}
              .variantOptions=${this.variantOptions}
              .selectedVariantName=${this.variantOverrides[i.uuid]??this.defaultVariantName}
              data-asset-uuid=${i.uuid}
              @asset-select=${a=>this.dispatchEvent(new CustomEvent("asset-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${a=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:a.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${a=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              @asset-variant-change=${a=>this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:a.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:Fd},(i,r)=>{const a=["70%","55%","80%","45%","65%"];return c`
                <div
                  class="ghost-row"
                  ${D({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
                >
                  ${this.multiSelect?c`<div class="ghost-el ghost-check"></div>`:v}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${D({width:a[r]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?c`<div class="ghost-el ghost-size"></div>`:v}
                  ${this._compactLevel<1?c`<div class="ghost-el ghost-date"></div>`:v}
                  <div></div>
                </div>
              `}):v}
      </div>
    `}};te.styles=A`
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
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
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
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .header-check-box.checked,
    .header-check-box.indeterminate {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .header-check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
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
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .ghost-el {
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
    }
    .ghost-check {
      width: 22px;
      height: 22px;
    }
    .ghost-thumb {
      width: 40px;
      height: 40px;
    }
    .ghost-name {
      height: 14px;
      border-radius: 4px;
    }
    .ghost-type {
      height: 12px;
      width: 40px;
    }
    .ghost-size {
      height: 12px;
      width: 48px;
    }
    .ghost-date {
      height: 12px;
      width: 72px;
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-el {
        animation: none;
      }
    }
  `;ae([u({attribute:!1})],te.prototype,"t",2);ae([u({type:Array})],te.prototype,"assets",2);ae([u({type:Array})],te.prototype,"folders",2);ae([u({type:Array})],te.prototype,"selectedIds",2);ae([u({type:Array})],te.prototype,"selectedFolderIds",2);ae([u({type:Array})],te.prototype,"disabledAssetIds",2);ae([u({type:Array})],te.prototype,"disabledFolderIds",2);ae([u({type:Boolean})],te.prototype,"isLoading",2);ae([u({type:Boolean})],te.prototype,"multiSelect",2);ae([u({type:Boolean})],te.prototype,"folderSelectable",2);ae([u({type:Number})],te.prototype,"totalCount",2);ae([u({type:Boolean})],te.prototype,"isSelectingAll",2);ae([u({type:Object})],te.prototype,"folderPreviews",2);ae([u({type:Boolean})],te.prototype,"showVariants",2);ae([u({type:Array})],te.prototype,"variantOptions",2);ae([u({type:String})],te.prototype,"defaultVariantName",2);ae([u({type:Object})],te.prototype,"variantOverrides",2);ae([b()],te.prototype,"_compactLevel",2);te=ae([O("ap-list-view")],te);function fr(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function xi(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function ho(t,e){return!t||!e?"":`${t} x ${e}`}function gr(t){return((t==null?void 0:t.split(":")[0])??"").toUpperCase()}function Zi(t,e,s=33,i=240){const r=Math.min(e*s+8,i),a=window.innerHeight-t.bottom,o=t.top;return a>=r||a>=o?"below":"above"}function po(t,e,s){return i=>{if(!t())return;const r=i.composedPath(),a=e();(!a||!r.includes(a))&&s()}}var Od=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ze=(t,e,s,i)=>{for(var r=i>1?void 0:i?Td(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Od(e,s,r),r};let Se=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName="original",this._variantMenuOpen=!1,this._variantMenuPos="above",this._variantMenuFocusIndex=-1,this._outsideClickHandler=po(()=>this._variantMenuOpen,()=>{var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".variant-trigger-wrap")},()=>this._setVariantMenuOpen(!1))}_setVariantMenuOpen(t){this._variantMenuOpen=t,this.style.zIndex=t?"30":"",t||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".variant-menu-item");t&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<t.length&&t[this._variantMenuFocusIndex].focus()}_handleTriggerKeydown(t){if((t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&!this._variantMenuOpen){t.preventDefault();const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=Zi(e,this.variantOptions.length),this._variantMenuFocusIndex=t.key==="ArrowUp"?this.variantOptions.length-1:Math.max(0,this.variantOptions.findIndex(s=>s.value===this.selectedVariantName)),this._setVariantMenuOpen(!0),this.updateComplete.then(()=>this._focusVariantMenuItem())}}_handleMenuKeydown(t){var e,s;switch(t.key){case"ArrowDown":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case"ArrowUp":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case"Enter":case" ":{t.preventDefault();const i=this.variantOptions[this._variantMenuFocusIndex];i&&this._selectVariant(t,i.value);break}case"Escape":t.preventDefault(),t.stopPropagation(),this._setVariantMenuOpen(!1),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".variant-trigger"))==null||s.focus();break;case"Tab":this._setVariantMenuOpen(!1);break}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),r=a=>String(a).padStart(2,"0");return e>0?`${e}:${r(s)}:${r(i)}`:`${r(s)}:${r(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}_toggleVariantMenu(t){if(t.stopPropagation(),!this._variantMenuOpen){const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=Zi(e,this.variantOptions.length)}this._setVariantMenuOpen(!this._variantMenuOpen)}_selectVariant(t,e){var s,i;t.stopPropagation(),this._setVariantMenuOpen(!1),(i=(s=this.shadowRoot)==null?void 0:s.querySelector(".variant-trigger"))==null||i.focus(),this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:{uuid:this.asset.uuid,name:e,asset:this.asset,index:this.index},bubbles:!0}))}render(){var f,d,g,m,_,x,F;const t=this.asset;if(!t)return c``;const e=Rt(t.type),s=e==="video",i=e==="image",r=((f=t.extension)==null?void 0:f.toLowerCase())==="pdf",a=!!((d=t.info)!=null&&d.thumbnail||(g=t.info)!=null&&g.image_thumbnail||(m=t.info)!=null&&m.preview),o=ja(t.extension||"")||a;let n="";s?n=Ba(t):r?n=lr(t):o&&(n=vi(t,i?this.selectedVariantName:void 0));const l=this.showVariants&&this.variantOptions.length>1&&i,h=Gs(t.extension||""),p=nr(t.extension||"");return c`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${p&&n?"chess":""}">
          ${n?c`<img
                src=${n}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${p?"transparent-asset":""}"
                @error=${k=>{const T=k.target,w=ss();T.src!==h&&T.src!==w?(T.src=h,T.classList.add("icon-fallback")):T.src!==w&&(T.src=w)}}
              />`:c`<img
                src=${h}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${k=>{const T=k.target,w=ss();T.src!==w&&(T.src=w)}}
              />`}
          ${s&&(((_=t.info)==null?void 0:_.video_duration)??((x=t.info)==null?void 0:x.duration))!=null?c`<span class="duration"
                >${this._formatDuration(t.info.video_duration??t.info.duration)}</span
              >`:v}
          <div class="overlay">
            <button
              class="overlay-btn"
              @click=${this._handlePreview}
              aria-label=${this.t("preview","Preview")}
            >
              <sfx-icon name="preview" .size=${16}></sfx-icon>
              ${this.t("preview","Preview")}
            </button>
            <button
              class="overlay-btn select-btn"
              @click=${this._handleQuickSelect}
              aria-label=${this.t("select","Select")}
            >
              <sfx-icon name="select" .size=${16}></sfx-icon>
              ${this.t("select","Select")}
            </button>
          </div>
          ${this.multiSelect?c`
                <div class="check">
                  <div class="check-box">
                    <svg
                      class="check-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                </div>
              `:v}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div
            class="info-secondary ${l?"has-variants":""} ${this._variantMenuOpen?"menu-open":""}"
          >
            <div class="meta">
              ${gr(t.extension)}${(()=>{var P,K,V,Z;const k=((P=t.info)==null?void 0:P.img_w)||((K=t.info)==null?void 0:K.video_w),T=((V=t.info)==null?void 0:V.img_h)||((Z=t.info)==null?void 0:Z.video_h),w=ho(k,T);return w?` · ${w}`:""})()}
              · ${fr(((F=t.size)==null?void 0:F.bytes)||0)}
            </div>
            ${l?(()=>{var T;const k=((T=this.variantOptions.find(w=>w.value===this.selectedVariantName))==null?void 0:T.label)??this.selectedVariantName;return c`
                    <div
                      class="variant-control ${this._variantMenuOpen?"force-visible":""}"
                      @click=${w=>w.stopPropagation()}
                    >
                      <span class="variant-control-label">${this.t("insertAs","Insert as")}:</span>
                      <div class="variant-trigger-wrap">
                        <button
                          class="variant-trigger"
                          @click=${this._toggleVariantMenu}
                          @keydown=${this._handleTriggerKeydown}
                          title=${k}
                          aria-label=${this.t("insertAs","Insert as")}
                          aria-haspopup="listbox"
                          aria-expanded=${this._variantMenuOpen}
                        >
                          <span class="variant-trigger-label">${k}</span>
                          <sfx-icon name="chevron-down" .size=${12}></sfx-icon>
                        </button>
                        ${this._variantMenuOpen?c`
                              <div
                                class="variant-menu ${this._variantMenuPos}"
                                role="listbox"
                                @keydown=${this._handleMenuKeydown}
                              >
                                ${this.variantOptions.map((w,P)=>c`
                                    <button
                                      class="variant-menu-item ${w.value===this.selectedVariantName?"active":""} ${P===this._variantMenuFocusIndex?"focused":""}"
                                      role="option"
                                      aria-selected=${w.value===this.selectedVariantName}
                                      @click=${K=>this._selectVariant(K,w.value)}
                                      @mouseenter=${()=>{this._variantMenuFocusIndex=P}}
                                    >
                                      <svg
                                        class="tick"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                      <span>${w.label}</span>
                                    </button>
                                  `)}
                              </div>
                            `:v}
                      </div>
                    </div>
                  `})():v}
          </div>
        </div>
      </div>
    `}};Se.styles=A`
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--sfx-stagger-index, 0) * 50ms);
    }
    @keyframes ap-card-in {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .card {
      position: relative;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition:
        box-shadow 150ms,
        border-color 150ms;
      background: var(--sfx-card, oklch(1 0 0));
    }
    .card:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
    }
    :host([selected]) .card {
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
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
      background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumbnail {
      aspect-ratio: 6/4;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      overflow: hidden;
      border-radius: var(--sfx-radius, 8px) var(--sfx-radius, 8px) 0 0;
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
      border-radius: var(--sfx-radius, 8px);
      background: var(--sfx-card, rgba(255, 255, 255, 0.9));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      border: 1px solid var(--sfx-border, transparent);
      cursor: pointer;
      transition: transform 100ms;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
    }
    .overlay-btn:hover {
      transform: scale(1.05);
    }
    .overlay-btn.select-btn {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    .info {
      padding: 10px 12px 12px;
      border-radius: 0 0 var(--sfx-radius, 8px) var(--sfx-radius, 8px);
      background: var(--sfx-card, oklch(1 0 0));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* The file meta (size/dimensions) and the variant control occupy the SAME slot,
       stacked and cross-faded — showing the variant picker only when it's relevant
       (hover / selected) without ever changing the card's height. */
    .info-secondary {
      position: relative;
      /* The .meta inside is absolutely positioned, so this slot needs an explicit height
         in both states. 18px is the meta line box on its own — the height the row had
         before variants existed, so cards without a switcher keep their original size. */
      height: 18px;
      margin-top: 4px;
    }
    /* Taller only when a variant trigger chip shares the slot, so it fits (padding +
       border) without clipping; the meta text centers within the same box. */
    .info-secondary.has-variants {
      height: 28px;
    }
    .meta {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity 100ms;
    }
    .card:hover .info-secondary.has-variants .meta,
    .card:focus-within .info-secondary.has-variants .meta,
    /* Mirrors the control's own force-visible state: with the menu open on an unhovered
       card the control stays up, so the meta underneath must stay down — the trigger has a
       transparent background and the size/dimensions text would read through it. */
    .info-secondary.has-variants.menu-open .meta,
    :host([selected]) .info-secondary.has-variants .meta {
      opacity: 0;
      visibility: hidden;
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
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
    .thumbnail.chess {
      background-image: conic-gradient(
        var(--sfx-chess-a, #f0f0f0) 25%,
        var(--sfx-chess-b, #fff) 25% 50%,
        var(--sfx-chess-a, #f0f0f0) 50% 75%,
        var(--sfx-chess-b, #fff) 75%
      );
      background-size: 16px 16px;
    }
    .type-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
    .variant-control {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 100ms;
    }
    .card:hover .variant-control,
    /* Keyboard users never hover: revealing on focus-within is what puts the trigger in the
       tab order at all (visibility:hidden is unfocusable), so the arrow/Enter/Escape handling
       below is reachable. The card's overlay buttons only fade with opacity, so they stay
       focusable and are what brings focus into the card in the first place. */
    .card:focus-within .variant-control,
    .variant-control.force-visible,
    :host([selected]) .variant-control {
      opacity: 1;
      visibility: visible;
    }
    .variant-control-label {
      flex-shrink: 0;
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .variant-trigger-wrap {
      position: relative;
      flex: 1;
      min-width: 0;
    }
    .variant-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      width: 100%;
      padding: 5px 8px;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      font-size: 0.75rem;
      font-weight: 500;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      cursor: pointer;
    }
    .variant-trigger:hover {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .variant-trigger:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 1px;
    }
    .variant-trigger-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .variant-trigger sfx-icon {
      flex-shrink: 0;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .variant-menu {
      position: absolute;
      z-index: 20;
      left: 0;
      right: 0;
      max-height: 240px;
      overflow-y: auto;
      overflow-x: hidden;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.15);
      padding: 4px;
    }
    .variant-menu.above {
      bottom: calc(100% + 6px);
    }
    .variant-menu.below {
      top: calc(100% + 6px);
    }
    .variant-menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 7px 8px;
      border: none;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.8125rem;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      text-align: left;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
    }
    .variant-menu-item span {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .variant-menu-item:hover,
    .variant-menu-item.focused {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .variant-menu-item:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .variant-menu-item.active {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .variant-menu-item .tick {
      width: 14px;
      flex-shrink: 0;
      visibility: hidden;
    }
    .variant-menu-item.active .tick {
      visibility: visible;
    }
    @media (prefers-reduced-motion: reduce) {
      :host {
        animation: none;
      }
      .overlay {
        transition: none;
      }
    }
  `;ze([u({attribute:!1})],Se.prototype,"t",2);ze([u({type:Object})],Se.prototype,"asset",2);ze([u({type:Number})],Se.prototype,"index",2);ze([u({type:Boolean,reflect:!0})],Se.prototype,"selected",2);ze([u({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);ze([u({type:Boolean})],Se.prototype,"multiSelect",2);ze([u({type:Boolean})],Se.prototype,"showVariants",2);ze([u({type:Array})],Se.prototype,"variantOptions",2);ze([u({type:String})],Se.prototype,"selectedVariantName",2);ze([b()],Se.prototype,"_variantMenuOpen",2);ze([b()],Se.prototype,"_variantMenuPos",2);ze([b()],Se.prototype,"_variantMenuFocusIndex",2);Se=ze([O("ap-asset-card")],Se);var Ld=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Pe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Pd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ld(e,s,r),r};let xe=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName="original",this._variantMenuOpen=!1,this._variantMenuPos="above",this._variantMenuFocusIndex=-1,this._outsideClickHandler=po(()=>this._variantMenuOpen,()=>{var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".variant-control-wrap")},()=>this._setVariantMenuOpen(!1))}_setVariantMenuOpen(t){this._variantMenuOpen=t,this.style.zIndex=t?"30":"",t||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".variant-menu-item");t&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<t.length&&t[this._variantMenuFocusIndex].focus()}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}_toggleVariantMenu(t){if(t.stopPropagation(),!this._variantMenuOpen){const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=Zi(e,this.variantOptions.length),this._variantMenuFocusIndex=Math.max(0,this.variantOptions.findIndex(s=>s.value===this.selectedVariantName))}this._setVariantMenuOpen(!this._variantMenuOpen)}_handleVariantTriggerKeydown(t){!this._variantMenuOpen&&(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._toggleVariantMenu(t),this.updateComplete.then(()=>this._focusVariantMenuItem()))}_handleVariantMenuKeydown(t){var e,s;switch(t.key){case"ArrowDown":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case"ArrowUp":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case"Enter":case" ":{t.preventDefault();const i=this.variantOptions[this._variantMenuFocusIndex];i&&this._selectVariant(t,i.value);break}case"Escape":t.preventDefault(),t.stopPropagation(),this._setVariantMenuOpen(!1),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".variant-btn"))==null||s.focus();break;case"Tab":this._setVariantMenuOpen(!1);break}}_selectVariant(t,e){var s,i;t.stopPropagation(),this._setVariantMenuOpen(!1),(i=(s=this.shadowRoot)==null?void 0:s.querySelector(".variant-btn"))==null||i.focus(),this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:{uuid:this.asset.uuid,name:e,asset:this.asset,index:this.index},bubbles:!0}))}get _isImageAsset(){var t;return Rt(((t=this.asset)==null?void 0:t.type)??"")==="image"}_getGridColumns(){const t=[];this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px");const e=this.showVariants&&this.variantOptions.length>1;return t.push(e?"96px":"64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var h,p,f,d,g;const t=this.asset;if(!t)return c``;const s=Rt(t.type)==="video",i=((h=t.extension)==null?void 0:h.toLowerCase())==="pdf",r=!!((p=t.info)!=null&&p.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(d=t.info)!=null&&d.preview),a=ja(t.extension||"")||r;let o="";s?o=Ba(t):i?o=lr(t):a&&(o=vi(t,this._isImageAsset?this.selectedVariantName:void 0));const n=Gs(t.extension||""),l=nr(t.extension||"");return c`
      <div
        class="row"
        ${D({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleSelect}
      >
        ${this.multiSelect?c`
              <div class="check">
                <div class="check-box">
                  <svg
                    class="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
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
                @error=${m=>{const _=m.target,x=ss();_.src!==n&&_.src!==x?(_.src=n,_.classList.add("icon-fallback")):_.src!==x&&(_.src=x)}}
              />`:c`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${m=>{const _=m.target,x=ss();_.src!==x&&(_.src=x)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${gr(t.extension)}</div>
        ${this.compactLevel<2?c`<div class="desc">${fr(((g=t.size)==null?void 0:g.bytes)||0)}</div>`:v}
        ${this.compactLevel<1?c`<div class="date">${xi(t.created_at||"")}</div>`:v}
        <div class="actions ${this._variantMenuOpen?"force-visible":""}">
          <button
            class="icon-btn select-btn"
            @click=${this._handleQuickSelect}
            aria-label=${this.t("select","Select")}
            title=${this.t("select","Select")}
          >
            <sfx-icon name="select" .size=${16}></sfx-icon>
          </button>
          <button
            class="icon-btn"
            @click=${this._handlePreview}
            aria-label=${this.t("preview","Preview")}
            title=${this.t("preview","Preview")}
          >
            <sfx-icon name="preview" .size=${16}></sfx-icon>
          </button>
          ${this.showVariants&&this.variantOptions.length>1&&this._isImageAsset?(()=>{var _;const m=((_=this.variantOptions.find(x=>x.value===this.selectedVariantName))==null?void 0:_.label)??this.selectedVariantName;return c`
                  <div class="variant-control-wrap">
                    <button
                      class="icon-btn variant-btn"
                      @click=${this._toggleVariantMenu}
                      @keydown=${this._handleVariantTriggerKeydown}
                      aria-label=${`${this.t("insertAs","Insert as")}: ${m}`}
                      title=${`${this.t("insertAs","Insert as")}: ${m}`}
                      aria-haspopup="listbox"
                      aria-expanded=${this._variantMenuOpen}
                    >
                      <sfx-icon name="component" .size=${16}></sfx-icon>
                    </button>
                    ${this._variantMenuOpen?c`
                          <div
                            class="variant-menu ${this._variantMenuPos}"
                            role="listbox"
                            @keydown=${this._handleVariantMenuKeydown}
                            @click=${x=>x.stopPropagation()}
                          >
                            ${this.variantOptions.map((x,F)=>c`
                                <button
                                  class="variant-menu-item ${x.value===this.selectedVariantName?"active":""} ${F===this._variantMenuFocusIndex?"focused":""}"
                                  role="option"
                                  aria-selected=${x.value===this.selectedVariantName}
                                  @click=${k=>this._selectVariant(k,x.value)}
                                  @mouseenter=${()=>{this._variantMenuFocusIndex=F}}
                                >
                                  <svg
                                    class="tick"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span>${x.label}</span>
                                </button>
                              `)}
                          </div>
                        `:v}
                  </div>
                `})():v}
        </div>
      </div>
    `}};xe.styles=A`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc,
    .date {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
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
    .row:hover .actions,
    .actions.force-visible,
    :host([selected]) .actions {
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
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn.select-btn {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .variant-control-wrap {
      position: relative;
    }
    .icon-btn.variant-btn[aria-expanded='true'] {
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .variant-menu {
      position: absolute;
      z-index: 20;
      right: 0;
      min-width: 200px;
      max-width: 260px;
      max-height: 240px;
      overflow-y: auto;
      overflow-x: hidden;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.15);
      padding: 4px;
    }
    .variant-menu.above {
      bottom: calc(100% + 6px);
    }
    .variant-menu.below {
      top: calc(100% + 6px);
    }
    .variant-menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 7px 8px;
      border: none;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.8125rem;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      text-align: left;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
    }
    .variant-menu-item span {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .variant-menu-item:hover,
    .variant-menu-item.focused {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .variant-menu-item:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .variant-menu-item.active {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .variant-menu-item .tick {
      width: 14px;
      flex-shrink: 0;
      visibility: hidden;
    }
    .variant-menu-item.active .tick {
      visibility: visible;
    }
    .thumb.chess {
      background-image: conic-gradient(
        var(--sfx-chess-a, #f0f0f0) 25%,
        var(--sfx-chess-b, #fff) 25% 50%,
        var(--sfx-chess-a, #f0f0f0) 50% 75%,
        var(--sfx-chess-b, #fff) 75%
      );
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
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;Pe([u({attribute:!1})],xe.prototype,"t",2);Pe([u({type:Object})],xe.prototype,"asset",2);Pe([u({type:Number})],xe.prototype,"index",2);Pe([u({type:Boolean,reflect:!0})],xe.prototype,"selected",2);Pe([u({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);Pe([u({type:Boolean})],xe.prototype,"multiSelect",2);Pe([u({type:Number})],xe.prototype,"compactLevel",2);Pe([u({type:Boolean})],xe.prototype,"showVariants",2);Pe([u({type:Array})],xe.prototype,"variantOptions",2);Pe([u({type:String})],xe.prototype,"selectedVariantName",2);Pe([b()],xe.prototype,"_variantMenuOpen",2);Pe([b()],xe.prototype,"_variantMenuPos",2);Pe([b()],xe.prototype,"_variantMenuFocusIndex",2);xe=Pe([O("ap-asset-row")],xe);var Md=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,Ct=(t,e,s,i)=>{for(var r=i>1?void 0:i?Id(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Md(e,s,r),r};let et=class extends E{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return Ha(t,"200")}_renderPreviewImg(t){const e=Va(t.file_type),s=this._getPreviewUrl(t),i=Gs(Si(t.file_type)),r=ss();return c`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${a=>{const o=a.target,n=o.parentElement;o.src!==i&&o.src!==r?(o.src=i,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):o.src!==r&&(o.src=r,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
        @load=${a=>{const o=a.target,n=o.parentElement;o.src.includes("assets/file-types")&&(o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return c`<div class="empty-preview"><sfx-icon name="inbox" .size=${64}></sfx-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?c`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:c`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?c`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:v}
        </div>
      </div>
    `}render(){var r,a;const t=this.folder;if(!t)return c``;const e=((r=t.count)==null?void 0:r.files_direct)??0,i=(((a=t.count)==null?void 0:a.files_recursive)??0)-e;return c`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            rx="3"
            ry="3"
          />
        </svg>
        ${this.selectable&&this.multiSelect?c`
              <div class="check">
                <div class="check-box">
                  <svg
                    class="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
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
    `}};et.styles=[je,A`
      :host {
        display: block;
      }
      .card {
        position: relative;
        cursor: pointer;
        transition: filter 150ms;
      }
      :host([selected]) .card {
        filter: drop-shadow(2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(-2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 -2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)));
      }
      /* Folder shape SVG fills card */
      .folder-svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }
      .folder-svg path {
        fill: var(--sfx-folder-bg, #e3e8ed);
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
        filter: drop-shadow(2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(-2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 -2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
      }
      :host([disabled]) {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
      }
      :host([disabled]) .check-box {
        background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .preview-slot.icon-bg {
        background: var(--sfx-card, oklch(1 0 0));
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
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        border-radius: 4px;
        color: var(--sfx-input, oklch(0.871 0.016 241.798));
      }
      .info {
        flex-shrink: 0;
        padding-top: 8px;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 400;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .counts {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
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
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .check:hover .check-box {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([selected]) .check-box {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .check-icon {
        display: none;
        color: var(--sfx-primary-foreground, oklch(1 0 0));
      }
      :host([selected]) .check-icon {
        display: block;
      }
    `];Ct([u({type:Object})],et.prototype,"folder",2);Ct([u({type:Array})],et.prototype,"previews",2);Ct([u({type:Boolean,reflect:!0})],et.prototype,"selected",2);Ct([u({type:Boolean,reflect:!0})],et.prototype,"disabled",2);Ct([u({type:Boolean})],et.prototype,"selectable",2);Ct([u({type:Boolean})],et.prototype,"multiSelect",2);Ct([u({type:Number})],et.prototype,"index",2);et=Ct([O("ap-folder-card")],et);var Dd=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var r=i>1?void 0:i?Rd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Dd(e,s,r),r};let Ye=class extends E{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=Va(t.file_type),s=Ha(t,"80"),i=Gs(Si(t.file_type)),r=ss();return c`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${a=>{const o=a.target,n=o.parentElement;o.src!==i&&o.src!==r?(o.src=i,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):o.src!==r&&(o.src=r,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderThumb(){const t=c`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
        />
      </svg>
    `,e=this.previews.slice(0,2);return c`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):c`<div class="empty-preview">
              <sfx-icon name="inbox" .size=${14}></sfx-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?c`
      <div
        class="row"
        ${D({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleClick}
      >
        ${this.multiSelect?this.selectable?c` <div class="check">
                <div class="check-box">
                  <svg
                    class="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>`:c`<div></div>`:v}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?c`<div class="meta">
              ${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items
            </div>`:v}
        ${this.compactLevel<1?c`<div class="meta">${xi(t.modified_at||t.updated_at||"")}</div>`:v}
        <div></div>
      </div>
    `:c``}};Ye.styles=A`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-input, oklch(0.871 0.016 241.798));
    }
    .folder-svg path {
      fill: var(--sfx-folder-bg, #e3e8ed);
    }
    .preview-slot.icon-bg {
      background: var(--sfx-card, oklch(1 0 0));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;ft([u({type:Object})],Ye.prototype,"folder",2);ft([u({type:Array})],Ye.prototype,"previews",2);ft([u({type:Boolean,reflect:!0})],Ye.prototype,"selected",2);ft([u({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);ft([u({type:Boolean})],Ye.prototype,"selectable",2);ft([u({type:Boolean})],Ye.prototype,"multiSelect",2);ft([u({type:Number})],Ye.prototype,"index",2);ft([u({type:Number})],Ye.prototype,"compactLevel",2);Ye=ft([O("ap-folder-row")],Ye);var zd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,vr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Nd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&zd(e,s,r),r};let Ds=class extends E{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
      <div class="card" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${D({background:`color-mix(in srgb, ${s} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${18} ${D({color:s})}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};Ds.styles=[je,A`
      :host {
        display: block;
      }
      .card {
        position: relative;
        cursor: pointer;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        transition:
          box-shadow 150ms,
          border-color 150ms,
          background 150ms;
        background: var(--sfx-card, oklch(1 0 0));
        overflow: hidden;
      }
      .card:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .count {
        font-size: 0.75rem;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-top: 2px;
      }
    `];vr([u({type:Object})],Ds.prototype,"label",2);vr([u({type:Number})],Ds.prototype,"index",2);Ds=vr([O("ap-label-card")],Ds);var Ud=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,mr=(t,e,s,i)=>{for(var r=i>1?void 0:i?jd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ud(e,s,r),r};let Rs=class extends E{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
      <div class="row" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${D({background:`color-mix(in srgb, ${s} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${16} ${D({color:s})}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};Rs.styles=A`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      text-align: right;
    }
  `;mr([u({type:Object})],Rs.prototype,"label",2);mr([u({type:Number})],Rs.prototype,"index",2);Rs=mr([O("ap-label-row")],Rs);var Vd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,br=(t,e,s,i)=>{for(var r=i>1?void 0:i?Kd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Vd(e,s,r),r};let zs=class extends E{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="layout-grid" .size=${22}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.title}>${t.title}</div>
        </div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:c``}};zs.styles=[je,A`
      @keyframes ap-card-in {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      :host {
        display: block;
        animation: ap-card-in 300ms ease-out both;
        animation-delay: calc(var(--sfx-stagger-index, 0) * 50ms);
      }
      .card {
        position: relative;
        cursor: pointer;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 14px;
        transition:
          box-shadow 150ms,
          border-color 150ms;
        background: var(--sfx-card, oklch(1 0 0));
      }
      .card:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
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
          var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
          var(--sfx-accent, oklch(0.578 0.198 268.129 / 0.07))
        );
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .info {
        min-width: 0;
        flex: 1;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chevron {
        flex-shrink: 0;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0.5;
        transition: opacity 150ms;
      }
    `];br([u({type:Object})],zs.prototype,"collection",2);br([u({type:Number})],zs.prototype,"index",2);zs=br([O("ap-collection-card")],zs);var Bd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,xr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Hd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Bd(e,s,r),r};let Ns=class extends E{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="layout-grid" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.title}>${t.title}</div>
        <div class="date">${this._formatDate(t.updated_at)}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:c``}};Ns.styles=A`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
        var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--sfx-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      text-align: right;
    }
    .chevron {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;xr([u({type:Object})],Ns.prototype,"collection",2);xr([u({type:Number})],Ns.prototype,"index",2);Ns=xr([O("ap-collection-row")],Ns);var qd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,_r=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&qd(e,s,r),r};let Us=class extends E{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${22}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
        </div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:c``}};Us.styles=[je,A`
      @keyframes ap-card-in {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      :host {
        display: block;
        animation: ap-card-in 300ms ease-out both;
        animation-delay: calc(var(--sfx-stagger-index, 0) * 50ms);
      }
      .card {
        position: relative;
        cursor: pointer;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 14px;
        transition:
          box-shadow 150ms,
          border-color 150ms;
        background: var(--sfx-card, oklch(1 0 0));
      }
      .card:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .card:hover .chevron {
        opacity: 1;
      }
      .icon-wrapper {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .info {
        min-width: 0;
        flex: 1;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chevron {
        flex-shrink: 0;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0.5;
        transition: opacity 150ms;
      }
    `];_r([u({type:Object})],Us.prototype,"folder",2);_r([u({type:Number})],Us.prototype,"index",2);Us=_r([O("ap-collection-folder-card")],Us);var Yd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,yr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Qd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Yd(e,s,r),r};let js=class extends E{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:c``}};js.styles=A`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;yr([u({type:Object})],js.prototype,"folder",2);yr([u({type:Number})],js.prototype,"index",2);js=yr([O("ap-collection-folder-row")],js);var Wd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,ds=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Wd(e,s,r),r};let $t=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const o=this.gridSize==="large"?"280px":"220px";return c`
        <div class="grid-skeleton" ${D({"--sfx-grid-min-col":String(o)})}>
          ${Array.from({length:18},()=>c`<div class="card-skel">
                <div class="skeleton card-skel-thumb"></div>
                <div class="card-skel-info">
                  <div class="skeleton card-skel-name"></div>
                  <div class="skeleton card-skel-meta"></div>
                </div>
              </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=c`
      <div class="row-skel" ${D({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            />
          </svg>
        </div>
        <div class="skeleton row-skel-name row-skel-folder-name"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,i=o=>c`
      <div class="row-skel" ${D({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${D({width:o})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,r=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],a=12-this.folderCount;return c`
      <div class="list-header" ${D({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        <span>${this.t("size","Size")}</span>
        <span>${this.t("date","Date")}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:a},(o,n)=>i(r[n%r.length]))}
    `}};$t.styles=A`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .skeleton {
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: var(--sfx-radius, 8px);
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    .grid-skeleton {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .card-skel {
      border-radius: var(--sfx-radius, 8px);
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
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
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
      fill: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
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
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      background: var(--sfx-background, oklch(1 0 0));
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton {
        animation: none;
      }
    }
  `;ds([u({attribute:!1})],$t.prototype,"t",2);ds([u({reflect:!0})],$t.prototype,"variant",2);ds([u({type:String})],$t.prototype,"gridSize",2);ds([u({type:Boolean})],$t.prototype,"multiSelect",2);ds([u({type:Number})],$t.prototype,"folderCount",2);$t=ds([O("ap-skeleton")],$t);var Jd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var r=i>1?void 0:i?Zd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Jd(e,s,r),r};let se=class extends E{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.selectedVariantName="original",this.t=(t,e)=>typeof e=="string"?e:t,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=Rt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,r;const e=ll(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:a}=await j(async()=>{const{default:n}=await import("./hls.light-CLqSdhbI.js");return{default:n}},[]);if(!a.isSupported()||((r=this.asset)==null?void 0:r.uuid)!==t.uuid||!this.isConnected)return;const o=new a;this._hls=o,o.loadSource(e),o.attachMedia(s),o.on(a.Events.ERROR,(n,l)=>{var h;l.fatal&&(this._destroyHls(),s.src=((h=t.url)==null?void 0:h.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,r,a,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((r=(i=this.asset)==null?void 0:i.url)!=null&&r.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(a=this.previewArea)==null?void 0:a.requestFullscreen)==null||o.call(a)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=Rt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var r,a;const e=(r=t.url)==null?void 0:r.cdn;if(!e)return vi(t,this.selectedVariantName)||"";const s={source:"asset",asset:t};if(((a=t.extension)==null?void 0:a.toLowerCase())==="svg")return qe(e,s);if(this.selectedVariantName&&this.selectedVariantName!=="original"){const o=Ka(t,this.selectedVariantName);if(o)return qe(o,s)}const i=is(e,this.containerToken);return qe(zt(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var o,n;const e=(o=t.info)==null?void 0:o.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,r=window.innerHeight,a=Math.min(i/e,r/s,1);return{width:`${Math.round(e*a)}px`,height:`${Math.round(s*a)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(r=>!r.label||i.has(r.sid)?!1:(i.add(r.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:$.TAGS,values:[t],operator:M.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:$.LABELS,values:[t],operator:M.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return v;const s=this._openSections.has("file-info");return c`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s?"true":"false"}
          @click=${()=>this._toggleSection("file-info")}
        >
          <span>${this.t("fileInfo","File info")}</span>
          <svg
            class="accordion-chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
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
          ${this._renderTagsRow(t)} ${this._renderLabelsRow(t)}
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
          <svg
            class="accordion-chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${i?"open":""}">
          ${s.map(r=>c`
              <div class="meta-row">
                <span class="meta-label" title=${r.label}>${r.label}</span>
                <span class="meta-value" title=${r.value}>${r.value}</span>
              </div>
            `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,r,a,o,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:gr(t.extension)}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:fr(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:ho(t.info.img_w,t.info.img_h)}),(r=t.info)!=null&&r.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((a=t.info)==null?void 0:a.video_duration)??((o=t.info)==null?void 0:o.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:xi(t.created_at)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:xi(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(r=>r.internal_unique_value===t||r.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const r=t[i];if(r!=null&&r!=="")return this._resolveFieldValue(r,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(r=>this._resolveSlug(String(r),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var a,o,n,l;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const h=t;for(const p of this.metadataFields){const f=h[p.key]??((o=(a=t.info)==null?void 0:a.metadata)==null?void 0:o[p.key])??((n=t.meta)==null?void 0:n[p.key]),d=this._resolveFieldValue(f,p);if(!d)continue;i.add(p.key),p.slug&&i.add(p.slug);const g=d.length>50;e.push({label:p.label,value:d,wrap:g})}}if(t.meta)for(const[h,p]of Object.entries(t.meta)){if(i.has(h)||p==null||p==="")continue;const f=s.get(h);if(f){const d=this._resolveFieldValue(p,f);if(!d)continue;i.add(h);const g=d.length>50;e.push({label:f.label,value:d,wrap:g})}else{const d=typeof p=="object"?JSON.stringify(p):String(p);if(!d||d==="{}"||d==="[]")continue;i.add(h);const g=Wi(h,h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),this.t),m=d.length>50;e.push({label:g,value:d,wrap:m})}}const r=(l=t.info)==null?void 0:l.metadata;if(r&&typeof r=="object")for(const[h,p]of Object.entries(r)){if(i.has(h)||p==null||p==="")continue;const f=s.get(h);if(f){const d=this._resolveFieldValue(p,f);if(!d)continue;i.add(h);const g=d.length>50;e.push({label:f.label,value:d,wrap:g})}else{const d=typeof p=="object"?JSON.stringify(p):String(p);if(!d||d==="{}"||d==="[]")continue;i.add(h);const g=Wi(h,h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),this.t),m=d.length>50;e.push({label:g,value:d,wrap:m})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?v:c`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${e.map(s=>c`
              <sfx-badge
                class="tag-link"
                ${D({"--sfx-muted":`${s.color||"#94a3b8"}22`,"--sfx-muted-foreground":s.color||"#94a3b8"})}
                @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}
              >
                <span class="label-content">
                  <sfx-icon name="tag" .size=${12} ${D({color:s.color||"#94a3b8"})}></sfx-icon>
                  ${s.name}
                </span>
              </sfx-badge>
            `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?v:c`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags","Tags")}</span>
        <div class="tags-list">
          ${e.map(s=>c`
              <sfx-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}
                >${s.label}</sfx-badge
              >
            `)}
        </div>
      </div>
    `}render(){var w,P,K,V,Z,ce,B,X;const t=this.asset;if(!t)return v;const e=Rt(t.type),s=e==="image",i=e==="video",r=e==="audio",a=((w=t.extension)==null?void 0:w.toLowerCase())==="pdf",o=Gs(t.extension||""),n=nr(t.extension||""),l=((P=t.extension)==null?void 0:P.toLowerCase())==="svg",h=vi(t,this.selectedVariantName),p=s?l?qe(((K=t.url)==null?void 0:K.cdn)||"",{source:"asset",asset:t}):h||qe(is(((V=t.url)==null?void 0:V.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",f=s?this._getFullscreenImageUrl(t):"",d=s&&!l?this._getBlurDimensions(t):null,g=i&&((Z=t.url)==null?void 0:Z.cdn)||"",m=i?qe(((ce=t.info)==null?void 0:ce.video_thumbnail)||((B=t.info)==null?void 0:B.preview)||"",{source:"video",asset:t}):"",_=a&&!s?lr(t):"",x=this._getCurrentIndex(),F=x>0&&this._findNavTarget(x,-1)>=0,k=x>=0&&this._findNavTarget(x,1)>=0,T=this.assets.length>1;return c`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button
              class="icon-btn"
              @click=${this._fullscreen}
              ?disabled=${!s&&!i&&!r&&!a}
              aria-label=${this.t("fullscreen","Fullscreen")}
              title=${this.t("fullscreen","Fullscreen")}
            >
              <sfx-icon name="fullscreen" .size=${16}></sfx-icon>
            </button>
            <button
              class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}"
              @click=${this._select}
              aria-label=${this.t("select","Select")}
              title=${this.t("selectAsset","Select the asset")}
            >
              <sfx-icon name="select" .size=${16}></sfx-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s&&n?"chess":""}">
          ${T?c`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!F}
                  aria-label=${this.t("previous","Previous")}
                >
                  <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
                </button>
                <button
                  class="nav-btn next"
                  @click=${this._next}
                  ?disabled=${!k}
                  aria-label=${this.t("next","Next")}
                >
                  <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
                </button>
              `:v}
          ${this._isFullscreen?c`
                <button
                  class="fs-close-btn"
                  @click=${this._exitFullscreen}
                  aria-label=${this.t("exitFullscreen","Exit fullscreen")}
                >
                  <sfx-icon name="close" .size=${16}></sfx-icon>
                </button>
              `:v}
          ${this._previewLoading?c`<div class="preview-loading"><div class="spinner"></div></div>`:v}
          ${s?c`
                <img
                  src=${p}
                  alt=${t.name}
                  @load=${de=>{de.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
                  @error=${de=>{const H=de.target;this._previewLoading=!1,H.src!==o&&(H.src=o,H.classList.add("icon-fallback"))}}
                />
                <div class="fs-wrapper">
                  ${l?v:c`
                        <img
                          class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                          src=${p}
                          alt=""
                          ${D({width:d.width,height:d.height})}
                        />
                      `}
                  <img
                    class="fs-full ${l||this._fsImageLoaded?"loaded":""}"
                    src=${this._isFullscreen?f:""}
                    alt=${t.name}
                    ${D(l?{width:"100vw",height:"100vh"}:null)}
                    @load=${this._onFsImageLoad}
                  />
                </div>
              `:v}
          ${i?c`<video
                src=${g}
                poster=${m||v}
                controls
                controlsList="nofullscreen"
                @loadeddata=${()=>{this._previewLoading=!1}}
                @error=${()=>{this._previewLoading=!1}}
              ></video>`:v}
          ${r?c`<audio src=${((X=t.url)==null?void 0:X.cdn)||""} controls></audio>`:v}
          ${a&&!s?c`
                <img
                  src=${_||o}
                  alt=${t.name}
                  class=${_?"":"icon-fallback"}
                  @error=${de=>{const H=de.target;H.src!==o&&(H.src=o,H.classList.add("icon-fallback"))}}
                />
              `:v}
          ${!s&&!i&&!r&&!a?c`<img src=${o} alt=${t.name} class="icon-fallback" />`:v}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?c`
              ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
            `:v}
      </div>
    `}};se.styles=A`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--sfx-background, oklch(1 0 0));
      border-left: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      display: flex;
      flex-direction: column;
      animation: ap-panel-in 300ms ease-out;
      overflow-y: auto;
      user-select: none;
    }
    @keyframes ap-panel-in {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
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
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
      background: var(--sfx-border, oklch(92.86% 0.009 247.92));
      margin: 0 2px;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
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
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-top-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-radius: 50%;
      animation: ap-spin 0.6s linear infinite;
    }
    @keyframes ap-spin {
      to {
        transform: rotate(360deg);
      }
    }
    .preview-area img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: var(--sfx-radius-sm, 6px);
      -webkit-user-drag: none;
      pointer-events: none;
    }
    .preview-area.chess {
      background-image: conic-gradient(
        var(--sfx-chess-a, #f0f0f0) 25%,
        var(--sfx-chess-b, #fff) 25% 50%,
        var(--sfx-chess-a, #f0f0f0) 50% 75%,
        var(--sfx-chess-b, #fff) 75%
      );
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
    .preview-area:fullscreen > img {
      display: none;
    }
    .fs-wrapper {
      display: none;
    }
    .preview-area:fullscreen .fs-wrapper {
      display: flex;
    }
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
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      width: 40px;
      height: 40px;
    }
    .preview-area:fullscreen .nav-btn:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.7);
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
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      cursor: pointer;
      z-index: 3;
    }
    .fs-close-btn:hover {
      background: rgba(0, 0, 0, 0.7);
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
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .nav-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .nav-btn.prev {
      left: 8px;
    }
    .nav-btn.next {
      right: 8px;
    }
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
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .accordion-trigger[aria-expanded='true'] .accordion-chevron {
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
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      min-width: 0;
      user-select: text;
      word-break: break-word;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel {
        animation: none;
      }
      .accordion-chevron {
        transition: none;
      }
    }
  `;le([u({type:Object})],se.prototype,"asset",2);le([u({type:Array})],se.prototype,"assets",2);le([u({type:Array})],se.prototype,"selectedIds",2);le([u()],se.prototype,"containerToken",2);le([u({type:Boolean})],se.prototype,"showMetadata",2);le([u({type:Array})],se.prototype,"metadataFields",2);le([u({type:Array})],se.prototype,"labels",2);le([u({type:Object})],se.prototype,"regionalFilters",2);le([u({type:Boolean})],se.prototype,"multiSelect",2);le([u({type:String})],se.prototype,"selectedVariantName",2);le([u({attribute:!1})],se.prototype,"t",2);le([wt(".preview-area")],se.prototype,"previewArea",2);le([wt("video")],se.prototype,"_videoEl",2);le([b()],se.prototype,"_isFullscreen",2);le([b()],se.prototype,"_fsImageLoaded",2);le([b()],se.prototype,"_previewLoading",2);le([b()],se.prototype,"_openSections",2);se=le([O("ap-preview-panel")],se);var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,$r=(t,e,s,i)=>{for(var r=i>1?void 0:i?th(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&eh(e,s,r),r};const sh={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],"file-check-2":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"m3 15 2 2 4-4"}}],"user-star":[{tag:"path",attrs:{d:"M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}},{tag:"path",attrs:{d:"M8 15H7a4 4 0 0 0-4 4v2"}},{tag:"circle",attrs:{cx:"10",cy:"7",r:"4"}}],"calendar-check-2":[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"path",attrs:{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}},{tag:"path",attrs:{d:"M3 10h18"}},{tag:"path",attrs:{d:"m16 20 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}],link:[{tag:"path",attrs:{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"}},{tag:"path",attrs:{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"}}],move:[{tag:"path",attrs:{d:"M5 9 2 12l3 3"}},{tag:"path",attrs:{d:"M9 5l3-3 3 3"}},{tag:"path",attrs:{d:"M15 19l-3 3-3-3"}},{tag:"path",attrs:{d:"M19 9l3 3-3 3"}},{tag:"path",attrs:{d:"M2 12h20"}},{tag:"path",attrs:{d:"M12 2v20"}}],pencil:[{tag:"path",attrs:{d:"M12 20h9"}},{tag:"path",attrs:{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"}}],unlock:[{tag:"rect",attrs:{x:"5",y:"11",width:"14",height:"10",rx:"2"}},{tag:"path",attrs:{d:"M8 11V7a4 4 0 0 1 7.5-2"}}],star:[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z"}}],"star-filled":[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z",fill:"currentColor"}}],dot:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"5",fill:"currentColor"}}]};let Vs=class extends E{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=sh[this.name];if(!t)return v;const e=typeof t=="string"?mt`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:r}=s;return i==="circle"?mt`<circle cx=${r.cx} cy=${r.cy} r=${r.r} fill=${r.fill??"none"}></circle>`:i==="rect"?mt`<rect width=${r.width} height=${r.height} x=${r.x} y=${r.y} rx=${r.rx??"0"} ry=${r.ry??"0"}></rect>`:mt`<path d=${r.d} fill=${r.fill??"none"}></path>`});return c`
      <svg
        ${D({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${e}
      </svg>
    `}};Vs.styles=[A`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];$r([u()],Vs.prototype,"name",2);$r([u({type:Number})],Vs.prototype,"size",2);Vs=$r([O("sfx-icon")],Vs);var ih=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,uo=(t,e,s,i)=>{for(var r=i>1?void 0:i?rh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ih(e,s,r),r};let _i=class extends E{constructor(){super(...arguments),this.size=24}render(){return c`<div
      class="spinner"
      ${D({width:`${this.size}px`,height:`${this.size}px`})}
    ></div>`}};_i.styles=[A`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-top-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `];uo([u({type:Number})],_i.prototype,"size",2);_i=uo([O("sfx-spinner")],_i);var ah=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,fo=(t,e,s,i)=>{for(var r=i>1?void 0:i?oh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ah(e,s,r),r};let yi=class extends E{constructor(){super(...arguments),this.variant="default"}render(){return c`<span class="badge"><slot></slot></span>`}};yi.styles=[A`
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
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      :host([variant='primary']) .badge {
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
    `];fo([u({reflect:!0})],yi.prototype,"variant",2);yi=fo([O("sfx-badge")],yi);var nh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,wr=(t,e,s,i)=>{for(var r=i>1?void 0:i?lh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&nh(e,s,r),r};let Ks=class extends E{constructor(){super(...arguments),this.text="",this.placement="top"}render(){return c`
      <slot></slot>
      <div class="tip ${this.placement==="bottom"?"bottom":""}">${this.text}</div>
    `}};Ks.styles=[A`
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
        background: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        color: var(--sfx-background, oklch(1 0 0));
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      .tip.bottom {
        bottom: auto;
        top: calc(100% + 6px);
      }
      :host(:hover) .tip {
        display: block;
      }
    `];wr([u()],Ks.prototype,"text",2);wr([u()],Ks.prototype,"placement",2);Ks=wr([O("sfx-tooltip")],Ks);var ch=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,kr=(t,e,s,i)=>{for(var r=i>1?void 0:i?dh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ch(e,s,r),r};let Bs=class extends E{constructor(){super(...arguments),this.open=!1,this.align="start",this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},this._handleKeyDown=t=>{t.key==="Escape"&&this.open&&(this.open=!1)}}render(){return c`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.align==="end"?"end":""} ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}};Bs.styles=[A`
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
        background: var(--sfx-card, oklch(1 0 0));
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.end {
        left: auto;
        right: 0;
      }
      .content.open {
        display: block;
      }
    `];kr([b()],Bs.prototype,"open",2);kr([u()],Bs.prototype,"align",2);Bs=kr([O("sfx-popover")],Bs);var hh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,Ai=(t,e,s,i)=>{for(var r=i>1?void 0:i?ph(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&hh(e,s,r),r};let as=class extends E{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("sfx-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return c`
      <div class="box">
        <svg
          class="check"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg
          class="dash"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}
        ><slot @slotchange=${this._onSlotChange}></slot
      ></span>
    `}};as.styles=[A`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 16px;
        height: 16px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--sfx-background, oklch(1 0 0));
      }
      :host(:hover) .box {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([checked]) .box {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .check {
        display: none;
        color: var(--sfx-primary-foreground, oklch(1 0 0));
      }
      :host([checked]) .check {
        display: block;
      }
      :host([indeterminate]) .box {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .dash {
        display: none;
        color: var(--sfx-primary-foreground, oklch(1 0 0));
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
        margin-left: var(--sfx-checkbox-gap, 8px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        display: inline-flex;
        align-items: center;
      }
      .label[hidden] {
        display: none;
      }
    `];Ai([u({type:Boolean,reflect:!0})],as.prototype,"checked",2);Ai([u({type:Boolean,reflect:!0})],as.prototype,"indeterminate",2);Ai([u({type:Boolean,reflect:!0})],as.prototype,"disabled",2);as=Ai([O("sfx-checkbox")],as);var uh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,qt=(t,e,s,i)=>{for(var r=i>1?void 0:i?fh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&uh(e,s,r),r};let ht=class extends E{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(r=>!this.disabled&&!r.disabled);if(e.length===0)return;const s=e.findIndex(r=>r.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return c`
      ${this.options.map(t=>c`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":v}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?c`<sfx-icon name=${t.icon} .size=${16}></sfx-icon>`:v}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:e},bubbles:!0,composed:!0}))}};ht.styles=[Ys,A`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      :host([direction='horizontal']) {
        flex-direction: row;
        gap: 16px;
      }
      :host([columns='2']) {
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
      .option[aria-disabled='true'] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      .radio {
        width: 18px;
        height: 18px;
        min-width: 18px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option:hover .radio {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .option[aria-checked='true'] .radio {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-checked='true'] .radio .dot {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .label {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        user-select: none;
      }
    `];qt([u()],ht.prototype,"value",2);qt([u({type:Array})],ht.prototype,"options",2);qt([u({type:Boolean})],ht.prototype,"disabled",2);qt([u({type:Boolean})],ht.prototype,"clearable",2);qt([u({reflect:!0})],ht.prototype,"direction",2);qt([u({reflect:!0})],ht.prototype,"columns",2);ht=qt([O("sfx-radio-group")],ht);var gh=Object.defineProperty,vh=Object.getOwnPropertyDescriptor,Ae=(t,e,s,i)=>{for(var r=i>1?void 0:i?vh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&gh(e,s,r),r};let fe=class extends E{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="sfx-dropdown-menu";return c`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?c`<sfx-icon name=${t.icon} .size=${16}></sfx-icon>`:v}
        ${this.label?c`<span class="label">${this.label}${t?": ":""}</span>`:v}${t?t.label:""}
        ${this.clearable&&t?c`<span class="clear-trigger" @click=${this._clear}
              ><sfx-icon name="close" .size=${12}></sfx-icon
            ></span>`:c`<sfx-icon name="chevron-down" .size=${14}></sfx-icon>`}
      </button>
      ${this._open?c`
            <div
              id=${e}
              class="menu ${this._menuPosition} ${this._menuAlign}"
              ${D({[this._menuPosition==="below"?"top":"bottom"]:`${this._menuPosition==="below"?this._menuTop:this._menuBottom}px`,[this._menuAlign==="align-left"?"left":"right"]:`${this._menuAlign==="align-left"?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
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
                      ${s.icon?c`<sfx-icon name=${s.icon} .size=${16}></sfx-icon>`:v}
                      ${s.label}
                    </span>
                    ${s.value===this.value?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:v}
                  </button>
                `)}
            </div>
          `:v}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const r=window.innerWidth-t.left;this._menuAlign=r<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,r;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(r=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||r.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};fe.styles=[Ys,A`
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
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
      }
      .trigger:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      :host([variant='borderless']) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant='borderless']) .trigger:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--sfx-card, oklch(1 0 0));
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 4px;
      }
      .menu.below {
        bottom: auto;
      }
      .menu.above {
        top: auto;
      }
      .menu.align-left {
        right: auto;
      }
      .menu.align-right {
        left: auto;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 6px 12px;
        justify-content: space-between;
        border: none;
        background: none;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover,
      .option.focused {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .option-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option[aria-selected='true'] {
        background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-selected='true'] > sfx-icon {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .trigger .label {
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .clear-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0 -4px 0 auto;
        border: none;
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .clear-trigger:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .clear-trigger sfx-icon {
        color: inherit;
      }
      .trigger sfx-icon {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: auto;
      }
      .option sfx-icon {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .option[aria-selected='true'] sfx-icon {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
    `];Ae([u()],fe.prototype,"value",2);Ae([u()],fe.prototype,"label",2);Ae([u({reflect:!0})],fe.prototype,"variant",2);Ae([u({type:Boolean})],fe.prototype,"clearable",2);Ae([u({type:Array})],fe.prototype,"options",2);Ae([b()],fe.prototype,"_open",2);Ae([b()],fe.prototype,"_focusedIndex",2);Ae([b()],fe.prototype,"_menuPosition",2);Ae([b()],fe.prototype,"_menuAlign",2);Ae([b()],fe.prototype,"_menuTop",2);Ae([b()],fe.prototype,"_menuBottom",2);Ae([b()],fe.prototype,"_menuLeft",2);Ae([b()],fe.prototype,"_menuRight",2);Ae([b()],fe.prototype,"_menuWidth",2);fe=Ae([O("sfx-dropdown")],fe);var mh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,Xs=(t,e,s,i)=>{for(var r=i>1?void 0:i?bh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&mh(e,s,r),r};let Vt=class extends E{constructor(){super(...arguments),this.heading="File info",this.rows=[],this.collapsible=!1,this.open=!0}toggle(){this.collapsible&&(this.open=!this.open)}renderHead(){const t=c`<span>${this.heading}</span><span class="spacer"></span>`;return this.collapsible?c`<button
      class="head"
      type="button"
      aria-expanded=${this.open?"true":"false"}
      @click=${()=>this.toggle()}
    >
      ${t}
      <svg class="chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m6 9 6 6 6-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>`:c`<div class="head">${t}</div>`}render(){return c`
      ${this.renderHead()}
      ${this.open?c`<dl>
            ${this.rows.map(t=>c`<dt>${t.label}</dt>
                  <dd title=${t.title??t.value}>${t.value}</dd>`)}
          </dl>`:v}
    `}};Vt.styles=A`
    :host {
      display: block;
      font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
    }
    .head {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      font: inherit;
      font-weight: 600;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    button.head {
      cursor: pointer;
    }
    .head .spacer {
      flex: 1;
    }
    .chevron {
      width: 16px;
      height: 16px;
      flex: 0 0 auto;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 0.15s ease;
    }
    :host([open]) .chevron {
      transform: rotate(180deg);
    }
    dl {
      display: grid;
      grid-template-columns: 92px 1fr;
      gap: 9px 10px;
      margin: 12px 0 0;
      font-size: 13px;
    }
    dt {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    dd {
      margin: 0;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;Xs([u()],Vt.prototype,"heading",2);Xs([u({attribute:!1})],Vt.prototype,"rows",2);Xs([u({type:Boolean})],Vt.prototype,"collapsible",2);Xs([u({type:Boolean,reflect:!0})],Vt.prototype,"open",2);Vt=Xs([O("sfx-asset-info")],Vt);var xh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Sr=(t,e,s,i)=>{for(var r=i>1?void 0:i?_h(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&xh(e,s,r),r};let Hs=class extends E{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?c``:c`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>c`
            <sfx-icon name="chevron-right" .size=${14}></sfx-icon>
            ${e<this.items.length-1?c`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:c`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Hs.styles=A`
    :host {
      display: block;
      padding: 4px 20px 12px;
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: var(--sfx-font-size-sm, 0.875rem);
    }
    button {
      border: none;
      background: none;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      font-size: var(--sfx-font-size-sm, 0.875rem);
    }
    button:first-child {
      margin-left: -6px;
    }
    button:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .current {
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-weight: 500;
      padding: 4px 6px;
    }
    sfx-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;Sr([u({type:Array})],Hs.prototype,"items",2);Sr([u()],Hs.prototype,"rootLabel",2);Hs=Sr([O("sfx-breadcrumb")],Hs);var yh=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,Ne=(t,e,s,i)=>{for(var r=i>1?void 0:i?$h(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&yh(e,s,r),r};let ee=class extends E{constructor(){super(...arguments),this.kind="confirm",this.heading="",this.message="",this.value="",this.placeholder="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.danger=!1,this.loading=!1,this.confirmDisabled=!1,this.error=null,this._handleDocKeyDown=t=>{t.key==="Escape"&&ee._stack[ee._stack.length-1]===this&&(t.preventDefault(),this._cancel())}}connectedCallback(){super.connectedCallback(),ee._stack.push(this),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t,e;(t=this._input)==null||t.focus(),(e=this._input)==null||e.select()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),ee._stack=ee._stack.filter(t=>t!==this),super.disconnectedCallback()}get inputValue(){var t;return(((t=this._input)==null?void 0:t.value)??this.value).trim()}_onInput(t){this.dispatchEvent(new CustomEvent("sfx-dialog-input",{detail:{value:t.target.value},bubbles:!0,composed:!0}))}_confirm(){this.loading||this.confirmDisabled||this.dispatchEvent(new CustomEvent("sfx-dialog-confirm",{detail:{value:this.kind==="prompt"?this.inputValue:""},bubbles:!0,composed:!0}))}_cancel(){this.dispatchEvent(new CustomEvent("sfx-dialog-cancel",{bubbles:!0,composed:!0}))}_onBackdrop(t){t.target===t.currentTarget&&this._cancel()}_onInputKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._confirm())}render(){return c`
      <div class="backdrop" @click=${this._onBackdrop}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${this.heading}>
          ${this.heading?c`<div class="title">${this.heading}</div>`:v}
          ${this.message&&this.kind==="confirm"?c`<div class="message">${this.message}</div>`:v}
          <slot></slot>
          ${this.kind==="prompt"?c`<input
                type="text"
                placeholder=${this.placeholder}
                .value=${this.value}
                ?disabled=${this.loading}
                @input=${this._onInput}
                @keydown=${this._onInputKeyDown}
                aria-label=${this.heading||this.placeholder}
                aria-invalid=${this.error?"true":"false"}
              />`:v}
          ${this.error?c`<div class="error" role="alert">${this.error}</div>`:v}
          <div class="actions">
            <button class="btn" @click=${this._cancel}>${this.cancelLabel}</button>
            <button
              class="btn ${this.danger?"btn-danger":"btn-primary"}"
              @click=${this._confirm}
              ?disabled=${this.loading||this.confirmDisabled}
            >
              ${this.loading?c`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.confirmLabel}</span
                  >`:this.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `}};ee.styles=[Ys,oo,A`
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--sfx-dialog-z-index, 100);
        background: oklch(0 0 0 / 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: sfx-dlg-backdrop-in 150ms ease-out;
      }
      .dialog {
        background: var(--sfx-background, oklch(1 0 0));
        border-radius: var(--sfx-radius-lg, 12px);
        padding: 24px 28px 20px;
        max-width: var(--sfx-dialog-max-width, 440px);
        width: 90%;
        box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        animation: sfx-dlg-dialog-in 180ms ease-out;
      }
      @keyframes sfx-dlg-backdrop-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes sfx-dlg-dialog-in {
        from {
          opacity: 0;
          transform: scale(0.96);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .backdrop,
        .dialog {
          animation: none;
        }
      }
      .title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 6px;
      }
      .message {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-bottom: 16px;
        line-height: 1.5;
      }
      ::slotted(*) {
        margin-bottom: 16px;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        height: 36px;
        padding: 0 12px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-background, oklch(1 0 0));
        outline: none;
      }
      input:hover {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      input:focus {
        border-color: var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
        box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      }
      .error {
        font-size: 0.8125rem;
        color: var(--sfx-destructive, oklch(0.577 0.245 27.325));
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
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        cursor: pointer;
        transition: background 100ms;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .btn:not(.btn-primary):not(.btn-danger):hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .btn-primary {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .btn-danger {
        background: var(--sfx-destructive, oklch(0.577 0.245 27.325));
        color: var(--sfx-destructive-foreground, oklch(1 0 0));
        border-color: var(--sfx-destructive, oklch(0.577 0.245 27.325));
      }
      .btn-primary:hover,
      .btn-danger:hover {
        opacity: 0.9;
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .loading-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `];ee._stack=[];Ne([u()],ee.prototype,"kind",2);Ne([u()],ee.prototype,"heading",2);Ne([u()],ee.prototype,"message",2);Ne([u()],ee.prototype,"value",2);Ne([u()],ee.prototype,"placeholder",2);Ne([u()],ee.prototype,"confirmLabel",2);Ne([u()],ee.prototype,"cancelLabel",2);Ne([u({type:Boolean})],ee.prototype,"danger",2);Ne([u({type:Boolean})],ee.prototype,"loading",2);Ne([u({type:Boolean})],ee.prototype,"confirmDisabled",2);Ne([u()],ee.prototype,"error",2);Ne([wt("input")],ee.prototype,"_input",2);ee=Ne([O("sfx-dialog")],ee);var wh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Gt=(t,e,s,i)=>{for(var r=i>1?void 0:i?kh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&wh(e,s,r),r};function ws(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function ma(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}let pt=class extends E{constructor(){super(...arguments),this.value=null,this.minDate=null,this.maxDate=null,this.locale="",this._viewYear=0,this._viewMonth=0,this._viewInitialized=!1}willUpdate(){if(!this._viewInitialized){this._viewInitialized=!0;const t=this.value??new Date;this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth()}}get _locale(){return this.locale||document.documentElement.lang||"en"}get _monthOptions(){const t=new Intl.DateTimeFormat(this._locale,{month:"long"});return Array.from({length:12},(e,s)=>({value:String(s),label:t.format(new Date(2e3,s,1))}))}get _yearOptions(){var s,i;const t=((s=this.minDate)==null?void 0:s.getFullYear())??this._viewYear-10,e=((i=this.maxDate)==null?void 0:i.getFullYear())??this._viewYear+10;return Array.from({length:e-t+1},(r,a)=>{const o=t+a;return{value:String(o),label:String(o)}})}get _weekdayLabels(){const t=new Intl.DateTimeFormat(this._locale,{weekday:"short"});return Array.from({length:7},(e,s)=>{const i=t.format(new Date(2e3,0,3+s)).slice(0,2);return i.charAt(0).toUpperCase()+i.slice(1)})}get _days(){const e=(new Date(this._viewYear,this._viewMonth,1).getDay()+6)%7,s=new Date(this._viewYear,this._viewMonth,1-e);return Array.from({length:42},(i,r)=>{const a=new Date(s.getFullYear(),s.getMonth(),s.getDate()+r);return{date:a,outside:a.getMonth()!==this._viewMonth}})}_isDisabled(t){return!!(this.minDate&&ws(t)<ws(this.minDate)||this.maxDate&&ws(t)>ws(this.maxDate))}_prevMonth(){this._viewMonth===0?(this._viewMonth=11,this._viewYear-=1):this._viewMonth-=1}_nextMonth(){this._viewMonth===11?(this._viewMonth=0,this._viewYear+=1):this._viewMonth+=1}_selectDay(t){this._isDisabled(t)||this.dispatchEvent(new CustomEvent("sfx-select",{detail:{date:t},bubbles:!0,composed:!0}))}render(){const t=ws(new Date);return c`
      <div class="header">
        <button class="nav-btn" aria-label="Previous month" @click=${()=>this._prevMonth()}>
          <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
        </button>
        <sfx-dropdown
          class="month-select"
          variant="borderless"
          .options=${this._monthOptions}
          .value=${String(this._viewMonth)}
          @sfx-change=${e=>{this._viewMonth=Number(e.detail.value)}}
        ></sfx-dropdown>
        <sfx-dropdown
          class="year-select"
          variant="borderless"
          .options=${this._yearOptions}
          .value=${String(this._viewYear)}
          @sfx-change=${e=>{this._viewYear=Number(e.detail.value)}}
        ></sfx-dropdown>
        <button class="nav-btn" aria-label="Next month" @click=${()=>this._nextMonth()}>
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </button>
      </div>
      <div class="weekdays">
        ${this._weekdayLabels.map(e=>c`<span class="weekday">${e}</span>`)}
      </div>
      <div class="days">
        ${this._days.map(({date:e,outside:s})=>{const i=this._isDisabled(e),r=ma(e,t),a=this.value?ma(e,this.value):!1,o=["day",s&&"outside",r&&"today",a&&"selected"].filter(Boolean).join(" ");return c`
            <button class=${o} ?disabled=${i} @click=${()=>this._selectDay(e)}>
              ${e.getDate()}
            </button>
          `})}
      </div>
    `}};pt.styles=[Ys,wc,A`
      :host {
        display: block;
        width: 264px;
        font-family: inherit;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 8px;
      }
      .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        flex-shrink: 0;
        border: none;
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        cursor: pointer;
      }
      .nav-btn:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .month-select,
      .year-select {
        flex: 1;
        min-width: 0;
      }
      .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-bottom: 4px;
      }
      .weekday {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
      }
      .day {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        border: none;
        border-radius: 9999px;
        background: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        cursor: pointer;
      }
      .day:hover:not(:disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .day.outside {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .day.today {
        background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        font-weight: 500;
      }
      .day.selected,
      .day.selected.today {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        font-weight: 500;
      }
      .day:disabled {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0.4;
        cursor: default;
      }
    `];Gt([u({attribute:!1})],pt.prototype,"value",2);Gt([u({attribute:!1})],pt.prototype,"minDate",2);Gt([u({attribute:!1})],pt.prototype,"maxDate",2);Gt([u()],pt.prototype,"locale",2);Gt([b()],pt.prototype,"_viewYear",2);Gt([b()],pt.prototype,"_viewMonth",2);pt=Gt([O("sfx-calendar")],pt);var Sh=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,Me=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ch(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Sh(e,s,r),r};function ks(t){if(!t)return null;const[e,s,i]=t.split("-").map(Number);return!e||!s||!i?null:new Date(e,s-1,i)}function ba(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function Ah(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>e.type).filter(e=>e==="month"||e==="day"||e==="year")}function xa(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>{switch(e.type){case"month":return"MM";case"day":return"DD";case"year":return"YYYY";default:return e.value}}).join("")}function Eh(t,e){const s=t.split(/[^0-9]+/).filter(Boolean);if(s.length!==3)return null;const i=Ah(e),r={};for(const[h,p]of i.entries()){const f=s[h];if(p==="year"?f.length!==4:f.length>2)return null;r[p]=Number(f)}const{month:a,day:o,year:n}=r;if(!a||!o||!n||a<1||a>12||o<1||o>31)return null;const l=new Date(n,a-1,o);return l.getFullYear()!==n||l.getMonth()!==a-1||l.getDate()!==o?null:l}let _e=class extends E{constructor(){super(...arguments),this.value="",this.min="",this.max="",this.placeholder="",this.disabled=!1,this.locale="",this._draft="",this._error="",this._open=!1,this._popoverTop=0,this._popoverBottom=0,this._popoverLeft=0,this._popoverPosition="below",this._openCalendar=()=>{this.disabled||this._open||(this._open=!0,this._updatePopoverPosition(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown))},this._toggleCalendar=()=>{this.disabled||(this._open?(this._open=!1,this._cleanupListeners()):this._openCalendar())},this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1,this._cleanupListeners())},this._handleKeyDown=t=>{t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,this._cleanupListeners())}}get _effectiveLocale(){return this.locale||document.documentElement.lang||"en"}get _selectedDate(){return ks(this.value)}get _displayText(){const t=this._selectedDate;return t?new Intl.DateTimeFormat(this._effectiveLocale).format(t):""}willUpdate(t){var e,s;t.has("value")&&((s=(e=this.shadowRoot)==null?void 0:e.activeElement)==null?void 0:s.tagName)!=="INPUT"&&(this._draft=this._displayText,this._error="")}render(){const t=this._selectedDate;return c`
      <div
        class="field ${this._open?"open":""} ${this.disabled?"disabled":""} ${this._error?"error":""}"
      >
        <input
          type="text"
          .value=${this._draft}
          placeholder=${this.placeholder||xa(this._effectiveLocale)}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />
        <button
          class="icon-btn"
          type="button"
          aria-label="Open calendar"
          ?disabled=${this.disabled}
          @click=${this._toggleCalendar}
        >
          <sfx-icon name="calendar" .size=${16}></sfx-icon>
        </button>
      </div>
      ${this._error?c`<div class="error-text">${this._error}</div>`:v}
      ${this._open?c`
            <div
              class="popover"
              ${D({[this._popoverPosition==="below"?"top":"bottom"]:`${this._popoverPosition==="below"?this._popoverTop:this._popoverBottom}px`,left:`${this._popoverLeft}px`})}
            >
              <sfx-calendar
                .value=${t}
                .minDate=${ks(this.min)}
                .maxDate=${ks(this.max)}
                .locale=${this.locale}
                @sfx-select=${this._handleSelect}
              ></sfx-calendar>
            </div>
          `:v}
    `}_handleInput(t){this._draft=t.target.value,this._validateAndCommit(this._draft)}_validateAndCommit(t){if(!t){this._error="",this._commit("");return}const e=Eh(t,this._effectiveLocale),s=ks(this.min),i=ks(this.max),r=!!e&&(!!s&&e<s||!!i&&e>i);if(!e||r){this._error=`Invalid date. Use ${xa(this._effectiveLocale)}`;return}this._error="",this._commit(ba(e))}_commit(t){t!==this.value&&(this.value=t,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}_handleSelect(t){this._open=!1,this._cleanupListeners(),this._error="",this._commit(ba(t.detail.date))}_updatePopoverPosition(){const t=this.getBoundingClientRect(),e=340,s=window.innerHeight-t.bottom,i=t.top;this._popoverPosition=s<e&&i>s?"above":"below",this._popoverPosition==="below"?this._popoverTop=t.bottom+4:this._popoverBottom=window.innerHeight-t.top+4,this._popoverLeft=Math.min(t.left,window.innerWidth-284)}_cleanupListeners(){document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupListeners()}};_e.styles=[Ys,oo,A`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      }
      .field {
        display: flex;
        align-items: center;
        width: 100%;
        height: 36px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
      }
      .field:hover:not(.disabled) {
        border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .field.disabled {
        opacity: 0.5;
      }
      .field.open,
      .field:focus-within {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .field.error {
        border-color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
      }
      input {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        background: none;
        padding: 0;
        margin: 0;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--sfx-font-size-sm, 0.875rem);
      }
      input:disabled {
        cursor: default;
      }
      input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-left: 8px;
        padding: 0;
        border: none;
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
      }
      .icon-btn:disabled {
        cursor: default;
      }
      .error-text {
        font-size: 0.8125rem;
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
        margin-top: 4px;
      }
      .popover {
        position: fixed;
        z-index: 50;
        background: var(--sfx-card, oklch(1 0 0));
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 10px;
      }
    `];Me([u()],_e.prototype,"value",2);Me([u()],_e.prototype,"min",2);Me([u()],_e.prototype,"max",2);Me([u()],_e.prototype,"placeholder",2);Me([u({type:Boolean})],_e.prototype,"disabled",2);Me([u()],_e.prototype,"locale",2);Me([b()],_e.prototype,"_draft",2);Me([b()],_e.prototype,"_error",2);Me([b()],_e.prototype,"_open",2);Me([b()],_e.prototype,"_popoverTop",2);Me([b()],_e.prototype,"_popoverBottom",2);Me([b()],_e.prototype,"_popoverLeft",2);Me([b()],_e.prototype,"_popoverPosition",2);_e=Me([O("sfx-date-input")],_e);var Fh=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,st=(t,e,s,i)=>{for(var r=i>1?void 0:i?Oh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Fh(e,s,r),r};let Ue=class extends E{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),r=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:r})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?v:c`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?c`
              <span class="divider"></span>
              <span class="select-label">${this.t("selectColon","Select:")}</span>
              ${this._canSelectMore()?c`<button
                    class="bar-btn"
                    ?disabled=${this.isSelectingAll}
                    @click=${this._selectAll}
                  >
                    <sfx-icon name="check-check" .size=${14}></sfx-icon>${this.isSelectingAll?this.t("selecting","Selecting..."):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t("selectFirst",`First ${this.maxSelections}`,{count:this.maxSelections}):this._selectScope==="assets"?this.t("selectAllAssets","Select all assets"):this._selectScope==="folders"?this.t("selectAllFolders","Select all folders"):this.t("selectAll","Select all")}
                  </button>`:v}
              <button class="bar-btn" @click=${this._clear}>
                <sfx-icon name="close" .size=${14}></sfx-icon>${this.t("deselectAll","Deselect all")}
              </button>
              ${this.maxSelections&&this._totalSelected>=this.maxSelections?c`<span class="limit-notice"
                    >${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span
                  >`:v}
            `:v}
        <div class="spacer"></div>
        ${this.showTransform?c`
              <button class="btn-confirm btn-transform" @click=${this._transform}>
                ${this.t("transform","Transform")}
              </button>
            `:v}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};Ue.styles=A`
    :host {
      display: block;
      padding: 0 8px 8px;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-radius: var(--sfx-radius-lg, 12px);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    .count {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
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
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      white-space: nowrap;
    }
    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 14px;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      white-space: nowrap;
      border-radius: var(--sfx-radius-sm, 6px);
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
      font-size: var(--sfx-font-size-xs, 0.75rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 8px;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    .btn-confirm {
      padding: 8px 24px;
      border: 1.5px solid var(--sfx-primary-foreground, oklch(1 0 0));
      border-radius: var(--sfx-radius-sm, 6px);
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      background: transparent;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    .btn-confirm:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .btn-transform {
      margin-right: 8px;
      border-color: oklch(1 0 0 / 0.5);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar {
        animation: none;
      }
    }
  `;st([u({type:Array})],Ue.prototype,"selectedAssets",2);st([u({type:Array})],Ue.prototype,"selectedFolders",2);st([u({type:Number})],Ue.prototype,"totalCount",2);st([u({type:Number})],Ue.prototype,"totalFolderCount",2);st([u({type:Boolean})],Ue.prototype,"isSelectingAll",2);st([u({type:Boolean})],Ue.prototype,"multiSelect",2);st([u({type:Number})],Ue.prototype,"maxSelections",2);st([u({type:Boolean})],Ue.prototype,"showTransform",2);st([u({attribute:!1})],Ue.prototype,"t",2);Ue=st([O("ap-selection-bar")],Ue);var Th=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,Cr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Lh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Th(e,s,r),r};let qs=class extends E{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?v:c`
      <div
        class="marquee"
        ${D({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};qs.styles=A`
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
      border: 2px solid var(--sfx-primary, oklch(0.578 0.198 268.129));
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      border-radius: 2px;
    }
  `;Cr([u({type:Boolean})],qs.prototype,"active",2);Cr([u({type:Object})],qs.prototype,"rect",2);qs=Cr([O("ap-marquee-overlay")],qs);var Ph=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Js=(t,e,s,i)=>{for(var r=i>1?void 0:i?Mh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ph(e,s,r),r};let Kt=class extends E{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return c`
      <div
        class="backdrop"
        @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}
      >
        <div class="dialog">
          <div class="title">${this.t("addFolderContents","Add folder contents")}</div>
          <div class="description">
            ${this.t("folderResolveDescription","You selected {{count}} folder(s). How would you like to add the assets?",{count:t})}
          </div>
          <div class="options">
            <sfx-radio-group
              .value=${this._mode}
              .options=${[{value:"direct",label:this.t("directAssetsOnly","Direct assets only")},{value:"recursive",label:this.t("allAssetsIncludingSubfolders","All assets (including subfolders)")}]}
              @sfx-change=${this._handleModeChange}
            ></sfx-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>
              ${this.t("cancel","Cancel")}
            </button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?c`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t("loading","Loading...")}</span
                  >`:this.t("addAssets","Add assets")}
            </button>
          </div>
        </div>
      </div>
    `}};Kt.styles=[je,A`
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
        background: var(--sfx-background, oklch(1 0 0));
        border-radius: var(--sfx-radius-lg, 12px);
        padding: 28px 32px;
        max-width: 440px;
        width: 90%;
        box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
      }
      .title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 8px;
      }
      .description {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
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
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        cursor: pointer;
        transition: background 100ms;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .btn:not(.btn-primary):hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .btn-primary {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
    `];Js([u({type:Array})],Kt.prototype,"folders",2);Js([u({type:Boolean})],Kt.prototype,"loading",2);Js([u({attribute:!1})],Kt.prototype,"t",2);Js([b()],Kt.prototype,"_mode",2);Kt=Js([O("ap-folder-resolve-dialog")],Kt);var Ih=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Ve=(t,e,s,i)=>{for(var r=i>1?void 0:i?Dh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ih(e,s,r),r};const Rh=["webp","jpeg","png","gif"];function zh(t){const e=(t??"").toLowerCase();return Rh.includes(e)?e:"jpeg"}let Le=class extends E{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>Tt(i));if(!t)return 1.5;const e=oa(t),s=na(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>Tt(e));if(this._defaultFormat=zh(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=oa(t),s=na(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return c`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">${this.t("exportOptions","Export Options")}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t("close","Close")}>
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">${this.t("format","Format")}</span>
            <sfx-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${dl}
              @sfx-change=${this._handleFormatChange}
            ></sfx-radio-group>
          </div>

          ${t?v:c`
                <div class="section">
                  <span class="section-label">${this.t("quality","Quality")}</span>
                  <sfx-dropdown
                    .value=${this._quality}
                    .options=${hl}
                    @sfx-change=${this._handleQualityChange}
                  ></sfx-dropdown>
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
                        placeholder=${this.t("original","Original")}
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
                      <sfx-icon name=${this._lockAspect?"lock":"link-2"} .size=${16}></sfx-icon>
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
              ${pl.map(e=>c`
                  <button
                    class="preset-btn ${this._activePreset===e.value?"active":""}"
                    @click=${()=>this._handlePreset(e)}
                  >
                    ${e.label}
                  </button>
                `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>
              ${this.exportOriginalLabel??this.t("exportOriginal","Export Original")}
            </button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>
              ${this.applyExportLabel??this.t("applyAndExport","Apply & Export")}
            </button>
          </div>
        </div>
      </div>
    `}};Le.styles=[je,A`
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
        background: var(--sfx-background, oklch(1 0 0));
        border-radius: var(--sfx-radius-lg, 12px);
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
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .title {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        border-radius: var(--sfx-radius-sm, 6px);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        transition:
          color 100ms,
          background 100ms;
      }
      .close-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .section {
        margin-bottom: 16px;
      }
      .section-label {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        font-size: var(--sfx-font-size-xs, 0.75rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-bottom: 4px;
        display: block;
      }
      .input-wrapper {
        display: flex;
        align-items: center;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        overflow: hidden;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .input-wrapper input {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        padding: 8px 12px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        -moz-appearance: textfield;
      }
      .input-wrapper input::-webkit-inner-spin-button,
      .input-wrapper input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .input-wrapper input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .input-suffix {
        padding: 0 10px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
        border-radius: var(--sfx-radius-sm, 6px);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        flex-shrink: 0;
        transition: color 100ms;
      }
      .lock-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .lock-btn.locked {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        cursor: pointer;
        border-radius: var(--sfx-radius-sm, 6px);
        transition:
          color 100ms,
          background 100ms;
      }
      .preset-btn:hover {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .preset-btn.active {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
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
        border-top: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .btn {
        padding: 8px 20px;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        cursor: pointer;
        transition:
          background 100ms,
          opacity 100ms;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .btn:not(.btn-primary):hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .btn-primary {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .btn-primary:hover {
        opacity: 0.9;
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: default;
      }
      sfx-dropdown {
        display: block;
        width: 100%;
      }
    `];Ve([u({type:Array})],Le.prototype,"assets",2);Ve([u({type:Boolean})],Le.prototype,"isMultiSelect",2);Ve([u({attribute:!1})],Le.prototype,"t",2);Ve([u({attribute:!1})],Le.prototype,"exportOriginalLabel",2);Ve([u({attribute:!1})],Le.prototype,"applyExportLabel",2);Ve([b()],Le.prototype,"_format",2);Ve([b()],Le.prototype,"_quality",2);Ve([b()],Le.prototype,"_width",2);Ve([b()],Le.prototype,"_height",2);Ve([b()],Le.prototype,"_lockAspect",2);Ve([b()],Le.prototype,"_activePreset",2);Le=Ve([O("ap-transformation-dialog")],Le);var Nh=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var r=i>1?void 0:i?Uh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Nh(e,s,r),r};const jh=/[/\\\x00-\x1f]/;let tt=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_onInput(t){this._name=t.detail.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_validateName(t){return jh.test(t)?this.t("folderNameInvalidChars",`Folder name can't contain "/" or "\\".`):t==="."||t===".."?this.t("folderNameReserved",`Folder name can't be "." or "..".`):null}_onConfirm(t){if(this.loading)return;const e=t.detail.value.trim();if(!e)return;const s=this._validateName(e);if(s){this._localError=s;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:e},bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}render(){const t=this._localError??(this._apiErrorDismissed?null:this.error);return c`
      <sfx-dialog
        kind="prompt"
        heading=${this.t("createFolder","Create folder")}
        placeholder=${this.t("folderName","Folder name")}
        confirmLabel=${this.t("create","Create")}
        .loading=${this.loading}
        .error=${t}
        .confirmDisabled=${this._name.trim().length===0}
        @sfx-dialog-input=${this._onInput}
        @sfx-dialog-confirm=${this._onConfirm}
        @sfx-dialog-cancel=${this._onCancel}
      >
        <div class="description">${this.t("inFolder","In")} <code>${this.currentFolderPath||"/"}</code></div>
      </sfx-dialog>
    `}};tt.styles=A`
    :host {
      display: block;
    }
    .description {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      line-height: 1.5;
      word-break: break-all;
      overflow-wrap: anywhere;
    }
    .description code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      padding: 1px 6px;
      border-radius: 4px;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
  `;At([u({attribute:!1})],tt.prototype,"t",2);At([u()],tt.prototype,"currentFolderPath",2);At([u({type:Boolean})],tt.prototype,"loading",2);At([u()],tt.prototype,"error",2);At([b()],tt.prototype,"_name",2);At([b()],tt.prototype,"_localError",2);At([b()],tt.prototype,"_apiErrorDismissed",2);tt=At([O("ap-create-folder-dialog")],tt);var Vh=Object.defineProperty,We=(t,e,s,i)=>{for(var r=void 0,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(e,s,r)||r);return r&&Vh(e,s,r),r},xt;const Ke=(xt=class extends E{constructor(){super(),this._initFailed=!1,this._variantsFetched=!1,this._variantsFetching=!1,this._variantsFetchAttempts=0,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._localizedFieldsCache=null,this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._variantPresets=[],this._defaultVariantName="original",this._variantOverrides={},this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,r;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=Uo(),this.storeCtrl=new On(this,this.store),this.selectionCtrl=new Ln(this,this.store),this.infiniteScrollCtrl=new Pn(this,()=>this._loadMore()),this.marqueeCtrl=new rr(this,{queryCards:e=>{const s=[],i=(a,o,n)=>a.querySelectorAll(`[${o}]`).forEach(l=>{const h=l.dataset[n];h&&s.push({uuid:h,el:l})});let r=!1;for(const a of Array.from(e.children))a.shadowRoot&&(i(a.shadowRoot,"data-asset-uuid","assetUuid"),i(a.shadowRoot,"data-folder-uuid","folderUuid"),r=!0);return(!r||s.length===0)&&(i(e,"data-asset-uuid","assetUuid"),i(e,"data-folder-uuid","folderUuid")),s},getSelection:()=>{const e=this.store.getState();return[...e.selectedAssets.keys(),...e.selectedFolders.keys()]},setSelection:e=>{var h,p;const s=this.store.getState(),i=((h=s.config)==null?void 0:h.folderSelection)===!0,r=new Map,a=new Map;for(const f of e){const d=s.selectedAssets.get(f);if(d){r.set(f,d);continue}const g=s.selectedFolders.get(f);if(i&&g){a.set(f,g);continue}if(!s.disabledAssetIds.has(f)){const m=s.assets.find(_=>_.uuid===f);if(m){r.set(f,m);continue}}if(i&&!s.disabledFolderIds.has(f)){const m=s.folders.find(_=>_.uuid===f);m&&a.set(f,m)}}const o=(p=s.config)==null?void 0:p.maxSelections,n=r.size+(i?a.size:0),l=o&&n>o?new Map(Array.from(r.entries()).slice(0,Math.max(0,o-a.size))):r;this.store.setState({selectedAssets:l,...i?{selectedFolders:a}:{}})},isInteractiveTarget:e=>{var s;return(((s=this.store.getState().config)==null?void 0:s.multiSelect)??!0)===!1?!0:e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const r=i.tagName.toLowerCase();return r.startsWith("ap-asset-")||r.startsWith("ap-folder-")?!0:i.classList.contains("check")||i.classList.contains("check-box")})}})}_toKeySet(e){return Array.isArray(e)?new Set(e):null}get _enabledFilterKeys(){var e;return this._toKeySet((e=this.config)==null?void 0:e.enabledFilters)}_isFilterEnabled(e){const s=this._enabledFilterKeys;if(!s||!Al.has(e)||e in this._normalizedForcedFilters)return!0;const i=Qa.has(e)?$.APPROVAL:e;return s.has(i)}get _visiblePinnedFilters(){const{filters:e}=this.store.getState();return e.pinned.filter(s=>this._isFilterEnabled(s))}get _enabledMetadataFieldKeys(){var e;return this._toKeySet((e=this.config)==null?void 0:e.enabledMetadataFields)}get _visiblePinnedMetadata(){const{filters:e}=this.store.getState();if(!this._isFilterEnabled($.METADATA))return[];const s=this._enabledMetadataFieldKeys;return s?e.metadata.pinned.filter(i=>s.has(rs(i))):e.metadata.pinned}get _visibleAppliedMetadata(){const{filters:e}=this.store.getState();if(!this._isFilterEnabled($.METADATA))return{};const s=this._enabledMetadataFieldKeys;return s?Object.fromEntries(Object.entries(e.metadata.applied).filter(([i])=>s.has(rs(i)))):e.metadata.applied}_localizeMetadataFields(e,s){const i=this._localizedFieldsCache;if(i&&i.fields===e&&i.t===s)return i.result;const r=lc(e,s);return this._localizedFieldsCache={fields:e,t:s,result:r},r}_getFilterMetadataFields(e){if(!this._isFilterEnabled($.METADATA))return[];const s=this._enabledMetadataFieldKeys;return s?e.filter(i=>s.has(i.key)):e}get _variantOptions(){const e=this.store.getState().t;return(!this._variantOptionsCache||this._variantOptionsCachePresets!==this._variantPresets||this._variantOptionsCacheT!==e)&&(this._variantOptionsCache=[{value:"original",label:e("original","Original")},...this._variantPresets.map(s=>({value:s.name,label:s.name}))],this._variantOptionsCachePresets=this._variantPresets,this._variantOptionsCacheT=e),this._variantOptionsCache}_handleVariantDefaultChange(e){this._defaultVariantName=e.detail.name}_handleAssetVariantChange(e){const{uuid:s,name:i,asset:r,index:a}=e.detail;this.selectionCtrl.selectAsset(r,a)&&(this._variantOverrides={...this._variantOverrides,[s]:i})}_applyVariantSelection(e){var s;return(s=this.config)!=null&&s.variants?e.map(i=>{var o,n;if(!Tt(i))return i;const r=this._variantOverrides[i.uuid]??this._defaultVariantName;if(!r||r==="original")return i;const a=((o=i.transformation)==null?void 0:o.url.cdn)??((n=i.url)==null?void 0:n.cdn)??"";return a?{...i,selectedVariant:{name:r,url:or(a,r)}}:i}):e}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const r=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,r)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_computeAuthKey(e){return JSON.stringify({auth:e.auth,apiBase:e.apiBase})}_initConfig(e){const s={folderSelection:!0,...e};this._applyConfig(s);const i=this._computeAuthKey(s);!this._initPromise||i!==this._lastAuthKey||this._initFailed?(i!==this._lastAuthKey&&(this._variantPresets=[],this._variantsFetched=!1,this._variantsFetchAttempts=0,this._defaultVariantName="original",this._variantOverrides={}),this._lastAuthKey=i,this._initFailed=!1,this._initPromise=this._fetchBootstrapData(s).catch(()=>{this._initFailed=!0})):s.variants&&!this._variantsFetched&&!this._variantsFetching&&this._variantsFetchAttempts<xt.VARIANTS_FETCH_MAX_ATTEMPTS&&this._initPromise.then(()=>this._fetchVariantPresets(s)),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}_applyConfig(e){const s=nc(),i=s.sortBy??e.defaultSortBy??"created_at",r=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&hc(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:r,disabledAssetIds:new Set(e.disabledAssetIds??[]),disabledFolderIds:new Set(e.disabledFolderIds??[])}),bl(e.transformRemoteThumbnail),this._normalizedForcedFilters=Qi(e.forcedFilters)}async _initI18n(e){try{const{i18n:s,isNew:i}=await En(e||"en");i&&s.on("missingKey",(a,o,n,l,h,p)=>{const f=n.match(/_(?:zero|one|two|few|many|other)$/),d=f&&(p!=null&&p[`defaultValue${f[0]}`])?String(p[`defaultValue${f[0]}`]):l;Fn.handleMissingKey(n,d,o)});const r=(a,o,n)=>typeof o=="string"?s.t(a,o,n??{}):s.t(a,o??{});this.store.setState({t:r})}catch{}}async _fetchVariantPresets(e){if(!(!this.apiClient||!e.variants||this._initFailed||this._variantsFetching||this._variantsFetched)){this._variantsFetching=!0,this._variantsFetchAttempts++;try{this._variantPresets=await aa(this.apiClient),this._variantsFetched=!0}catch(s){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:s,context:"variantPresets"},bubbles:!0,composed:!0}))}finally{this._variantsFetching=!1}}}async _fetchBootstrapData(e){var r,a;const s=e.apiBase||`https://api.filerobot.com/${e.auth.projectToken}/v5`;let i;if(e.auth.mode==="securityTemplate"){const{key:o,permissions:n}=await al(e.auth,s);i=o,this.store.setState({sassKey:o,permissions:n})}else i=e.auth.sassKey;this.apiClient=new ar({apiBase:s.replace(/\/v5$/,""),headers:{"X-Filerobot-Key":i}});try{const[o,n,l,h,p,f,d]=await Promise.allSettled([Nl(this.apiClient),il(this.apiClient),qn(this.apiClient),sl(this.apiClient),Rl(this.apiClient),el(this.apiClient),e.variants?aa(this.apiClient):Promise.resolve([])]),g={};if(o.status==="fulfilled"){const{fields:k,regionalVariantGroups:T,regionalFilters:w,cdnPermalinkEnabled:P}=o.value;g.metadataFields=k,g.regionalVariantGroups=T,g.regionalFilters=w,g.cdnPermalinkEnabled=P}if(n.status==="fulfilled"){const k=(a=(r=n.value.settings)==null?void 0:r.project_branding)==null?void 0:a.brandColor;k&&(g.brandColor=k)}l.status==="fulfilled"&&(g.labels=l.value||[]),h.status==="fulfilled"&&(g.tags=h.value),f.status==="fulfilled"&&(g.collections=f.value.collections||[]),p.status==="fulfilled"&&(g.fileTypes=p.value),d.status==="fulfilled"?e.variants&&(this._variantPresets=d.value,this._variantsFetched=!0):e.variants&&this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:d.reason,context:"variantPresets"},bubbles:!0,composed:!0}));const{pinnedFilters:m,pinnedMetadata:_}=rc(e.auth.projectToken??null),x=this.store.getState().filters;g.filters={...x,pinned:m,metadata:{...x.metadata,pinned:_,visible:[..._]}},this.store.setState(g);const F=e.brandColor||g.brandColor||this.store.getState().brandColor;F&&(g.brandColor||this.store.setState({brandColor:F}),mc(this,F))}catch(o){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"init"},bubbles:!0,composed:!0})),o}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=j(()=>import("./define-CNor2NIc.js").then(e=>e.aJ),[]).then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let r;return e.auth.mode==="securityTemplate"?r={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:r={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:r,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,similarityCheck:s.similarityCheck,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(r){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r instanceof Error?r:new Error(String(r)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var l,h,p,f,d,g,m,_;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},r=Qi((l=this.config)==null?void 0:l.defaultFilters);for(const[x,F]of Object.entries(r))!s.has(x)&&this._isFilterEnabled(x)&&(i[x]=F);const a=((h=this.config)==null?void 0:h.tabs)??["assets","folders"],o=(p=this.config)!=null&&p.rememberLastTab?uc(this.config.auth.projectToken):null,n=(o&&a.includes(o)?o:null)??((f=this.config)!=null&&f.defaultTab&&a.includes(this.config.defaultTab)?this.config.defaultTab:null)??((d=this.config)!=null&&d.initialFolderPath&&a.includes("folders")?"folders":null)??a[0]??"assets";this.store.setState({isOpen:!0,activeTab:n,searchQuery:"",isAISearchActive:!!((g=this.config)!=null&&g.enableAISearch&&((m=this.config)!=null&&m.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(n),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(n),((_=this.config)==null?void 0:_.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._defaultVariantName="original",this._variantOverrides={},this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,r,a,o,n,l,h,p,f,d,g,m,_,x,F,k,T,w,P,K,V,Z,ce,B,X,de,H,he,I,Q,G,z,Ie,Be,gt,hs,ps,us,fs,gs,vs,ms,bs;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const it=s.activeTab;if(it==="assets"){const $e=this._buildSearchNotation(),He=s.currentFolderPath||"/",Ee=s.isAISearchActive&&!!s.searchQuery,we=Ft(this.apiClient,{fields:(i=this.config)==null?void 0:i.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:He,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:$e||void 0,recursive:1,...Ee&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((r=s.config)==null?void 0:r.locale)??"en"}}),pe=ti(this.apiClient,{folder:He,q:$e||void 0,search:s.searchQuery||void 0,recursive:1,...Ee&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((a=s.config)==null?void 0:a.locale)??"en"}}).catch(()=>null),[oe,me]=await Promise.all([we,pe]);if(e!==this._loadId)return;const ke=((o=oe.files)==null?void 0:o.length)??0,be=ke>=s.limit,De=((n=me==null?void 0:me.stats)==null?void 0:n.approx_files_count)??((l=me==null?void 0:me.info)==null?void 0:l.total_files_count)??((h=oe.info)==null?void 0:h.total_files_count)??((f=(p=oe.base)==null?void 0:p.count)==null?void 0:f.files_recursive)??((g=(d=oe.base)==null?void 0:d.count)==null?void 0:g.files_direct)??ke;this.store.setState({assets:oe.files||[],folders:[],totalCount:De,totalFolderCount:0,offset:0,hasMore:be,isLoading:!1})}else if(it==="folders"){const $e=this._buildSearchNotation(),He=s.currentFolderPath||"/",[Ee,we,pe]=await Promise.all([Wn(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),Ft(this.apiClient,{fields:(m=this.config)==null?void 0:m.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:He,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:$e||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((_=s.config)==null?void 0:_.locale)??"en"}}),ti(this.apiClient,{folder:He,q:$e||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((x=s.config)==null?void 0:x.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const oe=Ee.folders||[];let me={};if(oe.length>0)try{me=await Xn(this.apiClient,oe.map(Yt=>Yt.uuid))}catch{}if(e!==this._loadId)return;const ke=((F=we.files)==null?void 0:F.length)??0,be=ke>=s.limit,De=((k=pe==null?void 0:pe.stats)==null?void 0:k.approx_files_count)??((T=pe==null?void 0:pe.info)==null?void 0:T.total_files_count)??((w=we.info)==null?void 0:w.total_files_count)??((K=(P=we.base)==null?void 0:P.count)==null?void 0:K.files_direct)??ke;this.store.setState({assets:we.files||[],folders:oe,folderPreviews:me,totalCount:De,totalFolderCount:Ee.total??oe.length,offset:0,hasMore:be,isLoading:!1})}else if(it==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const $e=s.labels.find(Fi=>Fi.uuid===s.activeLabelUuid);if(!$e){this.store.setState({isLoading:!1});return}const He=$e.sid.replace("#",""),Ee=this._buildSearchNotation(),we=`labels:${He}${Ee?" "+Ee:""}`,pe=s.isAISearchActive&&!!s.searchQuery,oe=Ft(this.apiClient,{fields:(V=this.config)==null?void 0:V.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:we,recursive:1,...pe&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Z=s.config)==null?void 0:Z.locale)??"en"}}),me=ti(this.apiClient,{folder:"/",q:we,search:s.searchQuery||void 0,recursive:1,...pe&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((ce=s.config)==null?void 0:ce.locale)??"en"}}).catch(()=>null),[ke,be]=await Promise.all([oe,me]);if(e!==this._loadId)return;const De=((B=ke.files)==null?void 0:B.length)??0,Yt=De>=s.limit,Ei=((X=be==null?void 0:be.stats)==null?void 0:X.approx_files_count)??((de=be==null?void 0:be.info)==null?void 0:de.total_files_count)??((H=ke.info)==null?void 0:H.total_files_count)??((I=(he=ke.base)==null?void 0:he.count)==null?void 0:I.files_recursive)??((G=(Q=ke.base)==null?void 0:Q.count)==null?void 0:G.files_direct)??De;this.store.setState({assets:ke.files||[],folders:[],totalCount:Ei,totalFolderCount:0,offset:0,hasMore:Yt,isLoading:!1})}else if(it==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const $e=s.activeCollectionFolder;if(!($e&&!((z=$e.children)!=null&&z.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Ee=s.activeCollectionUuid,we=$e.filters||void 0,pe=this._buildSearchNotation(),oe=s.isAISearchActive&&!!s.searchQuery,me=Ft(this.apiClient,{fields:(Ie=this.config)==null?void 0:Ie.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:pe||void 0,recursive:1,collection_uuid:Ee,f64:we,...oe&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Be=s.config)==null?void 0:Be.locale)??"en"}}),ke=ti(this.apiClient,{q:pe||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:Ee,f64:we,...oe&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((gt=s.config)==null?void 0:gt.locale)??"en"}}).catch(()=>null),[be,De]=await Promise.all([me,ke]);if(e!==this._loadId)return;const Yt=((hs=be.files)==null?void 0:hs.length)??0,Ei=Yt>=s.limit,Fi=((ps=De==null?void 0:De.stats)==null?void 0:ps.approx_files_count)??((us=De==null?void 0:De.info)==null?void 0:us.total_files_count)??((fs=be.info)==null?void 0:fs.total_files_count)??((vs=(gs=be.base)==null?void 0:gs.count)==null?void 0:vs.files_recursive)??((bs=(ms=be.base)==null?void 0:ms.count)==null?void 0:bs.files_direct)??Yt;this.store.setState({assets:be.files||[],folders:[],totalCount:Fi,totalFolderCount:0,offset:0,hasMore:Ei,isLoading:!1})}}catch(it){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:it,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var r,a,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((r=e.activeCollectionFolder.children)!=null&&r.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let l=n||void 0,h=e.currentFolderPath||"/",p=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const k=e.labels.find(T=>T.uuid===e.activeLabelUuid);k&&(l=`labels:${k.sid.replace("#","")}${n?" "+n:""}`),h="/",p=1}let f,d;e.activeTab==="collections"&&e.activeCollectionFolder&&(f=e.activeCollectionUuid||void 0,d=e.activeCollectionFolder.filters||void 0,h="",p=1);const g=await Ft(this.apiClient,{fields:(a=this.config)==null?void 0:a.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...h?{folder:h}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:p,...f&&{collection_uuid:f},...d&&{f64:d},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const m=this.store.getState().assets,_=g.files||[],x=_.length>=e.limit,F=[...m,..._];this.store.setState({assets:F,offset:i,hasMore:x,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var r;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((r=s.activeCollectionFolder.children)!=null&&r.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var a;const s=e.detail.active,i=this.store.getState(),r={isAISearchActive:s};i.searchQuery&&(s?r.sortBy="relevance":i.sortBy==="relevance"&&(r.sortBy=((a=this.config)==null?void 0:a.defaultSortBy)??"created_at"),r.offset=0,r.assets=[],r.folders=[],r.isLoading=!0),this.store.setState(r),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&dc(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,r=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...r,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),fa(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),fa(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,r;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&pc(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((r=this.config)==null?void 0:r.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&Tt(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var r,a;e=this._applyVariantSelection(e);const i={assets:e};s!=null&&s.length&&(i.folders=s),(a=(r=this.config)==null?void 0:r.onSelect)==null||a.call(r,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var a;const s=e.detail.folder,i=this.store.getState(),r=s.path||`${i.currentFolderPath}${s.name}/`;(a=this.config)!=null&&a.rememberLastFolder&&ga(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:r,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:r}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n,l;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const h=this._findCollectionFolder(i.activeCollectionFolders,s);if(h){const p=i.breadcrumb.findIndex(d=>d.uuid===s),f=i.breadcrumb.slice(0,p+1);this.store.setState({activeCollectionFolder:h,breadcrumb:f,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const r=s?i.breadcrumb.findIndex(h=>h.uuid===s):-1,a=s?i.breadcrumb.slice(0,r+1):[],o=a.length>0?a[a.length-1].path:((n=this.config)==null?void 0:n.rootFolderPath)||"/";(l=this.config)!=null&&l.rememberLastFolder&&ga(o,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await tl(this.apiClient,s.uuid),r=Ua(i.folders||[]);this.store.setState({activeCollectionFolders:r,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),r=s.path.split(" -> ").filter(Boolean),a=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let o="";for(const l of r)o=o?`${o} -> ${l}`:l,a.push({uuid:o,name:l,path:o});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:a,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const r=this._findCollectionFolder(i.children,s);if(r)return r}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i,r;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&cc(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||((r=this.config)==null?void 0:r.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const r=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),a=[];let o=s.endsWith("/")?s:s+"/";for(const n of r)o+=n+"/",a.push({uuid:o,name:n,path:o});return a}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var r,a;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((a=this.config)==null?void 0:a.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var a,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Tt).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var a;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),r=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const o=await Promise.all(i.map(d=>{var g;return Ft(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:d.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const d of o)n.push(...d.files);const l=[...r],h=new Set(l.map(d=>d.uuid));for(const d of n)h.has(d.uuid)||(l.push(d),h.add(d.uuid));const p=(a=this.config)==null?void 0:a.maxSelections,f=p?l.slice(0,p):l;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(f)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,r=this._transformAssets,a=this._transformFolders,o=r.length>1,n=_l(s,{isMultiSelect:o,isAspectLocked:i}),l=r.map(h=>{var g,m;if(!Tt(h))return h;const p=(g=h.url)==null?void 0:g.cdn,f=(m=h.url)==null?void 0:m.permalink,d={cdn:p?zt(p,n):""};return f&&(d.permalink_cdn=zt(f,n)),{...h,transformation:{params:s,url:d}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(l,a.length?a:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await Hn(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(r){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(r))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var l,h,p;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((l=s.config)==null?void 0:l.multiSelect)??!0))return;const r=((h=e==null?void 0:e.detail)==null?void 0:h.scope)??"all",a=r!=="assets"&&((p=this.config)==null?void 0:p.folderSelection)!==!1&&s.folders.length>0;if(!(r!=="folders")){a&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const n=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const f=this._buildSearchNotation();let d=s.currentFolderPath||"/";const g=s.limit,m=s.assets,_=s.totalCount;let x=s.activeTab==="folders"?0:1,F=f||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const B=s.labels.find(X=>X.uuid===s.activeLabelUuid);B&&(F=`labels:${B.sid.replace("#","")}${f?" "+f:""}`),d="/",x=1}let k,T;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,T=s.activeCollectionFolder.filters||void 0,d="",x=1);const w=[];for(let B=m.length;B<_;B+=g)w.push(B);const P=4,K=[];for(let B=0;B<w.length;B+=P){if(n!==this._selectAllId)return;const X=w.slice(B,B+P),de=await Promise.all(X.map(H=>{var he,I;return Ft(this.apiClient,{fields:(he=this.config)==null?void 0:he.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...d?{folder:d}:{},offset:H,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:F,recursive:x,...k&&{collection_uuid:k},...T&&{f64:T},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((I=s.config)==null?void 0:I.locale)??"en"}})}));if(n!==this._selectAllId)return;for(const H of de)H.files&&K.push(...H.files)}if(n!==this._selectAllId)return;const V=new Set(m.map(B=>B.uuid)),Z=K.filter(B=>V.has(B.uuid)?!1:(V.add(B.uuid),!0)),ce=[...m,...Z];this.store.setState({assets:ce,offset:Math.max(0,ce.length-g),hasMore:!1,isSelectingAll:!1}),a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(ce)}catch(f){if(n!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:f,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===$.DATE||e===$.LICENSE_EXPIRY||e===C.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:r}=e.detail,o={...this.store.getState().filters};let n=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(l=>l==null||l===""||Array.isArray(l)&&l.length===0);if(!n&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:l,preset:h,from:p,to:f}=i;n=!l&&!h&&!p&&!f}if(n){const l={...o.applied};delete l[s],o.applied=l}else{const l={...o.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?l[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===$.IMAGE&&typeof i=="object"&&!Array.isArray(i)?l[s]=i:l[s]={type:"string",values:Array.isArray(i)?i:[i],operator:r||":"},o.applied=l}if(this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingFilter===s){this._pendingFilter=null;const l=this.renderRoot.querySelector("ap-filters-bar");l&&(l.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,r=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();a=i.left-l.left,o=i.bottom-l.top}}r==null||r.openFilterPanel(s,!0,a,o)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,r=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();a=i.left-l.left,o=i.bottom-l.top}}r==null||r.openMetadataFieldPanel(s,!0,a,o)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var d,g,m;const{key:s,metadataFieldKey:i}=e.detail,r=this.renderRoot.querySelector("ap-filters-bar"),a=this.renderRoot.querySelector("ap-content-toolbar");if(!r||!a)return;i?(this._pendingMetadataField=i,r.pendingMetadataField=i):s&&(this._pendingFilter=s,r.pendingFilter=s),await r.updateComplete;let o=r.renderRoot.querySelector(".chip.pending");if(!o){const _=r.renderRoot.querySelectorAll(".chip.pinned-empty"),x=i?(d=r._getMetadataLabel)==null?void 0:d.call(r,i):void 0;for(const F of _){const k=(m=(g=F.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:m.trim();if(i&&k===x){o=F;break}if(s&&k===(Pt[s]||s)){o=F;break}}}if(!o)return;const n=o.getBoundingClientRect(),l=this.renderRoot.querySelector(".toolbar-filters-wrapper"),h=l==null?void 0:l.getBoundingClientRect(),p=h?n.left-h.left:n.left,f=h?n.bottom-h.top:void 0;i?a.openMetadataFieldPanel(i,!0,p,f):s&&a.openFilterPanel(s,!0,p,f)}_handleFilterRemove(e){var o;const s=e.detail.key;if(s in(((o=this.config)==null?void 0:o.forcedFilters)??{}))return;const r={...this.store.getState().filters},a={...r.applied};delete a[s],r.applied=a,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:r,metadataType:a}=e.detail,n={...this.store.getState().filters},l={...n.metadata},h={...l.applied};if(!r||Array.isArray(r)&&r.length===0?(delete h[s],l.applied=h,l.pinned.includes(s)||(l.visible=l.visible.filter(f=>f!==s))):(h[s]={type:"string",values:Array.isArray(r)?r:[r],operator:i||":",metadataType:a},l.applied=h,l.visible.includes(s)||(l.visible=[...l.visible,s])),n.metadata=l,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const f=this.renderRoot.querySelector("ap-filters-bar");f&&(f.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(n=>n!==s),a.metadata=o,this.store.setState({filters:a})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,r={...this.store.getState().filters},a={...r.metadata},o={...a.applied};delete o[s],a.applied=o,a.pinned.includes(s)||(a.visible=a.visible.filter(n=>n!==s)),r.metadata=a,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,l;const{key:s,pinned:i}=e.detail,a={...this.store.getState().filters};i?a.pinned.includes(s)||(a.pinned=[...a.pinned,s]):a.pinned=a.pinned.filter(h=>h!==s),this.store.setState({filters:a});const o=((l=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:l.projectToken)??null;ac(o,a.pinned)}_handleMetadataPin(e){var l,h;const{fieldKey:s,pinned:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(p=>p!==s),s in o.applied||(o.visible=o.visible.filter(p=>p!==s))),a.metadata=o,this.store.setState({filters:a});const n=((h=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:h.projectToken)??null;oc(n,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFiltersSet(e){var l;const{applied:s,metadata:i}=e.detail,a={...this.store.getState().filters},o=new Set(Object.keys(((l=this.config)==null?void 0:l.forcedFilters)??{})),n={...s};for(const h of o)delete n[h];if(a.applied=n,i){const h={...a.metadata};h.applied=i.applied;const p=Object.keys(i.applied);h.visible=[...new Set([...h.pinned,...p])],a.metadata=h}this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return _c;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return yc;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return $c}return e.searchQuery?bc:e.activeTab==="folders"?xc:hr}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return Kl(s,this._visibleAppliedMetadata).join(" ")}render(){var P,K,V,Z,ce,B,X,de,H,he,I,Q,G,z,Ie,Be,gt,hs,ps,us,fs,gs,vs,ms,bs,it,$e,He,Ee,we,pe,oe,me;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),r=Array.from(e.selectedFolders.keys()),a=((P=this.config)==null?void 0:P.disabledAssetIds)??[],o=((K=this.config)==null?void 0:K.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),h=((V=this.config)==null?void 0:V.folderSelection)!==!1,p=this._localizeMetadataFields(e.metadataFields,s),f=this._getFilterMetadataFields(p),d=c`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((Z=this.config)==null?void 0:Z.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((ce=e.activeCollectionFolder.children)!=null&&ce.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((B=this.config)!=null&&B.enableAISearch)}
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
    `,g=!!((X=this.config)!=null&&X.uploader),m=((de=this.config)==null?void 0:de.folderCreation)===!0,_=((H=this.config)==null?void 0:H.auth.mode)==="sassKey",x=e.activeTab==="folders",F=m&&x&&(_||ol(e.permissions,nl.FOLDER_CREATE)),k=c`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?c`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${s("dropFilesToUpload","Drop files to upload")}
                </div>
              </div>
            `:v}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(he=this.config)!=null&&he.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${g}
              .showCreateFolder=${F}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((I=e.activeCollectionFolder.children)!=null&&I.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((Q=e.activeCollectionFolder.children)!=null&&Q.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .showVariants=${!!((G=this.config)!=null&&G.variants)&&this._variantOptions.length>1}
              .variantOptions=${this._variantOptions}
              .defaultVariantName=${this._defaultVariantName}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${f}
              .pinnedFilters=${this._visiblePinnedFilters}
              .apiClient=${this.apiClient}
              .locale=${((z=this.config)==null?void 0:z.locale)??"en"}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .enabledFilterKeys=${((Ie=this.config)==null?void 0:Ie.enabledFilters)??null}
              .enabledMetadataFields=${((Be=this.config)==null?void 0:Be.enabledMetadataFields)??null}
              .metadataCategoryEnabled=${this._isFilterEnabled($.METADATA)}
              .approverUsers=${((gt=this.config)==null?void 0:gt.approverUsers)??[]}
              .requesterUsers=${((hs=this.config)==null?void 0:hs.requesterUsers)??[]}
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
              @variant-default-change=${this._handleVariantDefaultChange}
            ></ap-content-toolbar>

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((ps=e.activeCollectionFolder.children)!=null&&ps.length))?v:c`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${this._visibleAppliedMetadata}
                    .metadataFields=${f}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${((us=this.config)==null?void 0:us.approverUsers)??[]}
                    .requesterUsers=${((fs=this.config)==null?void 0:fs.requesterUsers)??[]}
                    .pinnedFilters=${this._visiblePinnedFilters}
                    .pinnedMetadataFields=${this._visiblePinnedMetadata}
                    .forcedFilters=${((gs=this.config)==null?void 0:gs.forcedFilters)??{}}
                    .locale=${((vs=this.config)==null?void 0:vs.locale)??"en"}
                    .t=${s}
                    @filter-remove=${this._handleFilterRemove}
                    @filter-open=${this._handleFilterOpen}
                    @metadata-filter-open=${this._handleMetadataFilterOpen}
                    @metadata-filter-remove=${this._handleMetadataFilterRemove}
                    @metadata-pin=${this._handleMetadataPin}
                    @filters-clear-all=${this._handleFiltersClearAll}
                    @filters-set=${this._handleFiltersSet}
                  ></ap-filters-bar>
                `}
            ${e.breadcrumb.length>0?c`<sfx-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?s("tabLabels","Labels"):e.activeTab==="collections"?s("tabCollections","Collections"):s("rootFolder","Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></sfx-breadcrumb>`:v}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((ms=e.activeCollectionFolder.children)!=null&&ms.length)))?c`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${((bs=this.config)==null?void 0:bs.gridSize)??"normal"}
                .multiSelect=${((it=this.config)==null?void 0:it.multiSelect)!==!1}
                .folderCount=${2}
                .t=${s}
              ></ap-skeleton>`:this._renderContent(e,i,r,h,a,o)}

          <ap-marquee-overlay
            .active=${this.marqueeCtrl.isActive}
            .rect=${this.marqueeCtrl.rect}
          ></ap-marquee-overlay>
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
                  .exportOriginalLabel=${($e=this._transformationsConfig)==null?void 0:$e.exportOriginalLabel}
                  .applyExportLabel=${(He=this._transformationsConfig)==null?void 0:He.applyExportLabel}
                  @transform-confirm=${this._handleTransformConfirm}
                  @transform-skip=${this._handleTransformSkip}
                  @transform-cancel=${this._handleTransformCancel}
                ></ap-transformation-dialog>
              `:v}
          ${this._createFolderOpen?c`
                <ap-create-folder-dialog
                  .t=${e.t}
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
              .showMetadata=${((Ee=this.config)==null?void 0:Ee.showMetadata)!==!1}
              .metadataFields=${p}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((we=this.config)==null?void 0:we.multiSelect)??!0}
              .selectedVariantName=${this._variantOverrides[e.previewAsset.uuid]??this._defaultVariantName}
              .t=${s}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:v}
      </div>
    `,T=c`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${l}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((pe=this.config)==null?void 0:pe.multiSelect)??!0}
        .maxSelections=${(oe=this.config)==null?void 0:oe.maxSelections}
        .showTransform=${!!((me=this.config)!=null&&me.transformations)&&n.some(Tt)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,w=this._isUploaderOpen?c`
          <div class="uploader-overlay">
            <div class="uploader-body">${this._uploaderEl}</div>
          </div>
        `:v;return this._isInline?e.isOpen?c`
        <div class="ap-inline">
          ${this._isUploaderOpen?w:c`
                <div class="inline-header">${d}</div>
                <div class="inline-content">${k}</div>
                <div class="inline-footer">${T}</div>
              `}
        </div>
      `:v:c`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${ke=>this._handleCancel(ke.detail.reason)}
      >
        ${this._isUploaderOpen?w:c`
              <div slot="header">${d}</div>
              ${k}
              <div slot="footer">${T}</div>
            `}
      </ap-modal>
    `}_renderContent(e,s,i=[],r=!1,a=[],o=[]){var l,h,p,f,d,g,m,_,x,F,k,T,w,P,K,V,Z,ce,B,X,de;const n=e.t;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?c`
          <div class="empty-state">
            <sfx-icon name="search" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsFound","No assets found")}</div>
            <div class="empty-desc">
              ${n("noAssetsFoundDesc","Try adjusting your search or filters")}
            </div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((l=this.config)==null?void 0:l.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((h=this.config)==null?void 0:h.gridSize)??"normal"}
            .showVariants=${!!((p=this.config)!=null&&p.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
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
          .disabledAssetIds=${a}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((f=this.config)==null?void 0:f.multiSelect)??!0}
          .folderSelectable=${r}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((d=this.config)!=null&&d.variants)}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
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
            <sfx-icon name="folder" .size=${48}></sfx-icon>
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
            .disabledAssetIds=${a}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((g=this.config)==null?void 0:g.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((m=this.config)==null?void 0:m.gridSize)??"normal"}
            .showVariants=${!!((_=this.config)!=null&&_.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
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
          .disabledAssetIds=${a}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((x=this.config)==null?void 0:x.multiSelect)??!0}
          .folderSelectable=${r}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((F=this.config)!=null&&F.variants)}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let H=e.labels;if(e.searchQuery){const I=e.searchQuery.toLowerCase();H=e.labels.filter(Q=>Q.name.toLowerCase().includes(I))}const he=e.sortDirection==="asc"?1:-1;return H=[...H].sort((I,Q)=>he*I.name.localeCompare(Q.name)),H.length===0?c`
            <div class="empty-state">
              <sfx-icon name="tag" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noLabelsMatchSearch","No labels match your search"):n("noLabelsFound","No labels found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("labelsWillAppear","Labels will appear here once created")}
              </div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="labels-grid">
              ${H.map((I,Q)=>c`
                  <ap-label-card
                    .label=${I}
                    .index=${Q}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `)}
            </div>
          `:c`
          <div class="labels-list">
            ${H.map((I,Q)=>c`
                <ap-label-row
                  .label=${I}
                  .index=${Q}
                  @label-open=${this._handleLabelOpen}
                ></ap-label-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?c`
          <div class="empty-state">
            <sfx-icon name="tag" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsInLabel","No assets in this label")}</div>
            <div class="empty-desc">
              ${n("noAssetsInLabelDesc","Assets added to this label will appear here")}
            </div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((k=this.config)==null?void 0:k.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((T=this.config)==null?void 0:T.gridSize)??"normal"}
            .showVariants=${!!((w=this.config)!=null&&w.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
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
          .disabledAssetIds=${a}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((P=this.config)==null?void 0:P.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((K=this.config)!=null&&K.variants)}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let I=e.collections;if(e.searchQuery){const G=e.searchQuery.toLowerCase();I=e.collections.filter(z=>z.title.toLowerCase().includes(G))}const Q=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?I=[...I].sort((G,z)=>Q*(new Date(G.created_at).getTime()-new Date(z.created_at).getTime())):e.sortBy==="updated_at"?I=[...I].sort((G,z)=>Q*(new Date(G.updated_at).getTime()-new Date(z.updated_at).getTime())):I=[...I].sort((G,z)=>Q*G.title.localeCompare(z.title)),I.length===0?c`
            <div class="empty-state">
              <sfx-icon name="layout-grid" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noCollectionsMatchSearch","No collections match your search"):n("noCollectionsFound","No collections found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionsWillAppear","Collections will appear here once created")}
              </div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="collections-grid">
              ${I.map((G,z)=>c`
                  <ap-collection-card
                    .collection=${G}
                    .index=${z}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `)}
            </div>
          `:c`
          <div class="collections-list">
            ${I.map((G,z)=>c`
                <ap-collection-row
                  .collection=${G}
                  .index=${z}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return c`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;const H=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((V=e.activeCollectionFolder.children)==null?void 0:V.length)??0)>0){let I=H;if(e.searchQuery){const G=e.searchQuery.toLowerCase();I=H.filter(z=>z.name.toLowerCase().includes(G))}const Q=e.sortDirection==="asc"?1:-1;return I=[...I].sort((G,z)=>Q*G.name.localeCompare(z.name)),I.length===0?c`
            <div class="empty-state">
              <sfx-icon name="folder" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noFoldersMatchSearch","No folders match your search"):n("noFoldersInCollection","No folders in this collection")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionFoldersWillAppear","Collection folders will appear here")}
              </div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="collection-folders-grid">
              ${I.map((G,z)=>c`
                  <ap-collection-folder-card
                    .folder=${G}
                    .index=${z}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `)}
            </div>
          `:c`
          <div class="collection-folders-list">
            ${I.map((G,z)=>c`
                <ap-collection-folder-row
                  .folder=${G}
                  .index=${z}
                  @collection-folder-open=${this._handleCollectionFolderOpen}
                ></ap-collection-folder-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?c`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">
              ${n("noAssetsInCollectionFolder","No assets in this collection folder")}
            </div>
            <div class="empty-desc">
              ${n("noAssetsInCollectionFolderDesc","Assets matching this collection's criteria will appear here")}
            </div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((Z=this.config)==null?void 0:Z.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((ce=this.config)==null?void 0:ce.gridSize)??"normal"}
            .showVariants=${!!((B=this.config)!=null&&B.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
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
          .disabledAssetIds=${a}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((X=this.config)==null?void 0:X.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((de=this.config)!=null&&de.variants)}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}return v}},xt.styles=[A`
      :host {
        display: contents;
        font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
      }
      :host([inline]) {
        display: block;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        height: var(--sfx-inline-height, 600px);
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
        background: var(--sfx-background, oklch(1 0 0));
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }
      .empty-state sfx-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--sfx-font-size-base, 1rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--sfx-font-size-sm, 0.875rem);
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
        background: var(--sfx-background, oklch(1 0 0));
        font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
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
        background: var(--sfx-primary-10, oklch(0.65 0.19 258 / 0.08));
        border: 2px dashed var(--sfx-primary, oklch(0.65 0.19 258));
        border-radius: var(--sfx-radius, 8px);
        pointer-events: none;
        animation: drop-zone-in 150ms ease-out;
      }
      .drop-zone-overlay .drop-zone-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: var(--sfx-primary, oklch(0.65 0.19 258));
        font-size: 1rem;
        font-weight: 500;
      }
      @keyframes drop-zone-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .drop-zone-overlay {
          animation: none;
        }
      }

      /* Uploader overlay panel — fills the entire modal/inline container */
      .uploader-overlay {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--sfx-background, oklch(1 0 0));
        animation: uploader-slide-in 250ms ease-out;
      }
      @keyframes uploader-slide-in {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .uploader-overlay {
          animation: none;
        }
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
    `],xt.VARIANTS_FETCH_MAX_ATTEMPTS=3,xt);We([b()],Ke.prototype,"_isDragOver");We([b()],Ke.prototype,"_isUploaderOpen");We([b()],Ke.prototype,"_folderResolveOpen");We([b()],Ke.prototype,"_transformOpen");We([b()],Ke.prototype,"_createFolderOpen");We([b()],Ke.prototype,"_isCreatingFolder");We([b()],Ke.prototype,"_createFolderError");We([b()],Ke.prototype,"_variantPresets");We([b()],Ke.prototype,"_defaultVariantName");We([b()],Ke.prototype,"_variantOverrides");We([u({type:Object})],Ke.prototype,"config");let Kh=Ke;typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",Kh);const Bh=[{pattern:"/",load:()=>j(()=>import("./landing-Diq5G2Jo.js"),__vite__mapDeps([0,1])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>j(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([2,3])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>j(()=>import("./configuration-B9JEfr0y.js"),__vite__mapDeps([4,3])).then(t=>t.default)},{pattern:"/docs/api",load:()=>j(()=>import("./api-Dl3UszFN.js"),__vite__mapDeps([5,3])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>j(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([6,3])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>j(()=>import("./filters-Df1TuQYX.js"),__vite__mapDeps([7,3])).then(t=>t.default)},{pattern:"/docs/types",load:()=>j(()=>import("./types-DPNAgA2W.js"),__vite__mapDeps([8,3])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>j(()=>import("./basic-kmjsSdhM.js"),__vite__mapDeps([9,1])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>j(()=>import("./single-select-DYEdsYDP.js"),__vite__mapDeps([10,1])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>j(()=>import("./multi-select-B9lBKUpt.js"),__vite__mapDeps([11,1])).then(t=>t.default)},{pattern:"/examples/disabled-assets",load:()=>j(()=>import("./disabled-assets-CT2t2fjE.js"),__vite__mapDeps([12,1])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>j(()=>import("./theming-CBrooBJT.js"),__vite__mapDeps([13,1])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>j(()=>import("./custom-theming-CFGsraVM.js"),__vite__mapDeps([14,1])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>j(()=>import("./default-filters-CNUYd--4.js"),__vite__mapDeps([15,1])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>j(()=>import("./forced-filters-CIHFZBpA.js"),__vite__mapDeps([16,1])).then(t=>t.default)},{pattern:"/examples/enabled-filters",load:()=>j(()=>import("./enabled-filters-CV2tD1x8.js"),__vite__mapDeps([17,1])).then(t=>t.default)},{pattern:"/examples/enabled-metadata-fields",load:()=>j(()=>import("./enabled-metadata-fields-DStvQJ-k.js"),__vite__mapDeps([18,1])).then(t=>t.default)},{pattern:"/examples/approval-users",load:()=>j(()=>import("./approval-users-DcT9JC4B.js"),__vite__mapDeps([19,1])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>j(()=>import("./hidden-tabs-LJCUDzGt.js"),__vite__mapDeps([20,1])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>j(()=>import("./root-folder-BCVbMV3S.js"),__vite__mapDeps([21,1])).then(t=>t.default)},{pattern:"/examples/events",load:()=>j(()=>import("./events-CKmn0dES.js"),__vite__mapDeps([22,1])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>j(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([23,1])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>j(()=>import("./inline-Dz95aXR3.js"),__vite__mapDeps([24,1])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>j(()=>import("./sticky-filters-zubINgp6.js"),__vite__mapDeps([25,1])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>j(()=>import("./grid-size-CUwbs7zs.js"),__vite__mapDeps([26,1])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>j(()=>import("./preferences-BehAvpV3.js"),__vite__mapDeps([27,1])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>j(()=>import("./uploader-DFoUNkst.js"),__vite__mapDeps([28,1])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>j(()=>import("./folder-selection-sjknyU-p.js"),__vite__mapDeps([29,1])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>j(()=>import("./ai-search-B4VK1gtj.js"),__vite__mapDeps([30,1])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>j(()=>import("./transformations-oGHGHyW2.js"),__vite__mapDeps([31,1])).then(t=>t.default)},{pattern:"/examples/variants",load:()=>j(()=>import("./variants-CXcNLTru.js"),__vite__mapDeps([32,1])).then(t=>t.default)},{pattern:"/examples/language-switcher",load:()=>j(()=>import("./language-switcher-Cw1ti0BJ.js"),__vite__mapDeps([33,1])).then(t=>t.default)}];let Ss=null,_a=0;function Hh(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),r=document.getElementById("sidebar-examples"),a=document.querySelectorAll(".topbar-nav-link");async function o(){const n=location.hash.slice(1)||"/",l=++_a;Ss!=null&&Ss.destroy&&Ss.destroy(),t.close();const h=Bh.find(x=>x.pattern===n);if(!h){location.hash="#/";return}const p=n.startsWith("/docs/"),f=n.startsWith("/examples/"),d=p||f,g=n==="/";s.classList.toggle("hidden",!d),document.body.classList.toggle("has-sidebar",d),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!p),r.classList.toggle("hidden",!f),s.querySelectorAll(".sidebar-link").forEach(x=>{x.classList.toggle("active",x.getAttribute("data-route")===n)});const m=p?"docs":f?"examples":"home";a.forEach(x=>{x.classList.toggle("active",x.getAttribute("data-section")===m)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const _=await h.load();l===_a&&(Ss=_,e.innerHTML=_.render(),_.init&&_.init(t))}window.addEventListener("hashchange",o),o()}const Ar="ap-demo-auth",$i={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function qh(){try{const t=localStorage.getItem(Ar);if(t)return{...$i,...JSON.parse(t)}}catch{}return{...$i}}function Gh(t){localStorage.setItem(Ar,JSON.stringify(t))}function Yh(){const t=window.__apDemoFlags;return t&&typeof t=="object"?t:{}}function sp(t={}){const{projectToken:e,securityTemplateKey:s}=qh();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t,...Yh()}}function Qh(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),r=document.getElementById("auth-save");try{const a=localStorage.getItem(Ar);if(a){const o=JSON.parse(a);s.value=o.projectToken??"",i.value=o.securityTemplateKey??""}}catch{}t.addEventListener("click",a=>{a.stopPropagation(),e.classList.toggle("hidden")}),r.addEventListener("click",()=>{Gh({projectToken:s.value.trim()||$i.projectToken,securityTemplateKey:i.value.trim()||$i.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",a=>{!e.contains(a.target)&&!t.contains(a.target)&&e.classList.add("hidden")})}Qh();console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,"color: #5b6cff; font-weight: 600;","color: inherit;");const Wh=document.getElementById("sidebar-toggle"),go=document.getElementById("sidebar");Wh.addEventListener("click",()=>{go.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{go.classList.remove("mobile-open")});const Xh=document.getElementById("picker");Hh(Xh);export{v as A,ar as D,lt as E,j as _,kn as a,sp as b,wn as c,c as d,Sc as e,Ur as f,E as g,A as h,Cc as i,ep as j,Ec as k,oo as l,D as m,u as n,wt as o,Gs as p,ss as q,b as r,Io as s,kc as t,mt as w};
