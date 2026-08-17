const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/landing-DLJumpXG.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-DxtJF6s1.js","assets/api-Dl3UszFN.js","assets/theming-hrqYM8pb.js","assets/filters-DAXz2ick.js","assets/types-DPNAgA2W.js","assets/basic-DsRMABvX.js","assets/single-select-Dc-5iOQX.js","assets/multi-select-hrlTQ69m.js","assets/disabled-assets-Bf6dsMys.js","assets/theming-OXVLG4Jo.js","assets/custom-theming-CSUboOMM.js","assets/default-filters-Bnj0eLRr.js","assets/forced-filters-CM019T9G.js","assets/enabled-filters-CN-5893T.js","assets/hidden-tabs-DDQ54nMH.js","assets/root-folder-kuns2n2d.js","assets/events-DYQzfhZs.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-Bp_6Mq7a.js","assets/sticky-filters-wjcGwqcW.js","assets/grid-size-CDul_wdi.js","assets/preferences-CYL-CWNO.js","assets/uploader-a4H5TS4K.js","assets/folder-selection-BFB50wp1.js","assets/ai-search-C2gcgXPD.js","assets/transformations-D_UEcLal.js","assets/language-switcher-BD0Jl8kF.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const Zo="modulepreload",ea=function(t){return"/asset-picker/"+t},vr={},K=function(e,s,i){let r=Promise.resolve();if(s&&s.length>0){let a=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=a(s.map(c=>{if(c=ea(c),c in vr)return;vr[c]=!0;const p=c.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":Zo,p||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((g,v)=>{h.addEventListener("load",g),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return r.then(a=>{for(const n of a||[])n.status==="rejected"&&o(n.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=globalThis,Vi=Js.ShadowRoot&&(Js.ShadyCSS===void 0||Js.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hi=Symbol(),br=new WeakMap;let ho=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Hi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Vi&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=br.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&br.set(s,e))}return e}toString(){return this.cssText}};const ta=t=>new ho(typeof t=="string"?t:t+"",void 0,Hi),C=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new ho(s,t,Hi)},sa=(t,e)=>{if(Vi)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=Js.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},xr=Vi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return ta(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ia,defineProperty:ra,getOwnPropertyDescriptor:oa,getOwnPropertyNames:aa,getOwnPropertySymbols:na,getPrototypeOf:la}=Object,ut=globalThis,_r=ut.trustedTypes,ca=_r?_r.emptyScript:"",wi=ut.reactiveElementPolyfillSupport,ys=(t,e)=>t,si={toAttribute(t,e){switch(e){case Boolean:t=t?ca:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},qi=(t,e)=>!ia(t,e),yr={attribute:!0,type:String,converter:si,reflect:!1,useDefault:!1,hasChanged:qi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ut.litPropertyMetadata??(ut.litPropertyMetadata=new WeakMap);let qt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=yr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&ra(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:o}=oa(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:r,set(a){const n=r==null?void 0:r.call(this);o==null||o.call(this,a),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??yr}static _$Ei(){if(this.hasOwnProperty(ys("elementProperties")))return;const e=la(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ys("properties"))){const s=this.properties,i=[...aa(s),...na(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(xr(r))}else e!==void 0&&s.push(xr(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sa(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const a=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:si).toAttribute(s,i.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,s){var o,a;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:si;this._$Em=r;const c=l.fromAttribute(s,n.type);this[r]=c??((a=this._$Ej)==null?void 0:a.get(r))??c,this._$Em=null}}requestUpdate(e,s,i,r=!1,o){var a;if(e!==void 0){const n=this.constructor;if(r===!1&&(o=this[e]),i??(i=n.getPropertyOptions(e)),!((i.hasChanged??qi)(o,s)||i.useDefault&&i.reflect&&o===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:o},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??s??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};qt.elementStyles=[],qt.shadowRootOptions={mode:"open"},qt[ys("elementProperties")]=new Map,qt[ys("finalized")]=new Map,wi==null||wi({ReactiveElement:qt}),(ut.reactiveElementVersions??(ut.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=globalThis,$r=t=>t,ii=$s.trustedTypes,wr=ii?ii.createPolicy("lit-html",{createHTML:t=>t}):void 0,po="$lit$",ht=`lit$${Math.random().toFixed(9).slice(2)}$`,uo="?"+ht,da=`<${uo}>`,Ot=document,ks=()=>Ot.createComment(""),Ss=t=>t===null||typeof t!="object"&&typeof t!="function",Gi=Array.isArray,ha=t=>Gi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ki=`[ 	
\f\r]`,fs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kr=/-->/g,Sr=/>/g,kt=RegExp(`>|${ki}(?:([^\\s"'>=/]+)(${ki}*=${ki}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cr=/'/g,Ar=/"/g,fo=/^(?:script|style|textarea|title)$/i,go=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),d=go(1),pt=go(2),et=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Er=new WeakMap,At=Ot.createTreeWalker(Ot,129);function mo(t,e){if(!Gi(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return wr!==void 0?wr.createHTML(e):e}const pa=(t,e)=>{const s=t.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",a=fs;for(let n=0;n<s;n++){const l=t[n];let c,p,u=-1,h=0;for(;h<l.length&&(a.lastIndex=h,p=a.exec(l),p!==null);)h=a.lastIndex,a===fs?p[1]==="!--"?a=kr:p[1]!==void 0?a=Sr:p[2]!==void 0?(fo.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=kt):p[3]!==void 0&&(a=kt):a===kt?p[0]===">"?(a=r??fs,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,c=p[1],a=p[3]===void 0?kt:p[3]==='"'?Ar:Cr):a===Ar||a===Cr?a=kt:a===kr||a===Sr?a=fs:(a=kt,r=void 0);const g=a===kt&&t[n+1].startsWith("/>")?" ":"";o+=a===fs?l+da:u>=0?(i.push(c),l.slice(0,u)+po+l.slice(u)+ht+g):l+ht+(u===-2?n:g)}return[mo(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Cs{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let o=0,a=0;const n=e.length-1,l=this.parts,[c,p]=pa(e,s);if(this.el=Cs.createElement(c,i),At.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=At.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(po)){const h=p[a++],g=r.getAttribute(u).split(ht),v=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?fa:v[1]==="?"?ga:v[1]==="@"?ma:mi}),r.removeAttribute(u)}else u.startsWith(ht)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(fo.test(r.tagName)){const u=r.textContent.split(ht),h=u.length-1;if(h>0){r.textContent=ii?ii.emptyScript:"";for(let g=0;g<h;g++)r.append(u[g],ks()),At.nextNode(),l.push({type:2,index:++o});r.append(u[h],ks())}}}else if(r.nodeType===8)if(r.data===uo)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(ht,u+1))!==-1;)l.push({type:7,index:o}),u+=ht.length-1}o++}}static createElement(e,s){const i=Ot.createElement("template");return i.innerHTML=e,i}}function Wt(t,e,s=t,i){var a,n;if(e===et)return e;let r=i!==void 0?(a=s._$Co)==null?void 0:a[i]:s._$Cl;const o=Ss(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),o===void 0?r=void 0:(r=new o(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=Wt(t,r._$AS(t,e.values),r,i)),e}class ua{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Ot).importNode(s,!0);At.currentNode=r;let o=At.nextNode(),a=0,n=0,l=i[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ts(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new va(o,this,e)),this._$AV.push(c),l=i[++n]}a!==(l==null?void 0:l.index)&&(o=At.nextNode(),a++)}return At.currentNode=Ot,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class ts{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Wt(this,e,s),Ss(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ha(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&Ss(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ot.createTextNode(e)),this._$AH=e}$(e){var o;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Cs.createElement(mo(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(s);else{const a=new ua(r,this),n=a.u(this.options);a.p(s),this.T(n),this._$AH=a}}_$AC(e){let s=Er.get(e.strings);return s===void 0&&Er.set(e.strings,s=new Cs(e)),s}k(e){Gi(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const o of e)r===s.length?s.push(i=new ts(this.O(ks()),this.O(ks()),this,this.options)):i=s[r],i._$AI(o),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=$r(e).nextSibling;$r(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class mi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,s=this,i,r){const o=this.strings;let a=!1;if(o===void 0)e=Wt(this,e,s,0),a=!Ss(e)||e!==this._$AH&&e!==et,a&&(this._$AH=e);else{const n=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Wt(this,n[i+l],s,l),c===et&&(c=this._$AH[l]),a||(a=!Ss(c)||c!==this._$AH[l]),c===m?e=m:e!==m&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}a&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fa extends mi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class ga extends mi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class ma extends mi{constructor(e,s,i,r,o){super(e,s,i,r,o),this.type=5}_$AI(e,s=this){if((e=Wt(this,e,s,0)??m)===et)return;const i=this._$AH,r=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==m&&(i===m||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class va{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Wt(this,e)}}const Sh={I:ts},Si=$s.litHtmlPolyfillSupport;Si==null||Si(Cs,ts),($s.litHtmlVersions??($s.litHtmlVersions=[])).push("3.3.3");const ba=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new ts(e.insertBefore(ks(),o),o,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=globalThis;let A=class extends qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ba(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return et}};var co;A._$litElement$=!0,A.finalized=!0,(co=Ft.litElementHydrateSupport)==null||co.call(Ft,{LitElement:A});const Ci=Ft.litElementPolyfillSupport;Ci==null||Ci({LitElement:A});(Ft.litElementVersions??(Ft.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xa={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:qi},_a=(t=xa,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),i==="accessor"){const{name:a}=s;return{set(n){const l=e.get.call(this);e.set.call(this,n),this.requestUpdate(a,l,t,!0,n)},init(n){return n!==void 0&&this.C(a,void 0,t,n),n}}}if(i==="setter"){const{name:a}=s;return function(n){const l=this[a];e.call(this,n),this.requestUpdate(a,l,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?_a(t,e,s):((i,r,o)=>{const a=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),a?Object.getOwnPropertyDescriptor(r,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(t,e){return(s,i,r)=>{const o=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(t))??null};return ya(s,i,{get(){return o(this)}})}}class $a{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function wa(){return new $a({t:(t,e,s)=>{const i=(r,o)=>r.replace(/\{\{(\w+)\}\}/g,(a,n)=>String(o[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const r=e,o=r.count;if(o!==void 0){const a=String((o===1?r.defaultValue_one:r.defaultValue_other)??r.defaultValue??t);return i(a,r)}return i(String(r.defaultValue??t),r)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",cdnPermalinkEnabled:!1,isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const Ai=(t,e)=>t.replace(/\{\{(\w+)\}\}/g,(s,i)=>String(e[i]??"")),Fr=(t,e,s)=>{if(typeof e=="string")return Ai(e,s??{});if(typeof e=="object"&&e!==null){const i=e,r=i.count;if(r!==void 0){const o=String((r===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??t);return Ai(o,i)}return Ai(String(i.defaultValue??t),i)}return t},I=t=>typeof t=="string",gs=()=>{let t,e;const s=new Promise((i,r)=>{t=i,e=r});return s.resolve=t,s.reject=e,s},Tr=t=>t==null?"":""+t,ka=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},Sa=/###/g,Lr=t=>t&&t.indexOf("###")>-1?t.replace(Sa,"."):t,Or=t=>!t||I(t),ws=(t,e,s)=>{const i=I(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(Or(t))return{};const o=Lr(i[r]);!t[o]&&s&&(t[o]=new s),Object.prototype.hasOwnProperty.call(t,o)?t=t[o]:t={},++r}return Or(t)?{}:{obj:t,k:Lr(i[r])}},Pr=(t,e,s)=>{const{obj:i,k:r}=ws(t,e,Object);if(i!==void 0||e.length===1){i[r]=s;return}let o=e[e.length-1],a=e.slice(0,e.length-1),n=ws(t,a,Object);for(;n.obj===void 0&&a.length;)o=`${a[a.length-1]}.${o}`,a=a.slice(0,a.length-1),n=ws(t,a,Object),n&&n.obj&&typeof n.obj[`${n.k}.${o}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${o}`]=s},Ca=(t,e,s,i)=>{const{obj:r,k:o}=ws(t,e,Object);r[o]=r[o]||[],r[o].push(s)},ri=(t,e)=>{const{obj:s,k:i}=ws(t,e);if(s)return s[i]},Aa=(t,e,s)=>{const i=ri(t,s);return i!==void 0?i:ri(e,s)},vo=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?I(t[i])||t[i]instanceof String||I(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):vo(t[i],e[i],s):t[i]=e[i]);return t},Bt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ea={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Fa=t=>I(t)?t.replace(/[&<>"'\/]/g,e=>Ea[e]):t;class Ta{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const La=[" ",",","?","!",";"],Oa=new Ta(20),Pa=(t,e,s)=>{e=e||"",s=s||"";const i=La.filter(a=>e.indexOf(a)<0&&s.indexOf(a)<0);if(i.length===0)return!0;const r=Oa.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!r.test(t);if(!o){const a=t.indexOf(s);a>0&&!r.test(t.substring(0,a))&&(o=!0)}return o},zi=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let r=t;for(let o=0;o<i.length;){if(!r||typeof r!="object")return;let a,n="";for(let l=o;l<i.length;++l)if(l!==o&&(n+=s),n+=i[l],a=r[n],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;o+=l-o+1;break}r=a}return r},oi=t=>t&&t.replace("_","-"),Ia={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class ai{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||Ia,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,r){return r&&!this.debug?null:(I(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new ai(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ai(this.logger,e)}}var Ve=new ai;class vi{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(s)||0;this.observers[i].set(s,r+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),r=1;r<s;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[n,l]=a;for(let c=0;c<l;c++)n(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[n,l]=a;for(let c=0;c<l;c++)n.apply(n,[e,...i])})}}class Ir extends vi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,a=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let n;e.indexOf(".")>-1?n=e.split("."):(n=[e,s],i&&(Array.isArray(i)?n.push(...i):I(i)&&o?n.push(...i.split(o)):n.push(i)));const l=ri(this.data,n);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=n[0],s=n[1],i=n.slice(2).join(".")),l||!a||!I(i)?l:zi(this.data&&this.data[e]&&this.data[e][s],i,o)}addResource(e,s,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let n=[e,s];i&&(n=n.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(n=e.split("."),r=s,s=n[1]),this.addNamespaces(s),Pr(this.data,n,r),o.silent||this.emit("added",e,s,i,r)}addResources(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in i)(I(i[o])||Array.isArray(i[o]))&&this.addResource(e,s,o,i[o],{silent:!0});r.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,r,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},n=[e,s];e.indexOf(".")>-1&&(n=e.split("."),r=i,i=s,s=n[1]),this.addNamespaces(s);let l=ri(this.data,n)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?vo(l,i,o):l={...l,...i},Pr(this.data,n,l),a.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(r=>s[r]&&Object.keys(s[r]).length>0)}toJSON(){return this.data}}var bo={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,r){return t.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,s,i,r))}),e}};const Dr={};class ni extends vi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),ka(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ve.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let o=s.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,n=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!Pa(e,i,r);if(a&&!n){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:I(o)?[o]:o};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(r)}return{key:e,namespaces:I(o)?[o]:o}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:a,namespaces:n}=this.extractFromKey(e[e.length-1],s),l=n[n.length-1],c=s.lng||this.language,p=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(p){const O=s.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${O}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${O}${a}`}return r?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:a}const u=this.resolve(e,s);let h=u&&u.res;const g=u&&u.usedKey||a,v=u&&u.exactUsedKey||a,y=Object.prototype.toString.apply(h),x=["[object Number]","[object Function]","[object RegExp]"],w=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,L=!I(h)&&typeof h!="boolean"&&typeof h!="number";if(k&&h&&L&&x.indexOf(y)<0&&!(I(w)&&Array.isArray(h))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const O=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,h,{...s,ns:n}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(u.res=O,u.usedParams=this.getUsedParamsDetails(s),u):O}if(o){const O=Array.isArray(h),E=O?[]:{},z=O?v:g;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const V=`${z}${o}${S}`;E[S]=this.translate(V,{...s,joinArrays:!1,ns:n}),E[S]===V&&(E[S]=h[S])}h=E}}else if(k&&I(w)&&Array.isArray(h))h=h.join(w),h&&(h=this.extendTranslation(h,e,s,i));else{let O=!1,E=!1;const z=s.count!==void 0&&!I(s.count),S=ni.hasDefaultValue(s),V=z?this.pluralResolver.getSuffix(c,s.count,s):"",N=s.ordinal&&z?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",F=z&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),Q=F&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${V}`]||s[`defaultValue${N}`]||s.defaultValue;!this.isValidLookup(h)&&S&&(O=!0,h=Q),this.isValidLookup(h)||(E=!0,h=a);const Y=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:h,me=S&&Q!==h&&this.options.updateMissing;if(E||O||me){if(this.logger.log(me?"updateKey":"missingKey",c,l,a,me?Q:h),o){const W=this.resolve(a,{...s,keySeparator:!1});W&&W.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ve=[];const Ke=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Ke&&Ke[0])for(let W=0;W<Ke.length;W++)ve.push(Ke[W]);else this.options.saveMissingTo==="all"?ve=this.languageUtils.toResolveHierarchy(s.lng||this.language):ve.push(s.lng||this.language);const lt=(W,$e,Me)=>{const ct=S&&Me!==h?Me:Y;this.options.missingKeyHandler?this.options.missingKeyHandler(W,l,$e,ct,me,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(W,l,$e,ct,me,s),this.emit("missingKey",W,l,$e,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?ve.forEach(W=>{const $e=this.pluralResolver.getSuffixes(W,s);F&&s[`defaultValue${this.options.pluralSeparator}zero`]&&$e.indexOf(`${this.options.pluralSeparator}zero`)<0&&$e.push(`${this.options.pluralSeparator}zero`),$e.forEach(Me=>{lt([W],a+Me,s[`defaultValue${Me}`]||Q)})}):lt(ve,a,Q))}h=this.extendTranslation(h,e,s,u,i),E&&h===a&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${a}`),(E||O)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,O?h:void 0):h=this.options.parseMissingKeyHandler(h))}return r?(u.res=h,u.usedParams=this.getUsedParamsDetails(s),u):h}extendTranslation(e,s,i,r,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=I(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(c){const h=e.match(this.interpolator.nestingRegexp);p=h&&h.length}let u=i.replace&&!I(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||r.usedLng,i),c){const h=e.match(this.interpolator.nestingRegexp),g=h&&h.length;p<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,g=new Array(h),v=0;v<h;v++)g[v]=arguments[v];return o&&o[0]===g[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):a.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,l=I(n)?[n]:n;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=bo.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,o,a,n;return I(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,s),p=c.key;r=p;let u=c.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const h=s.count!==void 0&&!I(s.count),g=h&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),v=s.context!==void 0&&(I(s.context)||typeof s.context=="number")&&s.context!=="",y=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);u.forEach(x=>{this.isValidLookup(i)||(n=x,!Dr[`${y[0]}-${x}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(Dr[`${y[0]}-${x}`]=!0,this.logger.warn(`key "${r}" for languages "${y.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(w=>{if(this.isValidLookup(i))return;a=w;const k=[p];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,p,w,x,s);else{let O;h&&(O=this.pluralResolver.getSuffix(w,s.count,s));const E=`${this.options.pluralSeparator}zero`,z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(k.push(p+O),s.ordinal&&O.indexOf(z)===0&&k.push(p+O.replace(z,this.options.pluralSeparator)),g&&k.push(p+E)),v){const S=`${p}${this.options.contextSeparator}${s.context}`;k.push(S),h&&(k.push(S+O),s.ordinal&&O.indexOf(z)===0&&k.push(S+O.replace(z,this.options.pluralSeparator)),g&&k.push(S+E))}}let L;for(;L=k.pop();)this.isValidLookup(i)||(o=L,i=this.getResource(w,x,L,s))}))})}),{res:i,usedKey:r,exactUsedKey:o,usedLng:a,usedNS:n}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,r):this.resourceStore.getResource(e,s,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!I(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const o of s)delete r[o]}return r}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const Ei=t=>t.charAt(0).toUpperCase()+t.slice(1);class Mr{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ve.create("languageUtils")}getScriptPartFromCode(e){if(e=oi(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=oi(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(I(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ei(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ei(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ei(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(s=r)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return s=r;s=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&(o.indexOf("-")>0&&r.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===r||o.indexOf(r)===0&&r.length>1))return o})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),I(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),r=[],o=a=>{a&&(this.isSupportedCode(a)?r.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return I(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):I(e)&&o(this.formatLanguageCode(e)),i.forEach(a=>{r.indexOf(a)<0&&o(this.formatLanguageCode(a))}),r}}let Da=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Ma={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Ra=["v1","v2","v3"],za=["v4"],Rr={zero:0,one:1,two:2,few:3,many:4,other:5},Na=()=>{const t={};return Da.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:Ma[e.fc]}})}),t};class ja{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=Ve.create("pluralResolver"),(!this.options.compatibilityJSON||za.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Na(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=oi(e==="dev"?"en":e),r=s.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let a;try{a=new Intl.PluralRules(i,{type:r})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,s)}return this.pluralRulesCache[o]=a,a}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${s}${r}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,o)=>Rr[r]-Rr[o]).map(r=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(s)}`:this.getSuffixRetroCompatible(r,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Ra.includes(this.options.compatibilityJSON)}}const zr=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Aa(t,e,s);return!o&&r&&I(s)&&(o=zi(t,s,i),o===void 0&&(o=zi(e,s,i))),o},Fi=t=>t.replace(/\$/g,"$$$$");class Ua{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ve.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:r,prefix:o,prefixEscaped:a,suffix:n,suffixEscaped:l,formatSeparator:c,unescapeSuffix:p,unescapePrefix:u,nestingPrefix:h,nestingPrefixEscaped:g,nestingSuffix:v,nestingSuffixEscaped:y,nestingOptionsSeparator:x,maxReplaces:w,alwaysFormat:k}=e.interpolation;this.escape=s!==void 0?s:Fa,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=o?Bt(o):a||"{{",this.suffix=n?Bt(n):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=p?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":p||"",this.nestingPrefix=h?Bt(h):g||Bt("$t("),this.nestingSuffix=v?Bt(v):y||Bt(")"),this.nestingOptionsSeparator=x||",",this.maxReplaces=w||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,r){let o,a,n;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(g.indexOf(this.formatSeparator)<0){const w=zr(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(w,void 0,i,{...r,...s,interpolationkey:g}):w}const v=g.split(this.formatSeparator),y=v.shift().trim(),x=v.join(this.formatSeparator).trim();return this.format(zr(s,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),x,i,{...r,...s,interpolationkey:y})};this.resetRegExp();const p=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Fi(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Fi(this.escape(g)):Fi(g)}].forEach(g=>{for(n=0;o=g.regex.exec(e);){const v=o[1].trim();if(a=c(v),a===void 0)if(typeof p=="function"){const x=p(e,o,r);a=I(x)?x:""}else if(r&&Object.prototype.hasOwnProperty.call(r,v))a="";else if(u){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),a="";else!I(a)&&!this.useRawValueToEscape&&(a=Tr(a));const y=g.safeValue(a);if(e=e.replace(o[0],y),u?(g.regex.lastIndex+=a.length,g.regex.lastIndex-=o[0].length):g.regex.lastIndex=0,n++,n>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,o,a;const n=(l,c)=>{const p=this.nestingOptionsSeparator;if(l.indexOf(p)<0)return l;const u=l.split(new RegExp(`${p}[ ]*{`));let h=`{${u[1]}`;l=u[0],h=this.interpolate(h,a);const g=h.match(/'/g),v=h.match(/"/g);(g&&g.length%2===0&&!v||v.length%2!==0)&&(h=h.replace(/'/g,'"'));try{a=JSON.parse(h),c&&(a={...c,...a})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${p}${h}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!I(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const p=r[1].split(this.formatSeparator).map(u=>u.trim());r[1]=p.shift(),l=p,c=!0}if(o=s(n.call(this,r[1].trim(),a),a),o&&r[0]===e&&!I(o))return o;I(o)||(o=Tr(o)),o||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),o=""),c&&(o=l.reduce((p,u)=>this.format(p,u,i.lng,{...i,interpolationkey:r[1].trim()}),o.trim())),e=e.replace(r[0],o),this.regexp.lastIndex=0}return e}}const Ka=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?s.currency||(s.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?s.range||(s.range=r.trim()):r.split(";").forEach(a=>{if(a){const[n,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),p=n.trim();s[p]||(s[p]=c),c==="false"&&(s[p]=!1),c==="true"&&(s[p]=!0),isNaN(c)||(s[p]=parseInt(c,10))}})}return{formatName:e,formatOptions:s}},Vt=t=>{const e={};return(s,i,r)=>{let o=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(o={...o,[r.interpolationkey]:void 0});const a=i+JSON.stringify(o);let n=e[a];return n||(n=t(oi(i),r),e[a]=n),n(s)}};class Ba{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ve.create("formatter"),this.options=e,this.formats={number:Vt((s,i)=>{const r=new Intl.NumberFormat(s,{...i});return o=>r.format(o)}),currency:Vt((s,i)=>{const r=new Intl.NumberFormat(s,{...i,style:"currency"});return o=>r.format(o)}),datetime:Vt((s,i)=>{const r=new Intl.DateTimeFormat(s,{...i});return o=>r.format(o)}),relativetime:Vt((s,i)=>{const r=new Intl.RelativeTimeFormat(s,{...i});return o=>r.format(o,i.range||"day")}),list:Vt((s,i)=>{const r=new Intl.ListFormat(s,{...i});return o=>r.format(o)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=Vt(s)}format(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=s.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(n=>n.indexOf(")")>-1)){const n=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,n)].join(this.formatSeparator)}return o.reduce((n,l)=>{const{formatName:c,formatOptions:p}=Ka(l);if(this.formats[c]){let u=n;try{const h=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},g=h.locale||h.lng||r.locale||r.lng||i;u=this.formats[c](n,g,{...p,...r,...h})}catch(h){this.logger.warn(h)}return u}else this.logger.warn(`there was no format function for ${c}`);return n},e)}}const Va=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Ha extends vi{constructor(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Ve.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,s,i,r){const o={},a={},n={},l={};return e.forEach(c=>{let p=!0;s.forEach(u=>{const h=`${c}|${u}`;!i.reload&&this.store.hasResourceBundle(c,u)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?a[h]===void 0&&(a[h]=!0):(this.state[h]=1,p=!1,a[h]===void 0&&(a[h]=!0),o[h]===void 0&&(o[h]=!0),l[u]===void 0&&(l[u]=!0)))}),p||(n[c]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const r=e.split("|"),o=r[0],a=r[1];s&&this.emit("failedLoading",o,a,s),!s&&i&&this.store.addResourceBundle(o,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const n={};this.queue.forEach(l=>{Ca(l.loaded,[o],a),Va(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{n[c]||(n[c]={});const p=l.loaded[c];p.length&&p.forEach(u=>{n[c][u]===void 0&&(n[c][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",n),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:r,wait:o,callback:a});return}this.readingCalls++;const n=(c,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(c&&p&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,r+1,o*2,a)},o);return}a(c,p)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,s);c&&typeof c.then=="function"?c.then(p=>n(null,p)).catch(n):n(null,c)}catch(c){n(c)}return}return l(e,s,n)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();I(e)&&(e=this.languageUtils.toResolveHierarchy(e)),I(s)&&(s=[s]);const o=this.queueLoad(e,s,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(a,n)=>{a&&this.logger.warn(`${s}loading namespace ${o} for language ${r} failed`,a),!a&&n&&this.logger.log(`${s}loaded namespace ${o} for language ${r}`,n),this.loaded(e,a,n)})}saveMissing(e,s,i,r,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let p;c.length===5?p=c(e,s,i,r,l):p=c(e,s,i,r),p&&typeof p.then=="function"?p.then(u=>n(null,u)).catch(n):n(null,p)}catch(p){n(p)}else c(e,s,i,r,n,l)}!e||!e[0]||this.store.addResource(e[0],s,i,r)}}}const Nr=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),I(t[1])&&(e.defaultValue=t[1]),I(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),jr=t=>(I(t.ns)&&(t.ns=[t.ns]),I(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),I(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Gs=()=>{},qa=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class As extends vi{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=jr(e),this.services={},this.logger=Ve,this.modules={external:[]},qa(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(I(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const r=Nr();this.options={...r,...this.options,...jr(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const o=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?Ve.init(o(this.modules.logger),this.options):Ve.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:typeof Intl<"u"&&(p=Ba);const u=new Mr(this.options);this.store=new Ir(this.options.resources,this.options);const h=this.services;h.logger=Ve,h.resourceStore=this.store,h.languageUtils=u,h.pluralResolver=new ja(u,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=o(p),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Ua(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new Ha(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(g){for(var v=arguments.length,y=new Array(v>1?v-1:0),x=1;x<v;x++)y[x-1]=arguments[x];e.emit(g,...y)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new ni(this.services,this.options),this.translator.on("*",function(g){for(var v=arguments.length,y=new Array(v>1?v-1:0),x=1;x<v;x++)y[x-1]=arguments[x];e.emit(g,...y)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Gs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=function(){return e.store[p](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=function(){return e.store[p](...arguments),e}});const l=gs(),c=()=>{const p=(u,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(u,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Gs;const r=I(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],a=n=>{if(!n||n==="cimode")return;this.services.languageUtils.toResolveHierarchy(n).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};r?a(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(n=>a(n)),this.services.backendConnector.load(o,this.options.ns,n=>{!n&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(n)})}else i(null)}reloadResources(e,s,i){const r=gs();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=Gs),this.services.backendConnector.reload(e,s,o=>{r.resolve(),i(o)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&bo.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const r=gs();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},n=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=I(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,p=>{a(p,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),r}getFixedT(e,s,i){var r=this;const o=function(a,n){let l;if(typeof n!="object"){for(var c=arguments.length,p=new Array(c>2?c-2:0),u=2;u<c;u++)p[u-2]=arguments[u];l=r.options.overloadTranslationOptionHandler([a,n].concat(p))}else l={...n};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||o.keyPrefix);const h=r.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(a)?g=a.map(v=>`${l.keyPrefix}${h}${v}`):g=l.keyPrefix?`${l.keyPrefix}${h}${a}`:a,r.t(g,l)};return I(e)?o.lng=e:o.lngs=e,o.ns=s,o.keyPrefix=i,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(n,l)=>{const c=this.services.backendConnector.state[`${n}|${l}`];return c===-1||c===0||c===2};if(s.precheck){const n=s.precheck(this,a);if(n!==void 0)return n}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!r||a(o,e)))}loadNamespaces(e,s){const i=gs();return this.options.ns?(I(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),s&&s(r)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=gs();I(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter(a=>r.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return o.length?(this.options.preload=r.concat(o),this.loadResources(a=>{i.resolve(),s&&s(a)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Mr(Nr());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new As(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Gs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new As(r);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(n=>{o[n]=this[n]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i&&(o.store=new Ir(this.store.data,r),o.services.resourceStore=o.store),o.translator=new ni(o.services,r),o.translator.on("*",function(n){for(var l=arguments.length,c=new Array(l>1?l-1:0),p=1;p<l;p++)c[p-1]=arguments[p];o.emit(n,...c)}),o.init(r,s),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ae=As.createInstance();ae.createInstance=As.createInstance;ae.createInstance;ae.dir;ae.init;ae.loadResources;ae.reloadResources;ae.use;ae.changeLanguage;ae.getFixedT;ae.t;ae.exists;ae.setDefaultNamespace;ae.hasLoadedNamespace;ae.loadNamespaces;ae.loadLanguages;const xo=["__proto__","constructor","prototype"];function _o(t){return!(typeof t!="string"||t.length===0||t.length>128||xo.indexOf(t)>-1||t.indexOf("..")>-1||t.indexOf("\\")>-1||/[?#%\s@]/.test(t)||/[\x00-\x1F\x7F]/.test(t))}function yo(t){return!(!_o(t)||t.indexOf("/")>-1)}function Ga(t){return _o(t)}const Ya={lng:yo,ns:Ga};function Ys(t){return typeof t!="string"?t:t.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function Qa(t){if(typeof t!="string"||t.length===0)return t;try{const e=new URL(t);return e.username||e.password?(e.username="",e.password="",e.toString()):t}catch{return t.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function $o(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function Wa(t){return!!t&&typeof t.then=="function"}function Xa(t){return Wa(t)?t:Promise.resolve(t)}const Ja=/\{\{(.+?)\}\}/g;function Ur(t,e){let s=!1;const i=t.replace(Ja,(r,o)=>{const a=o.trim();if(xo.indexOf(a)>-1)return r;const n=e[a];if(n==null)return r;const l=Ya[a]||yo,c=String(n).split("+");for(const p of c)if(!l(p))return s=!0,r;return c.join("+")});return s?null:i}const Tt=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let li;typeof fetch=="function"?li=fetch:Tt&&typeof Tt.fetch=="function"&&(li=Tt.fetch);const Kr=$o()&&Tt?Tt.XMLHttpRequest:void 0,Za=typeof ActiveXObject=="function"&&Tt?Tt.ActiveXObject:void 0,wo=["__proto__","constructor","prototype"],Ni=(t,e)=>{if(e&&typeof e=="object"){let s="";for(const i of Object.keys(e))wo.indexOf(i)>-1||(s+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!s)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+s.slice(1)}return t},Br=(t,e,s,i)=>{const r=o=>{if(!o.ok)return s(o.statusText||"Error",{status:o.status});o.text().then(a=>{s(null,{status:o.status,data:a})}).catch(s)};if(i){const o=i(t,e);if(o instanceof Promise){o.then(r).catch(s);return}}typeof fetch=="function"?fetch(t,e).then(r).catch(s):li(t,e).then(r).catch(s)},en=(t,e,s,i)=>{t.queryStringParams&&(e=Ni(e,t.queryStringParams));const r={...typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),s&&(r["Content-Type"]="application/json");const o=typeof t.requestOptions=="function"?t.requestOptions(s):t.requestOptions,a={method:s?"POST":"GET",body:s?t.stringify(s):void 0,headers:r,...t._omitFetchOptions?{}:o},n=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Br(e,a,i,n)}catch(l){if(!o||Object.keys(o).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(o).forEach(c=>{delete a[c]}),Br(e,a,i,n),t._omitFetchOptions=!0}catch(c){i(c)}}},tn=(t,e,s,i)=>{s&&typeof s=="object"&&(s=Ni("",s).slice(1)),t.queryStringParams&&(e=Ni(e,t.queryStringParams));try{const r=Kr?new Kr:new Za("MSXML2.XMLHTTP.3.0");r.open(s?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,s&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let o=t.customHeaders;if(o=typeof o=="function"?o():o,o)for(const a of Object.keys(o))wo.indexOf(a)>-1||r.setRequestHeader(a,o[a]);r.onreadystatechange=()=>{r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(s)}catch(r){console&&console.log(r)}},sn=(t,e,s,i)=>{if(typeof s=="function"&&(i=s,s=void 0),i=i||(()=>{}),li&&e.indexOf("file:")!==0)return en(t,e,s,i);if($o()||typeof ActiveXObject=="function")return tn(t,e,s,i);i(new Error("No fetch and no xhr implementation found!"))},rn=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:t=>JSON.parse(t),stringify:JSON.stringify,parsePayload:(t,e,s)=>({[e]:s||""}),parseLoadPayload:(t,e)=>{},request:sn,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var ko=class{constructor(t,e={},s={}){this.services=t,this.options=e,this.allOptions=s,this.type="backend",this.init(t,e,s)}init(t,e={},s={}){if(this.services=t,this.options={...rn(),...this.options||{},...e},this.allOptions=s,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(t,e,s){this._readAny(t,t,e,e,s)}read(t,e,s){this._readAny([t],t,[e],e,s)}_readAny(t,e,s,i,r){let o=this.options.loadPath;typeof this.options.loadPath=="function"&&(o=this.options.loadPath(t,s)),o=Xa(o),o.then(a=>{if(!a)return r(null,{});const n=Ur(a,{lng:t.join("+"),ns:s.join("+")});if(n==null){const l=t.map(Ys).join(", "),c=s.map(Ys).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(n,r,e,i)})}loadUrl(t,e,s,i){const r=typeof s=="string"?[s]:s,o=typeof i=="string"?[i]:i,a=this.options.parseLoadPayload(r,o),n=Ys(Qa(t));this.options.request(this.options,t,a,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+n+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+n+"; status code: "+c.status,!1);if(!c&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(g=>h.indexOf(g)>-1))return e("failed loading "+n+": "+Ys(l.message),!0)}if(l)return e(l,!1);let p,u;try{typeof c.data=="string"?p=this.options.parse(c.data,s,i):p=c.data}catch{u="failed parsing "+n+" to json"}if(u)return e(u,!1);e(null,p)})}create(t,e,s,i,r){if(!this.options.addPath)return;typeof t=="string"&&(t=[t]);const o=this.options.parsePayload(e,s,i);let a=0;const n=[],l=[];t.forEach(c=>{let p=this.options.addPath;typeof this.options.addPath=="function"&&(p=this.options.addPath(c,e));const u=Ur(p,{lng:c,ns:e});if(u==null){a+=1,r&&a===t.length&&r(n,l);return}this.options.request(this.options,u,o,(h,g)=>{a+=1,n.push(h),l.push(g),a===t.length&&typeof r=="function"&&r(n,l)})})}reload(){const{backendConnector:t,languageUtils:e,logger:s}=this.services,i=t.language;if(i&&i.toLowerCase()==="cimode")return;const r=[],o=a=>{e.toResolveHierarchy(a).forEach(n=>{r.indexOf(n)<0&&r.push(n)})};o(i),this.allOptions.preload&&this.allOptions.preload.forEach(a=>o(a)),r.forEach(a=>{this.allOptions.ns.forEach(n=>{t.read(a,n,"read",null,null,(l,c)=>{l&&s.warn(`loading namespace ${n} for language ${a} failed`,l),!l&&c&&s.log(`loaded namespace ${n} for language ${a}`,c),t.loaded(`${a}|${n}`,l,c)})})})}};ko.type="backend";const on="https://i18n-fastly.ultrafast.io";function an(t){const e=t.cdnUrl??on;let s=null;const i=new Set,r=()=>{for(const p of i)p()},o=p=>(i.add(p),()=>i.delete(p));async function a(p="en"){return s?(s.language!==p&&(await s.changeLanguage(p),r()),{i18n:s,isNew:!1}):(s=ae.createInstance(),await s.use(ko).init({lng:p,fallbackLng:"en",ns:[t.namespace],defaultNS:t.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${t.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(u,h){var y;const g=JSON.parse(u),v=Array.isArray(h)?h[0]:h;return v&&((y=g[v])!=null&&y.__without_namespace)?g[v].__without_namespace:g}}}),s.on("languageChanged",r),s.on("loaded",r),r(),{i18n:s,isNew:!0})}const n=()=>s,l=(p,u,h)=>!s||!s.isInitialized?Fr(p,u,h):typeof u=="string"?s.t(p,u,h??{}):s.t(p,u??{});class c{constructor(u){this._unsubscribe=null,this._host=u,u.addController(this)}hostConnected(){this._unsubscribe=o(()=>this._host.requestUpdate())}hostDisconnected(){var u;(u=this._unsubscribe)==null||u.call(this),this._unsubscribe=null}}return{initI18n:a,getInstance:n,onChange:o,t:l,fallbackT:Fr,I18nController:c}}function nn(t){const{lsKey:e,namespace:s,gridUuid:i,prodUrl:r,logPrefix:o}=t,a=typeof localStorage<"u"&&localStorage.getItem(e)==="true",n={};let l=null;const c=2e3;a&&console.log(`%c${o} TranslationMissingKeysHelper enabled`,"font-weight:600;");const p=()=>{console.group(`${o} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...n}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${r}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(n).map(([u,{value:h,ns:g}])=>({key:g&&u.startsWith(`${g}:`)?u.slice(g.length+1):u,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(u,h="",g=s){a&&(n[`${g}:${u}`]={value:h,ns:g},l&&clearTimeout(l),l=setTimeout(p,c))}}}const So="a656ff82-0270-46dc-8de8-c734318d841d",ln="https://i18n-fastly.ultrafast.io",cn="https://neo.wordplex.io",Co="asset-picker",dn=an({gridUuid:So,namespace:Co,cdnUrl:ln}),hn=dn.initI18n,pn=nn({lsKey:"apTranslationsMissingKeysEnabled",namespace:Co,gridUuid:So,prodUrl:cn,logPrefix:"[asset-picker]"});class un{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function fn(t){return"extension"in t&&!("path"in t)}class gn{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,r){const o=this.store.getState(),a=this._getCombinedList();for(let n=e;n<=s;n++){const l=a[n];l&&(fn(l)?o.disabledAssetIds.has(l.uuid)||i.set(l.uuid,l):o.disabledFolderIds.has(l.uuid)||r.set(l.uuid,l))}}handleSelect(e,s,i){var n,l,c,p;const r=this.store.getState();if(r.disabledAssetIds.has(e.uuid))return;const o=new Map(r.selectedAssets);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const u=Math.min(this.lastClickedIndex,s),h=Math.max(this.lastClickedIndex,s),g=new Map(r.selectedFolders);this._applyRangeSelection(u,h,o,g);const v=(l=r.config)==null?void 0:l.maxSelections;if(v&&o.size+g.size>v)return;this.store.setState({selectedAssets:o,selectedFolders:g})}else{const u=Math.min(this.lastClickedIndex,s),h=Math.max(this.lastClickedIndex,s),g=r.assets;for(let y=u;y<=h;y++)g[y]&&!r.disabledAssetIds.has(g[y].uuid)&&o.set(g[y].uuid,g[y]);const v=(c=r.config)==null?void 0:c.maxSelections;if(v&&o.size>v)return;this.store.setState({selectedAssets:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const u=(p=r.config)==null?void 0:p.maxSelections,h=o.size+(this._folderSelectionEnabled?r.selectedFolders.size:0);if(u&&h>u)return;this.store.setState({selectedAssets:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var n,l,c;if(!this._folderSelectionEnabled)return;const r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;const o=new Map(r.selectedFolders);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const p=Math.min(this.lastClickedIndex,s),u=Math.max(this.lastClickedIndex,s),h=new Map(r.selectedAssets);this._applyRangeSelection(p,u,h,o);const g=(l=r.config)==null?void 0:l.maxSelections;if(g&&h.size+o.size>g)return;this.store.setState({selectedAssets:h,selectedFolders:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const p=(c=r.config)==null?void 0:c.maxSelections,u=o.size+r.selectedAssets.size;if(p&&u>p)return;this.store.setState({selectedFolders:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,r=this._folderSelectionEnabled?s.selectedFolders.size:0,o=e.filter(c=>!s.disabledAssetIds.has(c.uuid)),a=new Map,n=i?Math.max(0,Math.min(o.length,i-r)):o.length;for(let c=0;c<n;c++)a.set(o[c].uuid,o[c]);return this.store.setState({selectedAssets:a}),this.lastClickedIndex=-1,a.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,r=e.filter(l=>!s.disabledFolderIds.has(l.uuid)),o=new Map,a=i?Math.max(0,Math.min(r.length,i-s.selectedAssets.size)):r.length;for(let l=0;l<a;l++)o.set(r[l].uuid,r[l]);this.store.setState({selectedFolders:o})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}const Vr=5,Ht=40,Hr=15;class Yi{constructor(e,s){this.host=e,this.options=s,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarquee=new Set,this.dragging=!1,this.scrollRAF=null,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null,this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.container!==e&&(this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown))}detach(){var e,s;(e=this.container)==null||e.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),(s=this.container)==null||s.classList.remove("marqueeing"),this.container=void 0,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null}isInteractiveTarget(e){return this.options.isInteractiveTarget?this.options.isInteractiveTarget(e):e.composedPath().some(s=>s instanceof HTMLElement?s instanceof HTMLButtonElement||s instanceof HTMLInputElement||s instanceof HTMLAnchorElement?!0:s.hasAttribute("data-uuid")||s.tagName==="TR"||s.tagName==="TABLE":!1)}onMouseDown(e){if(e.button!==0||!this.container||this.isInteractiveTarget(e))return;const s=this.container.getBoundingClientRect();this.startX=e.clientX-s.left+this.container.scrollLeft,this.startY=e.clientY-s.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this.preMarquee=new Set(this.options.getSelection(e)),this.dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this.dragging){const i=Math.abs(e.clientX-this.startClientX),r=Math.abs(e.clientY-this.startClientY);if(i<Vr&&r<Vr)return;this.dragging=!0,this.isActive=!0,this.container.classList.add("marqueeing"),document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.cacheCards()}this.lastMouseEvent=e,this.updateRect(e),this.maybeAutoScroll(e)}}updateRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,r=e.clientY-s.top+this.container.scrollTop;let o=Math.min(this.startX,i),a=Math.min(this.startY,r),n=Math.abs(i-this.startX),l=Math.abs(r-this.startY);o<0&&(n+=o,o=0),a<0&&(l+=a,a=0),o+n>this.container.scrollWidth&&(n=this.container.scrollWidth-o),a+l>this.container.scrollHeight&&(l=this.container.scrollHeight-a),this.rect={x:o,y:a,width:n,height:l},this.applyBoxStyle(),this.selectIntersecting()}maybeAutoScroll(e){if(!this.container||this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top<Ht||s.bottom-e.clientY<Ht;i&&this.scrollRAF==null?this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):i||this.stopAutoScroll()}autoScrollTick(){if(this.scrollRAF=null,!this.container||!this.dragging||!this.lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this.lastMouseEvent,i=s.clientY-e.top,r=e.bottom-s.clientY;let o=0;i<Ht?o=-Hr*(1-i/Ht):r<Ht&&(o=Hr*(1-r/Ht)),o!==0&&(this.container.scrollTop+=o,this.updateRect(s),this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this.scrollRAF!=null&&(cancelAnimationFrame(this.scrollRAF),this.scrollRAF=null)}onMouseUp(){var e;document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this.lastMouseEvent=null,this.dragging&&(this.dragging=!1,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.cardRects=[],this.appliedSelection=null,(e=this.container)==null||e.classList.remove("marqueeing"),this.host.requestUpdate())}cacheCards(){if(!this.container)return;const e=this.container.getBoundingClientRect(),s=this.container.scrollLeft,i=this.container.scrollTop;this.cardRects=[];for(const{uuid:r,el:o}of this.options.queryCards(this.container)){if(!r)continue;const a=o.getBoundingClientRect();this.cardRects.push({uuid:r,x:a.left-e.left+s,y:a.top-e.top+i,w:a.width,h:a.height})}}applyBoxStyle(){var s;const e=(s=this.container)==null?void 0:s.querySelector(".marquee-box");if(!e){this.host.requestUpdate();return}e.style.left=`${this.rect.x}px`,e.style.top=`${this.rect.y}px`,e.style.width=`${this.rect.width}px`,e.style.height=`${this.rect.height}px`}static sameSet(e,s){if(!s||e.size!==s.size)return!1;for(const i of e)if(!s.has(i))return!1;return!0}selectIntersecting(){const e=new Set(this.preMarquee),{x:s,y:i,width:r,height:o}=this.rect;for(const a of this.cardRects)s<a.x+a.w&&s+r>a.x&&i<a.y+a.h&&i+o>a.y&&e.add(a.uuid);Yi.sameSet(e,this.appliedSelection)||(this.appliedSelection=e,this.options.setSelection(e))}}class mn{constructor(e,s){this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s,i="200px"){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(r=>{var o;(o=r[0])!=null&&o.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:i}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const vn="https://api.filerobot.com",bn=3e4,xn=2,_n=400;function yn(t){return t===404||t===408||t===429||t>=500}const $n=t=>new Promise(e=>setTimeout(e,t));function Ao(t,e){return`${(e||vn).replace(/\/+$/,"")}/${t}`}async function wn(t,e,s,i={}){const r=`${Ao(t,s)}/key/${encodeURIComponent(e)}`,o=i.retries??xn,a=i.retryDelayMs??_n;let n=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await $n(a*l);const c=new AbortController,p=setTimeout(()=>c.abort(),bn);try{const u=await fetch(r,{signal:c.signal,cache:"no-store"});if(clearTimeout(p),!u.ok){if(n=new Error(`SASS key exchange failed (HTTP ${u.status})`),yn(u.status)&&l<o)continue;throw n}const h=await u.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(u){if(clearTimeout(p),u instanceof DOMException&&u.name==="AbortError")throw new Error("SASS key exchange timed out");if(u instanceof TypeError&&l<o){n=u;continue}throw u}}throw n}function qr(t,e){const s={};switch(t.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");s["X-Filerobot-Key"]=e;break;case"sass-key":s["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(s["X-Filerobot-Airbox-Puid"]=t.airboxPuid),s}function kn(t){return t.mode==="securityTemplate"||t.mode==="sassKey"}function Sn(t){return kn(t)?t.mode==="securityTemplate"?{mode:"security-template",container:t.projectToken,securityTemplateId:t.securityTemplateKey,airboxPuid:t.airboxPuid}:{mode:"sass-key",container:t.projectToken,sassKey:t.sassKey,airboxPuid:t.airboxPuid}:t}async function Gr(t,e){const s=Sn(t),i=Ao(s.container,e);if(s.mode==="security-template"){const r=await wn(s.container,s.securityTemplateId,e);return{apiBase:i,headers:qr(s,r),sassKey:r}}return{apiBase:i,headers:qr(s)}}const Cn=3e4;class Qi{constructor(e,s,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=s,this.apiDomain=i}static async create(e,s){const i=await Gr(e,s);return new Qi(i,e,s)}get(e,s){const i=new URL(`${this.baseUrl}${e}`);if(s)for(const[r,o]of Object.entries(s))o!=null&&i.searchParams.set(r,Array.isArray(o)?o.join(","):String(o));return this.send(i,{method:"GET"})}post(e,s){return this.sendJson("POST",e,s)}put(e,s){return this.sendJson("PUT",e,s)}delete(e,s){return this.sendJson("DELETE",e,s)}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,s,i){return this.send(new URL(`${this.baseUrl}${s}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,s,i=!1){var a;const r=new AbortController,o=setTimeout(()=>r.abort(),Cn);try{const n=await fetch(e.toString(),{...s,headers:{...this.headers,...s.headers},signal:r.signal});if(clearTimeout(o),n.status===401&&!i&&((a=this.auth)==null?void 0:a.mode)==="security-template"){const p=await Gr(this.auth,this.apiDomain);return this.headers=p.headers,this.send(e,s,!0)}if(!n.ok){let p=`API error: ${n.status} ${n.statusText}`;try{const u=await n.json();u!=null&&u.msg&&(p=`API error: ${n.status} - ${u.msg}`)}catch{}throw new Error(p)}if(n.status===204)return;const l=await n.text();if(!l)return;const c=JSON.parse(l);if((c==null?void 0:c.status)==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}}async function An(t,e,s){const i=s.replace(/\/+$/,""),r=i?`${i}/${e}`:`/${e}`,o=await t.post("/folders",{name:r});if(o.status!=="success")throw new Error(o.msg||"Failed to create folder")}async function En(t){return(await t.get("/labels")).labels??[]}const Fn=["cdn_permalink"],Eo={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};function Tn(t){let e=t.fields??Fn;t.permalinksEnabled||(e=e.filter(a=>a!=="cdn_permalink"));const s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",r=t.sort_direction??"desc";s.sort=`${Eo[i]||i}:${r}`,t.folder&&(s.folder=t.folder);const o=[];return t.search&&!t.with_ai&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(s.q=o.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}function St(t,e){return t.get("/files",Tn(e))}function Qs(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.get("/files/stats",s)}function Ln(t,e={}){const s={recursive:e.recursive??0,folder:e.folderPath??"/",limit:e.limit??1e3,offset:e.offset??0};e.q&&(s.q=e.q);const i=e.sort_by??"created_at",r=e.sort_direction??"asc";return s.sort=`${Eo[i]||i}:${r}`,t.get("/folders",s)}async function On(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}const b="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Pn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',Je=`data:image/svg+xml,${encodeURIComponent(Pn)}`,ji={_default:b+"GENERIC.svg?vh=9a518a",png:b+"PNG.svg?vh=96cd9a",jpg:b+"JPG.svg?vh=06e819",jpg2:b+"JPG2.svg?vh=f0eb7f",jpeg:b+"JPEG.svg?vh=6a65e9",gif:b+"GIF.svg?vh=c3c2c3",bmp:b+"BMP.svg?vh=d2243a",webp:b+"WEBP.svg?vh=fedd74",svg:b+"SVG.svg?vh=a15e46",tiff:b+"TIFF.svg?vh=1f30c3",tif:b+"TIF.svg?vh=b383c9",heic:b+"HEIC.svg?vh=84adfe",avif:b+"AVIF.svg?vh=536b30",ico:b+"ICO.svg?vh=79063d",psd:b+"PSD.svg?vh=be6140",psb:b+"PSB.svg?vh=678646",ai:b+"AI.svg?vh=84b254",dwg:b+"DWG.svg?vh=971fb3",mp4:b+"MP4.svg?vh=42f175",webm:b+"WEBM.svg?vh=26a84a",avi:b+"AVI.svg?vh=d22ba8",mpeg:b+"MPEG.svg?vh=ba93bb",ogv:b+"OGV.svg?vh=74d453","3gp":b+"3GP.svg?vh=f0d388","3g2":b+"3G2.svg?vh=04c652",swf:b+"SWF.svg?vh=3955e2",fla:b+"FLA.svg?vh=daf585",m3u8:b+"M3U8.svg?vh=7d5e62",mp3:b+"MP3.svg?vh=66bbef",wav:b+"WAV.svg?vh=d7a7d5",aac:b+"AAC.svg?vh=07f3f9",oga:b+"OGA.svg?vh=a5c622",opus:b+"OPUS.svg?vh=9548b1",weba:b+"WEBA.svg?vh=4dcf70",mid:b+"MID.svg?vh=3f0e29",midi:b+"MIDI.svg?vh=9fedec",cda:b+"CDA.svg?vh=85b83b",pdf:b+"PDF.svg?vh=18c5f7",doc:b+"DOC.svg?vh=d1b47c",docx:b+"DOCX.svg?vh=1eb6b0",txt:b+"TXT.svg?vh=307979",rtf:b+"RTF.svg?vh=978c5f",xls:b+"XLS.svg?vh=13b5f7",xlsx:b+"XLSX.svg?vh=79d64a",ppt:b+"PPT.svg?vh=4ee29b",pptx:b+"PPTX.svg?vh=8b1568",csv:b+"CSV.svg?vh=4add78",odt:b+"ODT.svg?vh=940781",ods:b+"ODS.svg?vh=9fbe9a",odp:b+"ODP.svg?vh=bf892d",dbf:b+"DBF.svg?vh=457bd4",vsd:b+"VSD.svg?vh=8a9ccb",abw:b+"ABW.svg?vh=313dc7",epub:b+"EPUB.svg?vh=15263d",azw:b+"AZW.svg?vh=a018b1",ics:b+"ICS.svg?vh=909f63",ogx:b+"OGX.svg?vh=f694d2",zip:b+"ZIP.svg?vh=84f98b",rar:b+"RAR.svg?vh=1d6423","7z":b+"7Z.svg?vh=e007e5",tar:b+"TAR.svg?vh=603aed",gz:b+"GZ.svg?vh=de13f7",bz:b+"BZ.svg?vh=0374ff",bz2:b+"BZ2.svg?vh=e14294",arc:b+"ARC.svg?vh=942fad",jar:b+"JAR.svg?vh=149796",mpkg:b+"MPKG.svg?vh=dea655",ttf:b+"TTF.svg?vh=d2e2c1",otf:b+"OTF.svg?vh=c904fd",woff:b+"WOFF.svg?vh=4b8177",woff2:b+"WOFF2.svg?vh=b532d3",eot:b+"EOT.svg?vh=a54980",js:b+"JS.svg?vh=524691",mjs:b+"MJS.svg?vh=d57921",ts:b+"TS.svg?vh=9af3ae",css:b+"CSS.svg?vh=287863",html:b+"HTML.svg?vh=fa7a87",htm:b+"HTM.svg?vh=21323d",xhtml:b+"XHTML.svg?vh=e6d6a9",xul:b+"XUL.svg?vh=6c9c71",json:b+"JSON.svg?vh=104c9e",jsonld:b+"JSONLD.svg?vh=f30c0f",xml:b+"XML.svg?vh=7f7194",php:b+"PHP.svg?vh=503e36",sh:b+"SH.svg?vh=3b820e",csh:b+"CSH.svg?vh=08c0cc",exe:b+"EXE.svg?vh=ccca53",iso:b+"ISO.svg?vh=064b8f",bin:b+"BIN.svg?vh=1e9618",glb:Je,gltf:Je,obj:Je,fbx:Je,stl:Je,usdz:Je,ply:Je,"3ds":Je,dae:Je};function Xt(){return ji._default}function Us(t){const e=(t.split(".").pop()||"").toLowerCase();return ji[e]||ji._default}function In(t,e){let s;const i=((...r)=>{clearTimeout(s),s=setTimeout(()=>t(...r),e)});return i.cancel=()=>clearTimeout(s),i}async function Dn(t){return t.get("/collections")}async function Mn(t,e){return t.get(`/collections/${e}/folders`)}function Fo(t){return t.filter(e=>!!e.name).map(e=>({...e,children:Fo(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function Rn(t){return((await t.get("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,r)=>i.label.localeCompare(r.label))}const zn=3e4;async function Nn(t,e){const s=`${e}/key/${t.securityTemplateKey}`,i=new AbortController,r=setTimeout(()=>i.abort(),zn);try{const o=await fetch(s,{headers:{"X-Filerobot-Key":t.securityTemplateKey},signal:i.signal});if(clearTimeout(r),!o.ok){let n=`API error: ${o.status} ${o.statusText}`;try{const l=await o.json();l.msg&&(n=`API error: ${o.status} - ${l.msg}`)}catch{}throw new Error(n)}const a=await o.json();if(a.status==="error")throw new Error(`API error: ${a.msg||"Unknown error"}`);return{key:a.key,permissions:a.permissions??[]}}catch(o){throw clearTimeout(r),o instanceof DOMException&&o.name==="AbortError"?new Error("API request timed out"):o}}function jn(t,e){return t?t.includes(e):!1}const Un={FOLDER_CREATE:"DIR_CREATE"};function Kn(t){var r,o;const e=(r=t.info)==null?void 0:r.playlists;if(!(e!=null&&e.length))return null;const s=(o=e[0])==null?void 0:o.playlists;return s!=null&&s.length&&s[0]||null}function Gt(t){return(t.type??"").startsWith("image")}function Yr(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Qr(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const Bn={excellent:90,good:75,fair:60},Vn=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],Hn=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],qn=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],Gn={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},Yn=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),Qn=new Set([...Yn,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function Qt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function To(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Qn.has(e)}function bi(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Wn=new Set(["png","svg","webp","gif","avif"]);function Wi(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Wn.has(e)}const Xn=new Set(["svg","svg+xml","png","pdf"]);function Lo(t){return Xn.has(bi(t).toLowerCase())}let Ui=null;function Jn(t){Ui=t??null}function Ze(t,e){if(!t||!Ui)return t;try{return Ui(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function ci(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return Ze(Jt(s),{source:"asset",asset:t})}function Oo(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?Ze(Jt(s),{source:"video",asset:t}):""}function Xi(t){var s,i;let e=Jt(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Ze(Lt(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function Lt(t,e){try{const s=new URL(t);for(const[i,r]of Object.entries(e))s.searchParams.set(i,r);return s.toString()}catch{return t}}const Wr=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\/(?:v\d+\/)?/i;function Jt(t,e){if(!t)return"";const s=r=>r.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(Wr);if(i){const r=i[2],o=t.replace(Wr,`$1assets.filerobot.com/${r}/`);return s(o)}if(e)try{const r=new URL(t);return s(`https://assets.filerobot.com/${e}${r.pathname}${r.search}`)}catch{}return t}function Po(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=Jt(s);const r=Qt(t.file_type),o=String(window.devicePixelRatio||1);let a;return r==="video"?a=Lt(i,{w:e,dpr:o,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||bi(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),a=Lt(i,{w:e,dpr:o,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):a=Lt(i,{w:e,dpr:o}),Ze(a,{source:"folder"})}function Zn(t,e){const s={};return t.format&&(s.force_format=Gn[t.format]),t.quality&&t.format!=="png"&&(s.q=String(Bn[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}const $={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},D={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},M={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},el={AND:"AND"},P={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},xi={[P.DATE]:"date_",[P.BOOLEAN]:"bool_",[P.NUMERIC]:"num_",[P.DECIMAL2]:"dec_",[P.ATTACHMENTS_ASSETS]:"attach_",[P.ATTACHMENT_URI]:"uri_",[P.SELECT_ONE]:"one_",[P.MULTI_SELECT]:"multi_",[P.SUPERTAGS]:"tags_",[P.TEXT]:"text_",[P.TEXT_AREA]:"area_",[P.GEO_POINT]:"geo_",[P.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(xi).map(([t,e])=>[e,t]));const Io=Object.values(xi),ze={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Xr={EMPTY:"empty",NOT_EMPTY:"non-empty"},Ce="empty",Ae="non-empty",Ct="specific",Ti=10,ms=10,Ws=10,Do="filters:pinned:",Mo="metadata:pinned:",Jr=[$.DATE,$.TYPE,$.SIZE],Ro=M.IS,Zs="20",ei="1",tl=0,sl=[{key:$.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:$.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:$.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:$.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:$.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:$.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:$.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:$.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:$.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],il={key:$.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},rl={key:$.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},Zt=[il,...sl,rl],zo=new Set(Object.values(D)),ol=new Set([...Zt.map(t=>t.key),...zo]),Yt={[$.TYPE]:"Format",[$.DATE]:"Date",[$.SIZE]:"Size",[$.LICENSE_EXPIRY]:"License expiry",[$.TAGS]:"Tags",[$.LABELS]:"Labels",[$.PRODUCT_REF]:"Products",[$.IMAGE]:"Image",[$.COLOR]:"Color",[$.METADATA]:"Metadata",[$.APPROVAL]:"Approval",[D.STATUS]:"Approval",[D.APPROVER]:"Approval",[D.REQUESTOR]:"Approval",[D.DUE_DATE]:"Approval"},_s={...Object.fromEntries(Zt.map(t=>[t.key,t.labelKey])),[D.STATUS]:"filterApproval",[D.APPROVER]:"filterApproval",[D.REQUESTOR]:"filterApproval",[D.DUE_DATE]:"filterApproval"},xe={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},di=[{value:xe.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:xe.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:xe.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:xe.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:xe.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:xe.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:xe.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:xe.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],al={[xe.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[xe.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[xe.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[xe.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[xe.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[xe.FONTS]:["ttf","otf","woff","woff2","eot"]},Li={RESOLUTION:0,ORIENTATION:1,FACES:2},nl=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],ll=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],cl=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],No=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],Ji=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],jo=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Uo=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],dl=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],hl=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],Oi=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Contains",value:M.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],dt=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Is not",value:M.IS_NOT,labelKey:"operatorIsNot"}],Pi=[{label:"Is",value:M.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:M.IS,labelKey:"operatorContains"},{label:"Does not contain",value:M.IS_NOT,labelKey:"operatorDoesNotContain"}],Ii=[{label:"Is",value:M.IS,labelKey:"operatorIs"},{label:"Greater than",value:M.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:M.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:M.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:M.RANGE,labelKey:"operatorBetween"}],Zr=[{label:"Is",value:M.IS_EXACT,labelKey:"operatorIs"},{label:"Is not",value:M.IS_NOT,labelKey:"operatorIsNot"}],pl=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--sfx-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--sfx-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--sfx-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"}],hi=[{label:"Empty",value:Ce,labelKey:"empty"},{label:"Not empty",value:Ae,labelKey:"notEmpty"}],ul=[...hi,{label:"Specific",value:Ct,labelKey:"specific"}],fl=[{label:"Empty",value:Ce,labelKey:"empty"},{label:"Not empty",value:Ae,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],ti={[P.DATE]:"calendar",[P.BOOLEAN]:"toggle-left",[P.NUMERIC]:"file-digit",[P.DECIMAL2]:"decimals-arrow-right",[P.ATTACHMENTS_ASSETS]:"paperclip",[P.ATTACHMENT_URI]:"link-2",[P.SELECT_ONE]:"circle-dot",[P.MULTI_SELECT]:"square-check",[P.SUPERTAGS]:"hash",[P.TEXT]:"text-initial",[P.TEXT_AREA]:"text-align-justify",[P.GEO_POINT]:"locate",[P.INTEGER_LIST]:"list-ordered"},gl={[P.TEXT]:"text",[P.TEXT_AREA]:"text",[P.NUMERIC]:"number",[P.DECIMAL2]:"number",[P.BOOLEAN]:"boolean",[P.SELECT_ONE]:"select-one",[P.MULTI_SELECT]:"multi-select",[P.SUPERTAGS]:"tags",[P.DATE]:"date",[P.GEO_POINT]:"geo",[P.ATTACHMENTS_ASSETS]:"attachment",[P.ATTACHMENT_URI]:"attachment",[P.INTEGER_LIST]:"attachment"};async function ml(t){var i;return(((i=(await t.get("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(r=>({name:r.name,value:r.value,count:r.count,category:r.category??r.value.split("_")[0],label:vl(r.name)}))}function vl(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function bl(t){var y,x;const e=await t.get("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,o=((i==null?void 0:i.model)??[])[tl],a=i==null?void 0:i.store,l=((a==null?void 0:a.regional_variants_groups)??[]).map(w=>({uuid:w.uuid,label:w.label??w.name??"",variants:(w.variants??[]).map(k=>({api_value:k.api_value??k.value??"",internal_unique_value:k.internal_unique_value??k.api_value??"",label:k.label??k.name??""}))})).filter(w=>w.variants.length>1),c={};for(const w of l)c[w.uuid]=((y=w.variants[0])==null?void 0:y.api_value)??"";const p=(s==null?void 0:s.project_branding)??((x=e.settings)==null?void 0:x.project_branding),u=p==null?void 0:p.brandColor,h=!!((s==null?void 0:s._cdn_permalink_enabled)??e._cdn_permalink_enabled);if(!o)return{fields:[],regionalVariantGroups:l,regionalFilters:c,brandColor:u,cdnPermalinkEnabled:h};const g=o.groups??[],v=[];for(const w of g){const k=w.name||"";for(const L of w.fields??[]){const O=L.possible_values,E=O==null?void 0:O.map(z=>({api_value:z.api_value??z.value??"",internal_unique_value:z.internal_unique_value??z.api_value??"",label:z.label??z.name??z.api_value??""}));v.push({key:L.key??L.ckey,label:L.title??L.label??L.key??"",type:L.type??"text",slug:L.slug,ckey:L.ckey,possible_values:E,group:k,regionalVariantsGroupUuid:L.regional_variants_group_uuid})}}return{fields:v,regionalVariantGroups:l,regionalFilters:c,brandColor:u,cdnPermalinkEnabled:h}}function Oe(t){return t.toLocaleDateString("en-CA")}function Xs(){return Oe(new Date)}function Zi(t){const e=new Date;switch(t){case"today":return{from:Xs(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:Oe(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:Xs(),to:Oe(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:Oe(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:Xs(),to:Oe(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:Oe(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:Xs(),to:Oe(s)}}default:return null}}function eo(t,e){return e?e.type==="date"?xl(e):e.type==="string"?_l(e):!0:!1}function xl(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function _l(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function yl(t,e={}){const s=[];for(const[i,r]of Object.entries(t)){if(!r||!eo(i,r))continue;const o=wl(i,r);s.push(...o)}for(const[i,r]of Object.entries(e)){if(!r||!eo(i,r))continue;const o=Tl(i,r);s.push(...o)}return $l(s)}function $l(t){const e=[],s=[],i=[];for(const r of t)r.startsWith("type:")||r.startsWith("type=")?e.push(r):r.startsWith("mimetype:")||r.startsWith("mimetype=")?s.push(r):i.push(r);if(e.length>0&&s.length>0){const r=[...e,...s].join(" , ");i.push(r)}else i.push(...e,...s);return i}function wl(t,e){if(e.type==="date")return Ko(t,e);if(t===$.IMAGE)return Fl(e);const s=e,{operator:i=Ro,values:r=[],logic:o}=s;if(r.length===0)return[];switch(t){case $.SIZE:return kl(t,r,"..");case $.FACES:return Sl(t,i,r);case $.TAGS:return Et(t,i,to(r),",",o);case $.LABELS:return Et(t,i,to(r),",",o);case $.COLOR:return Cl(i,r,o);case $.TYPE:return Al(r,i);case $.MIME_TYPE:return El(t,r,i);case $.PRODUCT_REF:return Et(t,"=%",r,",",o);default:return Et(t,i,r,",",o)}}function Ko(t,e){const s=e.field||"created";if(e.kind===ze.PRESET&&e.preset){if(e.preset===Xr.EMPTY)return[`${s}:"empty"`];if(e.preset===Xr.NOT_EMPTY)return[`${s}:"non-empty"`];const i=Zi(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===ze.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===ze.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===ze.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===ze.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function kl(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Sl(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function Et(t,e,s,i,r){if(s.length===0)return[];if(r===el.AND)return s.map(a=>`${t}${e}"${a}"`);const o=s.map(a=>`"${a}"`).join(i);return[`${t}${e}${o}`]}function Cl(t,e,s){const i=[],r=Et("color_search",t,e,",",s);return i.push(...r),i.push('color_operator:"AND"'),i}function Al(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const o of t){const a=al[o];if(a)for(const n of a){const l=`${o}_${n}`;s.has(l)||(s.add(l),i.push(l))}else s.has(o)||(s.add(o),i.push(o))}const r=i.map(o=>`"${o}"`).join(",");return[`type${e}${r}`]}function El(t,e,s,i){if(e.length===0)return[];const r=e.map(o=>`"${o}"`).join(",");return[`${t}${s}${r}`]}function Fl(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const a=t,n=a.resolution,l=a.orientation,c=a.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),l!=null&&l.length&&e.push(`orientation:"${l.join(",")}"`),c!=null&&c.length&&e.push(`faces:"${c.join(",")}"`),e}const s=t,i=s[Li.RESOLUTION],r=s[Li.ORIENTATION],o=s[Li.FACES];return i&&e.push(`resolution:"${i}"`),r&&e.push(`orientation:"${r}"`),o&&e.push(`faces:"${o}"`),e}function Tl(t,e){const s=Pl(t),i=Ol(t);if(e.type==="date")return Ll(s,e,i);const r=e,{operator:o=Ro,values:a=[],logic:n,metadataType:l}=r;if(a.length===0)return[];if(a.length===1&&(a[0]===Ce||a[0]===Ae)){const c=l===P.GEO_POINT?M.IS+"~":M.IS;return[`${s}${c}"${a[0]}"`]}if((l===P.NUMERIC||l===P.DECIMAL2)&&o===M.RANGE)return[`${s}${M.IS}"${a.join('","')}"`];if(l===P.GEO_POINT){const c=a.map(p=>{const u=p.indexOf("..");if(u===-1)return`(${p})`;const h=p.slice(0,u),g=p.slice(u);return`(${h})${g}`});return Et(s,o+"~",c,",",n)}return Et(s,o,a,",",n)}function Ll(t,e,s){const i=Ko(t,e);return!s||i.length===0?i:i.map(r=>{const o=r.search(/[^a-zA-Z0-9_]/);if(o===-1)return`"${r}"`;const a=r.slice(0,o),l=r.slice(o).replace(/"/g,"");return`"${a}${l}"`})}function Ol(t){return t.startsWith("date_")}function Pl(t){for(const e of Io)if(t.startsWith(e))return t.slice(e.length);return t}function to(t){return t.map(e=>e.replace(/#/g,""))}const Il=new Set([$.DATE,$.LICENSE_EXPIRY,D.DUE_DATE]),Dl={[$.DATE]:"created",[$.LICENSE_EXPIRY]:$.LICENSE_EXPIRY,[D.DUE_DATE]:D.DUE_DATE};function Ki(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=Ml(s,i));return e}function Ml(t,e){return e.type==="string"||e.type==="date"?e:Il.has(t)?{type:"date",field:e.field??Dl[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function Rl(t){const e=localStorage.getItem(Do+t),s=localStorage.getItem(Mo+t);let i;try{i=e?JSON.parse(e):[...Jr]}catch{i=[...Jr]}let r;try{r=s?JSON.parse(s):[]}catch{r=[]}return{pinnedFilters:i,pinnedMetadata:r}}function zl(t,e){localStorage.setItem(Do+t,JSON.stringify(e))}function Nl(t,e){localStorage.setItem(Mo+t,JSON.stringify(e))}const Bo="sort-by",Vo="sort-order";function so(t,e){try{localStorage.setItem(Bo,t),localStorage.setItem(Vo,e)}catch{}}function jl(){try{const t=localStorage.getItem(Bo),e=localStorage.getItem(Vo);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const Ho="ap-last-folder",qo="ap-last-view",Go="ap-last-tab";function ss(t,e){return e?`${t}:${e}`:t}function io(t,e){try{localStorage.setItem(ss(Ho,e),t)}catch{}}function Ul(t){try{return localStorage.getItem(ss(Ho,t))}catch{return null}}function Kl(t,e){try{localStorage.setItem(ss(qo,e),t)}catch{}}function Bl(t){try{return localStorage.getItem(ss(qo,t))}catch{return null}}function Vl(t,e){try{localStorage.setItem(ss(Go,e),t)}catch{}}function Hl(t){try{const e=localStorage.getItem(ss(Go,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function ql(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,r=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255;return[i,r,o]}function Di(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Gl(t,e,s){const i=Di(t),r=Di(e),o=Di(s),a=.4122214708*i+.5363325363*r+.0514459929*o,n=.2119034982*i+.6806995451*r+.1073969566*o,l=.0883024619*i+.2817188376*r+.6299787005*o,c=Math.cbrt(a),p=Math.cbrt(n),u=Math.cbrt(l),h=.2104542553*c+.793617785*p-.0040720468*u,g=1.9779984951*c-2.428592205*p+.4505937099*u,v=.0259040371*c+.7827717662*p-.808675766*u,y=Math.sqrt(g*g+v*v);let x=Math.atan2(v,g)*(180/Math.PI);return x<0&&(x+=360),[h,y,x]}function Yl(t){return t>.7}function Ql(t,e){const s=["--sfx-primary","--sfx-primary-foreground","--sfx-primary-10","--sfx-primary-20","--sfx-accent","--sfx-accent-foreground","--sfx-ring","--sfx-selection-bg"];if(!e){for(const h of s)t.style.removeProperty(h);return}const[i,r,o]=ql(e),[a,n,l]=Gl(i,r,o),c=`${a.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)}`,p=`oklch(${c})`,u=Yl(a)?"#000":"#fff";t.style.setProperty("--sfx-primary",p),t.style.setProperty("--sfx-primary-foreground",u),t.style.setProperty("--sfx-primary-10",`oklch(${c} / 0.1)`),t.style.setProperty("--sfx-primary-20",`oklch(${c} / 0.2)`),t.style.setProperty("--sfx-accent",`oklch(${c} / 0.07)`),t.style.setProperty("--sfx-accent-foreground",p),t.style.setProperty("--sfx-ring",`oklch(${c} / 0.7)`),t.style.setProperty("--sfx-selection-bg",`oklch(${c} / 0.08)`)}const er=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],Wl=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...er],Xl=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],Jl=[{value:"name",labelKey:"sortName",label:"Name"}],Zl=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],ec=[{value:"name",labelKey:"sortName",label:"Name"}],Ks=C`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`,tc=C`
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Yo=C`
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
 */const sc={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ic=t=>(...e)=>({_$litDirective$:t,values:e});class rc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const Mi=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class oc extends rc{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==sc.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return et}update(e,[s]){if(s===this._lastStyles)return et;this._lastStyles=s;const{style:i}=e.element,r=s??{};for(const o of this._appliedProps)(!(o in r)||r[o]==null||r[o]==="")&&(i.removeProperty(Mi(o)),this._appliedProps.delete(o));for(const[o,a]of Object.entries(r))a!=null&&a!==""?(i.setProperty(Mi(o),a),this._appliedProps.add(o)):this._appliedProps.has(o)&&(i.removeProperty(Mi(o)),this._appliedProps.delete(o));return et}}const R=ic(oc);function ac(t,e){customElements.get(t)||customElements.define(t,e)}const T=t=>e=>(ac(t,e),e);var nc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,tr=(t,e,s,i)=>{for(var r=i>1?void 0:i?lc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&nc(e,s,r),r};let Es=class extends A{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return d`
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
    `}};Es.styles=C`
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
  `;tr([f({type:Boolean})],Es.prototype,"open",2);tr([vt("dialog")],Es.prototype,"dialog",2);Es=tr([T("ap-modal")],Es);const Ie=C`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var cc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,Bs=(t,e,s,i)=>{for(var r=i>1?void 0:i?dc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&cc(e,s,r),r};let Pt=class extends A{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return d`
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
    `}};Pt.styles=C`
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
  `;Bs([f({type:Array})],Pt.prototype,"groups",2);Bs([f({type:Object})],Pt.prototype,"selectedFilters",2);Bs([f({attribute:!1})],Pt.prototype,"t",2);Bs([_()],Pt.prototype,"_open",2);Pt=Bs([T("ap-regional-settings")],Pt);var hc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,pe=(t,e,s,i)=>{for(var r=i>1?void 0:i?pc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&hc(e,s,r),r};const uc=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let ee=class extends A{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=In(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=uc.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return d`
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
    `}};ee.styles=[Ie,C`
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
    `];pe([f()],ee.prototype,"activeTab",2);pe([f({type:Array})],ee.prototype,"tabs",2);pe([f({type:Boolean})],ee.prototype,"isInsideLabel",2);pe([f({type:Boolean})],ee.prototype,"isInsideCollection",2);pe([f({type:Boolean})],ee.prototype,"isInsideCollectionLeaf",2);pe([f()],ee.prototype,"viewMode",2);pe([f()],ee.prototype,"searchQuery",2);pe([f({type:Array})],ee.prototype,"regionalGroups",2);pe([f({type:Object})],ee.prototype,"regionalFilters",2);pe([f({type:Boolean})],ee.prototype,"hideClose",2);pe([f({type:Boolean,reflect:!0,attribute:"ai-search"})],ee.prototype,"enableAISearch",2);pe([f({type:Boolean})],ee.prototype,"isAISearchActive",2);pe([f({attribute:!1})],ee.prototype,"t",2);pe([_()],ee.prototype,"_localSearch",2);ee=pe([T("ap-header")],ee);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,sr=(t,e,s,i)=>{for(var r=i>1?void 0:i?gc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&fc(e,s,r),r};let Fs=class extends A{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?d`
      <div class="popover">
        ${this.title?d`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:d``}};Fs.styles=C`
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
  `;sr([f()],Fs.prototype,"title",2);sr([f({type:Boolean})],Fs.prototype,"open",2);Fs=sr([T("ap-filter-popover")],Fs);var mc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,is=(t,e,s,i)=>{for(var r=i>1?void 0:i?vc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&mc(e,s,r),r};function ro(t){var i;const e=new Map;for(const r of t){const o=r.category||r.value.split("_")[0];if(!e.has(o)){const n=di.find(l=>l.value===o);e.set(o,{key:o,labelKey:(n==null?void 0:n.labelKey)||o,label:(n==null?void 0:n.label)||o.charAt(0).toUpperCase()+o.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const a=e.get(o);a.extensions.push({value:r.value,label:r.label||((i=r.value.split("_").pop())==null?void 0:i.toUpperCase())||r.value,count:r.count}),a.totalCount+=r.count}const s=di.map(r=>r.value);return[...e.values()].sort((r,o)=>{const a=s.indexOf(r.key),n=s.indexOf(o.key);return(a===-1?999:a)-(n===-1?999:n)})}let ft=class extends A{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const r=new Set([t.key,...e]);i=this.selected.filter(o=>!r.has(o))}else{const r=new Set(e);i=this.selected.filter(o=>!r.has(o)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(r=>r!==e.key),i.push(...s)),i.includes(t)?i=i.filter(r=>r!==t):(i.push(t),s.every(r=>i.includes(r))&&(i=i.filter(r=>!s.includes(r)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.TYPE,values:t,operator:M.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const r=s.extensions.filter(o=>o.label.toLowerCase().includes(e)||o.value.toLowerCase().includes(e));return r.length===0?null:{...s,extensions:r}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=ro(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=ro(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return d`
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
                      @click=${o=>o.stopPropagation()}
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
        ${di.map(t=>d`
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
    `}};ft.styles=C`
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
  `;is([f({type:Array})],ft.prototype,"selected",2);is([f({type:Array})],ft.prototype,"fileTypes",2);is([f({attribute:!1})],ft.prototype,"t",2);is([_()],ft.prototype,"_search",2);is([_()],ft.prototype,"_expanded",2);ft=is([T("ap-filter-type")],ft);const at=C`
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
`;var bc=Object.defineProperty,xc=Object.getOwnPropertyDescriptor,bt=(t,e,s,i)=>{for(var r=i>1?void 0:i?xc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&bc(e,s,r),r};let He=class extends A{constructor(){super(...arguments),this.filterKey=$.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===$.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?jo:Ji).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return No.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return Oe(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=Zi(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const r=new Date(s+"T23:59:59");this.to=r.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?m:d`
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
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return m;const e=this.from?Oe(new Date(this.from)):"",s=this.to?Oe(new Date(this.to)):"",i=this._todayStr;return t==="specific"?d`
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
      `:t==="before"?d`
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
      `:t==="after"?d`
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
      `:d`
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
    `}render(){return d`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${()=>this._clearAll()}>
          ${this.t("clearAll","Clear all")}
        </button>
        ${this._renderDateTypeSection()} ${this._renderRangeSection()} ${this._renderDateInputs()}
      </div>
    `}};He.styles=[at,C`
      .date-inputs {
        margin-top: 4px;
      }
    `];bt([f()],He.prototype,"filterKey",2);bt([f({attribute:!1})],He.prototype,"t",2);bt([f()],He.prototype,"field",2);bt([f()],He.prototype,"kind",2);bt([f()],He.prototype,"preset",2);bt([f()],He.prototype,"from",2);bt([f()],He.prototype,"to",2);He=bt([T("ap-filter-date")],He);var _c=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,Rt=(t,e,s,i)=>{for(var r=i>1?void 0:i?yc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&_c(e,s,r),r};let tt=class extends A{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=$.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=Ti}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:M.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:M.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:M.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return d`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Ti} tags`:m}
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
                <span>You can select up to ${Ti} tags.</span>
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
    `}};tt.styles=[Ie,at,C`
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
    `];Rt([f({type:Array})],tt.prototype,"tags",2);Rt([f({type:Array})],tt.prototype,"selected",2);Rt([f()],tt.prototype,"filterKey",2);Rt([f({attribute:!1})],tt.prototype,"t",2);Rt([vt(".tag-search")],tt.prototype,"_searchInput",2);Rt([_()],tt.prototype,"_search",2);tt=Rt([T("ap-filter-tags")],tt);var $c=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,rs=(t,e,s,i)=>{for(var r=i>1?void 0:i?wc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&$c(e,s,r),r};let gt=class extends A{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=ms}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:s,operator:M.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:e,operator:M.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.LABELS,values:[],operator:M.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return d`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${ms} labels`,{count:ms}):m}
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
                  >${this.t("labelsLimitAlert",`You can select up to ${ms} labels.`,{count:ms})}</span
                >
              </div>
            `:m}
      </div>
    `}};gt.styles=[at,C`
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
    `];rs([f({type:Array})],gt.prototype,"labels",2);rs([f({type:Array})],gt.prototype,"selected",2);rs([f({attribute:!1})],gt.prototype,"t",2);rs([vt(".search-input")],gt.prototype,"_searchInput",2);rs([_()],gt.prototype,"_search",2);gt=rs([T("ap-filter-labels")],gt);var kc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,zt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Sc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&kc(e,s,r),r};const Ri=3,Bi=/^#[0-9A-Fa-f]{6}$/;function Cc(t){const e=t.trim().split(/\s+/);return e.length<1||!Bi.test(e[0])?null:{hex:e[0],tolerance:e[1]||ei,coverage:e[3]||Zs}}let st=class extends A{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=Cc(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==ei||s.coverage!==Zs)),this._initialized=!0)}}_selectColor(t){if(!Bi.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=Ri||(this._colors=[...this._colors,{hex:t,tolerance:ei,coverage:Zs}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!Bi.test(i)||this._colors.some((a,n)=>n!==t&&a.hex.toLowerCase()===i.toLowerCase()))return;const o=[...this._colors];o[t]={...o[t],hex:i},this._colors=o,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const r=[...this._colors];r[t]={...r[t],coverage:String(i)},this._colors=r,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:ei,i=this._advanced?e.coverage:Zs;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=Ri;return d`
      <div class="palette">
        ${dl.map(s=>{const i=t.has(s),r=e&&!i;return d`
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
            .options=${hl.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
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
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<Ri&&!this._showPalette;return d`
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
    `}};st.styles=[Ie,at,C`
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
    `];zt([f({type:Array})],st.prototype,"values",2);zt([f({attribute:!1})],st.prototype,"t",2);zt([_()],st.prototype,"_colors",2);zt([_()],st.prototype,"_advanced",2);zt([_()],st.prototype,"_showPalette",2);zt([_()],st.prototype,"_initialized",2);st=zt([T("ap-filter-color")],st);var Ac=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,xt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ec(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Ac(e,s,r),r};const Fc={KB:1/1e3,MB:1,GB:1e3},Tc=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let qe=class extends A{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Fc[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.SIZE,values:[],operator:M.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.SIZE,values:[i],operator:M.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return d`
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
              .options=${Tc}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `}};qe.styles=[at,C`
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
    `];xt([f({type:Number})],qe.prototype,"min",2);xt([f({type:Number})],qe.prototype,"max",2);xt([f({attribute:!1})],qe.prototype,"t",2);xt([_()],qe.prototype,"_minVal",2);xt([_()],qe.prototype,"_maxVal",2);xt([_()],qe.prototype,"_unit",2);xt([_()],qe.prototype,"_initialized",2);qe=xt([T("ap-filter-size")],qe);var Lc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Vs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Oc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Lc(e,s,r),r};const Pc=pt`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,Ic=pt`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,Dc=pt`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,Mc=pt`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,Rc={portrait:Pc,landscape:Ic,square:Dc,panorama:Mc};let It=class extends A{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return d`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${nl.map(t=>d`
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
            ${ll.map(t=>d`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleOrientation(t.value)}}
                  ><span class="orientation-label"
                    >${Rc[t.value]}${this.t(t.labelKey,t.label)}</span
                  ></sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${cl.map(t=>d`
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
    `}};It.styles=[at,C`
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
    `];Vs([f({type:Array})],It.prototype,"selectedResolution",2);Vs([f({type:Array})],It.prototype,"selectedOrientation",2);Vs([f({type:Array})],It.prototype,"selectedFaces",2);Vs([f({attribute:!1})],It.prototype,"t",2);It=Vs([T("ap-filter-image")],It);var zc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,G=(t,e,s,i)=>{for(var r=i>1?void 0:i?Nc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&zc(e,s,r),r};function j(t){return`${xi[t.type]||""}${t.key}`}let H=class extends A{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}get _tTextOperatorOptions(){return Oi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return Ii.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return dt.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return Pi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return fl.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return hi.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return ul.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=Ws}_getField(t){return this.fields.find(e=>j(e)===t)}_getUIType(t){return gl[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Ce||t[0]===Ae}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===Ce?Ce:((i=e.values)==null?void 0:i[0])===Ae?Ae:this._specificModeFields.has(t)||e.values&&e.values.length>0?Ct:""}_emitFilterChange(t,e,s){const i=j(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=j(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=j(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=j(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(j(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=j(t);if(e===Ct){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const r=this._getApplied(s);this._isSpecialValue(r.values)&&this._emitFilterChange(t,r.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=j(t);if(this._specificModeFields.has(e)){const h=new Set(this._specificModeFields);h.delete(e),this._specificModeFields=h}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:r,...o}=this._dateFroms;this._dateFroms=o;const{[e]:a,...n}=this._dateTos;this._dateTos=n;const{[e]:l,...c}=this._selectSearches;this._selectSearches=c;const{[e]:p,...u}=this._tagInputs;this._tagInputs=u,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,r=this._getApplied(j(t)).operator||Oi[0].value;this._emitFilterChange(t,r,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,r=j(t),o=this._getApplied(r),a=o.operator||Ii[0].value,n=[...o.values||[]];s===0?n[0]=i:n[1]=i;const l=n.filter(c=>c!==""&&c!==void 0);if(l.length>0){const c=t.type===P.DECIMAL2;if(!l.every(u=>c?!isNaN(parseFloat(u)):/^-?\d+$/.test(u)))return}this._emitFilterChange(t,a,n)}_onBooleanSelect(t,e){var r;const s=this._getApplied(j(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=j(t),i=this._getApplied(s),r=i.operator||dt[0].value,o=i.values||[];o.length===1&&o[0]===e?this._emitFilterChange(t,r,[]):this._emitFilterChange(t,r,[e])}_onMultiSelectToggle(t,e){const s=j(t),i=this._getApplied(s),r=i.operator||Pi[0].value,o=i.values||[],a=o.includes(e)?o.filter(n=>n!==e):[...o,e];this._emitFilterChange(t,r,a)}_onTagKeydown(t,e){const s=j(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const r=i.replace(/,/g,"").trim();r&&(this._tagInputs={...this._tagInputs,[e]:r},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=j(t),i=this._getApplied(s),r=i.operator||dt[0].value,o=i.values||[];o.includes(e)||this._emitFilterChange(t,r,[...o,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,r=await this.apiClient.get("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(r.tags||[]).map(o=>o.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),r=i.operator||dt[0].value,o=i.values||[];o.includes(s)||this._emitFilterChange(t,r,[...o,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=j(t),i=this._getApplied(s),r=i.operator||dt[0].value,o=i.values||[];this._emitFilterChange(t,r,o.filter(a=>a!==e))}_onTagOperatorChange(t,e){const s=j(t),r=this._getApplied(s).values||[];this._emitFilterChange(t,e,r)}_onDatePreset(t,e){const s=j(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let r="",o="";switch(e){case"today":{const a=new Date(i);a.setHours(0,0,0,0),r=a.toISOString(),o=i.toISOString();break}case"last_week":{const a=new Date(i),n=a.getDay();a.setDate(a.getDate()-(n===0?6:n-1)),a.setHours(0,0,0,0);const l=new Date(a);l.setDate(l.getDate()-7),r=l.toISOString(),o=a.toISOString();break}case"last_month":{const a=new Date(i.getFullYear(),i.getMonth(),1),n=new Date(a);n.setMonth(n.getMonth()-1),r=n.toISOString(),o=a.toISOString();break}case"last_year":{const a=new Date(i.getFullYear(),0,1),n=new Date(a);n.setFullYear(n.getFullYear()-1),r=n.toISOString(),o=a.toISOString();break}}r&&o&&(this._dateFroms={...this._dateFroms,[s]:r},this._dateTos={...this._dateTos,[s]:o},this._emitFilterChange(t,"..",[r,o]))}_onDateInput(t,e,s){const i=s.target.value,r=j(t),o=this._datePresets[r]||"",a=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[r]:a}:this._dateTos={...this._dateTos,[r]:a};let n=this._dateFroms[r]||"",l=this._dateTos[r]||"";o==="after"&&n&&(l=new Date().toISOString(),this._dateTos={...this._dateTos,[r]:l}),o==="before"&&l&&(n=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[r]:n}),n&&l&&this._emitFilterChange(t,"..",[n,l])}_onGeoLocationInput(t,e){var u;const s=e.target.value.trim(),i=j(t),r=(u=this.shadowRoot)==null?void 0:u.querySelector(`[data-geo-radius="${i}"]`),o=(r==null?void 0:r.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const a=s.split(",").map(h=>h.trim());if(a.length!==2||a.some(h=>isNaN(Number(h))||h===""))return;const[n,l]=a;let p=`${n},${l}..${o||"0"}`;this._emitFilterChange(t,M.IS,[p])}_onGeoRadiusInput(t,e){var l;const s=e.target.value,i=j(t),r=this._getApplied(i);if(!((l=r.values)!=null&&l[0]))return;const o=r.values[0],[a]=o.split("..");let n=a;s&&(n+=`..${s}`),this._emitFilterChange(t,M.IS,[n])}_onEmptyOption(t,e){var r;const s=this._getApplied(j(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,o)=>o.length===0?m:d`
        <div class="field-group-label">${r}</div>
        ${o.map(a=>{const n=j(a),l=this.visibleFields.includes(n),c=!l&&this._atFieldLimit;return d`
            <div
              class="field-item ${l?"selected":""} ${c?"disabled":""}"
              @click=${()=>!c&&!l&&this._addField(a)}
            >
              ${l?d`<sfx-icon name="check" .size=${14}></sfx-icon>`:d`<sfx-icon
                    name=${ti[a.type]||"file-text"}
                    .size=${14}
                    ${R({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
                  ></sfx-icon>`}
              <span>${a.label}</span>
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
          ${e.length===0?d`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:d`${[...s.entries()].map(([r,o])=>i(r,o))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var c,p;const e=j(t),s=this._getApplied(e),r=this._isSpecialValue(s.values)?"":((c=s.values)==null?void 0:c[0])||"",o=this._getContentMode(e),a=o===Ce||o===Ae,n=s.operator||Oi[0].value,l=t.type===P.TEXT_AREA;return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((p=s.values)!=null&&p.length)&&!s.operator}
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
            ?disabled=${a}
            @sfx-change=${u=>this._onOperatorChange(t,u.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${u=>this._onContentModeChange(t,u.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o===Ct?d`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${l?d`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${u=>this._onTextInput(t,u)}
                      ></textarea>
                    `:d`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${u=>this._onTextInput(t,u)}
                        @keydown=${u=>{u.key==="Enter"&&u.preventDefault()}}
                      />
                    `}
              </div>
            `:m}
      </div>
    `}_renderNumberFilter(t){var k,L,O;const e=j(t),s=this._getApplied(e),i=s.operator||Ii[0].value,r=this._isSpecialValue(s.values),o=this._getContentMode(e),a=o===Ce||o===Ae,n=i===M.RANGE,l=i===M.GREATER_THAN_OR_EQUAL,c=i===M.LESS_THAN_OR_EQUAL,p=t.type===P.DECIMAL2,u=p?"0.01":"1",h=p?"0.00":"0",g=r?"":((k=s.values)==null?void 0:k[0])||"",v=r?"":((L=s.values)==null?void 0:L[1])||"",y=n||l||c,x=n||l||c?this.t("min","Min"):this.t("value","Value"),w=this.t("max","Max");return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((O=s.values)!=null&&O.length)&&!s.operator}
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
            ?disabled=${a}
            @sfx-change=${E=>this._onOperatorChange(t,E.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${E=>this._onContentModeChange(t,E.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o===Ct?d`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${c?"true":m}
                      >${x}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${u}
                      placeholder=${h}
                      .value=${g}
                      ?disabled=${c}
                      @change=${E=>this._onNumberInput(t,E,0)}
                    />
                  </div>
                  ${y?d`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${l?"true":m}
                            >${w}</span
                          >
                          <input
                            class="filter-input"
                            type="number"
                            step=${u}
                            placeholder=${h}
                            .value=${v}
                            ?disabled=${l}
                            @change=${E=>this._onNumberInput(t,E,1)}
                          />
                        </div>
                      `:m}
                </div>
              </div>
            `:m}
      </div>
    `}_renderBooleanFilter(t){var i,r;const e=this._getApplied(j(t)),s=((i=e.values)==null?void 0:i[0])||"";return d`
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
            @sfx-change=${o=>this._onBooleanSelect(t,o.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=j(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],o=t.possible_values||[],a=s.operator||dt[0].value,n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,c=r.length>0||i,p=n?o.filter(h=>h.label.toLowerCase().includes(n)):o,u=r.length>=Ws;return d`
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
                  ?disabled=${!c&&!s.operator}
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
                    ?disabled=${!c&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${a}
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
                        ${r.map(h=>{const g=o.find(v=>v.api_value===h);return d`
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
            ${p.length===0?d`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(h=>{const g=r.includes(h.api_value),v=!g&&u;return d`
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
    `}_renderMultiSelectFilter(t){const e=j(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],o=t.possible_values||[],a=s.operator||Pi[0].value,n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,c=r.length>0||i,p=n?o.filter(h=>h.label.toLowerCase().includes(n)):o,u=r.length>=Ws;return d`
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
                  ?disabled=${!c&&!s.operator}
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
                    ?disabled=${!c&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${a}
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
                        ${r.map(h=>{const g=o.find(v=>v.api_value===h);return d`
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
            ${p.length===0?d`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:p.map(h=>{const g=r.includes(h.api_value),v=!g&&u;return d`
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
    `}_renderTagsFilter(t){const e=j(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],o=this._tagInputs[e]||"",a=s.operator||dt[0].value,n=r.length>0||i,l=this._tagSuggestions[e]||[],c=this._tagLoading[e]||!1,p=o.trim().length>0,u=r.length>=Ws;return d`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${o}
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
                  ?disabled=${!n&&!s.operator}
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
                    ?disabled=${!n&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${a}
                  ?disabled=${i}
                  @sfx-change=${h=>this._onTagOperatorChange(t,h.detail.value)}
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
                      </div>`:l.length>0?l.map(h=>{const g=r.includes(h),v=!g&&u;return d`
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
    `}_renderDateFilter(t){var p,u;const e=j(t),s=this._datePresets[e]||"",i=this._getApplied(e),o=this._isSpecialValue(i.values)?((p=i.values)==null?void 0:p[0])||"":s,a=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=this._dateFroms[e]?Oe(new Date(this._dateFroms[e])):"",l=this._dateTos[e]?Oe(new Date(this._dateTos[e])):"",c=["before","after","between"].includes(o);return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!o&&!((u=i.values)!=null&&u.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${a}
            .value=${o==="empty"||o==="non-empty"?o:""}
            @sfx-change=${h=>this._onDatePreset(t,h.detail.value)}
          ></sfx-radio-group>

          <div class="separator"></div>

          <sfx-radio-group
            clearable
            columns="2"
            .options=${Ji.map(h=>({...h,label:this.t(h.labelKey,h.label)}))}
            .value=${o!=="empty"&&o!=="non-empty"?o:""}
            @sfx-change=${h=>this._onDatePreset(t,h.detail.value)}
          ></sfx-radio-group>
        </div>

        ${c?d`
              <div class="filter-section">
                <div class="grid-2">
                  ${o==="before"?d`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <sfx-date-input
                            .value=${l}
                            @change=${h=>this._onDateInput(t,"to",h)}
                          ></sfx-date-input>
                        </div>
                      `:o==="after"?d`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <sfx-date-input
                              .value=${n}
                              @change=${h=>this._onDateInput(t,"from",h)}
                            ></sfx-date-input>
                          </div>
                        `:d`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <sfx-date-input
                              .value=${n}
                              @change=${h=>this._onDateInput(t,"from",h)}
                            ></sfx-date-input>
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <sfx-date-input
                              .value=${l}
                              @change=${h=>this._onDateInput(t,"to",h)}
                            ></sfx-date-input>
                          </div>
                        `}
                </div>
              </div>
            `:m}
      </div>
    `}_renderGeoFilter(t){var p,u;const e=j(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._getContentMode(e);let o="",a="";if(!i&&((p=s.values)!=null&&p[0])){const h=s.values[0],[g,v]=h.split("..");o=g||"",a=v||""}const n=o.length>0,l=o.split(",").map(h=>h.trim()),c=!n||l.length===2&&l.every(h=>!isNaN(Number(h))&&h!=="");return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((u=s.values)!=null&&u.length)}
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

        ${r===Ct?d`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${o}
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
                      .value=${a}
                      @change=${h=>this._onGeoRadiusInput(t,h)}
                    />
                  </div>
                </div>
              </div>
            `:m}
      </div>
    `}_renderAttachmentFilter(t){var i,r;const e=this._getApplied(j(t)),s=((i=e.values)==null?void 0:i[0])||"";return d`
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
            @sfx-change=${o=>this._onEmptyOption(t,o.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=j(t),s=this._getApplied(e),i=s.values||[],r=s.operator||M.IS;return d`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${i.length===0}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${dt}
            .value=${r}
            @sfx-change=${o=>this._emitFilterChange(t,o.detail.value,i)}
          ></sfx-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder","Search faces")}
            .value=${i.join(", ")}
            @change=${o=>{const n=o.target.value.split(",").map(l=>l.trim()).filter(Boolean);this._emitFilterChange(t,r,n)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===P.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return m}}_renderFieldSection(t){const e=this._getField(t);if(!e)return m;const s=this._collapsedFields.has(t);return d`
      <div class="field-section">
        <div class="field-header" @click=${()=>this._toggleCollapse(t)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${s?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${ti[e.type]||"file-text"}
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
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,o)=>o.length===0?m:d`
        <div class="field-group-label">${r}</div>
        ${o.map(a=>{const n=j(a),l=this.visibleFields.includes(n),c=!!this.appliedMetadata[n]||!!this.appliedFilters[n],p=this.pinnedFields.includes(n),u=!l&&this._atFieldLimit;return d`
            <div
              class="field-item ${c?"has-filter":""} ${u?"disabled":""}"
              @click=${()=>!u&&this._emitFieldSelect(a)}
            >
              <sfx-icon
                name=${ti[a.type]||"file-text"}
                .size=${14}
                ${R({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="field-item-label">${a.label}</span>
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
          ${e.length===0?d`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:d`${[...s.entries()].map(([r,o])=>i(r,o))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):d`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return d`
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
    `}};H.styles=[Ie,at,C`
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
    `];G([f({type:Array})],H.prototype,"fields",2);G([f({type:Object})],H.prototype,"appliedFilters",2);G([f({type:Array})],H.prototype,"visibleFields",2);G([f()],H.prototype,"mode",2);G([f()],H.prototype,"activeFieldKey",2);G([f({type:Array})],H.prototype,"pinnedFields",2);G([f({type:Object})],H.prototype,"appliedMetadata",2);G([f({attribute:!1})],H.prototype,"apiClient",2);G([f({attribute:!1})],H.prototype,"t",2);G([_()],H.prototype,"_showFieldSelection",2);G([_()],H.prototype,"_fieldSearch",2);G([_()],H.prototype,"_collapsedFields",2);G([_()],H.prototype,"_tagInputs",2);G([_()],H.prototype,"_tagSuggestions",2);G([_()],H.prototype,"_tagLoading",2);G([_()],H.prototype,"_datePresets",2);G([_()],H.prototype,"_dateFroms",2);G([_()],H.prototype,"_dateTos",2);G([_()],H.prototype,"_specificModeFields",2);G([_()],H.prototype,"_selectSearches",2);H=G([T("ap-filter-metadata")],H);var jc=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,ne=(t,e,s,i)=>{for(var r=i>1?void 0:i?Uc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&jc(e,s,r),r};let J=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.selectedStatus=[],this.statusOperator=":=",this.approverValues=[],this.approverOperator=M.IS_EXACT,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=M.IS_EXACT,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch=""}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===Ce||t===Ae)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _showApproverSection(){return this.approverUsers.length>0}get _showRequesterSection(){return this.requesterUsers.length>0}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(D.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(D.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(D.STATUS,[],this.statusOperator)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(D.APPROVER,e,this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(D.APPROVER,this.approverValues,e)}_clearApprover(){this._emitChange(D.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(D.REQUESTOR,e,this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(D.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._emitChange(D.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===ze.BEFORE||t===ze.AFTER||t===ze.BETWEEN||t===ze.SPECIFIC?t:ze.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",r="";if(s===ze.PRESET){const o=Zi(e);o&&(i=o.from,r=o.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:r})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:D.DUE_DATE,values:{field:D.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var r;return i.name.toLowerCase().includes(s)||(((r=i.email)==null?void 0:r.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const t=this.selectedStatus.length>0;return d`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearStatus}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${Zr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${hi.map(e=>d`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @sfx-toggle=${()=>this._toggleStatus(e.value)}
                >${this.t(e.labelKey,e.label)}</sfx-checkbox
              >
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${pl.map(e=>d`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @sfx-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <sfx-icon
                    name=${e.icon}
                    .size=${16}
                    ${R({color:e.iconColor})}
                  ></sfx-icon>
                  ${this.t(e.labelKey,e.label)}
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
        ${e.map(i=>{const r=t.find(o=>o.uuid===i);return r?d`
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
    `}_renderUserPickerSection(t){const e=t.selectedValues.length>0,s=this._filterUsers(t.users,t.search);return d`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${t.onClear}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${Zr.map(i=>({...i,label:this.t(i.labelKey,i.label)}))}
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
          ${s.length===0?d`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:s.map(i=>this._renderUserItem(i,t.selectedValues.includes(i.uuid),()=>t.onToggle(i.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this.approverOperator,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this.requesterOperator,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return d`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearDueDate}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${hi.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===Ce||this.dueDatePreset===Ae?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${Uo.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==Ce&&this.dueDatePreset!==Ae?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?d`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset!=="before"?d`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("startDate","Start date")}</span>
                        <sfx-date-input
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        ></sfx-date-input>
                      </div>
                    `:m}
                ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?d`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("endDate","End date")}</span>
                        <sfx-date-input
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        ></sfx-date-input>
                      </div>
                    `:m}
              </div>
            `:m}
      </div>
    `}render(){return d`
      <div class="filter-content">
        ${this._renderStatusSection()}
        ${this._showApproverSection?d`<div class="separator"></div>
              ${this._renderApproverSection()}`:m}
        ${this._showRequesterSection?d`<div class="separator"></div>
              ${this._renderRequesterSection()}`:m}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};J.styles=[Ie,at,C`
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
    `];ne([f({attribute:!1})],J.prototype,"t",2);ne([f({type:Array})],J.prototype,"selectedStatus",2);ne([f()],J.prototype,"statusOperator",2);ne([f({type:Array})],J.prototype,"approverValues",2);ne([f()],J.prototype,"approverOperator",2);ne([f({type:Array})],J.prototype,"approverUsers",2);ne([f({type:Array})],J.prototype,"requesterValues",2);ne([f()],J.prototype,"requesterOperator",2);ne([f({type:Array})],J.prototype,"requesterUsers",2);ne([f()],J.prototype,"dueDateKind",2);ne([f()],J.prototype,"dueDatePreset",2);ne([f()],J.prototype,"dueDateFrom",2);ne([f()],J.prototype,"dueDateTo",2);ne([_()],J.prototype,"_approverSearch",2);ne([_()],J.prototype,"_requesterSearch",2);J=ne([T("ap-filter-approval")],J);var Kc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,Ue=(t,e,s,i)=>{for(var r=i>1?void 0:i?Bc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Kc(e,s,r),r};const Vc=300;function Hc(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let Ee=class extends A{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Hc(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:$.PRODUCT_REF,values:e,operator:M.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Vc)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.get("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
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
    `}};Ee.styles=[Ie,at,C`
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
    `];Ue([f({type:Array})],Ee.prototype,"selected",2);Ue([f({attribute:!1})],Ee.prototype,"apiClient",2);Ue([f({attribute:!1})],Ee.prototype,"t",2);Ue([vt(".product-search")],Ee.prototype,"_searchInput",2);Ue([_()],Ee.prototype,"_search",2);Ue([_()],Ee.prototype,"_debouncedSearch",2);Ue([_()],Ee.prototype,"_products",2);Ue([_()],Ee.prototype,"_isLoading",2);Ue([_()],Ee.prototype,"_showAddList",2);Ue([_()],Ee.prototype,"_addListText",2);Ee=Ue([T("ap-filter-product-ref")],Ee);var qc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,B=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&qc(e,s,r),r};let U=class extends A{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=er,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.enabledFilterKeys=null,this.approverUsers=[],this.requesterUsers=[],this.t=(t,e)=>typeof e=="string"?e:t,this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(o=>{var a;return o instanceof HTMLElement&&o.classList.contains("chip")&&((a=o.closest)==null?void 0:a.call(o,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(r=>r instanceof HTMLElement?r.classList.contains("popover-anchor")||r.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(r=>r instanceof HTMLElement&&(r.classList.contains("dropdown-menu")||r.classList.contains("filter-dropdown")||r.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,r=e.offsetWidth;this._externalLeft+r>i-8&&(e.style.left=`${Math.max(8,i-r-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const r=t==="approval"&&this._isApprovalActive();if(!e&&!this._isFilterActive(t)&&!r){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalActive(){const t=this.filters.applied;return D.STATUS in t||D.APPROVER in t||D.REQUESTOR in t||D.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${xi[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Zt.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var o;const{t:e}=this,s=this.filters.applied,i=t;switch(i===D.STATUS||i===D.APPROVER||i===D.REQUESTOR||i===D.DUE_DATE?"approval":t){case"type":{const a=s.type;return d`<ap-filter-type
          .selected=${(a==null?void 0:a.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const a=s.tags;return d`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(a==null?void 0:a.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const a=s.labels;return d`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(a==null?void 0:a.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const a=s.color;return d`<ap-filter-color
          .values=${(a==null?void 0:a.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const a=s.date;return d`<ap-filter-date
          .filterKey=${"date"}
          .field=${(a==null?void 0:a.field)||"created"}
          .kind=${(a==null?void 0:a.kind)||null}
          .from=${(a==null?void 0:a.from)||""}
          .to=${(a==null?void 0:a.to)||""}
          .preset=${(a==null?void 0:a.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const a=s.asset_expiration;return d`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(a==null?void 0:a.kind)||null}
          .from=${(a==null?void 0:a.from)||""}
          .to=${(a==null?void 0:a.to)||""}
          .preset=${(a==null?void 0:a.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const a=s.size,n=((o=a==null?void 0:a.values)==null?void 0:o[0])||"",[l,c]=n.split(".."),p=l?parseFloat(l)/1e6:0,u=c?parseFloat(c)/1e6:0;return d`<ap-filter-size
          .min=${p}
          .max=${u}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const a=s.image,n=a&&"resolution"in a?a:null;return d`<ap-filter-image
          .selectedResolution=${(n==null?void 0:n.resolution)||[]}
          .selectedOrientation=${(n==null?void 0:n.orientation)||[]}
          .selectedFaces=${(n==null?void 0:n.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const a=s.approval_status,n=s.task_approver,l=s.task_requester,c=s.task_duedate;return d`<ap-filter-approval
          .selectedStatus=${(a==null?void 0:a.values)||[]}
          .statusOperator=${(a==null?void 0:a.operator)||":="}
          .approverValues=${(n==null?void 0:n.values)||[]}
          .approverOperator=${(n==null?void 0:n.operator)||":="}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(l==null?void 0:l.values)||[]}
          .requesterOperator=${(l==null?void 0:l.operator)||":="}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(c==null?void 0:c.kind)??null}
          .dueDatePreset=${(c==null?void 0:c.preset)||""}
          .dueDateFrom=${(c==null?void 0:c.from)||""}
          .dueDateTo=${(c==null?void 0:c.to)||""}
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
          .t=${e}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const a=s.product_ref;return d`<ap-filter-product-ref
          .selected=${(a==null?void 0:a.values)||[]}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return m}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",r=s?Object.keys(this.filters.metadata.applied).length>0:i?this._isApprovalActive():this._isFilterActive(t.key),o=this.pinnedFilters.includes(t.key),a=d`
      <button
        class="filter-btn ${r?"active":""} ${o?"pinned":""}"
        @click=${()=>s?this._toggleMetadataSelector():this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <sfx-icon name=${t.icon} .size=${18}></sfx-icon>
        </span>
        <span class="filter-btn-label"> ${e(t.labelKey,t.label)} </span>
        ${s?d`<span class="submenu-chevron"
              ><sfx-icon name="chevron-right" .size=${14}></sfx-icon
            ></span>`:d`
              <span
                class="pin-btn ${o?"pinned":""}"
                title=${o?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${n=>this._togglePin(t.key,n)}
              >
                <sfx-icon name="pin" .size=${14}></sfx-icon>
              </span>
            `}
      </button>
    `;return s?d`
      <div class="filter-btn-wrapper">
        ${a}
        ${this._showMetadataSelector?d`
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
            `:m}
      </div>
    `:a}render(){const{t}=this,e=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length,s=Zt.filter(i=>!this.forcedFilterKeys.includes(i.key)&&(!this.enabledFilterKeys||this.enabledFilterKeys.includes(i.key)));return d`
      <div class="toolbar-row">
        ${this.isLoading?d`<span class="count-skeleton"></span>`:d`<span class="count"
              >${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span
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
                              title="Back to fields"
                            >
                              <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                            </button>
                            ${this._getMetadataFieldLabel(this._openMetadataField)}
                          `:d`
                            <sfx-icon
                              name=${this._getFilterIcon(this._openFilter)}
                              .size=${16}
                            ></sfx-icon>
                            ${t(_s[this._openFilter]??this._openFilter,Yt[this._openFilter]||this._openFilter)}
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
    `}};U.styles=C`
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
    .metadata-selector-overlay {
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
  `;B([f({type:Number})],U.prototype,"totalCount",2);B([f({type:Number})],U.prototype,"totalFolderCount",2);B([f({type:Boolean})],U.prototype,"isLoading",2);B([f({type:Boolean})],U.prototype,"showUpload",2);B([f({type:Boolean})],U.prototype,"showCreateFolder",2);B([f({type:Boolean})],U.prototype,"showFilters",2);B([f()],U.prototype,"countLabel",2);B([f()],U.prototype,"sortBy",2);B([f()],U.prototype,"sortDirection",2);B([f({type:Array})],U.prototype,"sortOptions",2);B([f({type:Object})],U.prototype,"filters",2);B([f({type:Array})],U.prototype,"labels",2);B([f({type:Array})],U.prototype,"tags",2);B([f({type:Array})],U.prototype,"fileTypes",2);B([f({type:Array})],U.prototype,"metadataFields",2);B([f({type:Array})],U.prototype,"pinnedFilters",2);B([f({type:Array})],U.prototype,"forcedFilterKeys",2);B([f({type:Array})],U.prototype,"enabledFilterKeys",2);B([f({type:Array})],U.prototype,"approverUsers",2);B([f({type:Array})],U.prototype,"requesterUsers",2);B([f({attribute:!1})],U.prototype,"apiClient",2);B([f({attribute:!1})],U.prototype,"t",2);B([vt("sfx-dropdown")],U.prototype,"_sortDropdown",2);B([_()],U.prototype,"_showDropdown",2);B([_()],U.prototype,"_showMetadataSelector",2);B([_()],U.prototype,"_openFilter",2);B([_()],U.prototype,"_openMetadataField",2);B([_()],U.prototype,"_externalTrigger",2);B([_()],U.prototype,"_externalLeft",2);B([_()],U.prototype,"_externalTop",2);U=B([T("ap-content-toolbar")],U);var Yc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var r=i>1?void 0:i?Qc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Yc(e,s,r),r};let Z=class extends A{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t}_mapTypeLabel(t){var i;const e=(i=di.find(r=>r.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),r=s?parseFloat(s):null,o=i?parseFloat(i):null,a=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return r!==null&&o!==null?`${a(r)} – ${a(o)}`:r!==null?`> ${a(r)}`:o!==null?`< ${a(o)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===$.SIZE)return this._getSizeSummary(s);if(e===$.COLOR){const o=s.values.map(a=>a.split(" ")[0]).filter(Boolean);return o.length===0?"":o.length===1?o[0]:`${o[0]} +${o.length-1}`}const i=o=>o===Ce?this.t("empty","Empty"):o===Ae?this.t("notEmpty","Not empty"):null,r=e===$.TYPE?o=>i(o)??this._mapTypeLabel(o):e===$.TAGS?o=>{var a;return i(o)??(((a=this.tags.find(n=>n.sid===o))==null?void 0:a.label)||o)}:e===$.LABELS?o=>{var a;return i(o)??(((a=this.labels.find(n=>n.sid===o))==null?void 0:a.name)||o)}:e===D.APPROVER?o=>{var a;return i(o)??(((a=this.approverUsers.find(n=>n.uuid===o))==null?void 0:a.name)||o)}:e===D.REQUESTOR?o=>{var a;return i(o)??(((a=this.requesterUsers.find(n=>n.uuid===o))==null?void 0:a.name)||o)}:o=>i(o)??o;return s.values.length===1?r(s.values[0]):`${r(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===D.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=i=>i.split("T")[0],s=t.preset||"";if(s===Ce)return this.t("empty","Empty");if(s===Ae)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const i=Uo.find(r=>r.value===s);return i?this.t(i.labelKey,i.label):s}if(t.kind==="between"){if(t.from&&t.to)return`${e(t.from)} – ${e(t.to)}`;if(t.from)return`${this.t("afterDate","After date")}: ${e(t.from)}`;if(t.to)return`${this.t("beforeDate","Before date")}: ${e(t.to)}`}return t.kind==="after"&&t.from?`${this.t("afterDate","After date")}: ${e(t.from)}`:t.kind==="before"&&t.to?`${this.t("beforeDate","Before date")}: ${e(t.to)}`:t.kind==="specific"&&t.from?e(t.from):""}_getDateSummary(t){const e=No.find(l=>l.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...Ji,...jo],r=t.preset?i.find(l=>l.value===t.preset):null,o=r?this.t(r.labelKey,r.label):t.preset||"",a=l=>{try{return l.split("T")[0]}catch{return l}};let n="";switch(t.kind){case"preset":n=o;break;case"before":n=t.to?`${this.t("beforeDate","Before date")}: ${a(t.to)}`:o;break;case"after":n=t.from?`${this.t("afterDate","After date")}: ${a(t.from)}`:o;break;case"between":t.from&&t.to?n=`${a(t.from)} – ${a(t.to)}`:t.from?n=`${this.t("afterDate","After date")}: ${a(t.from)}`:t.to&&(n=`${this.t("beforeDate","Before date")}: ${a(t.to)}`);break;case"specific":n=t.from?a(t.from):"";break;default:n=o}return n?s?`${s}: ${n}`:n:""}_getFilterIcon(t){var e,s;return t===D.STATUS||t===D.APPROVER||t===D.REQUESTOR||t===D.DUE_DATE?((e=Zt.find(i=>i.key===$.APPROVAL))==null?void 0:e.icon)||"filter":((s=Zt.find(i=>i.key===t))==null?void 0:s.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&ti[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of Io)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const{t:s}=this,i=this._getFilterSummary(e,t),r=e.type==="date";return d`
      <span class="chip forced">
        ${(r||t===$.TYPE||t===$.SIZE)&&i?d`<span class="chip-label">${i}</span>`:d`
              <span class="chip-label"
                >${s(_s[t]??t,Yt[t]||t)}</span
              >
              ${i?d`<span class="chip-summary">${i}</span>`:m}
            `}
        <span class="chip-lock">
          <sfx-icon name="lock" .size=${12}></sfx-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return d`
        <span
          class="chip pinned-empty ${t===this.activeFilter?"active":""}"
          @click=${o=>this._openFilter(t,o)}
        >
          <span class="chip-icon"
            ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
          ></span>
          <span class="chip-label"
            >${s(_s[t]??t,Yt[t]||t)}</span
          >
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),r=e.type==="date";return d`
      <span
        class="chip ${t===this.activeFilter?"active":""}"
        @click=${o=>this._openFilter(t,o)}
      >
        ${(r||t===$.TYPE||t===$.SIZE)&&i?d` <span class="chip-icon"
                ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
              ></span>
              <span class="chip-label">${i}</span>`:d`
              <span class="chip-label"
                >${s(_s[t]??t,Yt[t]||t)}</span
              >
              ${i?d`<span class="chip-summary">${i}</span>`:m}
            `}
        <button
          class="chip-remove"
          @click=${o=>{o.stopPropagation(),this._removeFilter(t)}}
          title=${s("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const o=this._getMetadataLabel(t),a=this._getMetadataIcon(t);return d`
        <span
          class="chip pinned-empty ${t===this.activeMetadataField?"active":""}"
          @click=${n=>this._openMetadataFilter(t,n)}
        >
          <span class="chip-icon"><sfx-icon name=${a} .size=${16}></sfx-icon></span>
          <span class="chip-label">${o}</span>
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),r=this._getMetadataIcon(t);return d`
      <span
        class="chip ${t===this.activeMetadataField?"active":""}"
        @click=${o=>this._openMetadataFilter(t,o)}
      >
        <span class="chip-icon"><sfx-icon name=${r} .size=${16}></sfx-icon></span>
        <span class="chip-label">${i}</span>
        ${s?d`<span class="chip-summary">${s}</span>`:m}
        <button
          class="chip-remove"
          @click=${o=>{o.stopPropagation(),this._removeMetadataFilter(t)}}
          title=${this.t("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}render(){const t=Ki(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),r=new Set(this.pinnedFilters),o=new Set(this.pinnedMetadataFields),a=this.pinnedFilters.filter(g=>!e.has(g)),n=s.filter(g=>!r.has(g)),l=i.filter(g=>!o.has(g)),c=this.pendingFilter&&!r.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),p=this.pendingMetadataField&&!o.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),u=s.length+i.length>0;return e.size+a.length+this.pinnedMetadataFields.length+n.length+l.length+(c?1:0)+(p?1:0)===0?m:d`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${a.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${n.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${c?d`
                <span
                  class="chip pinned-empty active pending"
                  @click=${g=>this._openFilter(this.pendingFilter,g)}
                >
                  <span class="chip-icon"
                    ><sfx-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(_s[this.pendingFilter]??this.pendingFilter,Yt[this.pendingFilter]||this.pendingFilter)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:m}
          ${l.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${p?d`
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
              `:m}
          ${u?d`<button class="clear-all" @click=${this._clearAll}>
                ${this.t("clearFilters","Clear filters")}
              </button>`:m}
        </div>
      </div>
    `}};Z.styles=C`
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
  `;le([f({type:Object})],Z.prototype,"appliedFilters",2);le([f({type:Object})],Z.prototype,"appliedMetadata",2);le([f({type:Object})],Z.prototype,"forcedFilters",2);le([f({type:Array})],Z.prototype,"metadataFields",2);le([f({type:Array})],Z.prototype,"pinnedFilters",2);le([f({type:Array})],Z.prototype,"pinnedMetadataFields",2);le([f({type:Array})],Z.prototype,"tags",2);le([f({type:Array})],Z.prototype,"labels",2);le([f({type:Array})],Z.prototype,"approverUsers",2);le([f({type:Array})],Z.prototype,"requesterUsers",2);le([f()],Z.prototype,"activeFilter",2);le([f()],Z.prototype,"activeMetadataField",2);le([f()],Z.prototype,"pendingFilter",2);le([f()],Z.prototype,"pendingMetadataField",2);le([f({attribute:!1})],Z.prototype,"t",2);Z=le([T("ap-filters-bar")],Z);var Wc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,Fe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xc(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Wc(e,s,r),r};const Jc=6;let he=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return d`
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
              .index=${this.folderSelectable?this.folders.length+s:s}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              .multiSelect=${this.multiSelect}
              ${R({"--sfx-stagger-index":String(i)})}
              data-asset-uuid=${e.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-card>
          `})}
        ${this.isLoading?Array.from({length:Jc},()=>d`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                  </div>
                </div>`):m}
      </div>
    `}};he.styles=C`
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
  `;Fe([f({attribute:!1})],he.prototype,"t",2);Fe([f({type:Array})],he.prototype,"assets",2);Fe([f({type:Array})],he.prototype,"folders",2);Fe([f({type:Object})],he.prototype,"folderPreviews",2);Fe([f({type:Array})],he.prototype,"selectedIds",2);Fe([f({type:Array})],he.prototype,"selectedFolderIds",2);Fe([f({type:Array})],he.prototype,"disabledAssetIds",2);Fe([f({type:Array})],he.prototype,"disabledFolderIds",2);Fe([f({type:Boolean})],he.prototype,"isLoading",2);Fe([f({type:Boolean})],he.prototype,"multiSelect",2);Fe([f({type:Boolean})],he.prototype,"folderSelectable",2);Fe([f({type:String})],he.prototype,"gridSize",2);he=Fe([T("ap-grid-view")],he);var Zc=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,ue=(t,e,s,i)=>{for(var r=i>1?void 0:i?ed(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Zc(e,s,r),r};const td=5;let te=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(r=>t.has(r.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(r=>s.has(r.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return d`
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
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              ?disabled=${this.disabledFolderIds.includes(i.uuid)}
              .index=${r}
              data-folder-uuid=${i.uuid}
              @folder-open=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:o.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:o.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,r)=>d`
            <ap-asset-row
              .asset=${i}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+r:r}
              ?selected=${this.selectedIds.includes(i.uuid)}
              ?disabled=${this.disabledAssetIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${i.uuid}
              @asset-select=${o=>this.dispatchEvent(new CustomEvent("asset-select",{detail:o.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${o=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:o.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${o=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:o.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:td},(i,r)=>{const o=["70%","55%","80%","45%","65%"];return d`
                <div
                  class="ghost-row"
                  ${R({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
                >
                  ${this.multiSelect?d`<div class="ghost-el ghost-check"></div>`:m}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${R({width:o[r]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?d`<div class="ghost-el ghost-size"></div>`:m}
                  ${this._compactLevel<1?d`<div class="ghost-el ghost-date"></div>`:m}
                  <div></div>
                </div>
              `}):m}
      </div>
    `}};te.styles=C`
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
  `;ue([f({attribute:!1})],te.prototype,"t",2);ue([f({type:Array})],te.prototype,"assets",2);ue([f({type:Array})],te.prototype,"folders",2);ue([f({type:Array})],te.prototype,"selectedIds",2);ue([f({type:Array})],te.prototype,"selectedFolderIds",2);ue([f({type:Array})],te.prototype,"disabledAssetIds",2);ue([f({type:Array})],te.prototype,"disabledFolderIds",2);ue([f({type:Boolean})],te.prototype,"isLoading",2);ue([f({type:Boolean})],te.prototype,"multiSelect",2);ue([f({type:Boolean})],te.prototype,"folderSelectable",2);ue([f({type:Number})],te.prototype,"totalCount",2);ue([f({type:Boolean})],te.prototype,"isSelectingAll",2);ue([f({type:Object})],te.prototype,"folderPreviews",2);ue([_()],te.prototype,"_compactLevel",2);te=ue([T("ap-list-view")],te);function ir(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function pi(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Qo(t,e){return!t||!e?"":`${t} x ${e}`}var sd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,Nt=(t,e,s,i)=>{for(var r=i>1?void 0:i?id(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&sd(e,s,r),r};let it=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),r=o=>String(o).padStart(2,"0");return e>0?`${e}:${r(s)}:${r(i)}`:`${r(s)}:${r(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var c,p,u,h,g,v,y,x;const t=this.asset;if(!t)return d``;const s=Qt(t.type)==="video",i=((c=t.extension)==null?void 0:c.toLowerCase())==="pdf",r=!!((p=t.info)!=null&&p.thumbnail||(u=t.info)!=null&&u.image_thumbnail||(h=t.info)!=null&&h.preview),o=To(t.extension||"")||r;let a="";s?a=Oo(t):i?a=Xi(t):o&&(a=ci(t));const n=Us(t.extension||""),l=Wi(t.extension||"");return d`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${l&&a?"chess":""}">
          ${a?d`<img
                src=${a}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${l?"transparent-asset":""}"
                @error=${w=>{const k=w.target,L=Xt();k.src!==n&&k.src!==L?(k.src=n,k.classList.add("icon-fallback")):k.src!==L&&(k.src=L)}}
              />`:d`<img
                src=${n}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${w=>{const k=w.target,L=Xt();k.src!==L&&(k.src=L)}}
              />`}
          ${s&&(((g=t.info)==null?void 0:g.video_duration)??((v=t.info)==null?void 0:v.duration))!=null?d`<span class="duration"
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
          <div class="meta">
            ${(y=t.extension)==null?void 0:y.toUpperCase()}${(()=>{var O,E,z,S;const w=((O=t.info)==null?void 0:O.img_w)||((E=t.info)==null?void 0:E.video_w),k=((z=t.info)==null?void 0:z.img_h)||((S=t.info)==null?void 0:S.video_h),L=Qo(w,k);return L?` · ${L}`:""})()}
            · ${ir(((x=t.size)==null?void 0:x.bytes)||0)}
          </div>
        </div>
      </div>
    `}};it.styles=C`
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
      overflow: hidden;
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
      padding: 10px 12px;
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
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
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
    @media (prefers-reduced-motion: reduce) {
      :host {
        animation: none;
      }
      .overlay {
        transition: none;
      }
    }
  `;Nt([f({attribute:!1})],it.prototype,"t",2);Nt([f({type:Object})],it.prototype,"asset",2);Nt([f({type:Number})],it.prototype,"index",2);Nt([f({type:Boolean,reflect:!0})],it.prototype,"selected",2);Nt([f({type:Boolean,reflect:!0})],it.prototype,"disabled",2);Nt([f({type:Boolean})],it.prototype,"multiSelect",2);it=Nt([T("ap-asset-card")],it);var rd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,_t=(t,e,s,i)=>{for(var r=i>1?void 0:i?od(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&rd(e,s,r),r};let Ge=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var c,p,u,h,g,v;const t=this.asset;if(!t)return d``;const s=Qt(t.type)==="video",i=((c=t.extension)==null?void 0:c.toLowerCase())==="pdf",r=!!((p=t.info)!=null&&p.thumbnail||(u=t.info)!=null&&u.image_thumbnail||(h=t.info)!=null&&h.preview),o=To(t.extension||"")||r;let a="";s?a=Oo(t):i?a=Xi(t):o&&(a=ci(t));const n=Us(t.extension||""),l=Wi(t.extension||"");return d`
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
        <div class="thumb ${l&&a?"chess":""}">
          ${a?d`<img
                src=${a}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${y=>{const x=y.target,w=Xt();x.src!==n&&x.src!==w?(x.src=n,x.classList.add("icon-fallback")):x.src!==w&&(x.src=w)}}
              />`:d`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${y=>{const x=y.target,w=Xt();x.src!==w&&(x.src=w)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(g=t.extension)==null?void 0:g.toUpperCase()}</div>
        ${this.compactLevel<2?d`<div class="desc">${ir(((v=t.size)==null?void 0:v.bytes)||0)}</div>`:m}
        ${this.compactLevel<1?d`<div class="date">${pi(t.created_at||"")}</div>`:m}
        <div class="actions">
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
        </div>
      </div>
    `}};Ge.styles=C`
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
  `;_t([f({attribute:!1})],Ge.prototype,"t",2);_t([f({type:Object})],Ge.prototype,"asset",2);_t([f({type:Number})],Ge.prototype,"index",2);_t([f({type:Boolean,reflect:!0})],Ge.prototype,"selected",2);_t([f({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);_t([f({type:Boolean})],Ge.prototype,"multiSelect",2);_t([f({type:Number})],Ge.prototype,"compactLevel",2);Ge=_t([T("ap-asset-row")],Ge);var ad=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,yt=(t,e,s,i)=>{for(var r=i>1?void 0:i?nd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&ad(e,s,r),r};let Ye=class extends A{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return Po(t,"200")}_renderPreviewImg(t){const e=Lo(t.file_type),s=this._getPreviewUrl(t),i=Us(bi(t.file_type)),r=Xt();return d`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${o=>{const a=o.target,n=a.parentElement;a.src!==i&&a.src!==r?(a.src=i,a.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):a.src!==r&&(a.src=r,a.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
        @load=${o=>{const a=o.target,n=a.parentElement;a.src.includes("assets/file-types")&&(a.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return d`<div class="empty-preview"><sfx-icon name="inbox" .size=${64}></sfx-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?d`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:d`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?d`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:m}
        </div>
      </div>
    `}render(){var r,o;const t=this.folder;if(!t)return d``;const e=((r=t.count)==null?void 0:r.files_direct)??0,i=(((o=t.count)==null?void 0:o.files_recursive)??0)-e;return d`
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
    `}};Ye.styles=[Ie,C`
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
    `];yt([f({type:Object})],Ye.prototype,"folder",2);yt([f({type:Array})],Ye.prototype,"previews",2);yt([f({type:Boolean,reflect:!0})],Ye.prototype,"selected",2);yt([f({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);yt([f({type:Boolean})],Ye.prototype,"selectable",2);yt([f({type:Boolean})],Ye.prototype,"multiSelect",2);yt([f({type:Number})],Ye.prototype,"index",2);Ye=yt([T("ap-folder-card")],Ye);var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,nt=(t,e,s,i)=>{for(var r=i>1?void 0:i?cd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&ld(e,s,r),r};let Ne=class extends A{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=Lo(t.file_type),s=Po(t,"80"),i=Us(bi(t.file_type)),r=Xt();return d`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${o=>{const a=o.target,n=a.parentElement;a.src!==i&&a.src!==r?(a.src=i,a.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):a.src!==r&&(a.src=r,a.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
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
        ${this.compactLevel<1?d`<div class="meta">${pi(t.modified_at||t.updated_at||"")}</div>`:m}
        <div></div>
      </div>
    `:d``}};Ne.styles=C`
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
  `;nt([f({type:Object})],Ne.prototype,"folder",2);nt([f({type:Array})],Ne.prototype,"previews",2);nt([f({type:Boolean,reflect:!0})],Ne.prototype,"selected",2);nt([f({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);nt([f({type:Boolean})],Ne.prototype,"selectable",2);nt([f({type:Boolean})],Ne.prototype,"multiSelect",2);nt([f({type:Number})],Ne.prototype,"index",2);nt([f({type:Number})],Ne.prototype,"compactLevel",2);Ne=nt([T("ap-folder-row")],Ne);var dd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,rr=(t,e,s,i)=>{for(var r=i>1?void 0:i?hd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&dd(e,s,r),r};let Ts=class extends A{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return d``;const e=t.assets_count??0,s=t.color||"#94a3b8";return d`
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
    `}};Ts.styles=[Ie,C`
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
    `];rr([f({type:Object})],Ts.prototype,"label",2);rr([f({type:Number})],Ts.prototype,"index",2);Ts=rr([T("ap-label-card")],Ts);var pd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,or=(t,e,s,i)=>{for(var r=i>1?void 0:i?ud(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&pd(e,s,r),r};let Ls=class extends A{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return d``;const e=t.assets_count??0,s=t.color||"#94a3b8";return d`
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
    `}};Ls.styles=C`
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
  `;or([f({type:Object})],Ls.prototype,"label",2);or([f({type:Number})],Ls.prototype,"index",2);Ls=or([T("ap-label-row")],Ls);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,ar=(t,e,s,i)=>{for(var r=i>1?void 0:i?gd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&fd(e,s,r),r};let Os=class extends A{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?d`
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
    `:d``}};Os.styles=[Ie,C`
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
    `];ar([f({type:Object})],Os.prototype,"collection",2);ar([f({type:Number})],Os.prototype,"index",2);Os=ar([T("ap-collection-card")],Os);var md=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,nr=(t,e,s,i)=>{for(var r=i>1?void 0:i?vd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&md(e,s,r),r};let Ps=class extends A{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?d`
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
    `:d``}};Ps.styles=C`
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
  `;nr([f({type:Object})],Ps.prototype,"collection",2);nr([f({type:Number})],Ps.prototype,"index",2);Ps=nr([T("ap-collection-row")],Ps);var bd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,lr=(t,e,s,i)=>{for(var r=i>1?void 0:i?xd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&bd(e,s,r),r};let Is=class extends A{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?d`
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
    `:d``}};Is.styles=[Ie,C`
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
    `];lr([f({type:Object})],Is.prototype,"folder",2);lr([f({type:Number})],Is.prototype,"index",2);Is=lr([T("ap-collection-folder-card")],Is);var _d=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,cr=(t,e,s,i)=>{for(var r=i>1?void 0:i?yd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&_d(e,s,r),r};let Ds=class extends A{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?d`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:d``}};Ds.styles=C`
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
  `;cr([f({type:Object})],Ds.prototype,"folder",2);cr([f({type:Number})],Ds.prototype,"index",2);Ds=cr([T("ap-collection-folder-row")],Ds);var $d=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,os=(t,e,s,i)=>{for(var r=i>1?void 0:i?wd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&$d(e,s,r),r};let mt=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const a=this.gridSize==="large"?"280px":"220px";return d`
        <div class="grid-skeleton" ${R({"--sfx-grid-min-col":String(a)})}>
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
    `,i=a=>d`
      <div class="row-skel" ${R({"grid-template-columns":e})}>
        ${this.multiSelect?d`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${R({width:a})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,r=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],o=12-this.folderCount;return d`
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
      ${Array.from({length:o},(a,n)=>i(r[n%r.length]))}
    `}};mt.styles=C`
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
  `;os([f({attribute:!1})],mt.prototype,"t",2);os([f({reflect:!0})],mt.prototype,"variant",2);os([f({type:String})],mt.prototype,"gridSize",2);os([f({type:Boolean})],mt.prototype,"multiSelect",2);os([f({type:Number})],mt.prototype,"folderCount",2);mt=os([T("ap-skeleton")],mt);var kd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,ie=(t,e,s,i)=>{for(var r=i>1?void 0:i?Sd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&kd(e,s,r),r};let X=class extends A{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.t=(t,e)=>typeof e=="string"?e:t,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=Qt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,r;const e=Kn(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:o}=await K(async()=>{const{default:n}=await import("./hls.light-CLqSdhbI.js");return{default:n}},[]);if(!o.isSupported()||((r=this.asset)==null?void 0:r.uuid)!==t.uuid||!this.isConnected)return;const a=new o;this._hls=a,a.loadSource(e),a.attachMedia(s),a.on(o.Events.ERROR,(n,l)=>{var c;l.fatal&&(this._destroyHls(),s.src=((c=t.url)==null?void 0:c.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,r,o,a;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((r=(i=this.asset)==null?void 0:i.url)!=null&&r.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(a=(o=this.previewArea)==null?void 0:o.requestFullscreen)==null||a.call(o)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=Qt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var r,o;const e=(r=t.url)==null?void 0:r.cdn;if(!e)return ci(t)||"";const s={source:"asset",asset:t};if(((o=t.extension)==null?void 0:o.toLowerCase())==="svg")return Ze(e,s);const i=Jt(e,this.containerToken);return Ze(Lt(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var a,n;const e=(a=t.info)==null?void 0:a.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,r=window.innerHeight,o=Math.min(i/e,r/s,1);return{width:`${Math.round(e*o)}px`,height:`${Math.round(s*o)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(r=>!r.label||i.has(r.sid)?!1:(i.add(r.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:$.TAGS,values:[t],operator:M.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:$.LABELS,values:[t],operator:M.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return m;const s=this._openSections.has("file-info");return d`
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
                <span class="meta-value" title=${r.value}>${r.value}</span>
              </div>
            `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,r,o,a,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:ir(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:Qo(t.info.img_w,t.info.img_h)}),(r=t.info)!=null&&r.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((o=t.info)==null?void 0:o.video_duration)??((a=t.info)==null?void 0:a.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:pi(t.created_at)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:pi(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(r=>r.internal_unique_value===t||r.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const r=t[i];if(r!=null&&r!=="")return this._resolveFieldValue(r,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(r=>this._resolveSlug(String(r),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var o,a,n,l;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const c=t;for(const p of this.metadataFields){const u=c[p.key]??((a=(o=t.info)==null?void 0:o.metadata)==null?void 0:a[p.key])??((n=t.meta)==null?void 0:n[p.key]),h=this._resolveFieldValue(u,p);if(!h)continue;i.add(p.key),p.slug&&i.add(p.slug);const g=h.length>50;e.push({label:p.label,value:h,wrap:g})}}if(t.meta)for(const[c,p]of Object.entries(t.meta)){if(i.has(c)||p==null||p==="")continue;const u=s.get(c);if(u){const h=this._resolveFieldValue(p,u);if(!h)continue;i.add(c);const g=h.length>50;e.push({label:u.label,value:h,wrap:g})}else{const h=typeof p=="object"?JSON.stringify(p):String(p);if(!h||h==="{}"||h==="[]")continue;i.add(c);const g=c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),v=h.length>50;e.push({label:g,value:h,wrap:v})}}const r=(l=t.info)==null?void 0:l.metadata;if(r&&typeof r=="object")for(const[c,p]of Object.entries(r)){if(i.has(c)||p==null||p==="")continue;const u=s.get(c);if(u){const h=this._resolveFieldValue(p,u);if(!h)continue;i.add(c);const g=h.length>50;e.push({label:u.label,value:h,wrap:g})}else{const h=typeof p=="object"?JSON.stringify(p):String(p);if(!h||h==="{}"||h==="[]")continue;i.add(c);const g=c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),v=h.length>50;e.push({label:g,value:h,wrap:v})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?m:d`
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
                  <sfx-icon name="tag" .size=${12} ${R({color:s.color||"#94a3b8"})}></sfx-icon>
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
    `}render(){var O,E,z,S,V,N,F,Q;const t=this.asset;if(!t)return m;const e=Qt(t.type),s=e==="image",i=e==="video",r=e==="audio",o=((O=t.extension)==null?void 0:O.toLowerCase())==="pdf",a=Us(t.extension||""),n=Wi(t.extension||""),l=((E=t.extension)==null?void 0:E.toLowerCase())==="svg",c=ci(t),p=s?l?Ze(((z=t.url)==null?void 0:z.cdn)||"",{source:"asset",asset:t}):c||Ze(Jt(((S=t.url)==null?void 0:S.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",u=s?this._getFullscreenImageUrl(t):"",h=s&&!l?this._getBlurDimensions(t):null,g=i&&((V=t.url)==null?void 0:V.cdn)||"",v=i?Ze(((N=t.info)==null?void 0:N.video_thumbnail)||((F=t.info)==null?void 0:F.preview)||"",{source:"video",asset:t}):"",y=o&&!s?Xi(t):"",x=this._getCurrentIndex(),w=x>0&&this._findNavTarget(x,-1)>=0,k=x>=0&&this._findNavTarget(x,1)>=0,L=this.assets.length>1;return d`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button
              class="icon-btn"
              @click=${this._fullscreen}
              ?disabled=${!s&&!i&&!r&&!o}
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
          ${L?d`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!w}
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
                  @load=${ge=>{ge.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
                  @error=${ge=>{const Y=ge.target;this._previewLoading=!1,Y.src!==a&&(Y.src=a,Y.classList.add("icon-fallback"))}}
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
                    src=${this._isFullscreen?u:""}
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
          ${r?d`<audio src=${((Q=t.url)==null?void 0:Q.cdn)||""} controls></audio>`:m}
          ${o&&!s?d`
                <img
                  src=${y||a}
                  alt=${t.name}
                  class=${y?"":"icon-fallback"}
                  @error=${ge=>{const Y=ge.target;Y.src!==a&&(Y.src=a,Y.classList.add("icon-fallback"))}}
                />
              `:m}
          ${!s&&!i&&!r&&!o?d`<img src=${a} alt=${t.name} class="icon-fallback" />`:m}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?d`
              ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
            `:m}
      </div>
    `}};X.styles=C`
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
  `;ie([f({type:Object})],X.prototype,"asset",2);ie([f({type:Array})],X.prototype,"assets",2);ie([f({type:Array})],X.prototype,"selectedIds",2);ie([f()],X.prototype,"containerToken",2);ie([f({type:Boolean})],X.prototype,"showMetadata",2);ie([f({type:Array})],X.prototype,"metadataFields",2);ie([f({type:Array})],X.prototype,"labels",2);ie([f({type:Object})],X.prototype,"regionalFilters",2);ie([f({type:Boolean})],X.prototype,"multiSelect",2);ie([f({attribute:!1})],X.prototype,"t",2);ie([vt(".preview-area")],X.prototype,"previewArea",2);ie([vt("video")],X.prototype,"_videoEl",2);ie([_()],X.prototype,"_isFullscreen",2);ie([_()],X.prototype,"_fsImageLoaded",2);ie([_()],X.prototype,"_previewLoading",2);ie([_()],X.prototype,"_openSections",2);X=ie([T("ap-preview-panel")],X);var Cd=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,dr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ad(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Cd(e,s,r),r};const Ed={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}],link:[{tag:"path",attrs:{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"}},{tag:"path",attrs:{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"}}],move:[{tag:"path",attrs:{d:"M5 9 2 12l3 3"}},{tag:"path",attrs:{d:"M9 5l3-3 3 3"}},{tag:"path",attrs:{d:"M15 19l-3 3-3-3"}},{tag:"path",attrs:{d:"M19 9l3 3-3 3"}},{tag:"path",attrs:{d:"M2 12h20"}},{tag:"path",attrs:{d:"M12 2v20"}}],pencil:[{tag:"path",attrs:{d:"M12 20h9"}},{tag:"path",attrs:{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"}}],unlock:[{tag:"rect",attrs:{x:"5",y:"11",width:"14",height:"10",rx:"2"}},{tag:"path",attrs:{d:"M8 11V7a4 4 0 0 1 7.5-2"}}],star:[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z"}}],"star-filled":[{tag:"path",attrs:{d:"m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z",fill:"currentColor"}}],dot:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"5",fill:"currentColor"}}]};let Ms=class extends A{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=Ed[this.name];if(!t)return m;const e=typeof t=="string"?pt`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:r}=s;return i==="circle"?pt`<circle cx=${r.cx} cy=${r.cy} r=${r.r} fill=${r.fill??"none"}></circle>`:i==="rect"?pt`<rect width=${r.width} height=${r.height} x=${r.x} y=${r.y} rx=${r.rx??"0"} ry=${r.ry??"0"}></rect>`:pt`<path d=${r.d} fill=${r.fill??"none"}></path>`});return d`
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
    `}};Ms.styles=[C`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];dr([f()],Ms.prototype,"name",2);dr([f({type:Number})],Ms.prototype,"size",2);Ms=dr([T("sfx-icon")],Ms);var Fd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Wo=(t,e,s,i)=>{for(var r=i>1?void 0:i?Td(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Fd(e,s,r),r};let ui=class extends A{constructor(){super(...arguments),this.size=24}render(){return d`<div
      class="spinner"
      ${R({width:`${this.size}px`,height:`${this.size}px`})}
    ></div>`}};ui.styles=[C`
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
    `];Wo([f({type:Number})],ui.prototype,"size",2);ui=Wo([T("sfx-spinner")],ui);var Ld=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,Xo=(t,e,s,i)=>{for(var r=i>1?void 0:i?Od(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Ld(e,s,r),r};let fi=class extends A{constructor(){super(...arguments),this.variant="default"}render(){return d`<span class="badge"><slot></slot></span>`}};fi.styles=[C`
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
    `];Xo([f({reflect:!0})],fi.prototype,"variant",2);fi=Xo([T("sfx-badge")],fi);var Pd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,hr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Id(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Pd(e,s,r),r};let Rs=class extends A{constructor(){super(...arguments),this.text="",this.placement="top"}render(){return d`
      <slot></slot>
      <div class="tip ${this.placement==="bottom"?"bottom":""}">${this.text}</div>
    `}};Rs.styles=[C`
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
    `];hr([f()],Rs.prototype,"text",2);hr([f()],Rs.prototype,"placement",2);Rs=hr([T("sfx-tooltip")],Rs);var Dd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,pr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Md(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Dd(e,s,r),r};let zs=class extends A{constructor(){super(...arguments),this.open=!1,this.align="start",this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},this._handleKeyDown=t=>{t.key==="Escape"&&this.open&&(this.open=!1)}}render(){return d`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.align==="end"?"end":""} ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}};zs.styles=[C`
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
    `];pr([_()],zs.prototype,"open",2);pr([f()],zs.prototype,"align",2);zs=pr([T("sfx-popover")],zs);var Rd=Object.defineProperty,zd=Object.getOwnPropertyDescriptor,_i=(t,e,s,i)=>{for(var r=i>1?void 0:i?zd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Rd(e,s,r),r};let es=class extends A{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("sfx-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return d`
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
    `}};es.styles=[C`
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
    `];_i([f({type:Boolean,reflect:!0})],es.prototype,"checked",2);_i([f({type:Boolean,reflect:!0})],es.prototype,"indeterminate",2);_i([f({type:Boolean,reflect:!0})],es.prototype,"disabled",2);es=_i([T("sfx-checkbox")],es);var Nd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,jt=(t,e,s,i)=>{for(var r=i>1?void 0:i?jd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Nd(e,s,r),r};let rt=class extends A{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(r=>!this.disabled&&!r.disabled);if(e.length===0)return;const s=e.findIndex(r=>r.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return d`
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
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:e},bubbles:!0,composed:!0}))}};rt.styles=[Ks,C`
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
    `];jt([f()],rt.prototype,"value",2);jt([f({type:Array})],rt.prototype,"options",2);jt([f({type:Boolean})],rt.prototype,"disabled",2);jt([f({type:Boolean})],rt.prototype,"clearable",2);jt([f({reflect:!0})],rt.prototype,"direction",2);jt([f({reflect:!0})],rt.prototype,"columns",2);rt=jt([T("sfx-radio-group")],rt);var Ud=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,fe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Kd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Ud(e,s,r),r};let se=class extends A{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="sfx-dropdown-menu";return d`
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
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("sfx-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const r=window.innerWidth-t.left;this._menuAlign=r<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,r;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),t.stopPropagation(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(r=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||r.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};se.styles=[Ks,C`
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
    `];fe([f()],se.prototype,"value",2);fe([f()],se.prototype,"label",2);fe([f({reflect:!0})],se.prototype,"variant",2);fe([f({type:Boolean})],se.prototype,"clearable",2);fe([f({type:Array})],se.prototype,"options",2);fe([_()],se.prototype,"_open",2);fe([_()],se.prototype,"_focusedIndex",2);fe([_()],se.prototype,"_menuPosition",2);fe([_()],se.prototype,"_menuAlign",2);fe([_()],se.prototype,"_menuTop",2);fe([_()],se.prototype,"_menuBottom",2);fe([_()],se.prototype,"_menuLeft",2);fe([_()],se.prototype,"_menuRight",2);fe([_()],se.prototype,"_menuWidth",2);se=fe([T("sfx-dropdown")],se);var Bd=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,Hs=(t,e,s,i)=>{for(var r=i>1?void 0:i?Vd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Bd(e,s,r),r};let Dt=class extends A{constructor(){super(...arguments),this.heading="File info",this.rows=[],this.collapsible=!1,this.open=!0}toggle(){this.collapsible&&(this.open=!this.open)}renderHead(){const t=d`<span>${this.heading}</span><span class="spacer"></span>`;return this.collapsible?d`<button
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
    `}};Dt.styles=C`
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
  `;Hs([f()],Dt.prototype,"heading",2);Hs([f({attribute:!1})],Dt.prototype,"rows",2);Hs([f({type:Boolean})],Dt.prototype,"collapsible",2);Hs([f({type:Boolean,reflect:!0})],Dt.prototype,"open",2);Dt=Hs([T("sfx-asset-info")],Dt);var Hd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,ur=(t,e,s,i)=>{for(var r=i>1?void 0:i?qd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Hd(e,s,r),r};let Ns=class extends A{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?d``:d`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>d`
            <sfx-icon name="chevron-right" .size=${14}></sfx-icon>
            ${e<this.items.length-1?d`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:d`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Ns.styles=C`
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
  `;ur([f({type:Array})],Ns.prototype,"items",2);ur([f()],Ns.prototype,"rootLabel",2);Ns=ur([T("sfx-breadcrumb")],Ns);var Gd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Te=(t,e,s,i)=>{for(var r=i>1?void 0:i?Yd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Gd(e,s,r),r};let q=class extends A{constructor(){super(...arguments),this.kind="confirm",this.heading="",this.message="",this.value="",this.placeholder="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.danger=!1,this.loading=!1,this.confirmDisabled=!1,this.error=null,this._handleDocKeyDown=t=>{t.key==="Escape"&&q._stack[q._stack.length-1]===this&&(t.preventDefault(),this._cancel())}}connectedCallback(){super.connectedCallback(),q._stack.push(this),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t,e;(t=this._input)==null||t.focus(),(e=this._input)==null||e.select()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),q._stack=q._stack.filter(t=>t!==this),super.disconnectedCallback()}get inputValue(){var t;return(((t=this._input)==null?void 0:t.value)??this.value).trim()}_onInput(t){this.dispatchEvent(new CustomEvent("sfx-dialog-input",{detail:{value:t.target.value},bubbles:!0,composed:!0}))}_confirm(){this.loading||this.confirmDisabled||this.dispatchEvent(new CustomEvent("sfx-dialog-confirm",{detail:{value:this.kind==="prompt"?this.inputValue:""},bubbles:!0,composed:!0}))}_cancel(){this.dispatchEvent(new CustomEvent("sfx-dialog-cancel",{bubbles:!0,composed:!0}))}_onBackdrop(t){t.target===t.currentTarget&&this._cancel()}_onInputKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._confirm())}render(){return d`
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
    `}};q.styles=[Ks,Yo,C`
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
    `];q._stack=[];Te([f()],q.prototype,"kind",2);Te([f()],q.prototype,"heading",2);Te([f()],q.prototype,"message",2);Te([f()],q.prototype,"value",2);Te([f()],q.prototype,"placeholder",2);Te([f()],q.prototype,"confirmLabel",2);Te([f()],q.prototype,"cancelLabel",2);Te([f({type:Boolean})],q.prototype,"danger",2);Te([f({type:Boolean})],q.prototype,"loading",2);Te([f({type:Boolean})],q.prototype,"confirmDisabled",2);Te([f()],q.prototype,"error",2);Te([vt("input")],q.prototype,"_input",2);q=Te([T("sfx-dialog")],q);var Qd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,Ut=(t,e,s,i)=>{for(var r=i>1?void 0:i?Wd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Qd(e,s,r),r};function vs(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function oo(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}let ot=class extends A{constructor(){super(...arguments),this.value=null,this.minDate=null,this.maxDate=null,this.locale="",this._viewYear=0,this._viewMonth=0,this._viewInitialized=!1}willUpdate(){if(!this._viewInitialized){this._viewInitialized=!0;const t=this.value??new Date;this._viewYear=t.getFullYear(),this._viewMonth=t.getMonth()}}get _locale(){return this.locale||document.documentElement.lang||"en"}get _monthOptions(){const t=new Intl.DateTimeFormat(this._locale,{month:"long"});return Array.from({length:12},(e,s)=>({value:String(s),label:t.format(new Date(2e3,s,1))}))}get _yearOptions(){var s,i;const t=((s=this.minDate)==null?void 0:s.getFullYear())??this._viewYear-10,e=((i=this.maxDate)==null?void 0:i.getFullYear())??this._viewYear+10;return Array.from({length:e-t+1},(r,o)=>{const a=t+o;return{value:String(a),label:String(a)}})}get _weekdayLabels(){const t=new Intl.DateTimeFormat(this._locale,{weekday:"short"});return Array.from({length:7},(e,s)=>{const i=t.format(new Date(2e3,0,3+s)).slice(0,2);return i.charAt(0).toUpperCase()+i.slice(1)})}get _days(){const e=(new Date(this._viewYear,this._viewMonth,1).getDay()+6)%7,s=new Date(this._viewYear,this._viewMonth,1-e);return Array.from({length:42},(i,r)=>{const o=new Date(s.getFullYear(),s.getMonth(),s.getDate()+r);return{date:o,outside:o.getMonth()!==this._viewMonth}})}_isDisabled(t){return!!(this.minDate&&vs(t)<vs(this.minDate)||this.maxDate&&vs(t)>vs(this.maxDate))}_prevMonth(){this._viewMonth===0?(this._viewMonth=11,this._viewYear-=1):this._viewMonth-=1}_nextMonth(){this._viewMonth===11?(this._viewMonth=0,this._viewYear+=1):this._viewMonth+=1}_selectDay(t){this._isDisabled(t)||this.dispatchEvent(new CustomEvent("sfx-select",{detail:{date:t},bubbles:!0,composed:!0}))}render(){const t=vs(new Date);return d`
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
        ${this._days.map(({date:e,outside:s})=>{const i=this._isDisabled(e),r=oo(e,t),o=this.value?oo(e,this.value):!1,a=["day",s&&"outside",r&&"today",o&&"selected"].filter(Boolean).join(" ");return d`
            <button class=${a} ?disabled=${i} @click=${()=>this._selectDay(e)}>
              ${e.getDate()}
            </button>
          `})}
      </div>
    `}};ot.styles=[Ks,tc,C`
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
    `];Ut([f({attribute:!1})],ot.prototype,"value",2);Ut([f({attribute:!1})],ot.prototype,"minDate",2);Ut([f({attribute:!1})],ot.prototype,"maxDate",2);Ut([f()],ot.prototype,"locale",2);Ut([_()],ot.prototype,"_viewYear",2);Ut([_()],ot.prototype,"_viewMonth",2);ot=Ut([T("sfx-calendar")],ot);var Xd=Object.defineProperty,Jd=Object.getOwnPropertyDescriptor,ye=(t,e,s,i)=>{for(var r=i>1?void 0:i?Jd(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Xd(e,s,r),r};function bs(t){if(!t)return null;const[e,s,i]=t.split("-").map(Number);return!e||!s||!i?null:new Date(e,s-1,i)}function ao(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function Zd(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>e.type).filter(e=>e==="month"||e==="day"||e==="year")}function no(t){return new Intl.DateTimeFormat(t,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2e3,0,1)).map(e=>{switch(e.type){case"month":return"MM";case"day":return"DD";case"year":return"YYYY";default:return e.value}}).join("")}function eh(t,e){const s=t.split(/[^0-9]+/).filter(Boolean);if(s.length!==3)return null;const i=Zd(e),r={};for(const[c,p]of i.entries()){const u=s[c];if(p==="year"?u.length!==4:u.length>2)return null;r[p]=Number(u)}const{month:o,day:a,year:n}=r;if(!o||!a||!n||o<1||o>12||a<1||a>31)return null;const l=new Date(n,o-1,a);return l.getFullYear()!==n||l.getMonth()!==o-1||l.getDate()!==a?null:l}let oe=class extends A{constructor(){super(...arguments),this.value="",this.min="",this.max="",this.placeholder="",this.disabled=!1,this.locale="",this._draft="",this._error="",this._open=!1,this._popoverTop=0,this._popoverBottom=0,this._popoverLeft=0,this._popoverPosition="below",this._openCalendar=()=>{this.disabled||this._open||(this._open=!0,this._updatePopoverPosition(),document.addEventListener("click",this._handleOutsideClick),document.addEventListener("keydown",this._handleKeyDown))},this._toggleCalendar=()=>{this.disabled||(this._open?(this._open=!1,this._cleanupListeners()):this._openCalendar())},this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1,this._cleanupListeners())},this._handleKeyDown=t=>{t.key==="Escape"&&this._open&&(t.preventDefault(),t.stopPropagation(),this._open=!1,this._cleanupListeners())}}get _effectiveLocale(){return this.locale||document.documentElement.lang||"en"}get _selectedDate(){return bs(this.value)}get _displayText(){const t=this._selectedDate;return t?new Intl.DateTimeFormat(this._effectiveLocale).format(t):""}willUpdate(t){var e,s;t.has("value")&&((s=(e=this.shadowRoot)==null?void 0:e.activeElement)==null?void 0:s.tagName)!=="INPUT"&&(this._draft=this._displayText,this._error="")}render(){const t=this._selectedDate;return d`
      <div
        class="field ${this._open?"open":""} ${this.disabled?"disabled":""} ${this._error?"error":""}"
      >
        <input
          type="text"
          .value=${this._draft}
          placeholder=${this.placeholder||no(this._effectiveLocale)}
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
                .minDate=${bs(this.min)}
                .maxDate=${bs(this.max)}
                .locale=${this.locale}
                @sfx-select=${this._handleSelect}
              ></sfx-calendar>
            </div>
          `:m}
    `}_handleInput(t){this._draft=t.target.value,this._validateAndCommit(this._draft)}_validateAndCommit(t){if(!t){this._error="",this._commit("");return}const e=eh(t,this._effectiveLocale),s=bs(this.min),i=bs(this.max),r=!!e&&(!!s&&e<s||!!i&&e>i);if(!e||r){this._error=`Invalid date. Use ${no(this._effectiveLocale)}`;return}this._error="",this._commit(ao(e))}_commit(t){t!==this.value&&(this.value=t,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}_handleSelect(t){this._open=!1,this._cleanupListeners(),this._error="",this._commit(ao(t.detail.date))}_updatePopoverPosition(){const t=this.getBoundingClientRect(),e=340,s=window.innerHeight-t.bottom,i=t.top;this._popoverPosition=s<e&&i>s?"above":"below",this._popoverPosition==="below"?this._popoverTop=t.bottom+4:this._popoverBottom=window.innerHeight-t.top+4,this._popoverLeft=Math.min(t.left,window.innerWidth-284)}_cleanupListeners(){document.removeEventListener("click",this._handleOutsideClick),document.removeEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupListeners()}};oe.styles=[Ks,Yo,C`
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
    `];ye([f()],oe.prototype,"value",2);ye([f()],oe.prototype,"min",2);ye([f()],oe.prototype,"max",2);ye([f()],oe.prototype,"placeholder",2);ye([f({type:Boolean})],oe.prototype,"disabled",2);ye([f()],oe.prototype,"locale",2);ye([_()],oe.prototype,"_draft",2);ye([_()],oe.prototype,"_error",2);ye([_()],oe.prototype,"_open",2);ye([_()],oe.prototype,"_popoverTop",2);ye([_()],oe.prototype,"_popoverBottom",2);ye([_()],oe.prototype,"_popoverLeft",2);ye([_()],oe.prototype,"_popoverPosition",2);oe=ye([T("sfx-date-input")],oe);var th=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,We=(t,e,s,i)=>{for(var r=i>1?void 0:i?sh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&th(e,s,r),r};let Pe=class extends A{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),r=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:r})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?m:d`
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
    `}};Pe.styles=C`
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
  `;We([f({type:Array})],Pe.prototype,"selectedAssets",2);We([f({type:Array})],Pe.prototype,"selectedFolders",2);We([f({type:Number})],Pe.prototype,"totalCount",2);We([f({type:Number})],Pe.prototype,"totalFolderCount",2);We([f({type:Boolean})],Pe.prototype,"isSelectingAll",2);We([f({type:Boolean})],Pe.prototype,"multiSelect",2);We([f({type:Number})],Pe.prototype,"maxSelections",2);We([f({type:Boolean})],Pe.prototype,"showTransform",2);We([f({attribute:!1})],Pe.prototype,"t",2);Pe=We([T("ap-selection-bar")],Pe);var ih=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,fr=(t,e,s,i)=>{for(var r=i>1?void 0:i?rh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&ih(e,s,r),r};let js=class extends A{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?m:d`
      <div
        class="marquee"
        ${R({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};js.styles=C`
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
  `;fr([f({type:Boolean})],js.prototype,"active",2);fr([f({type:Object})],js.prototype,"rect",2);js=fr([T("ap-marquee-overlay")],js);var oh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,qs=(t,e,s,i)=>{for(var r=i>1?void 0:i?ah(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&oh(e,s,r),r};let Mt=class extends A{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return d`
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
    `}};Mt.styles=[Ie,C`
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
    `];qs([f({type:Array})],Mt.prototype,"folders",2);qs([f({type:Boolean})],Mt.prototype,"loading",2);qs([f({attribute:!1})],Mt.prototype,"t",2);qs([_()],Mt.prototype,"_mode",2);Mt=qs([T("ap-folder-resolve-dialog")],Mt);var nh=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,De=(t,e,s,i)=>{for(var r=i>1?void 0:i?lh(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&nh(e,s,r),r};const ch=["webp","jpeg","png","gif"];function dh(t){const e=(t??"").toLowerCase();return ch.includes(e)?e:"jpeg"}let _e=class extends A{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>Gt(i));if(!t)return 1.5;const e=Yr(t),s=Qr(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>Gt(e));if(this._defaultFormat=dh(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=Yr(t),s=Qr(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return d`
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
              .options=${Vn}
              @sfx-change=${this._handleFormatChange}
            ></sfx-radio-group>
          </div>

          ${t?m:d`
                <div class="section">
                  <span class="section-label">${this.t("quality","Quality")}</span>
                  <sfx-dropdown
                    .value=${this._quality}
                    .options=${Hn}
                    @sfx-change=${this._handleQualityChange}
                  ></sfx-dropdown>
                </div>
              `}

          <div class="section">
            <span class="section-label">${this.t("size","Size")}</span>
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
              ${qn.map(e=>d`
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
    `}};_e.styles=[Ie,C`
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
    `];De([f({type:Array})],_e.prototype,"assets",2);De([f({type:Boolean})],_e.prototype,"isMultiSelect",2);De([f({attribute:!1})],_e.prototype,"t",2);De([f({attribute:!1})],_e.prototype,"exportOriginalLabel",2);De([f({attribute:!1})],_e.prototype,"applyExportLabel",2);De([_()],_e.prototype,"_format",2);De([_()],_e.prototype,"_quality",2);De([_()],_e.prototype,"_width",2);De([_()],_e.prototype,"_height",2);De([_()],_e.prototype,"_lockAspect",2);De([_()],_e.prototype,"_activePreset",2);_e=De([T("ap-transformation-dialog")],_e);var hh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,$t=(t,e,s,i)=>{for(var r=i>1?void 0:i?ph(e,s):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&hh(e,s,r),r};const uh=/[/\\\x00-\x1f]/;let Qe=class extends A{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_onInput(t){this._name=t.detail.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_validateName(t){return uh.test(t)?this.t("folderNameInvalidChars",`Folder name can't contain "/" or "\\".`):t==="."||t===".."?this.t("folderNameReserved",`Folder name can't be "." or "..".`):null}_onConfirm(t){if(this.loading)return;const e=t.detail.value.trim();if(!e)return;const s=this._validateName(e);if(s){this._localError=s;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:e},bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}render(){const t=this._localError??(this._apiErrorDismissed?null:this.error);return d`
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
    `}};Qe.styles=C`
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
  `;$t([f({attribute:!1})],Qe.prototype,"t",2);$t([f()],Qe.prototype,"currentFolderPath",2);$t([f({type:Boolean})],Qe.prototype,"loading",2);$t([f()],Qe.prototype,"error",2);$t([_()],Qe.prototype,"_name",2);$t([_()],Qe.prototype,"_localError",2);$t([_()],Qe.prototype,"_apiErrorDismissed",2);Qe=$t([T("ap-create-folder-dialog")],Qe);var fh=Object.defineProperty,wt=(t,e,s,i)=>{for(var r=void 0,o=t.length-1,a;o>=0;o--)(a=t[o])&&(r=a(e,s,r)||r);return r&&fh(e,s,r),r};const mr=class mr extends A{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,r;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=wa(),this.storeCtrl=new un(this,this.store),this.selectionCtrl=new gn(this,this.store),this.infiniteScrollCtrl=new mn(this,()=>this._loadMore()),this.marqueeCtrl=new Yi(this,{queryCards:e=>{const s=[],i=(o,a,n)=>o.querySelectorAll(`[${a}]`).forEach(l=>{const c=l.dataset[n];c&&s.push({uuid:c,el:l})});let r=!1;for(const o of Array.from(e.children))o.shadowRoot&&(i(o.shadowRoot,"data-asset-uuid","assetUuid"),i(o.shadowRoot,"data-folder-uuid","folderUuid"),r=!0);return(!r||s.length===0)&&(i(e,"data-asset-uuid","assetUuid"),i(e,"data-folder-uuid","folderUuid")),s},getSelection:()=>{const e=this.store.getState();return[...e.selectedAssets.keys(),...e.selectedFolders.keys()]},setSelection:e=>{var c,p;const s=this.store.getState(),i=((c=s.config)==null?void 0:c.folderSelection)===!0,r=new Map,o=new Map;for(const u of e){const h=s.selectedAssets.get(u);if(h){r.set(u,h);continue}const g=s.selectedFolders.get(u);if(i&&g){o.set(u,g);continue}if(!s.disabledAssetIds.has(u)){const v=s.assets.find(y=>y.uuid===u);if(v){r.set(u,v);continue}}if(i&&!s.disabledFolderIds.has(u)){const v=s.folders.find(y=>y.uuid===u);v&&o.set(u,v)}}const a=(p=s.config)==null?void 0:p.maxSelections,n=r.size+(i?o.size:0),l=a&&n>a?new Map(Array.from(r.entries()).slice(0,Math.max(0,a-o.size))):r;this.store.setState({selectedAssets:l,...i?{selectedFolders:o}:{}})},isInteractiveTarget:e=>{var s;return(((s=this.store.getState().config)==null?void 0:s.multiSelect)??!0)===!1?!0:e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const r=i.tagName.toLowerCase();return r.startsWith("ap-asset-")||r.startsWith("ap-folder-")?!0:i.classList.contains("check")||i.classList.contains("check-box")})}})}get _enabledFilterKeys(){var s;const e=(s=this.config)==null?void 0:s.enabledFilters;return Array.isArray(e)?new Set(e):null}_isFilterEnabled(e){const s=this._enabledFilterKeys;if(!s||!ol.has(e)||e in this._normalizedForcedFilters)return!0;const i=zo.has(e)?$.APPROVAL:e;return s.has(i)}get _visiblePinnedFilters(){const{filters:e}=this.store.getState();return e.pinned.filter(s=>this._isFilterEnabled(s))}get _visiblePinnedMetadata(){const{filters:e}=this.store.getState();return this._isFilterEnabled($.METADATA)?e.metadata.pinned:[]}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const r=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,r)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_computeAuthKey(e){return JSON.stringify({auth:e.auth,apiBase:e.apiBase})}_initConfig(e){const s={folderSelection:!0,...e};this._applyConfig(s);const i=this._computeAuthKey(s);(!this._initPromise||i!==this._lastAuthKey||this._initFailed)&&(this._lastAuthKey=i,this._initFailed=!1,this._initPromise=this._fetchBootstrapData(s).catch(()=>{this._initFailed=!0})),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}_applyConfig(e){const s=jl(),i=s.sortBy??e.defaultSortBy??"created_at",r=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Bl(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:r,disabledAssetIds:new Set(e.disabledAssetIds??[]),disabledFolderIds:new Set(e.disabledFolderIds??[])}),Jn(e.transformRemoteThumbnail),this._normalizedForcedFilters=Ki(e.forcedFilters)}async _initI18n(e){try{const{i18n:s,isNew:i}=await hn(e||"en");i&&s.on("missingKey",(o,a,n,l,c,p)=>{const u=n.match(/_(?:zero|one|two|few|many|other)$/),h=u&&(p!=null&&p[`defaultValue${u[0]}`])?String(p[`defaultValue${u[0]}`]):l;pn.handleMissingKey(n,h,a)});const r=(o,a,n)=>typeof a=="string"?s.t(o,a,n??{}):s.t(o,a??{});this.store.setState({t:r})}catch{}}async _fetchBootstrapData(e){const s=e.apiBase||`https://api.filerobot.com/${e.auth.projectToken}/v5`;let i;if(e.auth.mode==="securityTemplate"){const{key:r,permissions:o}=await Nn(e.auth,s);i=r,this.store.setState({sassKey:r,permissions:o})}else i=e.auth.sassKey;this.apiClient=new Qi({apiBase:s.replace(/\/v5$/,""),headers:{"X-Filerobot-Key":i}});try{const[r,o,a,n,l]=await Promise.allSettled([bl(this.apiClient),En(this.apiClient),Rn(this.apiClient),ml(this.apiClient),Dn(this.apiClient)]),c={};if(r.status==="fulfilled"){const{fields:v,regionalVariantGroups:y,regionalFilters:x,brandColor:w,cdnPermalinkEnabled:k}=r.value;c.metadataFields=v,c.regionalVariantGroups=y,c.regionalFilters=x,c.cdnPermalinkEnabled=k,w&&(c.brandColor=w)}o.status==="fulfilled"&&(c.labels=o.value||[]),a.status==="fulfilled"&&(c.tags=a.value),l.status==="fulfilled"&&(c.collections=l.value.collections||[]),n.status==="fulfilled"&&(c.fileTypes=n.value);const{pinnedFilters:p,pinnedMetadata:u}=Rl(e.auth.projectToken??null),h=this.store.getState().filters;c.filters={...h,pinned:p,metadata:{...h.metadata,pinned:u,visible:[...u]}},this.store.setState(c);const g=e.brandColor||c.brandColor||this.store.getState().brandColor;g&&(c.brandColor||this.store.setState({brandColor:g}),Ql(this,g))}catch(r){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r,context:"init"},bubbles:!0,composed:!0})),r}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=K(()=>import("./define-BXwiTSEM.js").then(e=>e.aJ),[]).then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let r;return e.auth.mode==="securityTemplate"?r={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:r={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:r,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(r){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r instanceof Error?r:new Error(String(r)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var l,c,p,u,h,g,v,y;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},r=Ki((l=this.config)==null?void 0:l.defaultFilters);for(const[x,w]of Object.entries(r))!s.has(x)&&this._isFilterEnabled(x)&&(i[x]=w);const o=((c=this.config)==null?void 0:c.tabs)??["assets","folders"],a=(p=this.config)!=null&&p.rememberLastTab?Hl(this.config.auth.projectToken):null,n=(a&&o.includes(a)?a:null)??((u=this.config)!=null&&u.defaultTab&&o.includes(this.config.defaultTab)?this.config.defaultTab:null)??((h=this.config)!=null&&h.initialFolderPath&&o.includes("folders")?"folders":null)??o[0]??"assets";this.store.setState({isOpen:!0,activeTab:n,searchQuery:"",isAISearchActive:!!((g=this.config)!=null&&g.enableAISearch&&((v=this.config)!=null&&v.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(n),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(n),((y=this.config)==null?void 0:y.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,r,o,a,n,l,c,p,u,h,g,v,y,x,w,k,L,O,E,z,S,V,N,F,Q,ge,Y,me,ve,Ke,lt,W,$e,Me,ct,as,ns,ls,cs,ds,hs,ps,us;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const Xe=s.activeTab;if(Xe==="assets"){const ce=this._buildSearchNotation(),Be=s.currentFolderPath||"/",Re=s.isAISearchActive&&!!s.searchQuery,Le=St(this.apiClient,{fields:(i=this.config)==null?void 0:i.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:Be,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ce||void 0,recursive:1,...Re&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((r=s.config)==null?void 0:r.locale)??"en"}}),be=Qs(this.apiClient,{folder:Be,q:ce||void 0,search:s.searchQuery||void 0,recursive:1,...Re&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((o=s.config)==null?void 0:o.locale)??"en"}}).catch(()=>null),[de,we]=await Promise.all([Le,be]);if(e!==this._loadId)return;const ke=((a=de.files)==null?void 0:a.length)??0,re=ke>=s.limit,Se=((n=we==null?void 0:we.stats)==null?void 0:n.approx_files_count)??((l=we==null?void 0:we.info)==null?void 0:l.total_files_count)??((c=de.info)==null?void 0:c.total_files_count)??((u=(p=de.base)==null?void 0:p.count)==null?void 0:u.files_recursive)??((g=(h=de.base)==null?void 0:h.count)==null?void 0:g.files_direct)??ke;this.store.setState({assets:de.files||[],folders:[],totalCount:Se,totalFolderCount:0,offset:0,hasMore:re,isLoading:!1})}else if(Xe==="folders"){const ce=this._buildSearchNotation(),Be=s.currentFolderPath||"/",[Re,Le,be]=await Promise.all([Ln(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),St(this.apiClient,{fields:(v=this.config)==null?void 0:v.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:Be,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ce||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((y=s.config)==null?void 0:y.locale)??"en"}}),Qs(this.apiClient,{folder:Be,q:ce||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((x=s.config)==null?void 0:x.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const de=Re.folders||[];let we={};if(de.length>0)try{we=await On(this.apiClient,de.map(Kt=>Kt.uuid))}catch{}if(e!==this._loadId)return;const ke=((w=Le.files)==null?void 0:w.length)??0,re=ke>=s.limit,Se=((k=be==null?void 0:be.stats)==null?void 0:k.approx_files_count)??((L=be==null?void 0:be.info)==null?void 0:L.total_files_count)??((O=Le.info)==null?void 0:O.total_files_count)??((z=(E=Le.base)==null?void 0:E.count)==null?void 0:z.files_direct)??ke;this.store.setState({assets:Le.files||[],folders:de,folderPreviews:we,totalCount:Se,totalFolderCount:Re.total??de.length,offset:0,hasMore:re,isLoading:!1})}else if(Xe==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ce=s.labels.find($i=>$i.uuid===s.activeLabelUuid);if(!ce){this.store.setState({isLoading:!1});return}const Be=ce.sid.replace("#",""),Re=this._buildSearchNotation(),Le=`labels:${Be}${Re?" "+Re:""}`,be=s.isAISearchActive&&!!s.searchQuery,de=St(this.apiClient,{fields:(S=this.config)==null?void 0:S.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Le,recursive:1,...be&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((V=s.config)==null?void 0:V.locale)??"en"}}),we=Qs(this.apiClient,{folder:"/",q:Le,search:s.searchQuery||void 0,recursive:1,...be&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((N=s.config)==null?void 0:N.locale)??"en"}}).catch(()=>null),[ke,re]=await Promise.all([de,we]);if(e!==this._loadId)return;const Se=((F=ke.files)==null?void 0:F.length)??0,Kt=Se>=s.limit,yi=((Q=re==null?void 0:re.stats)==null?void 0:Q.approx_files_count)??((ge=re==null?void 0:re.info)==null?void 0:ge.total_files_count)??((Y=ke.info)==null?void 0:Y.total_files_count)??((ve=(me=ke.base)==null?void 0:me.count)==null?void 0:ve.files_recursive)??((lt=(Ke=ke.base)==null?void 0:Ke.count)==null?void 0:lt.files_direct)??Se;this.store.setState({assets:ke.files||[],folders:[],totalCount:yi,totalFolderCount:0,offset:0,hasMore:Kt,isLoading:!1})}else if(Xe==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ce=s.activeCollectionFolder;if(!(ce&&!((W=ce.children)!=null&&W.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Re=s.activeCollectionUuid,Le=ce.filters||void 0,be=this._buildSearchNotation(),de=s.isAISearchActive&&!!s.searchQuery,we=St(this.apiClient,{fields:($e=this.config)==null?void 0:$e.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:be||void 0,recursive:1,collection_uuid:Re,f64:Le,...de&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Me=s.config)==null?void 0:Me.locale)??"en"}}),ke=Qs(this.apiClient,{q:be||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:Re,f64:Le,...de&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((ct=s.config)==null?void 0:ct.locale)??"en"}}).catch(()=>null),[re,Se]=await Promise.all([we,ke]);if(e!==this._loadId)return;const Kt=((as=re.files)==null?void 0:as.length)??0,yi=Kt>=s.limit,$i=((ns=Se==null?void 0:Se.stats)==null?void 0:ns.approx_files_count)??((ls=Se==null?void 0:Se.info)==null?void 0:ls.total_files_count)??((cs=re.info)==null?void 0:cs.total_files_count)??((hs=(ds=re.base)==null?void 0:ds.count)==null?void 0:hs.files_recursive)??((us=(ps=re.base)==null?void 0:ps.count)==null?void 0:us.files_direct)??Kt;this.store.setState({assets:re.files||[],folders:[],totalCount:$i,totalFolderCount:0,offset:0,hasMore:yi,isLoading:!1})}}catch(Xe){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:Xe,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var r,o,a;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((r=e.activeCollectionFolder.children)!=null&&r.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let l=n||void 0,c=e.currentFolderPath||"/",p=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const k=e.labels.find(L=>L.uuid===e.activeLabelUuid);k&&(l=`labels:${k.sid.replace("#","")}${n?" "+n:""}`),c="/",p=1}let u,h;e.activeTab==="collections"&&e.activeCollectionFolder&&(u=e.activeCollectionUuid||void 0,h=e.activeCollectionFolder.filters||void 0,c="",p=1);const g=await St(this.apiClient,{fields:(o=this.config)==null?void 0:o.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...c?{folder:c}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:p,...u&&{collection_uuid:u},...h&&{f64:h},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((a=e.config)==null?void 0:a.locale)??"en"}});if(s!==this._loadMoreId)return;const v=this.store.getState().assets,y=g.files||[],x=y.length>=e.limit,w=[...v,...y];this.store.setState({assets:w,offset:i,hasMore:x,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var r;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((r=s.activeCollectionFolder.children)!=null&&r.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var o;const s=e.detail.active,i=this.store.getState(),r={isAISearchActive:s};i.searchQuery&&(s?r.sortBy="relevance":i.sortBy==="relevance"&&(r.sortBy=((o=this.config)==null?void 0:o.defaultSortBy)??"created_at"),r.offset=0,r.assets=[],r.folders=[],r.isLoading=!0),this.store.setState(r),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&Kl(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,r=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...r,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),so(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),so(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,r;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&Vl(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((r=this.config)==null?void 0:r.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&Gt(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var r,o;const i={assets:e};s!=null&&s.length&&(i.folders=s),(o=(r=this.config)==null?void 0:r.onSelect)==null||o.call(r,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var o;const s=e.detail.folder,i=this.store.getState(),r=s.path||`${i.currentFolderPath}${s.name}/`;(o=this.config)!=null&&o.rememberLastFolder&&io(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:r,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:r}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n,l;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const c=this._findCollectionFolder(i.activeCollectionFolders,s);if(c){const p=i.breadcrumb.findIndex(h=>h.uuid===s),u=i.breadcrumb.slice(0,p+1);this.store.setState({activeCollectionFolder:c,breadcrumb:u,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const r=s?i.breadcrumb.findIndex(c=>c.uuid===s):-1,o=s?i.breadcrumb.slice(0,r+1):[],a=o.length>0?o[o.length-1].path:((n=this.config)==null?void 0:n.rootFolderPath)||"/";(l=this.config)!=null&&l.rememberLastFolder&&io(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:a,breadcrumb:o,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await Mn(this.apiClient,s.uuid),r=Fo(i.folders||[]);this.store.setState({activeCollectionFolders:r,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),r=s.path.split(" -> ").filter(Boolean),o=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let a="";for(const l of r)a=a?`${a} -> ${l}`:l,o.push({uuid:a,name:l,path:a});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:o,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const r=this._findCollectionFolder(i.children,s);if(r)return r}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i,r;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&Ul(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||((r=this.config)==null?void 0:r.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const r=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),o=[];let a=s.endsWith("/")?s:s+"/";for(const n of r)a+=n+"/",o.push({uuid:a,name:n,path:a});return o}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var r,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var o,a;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((o=this.config)==null?void 0:o.folderSelection)!==!1&&((a=this.config)==null?void 0:a.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Gt).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var o;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),r=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const a=await Promise.all(i.map(h=>{var g;return St(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:h.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const h of a)n.push(...h.files);const l=[...r],c=new Set(l.map(h=>h.uuid));for(const h of n)c.has(h.uuid)||(l.push(h),c.add(h.uuid));const p=(o=this.config)==null?void 0:o.maxSelections,u=p?l.slice(0,p):l;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=u,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(u)}catch(a){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,r=this._transformAssets,o=this._transformFolders,a=r.length>1,n=Zn(s,{isMultiSelect:a,isAspectLocked:i}),l=r.map(c=>{var g,v;if(!Gt(c))return c;const p=(g=c.url)==null?void 0:g.cdn,u=(v=c.url)==null?void 0:v.permalink,h={cdn:p?Lt(p,n):""};return u&&(h.permalink_cdn=Lt(u,n)),{...c,transformation:{params:s,url:h}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(l,o.length?o:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await An(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(r){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(r))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var l,c,p;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((l=s.config)==null?void 0:l.multiSelect)??!0))return;const r=((c=e==null?void 0:e.detail)==null?void 0:c.scope)??"all",o=r!=="assets"&&((p=this.config)==null?void 0:p.folderSelection)!==!1&&s.folders.length>0;if(!(r!=="folders")){o&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const n=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const u=this._buildSearchNotation();let h=s.currentFolderPath||"/";const g=s.limit,v=s.assets,y=s.totalCount;let x=s.activeTab==="folders"?0:1,w=u||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const F=s.labels.find(Q=>Q.uuid===s.activeLabelUuid);F&&(w=`labels:${F.sid.replace("#","")}${u?" "+u:""}`),h="/",x=1}let k,L;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,L=s.activeCollectionFolder.filters||void 0,h="",x=1);const O=[];for(let F=v.length;F<y;F+=g)O.push(F);const E=4,z=[];for(let F=0;F<O.length;F+=E){if(n!==this._selectAllId)return;const Q=O.slice(F,F+E),ge=await Promise.all(Q.map(Y=>{var me,ve;return St(this.apiClient,{fields:(me=this.config)==null?void 0:me.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...h?{folder:h}:{},offset:Y,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:w,recursive:x,...k&&{collection_uuid:k},...L&&{f64:L},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((ve=s.config)==null?void 0:ve.locale)??"en"}})}));if(n!==this._selectAllId)return;for(const Y of ge)Y.files&&z.push(...Y.files)}if(n!==this._selectAllId)return;const S=new Set(v.map(F=>F.uuid)),V=z.filter(F=>S.has(F.uuid)?!1:(S.add(F.uuid),!0)),N=[...v,...V];this.store.setState({assets:N,offset:Math.max(0,N.length-g),hasMore:!1,isSelectingAll:!1}),o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(N)}catch(u){if(n!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:u,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===$.DATE||e===$.LICENSE_EXPIRY||e===D.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:r}=e.detail,a={...this.store.getState().filters};let n=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(c=>c==null||c===""||Array.isArray(c)&&c.length===0);if(!n&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:c,preset:p,from:u,to:h}=i;n=!c&&!p&&!u&&!h}if(n){const c={...a.applied};delete c[s],a.applied=c}else{const c={...a.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?c[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===$.IMAGE&&typeof i=="object"&&!Array.isArray(i)?c[s]=i:c[s]={type:"string",values:Array.isArray(i)?i:[i],operator:r||":"},a.applied=c}this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData();const l=s===D.STATUS||s===D.APPROVER||s===D.REQUESTOR||s===D.DUE_DATE;if(this._pendingFilter===s||this._pendingFilter===$.APPROVAL&&l){this._pendingFilter=null;const c=this.renderRoot.querySelector("ap-filters-bar");c&&(c.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,r=this.renderRoot.querySelector("ap-content-toolbar");let o,a;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();o=i.left-l.left,a=i.bottom-l.top}}r==null||r.openFilterPanel(s,!0,o,a)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,r=this.renderRoot.querySelector("ap-content-toolbar");let o,a;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();o=i.left-l.left,a=i.bottom-l.top}}r==null||r.openMetadataFieldPanel(s,!0,o,a)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var h,g,v;const{key:s,metadataFieldKey:i}=e.detail,r=this.renderRoot.querySelector("ap-filters-bar"),o=this.renderRoot.querySelector("ap-content-toolbar");if(!r||!o)return;i?(this._pendingMetadataField=i,r.pendingMetadataField=i):s&&(this._pendingFilter=s,r.pendingFilter=s),await r.updateComplete;let a=r.renderRoot.querySelector(".chip.pending");if(!a){const y=r.renderRoot.querySelectorAll(".chip.pinned-empty"),x=i?(h=r._getMetadataLabel)==null?void 0:h.call(r,i):void 0;for(const w of y){const k=(v=(g=w.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:v.trim();if(i&&k===x){a=w;break}if(s&&k===(Yt[s]||s)){a=w;break}}}if(!a)return;const n=a.getBoundingClientRect(),l=this.renderRoot.querySelector(".toolbar-filters-wrapper"),c=l==null?void 0:l.getBoundingClientRect(),p=c?n.left-c.left:n.left,u=c?n.bottom-c.top:void 0;i?o.openMetadataFieldPanel(i,!0,p,u):s&&o.openFilterPanel(s,!0,p,u)}_handleFilterRemove(e){var a;const s=e.detail.key;if(s in(((a=this.config)==null?void 0:a.forcedFilters)??{}))return;const r={...this.store.getState().filters},o={...r.applied};delete o[s],r.applied=o,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:r,metadataType:o}=e.detail,n={...this.store.getState().filters},l={...n.metadata},c={...l.applied};if(!r||Array.isArray(r)&&r.length===0?(delete c[s],l.applied=c,l.pinned.includes(s)||(l.visible=l.visible.filter(u=>u!==s))):(c[s]={type:"string",values:Array.isArray(r)?r:[r],operator:i||":",metadataType:o},l.applied=c,l.visible.includes(s)||(l.visible=[...l.visible,s])),n.metadata=l,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const u=this.renderRoot.querySelector("ap-filters-bar");u&&(u.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,o={...this.store.getState().filters},a={...o.metadata};i?a.visible.includes(s)||(a.visible=[...a.visible,s]):a.visible=a.visible.filter(n=>n!==s),o.metadata=a,this.store.setState({filters:o})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,r={...this.store.getState().filters},o={...r.metadata},a={...o.applied};delete a[s],o.applied=a,o.pinned.includes(s)||(o.visible=o.visible.filter(n=>n!==s)),r.metadata=o,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,l;const{key:s,pinned:i}=e.detail,o={...this.store.getState().filters};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):o.pinned=o.pinned.filter(c=>c!==s),this.store.setState({filters:o});const a=((l=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:l.projectToken)??null;zl(a,o.pinned)}_handleMetadataPin(e){var l,c;const{fieldKey:s,pinned:i}=e.detail,o={...this.store.getState().filters},a={...o.metadata};i?a.pinned.includes(s)||(a.pinned=[...a.pinned,s]):(a.pinned=a.pinned.filter(p=>p!==s),s in a.applied||(a.visible=a.visible.filter(p=>p!==s))),o.metadata=a,this.store.setState({filters:o});const n=((c=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:c.projectToken)??null;Nl(n,a.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFiltersSet(e){var l;const{applied:s,metadata:i}=e.detail,o={...this.store.getState().filters},a=new Set(Object.keys(((l=this.config)==null?void 0:l.forcedFilters)??{})),n={...s};for(const c of a)delete n[c];if(o.applied=n,i){const c={...o.metadata};c.applied=i.applied;const p=Object.keys(i.applied);c.visible=[...new Set([...c.pinned,...p])],o.metadata=c}this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return Jl;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return Zl;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return ec}return e.searchQuery?Wl:e.activeTab==="folders"?Xl:er}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return yl(s,e.filters.metadata.applied).join(" ")}render(){var L,O,E,z,S,V,N,F,Q,ge,Y,me,ve,Ke,lt,W,$e,Me,ct,as,ns,ls,cs,ds,hs,ps,us,Xe,ce;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),r=Array.from(e.selectedFolders.keys()),o=((L=this.config)==null?void 0:L.disabledAssetIds)??[],a=((O=this.config)==null?void 0:O.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),c=((E=this.config)==null?void 0:E.folderSelection)!==!1,p=d`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((z=this.config)==null?void 0:z.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((S=e.activeCollectionFolder.children)!=null&&S.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((V=this.config)!=null&&V.enableAISearch)}
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
    `,u=!!((N=this.config)!=null&&N.uploader),h=((F=this.config)==null?void 0:F.folderCreation)===!0,g=((Q=this.config)==null?void 0:Q.auth.mode)==="sassKey",v=e.activeTab==="folders",y=h&&v&&(g||jn(e.permissions,Un.FOLDER_CREATE)),x=d`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?d`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${s("dropFilesToUpload","Drop files to upload")}
                </div>
              </div>
            `:m}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(ge=this.config)!=null&&ge.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${u}
              .showCreateFolder=${y}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((Y=e.activeCollectionFolder.children)!=null&&Y.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((me=e.activeCollectionFolder.children)!=null&&me.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${e.metadataFields}
              .pinnedFilters=${this._visiblePinnedFilters}
              .apiClient=${this.apiClient}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .enabledFilterKeys=${((ve=this.config)==null?void 0:ve.enabledFilters)??null}
              .approverUsers=${((Ke=this.config)==null?void 0:Ke.approverUsers)??[]}
              .requesterUsers=${((lt=this.config)==null?void 0:lt.requesterUsers)??[]}
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

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((W=e.activeCollectionFolder.children)!=null&&W.length))?m:d`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${e.filters.metadata.applied}
                    .metadataFields=${e.metadataFields}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${(($e=this.config)==null?void 0:$e.approverUsers)??[]}
                    .requesterUsers=${((Me=this.config)==null?void 0:Me.requesterUsers)??[]}
                    .pinnedFilters=${this._visiblePinnedFilters}
                    .pinnedMetadataFields=${this._visiblePinnedMetadata}
                    .forcedFilters=${((ct=this.config)==null?void 0:ct.forcedFilters)??{}}
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

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((as=e.activeCollectionFolder.children)!=null&&as.length)))?d`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${((ns=this.config)==null?void 0:ns.gridSize)??"normal"}
                .multiSelect=${((ls=this.config)==null?void 0:ls.multiSelect)!==!1}
                .folderCount=${2}
                .t=${s}
              ></ap-skeleton>`:this._renderContent(e,i,r,c,o,a)}

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
                  .t=${s}
                  .exportOriginalLabel=${(cs=this._transformationsConfig)==null?void 0:cs.exportOriginalLabel}
                  .applyExportLabel=${(ds=this._transformationsConfig)==null?void 0:ds.applyExportLabel}
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
              .showMetadata=${((hs=this.config)==null?void 0:hs.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((ps=this.config)==null?void 0:ps.multiSelect)??!0}
              .t=${s}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:m}
      </div>
    `,w=d`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${l}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((us=this.config)==null?void 0:us.multiSelect)??!0}
        .maxSelections=${(Xe=this.config)==null?void 0:Xe.maxSelections}
        .showTransform=${!!((ce=this.config)!=null&&ce.transformations)&&n.some(Gt)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,k=this._isUploaderOpen?d`
          <div class="uploader-overlay">
            <div class="uploader-body">${this._uploaderEl}</div>
          </div>
        `:m;return this._isInline?e.isOpen?d`
        <div class="ap-inline">
          ${this._isUploaderOpen?k:d`
                <div class="inline-header">${p}</div>
                <div class="inline-content">${x}</div>
                <div class="inline-footer">${w}</div>
              `}
        </div>
      `:m:d`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${Be=>this._handleCancel(Be.detail.reason)}
      >
        ${this._isUploaderOpen?k:d`
              <div slot="header">${p}</div>
              ${x}
              <div slot="footer">${w}</div>
            `}
      </ap-modal>
    `}_renderContent(e,s,i=[],r=!1,o=[],a=[]){var l,c,p,u,h,g,v,y,x,w,k,L,O;const n=e.t;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?d`
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
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((l=this.config)==null?void 0:l.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((c=this.config)==null?void 0:c.gridSize)??"normal"}
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
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((p=this.config)==null?void 0:p.multiSelect)??!0}
          .folderSelectable=${r}
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
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((u=this.config)==null?void 0:u.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((h=this.config)==null?void 0:h.gridSize)??"normal"}
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
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((g=this.config)==null?void 0:g.multiSelect)??!0}
          .folderSelectable=${r}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let E=e.labels;if(e.searchQuery){const S=e.searchQuery.toLowerCase();E=e.labels.filter(V=>V.name.toLowerCase().includes(S))}const z=e.sortDirection==="asc"?1:-1;return E=[...E].sort((S,V)=>z*S.name.localeCompare(V.name)),E.length===0?d`
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
              ${E.map((S,V)=>d`
                  <ap-label-card
                    .label=${S}
                    .index=${V}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `)}
            </div>
          `:d`
          <div class="labels-list">
            ${E.map((S,V)=>d`
                <ap-label-row
                  .label=${S}
                  .index=${V}
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
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((v=this.config)==null?void 0:v.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((y=this.config)==null?void 0:y.gridSize)??"normal"}
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
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((x=this.config)==null?void 0:x.multiSelect)??!0}
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let S=e.collections;if(e.searchQuery){const N=e.searchQuery.toLowerCase();S=e.collections.filter(F=>F.title.toLowerCase().includes(N))}const V=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?S=[...S].sort((N,F)=>V*(new Date(N.created_at).getTime()-new Date(F.created_at).getTime())):e.sortBy==="updated_at"?S=[...S].sort((N,F)=>V*(new Date(N.updated_at).getTime()-new Date(F.updated_at).getTime())):S=[...S].sort((N,F)=>V*N.title.localeCompare(F.title)),S.length===0?d`
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
              ${S.map((N,F)=>d`
                  <ap-collection-card
                    .collection=${N}
                    .index=${F}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `)}
            </div>
          `:d`
          <div class="collections-list">
            ${S.map((N,F)=>d`
                <ap-collection-row
                  .collection=${N}
                  .index=${F}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return d`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;const E=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((w=e.activeCollectionFolder.children)==null?void 0:w.length)??0)>0){let S=E;if(e.searchQuery){const N=e.searchQuery.toLowerCase();S=E.filter(F=>F.name.toLowerCase().includes(N))}const V=e.sortDirection==="asc"?1:-1;return S=[...S].sort((N,F)=>V*N.name.localeCompare(F.name)),S.length===0?d`
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
              ${S.map((N,F)=>d`
                  <ap-collection-folder-card
                    .folder=${N}
                    .index=${F}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `)}
            </div>
          `:d`
          <div class="collection-folders-list">
            ${S.map((N,F)=>d`
                <ap-collection-folder-row
                  .folder=${N}
                  .index=${F}
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
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((k=this.config)==null?void 0:k.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((L=this.config)==null?void 0:L.gridSize)??"normal"}
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
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((O=this.config)==null?void 0:O.multiSelect)??!0}
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
      `}return m}};mr.styles=[C`
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
    `];let je=mr;wt([_()],je.prototype,"_isDragOver");wt([_()],je.prototype,"_isUploaderOpen");wt([_()],je.prototype,"_folderResolveOpen");wt([_()],je.prototype,"_transformOpen");wt([_()],je.prototype,"_createFolderOpen");wt([_()],je.prototype,"_isCreatingFolder");wt([_()],je.prototype,"_createFolderError");wt([f({type:Object})],je.prototype,"config");typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",je);const gh=[{pattern:"/",load:()=>K(()=>import("./landing-DLJumpXG.js"),__vite__mapDeps([0,1])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>K(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([2,3])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>K(()=>import("./configuration-DxtJF6s1.js"),__vite__mapDeps([4,3])).then(t=>t.default)},{pattern:"/docs/api",load:()=>K(()=>import("./api-Dl3UszFN.js"),__vite__mapDeps([5,3])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>K(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([6,3])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>K(()=>import("./filters-DAXz2ick.js"),__vite__mapDeps([7,3])).then(t=>t.default)},{pattern:"/docs/types",load:()=>K(()=>import("./types-DPNAgA2W.js"),__vite__mapDeps([8,3])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>K(()=>import("./basic-DsRMABvX.js"),__vite__mapDeps([9,1])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>K(()=>import("./single-select-Dc-5iOQX.js"),__vite__mapDeps([10,1])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>K(()=>import("./multi-select-hrlTQ69m.js"),__vite__mapDeps([11,1])).then(t=>t.default)},{pattern:"/examples/disabled-assets",load:()=>K(()=>import("./disabled-assets-Bf6dsMys.js"),__vite__mapDeps([12,1])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>K(()=>import("./theming-OXVLG4Jo.js"),__vite__mapDeps([13,1])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>K(()=>import("./custom-theming-CSUboOMM.js"),__vite__mapDeps([14,1])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>K(()=>import("./default-filters-Bnj0eLRr.js"),__vite__mapDeps([15,1])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>K(()=>import("./forced-filters-CM019T9G.js"),__vite__mapDeps([16,1])).then(t=>t.default)},{pattern:"/examples/enabled-filters",load:()=>K(()=>import("./enabled-filters-CN-5893T.js"),__vite__mapDeps([17,1])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>K(()=>import("./hidden-tabs-DDQ54nMH.js"),__vite__mapDeps([18,1])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>K(()=>import("./root-folder-kuns2n2d.js"),__vite__mapDeps([19,1])).then(t=>t.default)},{pattern:"/examples/events",load:()=>K(()=>import("./events-DYQzfhZs.js"),__vite__mapDeps([20,1])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>K(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([21,1])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>K(()=>import("./inline-Bp_6Mq7a.js"),__vite__mapDeps([22,1])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>K(()=>import("./sticky-filters-wjcGwqcW.js"),__vite__mapDeps([23,1])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>K(()=>import("./grid-size-CDul_wdi.js"),__vite__mapDeps([24,1])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>K(()=>import("./preferences-CYL-CWNO.js"),__vite__mapDeps([25,1])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>K(()=>import("./uploader-a4H5TS4K.js"),__vite__mapDeps([26,1])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>K(()=>import("./folder-selection-BFB50wp1.js"),__vite__mapDeps([27,1])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>K(()=>import("./ai-search-C2gcgXPD.js"),__vite__mapDeps([28,1])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>K(()=>import("./transformations-D_UEcLal.js"),__vite__mapDeps([29,1])).then(t=>t.default)},{pattern:"/examples/language-switcher",load:()=>K(()=>import("./language-switcher-BD0Jl8kF.js"),__vite__mapDeps([30,1])).then(t=>t.default)}];let xs=null,lo=0;function mh(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),r=document.getElementById("sidebar-examples"),o=document.querySelectorAll(".topbar-nav-link");async function a(){const n=location.hash.slice(1)||"/",l=++lo;xs!=null&&xs.destroy&&xs.destroy(),t.close();const c=gh.find(x=>x.pattern===n);if(!c){location.hash="#/";return}const p=n.startsWith("/docs/"),u=n.startsWith("/examples/"),h=p||u,g=n==="/";s.classList.toggle("hidden",!h),document.body.classList.toggle("has-sidebar",h),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!p),r.classList.toggle("hidden",!u),s.querySelectorAll(".sidebar-link").forEach(x=>{x.classList.toggle("active",x.getAttribute("data-route")===n)});const v=p?"docs":u?"examples":"home";o.forEach(x=>{x.classList.toggle("active",x.getAttribute("data-section")===v)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const y=await c.load();l===lo&&(xs=y,e.innerHTML=y.render(),y.init&&y.init(t))}window.addEventListener("hashchange",a),a()}const gr="ap-demo-auth",gi={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function vh(){try{const t=localStorage.getItem(gr);if(t)return{...gi,...JSON.parse(t)}}catch{}return{...gi}}function bh(t){localStorage.setItem(gr,JSON.stringify(t))}function xh(){const t=window.__apDemoFlags;return t&&typeof t=="object"?t:{}}function Ah(t={}){const{projectToken:e,securityTemplateKey:s}=vh();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t,...xh()}}function _h(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),r=document.getElementById("auth-save");try{const o=localStorage.getItem(gr);if(o){const a=JSON.parse(o);s.value=a.projectToken??"",i.value=a.securityTemplateKey??""}}catch{}t.addEventListener("click",o=>{o.stopPropagation(),e.classList.toggle("hidden")}),r.addEventListener("click",()=>{bh({projectToken:s.value.trim()||gi.projectToken,securityTemplateKey:i.value.trim()||gi.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",o=>{!e.contains(o.target)&&!t.contains(o.target)&&e.classList.add("hidden")})}_h();console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,"color: #5b6cff; font-weight: 600;","color: inherit;");const yh=document.getElementById("sidebar-toggle"),Jo=document.getElementById("sidebar");yh.addEventListener("click",()=>{Jo.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{Jo.classList.remove("mobile-open")});const $h=document.getElementById("picker");mh($h);export{m as A,Qi as D,et as E,K as _,nn as a,Ah as b,an as c,d,ic as e,Fr as f,A as g,C as h,rc as i,Sh as j,ac as k,Yo as l,R as m,f as n,vt as o,Us as p,Xt as q,_ as r,ba as s,sc as t,pt as w};
