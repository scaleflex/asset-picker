const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C-k343nb.js","assets/class-map-Cc6OJzuc.js","assets/define-eDGYGgf-.js","assets/async-directive-DkueA6xK.js","assets/unsafe-html-D-Pz995f.js","assets/define-BwVY7ee-.js","assets/landing-6f9FrRJa.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-C7WHhTNK.js","assets/api-Dl3UszFN.js","assets/theming-hrqYM8pb.js","assets/filters-Df1TuQYX.js","assets/types-DPNAgA2W.js","assets/basic-CAneP3-v.js","assets/single-select-YS-74eLS.js","assets/multi-select-DAarc2mo.js","assets/disabled-assets-DAYrfUXw.js","assets/theming-Df2HRtr1.js","assets/custom-theming-BeH0MEuD.js","assets/default-filters-BEV6-5oZ.js","assets/forced-filters-CdZ-TOdU.js","assets/enabled-filters-CXo9b7TM.js","assets/enabled-metadata-fields-PSu8M0SB.js","assets/thumbnail-metadata-8syqbVvp.js","assets/approval-users-BwBCgxMJ.js","assets/human-readable-metadata-BH6FkaOk.js","assets/hidden-tabs-DqhKqlcq.js","assets/root-folder-DpYJ8cJc.js","assets/folder-filter-options-Cw7s0mR-.js","assets/events-BOUFSR9p.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-Do3K-pLa.js","assets/sticky-filters-D9tjCOh-.js","assets/grid-size-DJ4ZJ6ze.js","assets/preferences-Bfc4iaTv.js","assets/uploader-DM850FXE.js","assets/folder-selection-CauyrFfR.js","assets/ai-search-CLPXt7qQ.js","assets/transformations-BXYzfyig.js","assets/variants-ByKO26L3.js","assets/language-switcher-C4ABPMif.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const rl="modulepreload",al=function(t){return"/asset-picker/"+t},ba={},j=function(e,s,i){let r=Promise.resolve();if(s&&s.length>0){let o=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=o(s.map(c=>{if(c=al(c),c in ba)return;ba[c]=!0;const p=c.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":rl,p||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((g,v)=>{h.addEventListener("load",g),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return r.then(o=>{for(const n of o||[])n.status==="rejected"&&a(n.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=globalThis,Tr=ui.ShadowRoot&&(ui.ShadyCSS===void 0||ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Or=Symbol(),_a=new WeakMap;let Po=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Tr&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=_a.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&_a.set(s,e))}return e}toString(){return this.cssText}};const ol=t=>new Po(typeof t=="string"?t:t+"",void 0,Or),E=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new Po(s,t,Or)},nl=(t,e)=>{if(Tr)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=ui.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},xa=Tr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return ol(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ll,defineProperty:cl,getOwnPropertyDescriptor:dl,getOwnPropertyNames:hl,getOwnPropertySymbols:pl,getPrototypeOf:ul}=Object,Et=globalThis,ya=Et.trustedTypes,fl=ya?ya.emptyScript:"",Yi=Et.reactiveElementPolyfillSupport,Ls=(t,e)=>t,xi={toAttribute(t,e){switch(e){case Boolean:t=t?fl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Lr=(t,e)=>!ll(t,e),wa={attribute:!0,type:String,converter:xi,reflect:!1,useDefault:!1,hasChanged:Lr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Et.litPropertyMetadata??(Et.litPropertyMetadata=new WeakMap);let ls=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=wa){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&cl(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:a}=dl(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){const n=r==null?void 0:r.call(this);a==null||a.call(this,o),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wa}static _$Ei(){if(this.hasOwnProperty(Ls("elementProperties")))return;const e=ul(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ls("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ls("properties"))){const s=this.properties,i=[...hl(s),...pl(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(xa(r))}else e!==void 0&&s.push(xa(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var a;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:xi).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){var a,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:xi;this._$Em=r;const c=l.fromAttribute(s,n.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(e,s,i,r=!1,a){var o;if(e!==void 0){const n=this.constructor;if(r===!1&&(a=this[e]),i??(i=n.getPropertyOptions(e)),!((i.hasChanged??Lr)(a,s)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:a},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??s??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,o]of r){const{wrapped:n}=o,l=this[a];n!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};ls.elementStyles=[],ls.shadowRootOptions={mode:"open"},ls[Ls("elementProperties")]=new Map,ls[Ls("finalized")]=new Map,Yi==null||Yi({ReactiveElement:ls}),(Et.reactiveElementVersions??(Et.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=globalThis,$a=t=>t,yi=Ps.trustedTypes,ka=yi?yi.createPolicy("lit-html",{createHTML:t=>t}):void 0,Mo="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,Io="?"+St,gl=`<${Io}>`,Yt=document,Ds=()=>Yt.createComment(""),Rs=t=>t===null||typeof t!="object"&&typeof t!="function",Pr=Array.isArray,ml=t=>Pr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Wi=`[ 	
\f\r]`,ks=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sa=/-->/g,Ca=/>/g,zt=RegExp(`>|${Wi}(?:([^\\s"'>=/]+)(${Wi}*=${Wi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Aa=/'/g,Ea=/"/g,Do=/^(?:script|style|textarea|title)$/i,Ro=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),d=Ro(1),At=Ro(2),gt=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Fa=new WeakMap,Vt=Yt.createTreeWalker(Yt,129);function zo(t,e){if(!Pr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ka!==void 0?ka.createHTML(e):e}const vl=(t,e)=>{const s=t.length-1,i=[];let r,a=e===2?"<svg>":e===3?"<math>":"",o=ks;for(let n=0;n<s;n++){const l=t[n];let c,p,f=-1,h=0;for(;h<l.length&&(o.lastIndex=h,p=o.exec(l),p!==null);)h=o.lastIndex,o===ks?p[1]==="!--"?o=Sa:p[1]!==void 0?o=Ca:p[2]!==void 0?(Do.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=zt):p[3]!==void 0&&(o=zt):o===zt?p[0]===">"?(o=r??ks,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?zt:p[3]==='"'?Ea:Aa):o===Ea||o===Aa?o=zt:o===Sa||o===Ca?o=ks:(o=zt,r=void 0);const g=o===zt&&t[n+1].startsWith("/>")?" ":"";a+=o===ks?l+gl:f>=0?(i.push(c),l.slice(0,f)+Mo+l.slice(f)+St+g):l+St+(f===-2?n:g)}return[zo(t,a+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class zs{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let a=0,o=0;const n=e.length-1,l=this.parts,[c,p]=vl(e,s);if(this.el=zs.createElement(c,i),Vt.currentNode=this.el.content,s===2||s===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=Vt.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const f of r.getAttributeNames())if(f.endsWith(Mo)){const h=p[o++],g=r.getAttribute(f).split(St),v=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:v[2],strings:g,ctor:v[1]==="."?_l:v[1]==="?"?xl:v[1]==="@"?yl:Bi}),r.removeAttribute(f)}else f.startsWith(St)&&(l.push({type:6,index:a}),r.removeAttribute(f));if(Do.test(r.tagName)){const f=r.textContent.split(St),h=f.length-1;if(h>0){r.textContent=yi?yi.emptyScript:"";for(let g=0;g<h;g++)r.append(f[g],Ds()),Vt.nextNode(),l.push({type:2,index:++a});r.append(f[h],Ds())}}}else if(r.nodeType===8)if(r.data===Io)l.push({type:2,index:a});else{let f=-1;for(;(f=r.data.indexOf(St,f+1))!==-1;)l.push({type:7,index:a}),f+=St.length-1}a++}}static createElement(e,s){const i=Yt.createElement("template");return i.innerHTML=e,i}}function hs(t,e,s=t,i){var o,n;if(e===gt)return e;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const a=Rs(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),a===void 0?r=void 0:(r=new a(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=hs(t,r._$AS(t,e.values),r,i)),e}class bl{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Yt).importNode(s,!0);Vt.currentNode=r;let a=Vt.nextNode(),o=0,n=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new vs(a,a.nextSibling,this,e):l.type===1?c=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(c=new wl(a,this,e)),this._$AV.push(c),l=i[++n]}o!==(l==null?void 0:l.index)&&(a=Vt.nextNode(),o++)}return Vt.currentNode=Yt,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class vs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=hs(this,e,s),Rs(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ml(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&Rs(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yt.createTextNode(e)),this._$AH=e}$(e){var a;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=zs.createElement(zo(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(s);else{const o=new bl(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=Fa.get(e.strings);return s===void 0&&Fa.set(e.strings,s=new zs(e)),s}k(e){Pr(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const a of e)r===s.length?s.push(i=new vs(this.O(Ds()),this.O(Ds()),this,this.options)):i=s[r],i._$AI(a),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=$a(e).nextSibling;$a(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class Bi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,a){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,s=this,i,r){const a=this.strings;let o=!1;if(a===void 0)e=hs(this,e,s,0),o=!Rs(e)||e!==this._$AH&&e!==gt,o&&(this._$AH=e);else{const n=e;let l,c;for(e=a[0],l=0;l<a.length-1;l++)c=hs(this,n[i+l],s,l),c===gt&&(c=this._$AH[l]),o||(o=!Rs(c)||c!==this._$AH[l]),c===m?e=m:e!==m&&(e+=(c??"")+a[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _l extends Bi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class xl extends Bi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class yl extends Bi{constructor(e,s,i,r,a){super(e,s,i,r,a),this.type=5}_$AI(e,s=this){if((e=hs(this,e,s,0)??m)===gt)return;const i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class wl{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){hs(this,e)}}const _g={I:vs},Qi=Ps.litHtmlPolyfillSupport;Qi==null||Qi(zs,vs),(Ps.litHtmlVersions??(Ps.litHtmlVersions=[])).push("3.3.3");const $l=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const a=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new vs(e.insertBefore(Ds(),a),a,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=globalThis;let F=class extends ls{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$l(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return gt}};var Lo;F._$litElement$=!0,F.finalized=!0,(Lo=qt.litElementHydrateSupport)==null||Lo.call(qt,{LitElement:F});const Xi=qt.litElementPolyfillSupport;Xi==null||Xi({LitElement:F});(qt.litElementVersions??(qt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl={attribute:!0,type:String,converter:xi,reflect:!1,hasChanged:Lr},Sl=(t=kl,e,s)=>{const{kind:i,metadata:r}=s;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(n){const l=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,l,t,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(i==="setter"){const{name:o}=s;return function(n){const l=this[o];e.call(this,n),this.requestUpdate(o,l,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function u(t){return(e,s)=>typeof s=="object"?Sl(t,e,s):((i,r,a)=>{const o=r.hasOwnProperty(a);return r.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(r,a):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return u({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cl=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(t,e){return(s,i,r)=>{const a=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(t))??null};return Cl(s,i,{get(){return a(this)}})}}class Al{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function El(){return new Al({t:(t,e,s)=>{const i=(r,a)=>r.replace(/\{\{(\w+)\}\}/g,(o,n)=>String(a[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const r=e,a=r.count;if(a!==void 0){const o=String((a===1?r.defaultValue_one:r.defaultValue_other)??r.defaultValue??t);return i(o,r)}return i(String(r.defaultValue??t),r)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",cdnPermalinkEnabled:!1,isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalIsLowerBound:!1,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const Ji=(t,e)=>t.replace(/\{\{(\w+)\}\}/g,(s,i)=>String(e[i]??"")),wi=(t,e,s)=>{if(typeof e=="string")return Ji(e,s??{});if(typeof e=="object"&&e!==null){const i=e,r=i.count;if(r!==void 0){const a=String((r===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??t);return Ji(a,i)}return Ji(String(i.defaultValue??t),i)}return t},M=t=>typeof t=="string",Ss=()=>{let t,e;const s=new Promise((i,r)=>{t=i,e=r});return s.resolve=t,s.reject=e,s},Ta=t=>t==null?"":""+t,Fl=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},Tl=/###/g,Oa=t=>t&&t.indexOf("###")>-1?t.replace(Tl,"."):t,La=t=>!t||M(t),Ms=(t,e,s)=>{const i=M(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(La(t))return{};const a=Oa(i[r]);!t[a]&&s&&(t[a]=new s),Object.prototype.hasOwnProperty.call(t,a)?t=t[a]:t={},++r}return La(t)?{}:{obj:t,k:Oa(i[r])}},Pa=(t,e,s)=>{const{obj:i,k:r}=Ms(t,e,Object);if(i!==void 0||e.length===1){i[r]=s;return}let a=e[e.length-1],o=e.slice(0,e.length-1),n=Ms(t,o,Object);for(;n.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),n=Ms(t,o,Object),n&&n.obj&&typeof n.obj[`${n.k}.${a}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${a}`]=s},Ol=(t,e,s,i)=>{const{obj:r,k:a}=Ms(t,e,Object);r[a]=r[a]||[],r[a].push(s)},$i=(t,e)=>{const{obj:s,k:i}=Ms(t,e);if(s)return s[i]},Ll=(t,e,s)=>{const i=$i(t,s);return i!==void 0?i:$i(e,s)},No=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?M(t[i])||t[i]instanceof String||M(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):No(t[i],e[i],s):t[i]=e[i]);return t},rs=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Pl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ml=t=>M(t)?t.replace(/[&<>"'\/]/g,e=>Pl[e]):t;class Il{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Dl=[" ",",","?","!",";"],Rl=new Il(20),zl=(t,e,s)=>{e=e||"",s=s||"";const i=Dl.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const r=Rl.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let a=!r.test(t);if(!a){const o=t.indexOf(s);o>0&&!r.test(t.substring(0,o))&&(a=!0)}return a},mr=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let r=t;for(let a=0;a<i.length;){if(!r||typeof r!="object")return;let o,n="";for(let l=a;l<i.length;++l)if(l!==a&&(n+=s),n+=i[l],o=r[n],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;a+=l-a+1;break}r=o}return r},ki=t=>t&&t.replace("_","-"),Nl={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Si{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||Nl,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,r){return r&&!this.debug?null:(M(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new Si(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Si(this.logger,e)}}var rt=new Si;class Ki{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(s)||0;this.observers[i].set(s,r+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),r=1;r<s;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[n,l]=o;for(let c=0;c<l;c++)n(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[n,l]=o;for(let c=0;c<l;c++)n.apply(n,[e,...i])})}}class Ma extends Ki{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let n;e.indexOf(".")>-1?n=e.split("."):(n=[e,s],i&&(Array.isArray(i)?n.push(...i):M(i)&&a?n.push(...i.split(a)):n.push(i)));const l=$i(this.data,n);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=n[0],s=n[1],i=n.slice(2).join(".")),l||!o||!M(i)?l:mr(this.data&&this.data[e]&&this.data[e][s],i,a)}addResource(e,s,i,r){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let n=[e,s];i&&(n=n.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(n=e.split("."),r=s,s=n[1]),this.addNamespaces(s),Pa(this.data,n,r),a.silent||this.emit("added",e,s,i,r)}addResources(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in i)(M(i[a])||Array.isArray(i[a]))&&this.addResource(e,s,a,i[a],{silent:!0});r.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},n=[e,s];e.indexOf(".")>-1&&(n=e.split("."),r=i,i=s,s=n[1]),this.addNamespaces(s);let l=$i(this.data,n)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?No(l,i,a):l={...l,...i},Pa(this.data,n,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(r=>s[r]&&Object.keys(s[r]).length>0)}toJSON(){return this.data}}var Uo={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,r){return t.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,s,i,r))}),e}};const Ia={};class Ci extends Ki{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Fl(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=rt.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,n=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!zl(e,i,r);if(o&&!n){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:M(a)?[a]:a};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(a=c.shift()),e=c.join(r)}return{key:e,namespaces:M(a)?[a]:a}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:n}=this.extractFromKey(e[e.length-1],s),l=n[n.length-1],c=s.lng||this.language,p=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(p){const k=s.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${k}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${k}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const f=this.resolve(e,s);let h=f&&f.res;const g=f&&f.usedKey||o,v=f&&f.exactUsedKey||o,b=Object.prototype.toString.apply(h),_=["[object Number]","[object Function]","[object RegExp]"],S=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,P=!M(h)&&typeof h!="boolean"&&typeof h!="number";if(w&&h&&P&&_.indexOf(b)<0&&!(M(S)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const k=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,h,{...s,ns:n}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(f.res=k,f.usedParams=this.getUsedParamsDetails(s),f):k}if(a){const k=Array.isArray(h),L=k?[]:{},V=k?v:g;for(const z in h)if(Object.prototype.hasOwnProperty.call(h,z)){const re=`${V}${a}${z}`;L[z]=this.translate(re,{...s,joinArrays:!1,ns:n}),L[z]===re&&(L[z]=h[z])}h=L}}else if(w&&M(S)&&Array.isArray(h))h=h.join(S),h&&(h=this.extendTranslation(h,e,s,i));else{let k=!1,L=!1;const V=s.count!==void 0&&!M(s.count),z=Ci.hasDefaultValue(s),re=V?this.pluralResolver.getSuffix(c,s.count,s):"",se=s.ordinal&&V?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",W=V&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),Q=W&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${re}`]||s[`defaultValue${se}`]||s.defaultValue;!this.isValidLookup(h)&&z&&(k=!0,h=Q),this.isValidLookup(h)||(L=!0,h=o);const H=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&L?void 0:h,N=z&&Q!==h&&this.options.updateMissing;if(L||k||N){if(this.logger.log(N?"updateKey":"missingKey",c,l,o,N?Q:h),a){const B=this.resolve(o,{...s,keySeparator:!1});B&&B.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let q=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let B=0;B<Z.length;B++)q.push(Z[B]);else this.options.saveMissingTo==="all"?q=this.languageUtils.toResolveHierarchy(s.lng||this.language):q.push(s.lng||this.language);const X=(B,ee,ve)=>{const we=z&&ve!==h?ve:H;this.options.missingKeyHandler?this.options.missingKeyHandler(B,l,ee,we,N,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(B,l,ee,we,N,s),this.emit("missingKey",B,l,ee,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&V?q.forEach(B=>{const ee=this.pluralResolver.getSuffixes(B,s);W&&s[`defaultValue${this.options.pluralSeparator}zero`]&&ee.indexOf(`${this.options.pluralSeparator}zero`)<0&&ee.push(`${this.options.pluralSeparator}zero`),ee.forEach(ve=>{X([B],o+ve,s[`defaultValue${ve}`]||Q)})}):X(q,o,Q))}h=this.extendTranslation(h,e,s,f,i),L&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(L||k)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,k?h:void 0):h=this.options.parseMissingKeyHandler(h))}return r?(f.res=h,f.usedParams=this.getUsedParamsDetails(s),f):h}extendTranslation(e,s,i,r,a){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=M(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(c){const h=e.match(this.interpolator.nestingRegexp);p=h&&h.length}let f=i.replace&&!M(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||r.usedLng,i),c){const h=e.match(this.interpolator.nestingRegexp),g=h&&h.length;p<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,g=new Array(h),v=0;v<h;v++)g[v]=arguments[v];return a&&a[0]===g[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):o.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,l=M(n)?[n]:n;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Uo.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,a,o,n;return M(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,s),p=c.key;r=p;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const h=s.count!==void 0&&!M(s.count),g=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),v=s.context!==void 0&&(M(s.context)||typeof s.context=="number")&&s.context!=="",b=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);f.forEach(_=>{this.isValidLookup(i)||(n=_,!Ia[`${b[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(Ia[`${b[0]}-${_}`]=!0,this.logger.warn(`key "${r}" for languages "${b.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),b.forEach(S=>{if(this.isValidLookup(i))return;o=S;const w=[p];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(w,p,S,_,s);else{let k;h&&(k=this.pluralResolver.getSuffix(S,s.count,s));const L=`${this.options.pluralSeparator}zero`,V=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(w.push(p+k),s.ordinal&&k.indexOf(V)===0&&w.push(p+k.replace(V,this.options.pluralSeparator)),g&&w.push(p+L)),v){const z=`${p}${this.options.contextSeparator}${s.context}`;w.push(z),h&&(w.push(z+k),s.ordinal&&k.indexOf(V)===0&&w.push(z+k.replace(V,this.options.pluralSeparator)),g&&w.push(z+L))}}let P;for(;P=w.pop();)this.isValidLookup(i)||(a=P,i=this.getResource(S,_,P,s))}))})}),{res:i,usedKey:r,exactUsedKey:a,usedLng:o,usedNS:n}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,r):this.resourceStore.getResource(e,s,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!M(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const a of s)delete r[a]}return r}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const Zi=t=>t.charAt(0).toUpperCase()+t.slice(1);class Da{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=rt.create("languageUtils")}getScriptPartFromCode(e){if(e=ki(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=ki(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(M(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Zi(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Zi(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=Zi(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(s=r)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return s=r;s=this.options.supportedLngs.find(a=>{if(a===r)return a;if(!(a.indexOf("-")<0&&r.indexOf("-")<0)&&(a.indexOf("-")>0&&r.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===r||a.indexOf(r)===0&&r.length>1))return a})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),M(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),r=[],a=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return M(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):M(e)&&a(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&a(this.formatLanguageCode(o))}),r}}let Ul=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],jl={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Vl=["v1","v2","v3"],Bl=["v4"],Ra={zero:0,one:1,two:2,few:3,many:4,other:5},Kl=()=>{const t={};return Ul.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:jl[e.fc]}})}),t};class ql{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=rt.create("pluralResolver"),(!this.options.compatibilityJSON||Bl.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Kl(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=ki(e==="dev"?"en":e),r=s.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:i,type:r});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(i,{type:r})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[a]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${s}${r}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,a)=>Ra[r]-Ra[a]).map(r=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(s)}`:this.getSuffixRetroCompatible(r,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const a=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Vl.includes(this.options.compatibilityJSON)}}const za=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=Ll(t,e,s);return!a&&r&&M(s)&&(a=mr(t,s,i),a===void 0&&(a=mr(e,s,i))),a},er=t=>t.replace(/\$/g,"$$$$");class Hl{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=rt.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:r,prefix:a,prefixEscaped:o,suffix:n,suffixEscaped:l,formatSeparator:c,unescapeSuffix:p,unescapePrefix:f,nestingPrefix:h,nestingPrefixEscaped:g,nestingSuffix:v,nestingSuffixEscaped:b,nestingOptionsSeparator:_,maxReplaces:S,alwaysFormat:w}=e.interpolation;this.escape=s!==void 0?s:Ml,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=a?rs(a):o||"{{",this.suffix=n?rs(n):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=p?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":p||"",this.nestingPrefix=h?rs(h):g||rs("$t("),this.nestingSuffix=v?rs(v):b||rs(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=S||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,r){let a,o,n;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const S=za(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,i,{...r,...s,interpolationkey:g}):S}const v=g.split(this.formatSeparator),b=v.shift().trim(),_=v.join(this.formatSeparator).trim();return this.format(za(s,l,b,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...r,...s,interpolationkey:b})};this.resetRegExp();const p=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,f=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>er(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?er(this.escape(g)):er(g)}].forEach(g=>{for(n=0;a=g.regex.exec(e);){const v=a[1].trim();if(o=c(v),o===void 0)if(typeof p=="function"){const _=p(e,a,r);o=M(_)?_:""}else if(r&&Object.prototype.hasOwnProperty.call(r,v))o="";else if(f){o=a[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),o="";else!M(o)&&!this.useRawValueToEscape&&(o=Ta(o));const b=g.safeValue(o);if(e=e.replace(a[0],b),f?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=a[0].length):g.regex.lastIndex=0,n++,n>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,a,o;const n=(l,c)=>{const p=this.nestingOptionsSeparator;if(l.indexOf(p)<0)return l;const f=l.split(new RegExp(`${p}[ ]*{`));let h=`{${f[1]}`;l=f[0],h=this.interpolate(h,o);const g=h.match(/'/g),v=h.match(/"/g);(g&&g.length%2===0&&!v||v.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),c&&(o={...c,...o})}catch(b){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,b),`${l}${p}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!M(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const p=r[1].split(this.formatSeparator).map(f=>f.trim());r[1]=p.shift(),l=p,c=!0}if(a=s(n.call(this,r[1].trim(),o),o),a&&r[0]===e&&!M(a))return a;M(a)||(a=Ta(a)),a||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),a=""),c&&(a=l.reduce((p,f)=>this.format(p,f,i.lng,{...i,interpolationkey:r[1].trim()}),a.trim())),e=e.replace(r[0],a),this.regexp.lastIndex=0}return e}}const Gl=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?s.currency||(s.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?s.range||(s.range=r.trim()):r.split(";").forEach(o=>{if(o){const[n,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),p=n.trim();s[p]||(s[p]=c),c==="false"&&(s[p]=!1),c==="true"&&(s[p]=!0),isNaN(c)||(s[p]=parseInt(c,10))}})}return{formatName:e,formatOptions:s}},as=t=>{const e={};return(s,i,r)=>{let a=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(a={...a,[r.interpolationkey]:void 0});const o=i+JSON.stringify(a);let n=e[o];return n||(n=t(ki(i),r),e[o]=n),n(s)}};class Yl{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=rt.create("formatter"),this.options=e,this.formats={number:as((s,i)=>{const r=new Intl.NumberFormat(s,{...i});return a=>r.format(a)}),currency:as((s,i)=>{const r=new Intl.NumberFormat(s,{...i,style:"currency"});return a=>r.format(a)}),datetime:as((s,i)=>{const r=new Intl.DateTimeFormat(s,{...i});return a=>r.format(a)}),relativetime:as((s,i)=>{const r=new Intl.RelativeTimeFormat(s,{...i});return a=>r.format(a,i.range||"day")}),list:as((s,i)=>{const r=new Intl.ListFormat(s,{...i});return a=>r.format(a)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=as(s)}format(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=s.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find(n=>n.indexOf(")")>-1)){const n=a.findIndex(l=>l.indexOf(")")>-1);a[0]=[a[0],...a.splice(1,n)].join(this.formatSeparator)}return a.reduce((n,l)=>{const{formatName:c,formatOptions:p}=Gl(l);if(this.formats[c]){let f=n;try{const h=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},g=h.locale||h.lng||r.locale||r.lng||i;f=this.formats[c](n,g,{...p,...r,...h})}catch(h){this.logger.warn(h)}return f}else this.logger.warn(`there was no format function for ${c}`);return n},e)}}const Wl=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Ql extends Ki{constructor(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=rt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,s,i,r){const a={},o={},n={},l={};return e.forEach(c=>{let p=!0;s.forEach(f=>{const h=`${c}|${f}`;!i.reload&&this.store.hasResourceBundle(c,f)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,p=!1,o[h]===void 0&&(o[h]=!0),a[h]===void 0&&(a[h]=!0),l[f]===void 0&&(l[f]=!0)))}),p||(n[c]=!0)}),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const r=e.split("|"),a=r[0],o=r[1];s&&this.emit("failedLoading",a,o,s),!s&&i&&this.store.addResourceBundle(a,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const n={};this.queue.forEach(l=>{Ol(l.loaded,[a],o),Wl(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{n[c]||(n[c]={});const p=l.loaded[c];p.length&&p.forEach(f=>{n[c][f]===void 0&&(n[c][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",n),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:r,wait:a,callback:o});return}this.readingCalls++;const n=(c,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&p&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,r+1,a*2,o)},a);return}o(c,p)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,s);c&&typeof c.then=="function"?c.then(p=>n(null,p)).catch(n):n(null,c)}catch(c){n(c)}return}return l(e,s,n)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();M(e)&&(e=this.languageUtils.toResolveHierarchy(e)),M(s)&&(s=[s]);const a=this.queueLoad(e,s,i,r);if(!a.toLoad.length)return a.pending.length||r(),null;a.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],a=i[1];this.read(r,a,"read",void 0,void 0,(o,n)=>{o&&this.logger.warn(`${s}loading namespace ${a} for language ${r} failed`,o),!o&&n&&this.logger.log(`${s}loaded namespace ${a} for language ${r}`,n),this.loaded(e,o,n)})}saveMissing(e,s,i,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:a},c=this.backend.create.bind(this.backend);if(c.length<6)try{let p;c.length===5?p=c(e,s,i,r,l):p=c(e,s,i,r),p&&typeof p.then=="function"?p.then(f=>n(null,f)).catch(n):n(null,p)}catch(p){n(p)}else c(e,s,i,r,n,l)}!e||!e[0]||this.store.addResource(e[0],s,i,r)}}}const Na=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),M(t[1])&&(e.defaultValue=t[1]),M(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ua=t=>(M(t.ns)&&(t.ns=[t.ns]),M(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),M(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),ai=()=>{},Xl=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class Ns extends Ki{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ua(e),this.services={},this.logger=rt,this.modules={external:[]},Xl(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(M(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const r=Na();this.options={...r,...this.options,...Ua(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const a=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?rt.init(a(this.modules.logger),this.options):rt.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=Yl);const f=new Da(this.options);this.store=new Ma(this.options.resources,this.options);const h=this.services;h.logger=rt,h.resourceStore=this.store,h.languageUtils=f,h.pluralResolver=new ql(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=a(p),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Hl(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Ql(a(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),_=1;_<v;_++)b[_-1]=arguments[_];e.emit(g,...b)}),this.modules.languageDetector&&(h.languageDetector=a(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=a(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Ci(this.services,this.options),this.translator.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),_=1;_<v;_++)b[_-1]=arguments[_];e.emit(g,...b)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ai),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=function(){return e.store[p](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=function(){return e.store[p](...arguments),e}});const l=Ss(),c=()=>{const p=(f,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(f,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ai;const r=M(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],o=n=>{if(!n||n==="cimode")return;this.services.languageUtils.toResolveHierarchy(n).forEach(c=>{c!=="cimode"&&a.indexOf(c)<0&&a.push(c)})};r?o(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(n=>o(n)),this.services.backendConnector.load(a,this.options.ns,n=>{!n&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(n)})}else i(null)}reloadResources(e,s,i){const r=Ss();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=ai),this.services.backendConnector.reload(e,s,a=>{r.resolve(),i(a)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Uo.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const r=Ss();this.emit("languageChanging",e);const a=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(a(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},n=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=M(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||a(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,p=>{o(p,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),r}getFixedT(e,s,i){var r=this;const a=function(o,n){let l;if(typeof n!="object"){for(var c=arguments.length,p=new Array(c>2?c-2:0),f=2;f<c;f++)p[f-2]=arguments[f];l=r.options.overloadTranslationOptionHandler([o,n].concat(p))}else l={...n};l.lng=l.lng||a.lng,l.lngs=l.lngs||a.lngs,l.ns=l.ns||a.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||a.keyPrefix);const h=r.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(o)?g=o.map(v=>`${l.keyPrefix}${h}${v}`):g=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,r.t(g,l)};return M(e)?a.lng=e:a.lngs=e,a.ns=s,a.keyPrefix=i,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(n,l)=>{const c=this.services.backendConnector.state[`${n}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const n=s.precheck(this,o);if(n!==void 0)return n}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(a,e)))}loadNamespaces(e,s){const i=Ss();return this.options.ns?(M(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),s&&s(r)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=Ss();M(e)&&(e=[e]);const r=this.options.preload||[],a=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return a.length?(this.options.preload=r.concat(a),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Da(Na());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Ns(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ai;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},a=new Ns(r);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(n=>{a[n]=this[n]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},i&&(a.store=new Ma(this.store.data,r),a.services.resourceStore=a.store),a.translator=new Ci(a.services,r),a.translator.on("*",function(n){for(var l=arguments.length,c=new Array(l>1?l-1:0),p=1;p<l;p++)c[p-1]=arguments[p];a.emit(n,...c)}),a.init(r,s),a.translator.options=r,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ee=Ns.createInstance();Ee.createInstance=Ns.createInstance;Ee.createInstance;Ee.dir;Ee.init;Ee.loadResources;Ee.reloadResources;Ee.use;Ee.changeLanguage;Ee.getFixedT;Ee.t;Ee.exists;Ee.setDefaultNamespace;Ee.hasLoadedNamespace;Ee.loadNamespaces;Ee.loadLanguages;const jo=["__proto__","constructor","prototype"];function Vo(t){return!(typeof t!="string"||t.length===0||t.length>128||jo.indexOf(t)>-1||t.indexOf("..")>-1||t.indexOf("\\")>-1||/[?#%\s@]/.test(t)||/[\x00-\x1F\x7F]/.test(t))}function Bo(t){return!(!Vo(t)||t.indexOf("/")>-1)}function Jl(t){return Vo(t)}const Zl={lng:Bo,ns:Jl};function oi(t){return typeof t!="string"?t:t.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function ec(t){if(typeof t!="string"||t.length===0)return t;try{const e=new URL(t);return e.username||e.password?(e.username="",e.password="",e.toString()):t}catch{return t.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function Ko(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function tc(t){return!!t&&typeof t.then=="function"}function sc(t){return tc(t)?t:Promise.resolve(t)}const ic=/\{\{(.+?)\}\}/g;function ja(t,e){let s=!1;const i=t.replace(ic,(r,a)=>{const o=a.trim();if(jo.indexOf(o)>-1)return r;const n=e[o];if(n==null)return r;const l=Zl[o]||Bo,c=String(n).split("+");for(const p of c)if(!l(p))return s=!0,r;return c.join("+")});return s?null:i}const Ht=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let Ai;typeof fetch=="function"?Ai=fetch:Ht&&typeof Ht.fetch=="function"&&(Ai=Ht.fetch);const Va=Ko()&&Ht?Ht.XMLHttpRequest:void 0,rc=typeof ActiveXObject=="function"&&Ht?Ht.ActiveXObject:void 0,qo=["__proto__","constructor","prototype"],vr=(t,e)=>{if(e&&typeof e=="object"){let s="";for(const i of Object.keys(e))qo.indexOf(i)>-1||(s+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!s)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+s.slice(1)}return t},Ba=(t,e,s,i)=>{const r=a=>{if(!a.ok)return s(a.statusText||"Error",{status:a.status});a.text().then(o=>{s(null,{status:a.status,data:o})}).catch(s)};if(i){const a=i(t,e);if(a instanceof Promise){a.then(r).catch(s);return}}typeof fetch=="function"?fetch(t,e).then(r).catch(s):Ai(t,e).then(r).catch(s)},ac=(t,e,s,i)=>{t.queryStringParams&&(e=vr(e,t.queryStringParams));const r={...typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),s&&(r["Content-Type"]="application/json");const a=typeof t.requestOptions=="function"?t.requestOptions(s):t.requestOptions,o={method:s?"POST":"GET",body:s?t.stringify(s):void 0,headers:r,...t._omitFetchOptions?{}:a},n=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Ba(e,o,i,n)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(c=>{delete o[c]}),Ba(e,o,i,n),t._omitFetchOptions=!0}catch(c){i(c)}}},oc=(t,e,s,i)=>{s&&typeof s=="object"&&(s=vr("",s).slice(1)),t.queryStringParams&&(e=vr(e,t.queryStringParams));try{const r=Va?new Va:new rc("MSXML2.XMLHTTP.3.0");r.open(s?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,s&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(const o of Object.keys(a))qo.indexOf(o)>-1||r.setRequestHeader(o,a[o]);r.onreadystatechange=()=>{r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(s)}catch(r){console&&console.log(r)}},nc=(t,e,s,i)=>{if(typeof s=="function"&&(i=s,s=void 0),i=i||(()=>{}),Ai&&e.indexOf("file:")!==0)return ac(t,e,s,i);if(Ko()||typeof ActiveXObject=="function")return oc(t,e,s,i);i(new Error("No fetch and no xhr implementation found!"))},lc=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:t=>JSON.parse(t),stringify:JSON.stringify,parsePayload:(t,e,s)=>({[e]:s||""}),parseLoadPayload:(t,e)=>{},request:nc,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var Ho=class{constructor(t,e={},s={}){this.services=t,this.options=e,this.allOptions=s,this.type="backend",this.init(t,e,s)}init(t,e={},s={}){if(this.services=t,this.options={...lc(),...this.options||{},...e},this.allOptions=s,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(t,e,s){this._readAny(t,t,e,e,s)}read(t,e,s){this._readAny([t],t,[e],e,s)}_readAny(t,e,s,i,r){let a=this.options.loadPath;typeof this.options.loadPath=="function"&&(a=this.options.loadPath(t,s)),a=sc(a),a.then(o=>{if(!o)return r(null,{});const n=ja(o,{lng:t.join("+"),ns:s.join("+")});if(n==null){const l=t.map(oi).join(", "),c=s.map(oi).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(n,r,e,i)})}loadUrl(t,e,s,i){const r=typeof s=="string"?[s]:s,a=typeof i=="string"?[i]:i,o=this.options.parseLoadPayload(r,a),n=oi(ec(t));this.options.request(this.options,t,o,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+n+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+n+"; status code: "+c.status,!1);if(!c&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(g=>h.indexOf(g)>-1))return e("failed loading "+n+": "+oi(l.message),!0)}if(l)return e(l,!1);let p,f;try{typeof c.data=="string"?p=this.options.parse(c.data,s,i):p=c.data}catch{f="failed parsing "+n+" to json"}if(f)return e(f,!1);e(null,p)})}create(t,e,s,i,r){if(!this.options.addPath)return;typeof t=="string"&&(t=[t]);const a=this.options.parsePayload(e,s,i);let o=0;const n=[],l=[];t.forEach(c=>{let p=this.options.addPath;typeof this.options.addPath=="function"&&(p=this.options.addPath(c,e));const f=ja(p,{lng:c,ns:e});if(f==null){o+=1,r&&o===t.length&&r(n,l);return}this.options.request(this.options,f,a,(h,g)=>{o+=1,n.push(h),l.push(g),o===t.length&&typeof r=="function"&&r(n,l)})})}reload(){const{backendConnector:t,languageUtils:e,logger:s}=this.services,i=t.language;if(i&&i.toLowerCase()==="cimode")return;const r=[],a=o=>{e.toResolveHierarchy(o).forEach(n=>{r.indexOf(n)<0&&r.push(n)})};a(i),this.allOptions.preload&&this.allOptions.preload.forEach(o=>a(o)),r.forEach(o=>{this.allOptions.ns.forEach(n=>{t.read(o,n,"read",null,null,(l,c)=>{l&&s.warn(`loading namespace ${n} for language ${o} failed`,l),!l&&c&&s.log(`loaded namespace ${n} for language ${o}`,c),t.loaded(`${o}|${n}`,l,c)})})})}};Ho.type="backend";const cc="https://i18n-fastly.ultrafast.io";function dc(t){const e=t.cdnUrl??cc;let s=null;const i=new Set,r=()=>{for(const p of i)p()},a=p=>(i.add(p),()=>i.delete(p));async function o(p="en"){return s?(s.language!==p&&(await s.changeLanguage(p),r()),{i18n:s,isNew:!1}):(s=Ee.createInstance(),await s.use(Ho).init({lng:p,fallbackLng:"en",ns:[t.namespace],defaultNS:t.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${t.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(f,h){var b;const g=JSON.parse(f),v=Array.isArray(h)?h[0]:h;return v&&((b=g[v])!=null&&b.__without_namespace)?g[v].__without_namespace:g}}}),s.on("languageChanged",r),s.on("loaded",r),r(),{i18n:s,isNew:!0})}const n=()=>s,l=(p,f,h)=>!s||!s.isInitialized?wi(p,f,h):typeof f=="string"?s.t(p,f,h??{}):s.t(p,f??{});class c{constructor(f){this._unsubscribe=null,this._host=f,f.addController(this)}hostConnected(){this._unsubscribe=a(()=>this._host.requestUpdate())}hostDisconnected(){var f;(f=this._unsubscribe)==null||f.call(this),this._unsubscribe=null}}return{initI18n:o,getInstance:n,onChange:a,t:l,fallbackT:wi,I18nController:c}}function hc(t){const{lsKey:e,namespace:s,gridUuid:i,prodUrl:r,logPrefix:a}=t,o=typeof localStorage<"u"&&localStorage.getItem(e)==="true",n={};let l=null;const c=2e3;o&&console.log(`%c${a} TranslationMissingKeysHelper enabled`,"font-weight:600;");const p=()=>{console.group(`${a} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...n}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${r}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(n).map(([f,{value:h,ns:g}])=>({key:g&&f.startsWith(`${g}:`)?f.slice(g.length+1):f,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(f,h="",g=s){o&&(n[`${g}:${f}`]={value:h,ns:g},l&&clearTimeout(l),l=setTimeout(p,c))}}}const Go="a656ff82-0270-46dc-8de8-c734318d841d",pc="https://i18n-fastly.ultrafast.io",uc="https://neo.wordplex.io",Yo="asset-picker",fc=dc({gridUuid:Go,namespace:Yo,cdnUrl:pc}),gc=fc.initI18n,mc=hc({lsKey:"apTranslationsMissingKeysEnabled",namespace:Yo,gridUuid:Go,prodUrl:uc,logPrefix:"[asset-picker]"});class vc{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function bc(t){return"extension"in t&&!("path"in t)}class _c{constructor(e,s,i){this.onLimitReached=i,this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_wouldExceedMax(e){var r,a;const s=(r=this.store.getState().config)==null?void 0:r.maxSelections,i=!!s&&e>s;return i&&((a=this.onLimitReached)==null||a.call(this,s)),i}_isLockedOut(e){const s=this.store.getState(),i=s.config,r=i==null?void 0:i.maxSelections;return(i==null?void 0:i.maxSelectionsBehavior)!=="lock"||!r||s.selectedAssets.has(e)?!1:s.selectedAssets.size+(this._folderSelectionEnabled?s.selectedFolders.size:0)>=r}_applyRangeSelection(e,s,i,r){const a=this.store.getState(),o=this._getCombinedList();for(let n=e;n<=s;n++){const l=o[n];l&&(bc(l)?a.disabledAssetIds.has(l.uuid)||i.set(l.uuid,l):a.disabledFolderIds.has(l.uuid)||r.set(l.uuid,l))}}handleSelect(e,s,i){var n,l,c;const r=this.store.getState();if(r.disabledAssetIds.has(e.uuid))return;if(this._isLockedOut(e.uuid)){(l=this.onLimitReached)==null||l.call(this,((n=r.config)==null?void 0:n.maxSelections)??0);return}const a=new Map(r.selectedAssets);if(!(((c=r.config)==null?void 0:c.multiSelect)??!0)){a.clear(),a.set(e.uuid,e),this.store.setState({selectedAssets:a,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const p=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),h=new Map(r.selectedFolders);if(this._applyRangeSelection(p,f,a,h),this._wouldExceedMax(a.size+h.size))return;this.store.setState({selectedAssets:a,selectedFolders:h})}else{const p=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),h=r.assets;for(let g=p;g<=f;g++)h[g]&&!r.disabledAssetIds.has(h[g].uuid)&&a.set(h[g].uuid,h[g]);if(this._wouldExceedMax(a.size))return;this.store.setState({selectedAssets:a})}else if(i.metaKey||i.ctrlKey){a.has(e.uuid)?a.delete(e.uuid):a.set(e.uuid,e);const p=a.size+(this._folderSelectionEnabled?r.selectedFolders.size:0);if(this._wouldExceedMax(p))return;this.store.setState({selectedAssets:a})}else a.clear(),a.set(e.uuid,e),this.store.setState({selectedAssets:a,selectedFolders:new Map});this.lastClickedIndex=s}selectAsset(e,s){var n;const i=this.store.getState();if(i.disabledAssetIds.has(e.uuid))return!1;if(i.selectedAssets.has(e.uuid))return!0;if(!(((n=i.config)==null?void 0:n.multiSelect)??!0)){const l=new Map([[e.uuid,e]]);return this.store.setState({selectedAssets:l,selectedFolders:new Map}),s!==void 0&&(this.lastClickedIndex=s),!0}const a=new Map(i.selectedAssets);a.set(e.uuid,e);const o=a.size+(this._folderSelectionEnabled?i.selectedFolders.size:0);return this._wouldExceedMax(o)?!1:(this.store.setState({selectedAssets:a}),s!==void 0&&(this.lastClickedIndex=s),!0)}handleFolderSelect(e,s,i){var n;if(!this._folderSelectionEnabled)return;const r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;const a=new Map(r.selectedFolders);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){a.clear(),a.set(e.uuid,e),this.store.setState({selectedFolders:a,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const l=Math.min(this.lastClickedIndex,s),c=Math.max(this.lastClickedIndex,s),p=new Map(r.selectedAssets);if(this._applyRangeSelection(l,c,p,a),this._wouldExceedMax(p.size+a.size))return;this.store.setState({selectedAssets:p,selectedFolders:a})}else if(i.metaKey||i.ctrlKey){a.has(e.uuid)?a.delete(e.uuid):a.set(e.uuid,e);const l=a.size+r.selectedAssets.size;if(this._wouldExceedMax(l))return;this.store.setState({selectedFolders:a})}else a.clear(),a.set(e.uuid,e),this.store.setState({selectedFolders:a,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,r=this._folderSelectionEnabled?s.selectedFolders.size:0,a=e.filter(c=>!s.disabledAssetIds.has(c.uuid)),o=new Map,n=i?Math.max(0,Math.min(a.length,i-r)):a.length;for(let c=0;c<n;c++)o.set(a[c].uuid,a[c]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,r=e.filter(l=>!s.disabledFolderIds.has(l.uuid)),a=new Map,o=i?Math.max(0,Math.min(r.length,i-s.selectedAssets.size)):r.length;for(let l=0;l<o;l++)a.set(r[l].uuid,r[l]);this.store.setState({selectedFolders:a})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}const Ka=5,os=40,qa=15;class Mr{constructor(e,s){this.host=e,this.options=s,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarquee=new Set,this.dragging=!1,this.scrollRAF=null,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null,this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.container!==e&&(this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown))}detach(){var e,s;(e=this.container)==null||e.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),(s=this.container)==null||s.classList.remove("marqueeing"),this.container=void 0,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null}isInteractiveTarget(e){return this.options.isInteractiveTarget?this.options.isInteractiveTarget(e):e.composedPath().some(s=>s instanceof HTMLElement?s instanceof HTMLButtonElement||s instanceof HTMLInputElement||s instanceof HTMLAnchorElement?!0:s.hasAttribute("data-uuid")||s.tagName==="TR"||s.tagName==="TABLE":!1)}onMouseDown(e){if(e.button!==0||!this.container||this.isInteractiveTarget(e))return;const s=this.container.getBoundingClientRect();this.startX=e.clientX-s.left+this.container.scrollLeft,this.startY=e.clientY-s.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this.preMarquee=new Set(this.options.getSelection(e)),this.dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this.dragging){const i=Math.abs(e.clientX-this.startClientX),r=Math.abs(e.clientY-this.startClientY);if(i<Ka&&r<Ka)return;this.dragging=!0,this.isActive=!0,this.container.classList.add("marqueeing"),document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.cacheCards()}this.lastMouseEvent=e,this.updateRect(e),this.maybeAutoScroll(e)}}updateRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,r=e.clientY-s.top+this.container.scrollTop;let a=Math.min(this.startX,i),o=Math.min(this.startY,r),n=Math.abs(i-this.startX),l=Math.abs(r-this.startY);a<0&&(n+=a,a=0),o<0&&(l+=o,o=0),a+n>this.container.scrollWidth&&(n=this.container.scrollWidth-a),o+l>this.container.scrollHeight&&(l=this.container.scrollHeight-o),this.rect={x:a,y:o,width:n,height:l},this.applyBoxStyle(),this.selectIntersecting()}maybeAutoScroll(e){if(!this.container||this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top<os||s.bottom-e.clientY<os;i&&this.scrollRAF==null?this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):i||this.stopAutoScroll()}autoScrollTick(){if(this.scrollRAF=null,!this.container||!this.dragging||!this.lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this.lastMouseEvent,i=s.clientY-e.top,r=e.bottom-s.clientY;let a=0;i<os?a=-qa*(1-i/os):r<os&&(a=qa*(1-r/os)),a!==0&&(this.container.scrollTop+=a,this.updateRect(s),this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this.scrollRAF!=null&&(cancelAnimationFrame(this.scrollRAF),this.scrollRAF=null)}onMouseUp(){var e;document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this.lastMouseEvent=null,this.dragging&&(this.dragging=!1,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.cardRects=[],this.appliedSelection=null,(e=this.container)==null||e.classList.remove("marqueeing"),this.host.requestUpdate())}cacheCards(){if(!this.container)return;const e=this.container.getBoundingClientRect(),s=this.container.scrollLeft,i=this.container.scrollTop;this.cardRects=[];for(const{uuid:r,el:a}of this.options.queryCards(this.container)){if(!r)continue;const o=a.getBoundingClientRect();this.cardRects.push({uuid:r,x:o.left-e.left+s,y:o.top-e.top+i,w:o.width,h:o.height})}}applyBoxStyle(){var s;const e=(s=this.container)==null?void 0:s.querySelector(".marquee-box");if(!e){this.host.requestUpdate();return}e.style.left=`${this.rect.x}px`,e.style.top=`${this.rect.y}px`,e.style.width=`${this.rect.width}px`,e.style.height=`${this.rect.height}px`}static sameSet(e,s){if(!s||e.size!==s.size)return!1;for(const i of e)if(!s.has(i))return!1;return!0}selectIntersecting(){const e=new Set(this.preMarquee),{x:s,y:i,width:r,height:a}=this.rect;for(const o of this.cardRects)s<o.x+o.w&&s+r>o.x&&i<o.y+o.h&&i+a>o.y&&e.add(o.uuid);Mr.sameSet(e,this.appliedSelection)||(this.appliedSelection=e,this.options.setSelection(e))}}class xc{constructor(e,s){this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s,i="200px"){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(r=>{var a;(a=r[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:i}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const yc="https://api.filerobot.com",wc=3e4,$c=2,kc=400;function Sc(t){return t===404||t===408||t===429||t>=500}const Cc=t=>new Promise(e=>setTimeout(e,t));function Wo(t,e){return`${(e||yc).replace(/\/+$/,"")}/${t}`}async function Ac(t,e,s,i={}){const r=`${Wo(t,s)}/key/${encodeURIComponent(e)}`,a=i.retries??$c,o=i.retryDelayMs??kc;let n=new Error("SASS key exchange failed");for(let l=0;l<=a;l++){l>0&&await Cc(o*l);const c=new AbortController,p=setTimeout(()=>c.abort(),wc);try{const f=await fetch(r,{signal:c.signal,cache:"no-store"});if(clearTimeout(p),!f.ok){if(n=new Error(`SASS key exchange failed (HTTP ${f.status})`),Sc(f.status)&&l<a)continue;throw n}const h=await f.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(f){if(clearTimeout(p),f instanceof DOMException&&f.name==="AbortError")throw new Error("SASS key exchange timed out");if(f instanceof TypeError&&l<a){n=f;continue}throw f}}throw n}function Ha(t,e){const s={};switch(t.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");s["X-Filerobot-Key"]=e;break;case"sass-key":s["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(s["X-Filerobot-Airbox-Puid"]=t.airboxPuid),s}function Ec(t){return t.mode==="securityTemplate"||t.mode==="sassKey"}function Fc(t){return Ec(t)?t.mode==="securityTemplate"?{mode:"security-template",container:t.projectToken,securityTemplateId:t.securityTemplateKey,airboxPuid:t.airboxPuid}:{mode:"sass-key",container:t.projectToken,sassKey:t.sassKey,airboxPuid:t.airboxPuid}:t}async function Ga(t,e){const s=Fc(t),i=Wo(s.container,e);if(s.mode==="security-template"){const r=await Ac(s.container,s.securityTemplateId,e);return{apiBase:i,headers:Ha(s,r),sassKey:r}}return{apiBase:i,headers:Ha(s)}}const Tc=3e4;class Qo extends Error{constructor(e,s,i){super(e),this.status=s,this.code=i,this.name="DamApiError"}}class Ir{constructor(e,s,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=s,this.apiDomain=i}static async create(e,s){const i=await Ga(e,s);return new Ir(i,e,s)}get(e,s){return this.send(this.buildUrl(e,s),{method:"GET"})}post(e,s){return this.sendJson("POST",e,s)}put(e,s){return this.sendJson("PUT",e,s)}delete(e,s){return this.sendJson("DELETE",e,s)}query(e,s,i){return this.send(this.buildUrl(e,s),{method:"QUERY",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}buildUrl(e,s){const i=new URL(`${this.baseUrl}${e}`);if(s)for(const[r,a]of Object.entries(s))a!=null&&i.searchParams.set(r,Array.isArray(a)?a.join(","):String(a));return i}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,s,i){return this.send(new URL(`${this.baseUrl}${s}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,s,i=!1){var o;const r=new AbortController,a=setTimeout(()=>r.abort(),Tc);try{const n=await fetch(e.toString(),{...s,headers:{...this.headers,...s.headers},signal:r.signal});if(clearTimeout(a),n.status===401&&!i&&((o=this.auth)==null?void 0:o.mode)==="security-template"){const p=await Ga(this.auth,this.apiDomain);return this.headers=p.headers,this.send(e,s,!0)}if(!n.ok){let p=`API error: ${n.status} ${n.statusText}`,f;try{const h=await n.json();h!=null&&h.msg&&(p=`API error: ${n.status} - ${h.msg}`),typeof(h==null?void 0:h.code)=="string"&&(f=h.code)}catch{}throw new Qo(p,n.status,f)}if(n.status===204)return;const l=await n.text();if(!l)return;const c=JSON.parse(l);if((c==null?void 0:c.status)==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(n){throw clearTimeout(a),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}}function Xo(t){const e=t.path??t.name,s=e.replace(/\/[^/]*$/,"")||"/";return{uuid:t.uuid,name:t.name.split("/").pop()||t.name,path:e,parentPath:s,createdAt:t.created_at,modifiedAt:t.modified_at}}async function Ya(t,e={}){const s=e.sortBy??"name",i=e.sortDirection??"asc";return((await t.get("/folders",{folder:e.folderPath??"/",recursive:e.recursive??0,limit:e.limit??1e3,offset:e.offset??0,q:e.q,sort:`${s}:${i}`})).folders??[]).map(Xo)}async function Jo(t,e,s){const i=s.replace(/\/+$/,""),r=i?`${i}/${e}`:`/${e}`,a=await t.post("/folders",{name:r});if(a.status!=="success"||!a.folder)throw new Error(a.msg||"Failed to create folder");return Xo(a.folder)}const Oc={name:t=>t.name,mimeType:t=>t.type,bytes:t=>{var e;return(e=t.size)==null?void 0:e.bytes},createdAt:t=>t.created_at,modifiedAt:t=>t.modified_at};function Lc(t,e){let s=null;const i=r=>{for(const[a,o]of r){const[n,l]=JSON.parse(a),c=p=>e(p.folder,n,l).then(p.resolve,p.reject);if(o.length===1){c(o[0]);continue}t(o.map(p=>p.folder),n,l).then(p=>{o.every(h=>{var g;return(((g=p.get(h.folder))==null?void 0:g.length)??1/0)<=l})?o.forEach(h=>h.resolve(p.get(h.folder))):o.forEach(c)},()=>o.forEach(c))}};return(r,a,o)=>new Promise((n,l)=>{if(!s){const f=new Map;s=f,queueMicrotask(()=>{s=null,i(f)})}const c=JSON.stringify([a,o]),p=s.get(c)??[];p.push({folder:r,resolve:n,reject:l}),s.set(c,p)})}const Pc=t=>{var s;const e=(s=t.folder)==null?void 0:s.name;return typeof e=="string"?e:void 0};function Mc(t,e,s=Pc){const i=new Map(e.map(a=>[a,[]])),r=e.map(a=>({folder:a,prefix:a.replace(/\/+$/,"")}));for(const a of t){const o=s(a);if(!o)return null;const n=r.find(({prefix:l})=>o===l||o.startsWith(`${l}/`));if(!n)return null;i.get(n.folder).push(a)}return i}let Ic;const Dc=()=>Ic??(Ic=new Intl.Collator("en",{sensitivity:"base",ignorePunctuation:!0})),$t=t=>t&&Date.parse(t)||0,Wa={name:t=>(e,s)=>Dc().compare(t.name(e)??"",t.name(s)??""),size:t=>(e,s)=>(t.bytes(e)??0)-(t.bytes(s)??0),type:t=>(e,s)=>(t.mimeType(e)??"").localeCompare(t.mimeType(s)??""),modified_at:t=>(e,s)=>$t(t.modifiedAt(e))-$t(t.modifiedAt(s)),updated_at:t=>(e,s)=>$t(t.modifiedAt(e))-$t(t.modifiedAt(s)),created_at:t=>(e,s)=>$t(t.createdAt(e))-$t(t.createdAt(s)),uploaded:t=>(e,s)=>$t(t.createdAt(e))-$t(t.createdAt(s)),relevance:null,title:null,color:null,files_count_recursive:null,files_size_recursive:null};function Qa(t,e,s){const i=Object.hasOwn(Wa,t)?Wa[t]:null;if(!i)return()=>0;const r=i(s);return e==="asc"?r:(a,o)=>r(o,a)}function Rc(t,e,s){return s?Qa(t,e,s):Qa(t,e,Oc)}class zc{constructor(e,s,i){this.folder=e,this.fetchPage=s,this.pageSize=i,this.items=[],this.exhausted=!1,this.nextOffset=0,this.pending=null}loadMore(){return this.exhausted?Promise.resolve():(this.pending||(this.pending=(async()=>{const e=await this.fetchPage(this.folder,this.nextOffset,this.pageSize);this.nextOffset+=this.pageSize,e.length<this.pageSize&&(this.exhausted=!0),this.items.push(...e)})().finally(()=>{this.pending=null})),this.pending)}}class Nc{constructor(e=30){this.maxEntries=e,this.listings=new Map}get(e,s,i,r){const a=JSON.stringify([e,s,r]);let o=this.listings.get(a);for(o?this.listings.delete(a):o=new zc(e,i,r),this.listings.set(a,o);this.listings.size>this.maxEntries;)this.listings.delete(this.listings.keys().next().value);return o}get size(){return this.listings.size}clear(){this.listings.clear()}}class Uc{constructor(e,s){this.compare=s,this.seen=new Set,this.queue=Promise.resolve(),this.cursors=e.map(i=>({listing:i,pos:0,taken:0}))}get hasMore(){return this.cursors.some(e=>e.pos<e.listing.items.length||!e.listing.exhausted)}next(e){const s=this.queue.then(()=>this.take(e));return this.queue=s.catch(()=>{}),s}async take(e){const s=[];for(;s.length<e;){try{await this.loadDrainedFolders()}catch(a){if(s.length>0)return s;throw a}let i=null;for(const a of this.cursors){if(a.pos>=a.listing.items.length)continue;if(!i){i=a;continue}const o=this.compare(a.listing.items[a.pos],i.listing.items[i.pos]);(o<0||o===0&&a.taken<i.taken)&&(i=a)}if(!i)break;const r=i.listing.items[i.pos++];i.taken++,!this.seen.has(r.uuid)&&(this.seen.add(r.uuid),s.push(r))}return s}async loadDrainedFolders(){const e=this.cursors.filter(s=>s.pos>=s.listing.items.length&&!s.listing.exhausted);e.length!==0&&await Promise.all(e.map(s=>s.listing.loadMore()))}}const mt="filerobot.com",Ei=`assets.${mt}`,Zo=`preview.${mt}`,$="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",br=["vh","p"],en=["ci_url_encoded","secret_key"];let Xa=!1;const jc=/(^|\.)(filerobot\.com|filerobot\.io|cloudimg\.io)$/i;function Vc(t,e){if(Xa||!t.get("p")||!jc.test(e))return;const s=[...new Set(t.keys())].filter(i=>!br.includes(i)&&!en.includes(i));s.length&&(Xa=!0,console.warn(`[dam-core] setUrlParams(): a preset (p=) is set together with ${s.join(", ")}. Only vh may sit next to a preset: other params are ignored or applied depending on how the preset is defined (width / height even replace it). Put them on a wrapper layer: setCdnParams(url, [{ p, vh }, params], ctx), or repair the URL with fixCdnParamsUrl(url, ctx). (Shown once.)`))}function $e(t,e){if(!t)return t??"";let s;try{s=new URL(t)}catch{return t}if(s.protocol!=="https:"&&s.protocol!=="http:")return t;let i=!1;for(const[r,a]of Object.entries(e)){if(a==null||a===!1){s.searchParams.has(r)&&(s.searchParams.delete(r),i=!0);continue}const o=a===!0?"1":String(a),n=s.searchParams.getAll(r);(n.length!==1||n[0]!==o)&&(s.searchParams.set(r,o),i=!0)}return i?(Vc(s.searchParams,s.hostname),s.toString()):t}function Zt(t){return t.startsWith("data:")||t.startsWith("blob:")}const Fi=/^(https?):\/\/([^/?#]+)([^?#]*)(\?[^#]*)?(#.*)?$/i,Ja=/^[\w-]+$/,Bc=/^\/v7(?=\/)/i,Kc=new Set(["api","www","assets","preview"]),qc=/^(?!scaleflex\.)[\w-]+\.(?:filerobot\.io|cloudimg\.io)$/i,Hc=/(^|\.)(filerobot\.com|filerobot\.io|cloudimg\.io)$/i,Za=/^\/https?%3A/i,tn=t=>t.replace(Bc,"");function sn(t){try{return decodeURIComponent(t)}catch{return t}}function Gc(t,e){return!!e&&t.toLowerCase()===e.toLowerCase()}function bs(t,e={}){const s=Fi.exec(t.trim());if(!s)return null;const i=s[2].toLowerCase(),r=s[3]??"",a=s[4]??"",o=s[5]??"",n=p=>{const f=r.length>1?sn(r.slice(1)):"",h=f?bs(f,e):null;return{kind:p,host:i,token:(h==null?void 0:h.token)??null,path:r,search:a,hash:o,inner:f,innerMatch:h}};if(i===Ei){if(Za.test(r))return n("assets-wrapped");const[,p,f]=/^\/([^/]+)(\/.+)$/.exec(r)??[];return!p||!Ja.test(p)?null:{kind:"assets",host:i,token:p,path:f,search:a,hash:o}}if(i===Zo)return n("preview");let l=null,c=null;if(i.endsWith(`.${mt}`)){const p=i.slice(0,-(mt.length+1));if(!Ja.test(p)||Kc.has(p))return null;l="token",c=p}else Gc(i,e.containerCdn)?(l="cname",c=e.containerToken??null):e.containerToken&&qc.test(i)&&i.split(".")[0]===e.containerToken.toLowerCase()&&(l="legacy",c=e.containerToken);return l?Za.test(r)?n(l):{kind:l,host:i,token:c,path:r,search:a,hash:o}:null}function Yc(t){return Hc.test(t)}const Wc=/^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:\.[a-z0-9]+)?$/i,Qc=/^(1f[A-Za-z0-9]{16,23})(?:_([A-Za-z0-9]+))?$/;function Dr(t,e){if(!t||Zt(t))return null;const s=bs(t,e);if(!s)return null;if(s.inner!==void 0)return s.inner?Dr(s.inner,e):null;const i=sn(tn(s.path))||"/",r=i.split("/").filter(Boolean),{token:a}=s,o=r.length>=2?Qc.exec(r[0]):null;if(o)return{kind:"permalink",token:a,permalinkId:o[1],...o[2]?{permalinkSuffix:o[2]}:{},filename:r.slice(1).join("/")};for(let n=r.length-1;n>=0;n--){const l=Wc.exec(r[n]);if(l)return{kind:"uuid",token:a,uuid:l[1].toLowerCase(),path:i}}return{kind:"path",token:a,path:i}}function Xc(t,e){var i;if(!t)return!1;if(Zt(t))return!!(e!=null&&e.allowInline);const s=bs(t,e);return s?e!=null&&e.containerToken?((i=s.token)==null?void 0:i.toLowerCase())===e.containerToken.toLowerCase():!0:!1}function Qe(t,e){if(!t)return"";if(Zt(t))return t;const s=bs(t,e);if(!s)return t;const i=`${s.search}${s.hash}`,r=e.containerToken?`https://${e.containerToken}.${mt}`:null;switch(s.kind){case"assets":return`https://${s.token}.${mt}${tn(s.path)}${i}`;case"assets-wrapped":case"legacy":case"cname":return r?`${r}${s.path}${i}`:t;default:return t}}function rn(t,e,s={}){return!t||!e?t??"":Xc(t,s)?$e(t,{secret_key:e}):t}function Ti(t,e){const{containerToken:s,containerCdn:i}=e;if(!t||!s||!i)return t??"";const r=`https://${s}.${mt}`;return t.startsWith(`${r}/`)?`https://${i}${t.slice(r.length)}`:t}let eo=!1;function Jc(t,e,s){s||eo||!t.startsWith(`https://${Ei}/`)||(eo=!0,console.warn(`[dam-core] ${e}() returned an ${Ei} URL. These URLs are internal (Hub only) and must never be used on public surfaces (Portals, widgets, asset picker). Use formatToCdnUrl() / getFilePresentation() instead, or pass { internal: true } from an internal surface. (Shown once.)`))}function an(t,e={},s={}){if(!t||Zt(t)||!Fi.test(t))return t??"";const r=`https://${s.forceAssetsHost?Ei:e.containerCdn||(e.containerToken?`${e.containerToken}.${mt}`:Zo)}/${encodeURIComponent(t)}?ci_url_encoded=1`;return Jc(r,"wrapUrl",s.internal),r}function to(t,e={}){if(!t||Zt(t))return null;const s=bs(t,e);if(!(s!=null&&s.inner)||!/^https?:\/\//i.test(s.inner))return null;const i=new URLSearchParams(s.search);return i.get("ci_url_encoded")!=="1"?null:(i.delete("ci_url_encoded"),{url:s.inner,cdnParams:Object.fromEntries(i)})}function on(t,e){const s=[];let i=t;for(let r=to(i,e);r;r=to(i,e))s.unshift(r.cdnParams),i=r.url;return{base:i,wrappers:s}}function Zc(t,e={}){if(!t||Zt(t))return[];const{base:s,wrappers:i}=on(t,e);let r;try{r=new URL(s).searchParams}catch{return[]}return[Object.fromEntries(r),...i]}function so(t,e,s={},i={}){if(!t||Zt(t))return t??"";const r=on(t,s),a=Fi.exec(r.base);if(!a)return t;const{clearExisting:o,...n}=i,l=!bs(r.base,s),c=o&&!l?`${a[1]}://${a[2]}${a[3]??""}${a[5]??""}`:r.base,p=o?[]:r.wrappers,f=[],h=Math.max(p.length,e.length-1);for(let b=0;b<h;b++){const _=sd(p[b]??{},e[b+1]??{});(Object.keys(_).length||b===0&&l)&&f.push(_)}if(!ed(1+f.length,"setCdnParams"))return t;let g=$e(c,e[0]??{});const v=Fi.test(g)?Object.fromEntries(new URL(g).searchParams):{};td(l?f:[v,...f]);for(const b of f)g=$e(an(g,s,n),b);return g}const io=2,ro=3;let ao=!1;function ed(t,e){return t>ro?(console.error(`[dam-core] ${e}(): ${t} layers requested, the CDN only renders up to ${ro} reliably (4+ fail with a 404). The URL was left unchanged. Reduce the layers, e.g. with fixCdnParams(getCdnParams(url)).`),!1):(t>io&&!ao&&(ao=!0,console.warn(`[dam-core] ${e}(): a URL with ${t} layers works, but keep to ${io} where you can (fixCdnParams merges layers when the result is the same). (Shown once.)`)),!0)}let oo=!1;function td(t){if(oo||!t.length)return;const e=[];for(const i of br){const r=t.filter(a=>i in a).length;r>1&&e.push(`${i}= on ${r} layers`)}const s=t.findIndex(i=>"p"in i);if(s>=0){const i=Object.keys(t[s]).filter(r=>!br.includes(r)&&!en.includes(r));i.length&&e.push(`${i.join(", ")} next to the preset (only vh may be)`)}t.slice(1).some(i=>"vh"in i)&&e.push("vh= on a wrapper layer"),e.length&&(oo=!0,console.warn(`[dam-core] setCdnParams(): ${e.join("; ")}. The URL was built as asked; a preset belongs alone on its layer (only vh next to it, and vh on the innermost layer): fixCdnParams / fixCdnParamsUrl rearrange it. (Shown once.)`))}function sd(t,e){const s={};for(const[i,r]of Object.entries(t))r!=null&&r!==!1&&(s[i]=String(r));for(const[i,r]of Object.entries(e))r==null||r===!1?delete s[i]:s[i]=r===!0?"1":String(r);return s}function Rr(t){var s;const e=typeof t=="string"?t:(s=t==null?void 0:t.in_cdn)==null?void 0:s.actual;return typeof e=="string"&&e.startsWith("public")}const Ct=[];function id(t){const e={...t};return Ct.push(e),()=>{const s=Ct.indexOf(e);s>=0&&Ct.splice(s,1)}}function rd(t){return(typeof t=="function"?t():t)||null}function ad(t){return/^https?:\/\/[^/?#]+\/\.internal\//i.test(t)}function nn(t){const e=/^https?:\/\/([^/?#]+)/i.exec(t);return e?e[1].toLowerCase():null}function ln(t,e){for(let i=Ct.length-1;i>=0;i--){const r=Ct[i];if(t===`${r.containerToken.toLowerCase()}.${mt}`)return{registration:r,containerCdn:r.containerCdn??null};if(r.containerCdn&&t===r.containerCdn.toLowerCase())return{registration:r,containerCdn:r.containerCdn}}const s=new Set(Ct.map(i=>i.containerToken));return e&&t===e.toLowerCase()&&s.size===1?{registration:Ct[Ct.length-1],containerCdn:e}:null}function cn(t,e={}){if(!t||e.isPublic||ad(t))return t??"";const s=nn(t);if(!s)return t;const i=ln(s,e.containerCdn);return i?rn(t,rd(i.registration.secretKey),{containerCdn:i.containerCdn}):t}function _r(t,e={}){if(!t)return t??"";const s=nn(t);if(!s)return t;const i=ln(s,e.containerCdn);return i?Qe(t,{containerToken:i.registration.containerToken,containerCdn:i.containerCdn}):t}function od(){let t=0,e=!0,s=null,i=null;const r=()=>{i==null||i(),i=e&&s?id(s):null};return{start:()=>(s=null,r(),++t),set(a,o){a===t&&(s=o,r())},connect(){e=!0,r()},disconnect(){e=!1,r()}}}async function nd(t){return(await t.get("/labels")).labels??[]}function ld(t){return Array.isArray(t)?t.map(e=>typeof e=="string"?{name:e}:e&&typeof e.name=="string"?{name:e.name,desc:e.desc}:null).filter(e=>e!==null):[]}async function no(t){var i,r,a;const e=await t.get("/settings"),s=(e==null?void 0:e.presets)??((i=e==null?void 0:e.cloudimg)==null?void 0:i.presets)??((a=(r=e==null?void 0:e.settings)==null?void 0:r.cloudimg)==null?void 0:a.presets)??void 0;return ld(s)}const cd=["cdn_permalink"],dn={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};function hn(t){let e=t.fields??cd;t.permalinksEnabled||(e=e.filter(o=>o!=="cdn_permalink"));const s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",r=t.sort_direction??"desc";s.sort=`${dn[i]||i}:${r}`,t.folder&&(s.folder=t.folder);const a=[];return t.search&&!t.with_ai&&a.push(t.search),t.q&&a.push(t.q),a.length>0&&(s.q=a.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}function kt(t,e){return t.get("/files",hn(e))}function dd(t,e){const{foldersUuids:s,...i}=e;return t.query("/files",hn(i),{folders_uuids:s})}function ni(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.get("/files/stats",s)}function hd(t,e){return t.query("/folders/stats",e.q?{q:e.q}:void 0,{folders_uuids:e.foldersUuids})}function pd(t,e){const s={};return e.folder&&e.folder!=="/"&&(s.folder=e.folder),e.q&&(s.q=e.q),t.get("/folders/stats",s)}function tr(t,e={}){const s={recursive:e.recursive??0,folder:e.folderPath??"/",limit:e.limit??1e3,offset:e.offset??0};e.q&&(s.q=e.q);const i=e.sort_by??"created_at",r=e.sort_direction??"asc";return s.sort=`${dn[i]||i}:${r}`,t.get("/folders",s)}async function lo(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}const ud={excellent:90,good:75,fair:60},fd={webp:"awebp,webp",gif:"agif,gif"};function zr(t){const e={},s=!!(t.width||t.height);return t.width&&(e.w=t.width),t.height&&(e.h=t.height),t.quality!=null&&t.format!=="png"&&(e.q=t.quality),t.format&&(e.force_format=fd[t.format]??t.format),t.fit&&s&&(e.func=t.fit),t.noUpscale&&s&&(e.org_if_sml=1),t.downloadAs&&(e.force_download=gd(t.downloadAs,t.format)),Object.keys(e).length&&(e.download=null),e}function gd(t,e){if(!e)return t;const s=e==="jpeg"?"jpg":e;return`${t.replace(/\.[^./\\]+$/,"")||t}.${s}`}const md='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',ht=`data:image/svg+xml,${encodeURIComponent(md)}`,fi={_default:$+"GENERIC.svg?vh=9a518a",png:$+"PNG.svg?vh=96cd9a",jpg:$+"JPG.svg?vh=06e819",jpg2:$+"JPG2.svg?vh=f0eb7f",jpeg:$+"JPEG.svg?vh=6a65e9",gif:$+"GIF.svg?vh=c3c2c3",bmp:$+"BMP.svg?vh=d2243a",webp:$+"WEBP.svg?vh=fedd74",svg:$+"SVG.svg?vh=a15e46",tiff:$+"TIFF.svg?vh=1f30c3",tif:$+"TIF.svg?vh=b383c9",heic:$+"HEIC.svg?vh=84adfe",avif:$+"AVIF.svg?vh=536b30",ico:$+"ICO.svg?vh=79063d",psd:$+"PSD.svg?vh=be6140",psb:$+"PSB.svg?vh=678646",ai:$+"AI.svg?vh=84b254",dwg:$+"DWG.svg?vh=971fb3",mp4:$+"MP4.svg?vh=42f175",webm:$+"WEBM.svg?vh=26a84a",avi:$+"AVI.svg?vh=d22ba8",mpeg:$+"MPEG.svg?vh=ba93bb",ogv:$+"OGV.svg?vh=74d453","3gp":$+"3GP.svg?vh=f0d388","3g2":$+"3G2.svg?vh=04c652",swf:$+"SWF.svg?vh=3955e2",fla:$+"FLA.svg?vh=daf585",m3u8:$+"M3U8.svg?vh=7d5e62",mp3:$+"MP3.svg?vh=66bbef",wav:$+"WAV.svg?vh=d7a7d5",aac:$+"AAC.svg?vh=07f3f9",oga:$+"OGA.svg?vh=a5c622",opus:$+"OPUS.svg?vh=9548b1",weba:$+"WEBA.svg?vh=4dcf70",mid:$+"MID.svg?vh=3f0e29",midi:$+"MIDI.svg?vh=9fedec",cda:$+"CDA.svg?vh=85b83b",pdf:$+"PDF.svg?vh=18c5f7",doc:$+"DOC.svg?vh=d1b47c",docx:$+"DOCX.svg?vh=1eb6b0",txt:$+"TXT.svg?vh=307979",rtf:$+"RTF.svg?vh=978c5f",xls:$+"XLS.svg?vh=13b5f7",xlsx:$+"XLSX.svg?vh=79d64a",ppt:$+"PPT.svg?vh=4ee29b",pptx:$+"PPTX.svg?vh=8b1568",pps:$+"PPT.svg?vh=4ee29b",csv:$+"CSV.svg?vh=4add78",tsv:$+"TSV.svg?vh=800a87",ssv:$+"SSV.svg?vh=f930c4",psv:$+"PSV.svg?vh=de269f",odt:$+"ODT.svg?vh=940781",ods:$+"ODS.svg?vh=9fbe9a",odp:$+"ODP.svg?vh=bf892d",dbf:$+"DBF.svg?vh=457bd4",vsd:$+"VSD.svg?vh=8a9ccb",abw:$+"ABW.svg?vh=313dc7",epub:$+"EPUB.svg?vh=15263d",azw:$+"AZW.svg?vh=a018b1",ics:$+"ICS.svg?vh=909f63",ogx:$+"OGX.svg?vh=f694d2",zip:$+"ZIP.svg?vh=84f98b",rar:$+"RAR.svg?vh=1d6423","7z":$+"7Z.svg?vh=e007e5",tar:$+"TAR.svg?vh=603aed",gz:$+"GZ.svg?vh=de13f7",bz:$+"BZ.svg?vh=0374ff",bz2:$+"BZ2.svg?vh=e14294",arc:$+"ARC.svg?vh=942fad",jar:$+"JAR.svg?vh=149796",mpkg:$+"MPKG.svg?vh=dea655",ttf:$+"TTF.svg?vh=d2e2c1",otf:$+"OTF.svg?vh=c904fd",woff:$+"WOFF.svg?vh=4b8177",woff2:$+"WOFF2.svg?vh=b532d3",eot:$+"EOT.svg?vh=a54980",js:$+"JS.svg?vh=524691",mjs:$+"MJS.svg?vh=d57921",ts:$+"TS.svg?vh=9af3ae",css:$+"CSS.svg?vh=287863",html:$+"HTML.svg?vh=fa7a87",htm:$+"HTM.svg?vh=21323d",xhtml:$+"XHTML.svg?vh=e6d6a9",xul:$+"XUL.svg?vh=6c9c71",json:$+"JSON.svg?vh=104c9e",jsonld:$+"JSONLD.svg?vh=f30c0f",xml:$+"XML.svg?vh=7f7194",php:$+"PHP.svg?vh=503e36",sh:$+"SH.svg?vh=3b820e",csh:$+"CSH.svg?vh=08c0cc",exe:$+"EXE.svg?vh=ccca53",iso:$+"ISO.svg?vh=064b8f",bin:$+"BIN.svg?vh=1e9618",glb:ht,gltf:ht,obj:ht,fbx:ht,stl:ht,usdz:ht,ply:ht,"3ds":ht,dae:ht};function yg(){return fi._default}const vd={"image/svg+xml":"svg","image/vnd.adobe.photoshop":"psd","video/quicktime":"mp4","video/x-msvideo":"avi","audio/mpeg":"mp3","audio/x-wav":"wav","audio/wave":"wav","audio/ogg":"oga","video/ogg":"ogv","application/msword":"doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","application/vnd.ms-excel":"xls","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","application/vnd.ms-powerpoint":"ppt","application/vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","application/vnd.oasis.opendocument.text":"odt","application/vnd.oasis.opendocument.spreadsheet":"ods","application/vnd.oasis.opendocument.presentation":"odp","application/epub+zip":"epub","application/x-zip-compressed":"zip","application/x-7z-compressed":"7z","application/x-rar-compressed":"rar","application/vnd.rar":"rar","application/gzip":"gz","application/x-tar":"tar","application/ld+json":"jsonld","application/xhtml+xml":"xhtml","text/plain":"txt","text/javascript":"js","application/javascript":"js","text/calendar":"ics","font/sfnt":"ttf"};function bd(t){const e=(t??"").split(";")[0].trim().toLowerCase();return e.includes("/")?vd[e]??e.split("/")[1]:""}function He(t,e){const s=((t==null?void 0:t.split(".").pop())||"").toLowerCase();return fi[s]||fi[bd(e)]||fi._default}function _d(t){return t?$e(t,{w:600,force_format:"webp,jpeg",doc_page:1,bypass_process_proxy:1,func:null}):""}const xd=8e8,yd=new Set("dng cr2 cr3 crw nef nrw arw sr2 srf orf raw rw2 raf pef srw x3f erf mrw 3fr dcr kdc".split(" ")),wd=new Set("x-adobe-dng x-canon-cr2 x-canon-cr3 x-canon-crw x-nikon-nef x-nikon-nrw x-sony-arw x-sony-sr2 x-sony-srf x-olympus-orf x-panasonic-raw x-panasonic-rw2 x-fuji-raf x-pentax-pef x-samsung-srw x-sigma-x3f x-epson-erf x-minolta-mrw x-hasselblad-3fr x-kodak-dcr x-kodak-kdc".split(" ").map(t=>`image/${t}`)),$d=new Set("jpg jpeg png gif webp svg avif bmp tif tiff heic heif ico psd".split(" ")),kd=new Set("mp4 webm mov m4v avi mkv ogv".split(" "));function Sd(t){const e=(t.mime??"").toLowerCase(),s=(t.name.split(".").pop()??"").toLowerCase(),i=!e.includes("/");return wd.has(e)||yd.has(s)?"raw":e.includes("pdf")||i&&s==="pdf"?"pdf":i&&$d.has(s)?"image":i&&kd.has(s)?"video":e.startsWith("image")?"image":e.startsWith("video")?"video":"other"}const Nt=(...t)=>t.find(e=>!!e)??"";function pn(t,e,s={}){const{thumbnailWidth:i=240,thumbnailFunc:r="bound"}=s,a=t.isPublic?null:s.secretKey,o=Nt(t.cdnPermalinkUrl,t.cdnUrl),n=o?rn(Qe(o,e),a,e):"",l=t.thumbnailUrl??"",c=t.previewUrl??"",p=t.videoThumbnailUrl??"";let f,h;switch(Sd(t)){case"raw":{const v=n?$e(n,{w:i,func:r}):"";f=h=Nt(c,l,v);break}case"image":{const v=n?$e(n,{w:i,func:r}):"";f=Nt(l,c,v),h=Nt(n,c,l);break}case"video":f=h=Nt(p,l,c);break;case"pdf":{const v=n?$e(_d(n),{w:i}):"";f=h=Nt(l,c,v);break}default:f=h=Nt(l,c)}const g=(t.size??0)>xd;return{imageUrl:h,thumbnailUrl:f,originalUrl:n,downloadUrl:(g||!n)&&t.publicUrl?t.publicUrl:n,iconUrl:He(t.name,t.mime)}}function Cd(t){const e=t.url;return typeof e=="object"&&e!==null}function un(t){var s,i,r,a,o;if(!Cd(t))return{name:t.name,mime:t.fileType||t.type,size:t.size,isPublic:t.isPublic,cdnUrl:t.cdnUrl,thumbnailUrl:t.thumbnailUrl};const e=t.info??{};return{name:t.name,mime:t.mime||t.type,size:(s=t.size)==null?void 0:s.bytes,isPublic:t.visibility===void 0?void 0:Rr(t.visibility),cdnUrl:(i=t.url)==null?void 0:i.cdn,cdnPermalinkUrl:(r=t.url)==null?void 0:r.cdn_permalink,publicUrl:(a=t.url)==null?void 0:a.public,thumbnailUrl:e.thumbnail||e.image_thumbnail||((o=t.data)==null?void 0:o.thumbnail),previewUrl:e.preview,videoThumbnailUrl:e.video_thumbnail}}function Ad(t,e){let s;const i=((...r)=>{clearTimeout(s),s=setTimeout(()=>t(...r),e)});return i.cancel=()=>clearTimeout(s),i}const xr="folders";function sr(t){return t instanceof Qo&&t.code==="DIR_NOT_FOUND"}function te(t){const e=(t??"").trim();return!e||e==="/"?"/":(e.startsWith("/")?e:`/${e}`).replace(/\/+$/,"")||"/"}function Oi(t,e){return t==="/"?e!=="/":e.startsWith(`${t}/`)}function fn(t){const e=[...new Set(t.map(te))];return e.filter(s=>!e.some(i=>i!==s&&Oi(i,s)))}const Ed=new Set([void 0,"",":","="]);function Is(t,e){const s=te(t);return e.some(i=>i===s||Oi(i,s))}function yr(t,e){return t.flatMap(s=>e.some(i=>i===s||Oi(i,s))?[s]:e.filter(i=>Oi(s,i)))}function Fd(t,e="/"){const s=(t??[]).filter(i=>typeof i=="string"&&i.trim());return s.length===0?null:fn(yr(s.map(te),[te(e)]))}function wr(t,e="/",s=null){var a;const i=((a=t==null?void 0:t.values)==null?void 0:a.filter(o=>typeof o=="string"&&o.trim()))??[];if(i.length===0)return s?s.length>0?s:null:[];if(!Ed.has(t==null?void 0:t.operator))return null;let r=yr(i.map(te),[te(e)]);return s&&(r=yr(r,s)),r.length===0?null:fn(r)}function Td(t,e,s){var r;if(!((r=t==null?void 0:t.values)!=null&&r.some(a=>typeof a=="string"&&a.trim())))return t;const i=wr(t,e,s);return i?{...t,values:i}:t}function Od(t,e){return e[xr]??t[xr]}function gi(t){const e=te(t);return e==="/"?"/":e.slice(e.lastIndexOf("/")+1)}async function Ld(t){return t.get("/collections")}async function Pd(t,e){return t.get(`/collections/${e}/folders`)}function gn(t){return t.filter(e=>!!e.name).map(e=>({...e,children:gn(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function Md(t){return((await t.get("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,r)=>i.label.localeCompare(r.label))}async function Id(t){return await t.get("/public/settings")}const Dd=3e4;async function Rd(t,e){const s=`${e}/key/${t.securityTemplateKey}`,i=new AbortController,r=setTimeout(()=>i.abort(),Dd);try{const a=await fetch(s,{headers:{"X-Filerobot-Key":t.securityTemplateKey},signal:i.signal});if(clearTimeout(r),!a.ok){let n=`API error: ${a.status} ${a.statusText}`;try{const l=await a.json();l.msg&&(n=`API error: ${a.status} - ${l.msg}`)}catch{}throw new Error(n)}const o=await a.json();if(o.status==="error")throw new Error(`API error: ${o.msg||"Unknown error"}`);return{key:o.key,permissions:o.permissions??[],listScope:o.list_scope??[],uploadScope:o.upload_scope??[]}}catch(a){throw clearTimeout(r),a instanceof DOMException&&a.name==="AbortError"?new Error("API request timed out"):a}}function zd(t,e){return t?t.includes(e):!1}function mn(t){const e=t.trim().replace(/\/?\*+$/,"").replace(/\/+$/,"");return e?e.startsWith("/")?e:`/${e}`:"/"}function Nd(t){const e=t.replace(/\/+$/,"");return e?e.startsWith("/")?e:`/${e}`:"/"}function vn(t,e){const s=Nd(t);return e.some(i=>{const r=mn(i);return r==="/"||s===r||s.startsWith(`${r}/`)})}function Ud(t,e){if(!(e!=null&&e.length)||vn(t,e))return t;const s=mn(e[0]);return s==="/"?"/":`${s}/`}const jd={FOLDER_CREATE:"DIR_CREATE"};function Vd(t){var r,a;const e=(r=t.info)==null?void 0:r.playlists;if(!(e!=null&&e.length))return null;const s=(a=e[0])==null?void 0:a.playlists;return s!=null&&s.length&&s[0]||null}function Ut(t){return(t.type??"").startsWith("image")}function ir(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function rr(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const Bd=ud,Kd=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],qd=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],Hd=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],Gd=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),Yd=new Set([...Gd,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function Gt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function bn(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Yd.has(e)}function Nr(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Wd=new Set(["png","svg","webp","gif","avif"]);function Ur(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Wd.has(e)}const Qd=new Set(["svg","svg+xml","png","pdf"]);function _n(t){return Qd.has(Nr(t).toLowerCase())}let Li=null;function Xd(t){Li=t??null}function Jd(t,e){if(!t||!Li)return t;try{return Li(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function Ye(t,e){return t&&(Li?Jd(_r(t),e):cn(_r(t),{isPublic:e.asset?Rr(e.asset.visibility):void 0}))}function ar(t,e){return t&&cn(_r(t),{isPublic:Rr(e.visibility)})}function jr(t,e){return pn(un(t),{},{thumbnailWidth:e})}function xn(t,e,s={}){return $e(Qe(t,s),{p:e})}function yn(t,e){var i,r;const s=((i=t.transformation)==null?void 0:i.url.cdn)??((r=t.url)==null?void 0:r.cdn)??"";return s?xn(s,e):null}function Zd(t,e){const s=un(t),i=s.thumbnailUrl||s.previewUrl||"";return i?xn(i,e):yn(t,e)}function Pi(t,e){if(e&&e!=="original"){const s=Zd(t,e);if(s)return Ye(s,{source:"asset",asset:t})}return Ye(jr(t).thumbnailUrl,{source:"asset",asset:t})}function wn(t){return Ye(jr(t).thumbnailUrl,{source:"video",asset:t})}function Vr(t){return Ye(jr(t,200).thumbnailUrl,{source:"pdf",asset:t})}function $n(t,e){const s=t.file_uri_cdn;if(!s)return"";const i=window.devicePixelRatio||1;let r;if(Gt(t.file_type)==="video")r=$e(Qe(s,{}),{w:e,dpr:i,force_format:"webp,jpeg"});else{const a=pn({name:"",mime:t.file_type,cdnUrl:s},{},{thumbnailWidth:Number(e)||void 0}).thumbnailUrl;r=a?$e(a,{dpr:i}):""}return Ye(r,{source:"folder"})}function eh(t,e={}){return{format:t.format,quality:t.quality?Bd[t.quality]:void 0,width:t.width||void 0,height:t.height||void 0,fit:e.isMultiSelect?"bound":e.isAspectLocked===!1?"cover":void 0,noUpscale:!!e.isMultiSelect||!e.exactSize}}const $r=3;function th(t,e,s,i){if(!t)return"";const r=$e(Qe(t,s),{download:null}),a=sh(r,s),o=Zc(r,a);if(!o.length)return r;const n=i?zr(i):{},l=Object.values(n).some(h=>h!=null&&h!==!1),c=o.map(()=>({}));if(!o.some(h=>Object.keys(h).some(g=>g!=="vh")))return c[0]={p:e},l&&c.push(n),so(r,c,a);/\bgif\b/.test(String(n.force_format??""))&&(c[c.length-1]={force_format:"jpeg",q:null});const f=c.length-1;return o.length+1+(l?1:0)<=$r?(c.push({p:e}),l&&c.push(n)):o.length+1<=$r?(c.push({p:e,...n}),co("the transform was put next to the preset")):(c[f]={...c[f],p:e,...n},co("the preset (and transform) were put on the crop's outermost layer")),so(r,c,a)}function co(t){console.warn(`[asset-picker] variant output needs more than ${$r} layers for this crop: ${t}. Params next to a preset depend on the preset's definition (a size is usually ignored).`)}function ho(t,e,s){return t?$e(Qe(t,e),{download:null,...zr(s)}):""}function sh(t,e){var s;return{containerToken:e.containerToken??((s=Dr(t,e))==null?void 0:s.token)??null,containerCdn:e.containerCdn??null}}const ih=/(^|\.)(cloudimg\.io|filerobot\.com)$/i;function kn(t){try{const{host:e,hostname:s}=new URL(t);return ih.test(s)?null:e}catch{return null}}const rh=["free","square","6:1","5:1","4:1","3:1","16:6","21:9","2:1","16:9","3:2","7:5","4:3","5:4","9:16","3:4","2:3","4:5","1:2"],ah="free",oh={x:0,y:0,width:1,height:1};function nh(t,e){const s=t&&e?kn(t):null;return s?Qe(t,{containerToken:e,containerCdn:s}):t}function lh(t,e,s){const i=s?kn(e):null;return i?Ti(t,{containerToken:s,containerCdn:i}):t}const ch=.001,ns=(t,e)=>Math.abs(t-e)<ch;function po(t){const e=t.cropRect;return ns(e.x,0)&&ns(e.y,0)&&ns(e.width,1)&&ns(e.height,1)&&t.quarterTurns%4===0&&ns(t.rotation,0)&&!t.flipH&&!t.flipV&&ns(t.scale,1)}function dh(t,e,s={}){var o;if(!/\bgif\b/.test(String(e.force_format??"")))return $e(t,e);const i=$e(Qe(t,s),{force_format:"jpeg",q:null}),r=s.containerToken??((o=Dr(i,s))==null?void 0:o.token)??null,a=r?{containerToken:r}:{containerCdn:s.containerCdn};return!a.containerToken&&!a.containerCdn?$e(t,e):Ti($e(an(i,a),e),s)}function hh(t){let e;try{e=new URL(t).searchParams}catch{return null}const s=c=>{var p;return(p=e.get(c))==null?void 0:p.split(",").map(Number)},i=s("tl_px"),r=s("br_px");if(!i||!r||i.length!==2||r.length!==2||[...i,...r].some(Number.isNaN))return null;const a=Math.round(r[0]-i[0]),o=Math.round(r[1]-i[1]);return a<=0||o<=0?null:!(e.get("ci_url_encoded")==="1")&&Math.round(Math.abs(Number(e.get("r")??0)))%180===90?{width:o,height:a}:{width:a,height:o}}async function ph(t,e){try{const{resolveServerCrop:s}=await j(async()=>{const{resolveServerCrop:l}=await import("./index-C-k343nb.js").then(c=>c.i);return{resolveServerCrop:l}},__vite__mapDeps([0,1])),i=t,r=s(i.state,i.imageWidth,i.imageHeight,i.containerWidth,i.containerHeight,i.variant,i.serverFraming??"auto"),a=Math.round(r.cropPx.width),o=Math.round(r.cropPx.height);return!r.tilted&&Math.round(Math.abs(r.rotateCCW))%180===90?{width:o,height:a}:{width:a,height:o}}catch{const s=e==null?void 0:e();return s?hh(s):null}}const y={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",FOLDERS:xr,IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",RESOLUTION:"resolution",PRODUCTS:"products",FACES:"faces",ORIENTATION:"orientation",COLOR:"color"},T={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},C={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN:">",LESS_THAN:"<",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},uh={AND:"AND"},A={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",ULTRATAGS:"ultratags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},qi={[A.DATE]:"date_",[A.BOOLEAN]:"bool_",[A.NUMERIC]:"num_",[A.DECIMAL2]:"dec_",[A.ATTACHMENTS_ASSETS]:"attach_",[A.ATTACHMENT_URI]:"uri_",[A.SELECT_ONE]:"one_",[A.MULTI_SELECT]:"multi_",[A.SUPERTAGS]:"tags_",[A.ULTRATAGS]:"utags_",[A.TEXT]:"text_",[A.TEXT_AREA]:"area_",[A.GEO_POINT]:"geo_",[A.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(qi).map(([t,e])=>[e,t]));const fh=Object.values(qi);function ps(t){for(const e of fh)if(t.startsWith(e))return t.slice(e.length);return t}const We={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},uo={EMPTY:"empty",NOT_EMPTY:"non-empty"},fo="FTYPE_LANGUAGES",Ie="empty",De="non-empty",jt="specific",or=10,Cs=10,Ue=10,As=10,Sn="filters:pinned:",Cn="metadata:pinned:",go=[y.DATE,y.TYPE,y.SIZE],An=C.IS,mi="20",vi="1",gh=0,mh=[{key:y.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:y.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:y.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:y.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:y.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:y.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:y.FOLDERS,labelKey:"filterFolders",label:"Folders",icon:"folder",type:"string"},{key:y.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:y.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:y.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],vh={key:y.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},bh={key:y.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},ft=[{key:T.STATUS,labelKey:"filterApprovalStatus",label:"Approval status",icon:"square-check",type:"string"},{key:T.APPROVER,labelKey:"filterApprovalApprover",label:"Approver",icon:"file-check-2",type:"string"},{key:T.REQUESTOR,labelKey:"filterApprovalRequester",label:"Requester",icon:"user-star",type:"string"},{key:T.DUE_DATE,labelKey:"filterApprovalDueDate",label:"Due date",icon:"calendar-check-2",type:"date"}],Us=[vh,...mh,bh],Br=new Set(Object.values(T)),En=new Set([...Us.map(t=>t.key),...Br]),Fn=new Set([...Object.values(y),...Br]),_h=new Set([...Fn].filter(t=>!En.has(t))),xh={[y.FOLDERS]:["assets"]};function Mi(t,e,s=!1){if(s&&t===y.FOLDERS&&e==="folders")return!0;const i=xh[t];return!i||i.includes(e)}function bi(t,e){if(!e)return!0;const s=Br.has(t)?y.APPROVAL:t;return e.includes(s)}const Bt={[y.TYPE]:"Format",[y.DATE]:"Date",[y.SIZE]:"Size",[y.LICENSE_EXPIRY]:"License expiry",[y.TAGS]:"Tags",[y.LABELS]:"Labels",[y.FOLDERS]:"Folders",[y.PRODUCT_REF]:"Products",[y.IMAGE]:"Image",[y.COLOR]:"Color",[y.METADATA]:"Metadata",[y.APPROVAL]:"Approval",[y.MIME_TYPE]:"MIME type",[y.RESOLUTION]:"Resolution",[y.PRODUCTS]:"Products",[y.FACES]:"Faces",[y.ORIENTATION]:"Orientation",...Object.fromEntries(ft.map(t=>[t.key,t.label]))},cs={...Object.fromEntries(Us.map(t=>[t.key,t.labelKey])),...Object.fromEntries(ft.map(t=>[t.key,t.labelKey])),[y.MIME_TYPE]:"filterMimeType",[y.RESOLUTION]:"filterResolution",[y.PRODUCTS]:"filterProductsBuiltin",[y.FACES]:"filterFaces",[y.ORIENTATION]:"filterOrientation"},Me={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},Ii=[{value:Me.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:Me.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:Me.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:Me.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:Me.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:Me.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:Me.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:Me.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],yh={[Me.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[Me.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[Me.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[Me.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[Me.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[Me.FONTS]:["ttf","otf","woff","woff2","eot"]},nr={RESOLUTION:0,ORIENTATION:1,FACES:2},wh=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],$h=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],kh=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Tn=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],On=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],Ln=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Di=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Sh=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Ch=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],lr=[{label:"Is",value:C.IS,labelKey:"operatorIs"},{label:"Contains",value:C.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],pt=[{label:"Is",value:C.IS,labelKey:"operatorIs"},{label:"Is not",value:C.IS_NOT,labelKey:"operatorIsNot"}],li=pt,cr=[{label:"Is",value:C.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:C.IS,labelKey:"operatorContains"},{label:"Does not contain",value:C.IS_NOT,labelKey:"operatorDoesNotContain"}],dr=[{label:"Is",value:C.IS,labelKey:"operatorIs"},{label:"Greater than",value:C.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:C.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:C.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:C.RANGE,labelKey:"operatorBetween"}],mo=[{label:"Is",value:C.IS,labelKey:"operatorIs"},{label:"Is not",value:C.IS_NOT,labelKey:"operatorIsNot"}],ds=C.IS,Ah=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--sfx-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--sfx-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--sfx-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"}],Ri=[{label:"Empty",value:Ie,labelKey:"empty"},{label:"Not empty",value:De,labelKey:"notEmpty"}],Eh=[...Ri,{label:"Specific",value:jt,labelKey:"specific"}],Fh=[{label:"Empty",value:Ie,labelKey:"empty"},{label:"Not empty",value:De,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],_i={[A.DATE]:"calendar",[A.BOOLEAN]:"toggle-left",[A.NUMERIC]:"file-digit",[A.DECIMAL2]:"decimals-arrow-right",[A.ATTACHMENTS_ASSETS]:"paperclip",[A.ATTACHMENT_URI]:"link-2",[A.SELECT_ONE]:"circle-dot",[A.MULTI_SELECT]:"square-check",[A.SUPERTAGS]:"hash",[A.ULTRATAGS]:"hash",[A.TEXT]:"text-initial",[A.TEXT_AREA]:"text-align-justify",[A.GEO_POINT]:"locate",[A.INTEGER_LIST]:"list-ordered"},Pn={[A.TEXT]:"text",[A.TEXT_AREA]:"text",[A.NUMERIC]:"number",[A.DECIMAL2]:"number",[A.BOOLEAN]:"boolean",[A.SELECT_ONE]:"select-one",[A.MULTI_SELECT]:"multi-select",[A.SUPERTAGS]:"tags",[A.ULTRATAGS]:"ultratags",[A.DATE]:"date",[A.GEO_POINT]:"geo",[A.ATTACHMENTS_ASSETS]:"attachment",[A.ATTACHMENT_URI]:"attachment",[A.INTEGER_LIST]:"attachment"};function ci(t){return Object.prototype.hasOwnProperty.call(Pn,t)}async function Th(t){var i;return(((i=(await t.get("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(r=>({name:r.name,value:r.value,count:r.count,category:r.category??r.value.split("_")[0],label:Oh(r.name)}))}function Oh(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function wg(t){return(await Mn(t)).fields}async function Mn(t){var g;const e=await t.get("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,a=((i==null?void 0:i.model)??[])[gh],o=i==null?void 0:i.store,l=((o==null?void 0:o.regional_variants_groups)??[]).map(v=>({uuid:v.uuid,label:v.label??v.name??"",type:v.type,variants:(v.variants??[]).map(b=>({api_value:b.api_value??b.value??"",internal_unique_value:b.internal_unique_value??b.api_value??"",label:b.label??b.name??""}))})).filter(v=>v.variants.length>1),c={};for(const v of l)c[v.uuid]=((g=v.variants[0])==null?void 0:g.api_value)??"";const p=!!((s==null?void 0:s._cdn_permalink_enabled)??e._cdn_permalink_enabled);if(!a)return{fields:[],regionalVariantGroups:l,regionalFilters:c,cdnPermalinkEnabled:p};const f=a.groups??[],h=[];for(const v of f){const b=v.name||"";for(const _ of v.fields??[]){const S=_.type??A.TEXT,w=_.possible_values,P=w==null?void 0:w.map(k=>({api_value:k.api_value??k.value??"",internal_unique_value:k.internal_unique_value??k.api_value??"",label:k.label??k.name??k.api_value??""}));h.push({key:_.key??_.ckey,label:_.title??_.label??_.key??"",type:S,slug:_.slug,ckey:_.ckey,possible_values:P,group:b,regionalVariantsGroupUuid:_.regional_variants_group_uuid})}}return{fields:h,regionalVariantGroups:l,regionalFilters:c,cdnPermalinkEnabled:p}}function ut(t){return t.toLocaleDateString("en-CA")}function zi(t){if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const e=new Date(t);return Number.isNaN(e.getTime())?t:ut(e)}function di(){return ut(new Date)}function us(t){const e=new Date;switch(t){case"today":return{from:di(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:ut(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:di(),to:ut(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:ut(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:di(),to:ut(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:ut(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:di(),to:ut(s)}}default:return null}}function vo(t,e){return e?e.type==="date"?Lh(e):e.type==="string"?Ph(e):!0:!1}function Lh(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function Ph(t){return!t.values||!Array.isArray(t.values)||t.values.filter(Boolean).length===0?!1:t.operator===C.RANGE&&Mh(t)?!!t.values[0]&&!!t.values[1]:!0}function Mh(t){return t.metadataType===A.NUMERIC||t.metadataType===A.DECIMAL2}function Ih(t,e={}){const s=[];for(const[i,r]of Object.entries(t)){if(!r||i===y.FOLDERS||!vo(i,r))continue;const a=Rh(i,r);s.push(...a)}for(const[i,r]of Object.entries(e)){if(!r||!vo(i,r))continue;const a=Kh(i,r);s.push(...a)}return Dh(s)}function Dh(t){const e=[],s=[],i=[];for(const r of t)r.startsWith("type:")||r.startsWith("type=")?e.push(r):r.startsWith("mimetype:")||r.startsWith("mimetype=")?s.push(r):i.push(r);if(e.length>0&&s.length>0){const r=[...e,...s].join(" , ");i.push(r)}else i.push(...e,...s);return i}function Rh(t,e){if(e.type==="date")return In(t,e);if(t===y.IMAGE)return Bh(e);const s=e,{operator:i=An,values:r=[],logic:a}=s;if(r.length===0)return[];switch(t){case y.SIZE:return zh(t,r,"..");case y.FACES:return Nh(t,i,r);case y.TAGS:return Kt(t,i,bo(r),",",a);case y.LABELS:return Kt(t,i,bo(r),",",a);case y.COLOR:return Uh(i,r,a);case y.TYPE:return jh(r,i);case y.MIME_TYPE:return Vh(t,r,i);case y.PRODUCT_REF:return Kt(t,"=%",r,",",a);default:return Kt(t,i,r,",",a)}}function In(t,e){const s=e.field||"created";if(e.kind===We.PRESET&&e.preset){if(e.preset===uo.EMPTY)return[`${s}:"empty"`];if(e.preset===uo.NOT_EMPTY)return[`${s}:"non-empty"`];const i=us(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===We.AFTER&&e.from)return[`${s}>"${e.from}"`];if(e.kind===We.BEFORE&&e.to)return[`${s}<"${e.to}"`];if(e.kind===We.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}>"${e.from}"`];if(!e.from&&e.to)return[`${s}<"${e.to}"`]}return e.kind===We.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function zh(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Nh(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function Kt(t,e,s,i,r){if(s.length===0)return[];if(r===uh.AND)return s.map(o=>`${t}${e}"${o}"`);const a=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${a}`]}function Uh(t,e,s){const i=[],r=Kt("color_search",t,e,",",s);return i.push(...r),i.push('color_operator:"AND"'),i}function jh(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const a of t){const o=yh[a];if(o)for(const n of o){const l=`${a}_${n}`;s.has(l)||(s.add(l),i.push(l))}else s.has(a)||(s.add(a),i.push(a))}const r=i.map(a=>`"${a}"`).join(",");return[`type${e}${r}`]}function Vh(t,e,s,i){if(e.length===0)return[];const r=e.map(a=>`"${a}"`).join(",");return[`${t}${s}${r}`]}function Bh(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,n=o.resolution,l=o.orientation,c=o.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),l!=null&&l.length&&e.push(`orientation:"${l.join(",")}"`),c!=null&&c.length&&e.push(`faces:"${c.join(",")}"`),e}const s=t,i=s[nr.RESOLUTION],r=s[nr.ORIENTATION],a=s[nr.FACES];return i&&e.push(`resolution:"${i}"`),r&&e.push(`orientation:"${r}"`),a&&e.push(`faces:"${a}"`),e}function Kh(t,e){const s=ps(t),i=Hh(t);if(e.type==="date")return qh(s,e,i);const r=e,{operator:a=An,values:o=[],logic:n,metadataType:l}=r;if(o.length===0)return[];if(o.length===1&&(o[0]===Ie||o[0]===De)){const p=l===A.GEO_POINT?C.IS+"~":C.IS;return[`${s}${p}"${o[0]}"`]}if(l===A.DATE){const p=r.metaDatePreset?us(r.metaDatePreset):null;if(p)return p.to?[`"${s}:${p.from}..${p.to}"`]:[`"${s}:${p.from}"`];const f=o.map(zi);if(a===C.RANGE&&f.length===2)return[`"${s}:${f[0]}..${f[1]}"`];if(f.length===1){const h=a===C.LESS_THAN||a===C.GREATER_THAN?a:C.IS;return[`"${s}${h}${f[0]}"`]}}const c=l===A.NUMERIC||l===A.DECIMAL2;if(c&&a===C.RANGE)return[`${s}${C.IS}"${o.join('","')}"`];if(c&&(a===C.GREATER_THAN_OR_EQUAL||a===C.LESS_THAN_OR_EQUAL)){const p=a===C.GREATER_THAN_OR_EQUAL?o[0]:o[1]??o[0];return p?[`${s}${a}"${p}"`]:[]}if(l===A.GEO_POINT){const p=o.map(f=>{const h=f.indexOf("..");if(h===-1)return`(${f})`;const g=f.slice(0,h),v=f.slice(h);return`(${g})${v}`});return Kt(s,a+"~",p,",",n)}return Kt(s,a,o,",",n)}function qh(t,e,s){const i=In(t,e);return!s||i.length===0?i:i.map(r=>{const a=r.search(/[^a-zA-Z0-9_]/);if(a===-1)return`"${r}"`;const o=r.slice(0,a),l=r.slice(a).replace(/"/g,"");return`"${o}${l}"`})}function Hh(t){return t.startsWith("date_")}function bo(t){return t.map(e=>e.replace(/#/g,""))}const Gh=new Set([y.DATE,y.LICENSE_EXPIRY,T.DUE_DATE]),Yh={[y.DATE]:"created",[y.LICENSE_EXPIRY]:y.LICENSE_EXPIRY,[T.DUE_DATE]:T.DUE_DATE};function kr(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=Wh(s,i));return e}function Wh(t,e){return e.type==="string"||e.type==="date"?e:Gh.has(t)?{type:"date",field:e.field??Yh[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function Qh(t){const e=localStorage.getItem(Sn+t),s=localStorage.getItem(Cn+t);let i;try{i=e?JSON.parse(e):[...go]}catch{i=[...go]}let r;try{r=s?JSON.parse(s):[]}catch{r=[]}return{pinnedFilters:i,pinnedMetadata:r}}function Xh(t,e){localStorage.setItem(Sn+t,JSON.stringify(e))}function Jh(t,e){localStorage.setItem(Cn+t,JSON.stringify(e))}const Dn="sort-by",Rn="sort-order";function _o(t,e){try{localStorage.setItem(Dn,t),localStorage.setItem(Rn,e)}catch{}}function Zh(){try{const t=localStorage.getItem(Dn),e=localStorage.getItem(Rn);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}function Ni(t,e,s){return t==="title"?s("metadataTitleLabel","Title"):t==="description"?s("metadataDescriptionLabel","Description"):e}function ep(t,e){let s=!1;const i=t.map(r=>{const a=Ni(r.key,r.label,e);return a===r.label?r:(s=!0,{...r,label:a})});return s?i:t}function tp(t,e){if(!e)return t;let s=!1;const i=t.map(r=>{var c,p;const a=r.ckey?(c=e.fields[r.ckey])==null?void 0:c.name:void 0;let o=!1;const n=(p=r.possible_values)==null?void 0:p.map(f=>{const h=e.options[f.internal_unique_value];return!h||h===f.label?f:(o=!0,{...f,label:h})}),l=!!a&&a!==r.label;return!l&&!o?r:(s=!0,{...r,label:l&&a?a:r.label,possible_values:o?n:r.possible_values})});return s?i:t}async function sp(t,e){const s={lang:e,format:"object"},[i,r]=await Promise.all([t.get("/meta/model/fields/i18n",s),t.get("/meta/model/fields/options/i18n",s)]);return{fields:i.fields??{},options:r.options??{}}}function Kr(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function it(t){const e=t==null?void 0:t.trim().replace(/_/g,"-");if(!e)return"en";try{return Intl.DateTimeFormat.supportedLocalesOf(e).length?e:"en"}catch{return"en"}}const xo={year:"numeric",month:"short",day:"numeric"},ip={short:{},medium:xo,mediumTime:{...xo,hour:"2-digit",minute:"2-digit"}},yo=new Map;function zn(t,e){const s=`${t??""}|${e}`;let i=yo.get(s);return i||(i=new Intl.DateTimeFormat(it(t),ip[e]),yo.set(s,i)),i}function Nn(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(e){const[i,r,a]=[+e[1],+e[2]-1,+e[3]],o=new Date(i,r,a);return o.getFullYear()===i&&o.getMonth()===r&&o.getDate()===a?o:null}const s=new Date(t);return isNaN(s.getTime())?null:s}function Un(t,e){if(!t)return"";const s=Nn(t);return s?zn(e,"short").format(s):t}function js(t,e){if(!t)return"—";const s=Nn(t);return s?zn(e,"medium").format(s):"—"}function jn(t,e){return!t||!e?"":`${t} x ${e}`}function qr(t){return((t==null?void 0:t.split(":")[0])??"").toUpperCase()}function Hr(t){const e=new Map;for(const s of t)e.set(s.key,s),s.ckey&&e.set(s.ckey,s),s.slug&&e.set(s.slug,s);return e}function Sr(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(r=>r.internal_unique_value===t||r.api_value===t);return(s==null?void 0:s.label)??t}function Vn(t,e,s){var i;if(t==null||t==="")return t;if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const r=s[e.regionalVariantsGroupUuid];if(!r)return t;const a=t[r];return a==null||a===""?t:Vn(a,{...e,regionalVariantsGroupUuid:void 0},s)}if((i=e.possible_values)!=null&&i.length){const r=a=>typeof a!="string"?a:Sr(a,e)||a;return Array.isArray(t)?t.map(r):r(t)}return t}function rp(t,e){var s,i,r;return t[e]??((i=(s=t.info)==null?void 0:s.metadata)==null?void 0:i[e])??((r=t.meta)==null?void 0:r[e])}function Bn(t,e){if(!t||typeof t!="object")return[];let s=[];if(Array.isArray(t))s=t;else{const a=new Map(Object.entries(t).filter(([,p])=>Array.isArray(p)).map(([p,f])=>[p.toLowerCase(),f])),o=e==null?void 0:e.toLowerCase(),n=o==null?void 0:o.split("-")[0],l=n?[...a.keys()].find(p=>p.startsWith(`${n}-`)):void 0,c=[o,n,l,"en"].find(p=>p&&a.has(p));s=(c?a.get(c):a.values().next().value)??[]}const i=new Set,r=[];for(const a of s){const o=typeof a=="string"?{sid:a}:a,n=(o==null?void 0:o.sid)||(o==null?void 0:o.slug)||"",l=(o==null?void 0:o.label)||(o==null?void 0:o.slug)||(o==null?void 0:o.sid)||"";!l||i.has(n||l)||(i.add(n||l),r.push({label:l,sid:n}))}return r}function Gr(t,e,s,i){var r;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const a=s[e.regionalVariantsGroupUuid];if(!a)return"";const o=t[a];return o==null||o===""?"":Gr(o,{...e,regionalVariantsGroupUuid:void 0},s,i)}if(e.type===A.DATE&&typeof t=="string")return Un(t,i);if(e.type===A.ULTRATAGS)return Bn(t,i).map(a=>a.label).join(", ");if((r=e.possible_values)!=null&&r.length)return Array.isArray(t)?t.map(a=>Sr(String(a),e)).filter(Boolean).join(", "):Sr(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const a=JSON.stringify(t);return a==="{}"||a==="[]"?"":a}return String(t)}const Cr=5,ap=new Set(["title","description"]);function op(t){if(t==null)return{keys:[],dropped:[],invalid:!1};if(!Array.isArray(t))return{keys:[],dropped:[],invalid:!0};const e=t.some(i=>typeof i!="string"),s=[...new Set(t.filter(i=>typeof i=="string").map(i=>i.trim()).filter(Boolean))];return{keys:s.slice(0,Cr),dropped:s.slice(Cr),invalid:e}}function wo(t){return t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")}function np(t,e,s){if(!t.length)return[];const i=Hr(e);return t.map(r=>{const a=i.get(r);return a?a.label?a:{...a,label:wo(a.key)}:{key:r,label:Ni(r,wo(r),s),type:"text",unmodeled:!0}})}function lp(t,e){var r;if(!e.unmodeled){const a=t[e.key];if(a!=null)return a}const s=[(r=t.info)==null?void 0:r.metadata,t.meta],i=[e.key,e.ckey,e.slug].filter(a=>!!a);for(const a of i)for(const o of s){const n=o==null?void 0:o[a];if(n!=null)return n}}function cp(t,e){return t.length===e.length&&t.every((s,i)=>s===e[i]||JSON.stringify(s)===JSON.stringify(e[i]))}function dp(t=console.warn){let e,s,i,r=[];const a=new Set,o=(n,...l)=>{a.has(n)||(a.add(n),t(...l))};return(n,l,c)=>{const p=JSON.stringify(n??null);if(p===e&&l===s&&c===i)return r;const f=op(n);f.invalid&&o(`invalid:${p}`,"[asset-picker] thumbnailMetadata expects an array of metadata field keys (strings); got:",n),f.dropped.length&&o(`cap:${p}`,`[asset-picker] thumbnailMetadata supports at most ${Cr} fields; ignoring:`,f.dropped);const h=np(f.keys,l,c);if(l.length){const g=h.filter(v=>v.unmodeled&&!ap.has(v.key)).map(v=>v.key);if(g.length){const v=l.map(b=>b.key).join("|");o(`unknown:${p}:${v}`,'[asset-picker] thumbnailMetadata keys not found in the metadata model (shown as "—" unless the asset carries them):',g)}}return e=p,s=l,i=c,cp(h,r)||(r=h),r}}const Kn="ap-last-folder",qn="ap-last-view",Hn="ap-last-tab";function _s(t,e){return e?`${t}:${e}`:t}function $o(t,e){try{localStorage.setItem(_s(Kn,e),t)}catch{}}function hp(t){try{return localStorage.getItem(_s(Kn,t))}catch{return null}}function pp(t,e){try{localStorage.setItem(_s(qn,e),t)}catch{}}function up(t){try{return localStorage.getItem(_s(qn,t))}catch{return null}}function fp(t,e){try{localStorage.setItem(_s(Hn,e),t)}catch{}}function gp(t){try{const e=localStorage.getItem(_s(Hn,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function mp(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,r=parseInt(s.slice(2,4),16)/255,a=parseInt(s.slice(4,6),16)/255;return[i,r,a]}function hr(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function vp(t,e,s){const i=hr(t),r=hr(e),a=hr(s),o=.4122214708*i+.5363325363*r+.0514459929*a,n=.2119034982*i+.6806995451*r+.1073969566*a,l=.0883024619*i+.2817188376*r+.6299787005*a,c=Math.cbrt(o),p=Math.cbrt(n),f=Math.cbrt(l),h=.2104542553*c+.793617785*p-.0040720468*f,g=1.9779984951*c-2.428592205*p+.4505937099*f,v=.0259040371*c+.7827717662*p-.808675766*f,b=Math.sqrt(g*g+v*v);let _=Math.atan2(v,g)*(180/Math.PI);return _<0&&(_+=360),[h,b,_]}function bp(t){return t>.7}function _p(t,e){const s=["--sfx-primary","--sfx-primary-foreground","--sfx-primary-10","--sfx-primary-20","--sfx-accent","--sfx-accent-foreground","--sfx-ring","--sfx-selection-bg"];if(!e){for(const h of s)t.style.removeProperty(h);return}const[i,r,a]=mp(e),[o,n,l]=vp(i,r,a),c=`${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)}`,p=`oklch(${c})`,f=bp(o)?"#000":"#fff";t.style.setProperty("--sfx-primary",p),t.style.setProperty("--sfx-primary-foreground",f),t.style.setProperty("--sfx-primary-10",`oklch(${c} / 0.1)`),t.style.setProperty("--sfx-primary-20",`oklch(${c} / 0.2)`),t.style.setProperty("--sfx-accent",`oklch(${c} / 0.07)`),t.style.setProperty("--sfx-accent-foreground",p),t.style.setProperty("--sfx-ring",`oklch(${c} / 0.7)`),t.style.setProperty("--sfx-selection-bg",`oklch(${c} / 0.08)`)}const Yr=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],xp=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...Yr],yp=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],wp=[{value:"name",labelKey:"sortName",label:"Name"}],$p=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],kp=[{value:"name",labelKey:"sortName",label:"Name"}],Zs=E`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`,Sp=E`
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Gn=E`
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
 */const Cp={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ap=t=>(...e)=>({_$litDirective$:t,values:e});class Ep{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const pr=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Fp extends Ep{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Cp.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return gt}update(e,[s]){if(s===this._lastStyles)return gt;this._lastStyles=s;const{style:i}=e.element,r=s??{};for(const a of this._appliedProps)(!(a in r)||r[a]==null||r[a]==="")&&(i.removeProperty(pr(a)),this._appliedProps.delete(a));for(const[a,o]of Object.entries(r))o!=null&&o!==""?(i.setProperty(pr(a),o),this._appliedProps.add(a)):this._appliedProps.has(a)&&(i.removeProperty(pr(a)),this._appliedProps.delete(a));return gt}}const R=Ap(Fp);function Yn(t,e){customElements.get(t)||customElements.define(t,e)}const O=t=>e=>(Yn(t,e),e);var Tp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Wr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Op(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Tp(e,s,r),r};let Vs=class extends F{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return d`
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
    `}};Vs.styles=E`
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
  `;Wr([u({type:Boolean})],Vs.prototype,"open",2);Wr([Ze("dialog")],Vs.prototype,"dialog",2);Vs=Wr([O("ap-modal")],Vs);const Be=E`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var Lp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,ei=(t,e,s,i)=>{for(var r=i>1?void 0:i?Pp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Lp(e,s,r),r};let Wt=class extends F{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return d`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalFiltersDropdownLabel","Regional settings")}
        title=${this.t("regionalFiltersDropdownLabel","Regional settings")}
      >
        <sfx-icon name="globe" .size=${18}></sfx-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?m:d`
              <div class="empty-msg">
                ${this.t("noRegionalSettings","No regional settings configured")}
              </div>
            `}
        ${this.groups.map(e=>d`
            <div class="group">
              <div class="group-label">${e.label}</div>
              ${e.variants.map(s=>{const i=this.selectedFilters[e.uuid]===s.api_value;return d`
                  <button
                    class="variant-option"
                    ?data-selected=${i}
                    @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                  >
                    <span class="variant-label">${s.label}</span>
                    <span class="check-mark"
                      >${i?d`<sfx-icon name="check" .size=${14}></sfx-icon>`:""}</span
                    >
                  </button>
                `})}
            </div>
          `)}
      </div>
    `}};Wt.styles=E`
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
  `;ei([u({type:Array})],Wt.prototype,"groups",2);ei([u({type:Object})],Wt.prototype,"selectedFilters",2);ei([u({attribute:!1})],Wt.prototype,"t",2);ei([x()],Wt.prototype,"_open",2);Wt=ei([O("ap-regional-settings")],Wt);var Mp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Oe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ip(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Mp(e,s,r),r};const Dp=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let ke=class extends F{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=Ad(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=Dp.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return d`
      <div class="header-row">
        ${e.length>1?d`<sfx-dropdown
              .value=${this.activeTab}
              .options=${e}
              @sfx-change=${this._handleTabChange}
            ></sfx-dropdown>`:m}
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${16}></sfx-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?t("aiSearchFoldersPlaceholder","AI search folders and assets"):t("aiSearchAssetsPlaceholder","AI search assets"):this.activeTab==="labels"&&!this.isInsideLabel?t("searchLabelsPlaceholder","Search labels"):this.activeTab==="collections"&&!this.isInsideCollection?t("searchCollectionsPlaceholder","Search collections"):this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?t("searchCollectionFoldersPlaceholder","Search collection folders"):this.activeTab==="folders"?t("searchFoldersPlaceholder","Search folders and assets"):t("searchAssetsPlaceholder","Search assets")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?d`
                  <button
                    class="clear-btn"
                    @click=${this._clearSearch}
                    aria-label=${t("clearSearch","Clear search")}
                  >
                    <sfx-icon name="close" .size=${14}></sfx-icon>
                  </button>
                `:""}
            ${this.enableAISearch?d`
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
          ${this.hideClose?m:d`
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
    `}};ke.styles=[Be,E`
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
    `];Oe([u()],ke.prototype,"activeTab",2);Oe([u({type:Array})],ke.prototype,"tabs",2);Oe([u({type:Boolean})],ke.prototype,"isInsideLabel",2);Oe([u({type:Boolean})],ke.prototype,"isInsideCollection",2);Oe([u({type:Boolean})],ke.prototype,"isInsideCollectionLeaf",2);Oe([u()],ke.prototype,"viewMode",2);Oe([u()],ke.prototype,"searchQuery",2);Oe([u({type:Array})],ke.prototype,"regionalGroups",2);Oe([u({type:Object})],ke.prototype,"regionalFilters",2);Oe([u({type:Boolean})],ke.prototype,"hideClose",2);Oe([u({type:Boolean,reflect:!0,attribute:"ai-search"})],ke.prototype,"enableAISearch",2);Oe([u({type:Boolean})],ke.prototype,"isAISearchActive",2);Oe([u({attribute:!1})],ke.prototype,"t",2);Oe([x()],ke.prototype,"_localSearch",2);ke=Oe([O("ap-header")],ke);var Rp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,Qr=(t,e,s,i)=>{for(var r=i>1?void 0:i?zp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Rp(e,s,r),r};let Bs=class extends F{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?d`
      <div class="popover">
        ${this.title?d`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:d``}};Bs.styles=E`
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
  `;Qr([u()],Bs.prototype,"title",2);Qr([u({type:Boolean})],Bs.prototype,"open",2);Bs=Qr([O("ap-filter-popover")],Bs);var Np=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,xs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Up(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Np(e,s,r),r};function ko(t){var i;const e=new Map;for(const r of t){const a=r.category||r.value.split("_")[0];if(!e.has(a)){const n=Ii.find(l=>l.value===a);e.set(a,{key:a,labelKey:(n==null?void 0:n.labelKey)||a,label:(n==null?void 0:n.label)||a.charAt(0).toUpperCase()+a.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const o=e.get(a);o.extensions.push({value:r.value,label:r.label||((i=r.value.split("_").pop())==null?void 0:i.toUpperCase())||r.value,count:r.count}),o.totalCount+=r.count}const s=Ii.map(r=>r.value);return[...e.values()].sort((r,a)=>{const o=s.indexOf(r.key),n=s.indexOf(a.key);return(o===-1?999:o)-(n===-1?999:n)})}let Tt=class extends F{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const r=new Set([t.key,...e]);i=this.selected.filter(a=>!r.has(a))}else{const r=new Set(e);i=this.selected.filter(a=>!r.has(a)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(r=>r!==e.key),i.push(...s)),i.includes(t)?i=i.filter(r=>r!==t):(i.push(t),s.every(r=>i.includes(r))&&(i=i.filter(r=>!s.includes(r)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.TYPE,values:t,operator:C.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const r=s.extensions.filter(a=>a.label.toLowerCase().includes(e)||a.value.toLowerCase().includes(e));return r.length===0?null:{...s,extensions:r}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=ko(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=ko(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return d`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder","Search formats...")}
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${s?d`<button class="clear-btn" @click=${this._clearAll}>
              ${this.t("clearAll","Clear all")}
            </button>`:m}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?d`<div class="no-results">${this.t("noFormatsFound","No formats found")}</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return d`
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
      ${e?d`
            <div class="extensions">
              ${t.extensions.map(r=>d`
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
          `:m}
    `}_renderFallback(){return d`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${Ii.map(t=>d`
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
    `}};Tt.styles=E`
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
  `;xs([u({type:Array})],Tt.prototype,"selected",2);xs([u({type:Array})],Tt.prototype,"fileTypes",2);xs([u({attribute:!1})],Tt.prototype,"t",2);xs([x()],Tt.prototype,"_search",2);xs([x()],Tt.prototype,"_expanded",2);Tt=xs([O("ap-filter-type")],Tt);const ct=E`
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
`;var jp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,yt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Vp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&jp(e,s,r),r};let Xe=class extends F{constructor(){super(...arguments),this.filterKey=y.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===y.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?Ln:On).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return Tn.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return ut(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=us(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const r=new Date(s+"T23:59:59");this.to=r.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?m:d`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType","Date type")}</span>
        <sfx-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @sfx-change=${t=>this._selectField(t.detail.value)}
        ></sfx-radio-group>
      </div>
    `}_renderRangeSection(){return d`
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
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return m;const e=this.from?zi(this.from):"",s=this.to?zi(this.to):"",i=this._todayStr;return t==="specific"?d`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
            <sfx-date-input
              .locale=${it(this.locale)}
              max=${i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
        </div>
      `:t==="before"?d`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <sfx-date-input
              .locale=${it(this.locale)}
              max=${i}
              .value=${s}
              @change=${r=>this._handleDateInput("to",r)}
            ></sfx-date-input>
          </div>
        </div>
      `:t==="after"?d`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <sfx-date-input
              .locale=${it(this.locale)}
              max=${i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
        </div>
      `:d`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <sfx-date-input
              .locale=${it(this.locale)}
              max=${s||i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <sfx-date-input
              .locale=${it(this.locale)}
              min=${e}
              max=${i}
              .value=${s}
              @change=${r=>this._handleDateInput("to",r)}
            ></sfx-date-input>
          </div>
        </div>
      </div>
    `}render(){return d`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${()=>this._clearAll()}>
          ${this.t("clearAll","Clear all")}
        </button>
        ${this._renderDateTypeSection()} ${this._renderRangeSection()} ${this._renderDateInputs()}
      </div>
    `}};Xe.styles=[ct,E`
      .date-inputs {
        margin-top: 4px;
      }
    `];yt([u()],Xe.prototype,"filterKey",2);yt([u({attribute:!1})],Xe.prototype,"t",2);yt([u()],Xe.prototype,"locale",2);yt([u()],Xe.prototype,"field",2);yt([u()],Xe.prototype,"kind",2);yt([u()],Xe.prototype,"preset",2);yt([u()],Xe.prototype,"from",2);yt([u()],Xe.prototype,"to",2);Xe=yt([O("ap-filter-date")],Xe);var Bp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,es=(t,e,s,i)=>{for(var r=i>1?void 0:i?Kp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Bp(e,s,r),r};let vt=class extends F{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=y.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=or}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:C.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:C.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:C.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return d`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${or} tags`:m}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return d`
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
          ${this._search?d`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?d`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button class="clear-btn" @click=${this._clearAll}>Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?d`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `:m})}
                </div>
              </div>
            `:m}
        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?d`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span>You can select up to ${or} tags.</span>
              </div>
            `:m}
      </div>
    `}_renderSearchResults(t){const e=r=>r.toLowerCase().includes(t),s=this._suggestedTags.filter(r=>e(r.label)).slice(0,50),i=this._otherTags.filter(r=>e(r.label)).slice(0,50);return s.length===0&&i.length===0?d`<div class="no-results">${this.t("noTagsFound","No tags found")}</div>`:d`
      ${s.length>0?d`
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
          `:m}
      ${i.length>0?d`
            <div class="filter-section">
              <div class="section-header">
                ${s.length===0?d`<span class="section-label">${this.t("allTags","All tags")}</span>
                      <button
                        class="clear-btn"
                        ?disabled=${this.selected.length===0}
                        @click=${this._clearAll}
                      >
                        ${this.t("clearAll","Clear all")}
                      </button>`:d`<span class="section-label">${this.t("allTags","All tags")}</span>`}
              </div>
              <div class="options-list">
                ${i.map(r=>this._renderTagItem(r))}
              </div>
            </div>
          `:m}
    `}_renderSections(){if(this.tags.length===0)return d`<div class="no-results">${this.t("noTagsAvailable","No tags available")}</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return d`
      <div class="filter-section">
        ${t.length>0?d`<span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>`:m}
        ${t.length>0?d`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:m}
      </div>

      ${t.length>0?d`<div class="separator"></div>`:m}

      <div class="hint-message">
        ${this.t("findMoreTagsBySearch","Find more tags by using search")}
      </div>
    `}};vt.styles=[Be,ct,E`
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
    `];es([u({type:Array})],vt.prototype,"tags",2);es([u({type:Array})],vt.prototype,"selected",2);es([u()],vt.prototype,"filterKey",2);es([u({attribute:!1})],vt.prototype,"t",2);es([Ze(".tag-search")],vt.prototype,"_searchInput",2);es([x()],vt.prototype,"_search",2);vt=es([O("ap-filter-tags")],vt);var qp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,ys=(t,e,s,i)=>{for(var r=i>1?void 0:i?Hp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&qp(e,s,r),r};let Ot=class extends F{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=Cs}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.LABELS,values:s,operator:C.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.LABELS,values:e,operator:C.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.LABELS,values:[],operator:C.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return d`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${Cs} labels`,{count:Cs}):m}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="label-icon" ${R({color:t.color||"#94a3b8"})}>
          <sfx-icon name="tag" .size=${16}></sfx-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count??0}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return d`
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
          ${this._search?d`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?d`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?d`
                      <div class="chip">
                        <span class="chip-icon" ${R({color:i.color||"#94a3b8"})}>
                          <sfx-icon name="tag" .size=${12}></sfx-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `:m})}
                </div>
              </div>
            `:m}

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
            ${e.length===0?d`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?d`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t("labelsLimitAlert",`You can select up to ${Cs} labels.`,{count:Cs})}</span
                >
              </div>
            `:m}
      </div>
    `}};Ot.styles=[ct,E`
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
    `];ys([u({type:Array})],Ot.prototype,"labels",2);ys([u({type:Array})],Ot.prototype,"selected",2);ys([u({attribute:!1})],Ot.prototype,"t",2);ys([Ze(".search-input")],Ot.prototype,"_searchInput",2);ys([x()],Ot.prototype,"_search",2);Ot=ys([O("ap-filter-labels")],Ot);function Gp(t){return{async listChildren(e,{offset:s,limit:i}){const r=await Ya(t,{folderPath:e,offset:s,limit:i});return{folders:r,hasMore:r.length===i}},async search(e,{rootPath:s,limit:i}){return Ya(t,{folderPath:s,q:e,recursive:1,limit:i})},async create(e,s){return Jo(t,e,s)},async checkPermissions(e,s){const i=await t.get(`/folder/${encodeURIComponent(e)}/permissions`),r=i==null?void 0:i.permissions;return Array.isArray(r)?s.every(a=>r.includes(a)):!1}}}const Yp=200,Wp=10,Qp=500,So={query:"",status:"idle",results:[],truncated:!1};function Xp(t,e="/"){const s=e.replace(/\/+$/,"")||"/";if(t===s)return[s];const i=s==="/"?"/":`${s}/`;if(!t.startsWith(i))return[s];const r=t.slice(i.length).split("/").filter(Boolean),a=[s];let o=s==="/"?"":s;for(const n of r)o=`${o}/${n}`,a.push(o);return a}function ur(t){return[...t].sort((e,s)=>e.name.localeCompare(s.name))}class Jp{constructor(e){var s;this.state={children:{},nodeStatus:{},expanded:new Set,search:So},this.listeners=new Set,this.loadSeq=new Map,this.searchSeq=0,this.revealSeq=0,this.source=e.source,this.rootPath=((s=e.rootPath)==null?void 0:s.replace(/\/+$/,""))||"/",this.pageSize=e.pageSize??Yp,this.maxAutoPages=e.maxAutoPages??Wp,this.searchLimit=e.searchLimit??Qp}getState(){return this.state}async setSource(e){var s;if(e!==this.source){this.source=e,(s=this.searchAbort)==null||s.abort(),this.searchAbort=void 0,this.searchSeq+=1;for(const i of this.loadSeq.keys())this.nextSeq(i);await this.loadChildren(this.rootPath,{force:!0})}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}set(e){this.state={...this.state,...e};for(const s of this.listeners)s(this.state)}setStatus(e,s){this.set({nodeStatus:{...this.state.nodeStatus,[e]:s}})}errorAfter(e,s=this.state.search){return Object.values(e).some(r=>r==="error")||s.status==="error"?this.state.error:void 0}nextSeq(e){const s=(this.loadSeq.get(e)??0)+1;return this.loadSeq.set(e,s),s}async loadChildren(e,s={}){const i=this.state.nodeStatus[e];if(!s.force&&(i==="loading"||i==="loaded"||i==="partial"))return;const r=this.nextSeq(e);this.setStatus(e,"loading");try{const{folders:a,exhausted:o}=await this.fetchPages(e,0);if(r!==this.loadSeq.get(e))return;const n={...this.state.nodeStatus,[e]:o?"loaded":"partial"};this.set({children:{...this.state.children,[e]:ur(a)},nodeStatus:n,error:this.errorAfter(n)})}catch(a){if(r!==this.loadSeq.get(e))return;this.set({nodeStatus:{...this.state.nodeStatus,[e]:"error"},error:fr(a)})}}async loadMore(e){if(this.state.nodeStatus[e]!=="partial")return;const s=this.nextSeq(e),i=this.state.children[e]??[];this.setStatus(e,"loading");try{const{folders:r,exhausted:a}=await this.fetchPages(e,i.length);if(s!==this.loadSeq.get(e))return;const o={...this.state.nodeStatus,[e]:a?"loaded":"partial"};this.set({children:{...this.state.children,[e]:ur([...i,...r])},nodeStatus:o,error:this.errorAfter(o)})}catch(r){if(s!==this.loadSeq.get(e))return;this.set({nodeStatus:{...this.state.nodeStatus,[e]:"partial"},error:fr(r)})}}async fetchPages(e,s){const i=[];let r=s;for(let a=0;a<this.maxAutoPages;a+=1){const o=await this.source.listChildren(e,{offset:r,limit:this.pageSize});if(i.push(...o.folders),r+=o.folders.length,!o.hasMore)return{folders:i,exhausted:!0}}return{folders:i,exhausted:!1}}collapseAll(){this.state.expanded.size&&this.set({expanded:new Set})}async toggle(e){const s=new Set(this.state.expanded);if(s.has(e)){s.delete(e),this.set({expanded:s});return}s.add(e),this.set({expanded:s}),await this.loadChildren(e)}async reveal(e){const s=this.revealSeq+=1,i=Xp(e,this.rootPath),r=i.slice(0,-1);if(await Promise.all(i.map(o=>this.loadChildren(o))),s!==this.revealSeq)return;const a=new Set(this.state.expanded);for(const o of r)a.add(o);this.set({expanded:a})}clearSearch(){var e;(e=this.searchAbort)==null||e.abort(),this.searchAbort=void 0,this.searchSeq+=1,this.set({search:So})}async runSearch(e){var a;const s=e.trim();if(!s){this.clearSearch();return}if(!this.source.search)return;(a=this.searchAbort)==null||a.abort();const i=new AbortController;this.searchAbort=i;const r=this.searchSeq+=1;this.set({search:{...this.state.search,query:s,status:"loading"}});try{const o=await this.source.search(s,{rootPath:this.rootPath,limit:this.searchLimit,signal:i.signal});if(r!==this.searchSeq)return;const n={query:s,status:"done",results:o,truncated:o.length===this.searchLimit};this.set({search:n,error:this.errorAfter(this.state.nodeStatus,n)})}catch(o){if(r!==this.searchSeq)return;this.set({search:{query:s,status:"error",results:[],truncated:!1},error:fr(o)})}}async createFolder(e,s){if(!this.source.create)throw new Error("This folder source does not support creation");const i=await this.source.create(e,s),r=s.replace(/\/+$/,"")||"/",a=i??{uuid:"",name:e,path:r==="/"?`/${e}`:`${r}/${e}`,parentPath:r},o=this.state.children[r]??[],n=new Set(this.state.expanded);return n.add(r),this.set({children:{...this.state.children,[r]:ur([...o,a])},nodeStatus:{...this.state.nodeStatus,[r]:this.state.nodeStatus[r]==="partial"?"partial":"loaded"},expanded:n}),this.loadChildren(r,{force:!0}),a}async refresh(e){const s=e??Object.keys(this.state.children);await Promise.all(s.map(i=>this.loadChildren(i,{force:!0})))}}function fr(t){return t instanceof Error?t.message:String(t)}var Zp=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,wt=(t,e,s,i)=>{for(var r=i>1?void 0:i?eu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Zp(e,s,r),r};const tu=300;let Je=class extends F{constructor(){super(...arguments),this.rootPath="/",this.selected=[],this.options=null,this.missing=[],this.t=wi,this._search="",this._tree=null,this._unsubscribe=null,this._searchTimer=null,this._selectedKeysCache=null}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._searchTimer&&clearTimeout(this._searchTimer),this._dropTree()}willUpdate(t){if(this.options){this._tree&&this._dropTree();return}(t.has("apiClient")||t.has("rootPath")||t.has("options")||!this._tree&&this.apiClient)&&this._buildTree()}_buildTree(){if(this._dropTree(),!this.apiClient)return;const t=new Jp({source:Gp(this.apiClient),rootPath:this._root});this._tree=t,this._unsubscribe=t.subscribe(()=>this.requestUpdate()),t.loadChildren(this._root),this._search.trim()&&t.runSearch(this._search)}_dropTree(){var t;(t=this._unsubscribe)==null||t.call(this),this._unsubscribe=null,this._tree=null}get _root(){return te(this.rootPath||"/")}get _atLimit(){return this.selected.length>=Ue}get _selectedKeys(){var t;return((t=this._selectedKeysCache)==null?void 0:t.source)!==this.selected&&(this._selectedKeysCache={source:this.selected,keys:this.selected.map(te)}),this._selectedKeysCache.keys}_isSelected(t){return this._selectedKeys.includes(te(t))}_impliedBy(t){if(!this._isSelected(t))return this._selectedKeys.find(e=>Is(t,[e]))}_selectionWith(t){const e=this._selectedKeys;return[...this.selected.filter((i,r)=>!Is(e[r],[t])&&!Is(t,[e[r]])),t]}_toggleExpand(t,e){var s;e.stopPropagation(),(s=this._tree)==null||s.toggle(t)}_emit(t,e){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.FOLDERS,values:t,operator:C.IS,folderUuids:e},bubbles:!0,composed:!0}))}_toggle(t,e){const s=te(t);if(this._isSelected(s)){this._emit(this.selected.filter(r=>te(r)!==s));return}const i=this._selectionWith(s);i.length<=Ue&&this._emit(i,e?{[s]:e}:void 0)}_onSearchInput(t){var s;if(this._search=t.target.value,this._searchTimer&&clearTimeout(this._searchTimer),this.options)return;if(!this._search.trim()){(s=this._tree)==null||s.clearSearch();return}const e=this._search;this._searchTimer=setTimeout(()=>{var i;return void((i=this._tree)==null?void 0:i.runSearch(e))},tu)}_clearSearch(){var t;this._searchTimer&&clearTimeout(this._searchTimer),this._search="",(t=this._tree)==null||t.clearSearch()}_indent(t){return R({paddingLeft:`${8+t*16}px`})}_renderRow(t,e,s=!1){var v;const i=(v=this._tree)==null?void 0:v.getState(),r=te(t.path),a=this._isSelected(r),o=this._impliedBy(r),n=o!==void 0,l=!a&&this._isMissing(r),c=l||!a&&this._selectionWith(r).length>Ue,p=!!(i!=null&&i.expanded.has(r)),f=i==null?void 0:i.children[r],h=!s&&(f===void 0||f.length>0),g=["folder-row",a&&e>0&&"selected",c&&"disabled",n&&"implied"].filter(Boolean).join(" ");return d`
      <div
        class=${g}
        aria-disabled=${c?"true":m}
        ${this._indent(e)}
        title=${l?this.t("folderNotFoundTitle","This folder no longer exists"):c?this.t("foldersLimitTitle",`You can select up to ${Ue} folders`,{count:Ue}):n?this.t("folderIncludedTitle","Included with {{name}}",{name:gi(o)}):r}
        @click=${()=>!c&&this._toggle(r,t.uuid||void 0)}
      >
        <sfx-checkbox ?checked=${a||n}></sfx-checkbox>
        ${h?d`<button
              class="expand-btn"
              aria-label=${p?this.t("collapse","Collapse"):this.t("expand","Expand")}
              @click=${b=>this._toggleExpand(r,b)}
            >
              <sfx-icon
                name=${p?"chevron-down":"chevron-right"}
                .size=${14}
              ></sfx-icon>
            </button>`:this.options?m:d`<span class="expand-placeholder"></span>`}
        <span class="folder-icon"><sfx-icon name="folder" .size=${16}></sfx-icon></span>
        <span class="folder-name">${t.name}</span>
        ${s?d`<span class="folder-path">${r}</span>`:m}
      </div>
      ${!s&&p?this._renderLevel(r,e+1):m}
    `}_renderLevel(t,e){var a;const s=(a=this._tree)==null?void 0:a.getState(),i=(s==null?void 0:s.nodeStatus[t])??"idle",r=s==null?void 0:s.children[t];return i==="error"&&!r?d`<div class="loading-row" ${this._indent(e)}>
        ${this.t("foldersLoadError","Couldn't load folders.")}
        <button
          class="clear-btn"
          @click=${()=>{var o;return void((o=this._tree)==null?void 0:o.loadChildren(t,{force:!0}))}}
        >
          ${this.t("retry","Retry")}
        </button>
      </div>`:r?d`
      ${r.map(o=>this._renderRow(o,e))}
      ${i==="partial"?d`<div class="loading-row" ${this._indent(e)}>
            <button class="clear-btn" @click=${()=>{var o;return void((o=this._tree)==null?void 0:o.loadMore(t))}}>
              ${this.t("loadMoreFolders","Load more folders")}
            </button>
          </div>`:i==="loading"?d`<div class="loading-row" ${this._indent(e)}>
              ${this.t("loading","Loading...")}
            </div>`:m}
    `:d`<div class="loading-row" ${this._indent(e)}>
        ${this.t("loading","Loading...")}
      </div>`}_renderOptions(t){const e=this._search.trim().toLowerCase(),s=e?t.filter(i=>i.toLowerCase().includes(e)):t;return s.length===0?d`<div class="no-results">${this.t("noFoldersFound","No folders found")}</div>`:s.map(i=>this._renderRow({path:i,name:gi(i)},0,!0))}_isMissing(t){return!!this.options&&this.missing.includes(te(t))}_renderList(){var s;if(this.options)return this._renderOptions(this.options);const t=(s=this._tree)==null?void 0:s.getState();if(this._search.trim()){const i=t==null?void 0:t.search;return!i||i.status==="loading"||i.status==="idle"?d`<div class="loading-row">${this.t("loading","Loading...")}</div>`:i.status==="error"?d`<div class="no-results">
          ${this.t("foldersLoadError","Couldn't load folders.")}
        </div>`:i.results.length===0?d`<div class="no-results">${this.t("noFoldersFound","No folders found")}</div>`:i.results.map(r=>this._renderRow(r,0,!0))}const e=t==null?void 0:t.children[this._root];return e&&e.length===0&&(t==null?void 0:t.nodeStatus[this._root])==="loaded"?d`<div class="no-results">${this.t("noFoldersFound","No folders found")}</div>`:this._renderLevel(this._root,0)}render(){return d`
      <div class="filter-content">
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchFolderFilterPlaceholder","Search folders")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?d`<button class="search-clear" @click=${this._clearSearch}>
                <sfx-icon name="close" .size=${12}></sfx-icon>
              </button>`:m}
        </div>

        ${!this._search.trim()&&this.selected.length>0?d`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${()=>this._emit([])}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(t=>d`
                      <div class="chip" title=${t}>
                        <span class="chip-label">${gi(t)}</span>
                        <button class="chip-remove" @click=${()=>this._toggle(t)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:m}

        <div class="filter-section">
          <div class="section-header">
            <span class="section-label"
              >${this.options?this.t("availableFolders","Available folders"):this.t("allFolders","All folders")}</span
            >
          </div>
          <div class="options-list">${this._renderList()}</div>
        </div>

        ${this._atLimit?d`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t("foldersLimitAlert",`You can select up to ${Ue} folders.`,{count:Ue})}</span
                >
              </div>
            `:m}
      </div>
    `}};Je.styles=[ct,E`
      .folder-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 5px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .folder-row:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .folder-row.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .folder-row.selected {
        background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
      }

      .folder-row.implied {
        opacity: 0.5;
      }

      .expand-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        padding: 0;
        border: none;
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        flex-shrink: 0;
      }

      .expand-placeholder {
        width: 18px;
        flex-shrink: 0;
      }

      .folder-icon {
        flex-shrink: 0;
        line-height: 0;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .folder-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .folder-path {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 45%;
      }

      .loading-row {
        padding: 6px 8px;
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
    `];wt([u({attribute:!1})],Je.prototype,"apiClient",2);wt([u()],Je.prototype,"rootPath",2);wt([u({type:Array})],Je.prototype,"selected",2);wt([u({type:Array})],Je.prototype,"options",2);wt([u({type:Array})],Je.prototype,"missing",2);wt([u({attribute:!1})],Je.prototype,"t",2);wt([Ze(".search-input")],Je.prototype,"_searchInput",2);wt([x()],Je.prototype,"_search",2);Je=wt([O("ap-filter-folders")],Je);var su=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,ts=(t,e,s,i)=>{for(var r=i>1?void 0:i?iu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&su(e,s,r),r};const gr=3,Ar=/^#[0-9A-Fa-f]{6}$/;function ru(t){const e=t.trim().split(/\s+/);return e.length<1||!Ar.test(e[0])?null:{hex:e[0],tolerance:e[1]||vi,coverage:e[3]||mi}}let bt=class extends F{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=ru(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==vi||s.coverage!==mi)),this._initialized=!0)}}_selectColor(t){if(!Ar.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=gr||(this._colors=[...this._colors,{hex:t,tolerance:vi,coverage:mi}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!Ar.test(i)||this._colors.some((o,n)=>n!==t&&o.hex.toLowerCase()===i.toLowerCase()))return;const a=[...this._colors];a[t]={...a[t],hex:i},this._colors=a,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const r=[...this._colors];r[t]={...r[t],coverage:String(i)},this._colors=r,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:vi,i=this._advanced?e.coverage:mi;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=gr;return d`
      <div class="palette">
        ${Sh.map(s=>{const i=t.has(s),r=e&&!i;return d`
            <button
              class="swatch ${i?"selected":""} ${r?"disabled":""}"
              ${R({background:s,...s==="#ffffff"?{border:"1px solid #e4e4e7"}:{}})}
              @click=${()=>!r&&this._selectColor(s)}
              title=${s}
              ?disabled=${r}
            ></button>
          `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?d`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel","Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${R({background:t.hex})}></div>
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
            .options=${Ch.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
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
    `:d`
        <div class="color-row">
          <div class="color-swatch-small" ${R({background:t.hex})}></div>
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
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<gr&&!this._showPalette;return d`
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

        <div class="filter-section">${t?this._renderPalette():m}</div>

        ${this._colors.length>0?d`
              <div class="filter-section">
                <div class="selected-colors">
                  ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
                </div>
              </div>
            `:m}
        ${e?d`
              <div class="filter-section">
                <button class="add-color-btn" @click=${this._showAddPalette}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t("addColor","Add color")}
                </button>
              </div>
            `:m}

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t("requiresImageProcessing","Requires image processing to be enabled.")}</span
          >
        </div>
      </div>
    `}};bt.styles=[Be,ct,E`
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
    `];ts([u({type:Array})],bt.prototype,"values",2);ts([u({attribute:!1})],bt.prototype,"t",2);ts([x()],bt.prototype,"_colors",2);ts([x()],bt.prototype,"_advanced",2);ts([x()],bt.prototype,"_showPalette",2);ts([x()],bt.prototype,"_initialized",2);bt=ts([O("ap-filter-color")],bt);var au=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,Mt=(t,e,s,i)=>{for(var r=i>1?void 0:i?ou(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&au(e,s,r),r};const nu={KB:1/1e3,MB:1,GB:1e3},lu=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let at=class extends F{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=nu[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.SIZE,values:[],operator:C.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.SIZE,values:[i],operator:C.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return d`
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
              .options=${lu}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `}};at.styles=[ct,E`
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
    `];Mt([u({type:Number})],at.prototype,"min",2);Mt([u({type:Number})],at.prototype,"max",2);Mt([u({attribute:!1})],at.prototype,"t",2);Mt([x()],at.prototype,"_minVal",2);Mt([x()],at.prototype,"_maxVal",2);Mt([x()],at.prototype,"_unit",2);Mt([x()],at.prototype,"_initialized",2);at=Mt([O("ap-filter-size")],at);var cu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,ti=(t,e,s,i)=>{for(var r=i>1?void 0:i?du(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&cu(e,s,r),r};const hu=At`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,pu=At`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,uu=At`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,fu=At`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,gu={portrait:hu,landscape:pu,square:uu,panorama:fu};let Qt=class extends F{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return d`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${wh.map(t=>d`
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
            ${$h.map(t=>d`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleOrientation(t.value)}}
                  ><span class="orientation-label"
                    >${gu[t.value]}${this.t(t.labelKey,t.label)}</span
                  ></sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${kh.map(t=>d`
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
    `}};Qt.styles=[ct,E`
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
    `];ti([u({type:Array})],Qt.prototype,"selectedResolution",2);ti([u({type:Array})],Qt.prototype,"selectedOrientation",2);ti([u({type:Array})],Qt.prototype,"selectedFaces",2);ti([u({attribute:!1})],Qt.prototype,"t",2);Qt=ti([O("ap-filter-image")],Qt);const mu="/meta/ultratags",vu="regvar:api",bu=50;async function _u(t,{meta:e,q:s,limit:i=bu}){const r=s==null?void 0:s.trim();return(await t.get(mu,{meta:e,q:r?r.toLowerCase():void 0,sort:r?void 0:"slug",limit:i,format:vu})).items??[]}function Er(t,e,s="en"){const{i18n:i}=t;if(i){for(const a of yu(e,s)){const o=i[a]??i[`~${a.toUpperCase()}`];if(o)return o}const r=Object.values(i).find(Boolean);if(r)return r}return t.slug}const Wn=new Map,Qn=(t,e)=>`${t}::${e}`;function xu(t,e){for(const s of t){const i=s.sid||s.slug;i&&Wn.set(Qn(e,i),Er(s,e))}}function Xn(t,e){return Wn.get(Qn(e,t))}function yu(t,e){const s=[];for(const i of[t,e]){if(!i)continue;s.push(i);const r=i.split("-")[0];r&&r!==i&&s.push(r)}return s}var wu=Object.defineProperty,$u=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var r=i>1?void 0:i?$u(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&wu(e,s,r),r};function U(t){return`${qi[t.type]||""}${t.key}`}const hi=["before","after","between","specific"];let Y=class extends F{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._textDrafts={},this._textDebounceTimers={},this._specificModeSeeded=new Set,this._pendingOperators={},this._utagQueries={},this._utagEntries={},this._utagLoading={},this._utagLabels={},this._utagLoaded=new Set,this._utagRequestSeq={},this._tagDebounceTimers={},this._fieldsByPrefixedKeyCache=null}get _tTextOperatorOptions(){return lr.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return dr.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return pt.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tUltratagsOperatorOptions(){return li.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return cr.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return Fh.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return Ri.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return Eh.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t);for(const t of Object.values(this._textDebounceTimers))clearTimeout(t)}updated(){for(const t of this._visibleUltratagsFields())this._ensureUltratagsLoaded(t);this._seedSpecificModeForTextFields()}_seedSpecificModeForTextFields(){if(this._showFieldSelection)return;const t=this.mode==="field"?[this.activeFieldKey]:this.visibleFields;let e=null;for(const s of t){if(this._specificModeSeeded.has(s))continue;const i=this._getField(s);i&&(this._specificModeSeeded.add(s),this._getUIType(i)==="text"&&(this._isSpecialValue(this._getApplied(s).values)||this._specificModeFields.has(s)||(e??(e=new Set(this._specificModeFields))).add(s)))}e&&(this._specificModeFields=e)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}_getField(t){var e;return((e=this._fieldsByPrefixedKeyCache)==null?void 0:e.fields)!==this.fields&&(this._fieldsByPrefixedKeyCache={fields:this.fields,map:new Map(this.fields.map(s=>[U(s),s]))}),this._fieldsByPrefixedKeyCache.map.get(t)}get _atFieldLimit(){return this.visibleFields.filter(t=>{const e=this._getField(t);return e&&ci(e.type)}).length>=As}get _selectableFields(){return this.fields.filter(t=>ci(t.type))}_getUIType(t){return Pn[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_getOperator(t,e){return this._getApplied(t).operator||this._pendingOperators[t]||e}_hasOperator(t){return!!(this._getApplied(t).operator||this._pendingOperators[t])}_clearPendingOperator(t){if(!(t in this._pendingOperators))return;const{[t]:e,...s}=this._pendingOperators;this._pendingOperators=s}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Ie||t[0]===De}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===Ie?Ie:((i=e.values)==null?void 0:i[0])===De?De:this._specificModeFields.has(t)||e.values&&e.values.length>0?jt:""}_emitFilterChange(t,e,s,i){const r=U(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:r,operator:e,values:s,metadataType:t.type,metaDatePreset:i},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=U(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=U(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=U(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){const e=U(t);this._emitFieldToggle(t,!1),this._clearPendingOperator(e),this._specificModeSeeded.delete(e),this._cancelTextDebounce(e),this._emitFilterChange(t,void 0,[])}_cancelTextDebounce(t){if(this._textDebounceTimers[t]&&(clearTimeout(this._textDebounceTimers[t]),delete this._textDebounceTimers[t]),t in this._textDrafts){const{[t]:e,...s}=this._textDrafts;this._textDrafts=s}}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const s=U(t);let r=this._getApplied(s).values||[];if(this._getUIType(t)==="number"&&!this._isSpecialValue(r)){const[a="",o=""]=r;e===C.LESS_THAN_OR_EQUAL?r=o?["",o]:[]:e!==C.RANGE&&(r=a?[a]:[])}if(this._pendingOperators={...this._pendingOperators,[s]:e},this._getUIType(t)==="number"&&!this._isSpecialValue(r)&&!this._specificModeFields.has(s)){const a=new Set(this._specificModeFields);a.add(s),this._specificModeFields=a}this._emitFilterChange(t,e,r)}_onContentModeChange(t,e){const s=U(t);if(e===jt){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const r=this._getApplied(s);this._isSpecialValue(r.values)&&this._emitFilterChange(t,r.operator||this._pendingOperators[s],[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(this._cancelTextDebounce(s),e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator||this._pendingOperators[s],[])}}}_clearFieldFilter(t){const e=U(t);if(this._specificModeFields.has(e)){const o=new Set(this._specificModeFields);o.delete(e),this._specificModeFields=o}this._dropDateDraft(e);const{[e]:s,...i}=this._selectSearches;this._selectSearches=i;const{[e]:r,...a}=this._tagInputs;this._tagInputs=a,this._cancelTextDebounce(e),t.type===A.ULTRATAGS&&this._utagQueries[e]&&this._onUltratagSearch(t,e,""),this._clearPendingOperator(e),this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=U(t),i=e.target.value,r=this._getApplied(s).values;if(this._textDrafts={...this._textDrafts,[s]:i},!this._specificModeFields.has(s)){const a=new Set(this._specificModeFields);a.add(s),this._specificModeFields=a}this._textDebounceTimers[s]&&clearTimeout(this._textDebounceTimers[s]),this._textDebounceTimers[s]=setTimeout(()=>{if(delete this._textDebounceTimers[s],this._getApplied(s).values!==r)return;const a=this._getOperator(s,lr[0].value);this._emitFilterChange(t,a,i?[i]:[])},300)}_onNumberInput(t,e,s){const i=e.target.value,r=U(t),a=this._getApplied(r),o=this._getOperator(r,dr[0].value),n=[...a.values||[]];s===0?n[0]=i:(n[1]=i,n[0]??(n[0]=""));const l=n.filter(c=>c!==""&&c!==void 0);if(l.length>0){const c=t.type===A.DECIMAL2;if(!l.every(f=>c?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,o,n)}_onBooleanSelect(t,e){var r;const s=this._getApplied(U(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=U(t),i=this._getApplied(s),r=this._getOperator(s,pt[0].value),a=i.values||[];a.length===1&&a[0]===e?this._emitFilterChange(t,r,[]):this._emitFilterChange(t,r,[e])}_onMultiSelectToggle(t,e){const s=U(t),i=this._getApplied(s),r=this._getOperator(s,cr[0].value),a=this._isSpecialValue(i.values)?[]:i.values||[],o=a.includes(e)?a.filter(n=>n!==e):[...a,e];this._emitFilterChange(t,r,o)}_onTagKeydown(t,e){const s=U(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const r=i.replace(/,/g,"").trim();r&&(this._tagInputs={...this._tagInputs,[e]:r},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=U(t),i=this._getApplied(s),r=this._getOperator(s,pt[0].value),a=i.values||[];a.includes(e)||this._emitFilterChange(t,r,[...a,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,r=await this.apiClient.get("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(r.tags||[]).map(a=>a.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),r=this._getOperator(e,pt[0].value),a=i.values||[];a.includes(s)||this._emitFilterChange(t,r,[...a,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=U(t),i=this._getApplied(s),r=this._getOperator(s,pt[0].value),a=i.values||[];this._emitFilterChange(t,r,a.filter(o=>o!==e))}_visibleUltratagsFields(){return this._showFieldSelection||this.mode==="selector"?[]:(this.mode==="field"?[this.activeFieldKey]:this.visibleFields).map(e=>this._getField(e)).filter(e=>!!e&&e.type===A.ULTRATAGS)}_cacheUltratagLabels(t){xu(t,this.locale);const e={};for(const s of t){const i=s.sid||s.slug;i&&(e[i]=Er(s,this.locale))}Object.keys(e).length!==0&&(this._utagLabels={...this._utagLabels,...e})}_ultratagLabel(t){return this._utagLabels[t]||Xn(t,this.locale)||t}async _loadUltratags(t,e,s){if(!this.apiClient)return;const i=(this._utagRequestSeq[e]??0)+1;this._utagRequestSeq[e]=i;const r=()=>this._utagRequestSeq[e]===i;this._utagLoading={...this._utagLoading,[e]:!0};try{const a=await _u(this.apiClient,{meta:t.key,q:s});if(!r())return;this._utagEntries={...this._utagEntries,[e]:a},this._cacheUltratagLabels(a)}catch{if(!r())return;this._utagEntries={...this._utagEntries,[e]:[]}}finally{r()&&(this._utagLoading={...this._utagLoading,[e]:!1})}}_ensureUltratagsLoaded(t){const e=U(t);this._utagLoaded.has(e)||!this.apiClient||(this._utagLoaded.add(e),this._loadUltratags(t,e,""))}_onUltratagSearch(t,e,s){this._utagQueries={...this._utagQueries,[e]:s},this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),this._tagDebounceTimers[e]=setTimeout(()=>{this._loadUltratags(t,e,s.trim())},300)}_onUltratagToggle(t,e){const s=U(t),i=e.sid||e.slug;if(!i)return;const r=this._getApplied(s),a=this._getOperator(s,li[0].value),o=this._isSpecialValue(r.values)?[]:r.values||[];this._cacheUltratagLabels([e]),this._emitFilterChange(t,a,o.includes(i)?o.filter(n=>n!==i):[...o,i])}_removeUltratag(t,e){const s=U(t),i=this._getApplied(s),r=this._getOperator(s,li[0].value),a=i.values||[];this._emitFilterChange(t,r,a.filter(o=>o!==e))}_onDatePreset(t,e){const s=U(t);if(!e){this._clearFieldFilter(t);return}if(hi.includes(e)){const r=this._getDateState(s),a=e==="before"?"":r.from,o=e==="after"||e==="specific"?"":r.to;this._commitDate(t,e,a,o);return}if(this._dropDateDraft(s),e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=us(e);if(i){if(i.to===null){const r=e==="today"?C.IS:C.GREATER_THAN;this._emitFilterChange(t,r,[i.from],e);return}this._emitFilterChange(t,C.RANGE,[i.from,i.to],e)}}_onDateInput(t,e,s){const i=s.target.value||"",r=this._getDateState(U(t)),a=hi.includes(r.kind)?r.kind:"between",o=e==="from"?i:r.from,n=e==="to"?i:r.to;this._commitDate(t,a,o,n)}_getDateState(t){const e=this._getApplied(t),s=e.values||[];if(s.length){if(this._isSpecialValue(s))return{kind:s[0],from:"",to:""};if(e.metaDatePreset){const o=us(e.metaDatePreset);return{kind:e.metaDatePreset,from:(o==null?void 0:o.from)??"",to:(o==null?void 0:o.to)??""}}const[r="",a=""]=s.map(zi);switch(e.operator){case C.LESS_THAN:return{kind:"before",from:"",to:r};case C.GREATER_THAN:return{kind:"after",from:r,to:""};case C.RANGE:return{kind:"between",from:r,to:a};default:return{kind:"specific",from:r,to:""}}}const i=this._datePresets[t]||"";return hi.includes(i)?{kind:i,from:this._dateFroms[t]||"",to:this._dateTos[t]||""}:{kind:"",from:"",to:""}}_commitDate(t,e,s,i){var o;const r=U(t);e==="between"&&s&&i&&s>i&&(i=s);const a=e==="before"&&i?[C.LESS_THAN,[i]]:e==="after"&&s?[C.GREATER_THAN,[s]]:e==="specific"&&s?[C.IS,[s]]:e==="between"&&s&&i?[C.RANGE,[s,i]]:null;if(a){this._dropDateDraft(r),this._emitFilterChange(t,...a);return}this._datePresets={...this._datePresets,[r]:e},this._dateFroms={...this._dateFroms,[r]:s},this._dateTos={...this._dateTos,[r]:i},(o=this._getApplied(r).values)!=null&&o.length&&this._emitFilterChange(t,void 0,[])}_dropDateDraft(t){const{[t]:e,...s}=this._datePresets;this._datePresets=s;const{[t]:i,...r}=this._dateFroms;this._dateFroms=r;const{[t]:a,...o}=this._dateTos;this._dateTos=o}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=U(t),r=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),a=(r==null?void 0:r.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(h=>h.trim());if(o.length!==2||o.some(h=>isNaN(Number(h))||h===""))return;const[n,l]=o,p=`${n},${l}..${a||"0"}`;this._emitFilterChange(t,C.IS,[p])}_onGeoRadiusInput(t,e){var l;const s=e.target.value,i=U(t),r=this._getApplied(i);if(!((l=r.values)!=null&&l[0]))return;const a=r.values[0],[o]=a.split("..");let n=o;s&&(n+=`..${s}`),this._emitFilterChange(t,C.IS,[n])}_onEmptyOption(t,e){var o;const s=U(t),i=this._getApplied(s),r=i.operator||this._pendingOperators[s],a=(o=i.values)==null?void 0:o[0];!e||a===e?this._emitFilterChange(t,r,[]):(this._clearPendingOperator(s),this._emitFilterChange(t,i.operator,[e]))}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this._selectableFields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,a)=>a.length===0?m:d`
        <div class="field-group-label">${r}</div>
        ${a.map(o=>{const n=U(o),l=this.visibleFields.includes(n),c=!l&&this._atFieldLimit;return d`
            <div
              class="field-item ${l?"selected":""} ${c?"disabled":""}"
              @click=${()=>!c&&!l&&this._addField(o)}
            >
              ${l?d`<sfx-icon name="check" .size=${14}></sfx-icon>`:d`<sfx-icon
                    name=${_i[o.type]||"file-text"}
                    .size=${14}
                    ${R({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
                  ></sfx-icon>`}
              <span>${o.label}</span>
            </div>
          `})}
      `;return d`
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
          ${e.length===0?d`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:d`${[...s.entries()].map(([r,a])=>i(r,a))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var p,f;const e=U(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._textDrafts[e],a=r!==void 0?r:i?"":((p=s.values)==null?void 0:p[0])||"",o=this._getContentMode(e),n=o===Ie||o===De,l=this._getOperator(e,lr[0].value),c=t.type===A.TEXT_AREA;return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((f=s.values)!=null&&f.length)&&!this._hasOperator(e)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("operator","Operator")}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${l}
            ?disabled=${n}
            @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${h=>this._onContentModeChange(t,h.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o===jt?d`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${c?d`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @input=${h=>this._onTextInput(t,h)}
                      ></textarea>
                    `:d`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @input=${h=>this._onTextInput(t,h)}
                        @keydown=${h=>{h.key==="Enter"&&h.preventDefault()}}
                      />
                    `}
              </div>
            `:m}
      </div>
    `}_renderNumberFilter(t){var w,P,k;const e=U(t),s=this._getApplied(e),i=this._getOperator(e,dr[0].value),r=this._isSpecialValue(s.values),a=this._getContentMode(e),o=a===Ie||a===De,n=i===C.RANGE,l=i===C.GREATER_THAN_OR_EQUAL,c=i===C.LESS_THAN_OR_EQUAL,p=t.type===A.DECIMAL2,f=p?"0.01":"1",h=p?"0.00":"0",g=r?"":((w=s.values)==null?void 0:w[0])||"",v=r?"":((P=s.values)==null?void 0:P[1])||"",b=n||l||c,_=n||l||c?this.t("min","Min"):this.t("value","Value"),S=this.t("max","Max");return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((k=s.values)!=null&&k.length)&&!this._hasOperator(e)}
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
            @sfx-change=${L=>this._onOperatorChange(t,L.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${a}
            @sfx-change=${L=>this._onContentModeChange(t,L.detail.value)}
          ></sfx-radio-group>
        </div>

        ${a===jt?d`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${c?"true":m}
                      >${_}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${h}
                      .value=${g}
                      ?disabled=${c}
                      @change=${L=>this._onNumberInput(t,L,0)}
                    />
                  </div>
                  ${b?d`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${l?"true":m}
                            >${S}</span
                          >
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${h}
                            .value=${v}
                            ?disabled=${l}
                            @change=${L=>this._onNumberInput(t,L,1)}
                          />
                        </div>
                      `:m}
                </div>
              </div>
            `:m}
      </div>
    `}_renderBooleanFilter(t){var i,r;const e=this._getApplied(U(t)),s=((i=e.values)==null?void 0:i[0])||"";return d`
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
    `}_renderSelectOneFilter(t){const e=U(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=t.possible_values||[],o=this._getOperator(e,pt[0].value),n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,c=r.length>0||i,p=n?a.filter(h=>h.label.toLowerCase().includes(n)):a,f=r.length>=As;return d`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${h=>{this._selectSearches={...this._selectSearches,[e]:h.target.value}}}
          />
          ${l?d`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        ${l?d`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!c&&!this._hasOperator(e)}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:d`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!c&&!this._hasOperator(e)}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?d`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(h=>{const g=a.find(v=>v.api_value===h);return d`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||h}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onSelectOneToggle(t,h)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:m}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(h=>{var g;return d`
                <div class="option-item" @click=${()=>this._onEmptyOption(t,h.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===h.value}></sfx-checkbox>
                  <span>${h.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${p.length===0?d`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(h=>{const g=r.includes(h.api_value),v=!g&&f;return d`
                    <div
                      class="option-item ${v?"disabled":""}"
                      @click=${()=>!v&&this._onSelectOneToggle(t,h.api_value)}
                    >
                      <sfx-checkbox ?checked=${g}></sfx-checkbox>
                      <span>${h.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=U(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=t.possible_values||[],o=this._getOperator(e,cr[0].value),n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,c=r.length>0||i,p=n?a.filter(h=>h.label.toLowerCase().includes(n)):a,f=r.length>=As;return d`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${h=>{this._selectSearches={...this._selectSearches,[e]:h.target.value}}}
          />
          ${l?d`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        ${l?d`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!c&&!this._hasOperator(e)}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:d`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!c&&!this._hasOperator(e)}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${o}
                  @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?d`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(h=>{const g=a.find(v=>v.api_value===h);return d`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||h}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onMultiSelectToggle(t,h)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:m}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(h=>{var g;return d`
                <div class="option-item" @click=${()=>this._onEmptyOption(t,h.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===h.value}></sfx-checkbox>
                  <span>${h.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${p.length===0?d`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(h=>{const g=r.includes(h.api_value),v=!g&&f;return d`
                    <div
                      class="option-item ${v?"disabled":""}"
                      @click=${()=>!v&&this._onMultiSelectToggle(t,h.api_value)}
                    >
                      <sfx-checkbox ?checked=${g}></sfx-checkbox>
                      <span>${h.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=U(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=this._tagInputs[e]||"",o=this._getOperator(e,pt[0].value),n=r.length>0||i,l=this._tagSuggestions[e]||[],c=this._tagLoading[e]||!1,p=a.trim().length>0,f=r.length>=As;return d`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${a}
            @input=${h=>this._onTagInput(t,e,h)}
            @keydown=${h=>this._onTagKeydown(t,h)}
          />
          ${p?d`
                <button
                  class="search-clear"
                  @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        ${p?d`
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
            `:d`
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
                  @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?d`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(h=>d`
                            <div class="chip">
                              <span class="chip-label">${h}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeTag(t,h)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:m}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t("allOptions","All options")}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map(h=>{var g;return d`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,h.value)}
                      >
                        <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===h.value}></sfx-checkbox>
                        <span>${h.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${p?d`
              <div class="filter-section">
                <div class="options-list">
                  ${c?d`<div class="option-item disabled">
                        <span>${this.t("loading","Loading...")}</span>
                      </div>`:l.length>0?l.map(h=>{const g=r.includes(h),v=!g&&f;return d`
                            <div
                              class="option-item ${v?"disabled":""}"
                              @click=${()=>!v&&(g?this._removeTag(t,h):this._selectTagSuggestion(t,h))}
                            >
                              <sfx-checkbox ?checked=${g}></sfx-checkbox>
                              <span>${h}</span>
                            </div>
                          `}):d`<div class="option-item disabled">
                          <span>${this.t("noResults","No results")}</span>
                        </div>`}
                </div>
              </div>
            `:m}
      </div>
    `}_renderUltratagsFilter(t){const e=U(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=this._getOperator(e,li[0].value),o=this._utagQueries[e]||"",n=o.trim().length>0,l=this._utagEntries[e]||[],c=this._utagLoading[e]||!1,p=r.length>0||i,f=r.length>=As;return d`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${o}
            @input=${h=>this._onUltratagSearch(t,e,h.target.value)}
          />
          ${n?d`
                <button
                  class="search-clear"
                  @click=${()=>this._onUltratagSearch(t,e,"")}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        ${n?d`
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
            `:d`
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
                  @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?d`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(h=>d`
                            <div class="chip">
                              <span class="chip-label">${this._ultratagLabel(h)}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeUltratag(t,h)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:m}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          ${n?m:d`
                <!-- Empty/Not empty checkboxes -->
                <div class="options-list short">
                  ${this._tEmptyOptions.map(h=>{var g;return d`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,h.value)}
                      >
                        <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===h.value}></sfx-checkbox>
                        <span>${h.label}</span>
                      </div>
                    `})}
                </div>

                <div class="separator"></div>
              `}

          <div class="options-list">
            ${c?d`<div class="option-item disabled">
                  <span>${this.t("loading","Loading...")}</span>
                </div>`:l.length===0?d`<div class="no-results">
                    ${this.t("noOptionsFound","No options found")}
                  </div>`:l.map(h=>{const g=h.sid||h.slug,v=r.includes(g),b=!v&&f;return d`
                      <div
                        class="option-item ${b?"disabled":""}"
                        @click=${()=>!b&&this._onUltratagToggle(t,h)}
                      >
                        <sfx-checkbox ?checked=${v}></sfx-checkbox>
                        <span>${Er(h,this.locale)}</span>
                      </div>
                    `})}
          </div>
        </div>
      </div>
    `}_renderDateFilter(t){var v;const e=U(t),s=this._getApplied(e),{kind:i,from:r,to:a}=this._getDateState(e),o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=hi.includes(i),l=!!i&&!n,c=l||i==="before",p=l||i==="after"||i==="specific",f=i==="specific"?r:a,h=i==="between"?a:"",g=i==="between"?r:"";return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!i&&!((v=s.values)!=null&&v.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            columns="2"
            .options=${o}
            .value=${i==="empty"||i==="non-empty"?i:""}
            @sfx-change=${b=>this._onDatePreset(t,b.detail.value)}
          ></sfx-radio-group>

          <div class="separator"></div>

          <sfx-radio-group
            clearable
            columns="2"
            .options=${Di.map(b=>({...b,label:this.t(b.labelKey,b.label)}))}
            .value=${i!=="empty"&&i!=="non-empty"?i:""}
            @sfx-change=${b=>this._onDatePreset(t,b.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <div class="grid-2">
            <div>
              <span class="input-label">${this.t("startDate","Start date")}</span>
              <sfx-date-input
                .locale=${it(this.locale)}
                .value=${r}
                max=${h}
                ?disabled=${c}
                placeholder=${c?"- - -":""}
                @change=${b=>this._onDateInput(t,"from",b)}
              ></sfx-date-input>
            </div>
            <div>
              <span class="input-label">${this.t("endDate","End date")}</span>
              <sfx-date-input
                .locale=${it(this.locale)}
                .value=${f}
                min=${g}
                ?disabled=${p}
                placeholder=${p?"- - -":""}
                @change=${b=>this._onDateInput(t,"to",b)}
              ></sfx-date-input>
            </div>
          </div>
        </div>
      </div>
    `}_renderGeoFilter(t){var p,f;const e=U(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._getContentMode(e);let a="",o="";if(!i&&((p=s.values)!=null&&p[0])){const h=s.values[0],[g,v]=h.split("..");a=g||"",o=v||""}const n=a.length>0,l=a.split(",").map(h=>h.trim()),c=!n||l.length===2&&l.every(h=>!isNaN(Number(h))&&h!=="");return d`
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
            @sfx-change=${h=>this._onContentModeChange(t,h.detail.value)}
          ></sfx-radio-group>
        </div>

        ${r===jt?d`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${a}
                      @change=${h=>this._onGeoLocationInput(t,h)}
                    />
                    ${n&&!c?d`<div class="error-text">
                          ${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}
                        </div>`:m}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius","Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${o}
                      @change=${h=>this._onGeoRadiusInput(t,h)}
                    />
                  </div>
                </div>
              </div>
            `:m}
      </div>
    `}_renderAttachmentFilter(t){var i,r;const e=this._getApplied(U(t)),s=((i=e.values)==null?void 0:i[0])||"";return d`
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
    `}_renderFaceMatcherFilter(t){const e=U(t),i=this._getApplied(e).values||[],r=this._getOperator(e,C.IS);return d`
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
            .options=${pt}
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
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"ultratags":return this._renderUltratagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===A.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return m}}_renderFieldSection(t){const e=this._getField(t);if(!e||!ci(e.type))return m;const s=this._collapsedFields.has(t);return d`
      <div class="field-section">
        <div class="field-header" @click=${()=>this._toggleCollapse(t)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${s?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${_i[e.type]||"file-text"}
              .size=${14}
              ${R({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
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
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this._selectableFields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,a)=>a.length===0?m:d`
        <div class="field-group-label">${r}</div>
        ${a.map(o=>{const n=U(o),l=this.visibleFields.includes(n),c=!!this.appliedMetadata[n]||!!this.appliedFilters[n],p=this.pinnedFields.includes(n),f=!l&&this._atFieldLimit;return d`
            <div
              class="field-item ${c?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(o)}
            >
              <sfx-icon
                name=${_i[o.type]||"file-text"}
                .size=${14}
                ${R({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="field-item-label">${o.label}</span>
              <button
                class="field-item-pin ${p?"pinned":""}"
                @click=${h=>{h.stopPropagation(),this._emitPin(n,!p)}}
                title=${p?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${c?d`<sfx-icon name="check" .size=${14}></sfx-icon>`:m}
            </div>
          `})}
      `;return d`
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
          ${e.length===0?d`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:d`${[...s.entries()].map(([r,a])=>i(r,a))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return!t||!ci(t.type)?d`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`:this._renderFieldControl(t)}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return d`
      ${this._showFieldSelection||!t?this._renderFieldSelection():m}
      ${t?d`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?d`
                  <button class="add-field-btn" @click=${this._openFieldSelection}>
                    <sfx-icon name="filter" .size=${14}></sfx-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `:m}
          `:m}
    `}};Y.styles=[Be,ct,E`
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
    `];J([u({type:Array})],Y.prototype,"fields",2);J([u({type:Object})],Y.prototype,"appliedFilters",2);J([u({type:Array})],Y.prototype,"visibleFields",2);J([u()],Y.prototype,"mode",2);J([u()],Y.prototype,"activeFieldKey",2);J([u({type:Array})],Y.prototype,"pinnedFields",2);J([u({type:Object})],Y.prototype,"appliedMetadata",2);J([u({attribute:!1})],Y.prototype,"apiClient",2);J([u({attribute:!1})],Y.prototype,"t",2);J([u()],Y.prototype,"locale",2);J([x()],Y.prototype,"_showFieldSelection",2);J([x()],Y.prototype,"_fieldSearch",2);J([x()],Y.prototype,"_collapsedFields",2);J([x()],Y.prototype,"_tagInputs",2);J([x()],Y.prototype,"_tagSuggestions",2);J([x()],Y.prototype,"_tagLoading",2);J([x()],Y.prototype,"_datePresets",2);J([x()],Y.prototype,"_dateFroms",2);J([x()],Y.prototype,"_dateTos",2);J([x()],Y.prototype,"_specificModeFields",2);J([x()],Y.prototype,"_selectSearches",2);J([x()],Y.prototype,"_textDrafts",2);J([x()],Y.prototype,"_pendingOperators",2);J([x()],Y.prototype,"_utagQueries",2);J([x()],Y.prototype,"_utagEntries",2);J([x()],Y.prototype,"_utagLoading",2);J([x()],Y.prototype,"_utagLabels",2);Y=J([O("ap-filter-metadata")],Y);var ku=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var r=i>1?void 0:i?Su(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ku(e,s,r),r};let ie=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.mode="field",this.activeKey=T.STATUS,this.appliedKeys=[],this.pinnedKeys=[],this.forcedKeys=[],this.selectedStatus=[],this.statusOperator=ds,this.approverValues=[],this.approverOperator=ds,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=ds,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch="",this._pendingOperators={}}_operatorFor(t,e,s){return s.length>0?e:this._pendingOperators[t]||e}_setPendingOperator(t,e){this._pendingOperators={...this._pendingOperators,[t]:e}}_clearPendingOperator(t){const{[t]:e,...s}=this._pendingOperators;this._pendingOperators=s}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===Ie||t===De)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _hasApproverUsers(){return this.approverUsers.length>0}get _hasRequesterUsers(){return this.requesterUsers.length>0}get _effectiveStatusOperator(){return this._operatorFor(T.STATUS,this.statusOperator,this.selectedStatus)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(i=>i!==t):[...this.selectedStatus,t];if(e.length>0&&e.every(i=>i===Ie||i===De)){this._clearPendingOperator(T.STATUS),this._emitChange(T.STATUS,e,this.statusOperator);return}this._emitChange(T.STATUS,e,this._effectiveStatusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._setPendingOperator(T.STATUS,e),this._emitChange(T.STATUS,this.selectedStatus,e)}_clearStatus(){this._clearPendingOperator(T.STATUS),this._emitChange(T.STATUS,[],this.statusOperator)}get _effectiveApproverOperator(){return this._operatorFor(T.APPROVER,this.approverOperator,this.approverValues)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(T.APPROVER,e,this._effectiveApproverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._setPendingOperator(T.APPROVER,e),this._emitChange(T.APPROVER,this.approverValues,e)}_clearApprover(){this._clearPendingOperator(T.APPROVER),this._emitChange(T.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}get _effectiveRequesterOperator(){return this._operatorFor(T.REQUESTOR,this.requesterOperator,this.requesterValues)}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(T.REQUESTOR,e,this._effectiveRequesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._setPendingOperator(T.REQUESTOR,e),this._emitChange(T.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._clearPendingOperator(T.REQUESTOR),this._emitChange(T.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===We.BEFORE||t===We.AFTER||t===We.BETWEEN||t===We.SPECIFIC?t:We.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",r="";if(s===We.PRESET){const a=us(e);a&&(i=a.from,r=a.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:r})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:T.DUE_DATE,values:{field:T.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var r;return i.name.toLowerCase().includes(s)||(((r=i.email)==null?void 0:r.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const e=this.selectedStatus.length>0||!!this._pendingOperators[T.STATUS];return d`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${this._clearStatus}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${mo.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
          .value=${this._effectiveStatusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${Ri.map(s=>d`
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
          ${Ah.map(s=>d`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(s.value)}
                @sfx-toggle=${()=>this._toggleStatus(s.value)}
              >
                <span class="status-icon-label">
                  <sfx-icon
                    name=${s.icon}
                    .size=${16}
                    ${R({color:s.iconColor})}
                  ></sfx-icon>
                  ${this.t(s.labelKey,s.label)}
                </span>
              </sfx-checkbox>
            `)}
        </div>
      </div>
    `}_renderUserItem(t,e,s){return d`
      <div class="user-item" @click=${s}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="user-avatar">
          ${t.avatarUrl?d`<img src=${t.avatarUrl} alt="" />`:d`<span>${this._getInitials(t)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${t.name}</span>
          ${t.email?d`<span class="user-email">${t.email}</span>`:m}
        </span>
      </div>
    `}_renderUserSelectedChips(t,e,s){return e.length===0?m:d`
      <div class="chips-wrap">
        ${e.map(i=>{const r=t.find(a=>a.uuid===i);return r?d`
            <div class="chip">
              <span class="user-chip-avatar">
                ${r.avatarUrl?d`<img src=${r.avatarUrl} alt="" />`:d`<span>${this._getInitials(r)}</span>`}
              </span>
              <span class="chip-label">${r.name}</span>
              <button class="chip-remove" @click=${()=>s(i)}>
                <sfx-icon name="close" .size=${10}></sfx-icon>
              </button>
            </div>
          `:m})}
      </div>
    `}_renderUserPickerSection(t){const s=t.selectedValues.length>0||!!this._pendingOperators[t.filterKey],i=this._filterUsers(t.users,t.search);return d`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!s} @click=${t.onClear}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${mo.map(r=>({...r,label:this.t(r.labelKey,r.label)}))}
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
          ${t.search?d`
                <button class="search-clear" @click=${t.onSearchClear}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        <div class="options-list users-list">
          ${i.length===0?d`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:i.map(r=>this._renderUserItem(r,t.selectedValues.includes(r.uuid),()=>t.onToggle(r.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this._effectiveApproverOperator,filterKey:T.APPROVER,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this._effectiveRequesterOperator,filterKey:T.REQUESTOR,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return d`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearDueDate}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${Ri.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===Ie||this.dueDatePreset===De?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${Di.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==Ie&&this.dueDatePreset!==De?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?d`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset!=="before"?d`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("startDate","Start date")}</span>
                        <sfx-date-input
                          .locale=${it(this.locale)}
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        ></sfx-date-input>
                      </div>
                    `:m}
                ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?d`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("endDate","End date")}</span>
                        <sfx-date-input
                          .locale=${it(this.locale)}
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        ></sfx-date-input>
                      </div>
                    `:m}
              </div>
            `:m}
      </div>
    `}get _availableSubFilters(){return ft.filter(t=>this.forcedKeys.includes(t.key)?!1:t.key===T.APPROVER?this._hasApproverUsers:t.key===T.REQUESTOR?this._hasRequesterUsers:!0)}_emitSubFilterSelect(t){this.dispatchEvent(new CustomEvent("approval-filter-select",{detail:{key:t},bubbles:!0,composed:!0}))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:e},bubbles:!0,composed:!0}))}_renderSelector(){return d`
      <div class="selector-wrap">
        ${this._availableSubFilters.map(t=>{const e=this.appliedKeys.includes(t.key),s=this.pinnedKeys.includes(t.key);return d`
            <div
              class="sub-filter-item ${e?"has-filter":""}"
              @click=${()=>this._emitSubFilterSelect(t.key)}
            >
              <sfx-icon
                name=${t.icon}
                .size=${14}
                ${R({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="sub-filter-label">${this.t(t.labelKey,t.label)}</span>
              <button
                class="sub-filter-pin ${s?"pinned":""}"
                title=${s?this.t("unpinFilter","Unpin filter"):this.t("pinFilter","Pin filter")}
                @click=${i=>{i.stopPropagation(),this._emitPin(t.key,!s)}}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${e?d`<sfx-icon name="check" .size=${14}></sfx-icon>`:m}
            </div>
          `})}
      </div>
    `}render(){if(this.mode==="selector")return this._renderSelector();switch(this.activeKey){case T.APPROVER:return d`<div class="filter-content">${this._renderApproverSection()}</div>`;case T.REQUESTOR:return d`<div class="filter-content">${this._renderRequesterSection()}</div>`;case T.DUE_DATE:return d`<div class="filter-content">${this._renderDueDateSection()}</div>`;default:return d`<div class="filter-content">${this._renderStatusSection()}</div>`}}};ie.styles=[Be,ct,E`
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
    `];le([u({attribute:!1})],ie.prototype,"t",2);le([u()],ie.prototype,"locale",2);le([u()],ie.prototype,"mode",2);le([u()],ie.prototype,"activeKey",2);le([u({type:Array})],ie.prototype,"appliedKeys",2);le([u({type:Array})],ie.prototype,"pinnedKeys",2);le([u({type:Array})],ie.prototype,"forcedKeys",2);le([u({type:Array})],ie.prototype,"selectedStatus",2);le([u()],ie.prototype,"statusOperator",2);le([u({type:Array})],ie.prototype,"approverValues",2);le([u()],ie.prototype,"approverOperator",2);le([u({type:Array})],ie.prototype,"approverUsers",2);le([u({type:Array})],ie.prototype,"requesterValues",2);le([u()],ie.prototype,"requesterOperator",2);le([u({type:Array})],ie.prototype,"requesterUsers",2);le([u()],ie.prototype,"dueDateKind",2);le([u()],ie.prototype,"dueDatePreset",2);le([u()],ie.prototype,"dueDateFrom",2);le([u()],ie.prototype,"dueDateTo",2);le([x()],ie.prototype,"_approverSearch",2);le([x()],ie.prototype,"_requesterSearch",2);le([x()],ie.prototype,"_pendingOperators",2);ie=le([O("ap-filter-approval")],ie);var Cu=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,et=(t,e,s,i)=>{for(var r=i>1?void 0:i?Au(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Cu(e,s,r),r};const Eu=300;function Fu(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let je=class extends F{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Fu(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:y.PRODUCT_REF,values:e,operator:C.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Eu)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.get("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return d`
      <div class="product-item" @click=${()=>this._toggle(t)}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return d`
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
          ${this._search?d`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?d`
              <div class="section-header">
                <span class="section-label"></span>
                <button class="clear-btn" @click=${this._clearAll}>
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:m}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?d`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>d`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:m}

        <!-- Search results -->
        ${this._isSearching?d`
              <div class="filter-section">
                <span class="section-label"
                  >${this.t("productReferences","Product references")}</span
                >
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):m}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:m}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?m:d`
              <div class="placeholder">
                ${t?d`<sfx-icon
                      name="box"
                      .size=${40}
                      ${R({color:"var(--sfx-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}
                    ></sfx-icon>`:m}
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
        ${this._isLoading?d`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:m}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?d`<div class="no-results">${this.t("noResultsFound","No results found")}</div>`:m}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?d`
            <div
              class="dialog-overlay"
              @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}
            >
              <div class="dialog">
                <div class="dialog-header">
                  ${this.t("addProductRefsList","Add products references list")}
                </div>
                <div class="dialog-body">
                  <div class="info-alert" ${R({"margin-top":"0"})}>
                    <sfx-icon name="info" .size=${14}></sfx-icon>
                    <span
                      >${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span
                    >
                  </div>
                  <label
                    class="input-label"
                    ${R({"margin-bottom":"0","font-weight":"400",color:"var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89))"})}
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
          `:m}
    `}};je.styles=[Be,ct,E`
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
    `];et([u({type:Array})],je.prototype,"selected",2);et([u({attribute:!1})],je.prototype,"apiClient",2);et([u({attribute:!1})],je.prototype,"t",2);et([Ze(".product-search")],je.prototype,"_searchInput",2);et([x()],je.prototype,"_search",2);et([x()],je.prototype,"_debouncedSearch",2);et([x()],je.prototype,"_products",2);et([x()],je.prototype,"_isLoading",2);et([x()],je.prototype,"_showAddList",2);et([x()],je.prototype,"_addListText",2);je=et([O("ap-filter-product-ref")],je);var Tu=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,D=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ou(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Tu(e,s,r),r};let I=class extends F{constructor(){super(...arguments),this.totalCount=0,this.totalIsLowerBound=!1,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=Yr,this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.enabledFilterKeys=null,this.enabledMetadataFields=null,this.metadataCategoryEnabled=!0,this.approverUsers=[],this.requesterUsers=[],this.rootFolderPath="/",this.folderFilterOptions=null,this.missingFolders=[],this.activeTab="assets",this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(a=>{var o;return a instanceof HTMLElement&&a.classList.contains("chip")&&((o=a.closest)==null?void 0:o.call(a,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(r=>r instanceof HTMLElement?r.classList.contains("popover-anchor")||r.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&e.some(r=>r instanceof HTMLElement&&(r.classList.contains("dropdown-menu")||r.classList.contains("filter-dropdown")||r.classList.contains("submenu-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){(t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._clampExternalPanel()}_clampExternalPanel(){if(!this._externalTrigger||this._externalLeft==null)return;const t=this.renderRoot.querySelector(".popover-panel");if(!t)return;const e=t.closest(".popover-anchor"),s=e?e.offsetWidth:this.offsetWidth,i=t.offsetWidth,r=this._externalLeft+i;t.style.left=r>s-8?`${Math.max(8,s-i-8)}px`:`${this._externalLeft}px`}repositionExternalPanel(t,e){!this._externalTrigger||!this._openFilter||(this._externalLeft=t,this._externalTop=e,this._clampExternalPanel())}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showApprovalSelector=!1,this._showMetadataSelector=!this._showMetadataSelector}_toggleApprovalSelector(){this._showMetadataSelector=!1,this._showApprovalSelector=!this._showApprovalSelector}_handleApprovalFilterSelect(t){t.stopPropagation();const e=t.detail.key;if(this._showApprovalSelector=!1,this._showDropdown=!1,!(e in this.filters.applied)){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:e},bubbles:!0,composed:!0}));return}this._openFilter=e,this._openMetadataField=null,this._clearExternalAnchor()}_clearExternalAnchor(){this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const r=t==="approval"&&this._isApprovalActive();if(!e&&!r&&(!this._isFilterActive(t)||!this._isApprovalSubKey(t))){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleVariantDefaultChange(t){this.dispatchEvent(new CustomEvent("variant-default-change",{detail:{name:t.detail.value},bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalSubKey(t){return!!t&&ft.some(e=>e.key===t)}_isApprovalActive(){const t=this.filters.applied;return T.STATUS in t||T.APPROVER in t||T.REQUESTOR in t||T.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i,folderUuids:r}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i,folderUuids:r},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e,this._clearExternalAnchor()}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${qi[e.type]||""}${e.key}`===t)return e.label;return t}get _visibleAppliedMetadataCount(){if(!this.metadataCategoryEnabled)return 0;const t=this.enabledMetadataFields;return t?Object.keys(this.filters.metadata.applied).filter(e=>t.includes(ps(e))).length:Object.keys(this.filters.metadata.applied).length}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Us.find(s=>s.key===t)??ft.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var i;const{t:e}=this,s=this.filters.applied;switch(t){case"type":{const r=s.type;return d`<ap-filter-type
          .selected=${(r==null?void 0:r.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const r=s.tags;return d`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const r=s.labels;return d`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"folders":{const r=s.folders;return d`<ap-filter-folders
          .apiClient=${this.apiClient}
          .rootPath=${this.rootFolderPath}
          .options=${this.folderFilterOptions}
          .missing=${this.missingFolders}
          .selected=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-folders>`}case"color":{const r=s.color;return d`<ap-filter-color
          .values=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const r=s.date;return d`<ap-filter-date
          .filterKey=${"date"}
          .field=${(r==null?void 0:r.field)||"created"}
          .kind=${(r==null?void 0:r.kind)||null}
          .from=${(r==null?void 0:r.from)||""}
          .to=${(r==null?void 0:r.to)||""}
          .preset=${(r==null?void 0:r.preset)||""}
          .locale=${this.locale}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const r=s.asset_expiration;return d`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(r==null?void 0:r.kind)||null}
          .from=${(r==null?void 0:r.from)||""}
          .to=${(r==null?void 0:r.to)||""}
          .preset=${(r==null?void 0:r.preset)||""}
          .locale=${this.locale}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const r=s.size,a=((i=r==null?void 0:r.values)==null?void 0:i[0])||"",[o,n]=a.split(".."),l=o?parseFloat(o)/1e6:0,c=n?parseFloat(n)/1e6:0;return d`<ap-filter-size
          .min=${l}
          .max=${c}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const r=s.image,a=r&&"resolution"in r?r:null;return d`<ap-filter-image
          .selectedResolution=${(a==null?void 0:a.resolution)||[]}
          .selectedOrientation=${(a==null?void 0:a.orientation)||[]}
          .selectedFaces=${(a==null?void 0:a.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case y.APPROVAL:return this._renderApprovalSelector();case T.STATUS:case T.APPROVER:case T.REQUESTOR:case T.DUE_DATE:{const r=s[T.STATUS],a=s[T.APPROVER],o=s[T.REQUESTOR],n=s[T.DUE_DATE];return d`<ap-filter-approval
          mode="field"
          .activeKey=${t}
          .selectedStatus=${(r==null?void 0:r.values)||[]}
          .statusOperator=${(r==null?void 0:r.operator)||ds}
          .approverValues=${(a==null?void 0:a.values)||[]}
          .approverOperator=${(a==null?void 0:a.operator)||ds}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(o==null?void 0:o.values)||[]}
          .requesterOperator=${(o==null?void 0:o.operator)||ds}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(n==null?void 0:n.kind)??null}
          .dueDatePreset=${(n==null?void 0:n.preset)||""}
          .dueDateFrom=${(n==null?void 0:n.from)||""}
          .dueDateTo=${(n==null?void 0:n.to)||""}
          .locale=${this.locale}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?d`<ap-filter-metadata
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
          ></ap-filter-metadata>`:d`<ap-filter-metadata
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
        ></ap-filter-metadata>`;case"product_ref":{const r=s.product_ref;return d`<ap-filter-product-ref
          .selected=${(r==null?void 0:r.values)||[]}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return m}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",r=s?this._visibleAppliedMetadataCount>0:i?this._isApprovalActive():this._isFilterActive(t.key),a=this.pinnedFilters.includes(t.key),o=s||i,n=d`
      <button
        class="filter-btn ${r?"active":""} ${a?"pinned":""}"
        @click=${()=>{s?this._toggleMetadataSelector():i?this._toggleApprovalSelector():this.openFilterPanel(t.key)}}
      >
        <span class="filter-btn-icon">
          <sfx-icon name=${t.icon} .size=${18}></sfx-icon>
        </span>
        <span class="filter-btn-label"> ${e(t.labelKey,t.label)} </span>
        ${o?d`<span class="submenu-chevron"
              ><sfx-icon name="chevron-right" .size=${14}></sfx-icon
            ></span>`:d`
              <span
                class="pin-btn ${a?"pinned":""}"
                title=${a?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${l=>this._togglePin(t.key,l)}
              >
                <sfx-icon name="pin" .size=${14}></sfx-icon>
              </span>
            `}
      </button>
    `;return o?d`
      <div class="filter-btn-wrapper">
        ${n}
        ${s&&this._showMetadataSelector?d`
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
            `:m}
        ${i&&this._showApprovalSelector?d` <div class="submenu-overlay">${this._renderApprovalSelector()}</div> `:m}
      </div>
    `:n}_renderApprovalSelector(){return d`<ap-filter-approval
      mode="selector"
      .forcedKeys=${ft.map(t=>t.key).filter(t=>this.forcedFilterKeys.includes(t))}
      .appliedKeys=${ft.map(t=>t.key).filter(t=>t in this.filters.applied)}
      .pinnedKeys=${this.pinnedFilters.filter(t=>ft.some(e=>e.key===t))}
      .approverUsers=${this.approverUsers}
      .requesterUsers=${this.requesterUsers}
      .t=${this.t}
      @approval-filter-select=${this._handleApprovalFilterSelect}
    ></ap-filter-approval>`}render(){const{t}=this,e=Object.keys(this.filters.applied).filter(i=>Mi(i,this.activeTab,!!this.folderFilterOptions)).length+this._visibleAppliedMetadataCount,s=Us.filter(i=>!this.forcedFilterKeys.includes(i.key)&&Mi(i.key,this.activeTab,!!this.folderFilterOptions)&&(!this.enabledFilterKeys||this.enabledFilterKeys.includes(i.key)));return d`
      <div class="toolbar-row">
        ${this.isLoading?d`<span class="count-skeleton"></span>`:d`<span class="count"
              >${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?this.totalIsLowerBound?t("assetCountAtLeast",{count:this.totalCount,defaultValue_one:"{{count}}+ asset",defaultValue_other:"{{count}}+ assets"}):t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span
            >`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters&&s.length>0?d`
                <div class="filter-dropdown">
                  <button
                    class="add-btn ${this._showDropdown?"open":""}"
                    @click=${this._toggleDropdown}
                  >
                    <sfx-icon name="filter" .size=${16}></sfx-icon>
                    ${t("filters","Filters")}
                    ${e>0?d`<span class="filter-count">${e}</span>`:d`<sfx-icon name="chevron-down" .size=${16}></sfx-icon>`}
                  </button>
                  ${this._showDropdown?d`
                        <div class="dropdown-menu">
                          ${s.map(i=>this._renderFilterButton(i))}
                        </div>
                      `:m}
                </div>
              `:m}
          <sfx-dropdown
            variant="borderless"
            .label=${t("sort","Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map(i=>({...i,label:t(i.labelKey,i.label)}))}
            @sfx-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></sfx-dropdown>
          ${this.showVariants?d`
                <sfx-dropdown
                  variant="borderless"
                  .label=${t("insertAs","Insert as")}
                  .value=${this.defaultVariantName}
                  .options=${this.variantOptions}
                  @sfx-change=${this._handleVariantDefaultChange}
                  @dropdown-open=${this._handleSortOpen}
                ></sfx-dropdown>
              `:m}
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
          ${this.showCreateFolder?d`
                <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
                  <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
                  New folder
                </button>
              `:m}
          ${this.showUpload?d`
                <button class="upload-btn" @click=${this._handleUploadClick}>
                  <sfx-icon name="upload" .size=${16}></sfx-icon>
                  ${t("upload","Upload")}
                </button>
              `:m}
        </div>
      </div>
      ${this._openFilter?d`
            <div
              class="popover-anchor ${this._externalTrigger?"external":""}"
              ${R(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}
            >
              ${this._externalTrigger?m:d`
                    <div class="anchor-tab">
                      ${this._openFilter==="metadata"&&this._openMetadataField?d`
                            <button
                              class="anchor-back"
                              @click=${i=>{i.stopPropagation(),this._openMetadataField=null}}
                              title=${t("backToFields","Back to fields")}
                            >
                              <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                            </button>
                            ${this._getMetadataFieldLabel(this._openMetadataField)}
                          `:this._isApprovalSubKey(this._openFilter)?d`
                              <button
                                class="anchor-back"
                                @click=${i=>{i.stopPropagation(),this._openFilter=y.APPROVAL}}
                                title=${t("backToApproval","Back to approval filters")}
                              >
                                <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                              </button>
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${t(cs[this._openFilter]??this._openFilter,Bt[this._openFilter]||this._openFilter)}
                            `:d`
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${t(cs[this._openFilter]??this._openFilter,Bt[this._openFilter]||this._openFilter)}
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
                ${R(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}
              >
                ${this._renderFilterContent(this._openFilter)}
              </div>
            </div>
          `:m}
    `}};I.styles=E`
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
  `;D([u({type:Number})],I.prototype,"totalCount",2);D([u({type:Boolean})],I.prototype,"totalIsLowerBound",2);D([u({type:Number})],I.prototype,"totalFolderCount",2);D([u({type:Boolean})],I.prototype,"isLoading",2);D([u({type:Boolean})],I.prototype,"showUpload",2);D([u({type:Boolean})],I.prototype,"showCreateFolder",2);D([u({type:Boolean})],I.prototype,"showFilters",2);D([u()],I.prototype,"countLabel",2);D([u()],I.prototype,"sortBy",2);D([u()],I.prototype,"sortDirection",2);D([u({type:Array})],I.prototype,"sortOptions",2);D([u({type:Boolean})],I.prototype,"showVariants",2);D([u({type:Array})],I.prototype,"variantOptions",2);D([u()],I.prototype,"defaultVariantName",2);D([u({type:Object})],I.prototype,"filters",2);D([u({type:Array})],I.prototype,"labels",2);D([u({type:Array})],I.prototype,"tags",2);D([u({type:Array})],I.prototype,"fileTypes",2);D([u({type:Array})],I.prototype,"metadataFields",2);D([u({type:Array})],I.prototype,"pinnedFilters",2);D([u({type:Array})],I.prototype,"forcedFilterKeys",2);D([u({type:Array})],I.prototype,"enabledFilterKeys",2);D([u({type:Array})],I.prototype,"enabledMetadataFields",2);D([u({type:Boolean})],I.prototype,"metadataCategoryEnabled",2);D([u({type:Array})],I.prototype,"approverUsers",2);D([u({type:Array})],I.prototype,"requesterUsers",2);D([u({attribute:!1})],I.prototype,"apiClient",2);D([u()],I.prototype,"rootFolderPath",2);D([u({type:Array})],I.prototype,"folderFilterOptions",2);D([u({type:Array})],I.prototype,"missingFolders",2);D([u()],I.prototype,"activeTab",2);D([u({attribute:!1})],I.prototype,"t",2);D([u()],I.prototype,"locale",2);D([Ze("sfx-dropdown")],I.prototype,"_sortDropdown",2);D([x()],I.prototype,"_showDropdown",2);D([x()],I.prototype,"_showMetadataSelector",2);D([x()],I.prototype,"_showApprovalSelector",2);D([x()],I.prototype,"_openFilter",2);D([x()],I.prototype,"_openMetadataField",2);D([x()],I.prototype,"_externalTrigger",2);D([x()],I.prototype,"_externalLeft",2);D([x()],I.prototype,"_externalTop",2);I=D([O("ap-content-toolbar")],I);var Lu=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var r=i>1?void 0:i?Pu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Lu(e,s,r),r};let ne=class extends F{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.enabledFilters=null,this.enabledMetadataFields=null,this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeTab="assets",this.folderOptions=!1,this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en"}_formatDate(t){return Un(t,this.locale)}_mapTypeLabel(t){var i;const e=(i=Ii.find(r=>r.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_parseFiniteNumber(t){if(!t||!t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),r=this._parseFiniteNumber(s),a=this._parseFiniteNumber(i),o=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return r!==null&&a!==null?`${o(r)} – ${o(a)}`:r!==null?`> ${o(r)}`:a!==null?`< ${o(a)}`:e}_isNumericSizeSummary(t){if(t.values.length===0)return!1;const[e,s]=t.values[0].split("..");return this._parseFiniteNumber(e)!==null||this._parseFiniteNumber(s)!==null}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===y.SIZE)return this._getSizeSummary(s);if(e===y.COLOR){const a=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return a.length===0?"":a.length===1?a[0]:`${a[0]} +${a.length-1}`}const i=a=>a===Ie?this.t("empty","Empty"):a===De?this.t("notEmpty","Not empty"):null;if(s.metadataType===A.DATE){const a=i(s.values[0]);if(a)return a;if(s.metaDatePreset){const o=Di.find(n=>n.value===s.metaDatePreset);if(o)return this.t(o.labelKey,o.label)}if(s.values.length===2){const[o,n]=s.values;return`${this._formatDate(o)} – ${this._formatDate(n)}`}return s.values.length===1?s.operator===C.LESS_THAN?`< ${this._formatDate(s.values[0])}`:s.operator===C.GREATER_THAN?`> ${this._formatDate(s.values[0])}`:this._formatDate(s.values[0]):s.values.map(o=>this._formatDate(o)).join(", ")}if(s.metadataType===A.NUMERIC||s.metadataType===A.DECIMAL2){const a=i(s.values[0]);if(a)return a;const[o,n]=s.values;if(s.operator===C.RANGE)return o&&n?`${o} – ${n}`:"";if(s.operator===C.GREATER_THAN_OR_EQUAL)return o?`≥ ${o}`:"";if(s.operator===C.LESS_THAN_OR_EQUAL){const l=n??o;return l?`≤ ${l}`:""}return o||""}if(s.metadataType===A.ULTRATAGS){const a=o=>i(o)??Xn(o,this.locale)??o;return s.values.length===1?a(s.values[0]):`${a(s.values[0])} +${s.values.length-1}`}const r=e===y.TYPE?a=>i(a)??this._mapTypeLabel(a):e===y.TAGS?a=>{var o;return i(a)??(((o=this.tags.find(n=>n.sid===a))==null?void 0:o.label)||a)}:e===y.LABELS?a=>{var o;return i(a)??(((o=this.labels.find(n=>n.sid===a))==null?void 0:o.name)||a)}:e===y.FOLDERS?a=>gi(a):e===T.APPROVER?a=>{var o;return i(a)??(((o=this.approverUsers.find(n=>n.uuid===a))==null?void 0:o.name)||a)}:e===T.REQUESTOR?a=>{var o;return i(a)??(((o=this.requesterUsers.find(n=>n.uuid===a))==null?void 0:o.name)||a)}:a=>i(a)??a;return s.values.length===1?r(s.values[0]):`${r(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===T.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=t.preset||"";if(e===Ie)return this.t("empty","Empty");if(e===De)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const s=Di.find(i=>i.value===e);return s?this.t(s.labelKey,s.label):e}if(t.kind==="between"){if(t.from&&t.to)return`${this._formatDate(t.from)} – ${this._formatDate(t.to)}`;if(t.from)return`> ${this._formatDate(t.from)}`;if(t.to)return`< ${this._formatDate(t.to)}`}return t.kind==="after"&&t.from?`> ${this._formatDate(t.from)}`:t.kind==="before"&&t.to?`< ${this._formatDate(t.to)}`:t.kind==="specific"&&t.from?this._formatDate(t.from):""}_getDateSummary(t){const e=Tn.find(n=>n.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...On,...Ln],r=t.preset?i.find(n=>n.value===t.preset):null,a=r?this.t(r.labelKey,r.label):t.preset||"";let o="";switch(t.kind){case"preset":o=a;break;case"before":o=t.to?`< ${this._formatDate(t.to)}`:a;break;case"after":o=t.from?`> ${this._formatDate(t.from)}`:a;break;case"between":t.from&&t.to?o=`${this._formatDate(t.from)} – ${this._formatDate(t.to)}`:t.from?o=`> ${this._formatDate(t.from)}`:t.to&&(o=`< ${this._formatDate(t.to)}`);break;case"specific":o=t.from?this._formatDate(t.from):"";break;default:o=a}return o?s?`${s}: ${o}`:o:""}_getFilterIcon(t){const e=Us.find(s=>s.key===t)??ft.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_findMetadataField(t){return this.metadataFields.find(e=>e.key===t)}_getMetadataLabel(t,e=!1){var i,r;if(e)return((i=this._findMetadataField(t))==null?void 0:i.label)||t;const s=ps(t);return((r=this._findMetadataField(s))==null?void 0:r.label)||s}_getMetadataIcon(t){const e=ps(t),s=this._findMetadataField(e);return s&&_i[s.type]||"file-text"}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}getActiveChip(){const t=this.activeMetadataField?`.chip[data-metadata-key="${CSS.escape(this.activeMetadataField)}"]`:this.activeFilter?`.chip[data-filter-key="${CSS.escape(this.activeFilter)}"]`:null;return t?this.renderRoot.querySelector(t):null}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_isForcedKeyMetadata(t,e){return!Fn.has(t)||e.has(t)}_isForcedChipVisible(t,e){return _h.has(t)?!0:this._isForcedKeyMetadata(t,e)?bi(y.METADATA,this.enabledFilters)?!this.enabledMetadataFields||this.enabledMetadataFields.includes(t):!1:bi(t,this.enabledFilters)}_renderForcedChip(t,e,s){const{t:i}=this,r=this._isForcedKeyMetadata(t,s),a=this._getFilterSummary(e,r?void 0:t),o=!r&&e.type==="date",n=t===y.SIZE&&e.type==="string"&&this._isNumericSizeSummary(e),l=r?void 0:Bt[t],c=l?i(cs[t]??t,l):this._getMetadataLabel(t,!0);return d`
      <span class="chip forced">
        ${!r&&(o||t===y.TYPE||n)&&a?d`<span class="chip-label">${a}</span>`:d`
              <span class="chip-label">${c}</span>
              ${a?d`<span class="chip-summary">${a}</span>`:m}
            `}
        <span class="chip-lock">
          <sfx-icon name="lock" .size=${12}></sfx-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return d`
        <span
          class="chip pinned-empty ${t===this.activeFilter?"active":""}"
          data-filter-key=${t}
          @click=${a=>this._openFilter(t,a)}
        >
          <span class="chip-icon"
            ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
          ></span>
          <span class="chip-label"
            >${s(cs[t]??t,Bt[t]||t)}</span
          >
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),r=t===y.DATE||t===y.TYPE||t===y.SIZE;return d`
      <span
        class="chip ${t===this.activeFilter?"active":""}"
        data-filter-key=${t}
        @click=${a=>this._openFilter(t,a)}
      >
        ${r&&i?d` <span class="chip-icon"
                ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
              ></span>
              <span class="chip-label">${i}</span>`:d`
              <span class="chip-label"
                >${s(cs[t]??t,Bt[t]||t)}</span
              >
              ${i?d`<span class="chip-summary">${i}</span>`:m}
            `}
        <button
          class="chip-remove"
          @click=${a=>{a.stopPropagation(),this._removeFilter(t)}}
          title=${s("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const a=this._getMetadataLabel(t),o=this._getMetadataIcon(t);return d`
        <span
          class="chip pinned-empty ${t===this.activeMetadataField?"active":""}"
          data-metadata-key=${t}
          @click=${n=>this._openMetadataFilter(t,n)}
        >
          <span class="chip-icon"><sfx-icon name=${o} .size=${16}></sfx-icon></span>
          <span class="chip-label">${a}</span>
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),r=this._getMetadataIcon(t);return d`
      <span
        class="chip ${t===this.activeMetadataField?"active":""}"
        data-metadata-key=${t}
        @click=${a=>this._openMetadataFilter(t,a)}
      >
        <span class="chip-icon"><sfx-icon name=${r} .size=${16}></sfx-icon></span>
        <span class="chip-label">${i}</span>
        ${s?d`<span class="chip-summary">${s}</span>`:m}
        <button
          class="chip-remove"
          @click=${a=>{a.stopPropagation(),this._removeMetadataFilter(t)}}
          title=${this.t("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}render(){const t=kr(this.forcedFilters),e=new Set(Object.keys(t)),i=bi(y.METADATA,this.enabledFilters)?new Set(this.metadataFields.filter(w=>!this.enabledMetadataFields||this.enabledMetadataFields.includes(w.key)).map(w=>w.key)):new Set,r=w=>Mi(w,this.activeTab,this.folderOptions),a=[...e].filter(w=>this._isForcedChipVisible(w,i)),o=Object.keys(this.appliedFilters).filter(w=>!e.has(w)&&r(w)),n=Object.keys(this.appliedMetadata),l=new Set(this.pinnedFilters),c=new Set(this.pinnedMetadataFields),p=this.pinnedFilters.filter(w=>!e.has(w)&&r(w)),f=o.filter(w=>!l.has(w)),h=n.filter(w=>!c.has(w)),g=this.pendingFilter&&!l.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),v=this.pendingMetadataField&&!c.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),b=this.activeMetadataField&&this.activeMetadataField!==this.pendingMetadataField&&!c.has(this.activeMetadataField)&&!(this.activeMetadataField in this.appliedMetadata),_=o.length+n.length>0;return a.length+p.length+this.pinnedMetadataFields.length+f.length+h.length+(g?1:0)+(v?1:0)+(b?1:0)===0?m:d`
      <div class="chips-row">
        <div class="chips">
          ${a.map(w=>this._renderForcedChip(w,t[w],i))}
          ${p.map(w=>this._renderFilterChip(w,this.appliedFilters[w]))}
          ${this.pinnedMetadataFields.map(w=>this._renderMetadataChip(w,this.appliedMetadata[w]))}
          ${f.map(w=>this._renderFilterChip(w,this.appliedFilters[w]))}
          ${g?d`
                <span
                  class="chip pinned-empty active pending"
                  data-filter-key=${this.pendingFilter}
                  @click=${w=>this._openFilter(this.pendingFilter,w)}
                >
                  <span class="chip-icon"
                    ><sfx-icon
                      name=${this._getFilterIcon(this.pendingFilter)}
                      .size=${16}
                    ></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(cs[this.pendingFilter]??this.pendingFilter,Bt[this.pendingFilter]||this.pendingFilter)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:m}
          ${h.map(w=>this._renderMetadataChip(w,this.appliedMetadata[w]))}
          ${v?d`
                <span
                  class="chip pinned-empty active pending"
                  data-metadata-key=${this.pendingMetadataField}
                  @click=${w=>this._openMetadataFilter(this.pendingMetadataField,w)}
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
              `:m}
          ${b?this._renderMetadataChip(this.activeMetadataField,void 0):m}
          ${_?d`<button class="clear-all" @click=${this._clearAll}>
                ${this.t("clearFilters","Clear filters")}
              </button>`:m}
        </div>
      </div>
    `}};ne.styles=E`
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
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      min-width: 0;
      flex: 1;
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
      min-width: 0;
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
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
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
  `;me([u({type:Object})],ne.prototype,"appliedFilters",2);me([u({type:Object})],ne.prototype,"appliedMetadata",2);me([u({type:Object})],ne.prototype,"forcedFilters",2);me([u({type:Array})],ne.prototype,"enabledFilters",2);me([u({type:Array})],ne.prototype,"enabledMetadataFields",2);me([u({type:Array})],ne.prototype,"metadataFields",2);me([u({type:Array})],ne.prototype,"pinnedFilters",2);me([u({type:Array})],ne.prototype,"pinnedMetadataFields",2);me([u({type:Array})],ne.prototype,"tags",2);me([u({type:Array})],ne.prototype,"labels",2);me([u({type:Array})],ne.prototype,"approverUsers",2);me([u({type:Array})],ne.prototype,"requesterUsers",2);me([u()],ne.prototype,"activeTab",2);me([u({type:Boolean})],ne.prototype,"folderOptions",2);me([u()],ne.prototype,"activeFilter",2);me([u()],ne.prototype,"activeMetadataField",2);me([u()],ne.prototype,"pendingFilter",2);me([u()],ne.prototype,"pendingMetadataField",2);me([u({attribute:!1})],ne.prototype,"t",2);me([u()],ne.prototype,"locale",2);ne=me([O("ap-filters-bar")],ne);var Mu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,pe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Iu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Mu(e,s,r),r};const Du=6;let ae=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.limitLocked=!1,this.limitTooltip="",this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.variantOverrides={},this.thumbnailMetadataFields=[],this.regionalFilters={},this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return d`
      <div
        class="grid"
        role="list"
        aria-label="Assets"
        ${R({"--sfx-grid-min-col":String(t)})}
      >
        ${this.folders.map((e,s)=>d`
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
        ${this.assets.map((e,s)=>{const i=s>=this._prevCount?Math.min(s-this._prevCount,20):Math.min(s,20);return d`
            <ap-asset-card
              .asset=${e}
              .t=${this.t}
              .locale=${this.locale}
              .index=${this.folderSelectable?this.folders.length+s:s}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              ?limit-locked=${this.limitLocked&&!this.selectedIds.includes(e.uuid)}
              title=${this.limitLocked&&!this.selectedIds.includes(e.uuid)?this.limitTooltip:m}
              .multiSelect=${this.multiSelect}
              .showVariants=${this.showVariants}
              .variantOptions=${this.variantOptions}
              .selectedVariantName=${this.variantOverrides[e.uuid]??this.defaultVariantName}
              .thumbnailMetadataFields=${this.thumbnailMetadataFields}
              .regionalFilters=${this.regionalFilters}
              ${R({"--sfx-stagger-index":String(i)})}
              data-asset-uuid=${e.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-variant-change=${r=>this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-card>
          `})}
        ${this.isLoading?Array.from({length:Du},()=>d`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                    ${this.thumbnailMetadataFields.length?d`<div class="ghost-thumb-meta">
                          ${this.thumbnailMetadataFields.map(()=>d`<div class="ghost-thumb-meta-row">
                                <div class="ghost-line"></div>
                              </div>`)}
                        </div>`:m}
                  </div>
                </div>`):m}
      </div>
    `}};ae.styles=E`
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
    /* Space for the \`thumbnailMetadata\` lines — same box as the card's .thumb-meta (6px margin,
       18px rows, 2px gap) — so they don't add to the jump when a placeholder is replaced. */
    .ghost-thumb-meta {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 6px;
    }
    .ghost-thumb-meta-row {
      display: flex;
      align-items: center;
      height: 18px;
    }
    .ghost-thumb-meta-row .ghost-line {
      height: 12px;
      width: 60%;
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
  `;pe([u({attribute:!1})],ae.prototype,"t",2);pe([u()],ae.prototype,"locale",2);pe([u({type:Array})],ae.prototype,"assets",2);pe([u({type:Array})],ae.prototype,"folders",2);pe([u({type:Object})],ae.prototype,"folderPreviews",2);pe([u({type:Array})],ae.prototype,"selectedIds",2);pe([u({type:Array})],ae.prototype,"selectedFolderIds",2);pe([u({type:Array})],ae.prototype,"disabledAssetIds",2);pe([u({type:Boolean})],ae.prototype,"limitLocked",2);pe([u({type:String})],ae.prototype,"limitTooltip",2);pe([u({type:Array})],ae.prototype,"disabledFolderIds",2);pe([u({type:Boolean})],ae.prototype,"isLoading",2);pe([u({type:Boolean})],ae.prototype,"multiSelect",2);pe([u({type:Boolean})],ae.prototype,"folderSelectable",2);pe([u({type:String})],ae.prototype,"gridSize",2);pe([u({type:Boolean})],ae.prototype,"showVariants",2);pe([u({type:Array})],ae.prototype,"variantOptions",2);pe([u({type:String})],ae.prototype,"defaultVariantName",2);pe([u({type:Object})],ae.prototype,"variantOverrides",2);pe([u({type:Array})],ae.prototype,"thumbnailMetadataFields",2);pe([u({type:Object})],ae.prototype,"regionalFilters",2);ae=pe([O("ap-grid-view")],ae);var Ru=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,ue=(t,e,s,i)=>{for(var r=i>1?void 0:i?zu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ru(e,s,r),r};const Nu=5;let oe=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.limitLocked=!1,this.limitTooltip="",this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.variantOverrides={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px");const s=this.showVariants&&this.variantOptions.length>1;return e.push(s?"96px":"64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(r=>t.has(r.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(r=>s.has(r.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return d`
      <div
        class="list-header"
        ${R({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
        role="row"
        aria-label="Column headers"
      >
        ${this.multiSelect?d`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
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
            </span>`:m}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        ${this._compactLevel<2?d`<span>${this.t("size","Size")}</span>`:m}
        ${this._compactLevel<1?d`<span>${this.t("date","Date")}</span>`:m}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((i,r)=>d`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              .locale=${this.locale}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              ?disabled=${this.disabledFolderIds.includes(i.uuid)}
              .index=${r}
              data-folder-uuid=${i.uuid}
              @folder-open=${a=>{a.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:a.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${a=>{a.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:a.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,r)=>d`
            <ap-asset-row
              .asset=${i}
              .t=${this.t}
              .locale=${this.locale}
              .index=${this.folderSelectable?this.folders.length+r:r}
              ?selected=${this.selectedIds.includes(i.uuid)}
              ?disabled=${this.disabledAssetIds.includes(i.uuid)}
              ?limit-locked=${this.limitLocked&&!this.selectedIds.includes(i.uuid)}
              title=${this.limitLocked&&!this.selectedIds.includes(i.uuid)?this.limitTooltip:m}
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
        ${this.isLoading?Array.from({length:Nu},(i,r)=>{const a=["70%","55%","80%","45%","65%"];return d`
                <div
                  class="ghost-row"
                  ${R({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
                >
                  ${this.multiSelect?d`<div class="ghost-el ghost-check"></div>`:m}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${R({width:a[r]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?d`<div class="ghost-el ghost-size"></div>`:m}
                  ${this._compactLevel<1?d`<div class="ghost-el ghost-date"></div>`:m}
                  <div></div>
                </div>
              `}):m}
      </div>
    `}};oe.styles=E`
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
  `;ue([u({attribute:!1})],oe.prototype,"t",2);ue([u()],oe.prototype,"locale",2);ue([u({type:Array})],oe.prototype,"assets",2);ue([u({type:Array})],oe.prototype,"folders",2);ue([u({type:Array})],oe.prototype,"selectedIds",2);ue([u({type:Array})],oe.prototype,"selectedFolderIds",2);ue([u({type:Array})],oe.prototype,"disabledAssetIds",2);ue([u({type:Boolean})],oe.prototype,"limitLocked",2);ue([u({type:String})],oe.prototype,"limitTooltip",2);ue([u({type:Array})],oe.prototype,"disabledFolderIds",2);ue([u({type:Boolean})],oe.prototype,"isLoading",2);ue([u({type:Boolean})],oe.prototype,"multiSelect",2);ue([u({type:Boolean})],oe.prototype,"folderSelectable",2);ue([u({type:Number})],oe.prototype,"totalCount",2);ue([u({type:Boolean})],oe.prototype,"isSelectingAll",2);ue([u({type:Object})],oe.prototype,"folderPreviews",2);ue([u({type:Boolean})],oe.prototype,"showVariants",2);ue([u({type:Array})],oe.prototype,"variantOptions",2);ue([u({type:String})],oe.prototype,"defaultVariantName",2);ue([u({type:Object})],oe.prototype,"variantOverrides",2);ue([x()],oe.prototype,"_compactLevel",2);oe=ue([O("ap-list-view")],oe);function Fr(t,e,s=33,i=240){const r=Math.min(e*s+8,i),a=window.innerHeight-t.bottom,o=t.top;return a>=r||a>=o?"below":"above"}function Jn(t,e,s){return i=>{if(!t())return;const r=i.composedPath(),a=e();(!a||!r.includes(a))&&s()}}var Uu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,Fe=(t,e,s,i)=>{for(var r=i>1?void 0:i?ju(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Uu(e,s,r),r};let ye=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName="original",this.thumbnailMetadataFields=[],this.regionalFilters={},this._variantMenuOpen=!1,this._variantMenuPos="above",this._variantMenuFocusIndex=-1,this._outsideClickHandler=Jn(()=>this._variantMenuOpen,()=>{var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".variant-trigger-wrap")},()=>this._setVariantMenuOpen(!1))}_setVariantMenuOpen(t){this._variantMenuOpen=t,this.style.zIndex=t?"30":"",t||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".variant-menu-item");t&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<t.length&&t[this._variantMenuFocusIndex].focus()}_handleTriggerKeydown(t){if((t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&!this._variantMenuOpen){t.preventDefault();const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=Fr(e,this.variantOptions.length),this._variantMenuFocusIndex=t.key==="ArrowUp"?this.variantOptions.length-1:Math.max(0,this.variantOptions.findIndex(s=>s.value===this.selectedVariantName)),this._setVariantMenuOpen(!0),this.updateComplete.then(()=>this._focusVariantMenuItem())}}_handleMenuKeydown(t){var e,s;switch(t.key){case"ArrowDown":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case"ArrowUp":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case"Enter":case" ":{t.preventDefault();const i=this.variantOptions[this._variantMenuFocusIndex];i&&this._selectVariant(t,i.value);break}case"Escape":t.preventDefault(),t.stopPropagation(),this._setVariantMenuOpen(!1),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".variant-trigger"))==null||s.focus();break;case"Tab":this._setVariantMenuOpen(!1);break}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),r=a=>String(a).padStart(2,"0");return e>0?`${e}:${r(s)}:${r(i)}`:`${r(s)}:${r(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}_toggleVariantMenu(t){if(t.stopPropagation(),!this._variantMenuOpen){const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=Fr(e,this.variantOptions.length)}this._setVariantMenuOpen(!this._variantMenuOpen)}_selectVariant(t,e){var s,i;t.stopPropagation(),this._setVariantMenuOpen(!1),(i=(s=this.shadowRoot)==null?void 0:s.querySelector(".variant-trigger"))==null||i.focus(),this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:{uuid:this.asset.uuid,name:e,asset:this.asset,index:this.index},bubbles:!0}))}_renderThumbnailMetadata(t){return this.thumbnailMetadataFields.length?d`
      <dl class="thumb-meta">
        ${this.thumbnailMetadataFields.map(e=>{const s=Gr(lp(t,e),e,this.regionalFilters,this.locale).trim();return d`
            <div class="thumb-meta-row">
              <dt title=${e.label}>${e.label}:</dt>
              ${s?d`<dd title=${s}>${s}</dd>`:d`<dd>
                    <span aria-hidden="true">—</span
                    ><span class="sr-only">${this.t("noValue","No value")}</span>
                  </dd>`}
            </div>
          `})}
      </dl>
    `:m}render(){var f,h,g,v,b,_,S;const t=this.asset;if(!t)return d``;const e=Gt(t.type),s=e==="video",i=e==="image",r=((f=t.extension)==null?void 0:f.toLowerCase())==="pdf",a=!!((h=t.info)!=null&&h.thumbnail||(g=t.info)!=null&&g.image_thumbnail||(v=t.info)!=null&&v.preview),o=bn(t.extension||"")||a;let n="";s?n=wn(t):r?n=Vr(t):o&&(n=Pi(t,i?this.selectedVariantName:void 0));const l=this.showVariants&&this.variantOptions.length>1&&i,c=He(t.extension||""),p=Ur(t.extension||"");return d`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${p&&n?"chess":""}">
          ${n?d`<img
                src=${n}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${p?"transparent-asset":""}"
                @error=${w=>{const P=w.target,k=He();P.src!==c&&P.src!==k?(P.src=c,P.classList.add("icon-fallback")):P.src!==k&&(P.src=k)}}
              />`:d`<img
                src=${c}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${w=>{const P=w.target,k=He();P.src!==k&&(P.src=k)}}
              />`}
          ${s&&(((b=t.info)==null?void 0:b.video_duration)??((_=t.info)==null?void 0:_.duration))!=null?d`<span class="duration"
                >${this._formatDuration(t.info.video_duration??t.info.duration)}</span
              >`:m}
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
          ${this.multiSelect?d`
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
              `:m}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div
            class="info-secondary ${l?"has-variants":""} ${this._variantMenuOpen?"menu-open":""}"
          >
            <div class="meta">
              ${qr(t.extension)}${(()=>{var L,V,z,re;const w=((L=t.info)==null?void 0:L.img_w)||((V=t.info)==null?void 0:V.video_w),P=((z=t.info)==null?void 0:z.img_h)||((re=t.info)==null?void 0:re.video_h),k=jn(w,P);return k?` · ${k}`:""})()}
              · ${Kr(((S=t.size)==null?void 0:S.bytes)||0)}
            </div>
            ${l?(()=>{var P;const w=((P=this.variantOptions.find(k=>k.value===this.selectedVariantName))==null?void 0:P.label)??this.selectedVariantName;return d`
                    <div
                      class="variant-control ${this._variantMenuOpen?"force-visible":""}"
                      @click=${k=>k.stopPropagation()}
                    >
                      <span class="variant-control-label">${this.t("insertAs","Insert as")}:</span>
                      <div class="variant-trigger-wrap">
                        <button
                          class="variant-trigger"
                          @click=${this._toggleVariantMenu}
                          @keydown=${this._handleTriggerKeydown}
                          title=${w}
                          aria-label=${this.t("insertAs","Insert as")}
                          aria-haspopup="listbox"
                          aria-expanded=${this._variantMenuOpen}
                        >
                          <span class="variant-trigger-label">${w}</span>
                          <sfx-icon name="chevron-down" .size=${12}></sfx-icon>
                        </button>
                        ${this._variantMenuOpen?d`
                              <div
                                class="variant-menu ${this._variantMenuPos}"
                                role="listbox"
                                @keydown=${this._handleMenuKeydown}
                              >
                                ${this.variantOptions.map((k,L)=>d`
                                    <button
                                      class="variant-menu-item ${k.value===this.selectedVariantName?"active":""} ${L===this._variantMenuFocusIndex?"focused":""}"
                                      role="option"
                                      aria-selected=${k.value===this.selectedVariantName}
                                      @click=${V=>this._selectVariant(V,k.value)}
                                      @mouseenter=${()=>{this._variantMenuFocusIndex=L}}
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
                                      <span>${k.label}</span>
                                    </button>
                                  `)}
                              </div>
                            `:m}
                      </div>
                    </div>
                  `})():m}
          </div>
          ${this._renderThumbnailMetadata(t)}
        </div>
      </div>
    `}};ye.styles=E`
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
    :host([limit-locked]) {
      opacity: 0.4;
      cursor: not-allowed;
      /* the entry animation ends at opacity 1 and would override the muted look */
      animation: none;
    }
    /* muted at the cap: Preview stays, but there is nothing to select */
    :host([limit-locked]) .select-btn {
      display: none;
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
    /* \`thumbnailMetadata\` lines. Every card renders all configured lines (an empty value shows
       a dash), so a card's height never depends on which of those fields the asset has filled. */
    .thumb-meta {
      margin: 6px 0 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .thumb-meta-row {
      display: flex;
      gap: 4px;
      min-width: 0;
      font-size: 0.75rem;
      line-height: 18px;
    }
    .thumb-meta-row dt {
      flex-shrink: 0;
      max-width: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .thumb-meta-row dd {
      flex: 1;
      min-width: 0;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
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
  `;Fe([u({attribute:!1})],ye.prototype,"t",2);Fe([u()],ye.prototype,"locale",2);Fe([u({type:Object})],ye.prototype,"asset",2);Fe([u({type:Number})],ye.prototype,"index",2);Fe([u({type:Boolean,reflect:!0})],ye.prototype,"selected",2);Fe([u({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);Fe([u({type:Boolean})],ye.prototype,"multiSelect",2);Fe([u({type:Boolean})],ye.prototype,"showVariants",2);Fe([u({type:Array})],ye.prototype,"variantOptions",2);Fe([u({type:String})],ye.prototype,"selectedVariantName",2);Fe([u({type:Array})],ye.prototype,"thumbnailMetadataFields",2);Fe([u({type:Object})],ye.prototype,"regionalFilters",2);Fe([x()],ye.prototype,"_variantMenuOpen",2);Fe([x()],ye.prototype,"_variantMenuPos",2);Fe([x()],ye.prototype,"_variantMenuFocusIndex",2);ye=Fe([O("ap-asset-card")],ye);var Vu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,Le=(t,e,s,i)=>{for(var r=i>1?void 0:i?Bu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Vu(e,s,r),r};let Se=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName="original",this._variantMenuOpen=!1,this._variantMenuPos="above",this._variantMenuFocusIndex=-1,this._outsideClickHandler=Jn(()=>this._variantMenuOpen,()=>{var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".variant-control-wrap")},()=>this._setVariantMenuOpen(!1))}_setVariantMenuOpen(t){this._variantMenuOpen=t,this.style.zIndex=t?"30":"",t||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".variant-menu-item");t&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<t.length&&t[this._variantMenuFocusIndex].focus()}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}_toggleVariantMenu(t){if(t.stopPropagation(),!this._variantMenuOpen){const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=Fr(e,this.variantOptions.length),this._variantMenuFocusIndex=Math.max(0,this.variantOptions.findIndex(s=>s.value===this.selectedVariantName))}this._setVariantMenuOpen(!this._variantMenuOpen)}_handleVariantTriggerKeydown(t){!this._variantMenuOpen&&(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._toggleVariantMenu(t),this.updateComplete.then(()=>this._focusVariantMenuItem()))}_handleVariantMenuKeydown(t){var e,s;switch(t.key){case"ArrowDown":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case"ArrowUp":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case"Enter":case" ":{t.preventDefault();const i=this.variantOptions[this._variantMenuFocusIndex];i&&this._selectVariant(t,i.value);break}case"Escape":t.preventDefault(),t.stopPropagation(),this._setVariantMenuOpen(!1),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".variant-btn"))==null||s.focus();break;case"Tab":this._setVariantMenuOpen(!1);break}}_selectVariant(t,e){var s,i;t.stopPropagation(),this._setVariantMenuOpen(!1),(i=(s=this.shadowRoot)==null?void 0:s.querySelector(".variant-btn"))==null||i.focus(),this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:{uuid:this.asset.uuid,name:e,asset:this.asset,index:this.index},bubbles:!0}))}get _isImageAsset(){var t;return Gt(((t=this.asset)==null?void 0:t.type)??"")==="image"}_getGridColumns(){const t=[];this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px");const e=this.showVariants&&this.variantOptions.length>1;return t.push(e?"96px":"64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var c,p,f,h,g;const t=this.asset;if(!t)return d``;const s=Gt(t.type)==="video",i=((c=t.extension)==null?void 0:c.toLowerCase())==="pdf",r=!!((p=t.info)!=null&&p.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(h=t.info)!=null&&h.preview),a=bn(t.extension||"")||r;let o="";s?o=wn(t):i?o=Vr(t):a&&(o=Pi(t,this._isImageAsset?this.selectedVariantName:void 0));const n=He(t.extension||""),l=Ur(t.extension||"");return d`
      <div
        class="row"
        ${R({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleSelect}
      >
        ${this.multiSelect?d`
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
            `:m}
        <div class="thumb ${l&&o?"chess":""}">
          ${o?d`<img
                src=${o}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${v=>{const b=v.target,_=He();b.src!==n&&b.src!==_?(b.src=n,b.classList.add("icon-fallback")):b.src!==_&&(b.src=_)}}
              />`:d`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${v=>{const b=v.target,_=He();b.src!==_&&(b.src=_)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${qr(t.extension)}</div>
        ${this.compactLevel<2?d`<div class="desc">${Kr(((g=t.size)==null?void 0:g.bytes)||0)}</div>`:m}
        ${this.compactLevel<1?d`<div class="date">${js(t.created_at||"",this.locale)}</div>`:m}
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
          ${this.showVariants&&this.variantOptions.length>1&&this._isImageAsset?(()=>{var b;const v=((b=this.variantOptions.find(_=>_.value===this.selectedVariantName))==null?void 0:b.label)??this.selectedVariantName;return d`
                  <div class="variant-control-wrap">
                    <button
                      class="icon-btn variant-btn"
                      @click=${this._toggleVariantMenu}
                      @keydown=${this._handleVariantTriggerKeydown}
                      aria-label=${`${this.t("insertAs","Insert as")}: ${v}`}
                      title=${`${this.t("insertAs","Insert as")}: ${v}`}
                      aria-haspopup="listbox"
                      aria-expanded=${this._variantMenuOpen}
                    >
                      <sfx-icon name="component" .size=${16}></sfx-icon>
                    </button>
                    ${this._variantMenuOpen?d`
                          <div
                            class="variant-menu ${this._variantMenuPos}"
                            role="listbox"
                            @keydown=${this._handleVariantMenuKeydown}
                            @click=${_=>_.stopPropagation()}
                          >
                            ${this.variantOptions.map((_,S)=>d`
                                <button
                                  class="variant-menu-item ${_.value===this.selectedVariantName?"active":""} ${S===this._variantMenuFocusIndex?"focused":""}"
                                  role="option"
                                  aria-selected=${_.value===this.selectedVariantName}
                                  @click=${w=>this._selectVariant(w,_.value)}
                                  @mouseenter=${()=>{this._variantMenuFocusIndex=S}}
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
                                  <span>${_.label}</span>
                                </button>
                              `)}
                          </div>
                        `:m}
                  </div>
                `})():m}
        </div>
      </div>
    `}};Se.styles=E`
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
    :host([limit-locked]) {
      opacity: 0.4;
      cursor: not-allowed;
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
  `;Le([u({attribute:!1})],Se.prototype,"t",2);Le([u()],Se.prototype,"locale",2);Le([u({type:Object})],Se.prototype,"asset",2);Le([u({type:Number})],Se.prototype,"index",2);Le([u({type:Boolean,reflect:!0})],Se.prototype,"selected",2);Le([u({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);Le([u({type:Boolean})],Se.prototype,"multiSelect",2);Le([u({type:Number})],Se.prototype,"compactLevel",2);Le([u({type:Boolean})],Se.prototype,"showVariants",2);Le([u({type:Array})],Se.prototype,"variantOptions",2);Le([u({type:String})],Se.prototype,"selectedVariantName",2);Le([x()],Se.prototype,"_variantMenuOpen",2);Le([x()],Se.prototype,"_variantMenuPos",2);Le([x()],Se.prototype,"_variantMenuFocusIndex",2);Se=Le([O("ap-asset-row")],Se);var Ku=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,It=(t,e,s,i)=>{for(var r=i>1?void 0:i?qu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ku(e,s,r),r};let ot=class extends F{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return $n(t,"200")}_renderPreviewImg(t){const e=_n(t.file_type),s=this._getPreviewUrl(t),i=He(Nr(t.file_type)),r=He();return d`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${a=>{const o=a.target,n=o.parentElement;o.src!==i&&o.src!==r?(o.src=i,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):o.src!==r&&(o.src=r,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
        @load=${a=>{const o=a.target,n=o.parentElement;o.src.includes("assets/file-types")&&(o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return d`<div class="empty-preview"><sfx-icon name="inbox" .size=${64}></sfx-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?d`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:d`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?d`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:m}
        </div>
      </div>
    `}render(){var r,a;const t=this.folder;if(!t)return d``;const e=((r=t.count)==null?void 0:r.files_direct)??0,i=(((a=t.count)==null?void 0:a.files_recursive)??0)-e;return d`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            rx="3"
            ry="3"
          />
        </svg>
        ${this.selectable&&this.multiSelect?d`
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
            `:m}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e!==1?"s":""}</span>
              ${i>0?d`<span>${i} sub-asset${i!==1?"s":""}</span>`:m}
            </div>
          </div>
        </div>
      </div>
    `}};ot.styles=[Be,E`
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
    `];It([u({type:Object})],ot.prototype,"folder",2);It([u({type:Array})],ot.prototype,"previews",2);It([u({type:Boolean,reflect:!0})],ot.prototype,"selected",2);It([u({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);It([u({type:Boolean})],ot.prototype,"selectable",2);It([u({type:Boolean})],ot.prototype,"multiSelect",2);It([u({type:Number})],ot.prototype,"index",2);ot=It([O("ap-folder-card")],ot);var Hu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,dt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Hu(e,s,r),r};let Ge=class extends F{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.locale="en",this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=_n(t.file_type),s=$n(t,"80"),i=He(Nr(t.file_type)),r=He();return d`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${a=>{const o=a.target,n=o.parentElement;o.src!==i&&o.src!==r?(o.src=i,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):o.src!==r&&(o.src=r,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderThumb(){const t=d`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
        />
      </svg>
    `,e=this.previews.slice(0,2);return d`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):d`<div class="empty-preview">
              <sfx-icon name="inbox" .size=${14}></sfx-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?d`
      <div
        class="row"
        ${R({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleClick}
      >
        ${this.multiSelect?this.selectable?d` <div class="check">
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
              </div>`:d`<div></div>`:m}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?d`<div class="meta">
              ${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items
            </div>`:m}
        ${this.compactLevel<1?d`<div class="meta">
              ${js(t.modified_at||t.updated_at||"",this.locale)}
            </div>`:m}
        <div></div>
      </div>
    `:d``}};Ge.styles=E`
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
  `;dt([u({type:Object})],Ge.prototype,"folder",2);dt([u({type:Array})],Ge.prototype,"previews",2);dt([u({type:Boolean,reflect:!0})],Ge.prototype,"selected",2);dt([u({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);dt([u({type:Boolean})],Ge.prototype,"selectable",2);dt([u()],Ge.prototype,"locale",2);dt([u({type:Boolean})],Ge.prototype,"multiSelect",2);dt([u({type:Number})],Ge.prototype,"index",2);dt([u({type:Number})],Ge.prototype,"compactLevel",2);Ge=dt([O("ap-folder-row")],Ge);var Yu=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,Xr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Wu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Yu(e,s,r),r};let Ks=class extends F{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return d``;const e=t.assets_count??0,s=t.color||"#94a3b8";return d`
      <div class="card" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${R({background:`color-mix(in srgb, ${s} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${18} ${R({color:s})}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};Ks.styles=[Be,E`
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
    `];Xr([u({type:Object})],Ks.prototype,"label",2);Xr([u({type:Number})],Ks.prototype,"index",2);Ks=Xr([O("ap-label-card")],Ks);var Qu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Jr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Qu(e,s,r),r};let qs=class extends F{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return d``;const e=t.assets_count??0,s=t.color||"#94a3b8";return d`
      <div class="row" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${R({background:`color-mix(in srgb, ${s} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${16} ${R({color:s})}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};qs.styles=E`
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
  `;Jr([u({type:Object})],qs.prototype,"label",2);Jr([u({type:Number})],qs.prototype,"index",2);qs=Jr([O("ap-label-row")],qs);var Ju=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,Zr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Zu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ju(e,s,r),r};let Hs=class extends F{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?d`
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
    `:d``}};Hs.styles=[Be,E`
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
    `];Zr([u({type:Object})],Hs.prototype,"collection",2);Zr([u({type:Number})],Hs.prototype,"index",2);Hs=Zr([O("ap-collection-card")],Hs);var ef=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,Hi=(t,e,s,i)=>{for(var r=i>1?void 0:i?tf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ef(e,s,r),r};let fs=class extends F{constructor(){super(...arguments),this.index=0,this.locale="en"}_formatDate(t){return t?js(t,this.locale):""}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?d`
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
    `:d``}};fs.styles=E`
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
  `;Hi([u({type:Object})],fs.prototype,"collection",2);Hi([u({type:Number})],fs.prototype,"index",2);Hi([u()],fs.prototype,"locale",2);fs=Hi([O("ap-collection-row")],fs);var sf=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,ea=(t,e,s,i)=>{for(var r=i>1?void 0:i?rf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&sf(e,s,r),r};let Gs=class extends F{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?d`
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
    `:d``}};Gs.styles=[Be,E`
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
    `];ea([u({type:Object})],Gs.prototype,"folder",2);ea([u({type:Number})],Gs.prototype,"index",2);Gs=ea([O("ap-collection-folder-card")],Gs);var af=Object.defineProperty,of=Object.getOwnPropertyDescriptor,ta=(t,e,s,i)=>{for(var r=i>1?void 0:i?of(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&af(e,s,r),r};let Ys=class extends F{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?d`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:d``}};Ys.styles=E`
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
  `;ta([u({type:Object})],Ys.prototype,"folder",2);ta([u({type:Number})],Ys.prototype,"index",2);Ys=ta([O("ap-collection-folder-row")],Ys);var nf=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,ws=(t,e,s,i)=>{for(var r=i>1?void 0:i?lf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&nf(e,s,r),r};let Lt=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const o=this.gridSize==="large"?"280px":"220px";return d`
        <div class="grid-skeleton" ${R({"--sfx-grid-min-col":String(o)})}>
          ${Array.from({length:18},()=>d`<div class="card-skel">
                <div class="skeleton card-skel-thumb"></div>
                <div class="card-skel-info">
                  <div class="skeleton card-skel-name"></div>
                  <div class="skeleton card-skel-meta"></div>
                </div>
              </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=d`
      <div class="row-skel" ${R({"grid-template-columns":e})}>
        ${this.multiSelect?d`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
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
    `,i=o=>d`
      <div class="row-skel" ${R({"grid-template-columns":e})}>
        ${this.multiSelect?d`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${R({width:o})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,r=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],a=12-this.folderCount;return d`
      <div class="list-header" ${R({"grid-template-columns":e})}>
        ${this.multiSelect?d`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        <span>${this.t("size","Size")}</span>
        <span>${this.t("date","Date")}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:a},(o,n)=>i(r[n%r.length]))}
    `}};Lt.styles=E`
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
  `;ws([u({attribute:!1})],Lt.prototype,"t",2);ws([u({reflect:!0})],Lt.prototype,"variant",2);ws([u({type:String})],Lt.prototype,"gridSize",2);ws([u({type:Boolean})],Lt.prototype,"multiSelect",2);ws([u({type:Number})],Lt.prototype,"folderCount",2);Lt=ws([O("ap-skeleton")],Lt);var cf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,be=(t,e,s,i)=>{for(var r=i>1?void 0:i?df(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&cf(e,s,r),r};let he=class extends F{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.selectedVariantName="original",this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.metadataLanguage="",this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=Gt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var r,a;const e=Vd(t),s=e?ar(e,t):null;if(!s||(await this.updateComplete,((r=this.asset)==null?void 0:r.uuid)!==t.uuid))return;const i=this._videoEl;if(i){if(i.canPlayType("application/vnd.apple.mpegurl")){i.src=s;return}try{const{default:o}=await j(async()=>{const{default:l}=await import("./hls.light-CLqSdhbI.js");return{default:l}},[]);if(!o.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const n=new o;this._hls=n,n.loadSource(s),n.attachMedia(i),n.on(o.Events.ERROR,(l,c)=>{var p;c.fatal&&(this._destroyHls(),i.src=((p=t.url)==null?void 0:p.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,r,a,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((r=(i=this.asset)==null?void 0:i.url)!=null&&r.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(a=this.previewArea)==null?void 0:a.requestFullscreen)==null||o.call(a)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=Gt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var r,a;const e=(r=t.url)==null?void 0:r.cdn;if(!e)return Pi(t,this.selectedVariantName)||"";const s={source:"asset",asset:t};if(((a=t.extension)==null?void 0:a.toLowerCase())==="svg")return Ye(e,s);if(this.selectedVariantName&&this.selectedVariantName!=="original"){const o=yn(t,this.selectedVariantName);if(o)return Ye(o,s)}const i=Qe(e,{containerToken:this.containerToken||null});return Ye($e(i,{w:window.screen.width,dpr:window.devicePixelRatio||1,org_if_sml:1}),s)}_getBlurDimensions(t){var o,n;const e=(o=t.info)==null?void 0:o.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,r=window.innerHeight,a=Math.min(i/e,r/s,1);return{width:`${Math.round(e*a)}px`,height:`${Math.round(s*a)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(r=>!r.label||i.has(r.sid)?!1:(i.add(r.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:y.TAGS,values:[t],operator:C.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:y.LABELS,values:[t],operator:C.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return m;const s=this._openSections.has("file-info");return d`
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
          ${e.map(i=>d`
              <div class="meta-row">
                <span class="meta-label" title=${i.label}>${i.label}</span>
                <span class="meta-value" title=${i.value}>${i.value}</span>
              </div>
            `)}
          ${this._renderTagsRow(t)} ${this._renderLabelsRow(t)}
        </div>
      </div>
    `}_renderAccordion(t,e,s){if(s.length===0)return m;const i=this._openSections.has(t);return d`
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
          ${s.map(r=>d`
              <div class="meta-row">
                <span class="meta-label" title=${r.label}>${r.label}</span>
                ${r.tags?d`<div class="tags-list">
                      ${r.tags.map(a=>d`<sfx-badge>${a.label}</sfx-badge>`)}
                    </div>`:d`<span class="meta-value" title=${r.value}>${r.value}</span>`}
              </div>
            `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,r,a,o,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:qr(t.extension)}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:Kr(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:jn(t.info.img_w,t.info.img_h)}),(r=t.info)!=null&&r.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((a=t.info)==null?void 0:a.video_duration)??((o=t.info)==null?void 0:o.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:js(t.created_at,this.locale)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:js(t.modified_at,this.locale)}),e}_buildFieldMap(){return Hr(this.metadataFields)}_resolveFieldValue(t,e){return Gr(t,e,this.regionalFilters,this.locale)}_getFieldRow(t,e){const s=this._resolveFieldValue(t,e);if(!s)return null;const i={label:e.label,value:s,wrap:s.length>50};return e.type===A.ULTRATAGS&&(i.tags=Bn(t,this.metadataLanguage||this.locale)),i}_getAllMetadataRows(t){var a;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0)for(const o of this.metadataFields){const n=this._getFieldRow(rp(t,o.key),o);n&&(i.add(o.key),o.slug&&i.add(o.slug),e.push(n))}if(t.meta)for(const[o,n]of Object.entries(t.meta)){if(i.has(o)||n==null||n==="")continue;const l=s.get(o);if(l){const c=this._getFieldRow(n,l);if(!c)continue;i.add(o),e.push(c)}else{const c=typeof n=="object"?JSON.stringify(n):String(n);if(!c||c==="{}"||c==="[]")continue;i.add(o);const p=Ni(o,o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),this.t),f=c.length>50;e.push({label:p,value:c,wrap:f})}}const r=(a=t.info)==null?void 0:a.metadata;if(r&&typeof r=="object")for(const[o,n]of Object.entries(r)){if(i.has(o)||n==null||n==="")continue;const l=s.get(o);if(l){const c=this._getFieldRow(n,l);if(!c)continue;i.add(o),e.push(c)}else{const c=typeof n=="object"?JSON.stringify(n):String(n);if(!c||c==="{}"||c==="[]")continue;i.add(o);const p=Ni(o,o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),this.t),f=c.length>50;e.push({label:p,value:c,wrap:f})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?m:d`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${e.map(s=>d`
              <sfx-badge
                class="tag-link"
                ${R({"--sfx-muted":`${s.color||"#94a3b8"}22`,"--sfx-muted-foreground":s.color||"#94a3b8"})}
                @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}
              >
                <span class="label-content">
                  <sfx-icon
                    name="tag"
                    .size=${12}
                    ${R({color:s.color||"#94a3b8"})}
                  ></sfx-icon>
                  ${s.name}
                </span>
              </sfx-badge>
            `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?m:d`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags","Tags")}</span>
        <div class="tags-list">
          ${e.map(s=>d`
              <sfx-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}
                >${s.label}</sfx-badge
              >
            `)}
        </div>
      </div>
    `}render(){var k,L,V,z,re,se,W,Q;const t=this.asset;if(!t)return m;const e=Gt(t.type),s=e==="image",i=e==="video",r=e==="audio",a=((k=t.extension)==null?void 0:k.toLowerCase())==="pdf",o=He(t.extension||""),n=Ur(t.extension||""),l=((L=t.extension)==null?void 0:L.toLowerCase())==="svg",c=Pi(t,this.selectedVariantName),p=s?l?Ye(((V=t.url)==null?void 0:V.cdn)||"",{source:"asset",asset:t}):c||Ye(Qe(((z=t.url)==null?void 0:z.cdn)||"",{containerToken:this.containerToken||null}),{source:"asset",asset:t}):"",f=s?this._getFullscreenImageUrl(t):"",h=s&&!l?this._getBlurDimensions(t):null,g=i?ar(((re=t.url)==null?void 0:re.cdn)||"",t):"",v=i?Ye(Qe(((se=t.info)==null?void 0:se.video_thumbnail)||((W=t.info)==null?void 0:W.preview)||"",{}),{source:"video",asset:t}):"",b=a&&!s?Vr(t):"",_=this._getCurrentIndex(),S=_>0&&this._findNavTarget(_,-1)>=0,w=_>=0&&this._findNavTarget(_,1)>=0,P=this.assets.length>1;return d`
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
          ${P?d`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!S}
                  aria-label=${this.t("previous","Previous")}
                >
                  <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
                </button>
                <button
                  class="nav-btn next"
                  @click=${this._next}
                  ?disabled=${!w}
                  aria-label=${this.t("next","Next")}
                >
                  <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
                </button>
              `:m}
          ${this._isFullscreen?d`
                <button
                  class="fs-close-btn"
                  @click=${this._exitFullscreen}
                  aria-label=${this.t("exitFullscreen","Exit fullscreen")}
                >
                  <sfx-icon name="close" .size=${16}></sfx-icon>
                </button>
              `:m}
          ${this._previewLoading?d`<div class="preview-loading"><div class="spinner"></div></div>`:m}
          ${s?d`
                <img
                  src=${p}
                  alt=${t.name}
                  @load=${K=>{K.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
                  @error=${K=>{const H=K.target;this._previewLoading=!1,H.src!==o&&(H.src=o,H.classList.add("icon-fallback"))}}
                />
                <div class="fs-wrapper">
                  ${l?m:d`
                        <img
                          class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                          src=${p}
                          alt=""
                          ${R({width:h.width,height:h.height})}
                        />
                      `}
                  <img
                    class="fs-full ${l||this._fsImageLoaded?"loaded":""}"
                    src=${this._isFullscreen?f:""}
                    alt=${t.name}
                    ${R(l?{width:"100vw",height:"100vh"}:null)}
                    @load=${this._onFsImageLoad}
                  />
                </div>
              `:m}
          ${i?d`<video
                src=${g}
                poster=${v||m}
                controls
                controlsList="nofullscreen"
                @loadeddata=${()=>{this._previewLoading=!1}}
                @error=${()=>{this._previewLoading=!1}}
              ></video>`:m}
          ${r?d`<audio src=${ar(((Q=t.url)==null?void 0:Q.cdn)||"",t)} controls></audio>`:m}
          ${a&&!s?d`
                <img
                  src=${b||o}
                  alt=${t.name}
                  class=${b?"":"icon-fallback"}
                  @error=${K=>{const H=K.target;H.src!==o&&(H.src=o,H.classList.add("icon-fallback"))}}
                />
              `:m}
          ${!s&&!i&&!r&&!a?d`<img src=${o} alt=${t.name} class="icon-fallback" />`:m}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?d`
              ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
            `:m}
      </div>
    `}};he.styles=E`
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
  `;be([u({type:Object})],he.prototype,"asset",2);be([u({type:Array})],he.prototype,"assets",2);be([u({type:Array})],he.prototype,"selectedIds",2);be([u()],he.prototype,"containerToken",2);be([u({type:Boolean})],he.prototype,"showMetadata",2);be([u({type:Array})],he.prototype,"metadataFields",2);be([u({type:Array})],he.prototype,"labels",2);be([u({type:Object})],he.prototype,"regionalFilters",2);be([u({type:Boolean})],he.prototype,"multiSelect",2);be([u({type:String})],he.prototype,"selectedVariantName",2);be([u({attribute:!1})],he.prototype,"t",2);be([u()],he.prototype,"locale",2);be([u()],he.prototype,"metadataLanguage",2);be([Ze(".preview-area")],he.prototype,"previewArea",2);be([Ze("video")],he.prototype,"_videoEl",2);be([x()],he.prototype,"_isFullscreen",2);be([x()],he.prototype,"_fsImageLoaded",2);be([x()],he.prototype,"_previewLoading",2);be([x()],he.prototype,"_openSections",2);he=be([O("ap-preview-panel")],he);var hf=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,sa=(t,e,s,i)=>{for(var r=i>1?void 0:i?pf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&hf(e,s,r),r};const uf={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],"file-check-2":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"m3 15 2 2 4-4"}}],"user-star":[{tag:"path",attrs:{d:"M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}},{tag:"path",attrs:{d:"M8 15H7a4 4 0 0 0-4 4v2"}},{tag:"circle",attrs:{cx:"10",cy:"7",r:"4"}}],"calendar-check-2":[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"path",attrs:{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}},{tag:"path",attrs:{d:"M3 10h18"}},{tag:"path",attrs:{d:"m16 20 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}],link:[{tag:"path",attrs:{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"}},{tag:"path",attrs:{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"}}],move:[{tag:"path",attrs:{d:"M5 9 2 12l3 3"}},{tag:"path",attrs:{d:"M9 5l3-3 3 3"}},{tag:"path",attrs:{d:"M15 19l-3 3-3-3"}},{tag:"path",attrs:{d:"M19 9l3 3-3 3"}},{tag:"path",attrs:{d:"M2 12h20"}},{tag:"path",attrs:{d:"M12 2v20"}}],pencil:[{tag:"path",attrs:{d:"M12 20h9"}},{tag:"path",attrs:{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"}}],unlock:[{tag:"rect",attrs:{x:"5",y:"11",width:"14",height:"10",rx:"2"}},{tag:"path",attrs:{d:"M8 11V7a4 4 0 0 1 7.5-2"}}],star:[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z"}}],"star-filled":[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z",fill:"currentColor"}}],dot:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"5",fill:"currentColor"}}]};let Ws=class extends F{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=uf[this.name];if(!t)return m;const e=typeof t=="string"?At`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:r}=s;return i==="circle"?At`<circle cx=${r.cx} cy=${r.cy} r=${r.r} fill=${r.fill??"none"}></circle>`:i==="rect"?At`<rect width=${r.width} height=${r.height} x=${r.x} y=${r.y} rx=${r.rx??"0"} ry=${r.ry??"0"}></rect>`:At`<path d=${r.d} fill=${r.fill??"none"}></path>`});return d`
      <svg
        ${R({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${e}
      </svg>
    `}};Ws.styles=[E`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];sa([u()],Ws.prototype,"name",2);sa([u({type:Number})],Ws.prototype,"size",2);Ws=sa([O("sfx-icon")],Ws);var ff=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,Zn=(t,e,s,i)=>{for(var r=i>1?void 0:i?gf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ff(e,s,r),r};let Ui=class extends F{constructor(){super(...arguments),this.size=24}render(){return d`<div
      class="spinner"
      ${R({width:`${this.size}px`,height:`${this.size}px`})}
    ></div>`}};Ui.styles=[E`
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
    `];Zn([u({type:Number})],Ui.prototype,"size",2);Ui=Zn([O("sfx-spinner")],Ui);var mf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,el=(t,e,s,i)=>{for(var r=i>1?void 0:i?vf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&mf(e,s,r),r};let ji=class extends F{constructor(){super(...arguments),this.variant="default"}render(){return d`<span class="badge"><slot></slot></span>`}};ji.styles=[E`
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
    `];el([u({reflect:!0})],ji.prototype,"variant",2);ji=el([O("sfx-badge")],ji);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bf=t=>t??m;var _f=Object.defineProperty,si=(t,e,s,i)=>{for(var r=void 0,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(e,s,r)||r);return r&&_f(e,s,r),r};const Co=6,Es=4,xf=()=>typeof HTMLElement<"u"&&Object.prototype.hasOwnProperty.call(HTMLElement.prototype,"popover"),la=class la extends F{constructor(){super(...arguments),this.text="",this.placement="top",this.multiline=!1,this.floating=!1,this._open=!1,this._scrollRoots=[],this._hovered=!1,this._focused=!1,this._onEnter=()=>{this._hovered=!0,this.show()},this._onMouseLeave=()=>{this._hovered=!1,this._focused||this.hide()},this._onFocusOut=e=>{e.relatedTarget instanceof Node&&this.contains(e.relatedTarget)||(this._focused=!1,this._hovered||this.hide())},this._onScroll=()=>this.hide(),this._onFocusIn=e=>{const s=e.target;let i=!0;try{i=!!(s!=null&&s.matches(":focus-visible"))}catch{}i&&(this._focused=!0,this.show())},this._onKeyDown=e=>{e.key!=="Escape"||!this._open||(e.preventDefault(),e.stopPropagation(),this.hide())}}get _usePopover(){return this.floating&&xf()}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onEnter),this.addEventListener("mouseleave",this._onMouseLeave),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onEnter),this.removeEventListener("mouseleave",this._onMouseLeave),this.removeEventListener("focusin",this._onFocusIn),this.removeEventListener("focusout",this._onFocusOut),this.removeEventListener("keydown",this._onKeyDown),this.hide()}show(){const e=this._tip;!this._usePopover||!e||!this.text||(this._open||(e.showPopover(),this._open=!0,this._listenForScroll(!0)),this._position(e))}hide(){var e;if(this._open){this._open=!1,this._listenForScroll(!1);try{(e=this._tip)==null||e.hidePopover()}catch{}}}get open(){return this._open}updated(e){super.updated(e),!(!e.has("text")||!this._open)&&(this.text?this._tip&&this._position(this._tip):this.hide())}_listenForScroll(e){e&&(this._scrollRoots=this._enclosingRoots());const s={capture:!0,passive:!0},i=[...this._scrollRoots.map(r=>[r,"scroll"]),[window,"scroll"],[window,"wheel"],[window,"touchmove"]];for(const[r,a]of i)e?r.addEventListener(a,this._onScroll,s):r.removeEventListener(a,this._onScroll,s);e||(this._scrollRoots=[])}_enclosingRoots(){const e=[];let s=this.getRootNode();for(;s instanceof ShadowRoot;)e.push(s),s=s.host.getRootNode();return s instanceof Document&&e.push(s),e}_position(e){const s=this.getBoundingClientRect(),i=e.getBoundingClientRect(),r=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight,o=s.top-Co-i.height,n=s.bottom+Co,l=o>=Es,c=n+i.height<=a-Es,p=this.placement==="bottom"?c||!l?n:o:l||!c?o:n,f=s.left+s.width/2-i.width/2,h=Math.max(Es,Math.min(f,r-i.width-Es));e.style.top=`${Math.max(Es,p)}px`,e.style.left=`${h}px`}render(){const e=this._usePopover,s=["tip",this.placement==="bottom"?"bottom":"",e?"popover":""].filter(Boolean).join(" ");return d`
      <slot></slot>
      <div class=${s} role="tooltip" popover=${bf(e?"manual":void 0)}>
        ${this.text}
      </div>
    `}};la.styles=[E`
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
        /* Theming hooks — defaults are the original dark tip. Set them on the host (or an
           ancestor) to restyle, e.g. dam-metadata's light field-hint tooltip. */
        padding: var(--sfx-tooltip-padding, 4px 8px);
        font-size: var(--sfx-tooltip-font-size, 0.75rem);
        font-weight: 400;
        background: var(--sfx-tooltip-bg, var(--sfx-foreground, oklch(0.37 0.022 248.413)));
        color: var(--sfx-tooltip-fg, var(--sfx-background, oklch(1 0 0)));
        border-radius: var(--sfx-tooltip-radius, 4px);
        box-shadow: var(--sfx-tooltip-shadow, none);
        pointer-events: none;
        z-index: 100;
      }
      .tip.bottom {
        bottom: auto;
        top: calc(100% + 6px);
      }
      :host(:hover) .tip:not(.popover) {
        display: block;
      }
      :host([multiline]) .tip {
        white-space: normal;
        width: max-content;
        max-width: var(--sfx-tooltip-max-width, 280px);
        text-align: start;
        line-height: var(--sfx-tooltip-line-height, 1.4);
        overflow-wrap: anywhere;
      }
      /* Top-layer tip: neutralise the UA popover styles; coordinates are set from JS. */
      .tip.popover {
        position: fixed;
        inset: auto;
        margin: 0;
        border: 0;
        transform: none;
        overflow: visible;
      }
      .tip.popover:popover-open {
        display: block;
      }
    `];let Pt=la;si([u()],Pt.prototype,"text");si([u()],Pt.prototype,"placement");si([u({type:Boolean,reflect:!0})],Pt.prototype,"multiline");si([u({type:Boolean,reflect:!0})],Pt.prototype,"floating");si([Ze(".tip")],Pt.prototype,"_tip");var yf=Object.getOwnPropertyDescriptor,wf=(t,e,s,i)=>{for(var r=i>1?void 0:i?yf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(r)||r);return r};let Ao=class extends Pt{};Ao=wf([O("sfx-tooltip")],Ao);var $f=Object.defineProperty,ia=(t,e,s,i)=>{for(var r=void 0,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(e,s,r)||r);return r&&$f(e,s,r),r};const ca=class ca extends F{constructor(){super(...arguments),this.t=wi,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,s="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:s,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const s=this._toasts.findIndex(r=>r.id===e);if(s===-1)return;const i=[...this._toasts];i[s]={...i[s],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(r=>r.id!==e)},200)}_iconForType(e){return e==="error"?d`<svg
        class="toast-icon"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      >
        <circle cx="8" cy="8" r="6.5" />
        <line x1="8" y1="5" x2="8" y2="8.5" />
        <circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none" />
      </svg>`:e==="warning"?d`<svg
        class="toast-icon"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 1.5l6.5 12H1.5z" />
        <line x1="8" y1="6.5" x2="8" y2="9.5" />
        <circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>`:d`<svg
      class="toast-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <line x1="8" y1="7" x2="8" y2="11" />
      <circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none" />
    </svg>`}render(){return this._toasts.length===0?d``:d`
      <div class="toast-stack">
        ${this._toasts.map(e=>d`
            <div class="toast toast--${e.type} ${e.leaving?"leaving":""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button
                class="toast-close"
                @click=${()=>this._dismiss(e.id)}
                aria-label=${this.t("dismiss","Dismiss")}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <line x1="4" y1="4" x2="12" y2="12" />
                  <line x1="12" y1="4" x2="4" y2="12" />
                </svg>
              </button>
            </div>
          `)}
      </div>
    `}};ca.styles=E`
    :host {
      display: block;
      position: absolute;
      bottom: 12px;
      right: 12px;
      z-index: 1050;
      pointer-events: none;
      font-family: var(--sfx-up-font, inherit);
    }

    .toast-stack {
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      align-items: flex-end;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      max-width: 360px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.4;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: toast-in 0.25s ease forwards;
      word-break: break-word;
    }
    .toast.leaving {
      animation: toast-out 0.2s ease forwards;
    }

    .toast--error {
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }
    .toast--warning {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }
    .toast--info {
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }

    .toast-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-top: 1px;
    }

    .toast-msg {
      flex: 1;
      min-width: 0;
    }

    .toast-close {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.5;
      transition: opacity 0.12s;
    }
    .toast-close:hover {
      opacity: 1;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    @keyframes toast-out {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(8px) scale(0.96);
      }
    }
  `;let gs=ca;ia([u({attribute:!1})],gs.prototype,"t");ia([u({type:Number})],gs.prototype,"duration");ia([x()],gs.prototype,"_toasts");Yn("sfx-toast",gs);var kf=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,ra=(t,e,s,i)=>{for(var r=i>1?void 0:i?Sf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&kf(e,s,r),r};let Qs=class extends F{constructor(){super(...arguments),this.open=!1,this.align="start",this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},this._handleKeyDown=t=>{t.key==="Escape"&&this.open&&(this.open=!1)}}render(){return d`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.align==="end"?"end":""} ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}};Qs.styles=[E`
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
    `];ra([x()],Qs.prototype,"open",2);ra([u()],Qs.prototype,"align",2);Qs=ra([O("sfx-popover")],Qs);var Cf=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,Gi=(t,e,s,i)=>{for(var r=i>1?void 0:i?Af(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Cf(e,s,r),r};let ms=class extends F{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("sfx-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return d`
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
    `}};ms.styles=[E`
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
    `];Gi([u({type:Boolean,reflect:!0})],ms.prototype,"checked",2);Gi([u({type:Boolean,reflect:!0})],ms.prototype,"indeterminate",2);Gi([u({type:Boolean,reflect:!0})],ms.prototype,"disabled",2);ms=Gi([O("sfx-checkbox")],ms);var Ef=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,ss=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ff(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ef(e,s,r),r};let _t=class extends F{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(r=>!this.disabled&&!r.disabled);if(e.length===0)return;const s=e.findIndex(r=>r.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return d`
      ${this.options.map(t=>d`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":m}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?d`<sfx-icon name=${t.icon} .size=${16}></sfx-icon>`:m}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:e},bubbles:!0,composed:!0}))}};_t.styles=[Zs,E`
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
    `];ss([u()],_t.prototype,"value",2);ss([u({type:Array})],_t.prototype,"options",2);ss([u({type:Boolean})],_t.prototype,"disabled",2);ss([u({type:Boolean})],_t.prototype,"clearable",2);ss([u({reflect:!0})],_t.prototype,"direction",2);ss([u({reflect:!0})],_t.prototype,"columns",2);_t=ss([O("sfx-radio-group")],_t);var Tf=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,Pe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Of(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Tf(e,s,r),r};let Ce=class extends F{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="sfx-dropdown-menu";return d`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?d`<sfx-icon name=${t.icon} .size=${16}></sfx-icon>`:m}
        ${this.label?d`<span class="label">${this.label}${t?": ":""}</span>`:m}${t?t.label:""}
        ${this.clearable&&t?d`<span class="clear-trigger" @click=${this._clear}
              ><sfx-icon name="close" .size=${12}></sfx-icon
            ></span>`:d`<sfx-icon name="chevron-down" .size=${14}></sfx-icon>`}
      </button>
      ${this._open?d`
            <div
              id=${e}
              class="menu ${this._menuPosition} ${this._menuAlign}"
              ${R({[this._menuPosition==="below"?"top":"bottom"]:`${this._menuPosition==="below"?this._menuTop:this._menuBottom}px`,[this._menuAlign==="align-left"?"left":"right"]:`${this._menuAlign==="align-left"?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
              role="listbox"
              @keydown=${this._handleMenuKeydown}
            >
              ${this.options.map((s,i)=>d`
                  <button
                    class="option ${i===this._focusedIndex?"focused":""}"
                    role="option"
                    aria-selected=${s.value===this.value}
                    @click=${()=>this._select(s.value)}
                    @mouseenter=${()=>{this._focusedIndex=i}}
                  >
                    <span class="option-label">
                      ${s.icon?d`<sfx-icon name=${s.icon} .size=${16}></sfx-icon>`:m}
                      ${s.label}
                    </span>
                    ${s.value===this.value?d`<sfx-icon name="check" .size=${14}></sfx-icon>`:m}
                  </button>
                `)}
            </div>
          `:m}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const r=window.innerWidth-t.left;this._menuAlign=r<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,r;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(r=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||r.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};Ce.styles=[Zs,E`
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
    `];Pe([u()],Ce.prototype,"value",2);Pe([u()],Ce.prototype,"label",2);Pe([u({reflect:!0})],Ce.prototype,"variant",2);Pe([u({type:Boolean})],Ce.prototype,"clearable",2);Pe([u({type:Array})],Ce.prototype,"options",2);Pe([x()],Ce.prototype,"_open",2);Pe([x()],Ce.prototype,"_focusedIndex",2);Pe([x()],Ce.prototype,"_menuPosition",2);Pe([x()],Ce.prototype,"_menuAlign",2);Pe([x()],Ce.prototype,"_menuTop",2);Pe([x()],Ce.prototype,"_menuBottom",2);Pe([x()],Ce.prototype,"_menuLeft",2);Pe([x()],Ce.prototype,"_menuRight",2);Pe([x()],Ce.prototype,"_menuWidth",2);Ce=Pe([O("sfx-dropdown")],Ce);var Lf=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,ii=(t,e,s,i)=>{for(var r=i>1?void 0:i?Pf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Lf(e,s,r),r};let Xt=class extends F{constructor(){super(...arguments),this.heading="File info",this.rows=[],this.collapsible=!1,this.open=!0}toggle(){this.collapsible&&(this.open=!this.open)}renderHead(){const t=d`<span>${this.heading}</span><span class="spacer"></span>`;return this.collapsible?d`<button
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
    </button>`:d`<div class="head">${t}</div>`}render(){return d`
      ${this.renderHead()}
      ${this.open?d`<dl>
            ${this.rows.map(t=>d`<dt>${t.label}</dt>
                  <dd title=${t.title??t.value}>${t.value}</dd>`)}
          </dl>`:m}
    `}};Xt.styles=E`
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
  `;ii([u()],Xt.prototype,"heading",2);ii([u({attribute:!1})],Xt.prototype,"rows",2);ii([u({type:Boolean})],Xt.prototype,"collapsible",2);ii([u({type:Boolean,reflect:!0})],Xt.prototype,"open",2);Xt=ii([O("sfx-asset-info")],Xt);var Mf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,aa=(t,e,s,i)=>{for(var r=i>1?void 0:i?If(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Mf(e,s,r),r};let Xs=class extends F{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?d``:d`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>d`
            <sfx-icon name="chevron-right" .size=${14}></sfx-icon>
            ${e<this.items.length-1?d`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:d`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Xs.styles=E`
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
  `;aa([u({type:Array})],Xs.prototype,"items",2);aa([u()],Xs.prototype,"rootLabel",2);Xs=aa([O("sfx-breadcrumb")],Xs);var Df=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Ke=(t,e,s,i)=>{for(var r=i>1?void 0:i?Rf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Df(e,s,r),r};let fe=class extends F{constructor(){super(...arguments),this.kind="confirm",this.heading="",this.message="",this.value="",this.placeholder="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.danger=!1,this.loading=!1,this.confirmDisabled=!1,this.error=null,this._handleDocKeyDown=t=>{t.key==="Escape"&&fe._stack[fe._stack.length-1]===this&&(t.preventDefault(),this._cancel())}}connectedCallback(){super.connectedCallback(),fe._stack.push(this),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t,e;(t=this._input)==null||t.focus(),(e=this._input)==null||e.select()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),fe._stack=fe._stack.filter(t=>t!==this),super.disconnectedCallback()}get inputValue(){var t;return(((t=this._input)==null?void 0:t.value)??this.value).trim()}_onInput(t){this.dispatchEvent(new CustomEvent("sfx-dialog-input",{detail:{value:t.target.value},bubbles:!0,composed:!0}))}_confirm(){this.loading||this.confirmDisabled||this.dispatchEvent(new CustomEvent("sfx-dialog-confirm",{detail:{value:this.kind==="prompt"?this.inputValue:""},bubbles:!0,composed:!0}))}_cancel(){this.dispatchEvent(new CustomEvent("sfx-dialog-cancel",{bubbles:!0,composed:!0}))}_onBackdrop(t){t.target===t.currentTarget&&this._cancel()}_onInputKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._confirm())}render(){return d`
      <div class="backdrop" @click=${this._onBackdrop}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${this.heading}>
          ${this.heading?d`<div class="title">${this.heading}</div>`:m}
          ${this.message&&this.kind==="confirm"?d`<div class="message">${this.message}</div>`:m}
          <slot></slot>
          ${this.kind==="prompt"?d`<input
                type="text"
                placeholder=${this.placeholder}
                .value=${this.value}
                ?disabled=${this.loading}
                @input=${this._onInput}
                @keydown=${this._onInputKeyDown}
                aria-label=${this.heading||this.placeholder}
                aria-invalid=${this.error?"true":"false"}
              />`:m}
          ${this.error?d`<div class="error" role="alert">${this.error}</div>`:m}
          <div class="actions">
            <button class="btn" @click=${this._cancel}>${this.cancelLabel}</button>
            <button
              class="btn ${this.danger?"btn-danger":"btn-primary"}"
              @click=${this._confirm}
              ?disabled=${this.loading||this.confirmDisabled}
            >
              ${this.loading?d`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.confirmLabel}</span
                  >`:this.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `}};fe.styles=[Zs,Gn,E`
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
    `];fe._stack=[];Ke([u()],fe.prototype,"kind",2);Ke([u()],fe.prototype,"heading",2);Ke([u()],fe.prototype,"message",2);Ke([u()],fe.prototype,"value",2);Ke([u()],fe.prototype,"placeholder",2);Ke([u()],fe.prototype,"confirmLabel",2);Ke([u()],fe.prototype,"cancelLabel",2);Ke([u({type:Boolean})],fe.prototype,"danger",2);Ke([u({type:Boolean})],fe.prototype,"loading",2);Ke([u({type:Boolean})],fe.prototype,"confirmDisabled",2);Ke([u()],fe.prototype,"error",2);Ke([Ze("input")],fe.prototype,"_input",2);fe=Ke([O("sfx-dialog")],fe);var zf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,is=(t,e,s,i)=>{for(var r=i>1?void 0:i?Nf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&zf(e,s,r),r};function Fs(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function Eo(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}let xt=class extends F{constructor(){super(...arguments),this.value=null,this.minDate=null,this.maxDate=null,this.locale="",this._viewYear=0,this._viewMonth=0,this._viewInitialized=!1}willUpdate(){if(!this._viewInitialized){this._viewInitialized=!0;const t=this.value??new Date;this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth()}}get _locale(){return this.locale||document.documentElement.lang||"en"}get _monthOptions(){const t=new Intl.DateTimeFormat(this._locale,{month:"long"});return Array.from({length:12},(e,s)=>({value:String(s),label:t.format(new Date(2e3,s,1))}))}get _yearOptions(){var s,i;const t=((s=this.minDate)==null?void 0:s.getFullYear())??this._viewYear-10,e=((i=this.maxDate)==null?void 0:i.getFullYear())??this._viewYear+10;return Array.from({length:e-t+1},(r,a)=>{const o=t+a;return{value:String(o),label:String(o)}})}get _weekdayLabels(){const t=new Intl.DateTimeFormat(this._locale,{weekday:"short"});return Array.from({length:7},(e,s)=>{const i=t.format(new Date(2e3,0,3+s)).slice(0,2);return i.charAt(0).toUpperCase()+i.slice(1)})}get _days(){const e=(new Date(this._viewYear,this._viewMonth,1).getDay()+6)%7,s=new Date(this._viewYear,this._viewMonth,1-e);return Array.from({length:42},(i,r)=>{const a=new Date(s.getFullYear(),s.getMonth(),s.getDate()+r);return{date:a,outside:a.getMonth()!==this._viewMonth}})}_isDisabled(t){return!!(this.minDate&&Fs(t)<Fs(this.minDate)||this.maxDate&&Fs(t)>Fs(this.maxDate))}_prevMonth(){this._viewMonth===0?(this._viewMonth=11,this._viewYear-=1):this._viewMonth-=1}_nextMonth(){this._viewMonth===11?(this._viewMonth=0,this._viewYear+=1):this._viewMonth+=1}_selectDay(t){this._isDisabled(t)||this.dispatchEvent(new CustomEvent("sfx-select",{detail:{date:t},bubbles:!0,composed:!0}))}render(){const t=Fs(new Date);return d`
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
        ${this._weekdayLabels.map(e=>d`<span class="weekday">${e}</span>`)}
      </div>
      <div class="days">
        ${this._days.map(({date:e,outside:s})=>{const i=this._isDisabled(e),r=Eo(e,t),a=this.value?Eo(e,this.value):!1,o=["day",s&&"outside",r&&"today",a&&"selected"].filter(Boolean).join(" ");return d`
            <button class=${o} ?disabled=${i} @click=${()=>this._selectDay(e)}>
              ${e.getDate()}
            </button>
          `})}
      </div>
    `}};xt.styles=[Zs,Sp,E`
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
    `];is([u({attribute:!1})],xt.prototype,"value",2);is([u({attribute:!1})],xt.prototype,"minDate",2);is([u({attribute:!1})],xt.prototype,"maxDate",2);is([u()],xt.prototype,"locale",2);is([x()],xt.prototype,"_viewYear",2);is([x()],xt.prototype,"_viewMonth",2);xt=is([O("sfx-calendar")],xt);var Uf=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,Re=(t,e,s,i)=>{for(var r=i>1?void 0:i?jf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Uf(e,s,r),r};function Ts(t){if(!t)return null;const[e,s,i]=t.split("-").map(Number);return!e||!s||!i?null:new Date(e,s-1,i)}function Fo(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function Vf(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>e.type).filter(e=>e==="month"||e==="day"||e==="year")}function To(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>{switch(e.type){case"month":return"MM";case"day":return"DD";case"year":return"YYYY";default:return e.value}}).join("")}function Bf(t,e){const s=t.split(/[^0-9]+/).filter(Boolean);if(s.length!==3)return null;const i=Vf(e),r={};for(const[c,p]of i.entries()){const f=s[c];if(p==="year"?f.length!==4:f.length>2)return null;r[p]=Number(f)}const{month:a,day:o,year:n}=r;if(!a||!o||!n||a<1||a>12||o<1||o>31)return null;const l=new Date(n,a-1,o);return l.getFullYear()!==n||l.getMonth()!==a-1||l.getDate()!==o?null:l}let Ae=class extends F{constructor(){super(...arguments),this.value="",this.min="",this.max="",this.placeholder="",this.disabled=!1,this.locale="",this._draft="",this._error="",this._open=!1,this._popoverTop=0,this._popoverBottom=0,this._popoverLeft=0,this._popoverPosition="below",this._openCalendar=()=>{this.disabled||this._open||(this._open=!0,this._updatePopoverPosition(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown))},this._toggleCalendar=()=>{this.disabled||(this._open?(this._open=!1,this._cleanupListeners()):this._openCalendar())},this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1,this._cleanupListeners())},this._handleKeyDown=t=>{t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,this._cleanupListeners())}}get _effectiveLocale(){return this.locale||document.documentElement.lang||"en"}get _selectedDate(){return Ts(this.value)}get _displayText(){const t=this._selectedDate;return t?new Intl.DateTimeFormat(this._effectiveLocale).format(t):""}willUpdate(t){var e,s;t.has("value")&&((s=(e=this.shadowRoot)==null?void 0:e.activeElement)==null?void 0:s.tagName)!=="INPUT"&&(this._draft=this._displayText,this._error="")}render(){const t=this._selectedDate;return d`
      <div
        class="field ${this._open?"open":""} ${this.disabled?"disabled":""} ${this._error?"error":""}"
      >
        <input
          type="text"
          .value=${this._draft}
          placeholder=${this.placeholder||To(this._effectiveLocale)}
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
      ${this._error?d`<div class="error-text">${this._error}</div>`:m}
      ${this._open?d`
            <div
              class="popover"
              ${R({[this._popoverPosition==="below"?"top":"bottom"]:`${this._popoverPosition==="below"?this._popoverTop:this._popoverBottom}px`,left:`${this._popoverLeft}px`})}
            >
              <sfx-calendar
                .value=${t}
                .minDate=${Ts(this.min)}
                .maxDate=${Ts(this.max)}
                .locale=${this.locale}
                @sfx-select=${this._handleSelect}
              ></sfx-calendar>
            </div>
          `:m}
    `}_handleInput(t){this._draft=t.target.value,this._validateAndCommit(this._draft)}_validateAndCommit(t){if(!t){this._error="",this._commit("");return}const e=Bf(t,this._effectiveLocale),s=Ts(this.min),i=Ts(this.max),r=!!e&&(!!s&&e<s||!!i&&e>i);if(!e||r){this._error=`Invalid date. Use ${To(this._effectiveLocale)}`;return}this._error="",this._commit(Fo(e))}_commit(t){t!==this.value&&(this.value=t,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}_handleSelect(t){this._open=!1,this._cleanupListeners(),this._error="",this._commit(Fo(t.detail.date))}_updatePopoverPosition(){const t=this.getBoundingClientRect(),e=340,s=window.innerHeight-t.bottom,i=t.top;this._popoverPosition=s<e&&i>s?"above":"below",this._popoverPosition==="below"?this._popoverTop=t.bottom+4:this._popoverBottom=window.innerHeight-t.top+4,this._popoverLeft=Math.min(t.left,window.innerWidth-284)}_cleanupListeners(){document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupListeners()}};Ae.styles=[Zs,Gn,E`
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
    `];Re([u()],Ae.prototype,"value",2);Re([u()],Ae.prototype,"min",2);Re([u()],Ae.prototype,"max",2);Re([u()],Ae.prototype,"placeholder",2);Re([u({type:Boolean})],Ae.prototype,"disabled",2);Re([u()],Ae.prototype,"locale",2);Re([x()],Ae.prototype,"_draft",2);Re([x()],Ae.prototype,"_error",2);Re([x()],Ae.prototype,"_open",2);Re([x()],Ae.prototype,"_popoverTop",2);Re([x()],Ae.prototype,"_popoverBottom",2);Re([x()],Ae.prototype,"_popoverLeft",2);Re([x()],Ae.prototype,"_popoverPosition",2);Ae=Re([O("sfx-date-input")],Ae);var Kf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,tt=(t,e,s,i)=>{for(var r=i>1?void 0:i?qf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Kf(e,s,r),r};let Ve=class extends F{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalIsLowerBound=!1,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),r=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:r})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.totalIsLowerBound||this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this.totalIsLowerBound||this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?m:d`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?d`
              <span class="divider"></span>
              <span class="select-label">${this.t("selectColon","Select:")}</span>
              ${this._canSelectMore()?d`<button
                    class="bar-btn"
                    ?disabled=${this.isSelectingAll}
                    @click=${this._selectAll}
                  >
                    <sfx-icon name="check-check" .size=${14}></sfx-icon>${this.isSelectingAll?this.t("selecting","Selecting..."):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t("selectFirst",`First ${this.maxSelections}`,{count:this.maxSelections}):this._selectScope==="assets"?this.t("selectAllAssets","Select all assets"):this._selectScope==="folders"?this.t("selectAllFolders","Select all folders"):this.t("selectAll","Select all")}
                  </button>`:m}
              <button class="bar-btn" @click=${this._clear}>
                <sfx-icon name="close" .size=${14}></sfx-icon>${this.t("deselectAll","Deselect all")}
              </button>
              ${this.maxSelections&&this._totalSelected>=this.maxSelections?d`<span class="limit-notice"
                    >${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span
                  >`:m}
            `:m}
        <div class="spacer"></div>
        ${this.showTransform?d`
              <button class="btn-confirm btn-transform" @click=${this._transform}>
                ${this.t("transform","Transform")}
              </button>
            `:m}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};Ve.styles=E`
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
  `;tt([u({type:Array})],Ve.prototype,"selectedAssets",2);tt([u({type:Array})],Ve.prototype,"selectedFolders",2);tt([u({type:Number})],Ve.prototype,"totalCount",2);tt([u({type:Boolean})],Ve.prototype,"totalIsLowerBound",2);tt([u({type:Number})],Ve.prototype,"totalFolderCount",2);tt([u({type:Boolean})],Ve.prototype,"isSelectingAll",2);tt([u({type:Boolean})],Ve.prototype,"multiSelect",2);tt([u({type:Number})],Ve.prototype,"maxSelections",2);tt([u({type:Boolean})],Ve.prototype,"showTransform",2);tt([u({attribute:!1})],Ve.prototype,"t",2);Ve=tt([O("ap-selection-bar")],Ve);var Hf=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,oa=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Hf(e,s,r),r};let Js=class extends F{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?m:d`
      <div
        class="marquee"
        ${R({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};Js.styles=E`
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
  `;oa([u({type:Boolean})],Js.prototype,"active",2);oa([u({type:Object})],Js.prototype,"rect",2);Js=oa([O("ap-marquee-overlay")],Js);var Yf=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,ri=(t,e,s,i)=>{for(var r=i>1?void 0:i?Wf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Yf(e,s,r),r};let Jt=class extends F{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return d`
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
              ${this.loading?d`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t("loading","Loading...")}</span
                  >`:this.t("addAssets","Add assets")}
            </button>
          </div>
        </div>
      </div>
    `}};Jt.styles=[Be,E`
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
    `];ri([u({type:Array})],Jt.prototype,"folders",2);ri([u({type:Boolean})],Jt.prototype,"loading",2);ri([u({attribute:!1})],Jt.prototype,"t",2);ri([x()],Jt.prototype,"_mode",2);Jt=ri([O("ap-folder-resolve-dialog")],Jt);var Qf=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,Dt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xf(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Qf(e,s,r),r};const Jf=120;let nt=class extends F{constructor(){super(...arguments),this.asset=null,this.cropConfig=void 0,this.containerToken="",this.t=(t,e)=>typeof e=="string"?e:t,this._loadError=null,this._loaded=!1,this._ready=!1,this._changeTimer=null}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}async getResult(){var r,a;const t=this._cropEl;if(!t||!this._ready)return null;let e=t.toCropDescriptor();if(po(e.state))return null;if(e.state.rotation%90!==0)try{await t.calibrateCloudimage(),e=t.toCropDescriptor()}catch{}const s=t.toCloudimageURL();if(!s)throw new Error("The crop URL could not be built.");const i=lh(s,((a=(r=this.asset)==null?void 0:r.url)==null?void 0:a.cdn)||"",this.containerToken);return{descriptor:e,url:{cdn:i}}}previewUrl(){const t=this._cropEl;if(!t||!this._ready)return null;try{return t.toCloudimageURL()||null}catch{return null}}_clearTimer(){this._changeTimer&&(clearTimeout(this._changeTimer),this._changeTimer=null)}_handleReady(){this._ready=!0}_handleImageLoad(){this._ready=!0,this._loaded=!0,this._loadError=null}_handleError(t){var e,s;this._loaded=!0,this._loadError=((s=(e=t.detail)==null?void 0:e.error)==null?void 0:s.message)||this.t("cropLoadFailed","Failed to load the image for cropping.")}_handleEditorChange(){this._clearTimer(),this._changeTimer=setTimeout(()=>{this._changeTimer=null,this._emitChange()},Jf)}_emitChange(){const t=this._cropEl;if(!t||!this._ready)return;let e=null;try{e=t.toCropDescriptor()}catch{return}const s=po(e.state);this.dispatchEvent(new CustomEvent("crop-change",{detail:s?null:e,bubbles:!0,composed:!0}))}render(){var e,s,i,r;const t=this.asset;return t?d`
      <div class="stage ${this._loaded?"":"loading"}">
        ${this._loadError?d`<div class="error" role="alert">${this._loadError}</div>`:m}
        <cloudimage-crop
          src=${nh(((e=t.url)==null?void 0:e.cdn)||"",this.containerToken)}
          variant=${((s=this.cropConfig)==null?void 0:s.variant)??"classic"}
          crop-shape=${((i=this.cropConfig)==null?void 0:i.cropShape)??ah}
          .availableShapes=${((r=this.cropConfig)==null?void 0:r.availableShapes)??rh}
          .initialCrop=${oh}
          .showDoneButton=${!1}
          dim-toolbar-on-drag
          output-mode="cloudimage"
          @cloudimage-crop-ready=${this._handleReady}
          @cloudimage-crop-image-load=${this._handleImageLoad}
          @cloudimage-crop-change=${this._handleEditorChange}
          @cloudimage-crop-crop-change=${this._handleEditorChange}
          @cloudimage-crop-error=${this._handleError}
        ></cloudimage-crop>
      </div>
    `:m}};nt.styles=[Be,E`
      :host {
        display: flex;
        flex-direction: column;
        min-width: 0;
        min-height: 0;
        /* Minimum gap kept between the photo and the edges of the grey stage. */
        --ap-crop-stage-padding: 16px;
      }
      /*
       * <cloudimage-crop> (classic) sizes itself to fit the photo inside its parent's content
       * width and its own max-height, so .stage needs a definite width (not fit-content, which
       * would feed the child's size back into the parent) and centers the result. It fills the
       * height the host gives it, so the grey area spans the whole editor column.
       */
      .stage {
        position: relative;
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 240px;
        padding: var(--ap-crop-stage-padding);
        border-radius: var(--sfx-radius-md, 8px);
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      /*
       * The host sets --ap-crop-max-height to the px space it has (a percentage wouldn't do — the
       * element reads its computed max-height back as a px budget). The stage padding comes off
       * it here; the width side needs nothing, the element already subtracts its parent's padding.
       */
      cloudimage-crop {
        display: block;
        max-height: calc(
          var(--ap-crop-max-height, min(560px, 62vh)) - 2 * var(--ap-crop-stage-padding)
        );
        min-height: 120px;
      }
      /*
       * Until the photo decodes, <cloudimage-crop> has no inline size of its own and its loading
       * overlay would spill out of a 120px-tall box over the dialog footer. Reserve a realistic
       * editor area for that window only — once loaded, the element's own fit-to-photo px size
       * must win (a short, wide photo is legitimately less tall than this).
       */
      .stage.loading cloudimage-crop {
        width: 100%;
        height: calc(var(--ap-crop-max-height, min(420px, 50vh)) - 2 * var(--ap-crop-stage-padding));
      }
      .error {
        position: absolute;
        inset: 0;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        text-align: center;
        color: #fff;
        border-radius: inherit;
        background: oklch(0 0 0 / 0.65);
        font-size: var(--sfx-font-size-sm, 0.875rem);
      }
    `];Dt([u({type:Object})],nt.prototype,"asset",2);Dt([u({type:Object})],nt.prototype,"cropConfig",2);Dt([u()],nt.prototype,"containerToken",2);Dt([u({attribute:!1})],nt.prototype,"t",2);Dt([Ze("cloudimage-crop")],nt.prototype,"_cropEl",2);Dt([x()],nt.prototype,"_loadError",2);Dt([x()],nt.prototype,"_loaded",2);nt=Dt([O("ap-crop-panel")],nt);var Zf=Object.defineProperty,eg=Object.getOwnPropertyDescriptor,xe=(t,e,s,i)=>{for(var r=i>1?void 0:i?eg(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Zf(e,s,r),r};const tg=["webp","jpeg","png","gif"];function sg(t){const e=(t??"").toLowerCase();return tg.includes(e)?e:"jpeg"}let ge=class extends F{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.cropEnabled=!1,this.cropConfig=void 0,this.containerToken="",this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._cropDims=null,this._cropDescriptor=null,this._applying=!1,this._applyError=null,this._cropDimsSeq=0,this._pointerDownOnBackdrop=!1,this._defaultFormat="jpeg"}get _firstImage(){return this.assets.find(t=>Ut(t))}get _ratio(){if(this._cropDims){const{width:i,height:r}=this._cropDims;return i&&r?i/r:1.5}const t=this._firstImage;if(!t)return 1.5;const e=ir(t),s=rr(t);return e&&s?e/s:1.5}get _showCropSection(){return this.cropEnabled&&!this.isMultiSelect&&!!this._firstImage}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight||this._cropDescriptor!==null}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this._firstImage;if(this._defaultFormat=sg(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._cropDims=null,this._cropDescriptor=null,this._applying=!1,this._applyError=null,this._cropDimsSeq++,this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=ir(t),s=rr(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}async _handleApply(){if(this._applying)return;const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};let e=null;if(this._showCropSection){this._applying=!0,this._applyError=null;let s=!1;try{const i=this.renderRoot.querySelector("ap-crop-panel");e=await(i==null?void 0:i.getResult())??null}catch{s=!0}finally{this._applying=!1}if(!this.isConnected)return;if(s){this._applyError=this.t("cropApplyFailed","The crop could not be applied. Please try again.");return}}this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect,crop:e},bubbles:!0,composed:!0}))}_handleSkip(){this._applying||this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleCropChange(t){this._cropDescriptor=t.detail,this._applyError=null;const e=t.detail?this.renderRoot.querySelector("ap-crop-panel"):null;this._rebaseSizeOnCrop(t.detail,()=>e==null?void 0:e.previewUrl())}async _rebaseSizeOnCrop(t,e){const s=++this._cropDimsSeq,i=t?await ph(t,e):null;if(s!==this._cropDimsSeq)return;this._cropDims=i;const r=this._firstImage,a=i??{width:r&&ir(r)||void 0,height:r&&rr(r)||void 0};this._defaultWidth=a.width,this._defaultHeight=a.height,this._activePreset==="original"?(this._width=a.width,this._height=a.height):this._lockAspect&&this._width&&(this._height=Math.round(this._width/this._ratio))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropPointerDown(t){this._pointerDownOnBackdrop=t.target===t.currentTarget}_handleBackdropClick(t){const e=this._pointerDownOnBackdrop;this._pointerDownOnBackdrop=!1,t.target===t.currentTarget&&e&&this._handleClose()}_renderFormat(){return d`
      <div class="section">
        <span class="section-label">${this.t("format","Format")}</span>
        <sfx-radio-group
          direction="horizontal"
          .value=${this._format}
          .options=${Kd}
          @sfx-change=${this._handleFormatChange}
        ></sfx-radio-group>
      </div>
    `}_renderQuality(){return this._format==="png"?m:d`
      <div class="section">
        <span class="section-label">${this.t("quality","Quality")}</span>
        <sfx-dropdown
          .value=${this._quality}
          .options=${qd}
          @sfx-change=${this._handleQualityChange}
        ></sfx-dropdown>
      </div>
    `}_renderSize(){return d`
      <div class="section">
        <span class="section-label">${this.t("size","Size")}</span>
        ${this._cropDims?d`
              <span class="crop-size-hint">
                ${this.t("sizeFromCrop","Based on cropped area")} — ${this._cropDims.width} ×
                ${this._cropDims.height} px
              </span>
            `:m}
        ${this.isMultiSelect?d`
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
            `:d`
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
          ${Hd.map(t=>d`
              <button
                class="preset-btn ${this._activePreset===t.value?"active":""}"
                @click=${()=>this._handlePreset(t)}
              >
                ${t.label}
              </button>
            `)}
        </div>
      </div>
    `}_renderBody(){return this._showCropSection?d`
        <div class="split-body">
          <ap-crop-panel
            .asset=${this._firstImage}
            .cropConfig=${this.cropConfig}
            .containerToken=${this.containerToken}
            .t=${this.t}
            @crop-change=${this._handleCropChange}
          ></ap-crop-panel>
          <div class="settings">
            ${this._renderFormat()} ${this._renderQuality()} ${this._renderSize()}
          </div>
        </div>
      `:d`${this._renderFormat()} ${this._renderQuality()} ${this._renderSize()}`}render(){return d`
      <div
        class="backdrop ${this._showCropSection?"cover":""}"
        @pointerdown=${this._handleBackdropPointerDown}
        @click=${this._handleBackdropClick}
      >
        <div class="dialog ${this._showCropSection?"split":""}">
          <div class="header">
            <div class="title">${this.t("exportOptions","Export Options")}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t("close","Close")}>
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>

          ${this._renderBody()}

          <div class="actions">
            ${this._applyError?d`<span class="apply-error" role="alert">${this._applyError}</span>`:m}
            <button class="btn" @click=${this._handleSkip} ?disabled=${this._applying}>
              ${this.exportOriginalLabel??this.t("exportOriginal","Export Original")}
            </button>
            <button
              class="btn btn-primary ${this._applying?"applying":""}"
              @click=${this._handleApply}
              ?disabled=${!this._isDirty||this._applying}
              aria-busy=${this._applying?"true":"false"}
            >
              ${this._applying?d`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t("applying","Applying...")}</span
                  >`:this.applyExportLabel??this.t("applyAndExport","Apply & Export")}
            </button>
          </div>
        </div>
      </div>
    `}};ge.styles=[Be,E`
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
      /*
       * With crop: editor on the left, export settings on the right. The dialog takes the picker
       * modal's own size, radius and (centered) position — the same --sfx-modal-* tokens ap-modal
       * uses — so it covers the picker exactly instead of floating over it, and the picker's
       * backdrop is the only dimming needed.
       */
      .backdrop.cover {
        background: transparent;
      }
      .dialog.split {
        width: 100%;
        max-width: var(--sfx-modal-max-width, 1200px);
        height: var(--sfx-modal-height, 85vh);
        max-height: var(--sfx-modal-max-height, 85vh);
        border-radius: var(--sfx-modal-radius, 12px);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        /*
         * The editor's height budget: the dialog height minus its padding, header and actions
         * (the fixed chrome around .split-body). <cloudimage-crop> only honours a px max-height —
         * a percentage reads back as "100%" — and calc() over absolute lengths computes to px.
         */
        --ap-crop-max-height: calc(
          min(var(--sfx-modal-height, 85vh), var(--sfx-modal-max-height, 85vh)) - 203px
        );
      }
      .split-body {
        flex: 1;
        min-height: 0;
        display: grid;
        grid-template-columns: minmax(0, 1fr) 300px;
        grid-template-rows: minmax(0, 1fr);
        gap: 28px;
      }
      .split-body .settings {
        min-height: 0;
        overflow-y: auto;
      }
      .split-body .settings .section:last-child {
        margin-bottom: 0;
      }
      @media (max-width: 760px) {
        .dialog.split {
          overflow-y: auto;
          --ap-crop-max-height: 50vh;
        }
        .split-body {
          flex: none;
          grid-template-columns: minmax(0, 1fr);
          grid-template-rows: auto;
          gap: 20px;
        }
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
      /* Busy, not unavailable: keep the button readable while the crop is being built. */
      .btn-primary.applying:disabled {
        opacity: 0.85;
        cursor: progress;
      }
      .btn-primary .loading-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      /* The spinner's default arc is --sfx-primary, the button's own fill — recolour it. */
      .btn-primary sfx-spinner {
        --sfx-primary: var(--sfx-primary-foreground, oklch(1 0 0));
        --sfx-border: oklch(1 0 0 / 0.35);
      }
      sfx-dropdown {
        display: block;
        width: 100%;
      }
      .apply-error {
        flex: 1;
        align-self: center;
        font-size: var(--sfx-font-size-xs, 0.75rem);
        color: var(--sfx-destructive, oklch(0.577 0.245 27.325));
      }
      .crop-size-hint {
        display: block;
        font-size: var(--sfx-font-size-xs, 0.75rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin: -4px 0 8px;
      }
    `];xe([u({type:Array})],ge.prototype,"assets",2);xe([u({type:Boolean})],ge.prototype,"isMultiSelect",2);xe([u({type:Boolean})],ge.prototype,"cropEnabled",2);xe([u({type:Object})],ge.prototype,"cropConfig",2);xe([u()],ge.prototype,"containerToken",2);xe([u({attribute:!1})],ge.prototype,"t",2);xe([u({attribute:!1})],ge.prototype,"exportOriginalLabel",2);xe([u({attribute:!1})],ge.prototype,"applyExportLabel",2);xe([x()],ge.prototype,"_format",2);xe([x()],ge.prototype,"_quality",2);xe([x()],ge.prototype,"_width",2);xe([x()],ge.prototype,"_height",2);xe([x()],ge.prototype,"_lockAspect",2);xe([x()],ge.prototype,"_activePreset",2);xe([x()],ge.prototype,"_cropDims",2);xe([x()],ge.prototype,"_cropDescriptor",2);xe([x()],ge.prototype,"_applying",2);xe([x()],ge.prototype,"_applyError",2);ge=xe([O("ap-transformation-dialog")],ge);var ig=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,Rt=(t,e,s,i)=>{for(var r=i>1?void 0:i?rg(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ig(e,s,r),r};const ag=/[/\\\x00-\x1f]/;let lt=class extends F{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_onInput(t){this._name=t.detail.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_validateName(t){return ag.test(t)?this.t("folderNameInvalidChars",`Folder name can't contain "/" or "\\".`):t==="."||t===".."?this.t("folderNameReserved",`Folder name can't be "." or "..".`):null}_onConfirm(t){if(this.loading)return;const e=t.detail.value.trim();if(!e)return;const s=this._validateName(e);if(s){this._localError=s;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:e},bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}render(){const t=this._localError??(this._apiErrorDismissed?null:this.error);return d`
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
    `}};lt.styles=E`
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
  `;Rt([u({attribute:!1})],lt.prototype,"t",2);Rt([u()],lt.prototype,"currentFolderPath",2);Rt([u({type:Boolean})],lt.prototype,"loading",2);Rt([u()],lt.prototype,"error",2);Rt([x()],lt.prototype,"_name",2);Rt([x()],lt.prototype,"_localError",2);Rt([x()],lt.prototype,"_apiErrorDismissed",2);lt=Rt([O("ap-create-folder-dialog")],lt);var og=Object.defineProperty,qe=(t,e,s,i)=>{for(var r=void 0,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(e,s,r)||r);return r&&og(e,s,r),r};const tl=20;function ng(t,e,s){var o;const i=(o=e==null?void 0:e.stats)==null?void 0:o.folders;if(!i||t.length===0||t.length>tl)return t;const r=new Map(i.map(n=>[te(n.path),n.count])),a=te(s);return t.map(n=>{const l=te(n.path),c=l.slice(0,l.lastIndexOf("/"))===(a==="/"?"":a),p=r.get(l)??(c?0:void 0);return p===void 0?n:{...n,count:{...n.count,files_direct:p,files_recursive:p}}})}function pi(t){var i,r,a,o;const e=(r=(i=t.stats)==null?void 0:i.stats)==null?void 0:r.approx_files_count;if(typeof e=="number"&&e>=0)return{count:e,exact:!0};const s=(o=(a=t.stats)==null?void 0:a.info)==null?void 0:o.total_files_count;return typeof s=="number"&&s>=0?{count:s,exact:!0}:typeof t.levelDirectCount=="number"&&t.levelDirectCount>=0?{count:t.levelDirectCount,exact:!0}:!t.filtered&&typeof t.folderCount=="number"?{count:t.folderCount,exact:!0}:{count:t.loaded,exact:!1}}var Ft;const ze=(Ft=class extends F{constructor(){super(),this._displaySigning=od(),this._containerCdn=null,this._listScope=[],this._uploadScope=[],this._initFailed=!1,this._variantsFetched=!1,this._variantsFetching=!1,this._variantsFetchAttempts=0,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._folderFeed=null,this._folderTotalKnown=!1,this._folderFeedTask=null,this._folderListings=new Nc,this._folderCounts=new Map,this._warnedFolderLimit=!1,this._warnedFolderOptionsLimit=!1,this._folderUuidByPath=new Map,this._folderUuidLookups=new Map,this._folderUuidGeneration=0,this._folderBaseByPath=new Map,this._missingFolders=new Set,this._missingFolderList=[],this._folderOptionsMemo=null,this._localizedFieldsCache=null,this._fieldTranslations=null,this._fieldTranslationsRequestId=0,this._fieldTranslationsCache=new Map,this._lazyImportPromises=new Map,this._uploaderEl=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._cropReady=!1,this._variantPresets=[],this._defaultVariantName="original",this._variantOverrides={},this._resolveThumbnailMetadata=dp(),this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._uploaderAvailable&&(this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0)))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this._uploaderAvailable?"copy":"none"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,r;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter=0,this._isDragOver=!1,!this._uploaderAvailable))return;const s=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=El(),this.storeCtrl=new vc(this,this.store),this.selectionCtrl=new _c(this,this.store,e=>this._notifyMaxSelection(e)),this.infiniteScrollCtrl=new xc(this,()=>this._loadMore()),this.marqueeCtrl=new Mr(this,{queryCards:e=>{const s=[],i=(a,o,n)=>a.querySelectorAll(`[${o}]`).forEach(l=>{const c=l.dataset[n];c&&s.push({uuid:c,el:l})});let r=!1;for(const a of Array.from(e.children))a.shadowRoot&&(i(a.shadowRoot,"data-asset-uuid","assetUuid"),i(a.shadowRoot,"data-folder-uuid","folderUuid"),r=!0);return(!r||s.length===0)&&(i(e,"data-asset-uuid","assetUuid"),i(e,"data-folder-uuid","folderUuid")),s},getSelection:()=>{const e=this.store.getState();return[...e.selectedAssets.keys(),...e.selectedFolders.keys()]},setSelection:e=>{var c,p;const s=this.store.getState(),i=((c=s.config)==null?void 0:c.folderSelection)===!0,r=new Map,a=new Map;for(const f of e){const h=s.selectedAssets.get(f);if(h){r.set(f,h);continue}const g=s.selectedFolders.get(f);if(i&&g){a.set(f,g);continue}if(!s.disabledAssetIds.has(f)){const v=s.assets.find(b=>b.uuid===f);if(v){r.set(f,v);continue}}if(i&&!s.disabledFolderIds.has(f)){const v=s.folders.find(b=>b.uuid===f);v&&a.set(f,v)}}const o=(p=s.config)==null?void 0:p.maxSelections,n=r.size+(i?a.size:0),l=o&&n>o?new Map(Array.from(r.entries()).slice(0,Math.max(0,o-a.size))):r;this.store.setState({selectedAssets:l,...i?{selectedFolders:a}:{}})},isInteractiveTarget:e=>{var s;return(((s=this.store.getState().config)==null?void 0:s.multiSelect)??!0)===!1?!0:e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement||i instanceof HTMLDialogElement)return!0;const r=i.tagName.toLowerCase();return r.startsWith("ap-asset-")||r.startsWith("ap-folder-")||r.endsWith("-dialog")?!0:i.classList.contains("check")||i.classList.contains("check-box")})}})}_toKeySet(e){return Array.isArray(e)?new Set(e):null}_isFilterEnabled(e){var s;return!En.has(e)||e in this._normalizedForcedFilters?!0:bi(e,((s=this.config)==null?void 0:s.enabledFilters)??null)}get _visiblePinnedFilters(){const{filters:e}=this.store.getState();return e.pinned.filter(s=>this._isFilterEnabled(s))}get _enabledMetadataFieldKeys(){var e;return this._toKeySet((e=this.config)==null?void 0:e.enabledMetadataFields)}get _visiblePinnedMetadata(){const{filters:e}=this.store.getState();if(!this._isFilterEnabled(y.METADATA))return[];const s=this._enabledMetadataFieldKeys;return s?e.metadata.pinned.filter(i=>s.has(ps(i))):e.metadata.pinned}get _visibleAppliedMetadata(){const{filters:e}=this.store.getState();if(!this._isFilterEnabled(y.METADATA))return{};const s=this._enabledMetadataFieldKeys;return s?Object.fromEntries(Object.entries(e.metadata.applied).filter(([i])=>s.has(ps(i)))):e.metadata.applied}get _activeMetadataLanguage(){var r;const{regionalVariantGroups:e,regionalFilters:s}=this.store.getState(),i=e.find(a=>a.type===fo);return i&&s[i.uuid]||((r=this.config)==null?void 0:r.locale)||"en"}_loadFieldTranslations(){const{regionalVariantGroups:e}=this.store.getState(),s=this.apiClient;if(!s||!e.some(o=>o.type===fo))return;const i=this._activeMetadataLanguage;if(i===this._fieldTranslationsLang)return;this._fieldTranslationsLang=i;const r=++this._fieldTranslationsRequestId,a=this._fieldTranslationsCache.get(i);if(a){this._fieldTranslations=a;return}sp(s,i).then(o=>{this._fieldTranslationsCache.set(i,o),r===this._fieldTranslationsRequestId&&(this._fieldTranslations=o)}).catch(()=>{r===this._fieldTranslationsRequestId&&(this._fieldTranslations=null,this._fieldTranslationsLang=void 0)})}_localizeMetadataFields(e,s){const i=this._fieldTranslations,r=this._localizedFieldsCache;if(r&&r.fields===e&&r.t===s&&r.translations===i)return r.result;const a=ep(tp(e,i),s);return this._localizedFieldsCache={fields:e,t:s,translations:i,result:a},a}_getFilterMetadataFields(e){if(!this._isFilterEnabled(y.METADATA))return[];const s=this._enabledMetadataFieldKeys;return s?e.filter(i=>s.has(i.key)):e}get _thumbnailMetadataFields(){var i;const{metadataFields:e,t:s}=this.store.getState();return this._resolveThumbnailMetadata((i=this.config)==null?void 0:i.thumbnailMetadata,this._localizeMetadataFields(e,s),s)}get _variantOptions(){const e=this.store.getState().t;return(!this._variantOptionsCache||this._variantOptionsCachePresets!==this._variantPresets||this._variantOptionsCacheT!==e)&&(this._variantOptionsCache=[{value:"original",label:e("original","Original")},...this._variantPresets.map(s=>({value:s.name,label:s.name}))],this._variantOptionsCachePresets=this._variantPresets,this._variantOptionsCacheT=e),this._variantOptionsCache}_handleVariantDefaultChange(e){this._defaultVariantName=e.detail.name}_handleAssetVariantChange(e){const{uuid:s,name:i,asset:r,index:a}=e.detail;this.selectionCtrl.selectAsset(r,a)&&(this._variantOverrides={...this._variantOverrides,[s]:i})}_outputUrlContext(){var e;return{containerToken:((e=this.config)==null?void 0:e.auth.projectToken)??null,containerCdn:this._containerCdn}}_applyVariantSelection(e){var s;return(s=this.config)!=null&&s.variants?e.map(i=>{var l,c,p;if(!Ut(i))return i;const r=this._variantOverrides[i.uuid]??this._defaultVariantName;if(!r||r==="original")return i;const a=((l=i.crop)==null?void 0:l.url.cdn)??((c=i.url)==null?void 0:c.cdn)??"";if(!a)return i;const o=this._outputUrlContext(),n=Ti(th(a,r,o,(p=i.transformation)==null?void 0:p.options),o);return{...i,selectedVariant:{name:r,url:n}}}):e}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}connectedCallback(){super.connectedCallback(),this._displaySigning.connect()}disconnectedCallback(){var e;super.disconnectedCallback(),this._displaySigning.disconnect(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._lazyImportPromises.clear(),(e=this._filtersWrapperObserver)==null||e.disconnect(),this._lastFiltersWrapper=void 0,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i));const r=this.renderRoot.querySelector(".toolbar-filters-wrapper");r!==(this._lastFiltersWrapper??null)&&typeof ResizeObserver<"u"&&(this._filtersWrapperObserver??(this._filtersWrapperObserver=new ResizeObserver(()=>this._repositionFilterPanel())),this._filtersWrapperObserver.disconnect(),this._lastFiltersWrapper=r??void 0,r&&this._filtersWrapperObserver.observe(r))}_repositionFilterPanel(){const e=this.renderRoot.querySelector(".toolbar-filters-wrapper"),s=this.renderRoot.querySelector("ap-filters-bar"),i=this.renderRoot.querySelector("ap-content-toolbar"),r=s==null?void 0:s.getActiveChip();if(!e||!i||!r)return;const a=r.getBoundingClientRect(),o=e.getBoundingClientRect();i.repositionExternalPanel(a.left-o.left,a.bottom-o.top)}_computeAuthKey(e){return JSON.stringify({auth:e.auth,apiBase:e.apiBase})}_initConfig(e){const s={folderSelection:!0,...e};this._applyConfig(s);const i=this._computeAuthKey(s);!this._initPromise||i!==this._lastAuthKey||this._initFailed?(i!==this._lastAuthKey&&(this._variantPresets=[],this._variantsFetched=!1,this._variantsFetchAttempts=0,this._defaultVariantName="original",this._variantOverrides={},this._clearFolderCaches({includeUuids:!0})),this._lastAuthKey=i,this._initFailed=!1,this._initPromise=this._fetchBootstrapData(s).catch(()=>{this._initFailed=!0})):s.variants&&!this._variantsFetched&&!this._variantsFetching&&this._variantsFetchAttempts<Ft.VARIANTS_FETCH_MAX_ATTEMPTS&&this._initPromise.then(()=>this._fetchVariantPresets(s)),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}_applyConfig(e){const s=Zh(),i=s.sortBy??e.defaultSortBy??"created_at",r=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&up(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:r,disabledAssetIds:new Set(e.disabledAssetIds??[]),disabledFolderIds:new Set(e.disabledFolderIds??[])}),Xd(e.transformRemoteThumbnail),this._normalizedForcedFilters=kr(e.forcedFilters)}async _initI18n(e){try{const{i18n:s,isNew:i}=await gc(e||"en");i&&s.on("missingKey",(a,o,n,l,c,p)=>{const f=n.match(/_(?:zero|one|two|few|many|other)$/),h=f&&(p!=null&&p[`defaultValue${f[0]}`])?String(p[`defaultValue${f[0]}`]):l;mc.handleMissingKey(n,h,o)});const r=(a,o,n)=>typeof o=="string"?s.t(a,o,n??{}):s.t(a,o??{});this.store.setState({t:r})}catch{}}async _fetchVariantPresets(e){if(!(!this.apiClient||!e.variants||this._initFailed||this._variantsFetching||this._variantsFetched)){this._variantsFetching=!0,this._variantsFetchAttempts++;try{this._variantPresets=await no(this.apiClient),this._variantsFetched=!0}catch(s){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:s,context:"variantPresets"},bubbles:!0,composed:!0}))}finally{this._variantsFetching=!1}}}async _fetchBootstrapData(e){var o,n,l,c;const s=e.apiBase||`https://api.filerobot.com/${e.auth.projectToken}/v5`,i=this._displaySigning.start();this._containerCdn=null;let r;if(this._listScope=[],this._uploadScope=[],e.auth.mode==="securityTemplate"){const{key:p,permissions:f,listScope:h,uploadScope:g}=await Rd(e.auth,s);r=p,this._listScope=h,this._uploadScope=g,this.store.setState({sassKey:p,permissions:f})}else r=e.auth.sassKey;this.apiClient=new Ir({apiBase:s.replace(/\/v5$/,""),headers:{"X-Filerobot-Key":r}});const a={containerToken:e.auth.projectToken,secretKey:e.auth.mode==="sassKey"?r:null};this._displaySigning.set(i,a);try{const[p,f,h,g,v,b,_]=await Promise.allSettled([Mn(this.apiClient),Id(this.apiClient),nd(this.apiClient),Md(this.apiClient),Th(this.apiClient),Ld(this.apiClient),e.variants?no(this.apiClient):Promise.resolve([])]),S={};if(p.status==="fulfilled"){const{fields:V,regionalVariantGroups:z,regionalFilters:re,cdnPermalinkEnabled:se}=p.value;S.metadataFields=V,S.regionalVariantGroups=z,S.regionalFilters=re,S.cdnPermalinkEnabled=se}if(f.status==="fulfilled"){const V=(n=(o=f.value.settings)==null?void 0:o.project_branding)==null?void 0:n.brandColor;V&&(S.brandColor=V);const z=(c=(l=f.value.settings)==null?void 0:l.hostnames)==null?void 0:c.cdn;z&&(this._displaySigning.set(i,{...a,containerCdn:z}),Yc(z)||(this._containerCdn=z))}h.status==="fulfilled"&&(S.labels=h.value||[]),g.status==="fulfilled"&&(S.tags=g.value),b.status==="fulfilled"&&(S.collections=b.value.collections||[]),v.status==="fulfilled"&&(S.fileTypes=v.value),_.status==="fulfilled"?e.variants&&(this._variantPresets=_.value,this._variantsFetched=!0):e.variants&&this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:_.reason,context:"variantPresets"},bubbles:!0,composed:!0}));const{pinnedFilters:w,pinnedMetadata:P}=Qh(e.auth.projectToken??null),k=this.store.getState().filters;S.filters={...k,pinned:w,metadata:{...k.metadata,pinned:P,visible:[...P]}},this.store.setState(S),this._fieldTranslationsCache.clear(),this._fieldTranslationsLang=void 0,this._fieldTranslations=null,this._loadFieldTranslations();const L=e.brandColor||S.brandColor||this.store.getState().brandColor;L&&(S.brandColor||this.store.setState({brandColor:L}),_p(this,L))}catch(p){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:p,context:"init"},bubbles:!0,composed:!0})),p}}_ensureCustomElementImport(e,s){if(customElements.get(e))return Promise.resolve();const i=this._lazyImportPromises.get(e);if(i)return i;const r=s().then(()=>{},a=>{throw this._lazyImportPromises.delete(e),a});return this._lazyImportPromises.set(e,r),r}_ensureUploaderImport(){return this._ensureCustomElementImport("sfx-uploader",()=>j(()=>import("./define-eDGYGgf-.js").then(e=>e.b3),__vite__mapDeps([2,3,4,1])))}_ensureCropImport(){return this._ensureCustomElementImport("cloudimage-crop",()=>j(()=>import("./define-BwVY7ee-.js"),__vite__mapDeps([5,0,1,4])))}_maybeLoadCropModule(e){var s;!((s=this.config)!=null&&s.crop)||this._cropReady||e.filter(Ut).length===1&&this._ensureCropImport().then(()=>{this._cropReady=!0}).catch(i=>{this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i instanceof Error?i:new Error(String(i)),context:"crop-load"},bubbles:!0,composed:!0}))})}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let r;return e.auth.mode==="securityTemplate"?r={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:r={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:r,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,similarityCheck:s.similarityCheck,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){if(!this._uploaderAvailable||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(i){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i instanceof Error?i:new Error(String(i)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this._clearFolderCaches(),this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}get _uploaderAvailable(){var e;return!((e=this.config)!=null&&e.uploader)||this.config.hideUpload||this._isOutsideFolderOptions(this.store.getState().currentFolderPath)?!1:this._uploadScope.length?vn(this.store.getState().currentFolderPath||"/",this._uploadScope):!0}get _canCreateFolder(){var s,i;const e=this.store.getState();return((s=this.config)==null?void 0:s.folderCreation)===!0&&e.activeTab==="folders"&&(((i=this.config.auth)==null?void 0:i.mode)==="sassKey"||zd(e.permissions,jd.FOLDER_CREATE))&&!this._isOutsideFolderOptions(e.currentFolderPath)}_notifyMaxSelection(e){const s=this.store.getState().t,i=this.renderRoot.querySelector("sfx-toast");i==null||i.show(s("maxSelectionReached","Max selection is {{max}}",{max:e}),"warning")}get _limitLockTooltip(){var e;return((e=this.config)==null?void 0:e.maxSelectionsTooltip)??this.store.getState().t("maxAttachmentsReached","You have already selected the maximum number of attachments.")}_isSelectionLocked(e){var i,r;const s=(i=this.config)==null?void 0:i.maxSelections;return((r=this.config)==null?void 0:r.maxSelectionsBehavior)==="lock"&&!!s&&e>=s}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var c,p,f,h,g,v,b,_;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},r=kr((c=this.config)==null?void 0:c.defaultFilters);for(const[S,w]of Object.entries(r))!s.has(S)&&this._isFilterEnabled(S)&&(i[S]=w);const a=this._folderFilterOptions;a&&i[y.FOLDERS]&&(i[y.FOLDERS]=Td(i[y.FOLDERS],((p=this.config)==null?void 0:p.rootFolderPath)||"/",a));const o=((f=this.config)==null?void 0:f.tabs)??["assets","folders"],n=(h=this.config)!=null&&h.rememberLastTab?gp(this.config.auth.projectToken):null,l=(n&&o.includes(n)?n:null)??((g=this.config)!=null&&g.defaultTab&&o.includes(this.config.defaultTab)?this.config.defaultTab:null)??((v=this.config)!=null&&v.initialFolderPath&&o.includes("folders")?"folders":null)??o[0]??"assets";this.store.setState({isOpen:!0,activeTab:l,searchQuery:"",isAISearchActive:!!((b=this.config)!=null&&b.enableAISearch&&((_=this.config)!=null&&_.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(l),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:[],selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this.store.setState({breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(l),this._rootPath())}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&(this._seedFolderFromListScope(),this._clearFolderCaches({includeUuids:!0}),this._loadData())}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._defaultVariantName="original",this._variantOverrides={},this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,r,a,o,n,l,c,p,f,h,g,v,b,_,S,w,P,k,L,V,z,re;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this._selectAllId++,this.store.setState({isLoading:!0,isSelectingAll:!1,totalIsLowerBound:!1}),this._folderFeed=null,this._folderFeedTask=null;try{const se=s.activeTab;if(this._forcedFolderScopeBlocks(se)){this._showNoAssets();return}if(se==="assets"){const W=this._getAssetsFolderScope();if(W===null){this._showNoAssets();return}if(W.length>0){await this._loadFolderScopedAssets(W,e);return}const Q=s.currentFolderPath||"/",K=this._assetsQueryParams(),H=kt(this.apiClient,{...K,folder:Q,offset:0,limit:s.limit}),N=ni(this.apiClient,{folder:Q,q:K.q,search:K.search,recursive:1,with_ai:K.with_ai,ai_query:K.ai_query,ai_lang:K.ai_lang}).catch(()=>null),[q,Z]=await Promise.all([H,N]);if(e!==this._loadId)return;const X=((i=q.files)==null?void 0:i.length)??0,B=X>=s.limit,ee=pi({stats:Z,folderCount:((r=q.info)==null?void 0:r.total_files_count)??((o=(a=q.base)==null?void 0:a.count)==null?void 0:o.files_recursive),loaded:X,filtered:!!(K.q||K.search)});this.store.setState({assets:q.files||[],folders:[],totalCount:ee.count,totalIsLowerBound:!ee.exact&&B,totalFolderCount:0,offset:0,hasMore:B,isLoading:!1})}else if(se==="folders"){const W=this._folderTabFolders;if(W&&this._isOutsideFolderOptions(s.currentFolderPath)){await this._loadFolderOptionsLevel(W,e);return}const Q=this._buildSearchNotation(),K=s.currentFolderPath||"/",H=this.apiClient,N=tr(H,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),[q,Z,X,B]=await Promise.all([N,kt(this.apiClient,{fields:(n=this.config)==null?void 0:n.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:K,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Q||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((l=s.config)==null?void 0:l.locale)??"en"}}),ni(this.apiClient,{folder:K,q:Q||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((c=s.config)==null?void 0:c.locale)??"en"}}).catch(()=>null),N.then(st=>{var G,_e;return s.searchQuery||(((G=st.folders)==null?void 0:G.length)??0)===0||(((_e=st.folders)==null?void 0:_e.length)??0)>tl?null:pd(H,{folder:K,q:Q||void 0})}).catch(()=>null)]);if(e!==this._loadId)return;const ee=ng(q.folders||[],B,K);let ve={};if(ee.length>0)try{ve=await lo(this.apiClient,ee.map(st=>st.uuid))}catch{}if(e!==this._loadId)return;const we=((p=Z.files)==null?void 0:p.length)??0,Ne=we>=s.limit,Te=pi({stats:X,levelDirectCount:(h=(f=B==null?void 0:B.stats)==null?void 0:f.direct)==null?void 0:h.count,folderCount:((g=Z.info)==null?void 0:g.total_files_count)??((b=(v=Z.base)==null?void 0:v.count)==null?void 0:b.files_direct),loaded:we,filtered:!!(Q||s.searchQuery)});this.store.setState({assets:Z.files||[],folders:ee,folderPreviews:ve,totalCount:Te.count,totalIsLowerBound:!Te.exact&&Ne,totalFolderCount:q.total??ee.length,offset:0,hasMore:Ne,isLoading:!1})}else if(se==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const W=s.labels.find(Ne=>Ne.uuid===s.activeLabelUuid);if(!W){this.store.setState({isLoading:!1});return}const Q=W.sid.replace("#",""),K=this._buildSearchNotation(),H=`labels:${Q}${K?" "+K:""}`,N=s.isAISearchActive&&!!s.searchQuery,q=kt(this.apiClient,{fields:(_=this.config)==null?void 0:_.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:H,recursive:1,...N&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((S=s.config)==null?void 0:S.locale)??"en"}}),Z=ni(this.apiClient,{folder:"/",q:H,search:s.searchQuery||void 0,recursive:1,...N&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((w=s.config)==null?void 0:w.locale)??"en"}}).catch(()=>null),[X,B]=await Promise.all([q,Z]);if(e!==this._loadId)return;const ee=((P=X.files)==null?void 0:P.length)??0,ve=ee>=s.limit,we=pi({stats:B,loaded:ee,filtered:!0});this.store.setState({assets:X.files||[],folders:[],totalCount:we.count,totalIsLowerBound:!we.exact&&ve,totalFolderCount:0,offset:0,hasMore:ve,isLoading:!1})}else if(se==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const W=s.activeCollectionFolder;if(!(W&&!((k=W.children)!=null&&k.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const K=s.activeCollectionUuid,H=W.filters||void 0,N=this._buildSearchNotation(),q=s.isAISearchActive&&!!s.searchQuery,Z=kt(this.apiClient,{fields:(L=this.config)==null?void 0:L.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:N||void 0,recursive:1,collection_uuid:K,f64:H,...q&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((V=s.config)==null?void 0:V.locale)??"en"}}),X=ni(this.apiClient,{q:N||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:K,f64:H,...q&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((z=s.config)==null?void 0:z.locale)??"en"}}).catch(()=>null),[B,ee]=await Promise.all([Z,X]);if(e!==this._loadId)return;const ve=((re=B.files)==null?void 0:re.length)??0,we=ve>=s.limit,Ne=pi({stats:ee,loaded:ve,filtered:!0});this.store.setState({assets:B.files||[],folders:[],totalCount:Ne.count,totalIsLowerBound:!Ne.exact&&we,totalFolderCount:0,offset:0,hasMore:we,isLoading:!1})}}catch(se){if(e!==this._loadId)return;this._folderFeed?(this._folderFeed=null,this.store.setState({isLoading:!1,hasMore:!1})):this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:se,context:"loadData"},bubbles:!0,composed:!0}))}}get _selectableTotal(){const e=this.store.getState();return e.totalIsLowerBound?e.totalCount+1:e.totalCount}_resolvedFolderOptions(){var a,o;const e=(a=this.config)==null?void 0:a.folderFilterOptions,s=((o=this.config)==null?void 0:o.rootFolderPath)||"/",i=this._folderOptionsMemo;if(i&&i.source===e&&i.root===s)return i;let r=Fd(e,s);return r&&r.length>Ue&&(this._warnedFolderOptionsLimit||(this._warnedFolderOptionsLimit=!0,console.warn(`[asset-picker] folderFilterOptions lists ${r.length} folders; only the first ${Ue} are offered.`)),r=r.slice(0,Ue)),this._folderOptionsMemo={source:e,root:s,options:r},this._folderOptionsMemo}get _folderFilterOptions(){return this._resolvedFolderOptions().options}get _missingFolderPaths(){return this._missingFolderList.length!==this._missingFolders.size&&(this._missingFolderList=[...this._missingFolders]),this._missingFolderList}get _folderTabFolders(){const e=this._folderFilterOptions;if(!e)return null;const s=i=>e.findIndex(r=>Is(i,[r]));return[...this._getAssetsFolderScope()??[]].sort((i,r)=>s(i)-s(r))}_isOutsideFolderOptions(e){const s=this._folderTabFolders;return!!s&&!Is(e||"/",s)}async _loadFolderOptionsLevel(e,s){const i=this.apiClient,r=this.store.getState(),a=r.searchQuery.trim();let o;if(a){const c=this._folderUuidGeneration;let p=0;const f=await Promise.all(e.map(async g=>{if(this._missingFolders.has(g))return null;try{return await tr(i,{folderPath:g,q:a,recursive:1,sort_by:r.sortBy,sort_direction:r.sortDirection})}catch(v){return sr(v)?c===this._folderUuidGeneration&&this._missingFolders.add(g):p++,null}}));if(s!==this._loadId)return;if(e.length>0&&p===e.length)throw new Error("Could not search the folders");const h=c===this._folderUuidGeneration;o=f.flatMap((g,v)=>{const b=g==null?void 0:g.base;if(!(b!=null&&b.uuid)||te(b.path)!==e[v])return[];h&&this._folderUuidByPath.set(e[v],b.uuid);const _=b,S=g.folders??[];return _.name.toLowerCase().includes(a.toLowerCase())?[_,...S]:S})}else{const c=await Promise.all(e.map(p=>this._resolveFolderBase(p)));if(s!==this._loadId)return;if(e.length>0&&c.every(p=>!p)&&!e.some(p=>this._missingFolders.has(p)))throw new Error("Could not load the folders");if(o=c.filter(p=>!!p),o=await this._withFilteredCounts(o),s!==this._loadId)return}let n={};if(o.length>0)try{n=await lo(i,o.map(c=>c.uuid))}catch{}if(s!==this._loadId)return;const l=this._rootPath();this.store.setState({assets:[],folders:o,folderPreviews:n,totalCount:0,totalIsLowerBound:!1,totalFolderCount:o.length,offset:0,hasMore:!1,isLoading:!1,...r.currentFolderPath!==l||r.breadcrumb.length>0?{currentFolder:null,currentFolderPath:l,breadcrumb:[]}:{}})}async _withFilteredCounts(e){const s=this._buildSearchNotation()||void 0;if(!s||e.length===0)return e;let i;try{i=await this._folderStatsCounts(e.map(r=>r.uuid),s)}catch{return e}return e.map(r=>{const a=i.get(r.uuid);return a===void 0?r:{...r,count:{...r.count,files_direct:a,files_recursive:a}}})}_getAssetsFolderScope(){var i;const{filters:e}=this.store.getState(),s=wr(Od(this._normalizedForcedFilters,e.applied),((i=this.config)==null?void 0:i.rootFolderPath)||"/",this._folderFilterOptions);return s&&s.length>Ue?(this._warnedFolderLimit||(this._warnedFolderLimit=!0,console.warn(`[asset-picker] The folders filter lists ${s.length} folders; only the first ${Ue} are searched.`)),s.slice(0,Ue)):s}_forcedFolderScopeBlocks(e){if(e==="assets"||e==="folders"&&this._folderFilterOptions)return!1;const s=wr(this._normalizedForcedFilters[y.FOLDERS],"/");return s===null||s.length>0}_assetsQueryParams(){var r,a;const e=this.store.getState(),s=this._buildSearchNotation(),i=e.isAISearchActive&&!!e.searchQuery;return{fields:(r=this.config)==null?void 0:r.apiFields,permalinksEnabled:e.cdnPermalinkEnabled,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:s||void 0,recursive:1,with_ai:i||void 0,ai_query:i?e.searchQuery:void 0,ai_lang:i?((a=e.config)==null?void 0:a.locale)??"en":void 0}}_folderPageFetcher(e){const s=this.apiClient;return Lc(async(a,o,n)=>{const l=await Promise.all(a.map(g=>this._resolveFolderUuid(g))),c=new Map,p=[];if(a.forEach((g,v)=>{if(l[v])p.push(g);else if(this._missingFolders.has(te(g)))c.set(g,[]);else throw new Error("folder uuid unknown")}),p.length===0)return c;const f=await dd(s,{...e,offset:o,limit:n,foldersUuids:p.map(g=>l[a.indexOf(g)])}),h=Mc(f.files||[],p);if(!h)throw new Error("multi-folder page has a file outside the requested folders");for(const[g,v]of h)c.set(g,v);return c},async(a,o,n)=>{try{return(await kt(s,{...e,folder:a,offset:o,limit:n})).files||[]}catch(l){if(!sr(l))throw l;return this._missingFolders.add(te(a)),[]}})}_clearFolderCaches({includeUuids:e=!1}={}){this._folderListings.clear(),this._folderCounts.clear(),this._folderBaseByPath.clear(),e&&(this._folderUuidByPath.clear(),this._folderUuidLookups.clear(),this._missingFolders.clear(),this._missingFolderList=[],this._folderUuidGeneration++)}async _loadFolderScopedAssets(e,s){const i=this.store.getState(),r=this._assetsQueryParams(),a=this._folderPageFetcher(r),o=JSON.stringify(r),n=e.map(h=>this._folderListings.get(h,o,a,i.limit)),l=new Uc(n,Rc(i.sortBy,i.sortDirection));this._folderFeed=l,this._folderTotalKnown=!1;const c=Promise.all([l.next(i.limit),this._countFolderScope(e).catch(()=>null)]);this._folderFeedTask=c;const[p,f]=await c;s===this._loadId&&(this._folderTotalKnown=f!==null,this.store.setState({assets:p,folders:[],totalCount:f??p.length,totalIsLowerBound:f===null&&l.hasMore,totalFolderCount:0,offset:0,hasMore:l.hasMore,isLoading:!1}))}_folderTotalPatch(e,s){return this._folderTotalKnown?{}:{totalCount:s,totalIsLowerBound:e.hasMore}}_showNoAssets(){this.store.setState({assets:[],folders:[],totalCount:0,totalIsLowerBound:!1,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1})}async _countFolderScope(e){const s=this.store.getState();if(!this.apiClient||s.searchQuery&&s.isAISearchActive)return null;const i=await Promise.all(e.map(l=>this._resolveFolderUuid(l))),r=[];for(let l=0;l<e.length;l++){const c=i[l];if(c)r.push(c);else if(!this._missingFolders.has(te(e[l])))return null}const a=[s.searchQuery,this._buildSearchNotation()].filter(Boolean).join(" ")||void 0,o=await this._folderStatsCounts(r,a);let n=0;for(const l of r){const c=o.get(l);if(c===void 0)return null;n+=c}return n}async _folderStatsCounts(e,s){var o;const i=n=>JSON.stringify([s??"",n]),r=e.filter(n=>!this._folderCounts.has(i(n)));if(r.length>0){const n=await hd(this.apiClient,{foldersUuids:r,q:s});for(const l of((o=n.stats)==null?void 0:o.folders)??[])l.uuid&&r.includes(l.uuid)&&l.count>=0&&this._folderCounts.set(i(l.uuid),l.count)}const a=new Map;for(const n of e){const l=this._folderCounts.get(i(n));l!==void 0&&a.set(n,l)}return a}_resolveFolderUuid(e){const s=te(e),i=this._folderUuidByPath.get(s);return i?Promise.resolve(i):this._missingFolders.has(s)?Promise.resolve(null):this._lookupFolder(s)}async _checkFolderOptions(){const e=this._folderFilterOptions;if(!(e!=null&&e.length)||!this.apiClient)return;const s=this._missingFolders.size;await Promise.all(e.map(i=>this._resolveFolderUuid(i))),this._missingFolders.size!==s&&this.requestUpdate()}async _resolveFolderBase(e){const s=te(e),i=this._folderBaseByPath.get(s);return i||(this._missingFolders.has(s)?null:(await this._lookupFolder(s),this._folderBaseByPath.get(s)??null))}_lookupFolder(e){const s=this._folderUuidLookups.get(e);if(s)return s;const i=this.apiClient,r=this._folderUuidGeneration,a=(async()=>{try{const n=(await tr(i,{folderPath:e,limit:1})).base;return!(n!=null&&n.uuid)||te(n.path)!==e?null:(r===this._folderUuidGeneration&&(this._folderUuidByPath.set(e,n.uuid),this._folderBaseByPath.set(e,n)),n.uuid)}catch(o){return sr(o)&&r===this._folderUuidGeneration&&this._missingFolders.add(e),null}finally{r===this._folderUuidGeneration&&this._folderUuidLookups.delete(e)}})();return this._folderUuidLookups.set(e,a),a}async _loadMore(){var r,a,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient)return;if(e.activeTab==="assets"&&this._folderFeed){const n=this._folderFeed,l=++this._loadMoreId;this.store.setState({isLoading:!0});try{const c=n.next(e.limit);this._folderFeedTask=c;const p=await c;if(l!==this._loadMoreId||n!==this._folderFeed)return;const f=[...this.store.getState().assets,...p];this.store.setState({assets:f,offset:e.offset+e.limit,hasMore:n.hasMore,isLoading:!1,...this._folderTotalPatch(n,f.length)})}catch(c){if(l!==this._loadMoreId||n!==this._folderFeed)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:c,context:"loadMore"},bubbles:!0,composed:!0}))}return}if(e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((r=e.activeCollectionFolder.children)!=null&&r.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let l=n||void 0,c=e.currentFolderPath||"/",p=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const w=e.labels.find(P=>P.uuid===e.activeLabelUuid);w&&(l=`labels:${w.sid.replace("#","")}${n?" "+n:""}`),c="/",p=1}let f,h;e.activeTab==="collections"&&e.activeCollectionFolder&&(f=e.activeCollectionUuid||void 0,h=e.activeCollectionFolder.filters||void 0,c="",p=1);const g=await kt(this.apiClient,{fields:(a=this.config)==null?void 0:a.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...c?{folder:c}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:p,...f&&{collection_uuid:f},...h&&{f64:h},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const v=this.store.getState().assets,b=g.files||[],_=b.length>=e.limit,S=[...v,...b];this.store.setState({assets:S,offset:i,hasMore:_,isLoading:!1,...e.totalIsLowerBound&&{totalCount:S.length,totalIsLowerBound:_}})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var r;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((r=s.activeCollectionFolder.children)!=null&&r.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var a;const s=e.detail.active,i=this.store.getState(),r={isAISearchActive:s};i.searchQuery&&(s?r.sortBy="relevance":i.sortBy==="relevance"&&(r.sortBy=((a=this.config)==null?void 0:a.defaultSortBy)??"created_at"),r.offset=0,r.assets=[],r.folders=[],r.isLoading=!0),this.store.setState(r),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&pp(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,r=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...r,[s]:i}}),this._loadFieldTranslations()}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),_o(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),_o(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&fp(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:this._rootPath(),breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var a,o,n,l;const s=e.detail.asset,{selectedAssets:i,selectedFolders:r}=this.store.getState();if(!i.has(s.uuid)&&this._isSelectionLocked(i.size+(((a=this.config)==null?void 0:a.folderSelection)===!1?0:r.size))){this._notifyMaxSelection(((o=this.config)==null?void 0:o.maxSelections)??0);return}if(((n=this.config)!=null&&n.transformations||(l=this.config)!=null&&l.crop)&&Ut(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0,this._maybeLoadCropModule(this._transformAssets);return}this._emitSelect([s])}_emitSelect(e,s){var r,a,o;e=this._applyVariantSelection(e),(r=this.config)!=null&&r.humanReadableMetadata&&(e=this._applyHumanReadableMetadata(e));const i={assets:e};s!=null&&s.length&&(i.folders=s),(o=(a=this.config)==null?void 0:a.onSelect)==null||o.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_applyHumanReadableMetadata(e){const{metadataFields:s,regionalFilters:i}=this.store.getState();if(!s.length)return e;const r=Hr(s),a=o=>{if(!o||typeof o!="object")return null;let n=!1;const l={...o};for(const[c,p]of Object.entries(o)){const f=r.get(c);if(!f)continue;const h=Vn(p,f,i);h!==p&&(l[c]=h,n=!0)}return{resolved:l,changed:n}};return e.map(o=>{var v;const n=o,l=b=>typeof b=="string"||Array.isArray(b)&&b.every(_=>typeof _=="string"),c=Object.keys(n).filter(b=>r.has(b)&&l(n[b])),p=c.length?a(Object.fromEntries(c.map(b=>[b,n[b]]))):null,f=a((v=o.info)==null?void 0:v.metadata),h=a(o.meta);if(!(p!=null&&p.changed)&&!(f!=null&&f.changed)&&!(h!=null&&h.changed))return o;const g={...o};return p!=null&&p.changed&&Object.assign(g,p.resolved),f!=null&&f.changed&&(g.info={...o.info,metadata:f.resolved}),h!=null&&h.changed&&(g.meta=h.resolved),g})}_handleFolderOpen(e){var a;const s=e.detail.folder,i=this.store.getState(),r=s.path||`${i.currentFolderPath}${s.name}/`;(a=this.config)!=null&&a.rememberLastFolder&&$o(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:r,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:r}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const l=this._findCollectionFolder(i.activeCollectionFolders,s);if(l){const c=i.breadcrumb.findIndex(f=>f.uuid===s),p=i.breadcrumb.slice(0,c+1);this.store.setState({activeCollectionFolder:l,breadcrumb:p,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const r=s?i.breadcrumb.findIndex(l=>l.uuid===s):-1,a=s?i.breadcrumb.slice(0,r+1):[],o=a.length>0?a[a.length-1].path:this._rootPath();(n=this.config)!=null&&n.rememberLastFolder&&$o(o,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await Pd(this.apiClient,s.uuid),r=gn(i.folders||[]);this.store.setState({activeCollectionFolders:r,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),r=s.path.split(" -> ").filter(Boolean),a=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let o="";for(const l of r)o=o?`${o} -> ${l}`:l,a.push({uuid:o,name:l,path:o});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:a,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const r=this._findCollectionFolder(i.children,s);if(r)return r}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&hp(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||this._rootPath()}_rootPath(){var e;return((e=this.config)==null?void 0:e.rootFolderPath)||Ud("/",this._listScope)}_seedFolderFromListScope(){if(this.store.getState().currentFolderPath!=="/"||!this._listScope.length)return;const s=this._rootPath();s!=="/"&&this.store.setState({currentFolderPath:s,breadcrumb:this._buildBreadcrumbFromPath(s,s)})}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const r=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),a=[];let o=s.endsWith("/")?s:s+"/";for(const n of r)o+=n+"/",!this._isOutsideFolderOptions(o)&&a.push({uuid:o,name:n,path:o});return a}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var r,a;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((a=this.config)==null?void 0:a.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var a,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Ut).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0,this._maybeLoadCropModule(this._transformAssets)}async _handleFolderResolveConfirm(e){var a;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),r=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const o=await Promise.all(i.map(h=>{var g;return kt(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:h.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const h of o)n.push(...h.files);const l=[...r],c=new Set(l.map(h=>h.uuid));for(const h of n)c.has(h.uuid)||(l.push(h),c.add(h.uuid));const p=(a=this.config)==null?void 0:a.maxSelections,f=p?l.slice(0,p):l;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0,this._maybeLoadCropModule(this._transformAssets);return}this._emitSelect(f)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,r=e.detail.crop??null,a=this._transformAssets,o=this._transformFolders,l={isMultiSelect:a.length>1,isAspectLocked:i,exactSize:!!r},c=eh(s,l),p=a.map(f=>{var _,S;if(!Ut(f))return f;const h=r?r.url.cdn:(_=f.url)==null?void 0:_.cdn,g=r||(S=f.url)==null?void 0:S.permalink,v=this._outputUrlContext(),b={cdn:h?r?dh(h,zr(c),v):Ti(ho(h,v,c),v):""};return g&&(b.permalink_cdn=ho(g,v,c)),{...f,transformation:{params:s,url:b,options:c},...r?{crop:r}:{}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(p,o.length?o:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{const r=await Jo(this.apiClient,s,i);this._missingFolders.delete(te(r.path))&&(this._missingFolderList=[...this._missingFolders]),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(r){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(r))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var c,p,f,h;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||this._loadDataTimer||!(((c=s.config)==null?void 0:c.multiSelect)??!0))return;const r=((p=e==null?void 0:e.detail)==null?void 0:p.scope)??"all",a=r!=="assets"&&((f=this.config)==null?void 0:f.folderSelection)!==!1&&s.folders.length>0;if(!(r!=="folders")){a&&this.selectionCtrl.selectAllFolders(s.folders);return}const n=s.activeTab==="assets"?this._folderFeed:null;if(n?!n.hasMore:!s.totalIsLowerBound&&s.assets.length>=s.totalCount){a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const l=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{if(n){await((h=this._folderFeedTask)==null?void 0:h.catch(()=>{}));const N=[];try{for(;n.hasMore;){if(l!==this._selectAllId||n!==this._folderFeed)return;N.push(...await n.next(s.limit*4))}}catch(Z){if(l===this._selectAllId&&n===this._folderFeed&&N.length){const X=[...this.store.getState().assets,...N];this.store.setState({assets:X,offset:Math.max(0,X.length-s.limit),hasMore:n.hasMore,...this._folderTotalPatch(n,X.length)})}throw Z}if(l!==this._selectAllId||n!==this._folderFeed)return;const q=[...this.store.getState().assets,...N];this.store.setState({assets:q,offset:Math.max(0,q.length-s.limit),hasMore:!1,isSelectingAll:!1,...this._folderTotalPatch(n,q.length)}),a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(q);return}const g=this._buildSearchNotation();let v=s.currentFolderPath||"/";const b=s.limit,_=s.assets,S=s.totalCount;let w=s.activeTab==="folders"?0:1,P=g||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const N=s.labels.find(q=>q.uuid===s.activeLabelUuid);N&&(P=`labels:${N.sid.replace("#","")}${g?" "+g:""}`),v="/",w=1}let k,L;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,L=s.activeCollectionFolder.filters||void 0,v="",w=1);const V=s.totalIsLowerBound,z=4,re=[];let se=_.length,W=!1;for(;!W&&(V||se<S);){if(l!==this._selectAllId)return;const N=[];for(;N.length<z&&(V||se<S);)N.push(se),se+=b;const q=await Promise.all(N.map(Z=>{var X,B;return kt(this.apiClient,{fields:(X=this.config)==null?void 0:X.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...v?{folder:v}:{},offset:Z,limit:b,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:P,recursive:w,...k&&{collection_uuid:k},...L&&{f64:L},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((B=s.config)==null?void 0:B.locale)??"en"}})}));if(l!==this._selectAllId)return;for(const Z of q){const X=Z.files??[];re.push(...X),V&&X.length<b&&(W=!0)}}if(l!==this._selectAllId)return;const Q=new Set(_.map(N=>N.uuid)),K=re.filter(N=>Q.has(N.uuid)?!1:(Q.add(N.uuid),!0)),H=[..._,...K];this.store.setState({assets:H,offset:Math.max(0,H.length-b),hasMore:!1,isSelectingAll:!1,...V&&{totalCount:H.length,totalIsLowerBound:!1}}),a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(H)}catch(g){if(l!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:g,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===y.DATE||e===y.LICENSE_EXPIRY||e===T.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:r,folderUuids:a}=e.detail,o=this.store.getState();if(a&&typeof a=="object")for(const[c,p]of Object.entries(a))p&&this._folderUuidByPath.set(te(c),p);const n={...o.filters};let l=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(c=>c==null||c===""||Array.isArray(c)&&c.length===0);if(!l&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:c,preset:p,from:f,to:h}=i;l=!c&&!p&&!f&&!h}if(l){const c={...n.applied};delete c[s],n.applied=c}else{const c={...n.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?c[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===y.IMAGE&&typeof i=="object"&&!Array.isArray(i)?c[s]=i:c[s]={type:"string",values:Array.isArray(i)?i:[i],operator:r||":"},n.applied=c}if(this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(s===y.FOLDERS?300:void 0),this._pendingFilter===s){this._pendingFilter=null;const c=this.renderRoot.querySelector("ap-filters-bar");c&&(c.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key;s===y.FOLDERS&&this._checkFolderOptions();const i=e.detail.chipRect,r=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();a=i.left-l.left,o=i.bottom-l.top}}r==null||r.openFilterPanel(s,!0,a,o)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,r=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();a=i.left-l.left,o=i.bottom-l.top}}r==null||r.openMetadataFieldPanel(s,!0,a,o)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var h,g,v;const{key:s,metadataFieldKey:i}=e.detail;s===y.FOLDERS&&this._checkFolderOptions();const r=this.renderRoot.querySelector("ap-filters-bar"),a=this.renderRoot.querySelector("ap-content-toolbar");if(!r||!a)return;i?(this._pendingMetadataField=i,r.pendingMetadataField=i):s&&!(s in this.store.getState().filters.applied)&&(this._pendingFilter=s,r.pendingFilter=s),await r.updateComplete;let o=r.renderRoot.querySelector(".chip.pending");if(!o&&s&&!i&&(o=r.renderRoot.querySelector(`.chip[data-filter-key="${s}"]`)),!o){const b=r.renderRoot.querySelectorAll(".chip.pinned-empty"),_=i?(h=r._getMetadataLabel)==null?void 0:h.call(r,i):void 0;for(const S of b){const w=(v=(g=S.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:v.trim();if(i&&w===_){o=S;break}if(s&&w===(Bt[s]||s)){o=S;break}}}if(!o)return;const n=o.getBoundingClientRect(),l=this.renderRoot.querySelector(".toolbar-filters-wrapper"),c=l==null?void 0:l.getBoundingClientRect(),p=c?n.left-c.left:n.left,f=c?n.bottom-c.top:void 0;i?a.openMetadataFieldPanel(i,!0,p,f):s&&a.openFilterPanel(s,!0,p,f)}_handleFilterRemove(e){var o;const s=e.detail.key;if(s in(((o=this.config)==null?void 0:o.forcedFilters)??{}))return;const r={...this.store.getState().filters},a={...r.applied};delete a[s],r.applied=a,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:r,metadataType:a,metaDatePreset:o}=e.detail,l={...this.store.getState().filters},c={...l.metadata},p={...c.applied};if(!r||Array.isArray(r)&&r.length===0?(delete p[s],c.applied=p,c.pinned.includes(s)||(c.visible=c.visible.filter(h=>h!==s))):(p[s]={type:"string",values:Array.isArray(r)?r:[r],operator:i||":",metadataType:a,...o?{metaDatePreset:o}:{}},c.applied=p,c.visible.includes(s)||(c.visible=[...c.visible,s])),l.metadata=c,this.store.setState({filters:l,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const h=this.renderRoot.querySelector("ap-filters-bar");h&&(h.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(n=>n!==s),a.metadata=o,this.store.setState({filters:a})}_handleMetadataFilterRemove(e){var l;const{fieldKey:s}=e.detail,i=this.renderRoot.querySelector("ap-filters-bar");(i==null?void 0:i.activeMetadataField)===s&&((l=this.renderRoot.querySelector("ap-content-toolbar"))==null||l.closeFilterPanel());const a={...this.store.getState().filters},o={...a.metadata},n={...o.applied};delete n[s],o.applied=n,o.pinned.includes(s)||(o.visible=o.visible.filter(c=>c!==s)),a.metadata=o,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,l;const{key:s,pinned:i}=e.detail,a={...this.store.getState().filters};i?a.pinned.includes(s)||(a.pinned=[...a.pinned,s]):a.pinned=a.pinned.filter(c=>c!==s),this.store.setState({filters:a});const o=((l=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:l.projectToken)??null;Xh(o,a.pinned)}_handleMetadataPin(e){var l,c;const{fieldKey:s,pinned:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(p=>p!==s),s in o.applied||(o.visible=o.visible.filter(p=>p!==s))),a.metadata=o,this.store.setState({filters:a});const n=((c=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:c.projectToken)??null;Jh(n,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState(),s=Object.fromEntries(Object.entries(e.filters.applied).filter(([r])=>!Mi(r,e.activeTab,!!this._folderFilterOptions)));this.store.setState({filters:{...e.filters,applied:s,metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const i=this.renderRoot.querySelector("ap-filters-bar");i&&(i.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFiltersSet(e){var l;const{applied:s,metadata:i}=e.detail,a={...this.store.getState().filters},o=new Set(Object.keys(((l=this.config)==null?void 0:l.forcedFilters)??{})),n={...s};for(const c of o)delete n[c];if(a.applied=n,i){const c={...a.metadata};c.applied=i.applied;const p=Object.keys(i.applied);c.visible=[...new Set([...c.pinned,...p])],a.metadata=c}this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return wp;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return $p;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return kp}return e.searchQuery?xp:e.activeTab==="folders"?yp:Yr}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return Ih(s,this._visibleAppliedMetadata).join(" ")}render(){var w,P,k,L,V,z,re,se,W,Q,K,H,N,q,Z,X,B,ee,ve,we,Ne,Te,st,G,_e,ce,de,$s,da,ha,pa,ua,fa,ga,ma,va;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),r=Array.from(e.selectedFolders.keys()),a=((w=this.config)==null?void 0:w.disabledAssetIds)??[],o=((P=this.config)==null?void 0:P.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),c=((k=this.config)==null?void 0:k.folderSelection)!==!1,p=this._localizeMetadataFields(e.metadataFields,s),f=this._getFilterMetadataFields(p),h=d`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((L=this.config)==null?void 0:L.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((V=e.activeCollectionFolder.children)!=null&&V.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((z=this.config)!=null&&z.enableAISearch)}
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
    `,g=this._uploaderAvailable,v=this._canCreateFolder,b=d`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <sfx-toast .t=${s}></sfx-toast>
        ${this._isDragOver?d`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${s("dropFilesToUpload","Drop files to upload")}
                </div>
              </div>
            `:m}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(re=this.config)!=null&&re.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${g}
              .showCreateFolder=${v}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((se=e.activeCollectionFolder.children)!=null&&se.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((W=e.activeCollectionFolder.children)!=null&&W.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .showVariants=${!!((Q=this.config)!=null&&Q.variants)&&this._variantOptions.length>1}
              .variantOptions=${this._variantOptions}
              .defaultVariantName=${this._defaultVariantName}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${f}
              .pinnedFilters=${this._visiblePinnedFilters}
              .apiClient=${this.apiClient}
              .rootFolderPath=${((K=this.config)==null?void 0:K.rootFolderPath)||"/"}
              .folderFilterOptions=${this._folderFilterOptions}
              .missingFolders=${this._missingFolderPaths}
              .activeTab=${e.activeTab}
              .totalIsLowerBound=${e.totalIsLowerBound}
              .locale=${((H=this.config)==null?void 0:H.locale)??"en"}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .enabledFilterKeys=${((N=this.config)==null?void 0:N.enabledFilters)??null}
              .enabledMetadataFields=${((q=this.config)==null?void 0:q.enabledMetadataFields)??null}
              .metadataCategoryEnabled=${this._isFilterEnabled(y.METADATA)}
              .approverUsers=${((Z=this.config)==null?void 0:Z.approverUsers)??[]}
              .requesterUsers=${((X=this.config)==null?void 0:X.requesterUsers)??[]}
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

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((B=e.activeCollectionFolder.children)!=null&&B.length))?m:d`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${this._visibleAppliedMetadata}
                    .metadataFields=${p}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${((ee=this.config)==null?void 0:ee.approverUsers)??[]}
                    .requesterUsers=${((ve=this.config)==null?void 0:ve.requesterUsers)??[]}
                    .pinnedFilters=${this._visiblePinnedFilters}
                    .pinnedMetadataFields=${this._visiblePinnedMetadata}
                    .forcedFilters=${((we=this.config)==null?void 0:we.forcedFilters)??{}}
                    .enabledFilters=${((Ne=this.config)==null?void 0:Ne.enabledFilters)??null}
                    .enabledMetadataFields=${((Te=this.config)==null?void 0:Te.enabledMetadataFields)??null}
                    .activeTab=${e.activeTab}
                    .folderOptions=${!!this._folderFilterOptions}
                    .locale=${((st=this.config)==null?void 0:st.locale)??"en"}
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
            ${e.breadcrumb.length>0?d`<sfx-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?s("tabLabels","Labels"):e.activeTab==="collections"?s("tabCollections","Collections"):s("rootFolder","Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></sfx-breadcrumb>`:m}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((G=e.activeCollectionFolder.children)!=null&&G.length)))?d`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${((_e=this.config)==null?void 0:_e.gridSize)??"normal"}
                .multiSelect=${((ce=this.config)==null?void 0:ce.multiSelect)!==!1}
                .folderCount=${2}
                .t=${s}
              ></ap-skeleton>`:this._renderContent(e,i,r,c,a,o)}

          <ap-marquee-overlay
            .active=${this.marqueeCtrl.isActive}
            .rect=${this.marqueeCtrl.rect}
          ></ap-marquee-overlay>
          ${this._folderResolveOpen?d`
                <ap-folder-resolve-dialog
                  .folders=${l}
                  .loading=${e.isResolvingFolders}
                  .t=${s}
                  @folder-resolve-confirm=${this._handleFolderResolveConfirm}
                  @folder-resolve-cancel=${this._handleFolderResolveCancel}
                ></ap-folder-resolve-dialog>
              `:m}
          ${this._transformOpen?d`
                <ap-transformation-dialog
                  .assets=${this._transformAssets}
                  .isMultiSelect=${this._transformAssets.length>1}
                  .cropEnabled=${this._cropReady}
                  .cropConfig=${typeof((de=this.config)==null?void 0:de.crop)=="object"?this.config.crop:void 0}
                  .containerToken=${e.projectToken}
                  .t=${s}
                  .exportOriginalLabel=${($s=this._transformationsConfig)==null?void 0:$s.exportOriginalLabel}
                  .applyExportLabel=${(da=this._transformationsConfig)==null?void 0:da.applyExportLabel}
                  @transform-confirm=${this._handleTransformConfirm}
                  @transform-skip=${this._handleTransformSkip}
                  @transform-cancel=${this._handleTransformCancel}
                ></ap-transformation-dialog>
              `:m}
          ${this._createFolderOpen?d`
                <ap-create-folder-dialog
                  .t=${e.t}
                  .currentFolderPath=${e.currentFolderPath}
                  .loading=${this._isCreatingFolder}
                  .error=${this._createFolderError}
                  @create-folder-confirm=${this._handleCreateFolderConfirm}
                  @create-folder-cancel=${this._handleCreateFolderCancel}
                ></ap-create-folder-dialog>
              `:m}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?d`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${i}
              .containerToken=${e.projectToken}
              .showMetadata=${((ha=this.config)==null?void 0:ha.showMetadata)!==!1}
              .metadataFields=${p}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((pa=this.config)==null?void 0:pa.multiSelect)??!0}
              .selectedVariantName=${this._variantOverrides[e.previewAsset.uuid]??this._defaultVariantName}
              .t=${s}
              .locale=${((ua=this.config)==null?void 0:ua.locale)??"en"}
              .metadataLanguage=${this._activeMetadataLanguage}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:m}
      </div>
    `,_=d`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${l}
        .totalCount=${e.totalCount}
        .totalIsLowerBound=${e.totalIsLowerBound}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((fa=this.config)==null?void 0:fa.multiSelect)??!0}
        .maxSelections=${(ga=this.config)==null?void 0:ga.maxSelections}
        .showTransform=${(!!((ma=this.config)!=null&&ma.transformations)||!!((va=this.config)!=null&&va.crop)&&n.length===1)&&n.some(Ut)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,S=this._isUploaderOpen?d`
          <div class="uploader-overlay">
            <div class="uploader-body">${this._uploaderEl}</div>
          </div>
        `:m;return this._isInline?e.isOpen?d`
        <div class="ap-inline">
          ${this._isUploaderOpen?S:d`
                <div class="inline-header">${h}</div>
                <div class="inline-content">${b}</div>
                <div class="inline-footer">${_}</div>
              `}
        </div>
      `:m:d`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${il=>this._handleCancel(il.detail.reason)}
      >
        ${this._isUploaderOpen?S:d`
              <div slot="header">${h}</div>
              ${b}
              <div slot="footer">${_}</div>
            `}
      </ap-modal>
    `}_renderContent(e,s,i=[],r=!1,a=[],o=[]){var p,f,h,g,v,b,_,S,w,P,k,L,V,z,re,se,W,Q,K,H,N,q,Z,X,B,ee,ve,we,Ne;const n=e.t,l=this._isSelectionLocked(s.length+(r?i.length:0)),c=this._limitLockTooltip;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?d`
          <div class="empty-state">
            <sfx-icon name="search" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsFound","No assets found")}</div>
            <div class="empty-desc">
              ${n("noAssetsFoundDesc","Try adjusting your search or filters")}
            </div>
          </div>
        `:e.viewMode==="grid"?d`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .locale=${((p=this.config)==null?void 0:p.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${c}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((f=this.config)==null?void 0:f.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((h=this.config)==null?void 0:h.gridSize)??"normal"}
            .showVariants=${!!((g=this.config)!=null&&g.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            .thumbnailMetadataFields=${this._thumbnailMetadataFields}
            .regionalFilters=${e.regionalFilters}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:d`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .locale=${((v=this.config)==null?void 0:v.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${c}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((b=this.config)==null?void 0:b.multiSelect)??!0}
          .folderSelectable=${r}
          .totalCount=${this._selectableTotal}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((_=this.config)!=null&&_.variants)}
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
      `;if(e.activeTab==="folders")return!e.isLoading&&e.folders.length===0&&e.assets.length===0?d`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">${n("emptyFolder","This folder is empty")}</div>
            <div class="empty-desc">${n("emptyFolderDesc","No folders or files found here")}</div>
          </div>
        `:e.viewMode==="grid"?d`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${n}
            .locale=${((S=this.config)==null?void 0:S.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${c}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((w=this.config)==null?void 0:w.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((P=this.config)==null?void 0:P.gridSize)??"normal"}
            .showVariants=${!!((k=this.config)!=null&&k.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            .thumbnailMetadataFields=${this._thumbnailMetadataFields}
            .regionalFilters=${e.regionalFilters}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:d`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${n}
          .locale=${((L=this.config)==null?void 0:L.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${c}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((V=this.config)==null?void 0:V.multiSelect)??!0}
          .folderSelectable=${r}
          .totalCount=${this._selectableTotal}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((z=this.config)!=null&&z.variants)}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let Te=e.labels;if(e.searchQuery){const G=e.searchQuery.toLowerCase();Te=e.labels.filter(_e=>_e.name.toLowerCase().includes(G))}const st=e.sortDirection==="asc"?1:-1;return Te=[...Te].sort((G,_e)=>st*G.name.localeCompare(_e.name)),Te.length===0?d`
            <div class="empty-state">
              <sfx-icon name="tag" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noLabelsMatchSearch","No labels match your search"):n("noLabelsFound","No labels found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("labelsWillAppear","Labels will appear here once created")}
              </div>
            </div>
          `:e.viewMode==="grid"?d`
            <div class="labels-grid">
              ${Te.map((G,_e)=>d`
                  <ap-label-card
                    .label=${G}
                    .index=${_e}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `)}
            </div>
          `:d`
          <div class="labels-list">
            ${Te.map((G,_e)=>d`
                <ap-label-row
                  .label=${G}
                  .index=${_e}
                  @label-open=${this._handleLabelOpen}
                ></ap-label-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?d`
          <div class="empty-state">
            <sfx-icon name="tag" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsInLabel","No assets in this label")}</div>
            <div class="empty-desc">
              ${n("noAssetsInLabelDesc","Assets added to this label will appear here")}
            </div>
          </div>
        `:e.viewMode==="grid"?d`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .locale=${((re=this.config)==null?void 0:re.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${c}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((se=this.config)==null?void 0:se.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((W=this.config)==null?void 0:W.gridSize)??"normal"}
            .showVariants=${!!((Q=this.config)!=null&&Q.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            .thumbnailMetadataFields=${this._thumbnailMetadataFields}
            .regionalFilters=${e.regionalFilters}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:d`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .locale=${((K=this.config)==null?void 0:K.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${c}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((H=this.config)==null?void 0:H.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${this._selectableTotal}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((N=this.config)!=null&&N.variants)}
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let G=e.collections;if(e.searchQuery){const ce=e.searchQuery.toLowerCase();G=e.collections.filter(de=>de.title.toLowerCase().includes(ce))}const _e=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?G=[...G].sort((ce,de)=>_e*(new Date(ce.created_at).getTime()-new Date(de.created_at).getTime())):e.sortBy==="updated_at"?G=[...G].sort((ce,de)=>_e*(new Date(ce.updated_at).getTime()-new Date(de.updated_at).getTime())):G=[...G].sort((ce,de)=>_e*ce.title.localeCompare(de.title)),G.length===0?d`
            <div class="empty-state">
              <sfx-icon name="layout-grid" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noCollectionsMatchSearch","No collections match your search"):n("noCollectionsFound","No collections found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionsWillAppear","Collections will appear here once created")}
              </div>
            </div>
          `:e.viewMode==="grid"?d`
            <div class="collections-grid">
              ${G.map((ce,de)=>d`
                  <ap-collection-card
                    .collection=${ce}
                    .index=${de}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `)}
            </div>
          `:d`
          <div class="collections-list">
            ${G.map((ce,de)=>{var $s;return d`
                <ap-collection-row
                  .collection=${ce}
                  .index=${de}
                  .locale=${(($s=this.config)==null?void 0:$s.locale)??"en"}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `})}
          </div>
        `}if(e.isLoadingCollectionFolders)return d`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;const Te=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((q=e.activeCollectionFolder.children)==null?void 0:q.length)??0)>0){let G=Te;if(e.searchQuery){const ce=e.searchQuery.toLowerCase();G=Te.filter(de=>de.name.toLowerCase().includes(ce))}const _e=e.sortDirection==="asc"?1:-1;return G=[...G].sort((ce,de)=>_e*ce.name.localeCompare(de.name)),G.length===0?d`
            <div class="empty-state">
              <sfx-icon name="folder" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noFoldersMatchSearch","No folders match your search"):n("noFoldersInCollection","No folders in this collection")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionFoldersWillAppear","Collection folders will appear here")}
              </div>
            </div>
          `:e.viewMode==="grid"?d`
            <div class="collection-folders-grid">
              ${G.map((ce,de)=>d`
                  <ap-collection-folder-card
                    .folder=${ce}
                    .index=${de}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `)}
            </div>
          `:d`
          <div class="collection-folders-list">
            ${G.map((ce,de)=>d`
                <ap-collection-folder-row
                  .folder=${ce}
                  .index=${de}
                  @collection-folder-open=${this._handleCollectionFolderOpen}
                ></ap-collection-folder-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?d`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">
              ${n("noAssetsInCollectionFolder","No assets in this collection folder")}
            </div>
            <div class="empty-desc">
              ${n("noAssetsInCollectionFolderDesc","Assets matching this collection's criteria will appear here")}
            </div>
          </div>
        `:e.viewMode==="grid"?d`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .locale=${((Z=this.config)==null?void 0:Z.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${c}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((X=this.config)==null?void 0:X.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((B=this.config)==null?void 0:B.gridSize)??"normal"}
            .showVariants=${!!((ee=this.config)!=null&&ee.variants)}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            .thumbnailMetadataFields=${this._thumbnailMetadataFields}
            .regionalFilters=${e.regionalFilters}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:d`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .locale=${((ve=this.config)==null?void 0:ve.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${c}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((we=this.config)==null?void 0:we.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${this._selectableTotal}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((Ne=this.config)!=null&&Ne.variants)}
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
      `}return m}},Ft.styles=[E`
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
        /* The modal/inline container owns the height. Without this the
           uploader's 660px min-height overflows short viewports (e.g. an
           iframe) and its bottom actions row is clipped. */
        --sfx-up-min-height: 0;
        --sfx-up-max-height: none;
      }
    `],Ft.VARIANTS_FETCH_MAX_ATTEMPTS=3,Ft);qe([x()],ze.prototype,"_fieldTranslations");qe([x()],ze.prototype,"_isDragOver");qe([x()],ze.prototype,"_isUploaderOpen");qe([x()],ze.prototype,"_folderResolveOpen");qe([x()],ze.prototype,"_transformOpen");qe([x()],ze.prototype,"_createFolderOpen");qe([x()],ze.prototype,"_isCreatingFolder");qe([x()],ze.prototype,"_createFolderError");qe([x()],ze.prototype,"_cropReady");qe([x()],ze.prototype,"_variantPresets");qe([x()],ze.prototype,"_defaultVariantName");qe([x()],ze.prototype,"_variantOverrides");qe([u({type:Object})],ze.prototype,"config");let lg=ze;typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",lg);const cg=[{pattern:"/",load:()=>j(()=>import("./landing-6f9FrRJa.js"),__vite__mapDeps([6,7])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>j(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([8,9])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>j(()=>import("./configuration-C7WHhTNK.js"),__vite__mapDeps([10,9])).then(t=>t.default)},{pattern:"/docs/api",load:()=>j(()=>import("./api-Dl3UszFN.js"),__vite__mapDeps([11,9])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>j(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([12,9])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>j(()=>import("./filters-Df1TuQYX.js"),__vite__mapDeps([13,9])).then(t=>t.default)},{pattern:"/docs/types",load:()=>j(()=>import("./types-DPNAgA2W.js"),__vite__mapDeps([14,9])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>j(()=>import("./basic-CAneP3-v.js"),__vite__mapDeps([15,7])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>j(()=>import("./single-select-YS-74eLS.js"),__vite__mapDeps([16,7])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>j(()=>import("./multi-select-DAarc2mo.js"),__vite__mapDeps([17,7])).then(t=>t.default)},{pattern:"/examples/disabled-assets",load:()=>j(()=>import("./disabled-assets-DAYrfUXw.js"),__vite__mapDeps([18,7])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>j(()=>import("./theming-Df2HRtr1.js"),__vite__mapDeps([19,7])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>j(()=>import("./custom-theming-BeH0MEuD.js"),__vite__mapDeps([20,7])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>j(()=>import("./default-filters-BEV6-5oZ.js"),__vite__mapDeps([21,7])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>j(()=>import("./forced-filters-CdZ-TOdU.js"),__vite__mapDeps([22,7])).then(t=>t.default)},{pattern:"/examples/enabled-filters",load:()=>j(()=>import("./enabled-filters-CXo9b7TM.js"),__vite__mapDeps([23,7])).then(t=>t.default)},{pattern:"/examples/enabled-metadata-fields",load:()=>j(()=>import("./enabled-metadata-fields-PSu8M0SB.js"),__vite__mapDeps([24,7])).then(t=>t.default)},{pattern:"/examples/thumbnail-metadata",load:()=>j(()=>import("./thumbnail-metadata-8syqbVvp.js"),__vite__mapDeps([25,7])).then(t=>t.default)},{pattern:"/examples/approval-users",load:()=>j(()=>import("./approval-users-BwBCgxMJ.js"),__vite__mapDeps([26,7])).then(t=>t.default)},{pattern:"/examples/human-readable-metadata",load:()=>j(()=>import("./human-readable-metadata-BH6FkaOk.js"),__vite__mapDeps([27,7])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>j(()=>import("./hidden-tabs-DqhKqlcq.js"),__vite__mapDeps([28,7])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>j(()=>import("./root-folder-DpYJ8cJc.js"),__vite__mapDeps([29,7])).then(t=>t.default)},{pattern:"/examples/folder-filter-options",load:()=>j(()=>import("./folder-filter-options-Cw7s0mR-.js"),__vite__mapDeps([30,3,7])).then(t=>t.default)},{pattern:"/examples/events",load:()=>j(()=>import("./events-BOUFSR9p.js"),__vite__mapDeps([31,7])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>j(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([32,7])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>j(()=>import("./inline-Do3K-pLa.js"),__vite__mapDeps([33,7])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>j(()=>import("./sticky-filters-D9tjCOh-.js"),__vite__mapDeps([34,7])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>j(()=>import("./grid-size-DJ4ZJ6ze.js"),__vite__mapDeps([35,7])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>j(()=>import("./preferences-Bfc4iaTv.js"),__vite__mapDeps([36,7])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>j(()=>import("./uploader-DM850FXE.js"),__vite__mapDeps([37,7])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>j(()=>import("./folder-selection-CauyrFfR.js"),__vite__mapDeps([38,7])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>j(()=>import("./ai-search-CLPXt7qQ.js"),__vite__mapDeps([39,7])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>j(()=>import("./transformations-BXYzfyig.js"),__vite__mapDeps([40,7])).then(t=>t.default)},{pattern:"/examples/variants",load:()=>j(()=>import("./variants-ByKO26L3.js"),__vite__mapDeps([41,7])).then(t=>t.default)},{pattern:"/examples/language-switcher",load:()=>j(()=>import("./language-switcher-C4ABPMif.js"),__vite__mapDeps([42,7])).then(t=>t.default)}];let Os=null,Oo=0;function dg(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),r=document.getElementById("sidebar-examples"),a=document.querySelectorAll(".topbar-nav-link");async function o(){const n=location.hash.slice(1)||"/",l=++Oo;Os!=null&&Os.destroy&&Os.destroy(),t.close();const c=cg.find(_=>_.pattern===n);if(!c){location.hash="#/";return}const p=n.startsWith("/docs/"),f=n.startsWith("/examples/"),h=p||f,g=n==="/";s.classList.toggle("hidden",!h),document.body.classList.toggle("has-sidebar",h),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!p),r.classList.toggle("hidden",!f),s.querySelectorAll(".sidebar-link").forEach(_=>{_.classList.toggle("active",_.getAttribute("data-route")===n)});const v=p?"docs":f?"examples":"home";a.forEach(_=>{_.classList.toggle("active",_.getAttribute("data-section")===v)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const b=await c.load();l===Oo&&(Os=b,e.innerHTML=b.render(),b.init&&b.init(t))}window.addEventListener("hashchange",o),o()}const na="ap-demo-auth",Vi={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function hg(){try{const t=localStorage.getItem(na);if(t)return{...Vi,...JSON.parse(t)}}catch{}return{...Vi}}function pg(t){localStorage.setItem(na,JSON.stringify(t))}function ug(){const t=window.__apDemoFlags;return t&&typeof t=="object"?t:{}}function $g(t={}){const{projectToken:e,securityTemplateKey:s}=hg();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t,...ug()}}function fg(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),r=document.getElementById("auth-save");try{const a=localStorage.getItem(na);if(a){const o=JSON.parse(a);s.value=o.projectToken??"",i.value=o.securityTemplateKey??""}}catch{}t.addEventListener("click",a=>{a.stopPropagation(),e.classList.toggle("hidden")}),r.addEventListener("click",()=>{pg({projectToken:s.value.trim()||Vi.projectToken,securityTemplateKey:i.value.trim()||Vi.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",a=>{!e.contains(a.target)&&!t.contains(a.target)&&e.classList.add("hidden")})}fg();console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,"color: #5b6cff; font-weight: 600;","color: inherit;");const gg=document.getElementById("sidebar-toggle"),sl=document.getElementById("sidebar");gg.addEventListener("click",()=>{sl.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{sl.classList.remove("mobile-open")});const mg=document.getElementById("picker");dg(mg);export{m as A,hc as B,At as C,Ir as D,gt as E,y as F,Yn as G,$l as H,En as M,Pt as S,j as _,Cr as a,$g as b,wg as c,Ap as d,Rd as e,E as f,hg as g,Ze as h,Ep as i,d as j,F as k,wi as l,Gn as m,u as n,R as o,_g as p,yg as q,x as r,He as s,Cp as t,dc as u,ol as v,Jp as w,Gp as x,Fc as y,te as z};
