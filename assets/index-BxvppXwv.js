const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dq5Xh6zy.js","assets/class-map-CyEI7kek.js","assets/define-CnywRwcq.js","assets/unsafe-html-CZweVEap.js","assets/define-CE3KmhcW.js","assets/landing-DO5Ancsx.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-NDCQEfn-.js","assets/api-Dl3UszFN.js","assets/theming-hrqYM8pb.js","assets/filters-Df1TuQYX.js","assets/types-DPNAgA2W.js","assets/basic-WvJsgfKn.js","assets/single-select-BzHJpR7s.js","assets/multi-select-C6R019gX.js","assets/disabled-assets-Cu1LP_mE.js","assets/theming-n1QPxLim.js","assets/custom-theming-DDXeqJS1.js","assets/default-filters-aFnYZtUo.js","assets/forced-filters-J3YbkI2W.js","assets/enabled-filters-BGFLrOYN.js","assets/enabled-metadata-fields-Zw5X6cSP.js","assets/thumbnail-metadata-DV7uB7Ge.js","assets/approval-users-DZK7tiF-.js","assets/human-readable-metadata-CyTKRcT-.js","assets/hidden-tabs-DoAMHTm1.js","assets/root-folder-Duql8xyz.js","assets/events-CzfAmaaG.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-4Iwf4Xzg.js","assets/sticky-filters-uao-qnIL.js","assets/grid-size-Drz7HT8X.js","assets/preferences-B-fiv0Kx.js","assets/uploader-doBV7Rh_.js","assets/folder-selection-BJBPBjwl.js","assets/ai-search-0bYUzs9d.js","assets/transformations-KTP45oe9.js","assets/variants-Mmr04Ngi.js","assets/language-switcher-Dg6AZmU6.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const hn="modulepreload",pn=function(t){return"/asset-picker/"+t},ea={},U=function(e,s,i){let r=Promise.resolve();if(s&&s.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=o(s.map(d=>{if(d=pn(d),d in ea)return;ea[d]=!0;const p=d.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":hn,p||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((g,v)=>{h.addEventListener("load",g),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return r.then(o=>{for(const n of o||[])n.status==="rejected"&&a(n.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=globalThis,hr=oi.ShadowRoot&&(oi.ShadyCSS===void 0||oi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pr=Symbol(),ta=new WeakMap;let eo=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(hr&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=ta.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ta.set(s,e))}return e}toString(){return this.cssText}};const un=t=>new eo(typeof t=="string"?t:t+"",void 0,pr),A=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new eo(s,t,pr)},fn=(t,e)=>{if(hr)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=oi.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},sa=hr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return un(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gn,defineProperty:mn,getOwnPropertyDescriptor:vn,getOwnPropertyNames:bn,getOwnPropertySymbols:xn,getPrototypeOf:_n}=Object,$t=globalThis,ia=$t.trustedTypes,yn=ia?ia.emptyScript:"",Mi=$t.reactiveElementPolyfillSupport,ks=(t,e)=>t,hi={toAttribute(t,e){switch(e){case Boolean:t=t?yn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ur=(t,e)=>!gn(t,e),ra={attribute:!0,type:String,converter:hi,reflect:!1,useDefault:!1,hasChanged:ur};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$t.litPropertyMetadata??($t.litPropertyMetadata=new WeakMap);let es=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=ra){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&mn(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:a}=vn(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){const n=r==null?void 0:r.call(this);a==null||a.call(this,o),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ra}static _$Ei(){if(this.hasOwnProperty(ks("elementProperties")))return;const e=_n(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ks("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ks("properties"))){const s=this.properties,i=[...bn(s),...xn(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(sa(r))}else e!==void 0&&s.push(sa(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var a;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:hi).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,s){var a,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:hi;this._$Em=r;const d=l.fromAttribute(s,n.type);this[r]=d??((o=this._$Ej)==null?void 0:o.get(r))??d,this._$Em=null}}requestUpdate(e,s,i,r=!1,a){var o;if(e!==void 0){const n=this.constructor;if(r===!1&&(a=this[e]),i??(i=n.getPropertyOptions(e)),!((i.hasChanged??ur)(a,s)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:a},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??s??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,o]of r){const{wrapped:n}=o,l=this[a];n!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};es.elementStyles=[],es.shadowRootOptions={mode:"open"},es[ks("elementProperties")]=new Map,es[ks("finalized")]=new Map,Mi==null||Mi({ReactiveElement:es}),($t.reactiveElementVersions??($t.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=globalThis,aa=t=>t,pi=Ss.trustedTypes,oa=pi?pi.createPolicy("lit-html",{createHTML:t=>t}):void 0,to="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,so="?"+xt,$n=`<${so}>`,Nt=document,As=()=>Nt.createComment(""),Es=t=>t===null||typeof t!="object"&&typeof t!="function",fr=Array.isArray,wn=t=>fr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ii=`[ 	
\f\r]`,vs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,na=/-->/g,la=/>/g,Ot=RegExp(`>|${Ii}(?:([^\\s"'>=/]+)(${Ii}*=${Ii}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ca=/'/g,da=/"/g,io=/^(?:script|style|textarea|title)$/i,ro=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),c=ro(1),yt=ro(2),lt=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ha=new WeakMap,Pt=Nt.createTreeWalker(Nt,129);function ao(t,e){if(!fr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return oa!==void 0?oa.createHTML(e):e}const kn=(t,e)=>{const s=t.length-1,i=[];let r,a=e===2?"<svg>":e===3?"<math>":"",o=vs;for(let n=0;n<s;n++){const l=t[n];let d,p,f=-1,h=0;for(;h<l.length&&(o.lastIndex=h,p=o.exec(l),p!==null);)h=o.lastIndex,o===vs?p[1]==="!--"?o=na:p[1]!==void 0?o=la:p[2]!==void 0?(io.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=Ot):p[3]!==void 0&&(o=Ot):o===Ot?p[0]===">"?(o=r??vs,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?Ot:p[3]==='"'?da:ca):o===da||o===ca?o=Ot:o===na||o===la?o=vs:(o=Ot,r=void 0);const g=o===Ot&&t[n+1].startsWith("/>")?" ":"";a+=o===vs?l+$n:f>=0?(i.push(d),l.slice(0,f)+to+l.slice(f)+xt+g):l+xt+(f===-2?n:g)}return[ao(t,a+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Fs{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let a=0,o=0;const n=e.length-1,l=this.parts,[d,p]=kn(e,s);if(this.el=Fs.createElement(d,i),Pt.currentNode=this.el.content,s===2||s===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=Pt.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const f of r.getAttributeNames())if(f.endsWith(to)){const h=p[o++],g=r.getAttribute(f).split(xt),v=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:v[2],strings:g,ctor:v[1]==="."?Cn:v[1]==="?"?An:v[1]==="@"?En:Ei}),r.removeAttribute(f)}else f.startsWith(xt)&&(l.push({type:6,index:a}),r.removeAttribute(f));if(io.test(r.tagName)){const f=r.textContent.split(xt),h=f.length-1;if(h>0){r.textContent=pi?pi.emptyScript:"";for(let g=0;g<h;g++)r.append(f[g],As()),Pt.nextNode(),l.push({type:2,index:++a});r.append(f[h],As())}}}else if(r.nodeType===8)if(r.data===so)l.push({type:2,index:a});else{let f=-1;for(;(f=r.data.indexOf(xt,f+1))!==-1;)l.push({type:7,index:a}),f+=xt.length-1}a++}}static createElement(e,s){const i=Nt.createElement("template");return i.innerHTML=e,i}}function is(t,e,s=t,i){var o,n;if(e===lt)return e;let r=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const a=Es(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),a===void 0?r=void 0:(r=new a(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=is(t,r._$AS(t,e.values),r,i)),e}class Sn{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Nt).importNode(s,!0);Pt.currentNode=r;let a=Pt.nextNode(),o=0,n=0,l=i[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new hs(a,a.nextSibling,this,e):l.type===1?d=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(d=new Fn(a,this,e)),this._$AV.push(d),l=i[++n]}o!==(l==null?void 0:l.index)&&(a=Pt.nextNode(),o++)}return Pt.currentNode=Nt,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class hs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=is(this,e,s),Es(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&Es(this._$AH)?this._$AA.nextSibling.data=e:this.T(Nt.createTextNode(e)),this._$AH=e}$(e){var a;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Fs.createElement(ao(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(s);else{const o=new Sn(r,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=ha.get(e.strings);return s===void 0&&ha.set(e.strings,s=new Fs(e)),s}k(e){fr(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const a of e)r===s.length?s.push(i=new hs(this.O(As()),this.O(As()),this,this.options)):i=s[r],i._$AI(a),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=aa(e).nextSibling;aa(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class Ei{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,a){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,s=this,i,r){const a=this.strings;let o=!1;if(a===void 0)e=is(this,e,s,0),o=!Es(e)||e!==this._$AH&&e!==lt,o&&(this._$AH=e);else{const n=e;let l,d;for(e=a[0],l=0;l<a.length-1;l++)d=is(this,n[i+l],s,l),d===lt&&(d=this._$AH[l]),o||(o=!Es(d)||d!==this._$AH[l]),d===m?e=m:e!==m&&(e+=(d??"")+a[l+1]),this._$AH[l]=d}o&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cn extends Ei{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class An extends Ei{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class En extends Ei{constructor(e,s,i,r,a){super(e,s,i,r,a),this.type=5}_$AI(e,s=this){if((e=is(this,e,s,0)??m)===lt)return;const i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class Fn{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){is(this,e)}}const Pu={I:hs},Di=Ss.litHtmlPolyfillSupport;Di==null||Di(Fs,hs),(Ss.litHtmlVersions??(Ss.litHtmlVersions=[])).push("3.3.3");const On=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const a=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new hs(e.insertBefore(As(),a),a,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis;let E=class extends es{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=On(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return lt}};var Za;E._$litElement$=!0,E.finalized=!0,(Za=Dt.litElementHydrateSupport)==null||Za.call(Dt,{LitElement:E});const Ri=Dt.litElementPolyfillSupport;Ri==null||Ri({LitElement:E});(Dt.litElementVersions??(Dt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn={attribute:!0,type:String,converter:hi,reflect:!1,hasChanged:ur},Ln=(t=Tn,e,s)=>{const{kind:i,metadata:r}=s;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(n){const l=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,l,t,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(i==="setter"){const{name:o}=s;return function(n){const l=this[o];e.call(this,n),this.requestUpdate(o,l,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function u(t){return(e,s)=>typeof s=="object"?Ln(t,e,s):((i,r,a)=>{const o=r.hasOwnProperty(a);return r.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(r,a):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t){return u({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(t,e){return(s,i,r)=>{const a=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(t))??null};return Pn(s,i,{get(){return a(this)}})}}class Mn{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function In(){return new Mn({t:(t,e,s)=>{const i=(r,a)=>r.replace(/\{\{(\w+)\}\}/g,(o,n)=>String(a[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const r=e,a=r.count;if(a!==void 0){const o=String((a===1?r.defaultValue_one:r.defaultValue_other)??r.defaultValue??t);return i(o,r)}return i(String(r.defaultValue??t),r)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",cdnPermalinkEnabled:!1,isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalIsLowerBound:!1,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const zi=(t,e)=>t.replace(/\{\{(\w+)\}\}/g,(s,i)=>String(e[i]??"")),Zi=(t,e,s)=>{if(typeof e=="string")return zi(e,s??{});if(typeof e=="object"&&e!==null){const i=e,r=i.count;if(r!==void 0){const a=String((r===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??t);return zi(a,i)}return zi(String(i.defaultValue??t),i)}return t},P=t=>typeof t=="string",bs=()=>{let t,e;const s=new Promise((i,r)=>{t=i,e=r});return s.resolve=t,s.reject=e,s},pa=t=>t==null?"":""+t,Dn=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},Rn=/###/g,ua=t=>t&&t.indexOf("###")>-1?t.replace(Rn,"."):t,fa=t=>!t||P(t),Cs=(t,e,s)=>{const i=P(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(fa(t))return{};const a=ua(i[r]);!t[a]&&s&&(t[a]=new s),Object.prototype.hasOwnProperty.call(t,a)?t=t[a]:t={},++r}return fa(t)?{}:{obj:t,k:ua(i[r])}},ga=(t,e,s)=>{const{obj:i,k:r}=Cs(t,e,Object);if(i!==void 0||e.length===1){i[r]=s;return}let a=e[e.length-1],o=e.slice(0,e.length-1),n=Cs(t,o,Object);for(;n.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),n=Cs(t,o,Object),n&&n.obj&&typeof n.obj[`${n.k}.${a}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${a}`]=s},zn=(t,e,s,i)=>{const{obj:r,k:a}=Cs(t,e,Object);r[a]=r[a]||[],r[a].push(s)},ui=(t,e)=>{const{obj:s,k:i}=Cs(t,e);if(s)return s[i]},Nn=(t,e,s)=>{const i=ui(t,s);return i!==void 0?i:ui(e,s)},oo=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?P(t[i])||t[i]instanceof String||P(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):oo(t[i],e[i],s):t[i]=e[i]);return t},Wt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const jn=t=>P(t)?t.replace(/[&<>"'\/]/g,e=>Un[e]):t;class Vn{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Bn=[" ",",","?","!",";"],Kn=new Vn(20),qn=(t,e,s)=>{e=e||"",s=s||"";const i=Bn.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const r=Kn.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let a=!r.test(t);if(!a){const o=t.indexOf(s);o>0&&!r.test(t.substring(0,o))&&(a=!0)}return a},er=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let r=t;for(let a=0;a<i.length;){if(!r||typeof r!="object")return;let o,n="";for(let l=a;l<i.length;++l)if(l!==a&&(n+=s),n+=i[l],o=r[n],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;a+=l-a+1;break}r=o}return r},fi=t=>t&&t.replace("_","-"),Hn={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class gi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||Hn,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,r){return r&&!this.debug?null:(P(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new gi(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new gi(this.logger,e)}}var Xe=new gi;class Fi{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(s)||0;this.observers[i].set(s,r+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),r=1;r<s;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[n,l]=o;for(let d=0;d<l;d++)n(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[n,l]=o;for(let d=0;d<l;d++)n.apply(n,[e,...i])})}}class ma extends Fi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let n;e.indexOf(".")>-1?n=e.split("."):(n=[e,s],i&&(Array.isArray(i)?n.push(...i):P(i)&&a?n.push(...i.split(a)):n.push(i)));const l=ui(this.data,n);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=n[0],s=n[1],i=n.slice(2).join(".")),l||!o||!P(i)?l:er(this.data&&this.data[e]&&this.data[e][s],i,a)}addResource(e,s,i,r){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let n=[e,s];i&&(n=n.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(n=e.split("."),r=s,s=n[1]),this.addNamespaces(s),ga(this.data,n,r),a.silent||this.emit("added",e,s,i,r)}addResources(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in i)(P(i[a])||Array.isArray(i[a]))&&this.addResource(e,s,a,i[a],{silent:!0});r.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},n=[e,s];e.indexOf(".")>-1&&(n=e.split("."),r=i,i=s,s=n[1]),this.addNamespaces(s);let l=ui(this.data,n)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?oo(l,i,a):l={...l,...i},ga(this.data,n,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(r=>s[r]&&Object.keys(s[r]).length>0)}toJSON(){return this.data}}var no={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,r){return t.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,s,i,r))}),e}};const va={};class mi extends Fi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Dn(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Xe.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,n=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!qn(e,i,r);if(o&&!n){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:P(a)?[a]:a};const d=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(d[0])>-1)&&(a=d.shift()),e=d.join(r)}return{key:e,namespaces:P(a)?[a]:a}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:n}=this.extractFromKey(e[e.length-1],s),l=n[n.length-1],d=s.lng||this.language,p=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(p){const k=s.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${k}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${k}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const f=this.resolve(e,s);let h=f&&f.res;const g=f&&f.usedKey||o,v=f&&f.exactUsedKey||o,b=Object.prototype.toString.apply(h),_=["[object Number]","[object Function]","[object RegExp]"],T=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,M=!P(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&M&&_.indexOf(b)<0&&!(P(T)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const k=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,h,{...s,ns:n}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(f.res=k,f.usedParams=this.getUsedParamsDetails(s),f):k}if(a){const k=Array.isArray(h),L=k?[]:{},B=k?v:g;for(const K in h)if(Object.prototype.hasOwnProperty.call(h,K)){const oe=`${B}${a}${K}`;L[K]=this.translate(oe,{...s,joinArrays:!1,ns:n}),L[K]===oe&&(L[K]=h[K])}h=L}}else if(y&&P(T)&&Array.isArray(h))h=h.join(T),h&&(h=this.extendTranslation(h,e,s,i));else{let k=!1,L=!1;const B=s.count!==void 0&&!P(s.count),K=mi.hasDefaultValue(s),oe=B?this.pluralResolver.getSuffix(d,s.count,s):"",re=s.ordinal&&B?this.pluralResolver.getSuffix(d,s.count,{ordinal:!1}):"",Q=B&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),X=Q&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${oe}`]||s[`defaultValue${re}`]||s.defaultValue;!this.isValidLookup(h)&&K&&(k=!0,h=X),this.isValidLookup(h)||(L=!0,h=o);const H=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&L?void 0:h,z=K&&X!==h&&this.options.updateMissing;if(L||k||z){if(this.logger.log(z?"updateKey":"missingKey",d,l,o,z?X:h),a){const V=this.resolve(o,{...s,keySeparator:!1});V&&V.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let j=[];const ee=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ee&&ee[0])for(let V=0;V<ee.length;V++)j.push(ee[V]);else this.options.saveMissingTo==="all"?j=this.languageUtils.toResolveHierarchy(s.lng||this.language):j.push(s.lng||this.language);const G=(V,te,fe)=>{const ye=K&&fe!==h?fe:H;this.options.missingKeyHandler?this.options.missingKeyHandler(V,l,te,ye,z,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(V,l,te,ye,z,s),this.emit("missingKey",V,l,te,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&B?j.forEach(V=>{const te=this.pluralResolver.getSuffixes(V,s);Q&&s[`defaultValue${this.options.pluralSeparator}zero`]&&te.indexOf(`${this.options.pluralSeparator}zero`)<0&&te.push(`${this.options.pluralSeparator}zero`),te.forEach(fe=>{G([V],o+fe,s[`defaultValue${fe}`]||X)})}):G(j,o,X))}h=this.extendTranslation(h,e,s,f,i),L&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(L||k)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,k?h:void 0):h=this.options.parseMissingKeyHandler(h))}return r?(f.res=h,f.usedParams=this.getUsedParamsDetails(s),f):h}extendTranslation(e,s,i,r,a){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=P(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const h=e.match(this.interpolator.nestingRegexp);p=h&&h.length}let f=i.replace&&!P(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||r.usedLng,i),d){const h=e.match(this.interpolator.nestingRegexp),g=h&&h.length;p<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,g=new Array(h),v=0;v<h;v++)g[v]=arguments[v];return a&&a[0]===g[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):o.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,l=P(n)?[n]:n;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=no.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,a,o,n;return P(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,s),p=d.key;r=p;let f=d.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const h=s.count!==void 0&&!P(s.count),g=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),v=s.context!==void 0&&(P(s.context)||typeof s.context=="number")&&s.context!=="",b=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);f.forEach(_=>{this.isValidLookup(i)||(n=_,!va[`${b[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(va[`${b[0]}-${_}`]=!0,this.logger.warn(`key "${r}" for languages "${b.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),b.forEach(T=>{if(this.isValidLookup(i))return;o=T;const y=[p];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,p,T,_,s);else{let k;h&&(k=this.pluralResolver.getSuffix(T,s.count,s));const L=`${this.options.pluralSeparator}zero`,B=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(p+k),s.ordinal&&k.indexOf(B)===0&&y.push(p+k.replace(B,this.options.pluralSeparator)),g&&y.push(p+L)),v){const K=`${p}${this.options.contextSeparator}${s.context}`;y.push(K),h&&(y.push(K+k),s.ordinal&&k.indexOf(B)===0&&y.push(K+k.replace(B,this.options.pluralSeparator)),g&&y.push(K+L))}}let M;for(;M=y.pop();)this.isValidLookup(i)||(a=M,i=this.getResource(T,_,M,s))}))})}),{res:i,usedKey:r,exactUsedKey:a,usedLng:o,usedNS:n}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,r):this.resourceStore.getResource(e,s,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!P(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const a of s)delete r[a]}return r}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const Ni=t=>t.charAt(0).toUpperCase()+t.slice(1);class ba{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Xe.create("languageUtils")}getScriptPartFromCode(e){if(e=fi(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=fi(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(P(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ni(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ni(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ni(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(s=r)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return s=r;s=this.options.supportedLngs.find(a=>{if(a===r)return a;if(!(a.indexOf("-")<0&&r.indexOf("-")<0)&&(a.indexOf("-")>0&&r.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===r||a.indexOf(r)===0&&r.length>1))return a})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),P(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),r=[],a=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return P(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):P(e)&&a(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&a(this.formatLanguageCode(o))}),r}}let Gn=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Yn={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Qn=["v1","v2","v3"],Wn=["v4"],xa={zero:0,one:1,two:2,few:3,many:4,other:5},Xn=()=>{const t={};return Gn.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:Yn[e.fc]}})}),t};class Jn{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=Xe.create("pluralResolver"),(!this.options.compatibilityJSON||Wn.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Xn(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=fi(e==="dev"?"en":e),r=s.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:i,type:r});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(i,{type:r})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[a]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${s}${r}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,a)=>xa[r]-xa[a]).map(r=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(s)}`:this.getSuffixRetroCompatible(r,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const a=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Qn.includes(this.options.compatibilityJSON)}}const _a=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=Nn(t,e,s);return!a&&r&&P(s)&&(a=er(t,s,i),a===void 0&&(a=er(e,s,i))),a},Ui=t=>t.replace(/\$/g,"$$$$");class Zn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Xe.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:r,prefix:a,prefixEscaped:o,suffix:n,suffixEscaped:l,formatSeparator:d,unescapeSuffix:p,unescapePrefix:f,nestingPrefix:h,nestingPrefixEscaped:g,nestingSuffix:v,nestingSuffixEscaped:b,nestingOptionsSeparator:_,maxReplaces:T,alwaysFormat:y}=e.interpolation;this.escape=s!==void 0?s:jn,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=a?Wt(a):o||"{{",this.suffix=n?Wt(n):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=p?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":p||"",this.nestingPrefix=h?Wt(h):g||Wt("$t("),this.nestingSuffix=v?Wt(v):b||Wt(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=T||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,r){let a,o,n;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=g=>{if(g.indexOf(this.formatSeparator)<0){const T=_a(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,i,{...r,...s,interpolationkey:g}):T}const v=g.split(this.formatSeparator),b=v.shift().trim(),_=v.join(this.formatSeparator).trim();return this.format(_a(s,l,b,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...r,...s,interpolationkey:b})};this.resetRegExp();const p=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,f=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Ui(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Ui(this.escape(g)):Ui(g)}].forEach(g=>{for(n=0;a=g.regex.exec(e);){const v=a[1].trim();if(o=d(v),o===void 0)if(typeof p=="function"){const _=p(e,a,r);o=P(_)?_:""}else if(r&&Object.prototype.hasOwnProperty.call(r,v))o="";else if(f){o=a[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),o="";else!P(o)&&!this.useRawValueToEscape&&(o=pa(o));const b=g.safeValue(o);if(e=e.replace(a[0],b),f?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=a[0].length):g.regex.lastIndex=0,n++,n>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,a,o;const n=(l,d)=>{const p=this.nestingOptionsSeparator;if(l.indexOf(p)<0)return l;const f=l.split(new RegExp(`${p}[ ]*{`));let h=`{${f[1]}`;l=f[0],h=this.interpolate(h,o);const g=h.match(/'/g),v=h.match(/"/g);(g&&g.length%2===0&&!v||v.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),d&&(o={...d,...o})}catch(b){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,b),`${l}${p}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!P(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let d=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const p=r[1].split(this.formatSeparator).map(f=>f.trim());r[1]=p.shift(),l=p,d=!0}if(a=s(n.call(this,r[1].trim(),o),o),a&&r[0]===e&&!P(a))return a;P(a)||(a=pa(a)),a||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),a=""),d&&(a=l.reduce((p,f)=>this.format(p,f,i.lng,{...i,interpolationkey:r[1].trim()}),a.trim())),e=e.replace(r[0],a),this.regexp.lastIndex=0}return e}}const el=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?s.currency||(s.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?s.range||(s.range=r.trim()):r.split(";").forEach(o=>{if(o){const[n,...l]=o.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),p=n.trim();s[p]||(s[p]=d),d==="false"&&(s[p]=!1),d==="true"&&(s[p]=!0),isNaN(d)||(s[p]=parseInt(d,10))}})}return{formatName:e,formatOptions:s}},Xt=t=>{const e={};return(s,i,r)=>{let a=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(a={...a,[r.interpolationkey]:void 0});const o=i+JSON.stringify(a);let n=e[o];return n||(n=t(fi(i),r),e[o]=n),n(s)}};class tl{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Xe.create("formatter"),this.options=e,this.formats={number:Xt((s,i)=>{const r=new Intl.NumberFormat(s,{...i});return a=>r.format(a)}),currency:Xt((s,i)=>{const r=new Intl.NumberFormat(s,{...i,style:"currency"});return a=>r.format(a)}),datetime:Xt((s,i)=>{const r=new Intl.DateTimeFormat(s,{...i});return a=>r.format(a)}),relativetime:Xt((s,i)=>{const r=new Intl.RelativeTimeFormat(s,{...i});return a=>r.format(a,i.range||"day")}),list:Xt((s,i)=>{const r=new Intl.ListFormat(s,{...i});return a=>r.format(a)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=Xt(s)}format(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=s.split(this.formatSeparator);if(a.length>1&&a[0].indexOf("(")>1&&a[0].indexOf(")")<0&&a.find(n=>n.indexOf(")")>-1)){const n=a.findIndex(l=>l.indexOf(")")>-1);a[0]=[a[0],...a.splice(1,n)].join(this.formatSeparator)}return a.reduce((n,l)=>{const{formatName:d,formatOptions:p}=el(l);if(this.formats[d]){let f=n;try{const h=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},g=h.locale||h.lng||r.locale||r.lng||i;f=this.formats[d](n,g,{...p,...r,...h})}catch(h){this.logger.warn(h)}return f}else this.logger.warn(`there was no format function for ${d}`);return n},e)}}const sl=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class il extends Fi{constructor(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Xe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,s,i,r){const a={},o={},n={},l={};return e.forEach(d=>{let p=!0;s.forEach(f=>{const h=`${d}|${f}`;!i.reload&&this.store.hasResourceBundle(d,f)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,p=!1,o[h]===void 0&&(o[h]=!0),a[h]===void 0&&(a[h]=!0),l[f]===void 0&&(l[f]=!0)))}),p||(n[d]=!0)}),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const r=e.split("|"),a=r[0],o=r[1];s&&this.emit("failedLoading",a,o,s),!s&&i&&this.store.addResourceBundle(a,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const n={};this.queue.forEach(l=>{zn(l.loaded,[a],o),sl(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{n[d]||(n[d]={});const p=l.loaded[d];p.length&&p.forEach(f=>{n[d][f]===void 0&&(n[d][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",n),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:r,wait:a,callback:o});return}this.readingCalls++;const n=(d,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(d&&p&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,r+1,a*2,o)},a);return}o(d,p)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,s);d&&typeof d.then=="function"?d.then(p=>n(null,p)).catch(n):n(null,d)}catch(d){n(d)}return}return l(e,s,n)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();P(e)&&(e=this.languageUtils.toResolveHierarchy(e)),P(s)&&(s=[s]);const a=this.queueLoad(e,s,i,r);if(!a.toLoad.length)return a.pending.length||r(),null;a.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],a=i[1];this.read(r,a,"read",void 0,void 0,(o,n)=>{o&&this.logger.warn(`${s}loading namespace ${a} for language ${r} failed`,o),!o&&n&&this.logger.log(`${s}loaded namespace ${a} for language ${r}`,n),this.loaded(e,o,n)})}saveMissing(e,s,i,r,a){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:a},d=this.backend.create.bind(this.backend);if(d.length<6)try{let p;d.length===5?p=d(e,s,i,r,l):p=d(e,s,i,r),p&&typeof p.then=="function"?p.then(f=>n(null,f)).catch(n):n(null,p)}catch(p){n(p)}else d(e,s,i,r,n,l)}!e||!e[0]||this.store.addResource(e[0],s,i,r)}}}const ya=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),P(t[1])&&(e.defaultValue=t[1]),P(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),$a=t=>(P(t.ns)&&(t.ns=[t.ns]),P(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),P(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Xs=()=>{},rl=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class Os extends Fi{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=$a(e),this.services={},this.logger=Xe,this.modules={external:[]},rl(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(P(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const r=ya();this.options={...r,...this.options,...$a(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const a=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?Xe.init(a(this.modules.logger),this.options):Xe.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=tl);const f=new ba(this.options);this.store=new ma(this.options.resources,this.options);const h=this.services;h.logger=Xe,h.resourceStore=this.store,h.languageUtils=f,h.pluralResolver=new Jn(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=a(p),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Zn(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new il(a(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),_=1;_<v;_++)b[_-1]=arguments[_];e.emit(g,...b)}),this.modules.languageDetector&&(h.languageDetector=a(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=a(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new mi(this.services,this.options),this.translator.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),_=1;_<v;_++)b[_-1]=arguments[_];e.emit(g,...b)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Xs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=function(){return e.store[p](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=function(){return e.store[p](...arguments),e}});const l=bs(),d=()=>{const p=(f,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(f,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xs;const r=P(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],o=n=>{if(!n||n==="cimode")return;this.services.languageUtils.toResolveHierarchy(n).forEach(d=>{d!=="cimode"&&a.indexOf(d)<0&&a.push(d)})};r?o(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(n=>o(n)),this.services.backendConnector.load(a,this.options.ns,n=>{!n&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(n)})}else i(null)}reloadResources(e,s,i){const r=bs();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=Xs),this.services.backendConnector.reload(e,s,a=>{r.resolve(),i(a)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&no.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const r=bs();this.emit("languageChanging",e);const a=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,d)=>{d?(a(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},n=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const d=P(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);d&&(this.language||a(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,p=>{o(p,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),r}getFixedT(e,s,i){var r=this;const a=function(o,n){let l;if(typeof n!="object"){for(var d=arguments.length,p=new Array(d>2?d-2:0),f=2;f<d;f++)p[f-2]=arguments[f];l=r.options.overloadTranslationOptionHandler([o,n].concat(p))}else l={...n};l.lng=l.lng||a.lng,l.lngs=l.lngs||a.lngs,l.ns=l.ns||a.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||a.keyPrefix);const h=r.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(o)?g=o.map(v=>`${l.keyPrefix}${h}${v}`):g=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,r.t(g,l)};return P(e)?a.lng=e:a.lngs=e,a.ns=s,a.keyPrefix=i,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(n,l)=>{const d=this.services.backendConnector.state[`${n}|${l}`];return d===-1||d===0||d===2};if(s.precheck){const n=s.precheck(this,o);if(n!==void 0)return n}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(a,e)))}loadNamespaces(e,s){const i=bs();return this.options.ns?(P(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),s&&s(r)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=bs();P(e)&&(e=[e]);const r=this.options.preload||[],a=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return a.length?(this.options.preload=r.concat(a),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new ba(ya());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Os(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},a=new Os(r);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(n=>{a[n]=this[n]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},i&&(a.store=new ma(this.store.data,r),a.services.resourceStore=a.store),a.translator=new mi(a.services,r),a.translator.on("*",function(n){for(var l=arguments.length,d=new Array(l>1?l-1:0),p=1;p<l;p++)d[p-1]=arguments[p];a.emit(n,...d)}),a.init(r,s),a.translator.options=r,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ee=Os.createInstance();Ee.createInstance=Os.createInstance;Ee.createInstance;Ee.dir;Ee.init;Ee.loadResources;Ee.reloadResources;Ee.use;Ee.changeLanguage;Ee.getFixedT;Ee.t;Ee.exists;Ee.setDefaultNamespace;Ee.hasLoadedNamespace;Ee.loadNamespaces;Ee.loadLanguages;const lo=["__proto__","constructor","prototype"];function co(t){return!(typeof t!="string"||t.length===0||t.length>128||lo.indexOf(t)>-1||t.indexOf("..")>-1||t.indexOf("\\")>-1||/[?#%\s@]/.test(t)||/[\x00-\x1F\x7F]/.test(t))}function ho(t){return!(!co(t)||t.indexOf("/")>-1)}function al(t){return co(t)}const ol={lng:ho,ns:al};function Js(t){return typeof t!="string"?t:t.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function nl(t){if(typeof t!="string"||t.length===0)return t;try{const e=new URL(t);return e.username||e.password?(e.username="",e.password="",e.toString()):t}catch{return t.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function po(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function ll(t){return!!t&&typeof t.then=="function"}function cl(t){return ll(t)?t:Promise.resolve(t)}const dl=/\{\{(.+?)\}\}/g;function wa(t,e){let s=!1;const i=t.replace(dl,(r,a)=>{const o=a.trim();if(lo.indexOf(o)>-1)return r;const n=e[o];if(n==null)return r;const l=ol[o]||ho,d=String(n).split("+");for(const p of d)if(!l(p))return s=!0,r;return d.join("+")});return s?null:i}const Rt=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let vi;typeof fetch=="function"?vi=fetch:Rt&&typeof Rt.fetch=="function"&&(vi=Rt.fetch);const ka=po()&&Rt?Rt.XMLHttpRequest:void 0,hl=typeof ActiveXObject=="function"&&Rt?Rt.ActiveXObject:void 0,uo=["__proto__","constructor","prototype"],tr=(t,e)=>{if(e&&typeof e=="object"){let s="";for(const i of Object.keys(e))uo.indexOf(i)>-1||(s+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!s)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+s.slice(1)}return t},Sa=(t,e,s,i)=>{const r=a=>{if(!a.ok)return s(a.statusText||"Error",{status:a.status});a.text().then(o=>{s(null,{status:a.status,data:o})}).catch(s)};if(i){const a=i(t,e);if(a instanceof Promise){a.then(r).catch(s);return}}typeof fetch=="function"?fetch(t,e).then(r).catch(s):vi(t,e).then(r).catch(s)},pl=(t,e,s,i)=>{t.queryStringParams&&(e=tr(e,t.queryStringParams));const r={...typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),s&&(r["Content-Type"]="application/json");const a=typeof t.requestOptions=="function"?t.requestOptions(s):t.requestOptions,o={method:s?"POST":"GET",body:s?t.stringify(s):void 0,headers:r,...t._omitFetchOptions?{}:a},n=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Sa(e,o,i,n)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(a).forEach(d=>{delete o[d]}),Sa(e,o,i,n),t._omitFetchOptions=!0}catch(d){i(d)}}},ul=(t,e,s,i)=>{s&&typeof s=="object"&&(s=tr("",s).slice(1)),t.queryStringParams&&(e=tr(e,t.queryStringParams));try{const r=ka?new ka:new hl("MSXML2.XMLHTTP.3.0");r.open(s?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,s&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(const o of Object.keys(a))uo.indexOf(o)>-1||r.setRequestHeader(o,a[o]);r.onreadystatechange=()=>{r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(s)}catch(r){console&&console.log(r)}},fl=(t,e,s,i)=>{if(typeof s=="function"&&(i=s,s=void 0),i=i||(()=>{}),vi&&e.indexOf("file:")!==0)return pl(t,e,s,i);if(po()||typeof ActiveXObject=="function")return ul(t,e,s,i);i(new Error("No fetch and no xhr implementation found!"))},gl=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:t=>JSON.parse(t),stringify:JSON.stringify,parsePayload:(t,e,s)=>({[e]:s||""}),parseLoadPayload:(t,e)=>{},request:fl,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var fo=class{constructor(t,e={},s={}){this.services=t,this.options=e,this.allOptions=s,this.type="backend",this.init(t,e,s)}init(t,e={},s={}){if(this.services=t,this.options={...gl(),...this.options||{},...e},this.allOptions=s,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(t,e,s){this._readAny(t,t,e,e,s)}read(t,e,s){this._readAny([t],t,[e],e,s)}_readAny(t,e,s,i,r){let a=this.options.loadPath;typeof this.options.loadPath=="function"&&(a=this.options.loadPath(t,s)),a=cl(a),a.then(o=>{if(!o)return r(null,{});const n=wa(o,{lng:t.join("+"),ns:s.join("+")});if(n==null){const l=t.map(Js).join(", "),d=s.map(Js).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+d+"]"),!1)}this.loadUrl(n,r,e,i)})}loadUrl(t,e,s,i){const r=typeof s=="string"?[s]:s,a=typeof i=="string"?[i]:i,o=this.options.parseLoadPayload(r,a),n=Js(nl(t));this.options.request(this.options,t,o,(l,d)=>{if(d&&(d.status>=500&&d.status<600||!d.status))return e("failed loading "+n+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return e("failed loading "+n+"; status code: "+d.status,!1);if(!d&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(g=>h.indexOf(g)>-1))return e("failed loading "+n+": "+Js(l.message),!0)}if(l)return e(l,!1);let p,f;try{typeof d.data=="string"?p=this.options.parse(d.data,s,i):p=d.data}catch{f="failed parsing "+n+" to json"}if(f)return e(f,!1);e(null,p)})}create(t,e,s,i,r){if(!this.options.addPath)return;typeof t=="string"&&(t=[t]);const a=this.options.parsePayload(e,s,i);let o=0;const n=[],l=[];t.forEach(d=>{let p=this.options.addPath;typeof this.options.addPath=="function"&&(p=this.options.addPath(d,e));const f=wa(p,{lng:d,ns:e});if(f==null){o+=1,r&&o===t.length&&r(n,l);return}this.options.request(this.options,f,a,(h,g)=>{o+=1,n.push(h),l.push(g),o===t.length&&typeof r=="function"&&r(n,l)})})}reload(){const{backendConnector:t,languageUtils:e,logger:s}=this.services,i=t.language;if(i&&i.toLowerCase()==="cimode")return;const r=[],a=o=>{e.toResolveHierarchy(o).forEach(n=>{r.indexOf(n)<0&&r.push(n)})};a(i),this.allOptions.preload&&this.allOptions.preload.forEach(o=>a(o)),r.forEach(o=>{this.allOptions.ns.forEach(n=>{t.read(o,n,"read",null,null,(l,d)=>{l&&s.warn(`loading namespace ${n} for language ${o} failed`,l),!l&&d&&s.log(`loaded namespace ${n} for language ${o}`,d),t.loaded(`${o}|${n}`,l,d)})})})}};fo.type="backend";const ml="https://i18n-fastly.ultrafast.io";function vl(t){const e=t.cdnUrl??ml;let s=null;const i=new Set,r=()=>{for(const p of i)p()},a=p=>(i.add(p),()=>i.delete(p));async function o(p="en"){return s?(s.language!==p&&(await s.changeLanguage(p),r()),{i18n:s,isNew:!1}):(s=Ee.createInstance(),await s.use(fo).init({lng:p,fallbackLng:"en",ns:[t.namespace],defaultNS:t.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${t.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(f,h){var b;const g=JSON.parse(f),v=Array.isArray(h)?h[0]:h;return v&&((b=g[v])!=null&&b.__without_namespace)?g[v].__without_namespace:g}}}),s.on("languageChanged",r),s.on("loaded",r),r(),{i18n:s,isNew:!0})}const n=()=>s,l=(p,f,h)=>!s||!s.isInitialized?Zi(p,f,h):typeof f=="string"?s.t(p,f,h??{}):s.t(p,f??{});class d{constructor(f){this._unsubscribe=null,this._host=f,f.addController(this)}hostConnected(){this._unsubscribe=a(()=>this._host.requestUpdate())}hostDisconnected(){var f;(f=this._unsubscribe)==null||f.call(this),this._unsubscribe=null}}return{initI18n:o,getInstance:n,onChange:a,t:l,fallbackT:Zi,I18nController:d}}function bl(t){const{lsKey:e,namespace:s,gridUuid:i,prodUrl:r,logPrefix:a}=t,o=typeof localStorage<"u"&&localStorage.getItem(e)==="true",n={};let l=null;const d=2e3;o&&console.log(`%c${a} TranslationMissingKeysHelper enabled`,"font-weight:600;");const p=()=>{console.group(`${a} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...n}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${r}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(n).map(([f,{value:h,ns:g}])=>({key:g&&f.startsWith(`${g}:`)?f.slice(g.length+1):f,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(f,h="",g=s){o&&(n[`${g}:${f}`]={value:h,ns:g},l&&clearTimeout(l),l=setTimeout(p,d))}}}const go="a656ff82-0270-46dc-8de8-c734318d841d",xl="https://i18n-fastly.ultrafast.io",_l="https://neo.wordplex.io",mo="asset-picker",yl=vl({gridUuid:go,namespace:mo,cdnUrl:xl}),$l=yl.initI18n,wl=bl({lsKey:"apTranslationsMissingKeysEnabled",namespace:mo,gridUuid:go,prodUrl:_l,logPrefix:"[asset-picker]"});class kl{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Sl(t){return"extension"in t&&!("path"in t)}class Cl{constructor(e,s,i){this.onLimitReached=i,this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_wouldExceedMax(e){var r,a;const s=(r=this.store.getState().config)==null?void 0:r.maxSelections,i=!!s&&e>s;return i&&((a=this.onLimitReached)==null||a.call(this,s)),i}_isLockedOut(e){const s=this.store.getState(),i=s.config,r=i==null?void 0:i.maxSelections;return(i==null?void 0:i.maxSelectionsBehavior)!=="lock"||!r||s.selectedAssets.has(e)?!1:s.selectedAssets.size+(this._folderSelectionEnabled?s.selectedFolders.size:0)>=r}_applyRangeSelection(e,s,i,r){const a=this.store.getState(),o=this._getCombinedList();for(let n=e;n<=s;n++){const l=o[n];l&&(Sl(l)?a.disabledAssetIds.has(l.uuid)||i.set(l.uuid,l):a.disabledFolderIds.has(l.uuid)||r.set(l.uuid,l))}}handleSelect(e,s,i){var n,l,d;const r=this.store.getState();if(r.disabledAssetIds.has(e.uuid))return;if(this._isLockedOut(e.uuid)){(l=this.onLimitReached)==null||l.call(this,((n=r.config)==null?void 0:n.maxSelections)??0);return}const a=new Map(r.selectedAssets);if(!(((d=r.config)==null?void 0:d.multiSelect)??!0)){a.clear(),a.set(e.uuid,e),this.store.setState({selectedAssets:a,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const p=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),h=new Map(r.selectedFolders);if(this._applyRangeSelection(p,f,a,h),this._wouldExceedMax(a.size+h.size))return;this.store.setState({selectedAssets:a,selectedFolders:h})}else{const p=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),h=r.assets;for(let g=p;g<=f;g++)h[g]&&!r.disabledAssetIds.has(h[g].uuid)&&a.set(h[g].uuid,h[g]);if(this._wouldExceedMax(a.size))return;this.store.setState({selectedAssets:a})}else if(i.metaKey||i.ctrlKey){a.has(e.uuid)?a.delete(e.uuid):a.set(e.uuid,e);const p=a.size+(this._folderSelectionEnabled?r.selectedFolders.size:0);if(this._wouldExceedMax(p))return;this.store.setState({selectedAssets:a})}else a.clear(),a.set(e.uuid,e),this.store.setState({selectedAssets:a,selectedFolders:new Map});this.lastClickedIndex=s}selectAsset(e,s){var n;const i=this.store.getState();if(i.disabledAssetIds.has(e.uuid))return!1;if(i.selectedAssets.has(e.uuid))return!0;if(!(((n=i.config)==null?void 0:n.multiSelect)??!0)){const l=new Map([[e.uuid,e]]);return this.store.setState({selectedAssets:l,selectedFolders:new Map}),s!==void 0&&(this.lastClickedIndex=s),!0}const a=new Map(i.selectedAssets);a.set(e.uuid,e);const o=a.size+(this._folderSelectionEnabled?i.selectedFolders.size:0);return this._wouldExceedMax(o)?!1:(this.store.setState({selectedAssets:a}),s!==void 0&&(this.lastClickedIndex=s),!0)}handleFolderSelect(e,s,i){var n;if(!this._folderSelectionEnabled)return;const r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;const a=new Map(r.selectedFolders);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){a.clear(),a.set(e.uuid,e),this.store.setState({selectedFolders:a,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const l=Math.min(this.lastClickedIndex,s),d=Math.max(this.lastClickedIndex,s),p=new Map(r.selectedAssets);if(this._applyRangeSelection(l,d,p,a),this._wouldExceedMax(p.size+a.size))return;this.store.setState({selectedAssets:p,selectedFolders:a})}else if(i.metaKey||i.ctrlKey){a.has(e.uuid)?a.delete(e.uuid):a.set(e.uuid,e);const l=a.size+r.selectedAssets.size;if(this._wouldExceedMax(l))return;this.store.setState({selectedFolders:a})}else a.clear(),a.set(e.uuid,e),this.store.setState({selectedFolders:a,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,r=this._folderSelectionEnabled?s.selectedFolders.size:0,a=e.filter(d=>!s.disabledAssetIds.has(d.uuid)),o=new Map,n=i?Math.max(0,Math.min(a.length,i-r)):a.length;for(let d=0;d<n;d++)o.set(a[d].uuid,a[d]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,r=e.filter(l=>!s.disabledFolderIds.has(l.uuid)),a=new Map,o=i?Math.max(0,Math.min(r.length,i-s.selectedAssets.size)):r.length;for(let l=0;l<o;l++)a.set(r[l].uuid,r[l]);this.store.setState({selectedFolders:a})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}const Ca=5,Jt=40,Aa=15;class gr{constructor(e,s){this.host=e,this.options=s,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarquee=new Set,this.dragging=!1,this.scrollRAF=null,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null,this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.container!==e&&(this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown))}detach(){var e,s;(e=this.container)==null||e.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),(s=this.container)==null||s.classList.remove("marqueeing"),this.container=void 0,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null}isInteractiveTarget(e){return this.options.isInteractiveTarget?this.options.isInteractiveTarget(e):e.composedPath().some(s=>s instanceof HTMLElement?s instanceof HTMLButtonElement||s instanceof HTMLInputElement||s instanceof HTMLAnchorElement?!0:s.hasAttribute("data-uuid")||s.tagName==="TR"||s.tagName==="TABLE":!1)}onMouseDown(e){if(e.button!==0||!this.container||this.isInteractiveTarget(e))return;const s=this.container.getBoundingClientRect();this.startX=e.clientX-s.left+this.container.scrollLeft,this.startY=e.clientY-s.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this.preMarquee=new Set(this.options.getSelection(e)),this.dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this.dragging){const i=Math.abs(e.clientX-this.startClientX),r=Math.abs(e.clientY-this.startClientY);if(i<Ca&&r<Ca)return;this.dragging=!0,this.isActive=!0,this.container.classList.add("marqueeing"),document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.cacheCards()}this.lastMouseEvent=e,this.updateRect(e),this.maybeAutoScroll(e)}}updateRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,r=e.clientY-s.top+this.container.scrollTop;let a=Math.min(this.startX,i),o=Math.min(this.startY,r),n=Math.abs(i-this.startX),l=Math.abs(r-this.startY);a<0&&(n+=a,a=0),o<0&&(l+=o,o=0),a+n>this.container.scrollWidth&&(n=this.container.scrollWidth-a),o+l>this.container.scrollHeight&&(l=this.container.scrollHeight-o),this.rect={x:a,y:o,width:n,height:l},this.applyBoxStyle(),this.selectIntersecting()}maybeAutoScroll(e){if(!this.container||this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top<Jt||s.bottom-e.clientY<Jt;i&&this.scrollRAF==null?this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):i||this.stopAutoScroll()}autoScrollTick(){if(this.scrollRAF=null,!this.container||!this.dragging||!this.lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this.lastMouseEvent,i=s.clientY-e.top,r=e.bottom-s.clientY;let a=0;i<Jt?a=-Aa*(1-i/Jt):r<Jt&&(a=Aa*(1-r/Jt)),a!==0&&(this.container.scrollTop+=a,this.updateRect(s),this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this.scrollRAF!=null&&(cancelAnimationFrame(this.scrollRAF),this.scrollRAF=null)}onMouseUp(){var e;document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this.lastMouseEvent=null,this.dragging&&(this.dragging=!1,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.cardRects=[],this.appliedSelection=null,(e=this.container)==null||e.classList.remove("marqueeing"),this.host.requestUpdate())}cacheCards(){if(!this.container)return;const e=this.container.getBoundingClientRect(),s=this.container.scrollLeft,i=this.container.scrollTop;this.cardRects=[];for(const{uuid:r,el:a}of this.options.queryCards(this.container)){if(!r)continue;const o=a.getBoundingClientRect();this.cardRects.push({uuid:r,x:o.left-e.left+s,y:o.top-e.top+i,w:o.width,h:o.height})}}applyBoxStyle(){var s;const e=(s=this.container)==null?void 0:s.querySelector(".marquee-box");if(!e){this.host.requestUpdate();return}e.style.left=`${this.rect.x}px`,e.style.top=`${this.rect.y}px`,e.style.width=`${this.rect.width}px`,e.style.height=`${this.rect.height}px`}static sameSet(e,s){if(!s||e.size!==s.size)return!1;for(const i of e)if(!s.has(i))return!1;return!0}selectIntersecting(){const e=new Set(this.preMarquee),{x:s,y:i,width:r,height:a}=this.rect;for(const o of this.cardRects)s<o.x+o.w&&s+r>o.x&&i<o.y+o.h&&i+a>o.y&&e.add(o.uuid);gr.sameSet(e,this.appliedSelection)||(this.appliedSelection=e,this.options.setSelection(e))}}class Al{constructor(e,s){this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s,i="200px"){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(r=>{var a;(a=r[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:i}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const El="https://api.filerobot.com",Fl=3e4,Ol=2,Tl=400;function Ll(t){return t===404||t===408||t===429||t>=500}const Pl=t=>new Promise(e=>setTimeout(e,t));function vo(t,e){return`${(e||El).replace(/\/+$/,"")}/${t}`}async function Ml(t,e,s,i={}){const r=`${vo(t,s)}/key/${encodeURIComponent(e)}`,a=i.retries??Ol,o=i.retryDelayMs??Tl;let n=new Error("SASS key exchange failed");for(let l=0;l<=a;l++){l>0&&await Pl(o*l);const d=new AbortController,p=setTimeout(()=>d.abort(),Fl);try{const f=await fetch(r,{signal:d.signal,cache:"no-store"});if(clearTimeout(p),!f.ok){if(n=new Error(`SASS key exchange failed (HTTP ${f.status})`),Ll(f.status)&&l<a)continue;throw n}const h=await f.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(f){if(clearTimeout(p),f instanceof DOMException&&f.name==="AbortError")throw new Error("SASS key exchange timed out");if(f instanceof TypeError&&l<a){n=f;continue}throw f}}throw n}function Ea(t,e){const s={};switch(t.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");s["X-Filerobot-Key"]=e;break;case"sass-key":s["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(s["X-Filerobot-Airbox-Puid"]=t.airboxPuid),s}function Il(t){return t.mode==="securityTemplate"||t.mode==="sassKey"}function Dl(t){return Il(t)?t.mode==="securityTemplate"?{mode:"security-template",container:t.projectToken,securityTemplateId:t.securityTemplateKey,airboxPuid:t.airboxPuid}:{mode:"sass-key",container:t.projectToken,sassKey:t.sassKey,airboxPuid:t.airboxPuid}:t}async function Fa(t,e){const s=Dl(t),i=vo(s.container,e);if(s.mode==="security-template"){const r=await Ml(s.container,s.securityTemplateId,e);return{apiBase:i,headers:Ea(s,r),sassKey:r}}return{apiBase:i,headers:Ea(s)}}const Rl=3e4;class bo extends Error{constructor(e,s,i){super(e),this.status=s,this.code=i,this.name="DamApiError"}}class mr{constructor(e,s,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=s,this.apiDomain=i}static async create(e,s){const i=await Fa(e,s);return new mr(i,e,s)}get(e,s){return this.send(this.buildUrl(e,s),{method:"GET"})}post(e,s){return this.sendJson("POST",e,s)}put(e,s){return this.sendJson("PUT",e,s)}delete(e,s){return this.sendJson("DELETE",e,s)}query(e,s,i){return this.send(this.buildUrl(e,s),{method:"QUERY",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}buildUrl(e,s){const i=new URL(`${this.baseUrl}${e}`);if(s)for(const[r,a]of Object.entries(s))a!=null&&i.searchParams.set(r,Array.isArray(a)?a.join(","):String(a));return i}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,s,i){return this.send(new URL(`${this.baseUrl}${s}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,s,i=!1){var o;const r=new AbortController,a=setTimeout(()=>r.abort(),Rl);try{const n=await fetch(e.toString(),{...s,headers:{...this.headers,...s.headers},signal:r.signal});if(clearTimeout(a),n.status===401&&!i&&((o=this.auth)==null?void 0:o.mode)==="security-template"){const p=await Fa(this.auth,this.apiDomain);return this.headers=p.headers,this.send(e,s,!0)}if(!n.ok){let p=`API error: ${n.status} ${n.statusText}`,f;try{const h=await n.json();h!=null&&h.msg&&(p=`API error: ${n.status} - ${h.msg}`),typeof(h==null?void 0:h.code)=="string"&&(f=h.code)}catch{}throw new bo(p,n.status,f)}if(n.status===204)return;const l=await n.text();if(!l)return;const d=JSON.parse(l);if((d==null?void 0:d.status)==="error")throw new Error(`API error: ${d.msg||"Unknown error"}`);return d}catch(n){throw clearTimeout(a),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}}function xo(t){const e=t.path??t.name,s=e.replace(/\/[^/]*$/,"")||"/";return{uuid:t.uuid,name:t.name.split("/").pop()||t.name,path:e,parentPath:s,createdAt:t.created_at,modifiedAt:t.modified_at}}async function Oa(t,e={}){const s=e.sortBy??"name",i=e.sortDirection??"asc";return((await t.get("/folders",{folder:e.folderPath??"/",recursive:e.recursive??0,limit:e.limit??1e3,offset:e.offset??0,q:e.q,sort:`${s}:${i}`})).folders??[]).map(xo)}async function _o(t,e,s){const i=s.replace(/\/+$/,""),r=i?`${i}/${e}`:`/${e}`,a=await t.post("/folders",{name:r});if(a.status!=="success"||!a.folder)throw new Error(a.msg||"Failed to create folder");return xo(a.folder)}async function zl(t){return(await t.get("/labels")).labels??[]}function vr(t,e){try{const s=new URL(t);return s.searchParams.set("p",e),s.toString()}catch{return t}}function Nl(t){return Array.isArray(t)?t.map(e=>typeof e=="string"?{name:e}:e&&typeof e.name=="string"?{name:e.name,desc:e.desc}:null).filter(e=>e!==null):[]}async function Ta(t){var i,r,a;const e=await t.get("/settings"),s=(e==null?void 0:e.presets)??((i=e==null?void 0:e.cloudimg)==null?void 0:i.presets)??((a=(r=e==null?void 0:e.settings)==null?void 0:r.cloudimg)==null?void 0:a.presets)??void 0;return Nl(s)}const Ul=["cdn_permalink"],yo={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};function $o(t){let e=t.fields??Ul;t.permalinksEnabled||(e=e.filter(o=>o!=="cdn_permalink"));const s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",r=t.sort_direction??"desc";s.sort=`${yo[i]||i}:${r}`,t.folder&&(s.folder=t.folder);const a=[];return t.search&&!t.with_ai&&a.push(t.search),t.q&&a.push(t.q),a.length>0&&(s.q=a.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}function bt(t,e){return t.get("/files",$o(e))}function jl(t,e){const{foldersUuids:s,...i}=e;return t.query("/files",$o(i),{folders_uuids:s})}function Zs(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.get("/files/stats",s)}function Vl(t,e){return t.query("/folders/stats",e.q?{q:e.q}:void 0,{folders_uuids:e.foldersUuids})}function Bl(t,e){const s={};return e.folder&&e.folder!=="/"&&(s.folder=e.folder),e.q&&(s.q=e.q),t.get("/folders/stats",s)}function La(t,e={}){const s={recursive:e.recursive??0,folder:e.folderPath??"/",limit:e.limit??1e3,offset:e.offset??0};e.q&&(s.q=e.q);const i=e.sort_by??"created_at",r=e.sort_direction??"asc";return s.sort=`${yo[i]||i}:${r}`,t.get("/folders",s)}async function Kl(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}const w="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",ql='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',rt=`data:image/svg+xml,${encodeURIComponent(ql)}`,sr={_default:w+"GENERIC.svg?vh=9a518a",png:w+"PNG.svg?vh=96cd9a",jpg:w+"JPG.svg?vh=06e819",jpg2:w+"JPG2.svg?vh=f0eb7f",jpeg:w+"JPEG.svg?vh=6a65e9",gif:w+"GIF.svg?vh=c3c2c3",bmp:w+"BMP.svg?vh=d2243a",webp:w+"WEBP.svg?vh=fedd74",svg:w+"SVG.svg?vh=a15e46",tiff:w+"TIFF.svg?vh=1f30c3",tif:w+"TIF.svg?vh=b383c9",heic:w+"HEIC.svg?vh=84adfe",avif:w+"AVIF.svg?vh=536b30",ico:w+"ICO.svg?vh=79063d",psd:w+"PSD.svg?vh=be6140",psb:w+"PSB.svg?vh=678646",ai:w+"AI.svg?vh=84b254",dwg:w+"DWG.svg?vh=971fb3",mp4:w+"MP4.svg?vh=42f175",webm:w+"WEBM.svg?vh=26a84a",avi:w+"AVI.svg?vh=d22ba8",mpeg:w+"MPEG.svg?vh=ba93bb",ogv:w+"OGV.svg?vh=74d453","3gp":w+"3GP.svg?vh=f0d388","3g2":w+"3G2.svg?vh=04c652",swf:w+"SWF.svg?vh=3955e2",fla:w+"FLA.svg?vh=daf585",m3u8:w+"M3U8.svg?vh=7d5e62",mp3:w+"MP3.svg?vh=66bbef",wav:w+"WAV.svg?vh=d7a7d5",aac:w+"AAC.svg?vh=07f3f9",oga:w+"OGA.svg?vh=a5c622",opus:w+"OPUS.svg?vh=9548b1",weba:w+"WEBA.svg?vh=4dcf70",mid:w+"MID.svg?vh=3f0e29",midi:w+"MIDI.svg?vh=9fedec",cda:w+"CDA.svg?vh=85b83b",pdf:w+"PDF.svg?vh=18c5f7",doc:w+"DOC.svg?vh=d1b47c",docx:w+"DOCX.svg?vh=1eb6b0",txt:w+"TXT.svg?vh=307979",rtf:w+"RTF.svg?vh=978c5f",xls:w+"XLS.svg?vh=13b5f7",xlsx:w+"XLSX.svg?vh=79d64a",ppt:w+"PPT.svg?vh=4ee29b",pptx:w+"PPTX.svg?vh=8b1568",csv:w+"CSV.svg?vh=4add78",odt:w+"ODT.svg?vh=940781",ods:w+"ODS.svg?vh=9fbe9a",odp:w+"ODP.svg?vh=bf892d",dbf:w+"DBF.svg?vh=457bd4",vsd:w+"VSD.svg?vh=8a9ccb",abw:w+"ABW.svg?vh=313dc7",epub:w+"EPUB.svg?vh=15263d",azw:w+"AZW.svg?vh=a018b1",ics:w+"ICS.svg?vh=909f63",ogx:w+"OGX.svg?vh=f694d2",zip:w+"ZIP.svg?vh=84f98b",rar:w+"RAR.svg?vh=1d6423","7z":w+"7Z.svg?vh=e007e5",tar:w+"TAR.svg?vh=603aed",gz:w+"GZ.svg?vh=de13f7",bz:w+"BZ.svg?vh=0374ff",bz2:w+"BZ2.svg?vh=e14294",arc:w+"ARC.svg?vh=942fad",jar:w+"JAR.svg?vh=149796",mpkg:w+"MPKG.svg?vh=dea655",ttf:w+"TTF.svg?vh=d2e2c1",otf:w+"OTF.svg?vh=c904fd",woff:w+"WOFF.svg?vh=4b8177",woff2:w+"WOFF2.svg?vh=b532d3",eot:w+"EOT.svg?vh=a54980",js:w+"JS.svg?vh=524691",mjs:w+"MJS.svg?vh=d57921",ts:w+"TS.svg?vh=9af3ae",css:w+"CSS.svg?vh=287863",html:w+"HTML.svg?vh=fa7a87",htm:w+"HTM.svg?vh=21323d",xhtml:w+"XHTML.svg?vh=e6d6a9",xul:w+"XUL.svg?vh=6c9c71",json:w+"JSON.svg?vh=104c9e",jsonld:w+"JSONLD.svg?vh=f30c0f",xml:w+"XML.svg?vh=7f7194",php:w+"PHP.svg?vh=503e36",sh:w+"SH.svg?vh=3b820e",csh:w+"CSH.svg?vh=08c0cc",exe:w+"EXE.svg?vh=ccca53",iso:w+"ISO.svg?vh=064b8f",bin:w+"BIN.svg?vh=1e9618",glb:rt,gltf:rt,obj:rt,fbx:rt,stl:rt,usdz:rt,ply:rt,"3ds":rt,dae:rt};function rs(){return sr._default}function qs(t){const e=(t.split(".").pop()||"").toLowerCase();return sr[e]||sr._default}function Hl(t,e){let s;const i=((...r)=>{clearTimeout(s),s=setTimeout(()=>t(...r),e)});return i.cancel=()=>clearTimeout(s),i}async function Gl(t){return t.get("/collections")}async function Yl(t,e){return t.get(`/collections/${e}/folders`)}function wo(t){return t.filter(e=>!!e.name).map(e=>({...e,children:wo(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function Ql(t){return((await t.get("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,r)=>i.label.localeCompare(r.label))}async function Wl(t){return await t.get("/public/settings")}const Xl=3e4;async function Jl(t,e){const s=`${e}/key/${t.securityTemplateKey}`,i=new AbortController,r=setTimeout(()=>i.abort(),Xl);try{const a=await fetch(s,{headers:{"X-Filerobot-Key":t.securityTemplateKey},signal:i.signal});if(clearTimeout(r),!a.ok){let n=`API error: ${a.status} ${a.statusText}`;try{const l=await a.json();l.msg&&(n=`API error: ${a.status} - ${l.msg}`)}catch{}throw new Error(n)}const o=await a.json();if(o.status==="error")throw new Error(`API error: ${o.msg||"Unknown error"}`);return{key:o.key,permissions:o.permissions??[],listScope:o.list_scope??[],uploadScope:o.upload_scope??[]}}catch(a){throw clearTimeout(r),a instanceof DOMException&&a.name==="AbortError"?new Error("API request timed out"):a}}function Zl(t,e){return t?t.includes(e):!1}function ko(t){const e=t.trim().replace(/\/?\*+$/,"").replace(/\/+$/,"");return e?e.startsWith("/")?e:`/${e}`:"/"}function ec(t){const e=t.replace(/\/+$/,"");return e?e.startsWith("/")?e:`/${e}`:"/"}function So(t,e){const s=ec(t);return e.some(i=>{const r=ko(i);return r==="/"||s===r||s.startsWith(`${r}/`)})}function tc(t,e){if(!(e!=null&&e.length)||So(t,e))return t;const s=ko(e[0]);return s==="/"?"/":`${s}/`}const sc={FOLDER_CREATE:"DIR_CREATE"};function ic(t){var r,a;const e=(r=t.info)==null?void 0:r.playlists;if(!(e!=null&&e.length))return null;const s=(a=e[0])==null?void 0:a.playlists;return s!=null&&s.length&&s[0]||null}function Tt(t){return(t.type??"").startsWith("image")}function ji(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Vi(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const rc={excellent:90,good:75,fair:60},ac=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],oc=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],nc=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],lc={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},cc=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),dc=new Set([...cc,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function zt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function Co(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return dc.has(e)}function Oi(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const hc=new Set(["png","svg","webp","gif","avif"]);function br(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return hc.has(e)}const pc=new Set(["svg","svg+xml","png","pdf"]);function Ao(t){return pc.has(Oi(t).toLowerCase())}let ir=null;function uc(t){ir=t??null}function qe(t,e){if(!t||!ir)return t;try{return ir(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function Eo(t,e){var i,r;const s=((i=t.transformation)==null?void 0:i.url.cdn)??((r=t.url)==null?void 0:r.cdn)??"";return s?vr(s,e):null}function fc(t,e){const s=t.info,i=(s==null?void 0:s.image_thumbnail)||(s==null?void 0:s.thumbnail)||(s==null?void 0:s.preview)||"";return i?vr(i,e):Eo(t,e)}function bi(t,e){var r;if(e&&e!=="original"){const a=fc(t,e);if(a)return qe(a,{source:"asset",asset:t})}const s=t.info,i=(s==null?void 0:s.video_thumbnail)||(s==null?void 0:s.image_thumbnail)||(s==null?void 0:s.thumbnail)||(s==null?void 0:s.preview)||((r=t.url)==null?void 0:r.cdn)||"";return qe(as(i),{source:"asset",asset:t})}function Fo(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?qe(as(s),{source:"video",asset:t}):""}function xr(t){var s,i;let e=as(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),qe(ct(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function ct(t,e){try{const s=new URL(t);for(const[i,r]of Object.entries(e))s.searchParams.set(i,r);return s.toString()}catch{return t}}const Pa=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\/(?:v\d+\/)?/i;function as(t,e){if(!t)return"";const s=r=>r.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(Pa);if(i){const r=i[2],a=t.replace(Pa,`$1assets.filerobot.com/${r}/`);return s(a)}if(e)try{const r=new URL(t);return s(`https://assets.filerobot.com/${e}${r.pathname}${r.search}`)}catch{}return t}function Oo(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=as(s);const r=zt(t.file_type),a=String(window.devicePixelRatio||1);let o;return r==="video"?o=ct(i,{w:e,dpr:a,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||Oi(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),o=ct(i,{w:e,dpr:a,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):o=ct(i,{w:e,dpr:a}),qe(o,{source:"folder"})}function gc(t,e){const s={};return t.format&&(s.force_format=lc[t.format]),t.quality&&t.format!=="png"&&(s.q=String(rc[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&((e!=null&&e.isMultiSelect||!(e!=null&&e.exactSize))&&(s.org_if_sml="1"),e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}const mc=["free","square","6:1","5:1","4:1","3:1","16:6","21:9","2:1","16:9","3:2","7:5","4:3","5:4","9:16","3:4","2:3","4:5","1:2"],vc="free",bc={x:0,y:0,width:1,height:1},xc=.001,Zt=(t,e)=>Math.abs(t-e)<xc;function Ma(t){const e=t.cropRect;return Zt(e.x,0)&&Zt(e.y,0)&&Zt(e.width,1)&&Zt(e.height,1)&&t.quarterTurns%4===0&&Zt(t.rotation,0)&&!t.flipH&&!t.flipV&&Zt(t.scale,1)}function _c(t,e){if(!/\bgif\b/.test(e.force_format??""))return ct(t,e);let s;try{s=new URL(t)}catch{return ct(t,e)}s.searchParams.set("force_format","jpeg"),s.searchParams.delete("q");const i=new URLSearchParams({ci_url_encoded:"1",...e});return`${s.origin}/${encodeURIComponent(s.toString())}?${i.toString()}`}function yc(t){let e;try{e=new URL(t).searchParams}catch{return null}const s=d=>{var p;return(p=e.get(d))==null?void 0:p.split(",").map(Number)},i=s("tl_px"),r=s("br_px");if(!i||!r||i.length!==2||r.length!==2||[...i,...r].some(Number.isNaN))return null;const a=Math.round(r[0]-i[0]),o=Math.round(r[1]-i[1]);return a<=0||o<=0?null:!(e.get("ci_url_encoded")==="1")&&Math.round(Math.abs(Number(e.get("r")??0)))%180===90?{width:o,height:a}:{width:a,height:o}}async function $c(t,e){try{const{resolveServerCrop:s}=await U(async()=>{const{resolveServerCrop:l}=await import("./index-Dq5Xh6zy.js").then(d=>d.i);return{resolveServerCrop:l}},__vite__mapDeps([0,1])),i=t,r=s(i.state,i.imageWidth,i.imageHeight,i.containerWidth,i.containerHeight,i.variant,i.serverFraming??"auto"),a=Math.round(r.cropPx.width),o=Math.round(r.cropPx.height);return!r.tilted&&Math.round(Math.abs(r.rotateCCW))%180===90?{width:o,height:a}:{width:a,height:o}}catch{const s=e==null?void 0:e();return s?yc(s):null}}const $={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",FOLDERS:"folders",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",RESOLUTION:"resolution",PRODUCTS:"products",FACES:"faces",ORIENTATION:"orientation",COLOR:"color"},F={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},S={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN:">",LESS_THAN:"<",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},wc={AND:"AND"},C={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",ULTRATAGS:"ultratags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},Ti={[C.DATE]:"date_",[C.BOOLEAN]:"bool_",[C.NUMERIC]:"num_",[C.DECIMAL2]:"dec_",[C.ATTACHMENTS_ASSETS]:"attach_",[C.ATTACHMENT_URI]:"uri_",[C.SELECT_ONE]:"one_",[C.MULTI_SELECT]:"multi_",[C.SUPERTAGS]:"tags_",[C.ULTRATAGS]:"utags_",[C.TEXT]:"text_",[C.TEXT_AREA]:"area_",[C.GEO_POINT]:"geo_",[C.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(Ti).map(([t,e])=>[e,t]));const kc=Object.values(Ti);function os(t){for(const e of kc)if(t.startsWith(e))return t.slice(e.length);return t}const He={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Ia={EMPTY:"empty",NOT_EMPTY:"non-empty"},Me="empty",Ie="non-empty",Lt="specific",Bi=10,xs=10,_t=10,_s=10,To="filters:pinned:",Lo="metadata:pinned:",Da=[$.DATE,$.TYPE,$.SIZE],Po=S.IS,ni="20",li="1",Sc=0,Cc=[{key:$.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:$.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:$.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:$.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:$.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:$.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:$.FOLDERS,labelKey:"filterFolders",label:"Folders",icon:"folder",type:"string"},{key:$.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:$.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:$.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],Ac={key:$.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},Ec={key:$.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},nt=[{key:F.STATUS,labelKey:"filterApprovalStatus",label:"Approval status",icon:"square-check",type:"string"},{key:F.APPROVER,labelKey:"filterApprovalApprover",label:"Approver",icon:"file-check-2",type:"string"},{key:F.REQUESTOR,labelKey:"filterApprovalRequester",label:"Requester",icon:"user-star",type:"string"},{key:F.DUE_DATE,labelKey:"filterApprovalDueDate",label:"Due date",icon:"calendar-check-2",type:"date"}],Ts=[Ac,...Cc,Ec],_r=new Set(Object.values(F)),Mo=new Set([...Ts.map(t=>t.key),..._r]),Io=new Set([...Object.values($),..._r]),Fc=new Set([...Io].filter(t=>!Mo.has(t))),Oc={[$.FOLDERS]:["assets"]};function xi(t,e){const s=Oc[t];return!s||s.includes(e)}function ci(t,e){if(!e)return!0;const s=_r.has(t)?$.APPROVAL:t;return e.includes(s)}const Mt={[$.TYPE]:"Format",[$.DATE]:"Date",[$.SIZE]:"Size",[$.LICENSE_EXPIRY]:"License expiry",[$.TAGS]:"Tags",[$.LABELS]:"Labels",[$.FOLDERS]:"Folders",[$.PRODUCT_REF]:"Products",[$.IMAGE]:"Image",[$.COLOR]:"Color",[$.METADATA]:"Metadata",[$.APPROVAL]:"Approval",[$.MIME_TYPE]:"MIME type",[$.RESOLUTION]:"Resolution",[$.PRODUCTS]:"Products",[$.FACES]:"Faces",[$.ORIENTATION]:"Orientation",...Object.fromEntries(nt.map(t=>[t.key,t.label]))},ts={...Object.fromEntries(Ts.map(t=>[t.key,t.labelKey])),...Object.fromEntries(nt.map(t=>[t.key,t.labelKey])),[$.MIME_TYPE]:"filterMimeType",[$.RESOLUTION]:"filterResolution",[$.PRODUCTS]:"filterProductsBuiltin",[$.FACES]:"filterFaces",[$.ORIENTATION]:"filterOrientation"},Pe={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},_i=[{value:Pe.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:Pe.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:Pe.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:Pe.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:Pe.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:Pe.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:Pe.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:Pe.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],Tc={[Pe.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[Pe.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[Pe.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[Pe.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[Pe.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[Pe.FONTS]:["ttf","otf","woff","woff2","eot"]},Ki={RESOLUTION:0,ORIENTATION:1,FACES:2},Lc=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],Pc=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],Mc=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Do=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],Ro=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],zo=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],yi=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Ic=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Dc=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],qi=[{label:"Is",value:S.IS,labelKey:"operatorIs"},{label:"Contains",value:S.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],at=[{label:"Is",value:S.IS,labelKey:"operatorIs"},{label:"Is not",value:S.IS_NOT,labelKey:"operatorIsNot"}],ei=at,Hi=[{label:"Is",value:S.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:S.IS,labelKey:"operatorContains"},{label:"Does not contain",value:S.IS_NOT,labelKey:"operatorDoesNotContain"}],Gi=[{label:"Is",value:S.IS,labelKey:"operatorIs"},{label:"Greater than",value:S.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:S.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:S.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:S.RANGE,labelKey:"operatorBetween"}],Ra=[{label:"Is",value:S.IS,labelKey:"operatorIs"},{label:"Is not",value:S.IS_NOT,labelKey:"operatorIsNot"}],ss=S.IS,Rc=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--sfx-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--sfx-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--sfx-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"}],$i=[{label:"Empty",value:Me,labelKey:"empty"},{label:"Not empty",value:Ie,labelKey:"notEmpty"}],zc=[...$i,{label:"Specific",value:Lt,labelKey:"specific"}],Nc=[{label:"Empty",value:Me,labelKey:"empty"},{label:"Not empty",value:Ie,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],di={[C.DATE]:"calendar",[C.BOOLEAN]:"toggle-left",[C.NUMERIC]:"file-digit",[C.DECIMAL2]:"decimals-arrow-right",[C.ATTACHMENTS_ASSETS]:"paperclip",[C.ATTACHMENT_URI]:"link-2",[C.SELECT_ONE]:"circle-dot",[C.MULTI_SELECT]:"square-check",[C.SUPERTAGS]:"hash",[C.ULTRATAGS]:"hash",[C.TEXT]:"text-initial",[C.TEXT_AREA]:"text-align-justify",[C.GEO_POINT]:"locate",[C.INTEGER_LIST]:"list-ordered"},No={[C.TEXT]:"text",[C.TEXT_AREA]:"text",[C.NUMERIC]:"number",[C.DECIMAL2]:"number",[C.BOOLEAN]:"boolean",[C.SELECT_ONE]:"select-one",[C.MULTI_SELECT]:"multi-select",[C.SUPERTAGS]:"tags",[C.ULTRATAGS]:"ultratags",[C.DATE]:"date",[C.GEO_POINT]:"geo",[C.ATTACHMENTS_ASSETS]:"attachment",[C.ATTACHMENT_URI]:"attachment",[C.INTEGER_LIST]:"attachment"};function ti(t){return Object.prototype.hasOwnProperty.call(No,t)}async function Uc(t){var i;return(((i=(await t.get("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(r=>({name:r.name,value:r.value,count:r.count,category:r.category??r.value.split("_")[0],label:jc(r.name)}))}function jc(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function Iu(t){return(await Uo(t)).fields}async function Uo(t){var g;const e=await t.get("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,a=((i==null?void 0:i.model)??[])[Sc],o=i==null?void 0:i.store,l=((o==null?void 0:o.regional_variants_groups)??[]).map(v=>({uuid:v.uuid,label:v.label??v.name??"",variants:(v.variants??[]).map(b=>({api_value:b.api_value??b.value??"",internal_unique_value:b.internal_unique_value??b.api_value??"",label:b.label??b.name??""}))})).filter(v=>v.variants.length>1),d={};for(const v of l)d[v.uuid]=((g=v.variants[0])==null?void 0:g.api_value)??"";const p=!!((s==null?void 0:s._cdn_permalink_enabled)??e._cdn_permalink_enabled);if(!a)return{fields:[],regionalVariantGroups:l,regionalFilters:d,cdnPermalinkEnabled:p};const f=a.groups??[],h=[];for(const v of f){const b=v.name||"";for(const _ of v.fields??[]){const T=_.type??C.TEXT,y=_.possible_values,M=y==null?void 0:y.map(k=>({api_value:k.api_value??k.value??"",internal_unique_value:k.internal_unique_value??k.api_value??"",label:k.label??k.name??k.api_value??""}));h.push({key:_.key??_.ckey,label:_.title??_.label??_.key??"",type:T,slug:_.slug,ckey:_.ckey,possible_values:M,group:b,regionalVariantsGroupUuid:_.regional_variants_group_uuid})}}return{fields:h,regionalVariantGroups:l,regionalFilters:d,cdnPermalinkEnabled:p}}function ot(t){return t.toLocaleDateString("en-CA")}function wi(t){if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const e=new Date(t);return Number.isNaN(e.getTime())?t:ot(e)}function si(){return ot(new Date)}function ns(t){const e=new Date;switch(t){case"today":return{from:si(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:ot(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:si(),to:ot(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:ot(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:si(),to:ot(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:ot(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:si(),to:ot(s)}}default:return null}}function za(t,e){return e?e.type==="date"?Vc(e):e.type==="string"?Bc(e):!0:!1}function Vc(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function Bc(t){return!t.values||!Array.isArray(t.values)||t.values.filter(Boolean).length===0?!1:t.operator===S.RANGE&&Kc(t)?!!t.values[0]&&!!t.values[1]:!0}function Kc(t){return t.metadataType===C.NUMERIC||t.metadataType===C.DECIMAL2}function qc(t,e={}){const s=[];for(const[i,r]of Object.entries(t)){if(!r||i===$.FOLDERS||!za(i,r))continue;const a=Gc(i,r);s.push(...a)}for(const[i,r]of Object.entries(e)){if(!r||!za(i,r))continue;const a=ed(i,r);s.push(...a)}return Hc(s)}function Hc(t){const e=[],s=[],i=[];for(const r of t)r.startsWith("type:")||r.startsWith("type=")?e.push(r):r.startsWith("mimetype:")||r.startsWith("mimetype=")?s.push(r):i.push(r);if(e.length>0&&s.length>0){const r=[...e,...s].join(" , ");i.push(r)}else i.push(...e,...s);return i}function Gc(t,e){if(e.type==="date")return jo(t,e);if(t===$.IMAGE)return Zc(e);const s=e,{operator:i=Po,values:r=[],logic:a}=s;if(r.length===0)return[];switch(t){case $.SIZE:return Yc(t,r,"..");case $.FACES:return Qc(t,i,r);case $.TAGS:return It(t,i,Na(r),",",a);case $.LABELS:return It(t,i,Na(r),",",a);case $.COLOR:return Wc(i,r,a);case $.TYPE:return Xc(r,i);case $.MIME_TYPE:return Jc(t,r,i);case $.PRODUCT_REF:return It(t,"=%",r,",",a);default:return It(t,i,r,",",a)}}function jo(t,e){const s=e.field||"created";if(e.kind===He.PRESET&&e.preset){if(e.preset===Ia.EMPTY)return[`${s}:"empty"`];if(e.preset===Ia.NOT_EMPTY)return[`${s}:"non-empty"`];const i=ns(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===He.AFTER&&e.from)return[`${s}>"${e.from}"`];if(e.kind===He.BEFORE&&e.to)return[`${s}<"${e.to}"`];if(e.kind===He.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}>"${e.from}"`];if(!e.from&&e.to)return[`${s}<"${e.to}"`]}return e.kind===He.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function Yc(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Qc(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function It(t,e,s,i,r){if(s.length===0)return[];if(r===wc.AND)return s.map(o=>`${t}${e}"${o}"`);const a=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${a}`]}function Wc(t,e,s){const i=[],r=It("color_search",t,e,",",s);return i.push(...r),i.push('color_operator:"AND"'),i}function Xc(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const a of t){const o=Tc[a];if(o)for(const n of o){const l=`${a}_${n}`;s.has(l)||(s.add(l),i.push(l))}else s.has(a)||(s.add(a),i.push(a))}const r=i.map(a=>`"${a}"`).join(",");return[`type${e}${r}`]}function Jc(t,e,s,i){if(e.length===0)return[];const r=e.map(a=>`"${a}"`).join(",");return[`${t}${s}${r}`]}function Zc(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,n=o.resolution,l=o.orientation,d=o.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),l!=null&&l.length&&e.push(`orientation:"${l.join(",")}"`),d!=null&&d.length&&e.push(`faces:"${d.join(",")}"`),e}const s=t,i=s[Ki.RESOLUTION],r=s[Ki.ORIENTATION],a=s[Ki.FACES];return i&&e.push(`resolution:"${i}"`),r&&e.push(`orientation:"${r}"`),a&&e.push(`faces:"${a}"`),e}function ed(t,e){const s=os(t),i=sd(t);if(e.type==="date")return td(s,e,i);const r=e,{operator:a=Po,values:o=[],logic:n,metadataType:l}=r;if(o.length===0)return[];if(o.length===1&&(o[0]===Me||o[0]===Ie)){const p=l===C.GEO_POINT?S.IS+"~":S.IS;return[`${s}${p}"${o[0]}"`]}if(l===C.DATE){const p=r.metaDatePreset?ns(r.metaDatePreset):null;if(p)return p.to?[`"${s}:${p.from}..${p.to}"`]:[`"${s}:${p.from}"`];const f=o.map(wi);if(a===S.RANGE&&f.length===2)return[`"${s}:${f[0]}..${f[1]}"`];if(f.length===1){const h=a===S.LESS_THAN||a===S.GREATER_THAN?a:S.IS;return[`"${s}${h}${f[0]}"`]}}const d=l===C.NUMERIC||l===C.DECIMAL2;if(d&&a===S.RANGE)return[`${s}${S.IS}"${o.join('","')}"`];if(d&&(a===S.GREATER_THAN_OR_EQUAL||a===S.LESS_THAN_OR_EQUAL)){const p=a===S.GREATER_THAN_OR_EQUAL?o[0]:o[1]??o[0];return p?[`${s}${a}"${p}"`]:[]}if(l===C.GEO_POINT){const p=o.map(f=>{const h=f.indexOf("..");if(h===-1)return`(${f})`;const g=f.slice(0,h),v=f.slice(h);return`(${g})${v}`});return It(s,a+"~",p,",",n)}return It(s,a,o,",",n)}function td(t,e,s){const i=jo(t,e);return!s||i.length===0?i:i.map(r=>{const a=r.search(/[^a-zA-Z0-9_]/);if(a===-1)return`"${r}"`;const o=r.slice(0,a),l=r.slice(a).replace(/"/g,"");return`"${o}${l}"`})}function sd(t){return t.startsWith("date_")}function Na(t){return t.map(e=>e.replace(/#/g,""))}function Ua(t){return t instanceof bo&&t.code==="DIR_NOT_FOUND"}function ve(t){const e=(t??"").trim();return!e||e==="/"?"/":(e.startsWith("/")?e:`/${e}`).replace(/\/+$/,"")||"/"}function rr(t,e){return t==="/"?e!=="/":e.startsWith(`${t}/`)}function id(t){const e=[...new Set(t.map(ve))];return e.filter(s=>!e.some(i=>i!==s&&rr(i,s)))}const rd=new Set([void 0,"",":","="]);function ja(t,e="/"){var o;const s=t,i=((o=s==null?void 0:s.values)==null?void 0:o.filter(n=>typeof n=="string"&&n.trim()))??[];if(i.length===0)return[];if(!rd.has(s==null?void 0:s.operator))return null;const r=ve(e),a=i.map(ve).map(n=>n===r||rr(r,n)?n:rr(n,r)?r:null).filter(n=>n!==null);return a.length===0?null:id(a)}function ad(t,e){return e[$.FOLDERS]??t[$.FOLDERS]}function Vo(t){const e=ve(t);return e==="/"?"/":e.slice(e.lastIndexOf("/")+1)}function od(t,e){let s=null;const i=r=>{for(const[a,o]of r){const[n,l]=JSON.parse(a),d=p=>e(p.folder,n,l).then(p.resolve,p.reject);if(o.length===1){d(o[0]);continue}t(o.map(p=>p.folder),n,l).then(p=>{o.every(h=>{var g;return(((g=p.get(h.folder))==null?void 0:g.length)??1/0)<=l})?o.forEach(h=>h.resolve(p.get(h.folder))):o.forEach(d)},()=>o.forEach(d))}};return(r,a,o)=>new Promise((n,l)=>{if(!s){const f=new Map;s=f,queueMicrotask(()=>{s=null,i(f)})}const d=JSON.stringify([a,o]),p=s.get(d)??[];p.push({folder:r,resolve:n,reject:l}),s.set(d,p)})}function nd(t,e){var r;const s=new Map(e.map(a=>[a,[]])),i=e.map(a=>({folder:a,prefix:a.replace(/\/+$/,"")}));for(const a of t){const o=(r=a.folder)==null?void 0:r.name;if(!o)return null;const n=i.find(({prefix:l})=>o===l||o.startsWith(`${l}/`));if(!n)return null;s.get(n.folder).push(a)}return s}const ld=new Intl.Collator("en",{sensitivity:"base",ignorePunctuation:!0}),ii=t=>t&&Date.parse(t)||0;function cd(t,e){const s=e==="asc"?1:-1;switch(t){case"name":return(i,r)=>s*ld.compare(i.name??"",r.name??"");case"size":return(i,r)=>{var a,o;return s*((((a=i.size)==null?void 0:a.bytes)??0)-(((o=r.size)==null?void 0:o.bytes)??0))};case"type":return(i,r)=>s*(i.type??"").localeCompare(r.type??"");case"modified_at":case"updated_at":return(i,r)=>s*(ii(i.modified_at)-ii(r.modified_at));case"created_at":case"uploaded":return(i,r)=>s*(ii(i.created_at)-ii(r.created_at));default:return()=>0}}class dd{constructor(e,s,i){this.folder=e,this.fetchPage=s,this.pageSize=i,this.items=[],this.exhausted=!1,this.nextOffset=0,this.pending=null}loadMore(){return this.exhausted?Promise.resolve():(this.pending||(this.pending=(async()=>{const e=await this.fetchPage(this.folder,this.nextOffset,this.pageSize);this.nextOffset+=this.pageSize,e.length<this.pageSize&&(this.exhausted=!0),this.items.push(...e)})().finally(()=>{this.pending=null})),this.pending)}}class hd{constructor(e=30){this.maxEntries=e,this.listings=new Map}get(e,s,i,r){const a=JSON.stringify([e,s,r]);let o=this.listings.get(a);for(o?this.listings.delete(a):o=new dd(e,i,r),this.listings.set(a,o);this.listings.size>this.maxEntries;)this.listings.delete(this.listings.keys().next().value);return o}get size(){return this.listings.size}clear(){this.listings.clear()}}class pd{constructor(e,s){this.compare=s,this.seen=new Set,this.queue=Promise.resolve(),this.cursors=e.map(i=>({listing:i,pos:0,taken:0}))}get hasMore(){return this.cursors.some(e=>e.pos<e.listing.items.length||!e.listing.exhausted)}next(e){const s=this.queue.then(()=>this.take(e));return this.queue=s.catch(()=>{}),s}async take(e){const s=[];for(;s.length<e;){try{await this.loadDrainedFolders()}catch(a){if(s.length>0)return s;throw a}let i=null;for(const a of this.cursors){if(a.pos>=a.listing.items.length)continue;if(!i){i=a;continue}const o=this.compare(a.listing.items[a.pos],i.listing.items[i.pos]);(o<0||o===0&&a.taken<i.taken)&&(i=a)}if(!i)break;const r=i.listing.items[i.pos++];i.taken++,!this.seen.has(r.uuid)&&(this.seen.add(r.uuid),s.push(r))}return s}async loadDrainedFolders(){const e=this.cursors.filter(s=>s.pos>=s.listing.items.length&&!s.listing.exhausted);e.length!==0&&await Promise.all(e.map(s=>s.listing.loadMore()))}}const ud=new Set([$.DATE,$.LICENSE_EXPIRY,F.DUE_DATE]),fd={[$.DATE]:"created",[$.LICENSE_EXPIRY]:$.LICENSE_EXPIRY,[F.DUE_DATE]:F.DUE_DATE};function ar(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=gd(s,i));return e}function gd(t,e){return e.type==="string"||e.type==="date"?e:ud.has(t)?{type:"date",field:e.field??fd[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function md(t){const e=localStorage.getItem(To+t),s=localStorage.getItem(Lo+t);let i;try{i=e?JSON.parse(e):[...Da]}catch{i=[...Da]}let r;try{r=s?JSON.parse(s):[]}catch{r=[]}return{pinnedFilters:i,pinnedMetadata:r}}function vd(t,e){localStorage.setItem(To+t,JSON.stringify(e))}function bd(t,e){localStorage.setItem(Lo+t,JSON.stringify(e))}const Bo="sort-by",Ko="sort-order";function Va(t,e){try{localStorage.setItem(Bo,t),localStorage.setItem(Ko,e)}catch{}}function xd(){try{const t=localStorage.getItem(Bo),e=localStorage.getItem(Ko);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}function ki(t,e,s){return t==="title"?s("metadataTitleLabel","Title"):t==="description"?s("metadataDescriptionLabel","Description"):e}function _d(t,e){let s=!1;const i=t.map(r=>{const a=ki(r.key,r.label,e);return a===r.label?r:(s=!0,{...r,label:a})});return s?i:t}function yr(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function We(t){const e=t==null?void 0:t.trim().replace(/_/g,"-");if(!e)return"en";try{return Intl.DateTimeFormat.supportedLocalesOf(e).length?e:"en"}catch{return"en"}}const Ba={year:"numeric",month:"short",day:"numeric"},yd={short:{},medium:Ba,mediumTime:{...Ba,hour:"2-digit",minute:"2-digit"}},Ka=new Map;function qo(t,e){const s=`${t??""}|${e}`;let i=Ka.get(s);return i||(i=new Intl.DateTimeFormat(We(t),yd[e]),Ka.set(s,i)),i}function Ho(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(e){const[i,r,a]=[+e[1],+e[2]-1,+e[3]],o=new Date(i,r,a);return o.getFullYear()===i&&o.getMonth()===r&&o.getDate()===a?o:null}const s=new Date(t);return isNaN(s.getTime())?null:s}function Go(t,e){if(!t)return"";const s=Ho(t);return s?qo(e,"short").format(s):t}function Ls(t,e){if(!t)return"—";const s=Ho(t);return s?qo(e,"medium").format(s):"—"}function Yo(t,e){return!t||!e?"":`${t} x ${e}`}function $r(t){return((t==null?void 0:t.split(":")[0])??"").toUpperCase()}function wr(t){const e=new Map;for(const s of t)e.set(s.key,s),s.ckey&&e.set(s.ckey,s),s.slug&&e.set(s.slug,s);return e}function or(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(r=>r.internal_unique_value===t||r.api_value===t);return(s==null?void 0:s.label)??t}function Qo(t,e,s){var i;if(t==null||t==="")return t;if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const r=s[e.regionalVariantsGroupUuid];if(!r)return t;const a=t[r];return a==null||a===""?t:Qo(a,{...e,regionalVariantsGroupUuid:void 0},s)}if((i=e.possible_values)!=null&&i.length){const r=a=>typeof a!="string"?a:or(a,e)||a;return Array.isArray(t)?t.map(r):r(t)}return t}function $d(t,e){var s,i,r;return t[e]??((i=(s=t.info)==null?void 0:s.metadata)==null?void 0:i[e])??((r=t.meta)==null?void 0:r[e])}function kr(t,e,s,i){var r;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const a=s[e.regionalVariantsGroupUuid];if(!a)return"";const o=t[a];return o==null||o===""?"":kr(o,{...e,regionalVariantsGroupUuid:void 0},s,i)}if(e.type===C.DATE&&typeof t=="string")return Go(t,i);if((r=e.possible_values)!=null&&r.length)return Array.isArray(t)?t.map(a=>or(String(a),e)).filter(Boolean).join(", "):or(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const a=JSON.stringify(t);return a==="{}"||a==="[]"?"":a}return String(t)}const nr=5,wd=new Set(["title","description"]);function kd(t){if(t==null)return{keys:[],dropped:[],invalid:!1};if(!Array.isArray(t))return{keys:[],dropped:[],invalid:!0};const e=t.some(i=>typeof i!="string"),s=[...new Set(t.filter(i=>typeof i=="string").map(i=>i.trim()).filter(Boolean))];return{keys:s.slice(0,nr),dropped:s.slice(nr),invalid:e}}function qa(t){return t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")}function Sd(t,e,s){if(!t.length)return[];const i=wr(e);return t.map(r=>{const a=i.get(r);return a?a.label?a:{...a,label:qa(a.key)}:{key:r,label:ki(r,qa(r),s),type:"text",unmodeled:!0}})}function Cd(t,e){var r;if(!e.unmodeled){const a=t[e.key];if(a!=null)return a}const s=[(r=t.info)==null?void 0:r.metadata,t.meta],i=[e.key,e.ckey,e.slug].filter(a=>!!a);for(const a of i)for(const o of s){const n=o==null?void 0:o[a];if(n!=null)return n}}function Ad(t,e){return t.length===e.length&&t.every((s,i)=>s===e[i]||JSON.stringify(s)===JSON.stringify(e[i]))}function Ed(t=console.warn){let e,s,i,r=[];const a=new Set,o=(n,...l)=>{a.has(n)||(a.add(n),t(...l))};return(n,l,d)=>{const p=JSON.stringify(n??null);if(p===e&&l===s&&d===i)return r;const f=kd(n);f.invalid&&o(`invalid:${p}`,"[asset-picker] thumbnailMetadata expects an array of metadata field keys (strings); got:",n),f.dropped.length&&o(`cap:${p}`,`[asset-picker] thumbnailMetadata supports at most ${nr} fields; ignoring:`,f.dropped);const h=Sd(f.keys,l,d);if(l.length){const g=h.filter(v=>v.unmodeled&&!wd.has(v.key)).map(v=>v.key);if(g.length){const v=l.map(b=>b.key).join("|");o(`unknown:${p}:${v}`,'[asset-picker] thumbnailMetadata keys not found in the metadata model (shown as "—" unless the asset carries them):',g)}}return e=p,s=l,i=d,Ad(h,r)||(r=h),r}}const Wo="ap-last-folder",Xo="ap-last-view",Jo="ap-last-tab";function ps(t,e){return e?`${t}:${e}`:t}function Ha(t,e){try{localStorage.setItem(ps(Wo,e),t)}catch{}}function Fd(t){try{return localStorage.getItem(ps(Wo,t))}catch{return null}}function Od(t,e){try{localStorage.setItem(ps(Xo,e),t)}catch{}}function Td(t){try{return localStorage.getItem(ps(Xo,t))}catch{return null}}function Ld(t,e){try{localStorage.setItem(ps(Jo,e),t)}catch{}}function Pd(t){try{const e=localStorage.getItem(ps(Jo,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function Md(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,r=parseInt(s.slice(2,4),16)/255,a=parseInt(s.slice(4,6),16)/255;return[i,r,a]}function Yi(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Id(t,e,s){const i=Yi(t),r=Yi(e),a=Yi(s),o=.4122214708*i+.5363325363*r+.0514459929*a,n=.2119034982*i+.6806995451*r+.1073969566*a,l=.0883024619*i+.2817188376*r+.6299787005*a,d=Math.cbrt(o),p=Math.cbrt(n),f=Math.cbrt(l),h=.2104542553*d+.793617785*p-.0040720468*f,g=1.9779984951*d-2.428592205*p+.4505937099*f,v=.0259040371*d+.7827717662*p-.808675766*f,b=Math.sqrt(g*g+v*v);let _=Math.atan2(v,g)*(180/Math.PI);return _<0&&(_+=360),[h,b,_]}function Dd(t){return t>.7}function Rd(t,e){const s=["--sfx-primary","--sfx-primary-foreground","--sfx-primary-10","--sfx-primary-20","--sfx-accent","--sfx-accent-foreground","--sfx-ring","--sfx-selection-bg"];if(!e){for(const h of s)t.style.removeProperty(h);return}const[i,r,a]=Md(e),[o,n,l]=Id(i,r,a),d=`${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)}`,p=`oklch(${d})`,f=Dd(o)?"#000":"#fff";t.style.setProperty("--sfx-primary",p),t.style.setProperty("--sfx-primary-foreground",f),t.style.setProperty("--sfx-primary-10",`oklch(${d} / 0.1)`),t.style.setProperty("--sfx-primary-20",`oklch(${d} / 0.2)`),t.style.setProperty("--sfx-accent",`oklch(${d} / 0.07)`),t.style.setProperty("--sfx-accent-foreground",p),t.style.setProperty("--sfx-ring",`oklch(${d} / 0.7)`),t.style.setProperty("--sfx-selection-bg",`oklch(${d} / 0.08)`)}const Sr=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],zd=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...Sr],Nd=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],Ud=[{value:"name",labelKey:"sortName",label:"Name"}],jd=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],Vd=[{value:"name",labelKey:"sortName",label:"Name"}],Hs=A`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`,Bd=A`
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Zo=A`
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
 */const Kd={ATTRIBUTE:1,CHILD:2,ELEMENT:6},qd=t=>(...e)=>({_$litDirective$:t,values:e});class Hd{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const Qi=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Gd extends Hd{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Kd.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return lt}update(e,[s]){if(s===this._lastStyles)return lt;this._lastStyles=s;const{style:i}=e.element,r=s??{};for(const a of this._appliedProps)(!(a in r)||r[a]==null||r[a]==="")&&(i.removeProperty(Qi(a)),this._appliedProps.delete(a));for(const[a,o]of Object.entries(r))o!=null&&o!==""?(i.setProperty(Qi(a),o),this._appliedProps.add(a)):this._appliedProps.has(a)&&(i.removeProperty(Qi(a)),this._appliedProps.delete(a));return lt}}const D=qd(Gd);function en(t,e){customElements.get(t)||customElements.define(t,e)}const O=t=>e=>(en(t,e),e);var Yd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,Cr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Qd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Yd(e,s,r),r};let Ps=class extends E{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return c`
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
    `}};Ps.styles=A`
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
  `;Cr([u({type:Boolean})],Ps.prototype,"open",2);Cr([tt("dialog")],Ps.prototype,"dialog",2);Ps=Cr([O("ap-modal")],Ps);const Ue=A`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var Wd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,Gs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Wd(e,s,r),r};let Ut=class extends E{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return c`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalFiltersDropdownLabel","Regional settings")}
        title=${this.t("regionalFiltersDropdownLabel","Regional settings")}
      >
        <sfx-icon name="globe" .size=${18}></sfx-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?m:c`
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
  `;Gs([u({type:Array})],Ut.prototype,"groups",2);Gs([u({type:Object})],Ut.prototype,"selectedFilters",2);Gs([u({attribute:!1})],Ut.prototype,"t",2);Gs([x()],Ut.prototype,"_open",2);Ut=Gs([O("ap-regional-settings")],Ut);var Jd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Oe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Zd(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Jd(e,s,r),r};const eh=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let we=class extends E{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=Hl(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=eh.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return c`
      <div class="header-row">
        ${e.length>1?c`<sfx-dropdown
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
          ${this.hideClose?m:c`
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
    `}};we.styles=[Ue,A`
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
    `];Oe([u()],we.prototype,"activeTab",2);Oe([u({type:Array})],we.prototype,"tabs",2);Oe([u({type:Boolean})],we.prototype,"isInsideLabel",2);Oe([u({type:Boolean})],we.prototype,"isInsideCollection",2);Oe([u({type:Boolean})],we.prototype,"isInsideCollectionLeaf",2);Oe([u()],we.prototype,"viewMode",2);Oe([u()],we.prototype,"searchQuery",2);Oe([u({type:Array})],we.prototype,"regionalGroups",2);Oe([u({type:Object})],we.prototype,"regionalFilters",2);Oe([u({type:Boolean})],we.prototype,"hideClose",2);Oe([u({type:Boolean,reflect:!0,attribute:"ai-search"})],we.prototype,"enableAISearch",2);Oe([u({type:Boolean})],we.prototype,"isAISearchActive",2);Oe([u({attribute:!1})],we.prototype,"t",2);Oe([x()],we.prototype,"_localSearch",2);we=Oe([O("ap-header")],we);var th=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,Ar=(t,e,s,i)=>{for(var r=i>1?void 0:i?sh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&th(e,s,r),r};let Ms=class extends E{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?c`
      <div class="popover">
        ${this.title?c`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:c``}};Ms.styles=A`
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
  `;Ar([u()],Ms.prototype,"title",2);Ar([u({type:Boolean})],Ms.prototype,"open",2);Ms=Ar([O("ap-filter-popover")],Ms);var ih=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,us=(t,e,s,i)=>{for(var r=i>1?void 0:i?rh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ih(e,s,r),r};function Ga(t){var i;const e=new Map;for(const r of t){const a=r.category||r.value.split("_")[0];if(!e.has(a)){const n=_i.find(l=>l.value===a);e.set(a,{key:a,labelKey:(n==null?void 0:n.labelKey)||a,label:(n==null?void 0:n.label)||a.charAt(0).toUpperCase()+a.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const o=e.get(a);o.extensions.push({value:r.value,label:r.label||((i=r.value.split("_").pop())==null?void 0:i.toUpperCase())||r.value,count:r.count}),o.totalCount+=r.count}const s=_i.map(r=>r.value);return[...e.values()].sort((r,a)=>{const o=s.indexOf(r.key),n=s.indexOf(a.key);return(o===-1?999:o)-(n===-1?999:n)})}let kt=class extends E{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const r=new Set([t.key,...e]);i=this.selected.filter(a=>!r.has(a))}else{const r=new Set(e);i=this.selected.filter(a=>!r.has(a)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(r=>r!==e.key),i.push(...s)),i.includes(t)?i=i.filter(r=>r!==t):(i.push(t),s.every(r=>i.includes(r))&&(i=i.filter(r=>!s.includes(r)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.TYPE,values:t,operator:S.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const r=s.extensions.filter(a=>a.label.toLowerCase().includes(e)||a.value.toLowerCase().includes(e));return r.length===0?null:{...s,extensions:r}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=Ga(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=Ga(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return c`
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
            </button>`:m}
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
          `:m}
    `}_renderFallback(){return c`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${_i.map(t=>c`
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
    `}};kt.styles=A`
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
  `;us([u({type:Array})],kt.prototype,"selected",2);us([u({type:Array})],kt.prototype,"fileTypes",2);us([u({attribute:!1})],kt.prototype,"t",2);us([x()],kt.prototype,"_search",2);us([x()],kt.prototype,"_expanded",2);kt=us([O("ap-filter-type")],kt);const st=A`
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
`;var ah=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,mt=(t,e,s,i)=>{for(var r=i>1?void 0:i?oh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ah(e,s,r),r};let Ge=class extends E{constructor(){super(...arguments),this.filterKey=$.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===$.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?zo:Ro).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return Do.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return ot(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=ns(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const r=new Date(s+"T23:59:59");this.to=r.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?m:c`
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
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return m;const e=this.from?wi(this.from):"",s=this.to?wi(this.to):"",i=this._todayStr;return t==="specific"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
            <sfx-date-input
              .locale=${We(this.locale)}
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
              .locale=${We(this.locale)}
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
              .locale=${We(this.locale)}
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
              .locale=${We(this.locale)}
              max=${s||i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            ></sfx-date-input>
          </div>
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <sfx-date-input
              .locale=${We(this.locale)}
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
    `}};Ge.styles=[st,A`
      .date-inputs {
        margin-top: 4px;
      }
    `];mt([u()],Ge.prototype,"filterKey",2);mt([u({attribute:!1})],Ge.prototype,"t",2);mt([u()],Ge.prototype,"locale",2);mt([u()],Ge.prototype,"field",2);mt([u()],Ge.prototype,"kind",2);mt([u()],Ge.prototype,"preset",2);mt([u()],Ge.prototype,"from",2);mt([u()],Ge.prototype,"to",2);Ge=mt([O("ap-filter-date")],Ge);var nh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,Kt=(t,e,s,i)=>{for(var r=i>1?void 0:i?lh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&nh(e,s,r),r};let dt=class extends E{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=$.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=Bi}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:S.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:S.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:S.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Bi} tags`:m}
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
              `:m}
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
                    `:m})}
                </div>
              </div>
            `:m}
        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?c`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span>You can select up to ${Bi} tags.</span>
              </div>
            `:m}
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
          `:m}
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
          `:m}
    `}_renderSections(){if(this.tags.length===0)return c`<div class="no-results">${this.t("noTagsAvailable","No tags available")}</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return c`
      <div class="filter-section">
        ${t.length>0?c`<span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>`:m}
        ${t.length>0?c`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:m}
      </div>

      ${t.length>0?c`<div class="separator"></div>`:m}

      <div class="hint-message">
        ${this.t("findMoreTagsBySearch","Find more tags by using search")}
      </div>
    `}};dt.styles=[Ue,st,A`
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
    `];Kt([u({type:Array})],dt.prototype,"tags",2);Kt([u({type:Array})],dt.prototype,"selected",2);Kt([u()],dt.prototype,"filterKey",2);Kt([u({attribute:!1})],dt.prototype,"t",2);Kt([tt(".tag-search")],dt.prototype,"_searchInput",2);Kt([x()],dt.prototype,"_search",2);dt=Kt([O("ap-filter-tags")],dt);var ch=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,fs=(t,e,s,i)=>{for(var r=i>1?void 0:i?dh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ch(e,s,r),r};let St=class extends E{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=xs}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:s,operator:S.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:e,operator:S.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:[],operator:S.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${xs} labels`,{count:xs}):m}
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
              `:m}
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
            ${e.length===0?c`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?c`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t("labelsLimitAlert",`You can select up to ${xs} labels.`,{count:xs})}</span
                >
              </div>
            `:m}
      </div>
    `}};St.styles=[st,A`
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
    `];fs([u({type:Array})],St.prototype,"labels",2);fs([u({type:Array})],St.prototype,"selected",2);fs([u({attribute:!1})],St.prototype,"t",2);fs([tt(".search-input")],St.prototype,"_searchInput",2);fs([x()],St.prototype,"_search",2);St=fs([O("ap-filter-labels")],St);function hh(t){return{async listChildren(e,{offset:s,limit:i}){const r=await Oa(t,{folderPath:e,offset:s,limit:i});return{folders:r,hasMore:r.length===i}},async search(e,{rootPath:s,limit:i}){return Oa(t,{folderPath:s,q:e,recursive:1,limit:i})},async create(e,s){return _o(t,e,s)},async checkPermissions(e,s){const i=await t.get(`/folder/${encodeURIComponent(e)}/permissions`),r=i==null?void 0:i.permissions;return Array.isArray(r)?s.every(a=>r.includes(a)):!1}}}const ph=200,uh=10,fh=500,Ya={query:"",status:"idle",results:[],truncated:!1};function gh(t,e="/"){const s=e.replace(/\/+$/,"")||"/";if(t===s)return[s];const i=s==="/"?"/":`${s}/`;if(!t.startsWith(i))return[s];const r=t.slice(i.length).split("/").filter(Boolean),a=[s];let o=s==="/"?"":s;for(const n of r)o=`${o}/${n}`,a.push(o);return a}function Wi(t){return[...t].sort((e,s)=>e.name.localeCompare(s.name))}class mh{constructor(e){var s;this.state={children:{},nodeStatus:{},expanded:new Set,search:Ya},this.listeners=new Set,this.loadSeq=new Map,this.searchSeq=0,this.revealSeq=0,this.source=e.source,this.rootPath=((s=e.rootPath)==null?void 0:s.replace(/\/+$/,""))||"/",this.pageSize=e.pageSize??ph,this.maxAutoPages=e.maxAutoPages??uh,this.searchLimit=e.searchLimit??fh}getState(){return this.state}async setSource(e){var s;if(e!==this.source){this.source=e,(s=this.searchAbort)==null||s.abort(),this.searchAbort=void 0,this.searchSeq+=1;for(const i of this.loadSeq.keys())this.nextSeq(i);await this.loadChildren(this.rootPath,{force:!0})}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}set(e){this.state={...this.state,...e};for(const s of this.listeners)s(this.state)}setStatus(e,s){this.set({nodeStatus:{...this.state.nodeStatus,[e]:s}})}errorAfter(e,s=this.state.search){return Object.values(e).some(r=>r==="error")||s.status==="error"?this.state.error:void 0}nextSeq(e){const s=(this.loadSeq.get(e)??0)+1;return this.loadSeq.set(e,s),s}async loadChildren(e,s={}){const i=this.state.nodeStatus[e];if(!s.force&&(i==="loading"||i==="loaded"||i==="partial"))return;const r=this.nextSeq(e);this.setStatus(e,"loading");try{const{folders:a,exhausted:o}=await this.fetchPages(e,0);if(r!==this.loadSeq.get(e))return;const n={...this.state.nodeStatus,[e]:o?"loaded":"partial"};this.set({children:{...this.state.children,[e]:Wi(a)},nodeStatus:n,error:this.errorAfter(n)})}catch(a){if(r!==this.loadSeq.get(e))return;this.set({nodeStatus:{...this.state.nodeStatus,[e]:"error"},error:Xi(a)})}}async loadMore(e){if(this.state.nodeStatus[e]!=="partial")return;const s=this.nextSeq(e),i=this.state.children[e]??[];this.setStatus(e,"loading");try{const{folders:r,exhausted:a}=await this.fetchPages(e,i.length);if(s!==this.loadSeq.get(e))return;const o={...this.state.nodeStatus,[e]:a?"loaded":"partial"};this.set({children:{...this.state.children,[e]:Wi([...i,...r])},nodeStatus:o,error:this.errorAfter(o)})}catch(r){if(s!==this.loadSeq.get(e))return;this.set({nodeStatus:{...this.state.nodeStatus,[e]:"partial"},error:Xi(r)})}}async fetchPages(e,s){const i=[];let r=s;for(let a=0;a<this.maxAutoPages;a+=1){const o=await this.source.listChildren(e,{offset:r,limit:this.pageSize});if(i.push(...o.folders),r+=o.folders.length,!o.hasMore)return{folders:i,exhausted:!0}}return{folders:i,exhausted:!1}}collapseAll(){this.state.expanded.size&&this.set({expanded:new Set})}async toggle(e){const s=new Set(this.state.expanded);if(s.has(e)){s.delete(e),this.set({expanded:s});return}s.add(e),this.set({expanded:s}),await this.loadChildren(e)}async reveal(e){const s=this.revealSeq+=1,i=gh(e,this.rootPath),r=i.slice(0,-1);if(await Promise.all(i.map(o=>this.loadChildren(o))),s!==this.revealSeq)return;const a=new Set(this.state.expanded);for(const o of r)a.add(o);this.set({expanded:a})}clearSearch(){var e;(e=this.searchAbort)==null||e.abort(),this.searchAbort=void 0,this.searchSeq+=1,this.set({search:Ya})}async runSearch(e){var a;const s=e.trim();if(!s){this.clearSearch();return}if(!this.source.search)return;(a=this.searchAbort)==null||a.abort();const i=new AbortController;this.searchAbort=i;const r=this.searchSeq+=1;this.set({search:{...this.state.search,query:s,status:"loading"}});try{const o=await this.source.search(s,{rootPath:this.rootPath,limit:this.searchLimit,signal:i.signal});if(r!==this.searchSeq)return;const n={query:s,status:"done",results:o,truncated:o.length===this.searchLimit};this.set({search:n,error:this.errorAfter(this.state.nodeStatus,n)})}catch(o){if(r!==this.searchSeq)return;this.set({search:{query:s,status:"error",results:[],truncated:!1},error:Xi(o)})}}async createFolder(e,s){if(!this.source.create)throw new Error("This folder source does not support creation");const i=await this.source.create(e,s),r=s.replace(/\/+$/,"")||"/",a=i??{uuid:"",name:e,path:r==="/"?`/${e}`:`${r}/${e}`,parentPath:r},o=this.state.children[r]??[],n=new Set(this.state.expanded);return n.add(r),this.set({children:{...this.state.children,[r]:Wi([...o,a])},nodeStatus:{...this.state.nodeStatus,[r]:this.state.nodeStatus[r]==="partial"?"partial":"loaded"},expanded:n}),this.loadChildren(r,{force:!0}),a}async refresh(e){const s=e??Object.keys(this.state.children);await Promise.all(s.map(i=>this.loadChildren(i,{force:!0})))}}function Xi(t){return t instanceof Error?t.message:String(t)}var vh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,qt=(t,e,s,i)=>{for(var r=i>1?void 0:i?bh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&vh(e,s,r),r};const xh=300;let ht=class extends E{constructor(){super(...arguments),this.rootPath="/",this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._tree=null,this._unsubscribe=null,this._searchTimer=null}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._searchTimer&&clearTimeout(this._searchTimer),this._dropTree()}willUpdate(t){(t.has("apiClient")||t.has("rootPath")||!this._tree&&this.apiClient)&&this._buildTree()}_buildTree(){if(this._dropTree(),!this.apiClient)return;const t=new mh({source:hh(this.apiClient),rootPath:this._root});this._tree=t,this._unsubscribe=t.subscribe(()=>this.requestUpdate()),t.loadChildren(this._root),this._search.trim()&&t.runSearch(this._search)}_dropTree(){var t;(t=this._unsubscribe)==null||t.call(this),this._unsubscribe=null,this._tree=null}get _root(){return ve(this.rootPath||"/")}get _atLimit(){return this.selected.length>=_t}_isSelected(t){const e=ve(t);return this.selected.some(s=>ve(s)===e)}_toggleExpand(t,e){var s;e.stopPropagation(),(s=this._tree)==null||s.toggle(t)}_emit(t,e){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.FOLDERS,values:t,operator:S.IS,folderUuids:e},bubbles:!0,composed:!0}))}_toggle(t,e){const s=ve(t);this._isSelected(s)?this._emit(this.selected.filter(i=>ve(i)!==s)):this._atLimit||this._emit([...this.selected,s],e?{[s]:e}:void 0)}_onSearchInput(t){var s;if(this._search=t.target.value,this._searchTimer&&clearTimeout(this._searchTimer),!this._search.trim()){(s=this._tree)==null||s.clearSearch();return}const e=this._search;this._searchTimer=setTimeout(()=>{var i;return void((i=this._tree)==null?void 0:i.runSearch(e))},xh)}_clearSearch(){var t;this._searchTimer&&clearTimeout(this._searchTimer),this._search="",(t=this._tree)==null||t.clearSearch()}_indent(t){return D({paddingLeft:`${8+t*16}px`})}_renderRow(t,e,s=!1){var p;const i=(p=this._tree)==null?void 0:p.getState(),r=ve(t.path),a=this._isSelected(r),o=!a&&this._atLimit,n=!!(i!=null&&i.expanded.has(r)),l=i==null?void 0:i.children[r],d=!s&&(l===void 0||l.length>0);return c`
      <div
        class="folder-row ${o?"disabled":""}"
        ${this._indent(e)}
        title=${o?this.t("foldersLimitTitle",`You can select up to ${_t} folders`,{count:_t}):r}
        @click=${()=>!o&&this._toggle(r,t.uuid||void 0)}
      >
        ${d?c`<button
              class="expand-btn"
              aria-label=${n?this.t("collapse","Collapse"):this.t("expand","Expand")}
              @click=${f=>this._toggleExpand(r,f)}
            >
              <sfx-icon
                name=${n?"chevron-down":"chevron-right"}
                .size=${14}
              ></sfx-icon>
            </button>`:c`<span class="expand-placeholder"></span>`}
        <sfx-checkbox ?checked=${a}></sfx-checkbox>
        <span class="folder-icon"><sfx-icon name="folder" .size=${16}></sfx-icon></span>
        <span class="folder-name">${t.name}</span>
        ${s?c`<span class="folder-path">${r}</span>`:m}
      </div>
      ${!s&&n?this._renderLevel(r,e+1):m}
    `}_renderLevel(t,e){var a;const s=(a=this._tree)==null?void 0:a.getState(),i=(s==null?void 0:s.nodeStatus[t])??"idle",r=s==null?void 0:s.children[t];return i==="error"&&!r?c`<div class="loading-row" ${this._indent(e)}>
        ${this.t("foldersLoadError","Couldn't load folders.")}
        <button
          class="clear-btn"
          @click=${()=>{var o;return void((o=this._tree)==null?void 0:o.loadChildren(t,{force:!0}))}}
        >
          ${this.t("retry","Retry")}
        </button>
      </div>`:r?c`
      ${r.map(o=>this._renderRow(o,e))}
      ${i==="partial"?c`<div class="loading-row" ${this._indent(e)}>
            <button class="clear-btn" @click=${()=>{var o;return void((o=this._tree)==null?void 0:o.loadMore(t))}}>
              ${this.t("loadMoreFolders","Load more folders")}
            </button>
          </div>`:i==="loading"?c`<div class="loading-row" ${this._indent(e)}>
              ${this.t("loading","Loading...")}
            </div>`:m}
    `:c`<div class="loading-row" ${this._indent(e)}>
        ${this.t("loading","Loading...")}
      </div>`}_renderList(){var s;const t=(s=this._tree)==null?void 0:s.getState();if(this._search.trim()){const i=t==null?void 0:t.search;return!i||i.status==="loading"||i.status==="idle"?c`<div class="loading-row">${this.t("loading","Loading...")}</div>`:i.status==="error"?c`<div class="no-results">
          ${this.t("foldersLoadError","Couldn't load folders.")}
        </div>`:i.results.length===0?c`<div class="no-results">${this.t("noFoldersFound","No folders found")}</div>`:i.results.map(r=>this._renderRow(r,0,!0))}const e=t==null?void 0:t.children[this._root];return e&&e.length===0&&(t==null?void 0:t.nodeStatus[this._root])==="loaded"?c`<div class="no-results">${this.t("noFoldersFound","No folders found")}</div>`:this._renderLevel(this._root,0)}render(){return c`
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
          ${this._search?c`<button class="search-clear" @click=${this._clearSearch}>
                <sfx-icon name="close" .size=${12}></sfx-icon>
              </button>`:m}
        </div>

        ${!this._search.trim()&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${()=>this._emit([])}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(t=>c`
                      <div class="chip" title=${t}>
                        <span class="chip-label">${Vo(t)}</span>
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
            <span class="section-label">${this.t("allFolders","All folders")}</span>
          </div>
          <div class="options-list">${this._renderList()}</div>
        </div>

        ${this._atLimit?c`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t("foldersLimitAlert",`You can select up to ${_t} folders.`,{count:_t})}</span
                >
              </div>
            `:m}
      </div>
    `}};ht.styles=[st,A`
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
    `];qt([u({attribute:!1})],ht.prototype,"apiClient",2);qt([u()],ht.prototype,"rootPath",2);qt([u({type:Array})],ht.prototype,"selected",2);qt([u({attribute:!1})],ht.prototype,"t",2);qt([tt(".search-input")],ht.prototype,"_searchInput",2);qt([x()],ht.prototype,"_search",2);ht=qt([O("ap-filter-folders")],ht);var _h=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,Ht=(t,e,s,i)=>{for(var r=i>1?void 0:i?yh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&_h(e,s,r),r};const Ji=3,lr=/^#[0-9A-Fa-f]{6}$/;function $h(t){const e=t.trim().split(/\s+/);return e.length<1||!lr.test(e[0])?null:{hex:e[0],tolerance:e[1]||li,coverage:e[3]||ni}}let pt=class extends E{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=$h(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==li||s.coverage!==ni)),this._initialized=!0)}}_selectColor(t){if(!lr.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=Ji||(this._colors=[...this._colors,{hex:t,tolerance:li,coverage:ni}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!lr.test(i)||this._colors.some((o,n)=>n!==t&&o.hex.toLowerCase()===i.toLowerCase()))return;const a=[...this._colors];a[t]={...a[t],hex:i},this._colors=a,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const r=[...this._colors];r[t]={...r[t],coverage:String(i)},this._colors=r,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:li,i=this._advanced?e.coverage:ni;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=Ji;return c`
      <div class="palette">
        ${Ic.map(s=>{const i=t.has(s),r=e&&!i;return c`
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
            .options=${Dc.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
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
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<Ji&&!this._showPalette;return c`
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

        ${this._colors.length>0?c`
              <div class="filter-section">
                <div class="selected-colors">
                  ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
                </div>
              </div>
            `:m}
        ${e?c`
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
    `}};pt.styles=[Ue,st,A`
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
    `];Ht([u({type:Array})],pt.prototype,"values",2);Ht([u({attribute:!1})],pt.prototype,"t",2);Ht([x()],pt.prototype,"_colors",2);Ht([x()],pt.prototype,"_advanced",2);Ht([x()],pt.prototype,"_showPalette",2);Ht([x()],pt.prototype,"_initialized",2);pt=Ht([O("ap-filter-color")],pt);var wh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var r=i>1?void 0:i?kh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&wh(e,s,r),r};const Sh={KB:1/1e3,MB:1,GB:1e3},Ch=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let Je=class extends E{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Sh[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.SIZE,values:[],operator:S.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.SIZE,values:[i],operator:S.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return c`
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
              .options=${Ch}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `}};Je.styles=[st,A`
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
    `];At([u({type:Number})],Je.prototype,"min",2);At([u({type:Number})],Je.prototype,"max",2);At([u({attribute:!1})],Je.prototype,"t",2);At([x()],Je.prototype,"_minVal",2);At([x()],Je.prototype,"_maxVal",2);At([x()],Je.prototype,"_unit",2);At([x()],Je.prototype,"_initialized",2);Je=At([O("ap-filter-size")],Je);var Ah=Object.defineProperty,Eh=Object.getOwnPropertyDescriptor,Ys=(t,e,s,i)=>{for(var r=i>1?void 0:i?Eh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ah(e,s,r),r};const Fh=yt`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,Oh=yt`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,Th=yt`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,Lh=yt`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,Ph={portrait:Fh,landscape:Oh,square:Th,panorama:Lh};let jt=class extends E{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return c`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${Lc.map(t=>c`
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
            ${Pc.map(t=>c`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleOrientation(t.value)}}
                  ><span class="orientation-label"
                    >${Ph[t.value]}${this.t(t.labelKey,t.label)}</span
                  ></sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${Mc.map(t=>c`
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
    `}};jt.styles=[st,A`
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
    `];Ys([u({type:Array})],jt.prototype,"selectedResolution",2);Ys([u({type:Array})],jt.prototype,"selectedOrientation",2);Ys([u({type:Array})],jt.prototype,"selectedFaces",2);Ys([u({attribute:!1})],jt.prototype,"t",2);jt=Ys([O("ap-filter-image")],jt);const Mh="/meta/ultratags",Ih="regvar:api",Dh=50;async function Rh(t,{meta:e,q:s,limit:i=Dh}){const r=s==null?void 0:s.trim();return(await t.get(Mh,{meta:e,q:r?r.toLowerCase():void 0,sort:r?void 0:"slug",limit:i,format:Ih})).items??[]}function cr(t,e,s="en"){const{i18n:i}=t;if(i){for(const a of Nh(e,s)){const o=i[a]??i[`~${a.toUpperCase()}`];if(o)return o}const r=Object.values(i).find(Boolean);if(r)return r}return t.slug}const tn=new Map,sn=(t,e)=>`${t}::${e}`;function zh(t,e){for(const s of t){const i=s.sid||s.slug;i&&tn.set(sn(e,i),cr(s,e))}}function rn(t,e){return tn.get(sn(e,t))}function Nh(t,e){const s=[];for(const i of[t,e]){if(!i)continue;s.push(i);const r=i.split("-")[0];r&&r!==i&&s.push(r)}return s}var Uh=Object.defineProperty,jh=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var r=i>1?void 0:i?jh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Uh(e,s,r),r};function N(t){return`${Ti[t.type]||""}${t.key}`}const ri=["before","after","between","specific"];let W=class extends E{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._textDrafts={},this._textDebounceTimers={},this._specificModeSeeded=new Set,this._pendingOperators={},this._utagQueries={},this._utagEntries={},this._utagLoading={},this._utagLabels={},this._utagLoaded=new Set,this._utagRequestSeq={},this._tagDebounceTimers={},this._fieldsByPrefixedKeyCache=null}get _tTextOperatorOptions(){return qi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return Gi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return at.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tUltratagsOperatorOptions(){return ei.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return Hi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return Nc.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return $i.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return zc.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t);for(const t of Object.values(this._textDebounceTimers))clearTimeout(t)}updated(){for(const t of this._visibleUltratagsFields())this._ensureUltratagsLoaded(t);this._seedSpecificModeForTextFields()}_seedSpecificModeForTextFields(){if(this._showFieldSelection)return;const t=this.mode==="field"?[this.activeFieldKey]:this.visibleFields;let e=null;for(const s of t){if(this._specificModeSeeded.has(s))continue;const i=this._getField(s);i&&(this._specificModeSeeded.add(s),this._getUIType(i)==="text"&&(this._isSpecialValue(this._getApplied(s).values)||this._specificModeFields.has(s)||(e??(e=new Set(this._specificModeFields))).add(s)))}e&&(this._specificModeFields=e)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}_getField(t){var e;return((e=this._fieldsByPrefixedKeyCache)==null?void 0:e.fields)!==this.fields&&(this._fieldsByPrefixedKeyCache={fields:this.fields,map:new Map(this.fields.map(s=>[N(s),s]))}),this._fieldsByPrefixedKeyCache.map.get(t)}get _atFieldLimit(){return this.visibleFields.filter(t=>{const e=this._getField(t);return e&&ti(e.type)}).length>=_s}get _selectableFields(){return this.fields.filter(t=>ti(t.type))}_getUIType(t){return No[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_getOperator(t,e){return this._getApplied(t).operator||this._pendingOperators[t]||e}_hasOperator(t){return!!(this._getApplied(t).operator||this._pendingOperators[t])}_clearPendingOperator(t){if(!(t in this._pendingOperators))return;const{[t]:e,...s}=this._pendingOperators;this._pendingOperators=s}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Me||t[0]===Ie}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===Me?Me:((i=e.values)==null?void 0:i[0])===Ie?Ie:this._specificModeFields.has(t)||e.values&&e.values.length>0?Lt:""}_emitFilterChange(t,e,s,i){const r=N(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:r,operator:e,values:s,metadataType:t.type,metaDatePreset:i},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=N(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=N(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=N(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){const e=N(t);this._emitFieldToggle(t,!1),this._clearPendingOperator(e),this._specificModeSeeded.delete(e),this._cancelTextDebounce(e),this._emitFilterChange(t,void 0,[])}_cancelTextDebounce(t){if(this._textDebounceTimers[t]&&(clearTimeout(this._textDebounceTimers[t]),delete this._textDebounceTimers[t]),t in this._textDrafts){const{[t]:e,...s}=this._textDrafts;this._textDrafts=s}}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const s=N(t);let r=this._getApplied(s).values||[];if(this._getUIType(t)==="number"&&!this._isSpecialValue(r)){const[a="",o=""]=r;e===S.LESS_THAN_OR_EQUAL?r=o?["",o]:[]:e!==S.RANGE&&(r=a?[a]:[])}if(this._pendingOperators={...this._pendingOperators,[s]:e},this._getUIType(t)==="number"&&!this._isSpecialValue(r)&&!this._specificModeFields.has(s)){const a=new Set(this._specificModeFields);a.add(s),this._specificModeFields=a}this._emitFilterChange(t,e,r)}_onContentModeChange(t,e){const s=N(t);if(e===Lt){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const r=this._getApplied(s);this._isSpecialValue(r.values)&&this._emitFilterChange(t,r.operator||this._pendingOperators[s],[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(this._cancelTextDebounce(s),e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator||this._pendingOperators[s],[])}}}_clearFieldFilter(t){const e=N(t);if(this._specificModeFields.has(e)){const o=new Set(this._specificModeFields);o.delete(e),this._specificModeFields=o}this._dropDateDraft(e);const{[e]:s,...i}=this._selectSearches;this._selectSearches=i;const{[e]:r,...a}=this._tagInputs;this._tagInputs=a,this._cancelTextDebounce(e),t.type===C.ULTRATAGS&&this._utagQueries[e]&&this._onUltratagSearch(t,e,""),this._clearPendingOperator(e),this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=N(t),i=e.target.value,r=this._getApplied(s).values;if(this._textDrafts={...this._textDrafts,[s]:i},!this._specificModeFields.has(s)){const a=new Set(this._specificModeFields);a.add(s),this._specificModeFields=a}this._textDebounceTimers[s]&&clearTimeout(this._textDebounceTimers[s]),this._textDebounceTimers[s]=setTimeout(()=>{if(delete this._textDebounceTimers[s],this._getApplied(s).values!==r)return;const a=this._getOperator(s,qi[0].value);this._emitFilterChange(t,a,i?[i]:[])},300)}_onNumberInput(t,e,s){const i=e.target.value,r=N(t),a=this._getApplied(r),o=this._getOperator(r,Gi[0].value),n=[...a.values||[]];s===0?n[0]=i:(n[1]=i,n[0]??(n[0]=""));const l=n.filter(d=>d!==""&&d!==void 0);if(l.length>0){const d=t.type===C.DECIMAL2;if(!l.every(f=>d?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,o,n)}_onBooleanSelect(t,e){var r;const s=this._getApplied(N(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,at[0].value),a=i.values||[];a.length===1&&a[0]===e?this._emitFilterChange(t,r,[]):this._emitFilterChange(t,r,[e])}_onMultiSelectToggle(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,Hi[0].value),a=this._isSpecialValue(i.values)?[]:i.values||[],o=a.includes(e)?a.filter(n=>n!==e):[...a,e];this._emitFilterChange(t,r,o)}_onTagKeydown(t,e){const s=N(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const r=i.replace(/,/g,"").trim();r&&(this._tagInputs={...this._tagInputs,[e]:r},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,at[0].value),a=i.values||[];a.includes(e)||this._emitFilterChange(t,r,[...a,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,r=await this.apiClient.get("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(r.tags||[]).map(a=>a.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),r=this._getOperator(e,at[0].value),a=i.values||[];a.includes(s)||this._emitFilterChange(t,r,[...a,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,at[0].value),a=i.values||[];this._emitFilterChange(t,r,a.filter(o=>o!==e))}_visibleUltratagsFields(){return this._showFieldSelection||this.mode==="selector"?[]:(this.mode==="field"?[this.activeFieldKey]:this.visibleFields).map(e=>this._getField(e)).filter(e=>!!e&&e.type===C.ULTRATAGS)}_cacheUltratagLabels(t){zh(t,this.locale);const e={};for(const s of t){const i=s.sid||s.slug;i&&(e[i]=cr(s,this.locale))}Object.keys(e).length!==0&&(this._utagLabels={...this._utagLabels,...e})}_ultratagLabel(t){return this._utagLabels[t]||rn(t,this.locale)||t}async _loadUltratags(t,e,s){if(!this.apiClient)return;const i=(this._utagRequestSeq[e]??0)+1;this._utagRequestSeq[e]=i;const r=()=>this._utagRequestSeq[e]===i;this._utagLoading={...this._utagLoading,[e]:!0};try{const a=await Rh(this.apiClient,{meta:t.key,q:s});if(!r())return;this._utagEntries={...this._utagEntries,[e]:a},this._cacheUltratagLabels(a)}catch{if(!r())return;this._utagEntries={...this._utagEntries,[e]:[]}}finally{r()&&(this._utagLoading={...this._utagLoading,[e]:!1})}}_ensureUltratagsLoaded(t){const e=N(t);this._utagLoaded.has(e)||!this.apiClient||(this._utagLoaded.add(e),this._loadUltratags(t,e,""))}_onUltratagSearch(t,e,s){this._utagQueries={...this._utagQueries,[e]:s},this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),this._tagDebounceTimers[e]=setTimeout(()=>{this._loadUltratags(t,e,s.trim())},300)}_onUltratagToggle(t,e){const s=N(t),i=e.sid||e.slug;if(!i)return;const r=this._getApplied(s),a=this._getOperator(s,ei[0].value),o=this._isSpecialValue(r.values)?[]:r.values||[];this._cacheUltratagLabels([e]),this._emitFilterChange(t,a,o.includes(i)?o.filter(n=>n!==i):[...o,i])}_removeUltratag(t,e){const s=N(t),i=this._getApplied(s),r=this._getOperator(s,ei[0].value),a=i.values||[];this._emitFilterChange(t,r,a.filter(o=>o!==e))}_onDatePreset(t,e){const s=N(t);if(!e){this._clearFieldFilter(t);return}if(ri.includes(e)){const r=this._getDateState(s),a=e==="before"?"":r.from,o=e==="after"||e==="specific"?"":r.to;this._commitDate(t,e,a,o);return}if(this._dropDateDraft(s),e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=ns(e);if(i){if(i.to===null){const r=e==="today"?S.IS:S.GREATER_THAN;this._emitFilterChange(t,r,[i.from],e);return}this._emitFilterChange(t,S.RANGE,[i.from,i.to],e)}}_onDateInput(t,e,s){const i=s.target.value||"",r=this._getDateState(N(t)),a=ri.includes(r.kind)?r.kind:"between",o=e==="from"?i:r.from,n=e==="to"?i:r.to;this._commitDate(t,a,o,n)}_getDateState(t){const e=this._getApplied(t),s=e.values||[];if(s.length){if(this._isSpecialValue(s))return{kind:s[0],from:"",to:""};if(e.metaDatePreset){const o=ns(e.metaDatePreset);return{kind:e.metaDatePreset,from:(o==null?void 0:o.from)??"",to:(o==null?void 0:o.to)??""}}const[r="",a=""]=s.map(wi);switch(e.operator){case S.LESS_THAN:return{kind:"before",from:"",to:r};case S.GREATER_THAN:return{kind:"after",from:r,to:""};case S.RANGE:return{kind:"between",from:r,to:a};default:return{kind:"specific",from:r,to:""}}}const i=this._datePresets[t]||"";return ri.includes(i)?{kind:i,from:this._dateFroms[t]||"",to:this._dateTos[t]||""}:{kind:"",from:"",to:""}}_commitDate(t,e,s,i){var o;const r=N(t);e==="between"&&s&&i&&s>i&&(i=s);const a=e==="before"&&i?[S.LESS_THAN,[i]]:e==="after"&&s?[S.GREATER_THAN,[s]]:e==="specific"&&s?[S.IS,[s]]:e==="between"&&s&&i?[S.RANGE,[s,i]]:null;if(a){this._dropDateDraft(r),this._emitFilterChange(t,...a);return}this._datePresets={...this._datePresets,[r]:e},this._dateFroms={...this._dateFroms,[r]:s},this._dateTos={...this._dateTos,[r]:i},(o=this._getApplied(r).values)!=null&&o.length&&this._emitFilterChange(t,void 0,[])}_dropDateDraft(t){const{[t]:e,...s}=this._datePresets;this._datePresets=s;const{[t]:i,...r}=this._dateFroms;this._dateFroms=r;const{[t]:a,...o}=this._dateTos;this._dateTos=o}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=N(t),r=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),a=(r==null?void 0:r.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(h=>h.trim());if(o.length!==2||o.some(h=>isNaN(Number(h))||h===""))return;const[n,l]=o,p=`${n},${l}..${a||"0"}`;this._emitFilterChange(t,S.IS,[p])}_onGeoRadiusInput(t,e){var l;const s=e.target.value,i=N(t),r=this._getApplied(i);if(!((l=r.values)!=null&&l[0]))return;const a=r.values[0],[o]=a.split("..");let n=o;s&&(n+=`..${s}`),this._emitFilterChange(t,S.IS,[n])}_onEmptyOption(t,e){var o;const s=N(t),i=this._getApplied(s),r=i.operator||this._pendingOperators[s],a=(o=i.values)==null?void 0:o[0];!e||a===e?this._emitFilterChange(t,r,[]):(this._clearPendingOperator(s),this._emitFilterChange(t,i.operator,[e]))}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this._selectableFields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,a)=>a.length===0?m:c`
        <div class="field-group-label">${r}</div>
        ${a.map(o=>{const n=N(o),l=this.visibleFields.includes(n),d=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${l?"selected":""} ${d?"disabled":""}"
              @click=${()=>!d&&!l&&this._addField(o)}
            >
              ${l?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:c`<sfx-icon
                    name=${di[o.type]||"file-text"}
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
    `}_renderTextFilter(t){var p,f;const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._textDrafts[e],a=r!==void 0?r:i?"":((p=s.values)==null?void 0:p[0])||"",o=this._getContentMode(e),n=o===Me||o===Ie,l=this._getOperator(e,qi[0].value),d=t.type===C.TEXT_AREA;return c`
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

        ${o===Lt?c`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${d?c`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @input=${h=>this._onTextInput(t,h)}
                      ></textarea>
                    `:c`
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
    `}_renderNumberFilter(t){var y,M,k;const e=N(t),s=this._getApplied(e),i=this._getOperator(e,Gi[0].value),r=this._isSpecialValue(s.values),a=this._getContentMode(e),o=a===Me||a===Ie,n=i===S.RANGE,l=i===S.GREATER_THAN_OR_EQUAL,d=i===S.LESS_THAN_OR_EQUAL,p=t.type===C.DECIMAL2,f=p?"0.01":"1",h=p?"0.00":"0",g=r?"":((y=s.values)==null?void 0:y[0])||"",v=r?"":((M=s.values)==null?void 0:M[1])||"",b=n||l||d,_=n||l||d?this.t("min","Min"):this.t("value","Value"),T=this.t("max","Max");return c`
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

        ${a===Lt?c`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${d?"true":m}
                      >${_}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${h}
                      .value=${g}
                      ?disabled=${d}
                      @change=${L=>this._onNumberInput(t,L,0)}
                    />
                  </div>
                  ${b?c`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${l?"true":m}
                            >${T}</span
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
    `}_renderSelectOneFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=t.possible_values||[],o=this._getOperator(e,at[0].value),n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,d=r.length>0||i,p=n?a.filter(h=>h.label.toLowerCase().includes(n)):a,f=r.length>=_s;return c`
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
          ${l?c`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        ${l?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!d&&!this._hasOperator(e)}
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
                    ?disabled=${!d&&!this._hasOperator(e)}
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
              ${r.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(h=>{const g=a.find(v=>v.api_value===h);return c`
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
            ${this._tEmptyOptions.map(h=>{var g;return c`
                <div class="option-item" @click=${()=>this._onEmptyOption(t,h.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===h.value}></sfx-checkbox>
                  <span>${h.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${p.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(h=>{const g=r.includes(h.api_value),v=!g&&f;return c`
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
    `}_renderMultiSelectFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=t.possible_values||[],o=this._getOperator(e,Hi[0].value),n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,d=r.length>0||i,p=n?a.filter(h=>h.label.toLowerCase().includes(n)):a,f=r.length>=_s;return c`
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
          ${l?c`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
        </div>

        ${l?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!d&&!this._hasOperator(e)}
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
                    ?disabled=${!d&&!this._hasOperator(e)}
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
              ${r.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(h=>{const g=a.find(v=>v.api_value===h);return c`
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
            ${this._tEmptyOptions.map(h=>{var g;return c`
                <div class="option-item" @click=${()=>this._onEmptyOption(t,h.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===h.value}></sfx-checkbox>
                  <span>${h.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${p.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(h=>{const g=r.includes(h.api_value),v=!g&&f;return c`
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
    `}_renderTagsFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=this._tagInputs[e]||"",o=this._getOperator(e,at[0].value),n=r.length>0||i,l=this._tagSuggestions[e]||[],d=this._tagLoading[e]||!1,p=a.trim().length>0,f=r.length>=_s;return c`
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
          ${p?c`
                <button
                  class="search-clear"
                  @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
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
                  @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
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
                        ${r.map(h=>c`
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
                  ${this._tEmptyOptions.map(h=>{var g;return c`
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
        ${p?c`
              <div class="filter-section">
                <div class="options-list">
                  ${d?c`<div class="option-item disabled">
                        <span>${this.t("loading","Loading...")}</span>
                      </div>`:l.length>0?l.map(h=>{const g=r.includes(h),v=!g&&f;return c`
                            <div
                              class="option-item ${v?"disabled":""}"
                              @click=${()=>!v&&(g?this._removeTag(t,h):this._selectTagSuggestion(t,h))}
                            >
                              <sfx-checkbox ?checked=${g}></sfx-checkbox>
                              <span>${h}</span>
                            </div>
                          `}):c`<div class="option-item disabled">
                          <span>${this.t("noResults","No results")}</span>
                        </div>`}
                </div>
              </div>
            `:m}
      </div>
    `}_renderUltratagsFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],a=this._getOperator(e,ei[0].value),o=this._utagQueries[e]||"",n=o.trim().length>0,l=this._utagEntries[e]||[],d=this._utagLoading[e]||!1,p=r.length>0||i,f=r.length>=_s;return c`
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
          ${n?c`
                <button
                  class="search-clear"
                  @click=${()=>this._onUltratagSearch(t,e,"")}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:m}
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
                  @sfx-change=${h=>this._onOperatorChange(t,h.detail.value)}
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
                        ${r.map(h=>c`
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

          ${n?m:c`
                <!-- Empty/Not empty checkboxes -->
                <div class="options-list short">
                  ${this._tEmptyOptions.map(h=>{var g;return c`
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
            ${d?c`<div class="option-item disabled">
                  <span>${this.t("loading","Loading...")}</span>
                </div>`:l.length===0?c`<div class="no-results">
                    ${this.t("noOptionsFound","No options found")}
                  </div>`:l.map(h=>{const g=h.sid||h.slug,v=r.includes(g),b=!v&&f;return c`
                      <div
                        class="option-item ${b?"disabled":""}"
                        @click=${()=>!b&&this._onUltratagToggle(t,h)}
                      >
                        <sfx-checkbox ?checked=${v}></sfx-checkbox>
                        <span>${cr(h,this.locale)}</span>
                      </div>
                    `})}
          </div>
        </div>
      </div>
    `}_renderDateFilter(t){var v;const e=N(t),s=this._getApplied(e),{kind:i,from:r,to:a}=this._getDateState(e),o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=ri.includes(i),l=!!i&&!n,d=l||i==="before",p=l||i==="after"||i==="specific",f=i==="specific"?r:a,h=i==="between"?a:"",g=i==="between"?r:"";return c`
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
            .options=${yi.map(b=>({...b,label:this.t(b.labelKey,b.label)}))}
            .value=${i!=="empty"&&i!=="non-empty"?i:""}
            @sfx-change=${b=>this._onDatePreset(t,b.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <div class="grid-2">
            <div>
              <span class="input-label">${this.t("startDate","Start date")}</span>
              <sfx-date-input
                .locale=${We(this.locale)}
                .value=${r}
                max=${h}
                ?disabled=${d}
                placeholder=${d?"- - -":""}
                @change=${b=>this._onDateInput(t,"from",b)}
              ></sfx-date-input>
            </div>
            <div>
              <span class="input-label">${this.t("endDate","End date")}</span>
              <sfx-date-input
                .locale=${We(this.locale)}
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
    `}_renderGeoFilter(t){var p,f;const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._getContentMode(e);let a="",o="";if(!i&&((p=s.values)!=null&&p[0])){const h=s.values[0],[g,v]=h.split("..");a=g||"",o=v||""}const n=a.length>0,l=a.split(",").map(h=>h.trim()),d=!n||l.length===2&&l.every(h=>!isNaN(Number(h))&&h!=="");return c`
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

        ${r===Lt?c`
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
                    ${n&&!d?c`<div class="error-text">
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
    `}_renderFaceMatcherFilter(t){const e=N(t),i=this._getApplied(e).values||[],r=this._getOperator(e,S.IS);return c`
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
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"ultratags":return this._renderUltratagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===C.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return m}}_renderFieldSection(t){const e=this._getField(t);if(!e||!ti(e.type))return m;const s=this._collapsedFields.has(t);return c`
      <div class="field-section">
        <div class="field-header" @click=${()=>this._toggleCollapse(t)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${s?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${di[e.type]||"file-text"}
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
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this._selectableFields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,a)=>a.length===0?m:c`
        <div class="field-group-label">${r}</div>
        ${a.map(o=>{const n=N(o),l=this.visibleFields.includes(n),d=!!this.appliedMetadata[n]||!!this.appliedFilters[n],p=this.pinnedFields.includes(n),f=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${d?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(o)}
            >
              <sfx-icon
                name=${di[o.type]||"file-text"}
                .size=${14}
                ${D({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="field-item-label">${o.label}</span>
              <button
                class="field-item-pin ${p?"pinned":""}"
                @click=${h=>{h.stopPropagation(),this._emitPin(n,!p)}}
                title=${p?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${d?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:m}
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
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return!t||!ti(t.type)?c`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`:this._renderFieldControl(t)}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return c`
      ${this._showFieldSelection||!t?this._renderFieldSelection():m}
      ${t?c`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?c`
                  <button class="add-field-btn" @click=${this._openFieldSelection}>
                    <sfx-icon name="filter" .size=${14}></sfx-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `:m}
          `:m}
    `}};W.styles=[Ue,st,A`
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
    `];J([u({type:Array})],W.prototype,"fields",2);J([u({type:Object})],W.prototype,"appliedFilters",2);J([u({type:Array})],W.prototype,"visibleFields",2);J([u()],W.prototype,"mode",2);J([u()],W.prototype,"activeFieldKey",2);J([u({type:Array})],W.prototype,"pinnedFields",2);J([u({type:Object})],W.prototype,"appliedMetadata",2);J([u({attribute:!1})],W.prototype,"apiClient",2);J([u({attribute:!1})],W.prototype,"t",2);J([u()],W.prototype,"locale",2);J([x()],W.prototype,"_showFieldSelection",2);J([x()],W.prototype,"_fieldSearch",2);J([x()],W.prototype,"_collapsedFields",2);J([x()],W.prototype,"_tagInputs",2);J([x()],W.prototype,"_tagSuggestions",2);J([x()],W.prototype,"_tagLoading",2);J([x()],W.prototype,"_datePresets",2);J([x()],W.prototype,"_dateFroms",2);J([x()],W.prototype,"_dateTos",2);J([x()],W.prototype,"_specificModeFields",2);J([x()],W.prototype,"_selectSearches",2);J([x()],W.prototype,"_textDrafts",2);J([x()],W.prototype,"_pendingOperators",2);J([x()],W.prototype,"_utagQueries",2);J([x()],W.prototype,"_utagEntries",2);J([x()],W.prototype,"_utagLoading",2);J([x()],W.prototype,"_utagLabels",2);W=J([O("ap-filter-metadata")],W);var Vh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,ae=(t,e,s,i)=>{for(var r=i>1?void 0:i?Bh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Vh(e,s,r),r};let Z=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.mode="field",this.activeKey=F.STATUS,this.appliedKeys=[],this.pinnedKeys=[],this.forcedKeys=[],this.selectedStatus=[],this.statusOperator=ss,this.approverValues=[],this.approverOperator=ss,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=ss,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch="",this._pendingOperators={}}_operatorFor(t,e,s){return s.length>0?e:this._pendingOperators[t]||e}_setPendingOperator(t,e){this._pendingOperators={...this._pendingOperators,[t]:e}}_clearPendingOperator(t){const{[t]:e,...s}=this._pendingOperators;this._pendingOperators=s}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===Me||t===Ie)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _hasApproverUsers(){return this.approverUsers.length>0}get _hasRequesterUsers(){return this.requesterUsers.length>0}get _effectiveStatusOperator(){return this._operatorFor(F.STATUS,this.statusOperator,this.selectedStatus)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(i=>i!==t):[...this.selectedStatus,t];if(e.length>0&&e.every(i=>i===Me||i===Ie)){this._clearPendingOperator(F.STATUS),this._emitChange(F.STATUS,e,this.statusOperator);return}this._emitChange(F.STATUS,e,this._effectiveStatusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._setPendingOperator(F.STATUS,e),this._emitChange(F.STATUS,this.selectedStatus,e)}_clearStatus(){this._clearPendingOperator(F.STATUS),this._emitChange(F.STATUS,[],this.statusOperator)}get _effectiveApproverOperator(){return this._operatorFor(F.APPROVER,this.approverOperator,this.approverValues)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(F.APPROVER,e,this._effectiveApproverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._setPendingOperator(F.APPROVER,e),this._emitChange(F.APPROVER,this.approverValues,e)}_clearApprover(){this._clearPendingOperator(F.APPROVER),this._emitChange(F.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}get _effectiveRequesterOperator(){return this._operatorFor(F.REQUESTOR,this.requesterOperator,this.requesterValues)}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(F.REQUESTOR,e,this._effectiveRequesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._setPendingOperator(F.REQUESTOR,e),this._emitChange(F.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._clearPendingOperator(F.REQUESTOR),this._emitChange(F.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===He.BEFORE||t===He.AFTER||t===He.BETWEEN||t===He.SPECIFIC?t:He.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",r="";if(s===He.PRESET){const a=ns(e);a&&(i=a.from,r=a.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:r})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:F.DUE_DATE,values:{field:F.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var r;return i.name.toLowerCase().includes(s)||(((r=i.email)==null?void 0:r.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const e=this.selectedStatus.length>0||!!this._pendingOperators[F.STATUS];return c`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${this._clearStatus}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${Ra.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
          .value=${this._effectiveStatusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${$i.map(s=>c`
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
          ${Rc.map(s=>c`
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
          ${t.email?c`<span class="user-email">${t.email}</span>`:m}
        </span>
      </div>
    `}_renderUserSelectedChips(t,e,s){return e.length===0?m:c`
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
          `:m})}
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
          .options=${Ra.map(r=>({...r,label:this.t(r.labelKey,r.label)}))}
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
              `:m}
        </div>

        <div class="options-list users-list">
          ${i.length===0?c`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:i.map(r=>this._renderUserItem(r,t.selectedValues.includes(r.uuid),()=>t.onToggle(r.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this._effectiveApproverOperator,filterKey:F.APPROVER,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this._effectiveRequesterOperator,filterKey:F.REQUESTOR,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return c`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearDueDate}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${$i.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===Me||this.dueDatePreset===Ie?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${yi.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==Me&&this.dueDatePreset!==Ie?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?c`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset!=="before"?c`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("startDate","Start date")}</span>
                        <sfx-date-input
                          .locale=${We(this.locale)}
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        ></sfx-date-input>
                      </div>
                    `:m}
                ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?c`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("endDate","End date")}</span>
                        <sfx-date-input
                          .locale=${We(this.locale)}
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        ></sfx-date-input>
                      </div>
                    `:m}
              </div>
            `:m}
      </div>
    `}get _availableSubFilters(){return nt.filter(t=>this.forcedKeys.includes(t.key)?!1:t.key===F.APPROVER?this._hasApproverUsers:t.key===F.REQUESTOR?this._hasRequesterUsers:!0)}_emitSubFilterSelect(t){this.dispatchEvent(new CustomEvent("approval-filter-select",{detail:{key:t},bubbles:!0,composed:!0}))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:e},bubbles:!0,composed:!0}))}_renderSelector(){return c`
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
              ${e?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:m}
            </div>
          `})}
      </div>
    `}render(){if(this.mode==="selector")return this._renderSelector();switch(this.activeKey){case F.APPROVER:return c`<div class="filter-content">${this._renderApproverSection()}</div>`;case F.REQUESTOR:return c`<div class="filter-content">${this._renderRequesterSection()}</div>`;case F.DUE_DATE:return c`<div class="filter-content">${this._renderDueDateSection()}</div>`;default:return c`<div class="filter-content">${this._renderStatusSection()}</div>`}}};Z.styles=[Ue,st,A`
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
    `];ae([u({attribute:!1})],Z.prototype,"t",2);ae([u()],Z.prototype,"locale",2);ae([u()],Z.prototype,"mode",2);ae([u()],Z.prototype,"activeKey",2);ae([u({type:Array})],Z.prototype,"appliedKeys",2);ae([u({type:Array})],Z.prototype,"pinnedKeys",2);ae([u({type:Array})],Z.prototype,"forcedKeys",2);ae([u({type:Array})],Z.prototype,"selectedStatus",2);ae([u()],Z.prototype,"statusOperator",2);ae([u({type:Array})],Z.prototype,"approverValues",2);ae([u()],Z.prototype,"approverOperator",2);ae([u({type:Array})],Z.prototype,"approverUsers",2);ae([u({type:Array})],Z.prototype,"requesterValues",2);ae([u()],Z.prototype,"requesterOperator",2);ae([u({type:Array})],Z.prototype,"requesterUsers",2);ae([u()],Z.prototype,"dueDateKind",2);ae([u()],Z.prototype,"dueDatePreset",2);ae([u()],Z.prototype,"dueDateFrom",2);ae([u()],Z.prototype,"dueDateTo",2);ae([x()],Z.prototype,"_approverSearch",2);ae([x()],Z.prototype,"_requesterSearch",2);ae([x()],Z.prototype,"_pendingOperators",2);Z=ae([O("ap-filter-approval")],Z);var Kh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Ye=(t,e,s,i)=>{for(var r=i>1?void 0:i?qh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Kh(e,s,r),r};const Hh=300;function Gh(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let ze=class extends E{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Gh(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.PRODUCT_REF,values:e,operator:S.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Hh)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.get("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
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
              `:m}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button class="clear-btn" @click=${this._clearAll}>
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:m}

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
            `:m}

        <!-- Search results -->
        ${this._isSearching?c`
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
        ${this._isSearching?m:c`
              <div class="placeholder">
                ${t?c`<sfx-icon
                      name="box"
                      .size=${40}
                      ${D({color:"var(--sfx-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}
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
        ${this._isLoading?c`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:m}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?c`<div class="no-results">${this.t("noResultsFound","No results found")}</div>`:m}
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
          `:m}
    `}};ze.styles=[Ue,st,A`
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
    `];Ye([u({type:Array})],ze.prototype,"selected",2);Ye([u({attribute:!1})],ze.prototype,"apiClient",2);Ye([u({attribute:!1})],ze.prototype,"t",2);Ye([tt(".product-search")],ze.prototype,"_searchInput",2);Ye([x()],ze.prototype,"_search",2);Ye([x()],ze.prototype,"_debouncedSearch",2);Ye([x()],ze.prototype,"_products",2);Ye([x()],ze.prototype,"_isLoading",2);Ye([x()],ze.prototype,"_showAddList",2);Ye([x()],ze.prototype,"_addListText",2);ze=Ye([O("ap-filter-product-ref")],ze);var Yh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,R=(t,e,s,i)=>{for(var r=i>1?void 0:i?Qh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Yh(e,s,r),r};let I=class extends E{constructor(){super(...arguments),this.totalCount=0,this.totalIsLowerBound=!1,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=Sr,this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.enabledFilterKeys=null,this.enabledMetadataFields=null,this.metadataCategoryEnabled=!0,this.approverUsers=[],this.requesterUsers=[],this.rootFolderPath="/",this.activeTab="assets",this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(a=>{var o;return a instanceof HTMLElement&&a.classList.contains("chip")&&((o=a.closest)==null?void 0:o.call(a,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(r=>r instanceof HTMLElement?r.classList.contains("popover-anchor")||r.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&e.some(r=>r instanceof HTMLElement&&(r.classList.contains("dropdown-menu")||r.classList.contains("filter-dropdown")||r.classList.contains("submenu-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,r=e.offsetWidth;this._externalLeft+r>i-8&&(e.style.left=`${Math.max(8,i-r-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showApprovalSelector=!1,this._showMetadataSelector=!this._showMetadataSelector}_toggleApprovalSelector(){this._showMetadataSelector=!1,this._showApprovalSelector=!this._showApprovalSelector}_handleApprovalFilterSelect(t){t.stopPropagation();const e=t.detail.key;if(this._showApprovalSelector=!1,this._showDropdown=!1,!(e in this.filters.applied)){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:e},bubbles:!0,composed:!0}));return}this._openFilter=e,this._openMetadataField=null,this._clearExternalAnchor()}_clearExternalAnchor(){this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const r=t==="approval"&&this._isApprovalActive();if(!e&&!this._isFilterActive(t)&&!r){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleVariantDefaultChange(t){this.dispatchEvent(new CustomEvent("variant-default-change",{detail:{name:t.detail.value},bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalSubKey(t){return!!t&&nt.some(e=>e.key===t)}_isApprovalActive(){const t=this.filters.applied;return F.STATUS in t||F.APPROVER in t||F.REQUESTOR in t||F.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i,folderUuids:r}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i,folderUuids:r},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e,this._clearExternalAnchor()}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${Ti[e.type]||""}${e.key}`===t)return e.label;return t}get _visibleAppliedMetadataCount(){if(!this.metadataCategoryEnabled)return 0;const t=this.enabledMetadataFields;return t?Object.keys(this.filters.metadata.applied).filter(e=>t.includes(os(e))).length:Object.keys(this.filters.metadata.applied).length}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Ts.find(s=>s.key===t)??nt.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var i;const{t:e}=this,s=this.filters.applied;switch(t){case"type":{const r=s.type;return c`<ap-filter-type
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
        ></ap-filter-labels>`}case"folders":{const r=s.folders;return c`<ap-filter-folders
          .apiClient=${this.apiClient}
          .rootPath=${this.rootFolderPath}
          .selected=${(r==null?void 0:r.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-folders>`}case"color":{const r=s.color;return c`<ap-filter-color
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
          .locale=${this.locale}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const r=s.asset_expiration;return c`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(r==null?void 0:r.kind)||null}
          .from=${(r==null?void 0:r.from)||""}
          .to=${(r==null?void 0:r.to)||""}
          .preset=${(r==null?void 0:r.preset)||""}
          .locale=${this.locale}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const r=s.size,a=((i=r==null?void 0:r.values)==null?void 0:i[0])||"",[o,n]=a.split(".."),l=o?parseFloat(o)/1e6:0,d=n?parseFloat(n)/1e6:0;return c`<ap-filter-size
          .min=${l}
          .max=${d}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const r=s.image,a=r&&"resolution"in r?r:null;return c`<ap-filter-image
          .selectedResolution=${(a==null?void 0:a.resolution)||[]}
          .selectedOrientation=${(a==null?void 0:a.orientation)||[]}
          .selectedFaces=${(a==null?void 0:a.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case $.APPROVAL:return this._renderApprovalSelector();case F.STATUS:case F.APPROVER:case F.REQUESTOR:case F.DUE_DATE:{const r=s[F.STATUS],a=s[F.APPROVER],o=s[F.REQUESTOR],n=s[F.DUE_DATE];return c`<ap-filter-approval
          mode="field"
          .activeKey=${t}
          .selectedStatus=${(r==null?void 0:r.values)||[]}
          .statusOperator=${(r==null?void 0:r.operator)||ss}
          .approverValues=${(a==null?void 0:a.values)||[]}
          .approverOperator=${(a==null?void 0:a.operator)||ss}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(o==null?void 0:o.values)||[]}
          .requesterOperator=${(o==null?void 0:o.operator)||ss}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(n==null?void 0:n.kind)??null}
          .dueDatePreset=${(n==null?void 0:n.preset)||""}
          .dueDateFrom=${(n==null?void 0:n.from)||""}
          .dueDateTo=${(n==null?void 0:n.to)||""}
          .locale=${this.locale}
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
        ></ap-filter-product-ref>`}default:return m}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",r=s?this._visibleAppliedMetadataCount>0:i?this._isApprovalActive():this._isFilterActive(t.key),a=this.pinnedFilters.includes(t.key),o=s||i,n=c`
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
            `:m}
        ${i&&this._showApprovalSelector?c` <div class="submenu-overlay">${this._renderApprovalSelector()}</div> `:m}
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
    ></ap-filter-approval>`}render(){const{t}=this,e=Object.keys(this.filters.applied).filter(i=>xi(i,this.activeTab)).length+this._visibleAppliedMetadataCount,s=Ts.filter(i=>!this.forcedFilterKeys.includes(i.key)&&xi(i.key,this.activeTab)&&(!this.enabledFilterKeys||this.enabledFilterKeys.includes(i.key)));return c`
      <div class="toolbar-row">
        ${this.isLoading?c`<span class="count-skeleton"></span>`:c`<span class="count"
              >${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?this.totalIsLowerBound?t("assetCountAtLeast",{count:this.totalCount,defaultValue_one:"{{count}}+ asset",defaultValue_other:"{{count}}+ assets"}):t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span
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
          ${this.showVariants?c`
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
          ${this.showCreateFolder?c`
                <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
                  <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
                  New folder
                </button>
              `:m}
          ${this.showUpload?c`
                <button class="upload-btn" @click=${this._handleUploadClick}>
                  <sfx-icon name="upload" .size=${16}></sfx-icon>
                  ${t("upload","Upload")}
                </button>
              `:m}
        </div>
      </div>
      ${this._openFilter?c`
            <div
              class="popover-anchor ${this._externalTrigger?"external":""}"
              ${D(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}
            >
              ${this._externalTrigger?m:c`
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
                              ${t(ts[this._openFilter]??this._openFilter,Mt[this._openFilter]||this._openFilter)}
                            `:c`
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${t(ts[this._openFilter]??this._openFilter,Mt[this._openFilter]||this._openFilter)}
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
          `:m}
    `}};I.styles=A`
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
  `;R([u({type:Number})],I.prototype,"totalCount",2);R([u({type:Boolean})],I.prototype,"totalIsLowerBound",2);R([u({type:Number})],I.prototype,"totalFolderCount",2);R([u({type:Boolean})],I.prototype,"isLoading",2);R([u({type:Boolean})],I.prototype,"showUpload",2);R([u({type:Boolean})],I.prototype,"showCreateFolder",2);R([u({type:Boolean})],I.prototype,"showFilters",2);R([u()],I.prototype,"countLabel",2);R([u()],I.prototype,"sortBy",2);R([u()],I.prototype,"sortDirection",2);R([u({type:Array})],I.prototype,"sortOptions",2);R([u({type:Boolean})],I.prototype,"showVariants",2);R([u({type:Array})],I.prototype,"variantOptions",2);R([u()],I.prototype,"defaultVariantName",2);R([u({type:Object})],I.prototype,"filters",2);R([u({type:Array})],I.prototype,"labels",2);R([u({type:Array})],I.prototype,"tags",2);R([u({type:Array})],I.prototype,"fileTypes",2);R([u({type:Array})],I.prototype,"metadataFields",2);R([u({type:Array})],I.prototype,"pinnedFilters",2);R([u({type:Array})],I.prototype,"forcedFilterKeys",2);R([u({type:Array})],I.prototype,"enabledFilterKeys",2);R([u({type:Array})],I.prototype,"enabledMetadataFields",2);R([u({type:Boolean})],I.prototype,"metadataCategoryEnabled",2);R([u({type:Array})],I.prototype,"approverUsers",2);R([u({type:Array})],I.prototype,"requesterUsers",2);R([u({attribute:!1})],I.prototype,"apiClient",2);R([u()],I.prototype,"rootFolderPath",2);R([u()],I.prototype,"activeTab",2);R([u({attribute:!1})],I.prototype,"t",2);R([u()],I.prototype,"locale",2);R([tt("sfx-dropdown")],I.prototype,"_sortDropdown",2);R([x()],I.prototype,"_showDropdown",2);R([x()],I.prototype,"_showMetadataSelector",2);R([x()],I.prototype,"_showApprovalSelector",2);R([x()],I.prototype,"_openFilter",2);R([x()],I.prototype,"_openMetadataField",2);R([x()],I.prototype,"_externalTrigger",2);R([x()],I.prototype,"_externalLeft",2);R([x()],I.prototype,"_externalTop",2);I=R([O("ap-content-toolbar")],I);var Wh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Wh(e,s,r),r};let ce=class extends E{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.enabledFilters=null,this.enabledMetadataFields=null,this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeTab="assets",this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en"}_formatDate(t){return Go(t,this.locale)}_mapTypeLabel(t){var i;const e=(i=_i.find(r=>r.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_parseFiniteNumber(t){if(!t||!t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),r=this._parseFiniteNumber(s),a=this._parseFiniteNumber(i),o=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return r!==null&&a!==null?`${o(r)} – ${o(a)}`:r!==null?`> ${o(r)}`:a!==null?`< ${o(a)}`:e}_isNumericSizeSummary(t){if(t.values.length===0)return!1;const[e,s]=t.values[0].split("..");return this._parseFiniteNumber(e)!==null||this._parseFiniteNumber(s)!==null}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===$.SIZE)return this._getSizeSummary(s);if(e===$.COLOR){const a=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return a.length===0?"":a.length===1?a[0]:`${a[0]} +${a.length-1}`}const i=a=>a===Me?this.t("empty","Empty"):a===Ie?this.t("notEmpty","Not empty"):null;if(s.metadataType===C.DATE){const a=i(s.values[0]);if(a)return a;if(s.metaDatePreset){const o=yi.find(n=>n.value===s.metaDatePreset);if(o)return this.t(o.labelKey,o.label)}if(s.values.length===2){const[o,n]=s.values;return`${this._formatDate(o)} – ${this._formatDate(n)}`}return s.values.length===1?s.operator===S.LESS_THAN?`< ${this._formatDate(s.values[0])}`:s.operator===S.GREATER_THAN?`> ${this._formatDate(s.values[0])}`:this._formatDate(s.values[0]):s.values.map(o=>this._formatDate(o)).join(", ")}if(s.metadataType===C.NUMERIC||s.metadataType===C.DECIMAL2){const a=i(s.values[0]);if(a)return a;const[o,n]=s.values;if(s.operator===S.RANGE)return o&&n?`${o} – ${n}`:"";if(s.operator===S.GREATER_THAN_OR_EQUAL)return o?`≥ ${o}`:"";if(s.operator===S.LESS_THAN_OR_EQUAL){const l=n??o;return l?`≤ ${l}`:""}return o||""}if(s.metadataType===C.ULTRATAGS){const a=o=>i(o)??rn(o,this.locale)??o;return s.values.length===1?a(s.values[0]):`${a(s.values[0])} +${s.values.length-1}`}const r=e===$.TYPE?a=>i(a)??this._mapTypeLabel(a):e===$.TAGS?a=>{var o;return i(a)??(((o=this.tags.find(n=>n.sid===a))==null?void 0:o.label)||a)}:e===$.LABELS?a=>{var o;return i(a)??(((o=this.labels.find(n=>n.sid===a))==null?void 0:o.name)||a)}:e===$.FOLDERS?a=>Vo(a):e===F.APPROVER?a=>{var o;return i(a)??(((o=this.approverUsers.find(n=>n.uuid===a))==null?void 0:o.name)||a)}:e===F.REQUESTOR?a=>{var o;return i(a)??(((o=this.requesterUsers.find(n=>n.uuid===a))==null?void 0:o.name)||a)}:a=>i(a)??a;return s.values.length===1?r(s.values[0]):`${r(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===F.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=t.preset||"";if(e===Me)return this.t("empty","Empty");if(e===Ie)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const s=yi.find(i=>i.value===e);return s?this.t(s.labelKey,s.label):e}if(t.kind==="between"){if(t.from&&t.to)return`${this._formatDate(t.from)} – ${this._formatDate(t.to)}`;if(t.from)return`> ${this._formatDate(t.from)}`;if(t.to)return`< ${this._formatDate(t.to)}`}return t.kind==="after"&&t.from?`> ${this._formatDate(t.from)}`:t.kind==="before"&&t.to?`< ${this._formatDate(t.to)}`:t.kind==="specific"&&t.from?this._formatDate(t.from):""}_getDateSummary(t){const e=Do.find(n=>n.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...Ro,...zo],r=t.preset?i.find(n=>n.value===t.preset):null,a=r?this.t(r.labelKey,r.label):t.preset||"";let o="";switch(t.kind){case"preset":o=a;break;case"before":o=t.to?`< ${this._formatDate(t.to)}`:a;break;case"after":o=t.from?`> ${this._formatDate(t.from)}`:a;break;case"between":t.from&&t.to?o=`${this._formatDate(t.from)} – ${this._formatDate(t.to)}`:t.from?o=`> ${this._formatDate(t.from)}`:t.to&&(o=`< ${this._formatDate(t.to)}`);break;case"specific":o=t.from?this._formatDate(t.from):"";break;default:o=a}return o?s?`${s}: ${o}`:o:""}_getFilterIcon(t){const e=Ts.find(s=>s.key===t)??nt.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_findMetadataField(t){return this.metadataFields.find(e=>e.key===t)}_getMetadataLabel(t,e=!1){var i,r;if(e)return((i=this._findMetadataField(t))==null?void 0:i.label)||t;const s=os(t);return((r=this._findMetadataField(s))==null?void 0:r.label)||s}_getMetadataIcon(t){const e=os(t),s=this._findMetadataField(e);return s&&di[s.type]||"file-text"}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_isForcedKeyMetadata(t,e){return!Io.has(t)||e.has(t)}_isForcedChipVisible(t,e){return Fc.has(t)?!0:this._isForcedKeyMetadata(t,e)?ci($.METADATA,this.enabledFilters)?!this.enabledMetadataFields||this.enabledMetadataFields.includes(t):!1:ci(t,this.enabledFilters)}_renderForcedChip(t,e,s){const{t:i}=this,r=this._isForcedKeyMetadata(t,s),a=this._getFilterSummary(e,r?void 0:t),o=!r&&e.type==="date",n=t===$.SIZE&&e.type==="string"&&this._isNumericSizeSummary(e),l=r?void 0:Mt[t],d=l?i(ts[t]??t,l):this._getMetadataLabel(t,!0);return c`
      <span class="chip forced">
        ${!r&&(o||t===$.TYPE||n)&&a?c`<span class="chip-label">${a}</span>`:c`
              <span class="chip-label">${d}</span>
              ${a?c`<span class="chip-summary">${a}</span>`:m}
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
            >${s(ts[t]??t,Mt[t]||t)}</span
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
                >${s(ts[t]??t,Mt[t]||t)}</span
              >
              ${i?c`<span class="chip-summary">${i}</span>`:m}
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
        ${s?c`<span class="chip-summary">${s}</span>`:m}
        <button
          class="chip-remove"
          @click=${a=>{a.stopPropagation(),this._removeMetadataFilter(t)}}
          title=${this.t("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}render(){const t=ar(this.forcedFilters),e=new Set(Object.keys(t)),i=ci($.METADATA,this.enabledFilters)?new Set(this.metadataFields.filter(y=>!this.enabledMetadataFields||this.enabledMetadataFields.includes(y.key)).map(y=>y.key)):new Set,r=y=>xi(y,this.activeTab),a=[...e].filter(y=>this._isForcedChipVisible(y,i)),o=Object.keys(this.appliedFilters).filter(y=>!e.has(y)&&r(y)),n=Object.keys(this.appliedMetadata),l=new Set(this.pinnedFilters),d=new Set(this.pinnedMetadataFields),p=this.pinnedFilters.filter(y=>!e.has(y)&&r(y)),f=o.filter(y=>!l.has(y)),h=n.filter(y=>!d.has(y)),g=this.pendingFilter&&!l.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),v=this.pendingMetadataField&&!d.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),b=this.activeMetadataField&&this.activeMetadataField!==this.pendingMetadataField&&!d.has(this.activeMetadataField)&&!(this.activeMetadataField in this.appliedMetadata),_=o.length+n.length>0;return a.length+p.length+this.pinnedMetadataFields.length+f.length+h.length+(g?1:0)+(v?1:0)+(b?1:0)===0?m:c`
      <div class="chips-row">
        <div class="chips">
          ${a.map(y=>this._renderForcedChip(y,t[y],i))}
          ${p.map(y=>this._renderFilterChip(y,this.appliedFilters[y]))}
          ${this.pinnedMetadataFields.map(y=>this._renderMetadataChip(y,this.appliedMetadata[y]))}
          ${f.map(y=>this._renderFilterChip(y,this.appliedFilters[y]))}
          ${g?c`
                <span
                  class="chip pinned-empty active pending"
                  @click=${y=>this._openFilter(this.pendingFilter,y)}
                >
                  <span class="chip-icon"
                    ><sfx-icon
                      name=${this._getFilterIcon(this.pendingFilter)}
                      .size=${16}
                    ></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(ts[this.pendingFilter]??this.pendingFilter,Mt[this.pendingFilter]||this.pendingFilter)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:m}
          ${h.map(y=>this._renderMetadataChip(y,this.appliedMetadata[y]))}
          ${v?c`
                <span
                  class="chip pinned-empty active pending"
                  @click=${y=>this._openMetadataFilter(this.pendingMetadataField,y)}
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
          ${_?c`<button class="clear-all" @click=${this._clearAll}>
                ${this.t("clearFilters","Clear filters")}
              </button>`:m}
        </div>
      </div>
    `}};ce.styles=A`
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
  `;me([u({type:Object})],ce.prototype,"appliedFilters",2);me([u({type:Object})],ce.prototype,"appliedMetadata",2);me([u({type:Object})],ce.prototype,"forcedFilters",2);me([u({type:Array})],ce.prototype,"enabledFilters",2);me([u({type:Array})],ce.prototype,"enabledMetadataFields",2);me([u({type:Array})],ce.prototype,"metadataFields",2);me([u({type:Array})],ce.prototype,"pinnedFilters",2);me([u({type:Array})],ce.prototype,"pinnedMetadataFields",2);me([u({type:Array})],ce.prototype,"tags",2);me([u({type:Array})],ce.prototype,"labels",2);me([u({type:Array})],ce.prototype,"approverUsers",2);me([u({type:Array})],ce.prototype,"requesterUsers",2);me([u()],ce.prototype,"activeTab",2);me([u()],ce.prototype,"activeFilter",2);me([u()],ce.prototype,"activeMetadataField",2);me([u()],ce.prototype,"pendingFilter",2);me([u()],ce.prototype,"pendingMetadataField",2);me([u({attribute:!1})],ce.prototype,"t",2);me([u()],ce.prototype,"locale",2);ce=me([O("ap-filters-bar")],ce);var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,de=(t,e,s,i)=>{for(var r=i>1?void 0:i?Zh(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Jh(e,s,r),r};const ep=6;let se=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.limitLocked=!1,this.limitTooltip="",this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.variantOverrides={},this.thumbnailMetadataFields=[],this.regionalFilters={},this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return c`
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
              ${D({"--sfx-stagger-index":String(i)})}
              data-asset-uuid=${e.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-variant-change=${r=>this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-card>
          `})}
        ${this.isLoading?Array.from({length:ep},()=>c`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                    ${this.thumbnailMetadataFields.length?c`<div class="ghost-thumb-meta">
                          ${this.thumbnailMetadataFields.map(()=>c`<div class="ghost-thumb-meta-row">
                                <div class="ghost-line"></div>
                              </div>`)}
                        </div>`:m}
                  </div>
                </div>`):m}
      </div>
    `}};se.styles=A`
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
  `;de([u({attribute:!1})],se.prototype,"t",2);de([u()],se.prototype,"locale",2);de([u({type:Array})],se.prototype,"assets",2);de([u({type:Array})],se.prototype,"folders",2);de([u({type:Object})],se.prototype,"folderPreviews",2);de([u({type:Array})],se.prototype,"selectedIds",2);de([u({type:Array})],se.prototype,"selectedFolderIds",2);de([u({type:Array})],se.prototype,"disabledAssetIds",2);de([u({type:Boolean})],se.prototype,"limitLocked",2);de([u({type:String})],se.prototype,"limitTooltip",2);de([u({type:Array})],se.prototype,"disabledFolderIds",2);de([u({type:Boolean})],se.prototype,"isLoading",2);de([u({type:Boolean})],se.prototype,"multiSelect",2);de([u({type:Boolean})],se.prototype,"folderSelectable",2);de([u({type:String})],se.prototype,"gridSize",2);de([u({type:Boolean})],se.prototype,"showVariants",2);de([u({type:Array})],se.prototype,"variantOptions",2);de([u({type:String})],se.prototype,"defaultVariantName",2);de([u({type:Object})],se.prototype,"variantOverrides",2);de([u({type:Array})],se.prototype,"thumbnailMetadataFields",2);de([u({type:Object})],se.prototype,"regionalFilters",2);se=de([O("ap-grid-view")],se);var tp=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,he=(t,e,s,i)=>{for(var r=i>1?void 0:i?sp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&tp(e,s,r),r};const ip=5;let ie=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.limitLocked=!1,this.limitTooltip="",this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this.showVariants=!1,this.variantOptions=[],this.defaultVariantName="original",this.variantOverrides={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px");const s=this.showVariants&&this.variantOptions.length>1;return e.push(s?"96px":"64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(r=>t.has(r.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(r=>s.has(r.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return c`
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
            </span>`:m}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        ${this._compactLevel<2?c`<span>${this.t("size","Size")}</span>`:m}
        ${this._compactLevel<1?c`<span>${this.t("date","Date")}</span>`:m}
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
              .locale=${this.locale}
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
        ${this.isLoading?Array.from({length:ip},(i,r)=>{const a=["70%","55%","80%","45%","65%"];return c`
                <div
                  class="ghost-row"
                  ${D({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
                >
                  ${this.multiSelect?c`<div class="ghost-el ghost-check"></div>`:m}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${D({width:a[r]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?c`<div class="ghost-el ghost-size"></div>`:m}
                  ${this._compactLevel<1?c`<div class="ghost-el ghost-date"></div>`:m}
                  <div></div>
                </div>
              `}):m}
      </div>
    `}};ie.styles=A`
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
  `;he([u({attribute:!1})],ie.prototype,"t",2);he([u()],ie.prototype,"locale",2);he([u({type:Array})],ie.prototype,"assets",2);he([u({type:Array})],ie.prototype,"folders",2);he([u({type:Array})],ie.prototype,"selectedIds",2);he([u({type:Array})],ie.prototype,"selectedFolderIds",2);he([u({type:Array})],ie.prototype,"disabledAssetIds",2);he([u({type:Boolean})],ie.prototype,"limitLocked",2);he([u({type:String})],ie.prototype,"limitTooltip",2);he([u({type:Array})],ie.prototype,"disabledFolderIds",2);he([u({type:Boolean})],ie.prototype,"isLoading",2);he([u({type:Boolean})],ie.prototype,"multiSelect",2);he([u({type:Boolean})],ie.prototype,"folderSelectable",2);he([u({type:Number})],ie.prototype,"totalCount",2);he([u({type:Boolean})],ie.prototype,"isSelectingAll",2);he([u({type:Object})],ie.prototype,"folderPreviews",2);he([u({type:Boolean})],ie.prototype,"showVariants",2);he([u({type:Array})],ie.prototype,"variantOptions",2);he([u({type:String})],ie.prototype,"defaultVariantName",2);he([u({type:Object})],ie.prototype,"variantOverrides",2);he([x()],ie.prototype,"_compactLevel",2);ie=he([O("ap-list-view")],ie);function dr(t,e,s=33,i=240){const r=Math.min(e*s+8,i),a=window.innerHeight-t.bottom,o=t.top;return a>=r||a>=o?"below":"above"}function an(t,e,s){return i=>{if(!t())return;const r=i.composedPath(),a=e();(!a||!r.includes(a))&&s()}}var rp=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,Fe=(t,e,s,i)=>{for(var r=i>1?void 0:i?ap(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&rp(e,s,r),r};let xe=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName="original",this.thumbnailMetadataFields=[],this.regionalFilters={},this._variantMenuOpen=!1,this._variantMenuPos="above",this._variantMenuFocusIndex=-1,this._outsideClickHandler=an(()=>this._variantMenuOpen,()=>{var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".variant-trigger-wrap")},()=>this._setVariantMenuOpen(!1))}_setVariantMenuOpen(t){this._variantMenuOpen=t,this.style.zIndex=t?"30":"",t||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".variant-menu-item");t&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<t.length&&t[this._variantMenuFocusIndex].focus()}_handleTriggerKeydown(t){if((t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&!this._variantMenuOpen){t.preventDefault();const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=dr(e,this.variantOptions.length),this._variantMenuFocusIndex=t.key==="ArrowUp"?this.variantOptions.length-1:Math.max(0,this.variantOptions.findIndex(s=>s.value===this.selectedVariantName)),this._setVariantMenuOpen(!0),this.updateComplete.then(()=>this._focusVariantMenuItem())}}_handleMenuKeydown(t){var e,s;switch(t.key){case"ArrowDown":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case"ArrowUp":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case"Enter":case" ":{t.preventDefault();const i=this.variantOptions[this._variantMenuFocusIndex];i&&this._selectVariant(t,i.value);break}case"Escape":t.preventDefault(),t.stopPropagation(),this._setVariantMenuOpen(!1),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".variant-trigger"))==null||s.focus();break;case"Tab":this._setVariantMenuOpen(!1);break}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),r=a=>String(a).padStart(2,"0");return e>0?`${e}:${r(s)}:${r(i)}`:`${r(s)}:${r(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}_toggleVariantMenu(t){if(t.stopPropagation(),!this._variantMenuOpen){const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=dr(e,this.variantOptions.length)}this._setVariantMenuOpen(!this._variantMenuOpen)}_selectVariant(t,e){var s,i;t.stopPropagation(),this._setVariantMenuOpen(!1),(i=(s=this.shadowRoot)==null?void 0:s.querySelector(".variant-trigger"))==null||i.focus(),this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:{uuid:this.asset.uuid,name:e,asset:this.asset,index:this.index},bubbles:!0}))}_renderThumbnailMetadata(t){return this.thumbnailMetadataFields.length?c`
      <dl class="thumb-meta">
        ${this.thumbnailMetadataFields.map(e=>{const s=kr(Cd(t,e),e,this.regionalFilters,this.locale).trim();return c`
            <div class="thumb-meta-row">
              <dt title=${e.label}>${e.label}:</dt>
              ${s?c`<dd title=${s}>${s}</dd>`:c`<dd>
                    <span aria-hidden="true">—</span
                    ><span class="sr-only">${this.t("noValue","No value")}</span>
                  </dd>`}
            </div>
          `})}
      </dl>
    `:m}render(){var f,h,g,v,b,_,T;const t=this.asset;if(!t)return c``;const e=zt(t.type),s=e==="video",i=e==="image",r=((f=t.extension)==null?void 0:f.toLowerCase())==="pdf",a=!!((h=t.info)!=null&&h.thumbnail||(g=t.info)!=null&&g.image_thumbnail||(v=t.info)!=null&&v.preview),o=Co(t.extension||"")||a;let n="";s?n=Fo(t):r?n=xr(t):o&&(n=bi(t,i?this.selectedVariantName:void 0));const l=this.showVariants&&this.variantOptions.length>1&&i,d=qs(t.extension||""),p=br(t.extension||"");return c`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${p&&n?"chess":""}">
          ${n?c`<img
                src=${n}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${p?"transparent-asset":""}"
                @error=${y=>{const M=y.target,k=rs();M.src!==d&&M.src!==k?(M.src=d,M.classList.add("icon-fallback")):M.src!==k&&(M.src=k)}}
              />`:c`<img
                src=${d}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${y=>{const M=y.target,k=rs();M.src!==k&&(M.src=k)}}
              />`}
          ${s&&(((b=t.info)==null?void 0:b.video_duration)??((_=t.info)==null?void 0:_.duration))!=null?c`<span class="duration"
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
              `:m}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div
            class="info-secondary ${l?"has-variants":""} ${this._variantMenuOpen?"menu-open":""}"
          >
            <div class="meta">
              ${$r(t.extension)}${(()=>{var L,B,K,oe;const y=((L=t.info)==null?void 0:L.img_w)||((B=t.info)==null?void 0:B.video_w),M=((K=t.info)==null?void 0:K.img_h)||((oe=t.info)==null?void 0:oe.video_h),k=Yo(y,M);return k?` · ${k}`:""})()}
              · ${yr(((T=t.size)==null?void 0:T.bytes)||0)}
            </div>
            ${l?(()=>{var M;const y=((M=this.variantOptions.find(k=>k.value===this.selectedVariantName))==null?void 0:M.label)??this.selectedVariantName;return c`
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
                          title=${y}
                          aria-label=${this.t("insertAs","Insert as")}
                          aria-haspopup="listbox"
                          aria-expanded=${this._variantMenuOpen}
                        >
                          <span class="variant-trigger-label">${y}</span>
                          <sfx-icon name="chevron-down" .size=${12}></sfx-icon>
                        </button>
                        ${this._variantMenuOpen?c`
                              <div
                                class="variant-menu ${this._variantMenuPos}"
                                role="listbox"
                                @keydown=${this._handleMenuKeydown}
                              >
                                ${this.variantOptions.map((k,L)=>c`
                                    <button
                                      class="variant-menu-item ${k.value===this.selectedVariantName?"active":""} ${L===this._variantMenuFocusIndex?"focused":""}"
                                      role="option"
                                      aria-selected=${k.value===this.selectedVariantName}
                                      @click=${B=>this._selectVariant(B,k.value)}
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
    `}};xe.styles=A`
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
  `;Fe([u({attribute:!1})],xe.prototype,"t",2);Fe([u()],xe.prototype,"locale",2);Fe([u({type:Object})],xe.prototype,"asset",2);Fe([u({type:Number})],xe.prototype,"index",2);Fe([u({type:Boolean,reflect:!0})],xe.prototype,"selected",2);Fe([u({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);Fe([u({type:Boolean})],xe.prototype,"multiSelect",2);Fe([u({type:Boolean})],xe.prototype,"showVariants",2);Fe([u({type:Array})],xe.prototype,"variantOptions",2);Fe([u({type:String})],xe.prototype,"selectedVariantName",2);Fe([u({type:Array})],xe.prototype,"thumbnailMetadataFields",2);Fe([u({type:Object})],xe.prototype,"regionalFilters",2);Fe([x()],xe.prototype,"_variantMenuOpen",2);Fe([x()],xe.prototype,"_variantMenuPos",2);Fe([x()],xe.prototype,"_variantMenuFocusIndex",2);xe=Fe([O("ap-asset-card")],xe);var op=Object.defineProperty,np=Object.getOwnPropertyDescriptor,Te=(t,e,s,i)=>{for(var r=i>1?void 0:i?np(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&op(e,s,r),r};let ke=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName="original",this._variantMenuOpen=!1,this._variantMenuPos="above",this._variantMenuFocusIndex=-1,this._outsideClickHandler=an(()=>this._variantMenuOpen,()=>{var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(".variant-control-wrap")},()=>this._setVariantMenuOpen(!1))}_setVariantMenuOpen(t){this._variantMenuOpen=t,this.style.zIndex=t?"30":"",t||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".variant-menu-item");t&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<t.length&&t[this._variantMenuFocusIndex].focus()}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}_toggleVariantMenu(t){if(t.stopPropagation(),!this._variantMenuOpen){const e=t.currentTarget.getBoundingClientRect();this._variantMenuPos=dr(e,this.variantOptions.length),this._variantMenuFocusIndex=Math.max(0,this.variantOptions.findIndex(s=>s.value===this.selectedVariantName))}this._setVariantMenuOpen(!this._variantMenuOpen)}_handleVariantTriggerKeydown(t){!this._variantMenuOpen&&(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._toggleVariantMenu(t),this.updateComplete.then(()=>this._focusVariantMenuItem()))}_handleVariantMenuKeydown(t){var e,s;switch(t.key){case"ArrowDown":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case"ArrowUp":t.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case"Enter":case" ":{t.preventDefault();const i=this.variantOptions[this._variantMenuFocusIndex];i&&this._selectVariant(t,i.value);break}case"Escape":t.preventDefault(),t.stopPropagation(),this._setVariantMenuOpen(!1),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".variant-btn"))==null||s.focus();break;case"Tab":this._setVariantMenuOpen(!1);break}}_selectVariant(t,e){var s,i;t.stopPropagation(),this._setVariantMenuOpen(!1),(i=(s=this.shadowRoot)==null?void 0:s.querySelector(".variant-btn"))==null||i.focus(),this.dispatchEvent(new CustomEvent("asset-variant-change",{detail:{uuid:this.asset.uuid,name:e,asset:this.asset,index:this.index},bubbles:!0}))}get _isImageAsset(){var t;return zt(((t=this.asset)==null?void 0:t.type)??"")==="image"}_getGridColumns(){const t=[];this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px");const e=this.showVariants&&this.variantOptions.length>1;return t.push(e?"96px":"64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,p,f,h,g;const t=this.asset;if(!t)return c``;const s=zt(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",r=!!((p=t.info)!=null&&p.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(h=t.info)!=null&&h.preview),a=Co(t.extension||"")||r;let o="";s?o=Fo(t):i?o=xr(t):a&&(o=bi(t,this._isImageAsset?this.selectedVariantName:void 0));const n=qs(t.extension||""),l=br(t.extension||"");return c`
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
            `:m}
        <div class="thumb ${l&&o?"chess":""}">
          ${o?c`<img
                src=${o}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${v=>{const b=v.target,_=rs();b.src!==n&&b.src!==_?(b.src=n,b.classList.add("icon-fallback")):b.src!==_&&(b.src=_)}}
              />`:c`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${v=>{const b=v.target,_=rs();b.src!==_&&(b.src=_)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${$r(t.extension)}</div>
        ${this.compactLevel<2?c`<div class="desc">${yr(((g=t.size)==null?void 0:g.bytes)||0)}</div>`:m}
        ${this.compactLevel<1?c`<div class="date">${Ls(t.created_at||"",this.locale)}</div>`:m}
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
          ${this.showVariants&&this.variantOptions.length>1&&this._isImageAsset?(()=>{var b;const v=((b=this.variantOptions.find(_=>_.value===this.selectedVariantName))==null?void 0:b.label)??this.selectedVariantName;return c`
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
                    ${this._variantMenuOpen?c`
                          <div
                            class="variant-menu ${this._variantMenuPos}"
                            role="listbox"
                            @keydown=${this._handleVariantMenuKeydown}
                            @click=${_=>_.stopPropagation()}
                          >
                            ${this.variantOptions.map((_,T)=>c`
                                <button
                                  class="variant-menu-item ${_.value===this.selectedVariantName?"active":""} ${T===this._variantMenuFocusIndex?"focused":""}"
                                  role="option"
                                  aria-selected=${_.value===this.selectedVariantName}
                                  @click=${y=>this._selectVariant(y,_.value)}
                                  @mouseenter=${()=>{this._variantMenuFocusIndex=T}}
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
    `}};ke.styles=A`
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
  `;Te([u({attribute:!1})],ke.prototype,"t",2);Te([u()],ke.prototype,"locale",2);Te([u({type:Object})],ke.prototype,"asset",2);Te([u({type:Number})],ke.prototype,"index",2);Te([u({type:Boolean,reflect:!0})],ke.prototype,"selected",2);Te([u({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);Te([u({type:Boolean})],ke.prototype,"multiSelect",2);Te([u({type:Number})],ke.prototype,"compactLevel",2);Te([u({type:Boolean})],ke.prototype,"showVariants",2);Te([u({type:Array})],ke.prototype,"variantOptions",2);Te([u({type:String})],ke.prototype,"selectedVariantName",2);Te([x()],ke.prototype,"_variantMenuOpen",2);Te([x()],ke.prototype,"_variantMenuPos",2);Te([x()],ke.prototype,"_variantMenuFocusIndex",2);ke=Te([O("ap-asset-row")],ke);var lp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,Et=(t,e,s,i)=>{for(var r=i>1?void 0:i?cp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&lp(e,s,r),r};let Ze=class extends E{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return Oo(t,"200")}_renderPreviewImg(t){const e=Ao(t.file_type),s=this._getPreviewUrl(t),i=qs(Oi(t.file_type)),r=rs();return c`<div class="preview-slot ${e?"icon-bg":""}">
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
          ${t[2]?c`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:m}
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
              ${i>0?c`<span>${i} sub-asset${i!==1?"s":""}</span>`:m}
            </div>
          </div>
        </div>
      </div>
    `}};Ze.styles=[Ue,A`
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
    `];Et([u({type:Object})],Ze.prototype,"folder",2);Et([u({type:Array})],Ze.prototype,"previews",2);Et([u({type:Boolean,reflect:!0})],Ze.prototype,"selected",2);Et([u({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);Et([u({type:Boolean})],Ze.prototype,"selectable",2);Et([u({type:Boolean})],Ze.prototype,"multiSelect",2);Et([u({type:Number})],Ze.prototype,"index",2);Ze=Et([O("ap-folder-card")],Ze);var dp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,it=(t,e,s,i)=>{for(var r=i>1?void 0:i?hp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&dp(e,s,r),r};let Be=class extends E{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.locale="en",this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=Ao(t.file_type),s=Oo(t,"80"),i=qs(Oi(t.file_type)),r=rs();return c`<div class="preview-slot ${e?"icon-bg":""}">
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
              </div>`:c`<div></div>`:m}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?c`<div class="meta">
              ${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items
            </div>`:m}
        ${this.compactLevel<1?c`<div class="meta">
              ${Ls(t.modified_at||t.updated_at||"",this.locale)}
            </div>`:m}
        <div></div>
      </div>
    `:c``}};Be.styles=A`
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
  `;it([u({type:Object})],Be.prototype,"folder",2);it([u({type:Array})],Be.prototype,"previews",2);it([u({type:Boolean,reflect:!0})],Be.prototype,"selected",2);it([u({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);it([u({type:Boolean})],Be.prototype,"selectable",2);it([u()],Be.prototype,"locale",2);it([u({type:Boolean})],Be.prototype,"multiSelect",2);it([u({type:Number})],Be.prototype,"index",2);it([u({type:Number})],Be.prototype,"compactLevel",2);Be=it([O("ap-folder-row")],Be);var pp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,Er=(t,e,s,i)=>{for(var r=i>1?void 0:i?up(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&pp(e,s,r),r};let Is=class extends E{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
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
    `}};Is.styles=[Ue,A`
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
    `];Er([u({type:Object})],Is.prototype,"label",2);Er([u({type:Number})],Is.prototype,"index",2);Is=Er([O("ap-label-card")],Is);var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,Fr=(t,e,s,i)=>{for(var r=i>1?void 0:i?gp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&fp(e,s,r),r};let Ds=class extends E{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
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
    `}};Ds.styles=A`
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
  `;Fr([u({type:Object})],Ds.prototype,"label",2);Fr([u({type:Number})],Ds.prototype,"index",2);Ds=Fr([O("ap-label-row")],Ds);var mp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,Or=(t,e,s,i)=>{for(var r=i>1?void 0:i?vp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&mp(e,s,r),r};let Rs=class extends E{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
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
    `:c``}};Rs.styles=[Ue,A`
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
    `];Or([u({type:Object})],Rs.prototype,"collection",2);Or([u({type:Number})],Rs.prototype,"index",2);Rs=Or([O("ap-collection-card")],Rs);var bp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Li=(t,e,s,i)=>{for(var r=i>1?void 0:i?xp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&bp(e,s,r),r};let ls=class extends E{constructor(){super(...arguments),this.index=0,this.locale="en"}_formatDate(t){return t?Ls(t,this.locale):""}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
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
    `:c``}};ls.styles=A`
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
  `;Li([u({type:Object})],ls.prototype,"collection",2);Li([u({type:Number})],ls.prototype,"index",2);Li([u()],ls.prototype,"locale",2);ls=Li([O("ap-collection-row")],ls);var _p=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,Tr=(t,e,s,i)=>{for(var r=i>1?void 0:i?yp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&_p(e,s,r),r};let zs=class extends E{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
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
    `:c``}};zs.styles=[Ue,A`
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
    `];Tr([u({type:Object})],zs.prototype,"folder",2);Tr([u({type:Number})],zs.prototype,"index",2);zs=Tr([O("ap-collection-folder-card")],zs);var $p=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,Lr=(t,e,s,i)=>{for(var r=i>1?void 0:i?wp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&$p(e,s,r),r};let Ns=class extends E{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
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
  `;Lr([u({type:Object})],Ns.prototype,"folder",2);Lr([u({type:Number})],Ns.prototype,"index",2);Ns=Lr([O("ap-collection-folder-row")],Ns);var kp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,gs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Sp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&kp(e,s,r),r};let Ct=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const o=this.gridSize==="large"?"280px":"220px";return c`
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
    `}};Ct.styles=A`
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
  `;gs([u({attribute:!1})],Ct.prototype,"t",2);gs([u({reflect:!0})],Ct.prototype,"variant",2);gs([u({type:String})],Ct.prototype,"gridSize",2);gs([u({type:Boolean})],Ct.prototype,"multiSelect",2);gs([u({type:Number})],Ct.prototype,"folderCount",2);Ct=gs([O("ap-skeleton")],Ct);var Cp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,be=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ap(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Cp(e,s,r),r};let ue=class extends E{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.selectedVariantName="original",this.t=(t,e)=>typeof e=="string"?e:t,this.locale="en",this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=zt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,r;const e=ic(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:a}=await U(async()=>{const{default:n}=await import("./hls.light-CLqSdhbI.js");return{default:n}},[]);if(!a.isSupported()||((r=this.asset)==null?void 0:r.uuid)!==t.uuid||!this.isConnected)return;const o=new a;this._hls=o,o.loadSource(e),o.attachMedia(s),o.on(a.Events.ERROR,(n,l)=>{var d;l.fatal&&(this._destroyHls(),s.src=((d=t.url)==null?void 0:d.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,r,a,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((r=(i=this.asset)==null?void 0:i.url)!=null&&r.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(a=this.previewArea)==null?void 0:a.requestFullscreen)==null||o.call(a)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=zt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var r,a;const e=(r=t.url)==null?void 0:r.cdn;if(!e)return bi(t,this.selectedVariantName)||"";const s={source:"asset",asset:t};if(((a=t.extension)==null?void 0:a.toLowerCase())==="svg")return qe(e,s);if(this.selectedVariantName&&this.selectedVariantName!=="original"){const o=Eo(t,this.selectedVariantName);if(o)return qe(o,s)}const i=as(e,this.containerToken);return qe(ct(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var o,n;const e=(o=t.info)==null?void 0:o.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,r=window.innerHeight,a=Math.min(i/e,r/s,1);return{width:`${Math.round(e*a)}px`,height:`${Math.round(s*a)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(r=>!r.label||i.has(r.sid)?!1:(i.add(r.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:$.TAGS,values:[t],operator:S.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:$.LABELS,values:[t],operator:S.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return m;const s=this._openSections.has("file-info");return c`
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
    `}_renderAccordion(t,e,s){if(s.length===0)return m;const i=this._openSections.has(t);return c`
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
    `}_getFileInfoRows(t){var s,i,r,a,o,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:$r(t.extension)}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:yr(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:Yo(t.info.img_w,t.info.img_h)}),(r=t.info)!=null&&r.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((a=t.info)==null?void 0:a.video_duration)??((o=t.info)==null?void 0:o.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:Ls(t.created_at,this.locale)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:Ls(t.modified_at,this.locale)}),e}_buildFieldMap(){return wr(this.metadataFields)}_resolveFieldValue(t,e){return kr(t,e,this.regionalFilters,this.locale)}_getAllMetadataRows(t){var a;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0)for(const o of this.metadataFields){const n=$d(t,o.key),l=this._resolveFieldValue(n,o);if(!l)continue;i.add(o.key),o.slug&&i.add(o.slug);const d=l.length>50;e.push({label:o.label,value:l,wrap:d})}if(t.meta)for(const[o,n]of Object.entries(t.meta)){if(i.has(o)||n==null||n==="")continue;const l=s.get(o);if(l){const d=this._resolveFieldValue(n,l);if(!d)continue;i.add(o);const p=d.length>50;e.push({label:l.label,value:d,wrap:p})}else{const d=typeof n=="object"?JSON.stringify(n):String(n);if(!d||d==="{}"||d==="[]")continue;i.add(o);const p=ki(o,o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),this.t),f=d.length>50;e.push({label:p,value:d,wrap:f})}}const r=(a=t.info)==null?void 0:a.metadata;if(r&&typeof r=="object")for(const[o,n]of Object.entries(r)){if(i.has(o)||n==null||n==="")continue;const l=s.get(o);if(l){const d=this._resolveFieldValue(n,l);if(!d)continue;i.add(o);const p=d.length>50;e.push({label:l.label,value:d,wrap:p})}else{const d=typeof n=="object"?JSON.stringify(n):String(n);if(!d||d==="{}"||d==="[]")continue;i.add(o);const p=ki(o,o.charAt(0).toUpperCase()+o.slice(1).replace(/_/g," "),this.t),f=d.length>50;e.push({label:p,value:d,wrap:f})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?m:c`
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
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?m:c`
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
    `}render(){var k,L,B,K,oe,re,Q,X;const t=this.asset;if(!t)return m;const e=zt(t.type),s=e==="image",i=e==="video",r=e==="audio",a=((k=t.extension)==null?void 0:k.toLowerCase())==="pdf",o=qs(t.extension||""),n=br(t.extension||""),l=((L=t.extension)==null?void 0:L.toLowerCase())==="svg",d=bi(t,this.selectedVariantName),p=s?l?qe(((B=t.url)==null?void 0:B.cdn)||"",{source:"asset",asset:t}):d||qe(as(((K=t.url)==null?void 0:K.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",f=s?this._getFullscreenImageUrl(t):"",h=s&&!l?this._getBlurDimensions(t):null,g=i&&((oe=t.url)==null?void 0:oe.cdn)||"",v=i?qe(((re=t.info)==null?void 0:re.video_thumbnail)||((Q=t.info)==null?void 0:Q.preview)||"",{source:"video",asset:t}):"",b=a&&!s?xr(t):"",_=this._getCurrentIndex(),T=_>0&&this._findNavTarget(_,-1)>=0,y=_>=0&&this._findNavTarget(_,1)>=0,M=this.assets.length>1;return c`
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
          ${M?c`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!T}
                  aria-label=${this.t("previous","Previous")}
                >
                  <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
                </button>
                <button
                  class="nav-btn next"
                  @click=${this._next}
                  ?disabled=${!y}
                  aria-label=${this.t("next","Next")}
                >
                  <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
                </button>
              `:m}
          ${this._isFullscreen?c`
                <button
                  class="fs-close-btn"
                  @click=${this._exitFullscreen}
                  aria-label=${this.t("exitFullscreen","Exit fullscreen")}
                >
                  <sfx-icon name="close" .size=${16}></sfx-icon>
                </button>
              `:m}
          ${this._previewLoading?c`<div class="preview-loading"><div class="spinner"></div></div>`:m}
          ${s?c`
                <img
                  src=${p}
                  alt=${t.name}
                  @load=${q=>{q.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
                  @error=${q=>{const H=q.target;this._previewLoading=!1,H.src!==o&&(H.src=o,H.classList.add("icon-fallback"))}}
                />
                <div class="fs-wrapper">
                  ${l?m:c`
                        <img
                          class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                          src=${p}
                          alt=""
                          ${D({width:h.width,height:h.height})}
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
              `:m}
          ${i?c`<video
                src=${g}
                poster=${v||m}
                controls
                controlsList="nofullscreen"
                @loadeddata=${()=>{this._previewLoading=!1}}
                @error=${()=>{this._previewLoading=!1}}
              ></video>`:m}
          ${r?c`<audio src=${((X=t.url)==null?void 0:X.cdn)||""} controls></audio>`:m}
          ${a&&!s?c`
                <img
                  src=${b||o}
                  alt=${t.name}
                  class=${b?"":"icon-fallback"}
                  @error=${q=>{const H=q.target;H.src!==o&&(H.src=o,H.classList.add("icon-fallback"))}}
                />
              `:m}
          ${!s&&!i&&!r&&!a?c`<img src=${o} alt=${t.name} class="icon-fallback" />`:m}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?c`
              ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
            `:m}
      </div>
    `}};ue.styles=A`
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
  `;be([u({type:Object})],ue.prototype,"asset",2);be([u({type:Array})],ue.prototype,"assets",2);be([u({type:Array})],ue.prototype,"selectedIds",2);be([u()],ue.prototype,"containerToken",2);be([u({type:Boolean})],ue.prototype,"showMetadata",2);be([u({type:Array})],ue.prototype,"metadataFields",2);be([u({type:Array})],ue.prototype,"labels",2);be([u({type:Object})],ue.prototype,"regionalFilters",2);be([u({type:Boolean})],ue.prototype,"multiSelect",2);be([u({type:String})],ue.prototype,"selectedVariantName",2);be([u({attribute:!1})],ue.prototype,"t",2);be([u()],ue.prototype,"locale",2);be([tt(".preview-area")],ue.prototype,"previewArea",2);be([tt("video")],ue.prototype,"_videoEl",2);be([x()],ue.prototype,"_isFullscreen",2);be([x()],ue.prototype,"_fsImageLoaded",2);be([x()],ue.prototype,"_previewLoading",2);be([x()],ue.prototype,"_openSections",2);ue=be([O("ap-preview-panel")],ue);var Ep=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Pr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Fp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ep(e,s,r),r};const Op={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],"file-check-2":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"m3 15 2 2 4-4"}}],"user-star":[{tag:"path",attrs:{d:"M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"}},{tag:"path",attrs:{d:"M8 15H7a4 4 0 0 0-4 4v2"}},{tag:"circle",attrs:{cx:"10",cy:"7",r:"4"}}],"calendar-check-2":[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"path",attrs:{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}},{tag:"path",attrs:{d:"M3 10h18"}},{tag:"path",attrs:{d:"m16 20 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}],link:[{tag:"path",attrs:{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"}},{tag:"path",attrs:{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"}}],move:[{tag:"path",attrs:{d:"M5 9 2 12l3 3"}},{tag:"path",attrs:{d:"M9 5l3-3 3 3"}},{tag:"path",attrs:{d:"M15 19l-3 3-3-3"}},{tag:"path",attrs:{d:"M19 9l3 3-3 3"}},{tag:"path",attrs:{d:"M2 12h20"}},{tag:"path",attrs:{d:"M12 2v20"}}],pencil:[{tag:"path",attrs:{d:"M12 20h9"}},{tag:"path",attrs:{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"}}],unlock:[{tag:"rect",attrs:{x:"5",y:"11",width:"14",height:"10",rx:"2"}},{tag:"path",attrs:{d:"M8 11V7a4 4 0 0 1 7.5-2"}}],star:[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z"}}],"star-filled":[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z",fill:"currentColor"}}],dot:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"5",fill:"currentColor"}}]};let Us=class extends E{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=Op[this.name];if(!t)return m;const e=typeof t=="string"?yt`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:r}=s;return i==="circle"?yt`<circle cx=${r.cx} cy=${r.cy} r=${r.r} fill=${r.fill??"none"}></circle>`:i==="rect"?yt`<rect width=${r.width} height=${r.height} x=${r.x} y=${r.y} rx=${r.rx??"0"} ry=${r.ry??"0"}></rect>`:yt`<path d=${r.d} fill=${r.fill??"none"}></path>`});return c`
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
    `}};Us.styles=[A`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];Pr([u()],Us.prototype,"name",2);Pr([u({type:Number})],Us.prototype,"size",2);Us=Pr([O("sfx-icon")],Us);var Tp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,on=(t,e,s,i)=>{for(var r=i>1?void 0:i?Lp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Tp(e,s,r),r};let Si=class extends E{constructor(){super(...arguments),this.size=24}render(){return c`<div
      class="spinner"
      ${D({width:`${this.size}px`,height:`${this.size}px`})}
    ></div>`}};Si.styles=[A`
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
    `];on([u({type:Number})],Si.prototype,"size",2);Si=on([O("sfx-spinner")],Si);var Pp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,nn=(t,e,s,i)=>{for(var r=i>1?void 0:i?Mp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Pp(e,s,r),r};let Ci=class extends E{constructor(){super(...arguments),this.variant="default"}render(){return c`<span class="badge"><slot></slot></span>`}};Ci.styles=[A`
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
    `];nn([u({reflect:!0})],Ci.prototype,"variant",2);Ci=nn([O("sfx-badge")],Ci);var Ip=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,Mr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Dp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Ip(e,s,r),r};let js=class extends E{constructor(){super(...arguments),this.text="",this.placement="top"}render(){return c`
      <slot></slot>
      <div class="tip ${this.placement==="bottom"?"bottom":""}">${this.text}</div>
    `}};js.styles=[A`
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
    `];Mr([u()],js.prototype,"text",2);Mr([u()],js.prototype,"placement",2);js=Mr([O("sfx-tooltip")],js);var Rp=Object.defineProperty,Ir=(t,e,s,i)=>{for(var r=void 0,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(e,s,r)||r);return r&&Rp(e,s,r),r};const Ur=class Ur extends E{constructor(){super(...arguments),this.t=Zi,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,s="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:s,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const s=this._toasts.findIndex(r=>r.id===e);if(s===-1)return;const i=[...this._toasts];i[s]={...i[s],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(r=>r.id!==e)},200)}_iconForType(e){return e==="error"?c`<svg
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
      </svg>`:e==="warning"?c`<svg
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
      </svg>`:c`<svg
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
    </svg>`}render(){return this._toasts.length===0?c``:c`
      <div class="toast-stack">
        ${this._toasts.map(e=>c`
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
    `}};Ur.styles=A`
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
  `;let cs=Ur;Ir([u({attribute:!1})],cs.prototype,"t");Ir([u({type:Number})],cs.prototype,"duration");Ir([x()],cs.prototype,"_toasts");en("sfx-toast",cs);var zp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Dr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Np(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&zp(e,s,r),r};let Vs=class extends E{constructor(){super(...arguments),this.open=!1,this.align="start",this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},this._handleKeyDown=t=>{t.key==="Escape"&&this.open&&(this.open=!1)}}render(){return c`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.align==="end"?"end":""} ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}};Vs.styles=[A`
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
    `];Dr([x()],Vs.prototype,"open",2);Dr([u()],Vs.prototype,"align",2);Vs=Dr([O("sfx-popover")],Vs);var Up=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,Pi=(t,e,s,i)=>{for(var r=i>1?void 0:i?jp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Up(e,s,r),r};let ds=class extends E{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("sfx-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return c`
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
    `}};ds.styles=[A`
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
    `];Pi([u({type:Boolean,reflect:!0})],ds.prototype,"checked",2);Pi([u({type:Boolean,reflect:!0})],ds.prototype,"indeterminate",2);Pi([u({type:Boolean,reflect:!0})],ds.prototype,"disabled",2);ds=Pi([O("sfx-checkbox")],ds);var Vp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Gt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Bp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Vp(e,s,r),r};let ut=class extends E{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(r=>!this.disabled&&!r.disabled);if(e.length===0)return;const s=e.findIndex(r=>r.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return c`
      ${this.options.map(t=>c`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":m}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?c`<sfx-icon name=${t.icon} .size=${16}></sfx-icon>`:m}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:e},bubbles:!0,composed:!0}))}};ut.styles=[Hs,A`
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
    `];Gt([u()],ut.prototype,"value",2);Gt([u({type:Array})],ut.prototype,"options",2);Gt([u({type:Boolean})],ut.prototype,"disabled",2);Gt([u({type:Boolean})],ut.prototype,"clearable",2);Gt([u({reflect:!0})],ut.prototype,"direction",2);Gt([u({reflect:!0})],ut.prototype,"columns",2);ut=Gt([O("sfx-radio-group")],ut);var Kp=Object.defineProperty,qp=Object.getOwnPropertyDescriptor,Le=(t,e,s,i)=>{for(var r=i>1?void 0:i?qp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Kp(e,s,r),r};let Se=class extends E{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="sfx-dropdown-menu";return c`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?c`<sfx-icon name=${t.icon} .size=${16}></sfx-icon>`:m}
        ${this.label?c`<span class="label">${this.label}${t?": ":""}</span>`:m}${t?t.label:""}
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
                      ${s.icon?c`<sfx-icon name=${s.icon} .size=${16}></sfx-icon>`:m}
                      ${s.label}
                    </span>
                    ${s.value===this.value?c`<sfx-icon name="check" .size=${14}></sfx-icon>`:m}
                  </button>
                `)}
            </div>
          `:m}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const r=window.innerWidth-t.left;this._menuAlign=r<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,r;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(r=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||r.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};Se.styles=[Hs,A`
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
    `];Le([u()],Se.prototype,"value",2);Le([u()],Se.prototype,"label",2);Le([u({reflect:!0})],Se.prototype,"variant",2);Le([u({type:Boolean})],Se.prototype,"clearable",2);Le([u({type:Array})],Se.prototype,"options",2);Le([x()],Se.prototype,"_open",2);Le([x()],Se.prototype,"_focusedIndex",2);Le([x()],Se.prototype,"_menuPosition",2);Le([x()],Se.prototype,"_menuAlign",2);Le([x()],Se.prototype,"_menuTop",2);Le([x()],Se.prototype,"_menuBottom",2);Le([x()],Se.prototype,"_menuLeft",2);Le([x()],Se.prototype,"_menuRight",2);Le([x()],Se.prototype,"_menuWidth",2);Se=Le([O("sfx-dropdown")],Se);var Hp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,Qs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Hp(e,s,r),r};let Vt=class extends E{constructor(){super(...arguments),this.heading="File info",this.rows=[],this.collapsible=!1,this.open=!0}toggle(){this.collapsible&&(this.open=!this.open)}renderHead(){const t=c`<span>${this.heading}</span><span class="spacer"></span>`;return this.collapsible?c`<button
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
          </dl>`:m}
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
  `;Qs([u()],Vt.prototype,"heading",2);Qs([u({attribute:!1})],Vt.prototype,"rows",2);Qs([u({type:Boolean})],Vt.prototype,"collapsible",2);Qs([u({type:Boolean,reflect:!0})],Vt.prototype,"open",2);Vt=Qs([O("sfx-asset-info")],Vt);var Yp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Rr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Qp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Yp(e,s,r),r};let Bs=class extends E{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?c``:c`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>c`
            <sfx-icon name="chevron-right" .size=${14}></sfx-icon>
            ${e<this.items.length-1?c`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:c`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Bs.styles=A`
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
  `;Rr([u({type:Array})],Bs.prototype,"items",2);Rr([u()],Bs.prototype,"rootLabel",2);Bs=Rr([O("sfx-breadcrumb")],Bs);var Wp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,je=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Wp(e,s,r),r};let pe=class extends E{constructor(){super(...arguments),this.kind="confirm",this.heading="",this.message="",this.value="",this.placeholder="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.danger=!1,this.loading=!1,this.confirmDisabled=!1,this.error=null,this._handleDocKeyDown=t=>{t.key==="Escape"&&pe._stack[pe._stack.length-1]===this&&(t.preventDefault(),this._cancel())}}connectedCallback(){super.connectedCallback(),pe._stack.push(this),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t,e;(t=this._input)==null||t.focus(),(e=this._input)==null||e.select()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),pe._stack=pe._stack.filter(t=>t!==this),super.disconnectedCallback()}get inputValue(){var t;return(((t=this._input)==null?void 0:t.value)??this.value).trim()}_onInput(t){this.dispatchEvent(new CustomEvent("sfx-dialog-input",{detail:{value:t.target.value},bubbles:!0,composed:!0}))}_confirm(){this.loading||this.confirmDisabled||this.dispatchEvent(new CustomEvent("sfx-dialog-confirm",{detail:{value:this.kind==="prompt"?this.inputValue:""},bubbles:!0,composed:!0}))}_cancel(){this.dispatchEvent(new CustomEvent("sfx-dialog-cancel",{bubbles:!0,composed:!0}))}_onBackdrop(t){t.target===t.currentTarget&&this._cancel()}_onInputKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._confirm())}render(){return c`
      <div class="backdrop" @click=${this._onBackdrop}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${this.heading}>
          ${this.heading?c`<div class="title">${this.heading}</div>`:m}
          ${this.message&&this.kind==="confirm"?c`<div class="message">${this.message}</div>`:m}
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
              />`:m}
          ${this.error?c`<div class="error" role="alert">${this.error}</div>`:m}
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
    `}};pe.styles=[Hs,Zo,A`
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
    `];pe._stack=[];je([u()],pe.prototype,"kind",2);je([u()],pe.prototype,"heading",2);je([u()],pe.prototype,"message",2);je([u()],pe.prototype,"value",2);je([u()],pe.prototype,"placeholder",2);je([u()],pe.prototype,"confirmLabel",2);je([u()],pe.prototype,"cancelLabel",2);je([u({type:Boolean})],pe.prototype,"danger",2);je([u({type:Boolean})],pe.prototype,"loading",2);je([u({type:Boolean})],pe.prototype,"confirmDisabled",2);je([u()],pe.prototype,"error",2);je([tt("input")],pe.prototype,"_input",2);pe=je([O("sfx-dialog")],pe);var Jp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Yt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Zp(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&Jp(e,s,r),r};function ys(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function Qa(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}let ft=class extends E{constructor(){super(...arguments),this.value=null,this.minDate=null,this.maxDate=null,this.locale="",this._viewYear=0,this._viewMonth=0,this._viewInitialized=!1}willUpdate(){if(!this._viewInitialized){this._viewInitialized=!0;const t=this.value??new Date;this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth()}}get _locale(){return this.locale||document.documentElement.lang||"en"}get _monthOptions(){const t=new Intl.DateTimeFormat(this._locale,{month:"long"});return Array.from({length:12},(e,s)=>({value:String(s),label:t.format(new Date(2e3,s,1))}))}get _yearOptions(){var s,i;const t=((s=this.minDate)==null?void 0:s.getFullYear())??this._viewYear-10,e=((i=this.maxDate)==null?void 0:i.getFullYear())??this._viewYear+10;return Array.from({length:e-t+1},(r,a)=>{const o=t+a;return{value:String(o),label:String(o)}})}get _weekdayLabels(){const t=new Intl.DateTimeFormat(this._locale,{weekday:"short"});return Array.from({length:7},(e,s)=>{const i=t.format(new Date(2e3,0,3+s)).slice(0,2);return i.charAt(0).toUpperCase()+i.slice(1)})}get _days(){const e=(new Date(this._viewYear,this._viewMonth,1).getDay()+6)%7,s=new Date(this._viewYear,this._viewMonth,1-e);return Array.from({length:42},(i,r)=>{const a=new Date(s.getFullYear(),s.getMonth(),s.getDate()+r);return{date:a,outside:a.getMonth()!==this._viewMonth}})}_isDisabled(t){return!!(this.minDate&&ys(t)<ys(this.minDate)||this.maxDate&&ys(t)>ys(this.maxDate))}_prevMonth(){this._viewMonth===0?(this._viewMonth=11,this._viewYear-=1):this._viewMonth-=1}_nextMonth(){this._viewMonth===11?(this._viewMonth=0,this._viewYear+=1):this._viewMonth+=1}_selectDay(t){this._isDisabled(t)||this.dispatchEvent(new CustomEvent("sfx-select",{detail:{date:t},bubbles:!0,composed:!0}))}render(){const t=ys(new Date);return c`
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
        ${this._days.map(({date:e,outside:s})=>{const i=this._isDisabled(e),r=Qa(e,t),a=this.value?Qa(e,this.value):!1,o=["day",s&&"outside",r&&"today",a&&"selected"].filter(Boolean).join(" ");return c`
            <button class=${o} ?disabled=${i} @click=${()=>this._selectDay(e)}>
              ${e.getDate()}
            </button>
          `})}
      </div>
    `}};ft.styles=[Hs,Bd,A`
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
    `];Yt([u({attribute:!1})],ft.prototype,"value",2);Yt([u({attribute:!1})],ft.prototype,"minDate",2);Yt([u({attribute:!1})],ft.prototype,"maxDate",2);Yt([u()],ft.prototype,"locale",2);Yt([x()],ft.prototype,"_viewYear",2);Yt([x()],ft.prototype,"_viewMonth",2);ft=Yt([O("sfx-calendar")],ft);var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,De=(t,e,s,i)=>{for(var r=i>1?void 0:i?tu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&eu(e,s,r),r};function $s(t){if(!t)return null;const[e,s,i]=t.split("-").map(Number);return!e||!s||!i?null:new Date(e,s-1,i)}function Wa(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function su(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>e.type).filter(e=>e==="month"||e==="day"||e==="year")}function Xa(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>{switch(e.type){case"month":return"MM";case"day":return"DD";case"year":return"YYYY";default:return e.value}}).join("")}function iu(t,e){const s=t.split(/[^0-9]+/).filter(Boolean);if(s.length!==3)return null;const i=su(e),r={};for(const[d,p]of i.entries()){const f=s[d];if(p==="year"?f.length!==4:f.length>2)return null;r[p]=Number(f)}const{month:a,day:o,year:n}=r;if(!a||!o||!n||a<1||a>12||o<1||o>31)return null;const l=new Date(n,a-1,o);return l.getFullYear()!==n||l.getMonth()!==a-1||l.getDate()!==o?null:l}let Ae=class extends E{constructor(){super(...arguments),this.value="",this.min="",this.max="",this.placeholder="",this.disabled=!1,this.locale="",this._draft="",this._error="",this._open=!1,this._popoverTop=0,this._popoverBottom=0,this._popoverLeft=0,this._popoverPosition="below",this._openCalendar=()=>{this.disabled||this._open||(this._open=!0,this._updatePopoverPosition(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown))},this._toggleCalendar=()=>{this.disabled||(this._open?(this._open=!1,this._cleanupListeners()):this._openCalendar())},this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1,this._cleanupListeners())},this._handleKeyDown=t=>{t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,this._cleanupListeners())}}get _effectiveLocale(){return this.locale||document.documentElement.lang||"en"}get _selectedDate(){return $s(this.value)}get _displayText(){const t=this._selectedDate;return t?new Intl.DateTimeFormat(this._effectiveLocale).format(t):""}willUpdate(t){var e,s;t.has("value")&&((s=(e=this.shadowRoot)==null?void 0:e.activeElement)==null?void 0:s.tagName)!=="INPUT"&&(this._draft=this._displayText,this._error="")}render(){const t=this._selectedDate;return c`
      <div
        class="field ${this._open?"open":""} ${this.disabled?"disabled":""} ${this._error?"error":""}"
      >
        <input
          type="text"
          .value=${this._draft}
          placeholder=${this.placeholder||Xa(this._effectiveLocale)}
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
      ${this._error?c`<div class="error-text">${this._error}</div>`:m}
      ${this._open?c`
            <div
              class="popover"
              ${D({[this._popoverPosition==="below"?"top":"bottom"]:`${this._popoverPosition==="below"?this._popoverTop:this._popoverBottom}px`,left:`${this._popoverLeft}px`})}
            >
              <sfx-calendar
                .value=${t}
                .minDate=${$s(this.min)}
                .maxDate=${$s(this.max)}
                .locale=${this.locale}
                @sfx-select=${this._handleSelect}
              ></sfx-calendar>
            </div>
          `:m}
    `}_handleInput(t){this._draft=t.target.value,this._validateAndCommit(this._draft)}_validateAndCommit(t){if(!t){this._error="",this._commit("");return}const e=iu(t,this._effectiveLocale),s=$s(this.min),i=$s(this.max),r=!!e&&(!!s&&e<s||!!i&&e>i);if(!e||r){this._error=`Invalid date. Use ${Xa(this._effectiveLocale)}`;return}this._error="",this._commit(Wa(e))}_commit(t){t!==this.value&&(this.value=t,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}_handleSelect(t){this._open=!1,this._cleanupListeners(),this._error="",this._commit(Wa(t.detail.date))}_updatePopoverPosition(){const t=this.getBoundingClientRect(),e=340,s=window.innerHeight-t.bottom,i=t.top;this._popoverPosition=s<e&&i>s?"above":"below",this._popoverPosition==="below"?this._popoverTop=t.bottom+4:this._popoverBottom=window.innerHeight-t.top+4,this._popoverLeft=Math.min(t.left,window.innerWidth-284)}_cleanupListeners(){document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupListeners()}};Ae.styles=[Hs,Zo,A`
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
    `];De([u()],Ae.prototype,"value",2);De([u()],Ae.prototype,"min",2);De([u()],Ae.prototype,"max",2);De([u()],Ae.prototype,"placeholder",2);De([u({type:Boolean})],Ae.prototype,"disabled",2);De([u()],Ae.prototype,"locale",2);De([x()],Ae.prototype,"_draft",2);De([x()],Ae.prototype,"_error",2);De([x()],Ae.prototype,"_open",2);De([x()],Ae.prototype,"_popoverTop",2);De([x()],Ae.prototype,"_popoverBottom",2);De([x()],Ae.prototype,"_popoverLeft",2);De([x()],Ae.prototype,"_popoverPosition",2);Ae=De([O("sfx-date-input")],Ae);var ru=Object.defineProperty,au=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var r=i>1?void 0:i?au(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ru(e,s,r),r};let Ne=class extends E{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalIsLowerBound=!1,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),r=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:r})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.totalIsLowerBound||this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this.totalIsLowerBound||this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?m:c`
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
                  </button>`:m}
              <button class="bar-btn" @click=${this._clear}>
                <sfx-icon name="close" .size=${14}></sfx-icon>${this.t("deselectAll","Deselect all")}
              </button>
              ${this.maxSelections&&this._totalSelected>=this.maxSelections?c`<span class="limit-notice"
                    >${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span
                  >`:m}
            `:m}
        <div class="spacer"></div>
        ${this.showTransform?c`
              <button class="btn-confirm btn-transform" @click=${this._transform}>
                ${this.t("transform","Transform")}
              </button>
            `:m}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};Ne.styles=A`
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
  `;Qe([u({type:Array})],Ne.prototype,"selectedAssets",2);Qe([u({type:Array})],Ne.prototype,"selectedFolders",2);Qe([u({type:Number})],Ne.prototype,"totalCount",2);Qe([u({type:Boolean})],Ne.prototype,"totalIsLowerBound",2);Qe([u({type:Number})],Ne.prototype,"totalFolderCount",2);Qe([u({type:Boolean})],Ne.prototype,"isSelectingAll",2);Qe([u({type:Boolean})],Ne.prototype,"multiSelect",2);Qe([u({type:Number})],Ne.prototype,"maxSelections",2);Qe([u({type:Boolean})],Ne.prototype,"showTransform",2);Qe([u({attribute:!1})],Ne.prototype,"t",2);Ne=Qe([O("ap-selection-bar")],Ne);var ou=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,zr=(t,e,s,i)=>{for(var r=i>1?void 0:i?nu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&ou(e,s,r),r};let Ks=class extends E{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?m:c`
      <div
        class="marquee"
        ${D({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};Ks.styles=A`
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
  `;zr([u({type:Boolean})],Ks.prototype,"active",2);zr([u({type:Object})],Ks.prototype,"rect",2);Ks=zr([O("ap-marquee-overlay")],Ks);var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,Ws=(t,e,s,i)=>{for(var r=i>1?void 0:i?cu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&lu(e,s,r),r};let Bt=class extends E{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return c`
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
    `}};Bt.styles=[Ue,A`
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
    `];Ws([u({type:Array})],Bt.prototype,"folders",2);Ws([u({type:Boolean})],Bt.prototype,"loading",2);Ws([u({attribute:!1})],Bt.prototype,"t",2);Ws([x()],Bt.prototype,"_mode",2);Bt=Ws([O("ap-folder-resolve-dialog")],Bt);var du=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,Qt=(t,e,s,i)=>{for(var r=i>1?void 0:i?hu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&du(e,s,r),r};const pu=120;let gt=class extends E{constructor(){super(...arguments),this.asset=null,this.cropConfig=void 0,this.t=(t,e)=>typeof e=="string"?e:t,this._loadError=null,this._loaded=!1,this._ready=!1,this._changeTimer=null}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}async getResult(){const t=this._cropEl;if(!t||!this._ready)return null;let e=t.toCropDescriptor();if(Ma(e.state))return null;if(e.state.rotation%90!==0)try{await t.calibrateCloudimage(),e=t.toCropDescriptor()}catch{}const s=t.toCloudimageURL();if(!s)throw new Error("The crop URL could not be built.");return{descriptor:e,url:{cdn:s}}}previewUrl(){const t=this._cropEl;if(!t||!this._ready)return null;try{return t.toCloudimageURL()||null}catch{return null}}_clearTimer(){this._changeTimer&&(clearTimeout(this._changeTimer),this._changeTimer=null)}_handleReady(){this._ready=!0}_handleImageLoad(){this._ready=!0,this._loaded=!0,this._loadError=null}_handleError(t){var e,s;this._loaded=!0,this._loadError=((s=(e=t.detail)==null?void 0:e.error)==null?void 0:s.message)||this.t("cropLoadFailed","Failed to load the image for cropping.")}_handleEditorChange(){this._clearTimer(),this._changeTimer=setTimeout(()=>{this._changeTimer=null,this._emitChange()},pu)}_emitChange(){const t=this._cropEl;if(!t||!this._ready)return;let e=null;try{e=t.toCropDescriptor()}catch{return}const s=Ma(e.state);this.dispatchEvent(new CustomEvent("crop-change",{detail:s?null:e,bubbles:!0,composed:!0}))}render(){var e,s,i,r;const t=this.asset;return t?c`
      <div class="stage ${this._loaded?"":"loading"}">
        ${this._loadError?c`<div class="error" role="alert">${this._loadError}</div>`:m}
        <cloudimage-crop
          src=${((e=t.url)==null?void 0:e.cdn)||""}
          variant=${((s=this.cropConfig)==null?void 0:s.variant)??"classic"}
          crop-shape=${((i=this.cropConfig)==null?void 0:i.cropShape)??vc}
          .availableShapes=${((r=this.cropConfig)==null?void 0:r.availableShapes)??mc}
          .initialCrop=${bc}
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
    `:m}};gt.styles=[Ue,A`
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
    `];Qt([u({type:Object})],gt.prototype,"asset",2);Qt([u({type:Object})],gt.prototype,"cropConfig",2);Qt([u({attribute:!1})],gt.prototype,"t",2);Qt([tt("cloudimage-crop")],gt.prototype,"_cropEl",2);Qt([x()],gt.prototype,"_loadError",2);Qt([x()],gt.prototype,"_loaded",2);gt=Qt([O("ap-crop-panel")],gt);var uu=Object.defineProperty,fu=Object.getOwnPropertyDescriptor,_e=(t,e,s,i)=>{for(var r=i>1?void 0:i?fu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&uu(e,s,r),r};const gu=["webp","jpeg","png","gif"];function mu(t){const e=(t??"").toLowerCase();return gu.includes(e)?e:"jpeg"}let ge=class extends E{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.cropEnabled=!1,this.cropConfig=void 0,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._cropDims=null,this._cropDescriptor=null,this._applying=!1,this._applyError=null,this._cropDimsSeq=0,this._pointerDownOnBackdrop=!1,this._defaultFormat="jpeg"}get _firstImage(){return this.assets.find(t=>Tt(t))}get _ratio(){if(this._cropDims){const{width:i,height:r}=this._cropDims;return i&&r?i/r:1.5}const t=this._firstImage;if(!t)return 1.5;const e=ji(t),s=Vi(t);return e&&s?e/s:1.5}get _showCropSection(){return this.cropEnabled&&!this.isMultiSelect&&!!this._firstImage}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight||this._cropDescriptor!==null}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this._firstImage;if(this._defaultFormat=mu(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._cropDims=null,this._cropDescriptor=null,this._applying=!1,this._applyError=null,this._cropDimsSeq++,this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=ji(t),s=Vi(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}async _handleApply(){if(this._applying)return;const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};let e=null;if(this._showCropSection){this._applying=!0,this._applyError=null;let s=!1;try{const i=this.renderRoot.querySelector("ap-crop-panel");e=await(i==null?void 0:i.getResult())??null}catch{s=!0}finally{this._applying=!1}if(!this.isConnected)return;if(s){this._applyError=this.t("cropApplyFailed","The crop could not be applied. Please try again.");return}}this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect,crop:e},bubbles:!0,composed:!0}))}_handleSkip(){this._applying||this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleCropChange(t){this._cropDescriptor=t.detail,this._applyError=null;const e=t.detail?this.renderRoot.querySelector("ap-crop-panel"):null;this._rebaseSizeOnCrop(t.detail,()=>e==null?void 0:e.previewUrl())}async _rebaseSizeOnCrop(t,e){const s=++this._cropDimsSeq,i=t?await $c(t,e):null;if(s!==this._cropDimsSeq)return;this._cropDims=i;const r=this._firstImage,a=i??{width:r&&ji(r)||void 0,height:r&&Vi(r)||void 0};this._defaultWidth=a.width,this._defaultHeight=a.height,this._activePreset==="original"?(this._width=a.width,this._height=a.height):this._lockAspect&&this._width&&(this._height=Math.round(this._width/this._ratio))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropPointerDown(t){this._pointerDownOnBackdrop=t.target===t.currentTarget}_handleBackdropClick(t){const e=this._pointerDownOnBackdrop;this._pointerDownOnBackdrop=!1,t.target===t.currentTarget&&e&&this._handleClose()}_renderFormat(){return c`
      <div class="section">
        <span class="section-label">${this.t("format","Format")}</span>
        <sfx-radio-group
          direction="horizontal"
          .value=${this._format}
          .options=${ac}
          @sfx-change=${this._handleFormatChange}
        ></sfx-radio-group>
      </div>
    `}_renderQuality(){return this._format==="png"?m:c`
      <div class="section">
        <span class="section-label">${this.t("quality","Quality")}</span>
        <sfx-dropdown
          .value=${this._quality}
          .options=${oc}
          @sfx-change=${this._handleQualityChange}
        ></sfx-dropdown>
      </div>
    `}_renderSize(){return c`
      <div class="section">
        <span class="section-label">${this.t("size","Size")}</span>
        ${this._cropDims?c`
              <span class="crop-size-hint">
                ${this.t("sizeFromCrop","Based on cropped area")} — ${this._cropDims.width} ×
                ${this._cropDims.height} px
              </span>
            `:m}
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
          ${nc.map(t=>c`
              <button
                class="preset-btn ${this._activePreset===t.value?"active":""}"
                @click=${()=>this._handlePreset(t)}
              >
                ${t.label}
              </button>
            `)}
        </div>
      </div>
    `}_renderBody(){return this._showCropSection?c`
        <div class="split-body">
          <ap-crop-panel
            .asset=${this._firstImage}
            .cropConfig=${this.cropConfig}
            .t=${this.t}
            @crop-change=${this._handleCropChange}
          ></ap-crop-panel>
          <div class="settings">
            ${this._renderFormat()} ${this._renderQuality()} ${this._renderSize()}
          </div>
        </div>
      `:c`${this._renderFormat()} ${this._renderQuality()} ${this._renderSize()}`}render(){return c`
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
            ${this._applyError?c`<span class="apply-error" role="alert">${this._applyError}</span>`:m}
            <button class="btn" @click=${this._handleSkip} ?disabled=${this._applying}>
              ${this.exportOriginalLabel??this.t("exportOriginal","Export Original")}
            </button>
            <button
              class="btn btn-primary ${this._applying?"applying":""}"
              @click=${this._handleApply}
              ?disabled=${!this._isDirty||this._applying}
              aria-busy=${this._applying?"true":"false"}
            >
              ${this._applying?c`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t("applying","Applying...")}</span
                  >`:this.applyExportLabel??this.t("applyAndExport","Apply & Export")}
            </button>
          </div>
        </div>
      </div>
    `}};ge.styles=[Ue,A`
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
    `];_e([u({type:Array})],ge.prototype,"assets",2);_e([u({type:Boolean})],ge.prototype,"isMultiSelect",2);_e([u({type:Boolean})],ge.prototype,"cropEnabled",2);_e([u({type:Object})],ge.prototype,"cropConfig",2);_e([u({attribute:!1})],ge.prototype,"t",2);_e([u({attribute:!1})],ge.prototype,"exportOriginalLabel",2);_e([u({attribute:!1})],ge.prototype,"applyExportLabel",2);_e([x()],ge.prototype,"_format",2);_e([x()],ge.prototype,"_quality",2);_e([x()],ge.prototype,"_width",2);_e([x()],ge.prototype,"_height",2);_e([x()],ge.prototype,"_lockAspect",2);_e([x()],ge.prototype,"_activePreset",2);_e([x()],ge.prototype,"_cropDims",2);_e([x()],ge.prototype,"_cropDescriptor",2);_e([x()],ge.prototype,"_applying",2);_e([x()],ge.prototype,"_applyError",2);ge=_e([O("ap-transformation-dialog")],ge);var vu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,Ft=(t,e,s,i)=>{for(var r=i>1?void 0:i?bu(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&vu(e,s,r),r};const xu=/[/\\\x00-\x1f]/;let et=class extends E{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_onInput(t){this._name=t.detail.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_validateName(t){return xu.test(t)?this.t("folderNameInvalidChars",`Folder name can't contain "/" or "\\".`):t==="."||t===".."?this.t("folderNameReserved",`Folder name can't be "." or "..".`):null}_onConfirm(t){if(this.loading)return;const e=t.detail.value.trim();if(!e)return;const s=this._validateName(e);if(s){this._localError=s;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:e},bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}render(){const t=this._localError??(this._apiErrorDismissed?null:this.error);return c`
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
    `}};et.styles=A`
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
  `;Ft([u({attribute:!1})],et.prototype,"t",2);Ft([u()],et.prototype,"currentFolderPath",2);Ft([u({type:Boolean})],et.prototype,"loading",2);Ft([u()],et.prototype,"error",2);Ft([x()],et.prototype,"_name",2);Ft([x()],et.prototype,"_localError",2);Ft([x()],et.prototype,"_apiErrorDismissed",2);et=Ft([O("ap-create-folder-dialog")],et);var _u=Object.defineProperty,Ke=(t,e,s,i)=>{for(var r=void 0,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=o(e,s,r)||r);return r&&_u(e,s,r),r};const ln=20;function yu(t,e,s){var o;const i=(o=e==null?void 0:e.stats)==null?void 0:o.folders;if(!i||t.length===0||t.length>ln)return t;const r=new Map(i.map(n=>[ve(n.path),n.count])),a=ve(s);return t.map(n=>{const l=ve(n.path),d=l.slice(0,l.lastIndexOf("/"))===(a==="/"?"":a),p=r.get(l)??(d?0:void 0);return p===void 0?n:{...n,count:{...n.count,files_direct:p,files_recursive:p}}})}function ai(t){var i,r,a,o;const e=(r=(i=t.stats)==null?void 0:i.stats)==null?void 0:r.approx_files_count;if(typeof e=="number"&&e>=0)return{count:e,exact:!0};const s=(o=(a=t.stats)==null?void 0:a.info)==null?void 0:o.total_files_count;return typeof s=="number"&&s>=0?{count:s,exact:!0}:typeof t.levelDirectCount=="number"&&t.levelDirectCount>=0?{count:t.levelDirectCount,exact:!0}:!t.filtered&&typeof t.folderCount=="number"?{count:t.folderCount,exact:!0}:{count:t.loaded,exact:!1}}var wt;const Ve=(wt=class extends E{constructor(){super(),this._listScope=[],this._uploadScope=[],this._initFailed=!1,this._variantsFetched=!1,this._variantsFetching=!1,this._variantsFetchAttempts=0,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._folderFeed=null,this._folderTotalKnown=!1,this._folderFeedTask=null,this._folderListings=new hd,this._folderCounts=new Map,this._warnedFolderLimit=!1,this._folderUuidByPath=new Map,this._folderUuidLookups=new Map,this._folderUuidGeneration=0,this._missingFolders=new Set,this._localizedFieldsCache=null,this._lazyImportPromises=new Map,this._uploaderEl=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._cropReady=!1,this._variantPresets=[],this._defaultVariantName="original",this._variantOverrides={},this._resolveThumbnailMetadata=Ed(),this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._uploaderAvailable&&(this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0)))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this._uploaderAvailable?"copy":"none"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,r;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter=0,this._isDragOver=!1,!this._uploaderAvailable))return;const s=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=In(),this.storeCtrl=new kl(this,this.store),this.selectionCtrl=new Cl(this,this.store,e=>this._notifyMaxSelection(e)),this.infiniteScrollCtrl=new Al(this,()=>this._loadMore()),this.marqueeCtrl=new gr(this,{queryCards:e=>{const s=[],i=(a,o,n)=>a.querySelectorAll(`[${o}]`).forEach(l=>{const d=l.dataset[n];d&&s.push({uuid:d,el:l})});let r=!1;for(const a of Array.from(e.children))a.shadowRoot&&(i(a.shadowRoot,"data-asset-uuid","assetUuid"),i(a.shadowRoot,"data-folder-uuid","folderUuid"),r=!0);return(!r||s.length===0)&&(i(e,"data-asset-uuid","assetUuid"),i(e,"data-folder-uuid","folderUuid")),s},getSelection:()=>{const e=this.store.getState();return[...e.selectedAssets.keys(),...e.selectedFolders.keys()]},setSelection:e=>{var d,p;const s=this.store.getState(),i=((d=s.config)==null?void 0:d.folderSelection)===!0,r=new Map,a=new Map;for(const f of e){const h=s.selectedAssets.get(f);if(h){r.set(f,h);continue}const g=s.selectedFolders.get(f);if(i&&g){a.set(f,g);continue}if(!s.disabledAssetIds.has(f)){const v=s.assets.find(b=>b.uuid===f);if(v){r.set(f,v);continue}}if(i&&!s.disabledFolderIds.has(f)){const v=s.folders.find(b=>b.uuid===f);v&&a.set(f,v)}}const o=(p=s.config)==null?void 0:p.maxSelections,n=r.size+(i?a.size:0),l=o&&n>o?new Map(Array.from(r.entries()).slice(0,Math.max(0,o-a.size))):r;this.store.setState({selectedAssets:l,...i?{selectedFolders:a}:{}})},isInteractiveTarget:e=>{var s;return(((s=this.store.getState().config)==null?void 0:s.multiSelect)??!0)===!1?!0:e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement||i instanceof HTMLDialogElement)return!0;const r=i.tagName.toLowerCase();return r.startsWith("ap-asset-")||r.startsWith("ap-folder-")||r.endsWith("-dialog")?!0:i.classList.contains("check")||i.classList.contains("check-box")})}})}_toKeySet(e){return Array.isArray(e)?new Set(e):null}_isFilterEnabled(e){var s;return!Mo.has(e)||e in this._normalizedForcedFilters?!0:ci(e,((s=this.config)==null?void 0:s.enabledFilters)??null)}get _visiblePinnedFilters(){const{filters:e}=this.store.getState();return e.pinned.filter(s=>this._isFilterEnabled(s))}get _enabledMetadataFieldKeys(){var e;return this._toKeySet((e=this.config)==null?void 0:e.enabledMetadataFields)}get _visiblePinnedMetadata(){const{filters:e}=this.store.getState();if(!this._isFilterEnabled($.METADATA))return[];const s=this._enabledMetadataFieldKeys;return s?e.metadata.pinned.filter(i=>s.has(os(i))):e.metadata.pinned}get _visibleAppliedMetadata(){const{filters:e}=this.store.getState();if(!this._isFilterEnabled($.METADATA))return{};const s=this._enabledMetadataFieldKeys;return s?Object.fromEntries(Object.entries(e.metadata.applied).filter(([i])=>s.has(os(i)))):e.metadata.applied}_localizeMetadataFields(e,s){const i=this._localizedFieldsCache;if(i&&i.fields===e&&i.t===s)return i.result;const r=_d(e,s);return this._localizedFieldsCache={fields:e,t:s,result:r},r}_getFilterMetadataFields(e){if(!this._isFilterEnabled($.METADATA))return[];const s=this._enabledMetadataFieldKeys;return s?e.filter(i=>s.has(i.key)):e}get _thumbnailMetadataFields(){var i;const{metadataFields:e,t:s}=this.store.getState();return this._resolveThumbnailMetadata((i=this.config)==null?void 0:i.thumbnailMetadata,this._localizeMetadataFields(e,s),s)}get _variantOptions(){const e=this.store.getState().t;return(!this._variantOptionsCache||this._variantOptionsCachePresets!==this._variantPresets||this._variantOptionsCacheT!==e)&&(this._variantOptionsCache=[{value:"original",label:e("original","Original")},...this._variantPresets.map(s=>({value:s.name,label:s.name}))],this._variantOptionsCachePresets=this._variantPresets,this._variantOptionsCacheT=e),this._variantOptionsCache}_handleVariantDefaultChange(e){this._defaultVariantName=e.detail.name}_handleAssetVariantChange(e){const{uuid:s,name:i,asset:r,index:a}=e.detail;this.selectionCtrl.selectAsset(r,a)&&(this._variantOverrides={...this._variantOverrides,[s]:i})}_applyVariantSelection(e){var s;return(s=this.config)!=null&&s.variants?e.map(i=>{var o,n;if(!Tt(i))return i;const r=this._variantOverrides[i.uuid]??this._defaultVariantName;if(!r||r==="original")return i;const a=((o=i.transformation)==null?void 0:o.url.cdn)??((n=i.url)==null?void 0:n.cdn)??"";return a?{...i,selectedVariant:{name:r,url:vr(a,r)}}:i}):e}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._lazyImportPromises.clear(),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const r=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,r)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_computeAuthKey(e){return JSON.stringify({auth:e.auth,apiBase:e.apiBase})}_initConfig(e){const s={folderSelection:!0,...e};this._applyConfig(s);const i=this._computeAuthKey(s);!this._initPromise||i!==this._lastAuthKey||this._initFailed?(i!==this._lastAuthKey&&(this._variantPresets=[],this._variantsFetched=!1,this._variantsFetchAttempts=0,this._defaultVariantName="original",this._variantOverrides={},this._clearFolderCaches({includeUuids:!0})),this._lastAuthKey=i,this._initFailed=!1,this._initPromise=this._fetchBootstrapData(s).catch(()=>{this._initFailed=!0})):s.variants&&!this._variantsFetched&&!this._variantsFetching&&this._variantsFetchAttempts<wt.VARIANTS_FETCH_MAX_ATTEMPTS&&this._initPromise.then(()=>this._fetchVariantPresets(s)),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}_applyConfig(e){const s=xd(),i=s.sortBy??e.defaultSortBy??"created_at",r=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Td(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:r,disabledAssetIds:new Set(e.disabledAssetIds??[]),disabledFolderIds:new Set(e.disabledFolderIds??[])}),uc(e.transformRemoteThumbnail),this._normalizedForcedFilters=ar(e.forcedFilters)}async _initI18n(e){try{const{i18n:s,isNew:i}=await $l(e||"en");i&&s.on("missingKey",(a,o,n,l,d,p)=>{const f=n.match(/_(?:zero|one|two|few|many|other)$/),h=f&&(p!=null&&p[`defaultValue${f[0]}`])?String(p[`defaultValue${f[0]}`]):l;wl.handleMissingKey(n,h,o)});const r=(a,o,n)=>typeof o=="string"?s.t(a,o,n??{}):s.t(a,o??{});this.store.setState({t:r})}catch{}}async _fetchVariantPresets(e){if(!(!this.apiClient||!e.variants||this._initFailed||this._variantsFetching||this._variantsFetched)){this._variantsFetching=!0,this._variantsFetchAttempts++;try{this._variantPresets=await Ta(this.apiClient),this._variantsFetched=!0}catch(s){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:s,context:"variantPresets"},bubbles:!0,composed:!0}))}finally{this._variantsFetching=!1}}}async _fetchBootstrapData(e){var r,a;const s=e.apiBase||`https://api.filerobot.com/${e.auth.projectToken}/v5`;let i;if(this._listScope=[],this._uploadScope=[],e.auth.mode==="securityTemplate"){const{key:o,permissions:n,listScope:l,uploadScope:d}=await Jl(e.auth,s);i=o,this._listScope=l,this._uploadScope=d,this.store.setState({sassKey:o,permissions:n})}else i=e.auth.sassKey;this.apiClient=new mr({apiBase:s.replace(/\/v5$/,""),headers:{"X-Filerobot-Key":i}});try{const[o,n,l,d,p,f,h]=await Promise.allSettled([Uo(this.apiClient),Wl(this.apiClient),zl(this.apiClient),Ql(this.apiClient),Uc(this.apiClient),Gl(this.apiClient),e.variants?Ta(this.apiClient):Promise.resolve([])]),g={};if(o.status==="fulfilled"){const{fields:y,regionalVariantGroups:M,regionalFilters:k,cdnPermalinkEnabled:L}=o.value;g.metadataFields=y,g.regionalVariantGroups=M,g.regionalFilters=k,g.cdnPermalinkEnabled=L}if(n.status==="fulfilled"){const y=(a=(r=n.value.settings)==null?void 0:r.project_branding)==null?void 0:a.brandColor;y&&(g.brandColor=y)}l.status==="fulfilled"&&(g.labels=l.value||[]),d.status==="fulfilled"&&(g.tags=d.value),f.status==="fulfilled"&&(g.collections=f.value.collections||[]),p.status==="fulfilled"&&(g.fileTypes=p.value),h.status==="fulfilled"?e.variants&&(this._variantPresets=h.value,this._variantsFetched=!0):e.variants&&this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:h.reason,context:"variantPresets"},bubbles:!0,composed:!0}));const{pinnedFilters:v,pinnedMetadata:b}=md(e.auth.projectToken??null),_=this.store.getState().filters;g.filters={..._,pinned:v,metadata:{..._.metadata,pinned:b,visible:[...b]}},this.store.setState(g);const T=e.brandColor||g.brandColor||this.store.getState().brandColor;T&&(g.brandColor||this.store.setState({brandColor:T}),Rd(this,T))}catch(o){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"init"},bubbles:!0,composed:!0})),o}}_ensureCustomElementImport(e,s){if(customElements.get(e))return Promise.resolve();const i=this._lazyImportPromises.get(e);if(i)return i;const r=s().then(()=>{},a=>{throw this._lazyImportPromises.delete(e),a});return this._lazyImportPromises.set(e,r),r}_ensureUploaderImport(){return this._ensureCustomElementImport("sfx-uploader",()=>U(()=>import("./define-CnywRwcq.js").then(e=>e.aZ),__vite__mapDeps([2,3,1])))}_ensureCropImport(){return this._ensureCustomElementImport("cloudimage-crop",()=>U(()=>import("./define-CE3KmhcW.js"),__vite__mapDeps([4,0,1,3])))}_maybeLoadCropModule(e){var s;!((s=this.config)!=null&&s.crop)||this._cropReady||e.filter(Tt).length===1&&this._ensureCropImport().then(()=>{this._cropReady=!0}).catch(i=>{this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i instanceof Error?i:new Error(String(i)),context:"crop-load"},bubbles:!0,composed:!0}))})}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let r;return e.auth.mode==="securityTemplate"?r={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:r={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:r,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,similarityCheck:s.similarityCheck,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){if(!this._uploaderAvailable||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(i){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i instanceof Error?i:new Error(String(i)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this._clearFolderCaches(),this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}get _uploaderAvailable(){var e;return!((e=this.config)!=null&&e.uploader)||this.config.hideUpload?!1:this._uploadScope.length?So(this.store.getState().currentFolderPath||"/",this._uploadScope):!0}_notifyMaxSelection(e){const s=this.store.getState().t,i=this.renderRoot.querySelector("sfx-toast");i==null||i.show(s("maxSelectionReached","Max selection is {{max}}",{max:e}),"warning")}get _limitLockTooltip(){var e;return((e=this.config)==null?void 0:e.maxSelectionsTooltip)??this.store.getState().t("maxAttachmentsReached","You have already selected the maximum number of attachments.")}_isSelectionLocked(e){var i,r;const s=(i=this.config)==null?void 0:i.maxSelections;return((r=this.config)==null?void 0:r.maxSelectionsBehavior)==="lock"&&!!s&&e>=s}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var l,d,p,f,h,g,v;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},r=ar((l=this.config)==null?void 0:l.defaultFilters);for(const[b,_]of Object.entries(r))!s.has(b)&&this._isFilterEnabled(b)&&(i[b]=_);const a=((d=this.config)==null?void 0:d.tabs)??["assets","folders"],o=(p=this.config)!=null&&p.rememberLastTab?Pd(this.config.auth.projectToken):null,n=(o&&a.includes(o)?o:null)??((f=this.config)!=null&&f.defaultTab&&a.includes(this.config.defaultTab)?this.config.defaultTab:null)??((h=this.config)!=null&&h.initialFolderPath&&a.includes("folders")?"folders":null)??a[0]??"assets";this.store.setState({isOpen:!0,activeTab:n,searchQuery:"",isAISearchActive:!!((g=this.config)!=null&&g.enableAISearch&&((v=this.config)!=null&&v.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(n),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(n),this._rootPath()),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&(this._seedFolderFromListScope(),this._clearFolderCaches({includeUuids:!0}),this._loadData())}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._defaultVariantName="original",this._variantOverrides={},this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,r,a,o,n,l,d,p,f,h,g,v,b,_,T,y,M,k,L,B,K,oe;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this._selectAllId++,this.store.setState({isLoading:!0,isSelectingAll:!1,totalIsLowerBound:!1}),this._folderFeed=null,this._folderFeedTask=null;try{const re=s.activeTab;if(this._forcedFolderScopeBlocks(re)){this._showNoAssets();return}if(re==="assets"){const Q=this._getAssetsFolderScope();if(Q===null){this._showNoAssets();return}if(Q.length>0){await this._loadFolderScopedAssets(Q,e);return}const X=s.currentFolderPath||"/",q=this._assetsQueryParams(),H=bt(this.apiClient,{...q,folder:X,offset:0,limit:s.limit}),z=Zs(this.apiClient,{folder:X,q:q.q,search:q.search,recursive:1,with_ai:q.with_ai,ai_query:q.ai_query,ai_lang:q.ai_lang}).catch(()=>null),[j,ee]=await Promise.all([H,z]);if(e!==this._loadId)return;const G=((i=j.files)==null?void 0:i.length)??0,V=G>=s.limit,te=ai({stats:ee,folderCount:((r=j.info)==null?void 0:r.total_files_count)??((o=(a=j.base)==null?void 0:a.count)==null?void 0:o.files_recursive),loaded:G,filtered:!!(q.q||q.search)});this.store.setState({assets:j.files||[],folders:[],totalCount:te.count,totalIsLowerBound:!te.exact&&V,totalFolderCount:0,offset:0,hasMore:V,isLoading:!1})}else if(re==="folders"){const Q=this._buildSearchNotation(),X=s.currentFolderPath||"/",q=this.apiClient,H=La(q,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),[z,j,ee,G]=await Promise.all([H,bt(this.apiClient,{fields:(n=this.config)==null?void 0:n.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:X,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Q||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((l=s.config)==null?void 0:l.locale)??"en"}}),Zs(this.apiClient,{folder:X,q:Q||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((d=s.config)==null?void 0:d.locale)??"en"}}).catch(()=>null),H.then($e=>{var vt,Y;return s.searchQuery||(((vt=$e.folders)==null?void 0:vt.length)??0)===0||(((Y=$e.folders)==null?void 0:Y.length)??0)>ln?null:Bl(q,{folder:X,q:Q||void 0})}).catch(()=>null)]);if(e!==this._loadId)return;const V=yu(z.folders||[],G,X);let te={};if(V.length>0)try{te=await Kl(this.apiClient,V.map($e=>$e.uuid))}catch{}if(e!==this._loadId)return;const fe=((p=j.files)==null?void 0:p.length)??0,ye=fe>=s.limit,Re=ai({stats:ee,levelDirectCount:(h=(f=G==null?void 0:G.stats)==null?void 0:f.direct)==null?void 0:h.count,folderCount:((g=j.info)==null?void 0:g.total_files_count)??((b=(v=j.base)==null?void 0:v.count)==null?void 0:b.files_direct),loaded:fe,filtered:!!(Q||s.searchQuery)});this.store.setState({assets:j.files||[],folders:V,folderPreviews:te,totalCount:Re.count,totalIsLowerBound:!Re.exact&&ye,totalFolderCount:z.total??V.length,offset:0,hasMore:ye,isLoading:!1})}else if(re==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Q=s.labels.find(Re=>Re.uuid===s.activeLabelUuid);if(!Q){this.store.setState({isLoading:!1});return}const X=Q.sid.replace("#",""),q=this._buildSearchNotation(),H=`labels:${X}${q?" "+q:""}`,z=s.isAISearchActive&&!!s.searchQuery,j=bt(this.apiClient,{fields:(_=this.config)==null?void 0:_.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:H,recursive:1,...z&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((T=s.config)==null?void 0:T.locale)??"en"}}),ee=Zs(this.apiClient,{folder:"/",q:H,search:s.searchQuery||void 0,recursive:1,...z&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((y=s.config)==null?void 0:y.locale)??"en"}}).catch(()=>null),[G,V]=await Promise.all([j,ee]);if(e!==this._loadId)return;const te=((M=G.files)==null?void 0:M.length)??0,fe=te>=s.limit,ye=ai({stats:V,loaded:te,filtered:!0});this.store.setState({assets:G.files||[],folders:[],totalCount:ye.count,totalIsLowerBound:!ye.exact&&fe,totalFolderCount:0,offset:0,hasMore:fe,isLoading:!1})}else if(re==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Q=s.activeCollectionFolder;if(!(Q&&!((k=Q.children)!=null&&k.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const q=s.activeCollectionUuid,H=Q.filters||void 0,z=this._buildSearchNotation(),j=s.isAISearchActive&&!!s.searchQuery,ee=bt(this.apiClient,{fields:(L=this.config)==null?void 0:L.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:z||void 0,recursive:1,collection_uuid:q,f64:H,...j&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((B=s.config)==null?void 0:B.locale)??"en"}}),G=Zs(this.apiClient,{q:z||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:q,f64:H,...j&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((K=s.config)==null?void 0:K.locale)??"en"}}).catch(()=>null),[V,te]=await Promise.all([ee,G]);if(e!==this._loadId)return;const fe=((oe=V.files)==null?void 0:oe.length)??0,ye=fe>=s.limit,Re=ai({stats:te,loaded:fe,filtered:!0});this.store.setState({assets:V.files||[],folders:[],totalCount:Re.count,totalIsLowerBound:!Re.exact&&ye,totalFolderCount:0,offset:0,hasMore:ye,isLoading:!1})}}catch(re){if(e!==this._loadId)return;this._folderFeed?(this._folderFeed=null,this.store.setState({isLoading:!1,hasMore:!1})):this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:re,context:"loadData"},bubbles:!0,composed:!0}))}}get _selectableTotal(){const e=this.store.getState();return e.totalIsLowerBound?e.totalCount+1:e.totalCount}_getAssetsFolderScope(){var i;const{filters:e}=this.store.getState(),s=ja(ad(this._normalizedForcedFilters,e.applied),((i=this.config)==null?void 0:i.rootFolderPath)||"/");return s&&s.length>_t?(this._warnedFolderLimit||(this._warnedFolderLimit=!0,console.warn(`[asset-picker] The folders filter lists ${s.length} folders; only the first ${_t} are searched.`)),s.slice(0,_t)):s}_forcedFolderScopeBlocks(e){if(e==="assets")return!1;const s=ja(this._normalizedForcedFilters[$.FOLDERS],"/");return s===null||s.length>0}_assetsQueryParams(){var r,a;const e=this.store.getState(),s=this._buildSearchNotation(),i=e.isAISearchActive&&!!e.searchQuery;return{fields:(r=this.config)==null?void 0:r.apiFields,permalinksEnabled:e.cdnPermalinkEnabled,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:s||void 0,recursive:1,with_ai:i||void 0,ai_query:i?e.searchQuery:void 0,ai_lang:i?((a=e.config)==null?void 0:a.locale)??"en":void 0}}_folderPageFetcher(e){const s=this.apiClient;return od(async(a,o,n)=>{const l=await Promise.all(a.map(g=>this._resolveFolderUuid(g))),d=new Map,p=[];if(a.forEach((g,v)=>{if(l[v])p.push(g);else if(this._missingFolders.has(ve(g)))d.set(g,[]);else throw new Error("folder uuid unknown")}),p.length===0)return d;const f=await jl(s,{...e,offset:o,limit:n,foldersUuids:p.map(g=>l[a.indexOf(g)])}),h=nd(f.files||[],p);if(!h)throw new Error("multi-folder page has a file outside the requested folders");for(const[g,v]of h)d.set(g,v);return d},async(a,o,n)=>{try{return(await bt(s,{...e,folder:a,offset:o,limit:n})).files||[]}catch(l){if(!Ua(l))throw l;return this._missingFolders.add(ve(a)),[]}})}_clearFolderCaches({includeUuids:e=!1}={}){this._folderListings.clear(),this._folderCounts.clear(),e&&(this._folderUuidByPath.clear(),this._folderUuidLookups.clear(),this._missingFolders.clear(),this._folderUuidGeneration++)}async _loadFolderScopedAssets(e,s){const i=this.store.getState(),r=this._assetsQueryParams(),a=this._folderPageFetcher(r),o=JSON.stringify(r),n=e.map(h=>this._folderListings.get(h,o,a,i.limit)),l=new pd(n,cd(i.sortBy,i.sortDirection));this._folderFeed=l,this._folderTotalKnown=!1;const d=Promise.all([l.next(i.limit),this._countFolderScope(e).catch(()=>null)]);this._folderFeedTask=d;const[p,f]=await d;s===this._loadId&&(this._folderTotalKnown=f!==null,this.store.setState({assets:p,folders:[],totalCount:f??p.length,totalIsLowerBound:f===null&&l.hasMore,totalFolderCount:0,offset:0,hasMore:l.hasMore,isLoading:!1}))}_folderTotalPatch(e,s){return this._folderTotalKnown?{}:{totalCount:s,totalIsLowerBound:e.hasMore}}_showNoAssets(){this.store.setState({assets:[],folders:[],totalCount:0,totalIsLowerBound:!1,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1})}async _countFolderScope(e){var d;const s=this.store.getState();if(!this.apiClient||s.searchQuery&&s.isAISearchActive)return null;const i=await Promise.all(e.map(p=>this._resolveFolderUuid(p))),r=[];for(let p=0;p<e.length;p++){const f=i[p];if(f)r.push(f);else if(!this._missingFolders.has(ve(e[p])))return null}const a=[s.searchQuery,this._buildSearchNotation()].filter(Boolean).join(" ")||void 0,o=p=>JSON.stringify([a??"",p]),n=r.filter(p=>!this._folderCounts.has(o(p)));if(n.length>0){const p=await Vl(this.apiClient,{foldersUuids:n,q:a});for(const f of((d=p.stats)==null?void 0:d.folders)??[])f.uuid&&n.includes(f.uuid)&&f.count>=0&&this._folderCounts.set(o(f.uuid),f.count)}let l=0;for(const p of r){const f=this._folderCounts.get(o(p));if(f===void 0)return null;l+=f}return l}_resolveFolderUuid(e){const s=ve(e),i=this._folderUuidByPath.get(s);if(i)return Promise.resolve(i);const r=this._folderUuidLookups.get(s);if(r)return r;const a=this.apiClient,o=this._folderUuidGeneration,n=(async()=>{try{const d=(await La(a,{folderPath:s,limit:1})).base;return!(d!=null&&d.uuid)||ve(d.path)!==s?null:(o===this._folderUuidGeneration&&this._folderUuidByPath.set(s,d.uuid),d.uuid)}catch(l){return Ua(l)&&o===this._folderUuidGeneration&&this._missingFolders.add(s),null}finally{o===this._folderUuidGeneration&&this._folderUuidLookups.delete(s)}})();return this._folderUuidLookups.set(s,n),n}async _loadMore(){var r,a,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient)return;if(e.activeTab==="assets"&&this._folderFeed){const n=this._folderFeed,l=++this._loadMoreId;this.store.setState({isLoading:!0});try{const d=n.next(e.limit);this._folderFeedTask=d;const p=await d;if(l!==this._loadMoreId||n!==this._folderFeed)return;const f=[...this.store.getState().assets,...p];this.store.setState({assets:f,offset:e.offset+e.limit,hasMore:n.hasMore,isLoading:!1,...this._folderTotalPatch(n,f.length)})}catch(d){if(l!==this._loadMoreId||n!==this._folderFeed)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:d,context:"loadMore"},bubbles:!0,composed:!0}))}return}if(e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((r=e.activeCollectionFolder.children)!=null&&r.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let l=n||void 0,d=e.currentFolderPath||"/",p=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const y=e.labels.find(M=>M.uuid===e.activeLabelUuid);y&&(l=`labels:${y.sid.replace("#","")}${n?" "+n:""}`),d="/",p=1}let f,h;e.activeTab==="collections"&&e.activeCollectionFolder&&(f=e.activeCollectionUuid||void 0,h=e.activeCollectionFolder.filters||void 0,d="",p=1);const g=await bt(this.apiClient,{fields:(a=this.config)==null?void 0:a.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...d?{folder:d}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:p,...f&&{collection_uuid:f},...h&&{f64:h},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const v=this.store.getState().assets,b=g.files||[],_=b.length>=e.limit,T=[...v,...b];this.store.setState({assets:T,offset:i,hasMore:_,isLoading:!1,...e.totalIsLowerBound&&{totalCount:T.length,totalIsLowerBound:_}})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var r;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((r=s.activeCollectionFolder.children)!=null&&r.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var a;const s=e.detail.active,i=this.store.getState(),r={isAISearchActive:s};i.searchQuery&&(s?r.sortBy="relevance":i.sortBy==="relevance"&&(r.sortBy=((a=this.config)==null?void 0:a.defaultSortBy)??"created_at"),r.offset=0,r.assets=[],r.folders=[],r.isLoading=!0),this.store.setState(r),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&Od(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,r=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...r,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Va(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Va(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&Ld(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:this._rootPath(),breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var a,o,n,l;const s=e.detail.asset,{selectedAssets:i,selectedFolders:r}=this.store.getState();if(!i.has(s.uuid)&&this._isSelectionLocked(i.size+(((a=this.config)==null?void 0:a.folderSelection)===!1?0:r.size))){this._notifyMaxSelection(((o=this.config)==null?void 0:o.maxSelections)??0);return}if(((n=this.config)!=null&&n.transformations||(l=this.config)!=null&&l.crop)&&Tt(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0,this._maybeLoadCropModule(this._transformAssets);return}this._emitSelect([s])}_emitSelect(e,s){var r,a,o;e=this._applyVariantSelection(e),(r=this.config)!=null&&r.humanReadableMetadata&&(e=this._applyHumanReadableMetadata(e));const i={assets:e};s!=null&&s.length&&(i.folders=s),(o=(a=this.config)==null?void 0:a.onSelect)==null||o.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_applyHumanReadableMetadata(e){const{metadataFields:s,regionalFilters:i}=this.store.getState();if(!s.length)return e;const r=wr(s),a=o=>{if(!o||typeof o!="object")return null;let n=!1;const l={...o};for(const[d,p]of Object.entries(o)){const f=r.get(d);if(!f)continue;const h=Qo(p,f,i);h!==p&&(l[d]=h,n=!0)}return{resolved:l,changed:n}};return e.map(o=>{var v;const n=o,l=b=>typeof b=="string"||Array.isArray(b)&&b.every(_=>typeof _=="string"),d=Object.keys(n).filter(b=>r.has(b)&&l(n[b])),p=d.length?a(Object.fromEntries(d.map(b=>[b,n[b]]))):null,f=a((v=o.info)==null?void 0:v.metadata),h=a(o.meta);if(!(p!=null&&p.changed)&&!(f!=null&&f.changed)&&!(h!=null&&h.changed))return o;const g={...o};return p!=null&&p.changed&&Object.assign(g,p.resolved),f!=null&&f.changed&&(g.info={...o.info,metadata:f.resolved}),h!=null&&h.changed&&(g.meta=h.resolved),g})}_handleFolderOpen(e){var a;const s=e.detail.folder,i=this.store.getState(),r=s.path||`${i.currentFolderPath}${s.name}/`;(a=this.config)!=null&&a.rememberLastFolder&&Ha(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:r,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:r}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const l=this._findCollectionFolder(i.activeCollectionFolders,s);if(l){const d=i.breadcrumb.findIndex(f=>f.uuid===s),p=i.breadcrumb.slice(0,d+1);this.store.setState({activeCollectionFolder:l,breadcrumb:p,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const r=s?i.breadcrumb.findIndex(l=>l.uuid===s):-1,a=s?i.breadcrumb.slice(0,r+1):[],o=a.length>0?a[a.length-1].path:this._rootPath();(n=this.config)!=null&&n.rememberLastFolder&&Ha(o,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await Yl(this.apiClient,s.uuid),r=wo(i.folders||[]);this.store.setState({activeCollectionFolders:r,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),r=s.path.split(" -> ").filter(Boolean),a=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let o="";for(const l of r)o=o?`${o} -> ${l}`:l,a.push({uuid:o,name:l,path:o});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:a,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const r=this._findCollectionFolder(i.children,s);if(r)return r}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&Fd(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||this._rootPath()}_rootPath(){var e;return((e=this.config)==null?void 0:e.rootFolderPath)||tc("/",this._listScope)}_seedFolderFromListScope(){if(this.store.getState().currentFolderPath!=="/"||!this._listScope.length)return;const s=this._rootPath();s!=="/"&&this.store.setState({currentFolderPath:s,breadcrumb:this._buildBreadcrumbFromPath(s,s)})}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const r=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),a=[];let o=s.endsWith("/")?s:s+"/";for(const n of r)o+=n+"/",a.push({uuid:o,name:n,path:o});return a}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var r,a;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((a=this.config)==null?void 0:a.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var a,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Tt).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0,this._maybeLoadCropModule(this._transformAssets)}async _handleFolderResolveConfirm(e){var a;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),r=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const o=await Promise.all(i.map(h=>{var g;return bt(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:h.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const h of o)n.push(...h.files);const l=[...r],d=new Set(l.map(h=>h.uuid));for(const h of n)d.has(h.uuid)||(l.push(h),d.add(h.uuid));const p=(a=this.config)==null?void 0:a.maxSelections,f=p?l.slice(0,p):l;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0,this._maybeLoadCropModule(this._transformAssets);return}this._emitSelect(f)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,r=e.detail.crop??null,a=this._transformAssets,o=this._transformFolders,n=a.length>1,l=gc(s,{isMultiSelect:n,isAspectLocked:i,exactSize:!!r}),d=a.map(p=>{var v,b;if(!Tt(p))return p;const f=r?r.url.cdn:(v=p.url)==null?void 0:v.cdn,h=r||(b=p.url)==null?void 0:b.permalink,g={cdn:f?r?_c(f,l):ct(f,l):""};return h&&(g.permalink_cdn=ct(h,l)),{...p,transformation:{params:s,url:g},...r?{crop:r}:{}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(d,o.length?o:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await _o(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(r){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(r))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var d,p,f,h;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||this._loadDataTimer||!(((d=s.config)==null?void 0:d.multiSelect)??!0))return;const r=((p=e==null?void 0:e.detail)==null?void 0:p.scope)??"all",a=r!=="assets"&&((f=this.config)==null?void 0:f.folderSelection)!==!1&&s.folders.length>0;if(!(r!=="folders")){a&&this.selectionCtrl.selectAllFolders(s.folders);return}const n=s.activeTab==="assets"?this._folderFeed:null;if(n?!n.hasMore:!s.totalIsLowerBound&&s.assets.length>=s.totalCount){a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const l=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{if(n){await((h=this._folderFeedTask)==null?void 0:h.catch(()=>{}));const z=[];try{for(;n.hasMore;){if(l!==this._selectAllId||n!==this._folderFeed)return;z.push(...await n.next(s.limit*4))}}catch(ee){if(l===this._selectAllId&&n===this._folderFeed&&z.length){const G=[...this.store.getState().assets,...z];this.store.setState({assets:G,offset:Math.max(0,G.length-s.limit),hasMore:n.hasMore,...this._folderTotalPatch(n,G.length)})}throw ee}if(l!==this._selectAllId||n!==this._folderFeed)return;const j=[...this.store.getState().assets,...z];this.store.setState({assets:j,offset:Math.max(0,j.length-s.limit),hasMore:!1,isSelectingAll:!1,...this._folderTotalPatch(n,j.length)}),a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(j);return}const g=this._buildSearchNotation();let v=s.currentFolderPath||"/";const b=s.limit,_=s.assets,T=s.totalCount;let y=s.activeTab==="folders"?0:1,M=g||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const z=s.labels.find(j=>j.uuid===s.activeLabelUuid);z&&(M=`labels:${z.sid.replace("#","")}${g?" "+g:""}`),v="/",y=1}let k,L;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,L=s.activeCollectionFolder.filters||void 0,v="",y=1);const B=s.totalIsLowerBound,K=4,oe=[];let re=_.length,Q=!1;for(;!Q&&(B||re<T);){if(l!==this._selectAllId)return;const z=[];for(;z.length<K&&(B||re<T);)z.push(re),re+=b;const j=await Promise.all(z.map(ee=>{var G,V;return bt(this.apiClient,{fields:(G=this.config)==null?void 0:G.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...v?{folder:v}:{},offset:ee,limit:b,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:M,recursive:y,...k&&{collection_uuid:k},...L&&{f64:L},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((V=s.config)==null?void 0:V.locale)??"en"}})}));if(l!==this._selectAllId)return;for(const ee of j){const G=ee.files??[];oe.push(...G),B&&G.length<b&&(Q=!0)}}if(l!==this._selectAllId)return;const X=new Set(_.map(z=>z.uuid)),q=oe.filter(z=>X.has(z.uuid)?!1:(X.add(z.uuid),!0)),H=[..._,...q];this.store.setState({assets:H,offset:Math.max(0,H.length-b),hasMore:!1,isSelectingAll:!1,...B&&{totalCount:H.length,totalIsLowerBound:!1}}),a&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(H)}catch(g){if(l!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:g,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===$.DATE||e===$.LICENSE_EXPIRY||e===F.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:r,folderUuids:a}=e.detail,o=this.store.getState();if(a&&typeof a=="object")for(const[d,p]of Object.entries(a))p&&this._folderUuidByPath.set(ve(d),p);const n={...o.filters};let l=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(d=>d==null||d===""||Array.isArray(d)&&d.length===0);if(!l&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:d,preset:p,from:f,to:h}=i;l=!d&&!p&&!f&&!h}if(l){const d={...n.applied};delete d[s],n.applied=d}else{const d={...n.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?d[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===$.IMAGE&&typeof i=="object"&&!Array.isArray(i)?d[s]=i:d[s]={type:"string",values:Array.isArray(i)?i:[i],operator:r||":"},n.applied=d}if(this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(s===$.FOLDERS?300:void 0),this._pendingFilter===s){this._pendingFilter=null;const d=this.renderRoot.querySelector("ap-filters-bar");d&&(d.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,r=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();a=i.left-l.left,o=i.bottom-l.top}}r==null||r.openFilterPanel(s,!0,a,o)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,r=this.renderRoot.querySelector("ap-content-toolbar");let a,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();a=i.left-l.left,o=i.bottom-l.top}}r==null||r.openMetadataFieldPanel(s,!0,a,o)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var h,g,v;const{key:s,metadataFieldKey:i}=e.detail,r=this.renderRoot.querySelector("ap-filters-bar"),a=this.renderRoot.querySelector("ap-content-toolbar");if(!r||!a)return;i?(this._pendingMetadataField=i,r.pendingMetadataField=i):s&&(this._pendingFilter=s,r.pendingFilter=s),await r.updateComplete;let o=r.renderRoot.querySelector(".chip.pending");if(!o){const b=r.renderRoot.querySelectorAll(".chip.pinned-empty"),_=i?(h=r._getMetadataLabel)==null?void 0:h.call(r,i):void 0;for(const T of b){const y=(v=(g=T.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:v.trim();if(i&&y===_){o=T;break}if(s&&y===(Mt[s]||s)){o=T;break}}}if(!o)return;const n=o.getBoundingClientRect(),l=this.renderRoot.querySelector(".toolbar-filters-wrapper"),d=l==null?void 0:l.getBoundingClientRect(),p=d?n.left-d.left:n.left,f=d?n.bottom-d.top:void 0;i?a.openMetadataFieldPanel(i,!0,p,f):s&&a.openFilterPanel(s,!0,p,f)}_handleFilterRemove(e){var o;const s=e.detail.key;if(s in(((o=this.config)==null?void 0:o.forcedFilters)??{}))return;const r={...this.store.getState().filters},a={...r.applied};delete a[s],r.applied=a,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:r,metadataType:a,metaDatePreset:o}=e.detail,l={...this.store.getState().filters},d={...l.metadata},p={...d.applied};if(!r||Array.isArray(r)&&r.length===0?(delete p[s],d.applied=p,d.pinned.includes(s)||(d.visible=d.visible.filter(h=>h!==s))):(p[s]={type:"string",values:Array.isArray(r)?r:[r],operator:i||":",metadataType:a,...o?{metaDatePreset:o}:{}},d.applied=p,d.visible.includes(s)||(d.visible=[...d.visible,s])),l.metadata=d,this.store.setState({filters:l,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const h=this.renderRoot.querySelector("ap-filters-bar");h&&(h.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(n=>n!==s),a.metadata=o,this.store.setState({filters:a})}_handleMetadataFilterRemove(e){var l;const{fieldKey:s}=e.detail,i=this.renderRoot.querySelector("ap-filters-bar");(i==null?void 0:i.activeMetadataField)===s&&((l=this.renderRoot.querySelector("ap-content-toolbar"))==null||l.closeFilterPanel());const a={...this.store.getState().filters},o={...a.metadata},n={...o.applied};delete n[s],o.applied=n,o.pinned.includes(s)||(o.visible=o.visible.filter(d=>d!==s)),a.metadata=o,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,l;const{key:s,pinned:i}=e.detail,a={...this.store.getState().filters};i?a.pinned.includes(s)||(a.pinned=[...a.pinned,s]):a.pinned=a.pinned.filter(d=>d!==s),this.store.setState({filters:a});const o=((l=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:l.projectToken)??null;vd(o,a.pinned)}_handleMetadataPin(e){var l,d;const{fieldKey:s,pinned:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(p=>p!==s),s in o.applied||(o.visible=o.visible.filter(p=>p!==s))),a.metadata=o,this.store.setState({filters:a});const n=((d=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:d.projectToken)??null;bd(n,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState(),s=Object.fromEntries(Object.entries(e.filters.applied).filter(([r])=>!xi(r,e.activeTab)));this.store.setState({filters:{...e.filters,applied:s,metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const i=this.renderRoot.querySelector("ap-filters-bar");i&&(i.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFiltersSet(e){var l;const{applied:s,metadata:i}=e.detail,a={...this.store.getState().filters},o=new Set(Object.keys(((l=this.config)==null?void 0:l.forcedFilters)??{})),n={...s};for(const d of o)delete n[d];if(a.applied=n,i){const d={...a.metadata};d.applied=i.applied;const p=Object.keys(i.applied);d.visible=[...new Set([...d.pinned,...p])],a.metadata=d}this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return Ud;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return jd;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return Vd}return e.searchQuery?zd:e.activeTab==="folders"?Nd:Sr}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return qc(s,this._visibleAppliedMetadata).join(" ")}render(){var L,B,K,oe,re,Q,X,q,H,z,j,ee,G,V,te,fe,ye,Re,$e,vt,Y,Ce,ne,le,ms,jr,Vr,Br,Kr,qr,Hr,Gr,Yr,Qr,Wr,Xr,Jr,Zr;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),r=Array.from(e.selectedFolders.keys()),a=((L=this.config)==null?void 0:L.disabledAssetIds)??[],o=((B=this.config)==null?void 0:B.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),d=((K=this.config)==null?void 0:K.folderSelection)!==!1,p=this._localizeMetadataFields(e.metadataFields,s),f=this._getFilterMetadataFields(p),h=c`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((oe=this.config)==null?void 0:oe.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((re=e.activeCollectionFolder.children)!=null&&re.length)}
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
    `,g=this._uploaderAvailable,v=((X=this.config)==null?void 0:X.folderCreation)===!0,b=((q=this.config)==null?void 0:q.auth.mode)==="sassKey",_=e.activeTab==="folders",T=v&&_&&(b||Zl(e.permissions,sc.FOLDER_CREATE)),y=c`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <sfx-toast .t=${s}></sfx-toast>
        ${this._isDragOver?c`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${s("dropFilesToUpload","Drop files to upload")}
                </div>
              </div>
            `:m}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(H=this.config)!=null&&H.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${g}
              .showCreateFolder=${T}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((z=e.activeCollectionFolder.children)!=null&&z.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((j=e.activeCollectionFolder.children)!=null&&j.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .showVariants=${!!((ee=this.config)!=null&&ee.variants)&&this._variantOptions.length>1}
              .variantOptions=${this._variantOptions}
              .defaultVariantName=${this._defaultVariantName}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${f}
              .pinnedFilters=${this._visiblePinnedFilters}
              .apiClient=${this.apiClient}
              .rootFolderPath=${((G=this.config)==null?void 0:G.rootFolderPath)||"/"}
              .activeTab=${e.activeTab}
              .totalIsLowerBound=${e.totalIsLowerBound}
              .locale=${((V=this.config)==null?void 0:V.locale)??"en"}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .enabledFilterKeys=${((te=this.config)==null?void 0:te.enabledFilters)??null}
              .enabledMetadataFields=${((fe=this.config)==null?void 0:fe.enabledMetadataFields)??null}
              .metadataCategoryEnabled=${this._isFilterEnabled($.METADATA)}
              .approverUsers=${((ye=this.config)==null?void 0:ye.approverUsers)??[]}
              .requesterUsers=${((Re=this.config)==null?void 0:Re.requesterUsers)??[]}
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

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!(($e=e.activeCollectionFolder.children)!=null&&$e.length))?m:c`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${this._visibleAppliedMetadata}
                    .metadataFields=${p}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${((vt=this.config)==null?void 0:vt.approverUsers)??[]}
                    .requesterUsers=${((Y=this.config)==null?void 0:Y.requesterUsers)??[]}
                    .pinnedFilters=${this._visiblePinnedFilters}
                    .pinnedMetadataFields=${this._visiblePinnedMetadata}
                    .forcedFilters=${((Ce=this.config)==null?void 0:Ce.forcedFilters)??{}}
                    .enabledFilters=${((ne=this.config)==null?void 0:ne.enabledFilters)??null}
                    .enabledMetadataFields=${((le=this.config)==null?void 0:le.enabledMetadataFields)??null}
                    .activeTab=${e.activeTab}
                    .locale=${((ms=this.config)==null?void 0:ms.locale)??"en"}
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
                ></sfx-breadcrumb>`:m}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((jr=e.activeCollectionFolder.children)!=null&&jr.length)))?c`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${((Vr=this.config)==null?void 0:Vr.gridSize)??"normal"}
                .multiSelect=${((Br=this.config)==null?void 0:Br.multiSelect)!==!1}
                .folderCount=${2}
                .t=${s}
              ></ap-skeleton>`:this._renderContent(e,i,r,d,a,o)}

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
              `:m}
          ${this._transformOpen?c`
                <ap-transformation-dialog
                  .assets=${this._transformAssets}
                  .isMultiSelect=${this._transformAssets.length>1}
                  .cropEnabled=${this._cropReady}
                  .cropConfig=${typeof((Kr=this.config)==null?void 0:Kr.crop)=="object"?this.config.crop:void 0}
                  .t=${s}
                  .exportOriginalLabel=${(qr=this._transformationsConfig)==null?void 0:qr.exportOriginalLabel}
                  .applyExportLabel=${(Hr=this._transformationsConfig)==null?void 0:Hr.applyExportLabel}
                  @transform-confirm=${this._handleTransformConfirm}
                  @transform-skip=${this._handleTransformSkip}
                  @transform-cancel=${this._handleTransformCancel}
                ></ap-transformation-dialog>
              `:m}
          ${this._createFolderOpen?c`
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

        ${e.isPreviewOpen&&e.previewAsset?c`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${i}
              .containerToken=${e.projectToken}
              .showMetadata=${((Gr=this.config)==null?void 0:Gr.showMetadata)!==!1}
              .metadataFields=${p}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((Yr=this.config)==null?void 0:Yr.multiSelect)??!0}
              .selectedVariantName=${this._variantOverrides[e.previewAsset.uuid]??this._defaultVariantName}
              .t=${s}
              .locale=${((Qr=this.config)==null?void 0:Qr.locale)??"en"}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:m}
      </div>
    `,M=c`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${l}
        .totalCount=${e.totalCount}
        .totalIsLowerBound=${e.totalIsLowerBound}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((Wr=this.config)==null?void 0:Wr.multiSelect)??!0}
        .maxSelections=${(Xr=this.config)==null?void 0:Xr.maxSelections}
        .showTransform=${(!!((Jr=this.config)!=null&&Jr.transformations)||!!((Zr=this.config)!=null&&Zr.crop)&&n.length===1)&&n.some(Tt)}
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
        `:m;return this._isInline?e.isOpen?c`
        <div class="ap-inline">
          ${this._isUploaderOpen?k:c`
                <div class="inline-header">${h}</div>
                <div class="inline-content">${y}</div>
                <div class="inline-footer">${M}</div>
              `}
        </div>
      `:m:c`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${dn=>this._handleCancel(dn.detail.reason)}
      >
        ${this._isUploaderOpen?k:c`
              <div slot="header">${h}</div>
              ${y}
              <div slot="footer">${M}</div>
            `}
      </ap-modal>
    `}_renderContent(e,s,i=[],r=!1,a=[],o=[]){var p,f,h,g,v,b,_,T,y,M,k,L,B,K,oe,re,Q,X,q,H,z,j,ee,G,V,te,fe,ye,Re;const n=e.t,l=this._isSelectionLocked(s.length+(r?i.length:0)),d=this._limitLockTooltip;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?c`
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
            .locale=${((p=this.config)==null?void 0:p.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${d}
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
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .locale=${((v=this.config)==null?void 0:v.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${d}
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
            .locale=${((T=this.config)==null?void 0:T.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${d}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((y=this.config)==null?void 0:y.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((M=this.config)==null?void 0:M.gridSize)??"normal"}
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
        `:c`
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
          .limitTooltip=${d}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((B=this.config)==null?void 0:B.multiSelect)??!0}
          .folderSelectable=${r}
          .totalCount=${this._selectableTotal}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((K=this.config)!=null&&K.variants)}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let $e=e.labels;if(e.searchQuery){const Y=e.searchQuery.toLowerCase();$e=e.labels.filter(Ce=>Ce.name.toLowerCase().includes(Y))}const vt=e.sortDirection==="asc"?1:-1;return $e=[...$e].sort((Y,Ce)=>vt*Y.name.localeCompare(Ce.name)),$e.length===0?c`
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
              ${$e.map((Y,Ce)=>c`
                  <ap-label-card
                    .label=${Y}
                    .index=${Ce}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `)}
            </div>
          `:c`
          <div class="labels-list">
            ${$e.map((Y,Ce)=>c`
                <ap-label-row
                  .label=${Y}
                  .index=${Ce}
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
            .locale=${((oe=this.config)==null?void 0:oe.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${d}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((re=this.config)==null?void 0:re.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((Q=this.config)==null?void 0:Q.gridSize)??"normal"}
            .showVariants=${!!((X=this.config)!=null&&X.variants)}
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
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .locale=${((q=this.config)==null?void 0:q.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${d}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((H=this.config)==null?void 0:H.multiSelect)??!0}
          .folderSelectable=${!1}
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
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let Y=e.collections;if(e.searchQuery){const ne=e.searchQuery.toLowerCase();Y=e.collections.filter(le=>le.title.toLowerCase().includes(ne))}const Ce=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?Y=[...Y].sort((ne,le)=>Ce*(new Date(ne.created_at).getTime()-new Date(le.created_at).getTime())):e.sortBy==="updated_at"?Y=[...Y].sort((ne,le)=>Ce*(new Date(ne.updated_at).getTime()-new Date(le.updated_at).getTime())):Y=[...Y].sort((ne,le)=>Ce*ne.title.localeCompare(le.title)),Y.length===0?c`
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
              ${Y.map((ne,le)=>c`
                  <ap-collection-card
                    .collection=${ne}
                    .index=${le}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `)}
            </div>
          `:c`
          <div class="collections-list">
            ${Y.map((ne,le)=>{var ms;return c`
                <ap-collection-row
                  .collection=${ne}
                  .index=${le}
                  .locale=${((ms=this.config)==null?void 0:ms.locale)??"en"}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `})}
          </div>
        `}if(e.isLoadingCollectionFolders)return c`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;const $e=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((j=e.activeCollectionFolder.children)==null?void 0:j.length)??0)>0){let Y=$e;if(e.searchQuery){const ne=e.searchQuery.toLowerCase();Y=$e.filter(le=>le.name.toLowerCase().includes(ne))}const Ce=e.sortDirection==="asc"?1:-1;return Y=[...Y].sort((ne,le)=>Ce*ne.name.localeCompare(le.name)),Y.length===0?c`
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
              ${Y.map((ne,le)=>c`
                  <ap-collection-folder-card
                    .folder=${ne}
                    .index=${le}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `)}
            </div>
          `:c`
          <div class="collection-folders-list">
            ${Y.map((ne,le)=>c`
                <ap-collection-folder-row
                  .folder=${ne}
                  .index=${le}
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
            .locale=${((ee=this.config)==null?void 0:ee.locale)??"en"}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${a}
            .limitLocked=${l}
            .limitTooltip=${d}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((G=this.config)==null?void 0:G.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((V=this.config)==null?void 0:V.gridSize)??"normal"}
            .showVariants=${!!((te=this.config)!=null&&te.variants)}
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
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .locale=${((fe=this.config)==null?void 0:fe.locale)??"en"}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${a}
          .limitLocked=${l}
          .limitTooltip=${d}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((ye=this.config)==null?void 0:ye.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${this._selectableTotal}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!((Re=this.config)!=null&&Re.variants)}
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
      `}return m}},wt.styles=[A`
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
    `],wt.VARIANTS_FETCH_MAX_ATTEMPTS=3,wt);Ke([x()],Ve.prototype,"_isDragOver");Ke([x()],Ve.prototype,"_isUploaderOpen");Ke([x()],Ve.prototype,"_folderResolveOpen");Ke([x()],Ve.prototype,"_transformOpen");Ke([x()],Ve.prototype,"_createFolderOpen");Ke([x()],Ve.prototype,"_isCreatingFolder");Ke([x()],Ve.prototype,"_createFolderError");Ke([x()],Ve.prototype,"_cropReady");Ke([x()],Ve.prototype,"_variantPresets");Ke([x()],Ve.prototype,"_defaultVariantName");Ke([x()],Ve.prototype,"_variantOverrides");Ke([u({type:Object})],Ve.prototype,"config");let $u=Ve;typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",$u);const wu=[{pattern:"/",load:()=>U(()=>import("./landing-DO5Ancsx.js"),__vite__mapDeps([5,6])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>U(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([7,8])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>U(()=>import("./configuration-NDCQEfn-.js"),__vite__mapDeps([9,8])).then(t=>t.default)},{pattern:"/docs/api",load:()=>U(()=>import("./api-Dl3UszFN.js"),__vite__mapDeps([10,8])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>U(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([11,8])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>U(()=>import("./filters-Df1TuQYX.js"),__vite__mapDeps([12,8])).then(t=>t.default)},{pattern:"/docs/types",load:()=>U(()=>import("./types-DPNAgA2W.js"),__vite__mapDeps([13,8])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>U(()=>import("./basic-WvJsgfKn.js"),__vite__mapDeps([14,6])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>U(()=>import("./single-select-BzHJpR7s.js"),__vite__mapDeps([15,6])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>U(()=>import("./multi-select-C6R019gX.js"),__vite__mapDeps([16,6])).then(t=>t.default)},{pattern:"/examples/disabled-assets",load:()=>U(()=>import("./disabled-assets-Cu1LP_mE.js"),__vite__mapDeps([17,6])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>U(()=>import("./theming-n1QPxLim.js"),__vite__mapDeps([18,6])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>U(()=>import("./custom-theming-DDXeqJS1.js"),__vite__mapDeps([19,6])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>U(()=>import("./default-filters-aFnYZtUo.js"),__vite__mapDeps([20,6])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>U(()=>import("./forced-filters-J3YbkI2W.js"),__vite__mapDeps([21,6])).then(t=>t.default)},{pattern:"/examples/enabled-filters",load:()=>U(()=>import("./enabled-filters-BGFLrOYN.js"),__vite__mapDeps([22,6])).then(t=>t.default)},{pattern:"/examples/enabled-metadata-fields",load:()=>U(()=>import("./enabled-metadata-fields-Zw5X6cSP.js"),__vite__mapDeps([23,6])).then(t=>t.default)},{pattern:"/examples/thumbnail-metadata",load:()=>U(()=>import("./thumbnail-metadata-DV7uB7Ge.js"),__vite__mapDeps([24,6])).then(t=>t.default)},{pattern:"/examples/approval-users",load:()=>U(()=>import("./approval-users-DZK7tiF-.js"),__vite__mapDeps([25,6])).then(t=>t.default)},{pattern:"/examples/human-readable-metadata",load:()=>U(()=>import("./human-readable-metadata-CyTKRcT-.js"),__vite__mapDeps([26,6])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>U(()=>import("./hidden-tabs-DoAMHTm1.js"),__vite__mapDeps([27,6])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>U(()=>import("./root-folder-Duql8xyz.js"),__vite__mapDeps([28,6])).then(t=>t.default)},{pattern:"/examples/events",load:()=>U(()=>import("./events-CzfAmaaG.js"),__vite__mapDeps([29,6])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>U(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([30,6])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>U(()=>import("./inline-4Iwf4Xzg.js"),__vite__mapDeps([31,6])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>U(()=>import("./sticky-filters-uao-qnIL.js"),__vite__mapDeps([32,6])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>U(()=>import("./grid-size-Drz7HT8X.js"),__vite__mapDeps([33,6])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>U(()=>import("./preferences-B-fiv0Kx.js"),__vite__mapDeps([34,6])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>U(()=>import("./uploader-doBV7Rh_.js"),__vite__mapDeps([35,6])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>U(()=>import("./folder-selection-BJBPBjwl.js"),__vite__mapDeps([36,6])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>U(()=>import("./ai-search-0bYUzs9d.js"),__vite__mapDeps([37,6])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>U(()=>import("./transformations-KTP45oe9.js"),__vite__mapDeps([38,6])).then(t=>t.default)},{pattern:"/examples/variants",load:()=>U(()=>import("./variants-Mmr04Ngi.js"),__vite__mapDeps([39,6])).then(t=>t.default)},{pattern:"/examples/language-switcher",load:()=>U(()=>import("./language-switcher-Dg6AZmU6.js"),__vite__mapDeps([40,6])).then(t=>t.default)}];let ws=null,Ja=0;function ku(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),r=document.getElementById("sidebar-examples"),a=document.querySelectorAll(".topbar-nav-link");async function o(){const n=location.hash.slice(1)||"/",l=++Ja;ws!=null&&ws.destroy&&ws.destroy(),t.close();const d=wu.find(_=>_.pattern===n);if(!d){location.hash="#/";return}const p=n.startsWith("/docs/"),f=n.startsWith("/examples/"),h=p||f,g=n==="/";s.classList.toggle("hidden",!h),document.body.classList.toggle("has-sidebar",h),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!p),r.classList.toggle("hidden",!f),s.querySelectorAll(".sidebar-link").forEach(_=>{_.classList.toggle("active",_.getAttribute("data-route")===n)});const v=p?"docs":f?"examples":"home";a.forEach(_=>{_.classList.toggle("active",_.getAttribute("data-section")===v)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const b=await d.load();l===Ja&&(ws=b,e.innerHTML=b.render(),b.init&&b.init(t))}window.addEventListener("hashchange",o),o()}const Nr="ap-demo-auth",Ai={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function Su(){try{const t=localStorage.getItem(Nr);if(t)return{...Ai,...JSON.parse(t)}}catch{}return{...Ai}}function Cu(t){localStorage.setItem(Nr,JSON.stringify(t))}function Au(){const t=window.__apDemoFlags;return t&&typeof t=="object"?t:{}}function Du(t={}){const{projectToken:e,securityTemplateKey:s}=Su();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t,...Au()}}function Eu(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),r=document.getElementById("auth-save");try{const a=localStorage.getItem(Nr);if(a){const o=JSON.parse(a);s.value=o.projectToken??"",i.value=o.securityTemplateKey??""}}catch{}t.addEventListener("click",a=>{a.stopPropagation(),e.classList.toggle("hidden")}),r.addEventListener("click",()=>{Cu({projectToken:s.value.trim()||Ai.projectToken,securityTemplateKey:i.value.trim()||Ai.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",a=>{!e.contains(a.target)&&!t.contains(a.target)&&e.classList.add("hidden")})}Eu();console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,"color: #5b6cff; font-weight: 600;","color: inherit;");const Fu=document.getElementById("sidebar-toggle"),cn=document.getElementById("sidebar");Fu.addEventListener("click",()=>{cn.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{cn.classList.remove("mobile-open")});const Ou=document.getElementById("picker");ku(Ou);export{m as A,mr as D,lt as E,$ as F,Mo as M,U as _,nr as a,Du as b,Iu as c,qd as d,Jl as e,A as f,Su as g,tt as h,Hd as i,c as j,E as k,Zi as l,Zo as m,u as n,D as o,rs as p,qs as q,x as r,vl as s,Kd as t,bl as u,Pu as v,yt as w,en as x,On as y};
