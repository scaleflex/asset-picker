const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/landing-qP0rvDEM.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-B6uz8Wgq.js","assets/api-CCDTT8pr.js","assets/theming-hrqYM8pb.js","assets/filters-BlL5oE1x.js","assets/types-BBGPzmmy.js","assets/basic-CP9UTXh_.js","assets/single-select-DPSl2kHs.js","assets/multi-select-BOoYOKVq.js","assets/theming-fS7VBs9t.js","assets/custom-theming-BRdIhNC5.js","assets/default-filters-B2THT-Cj.js","assets/forced-filters-B96I-gaB.js","assets/hidden-tabs-CLnVtsMG.js","assets/root-folder-Bi9IqJgc.js","assets/events-BzYWXCIl.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-B-AXSD1O.js","assets/sticky-filters-DB_0CzMT.js","assets/grid-size-CxwM7XZ9.js","assets/preferences-DEC9wHiX.js","assets/uploader-Bi-VXZb-.js","assets/folder-selection-CFGxlWH1.js","assets/ai-search-Cp_AnZza.js","assets/transformations-B5R949RJ.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const Ca="modulepreload",Aa=function(t){return"/asset-picker/"+t},wi={},I=function(e,s,i){let a=Promise.resolve();if(s&&s.length>0){let r=function(p){return Promise.all(p.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=r(s.map(p=>{if(p=Aa(p),p in wi)return;wi[p]=!0;const h=p.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Ca,h||(d.as="script"),d.crossOrigin="",d.href=p,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((v,m)=>{d.addEventListener("load",v),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return a.then(r=>{for(const l of r||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=globalThis,qs=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hs=Symbol(),ki=new WeakMap;let Wi=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Hs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(qs&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=ki.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ki.set(s,e))}return e}toString(){return this.cssText}};const Ea=t=>new Wi(typeof t=="string"?t:t+"",void 0,Hs),C=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,a,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[o+1],t[0]);return new Wi(s,t,Hs)},Fa=(t,e)=>{if(qs)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),a=is.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=s.cssText,t.appendChild(i)}},Si=qs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Ea(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ta,defineProperty:La,getOwnPropertyDescriptor:Oa,getOwnPropertyNames:Pa,getOwnPropertySymbols:Ma,getPrototypeOf:Ia}=Object,ze=globalThis,Ci=ze.trustedTypes,Da=Ci?Ci.emptyScript:"",Cs=ze.reactiveElementPolyfillSupport,Lt=(t,e)=>t,ns={toAttribute(t,e){switch(e){case Boolean:t=t?Da:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Gs=(t,e)=>!Ta(t,e),Ai={attribute:!0,type:String,converter:ns,reflect:!1,useDefault:!1,hasChanged:Gs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ze.litPropertyMetadata??(ze.litPropertyMetadata=new WeakMap);let ht=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Ai){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,s);a!==void 0&&La(this.prototype,e,a)}}static getPropertyDescriptor(e,s,i){const{get:a,set:o}=Oa(this.prototype,e)??{get(){return this[s]},set(r){this[s]=r}};return{get:a,set(r){const l=a==null?void 0:a.call(this);o==null||o.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ai}static _$Ei(){if(this.hasOwnProperty(Lt("elementProperties")))return;const e=Ia(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Lt("properties"))){const s=this.properties,i=[...Pa(s),...Ma(s)];for(const a of i)this.createProperty(a,s[a])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,a]of s)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const a=this._$Eu(s,i);a!==void 0&&this._$Eh.set(a,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)s.unshift(Si(a))}else e!==void 0&&s.push(Si(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fa(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var o;const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){const r=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:ns).toAttribute(s,i.type);this._$Em=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,s){var o,r;const i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const l=i.getPropertyOptions(a),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:ns;this._$Em=a;const p=c.fromAttribute(s,l.type);this[a]=p??((r=this._$Ej)==null?void 0:r.get(a))??p,this._$Em=null}}requestUpdate(e,s,i,a=!1,o){var r;if(e!==void 0){const l=this.constructor;if(a===!1&&(o=this[e]),i??(i=l.getPropertyOptions(e)),!((i.hasChanged??Gs)(o,s)||i.useDefault&&i.reflect&&o===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:a,wrapped:o},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??s??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,r]of a){const{wrapped:l}=r,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,r,c)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(a=>{var o;return(o=a.hostUpdate)==null?void 0:o.call(a)}),this.update(s)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[Lt("elementProperties")]=new Map,ht[Lt("finalized")]=new Map,Cs==null||Cs({ReactiveElement:ht}),(ze.reactiveElementVersions??(ze.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis,Ei=t=>t,ls=Ot.trustedTypes,Fi=ls?ls.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xi="$lit$",Ie=`lit$${Math.random().toFixed(9).slice(2)}$`,Zi="?"+Ie,za=`<${Zi}>`,Je=document,Pt=()=>Je.createComment(""),Mt=t=>t===null||typeof t!="object"&&typeof t!="function",Ks=Array.isArray,Ra=t=>Ks(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",As=`[ 	
\f\r]`,Et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ti=/-->/g,Li=/>/g,qe=RegExp(`>|${As}(?:([^\\s"'>=/]+)(${As}*=${As}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oi=/'/g,Pi=/"/g,Ji=/^(?:script|style|textarea|title)$/i,ea=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),n=ea(1),De=ea(2),vt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Mi=new WeakMap,Qe=Je.createTreeWalker(Je,129);function ta(t,e){if(!Ks(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fi!==void 0?Fi.createHTML(e):e}const ja=(t,e)=>{const s=t.length-1,i=[];let a,o=e===2?"<svg>":e===3?"<math>":"",r=Et;for(let l=0;l<s;l++){const c=t[l];let p,h,f=-1,d=0;for(;d<c.length&&(r.lastIndex=d,h=r.exec(c),h!==null);)d=r.lastIndex,r===Et?h[1]==="!--"?r=Ti:h[1]!==void 0?r=Li:h[2]!==void 0?(Ji.test(h[2])&&(a=RegExp("</"+h[2],"g")),r=qe):h[3]!==void 0&&(r=qe):r===qe?h[0]===">"?(r=a??Et,f=-1):h[1]===void 0?f=-2:(f=r.lastIndex-h[2].length,p=h[1],r=h[3]===void 0?qe:h[3]==='"'?Pi:Oi):r===Pi||r===Oi?r=qe:r===Ti||r===Li?r=Et:(r=qe,a=void 0);const v=r===qe&&t[l+1].startsWith("/>")?" ":"";o+=r===Et?c+za:f>=0?(i.push(p),c.slice(0,f)+Xi+c.slice(f)+Ie+v):c+Ie+(f===-2?l:v)}return[ta(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class It{constructor({strings:e,_$litType$:s},i){let a;this.parts=[];let o=0,r=0;const l=e.length-1,c=this.parts,[p,h]=ja(e,s);if(this.el=It.createElement(p,i),Qe.currentNode=this.el.content,s===2||s===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(a=Qe.nextNode())!==null&&c.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const f of a.getAttributeNames())if(f.endsWith(Xi)){const d=h[r++],v=a.getAttribute(f).split(Ie),m=/([.?@])?(.*)/.exec(d);c.push({type:1,index:o,name:m[2],strings:v,ctor:m[1]==="."?Ua:m[1]==="?"?Ba:m[1]==="@"?Va:ms}),a.removeAttribute(f)}else f.startsWith(Ie)&&(c.push({type:6,index:o}),a.removeAttribute(f));if(Ji.test(a.tagName)){const f=a.textContent.split(Ie),d=f.length-1;if(d>0){a.textContent=ls?ls.emptyScript:"";for(let v=0;v<d;v++)a.append(f[v],Pt()),Qe.nextNode(),c.push({type:2,index:++o});a.append(f[d],Pt())}}}else if(a.nodeType===8)if(a.data===Zi)c.push({type:2,index:o});else{let f=-1;for(;(f=a.data.indexOf(Ie,f+1))!==-1;)c.push({type:7,index:o}),f+=Ie.length-1}o++}}static createElement(e,s){const i=Je.createElement("template");return i.innerHTML=e,i}}function mt(t,e,s=t,i){var r,l;if(e===vt)return e;let a=i!==void 0?(r=s._$Co)==null?void 0:r[i]:s._$Cl;const o=Mt(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),o===void 0?a=void 0:(a=new o(t),a._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=a:s._$Cl=a),a!==void 0&&(e=mt(t,a._$AS(t,e.values),a,i)),e}class Na{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,a=((e==null?void 0:e.creationScope)??Je).importNode(s,!0);Qe.currentNode=a;let o=Qe.nextNode(),r=0,l=0,c=i[0];for(;c!==void 0;){if(r===c.index){let p;c.type===2?p=new Kt(o,o.nextSibling,this,e):c.type===1?p=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(p=new qa(o,this,e)),this._$AV.push(p),c=i[++l]}r!==(c==null?void 0:c.index)&&(o=Qe.nextNode(),r++)}return Qe.currentNode=Je,a}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class Kt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,a){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=mt(this,e,s),Mt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==vt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ra(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Je.createTextNode(e)),this._$AH=e}$(e){var o;const{values:s,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=It.createElement(ta(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===a)this._$AH.p(s);else{const r=new Na(a,this),l=r.u(this.options);r.p(s),this.T(l),this._$AH=r}}_$AC(e){let s=Mi.get(e.strings);return s===void 0&&Mi.set(e.strings,s=new It(e)),s}k(e){Ks(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,a=0;for(const o of e)a===s.length?s.push(i=new Kt(this.O(Pt()),this.O(Pt()),this,this.options)):i=s[a],i._$AI(o),a++;a<s.length&&(this._$AR(i&&i._$AB.nextSibling,a),s.length=a)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const a=Ei(e).nextSibling;Ei(e).remove(),e=a}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class ms{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,a,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=s,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,s=this,i,a){const o=this.strings;let r=!1;if(o===void 0)e=mt(this,e,s,0),r=!Mt(e)||e!==this._$AH&&e!==vt,r&&(this._$AH=e);else{const l=e;let c,p;for(e=o[0],c=0;c<o.length-1;c++)p=mt(this,l[i+c],s,c),p===vt&&(p=this._$AH[c]),r||(r=!Mt(p)||p!==this._$AH[c]),p===g?e=g:e!==g&&(e+=(p??"")+o[c+1]),this._$AH[c]=p}r&&!a&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ua extends ms{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ba extends ms{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Va extends ms{constructor(e,s,i,a,o){super(e,s,i,a,o),this.type=5}_$AI(e,s=this){if((e=mt(this,e,s,0)??g)===vt)return;const i=this._$AH,a=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==g&&(i===g||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class qa{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){mt(this,e)}}const Es=Ot.litHtmlPolyfillSupport;Es==null||Es(It,Kt),(Ot.litHtmlVersions??(Ot.litHtmlVersions=[])).push("3.3.2");const Ha=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let a=i._$litPart$;if(a===void 0){const o=(s==null?void 0:s.renderBefore)??null;i._$litPart$=a=new Kt(e.insertBefore(Pt(),o),o,void 0,s??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=globalThis;class w extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ha(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return vt}}var Yi;w._$litElement$=!0,w.finalized=!0,(Yi=Xe.litElementHydrateSupport)==null||Yi.call(Xe,{LitElement:w});const Fs=Xe.litElementPolyfillSupport;Fs==null||Fs({LitElement:w});(Xe.litElementVersions??(Xe.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ga={attribute:!0,type:String,converter:ns,reflect:!1,hasChanged:Gs},Ka=(t=Ga,e,s)=>{const{kind:i,metadata:a}=s;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){const{name:r}=s;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,c,t,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,t,l),l}}}if(i==="setter"){const{name:r}=s;return function(l){const c=this[r];e.call(this,l),this.requestUpdate(r,c,t,!0,l)}}throw Error("Unsupported decorator location: "+i)};function u(t){return(e,s)=>typeof s=="object"?Ka(t,e,s):((i,a,o)=>{const r=a.hasOwnProperty(o);return a.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(a,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(t){return u({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qa=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t,e){return(s,i,a)=>{const o=r=>{var l;return((l=r.renderRoot)==null?void 0:l.querySelector(t))??null};return Qa(s,i,{get(){return o(this)}})}}class Ya{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function Wa(){return new Ya({config:null,projectToken:"",sassKey:"",brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1})}class Xa{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Za(t){return"extension"in t&&!("path"in t)}class Ja{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,a){const o=this._getCombinedList();for(let r=e;r<=s;r++){const l=o[r];l&&(Za(l)?i.set(l.uuid,l):a.set(l.uuid,l))}}handleSelect(e,s,i){var l,c,p,h;const a=this.store.getState(),o=new Map(a.selectedAssets);if(!(((l=a.config)==null?void 0:l.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const f=Math.min(this.lastClickedIndex,s),d=Math.max(this.lastClickedIndex,s),v=new Map(a.selectedFolders);this._applyRangeSelection(f,d,o,v);const m=(c=a.config)==null?void 0:c.maxSelections;if(m&&o.size+v.size>m)return;this.store.setState({selectedAssets:o,selectedFolders:v})}else{const f=Math.min(this.lastClickedIndex,s),d=Math.max(this.lastClickedIndex,s),v=a.assets;for(let x=f;x<=d;x++)v[x]&&o.set(v[x].uuid,v[x]);const m=(p=a.config)==null?void 0:p.maxSelections;if(m&&o.size>m)return;this.store.setState({selectedAssets:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const f=(h=a.config)==null?void 0:h.maxSelections,d=o.size+(this._folderSelectionEnabled?a.selectedFolders.size:0);if(f&&d>f)return;this.store.setState({selectedAssets:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var l,c,p;if(!this._folderSelectionEnabled)return;const a=this.store.getState(),o=new Map(a.selectedFolders);if(!(((l=a.config)==null?void 0:l.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const h=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),d=new Map(a.selectedAssets);this._applyRangeSelection(h,f,d,o);const v=(c=a.config)==null?void 0:c.maxSelections;if(v&&d.size+o.size>v)return;this.store.setState({selectedAssets:d,selectedFolders:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const h=(p=a.config)==null?void 0:p.maxSelections,f=o.size+a.selectedAssets.size;if(h&&f>h)return;this.store.setState({selectedFolders:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,a=this._folderSelectionEnabled?s.selectedFolders.size:0,o=new Map,r=i?Math.max(0,Math.min(e.length,i-a)):e.length;for(let c=0;c<r;c++)o.set(e[c].uuid,e[c]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var r;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(r=s.config)==null?void 0:r.maxSelections,a=new Map,o=i?Math.max(0,Math.min(e.length,i-s.selectedAssets.size)):e.length;for(let l=0;l<o;l++)a.set(e[l].uuid,e[l]);this.store.setState({selectedFolders:a})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}class eo{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(i=>{var a;(a=i[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const Ii=5,pt=40,Di=15;class to{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this.preMarqueeFolderSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const a=i.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||i.classList.contains("check")||i.classList.contains("check-box"))})}onMouseDown(e){var a;if(e.button!==0||this.isInteractiveTarget(e)||!(((a=this.store.getState().config)==null?void 0:a.multiSelect)??!0))return;const i=this.container.getBoundingClientRect();this.startX=e.clientX-i.left+this.container.scrollLeft,this.startY=e.clientY-i.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this._dragging){const i=Math.abs(e.clientX-this.startClientX),a=Math.abs(e.clientY-this.startClientY);if(i<Ii&&a<Ii)return;this._dragging=!0,this.isActive=!0,document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.preMarqueeSelection=new Map(this.store.getState().selectedAssets),this.preMarqueeFolderSelection=new Map(this.store.getState().selectedFolders)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;let o=Math.min(this.startX,i),r=Math.min(this.startY,a),l=Math.abs(i-this.startX),c=Math.abs(a-this.startY);const p=this.container.scrollWidth,h=this.container.scrollHeight;o+l>p&&(l=p-o),r+c>h&&(c=h-r),o<0&&(l+=o,o=0),r<0&&(c+=r,r=0),this.rect={x:o,y:r,width:l,height:c},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;if(this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top,a=s.bottom-e.clientY,o=i<pt||a<pt;o&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):o||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,i=s.clientY-e.top,a=e.bottom-s.clientY;let o=0;i<pt?o=-Di*(1-i/pt):a<pt&&(o=Di*(1-a/pt)),o!==0&&(this.container.scrollTop+=o,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}querySelectableElements(){const e=[],s=[];for(const i of Array.from(this.container.children))if(i.shadowRoot){const a=i.shadowRoot.querySelectorAll("[data-asset-uuid]");a.length>0&&e.push(...Array.from(a));const o=i.shadowRoot.querySelectorAll("[data-folder-uuid]");o.length>0&&s.push(...Array.from(o))}return e.length===0&&e.push(...Array.from(this.container.querySelectorAll("[data-asset-uuid]"))),s.length===0&&s.push(...Array.from(this.container.querySelectorAll("[data-folder-uuid]"))),{assetCards:e,folderCards:s}}getCardRelativeRect(e){const s=e.getBoundingClientRect(),i=this.container.getBoundingClientRect();return{x:s.left-i.left+this.container.scrollLeft,y:s.top-i.top+this.container.scrollTop,width:s.width,height:s.height}}intersectsMarquee(e){return this.rect.x<e.x+e.width&&this.rect.x+this.rect.width>e.x&&this.rect.y<e.y+e.height&&this.rect.y+this.rect.height>e.y}selectIntersecting(){var p,h;if(!this.container)return;const e=this.store.getState(),s=((p=e.config)==null?void 0:p.folderSelection)===!0,{assetCards:i,folderCards:a}=this.querySelectableElements(),o=new Map(this.preMarqueeSelection),r=s?new Map(this.preMarqueeFolderSelection):e.selectedFolders;i.forEach(f=>{const d=this.getCardRelativeRect(f),v=f.dataset.assetUuid;if(this.intersectsMarquee(d)){const m=e.assets.find(x=>x.uuid===v);m&&o.set(v,m)}}),s&&a.forEach(f=>{const d=this.getCardRelativeRect(f),v=f.dataset.folderUuid;if(this.intersectsMarquee(d)){const m=e.folders.find(x=>x.uuid===v);m&&r.set(v,m)}});const l=(h=e.config)==null?void 0:h.maxSelections,c=o.size+(s?r.size:0);if(l&&c>l){const f=Array.from(o.entries()).slice(0,Math.max(0,l-r.size));this.store.setState({selectedAssets:new Map(f),...s?{selectedFolders:r}:{}})}else this.store.setState({selectedAssets:o,...s?{selectedFolders:r}:{}})}}class so{constructor(e,s){this.auth=e;const i=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${i}/v5`,e.mode==="sassKey"&&(this.sassKey=e.sassKey)}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}_applyAuthHeaders(e){this.sassKey?e["X-Filerobot-Key"]=this.sassKey:this.auth.mode==="securityTemplate"&&(e["X-Filerobot-Key"]=this.auth.securityTemplateKey)}async request(e,s){const i=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([l,c])=>{c!=null&&(Array.isArray(c)?i.searchParams.set(l,c.join(",")):i.searchParams.set(l,String(c)))});const a={};this._applyAuthHeaders(a);const o=new AbortController,r=setTimeout(()=>o.abort(),3e4);try{const l=await fetch(i.toString(),{headers:a,signal:o.signal});if(clearTimeout(r),!l.ok){let p=`API error: ${l.status} ${l.statusText}`;try{const h=await l.json();h.msg&&(p=`API error: ${l.status} - ${h.msg}`)}catch{}throw new Error(p)}const c=await l.json();if(c.status==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(l){throw clearTimeout(r),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}async post(e,s){const i=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};this._applyAuthHeaders(a);const o=new AbortController,r=setTimeout(()=>o.abort(),3e4);try{const l=await fetch(i.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:o.signal});if(clearTimeout(r),!l.ok){let p=`API error: ${l.status} ${l.statusText}`;try{const h=await l.json();h.msg&&(p=`API error: ${l.status} - ${h.msg}`)}catch{}throw new Error(p)}const c=await l.json();if(c.status==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(l){throw clearTimeout(r),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}}function io(t){const e={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1},s=t.sort_by??"created_at",i=t.sort_direction??"desc",a={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};e.sort=`${a[s]||s}:${i}`,t.folder&&(e.folder=t.folder);const o=[];return t.search&&!t.with_ai&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(e.q=o.join(" ")),t.with_ai&&(e.with_ai=!0,t.ai_query&&(e.ai_query=t.ai_query),t.ai_lang&&(e.ai_lang=t.ai_lang)),t.collection_uuid&&(e.collection_uuid=t.collection_uuid),t.f64&&(e.f64=t.f64),e}async function He(t,e){const s=io(e);return t.request("/files",s)}async function es(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.request("/files/stats",s)}async function ao(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const i=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",o={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${o[i]||i}:${a}`,await t.request("/folders",s)}async function oo(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function ro(t){return await t.request("/labels")}async function no(t){return t.request("/collections")}async function lo(t,e){return t.request(`/collections/${e}/folders`)}function sa(t){return t.filter(e=>!!e.name).map(e=>({...e,children:sa(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function co(t){return((await t.request("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,a)=>i.label.localeCompare(a.label))}async function po(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");return(await t.request(`/key/${e}`)).key}function ho(t){var a,o;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(o=e[0])==null?void 0:o.playlists;return s!=null&&s.length&&s[0]||null}function ut(t){return(t.type??"").startsWith("image")}function zi(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Ri(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const uo={excellent:90,good:75,fair:60},fo=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],go=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],vo=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],mo={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},bo=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),_o=new Set([...bo,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function gt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function ia(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return _o.has(e)}const b="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Ns={_default:b+"GENERIC.svg?vh=9a518a",png:b+"PNG.svg?vh=96cd9a",jpg:b+"JPG.svg?vh=06e819",jpg2:b+"JPG2.svg?vh=f0eb7f",jpeg:b+"JPEG.svg?vh=6a65e9",gif:b+"GIF.svg?vh=c3c2c3",bmp:b+"BMP.svg?vh=d2243a",webp:b+"WEBP.svg?vh=fedd74",svg:b+"SVG.svg?vh=a15e46",tiff:b+"TIFF.svg?vh=1f30c3",tif:b+"TIF.svg?vh=b383c9",heic:b+"HEIC.svg?vh=84adfe",avif:b+"AVIF.svg?vh=536b30",ico:b+"ICO.svg?vh=79063d",psd:b+"PSD.svg?vh=be6140",psb:b+"PSB.svg?vh=678646",ai:b+"AI.svg?vh=84b254",dwg:b+"DWG.svg?vh=971fb3",mp4:b+"MP4.svg?vh=42f175",webm:b+"WEBM.svg?vh=26a84a",avi:b+"AVI.svg?vh=d22ba8",mpeg:b+"MPEG.svg?vh=ba93bb",ogv:b+"OGV.svg?vh=74d453","3gp":b+"3GP.svg?vh=f0d388","3g2":b+"3G2.svg?vh=04c652",swf:b+"SWF.svg?vh=3955e2",fla:b+"FLA.svg?vh=daf585",m3u8:b+"M3U8.svg?vh=7d5e62",mp3:b+"MP3.svg?vh=66bbef",wav:b+"WAV.svg?vh=d7a7d5",aac:b+"AAC.svg?vh=07f3f9",oga:b+"OGA.svg?vh=a5c622",opus:b+"OPUS.svg?vh=9548b1",weba:b+"WEBA.svg?vh=4dcf70",mid:b+"MID.svg?vh=3f0e29",midi:b+"MIDI.svg?vh=9fedec",cda:b+"CDA.svg?vh=85b83b",pdf:b+"PDF.svg?vh=18c5f7",doc:b+"DOC.svg?vh=d1b47c",docx:b+"DOCX.svg?vh=1eb6b0",txt:b+"TXT.svg?vh=307979",rtf:b+"RTF.svg?vh=978c5f",xls:b+"XLS.svg?vh=13b5f7",xlsx:b+"XLSX.svg?vh=79d64a",ppt:b+"PPT.svg?vh=4ee29b",pptx:b+"PPTX.svg?vh=8b1568",csv:b+"CSV.svg?vh=4add78",odt:b+"ODT.svg?vh=940781",ods:b+"ODS.svg?vh=9fbe9a",odp:b+"ODP.svg?vh=bf892d",dbf:b+"DBF.svg?vh=457bd4",vsd:b+"VSD.svg?vh=8a9ccb",abw:b+"ABW.svg?vh=313dc7",epub:b+"EPUB.svg?vh=15263d",azw:b+"AZW.svg?vh=a018b1",ics:b+"ICS.svg?vh=909f63",ogx:b+"OGX.svg?vh=f694d2",zip:b+"ZIP.svg?vh=84f98b",rar:b+"RAR.svg?vh=1d6423","7z":b+"7Z.svg?vh=e007e5",tar:b+"TAR.svg?vh=603aed",gz:b+"GZ.svg?vh=de13f7",bz:b+"BZ.svg?vh=0374ff",bz2:b+"BZ2.svg?vh=e14294",arc:b+"ARC.svg?vh=942fad",jar:b+"JAR.svg?vh=149796",mpkg:b+"MPKG.svg?vh=dea655",ttf:b+"TTF.svg?vh=d2e2c1",otf:b+"OTF.svg?vh=c904fd",woff:b+"WOFF.svg?vh=4b8177",woff2:b+"WOFF2.svg?vh=b532d3",eot:b+"EOT.svg?vh=a54980",js:b+"JS.svg?vh=524691",mjs:b+"MJS.svg?vh=d57921",ts:b+"TS.svg?vh=9af3ae",css:b+"CSS.svg?vh=287863",html:b+"HTML.svg?vh=fa7a87",htm:b+"HTM.svg?vh=21323d",xhtml:b+"XHTML.svg?vh=e6d6a9",xul:b+"XUL.svg?vh=6c9c71",json:b+"JSON.svg?vh=104c9e",jsonld:b+"JSONLD.svg?vh=f30c0f",xml:b+"XML.svg?vh=7f7194",php:b+"PHP.svg?vh=503e36",sh:b+"SH.svg?vh=3b820e",csh:b+"CSH.svg?vh=08c0cc",exe:b+"EXE.svg?vh=ccca53",iso:b+"ISO.svg?vh=064b8f",bin:b+"BIN.svg?vh=1e9618"};function Qt(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Ns[e]||Ns._default}function bt(){return Ns._default}function bs(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const yo=new Set(["png","svg","webp","gif","avif"]);function Qs(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return yo.has(e)}const xo=new Set(["svg","svg+xml","png","pdf"]);function aa(t){return xo.has(bs(t).toLowerCase())}function cs(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return _t(s)}function oa(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?_t(s):""}function Ys(t){var s,i;let e=_t(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Ze(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):""}function Ze(t,e){try{const s=new URL(t);for(const[i,a]of Object.entries(e))s.searchParams.set(i,a);return s.toString()}catch{return t}}const ji=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function _t(t,e){if(!t)return"";const s=a=>a.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(ji);if(i){const a=i[2],o=t.replace(ji,`$1assets.filerobot.com/${a}/`);return s(o)}if(e)try{const a=new URL(t);return s(`https://assets.filerobot.com/${e}${a.pathname}${a.search}`)}catch{}return t}function ra(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=_t(s);const a=gt(t.file_type),o=String(window.devicePixelRatio||1);return a==="video"?Ze(i,{w:e,dpr:o,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||bs(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Ze(i,{w:e,dpr:o,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):Ze(i,{w:e,dpr:o})}function $o(t,e){const s={};return t.format&&(s.force_format=mo[t.format]),t.quality&&t.format!=="png"&&(s.q=String(uo[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}const y={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},Z={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},T={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS:"~",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},wo={AND:"AND"},S={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},_s={[S.DATE]:"date_",[S.BOOLEAN]:"bool_",[S.NUMERIC]:"num_",[S.DECIMAL2]:"dec_",[S.ATTACHMENTS_ASSETS]:"attach_",[S.ATTACHMENT_URI]:"uri_",[S.SELECT_ONE]:"one_",[S.MULTI_SELECT]:"multi_",[S.SUPERTAGS]:"tags_",[S.TEXT]:"text_",[S.TEXT_AREA]:"area_",[S.GEO_POINT]:"geo_",[S.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(_s).map(([t,e])=>[e,t]));const na=Object.values(_s),Ft={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Ni={EMPTY:"empty",NOT_EMPTY:"non-empty"},he="empty",ue="non-empty",Ge="specific",Ts=10,Ls=10,ts=10,la="filters:pinned:",ca="metadata:pinned:",Ui=[y.DATE,y.TYPE,y.SIZE],da=T.IS,as="20",os="1",ko=0,So=[{key:y.DATE,label:"Date",icon:"calendar",type:"date"},{key:y.TYPE,label:"Format",icon:"file-type",type:"string"},{key:y.SIZE,label:"Size",icon:"scaling",type:"string"},{key:y.LICENSE_EXPIRY,label:"License expiry",icon:"history",type:"date"},{key:y.TAGS,label:"Tags",icon:"hash",type:"string"},{key:y.LABELS,label:"Labels",icon:"tag",type:"string"},{key:y.PRODUCT_REF,label:"Products",icon:"box",type:"string"},{key:y.IMAGE,label:"Image",icon:"image",type:"string"},{key:y.COLOR,label:"Color",icon:"swatch-book",type:"string"}],Co={key:y.METADATA,label:"Metadata",icon:"file-text",type:"string"},Ao={key:y.APPROVAL,label:"Approval",icon:"badge-check",type:"string"},Us=[Co,...So,Ao],ft={[y.TYPE]:"Format",[y.DATE]:"Date",[y.SIZE]:"Size",[y.LICENSE_EXPIRY]:"License expiry",[y.TAGS]:"Tags",[y.LABELS]:"Labels",[y.PRODUCT_REF]:"Products",[y.IMAGE]:"Image",[y.COLOR]:"Color",[y.METADATA]:"Metadata",[y.APPROVAL]:"Approval"},J={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},ds=[{value:J.IMAGE,label:"Image",icon:"image"},{value:J.VIDEO,label:"Video",icon:"clapperboard"},{value:J.AUDIO,label:"Audio",icon:"music"},{value:J.DOCUMENT,label:"Document",icon:"document"},{value:J.ARCHIVE,label:"Archive",icon:"archive"},{value:J.DESIGN_TEMPLATE,label:"Design template",icon:"layout-template"},{value:J.FONTS,label:"Fonts",icon:"text"},{value:J.OTHER,label:"Other",icon:"layout-grid"}],Eo={[J.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[J.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[J.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[J.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[J.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[J.FONTS]:["ttf","otf","woff","woff2","eot"]},Os={RESOLUTION:0,ORIENTATION:1,FACES:2},Fo=[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],To=[{value:"portrait",label:"Portrait"},{value:"landscape",label:"Landscape"},{value:"square",label:"Square"},{value:"panorama",label:"Panorama"}],Lo=[{value:"none",label:"None"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],pa=[{value:"created",label:"Created at"},{value:"updated",label:"Updated at"}],Ws=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"last_week",label:"Last week"},{value:"after",label:"After date"},{value:"last_month",label:"Last month"},{value:"between",label:"Between dates"},{value:"last_year",label:"Last year"}],ha=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],Oo=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],Po=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Mo=[{label:"None (Exact)",value:"0"},{label:"Small",value:"1"},{label:"Medium",value:"2"},{label:"Large",value:"4"}],Ps=[{label:"Is",value:T.IS},{label:"Contains",value:T.CONTAINS_IN_TEXT}],Ce=[{label:"Is",value:T.IS},{label:"Is not",value:T.IS_NOT}],Ms=[{label:"Is",value:T.IS_EXACT},{label:"Contains",value:T.IS},{label:"Does not contain",value:T.IS_NOT}],Is=[{label:"Is",value:T.IS},{label:"Greater than",value:T.GREATER_THAN_OR_EQUAL},{label:"Is not",value:T.IS_NOT},{label:"Less than",value:T.LESS_THAN_OR_EQUAL},{label:"Between",value:T.RANGE}],Io=[{label:"Is",value:T.IS_EXACT},{label:"Is not",value:T.IS_NOT}],Bi=[{label:"Contains",value:T.CONTAINS},{label:"Does not contain",value:T.IS_NOT}],Do=[{value:"APPROVED",label:"Approved",icon:"circle-check-big",iconColor:"var(--ap-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",icon:"clock",iconColor:"var(--ap-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",icon:"x-circle",iconColor:"var(--ap-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",icon:"ban",iconColor:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"}],Ye=[{label:"Empty",value:he},{label:"Not empty",value:ue}],Ds=[...Ye,{label:"Specific",value:Ge}],zo=[{label:"Empty",value:he},{label:"Not empty",value:ue},{label:"True",value:"true"},{label:"False",value:"false"}],rs={[S.DATE]:"calendar",[S.BOOLEAN]:"toggle-left",[S.NUMERIC]:"file-digit",[S.DECIMAL2]:"decimals-arrow-right",[S.ATTACHMENTS_ASSETS]:"paperclip",[S.ATTACHMENT_URI]:"link-2",[S.SELECT_ONE]:"circle-dot",[S.MULTI_SELECT]:"square-check",[S.SUPERTAGS]:"hash",[S.TEXT]:"text-initial",[S.TEXT_AREA]:"text-align-justify",[S.GEO_POINT]:"locate",[S.INTEGER_LIST]:"list-ordered"},Ro={[S.TEXT]:"text",[S.TEXT_AREA]:"text",[S.NUMERIC]:"number",[S.DECIMAL2]:"number",[S.BOOLEAN]:"boolean",[S.SELECT_ONE]:"select-one",[S.MULTI_SELECT]:"multi-select",[S.SUPERTAGS]:"tags",[S.DATE]:"date",[S.GEO_POINT]:"geo",[S.ATTACHMENTS_ASSETS]:"attachment",[S.ATTACHMENT_URI]:"attachment",[S.INTEGER_LIST]:"attachment"};async function jo(t){var i;return(((i=(await t.request("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(a=>({name:a.name,value:a.value,count:a.count,category:a.category??a.value.split("_")[0],label:No(a.name)}))}function No(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function Uo(t){var m,x;const e=await t.request("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,o=((i==null?void 0:i.model)??[])[ko],r=i==null?void 0:i.store,c=((r==null?void 0:r.regional_variants_groups)??[]).map($=>({uuid:$.uuid,label:$.label??$.name??"",variants:($.variants??[]).map(L=>({api_value:L.api_value??L.value??"",internal_unique_value:L.internal_unique_value??L.api_value??"",label:L.label??L.name??""}))})).filter($=>$.variants.length>1),p={};for(const $ of c)p[$.uuid]=((m=$.variants[0])==null?void 0:m.api_value)??"";const h=(s==null?void 0:s.project_branding)??((x=e.settings)==null?void 0:x.project_branding),f=h==null?void 0:h.brandColor;if(!o)return{fields:[],regionalVariantGroups:c,regionalFilters:p,brandColor:f};const d=o.groups??[],v=[];for(const $ of d){const L=$.name||"Root fields";for(const k of $.fields??[]){const j=k.possible_values,A=j==null?void 0:j.map(F=>({api_value:F.api_value??F.value??"",internal_unique_value:F.internal_unique_value??F.api_value??"",label:F.label??F.name??F.api_value??""}));v.push({key:k.key??k.ckey,label:k.title??k.label??k.key??"",type:k.type??"text",slug:k.slug,ckey:k.ckey,possible_values:A,group:L,regionalVariantsGroupUuid:k.regional_variants_group_uuid})}}return{fields:v,regionalVariantGroups:c,regionalFilters:p,brandColor:f}}function Ke(t){return t.toLocaleDateString("en-CA")}function ss(){return Ke(new Date)}function ua(t){const e=new Date;switch(t){case"today":return{from:ss(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:Ke(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:ss(),to:Ke(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:Ke(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:ss(),to:Ke(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:Ke(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:ss(),to:Ke(s)}}default:return null}}function Vi(t,e){return e?e.type==="date"?Bo(e):e.type==="string"?Vo(e):!0:!1}function Bo(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function Vo(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function qo(t,e={}){const s=[];for(const[i,a]of Object.entries(t)){if(!a||!Vi(i,a))continue;const o=Go(i,a);s.push(...o)}for(const[i,a]of Object.entries(e)){if(!a||!Vi(i,a))continue;const o=Jo(i,a);s.push(...o)}return Ho(s)}function Ho(t){const e=[],s=[],i=[];for(const a of t)a.startsWith("type:")||a.startsWith("type=")?e.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?s.push(a):i.push(a);if(e.length>0&&s.length>0){const a=[...e,...s].join(" , ");i.push(a)}else i.push(...e,...s);return i}function Go(t,e){if(e.type==="date")return fa(t,e);if(t===y.IMAGE)return Zo(e);const s=e,{operator:i=da,values:a=[],logic:o}=s;if(a.length===0)return[];switch(t){case y.SIZE:return Ko(t,a,"..");case y.FACES:return Qo(t,i,a);case y.TAGS:return We(t,i,qi(a),",",o);case y.LABELS:return We(t,i,qi(a),",",o);case y.COLOR:return Yo(i,a,o);case y.TYPE:return Wo(a,i);case y.MIME_TYPE:return Xo(t,a,i);case y.PRODUCT_REF:return We(t,"=%",a,",",o);default:return We(t,i,a,",",o)}}function fa(t,e){const s=e.field||"created";if(e.kind===Ft.PRESET&&e.preset){if(e.preset===Ni.EMPTY)return[`${s}:"empty"`];if(e.preset===Ni.NOT_EMPTY)return[`${s}:"non-empty"`];const i=ua(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===Ft.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===Ft.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===Ft.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===Ft.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function Ko(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Qo(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function We(t,e,s,i,a){if(s.length===0)return[];if(a===wo.AND)return s.map(r=>`${t}${e}"${r}"`);const o=s.map(r=>`"${r}"`).join(i);return[`${t}${e}${o}`]}function Yo(t,e,s){const i=[],a=We("color_search",t,e,",",s);return i.push(...a),i.push('color_operator:"AND"'),i}function Wo(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const o of t){const r=Eo[o];if(r)for(const l of r){const c=`${o}_${l}`;s.has(c)||(s.add(c),i.push(c))}else s.has(o)||(s.add(o),i.push(o))}const a=i.map(o=>`"${o}"`).join(",");return[`type${e}${a}`]}function Xo(t,e,s,i){if(e.length===0)return[];const a=e.map(o=>`"${o}"`).join(",");return[`${t}${s}${a}`]}function Zo(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const r=t,l=r.resolution,c=r.orientation,p=r.faces;return l!=null&&l.length&&e.push(`resolution:"${l.join(",")}"`),c!=null&&c.length&&e.push(`orientation:"${c.join(",")}"`),p!=null&&p.length&&e.push(`faces:"${p.join(",")}"`),e}const s=t,i=s[Os.RESOLUTION],a=s[Os.ORIENTATION],o=s[Os.FACES];return i&&e.push(`resolution:"${i}"`),a&&e.push(`orientation:"${a}"`),o&&e.push(`faces:"${o}"`),e}function Jo(t,e){const s=sr(t),i=tr(t);if(e.type==="date")return er(s,e,i);const a=e,{operator:o=da,values:r=[],logic:l,metadataType:c}=a;if(r.length===0)return[];if(r.length===1&&(r[0]===he||r[0]===ue)){const p=c===S.GEO_POINT?T.IS+"~":T.IS;return[`${s}${p}"${r[0]}"`]}if((c===S.NUMERIC||c===S.DECIMAL2)&&o===T.RANGE)return[`${s}${T.IS}"${r.join('","')}"`];if(c===S.GEO_POINT){const p=r.map(h=>{const f=h.indexOf("..");if(f===-1)return`(${h})`;const d=h.slice(0,f),v=h.slice(f);return`(${d})${v}`});return We(s,o+"~",p,",",l)}return We(s,o,r,",",l)}function er(t,e,s){const i=fa(t,e);return!s||i.length===0?i:i.map(a=>{const o=a.search(/[^a-zA-Z0-9_]/);if(o===-1)return`"${a}"`;const r=a.slice(0,o),c=a.slice(o).replace(/"/g,"");return`"${r}${c}"`})}function tr(t){return t.startsWith("date_")}function sr(t){for(const e of na)if(t.startsWith(e))return t.slice(e.length);return t}function qi(t){return t.map(e=>e.replace(/#/g,""))}const ir=new Set([y.DATE,y.LICENSE_EXPIRY,Z.DUE_DATE]);function Bs(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=ar(s,i));return e}function ar(t,e){return e.type==="string"||e.type==="date"?e:ir.has(t)?{type:"date",field:e.field??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function or(t){const e=localStorage.getItem(la+t),s=localStorage.getItem(ca+t);let i;try{i=e?JSON.parse(e):[...Ui]}catch{i=[...Ui]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:i,pinnedMetadata:a}}function rr(t,e){localStorage.setItem(la+t,JSON.stringify(e))}function nr(t,e){localStorage.setItem(ca+t,JSON.stringify(e))}const ga="sort-by",va="sort-order";function Hi(t,e){try{localStorage.setItem(ga,t),localStorage.setItem(va,e)}catch{}}function lr(){try{const t=localStorage.getItem(ga),e=localStorage.getItem(va);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const ma="ap-last-folder",ba="ap-last-view",_a="ap-last-tab";function kt(t,e){return e?`${t}:${e}`:t}function Gi(t,e){try{localStorage.setItem(kt(ma,e),t)}catch{}}function cr(t){try{return localStorage.getItem(kt(ma,t))}catch{return null}}function dr(t,e){try{localStorage.setItem(kt(ba,e),t)}catch{}}function pr(t){try{return localStorage.getItem(kt(ba,t))}catch{return null}}function hr(t,e){try{localStorage.setItem(kt(_a,e),t)}catch{}}function ur(t){try{const e=localStorage.getItem(kt(_a,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function fr(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,a=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255;return[i,a,o]}function zs(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function gr(t,e,s){const i=zs(t),a=zs(e),o=zs(s),r=.4122214708*i+.5363325363*a+.0514459929*o,l=.2119034982*i+.6806995451*a+.1073969566*o,c=.0883024619*i+.2817188376*a+.6299787005*o,p=Math.cbrt(r),h=Math.cbrt(l),f=Math.cbrt(c),d=.2104542553*p+.793617785*h-.0040720468*f,v=1.9779984951*p-2.428592205*h+.4505937099*f,m=.0259040371*p+.7827717662*h-.808675766*f,x=Math.sqrt(v*v+m*m);let $=Math.atan2(m,v)*(180/Math.PI);return $<0&&($+=360),[d,x,$]}function vr(t){return t>.7}function mr(t,e){const s=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-primary-20","--ap-accent","--ap-accent-foreground","--ap-ring","--ap-selection-bg"];if(!e){for(const f of s)t.style.removeProperty(f);return}const[i,a,o]=fr(e),[r,l,c]=gr(i,a,o),p=`oklch(${r.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)})`,h=vr(r)?"#000":"#fff";t.style.setProperty("--ap-primary",p),t.style.setProperty("--ap-primary-foreground",h),t.style.setProperty("--ap-primary-10",`oklch(${r.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.1)`),t.style.setProperty("--ap-primary-20",`oklch(${r.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.2)`),t.style.setProperty("--ap-accent",`oklch(${r.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.07)`),t.style.setProperty("--ap-accent-foreground",p),t.style.setProperty("--ap-ring",`oklch(${r.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.7)`),t.style.setProperty("--ap-selection-bg",`oklch(${r.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.08)`)}const Xs=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"modified_at",label:"Modified"},{value:"size",label:"Size"},{value:"type",label:"Format"}],br=[{value:"relevance",label:"Relevance"},...Xs],_r=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"modified_at",label:"Modified"},{value:"files_count_recursive",label:"Assets count"},{value:"files_size_recursive",label:"Assets size"}],yr=[{value:"name",label:"Name"}],xr=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"updated_at",label:"Modified"}],$r=[{value:"name",label:"Name"}];var wr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Zs=(t,e,s,i)=>{for(var a=i>1?void 0:i?kr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&wr(e,s,a),a};let Dt=class extends w{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return n`
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
    `}};Dt.styles=C`
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
      height: 100%;
      max-height: var(--ap-modal-max-height, 85vh);
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
  `;Zs([u({type:Boolean})],Dt.prototype,"open",2);Zs([at("dialog")],Dt.prototype,"dialog",2);Dt=Zs([E("ap-modal")],Dt);function Sr(t,e){let s;const i=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return i.cancel=()=>clearTimeout(s),i}const te=C`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;var Cr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,ys=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ar(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Cr(e,s,a),a};let yt=class extends w{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return n`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label="Regional settings"
        title="Regional settings"
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?g:n`
          <div style="padding: 12px 12px; font-size: 0.8125rem; color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));">
            No regional settings configured
          </div>
        `}
        ${this.groups.map(e=>n`
          <div class="group">
            <div class="group-label">${e.label}</div>
            ${e.variants.map(s=>{const i=this.selectedFilters[e.uuid]===s.api_value;return n`
                <button
                  class="variant-option"
                  ?data-selected=${i}
                  @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                >
                  <span class="variant-label">${s.label}</span>
                  <span class="check-mark">${i?n`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                </button>
              `})}
          </div>
        `)}
      </div>
    `}};yt.styles=C`
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
  `;ys([u({type:Array})],yt.prototype,"groups",2);ys([u({type:Object})],yt.prototype,"selectedFilters",2);ys([_()],yt.prototype,"_open",2);yt=ys([E("ap-regional-settings")],yt);var Er=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,se=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Er(e,s,a),a};const Tr=[{value:"assets",label:"Assets",icon:"gallery-vertical-end"},{value:"folders",label:"Folders",icon:"folder-open"},{value:"labels",label:"Labels",icon:"tag"},{value:"collections",label:"Collections",icon:"layout-grid"}];let G=class extends w{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this._localSearch="",this._debouncedSearch=Sr(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){var e,s;const t=Tr.filter(i=>this.tabs.includes(i.value));return((e=t.find(i=>i.value===this.activeTab))==null?void 0:e.label)??((s=t[0])==null||s.label),n`
      <div class="header-row">
        ${t.length>1?n`<ap-dropdown
              .value=${this.activeTab}
              .options=${t}
              @ap-change=${this._handleTabChange}
            ></ap-dropdown>`:g}
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?"AI search folders and assets":"AI search assets":this.activeTab==="labels"&&!this.isInsideLabel?"Search labels":this.activeTab==="collections"&&!this.isInsideCollection?"Search collections":this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?"Search collection folders":this.activeTab==="folders"?"Search folders and assets":"Search assets"}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?n`
              <button class="clear-btn" @click=${this._clearSearch} aria-label="Clear search">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            `:""}
            ${this.enableAISearch?n`
              <button
                class="ai-toggle ${this.isAISearchActive?"active":""}"
                @click=${this._toggleAISearch}
                aria-label=${this.isAISearchActive?"Disable AI search":"Enable AI search"}
                title=${this.isAISearchActive?"AI search on":"AI search off"}
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
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${this.viewMode==="grid"?"Switch to list view":"Switch to grid view"}
            title=${this.viewMode==="grid"?"List view":"Grid view"}
          >
            <ap-icon name=${this.viewMode==="grid"?"list":"layout-grid"} .size=${18}></ap-icon>
          </button>
          ${this.hideClose?g:n`
            <div class="divider"></div>
            <button class="icon-btn" style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))" @click=${this._handleClose} aria-label="Close">
              <ap-icon name="close" .size=${18}></ap-icon>
            </button>
          `}
        </div>
      </div>
    `}};G.styles=[te,C`
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
  `];se([u()],G.prototype,"activeTab",2);se([u({type:Array})],G.prototype,"tabs",2);se([u({type:Boolean})],G.prototype,"isInsideLabel",2);se([u({type:Boolean})],G.prototype,"isInsideCollection",2);se([u({type:Boolean})],G.prototype,"isInsideCollectionLeaf",2);se([u()],G.prototype,"viewMode",2);se([u()],G.prototype,"searchQuery",2);se([u({type:Array})],G.prototype,"regionalGroups",2);se([u({type:Object})],G.prototype,"regionalFilters",2);se([u({type:Boolean})],G.prototype,"hideClose",2);se([u({type:Boolean,reflect:!0,attribute:"ai-search"})],G.prototype,"enableAISearch",2);se([u({type:Boolean})],G.prototype,"isAISearchActive",2);se([_()],G.prototype,"_localSearch",2);G=se([E("ap-header")],G);var Lr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Js=(t,e,s,i)=>{for(var a=i>1?void 0:i?Or(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Lr(e,s,a),a};let zt=class extends w{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?n``:n`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>n`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?n`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:n`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};zt.styles=C`
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
  `;Js([u({type:Array})],zt.prototype,"items",2);Js([u()],zt.prototype,"rootLabel",2);zt=Js([E("ap-breadcrumb")],zt);var Pr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,ei=(t,e,s,i)=>{for(var a=i>1?void 0:i?Mr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Pr(e,s,a),a};let Rt=class extends w{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?n`
      <div class="popover">
        ${this.title?n`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:n``}};Rt.styles=C`
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
  `;ei([u()],Rt.prototype,"title",2);ei([u({type:Boolean})],Rt.prototype,"open",2);Rt=ei([E("ap-filter-popover")],Rt);var Ir=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Yt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Dr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Ir(e,s,a),a};function Ki(t){var i;const e=new Map;for(const a of t){const o=a.category||a.value.split("_")[0];if(!e.has(o)){const l=ds.find(c=>c.value===o);e.set(o,{key:o,label:(l==null?void 0:l.label)||o.charAt(0).toUpperCase()+o.slice(1),icon:(l==null?void 0:l.icon)||"file",extensions:[],totalCount:0})}const r=e.get(o);r.extensions.push({value:a.value,label:a.label||((i=a.value.split("_").pop())==null?void 0:i.toUpperCase())||a.value,count:a.count}),r.totalCount+=a.count}const s=ds.map(a=>a.value);return[...e.values()].sort((a,o)=>{const r=s.indexOf(a.key),l=s.indexOf(o.key);return(r===-1?999:r)-(l===-1?999:l)})}let et=class extends w{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const a=new Set([t.key,...e]);i=this.selected.filter(o=>!a.has(o))}else{const a=new Set(e);i=this.selected.filter(o=>!a.has(o)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(a=>a!==e.key),i.push(...s)),i.includes(t)?i=i.filter(a=>a!==t):(i.push(t),s.every(a=>i.includes(a))&&(i=i.filter(a=>!s.includes(a)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.TYPE,values:t,operator:T.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const a=s.extensions.filter(o=>o.label.toLowerCase().includes(e)||o.value.toLowerCase().includes(e));return a.length===0?null:{...s,extensions:a}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=Ki(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=Ki(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return n`
      <input
        class="search-input"
        type="text"
        placeholder="Search formats..."
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">Formats</span>
        ${s?n`<button class="clear-btn" @click=${this._clearAll}>Clear all</button>`:g}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?n`<div class="no-results">No formats found</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return n`
      <div
        class="group-header ${s||i?"selected":""}"
        @click=${()=>this._toggleExpand(t.key)}
      >
        <svg class="group-chevron ${e?"expanded":""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <ap-icon name=${t.icon} size="16"></ap-icon>
        <span class="group-label">${t.label}</span>
        <ap-checkbox
          ?checked=${s}
          ?indeterminate=${i}
          @click=${a=>a.stopPropagation()}
          @ap-toggle=${()=>this._toggleGroup(t)}
        ></ap-checkbox>
      </div>
      ${e?n`
          <div class="extensions">
            ${t.extensions.map(a=>n`
              <div
                class="ext-row"
                @click=${()=>this._toggleExt(a.value,t)}
              >
                <ap-checkbox
                  ?checked=${this._isExtSelected(a.value,t.key)}
                  @click=${o=>o.stopPropagation()}
                  @ap-toggle=${()=>this._toggleExt(a.value,t)}
                ></ap-checkbox>
                <span class="ext-label">${a.label}</span>
              </div>
            `)}
          </div>
        `:g}
    `}_renderFallback(){return n`
      <div class="options">
        <span class="section-label">Formats</span>
        ${ds.map(t=>n`
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
    `}};et.styles=C`
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
  `;Yt([u({type:Array})],et.prototype,"selected",2);Yt([u({type:Array})],et.prototype,"fileTypes",2);Yt([_()],et.prototype,"_search",2);Yt([_()],et.prototype,"_expanded",2);et=Yt([E("ap-filter-type")],et);const Le=C`
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
`;var zr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,ot=(t,e,s,i)=>{for(var a=i>1?void 0:i?Rr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&zr(e,s,a),a};function Rs(t){return t.toISOString().split("T")[0]}let Ae=class extends w{constructor(){super(...arguments),this.filterKey=y.DATE,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===y.LICENSE_EXPIRY}get _rangeOptions(){return this._isLicenseExpiry?ha:Ws}get _todayStr(){return Rs(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=ua(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?g:n`
      <div class="filter-section">
        <span class="section-label">Date type</span>
        <ap-radio-group
          .options=${pa}
          .value=${this.field}
          @ap-change=${t=>this._selectField(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderRangeSection(){return n`
      <div class="filter-section">
        <span class="section-label">Range</span>
        <ap-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${t=>this._selectPreset(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return g;const e=this.from?Rs(new Date(this.from)):"",s=this.to?Rs(new Date(this.to)):"",i=this._todayStr;return t==="specific"?n`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">Date</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
            />
          </div>
        </div>
      `:t==="before"?n`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">End date</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${s}
              @change=${a=>this._handleDateInput("to",a)}
            />
          </div>
        </div>
      `:t==="after"?n`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">Start date</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
            />
          </div>
        </div>
      `:n`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">Start date</span>
            <input
              type="date"
              class="filter-input"
              max=${s||i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
            />
          </div>
          <div>
            <span class="input-label">End date</span>
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
    `}render(){return n`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${()=>this._clearAll()}
        >Clear all</button>
        ${this._renderDateTypeSection()}
        ${this._renderRangeSection()}
        ${this._renderDateInputs()}
      </div>
    `}};Ae.styles=[Le,C`
    .date-inputs {
      margin-top: 4px;
    }
  `];ot([u()],Ae.prototype,"filterKey",2);ot([u()],Ae.prototype,"field",2);ot([u()],Ae.prototype,"kind",2);ot([u()],Ae.prototype,"preset",2);ot([u()],Ae.prototype,"from",2);ot([u()],Ae.prototype,"to",2);Ae=ot([E("ap-filter-date")],Ae);var jr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,St=(t,e,s,i)=>{for(var a=i>1?void 0:i?Nr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&jr(e,s,a),a};let Re=class extends w{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=y.TAGS,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=Ts}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:T.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:T.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:T.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return n`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Ts} tags`:g}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return n`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="tag-search"
            type="text"
            placeholder="Search tags"
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?n`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:g}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?n`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?n`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:g})}
                </div>
              </div>
            `:g}

        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?n`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${Ts} tags.</span>
              </div>
            `:g}
      </div>
    `}_renderSearchResults(t){const e=a=>a.toLowerCase().includes(t),s=this._suggestedTags.filter(a=>e(a.label)).slice(0,50),i=this._otherTags.filter(a=>e(a.label)).slice(0,50);return s.length===0&&i.length===0?n`<div class="no-results">No tags found</div>`:n`
      ${s.length>0?n`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">Suggested tags</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length===0}
                  @click=${this._clearAll}
                >Clear all</button>
              </div>
              <div class="options-list short">
                ${s.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:g}

      ${i.length>0?n`
            <div class="filter-section">
              <div class="section-header">
                ${s.length===0?n`<span class="section-label">All tags</span>
                    <button
                      class="clear-btn"
                      ?disabled=${this.selected.length===0}
                      @click=${this._clearAll}
                    >Clear all</button>`:n`<span class="section-label">All tags</span>`}
              </div>
              <div class="options-list">
                ${i.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:g}
    `}_renderSections(){if(this.tags.length===0)return n`<div class="no-results">No tags available</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return n`
      <div class="filter-section">
        ${t.length>0?n`<span class="section-label">Suggested tags</span>`:g}
        ${t.length>0?n`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:g}
      </div>

      ${t.length>0?n`<div class="separator"></div>`:g}

      <div class="hint-message">Find more tags by using search</div>
    `}};Re.styles=[te,Le,C`
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
  `];St([u({type:Array})],Re.prototype,"tags",2);St([u({type:Array})],Re.prototype,"selected",2);St([u()],Re.prototype,"filterKey",2);St([at(".tag-search")],Re.prototype,"_searchInput",2);St([_()],Re.prototype,"_search",2);Re=St([E("ap-filter-tags")],Re);var Ur=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Wt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Br(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Ur(e,s,a),a};let tt=class extends w{constructor(){super(...arguments),this.labels=[],this.selected=[],this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=Ls}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.LABELS,values:s,operator:T.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.LABELS,values:e,operator:T.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.LABELS,values:[],operator:T.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return n`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Ls} labels`:g}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="label-icon" style="color: ${t.color}">
          <ap-icon name="tag" .size=${16}></ap-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return n`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search labels"
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?n`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:g}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?n`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?n`
                      <div class="chip">
                        <span class="chip-icon" style="color: ${i.color}">
                          <ap-icon name="tag" .size=${12}></ap-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:g})}
                </div>
              </div>
            `:g}

        <!-- Labels list -->
        <div class="filter-section">
          <div class="section-header">
            <span class="section-label">All labels</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length===0}
              @click=${this._clearAll}
            >Clear all</button>
          </div>
          <div class="options-list">
            ${e.length===0?n`<div class="no-results">No labels found</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?n`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${Ls} labels.</span>
              </div>
            `:g}
      </div>
    `}};tt.styles=[Le,C`
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
  `];Wt([u({type:Array})],tt.prototype,"labels",2);Wt([u({type:Array})],tt.prototype,"selected",2);Wt([at(".search-input")],tt.prototype,"_searchInput",2);Wt([_()],tt.prototype,"_search",2);tt=Wt([E("ap-filter-labels")],tt);var Vr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ct=(t,e,s,i)=>{for(var a=i>1?void 0:i?qr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Vr(e,s,a),a};const js=3,Vs=/^#[0-9A-Fa-f]{6}$/;function Hr(t){const e=t.trim().split(/\s+/);return e.length<1||!Vs.test(e[0])?null:{hex:e[0],tolerance:e[1]||os,coverage:e[3]||as}}let je=class extends w{constructor(){super(...arguments),this.values=[],this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=Hr(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==os||s.coverage!==as)),this._initialized=!0)}}_selectColor(t){if(!Vs.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=js||(this._colors=[...this._colors,{hex:t,tolerance:os,coverage:as}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!Vs.test(i)||this._colors.some((r,l)=>l!==t&&r.hex.toLowerCase()===i.toLowerCase()))return;const o=[...this._colors];o[t]={...o[t],hex:i},this._colors=o,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const a=[...this._colors];a[t]={...a[t],coverage:String(i)},this._colors=a,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:os,i=this._advanced?e.coverage:as;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=js;return n`
      <div class="palette">
        ${Po.map(s=>{const i=t.has(s),a=e&&!i;return n`
              <button
                class="swatch ${i?"selected":""} ${a?"disabled":""}"
                style="background:${s};${s==="#ffffff"?" border: 1px solid #e4e4e7;":""}"
                @click=${()=>!a&&this._selectColor(s)}
                title=${s}
                ?disabled=${a}
              ></button>
            `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?n`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">Color</span>
          <div class="color-row" style="gap: 6px;">
            <div class="color-swatch-small" style="background:${t.hex}"></div>
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
          <span class="adv-field-label">Difference</span>
          <ap-dropdown
            .value=${t.tolerance}
            .options=${Mo}
            @ap-change=${s=>this._handleToleranceChange(e,s)}
          ></ap-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">Coverage</span>
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
        <button class="remove-btn" style="align-self: end; margin-bottom: 8px;" title="Remove color" @click=${()=>this._removeColor(e)}>
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `:n`
        <div class="color-row">
          <div class="color-swatch-small" style="background:${t.hex}"></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${t.hex}
            maxlength="7"
            @change=${s=>this._handleHexInput(e,s)}
          />
          <button class="remove-btn" title="Remove color" @click=${()=>this._removeColor(e)}>
            <ap-icon name="close" .size=${14}></ap-icon>
          </button>
        </div>
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<js&&!this._showPalette;return n`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <span class="section-label">Color</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?"on":""}">
              <span class="toggle-thumb"></span>
            </span>
            Advanced
          </label>
        </div>

        <div class="filter-section">
          ${t?this._renderPalette():g}
        </div>

        ${this._colors.length>0?n`
          <div class="filter-section">
            <div class="selected-colors">
              ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
            </div>
          </div>
        `:g}

        ${e?n`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              Add color
            </button>
          </div>
        `:g}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Requires image processing to be enabled.</span>
        </div>
      </div>
    `}};je.styles=[te,Le,C`
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
  `];Ct([u({type:Array})],je.prototype,"values",2);Ct([_()],je.prototype,"_colors",2);Ct([_()],je.prototype,"_advanced",2);Ct([_()],je.prototype,"_showPalette",2);Ct([_()],je.prototype,"_initialized",2);je=Ct([E("ap-filter-color")],je);var Gr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,rt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Gr(e,s,a),a};const Qr={KB:1/1e3,MB:1,GB:1e3},Yr=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let Ee=class extends w{constructor(){super(...arguments),this.min=0,this.max=0,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Qr[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.SIZE,values:[],operator:T.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.SIZE,values:[i],operator:T.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return n`
      <div class="filter-content">
        <span class="section-label">Size</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="size-grid">
          <div>
            <span class="input-label">From</span>
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
            <span class="input-label">To</span>
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
            <span class="input-label">Unit</span>
            <ap-dropdown
              .options=${Yr}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
          </div>
        </div>
      </div>
    `}};Ee.styles=[Le,C`
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
    `];rt([u({type:Number})],Ee.prototype,"min",2);rt([u({type:Number})],Ee.prototype,"max",2);rt([_()],Ee.prototype,"_minVal",2);rt([_()],Ee.prototype,"_maxVal",2);rt([_()],Ee.prototype,"_unit",2);rt([_()],Ee.prototype,"_initialized",2);Ee=rt([E("ap-filter-size")],Ee);var Wr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,xs=(t,e,s,i)=>{for(var a=i>1?void 0:i?Xr(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Wr(e,s,a),a};const Zr=De`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,Jr=De`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,en=De`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,tn=De`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,sn={portrait:Zr,landscape:Jr,square:en,panorama:tn};let xt=class extends w{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[]}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return n`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Resolution</span>
          <div class="options-horizontal">
            ${Fo.map(t=>n`
                <ap-checkbox
                  ?checked=${this.selectedResolution.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleResolution(t.value)}}
                >${t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">Orientation</span>
          <div class="options-vertical">
            ${To.map(t=>n`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleOrientation(t.value)}}
                ><span class="orientation-label">${sn[t.value]}${t.label}</span></ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">Faces</span>
          <div class="options-horizontal">
            ${Lo.map(t=>n`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleFaces(t.value)}}
                >${t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Some images might not have been processed, so they won't be displayed.</span>
        </div>
      </div>
    `}};xt.styles=[Le,C`
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
  `];xs([u({type:Array})],xt.prototype,"selectedResolution",2);xs([u({type:Array})],xt.prototype,"selectedOrientation",2);xs([u({type:Array})],xt.prototype,"selectedFaces",2);xt=xs([E("ap-filter-image")],xt);var an=Object.defineProperty,on=Object.getOwnPropertyDescriptor,U=(t,e,s,i)=>{for(var a=i>1?void 0:i?on(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&an(e,s,a),a};function O(t){return`${_s[t.type]||""}${t.key}`}let N=class extends w{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=ts}_getField(t){return this.fields.find(e=>O(e)===t)}_getUIType(t){return Ro[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===he||t[0]===ue}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===he?he:((i=e.values)==null?void 0:i[0])===ue?ue:this._specificModeFields.has(t)||e.values&&e.values.length>0?Ge:""}_emitFilterChange(t,e,s){const i=O(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=O(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=O(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=O(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(O(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=O(t);if(e===Ge){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const a=this._getApplied(s);this._isSpecialValue(a.values)&&this._emitFilterChange(t,a.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=O(t);if(this._specificModeFields.has(e)){const d=new Set(this._specificModeFields);d.delete(e),this._specificModeFields=d}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:a,...o}=this._dateFroms;this._dateFroms=o;const{[e]:r,...l}=this._dateTos;this._dateTos=l;const{[e]:c,...p}=this._selectSearches;this._selectSearches=p;const{[e]:h,...f}=this._tagInputs;this._tagInputs=f,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(O(t)).operator||Ps[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,a=O(t),o=this._getApplied(a),r=o.operator||Is[0].value,l=[...o.values||[]];s===0?l[0]=i:l[1]=i;const c=l.filter(p=>p!==""&&p!==void 0);if(c.length>0){const p=t.type===S.DECIMAL2;if(!c.every(f=>p?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,r,l)}_onBooleanSelect(t,e){var a;const s=this._getApplied(O(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=O(t),i=this._getApplied(s),a=i.operator||Ce[0].value,o=i.values||[];o.length===1&&o[0]===e?this._emitFilterChange(t,a,[]):this._emitFilterChange(t,a,[e])}_onMultiSelectToggle(t,e){const s=O(t),i=this._getApplied(s),a=i.operator||Ms[0].value,o=i.values||[],r=o.includes(e)?o.filter(l=>l!==e):[...o,e];this._emitFilterChange(t,a,r)}_onTagKeydown(t,e){const s=O(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const a=i.replace(/,/g,"").trim();a&&(this._tagInputs={...this._tagInputs,[e]:a},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=O(t),i=this._getApplied(s),a=i.operator||Ce[0].value,o=i.values||[];o.includes(e)||this._emitFilterChange(t,a,[...o,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,a=await this.apiClient.request("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(a.tags||[]).map(o=>o.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),a=i.operator||Ce[0].value,o=i.values||[];o.includes(s)||this._emitFilterChange(t,a,[...o,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=O(t),i=this._getApplied(s),a=i.operator||Ce[0].value,o=i.values||[];this._emitFilterChange(t,a,o.filter(r=>r!==e))}_onTagOperatorChange(t,e){const s=O(t),a=this._getApplied(s).values||[];this._emitFilterChange(t,e,a)}_onDatePreset(t,e){const s=O(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let a="",o="";switch(e){case"today":{const r=new Date(i);r.setHours(0,0,0,0),a=r.toISOString(),o=i.toISOString();break}case"last_week":{const r=new Date(i),l=r.getDay();r.setDate(r.getDate()-(l===0?6:l-1)),r.setHours(0,0,0,0);const c=new Date(r);c.setDate(c.getDate()-7),a=c.toISOString(),o=r.toISOString();break}case"last_month":{const r=new Date(i.getFullYear(),i.getMonth(),1),l=new Date(r);l.setMonth(l.getMonth()-1),a=l.toISOString(),o=r.toISOString();break}case"last_year":{const r=new Date(i.getFullYear(),0,1),l=new Date(r);l.setFullYear(l.getFullYear()-1),a=l.toISOString(),o=r.toISOString();break}}a&&o&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:o},this._emitFilterChange(t,"..",[a,o]))}_onDateInput(t,e,s){const i=s.target.value,a=O(t),o=this._datePresets[a]||"",r=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:r}:this._dateTos={...this._dateTos,[a]:r};let l=this._dateFroms[a]||"",c=this._dateTos[a]||"";o==="after"&&l&&(c=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:c}),o==="before"&&c&&(l=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:l}),l&&c&&this._emitFilterChange(t,"..",[l,c])}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=O(t),a=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),o=(a==null?void 0:a.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const r=s.split(",").map(d=>d.trim());if(r.length!==2||r.some(d=>isNaN(Number(d))||d===""))return;const[l,c]=r;let h=`${l},${c}..${o||"0"}`;this._emitFilterChange(t,T.IS,[h])}_onGeoRadiusInput(t,e){var c;const s=e.target.value,i=O(t),a=this._getApplied(i);if(!((c=a.values)!=null&&c[0]))return;const o=a.values[0],[r]=o.split("..");let l=r;s&&(l+=`..${s}`),this._emitFilterChange(t,T.IS,[l])}_onEmptyOption(t,e){var a;const s=this._getApplied(O(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||"Root fields";e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,o)=>o.length===0?g:n`
        <div class="field-group-label">${a}</div>
        ${o.map(r=>{const l=O(r),c=this.visibleFields.includes(l),p=!c&&this._atFieldLimit;return n`
            <div
              class="field-item ${c?"selected":""} ${p?"disabled":""}"
              @click=${()=>!p&&!c&&this._addField(r)}
            >
              ${c?n`<ap-icon name="check" .size=${14}></ap-icon>`:n`<ap-icon name=${rs[r.type]||"file-text"} .size=${14} style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"></ap-icon>`}
              <span>${r.label}</span>
            </div>
          `})}
      `;return n`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title">Add metadata field</span>
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
            placeholder="Search fields"
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?n`<div class="empty-msg">No fields found</div>`:n`${[...s.entries()].map(([a,o])=>i(a,o))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var p,h;const e=O(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?"":((p=s.values)==null?void 0:p[0])||"",o=this._getContentMode(e),r=o===he||o===ue,l=s.operator||Ps[0].value,c=t.type===S.TEXT_AREA;return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((h=s.values)!=null&&h.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Operator</span>
          <ap-radio-group
            direction="horizontal"
            .options=${Ps}
            .value=${l}
            ?disabled=${r}
            @ap-change=${f=>this._onOperatorChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            clearable
            .options=${Ds}
            .value=${o}
            @ap-change=${f=>this._onContentModeChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        ${o===Ge?n`
              <div class="filter-section">
                <span class="section-label">Value</span>
                ${c?n`
                      <textarea
                        class="filter-input"
                        placeholder="Enter value"
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                      ></textarea>
                    `:n`
                      <input
                        class="filter-input"
                        type="text"
                        placeholder="Enter value"
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                        @keydown=${f=>{f.key==="Enter"&&f.preventDefault()}}
                      />
                    `}
              </div>
            `:g}
      </div>
    `}_renderNumberFilter(t){var k,j,A;const e=O(t),s=this._getApplied(e),i=s.operator||Is[0].value,a=this._isSpecialValue(s.values),o=this._getContentMode(e),r=o===he||o===ue,l=i===T.RANGE,c=i===T.GREATER_THAN_OR_EQUAL,p=i===T.LESS_THAN_OR_EQUAL,h=t.type===S.DECIMAL2,f=h?"0.01":"1",d=h?"0.00":"0",v=a?"":((k=s.values)==null?void 0:k[0])||"",m=a?"":((j=s.values)==null?void 0:j[1])||"",x=l||c||p,$=l||c||p?"Min":"Value";return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((A=s.values)!=null&&A.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Condition</span>
          <ap-radio-group
            columns="2"
            .options=${Is}
            .value=${i}
            ?disabled=${r}
            @ap-change=${F=>this._onOperatorChange(t,F.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            clearable
            .options=${Ds}
            .value=${o}
            @ap-change=${F=>this._onContentModeChange(t,F.detail.value)}
          ></ap-radio-group>
        </div>

        ${o===Ge?n`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${p?"true":g}>${$}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${d}
                      .value=${v}
                      ?disabled=${p}
                      @change=${F=>this._onNumberInput(t,F,0)}
                    />
                  </div>
                  ${x?n`
                        <div>
                          <span class="input-label" aria-disabled=${c?"true":g}>${"Max"}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${d}
                            .value=${m}
                            ?disabled=${c}
                            @change=${F=>this._onNumberInput(t,F,1)}
                          />
                        </div>
                      `:g}
                </div>
              </div>
            `:g}
      </div>
    `}_renderBooleanFilter(t){var i,a;const e=this._getApplied(O(t)),s=((i=e.values)==null?void 0:i[0])||"";return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Value</span>
          <ap-radio-group
            clearable
            .options=${zo}
            .value=${s}
            @ap-change=${o=>this._onBooleanSelect(t,o.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=O(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],o=t.possible_values||[],r=s.operator||Ce[0].value,l=(this._selectSearches[e]||"").toLowerCase(),c=l.length>0,p=a.length>0||i,h=l?o.filter(d=>d.label.toLowerCase().includes(l)):o,f=a.length>=ts;return n`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search options"
            .value=${this._selectSearches[e]||""}
            @input=${d=>{this._selectSearches={...this._selectSearches,[e]:d.target.value}}}
          />
          ${c?n`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:g}
        </div>

        ${c?n`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!p&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >Clear all</button>
              </div>
            `:n`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Operator</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!p&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${Ce}
                  .value=${r}
                  @ap-change=${d=>this._onOperatorChange(t,d.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">Selected</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >Clear all</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(d=>{const v=o.find(m=>m.api_value===d);return n`
                            <div class="chip">
                              <span class="chip-label">${(v==null?void 0:v.label)||d}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(t,d)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:g}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${Ye.map(d=>{var v;return n`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,d.value)}
                >
                  <ap-checkbox ?checked=${((v=s.values)==null?void 0:v[0])===d.value}></ap-checkbox>
                  <span>${d.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${h.length===0?n`<div class="no-results">No options found</div>`:h.map(d=>{const v=a.includes(d.api_value),m=!v&&f;return n`
                    <div
                      class="option-item ${m?"disabled":""}"
                      @click=${()=>!m&&this._onSelectOneToggle(t,d.api_value)}
                    >
                      <ap-checkbox ?checked=${v}></ap-checkbox>
                      <span>${d.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=O(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],o=t.possible_values||[],r=s.operator||Ms[0].value,l=(this._selectSearches[e]||"").toLowerCase(),c=l.length>0,p=a.length>0||i,h=l?o.filter(d=>d.label.toLowerCase().includes(l)):o,f=a.length>=ts;return n`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search options"
            .value=${this._selectSearches[e]||""}
            @input=${d=>{this._selectSearches={...this._selectSearches,[e]:d.target.value}}}
          />
          ${c?n`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:g}
        </div>

        ${c?n`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!p&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >Clear all</button>
              </div>
            `:n`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Operator</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!p&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${Ms}
                  .value=${r}
                  @ap-change=${d=>this._onOperatorChange(t,d.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">Selected</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >Clear all</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(d=>{const v=o.find(m=>m.api_value===d);return n`
                            <div class="chip">
                              <span class="chip-label">${(v==null?void 0:v.label)||d}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(t,d)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:g}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${Ye.map(d=>{var v;return n`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,d.value)}
                >
                  <ap-checkbox ?checked=${((v=s.values)==null?void 0:v[0])===d.value}></ap-checkbox>
                  <span>${d.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${h.length===0?n`<div class="no-results">No options found</div>`:h.map(d=>{const v=a.includes(d.api_value),m=!v&&f;return n`
                    <div
                      class="option-item ${m?"disabled":""}"
                      @click=${()=>!m&&this._onMultiSelectToggle(t,d.api_value)}
                    >
                      <ap-checkbox ?checked=${v}></ap-checkbox>
                      <span>${d.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=O(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],o=this._tagInputs[e]||"",r=s.operator||Ce[0].value,l=a.length>0||i,c=this._tagSuggestions[e]||[],p=this._tagLoading[e]||!1,h=o.trim().length>0,f=a.length>=ts;return n`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search tags"
            .value=${o}
            @input=${d=>this._onTagInput(t,e,d)}
            @keydown=${d=>this._onTagKeydown(t,d)}
          />
          ${h?n`
                <button class="search-clear" @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:g}
        </div>

        ${h?n`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!l&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >Clear all</button>
              </div>
            `:n`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Condition</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!l&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${Ce}
                  .value=${r}
                  ?disabled=${i}
                  @ap-change=${d=>this._onTagOperatorChange(t,d.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">Selected</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >Clear all</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(d=>n`
                            <div class="chip">
                              <span class="chip-label">${d}</span>
                              <button class="chip-remove" @click=${()=>this._removeTag(t,d)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:g}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">All options</span>
                <div class="options-list short">
                  ${Ye.map(d=>{var v;return n`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,d.value)}
                      >
                        <ap-checkbox ?checked=${((v=s.values)==null?void 0:v[0])===d.value}></ap-checkbox>
                        <span>${d.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${h?n`
              <div class="filter-section">
                <div class="options-list">
                  ${p?n`<div class="option-item disabled"><span>Loading...</span></div>`:c.length>0?c.map(d=>{const v=a.includes(d),m=!v&&f;return n`
                              <div
                                class="option-item ${m?"disabled":""}"
                                @click=${()=>!m&&(v?this._removeTag(t,d):this._selectTagSuggestion(t,d))}
                              >
                                <ap-checkbox ?checked=${v}></ap-checkbox>
                                <span>${d}</span>
                              </div>
                            `}):n`<div class="option-item disabled"><span>No results</span></div>`}
                </div>
              </div>
            `:g}
      </div>
    `}_renderDateFilter(t){var h,f;const e=O(t),s=this._datePresets[e]||"",i=this._getApplied(e),o=this._isSpecialValue(i.values)?((h=i.values)==null?void 0:h[0])||"":s,r=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],l=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",c=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",p=["before","after","between"].includes(o);return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!o&&!((f=i.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${r}
            .value=${o==="empty"||o==="non-empty"?o:""}
            @ap-change=${d=>this._onDatePreset(t,d.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            clearable
            columns="2"
            .options=${Ws}
            .value=${o!=="empty"&&o!=="non-empty"?o:""}
            @ap-change=${d=>this._onDatePreset(t,d.detail.value)}
          ></ap-radio-group>
        </div>

        ${p?n`
              <div class="filter-section">
                <div class="grid-2">
                  ${o==="before"?n`
                        <div>
                          <span class="input-label">End date</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${c}
                            @change=${d=>this._onDateInput(t,"to",d)}
                          />
                        </div>
                      `:o==="after"?n`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${d=>this._onDateInput(t,"from",d)}
                            />
                          </div>
                        `:n`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${d=>this._onDateInput(t,"from",d)}
                            />
                          </div>
                          <div>
                            <span class="input-label">End date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${c}
                              @change=${d=>this._onDateInput(t,"to",d)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:g}
      </div>
    `}_renderGeoFilter(t){var h,f;const e=O(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=this._getContentMode(e);let o="",r="";if(!i&&((h=s.values)!=null&&h[0])){const d=s.values[0],[v,m]=d.split("..");o=v||"",r=m||""}const l=o.length>0,c=o.split(",").map(d=>d.trim()),p=!l||c.length===2&&c.every(d=>!isNaN(Number(d))&&d!=="");return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((f=s.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            clearable
            .options=${Ds}
            .value=${a}
            @ap-change=${d=>this._onContentModeChange(t,d.detail.value)}
          ></ap-radio-group>
        </div>

        ${a===Ge?n`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">Location</span>
                    <input
                      class="filter-input"
                      type="text"
                      placeholder="Latitude, longitude"
                      .value=${o}
                      @change=${d=>this._onGeoLocationInput(t,d)}
                    />
                    ${l&&!p?n`<div class="error-text">Enter coordinates as "latitude, longitude"</div>`:g}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">Max radius (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${r}
                      @change=${d=>this._onGeoRadiusInput(t,d)}
                    />
                  </div>
                </div>
              </div>
            `:g}
      </div>
    `}_renderAttachmentFilter(t){var i,a;const e=this._getApplied(O(t)),s=((i=e.values)==null?void 0:i[0])||"";return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${Ye}
            .value=${s}
            @ap-change=${o=>this._onEmptyOption(t,o.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=O(t),s=this._getApplied(e),i=s.values||[],a=s.operator||T.IS;return n`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${i.length===0}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Condition</span>
          <ap-radio-group
            direction="horizontal"
            .options=${Ce}
            .value=${a}
            @ap-change=${o=>this._emitFilterChange(t,o.detail.value,i)}
          ></ap-radio-group>
          <input
            class="filter-input"
            type="text"
            placeholder="Search faces"
            .value=${i.join(", ")}
            @change=${o=>{const l=o.target.value.split(",").map(c=>c.trim()).filter(Boolean);this._emitFilterChange(t,a,l)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===S.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return g}}_renderFieldSection(t){const e=this._getField(t);if(!e)return g;const s=this._collapsedFields.has(t);return n`
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
            <ap-icon name=${rs[e.type]||"file-text"} .size=${14} style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"></ap-icon>
            <span>${e.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${i=>{i.stopPropagation(),this._removeField(e)}}
              title="Remove field"
            >
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${s?"collapsed":""}">
          ${this._renderFieldControl(e)}
        </div>
      </div>
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,o)=>o.length===0?g:n`
        <div class="field-group-label">${a}</div>
        ${o.map(r=>{const l=O(r),c=this.visibleFields.includes(l),p=!!this.appliedMetadata[l]||!!this.appliedFilters[l],h=this.pinnedFields.includes(l),f=!c&&this._atFieldLimit;return n`
            <div
              class="field-item ${p?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(r)}
            >
              <ap-icon name=${rs[r.type]||"file-text"} .size=${14} style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"></ap-icon>
              <span class="field-item-label">${r.label}</span>
              <button
                class="field-item-pin ${h?"pinned":""}"
                @click=${d=>{d.stopPropagation(),this._emitPin(l,!h)}}
                title=${h?"Unpin field":"Pin field"}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${p?n`<ap-icon name="check" .size=${14}></ap-icon>`:g}
            </div>
          `})}
      `;return n`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            placeholder="Search fields"
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?n`<div class="empty-msg">No fields found</div>`:n`${[...s.entries()].map(([a,o])=>i(a,o))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):n`<div class="empty-msg">Field not found</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return n`
      ${this._showFieldSelection||!t?this._renderFieldSelection():g}

      ${t?n`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?n`
                  <button
                    class="add-field-btn"
                    style="margin-top: 8px"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    Add field
                  </button>
                `:g}
          `:g}
    `}};N.styles=[te,Le,C`
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
  `];U([u({type:Array})],N.prototype,"fields",2);U([u({type:Object})],N.prototype,"appliedFilters",2);U([u({type:Array})],N.prototype,"visibleFields",2);U([u()],N.prototype,"mode",2);U([u()],N.prototype,"activeFieldKey",2);U([u({type:Array})],N.prototype,"pinnedFields",2);U([u({type:Object})],N.prototype,"appliedMetadata",2);U([u({attribute:!1})],N.prototype,"apiClient",2);U([_()],N.prototype,"_showFieldSelection",2);U([_()],N.prototype,"_fieldSearch",2);U([_()],N.prototype,"_collapsedFields",2);U([_()],N.prototype,"_tagInputs",2);U([_()],N.prototype,"_tagSuggestions",2);U([_()],N.prototype,"_tagLoading",2);U([_()],N.prototype,"_datePresets",2);U([_()],N.prototype,"_dateFroms",2);U([_()],N.prototype,"_dateTos",2);U([_()],N.prototype,"_specificModeFields",2);U([_()],N.prototype,"_selectSearches",2);N=U([E("ap-filter-metadata")],N);var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,we=(t,e,s,i)=>{for(var a=i>1?void 0:i?nn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&rn(e,s,a),a};let fe=class extends w{constructor(){super(...arguments),this.selectedStatus=[],this.statusOperator=":=",this.approverValue="",this.approverOperator="~",this.requesterValue="",this.requesterOperator="~",this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo=""}get _hasAnySelection(){return this.selectedStatus.length>0||!!this.approverValue||!!this.requesterValue||!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo}get _statusHasEmptyValue(){return this.selectedStatus.includes(he)||this.selectedStatus.includes(ue)}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===he||t===ue)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(Z.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(Z.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(Z.STATUS,[],this.statusOperator)}_handleApproverInput(t){const e=t.target.value;this._emitChange(Z.APPROVER,e?[e]:[],this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(Z.APPROVER,this.approverValue?[this.approverValue]:[],e)}_clearApprover(){this._emitChange(Z.APPROVER,[],this.approverOperator)}_handleRequesterInput(t){const e=t.target.value;this._emitChange(Z.REQUESTOR,e?[e]:[],this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(Z.REQUESTOR,this.requesterValue?[this.requesterValue]:[],e)}_clearRequester(){this._emitChange(Z.REQUESTOR,[],this.requesterOperator)}_handleDueDatePreset(t){const e=t.detail.value,s=this.dueDatePreset===e?"":e;this._emitChange(Z.DUE_DATE,s?[s]:[],":")}_handleDueDateFrom(t){const e=t.target.value;this._emitDateChange(e,this.dueDateTo)}_handleDueDateTo(t){const e=t.target.value;this._emitDateChange(this.dueDateFrom,e)}_clearDueDate(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:Z.DUE_DATE,values:[],operator:":"},bubbles:!0,composed:!0}))}_emitDateChange(t,e){const s=[];t&&s.push(t),e&&s.push(e),this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:Z.DUE_DATE,values:s,operator:t&&e?"..":t?">=":"<="},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_renderStatusSection(){const t=this.selectedStatus.length>0;return n`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearStatus}
        >Clear all</button>

        <span class="section-label">Status</span>

        <!-- Condition -->
        <span class="section-label condition-label">Condition</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Io}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${Ye.map(e=>n`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${e.label}</ap-checkbox>
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${Do.map(e=>n`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span style="display:inline-flex;align-items:center;gap:6px">
                  <ap-icon name=${e.icon} .size=${16} style="color:${e.iconColor}"></ap-icon>
                  ${e.label}
                </span>
              </ap-checkbox>
            `)}
        </div>
      </div>
    `}_renderApproverSection(){const t=!!this.approverValue;return n`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearApprover}
        >Clear all</button>

        <span class="section-label">Approver</span>

        <!-- Condition -->
        <span class="section-label condition-label">Condition</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Bi}
          .value=${this.approverOperator}
          @ap-change=${this._handleApproverOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter approver name"
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>
    `}_renderRequesterSection(){const t=!!this.requesterValue;return n`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearRequester}
        >Clear all</button>

        <span class="section-label">Requester</span>

        <!-- Condition -->
        <span class="section-label condition-label">Condition</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Bi}
          .value=${this.requesterOperator}
          @ap-change=${this._handleRequesterOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter requester name"
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>
    `}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return n`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearDueDate}
        >Clear all</button>

        <span class="section-label">Due date</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          clearable
          .options=${Ye}
          .value=${this.dueDatePreset===he||this.dueDatePreset===ue?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          clearable
          columns="2"
          .options=${Oo}
          .value=${this.dueDatePreset!==he&&this.dueDatePreset!==ue?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?n`
            <div class="grid-2 mt-12">
              ${this.dueDatePreset!=="before"?n`
                  <div class="date-input-col">
                    <span class="input-label">Start date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateFrom}
                      @change=${this._handleDueDateFrom}
                    />
                  </div>
                `:g}
              ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?n`
                  <div class="date-input-col">
                    <span class="input-label">End date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateTo}
                      @change=${this._handleDueDateTo}
                    />
                  </div>
                `:g}
            </div>
          `:g}
      </div>
    `}render(){return n`
      <div class="filter-content">
        ${this._renderStatusSection()}
        <div class="separator"></div>
        ${this._renderApproverSection()}
        <div class="separator"></div>
        ${this._renderRequesterSection()}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};fe.styles=[te,Le,C`
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
  `];we([u({type:Array})],fe.prototype,"selectedStatus",2);we([u()],fe.prototype,"statusOperator",2);we([u()],fe.prototype,"approverValue",2);we([u()],fe.prototype,"approverOperator",2);we([u()],fe.prototype,"requesterValue",2);we([u()],fe.prototype,"requesterOperator",2);we([u()],fe.prototype,"dueDatePreset",2);we([u()],fe.prototype,"dueDateFrom",2);we([u()],fe.prototype,"dueDateTo",2);fe=we([E("ap-filter-approval")],fe);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,ke=(t,e,s,i)=>{for(var a=i>1?void 0:i?cn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&ln(e,s,a),a};const dn=300;function pn(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let ge=class extends w{constructor(){super(...arguments),this.selected=[],this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=pn(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.PRODUCT_REF,values:e,operator:T.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},dn)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.request("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return n`
      <div
        class="product-item"
        @click=${()=>this._toggle(t)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return n`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="product-search"
            type="text"
            placeholder="Search product references"
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?n`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:g}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?n`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  style="position: static"
                  @click=${this._clearAll}
                >Clear all</button>
              </div>
            `:g}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?n`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>n`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:g}

        <!-- Search results -->
        ${this._isSearching?n`
              <div class="filter-section">
                <span class="section-label">Product references</span>
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):g}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:g}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?g:n`
              <div class="placeholder">
                ${t?n`<ap-icon name="box" .size=${40} style="color: var(--ap-border, oklch(92.86% 0.009 247.92)); margin-bottom: 4px;"></ap-icon>`:g}
                <div class="placeholder-title">Find product reference</div>
                <div class="placeholder-text">By using the search or pressing the button below to import the product references list.</div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <ap-icon name="plus" .size=${14}></ap-icon>
                  Add list
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading?n`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:g}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?n`<div class="no-results">No results found</div>`:g}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?n`
            <div class="dialog-overlay" @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}>
              <div class="dialog">
                <div class="dialog-header">Add products references list</div>
                <div class="dialog-body">
                  <div class="info-alert" style="margin-top: 0;">
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>Use "*" to select all references starting with your text.</span>
                  </div>
                  <label class="input-label" style="margin-bottom: 0; font-weight: 400; color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));">Product references</label>
                  <textarea
                    class="dialog-textarea"
                    placeholder="Enter product references separated by new lines"
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>Cancel</button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>Continue</button>
                </div>
              </div>
            </div>
          `:g}
    `}};ge.styles=[te,Le,C`
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
  `];ke([u({type:Array})],ge.prototype,"selected",2);ke([u({attribute:!1})],ge.prototype,"apiClient",2);ke([at(".product-search")],ge.prototype,"_searchInput",2);ke([_()],ge.prototype,"_search",2);ke([_()],ge.prototype,"_debouncedSearch",2);ke([_()],ge.prototype,"_products",2);ke([_()],ge.prototype,"_isLoading",2);ke([_()],ge.prototype,"_showAddList",2);ke([_()],ge.prototype,"_addListText",2);ge=ke([E("ap-filter-product-ref")],ge);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,z=(t,e,s,i)=>{for(var a=i>1?void 0:i?un(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&hn(e,s,a),a};let D=class extends w{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=Xs,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(o=>{var r;return o instanceof HTMLElement&&o.classList.contains("chip")&&((r=o.closest)==null?void 0:r.call(o,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(a=>a instanceof HTMLElement?a.classList.contains("popover-anchor")||a.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(a=>a instanceof HTMLElement&&(a.classList.contains("dropdown-menu")||a.classList.contains("filter-dropdown")||a.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,a=e.offsetWidth;this._externalLeft+a>i-8&&(e.style.left=`${Math.max(8,i-a-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}if(!e&&!this._isFilterActive(t)){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${_s[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Us.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var s,i,a;const e=this.filters.applied;switch(t){case"type":{const o=e.type;return n`<ap-filter-type
          .selected=${(o==null?void 0:o.values)||[]}
          .fileTypes=${this.fileTypes}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const o=e.tags;return n`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const o=e.labels;return n`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const o=e.color;return n`<ap-filter-color
          .values=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const o=e.date;return n`<ap-filter-date
          .filterKey=${"date"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const o=e.asset_expiration;return n`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const o=e.size,r=((s=o==null?void 0:o.values)==null?void 0:s[0])||"",[l,c]=r.split(".."),p=l?parseFloat(l)/1e6:0,h=c?parseFloat(c)/1e6:0;return n`<ap-filter-size
          .min=${p}
          .max=${h}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const o=e.image,r=o&&"resolution"in o?o:null;return n`<ap-filter-image
          .selectedResolution=${(r==null?void 0:r.resolution)||[]}
          .selectedOrientation=${(r==null?void 0:r.orientation)||[]}
          .selectedFaces=${(r==null?void 0:r.faces)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const o=e.approval_status,r=e.task_approver,l=e.task_requester,c=e.task_duedate;return n`<ap-filter-approval
          .selectedStatus=${(o==null?void 0:o.values)||[]}
          .statusOperator=${(o==null?void 0:o.operator)||":"}
          .approverValue=${((i=r==null?void 0:r.values)==null?void 0:i[0])||""}
          .approverOperator=${(r==null?void 0:r.operator)||":"}
          .requesterValue=${((a=l==null?void 0:l.values)==null?void 0:a[0])||""}
          .requesterOperator=${(l==null?void 0:l.operator)||":"}
          .dueDatePreset=${(c==null?void 0:c.preset)||""}
          .dueDateFrom=${(c==null?void 0:c.from)||""}
          .dueDateTo=${(c==null?void 0:c.to)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?n`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            .apiClient=${this.apiClient}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>`:n`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          .apiClient=${this.apiClient}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const o=e.product_ref;return n`<ap-filter-product-ref
          .selected=${(o==null?void 0:o.values)||[]}
          .apiClient=${this.apiClient}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return g}}_renderFilterButton(t){const e=t.key==="metadata",s=e?Object.keys(this.filters.metadata.applied).length>0:this._isFilterActive(t.key),i=this.pinnedFilters.includes(t.key),a=n`
      <button
        class="filter-btn ${s?"active":""} ${i?"pinned":""}"
        @click=${()=>e?this._toggleMetadataSelector():this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${t.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${t.label}
        </span>
        ${e?n`<span class="submenu-chevron"><ap-icon name="chevron-right" .size=${14}></ap-icon></span>`:n`
              <span
                class="pin-btn ${i?"pinned":""}"
                title=${i?"Unpin filter":"Pin filter"}
                @click=${o=>this._togglePin(t.key,o)}
              >
                <ap-icon name="pin" .size=${14}></ap-icon>
              </span>
            `}
      </button>
    `;return e?n`
      <div class="filter-btn-wrapper">
        ${a}
        ${this._showMetadataSelector?n`
          <div class="metadata-selector-overlay">
            <ap-filter-metadata
              mode="selector"
              .fields=${this.metadataFields}
              .appliedMetadata=${this.filters.metadata.applied}
              .visibleFields=${this.filters.metadata.visible}
              .pinnedFields=${this.filters.metadata.pinned}
              @metadata-field-select=${this._handleMetadataSelectorFieldSelect}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
            ></ap-filter-metadata>
          </div>
        `:g}
      </div>
    `:a}render(){const t=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return n`
      <div class="toolbar-row">
        ${this.isLoading?n`<span class="count-skeleton"></span>`:n`<span class="count">${this.countLabel||[this.totalFolderCount>0?`${this.totalFolderCount.toLocaleString()} folder${this.totalFolderCount!==1?"s":""}`:"",this.totalCount>0||this.totalFolderCount===0?`${this.totalCount.toLocaleString()} asset${this.totalCount!==1?"s":""}`:""].filter(Boolean).join(", ")}</span>`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters?n`
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown?"open":""}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              Filters
              ${t>0?n`<span class="filter-count">${t}</span>`:n`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown?n`
              <div class="dropdown-menu">
                ${Us.filter(e=>!this.forcedFilterKeys.includes(e.key)).map(e=>this._renderFilterButton(e))}
              </div>
            `:g}
          </div>
          `:g}
          <ap-dropdown
            variant="borderless"
            label="Sort"
            .value=${this.sortBy}
            .options=${this.sortOptions}
            @ap-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></ap-dropdown>
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection==="asc"?"Sort ascending":"Sort descending"}
            title=${this.sortDirection==="asc"?"Ascending":"Descending"}
          >
            <ap-icon name=${this.sortDirection==="asc"?"sort-asc":"sort-desc"} .size=${18}></ap-icon>
          </button>
          ${this.showUpload?n`
            <button class="upload-btn" @click=${this._handleUploadClick}>
              <ap-icon name="upload" .size=${16}></ap-icon>
              Upload
            </button>
          `:g}
        </div>
      </div>
      ${this._openFilter?n`
        <div class="popover-anchor ${this._externalTrigger?"external":""}" style=${this._externalTrigger&&this._externalTop!=null?`top: ${this._externalTop+4}px`:""}>
          ${this._externalTrigger?g:n`
            <div class="anchor-tab">
              ${this._openFilter==="metadata"&&this._openMetadataField?n`
                    <button class="anchor-back" @click=${e=>{e.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:n`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${ft[this._openFilter]||this._openFilter}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" style=${this._externalTrigger&&this._externalLeft!=null?`left: ${this._externalLeft}px`:""}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:g}
    `}};D.styles=C`
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
  `;z([u({type:Number})],D.prototype,"totalCount",2);z([u({type:Number})],D.prototype,"totalFolderCount",2);z([u({type:Boolean})],D.prototype,"isLoading",2);z([u({type:Boolean})],D.prototype,"showUpload",2);z([u({type:Boolean})],D.prototype,"showFilters",2);z([u()],D.prototype,"countLabel",2);z([u()],D.prototype,"sortBy",2);z([u()],D.prototype,"sortDirection",2);z([u({type:Array})],D.prototype,"sortOptions",2);z([u({type:Object})],D.prototype,"filters",2);z([u({type:Array})],D.prototype,"labels",2);z([u({type:Array})],D.prototype,"tags",2);z([u({type:Array})],D.prototype,"fileTypes",2);z([u({type:Array})],D.prototype,"metadataFields",2);z([u({type:Array})],D.prototype,"pinnedFilters",2);z([u({type:Array})],D.prototype,"forcedFilterKeys",2);z([u({attribute:!1})],D.prototype,"apiClient",2);z([at("ap-dropdown")],D.prototype,"_sortDropdown",2);z([_()],D.prototype,"_showDropdown",2);z([_()],D.prototype,"_showMetadataSelector",2);z([_()],D.prototype,"_openFilter",2);z([_()],D.prototype,"_openMetadataField",2);z([_()],D.prototype,"_externalTrigger",2);z([_()],D.prototype,"_externalLeft",2);z([_()],D.prototype,"_externalTop",2);D=z([E("ap-content-toolbar")],D);var fn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var a=i>1?void 0:i?gn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&fn(e,s,a),a};let Y=class extends w{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null}_mapTypeLabel(t){var i;const e=(i=ds.find(a=>a.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),a=s?parseFloat(s):null,o=i?parseFloat(i):null,r=l=>l>=1e3?`${(l/1e3).toFixed(l%1e3===0?0:1)} GB`:`${l} MB`;return a!==null&&o!==null?`${r(a)} – ${r(o)}`:a!==null?`> ${r(a)}`:o!==null?`< ${r(o)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===y.SIZE)return this._getSizeSummary(s);if(e===y.COLOR){const a=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return a.length===0?"":a.length===1?a[0]:`${a[0]} +${a.length-1}`}const i=e===y.TYPE?a=>this._mapTypeLabel(a):e===y.TAGS?a=>{var o;return((o=this.tags.find(r=>r.sid===a))==null?void 0:o.label)||a}:e===y.LABELS?a=>{var o;return((o=this.labels.find(r=>r.sid===a))==null?void 0:o.name)||a}:a=>a;return s.values.length===1?i(s.values[0]):`${i(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDateSummary(t){var r,l;const e=((r=pa.find(c=>c.value===t.field))==null?void 0:r.label)||t.field,s=[...Ws,...ha],i=t.preset?((l=s.find(c=>c.value===t.preset))==null?void 0:l.label)||t.preset:"",a=c=>{try{return c.split("T")[0]}catch{return c}};let o="";switch(t.kind){case"preset":o=i;break;case"before":o=t.to?`Before ${a(t.to)}`:i;break;case"after":o=t.from?`After ${a(t.from)}`:i;break;case"between":t.from&&t.to?o=`${a(t.from)} – ${a(t.to)}`:t.from?o=`After ${a(t.from)}`:t.to&&(o=`Before ${a(t.to)}`);break;case"specific":o=t.from?a(t.from):"";break;default:o=i}return o?`${e}: ${o}`:""}_getFilterIcon(t){var e;return((e=Us.find(s=>s.key===t))==null?void 0:e.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&rs[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of na)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const s=this._getFilterSummary(e,t),i=e.type==="date";return n`
      <span class="chip forced">
        ${(i||t===y.TYPE||t===y.SIZE)&&s?n`<span class="chip-label">${s}</span>`:n`
              <span class="chip-label">${ft[t]||t}</span>
              ${s?n`<span class="chip-summary">${s}</span>`:g}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){if(!e)return n`
        <span class="chip pinned-empty ${t===this.activeFilter?"active":""}" @click=${a=>this._openFilter(t,a)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
          <span class="chip-label">${ft[t]||t}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;const s=this._getFilterSummary(e,t),i=e.type==="date";return n`
      <span class="chip ${t===this.activeFilter?"active":""}" @click=${a=>this._openFilter(t,a)}>
        ${(i||t===y.TYPE||t===y.SIZE)&&s?n`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
              <span class="chip-label">${s}</span>`:n`
              <span class="chip-label">${ft[t]||t}</span>
              ${s?n`<span class="chip-summary">${s}</span>`:g}
            `}
        <button class="chip-remove" @click=${a=>{a.stopPropagation(),this._removeFilter(t)}} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const o=this._getMetadataLabel(t),r=this._getMetadataIcon(t);return n`
        <span class="chip pinned-empty ${t===this.activeMetadataField?"active":""}" @click=${l=>this._openMetadataFilter(t,l)}>
          <span class="chip-icon"><ap-icon name=${r} .size=${16}></ap-icon></span>
          <span class="chip-label">${o}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),a=this._getMetadataIcon(t);return n`
      <span class="chip ${t===this.activeMetadataField?"active":""}" @click=${o=>this._openMetadataFilter(t,o)}>
        <span class="chip-icon"><ap-icon name=${a} .size=${16}></ap-icon></span>
        <span class="chip-label">${i}</span>
        ${s?n`<span class="chip-summary">${s}</span>`:g}
        <button class="chip-remove" @click=${o=>{o.stopPropagation(),this._removeMetadataFilter(t)}} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}render(){const t=Bs(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(v=>!e.has(v)),i=Object.keys(this.appliedMetadata),a=new Set(this.pinnedFilters),o=new Set(this.pinnedMetadataFields),r=this.pinnedFilters.filter(v=>!e.has(v)),l=s.filter(v=>!a.has(v)),c=i.filter(v=>!o.has(v)),p=this.pendingFilter&&!a.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),h=this.pendingMetadataField&&!o.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),f=s.length+i.length>0;return e.size+r.length+this.pinnedMetadataFields.length+l.length+c.length+(p?1:0)+(h?1:0)===0?g:n`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(v=>this._renderForcedChip(v,t[v]))}
          ${r.map(v=>this._renderFilterChip(v,this.appliedFilters[v]))}
          ${this.pinnedMetadataFields.map(v=>this._renderMetadataChip(v,this.appliedMetadata[v]))}
          ${l.map(v=>this._renderFilterChip(v,this.appliedFilters[v]))}
          ${p?n`
            <span class="chip pinned-empty active pending" @click=${v=>this._openFilter(this.pendingFilter,v)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></ap-icon></span>
              <span class="chip-label">${ft[this.pendingFilter]||this.pendingFilter}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:g}
          ${c.map(v=>this._renderMetadataChip(v,this.appliedMetadata[v]))}
          ${h?n`
            <span class="chip pinned-empty active pending" @click=${v=>this._openMetadataFilter(this.pendingMetadataField,v)}>
              <span class="chip-icon"><ap-icon name=${this._getMetadataIcon(this.pendingMetadataField)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:g}
          ${f?n`<button class="clear-all" @click=${this._clearAll}>Clear filters</button>`:g}
        </div>
      </div>
    `}};Y.styles=C`
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
  `;le([u({type:Object})],Y.prototype,"appliedFilters",2);le([u({type:Object})],Y.prototype,"appliedMetadata",2);le([u({type:Object})],Y.prototype,"forcedFilters",2);le([u({type:Array})],Y.prototype,"metadataFields",2);le([u({type:Array})],Y.prototype,"pinnedFilters",2);le([u({type:Array})],Y.prototype,"pinnedMetadataFields",2);le([u({type:Array})],Y.prototype,"tags",2);le([u({type:Array})],Y.prototype,"labels",2);le([u()],Y.prototype,"activeFilter",2);le([u()],Y.prototype,"activeMetadataField",2);le([u()],Y.prototype,"pendingFilter",2);le([u()],Y.prototype,"pendingMetadataField",2);Y=le([E("ap-filters-bar")],Y);var vn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,Se=(t,e,s,i)=>{for(var a=i>1?void 0:i?mn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&vn(e,s,a),a};const bn=6;let ve=class extends w{constructor(){super(...arguments),this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return n`
      <div class="grid" role="list" aria-label="Assets" style="--ap-grid-min-col: ${t}">
        ${this.folders.map((e,s)=>n`
            <ap-folder-card
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              .index=${s}
              data-folder-uuid=${e.uuid}
              @folder-open=${i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:i.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:i.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-card>
          `)}
        ${this.assets.map((e,s)=>{const i=s>=this._prevCount?Math.min(s-this._prevCount,20):Math.min(s,20);return n`
              <ap-asset-card
                .asset=${e}
                .index=${this.folderSelectable?this.folders.length+s:s}
                ?selected=${this.selectedIds.includes(e.uuid)}
                .multiSelect=${this.multiSelect}
                style="--ap-stagger-index: ${i}"
                data-asset-uuid=${e.uuid}
                @asset-select=${a=>this.dispatchEvent(new CustomEvent("asset-select",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${a=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${a=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:bn},()=>n`<div class="ghost-card">
                <div class="ghost-thumb"></div>
                <div class="ghost-info">
                  <div class="ghost-line ghost-name"></div>
                  <div class="ghost-line ghost-meta"></div>
                </div>
              </div>`):g}
      </div>
    `}};ve.styles=C`
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
  `;Se([u({type:Array})],ve.prototype,"assets",2);Se([u({type:Array})],ve.prototype,"folders",2);Se([u({type:Object})],ve.prototype,"folderPreviews",2);Se([u({type:Array})],ve.prototype,"selectedIds",2);Se([u({type:Array})],ve.prototype,"selectedFolderIds",2);Se([u({type:Boolean})],ve.prototype,"isLoading",2);Se([u({type:Boolean})],ve.prototype,"multiSelect",2);Se([u({type:Boolean})],ve.prototype,"folderSelectable",2);Se([u({type:String})],ve.prototype,"gridSize",2);ve=Se([E("ap-grid-view")],ve);var _n=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var a=i>1?void 0:i?yn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&_n(e,s,a),a};const xn=5;let ee=class extends w{constructor(){super(...arguments),this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(a=>t.has(a.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(a=>s.has(a.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return n`
      <div class="list-header" style="grid-template-columns: ${this._getGridColumns(this.multiSelect)}" role="row" aria-label="Column headers">
        ${this.multiSelect?n`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${s?"checked":e>0?"indeterminate":""}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`:g}
        <span></span>
        <span>Name</span>
        <span>Type</span>
        ${this._compactLevel<2?n`<span>Size</span>`:g}
        ${this._compactLevel<1?n`<span>Date</span>`:g}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((i,a)=>n`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              .index=${a}
              data-folder-uuid=${i.uuid}
              @folder-open=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:o.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:o.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,a)=>n`
            <ap-asset-row
              .asset=${i}
              .index=${this.folderSelectable?this.folders.length+a:a}
              ?selected=${this.selectedIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${i.uuid}
              @asset-select=${o=>this.dispatchEvent(new CustomEvent("asset-select",{detail:o.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${o=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:o.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${o=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:o.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:xn},(i,a)=>{const o=["70%","55%","80%","45%","65%"];return n`
                <div class="ghost-row" style="grid-template-columns: ${this._getGridColumns(this.multiSelect)}">
                  ${this.multiSelect?n`<div class="ghost-el ghost-check"></div>`:g}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" style="width: ${o[a]}"></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?n`<div class="ghost-el ghost-size"></div>`:g}
                  ${this._compactLevel<1?n`<div class="ghost-el ghost-date"></div>`:g}
                  <div></div>
                </div>
              `}):g}
      </div>
    `}};ee.styles=C`
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
  `;me([u({type:Array})],ee.prototype,"assets",2);me([u({type:Array})],ee.prototype,"folders",2);me([u({type:Array})],ee.prototype,"selectedIds",2);me([u({type:Array})],ee.prototype,"selectedFolderIds",2);me([u({type:Boolean})],ee.prototype,"isLoading",2);me([u({type:Boolean})],ee.prototype,"multiSelect",2);me([u({type:Boolean})],ee.prototype,"folderSelectable",2);me([u({type:Number})],ee.prototype,"totalCount",2);me([u({type:Boolean})],ee.prototype,"isSelectingAll",2);me([u({type:Object})],ee.prototype,"folderPreviews",2);me([_()],ee.prototype,"_compactLevel",2);ee=me([E("ap-list-view")],ee);function ti(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function ps(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function ya(t,e){return!t||!e?"":`${t} x ${e}`}var $n=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,Xt=(t,e,s,i)=>{for(var a=i>1?void 0:i?wn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&$n(e,s,a),a};let st=class extends w{constructor(){super(...arguments),this.index=0,this.selected=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),a=o=>String(o).padStart(2,"0");return e>0?`${e}:${a(s)}:${a(i)}`:`${a(s)}:${a(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var c,p,h,f,d;const t=this.asset;if(!t)return n``;const s=gt(t.type)==="video",i=((c=t.extension)==null?void 0:c.toLowerCase())==="pdf",a=ia(t.extension||"");let o="";s?o=oa(t):i?o=Ys(t):a&&(o=cs(t));const r=Qt(t.extension||""),l=Qs(t.extension||"");return n`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${l&&o?"chess":""}">
          ${o?n`<img
                src=${o}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${l?"transparent-asset":""}"
                @error=${v=>{const m=v.target,x=bt();m.src!==r&&m.src!==x?(m.src=r,m.classList.add("icon-fallback")):m.src!==x&&(m.src=x)}}
              />`:n`<img
                src=${r}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${v=>{const m=v.target,x=bt();m.src!==x&&(m.src=x)}}
              />`}
          ${s&&(((p=t.info)==null?void 0:p.video_duration)??((h=t.info)==null?void 0:h.duration))!=null?n`<span class="duration">${this._formatDuration(t.info.video_duration??t.info.duration)}</span>`:g}
          <div class="overlay">
            <button class="overlay-btn" @click=${this._handlePreview} aria-label="Preview">
              <ap-icon name="preview" .size=${16}></ap-icon>
              Preview
            </button>
            <button class="overlay-btn select-btn" @click=${this._handleQuickSelect} aria-label="Select">
              <ap-icon name="select" .size=${16}></ap-icon>
              Select
            </button>
          </div>
          ${this.multiSelect?n`
            <div class="check">
              <div class="check-box">
                <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
            </div>
          `:g}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">${(f=t.extension)==null?void 0:f.toUpperCase()}${(()=>{var $,L,k,j;const v=(($=t.info)==null?void 0:$.img_w)||((L=t.info)==null?void 0:L.video_w),m=((k=t.info)==null?void 0:k.img_h)||((j=t.info)==null?void 0:j.video_h),x=ya(v,m);return x?` · ${x}`:""})()} · ${ti(((d=t.size)==null?void 0:d.bytes)||0)}</div>
        </div>
      </div>
    `}};st.styles=C`
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
  `;Xt([u({type:Object})],st.prototype,"asset",2);Xt([u({type:Number})],st.prototype,"index",2);Xt([u({type:Boolean,reflect:!0})],st.prototype,"selected",2);Xt([u({type:Boolean})],st.prototype,"multiSelect",2);st=Xt([E("ap-asset-card")],st);var kn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var a=i>1?void 0:i?Sn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&kn(e,s,a),a};let Ne=class extends w{constructor(){super(...arguments),this.index=0,this.selected=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var c,p,h;const t=this.asset;if(!t)return n``;const s=gt(t.type)==="video",i=((c=t.extension)==null?void 0:c.toLowerCase())==="pdf",a=ia(t.extension||"");let o="";s?o=oa(t):i?o=Ys(t):a&&(o=cs(t));const r=Qt(t.extension||""),l=Qs(t.extension||"");return n`
      <div class="row" style="grid-template-columns: ${this._getGridColumns()}" @click=${this._handleSelect}>
        ${this.multiSelect?n`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:g}
        <div class="thumb ${l&&o?"chess":""}">
          ${o?n`<img
                src=${o}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${f=>{const d=f.target,v=bt();d.src!==r&&d.src!==v?(d.src=r,d.classList.add("icon-fallback")):d.src!==v&&(d.src=v)}}
              />`:n`<img
                src=${r}
                alt=${t.name}
                class="icon-fallback"
                @error=${f=>{const d=f.target,v=bt();d.src!==v&&(d.src=v)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(p=t.extension)==null?void 0:p.toUpperCase()}</div>
        ${this.compactLevel<2?n`<div class="desc">${ti(((h=t.size)==null?void 0:h.bytes)||0)}</div>`:g}
        ${this.compactLevel<1?n`<div class="date">${ps(t.created_at||"")}</div>`:g}
        <div class="actions">
          <button class="icon-btn select-btn" @click=${this._handleQuickSelect} aria-label="Select" title="Select">
            <ap-icon name="select" .size=${16}></ap-icon>
          </button>
          <button class="icon-btn" @click=${this._handlePreview} aria-label="Preview" title="Preview">
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};Ne.styles=C`
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
  `;At([u({type:Object})],Ne.prototype,"asset",2);At([u({type:Number})],Ne.prototype,"index",2);At([u({type:Boolean,reflect:!0})],Ne.prototype,"selected",2);At([u({type:Boolean})],Ne.prototype,"multiSelect",2);At([u({type:Number})],Ne.prototype,"compactLevel",2);Ne=At([E("ap-asset-row")],Ne);var Cn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,nt=(t,e,s,i)=>{for(var a=i>1?void 0:i?An(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Cn(e,s,a),a};let Fe=class extends w{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return ra(t,"200")}_renderPreviewImg(t){const e=aa(t.file_type),s=this._getPreviewUrl(t),i=Qt(bs(t.file_type)),a=bt();return n`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${o=>{const r=o.target,l=r.parentElement;r.src!==i&&r.src!==a?(r.src=i,r.classList.add("icon-mode"),l==null||l.classList.add("icon-bg")):r.src!==a&&(r.src=a,r.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
        @load=${o=>{const r=o.target,l=r.parentElement;r.src.includes("assets/file-types")&&(r.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return n`<div class="empty-preview"><ap-icon name="inbox" .size=${64}></ap-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?n`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:n`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?n`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:g}
        </div>
      </div>
    `}render(){var a,o;const t=this.folder;if(!t)return n``;const e=((a=t.count)==null?void 0:a.files_direct)??0,i=(((o=t.count)==null?void 0:o.files_recursive)??0)-e;return n`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                rx="3" ry="3" />
        </svg>
        ${this.selectable&&this.multiSelect?n`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:g}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e!==1?"s":""}</span>
              ${i>0?n`<span>${i} sub-asset${i!==1?"s":""}</span>`:g}
            </div>
          </div>
        </div>
      </div>
    `}};Fe.styles=[te,C`
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
  `];nt([u({type:Object})],Fe.prototype,"folder",2);nt([u({type:Array})],Fe.prototype,"previews",2);nt([u({type:Boolean,reflect:!0})],Fe.prototype,"selected",2);nt([u({type:Boolean})],Fe.prototype,"selectable",2);nt([u({type:Boolean})],Fe.prototype,"multiSelect",2);nt([u({type:Number})],Fe.prototype,"index",2);Fe=nt([E("ap-folder-card")],Fe);var En=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,Be=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&En(e,s,a),a};let $e=class extends w{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=aa(t.file_type),s=ra(t,"80"),i=Qt(bs(t.file_type)),a=bt();return n`<div class="preview-slot ${e?"icon-bg":""}"><img
      class="preview-img ${e?"icon-mode":""}"
      src="${s||i}"
      alt=""
      loading="lazy"
      @error=${o=>{const r=o.target,l=r.parentElement;r.src!==i&&r.src!==a?(r.src=i,r.classList.add("icon-mode"),l==null||l.classList.add("icon-bg")):r.src!==a&&(r.src=a,r.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
    /></div>`}_renderThumb(){const t=n`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
              />
      </svg>
    `,e=this.previews.slice(0,2);return n`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):n`<div class="empty-preview">
              <ap-icon name="inbox" .size=${14}></ap-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?n`
      <div class="row" style="grid-template-columns: ${this._getGridColumns()}" @click=${this._handleClick}>
        ${this.multiSelect?this.selectable?n`
              <div class="check">
                <div class="check-box">
                  <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>`:n`<div></div>`:g}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?n`<div class="meta">${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items</div>`:g}
        ${this.compactLevel<1?n`<div class="meta">${ps(t.modified_at||t.updated_at||"")}</div>`:g}
        <div></div>
      </div>
    `:n``}};$e.styles=C`
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
  `;Be([u({type:Object})],$e.prototype,"folder",2);Be([u({type:Array})],$e.prototype,"previews",2);Be([u({type:Boolean,reflect:!0})],$e.prototype,"selected",2);Be([u({type:Boolean})],$e.prototype,"selectable",2);Be([u({type:Boolean})],$e.prototype,"multiSelect",2);Be([u({type:Number})],$e.prototype,"index",2);Be([u({type:Number})],$e.prototype,"compactLevel",2);$e=Be([E("ap-folder-row")],$e);var Tn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,si=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ln(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Tn(e,s,a),a};let jt=class extends w{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return n``;const e=t.assets_count??0,s=t.color||"#94a3b8";return n`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" style="background: color-mix(in srgb, ${s} 10%, transparent)">
          <ap-icon name="tag" .size=${18} style="color: ${s}"></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};jt.styles=[te,C`
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
  `];si([u({type:Object})],jt.prototype,"label",2);si([u({type:Number})],jt.prototype,"index",2);jt=si([E("ap-label-card")],jt);var On=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,ii=(t,e,s,i)=>{for(var a=i>1?void 0:i?Pn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&On(e,s,a),a};let Nt=class extends w{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return n``;const e=t.assets_count??0,s=t.color||"#94a3b8";return n`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" style="background: color-mix(in srgb, ${s} 10%, transparent)">
          <ap-icon name="tag" .size=${16} style="color: ${s}"></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};Nt.styles=C`
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
  `;ii([u({type:Object})],Nt.prototype,"label",2);ii([u({type:Number})],Nt.prototype,"index",2);Nt=ii([E("ap-label-row")],Nt);var Mn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,ai=(t,e,s,i)=>{for(var a=i>1?void 0:i?In(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Mn(e,s,a),a};let Ut=class extends w{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?n`
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
    `:n``}};Ut.styles=[te,C`
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
  `];ai([u({type:Object})],Ut.prototype,"collection",2);ai([u({type:Number})],Ut.prototype,"index",2);Ut=ai([E("ap-collection-card")],Ut);var Dn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,oi=(t,e,s,i)=>{for(var a=i>1?void 0:i?zn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Dn(e,s,a),a};let Bt=class extends w{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?n`
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
    `:n``}};Bt.styles=C`
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
  `;oi([u({type:Object})],Bt.prototype,"collection",2);oi([u({type:Number})],Bt.prototype,"index",2);Bt=oi([E("ap-collection-row")],Bt);var Rn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,ri=(t,e,s,i)=>{for(var a=i>1?void 0:i?jn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Rn(e,s,a),a};let Vt=class extends w{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?n`
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
    `:n``}};Vt.styles=[te,C`
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
  `];ri([u({type:Object})],Vt.prototype,"folder",2);ri([u({type:Number})],Vt.prototype,"index",2);Vt=ri([E("ap-collection-folder-card")],Vt);var Nn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,ni=(t,e,s,i)=>{for(var a=i>1?void 0:i?Un(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Nn(e,s,a),a};let qt=class extends w{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?n`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:n``}};qt.styles=C`
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
  `;ni([u({type:Object})],qt.prototype,"folder",2);ni([u({type:Number})],qt.prototype,"index",2);qt=ni([E("ap-collection-folder-row")],qt);var Bn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Zt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Vn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Bn(e,s,a),a};let it=class extends w{constructor(){super(...arguments),this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const r=this.gridSize==="large"?"280px":"220px";return n`
        <div class="grid-skeleton" style="--ap-grid-min-col: ${r}">
          ${Array.from({length:18},()=>n`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=n`
      <div class="row-skel" style="grid-template-columns: ${e}">
        ${this.multiSelect?n`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z" />
          </svg>
        </div>
        <div class="skeleton row-skel-name" style="width: 55%"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,i=r=>n`
      <div class="row-skel" style="grid-template-columns: ${e}">
        ${this.multiSelect?n`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" style="width: ${r}"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,a=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],o=12-this.folderCount;return n`
      <div class="list-header" style="grid-template-columns: ${e}">
        ${this.multiSelect?n`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>Name</span>
        <span>Type</span>
        <span>Size</span>
        <span>Date</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:o},(r,l)=>i(a[l%a.length]))}
    `}};it.styles=C`
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
  `;Zt([u({reflect:!0})],it.prototype,"variant",2);Zt([u({type:String})],it.prototype,"gridSize",2);Zt([u({type:Boolean})],it.prototype,"multiSelect",2);Zt([u({type:Number})],it.prototype,"folderCount",2);it=Zt([E("ap-skeleton")],it);var qn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,K=(t,e,s,i)=>{for(var a=i>1?void 0:i?Hn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&qn(e,s,a),a};let V=class extends w{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=gt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,a;const e=ho(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:o}=await I(async()=>{const{default:l}=await import("./hls.light-8mz_AqX7.js");return{default:l}},[]);if(!o.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const r=new o;this._hls=r,r.loadSource(e),r.attachMedia(s),r.on(o.Events.ERROR,(l,c)=>{var p;c.fatal&&(this._destroyHls(),s.src=((p=t.url)==null?void 0:p.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,a,o,r;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(i=this.asset)==null?void 0:i.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(r=(o=this.previewArea)==null?void 0:o.requestFullscreen)==null||r.call(o)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=gt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var i,a;const e=(i=t.url)==null?void 0:i.cdn;if(!e)return cs(t)||"";if(((a=t.extension)==null?void 0:a.toLowerCase())==="svg")return e;const s=_t(e,this.containerToken);return Ze(s,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"})}_getBlurDimensions(t){var r,l;const e=(r=t.info)==null?void 0:r.img_w,s=(l=t.info)==null?void 0:l.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,a=window.innerHeight,o=Math.min(i/e,a/s,1);return{width:`${Math.round(e*o)}px`,height:`${Math.round(s*o)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(a=>!a.label||i.has(a.sid)?!1:(i.add(a.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:y.TAGS,values:[t],operator:T.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:y.LABELS,values:[t],operator:T.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return g;const s=this._openSections.has("file-info");return n`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s?"true":"false"}
          @click=${()=>this._toggleSection("file-info")}
        >
          <span>File info</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${s?"open":""}">
          ${e.map(i=>n`
            <div class="meta-row">
              <span class="meta-label" title=${i.label}>${i.label}</span>
              <span class="meta-value" title=${i.value}>${i.value}</span>
            </div>
          `)}
          ${this._renderTagsRow(t)}
          ${this._renderLabelsRow(t)}
        </div>
      </div>
    `}_renderAccordion(t,e,s){if(s.length===0)return g;const i=this._openSections.has(t);return n`
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
          ${s.map(a=>n`
            <div class="meta-row">
              <span class="meta-label" title=${a.label}>${a.label}</span>
              <span class="meta-value" title=${a.value}>${a.value}</span>
            </div>
          `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,a,o,r,l;const e=[];return e.push({label:"File name",value:t.name}),t.extension&&e.push({label:"Type",value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:"Size",value:ti(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:"Dimensions",value:ya(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:"Video resolution",value:`${t.info.video_w} x ${t.info.video_h}`}),(((o=t.info)==null?void 0:o.video_duration)??((r=t.info)==null?void 0:r.duration))!=null&&e.push({label:"Duration",value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(l=t.info)!=null&&l.color_space&&e.push({label:"Color space",value:t.info.color_space}),t.created_at&&e.push({label:"Created",value:ps(t.created_at)}),t.modified_at&&e.push({label:"Modified",value:ps(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const a=t[i];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var o,r,l,c;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const p=t;for(const h of this.metadataFields){const f=p[h.key]??((r=(o=t.info)==null?void 0:o.metadata)==null?void 0:r[h.key])??((l=t.meta)==null?void 0:l[h.key]),d=this._resolveFieldValue(f,h);if(!d)continue;i.add(h.key),h.slug&&i.add(h.slug);const v=d.length>50;e.push({label:h.label,value:d,wrap:v})}}if(t.meta)for(const[p,h]of Object.entries(t.meta)){if(i.has(p)||h==null||h==="")continue;const f=s.get(p);if(f){const d=this._resolveFieldValue(h,f);if(!d)continue;i.add(p);const v=d.length>50;e.push({label:f.label,value:d,wrap:v})}else{const d=typeof h=="object"?JSON.stringify(h):String(h);if(!d||d==="{}"||d==="[]")continue;i.add(p);const v=p.charAt(0).toUpperCase()+p.slice(1).replace(/_/g," "),m=d.length>50;e.push({label:v,value:d,wrap:m})}}const a=(c=t.info)==null?void 0:c.metadata;if(a&&typeof a=="object")for(const[p,h]of Object.entries(a)){if(i.has(p)||h==null||h==="")continue;const f=s.get(p);if(f){const d=this._resolveFieldValue(h,f);if(!d)continue;i.add(p);const v=d.length>50;e.push({label:f.label,value:d,wrap:v})}else{const d=typeof h=="object"?JSON.stringify(h):String(h);if(!d||d==="{}"||d==="[]")continue;i.add(p);const v=p.charAt(0).toUpperCase()+p.slice(1).replace(/_/g," "),m=d.length>50;e.push({label:v,value:d,wrap:m})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?g:n`
      <div class="meta-row" style="flex-direction:column;gap:6px">
        <span class="meta-label">Labels</span>
        <div class="tags-list">
          ${e.map(s=>n`
            <ap-badge class="tag-link" style="--ap-muted: ${s.color}22; --ap-muted-foreground: ${s.color}" @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}>
              <span style="display:inline-flex;align-items:center;gap:4px">
                <ap-icon name="tag" .size=${12} style="color:${s.color}"></ap-icon>
                ${s.name}
              </span>
            </ap-badge>
          `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?g:n`
      <div class="meta-row">
        <span class="meta-label">Tags</span>
        <div class="tags-list">
          ${e.map(s=>n`
            <ap-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}>${s.label}</ap-badge>
          `)}
        </div>
      </div>
    `}render(){var A,F,P,M,xe,ce,R,ie;const t=this.asset;if(!t)return g;const e=gt(t.type),s=e==="image",i=e==="video",a=e==="audio",o=((A=t.extension)==null?void 0:A.toLowerCase())==="pdf",r=Qt(t.extension||""),l=Qs(t.extension||""),c=((F=t.extension)==null?void 0:F.toLowerCase())==="svg",p=cs(t),h=s?c?((P=t.url)==null?void 0:P.cdn)||"":p||_t(((M=t.url)==null?void 0:M.cdn)||"",this.containerToken):"",f=s?this._getFullscreenImageUrl(t):"",d=s&&!c?this._getBlurDimensions(t):null,v=i&&((xe=t.url)==null?void 0:xe.cdn)||"",m=i&&(((ce=t.info)==null?void 0:ce.video_thumbnail)||((R=t.info)==null?void 0:R.preview))||"",x=o&&!s?Ys(t):"",$=this._getCurrentIndex(),L=$>0&&this._findNavTarget($,-1)>=0,k=$>=0&&this._findNavTarget($,1)>=0,j=this.assets.length>1;return n`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!s&&!i&&!a&&!o} aria-label="Fullscreen" title="Full screen">
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}" @click=${this._select} aria-label="Select" title="Select the asset">
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s&&l?"chess":""}">
          ${j?n`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!L} aria-label="Previous">
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!k} aria-label="Next">
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:g}
          ${this._isFullscreen?n`
            <button class="fs-close-btn" @click=${this._exitFullscreen} aria-label="Exit fullscreen">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          `:g}
          ${this._previewLoading?n`<div class="preview-loading"><div class="spinner"></div></div>`:g}
          ${s?n`
            <img
              src=${h}
              alt=${t.name}
              @load=${ae=>{ae.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${ae=>{const B=ae.target;this._previewLoading=!1,B.src!==r&&(B.src=r,B.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              ${c?g:n`
                <img
                  class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                  src=${h}
                  alt=""
                  style="width:${d.width};height:${d.height}"
                />
              `}
              <img
                class="fs-full ${c||this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?f:""}
                alt=${t.name}
                style=${c?"width:100vw;height:100vh":""}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:g}
          ${i?n`<video src=${v} poster=${m||g} controls controlsList="nofullscreen" @loadeddata=${()=>{this._previewLoading=!1}} @error=${()=>{this._previewLoading=!1}}></video>`:g}
          ${a?n`<audio src=${((ie=t.url)==null?void 0:ie.cdn)||""} controls></audio>`:g}
          ${o&&!s?n`
            <img
              src=${x||r}
              alt=${t.name}
              class=${x?"":"icon-fallback"}
              @error=${ae=>{const B=ae.target;B.src!==r&&(B.src=r,B.classList.add("icon-fallback"))}}
            />
          `:g}
          ${!s&&!i&&!a&&!o?n`<img src=${r} alt=${t.name} class="icon-fallback" />`:g}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?n`
          ${this._renderAccordion("metadata","Metadata",this._getAllMetadataRows(t))}
        `:g}
      </div>
    `}};V.styles=C`
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
  `;K([u({type:Object})],V.prototype,"asset",2);K([u({type:Array})],V.prototype,"assets",2);K([u({type:Array})],V.prototype,"selectedIds",2);K([u()],V.prototype,"containerToken",2);K([u({type:Boolean})],V.prototype,"showMetadata",2);K([u({type:Array})],V.prototype,"metadataFields",2);K([u({type:Array})],V.prototype,"labels",2);K([u({type:Object})],V.prototype,"regionalFilters",2);K([u({type:Boolean})],V.prototype,"multiSelect",2);K([at(".preview-area")],V.prototype,"previewArea",2);K([at("video")],V.prototype,"_videoEl",2);K([_()],V.prototype,"_isFullscreen",2);K([_()],V.prototype,"_fsImageLoaded",2);K([_()],V.prototype,"_previewLoading",2);K([_()],V.prototype,"_openSections",2);V=K([E("ap-preview-panel")],V);var Gn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,li=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Gn(e,s,a),a};const Qn={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let Ht=class extends w{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=Qn[this.name];if(!t)return g;const e=typeof t=="string"?De`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:a}=s;return i==="circle"?De`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:i==="rect"?De`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:De`<path d=${a.d}></path>`});return n`
      <svg
        style="--icon-size: ${this.size}px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${e}
      </svg>
    `}};Ht.styles=[C`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];li([u()],Ht.prototype,"name",2);li([u({type:Number})],Ht.prototype,"size",2);Ht=li([E("ap-icon")],Ht);var Yn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Oe=(t,e,s,i)=>{for(var a=i>1?void 0:i?Wn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Yn(e,s,a),a};let _e=class extends w{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const t=this.selectedAssets.length,e=this.selectedFolders.length;if(e===0)return`${t} selected`;if(t===0)return`${e} folder${e!==1?"s":""} selected`;const s=`${e} folder${e!==1?"s":""}`,i=`${t} asset${t!==1?"s":""}`;return`${s} and ${i} selected`}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?g:n`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?n`
          <span class="divider"></span>
          <span class="select-label">Select:</span>
          ${this._canSelectMore()?n`<button
                class="bar-btn"
                ?disabled=${this.isSelectingAll}
                @click=${this._selectAll}
              ><ap-icon name="check-check" .size=${14}></ap-icon>${this.isSelectingAll?"Selecting...":this.maxSelections&&this.maxSelections<this._scopeTotal?`First ${this.maxSelections}`:this._selectScope==="assets"?"Select all assets":this._selectScope==="folders"?"Select all folders":"Select all"}</button>`:g}
          <button class="bar-btn" @click=${this._clear}><ap-icon name="close" .size=${14}></ap-icon>Deselect all</button>
          ${this.maxSelections&&this._totalSelected>=this.maxSelections?n`<span class="limit-notice">Max ${this.maxSelections} allowed</span>`:g}
        `:g}
        <div class="spacer"></div>
        ${this.showTransform?n`
          <button class="btn-confirm btn-transform" @click=${this._transform}>Transform</button>
        `:g}
        <button class="btn-confirm" @click=${this._confirm}>Confirm</button>
      </div>
    `}};_e.styles=C`
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
  `;Oe([u({type:Array})],_e.prototype,"selectedAssets",2);Oe([u({type:Array})],_e.prototype,"selectedFolders",2);Oe([u({type:Number})],_e.prototype,"totalCount",2);Oe([u({type:Number})],_e.prototype,"totalFolderCount",2);Oe([u({type:Boolean})],_e.prototype,"isSelectingAll",2);Oe([u({type:Boolean})],_e.prototype,"multiSelect",2);Oe([u({type:Number})],_e.prototype,"maxSelections",2);Oe([u({type:Boolean})],_e.prototype,"showTransform",2);_e=Oe([E("ap-selection-bar")],_e);var Xn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,ci=(t,e,s,i)=>{for(var a=i>1?void 0:i?Zn(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Xn(e,s,a),a};let Gt=class extends w{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?g:n`
      <div
        class="marquee"
        style="left:${this.rect.x}px;top:${this.rect.y}px;width:${this.rect.width}px;height:${this.rect.height}px"
      ></div>
    `}};Gt.styles=C`
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
  `;ci([u({type:Boolean})],Gt.prototype,"active",2);ci([u({type:Object})],Gt.prototype,"rect",2);Gt=ci([E("ap-marquee-overlay")],Gt);var Jn=Object.defineProperty,el=Object.getOwnPropertyDescriptor,lt=(t,e,s,i)=>{for(var a=i>1?void 0:i?el(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Jn(e,s,a),a};let Te=class extends w{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(a=>!this.disabled&&!a.disabled);if(e.length===0)return;const s=e.findIndex(a=>a.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return n`
      ${this.options.map(t=>n`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":g}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?n`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:g}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:e},bubbles:!0,composed:!0}))}};Te.styles=[te,C`
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
    `];lt([u()],Te.prototype,"value",2);lt([u({type:Array})],Te.prototype,"options",2);lt([u({type:Boolean})],Te.prototype,"disabled",2);lt([u({type:Boolean})],Te.prototype,"clearable",2);lt([u({reflect:!0})],Te.prototype,"direction",2);lt([u({reflect:!0})],Te.prototype,"columns",2);Te=lt([E("ap-radio-group")],Te);var tl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,xa=(t,e,s,i)=>{for(var a=i>1?void 0:i?sl(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&tl(e,s,a),a};let hs=class extends w{constructor(){super(...arguments),this.size=24}render(){return n`<div class="spinner" style="width:${this.size}px;height:${this.size}px"></div>`}};hs.styles=[C`
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
    `];xa([u({type:Number})],hs.prototype,"size",2);hs=xa([E("ap-spinner")],hs);var il=Object.defineProperty,al=Object.getOwnPropertyDescriptor,$s=(t,e,s,i)=>{for(var a=i>1?void 0:i?al(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&il(e,s,a),a};let $t=class extends w{constructor(){super(...arguments),this.folders=[],this.loading=!1,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return n`
      <div class="backdrop" @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}>
        <div class="dialog">
          <div class="title">Add folder contents</div>
          <div class="description">
            You selected ${t} folder${t!==1?"s":""}. How would you like to add the assets?
          </div>
          <div class="options">
            <ap-radio-group
              .value=${this._mode}
              .options=${[{value:"direct",label:"Direct assets only"},{value:"recursive",label:"All assets (including subfolders)"}]}
              @ap-change=${this._handleModeChange}
            ></ap-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>Cancel</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?n`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> Loading...</span>`:"Add assets"}
            </button>
          </div>
        </div>
      </div>
    `}};$t.styles=[te,C`
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
  `];$s([u({type:Array})],$t.prototype,"folders",2);$s([u({type:Boolean})],$t.prototype,"loading",2);$s([_()],$t.prototype,"_mode",2);$t=$s([E("ap-folder-resolve-dialog")],$t);var ol=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var a=i>1?void 0:i?rl(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&ol(e,s,a),a};let q=class extends w{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="ap-dropdown-menu";return n`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?n`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:g}
        ${this.label?n`<span class="label">${this.label}${t?": ":""}</span>`:g}${t?t.label:""}
        ${this.clearable&&t?n`<span class="clear-trigger" @click=${this._clear}><ap-icon name="close" .size=${12}></ap-icon></span>`:n`<ap-icon name="chevron-down" .size=${14}></ap-icon>`}
      </button>
      ${this._open?n`
        <div
          id=${e}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          style="
            ${this._menuPosition==="below"?`top: ${this._menuTop}px`:`bottom: ${this._menuBottom}px`};
            ${this._menuAlign==="align-left"?`left: ${this._menuLeft}px`:`right: ${this._menuRight}px`};
            ${this._menuWidth?`min-width: ${this._menuWidth}px`:""};
          "
          role="listbox"
          @keydown=${this._handleMenuKeydown}
        >
          ${this.options.map((s,i)=>n`
              <button
                class="option ${i===this._focusedIndex?"focused":""}"
                role="option"
                aria-selected=${s.value===this.value}
                @click=${()=>this._select(s.value)}
                @mouseenter=${()=>{this._focusedIndex=i}}
              >
                <span class="option-label">
                  ${s.icon?n`<ap-icon name=${s.icon} .size=${16}></ap-icon>`:g}
                  ${s.label}
                </span>
                ${s.value===this.value?n`<ap-icon name="check" .size=${14}></ap-icon>`:g}
              </button>
            `)}
        </div>
      `:g}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const a=window.innerWidth-t.left;this._menuAlign=a<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,a;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(a=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};q.styles=[te,C`
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
    `];W([u()],q.prototype,"value",2);W([u()],q.prototype,"label",2);W([u({reflect:!0})],q.prototype,"variant",2);W([u({type:Boolean})],q.prototype,"clearable",2);W([u({type:Array})],q.prototype,"options",2);W([_()],q.prototype,"_open",2);W([_()],q.prototype,"_focusedIndex",2);W([_()],q.prototype,"_menuPosition",2);W([_()],q.prototype,"_menuAlign",2);W([_()],q.prototype,"_menuTop",2);W([_()],q.prototype,"_menuBottom",2);W([_()],q.prototype,"_menuLeft",2);W([_()],q.prototype,"_menuRight",2);W([_()],q.prototype,"_menuWidth",2);q=W([E("ap-dropdown")],q);var nl=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,Pe=(t,e,s,i)=>{for(var a=i>1?void 0:i?ll(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&nl(e,s,a),a};const cl=["webp","jpeg","png","gif"];function dl(t){const e=(t??"").toLowerCase();return cl.includes(e)?e:"jpeg"}let ye=class extends w{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>ut(i));if(!t)return 1.5;const e=zi(t),s=Ri(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>ut(e));if(this._defaultFormat=dl(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=zi(t),s=Ri(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return n`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">Export Options</div>
            <button class="close-btn" @click=${this._handleClose} title="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">Format</span>
            <ap-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${fo}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${t?g:n`
            <div class="section">
              <span class="section-label">Quality</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${go}
                @ap-change=${this._handleQualityChange}
              ></ap-dropdown>
            </div>
          `}

          <div class="section">
            <span class="section-label">Size</span>
            ${this.isMultiSelect?n`
              <div class="input-group half-width">
                <span class="input-label">Max Size</span>
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
            `:n`
              <div class="dimensions-row">
                <div class="input-group">
                  <span class="input-label">Width</span>
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
                  title=${this._lockAspect?"Unlock aspect ratio":"Lock aspect ratio"}
                >
                  <ap-icon name=${this._lockAspect?"lock":"link-2"} .size=${16}></ap-icon>
                </button>
                <div class="input-group">
                  <span class="input-label">Height</span>
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
              ${vo.map(e=>n`
                <button
                  class="preset-btn ${this._activePreset===e.value?"active":""}"
                  @click=${()=>this._handlePreset(e)}
                >${e.label}</button>
              `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>Export Original</button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>Apply & Export</button>
          </div>
        </div>
      </div>
    `}};ye.styles=[te,C`
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
  `];Pe([u({type:Array})],ye.prototype,"assets",2);Pe([u({type:Boolean})],ye.prototype,"isMultiSelect",2);Pe([_()],ye.prototype,"_format",2);Pe([_()],ye.prototype,"_quality",2);Pe([_()],ye.prototype,"_width",2);Pe([_()],ye.prototype,"_height",2);Pe([_()],ye.prototype,"_lockAspect",2);Pe([_()],ye.prototype,"_activePreset",2);ye=Pe([E("ap-transformation-dialog")],ye);var pl=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,ws=(t,e,s,i)=>{for(var a=i>1?void 0:i?hl(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&pl(e,s,a),a};let wt=class extends w{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return n`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg class="dash" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}><slot @slotchange=${this._onSlotChange}></slot></span>
    `}};wt.styles=[C`
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
    `];ws([u({type:Boolean,reflect:!0})],wt.prototype,"checked",2);ws([u({type:Boolean,reflect:!0})],wt.prototype,"indeterminate",2);ws([u({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);wt=ws([E("ap-checkbox")],wt);var ul=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,$a=(t,e,s,i)=>{for(var a=i>1?void 0:i?fl(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&ul(e,s,a),a};let us=class extends w{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return n`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};us.styles=[C`
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
    `];$a([_()],us.prototype,"open",2);us=$a([E("ap-popover")],us);var gl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,wa=(t,e,s,i)=>{for(var a=i>1?void 0:i?vl(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&gl(e,s,a),a};let fs=class extends w{constructor(){super(...arguments),this.variant="default"}render(){return n`<span class="badge"><slot></slot></span>`}};fs.styles=[C`
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
    `];wa([u({reflect:!0})],fs.prototype,"variant",2);fs=wa([E("ap-badge")],fs);var ml=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,ka=(t,e,s,i)=>{for(var a=i>1?void 0:i?bl(e,s):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&ml(e,s,a),a};let gs=class extends w{constructor(){super(...arguments),this.text=""}render(){return n`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};gs.styles=[C`
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
    `];ka([u()],gs.prototype,"text",2);gs=ka([E("ap-tooltip")],gs);var _l=Object.defineProperty,Jt=(t,e,s,i)=>{for(var a=void 0,o=t.length-1,r;o>=0;o--)(r=t[o])&&(a=r(e,s,a)||a);return a&&_l(e,s,a),a};const pi=class pi extends w{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,a;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((a=e.dataTransfer)==null?void 0:a.files)??[]);s.length>0&&this._openUploader(s)},this.store=Wa(),this.storeCtrl=new Xa(this,this.store),this.selectionCtrl=new Ja(this,this.store),this.infiniteScrollCtrl=new eo(this,()=>this._loadMore()),this.marqueeCtrl=new to(this,this.store)}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const s={folderSelection:!0,...e};this._initFailed=!1,this._normalizedForcedFilters=Bs(s.forcedFilters),this._initPromise=this._doInit(s).catch(()=>{this._initFailed=!0}),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}async _doInit(e){const s=lr(),i=s.sortBy??e.defaultSortBy??"created_at",a=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&pr(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:a}),this.apiClient=new so(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const x=await po(this.apiClient);this.apiClient.setSassKey(x),this.store.setState({sassKey:x})}const[o,r,l,c,p]=await Promise.allSettled([Uo(this.apiClient),ro(this.apiClient),co(this.apiClient),jo(this.apiClient),no(this.apiClient)]),h={};if(o.status==="fulfilled"){const{fields:x,regionalVariantGroups:$,regionalFilters:L,brandColor:k}=o.value;h.metadataFields=x,h.regionalVariantGroups=$,h.regionalFilters=L,k&&(h.brandColor=k)}r.status==="fulfilled"&&(h.labels=r.value.labels||[]),l.status==="fulfilled"&&(h.tags=l.value),p.status==="fulfilled"&&(h.collections=p.value.collections||[]),c.status==="fulfilled"&&(h.fileTypes=c.value);const{pinnedFilters:f,pinnedMetadata:d}=or(e.auth.projectToken??null),v=this.store.getState().filters;h.filters={...v,pinned:f,visible:[...f],metadata:{...v.metadata,pinned:d,visible:[...d]}},this.store.setState(h);const m=e.brandColor||h.brandColor||this.store.getState().brandColor;m&&(h.brandColor||this.store.setState({brandColor:m}),mr(this,m))}catch(o){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"init"},bubbles:!0,composed:!0})),o}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=I(()=>import("./define-BSvUtYAu.js").then(e=>e.d),[]).then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let a;return e.auth.mode==="securityTemplate"?a={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:a={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:a,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(a){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a instanceof Error?a:new Error(String(a)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var p,h,f,d,v,m,x;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},a=Bs((p=this.config)==null?void 0:p.defaultFilters);for(const[$,L]of Object.entries(a))s.has($)||(i[$]=L);const o=Object.keys(i),r=((h=this.config)==null?void 0:h.tabs)??["assets","folders"],l=(f=this.config)!=null&&f.rememberLastTab?ur(this.config.auth.projectToken):null,c=(l&&r.includes(l)?l:null)??((d=this.config)!=null&&d.defaultTab&&r.includes(this.config.defaultTab)?this.config.defaultTab:null)??r[0]??"assets";this.store.setState({isOpen:!0,activeTab:c,searchQuery:"",isAISearchActive:!!((v=this.config)!=null&&v.enableAISearch&&((m=this.config)!=null&&m.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...new Set([...e.filters.pinned,...o])],applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(c),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(c),((x=this.config)==null?void 0:x.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,a,o,r,l,c,p,h,f,d,v,m,x,$,L,k,j,A,F,P,M,xe,ce,R,ie,ae,B,Ve,hi,ui,fi,gi,vi,mi,bi,_i,yi,xi,$i;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const ct=s.activeTab;if(ct==="assets"){const de=this._buildSearchNotation(),Me=s.currentFolderPath||"/",be=s.isAISearchActive&&!!s.searchQuery,pe=He(this.apiClient,{folder:Me,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:de||void 0,recursive:1,...be&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((i=s.config)==null?void 0:i.locale)??"en"}}),X=es(this.apiClient,{folder:Me,q:de||void 0,search:s.searchQuery||void 0,recursive:1,...be&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((a=s.config)==null?void 0:a.locale)??"en"}}).catch(()=>null),[Q,oe]=await Promise.all([pe,X]);if(e!==this._loadId)return;const re=((o=Q.files)==null?void 0:o.length)??0,H=re>=s.limit,ne=((r=oe==null?void 0:oe.stats)==null?void 0:r.approx_files_count)??((l=oe==null?void 0:oe.info)==null?void 0:l.total_files_count)??((c=Q.info)==null?void 0:c.total_files_count)??((h=(p=Q.base)==null?void 0:p.count)==null?void 0:h.files_recursive)??((d=(f=Q.base)==null?void 0:f.count)==null?void 0:d.files_direct)??re;this.store.setState({assets:Q.files||[],folders:[],totalCount:ne,totalFolderCount:0,offset:0,hasMore:H,isLoading:!1})}else if(ct==="folders"){const de=this._buildSearchNotation(),Me=s.currentFolderPath||"/",[be,pe,X]=await Promise.all([ao(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),He(this.apiClient,{folder:Me,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:de||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((v=s.config)==null?void 0:v.locale)??"en"}}),es(this.apiClient,{folder:Me,q:de||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((m=s.config)==null?void 0:m.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const Q=be.folders||[];let oe={};if(Q.length>0)try{oe=await oo(this.apiClient,Q.map(dt=>dt.uuid))}catch{}if(e!==this._loadId)return;const re=((x=pe.files)==null?void 0:x.length)??0,H=re>=s.limit,ne=(($=X==null?void 0:X.stats)==null?void 0:$.approx_files_count)??((L=X==null?void 0:X.info)==null?void 0:L.total_files_count)??((k=pe.info)==null?void 0:k.total_files_count)??((A=(j=pe.base)==null?void 0:j.count)==null?void 0:A.files_direct)??re;this.store.setState({assets:pe.files||[],folders:Q,folderPreviews:oe,totalCount:ne,totalFolderCount:be.total??Q.length,offset:0,hasMore:H,isLoading:!1})}else if(ct==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const de=s.labels.find(Ss=>Ss.uuid===s.activeLabelUuid);if(!de){this.store.setState({isLoading:!1});return}const Me=de.sid.replace("#",""),be=this._buildSearchNotation(),pe=`labels:${Me}${be?" "+be:""}`,X=s.isAISearchActive&&!!s.searchQuery,Q=He(this.apiClient,{folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:pe,recursive:1,...X&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((F=s.config)==null?void 0:F.locale)??"en"}}),oe=es(this.apiClient,{folder:"/",q:pe,search:s.searchQuery||void 0,recursive:1,...X&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((P=s.config)==null?void 0:P.locale)??"en"}}).catch(()=>null),[re,H]=await Promise.all([Q,oe]);if(e!==this._loadId)return;const ne=((M=re.files)==null?void 0:M.length)??0,dt=ne>=s.limit,ks=((xe=H==null?void 0:H.stats)==null?void 0:xe.approx_files_count)??((ce=H==null?void 0:H.info)==null?void 0:ce.total_files_count)??((R=re.info)==null?void 0:R.total_files_count)??((ae=(ie=re.base)==null?void 0:ie.count)==null?void 0:ae.files_recursive)??((Ve=(B=re.base)==null?void 0:B.count)==null?void 0:Ve.files_direct)??ne;this.store.setState({assets:re.files||[],folders:[],totalCount:ks,totalFolderCount:0,offset:0,hasMore:dt,isLoading:!1})}else if(ct==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const de=s.activeCollectionFolder;if(!(de&&!((hi=de.children)!=null&&hi.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const be=s.activeCollectionUuid,pe=de.filters||void 0,X=this._buildSearchNotation(),Q=s.isAISearchActive&&!!s.searchQuery,oe=He(this.apiClient,{offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:X||void 0,recursive:1,collection_uuid:be,f64:pe,...Q&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((ui=s.config)==null?void 0:ui.locale)??"en"}}),re=es(this.apiClient,{q:X||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:be,f64:pe,...Q&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((fi=s.config)==null?void 0:fi.locale)??"en"}}).catch(()=>null),[H,ne]=await Promise.all([oe,re]);if(e!==this._loadId)return;const dt=((gi=H.files)==null?void 0:gi.length)??0,ks=dt>=s.limit,Ss=((vi=ne==null?void 0:ne.stats)==null?void 0:vi.approx_files_count)??((mi=ne==null?void 0:ne.info)==null?void 0:mi.total_files_count)??((bi=H.info)==null?void 0:bi.total_files_count)??((yi=(_i=H.base)==null?void 0:_i.count)==null?void 0:yi.files_recursive)??(($i=(xi=H.base)==null?void 0:xi.count)==null?void 0:$i.files_direct)??dt;this.store.setState({assets:H.files||[],folders:[],totalCount:Ss,totalFolderCount:0,offset:0,hasMore:ks,isLoading:!1})}}catch(ct){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:ct,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var a,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((a=e.activeCollectionFolder.children)!=null&&a.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const r=this._buildSearchNotation();let l=r||void 0,c=e.currentFolderPath||"/",p=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const L=e.labels.find(k=>k.uuid===e.activeLabelUuid);L&&(l=`labels:${L.sid.replace("#","")}${r?" "+r:""}`),c="/",p=1}let h,f;e.activeTab==="collections"&&e.activeCollectionFolder&&(h=e.activeCollectionUuid||void 0,f=e.activeCollectionFolder.filters||void 0,c="",p=1);const d=await He(this.apiClient,{...c?{folder:c}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:p,...h&&{collection_uuid:h},...f&&{f64:f},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const v=this.store.getState().assets,m=d.files||[],x=m.length>=e.limit,$=[...v,...m];this.store.setState({assets:$,offset:i,hasMore:x,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var a;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((a=s.activeCollectionFolder.children)!=null&&a.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var o;const s=e.detail.active,i=this.store.getState(),a={isAISearchActive:s};i.searchQuery&&(s?a.sortBy="relevance":i.sortBy==="relevance"&&(a.sortBy=((o=this.config)==null?void 0:o.defaultSortBy)??"created_at"),a.offset=0,a.assets=[],a.folders=[],a.isLoading=!0),this.store.setState(a),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&dr(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Hi(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Hi(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,a;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&hr(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((a=this.config)==null?void 0:a.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&ut(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var a,o;const i={assets:e};s!=null&&s.length&&(i.folders=s),(o=(a=this.config)==null?void 0:a.onSelect)==null||o.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var o;const s=e.detail.folder,i=this.store.getState(),a=s.path||`${i.currentFolderPath}${s.name}/`;(o=this.config)!=null&&o.rememberLastFolder&&Gi(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var l,c;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const p=this._findCollectionFolder(i.activeCollectionFolders,s);if(p){const h=i.breadcrumb.findIndex(d=>d.uuid===s),f=i.breadcrumb.slice(0,h+1);this.store.setState({activeCollectionFolder:p,breadcrumb:f,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const a=s?i.breadcrumb.findIndex(p=>p.uuid===s):-1,o=s?i.breadcrumb.slice(0,a+1):[],r=o.length>0?o[o.length-1].path:((l=this.config)==null?void 0:l.rootFolderPath)||"/";(c=this.config)!=null&&c.rememberLastFolder&&Gi(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:r,breadcrumb:o,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await lo(this.apiClient,s.uuid),a=sa(i.folders||[]);this.store.setState({activeCollectionFolders:a,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var l;const s=e.detail.folder,i=this.store.getState(),a=s.path.split(" -> ").filter(Boolean),o=[{uuid:i.activeCollectionUuid,name:((l=i.breadcrumb[0])==null?void 0:l.name)||"Collection",path:""}];let r="";for(const c of a)r=r?`${r} -> ${c}`:c,o.push({uuid:r,name:c,path:r});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:o,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const a=this._findCollectionFolder(i.children,s);if(a)return a}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&cr(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const a=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),o=[];let r=s.endsWith("/")?s:s+"/";for(const l of a)r+=l+"/",o.push({uuid:r,name:l,path:r});return o}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var a,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var o,r;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((o=this.config)==null?void 0:o.folderSelection)!==!1&&((r=this.config)==null?void 0:r.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(ut).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var o;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),a=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const r=await Promise.all(i.map(d=>He(this.apiClient,{folder:d.path,recursive:s==="recursive"?1:0,limit:1e4}))),l=[];for(const d of r)l.push(...d.files);const c=[...a],p=new Set(c.map(d=>d.uuid));for(const d of l)p.has(d.uuid)||(c.push(d),p.add(d.uuid));const h=(o=this.config)==null?void 0:o.maxSelections,f=h?c.slice(0,h):c;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(f)}catch(r){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,a=this._transformAssets,o=this._transformFolders,r=a.length>1,l=$o(s,{isMultiSelect:r,isAspectLocked:i}),c=a.map(p=>{var v,m;if(!ut(p))return p;const h=(v=p.url)==null?void 0:v.cdn,f=(m=p.url)==null?void 0:m.permalink,d={cdn:h?Ze(h,l):""};return f&&(d.permalink_cdn=Ze(f,l)),{...p,transformation:{params:s,url:d}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(c,o.length?o:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}async _handleSelectAll(e){var c,p,h;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((c=s.config)==null?void 0:c.multiSelect)??!0))return;const a=((p=e==null?void 0:e.detail)==null?void 0:p.scope)??"all",o=a!=="assets"&&((h=this.config)==null?void 0:h.folderSelection)!==!1&&s.folders.length>0;if(!(a!=="folders")){o&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const l=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const f=this._buildSearchNotation();let d=s.currentFolderPath||"/";const v=s.limit,m=s.assets,x=s.totalCount;let $=s.activeTab==="folders"?0:1,L=f||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const R=s.labels.find(ie=>ie.uuid===s.activeLabelUuid);R&&(L=`labels:${R.sid.replace("#","")}${f?" "+f:""}`),d="/",$=1}let k,j;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,j=s.activeCollectionFolder.filters||void 0,d="",$=1);const A=[];for(let R=m.length;R<x;R+=v)A.push(R);const F=4,P=[];for(let R=0;R<A.length;R+=F){if(l!==this._selectAllId)return;const ie=A.slice(R,R+F),ae=await Promise.all(ie.map(B=>{var Ve;return He(this.apiClient,{...d?{folder:d}:{},offset:B,limit:v,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:L,recursive:$,...k&&{collection_uuid:k},...j&&{f64:j},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Ve=s.config)==null?void 0:Ve.locale)??"en"}})}));if(l!==this._selectAllId)return;for(const B of ae)B.files&&P.push(...B.files)}if(l!==this._selectAllId)return;const M=new Set(m.map(R=>R.uuid)),xe=P.filter(R=>M.has(R.uuid)?!1:(M.add(R.uuid),!0)),ce=[...m,...xe];this.store.setState({assets:ce,offset:Math.max(0,ce.length-v),hasMore:!1,isSelectingAll:!1}),o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(ce)}catch(f){if(l!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:f,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===y.DATE||e===y.LICENSE_EXPIRY||e===Z.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:a}=e.detail,r={...this.store.getState().filters};let l=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(c=>c==null||c===""||Array.isArray(c)&&c.length===0);if(!l&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:c,preset:p,from:h,to:f}=i;l=!c&&!p&&!h&&!f}if(l){const c={...r.applied};delete c[s],r.applied=c,r.pinned.includes(s)||(r.visible=r.visible.filter(p=>p!==s))}else{const c={...r.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?c[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===y.IMAGE&&typeof i=="object"&&!Array.isArray(i)?c[s]=i:c[s]={type:"string",values:Array.isArray(i)?i:[i],operator:a||":"},r.applied=c,r.visible.includes(s)||(r.visible=[...r.visible,s])}if(this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingFilter===s){this._pendingFilter=null;const c=this.renderRoot.querySelector("ap-filters-bar");c&&(c.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,a=this.renderRoot.querySelector("ap-content-toolbar");let o,r;if(i){const l=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(l){const c=l.getBoundingClientRect();o=i.left-c.left,r=i.bottom-c.top}}a==null||a.openFilterPanel(s,!0,o,r)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,a=this.renderRoot.querySelector("ap-content-toolbar");let o,r;if(i){const l=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(l){const c=l.getBoundingClientRect();o=i.left-c.left,r=i.bottom-c.top}}a==null||a.openMetadataFieldPanel(s,!0,o,r)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var d,v,m;const{key:s,metadataFieldKey:i}=e.detail,a=this.renderRoot.querySelector("ap-filters-bar"),o=this.renderRoot.querySelector("ap-content-toolbar");if(!a||!o)return;i?(this._pendingMetadataField=i,a.pendingMetadataField=i):s&&(this._pendingFilter=s,a.pendingFilter=s),await a.updateComplete;let r=a.renderRoot.querySelector(".chip.pending");if(!r){const x=a.renderRoot.querySelectorAll(".chip.pinned-empty"),$=i?(d=a._getMetadataLabel)==null?void 0:d.call(a,i):void 0;for(const L of x){const k=(m=(v=L.querySelector(".chip-label"))==null?void 0:v.textContent)==null?void 0:m.trim();if(i&&k===$){r=L;break}if(s&&k===(ft[s]||s)){r=L;break}}}if(!r)return;const l=r.getBoundingClientRect(),c=this.renderRoot.querySelector(".toolbar-filters-wrapper"),p=c==null?void 0:c.getBoundingClientRect(),h=p?l.left-p.left:l.left,f=p?l.bottom-p.top:void 0;i?o.openMetadataFieldPanel(i,!0,h,f):s&&o.openFilterPanel(s,!0,h,f)}_handleFilterRemove(e){var r;const s=e.detail.key;if(s in(((r=this.config)==null?void 0:r.forcedFilters)??{}))return;const a={...this.store.getState().filters},o={...a.applied};delete o[s],a.applied=o,a.pinned.includes(s)||(a.visible=a.visible.filter(l=>l!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:a,metadataType:o}=e.detail,l={...this.store.getState().filters},c={...l.metadata},p={...c.applied};if(!a||Array.isArray(a)&&a.length===0?(delete p[s],c.applied=p,c.pinned.includes(s)||(c.visible=c.visible.filter(f=>f!==s))):(p[s]={type:"string",values:Array.isArray(a)?a:[a],operator:i||":",metadataType:o},c.applied=p,c.visible.includes(s)||(c.visible=[...c.visible,s])),l.metadata=c,this.store.setState({filters:l,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const f=this.renderRoot.querySelector("ap-filters-bar");f&&(f.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,o={...this.store.getState().filters},r={...o.metadata};i?r.visible.includes(s)||(r.visible=[...r.visible,s]):r.visible=r.visible.filter(l=>l!==s),o.metadata=r,this.store.setState({filters:o})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},o={...a.metadata},r={...o.applied};delete r[s],o.applied=r,o.pinned.includes(s)||(o.visible=o.visible.filter(l=>l!==s)),a.metadata=o,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var l,c;const{key:s,pinned:i}=e.detail,o={...this.store.getState().filters};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(p=>p!==s),s in o.applied||(o.visible=o.visible.filter(p=>p!==s))),this.store.setState({filters:o});const r=((c=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:c.projectToken)??null;rr(r,o.pinned)}_handleMetadataPin(e){var c,p;const{fieldKey:s,pinned:i}=e.detail,o={...this.store.getState().filters},r={...o.metadata};i?r.pinned.includes(s)||(r.pinned=[...r.pinned,s]):(r.pinned=r.pinned.filter(h=>h!==s),s in r.applied||(r.visible=r.visible.filter(h=>h!==s))),o.metadata=r,this.store.setState({filters:o});const l=((p=(c=this.store.getState().config)==null?void 0:c.auth)==null?void 0:p.projectToken)??null;nr(l,r.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,a={...this.store.getState().filters};a.visible=a.visible.filter(o=>o!==s),this.store.setState({filters:a})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},o={...a.metadata};o.visible=o.visible.filter(r=>r!==s),a.metadata=o,this.store.setState({filters:a})}_handleFiltersSet(e){var p;const{applied:s,metadata:i}=e.detail,o={...this.store.getState().filters},r=new Set(Object.keys(((p=this.config)==null?void 0:p.forcedFilters)??{})),l={...s};for(const h of r)delete l[h];o.applied=l;const c=Object.keys(s);if(o.visible=[...new Set([...o.pinned,...c])],i){const h={...o.metadata};h.applied=i.applied;const f=Object.keys(i.applied);h.visible=[...new Set([...h.pinned,...f])],o.metadata=h}this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return yr;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return xr;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return $r}return e.searchQuery?br:e.activeTab==="folders"?_r:Xs}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return qo(s,e.filters.metadata.applied).join(" ")}render(){var d,v,m,x,$,L,k,j,A,F,P,M,xe,ce,R,ie,ae,B;const e=this.storeCtrl.state,s=Array.from(e.selectedAssets.keys()),i=Array.from(e.selectedFolders.keys()),a=this.selectionCtrl.getSelectedAssets(),o=this.selectionCtrl.getSelectedFolders(),r=((d=this.config)==null?void 0:d.folderSelection)!==!1,l=n`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((v=this.config)==null?void 0:v.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((m=e.activeCollectionFolder.children)!=null&&m.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((x=this.config)!=null&&x.enableAISearch)}
        .isAISearchActive=${e.isAISearchActive}
        .regionalGroups=${e.regionalVariantGroups}
        .regionalFilters=${e.regionalFilters}
        .hideClose=${this._isInline}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @ai-search-toggle=${this._handleAISearchToggle}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${()=>this._handleCancel("close-button")}
      ></ap-header>
    `,c=!!(($=this.config)!=null&&$.uploader),p=n`
      <div class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?n`
          <div class="drop-zone-overlay">
            <div class="drop-zone-label">
              <ap-icon name="upload" .size=${32}></ap-icon>
              Drop files to upload
            </div>
          </div>
        `:g}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(L=this.config)!=null&&L.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${c}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((k=e.activeCollectionFolder.children)!=null&&k.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?`${e.labels.length} label${e.labels.length!==1?"s":""}`:e.activeTab==="collections"&&!e.activeCollectionUuid?`${e.collections.length} collection${e.collections.length!==1?"s":""}`:e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((j=e.activeCollectionFolder.children)!=null&&j.length))?`${this._getVisibleCollectionFolders().length} folder${this._getVisibleCollectionFolders().length!==1?"s":""}`:""}
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
            ></ap-content-toolbar>

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((A=e.activeCollectionFolder.children)!=null&&A.length))?g:n`
            <ap-filters-bar
              .appliedFilters=${e.filters.applied}
              .appliedMetadata=${e.filters.metadata.applied}
              .metadataFields=${e.metadataFields}
              .tags=${e.tags}
              .labels=${e.labels}
              .pinnedFilters=${e.filters.pinned}
              .pinnedMetadataFields=${e.filters.metadata.pinned}
              .forcedFilters=${((F=this.config)==null?void 0:F.forcedFilters)??{}}
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

            ${e.breadcrumb.length>0?n`<ap-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?"Labels":e.activeTab==="collections"?"Collections":"Root"}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`:g}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((P=e.activeCollectionFolder.children)!=null&&P.length)))?n`<ap-skeleton .variant=${e.viewMode} .gridSize=${((M=this.config)==null?void 0:M.gridSize)??"normal"} .multiSelect=${((xe=this.config)==null?void 0:xe.multiSelect)!==!1} .folderCount=${2}></ap-skeleton>`:this._renderContent(e,s,i,r)}

          <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          ${this._folderResolveOpen?n`
            <ap-folder-resolve-dialog
              .folders=${o}
              .loading=${e.isResolvingFolders}
              @folder-resolve-confirm=${this._handleFolderResolveConfirm}
              @folder-resolve-cancel=${this._handleFolderResolveCancel}
            ></ap-folder-resolve-dialog>
          `:g}
          ${this._transformOpen?n`
            <ap-transformation-dialog
              .assets=${this._transformAssets}
              .isMultiSelect=${this._transformAssets.length>1}
              @transform-confirm=${this._handleTransformConfirm}
              @transform-skip=${this._handleTransformSkip}
              @transform-cancel=${this._handleTransformCancel}
            ></ap-transformation-dialog>
          `:g}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?n`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${s}
              .containerToken=${e.projectToken}
              .showMetadata=${((ce=this.config)==null?void 0:ce.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((R=this.config)==null?void 0:R.multiSelect)??!0}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:g}
      </div>
    `,h=n`
      <ap-selection-bar
        .selectedAssets=${a}
        .selectedFolders=${o}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((ie=this.config)==null?void 0:ie.multiSelect)??!0}
        .maxSelections=${(ae=this.config)==null?void 0:ae.maxSelections}
        .showTransform=${!!((B=this.config)!=null&&B.transformations)&&a.some(ut)}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,f=this._isUploaderOpen?n`
      <div class="uploader-overlay">
        <div class="uploader-body">${this._uploaderEl}</div>
      </div>
    `:g;return this._isInline?e.isOpen?n`
        <div class="ap-inline">
          ${this._isUploaderOpen?f:n`
            <div class="inline-header">${l}</div>
            <div class="inline-content">${p}</div>
            <div class="inline-footer">${h}</div>
          `}
        </div>
      `:g:n`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${Ve=>this._handleCancel(Ve.detail.reason)}
      >
        ${this._isUploaderOpen?f:n`
          <div slot="header">${l}</div>
          ${p}
          <div slot="footer">${h}</div>
        `}
      </ap-modal>
    `}_renderContent(e,s,i=[],a=!1){var o,r,l,c,p,h,f,d,v,m,x,$,L;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?n`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">No assets found</div>
            <div class="empty-desc">Try adjusting your search or filters</div>
          </div>
        `:e.viewMode==="grid"?n`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((o=this.config)==null?void 0:o.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((r=this.config)==null?void 0:r.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((l=this.config)==null?void 0:l.multiSelect)??!0}
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
      `;if(e.activeTab==="folders")return!e.isLoading&&e.folders.length===0&&e.assets.length===0?n`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">This folder is empty</div>
            <div class="empty-desc">No folders or files found here</div>
          </div>
        `:e.viewMode==="grid"?n`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((c=this.config)==null?void 0:c.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((p=this.config)==null?void 0:p.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((h=this.config)==null?void 0:h.multiSelect)??!0}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let k=e.labels;if(e.searchQuery){const A=e.searchQuery.toLowerCase();k=e.labels.filter(F=>F.name.toLowerCase().includes(A))}const j=e.sortDirection==="asc"?1:-1;return k=[...k].sort((A,F)=>j*A.name.localeCompare(F.name)),k.length===0?n`
            <div class="empty-state">
              <ap-icon name="tag" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?"No labels match your search":"No labels found"}</div>
              <div class="empty-desc">${e.searchQuery?"Try a different search term":"Labels will appear here once created"}</div>
            </div>
          `:e.viewMode==="grid"?n`
            <div class="labels-grid">
              ${k.map((A,F)=>n`
                <ap-label-card .label=${A} .index=${F} @label-open=${this._handleLabelOpen}></ap-label-card>
              `)}
            </div>
          `:n`
          <div class="labels-list">
            ${k.map((A,F)=>n`
              <ap-label-row .label=${A} .index=${F} @label-open=${this._handleLabelOpen}></ap-label-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?n`
          <div class="empty-state">
            <ap-icon name="tag" .size=${48}></ap-icon>
            <div class="empty-title">No assets in this label</div>
            <div class="empty-desc">Assets added to this label will appear here</div>
          </div>
        `:e.viewMode==="grid"?n`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((f=this.config)==null?void 0:f.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((d=this.config)==null?void 0:d.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((v=this.config)==null?void 0:v.multiSelect)??!0}
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let A=e.collections;if(e.searchQuery){const P=e.searchQuery.toLowerCase();A=e.collections.filter(M=>M.title.toLowerCase().includes(P))}const F=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?A=[...A].sort((P,M)=>F*(new Date(P.created_at).getTime()-new Date(M.created_at).getTime())):e.sortBy==="updated_at"?A=[...A].sort((P,M)=>F*(new Date(P.updated_at).getTime()-new Date(M.updated_at).getTime())):A=[...A].sort((P,M)=>F*P.title.localeCompare(M.title)),A.length===0?n`
            <div class="empty-state">
              <ap-icon name="layout-grid" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?"No collections match your search":"No collections found"}</div>
              <div class="empty-desc">${e.searchQuery?"Try a different search term":"Collections will appear here once created"}</div>
            </div>
          `:e.viewMode==="grid"?n`
            <div class="collections-grid">
              ${A.map((P,M)=>n`
                <ap-collection-card .collection=${P} .index=${M} @collection-open=${this._handleCollectionOpen}></ap-collection-card>
              `)}
            </div>
          `:n`
          <div class="collections-list">
            ${A.map((P,M)=>n`
              <ap-collection-row .collection=${P} .index=${M} @collection-open=${this._handleCollectionOpen}></ap-collection-row>
            `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return n`<div class="loading-center"><ap-spinner></ap-spinner></div>`;const k=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((m=e.activeCollectionFolder.children)==null?void 0:m.length)??0)>0){let A=k;if(e.searchQuery){const P=e.searchQuery.toLowerCase();A=k.filter(M=>M.name.toLowerCase().includes(P))}const F=e.sortDirection==="asc"?1:-1;return A=[...A].sort((P,M)=>F*P.name.localeCompare(M.name)),A.length===0?n`
            <div class="empty-state">
              <ap-icon name="folder" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?"No folders match your search":"No folders in this collection"}</div>
              <div class="empty-desc">${e.searchQuery?"Try a different search term":"Collection folders will appear here"}</div>
            </div>
          `:e.viewMode==="grid"?n`
            <div class="collection-folders-grid">
              ${A.map((P,M)=>n`
                <ap-collection-folder-card .folder=${P} .index=${M} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-card>
              `)}
            </div>
          `:n`
          <div class="collection-folders-list">
            ${A.map((P,M)=>n`
              <ap-collection-folder-row .folder=${P} .index=${M} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?n`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">No assets in this collection folder</div>
            <div class="empty-desc">Assets matching this collection's criteria will appear here</div>
          </div>
        `:e.viewMode==="grid"?n`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((x=this.config)==null?void 0:x.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${(($=this.config)==null?void 0:$.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((L=this.config)==null?void 0:L.multiSelect)??!0}
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
      `}return g}};pi.styles=[C`
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
    `];let Ue=pi;Jt([_()],Ue.prototype,"_isDragOver");Jt([_()],Ue.prototype,"_isUploaderOpen");Jt([_()],Ue.prototype,"_folderResolveOpen");Jt([_()],Ue.prototype,"_transformOpen");Jt([u({type:Object})],Ue.prototype,"config");typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",Ue);const yl=[{pattern:"/",load:()=>I(()=>import("./landing-qP0rvDEM.js"),__vite__mapDeps([0,1])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>I(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([2,3])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>I(()=>import("./configuration-B6uz8Wgq.js"),__vite__mapDeps([4,3])).then(t=>t.default)},{pattern:"/docs/api",load:()=>I(()=>import("./api-CCDTT8pr.js"),__vite__mapDeps([5,3])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>I(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([6,3])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>I(()=>import("./filters-BlL5oE1x.js"),__vite__mapDeps([7,3])).then(t=>t.default)},{pattern:"/docs/types",load:()=>I(()=>import("./types-BBGPzmmy.js"),__vite__mapDeps([8,3])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>I(()=>import("./basic-CP9UTXh_.js"),__vite__mapDeps([9,1])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>I(()=>import("./single-select-DPSl2kHs.js"),__vite__mapDeps([10,1])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>I(()=>import("./multi-select-BOoYOKVq.js"),__vite__mapDeps([11,1])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>I(()=>import("./theming-fS7VBs9t.js"),__vite__mapDeps([12,1])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>I(()=>import("./custom-theming-BRdIhNC5.js"),__vite__mapDeps([13,1])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>I(()=>import("./default-filters-B2THT-Cj.js"),__vite__mapDeps([14,1])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>I(()=>import("./forced-filters-B96I-gaB.js"),__vite__mapDeps([15,1])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>I(()=>import("./hidden-tabs-CLnVtsMG.js"),__vite__mapDeps([16,1])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>I(()=>import("./root-folder-Bi9IqJgc.js"),__vite__mapDeps([17,1])).then(t=>t.default)},{pattern:"/examples/events",load:()=>I(()=>import("./events-BzYWXCIl.js"),__vite__mapDeps([18,1])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>I(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([19,1])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>I(()=>import("./inline-B-AXSD1O.js"),__vite__mapDeps([20,1])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>I(()=>import("./sticky-filters-DB_0CzMT.js"),__vite__mapDeps([21,1])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>I(()=>import("./grid-size-CxwM7XZ9.js"),__vite__mapDeps([22,1])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>I(()=>import("./preferences-DEC9wHiX.js"),__vite__mapDeps([23,1])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>I(()=>import("./uploader-Bi-VXZb-.js"),__vite__mapDeps([24,1])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>I(()=>import("./folder-selection-CFGxlWH1.js"),__vite__mapDeps([25,1])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>I(()=>import("./ai-search-Cp_AnZza.js"),__vite__mapDeps([26,1])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>I(()=>import("./transformations-B5R949RJ.js"),__vite__mapDeps([27,1])).then(t=>t.default)}];let Tt=null,Qi=0;function xl(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),a=document.getElementById("sidebar-examples"),o=document.querySelectorAll(".topbar-nav-link");async function r(){const l=location.hash.slice(1)||"/",c=++Qi;Tt!=null&&Tt.destroy&&Tt.destroy(),t.close();const p=yl.find($=>$.pattern===l);if(!p){location.hash="#/";return}const h=l.startsWith("/docs/"),f=l.startsWith("/examples/"),d=h||f,v=l==="/";s.classList.toggle("hidden",!d),document.body.classList.toggle("has-sidebar",d),document.body.classList.toggle("is-home",v),i.classList.toggle("hidden",!h),a.classList.toggle("hidden",!f),s.querySelectorAll(".sidebar-link").forEach($=>{$.classList.toggle("active",$.getAttribute("data-route")===l)});const m=h?"docs":f?"examples":"home";o.forEach($=>{$.classList.toggle("active",$.getAttribute("data-section")===m)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const x=await p.load();c===Qi&&(Tt=x,e.innerHTML=x.render(),x.init&&x.init(t))}window.addEventListener("hashchange",r),r()}const di="ap-demo-auth",vs={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function $l(){try{const t=localStorage.getItem(di);if(t)return{...vs,...JSON.parse(t)}}catch{}return{...vs}}function wl(t){localStorage.setItem(di,JSON.stringify(t))}function Fl(t={}){const{projectToken:e,securityTemplateKey:s}=$l();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t}}function kl(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),a=document.getElementById("auth-save");try{const o=localStorage.getItem(di);if(o){const r=JSON.parse(o);s.value=r.projectToken??"",i.value=r.securityTemplateKey??""}}catch{}t.addEventListener("click",o=>{o.stopPropagation(),e.classList.toggle("hidden")}),a.addEventListener("click",()=>{wl({projectToken:s.value.trim()||vs.projectToken,securityTemplateKey:i.value.trim()||vs.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",o=>{!e.contains(o.target)&&!t.contains(o.target)&&e.classList.add("hidden")})}kl();const Sl=document.getElementById("sidebar-toggle"),Sa=document.getElementById("sidebar");Sl.addEventListener("click",()=>{Sa.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{Sa.classList.remove("mobile-open")});const Cl=document.getElementById("picker");xl(Cl);export{I as _,Fl as b};
