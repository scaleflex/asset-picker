const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-provider-browser-8oKVjic7-DPgtKBqn.js","assets/index-DeQhaZNH.js","assets/index-CLkMPxQv.css","assets/provider-browser-_2e3p9cw-BhgnF2eh.js","assets/index-DMqa8AUM-CwoboYpY.js"])))=>i.map(i=>d[i]);
import{_ as Et}from"./index-DeQhaZNH.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=globalThis,Kt=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zt=Symbol(),ur=new WeakMap;let ro=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Kt&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=ur.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ur.set(r,e))}return e}toString(){return this.cssText}};const Ko=t=>new ro(typeof t=="string"?t:t+"",void 0,Zt),W=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ro(r,t,Zt)},Zo=(t,e)=>{if(Kt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=ft.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},fr=Kt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return Ko(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jo,defineProperty:Qo,getOwnPropertyDescriptor:ei,getOwnPropertyNames:ti,getOwnPropertySymbols:ri,getPrototypeOf:oi}=Object,le=globalThis,hr=le.trustedTypes,ii=hr?hr.emptyScript:"",Ut=le.reactiveElementPolyfillSupport,Ye=(t,e)=>t,xt={toAttribute(t,e){switch(e){case Boolean:t=t?ii:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Jt=(t,e)=>!Jo(t,e),gr={attribute:!0,type:String,converter:xt,reflect:!1,useDefault:!1,hasChanged:Jt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);let Ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=gr){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Qo(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:s}=ei(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);s==null||s.call(this,n),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gr}static _$Ei(){if(this.hasOwnProperty(Ye("elementProperties")))return;const e=oi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ye("properties"))){const r=this.properties,o=[...ti(r),...ri(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(fr(i))}else e!==void 0&&r.push(fr(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){var s;const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:xt).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){var s,n;const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=o.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:xt;this._$Em=i;const p=l.fromAttribute(r,a.type);this[i]=p??((n=this._$Ej)==null?void 0:n.get(i))??p,this._$Em=null}}requestUpdate(e,r,o,i=!1,s){var n;if(e!==void 0){const a=this.constructor;if(i===!1&&(s=this[e]),o??(o=a.getPropertyOptions(e)),!((o.hasChanged??Jt)(s,r)||o.useDefault&&o.reflect&&s===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:i,wrapped:s},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??r??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},Ue[Ye("elementProperties")]=new Map,Ue[Ye("finalized")]=new Map,Ut==null||Ut({ReactiveElement:Ue}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,vr=t=>t,bt=Ve.trustedTypes,xr=bt?bt.createPolicy("lit-html",{createHTML:t=>t}):void 0,oo="$lit$",ne=`lit$${Math.random().toFixed(9).slice(2)}$`,io="?"+ne,si=`<${io}>`,be=document,We=()=>be.createComment(""),Xe=t=>t===null||typeof t!="object"&&typeof t!="function",Qt=Array.isArray,ni=t=>Qt(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Pt=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,mr=/>/g,ue=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yr=/'/g,wr=/"/g,so=/^(?:script|style|textarea|title)$/i,no=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),f=no(1),he=no(2),me=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),_r=new WeakMap,ge=be.createTreeWalker(be,129);function ao(t,e){if(!Qt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return xr!==void 0?xr.createHTML(e):e}const ai=(t,e)=>{const r=t.length-1,o=[];let i,s=e===2?"<svg>":e===3?"<math>":"",n=Me;for(let a=0;a<r;a++){const l=t[a];let p,h,v=-1,_=0;for(;_<l.length&&(n.lastIndex=_,h=n.exec(l),h!==null);)_=n.lastIndex,n===Me?h[1]==="!--"?n=br:h[1]!==void 0?n=mr:h[2]!==void 0?(so.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=ue):h[3]!==void 0&&(n=ue):n===ue?h[0]===">"?(n=i??Me,v=-1):h[1]===void 0?v=-2:(v=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?ue:h[3]==='"'?wr:yr):n===wr||n===yr?n=ue:n===br||n===mr?n=Me:(n=ue,i=void 0);const U=n===ue&&t[a+1].startsWith("/>")?" ":"";s+=n===Me?l+si:v>=0?(o.push(p),l.slice(0,v)+oo+l.slice(v)+ne+U):l+ne+(v===-2?a:U)}return[ao(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Ge{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const a=e.length-1,l=this.parts,[p,h]=ai(e,r);if(this.el=Ge.createElement(p,o),ge.currentNode=this.el.content,r===2||r===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(i=ge.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const v of i.getAttributeNames())if(v.endsWith(oo)){const _=h[n++],U=i.getAttribute(v).split(ne),b=/([.?@])?(.*)/.exec(_);l.push({type:1,index:s,name:b[2],strings:U,ctor:b[1]==="."?di:b[1]==="?"?ci:b[1]==="@"?pi:_t}),i.removeAttribute(v)}else v.startsWith(ne)&&(l.push({type:6,index:s}),i.removeAttribute(v));if(so.test(i.tagName)){const v=i.textContent.split(ne),_=v.length-1;if(_>0){i.textContent=bt?bt.emptyScript:"";for(let U=0;U<_;U++)i.append(v[U],We()),ge.nextNode(),l.push({type:2,index:++s});i.append(v[_],We())}}}else if(i.nodeType===8)if(i.data===io)l.push({type:2,index:s});else{let v=-1;for(;(v=i.data.indexOf(ne,v+1))!==-1;)l.push({type:7,index:s}),v+=ne.length-1}s++}}static createElement(e,r){const o=be.createElement("template");return o.innerHTML=e,o}}function Ae(t,e,r=t,o){var n,a;if(e===me)return e;let i=o!==void 0?(n=r._$Co)==null?void 0:n[o]:r._$Cl;const s=Xe(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=i:r._$Cl=i),i!==void 0&&(e=Ae(t,i._$AS(t,e.values),i,o)),e}class li{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=((e==null?void 0:e.creationScope)??be).importNode(r,!0);ge.currentNode=i;let s=ge.nextNode(),n=0,a=0,l=o[0];for(;l!==void 0;){if(n===l.index){let p;l.type===2?p=new ot(s,s.nextSibling,this,e):l.type===1?p=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(p=new ui(s,this,e)),this._$AV.push(p),l=o[++a]}n!==(l==null?void 0:l.index)&&(s=ge.nextNode(),n++)}return ge.currentNode=be,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class ot{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ae(this,e,r),Xe(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==me&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ni(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ge.createElement(ao(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const n=new li(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=_r.get(e.strings);return r===void 0&&_r.set(e.strings,r=new Ge(e)),r}k(e){Qt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of e)i===r.length?r.push(o=new ot(this.O(We()),this.O(We()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e!==this._$AB;){const i=vr(e).nextSibling;vr(e).remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}let _t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}_$AI(e,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)e=Ae(this,e,r,0),n=!Xe(e)||e!==this._$AH&&e!==me,n&&(this._$AH=e);else{const a=e;let l,p;for(e=s[0],l=0;l<s.length-1;l++)p=Ae(this,a[o+l],r,l),p===me&&(p=this._$AH[l]),n||(n=!Xe(p)||p!==this._$AH[l]),p===w?e=w:e!==w&&(e+=(p??"")+s[l+1]),this._$AH[l]=p}n&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class di extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}class ci extends _t{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}}class pi extends _t{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=Ae(this,e,r,0)??w)===me)return;const o=this._$AH,i=e===w&&o!==w||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==w&&(o===w||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class ui{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}}const zt=Ve.litHtmlPolyfillSupport;zt==null||zt(Ge,ot),(Ve.litHtmlVersions??(Ve.litHtmlVersions=[])).push("3.3.2");const de=(t,e,r)=>{const o=(r==null?void 0:r.renderBefore)??e;let i=o._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;o._$litPart$=i=new ot(e.insertBefore(We(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis;let Y=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=de(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return me}};var to;Y._$litElement$=!0,Y.finalized=!0,(to=xe.litElementHydrateSupport)==null||to.call(xe,{LitElement:Y});const Ot=xe.litElementPolyfillSupport;Ot==null||Ot({LitElement:Y});(xe.litElementVersions??(xe.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:Jt},hi=(t=fi,e,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),o==="accessor"){const{name:n}=r;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,t,a),a}}}if(o==="setter"){const{name:n}=r;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t,!0,a)}}throw Error("Unsupported decorator location: "+o)};function D(t){return(e,r)=>typeof r=="object"?hi(t,e,r):((o,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t){return D({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lo(t,e){return(r,o,i)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(t))??null};return gi(r,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi={CHILD:2},co=t=>(...e)=>({_$litDirective$:t,values:e});class xi{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mt extends xi{constructor(e){if(super(e),this.it=w,e.type!==vi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===w||e==null)return this._t=void 0,this.it=e;if(e===me)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}mt.directiveName="unsafeHTML",mt.resultType=1;const ve=co(mt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tt extends mt{}Tt.directiveName="unsafeSVG",Tt.resultType=2;const ae=co(Tt);class bi{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const r=this.state;this.state={...r,...e},this._notifying=!0;try{this.listeners.forEach(o=>o(this.state,r))}finally{this._notifying=!1}if(this._pendingState){const o=this._pendingState;this._pendingState=null,this.setState(o)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function q(t,e,r){const o=t.getState().files,i=o.get(e);if(!i)return;const s=new Map(o);s.set(e,{...i,...r}),t.setState({files:s})}function $e(t,e){const r=new Map(t.getState().files);r.set(e.id,e),t.setState({files:r})}function kr(t,e){const r=t.getState().files;if(!r.has(e))return;const o=new Map(r);o.delete(e),t.setState({files:o})}function mi(){return new bi({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class yi{constructor(e,r){this.host=e,this.store=r,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function wi(t,e){const r=new XMLHttpRequest;let o=!1;const i=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;r.open("POST",i);for(const[n,a]of Object.entries(e.authHeaders))r.setRequestHeader(n,a);r.upload.addEventListener("progress",n=>{n.lengthComputable&&!o&&e.onProgress(n.loaded,n.total)}),r.addEventListener("load",()=>{if(o)return;let n;try{n=JSON.parse(r.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${r.status})`));return}r.status>=200&&r.status<300&&n.status==="success"?e.onComplete(n):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${r.status})`))}),r.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))}),r.addEventListener("timeout",()=>{o||e.onError(new Error("Upload timed out"))});const s=new FormData;if(t.file){const n={name:t.name,type:t.type};s.append("info[files[]]",JSON.stringify(n)),Object.keys(t.meta).length>0&&s.append("meta[files[]]",JSON.stringify(t.meta)),t.tags.length>0&&s.append("tags[files[]]",JSON.stringify(t.tags)),s.append("files[]",t.file,t.name)}return r.timeout=6e4,r.send(s),{abort(){o=!0,r.abort()}}}function _i(t,e){const r=new XMLHttpRequest;let o=!1;const i=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;r.open("POST",i);for(const[n,a]of Object.entries(e.authHeaders))r.setRequestHeader(n,a);if(r.setRequestHeader("Content-Type","application/json"),r.addEventListener("load",()=>{if(o)return;let n;try{n=JSON.parse(r.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${r.status})`));return}r.status>=200&&r.status<300&&n.status==="success"?e.onComplete(n):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${r.status})`))}),r.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))}),r.addEventListener("timeout",()=>{o||e.onError(new Error("Upload timed out"))}),!t.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const s={files_urls:[{url:t.remoteUrl,name:t.name}],dir:e.folder};return r.timeout=6e4,r.send(JSON.stringify(s)),{abort(){o=!0,r.abort()}}}function kt(t){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":t}}function je(t){return t.replace(/\/+$/,"")}const ki={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function it(t){return ki[t]??t}function aa(t,e){const r=je(t),o=btoa(JSON.stringify({origin:window.location.origin})),i=it(e);return`${r}/${i}/connect?state=${encodeURIComponent(o)}`}async function la(t,e,r,o=""){const i=je(t),s=o?`/${o}`:"",n=it(e),a=await fetch(`${i}/${n}/list${s}`,{method:"GET",headers:kt(r),credentials:"same-origin"});if(a.status===401)throw new er;if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Companion list failed (HTTP ${a.status})`)}return a.json()}async function da(t,e,r){const o=je(t),i=await fetch(`${o}/${r}`,{method:"GET",headers:kt(e),credentials:"same-origin"});if(i.status===401)throw new er;if(!i.ok){const s=await i.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Companion list failed (HTTP ${i.status})`)}return i.json()}async function ca(t,e,r,o){const i=je(t),s=it(e),n=o?`q=${encodeURIComponent(r)}&${o}`:`q=${encodeURIComponent(r)}`,a=await fetch(`${i}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function $i(t,e,r,o,i,s=!1){const n=je(t),a=it(e),l=s?`${n}/search/${a}/get/${o}`:`${n}/${a}/get/${o}`,p=s?{Accept:"application/json","Content-Type":"application/json"}:kt(r),h=await fetch(l,{method:"POST",headers:p,credentials:"same-origin",body:JSON.stringify({...i,httpMethod:i.httpMethod??"POST",useFormData:i.useFormData??!0,fieldname:i.fieldname??"files[]"})});if(h.status===401)throw new er;if(!h.ok){const v=await h.json().catch(()=>null);throw new Error((v==null?void 0:v.message)||`Companion upload failed (HTTP ${h.status})`)}return h.json()}async function pa(t,e,r){const o=je(t),i=it(e),s=await fetch(`${o}/${i}/logout`,{method:"GET",headers:kt(r),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function Si(t){var e;const r=((e=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(t))==null?void 0:e[1])??t;return`${location.protocol==="https:"?"wss":"ws"}://${r}`}class er extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Ci(t,e){const r=t.remoteInfo;if(!r)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let o=!1,i=null;const s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,n={};t.meta&&Object.keys(t.meta).length>0&&Object.assign(n,t.meta),t.tags&&t.tags.length>0&&(n.tags=t.tags);const a=!r.token;return $i(r.companionUrl,r.provider,r.token,r.requestPath,{fileId:r.fileId,endpoint:s,headers:e.authHeaders,size:r.size,metadata:Object.keys(n).length>0?n:void 0},a).then(l=>{if(o)return;const p=`${Si(r.companionUrl)}/api/${l.token}`;try{i=new WebSocket(p)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}i.onmessage=h=>{var v,_,U;if(!o)try{const b=JSON.parse(h.data);switch(b.action){case"progress":{const S=b.payload,z=S.bytesUploaded??0,L=S.bytesTotal??(r.size||1);e.onProgress(z,L);break}case"success":{const S=b.payload;if(i==null||i.close(),(v=S.response)!=null&&v.responseText)try{const z=JSON.parse(S.response.responseText);if(z.status==="success"){e.onComplete(z);return}e.onError(new Error(z.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{i==null||i.close();const S=b.payload;let z=((_=S.error)==null?void 0:_.message)||"Upload failed";if((U=S.response)!=null&&U.responseText)try{const L=JSON.parse(S.response.responseText);z=L.hint||L.msg||L.message||z}catch{}e.onError(new Error(z));break}}}catch{}},i.onerror=()=>{o||e.onError(new Error("Upload progress connection failed"))},i.onclose=()=>{i=null}}).catch(l=>{o||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){if(o=!0,i){try{i.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}i.close(),i=null}}}}function Dt(t){"@babel/helpers - typeof";return Dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(t)}function Ei(t,e,r){return Object.defineProperty(t,"prototype",{writable:!1}),t}function Ui(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pi(t,e,r){return e=Ze(e),zi(t,tr()?Reflect.construct(e,r||[],Ze(t).constructor):e.apply(t,r))}function zi(t,e){if(e&&(Dt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Oi(t)}function Oi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ai(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ke(t,e)}function Lt(t){var e=typeof Map=="function"?new Map:void 0;return Lt=function(r){if(r===null||!ji(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,o)}function o(){return Ri(r,arguments,Ze(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Ke(o,r)},Lt(t)}function Ri(t,e,r){if(tr())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var i=new(t.bind.apply(t,o));return r&&Ke(i,r.prototype),i}function tr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tr=function(){return!!t})()}function ji(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function Ke(t,e){return Ke=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Ke(t,e)}function Ze(t){return Ze=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ze(t)}var Ie=(function(t){function e(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Ui(this,e),o=Pi(this,e,[r]),o.originalRequest=s,o.originalResponse=n,o.causingError=i,i!=null&&(r+=", caused by ".concat(i.toString())),s!=null){var a=s.getHeader("X-Request-ID")||"n/a",l=s.getMethod(),p=s.getURL(),h=n?n.getStatus():"n/a",v=n?n.getBody()||"":"n/a";r+=", originated from request (method: ".concat(l,", url: ").concat(p,", response code: ").concat(h,", response text: ").concat(v,", request id: ").concat(a,")")}return o.message=r,o}return Ai(e,t),Ei(e)})(Lt(Error));function Je(t){"@babel/helpers - typeof";return Je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Je(t)}function Ti(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Di(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Fi(o.key),o)}}function Li(t,e,r){return e&&Di(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Fi(t){var e=Mi(t,"string");return Je(e)=="symbol"?e:e+""}function Mi(t,e){if(Je(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Je(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Bi=(function(){function t(){Ti(this,t)}return Li(t,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(e){return Promise.resolve([])}},{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:function(e,r){return Promise.resolve(null)}}])})();const po="3.7.8",Ii=po,Te=typeof Buffer=="function",$r=typeof TextDecoder=="function"?new TextDecoder:void 0,Sr=typeof TextEncoder=="function"?new TextEncoder:void 0,Hi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",He=Array.prototype.slice.call(Hi),ct=(t=>{let e={};return t.forEach((r,o)=>e[r]=o),e})(He),qi=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,N=String.fromCharCode.bind(String),Cr=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),uo=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),fo=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),ho=t=>{let e,r,o,i,s="";const n=t.length%3;for(let a=0;a<t.length;){if((r=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255||(i=t.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=r<<16|o<<8|i,s+=He[e>>18&63]+He[e>>12&63]+He[e>>6&63]+He[e&63]}return n?s.slice(0,n-3)+"===".substring(n):s},rr=typeof btoa=="function"?t=>btoa(t):Te?t=>Buffer.from(t,"binary").toString("base64"):ho,Ft=Te?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let r=0,o=t.length;r<o;r+=4096)e.push(N.apply(null,t.subarray(r,r+4096)));return rr(e.join(""))},ht=(t,e=!1)=>e?uo(Ft(t)):Ft(t),Ni=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?N(192|e>>>6)+N(128|e&63):N(224|e>>>12&15)+N(128|e>>>6&63)+N(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return N(240|e>>>18&7)+N(128|e>>>12&63)+N(128|e>>>6&63)+N(128|e&63)}},Yi=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,go=t=>t.replace(Yi,Ni),Er=Te?t=>Buffer.from(t,"utf8").toString("base64"):Sr?t=>Ft(Sr.encode(t)):t=>rr(go(t)),Oe=(t,e=!1)=>e?uo(Er(t)):Er(t),Ur=t=>Oe(t,!0),Vi=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Wi=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return N((r>>>10)+55296)+N((r&1023)+56320);case 3:return N((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return N((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},vo=t=>t.replace(Vi,Wi),xo=t=>{if(t=t.replace(/\s+/g,""),!qi.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,r,o,i=[];for(let s=0;s<t.length;)e=ct[t.charAt(s++)]<<18|ct[t.charAt(s++)]<<12|(r=ct[t.charAt(s++)])<<6|(o=ct[t.charAt(s++)]),r===64?i.push(N(e>>16&255)):o===64?i.push(N(e>>16&255,e>>8&255)):i.push(N(e>>16&255,e>>8&255,e&255));return i.join("")},or=typeof atob=="function"?t=>atob(fo(t)):Te?t=>Buffer.from(t,"base64").toString("binary"):xo,bo=Te?t=>Cr(Buffer.from(t,"base64")):t=>Cr(or(t).split("").map(e=>e.charCodeAt(0))),mo=t=>bo(yo(t)),Xi=Te?t=>Buffer.from(t,"base64").toString("utf8"):$r?t=>$r.decode(bo(t)):t=>vo(or(t)),yo=t=>fo(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),Mt=t=>Xi(yo(t)),Gi=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},wo=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),_o=function(){const t=(e,r)=>Object.defineProperty(String.prototype,e,wo(r));t("fromBase64",function(){return Mt(this)}),t("toBase64",function(e){return Oe(this,e)}),t("toBase64URI",function(){return Oe(this,!0)}),t("toBase64URL",function(){return Oe(this,!0)}),t("toUint8Array",function(){return mo(this)})},ko=function(){const t=(e,r)=>Object.defineProperty(Uint8Array.prototype,e,wo(r));t("toBase64",function(e){return ht(this,e)}),t("toBase64URI",function(){return ht(this,!0)}),t("toBase64URL",function(){return ht(this,!0)})},Ki=()=>{_o(),ko()},Zi={version:po,VERSION:Ii,atob:or,atobPolyfill:xo,btoa:rr,btoaPolyfill:ho,fromBase64:Mt,toBase64:Oe,encode:Oe,encodeURI:Ur,encodeURL:Ur,utob:go,btou:vo,decode:Mt,isValid:Gi,fromUint8Array:ht,toUint8Array:mo,extendString:_o,extendUint8Array:ko,extendBuiltins:Ki};var Pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ji(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zr,Or;function Qi(){return Or||(Or=1,zr=function(t,e){if(e=e.split(":")[0],t=+t,!t)return!1;switch(e){case"http":case"ws":return t!==80;case"https":case"wss":return t!==443;case"ftp":return t!==21;case"gopher":return t!==70;case"file":return!1}return t!==0}),zr}var pt={},Ar;function es(){if(Ar)return pt;Ar=1;var t=Object.prototype.hasOwnProperty,e;function r(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function o(n){try{return encodeURIComponent(n)}catch{return null}}function i(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},p;p=a.exec(n);){var h=r(p[1]),v=r(p[2]);h===null||v===null||h in l||(l[h]=v)}return l}function s(n,a){a=a||"";var l=[],p,h;typeof a!="string"&&(a="?");for(h in n)if(t.call(n,h)){if(p=n[h],!p&&(p===null||p===e||isNaN(p))&&(p=""),h=o(h),p=o(p),h===null||p===null)continue;l.push(h+"="+p)}return l.length?a+l.join("&"):""}return pt.stringify=s,pt.parse=i,pt}var At,Rr;function ts(){if(Rr)return At;Rr=1;var t=Qi(),e=es(),r=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,o=/[\n\r\t]/g,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(y){return(y||"").toString().replace(r,"")}var p=[["#","hash"],["?","query"],function(y,k){return _(k.protocol)?y.replace(/\\/g,"/"):y},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};function v(y){var k;typeof window<"u"?k=window:typeof Pr<"u"?k=Pr:typeof self<"u"?k=self:k={};var x=k.location||{};y=y||x;var m={},O=typeof y,E;if(y.protocol==="blob:")m=new S(unescape(y.pathname),{});else if(O==="string"){m=new S(y,{});for(E in h)delete m[E]}else if(O==="object"){for(E in y)E in h||(m[E]=y[E]);m.slashes===void 0&&(m.slashes=i.test(y.href))}return m}function _(y){return y==="file:"||y==="ftp:"||y==="http:"||y==="https:"||y==="ws:"||y==="wss:"}function U(y,k){y=l(y),y=y.replace(o,""),k=k||{};var x=n.exec(y),m=x[1]?x[1].toLowerCase():"",O=!!x[2],E=!!x[3],T=0,R;return O?E?(R=x[2]+x[3]+x[4],T=x[2].length+x[3].length):(R=x[2]+x[4],T=x[2].length):E?(R=x[3]+x[4],T=x[3].length):R=x[4],m==="file:"?T>=2&&(R=R.slice(2)):_(m)?R=x[4]:m?O&&(R=R.slice(2)):T>=2&&_(k.protocol)&&(R=x[4]),{protocol:m,slashes:O||_(m),slashesCount:T,rest:R}}function b(y,k){if(y==="")return k;for(var x=(k||"/").split("/").slice(0,-1).concat(y.split("/")),m=x.length,O=x[m-1],E=!1,T=0;m--;)x[m]==="."?x.splice(m,1):x[m]===".."?(x.splice(m,1),T++):T&&(m===0&&(E=!0),x.splice(m,1),T--);return E&&x.unshift(""),(O==="."||O==="..")&&x.push(""),x.join("/")}function S(y,k,x){if(y=l(y),y=y.replace(o,""),!(this instanceof S))return new S(y,k,x);var m,O,E,T,R,X,oe=p.slice(),ke=typeof k,C=this,Z=0;for(ke!=="object"&&ke!=="string"&&(x=k,k=null),x&&typeof x!="function"&&(x=e.parse),k=v(k),O=U(y||"",k),m=!O.protocol&&!O.slashes,C.slashes=O.slashes||m&&k.slashes,C.protocol=O.protocol||k.protocol||"",y=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||a.test(y))||!O.slashes&&(O.protocol||O.slashesCount<2||!_(C.protocol)))&&(oe[3]=[/(.*)/,"pathname"]);Z<oe.length;Z++){if(T=oe[Z],typeof T=="function"){y=T(y,C);continue}E=T[0],X=T[1],E!==E?C[X]=y:typeof E=="string"?(R=E==="@"?y.lastIndexOf(E):y.indexOf(E),~R&&(typeof T[2]=="number"?(C[X]=y.slice(0,R),y=y.slice(R+T[2])):(C[X]=y.slice(R),y=y.slice(0,R)))):(R=E.exec(y))&&(C[X]=R[1],y=y.slice(0,R.index)),C[X]=C[X]||m&&T[3]&&k[X]||"",T[4]&&(C[X]=C[X].toLowerCase())}x&&(C.query=x(C.query)),m&&k.slashes&&C.pathname.charAt(0)!=="/"&&(C.pathname!==""||k.pathname!=="")&&(C.pathname=b(C.pathname,k.pathname)),C.pathname.charAt(0)!=="/"&&_(C.protocol)&&(C.pathname="/"+C.pathname),t(C.port,C.protocol)||(C.host=C.hostname,C.port=""),C.username=C.password="",C.auth&&(R=C.auth.indexOf(":"),~R?(C.username=C.auth.slice(0,R),C.username=encodeURIComponent(decodeURIComponent(C.username)),C.password=C.auth.slice(R+1),C.password=encodeURIComponent(decodeURIComponent(C.password))):C.username=encodeURIComponent(decodeURIComponent(C.auth)),C.auth=C.password?C.username+":"+C.password:C.username),C.origin=C.protocol!=="file:"&&_(C.protocol)&&C.host?C.protocol+"//"+C.host:"null",C.href=C.toString()}function z(y,k,x){var m=this;switch(y){case"query":typeof k=="string"&&k.length&&(k=(x||e.parse)(k)),m[y]=k;break;case"port":m[y]=k,t(k,m.protocol)?k&&(m.host=m.hostname+":"+k):(m.host=m.hostname,m[y]="");break;case"hostname":m[y]=k,m.port&&(k+=":"+m.port),m.host=k;break;case"host":m[y]=k,s.test(k)?(k=k.split(":"),m.port=k.pop(),m.hostname=k.join(":")):(m.hostname=k,m.port="");break;case"protocol":m.protocol=k.toLowerCase(),m.slashes=!x;break;case"pathname":case"hash":if(k){var O=y==="pathname"?"/":"#";m[y]=k.charAt(0)!==O?O+k:k}else m[y]=k;break;case"username":case"password":m[y]=encodeURIComponent(k);break;case"auth":var E=k.indexOf(":");~E?(m.username=k.slice(0,E),m.username=encodeURIComponent(decodeURIComponent(m.username)),m.password=k.slice(E+1),m.password=encodeURIComponent(decodeURIComponent(m.password))):m.username=encodeURIComponent(decodeURIComponent(k))}for(var T=0;T<p.length;T++){var R=p[T];R[4]&&(m[R[1]]=m[R[1]].toLowerCase())}return m.auth=m.password?m.username+":"+m.password:m.username,m.origin=m.protocol!=="file:"&&_(m.protocol)&&m.host?m.protocol+"//"+m.host:"null",m.href=m.toString(),m}function L(y){(!y||typeof y!="function")&&(y=e.stringify);var k,x=this,m=x.host,O=x.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var E=O+(x.protocol&&x.slashes||_(x.protocol)?"//":"");return x.username?(E+=x.username,x.password&&(E+=":"+x.password),E+="@"):x.password?(E+=":"+x.password,E+="@"):x.protocol!=="file:"&&_(x.protocol)&&!m&&x.pathname!=="/"&&(E+="@"),(m[m.length-1]===":"||s.test(x.hostname)&&!x.port)&&(m+=":"),E+=m+x.pathname,k=typeof x.query=="object"?y(x.query):x.query,k&&(E+=k.charAt(0)!=="?"?"?"+k:k),x.hash&&(E+=x.hash),E}return S.prototype={set:z,toString:L},S.extractProtocol=U,S.location=v,S.trimLeft=l,S.qs=e,At=S,At}var rs=ts();const os=Ji(rs);function is(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t==="x"?e:e&3|8;return r.toString(16)})}function Bt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Bt=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(c,d,u){c[d]=u.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(c,d,u){return Object.defineProperty(c,d,{value:u,enumerable:!0,configurable:!0,writable:!0}),c[d]}try{p({},"")}catch{p=function(c,d,u){return c[d]=u}}function h(c,d,u,$){var g=d&&d.prototype instanceof L?d:L,P=Object.create(g.prototype),j=new Z($||[]);return i(P,"_invoke",{value:X(c,u,j)}),P}function v(c,d,u){try{return{type:"normal",arg:c.call(d,u)}}catch($){return{type:"throw",arg:$}}}e.wrap=h;var _="suspendedStart",U="suspendedYield",b="executing",S="completed",z={};function L(){}function y(){}function k(){}var x={};p(x,n,function(){return this});var m=Object.getPrototypeOf,O=m&&m(m(pe([])));O&&O!==r&&o.call(O,n)&&(x=O);var E=k.prototype=L.prototype=Object.create(x);function T(c){["next","throw","return"].forEach(function(d){p(c,d,function(u){return this._invoke(d,u)})})}function R(c,d){function u(g,P,j,M){var B=v(c[g],c,P);if(B.type!=="throw"){var G=B.arg,J=G.value;return J&&ye(J)=="object"&&o.call(J,"__await")?d.resolve(J.__await).then(function(V){u("next",V,j,M)},function(V){u("throw",V,j,M)}):d.resolve(J).then(function(V){G.value=V,j(G)},function(V){return u("throw",V,j,M)})}M(B.arg)}var $;i(this,"_invoke",{value:function(g,P){function j(){return new d(function(M,B){u(g,P,M,B)})}return $=$?$.then(j,j):j()}})}function X(c,d,u){var $=_;return function(g,P){if($===b)throw Error("Generator is already running");if($===S){if(g==="throw")throw P;return{value:t,done:!0}}for(u.method=g,u.arg=P;;){var j=u.delegate;if(j){var M=oe(j,u);if(M){if(M===z)continue;return M}}if(u.method==="next")u.sent=u._sent=u.arg;else if(u.method==="throw"){if($===_)throw $=S,u.arg;u.dispatchException(u.arg)}else u.method==="return"&&u.abrupt("return",u.arg);$=b;var B=v(c,d,u);if(B.type==="normal"){if($=u.done?S:U,B.arg===z)continue;return{value:B.arg,done:u.done}}B.type==="throw"&&($=S,u.method="throw",u.arg=B.arg)}}}function oe(c,d){var u=d.method,$=c.iterator[u];if($===t)return d.delegate=null,u==="throw"&&c.iterator.return&&(d.method="return",d.arg=t,oe(c,d),d.method==="throw")||u!=="return"&&(d.method="throw",d.arg=new TypeError("The iterator does not provide a '"+u+"' method")),z;var g=v($,c.iterator,d.arg);if(g.type==="throw")return d.method="throw",d.arg=g.arg,d.delegate=null,z;var P=g.arg;return P?P.done?(d[c.resultName]=P.value,d.next=c.nextLoc,d.method!=="return"&&(d.method="next",d.arg=t),d.delegate=null,z):P:(d.method="throw",d.arg=new TypeError("iterator result is not an object"),d.delegate=null,z)}function ke(c){var d={tryLoc:c[0]};1 in c&&(d.catchLoc=c[1]),2 in c&&(d.finallyLoc=c[2],d.afterLoc=c[3]),this.tryEntries.push(d)}function C(c){var d=c.completion||{};d.type="normal",delete d.arg,c.completion=d}function Z(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(ke,this),this.reset(!0)}function pe(c){if(c||c===""){var d=c[n];if(d)return d.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var u=-1,$=function g(){for(;++u<c.length;)if(o.call(c,u))return g.value=c[u],g.done=!1,g;return g.value=t,g.done=!0,g};return $.next=$}}throw new TypeError(ye(c)+" is not iterable")}return y.prototype=k,i(E,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:y,configurable:!0}),y.displayName=p(k,l,"GeneratorFunction"),e.isGeneratorFunction=function(c){var d=typeof c=="function"&&c.constructor;return!!d&&(d===y||(d.displayName||d.name)==="GeneratorFunction")},e.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,k):(c.__proto__=k,p(c,l,"GeneratorFunction")),c.prototype=Object.create(E),c},e.awrap=function(c){return{__await:c}},T(R.prototype),p(R.prototype,a,function(){return this}),e.AsyncIterator=R,e.async=function(c,d,u,$,g){g===void 0&&(g=Promise);var P=new R(h(c,d,u,$),g);return e.isGeneratorFunction(d)?P:P.next().then(function(j){return j.done?j.value:P.next()})},T(E),p(E,l,"Generator"),p(E,n,function(){return this}),p(E,"toString",function(){return"[object Generator]"}),e.keys=function(c){var d=Object(c),u=[];for(var $ in d)u.push($);return u.reverse(),function g(){for(;u.length;){var P=u.pop();if(P in d)return g.value=P,g.done=!1,g}return g.done=!0,g}},e.values=pe,Z.prototype={constructor:Z,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!c)for(var d in this)d.charAt(0)==="t"&&o.call(this,d)&&!isNaN(+d.slice(1))&&(this[d]=t)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var d=this;function u(B,G){return P.type="throw",P.arg=c,d.next=B,G&&(d.method="next",d.arg=t),!!G}for(var $=this.tryEntries.length-1;$>=0;--$){var g=this.tryEntries[$],P=g.completion;if(g.tryLoc==="root")return u("end");if(g.tryLoc<=this.prev){var j=o.call(g,"catchLoc"),M=o.call(g,"finallyLoc");if(j&&M){if(this.prev<g.catchLoc)return u(g.catchLoc,!0);if(this.prev<g.finallyLoc)return u(g.finallyLoc)}else if(j){if(this.prev<g.catchLoc)return u(g.catchLoc,!0)}else{if(!M)throw Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return u(g.finallyLoc)}}}},abrupt:function(c,d){for(var u=this.tryEntries.length-1;u>=0;--u){var $=this.tryEntries[u];if($.tryLoc<=this.prev&&o.call($,"finallyLoc")&&this.prev<$.finallyLoc){var g=$;break}}g&&(c==="break"||c==="continue")&&g.tryLoc<=d&&d<=g.finallyLoc&&(g=null);var P=g?g.completion:{};return P.type=c,P.arg=d,g?(this.method="next",this.next=g.finallyLoc,z):this.complete(P)},complete:function(c,d){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&d&&(this.next=d),z},finish:function(c){for(var d=this.tryEntries.length-1;d>=0;--d){var u=this.tryEntries[d];if(u.finallyLoc===c)return this.complete(u.completion,u.afterLoc),C(u),z}},catch:function(c){for(var d=this.tryEntries.length-1;d>=0;--d){var u=this.tryEntries[d];if(u.tryLoc===c){var $=u.completion;if($.type==="throw"){var g=$.arg;C(u)}return g}}throw Error("illegal catch attempt")},delegateYield:function(c,d,u){return this.delegate={iterator:pe(c),resultName:d,nextLoc:u},this.method==="next"&&(this.arg=t),z}},e}function jr(t,e,r,o,i,s,n){try{var a=t[s](n),l=a.value}catch(p){r(p);return}a.done?e(l):Promise.resolve(l).then(o,i)}function ss(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var s=t.apply(e,r);function n(l){jr(s,o,i,n,a,"next",l)}function a(l){jr(s,o,i,n,a,"throw",l)}n(void 0)})}}function $o(t,e){return ls(t)||as(t,e)||So(t,e)||ns()}function ns(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function as(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,i,s,n,a=[],l=!0,p=!1;try{if(s=(r=r.call(t)).next,e!==0)for(;!(l=(o=s.call(r)).done)&&(a.push(o.value),a.length!==e);l=!0);}catch(h){p=!0,i=h}finally{try{if(!l&&r.return!=null&&(n=r.return(),Object(n)!==n))return}finally{if(p)throw i}}return a}}function ls(t){if(Array.isArray(t))return t}function ye(t){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(t)}function ds(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=So(t))||e){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,n=!1,a;return{s:function(){r=r.call(t)},n:function(){var l=r.next();return s=l.done,l},e:function(l){n=!0,a=l},f:function(){try{!s&&r.return!=null&&r.return()}finally{if(n)throw a}}}}function So(t,e){if(t){if(typeof t=="string")return Tr(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Tr(t,e)}}function Tr(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function Dr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function Se(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Dr(Object(r),!0).forEach(function(o){cs(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Dr(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function cs(t,e,r){return e=Co(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ps(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lr(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Co(o.key),o)}}function us(t,e,r){return e&&Lr(t.prototype,e),r&&Lr(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Co(t){var e=fs(t,"string");return ye(e)=="symbol"?e:e+""}function fs(t,e){if(ye(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(ye(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var gt="tus-v1",vt="ietf-draft-03",qe="ietf-draft-05",hs={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Eo,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:gt},yt=(function(){function t(e,r){ps(this,t),"resume"in r&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=r,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return us(t,[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then(function(r){return e._urlStorage.findUploadsByFingerprint(r)})}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e=this,r=this.file;if(!r){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![gt,vt,qe].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var i=0,s=["uploadUrl","uploadSize","uploadLengthDeferred"];i<s.length;i++){var n=s[i];if(this.options[n]){this._emitError(new Error("tus: cannot use the ".concat(n," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(r,this.options).then(function(a){return e._fingerprint=a,e._source?e._source:e.options.fileReader.openFile(r,e.options.chunkSize)}).then(function(a){if(e._source=a,e.options.uploadLengthDeferred)e._size=null;else if(e.options.uploadSize!=null){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size)){e._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(e._size=e._source.size,e._size==null){e._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}e.options.parallelUploads>1||e._parallelUploadUrls!=null?e._startParallelUpload():e._startSingleUpload()}).catch(function(a){e._emitError(a)})}},{key:"_startParallelUpload",value:function(){var e,r=this,o=this._size,i=0;this._parallelUploads=[];var s=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,n=(e=this.options.parallelUploadBoundaries)!==null&&e!==void 0?e:vs(this._source.size,s);this._parallelUploadUrls&&n.forEach(function(p,h){p.uploadUrl=r._parallelUploadUrls[h]||null}),this._parallelUploadUrls=new Array(n.length);var a=n.map(function(p,h){var v=0;return r._source.slice(p.start,p.end).then(function(_){var U=_.value;return new Promise(function(b,S){var z=Se(Se({},r.options),{},{uploadUrl:p.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:r.options.metadataForPartialUploads,headers:Se(Se({},r.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:b,onError:S,onProgress:function(y){i=i-v+y,v=y,r._emitProgress(i,o)},onUploadUrlAvailable:function(){r._parallelUploadUrls[h]=L.url,r._parallelUploadUrls.filter(function(y){return!!y}).length===n.length&&r._saveUploadInUrlStorage()}}),L=new t(U,z);L.start(),r._parallelUploads.push(L)})})}),l;Promise.all(a).then(function(){l=r._openRequest("POST",r.options.endpoint),l.setHeader("Upload-Concat","final;".concat(r._parallelUploadUrls.join(" ")));var p=Fr(r.options.metadata);return p!==""&&l.setHeader("Upload-Metadata",p),r._sendRequest(l,null)}).then(function(p){if(!Pe(p.getStatus(),200)){r._emitHttpError(l,p,"tus: unexpected response while creating upload");return}var h=p.getHeader("Location");if(h==null){r._emitHttpError(l,p,"tus: invalid or missing Location header");return}r.url=Hr(r.options.endpoint,h),"Created upload at ".concat(r.url),r._emitSuccess(p)}).catch(function(p){r._emitError(p)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(e){var r=this;if(this._parallelUploads!=null){var o=ds(this._parallelUploads),i;try{for(o.s();!(i=o.n()).done;){var s=i.value;s.abort(e)}}catch(n){o.e(n)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!e||this.url==null?Promise.resolve():t.terminate(this.url,this.options).then(function(){return r._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(e,r,o,i){this._emitError(new Ie(o,i,e,r))}},{key:"_emitError",value:function(e){var r=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),Ir(e,this._retryAttempt,this.options)){var i=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){r.start()},i);return}}if(typeof this.options.onError=="function")this.options.onError(e);else throw e}}},{key:"_emitSuccess",value:function(e){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:e})}},{key:"_emitProgress",value:function(e,r){typeof this.options.onProgress=="function"&&this.options.onProgress(e,r)}},{key:"_emitChunkComplete",value:function(e,r,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(e,r,o)}},{key:"_createUpload",value:function(){var e=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var r=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?r.setHeader("Upload-Defer-Length","1"):r.setHeader("Upload-Length","".concat(this._size));var o=Fr(this.options.metadata);o!==""&&r.setHeader("Upload-Metadata",o);var i;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,i=this._addChunkToRequest(r)):((this.options.protocol===vt||this.options.protocol===qe)&&r.setHeader("Upload-Complete","?0"),i=this._sendRequest(r,null)),i.then(function(s){if(!Pe(s.getStatus(),200)){e._emitHttpError(r,s,"tus: unexpected response while creating upload");return}var n=s.getHeader("Location");if(n==null){e._emitHttpError(r,s,"tus: invalid or missing Location header");return}if(e.url=Hr(e.options.endpoint,n),"Created upload at ".concat(e.url),typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._size===0){e._emitSuccess(s),e._source.close();return}e._saveUploadInUrlStorage().then(function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(r,s):(e._offset=0,e._performUpload())})}).catch(function(s){e._emitHttpError(r,null,"tus: failed to create upload",s)})}},{key:"_resumeUpload",value:function(){var e=this,r=this._openRequest("HEAD",this.url),o=this._sendRequest(r,null);o.then(function(i){var s=i.getStatus();if(!Pe(s,200)){if(s===423){e._emitHttpError(r,i,"tus: upload is currently locked; retry later");return}if(Pe(s,400)&&e._removeFromUrlStorage(),!e.options.endpoint){e._emitHttpError(r,i,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}e.url=null,e._createUpload();return}var n=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(n)){e._emitHttpError(r,i,"tus: invalid or missing offset value");return}var a=Number.parseInt(i.getHeader("Upload-Length"),10);if(Number.isNaN(a)&&!e.options.uploadLengthDeferred&&e.options.protocol===gt){e._emitHttpError(r,i,"tus: invalid or missing length value");return}typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then(function(){if(n===a){e._emitProgress(a,a),e._emitSuccess(i);return}e._offset=n,e._performUpload()})}).catch(function(i){e._emitHttpError(r,null,"tus: failed to resume upload",i)})}},{key:"_performUpload",value:function(){var e=this;if(!this._aborted){var r;this.options.overridePatchMethod?(r=this._openRequest("POST",this.url),r.setHeader("X-HTTP-Method-Override","PATCH")):r=this._openRequest("PATCH",this.url),r.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(r);o.then(function(i){if(!Pe(i.getStatus(),200)){e._emitHttpError(r,i,"tus: unexpected response while uploading chunk");return}e._handleUploadResponse(r,i)}).catch(function(i){e._aborted||e._emitHttpError(r,null,"tus: failed to upload chunk at offset ".concat(e._offset),i)})}}},{key:"_addChunkToRequest",value:function(e){var r=this,o=this._offset,i=this._offset+this.options.chunkSize;return e.setProgressHandler(function(s){r._emitProgress(o+s,r._size)}),this.options.protocol===gt?e.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===qe&&e.setHeader("Content-Type","application/partial-upload"),(i===Number.POSITIVE_INFINITY||i>this._size)&&!this.options.uploadLengthDeferred&&(i=this._size),this._source.slice(o,i).then(function(s){var n=s.value,a=s.done,l=n!=null&&n.size?n.size:0;r.options.uploadLengthDeferred&&a&&(r._size=r._offset+l,e.setHeader("Upload-Length","".concat(r._size)));var p=r._offset+l;return!r.options.uploadLengthDeferred&&a&&p!==r._size?Promise.reject(new Error("upload was configured with a size of ".concat(r._size," bytes, but the source is done after ").concat(p," bytes"))):n===null?r._sendRequest(e):((r.options.protocol===vt||r.options.protocol===qe)&&e.setHeader("Upload-Complete",a?"?1":"?0"),r._emitProgress(r._offset,r._size),r._sendRequest(e,n))})}},{key:"_handleUploadResponse",value:function(e,r){var o=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(e,r,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(r),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(e,r){var o=Mr(e,r,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r){e._emitError(r)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var r={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?r.parallelUploadUrls=this._parallelUploadUrls:r.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,r).then(function(o){e._urlStorageKey=o})}},{key:"_sendRequest",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return Br(e,r,this.options)}}],[{key:"terminate",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=Mr("DELETE",e,r);return Br(o,null,r).then(function(i){if(i.getStatus()!==204)throw new Ie("tus: unexpected response while terminating upload",null,o,i)}).catch(function(i){if(i instanceof Ie||(i=new Ie("tus: failed to terminate upload",i,o,null)),!Ir(i,0,r))throw i;var s=r.retryDelays[0],n=r.retryDelays.slice(1),a=Se(Se({},r),{},{retryDelays:n});return new Promise(function(l){return setTimeout(l,s)}).then(function(){return t.terminate(e,a)})})}}])})();function Fr(t){return Object.entries(t).map(function(e){var r=$o(e,2),o=r[0],i=r[1];return"".concat(o," ").concat(Zi.encode(String(i)))}).join(",")}function Pe(t,e){return t>=e&&t<e+100}function Mr(t,e,r){var o=r.httpStack.createRequest(t,e);r.protocol===vt?o.setHeader("Upload-Draft-Interop-Version","5"):r.protocol===qe?o.setHeader("Upload-Draft-Interop-Version","6"):o.setHeader("Tus-Resumable","1.0.0");for(var i=r.headers||{},s=0,n=Object.entries(i);s<n.length;s++){var a=$o(n[s],2),l=a[0],p=a[1];o.setHeader(l,p)}if(r.addRequestId){var h=is();o.setHeader("X-Request-ID",h)}return o}function Br(t,e,r){return It.apply(this,arguments)}function It(){return It=ss(Bt().mark(function t(e,r,o){var i;return Bt().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(typeof o.onBeforeRequest!="function"){s.next=3;break}return s.next=3,o.onBeforeRequest(e);case 3:return s.next=5,e.send(r);case 5:if(i=s.sent,typeof o.onAfterResponse!="function"){s.next=9;break}return s.next=9,o.onAfterResponse(e,i);case 9:return s.abrupt("return",i);case 10:case"end":return s.stop()}},t)})),It.apply(this,arguments)}function gs(){var t=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(t=!1),t}function Ir(t,e,r){return r.retryDelays==null||e>=r.retryDelays.length||t.originalRequest==null?!1:r&&typeof r.onShouldRetry=="function"?r.onShouldRetry(t,e,r):Eo(t)}function Eo(t){var e=t.originalResponse?t.originalResponse.getStatus():0;return(!Pe(e,400)||e===409||e===423)&&gs()}function Hr(t,e){return new os(e,t).toString()}function vs(t,e){for(var r=Math.floor(t/e),o=[],i=0;i<e;i++)o.push({start:r*i,end:r*(i+1)});return o[e-1].end=t,o}yt.defaultOptions=hs;var Uo=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function xs(t){return new Promise(function(e,r){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var i=o.response;e(i)},o.onerror=function(i){r(i)},o.open("GET",t),o.send()})}var bs=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function ms(t){return new Promise(function(e,r){var o=new FileReader;o.onload=function(){var i=new Uint8Array(o.result);e({value:i})},o.onerror=function(i){r(i)},o.readAsArrayBuffer(t)})}function Qe(t){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(t)}function ys(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ws(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ks(o.key),o)}}function _s(t,e,r){return e&&ws(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ks(t){var e=$s(t,"string");return Qe(e)=="symbol"?e:e+""}function $s(t,e){if(Qe(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Qe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var qr=(function(){function t(e){ys(this,t),this._file=e,this.size=e.size}return _s(t,[{key:"slice",value:function(e,r){if(bs())return ms(this._file.slice(e,r));var o=this._file.slice(e,r),i=r>=this.size;return Promise.resolve({value:o,done:i})}},{key:"close",value:function(){}}])})();function et(t){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(t)}function Ss(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cs(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Us(o.key),o)}}function Es(t,e,r){return e&&Cs(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Us(t){var e=Ps(t,"string");return et(e)=="symbol"?e:e+""}function Ps(t,e){if(et(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(et(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Nr(t){return t===void 0?0:t.size!==void 0?t.size:t.length}function zs(t,e){if(t.concat)return t.concat(e);if(t instanceof Blob)return new Blob([t,e],{type:t.type});if(t.set){var r=new t.constructor(t.length+e.length);return r.set(t),r.set(e,t.length),r}throw new Error("Unknown data type")}var Os=(function(){function t(e){Ss(this,t),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Es(t,[{key:"slice",value:function(e,r){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,r)}},{key:"_readUntilEnoughDataOrDone",value:function(e,r){var o=this,i=r<=this._bufferOffset+Nr(this._buffer);if(this._done||i){var s=this._getDataFromBuffer(e,r),n=s==null?this._done:!1;return Promise.resolve({value:s,done:n})}return this._reader.read().then(function(a){var l=a.value,p=a.done;return p?o._done=!0:o._buffer===void 0?o._buffer=l:o._buffer=zs(o._buffer,l),o._readUntilEnoughDataOrDone(e,r)})}},{key:"_getDataFromBuffer",value:function(e,r){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=Nr(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,r-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function we(t){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(t)}function Ht(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Ht=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(c,d,u){c[d]=u.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(c,d,u){return Object.defineProperty(c,d,{value:u,enumerable:!0,configurable:!0,writable:!0}),c[d]}try{p({},"")}catch{p=function(c,d,u){return c[d]=u}}function h(c,d,u,$){var g=d&&d.prototype instanceof L?d:L,P=Object.create(g.prototype),j=new Z($||[]);return i(P,"_invoke",{value:X(c,u,j)}),P}function v(c,d,u){try{return{type:"normal",arg:c.call(d,u)}}catch($){return{type:"throw",arg:$}}}e.wrap=h;var _="suspendedStart",U="suspendedYield",b="executing",S="completed",z={};function L(){}function y(){}function k(){}var x={};p(x,n,function(){return this});var m=Object.getPrototypeOf,O=m&&m(m(pe([])));O&&O!==r&&o.call(O,n)&&(x=O);var E=k.prototype=L.prototype=Object.create(x);function T(c){["next","throw","return"].forEach(function(d){p(c,d,function(u){return this._invoke(d,u)})})}function R(c,d){function u(g,P,j,M){var B=v(c[g],c,P);if(B.type!=="throw"){var G=B.arg,J=G.value;return J&&we(J)=="object"&&o.call(J,"__await")?d.resolve(J.__await).then(function(V){u("next",V,j,M)},function(V){u("throw",V,j,M)}):d.resolve(J).then(function(V){G.value=V,j(G)},function(V){return u("throw",V,j,M)})}M(B.arg)}var $;i(this,"_invoke",{value:function(g,P){function j(){return new d(function(M,B){u(g,P,M,B)})}return $=$?$.then(j,j):j()}})}function X(c,d,u){var $=_;return function(g,P){if($===b)throw Error("Generator is already running");if($===S){if(g==="throw")throw P;return{value:t,done:!0}}for(u.method=g,u.arg=P;;){var j=u.delegate;if(j){var M=oe(j,u);if(M){if(M===z)continue;return M}}if(u.method==="next")u.sent=u._sent=u.arg;else if(u.method==="throw"){if($===_)throw $=S,u.arg;u.dispatchException(u.arg)}else u.method==="return"&&u.abrupt("return",u.arg);$=b;var B=v(c,d,u);if(B.type==="normal"){if($=u.done?S:U,B.arg===z)continue;return{value:B.arg,done:u.done}}B.type==="throw"&&($=S,u.method="throw",u.arg=B.arg)}}}function oe(c,d){var u=d.method,$=c.iterator[u];if($===t)return d.delegate=null,u==="throw"&&c.iterator.return&&(d.method="return",d.arg=t,oe(c,d),d.method==="throw")||u!=="return"&&(d.method="throw",d.arg=new TypeError("The iterator does not provide a '"+u+"' method")),z;var g=v($,c.iterator,d.arg);if(g.type==="throw")return d.method="throw",d.arg=g.arg,d.delegate=null,z;var P=g.arg;return P?P.done?(d[c.resultName]=P.value,d.next=c.nextLoc,d.method!=="return"&&(d.method="next",d.arg=t),d.delegate=null,z):P:(d.method="throw",d.arg=new TypeError("iterator result is not an object"),d.delegate=null,z)}function ke(c){var d={tryLoc:c[0]};1 in c&&(d.catchLoc=c[1]),2 in c&&(d.finallyLoc=c[2],d.afterLoc=c[3]),this.tryEntries.push(d)}function C(c){var d=c.completion||{};d.type="normal",delete d.arg,c.completion=d}function Z(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(ke,this),this.reset(!0)}function pe(c){if(c||c===""){var d=c[n];if(d)return d.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var u=-1,$=function g(){for(;++u<c.length;)if(o.call(c,u))return g.value=c[u],g.done=!1,g;return g.value=t,g.done=!0,g};return $.next=$}}throw new TypeError(we(c)+" is not iterable")}return y.prototype=k,i(E,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:y,configurable:!0}),y.displayName=p(k,l,"GeneratorFunction"),e.isGeneratorFunction=function(c){var d=typeof c=="function"&&c.constructor;return!!d&&(d===y||(d.displayName||d.name)==="GeneratorFunction")},e.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,k):(c.__proto__=k,p(c,l,"GeneratorFunction")),c.prototype=Object.create(E),c},e.awrap=function(c){return{__await:c}},T(R.prototype),p(R.prototype,a,function(){return this}),e.AsyncIterator=R,e.async=function(c,d,u,$,g){g===void 0&&(g=Promise);var P=new R(h(c,d,u,$),g);return e.isGeneratorFunction(d)?P:P.next().then(function(j){return j.done?j.value:P.next()})},T(E),p(E,l,"Generator"),p(E,n,function(){return this}),p(E,"toString",function(){return"[object Generator]"}),e.keys=function(c){var d=Object(c),u=[];for(var $ in d)u.push($);return u.reverse(),function g(){for(;u.length;){var P=u.pop();if(P in d)return g.value=P,g.done=!1,g}return g.done=!0,g}},e.values=pe,Z.prototype={constructor:Z,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!c)for(var d in this)d.charAt(0)==="t"&&o.call(this,d)&&!isNaN(+d.slice(1))&&(this[d]=t)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var d=this;function u(B,G){return P.type="throw",P.arg=c,d.next=B,G&&(d.method="next",d.arg=t),!!G}for(var $=this.tryEntries.length-1;$>=0;--$){var g=this.tryEntries[$],P=g.completion;if(g.tryLoc==="root")return u("end");if(g.tryLoc<=this.prev){var j=o.call(g,"catchLoc"),M=o.call(g,"finallyLoc");if(j&&M){if(this.prev<g.catchLoc)return u(g.catchLoc,!0);if(this.prev<g.finallyLoc)return u(g.finallyLoc)}else if(j){if(this.prev<g.catchLoc)return u(g.catchLoc,!0)}else{if(!M)throw Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return u(g.finallyLoc)}}}},abrupt:function(c,d){for(var u=this.tryEntries.length-1;u>=0;--u){var $=this.tryEntries[u];if($.tryLoc<=this.prev&&o.call($,"finallyLoc")&&this.prev<$.finallyLoc){var g=$;break}}g&&(c==="break"||c==="continue")&&g.tryLoc<=d&&d<=g.finallyLoc&&(g=null);var P=g?g.completion:{};return P.type=c,P.arg=d,g?(this.method="next",this.next=g.finallyLoc,z):this.complete(P)},complete:function(c,d){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&d&&(this.next=d),z},finish:function(c){for(var d=this.tryEntries.length-1;d>=0;--d){var u=this.tryEntries[d];if(u.finallyLoc===c)return this.complete(u.completion,u.afterLoc),C(u),z}},catch:function(c){for(var d=this.tryEntries.length-1;d>=0;--d){var u=this.tryEntries[d];if(u.tryLoc===c){var $=u.completion;if($.type==="throw"){var g=$.arg;C(u)}return g}}throw Error("illegal catch attempt")},delegateYield:function(c,d,u){return this.delegate={iterator:pe(c),resultName:d,nextLoc:u},this.method==="next"&&(this.arg=t),z}},e}function Yr(t,e,r,o,i,s,n){try{var a=t[s](n),l=a.value}catch(p){r(p);return}a.done?e(l):Promise.resolve(l).then(o,i)}function As(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var s=t.apply(e,r);function n(l){Yr(s,o,i,n,a,"next",l)}function a(l){Yr(s,o,i,n,a,"throw",l)}n(void 0)})}}function Rs(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function js(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Ds(o.key),o)}}function Ts(t,e,r){return e&&js(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ds(t){var e=Ls(t,"string");return we(e)=="symbol"?e:e+""}function Ls(t,e){if(we(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(we(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Fs=(function(){function t(){Rs(this,t)}return Ts(t,[{key:"openFile",value:(function(){var e=As(Ht().mark(function o(i,s){var n;return Ht().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(Uo()&&i&&typeof i.uri<"u")){a.next=11;break}return a.prev=1,a.next=4,xs(i.uri);case 4:return n=a.sent,a.abrupt("return",new qr(n));case 8:throw a.prev=8,a.t0=a.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(a.t0));case 11:if(!(typeof i.slice=="function"&&typeof i.size<"u")){a.next=13;break}return a.abrupt("return",Promise.resolve(new qr(i)));case 13:if(typeof i.read!="function"){a.next=18;break}if(s=Number(s),Number.isFinite(s)){a.next=17;break}return a.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return a.abrupt("return",Promise.resolve(new Os(i,s)));case 18:return a.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return a.stop()}},o,null,[[1,8]])}));function r(o,i){return e.apply(this,arguments)}return r})()}])})();function Ms(t,e){return Uo()?Promise.resolve(Bs(t,e)):Promise.resolve(["tus-br",t.name,t.type,t.size,t.lastModified,e.endpoint].join("-"))}function Bs(t,e){var r=t.exif?Is(JSON.stringify(t.exif)):"noexif";return["tus-rn",t.name||"noname",t.size||"nosize",r,e.endpoint].join("/")}function Is(t){var e=0;if(t.length===0)return e;for(var r=0;r<t.length;r++){var o=t.charCodeAt(r);e=(e<<5)-e+o,e&=e}return e}function tt(t){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tt(t)}function ir(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hs(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,qs(o.key),o)}}function sr(t,e,r){return e&&Hs(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function qs(t){var e=Ns(t,"string");return tt(e)=="symbol"?e:e+""}function Ns(t,e){if(tt(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(tt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Ys=(function(){function t(){ir(this,t)}return sr(t,[{key:"createRequest",value:function(e,r){return new Vs(e,r)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),Vs=(function(){function t(e,r){ir(this,t),this._xhr=new XMLHttpRequest,this._xhr.open(e,r,!0),this._method=e,this._url=r,this._headers={}}return sr(t,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,r){this._xhr.setRequestHeader(e,r),this._headers[e]=r}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(r){r.lengthComputable&&e(r.loaded)})}},{key:"send",value:function(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,i){e._xhr.onload=function(){o(new Ws(e._xhr))},e._xhr.onerror=function(s){i(s)},e._xhr.send(r)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Ws=(function(){function t(e){ir(this,t),this._xhr=e}return sr(t,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function rt(t){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rt(t)}function Xs(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gs(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Zs(o.key),o)}}function Ks(t,e,r){return e&&Gs(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Zs(t){var e=Js(t,"string");return rt(e)=="symbol"?e:e+""}function Js(t,e){if(rt(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(rt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var qt=!1;try{qt="localStorage"in window;var Rt="tusSupport",Vr=localStorage.getItem(Rt);localStorage.setItem(Rt,Vr),Vr===null&&localStorage.removeItem(Rt)}catch(t){if(t.code===t.SECURITY_ERR||t.code===t.QUOTA_EXCEEDED_ERR)qt=!1;else throw t}var Qs=qt,en=(function(){function t(){Xs(this,t)}return Ks(t,[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var r=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(r)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,r){var o=Math.round(Math.random()*1e12),i="tus::".concat(e,"::").concat(o);return localStorage.setItem(i,JSON.stringify(r)),Promise.resolve(i)}},{key:"_findEntries",value:function(e){for(var r=[],o=0;o<localStorage.length;o++){var i=localStorage.key(o);if(i.indexOf(e)===0)try{var s=JSON.parse(localStorage.getItem(i));s.urlStorageKey=i,r.push(s)}catch{}}return r}}])})();function Re(t){"@babel/helpers - typeof";return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(t)}function tn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rn(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,zo(o.key),o)}}function on(t,e,r){return r&&rn(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function sn(t,e,r){return e=wt(e),nn(t,Po()?Reflect.construct(e,r||[],wt(t).constructor):e.apply(t,r))}function nn(t,e){if(e&&(Re(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return an(t)}function an(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Po(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Po=function(){return!!t})()}function wt(t){return wt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},wt(t)}function ln(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Nt(t,e)}function Nt(t,e){return Nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Nt(t,e)}function Wr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function ze(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Wr(Object(r),!0).forEach(function(o){dn(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Wr(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function dn(t,e,r){return e=zo(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function zo(t){var e=cn(t,"string");return Re(e)=="symbol"?e:e+""}function cn(t,e){if(Re(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Re(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Xr=ze(ze({},yt.defaultOptions),{},{httpStack:new Ys,fileReader:new Fs,urlStorage:Qs?new en:new Bi,fingerprint:Ms}),pn=(function(t){function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return tn(this,e),o=ze(ze({},Xr),o),sn(this,e,[r,o])}return ln(e,t),on(e,null,[{key:"terminate",value:function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=ze(ze({},Xr),o),yt.terminate(r,o)}}])})(yt);const un=10*1024*1024,fn=5*1024*1024,hn="https://eu-on-24001.connector.filerobot.com/files",gn="https://eu-on-24001.connector.filerobot.com/json";function vn(t,e){if(!e||!t.file)return!1;const r=e.sizeThreshold??un;return t.size>=r}function xn(t,e){const{tusConfig:r}=e,o=e.apiBase.replace(/\/+$/,""),i=r.endpoint||hn,s=r.chunkSize??fn,n=r.resumable!==!1,a=r.parallelChunks??1,l=r.retryDelays??[0,1e3,3e3,5e3],p=o.split("/").pop()||"";let h=!1,v=!1,_=!1;const U={name:t.name,type:t.type,"filerobot-folder":e.folder},b=async()=>`tus-${t.id}-${i}`,S=new pn(t.file,{endpoint:i,chunkSize:s,retryDelays:l,parallelUploads:a,storeFingerprintForResuming:n,removeFingerprintOnSuccess:!0,headers:{},metadata:U,fingerprint:b,onBeforeRequest(x){const m=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[O,E]of Object.entries(m))x.setHeader(O,E);x.setHeader("X-Filerobot-Token",p)},onUploadUrlAvailable(){S.url&&e.onUploadUrlAvailable&&!_&&(_=!0,e.onUploadUrlAvailable(S.url))},onProgress(x,m){!v&&!h&&e.onProgress(x,m)},onSuccess(){var x;if(v)return;y();const m=S.url||"",O=(x=m.match(/files\/([^/?]+)/))==null?void 0:x[1];O?mn(O,t.size).then(E=>{v||e.onComplete(E)}).catch(E=>{v||e.onError(E)}):e.onComplete({status:"success",file:{uuid:"",name:t.name,extension:t.name.split(".").pop()||"",type:t.type,size:t.size,url:{public:m,cdn:m},meta:t.meta,tags:t.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(x){v||(y(),bn(x)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(x instanceof Error?x:new Error(String(x))))},onShouldRetry(x,m,O){var E;const T=(E=x.originalResponse)==null?void 0:E.getStatus();return T===429?!0:!(T&&T>400&&T<500&&T!==409)}});let z=null,L=null;typeof window<"u"&&(z=()=>{var x;!h&&!v&&(h=!0,S.abort(!1),(x=e.onPause)==null||x.call(e))},L=()=>{var x;h&&!v&&(h=!1,S.start(),(x=e.onResume)==null||x.call(e))},window.addEventListener("offline",z),window.addEventListener("online",L));const y=()=>{z&&window.removeEventListener("offline",z),L&&window.removeEventListener("online",L)},k=()=>{try{S.start()}catch(x){y(),e.onError(x instanceof Error?x:new Error(String(x)))}};return n?S.findPreviousUploads().then(x=>{x.length>0&&!v&&S.resumeFromPreviousUpload(x[0]),v||k()}):k(),{abort(){v=!0,h=!1,y(),S.abort(!0)},pause(){!h&&!v&&(h=!0,S.abort(!1))},resume(){h&&!v&&(h=!1,S.start())},isPaused(){return h}}}function bn(t){var e;if(t instanceof Ie){const r=(e=t.originalRequest)==null?void 0:e.getUnderlyingObject();return r&&typeof r.readyState=="number"&&typeof r.status=="number"?r.readyState!==0&&r.readyState!==4||r.status===0:t.originalResponse==null&&t.causingError!=null}return!1}async function mn(t,e){const r=`${gn}/${t}`,o=e>1e8?13e3:6e3,i=3;for(let s=0;s<=i;s++){s>0&&await new Promise(l=>setTimeout(l,o));const n=await fetch(r);if(n.status===404&&s<i)continue;if(!n.ok)throw new Error(`Failed to fetch file record (HTTP ${n.status})`);const a=await n.json();if(a.file)return{status:"success",file:a.file};if(a.status==="success")return a;if(!(s<i))throw new Error(a.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class yn{constructor(e,r){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=r}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let r=!1;for(const o of e.values())o.status==="idle"?(q(this.store,o.id,{status:"queued"}),r=!0):o.status==="queued"&&(r=!0);r&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const r=this.store.getState().files.get(e);!r||r.status!=="error"&&r.status!=="failed"||(q(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const r of e.values())(r.status==="error"||r.status==="failed")&&q(this.store,r.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const r=this.activeUploads.get(e);r&&"pause"in r&&(r.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,r),q(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const r=this.pausedUploads.get(e);if(!r)return;const{concurrency:o}=this.store.getState().queueConfig;this.activeUploads.size<o?(this.pausedUploads.delete(e),r.resume(),this.activeUploads.set(e,r),q(this.store,e,{status:"uploading"})):q(this.store,e,{status:"queued"})}cancelFile(e){const r=this.store.getState().files.get(e);!r||!Gr(r.status)||(this.abortPausedUpload(e),this.abortUpload(e),q(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const r of e.values())Gr(r.status)&&(this.abortPausedUpload(r.id),this.abortUpload(r.id),q(this.store,r.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const r of this.activeUploads.keys())this.abortUpload(r);for(const r of[...this.pausedUploads.keys()])this.abortPausedUpload(r);for(const r of this.retryTimers.values())clearTimeout(r);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:r}=e.queueConfig,o=this.activeUploads.size,i=r-o;if(i<=0)return;const s=[...e.files.values()].filter(n=>n.status==="queued").sort((n,a)=>n.retryCount!==a.retryCount?a.retryCount-n.retryCount:n.addedAt-a.addedAt).slice(0,i);for(const n of s){const a=this.pausedUploads.get(n.id);a?(this.pausedUploads.delete(n.id),a.resume(),this.activeUploads.set(n.id,a),q(this.store,n.id,{status:"uploading"})):this.startUpload(n)}}startUpload(e){const r=!e.remoteInfo&&!e.remoteUrl&&vn(e,this.config.tusConfig);q(this.store,e.id,{status:"uploading",error:null,isTus:r});let o=0,i=Date.now(),s=0;const n={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:p=>this.handleComplete(e.id,p),onError:p=>this.handleError(e.id,p)},a=(p,h)=>{const v=Date.now(),_=(v-i)/1e3;if(_>0){const b=(p-o)/_;s=s===0?b:.3*b+.7*s}o=p,i=v;const U=h>0?Math.min(p/h*100,100):0;q(this.store,e.id,{progress:U,bytesUploaded:p,speed:s}),this.updateTotalProgress()};let l;if(e.remoteInfo)l=Ci(e,{...n,onProgress:a});else if(e.remoteUrl)l=_i(e,n);else if(r){const p=xn(e,{...n,onProgress:a,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:h=>{q(this.store,e.id,{tusUploadUrl:h})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,p),q(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,p),q(this.store,e.id,{status:"uploading"})}});l=p}else l=wi(e,{...n,onProgress:a});this.activeUploads.set(e.id,l)}handleComplete(e,r){this.activeUploads.delete(e),q(this.store,e,{status:"complete",progress:100,response:r}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,r){this.activeUploads.delete(e);const o=this.store.getState().files.get(e);if(!o)return;const{retryConfig:i}=this.store.getState().queueConfig,s=o.retryCount+1;if(s<=i.maxRetries){const n=Math.min(i.baseDelay*Math.pow(i.backoffFactor,o.retryCount),i.maxDelay);q(this.store,e,{status:"retrying",error:r.message,retryCount:s});const a=setTimeout(()=>{this.retryTimers.delete(e),q(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else q(this.store,e,{status:"failed",error:r.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const r=this.pausedUploads.get(e);r&&(r.abort(),this.pausedUploads.delete(e))}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const o=this.retryTimers.get(e);o&&(clearTimeout(o),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let r=0,o=0,i=0;for(const s of e.values())(s.status==="queued"||s.status==="uploading"||s.status==="paused"||s.status==="retrying"||s.status==="complete"||s.status==="failed")&&(r+=s.size,o+=s.status==="complete"?s.size:s.bytesUploaded),s.status==="uploading"&&(i+=s.speed);this.store.setState({totalBytes:r,totalBytesUploaded:o,totalSpeed:i,totalProgress:r>0?Math.min(o/r*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying"||r.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Gr(t){return t==="queued"||t==="uploading"||t==="retrying"||t==="paused"}function nr(t){return`https://api.filerobot.com/${t}`}async function wn(t,e){const r=`${nr(t)}/key/${encodeURIComponent(e)}`,o=new AbortController,i=setTimeout(()=>o.abort(),3e4);try{const s=await fetch(r,{signal:o.signal});if(clearTimeout(i),!s.ok)throw new Error(`SASS key exchange failed (HTTP ${s.status})`);const n=await s.json();if(n.status==="error")throw new Error(`SASS key exchange failed: ${n.msg||"Unknown error"}`);return n.key}catch(s){throw clearTimeout(i),s instanceof DOMException&&s.name==="AbortError"?new Error("SASS key exchange timed out"):s}}function Yt(t,e){const r={};switch(t.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");r["X-Filerobot-Key"]=e;break;case"sass-key":r["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(r["X-Filerobot-Airbox-Puid"]=t.airboxPuid),r}async function _n(t){const e=nr(t.container);if(t.mode==="security-template"){const r=await wn(t.container,t.securityTemplateId);return{apiBase:e,headers:Yt(t,r),sassKey:r}}return{apiBase:e,headers:Yt(t)}}const ar="sfx-uploader:last-upload",Oo=1;function kn(t){var e,r,o;const{file:i,previewUrl:s,...n}=t,a=t.status==="complete"&&(o=(r=(e=t.response)==null?void 0:e.file)==null?void 0:r.url)!=null&&o.cdn?t.response.file.url.cdn:null;return{...n,previewUrl:a}}function $n(){try{const t=sessionStorage.getItem(ar);if(!t)return null;const e=JSON.parse(t);return(e==null?void 0:e.__schemaVersion)!==Oo?null:e}catch{return null}}function Sn(t){try{sessionStorage.setItem(ar,JSON.stringify(t))}catch{}}const ut={save(t){if(t.length===0){this.clear();return}const e={__schemaVersion:Oo,savedAt:Date.now(),files:t.map(kn)};Sn(e)},load(){const t=$n();return t?t.files.map(e=>({...e,file:null,previewUrl:e.previewUrl??null})):null},clear(){try{sessionStorage.removeItem(ar)}catch{}}},F={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata"};let Cn=0;function Ce(){return`file-${Date.now()}-${++Cn}`}function fe(t){if(t<=0)return"0 B";const e=["B","KB","MB","GB"],r=Math.min(Math.floor(Math.log(t)/Math.log(1024)),e.length-1),o=t/Math.pow(1024,r);return`${r===0?o:o.toFixed(1)} ${e[r]}`}function jt(t){if(!isFinite(t)||t<=0)return"0s";const e=Math.round(t);if(e<60)return`${e}s`;const r=Math.floor(e/60),o=e%60;return o>0?`${r}m ${o}s`:`${r}m`}function Ao(t){var e;const r=((e=t.name.split(".").pop())==null?void 0:e.toLowerCase())??"";return t.type.startsWith("image/")?"image":t.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(r)?"vid":t.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(r)?"audio":t.type==="application/pdf"||r==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(r)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(r)?"doc":["ppt","pptx","key","odp"].includes(r)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(r)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(r)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(r)?"markup":["ttf","otf","woff","woff2","eot"].includes(r)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(r)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(r)?"binary":["sql","db","sqlite","mdb"].includes(r)?"data":"gen"}function En(t){const e=t.lastIndexOf(".");return e>=0?t.slice(e+1).toUpperCase():""}const Un="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Ro={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function Vt(t){const e=t==="_default"?"GENERIC":t.toUpperCase();return`${Un}${e}.svg?vh=${Ro[t]}`}function jo(t){const e=(t==null?void 0:t.toLowerCase().replaceAll(".",""))||"";return e in Ro?Vt(e):Vt("_default")}function To(){return Vt("_default")}const Pn={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function zn(t){var e;const r=((e=t.split(".").pop())==null?void 0:e.toLowerCase())??"";return Pn[r]||""}function On(t){return new Promise(e=>{const r=document.createElement("video");r.preload="metadata",r.muted=!0,r.playsInline=!0;const o=URL.createObjectURL(t);let i=!1;const s=()=>{i||(i=!0,e(null)),r.removeAttribute("src"),r.load(),URL.revokeObjectURL(o)};r.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=r.videoWidth||320,n.height=r.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(r,0,0,n.width,n.height),n.toBlob(l=>{i||(i=!0,e(l?URL.createObjectURL(l):null),r.removeAttribute("src"),r.load(),URL.revokeObjectURL(o))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),r.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),r.src=o,r.addEventListener("loadeddata",()=>{r.currentTime=.1},{once:!0})})}function Wt(t,e,r){var o,i;if(e.maxFileSize!=null&&t.size>0&&t.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&t.size>0){let s=t.size;for(const n of r.values())n.status!=="rejected"&&n.status!=="cancelled"&&(s+=n.size);if(s>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let s=0;for(const n of r.values())n.status!=="rejected"&&n.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,n="."+(((o=t.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(!s.some(a=>a.startsWith(".")?n===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return"File type not allowed"}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,n="."+(((i=t.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(s.some(a=>a.startsWith(".")?n===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return"File type is blocked"}return null}function An(t,e,r){return Wt(t,e,r)}function Kr(t){return t.allowedFileTypes?t.allowedFileTypes.join(","):""}const Zr={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function Rn(t){return t.filter(e=>e in Zr).map(e=>Zr[e])}var jn=Object.defineProperty,Tn=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&jn(e,r,i),i};const Dn='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Ln='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Fn='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Mn='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Ne=[{id:"device",label:"My Device",icon:Dn,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:Ln,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:Fn,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:Mn,iconColor:"#ea580c"}],Do=class extends Y{constructor(){super(...arguments),this.sources=Ne}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return f`
      ${this.sources.map(e=>f`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ve(e.brandHtml):he`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ae(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};Do.styles=W`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 24px;
      border-radius: 50px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    button:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0) scale(0.98);
    }

    :host > button > svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    :host > button > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }
  `;let Lo=Do;Tn([D({type:Array})],Lo.prototype,"sources");function Fo(t){let e=t;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const r=e.shadowRoot.querySelector("dialog[open]");if(r instanceof HTMLDialogElement)return r}e=e.parentNode}return document.body}var Bn=Object.defineProperty,Q=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Bn(e,r,i),i};const Jr=3,Xt=new CSSStyleSheet;Xt.replaceSync(`
  [data-sfx-more-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-more-dropdown] .sfx-more-dropdown { position:fixed; background:#fff; border-radius:12px; box-shadow:0 12px 40px rgba(0,0,0,0.14),0 2px 8px rgba(0,0,0,0.06); border:1px solid #e8edf5; padding:6px; min-width:210px; max-height:340px; overflow-y:auto; z-index:99999; opacity:0; visibility:hidden; pointer-events:none; transition:opacity .18s ease,visibility .18s ease,transform .18s ease; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
  [data-sfx-more-dropdown] .sfx-more-dropdown.open { opacity:1; visibility:visible; pointer-events:all; }
  [data-sfx-more-dropdown] .sfx-more-item { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:6px; border:none; background:none; width:100%; font-size:13px; font-weight:500; color:#1e293b; cursor:pointer; transition:background .15s; font-family:inherit; white-space:nowrap; }
  [data-sfx-more-dropdown] .sfx-more-item:hover { background:#f5f7fa; }
  [data-sfx-more-dropdown] .sfx-more-item-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-more-dropdown] .sfx-more-item-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; }
  [data-sfx-more-dropdown] .sfx-more-item .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-more-dropdown] .sfx-more-item .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
  [data-sfx-more-dropdown] .sfx-more-item .canva-ico { width:22px; height:22px; }
  [data-sfx-more-dropdown] .sfx-more-item .canva-ico svg { width:22px; height:22px; }
`);var Be;const K=(Be=class extends Y{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Jr,this._dragCounter=0,this._onDragEnter=t=>{t.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=t=>{t.preventDefault()},this._onDragLeave=t=>{t.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=t=>{var e;t.preventDefault(),t.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const r=Array.from(((e=t.dataTransfer)==null?void 0:e.files)??[]);r.length>0&&this._emitFiles(r)},this._onClick=t=>{const e=this.shadowRoot.querySelector(".drop-zone");if(e&&this._rippleEl){const r=e.getBoundingClientRect();this._rippleEl.style.left=`${t.clientX-r.left}px`,this._rippleEl.style.top=`${t.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.browse())},this._onFileChange=t=>{const e=t.target,r=Array.from(e.files??[]);r.length>0&&this._emitFiles(r),e.value=""},this._onPaste=t=>{var e;if(!this.isConnected||this.offsetWidth===0)return;const r=(e=t.clipboardData)==null?void 0:e.items;if(!r)return;const o=[];for(const i of r)if(i.kind==="file"){const s=i.getAsFile();s&&o.push(s)}o.length>0&&(t.preventDefault(),this._emitFiles(o))},this._portalContainer=null,this._onDocClick=t=>{var e;this._moreOpen&&((e=this._portalContainer)!=null&&e.contains(t.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=t=>{t.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var t;(t=this.fileInput)==null||t.click()}_onSourceIconClick(t){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t.id},bubbles:!0,composed:!0}))}_emitFiles(t){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:t},bubbles:!0,composed:!0}))}_toggleMore(t){t.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const t=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Fo(this).appendChild(this._portalContainer),this._injectDropdownStyles()),de(f`<div class="sfx-more-dropdown open">
          ${t.map(e=>f`
              <button
                class="sfx-more-item"
                @click=${r=>this._onMoreItemClick(e,r)}
              >
                <div class="sfx-more-item-ico">
                  ${e.brandHtml?ve(e.brandHtml):e.iconColor?f`<svg
                        viewBox="0 0 24 24"
                        style="color:${e.iconColor}"
                      >
                        ${ae(e.icon)}
                      </svg>`:he`<svg viewBox="0 0 24 24">${ae(e.icon)}</svg>`}
                </div>
                ${e.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(de(w,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Xt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Xt]))}_positionDropdown(){var t,e;const r=(t=this.shadowRoot)==null?void 0:t.querySelector(".more-wrap > button"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-dropdown");if(!r||!o)return;const i=r.getBoundingClientRect(),s=8,n=o.scrollHeight,a=o.offsetWidth,l=i.top,p=window.innerHeight-i.bottom;l>=n+s||l>p?o.style.top=`${i.top-n-s}px`:o.style.top=`${i.bottom+s}px`;let h=i.right-a;h=Math.max(8,Math.min(h,window.innerWidth-a-8)),o.style.left=`${h}px`}_onMoreItemClick(t,e){e.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(t)}_updateVisiblePills(){const t=window.innerWidth;this.sourcesLayout==="cards"?t<=480?this._visiblePills=2:t<=768?this._visiblePills=3:this._visiblePills=5:t<=768?this._visiblePills=1:this._visiblePills=Jr}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>{var e;const r=(((e=t[0])==null?void 0:e.contentRect.width)??this.getBoundingClientRect().width)>=Be._WIDE_THRESHOLD_PX;r&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!r&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(t){t.has("sourcesLayout")&&this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(de(w,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(t){return f`
      <button
        class="src-pill"
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?ve(t.brandHtml):f`<span
              class="pill-ico"
              style=${t.iconColor?`color:${t.iconColor}`:""}
            >
              ${he`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ae(t.icon)}</svg>`}
            </span>`}
        ${t.label}
      </button>
    `}_renderCard(t){return f`
      <button
        class="src-card"
        aria-label=${t.label}
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?f`<span class="card-ico">${ve(t.brandHtml)}</span>`:f`<span
              class="card-ico"
              style=${t.iconColor?`color:${t.iconColor}`:""}
            >
              ${he`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ae(t.icon)}</svg>`}
            </span>`}
        <span class="card-label">${t.label}</span>
      </button>
    `}_renderMoreCard(){return f`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="src-card"
          @click=${t=>this._toggleMore(t)}
        >
          <span
            class="card-ico"
            style="color: var(--sfx-up-text-muted, #94a3b8)"
          >
            <svg viewBox="0 0 24 24" style="fill: currentColor; stroke: none">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return f`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="more-pill"
          @click=${t=>this._toggleMore(t)}
        >
          More
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const t=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),e=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills);return f`
      <div
        class=${t}
        role="button"
        tabindex="0"
        aria-label="Drop files here or click to browse"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <div class="dz-glow"></div>
        <div class="rings">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="core">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
            </svg>
          </div>
        </div>

        <div class="title">Drag & Drop or click to <span>browse</span></div>
        ${this.compact?w:f`<div class="subtitle">Drop files anywhere on this page</div>`}
        ${!this.compact&&this.sources.length>0?f`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout==="cards"?f`
                    <div class="sources-cards">
                      ${e.map(o=>this._renderCard(o))}
                      ${r.length>0?this._renderMoreCard():w}
                    </div>
                  `:f`
                    <div class="sources-grid">
                      ${e.map(o=>this._renderPill(o))}
                      ${r.length>0?this._renderMoreDropdown():w}
                    </div>
                  `}
            `:w}
        ${this.compact&&this.sources.length>0?f`
              <div class="sources-row">
                ${this.sources.map(o=>f`
                    <button
                      class="src-ico"
                      style=${o.iconColor&&!o.brandHtml?`color:${o.iconColor}`:""}
                      data-tip=${o.label}
                      aria-label=${o.label}
                      @click=${i=>{i.stopPropagation(),this._onSourceIconClick(o)}}
                    >
                      ${o.brandHtml?ve(o.brandHtml):he`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${ae(o.icon)}</svg>`}
                    </button>
                  `)}
              </div>
            `:w}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept||w}
          @change=${this._onFileChange}
        />
      </div>
    `}},Be.styles=W`
    :host {
      display: flex;
      flex-shrink: 1;
      flex: 1;
      min-height: 0;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
    }

    :host([compact]) {
      flex: 0 0 auto;
    }

    .drop-zone {
      border: none;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      padding: 50px 40px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: auto;
      transition: background 0.22s;
      user-select: none;
      flex: 1;
    }

    .drop-zone:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drag-over .ring {
      border-color: var(--sfx-up-primary, #2563eb);
      animation-duration: 3s;
    }

    .drag-over .ring:nth-child(2) {
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.4));
      animation-duration: 2s;
    }

    .drag-over .core {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      transform: scale(1.12);
      box-shadow: 0 8px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    /* Compact state when files exist */
    .drop-zone.compact {
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
      animation: compactIn 0.3s ease both;
    }

    @keyframes compactIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Legacy radial glow element — kept hidden for back-compat.
       The real glow is now drawn as a pseudo-element of .rings so
       it is always centered on the cloud icon regardless of the
       drop-zone's size (previously .dz-glow was pinned to top: 20px
       which misaligned when the drop-zone stretched vertically). */
    .dz-glow {
      display: none;
    }

    /* --- Rings --- */
    .rings {
      width: 120px;
      height: 120px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      flex-shrink: 0;
    }

    .drop-zone:not(.compact) .rings::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 260px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(
        circle at center,
        rgba(37, 99, 235, 0.04) 0%,
        rgba(37, 99, 235, 0.02) 40%,
        transparent 70%
      );
      border-radius: 50%;
      pointer-events: none;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    .compact .rings {
      display: none;
    }

    /* --- Core icon --- */
    .core {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
      box-shadow: 0 3px 12px rgba(37, 99, 235, 0.15);
    }

    .core svg {
      width: 26px;
      height: 26px;
    }

    .drop-zone:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      margin-bottom: 6px;
      transition:
        font-size 0.3s,
        margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: opacity 0.15s;
      margin-bottom: 24px;
    }

    .compact .title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact .subtitle {
      display: none;
    }

    /* --- "or Import From" divider --- */
    .import-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      max-width: 420px;
      margin-bottom: 20px;
    }

    .import-divider::before,
    .import-divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border, #e2e8f0);
    }

    .import-divider span {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      letter-spacing: 0.3px;
    }

    .compact .import-divider {
      display: none;
    }

    /* --- Source pills grid (expanded mode) --- */
    .sources-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      min-height: 92px;
    }

    .compact .sources-grid {
      display: none;
    }

    .src-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      height: 38px;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    .src-pill:active {
      transform: translateY(0) scale(0.98);
    }

    .src-pill .pill-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .src-pill .pill-ico svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-pill .pill-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-pill .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source cards grid (expanded mode, cards layout) --- */
    .sources-cards {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 700px;
    }

    .compact .sources-cards {
      display: none;
    }

    .sources-cards > .more-wrap {
      display: contents;
    }

    .sources-cards > .more-wrap > .src-card {
      /* restore flex item behaviour lost by display:contents on the wrapper */
      flex: 1;
      min-width: 88px;
      max-width: 130px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 12px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 130px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-card:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 4px 14px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-2px);
    }

    .src-card:active {
      transform: translateY(0) scale(0.97);
    }

    .src-card .card-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
    }

    .src-card .card-ico svg {
      width: 28px;
      height: 28px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-card .card-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-card .card-label {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .src-card .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 7px;
    }

    .src-card .brand-ico svg {
      width: 24px;
      height: 24px;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* Google Drive has transparent background — show SVG at full card-ico size */
    .src-card .brand-ico[style*="transparent"] {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico[style*="transparent"] svg {
      width: 28px;
      height: 28px;
    }

    .src-card .canva-ico {
      width: 32px;
      height: 32px;
    }

    .src-card .canva-ico svg {
      width: 32px;
      height: 32px;
    }

    /* --- "More" pill + dropdown --- */
    .more-wrap {
      position: relative;
    }

    .more-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .more-pill:hover,
    .more-wrap.open .more-pill {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .more-pill:hover {
      transform: translateY(-1px);
    }

    .more-pill svg {
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
    }

    .more-chevron {
      width: 12px;
      height: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }

    .more-wrap.open .more-chevron {
      transform: rotate(180deg);
      color: currentColor;
    }

    /* Dropdown uses position:fixed to escape overflow:hidden ancestors */
    .more-dropdown {
      position: fixed;
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.14),
        0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition:
        opacity 0.18s ease,
        visibility 0.18s ease,
        transform 0.18s ease;
    }

    .more-dropdown.above {
      transform: translateY(-6px);
    }

    .more-dropdown.below {
      transform: translateY(6px);
    }

    .more-wrap.open .more-dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateY(0);
    }

    .more-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 6px;
      border: none;
      background: none;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      transition: background 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }

    .more-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-item .more-item-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .more-item-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .more-item .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* --- Brand icon container (for provider logos) --- */
    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .src-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }

    .src-ico .brand-ico svg {
      width: 12px;
      height: 12px;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico .canva-ico,
    .more-item .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-ico .canva-ico svg,
    .more-item .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source icons row (compact mode) --- */
    .sources-row {
      display: none;
    }

    .compact .sources-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      flex-shrink: 0;
      position: relative;
      z-index: 20;
    }

    .src-divider {
      width: 1px;
      height: 24px;
      background: var(--sfx-up-border, #e5e7eb);
      margin-right: 4px;
      flex-shrink: 0;
    }

    .src-ico {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-surface, #f8fafc);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      position: relative;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #6b7280);
      padding: 0;
      font-family: inherit;
    }

    .src-ico > svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-ico > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      color: var(--sfx-up-primary, #2563eb);
    }

    .src-ico::after {
      content: attr(data-tip);
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text, #374151);
      font-size: 10px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-border, #e5e7eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      padding: 3px 8px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.15s,
        visibility 0.15s;
      pointer-events: none;
      z-index: 50;
      font-family: inherit;
    }

    .src-ico:hover::after {
      opacity: 1;
      visibility: visible;
    }

    /* --- Ripple --- */
    .ripple {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0);
    }

    .ripple.go {
      animation: ripple 0.55s ease-out forwards;
    }

    /* --- Hidden input --- */
    input[type="file"] {
      display: none;
    }

    @keyframes slowSpin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ripple {
      from {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.18;
      }
      to {
        transform: translate(-50%, -50%) scale(12);
        opacity: 0;
      }
    }

    .drop-zone:focus-visible,
    .src-pill:focus-visible,
    .src-card:focus-visible,
    .more-pill:focus-visible,
    .src-ico:focus-visible,
    .more-item:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (max-width: 480px) {
      .drop-zone:not(.compact) {
        padding: 32px 20px;
      }
      .title {
        font-size: 16px;
      }
      .rings {
        width: 90px;
        height: 90px;
      }
      .core {
        width: 44px;
        height: 44px;
      }
      .core svg {
        width: 20px;
        height: 20px;
      }
    }

    /* Inline mode on a TRULY wide host (e.g. full-screen) — frame the empty
       drop-zone as a bounded bordered card so it doesn't float lost in a
       sea of whitespace. The data-wide attribute is set imperatively by a
       ResizeObserver in the component (see _onHostResize). Threshold is
       1200px of host width, which only the full-screen example reliably
       hits — embedded inline uploaders (Home demo, Sources Layout, plain
       inline) are all narrower and stay untouched. Modal mode is always
       excluded via the [mode="inline"] selector. */
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) {
      flex: 1 1 auto;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      align-self: center;
      margin-inline: auto;
      padding: 64px 48px;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 24px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .rings {
      width: 140px;
      height: 140px;
      margin-bottom: 28px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core {
      width: 68px;
      height: 68px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core svg {
      width: 30px;
      height: 30px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .title {
      font-size: 22px;
      margin-bottom: 8px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .subtitle {
      font-size: 15px;
      margin-bottom: 28px;
    }

    @media (prefers-reduced-motion: reduce) {
      .ring {
        animation: none;
      }
      .ripple.go {
        animation: none;
      }
      .drop-zone.compact {
        animation: none;
      }
    }

    /* Mobile responsive — placed at the END of the stylesheet so these
       overrides win the cascade against the base .src-pill, .title,
       .drop-zone rules declared earlier above. */
    @media (max-width: 768px) {
      :host {
        max-width: 100vw;
      }
      .drop-zone:not(.compact) {
        padding: 32px 16px;
      }
      .import-divider {
        max-width: 100%;
        margin-bottom: 14px;
      }
      .sources-grid {
        max-width: 100%;
        min-height: 0;
      }
      .src-pill {
        padding: 9px 14px;
        font-size: 13px;
      }
      .title {
        font-size: 18px;
      }
    }

    /* Galaxy Z Fold / Samsung S8+ / iPhone SE — extra narrow. */
    @media (max-width: 400px) {
      .drop-zone:not(.compact) {
        padding: 24px 12px;
      }
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `,Be._WIDE_THRESHOLD_PX=1200,Be);Q([D({type:Boolean,reflect:!0})],K.prototype,"compact");Q([D({type:Boolean,attribute:"external-drag-over"})],K.prototype,"externalDragOver");Q([D({type:String})],K.prototype,"accept");Q([D({type:Array})],K.prototype,"sources");Q([D({type:String,attribute:"sources-layout"})],K.prototype,"sourcesLayout");Q([D({type:String,reflect:!0})],K.prototype,"mode");Q([A()],K.prototype,"_dragOver");Q([A()],K.prototype,"_moreOpen");Q([A()],K.prototype,"_visiblePills");Q([lo(".ripple")],K.prototype,"_rippleEl");Q([lo('input[type="file"]')],K.prototype,"fileInput");let In=K;const Mo=class extends Y{render(){return f`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};Mo.styles=W`
    :host {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px 0;
    }

    .line {
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .label {
      font-size: 11px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #cbd5e1);
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
    }
  `;let Hn=Mo;var qn=Object.defineProperty,ce=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&qn(e,r,i),i};const Gt=new CSSStyleSheet;Gt.replaceSync(`
  [data-sfx-tile-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; pointer-events:all; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item { display:flex; align-items:center; gap:10px; width:100%; padding:8px 12px; border:none; background:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; transition:background .15s; font-family:inherit; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item:hover { background:#f5f7fa; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg.fill-icon { fill:currentColor; stroke:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico { width:22px; height:22px; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico svg { width:22px; height:22px; }
  @keyframes sfxTileDropIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }
`);const Bo=class extends Y{constructor(){super(...arguments),this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.mode="upload",this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var r;if((r=this._portalContainer)!=null&&r.contains(e.target))return;const o=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();o&&i.includes(o)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const r=e.target,o=Array.from(r.files??[]);o.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:o},bubbles:!0,composed:!0})),r.value=""}_onSourceClick(e,r){if(e.stopPropagation(),r.id==="device"){const o=this.renderRoot.querySelector('input[type="file"]');o==null||o.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:r},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Fo(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),de(f`<div class="sfx-tile-dropdown">
        ${e.map(r=>f`
          <button
            class="sfx-tile-dropdown-item"
            @click=${o=>this._onMoreSourceClick(o,r)}
          >
            <span class="sfx-tile-dropdown-ico" style=${r.iconColor&&!r.brandHtml?`color:${r.iconColor}`:""}>
              ${r.brandHtml?ve(r.brandHtml):he`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${ae(r.icon)}</svg>`}
            </span>
            ${r.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var e;const r=this.renderRoot.querySelector(".drop-tile-more"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-tile-dropdown");if(!r||!o)return;const i=r.getBoundingClientRect(),s=6,n=o.scrollHeight,a=o.offsetWidth,l=i.top,p=window.innerHeight-i.bottom;l>=n+s||l>p?o.style.top=`${i.top-n-s}px`:o.style.top=`${i.bottom+s}px`;let h=i.right-a;h=Math.max(8,Math.min(h,window.innerWidth-a-8)),o.style.left=`${h}px`}_closePortal(){this._portalContainer&&(de(w,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var e;const r=(e=this._portalContainer)==null?void 0:e.getRootNode();r&&(r.adoptedStyleSheets.includes(Gt)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,Gt]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,r){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,r)}_renderDropTile(){const e=this._dropTileMaxVisible,r=this.sources.slice(0,e),o=this.sources.slice(e);return f`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
          <div class="drop-tile-rings">
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-core">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">Drop or click to <span>browse</span></div>
          ${r.length>0?f`
            <div class="drop-tile-sources">
              ${r.map(i=>f`
                <button
                  class="drop-tile-src"
                  style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                  title=${i.label}
                  @click=${s=>this._onSourceClick(s,i)}
                >
                  ${i.brandHtml?ve(i.brandHtml):he`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ae(i.icon)}</svg>`}
                </button>
              `)}
              ${o.length>0?f`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title="More sources" @click=${i=>this._toggleMore(i)}>···</button>
                </div>
              `:w}
            </div>
          `:w}
        </div>
        <input type="file" multiple accept=${this.accept||w} @change=${this._onFileInput} />
      </div>
    `}render(){return f`
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():w}
        ${this.files.map((e,r)=>f`<sfx-file-item .file=${e} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} style="--tile-index:${r}"></sfx-file-item>`)}
      </div>
    `}};Bo.styles=W`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
      scrollbar-gutter: stable;
    }

    :host::-webkit-scrollbar {
      width: var(--sfx-scrollbar-w, 12px);
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      border-left: var(--sfx-scrollbar-inset-left, 3px) solid transparent;
      border-right: var(--sfx-scrollbar-inset-right, 3px) solid transparent;
      background-clip: padding-box;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 200px), 1fr));
      gap: 12px;
      padding: 0 var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    /* Mobile: 2 cols at <=768, 1 col at <=440. Use viewport @media not
       container queries — container queries fire on local file-list width
       which is narrow in desktop preview mode, breaking desktop layout. */
    @media (max-width: 768px) {
      :host {
        scrollbar-gutter: auto;
        padding-bottom: 0;
      }
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 0 12px 16px;
      }
    }

    @media (max-width: 440px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }

    /* --- Drop tile (first card in grid) — mirrors file-item structure
       so its natural height matches a file card at any column width */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.18s ease;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover,
    :host([drag-active]) .drop-tile {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    /* Preview area — flex:1 absorbs remaining row height so drop-tile total
       always matches the file-card height (info bar handles its own size).
       container-type lets the inner rings/icon scale with tile width via cqi. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — wider bottom padding so the source pills don't hug the
       card edge. Natural height stays close to the file-card .info area. */
    .drop-tile-info {
      padding: 12px 12px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    .drop-tile-rings {
      width: clamp(48px, 24cqi, 100px);
      height: clamp(48px, 24cqi, 100px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .drop-tile-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: tileSpin 20s linear infinite;
    }

    .drop-tile-ring:nth-child(2) {
      inset: 8px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    @keyframes tileSpin {
      to { transform: rotate(360deg); }
    }

    .drop-tile-core {
      width: clamp(32px, 14cqi, 52px);
      height: clamp(32px, 14cqi, 52px);
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
      transition: all 0.2s ease;
    }

    .drop-tile:hover .drop-tile-core {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    .drop-tile-core svg {
      width: clamp(16px, 7cqi, 26px);
      height: clamp(16px, 7cqi, 26px);
    }

    .drop-tile-text {
      font-size: clamp(12px, 3.5cqi, 15px);
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.2;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-sources {
      display: flex;
      gap: clamp(3px, 1.2cqi, 8px);
      margin-top: 8px;
    }

    .drop-tile-src {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .drop-tile-src:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .drop-tile-src svg {
      width: clamp(20px, 6cqi, 24px);
      height: clamp(20px, 6cqi, 24px);
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .drop-tile-src svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .drop-tile-src .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-src .brand-ico svg {
      width: 20px;
      height: 20px;
      stroke: none;
      stroke-width: 0;
    }

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .drop-tile-more:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .more-dropdown {
      position: absolute;
      top: 36px;
      right: 0;
      background: #fff;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 10;
      min-width: 180px;
      animation: dropIn 0.15s ease;
    }

    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .more-dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      transition: background 0.15s;
      font-family: inherit;
    }

    .more-dropdown-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-dropdown-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-dropdown-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .more-dropdown-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .more-dropdown-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .more-dropdown-ico .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .more-dropdown-ico .canva-ico {
      width: 22px;
      height: 22px;
    }

    .more-dropdown-ico .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    input[type="file"] {
      display: none;
    }

    /* Single full-width drop-tile (mobile, 1-col grid): base clamp() rules
       already size rings/core/svg smoothly (max caps are tight enough that
       the full-width tile doesn't balloon). We only bump the source buttons
       here so they're tappable on a large card. */
    @media (max-width: 440px) {
      .drop-tile-info {
        padding: 16px 12px 24px;
        gap: 6px;
      }
      .drop-tile-src,
      .drop-tile-more {
        width: 48px;
        height: 48px;
        border-radius: 10px;
      }
      .drop-tile-src svg {
        width: 22px;
        height: 22px;
      }
      .drop-tile-src .brand-ico {
        width: 32px;
        height: 32px;
      }
      .drop-tile-src .brand-ico svg {
        width: 24px;
        height: 24px;
      }
      .drop-tile-sources {
        gap: 10px;
        margin-top: 12px;
      }
    }
  `;let ie=Bo;ce([D({attribute:!1})],ie.prototype,"files");ce([D({type:Boolean})],ie.prototype,"showDropTile");ce([D({attribute:!1})],ie.prototype,"sources");ce([D({type:String})],ie.prototype,"accept");ce([D({type:String})],ie.prototype,"mode");ce([D({attribute:!1})],ie.prototype,"getLocateUrl");ce([A()],ie.prototype,"_moreOpen");ce([A()],ie.prototype,"_dropTileMaxVisible");var Nn=Object.defineProperty,st=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Nn(e,r,i),i};const Io=class extends Y{constructor(){super(...arguments),this.mode="upload",this._dims="",this._copied=!1,this._copiedTimer=null}updated(e){var r,o,i,s,n;if(e.has("file")){if(this._dims="",(o=(r=this.file)==null?void 0:r.previewUrl)!=null&&o.startsWith("blob:")){const a=this.file.previewUrl,l=new Image;l.onload=()=>{var p;((p=this.file)==null?void 0:p.previewUrl)===a&&(this._dims=`${l.naturalWidth}×${l.naturalHeight}`)},l.src=a}else if((n=(s=(i=this.file)==null?void 0:i.response)==null?void 0:s.file)!=null&&n.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...r},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const r=e.target.value.trim();r&&this._emit("file-rename",{name:r})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_locate(e){var r,o,i,s,n;if(e.stopPropagation(),!this.file)return;const a=((r=this.getLocateUrl)==null?void 0:r.call(this,this.file))||((n=(s=(i=(o=this.file)==null?void 0:o.response)==null?void 0:i.file)==null?void 0:s.url)==null?void 0:n.public);a&&window.open(a,"_blank","noopener,noreferrer")}async _copyCdn(e){var r,o,i,s;e.stopPropagation();const n=(s=(i=(o=(r=this.file)==null?void 0:r.response)==null?void 0:o.file)==null?void 0:i.url)==null?void 0:s.cdn;if(n){try{await navigator.clipboard.writeText(n)}catch{return}this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var e,r;const o=this.file;if(!o)return w;const i=Ao(o),s=o.status==="complete",n=o.status==="uploading",a=o.status==="paused",l=o.status==="error"||o.status==="failed",p=o.status==="rejected",h=this.mode==="review",v=En(o.name),_=["tile",s?"done":"",n?"uploading":"",a?"paused":"",p?"rejected":"",h?"review":""].filter(Boolean).join(" ");return f`
      <div class=${_} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${o.previewUrl?f`<img class="preview-img" src=${o.previewUrl} alt="" />`:f`
                <div class="preview-bg ${i}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${jo(v)}
                    alt="${v?`${v} file`:"File"}"
                    @error=${U=>{const b=U.target,S=To();!b.dataset.fallback&&b.src!==S&&(b.dataset.fallback="1",b.src=S)}}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!h&&!s&&!n&&!a&&!l&&o.status!=="rejected"?f`
                <button class="preview-btn" @click=${this._preview} aria-label="Details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Details
                </button>
              `:w}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${h&&s&&(r=(e=o.response)==null?void 0:e.file)!=null&&r.url?f`
                <div class="review-actions">
                  ${o.response.file.url.public?f`<button class="review-action secondary" @click=${this._locate} title=${o.response.file.url.public} aria-label="Locate file in storage">
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        Locate
                      </button>`:w}
                  ${o.response.file.url.cdn?f`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title="Copy CDN link" aria-label="Copy CDN link to clipboard">
                        ${this._copied?f`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:f`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?"Copied":"Copy CDN"}
                      </button>`:w}
                </div>
              `:w}

          <!-- Spinner overlay (uploading = spinner, paused = pause icon) -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
            <div class="pause-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>

          <!-- Done badge -->
          ${s?f`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:w}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${h&&l?f`<div class="failed-badge" title=${o.error||"Upload failed"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:w}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!h&&(o.status==="uploading"||o.status==="paused")?f`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(o.progress,100)/100})"></div>
                </div>
              `:w}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(l||p)&&o.error&&!h?f`<div class="error-badge" title=${o.error}>${o.error}</div>`:w}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(l||p)&&o.duration!=null&&o.duration>0?f`<div class="duration-badge">${this._formatDuration(o.duration)}</div>`:w}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${h?w:f`
        <div class="actions">
          ${n&&o.isTus?f`
                <button class="act-btn pause" @click=${this._pause} title="Pause" aria-label="Pause upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:w}
          ${a?f`
                <button class="act-btn resume" @click=${this._resume} title="Resume" aria-label="Resume upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:w}
          ${l?f`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:w}
          <button class="act-btn del" @click=${this._remove} title="Remove" aria-label="Remove file">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
        `}

        <!-- Info bar -->
        <div class="info">
          <input class="name-input" type="text" .value=${o.name} title=${o.name}
            aria-label="File name"
            ?readonly=${h}
            @change=${h?w:this._rename} @click=${U=>U.stopPropagation()} />
          <div class="meta">${v||""}${o.size?` · ${fe(o.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const r=Math.floor(e/60),o=Math.floor(e%60);return`${r}:${o.toString().padStart(2,"0")}`}};Io.styles=W`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      will-change: transform, opacity;
      transition: box-shadow 0.15s, transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 0;
      overflow: hidden;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
    }

    .preview-img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .preview-bg.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-bg.doc { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.audio { background: linear-gradient(135deg, #fdf4ff, #fae8ff); }
    .preview-bg.sheet { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .preview-bg.slide { background: linear-gradient(135deg, #fff7ed, #ffedd5); }
    .preview-bg.zip { background: linear-gradient(135deg, #fffbeb, #fef3c7); }
    .preview-bg.code { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); }
    .preview-bg.markup { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); }
    .preview-bg.font { background: linear-gradient(135deg, #faf5ff, #f3e8ff); }
    .preview-bg.design { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }
    .preview-bg.binary { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }
    .preview-bg.data { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
    .preview-bg.gen { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-img {
      max-width: 72px;
      max-height: 72px;
      object-fit: contain;
    }

    .duration-badge {
      position: absolute;
      bottom: 6px;
      right: 6px;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1.3;
      pointer-events: none;
      z-index: 2;
    }

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }

    .name-input {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin-bottom: 2px;
      min-width: 0;
      font-size: 12px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 1px 4px;
      background: transparent;
      font-family: inherit;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: border-color 0.15s, background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* In review mode every tile is complete — the per-tile blue ring would
       turn the whole grid into a wall of borders, so suppress it. The status
       badge in the corner already conveys "uploaded successfully". */
    .tile.review.done {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
    }

    /* --- Action buttons --- */
    .actions {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 10;
    }

    .tile:hover .actions,
    .tile:focus-within .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions { opacity: 1; }
    }

    .act-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 4px var(--sfx-up-shadow, rgba(0, 0, 0, 0.15));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, transform 0.15s;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 0;
    }

    .act-btn:hover {
      background: var(--sfx-up-border-light, #f3f4f6);
      transform: scale(1.08);
    }

    .act-btn.del:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--sfx-up-error, #dc2626);
    }

    .act-btn.retry:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .act-btn svg {
      width: 11px;
      height: 11px;
    }

    /* --- Preview button --- */
    .preview-btn {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      padding: 6px 16px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      opacity: 0;
      transition: all 0.15s ease;
      color: var(--sfx-up-primary, #2563eb);
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      z-index: 5;
    }

    .tile:hover .preview-btn,
    .tile:focus-within .preview-btn {
      opacity: 1;
    }

    @media (hover: none) {
      .preview-btn { opacity: 1; }
    }

    .preview-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-bg, #fff);
    }

    .preview-btn svg {
      width: 13px;
      height: 13px;
    }

    /* --- Progress bar --- */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.06);
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transform-origin: left;
      transition: transform 0.32s ease;
    }

    /* --- Uploading spinner overlay --- */
    .spinner-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    .tile.uploading .spinner-overlay {
      opacity: 1;
    }

    .spin-ring {
      width: 28px;
      height: 28px;
      border: 2.5px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Done badge --- */
    .done-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
    }

    .done-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: failed badge (mirrors done-badge) --- */
    .failed-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-error, #dc2626);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
      color: #fff;
    }

    .failed-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: stacked hover actions (Locate / Copy CDN) --- */
    .review-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 6;
      pointer-events: none;
    }

    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .review-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 10px;
      border: none;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
                  box-shadow 0.18s ease,
                  background 0.15s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18),
                  0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22),
                  0 1px 3px rgba(15, 23, 42, 0.1);
    }

    .review-action:active {
      transform: scale(1.02);
    }

    .review-action svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Secondary — white card style (matches Preview in design system) */
    .review-action.secondary {
      background: rgba(255, 255, 255, 0.96);
      color: var(--sfx-up-text, #1e293b);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    /* Primary — solid blue (matches + Select in design system) */
    .review-action.primary {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .review-action.primary:hover {
      background: var(--sfx-up-primary-hover, #1d4ed8);
    }

    /* Brief green flash after a successful clipboard copy */
    .review-action.copied {
      background: #16a34a !important;
      color: #fff;
    }

    /* --- Error / rejected state --- */
    .error-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring { display: none; }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon { display: flex; }

    .act-btn.pause:hover {
      background: var(--warning-10, #fef3c7);
      color: var(--sfx-up-warning, #d97706);
    }

    .act-btn.resume:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    @keyframes tileIn {
      0% {
        opacity: 0;
        transform: scale(0.92) translateY(14px);
      }
      60% {
        opacity: 1;
      }
      80% {
        transform: scale(1.02) translateY(-2px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    .tile:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .act-btn:focus-visible,
    .preview-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { animation: none; }
      .spin-ring { animation: none; }
    }
  `;let De=Io;st([D({attribute:!1})],De.prototype,"file");st([D({type:String})],De.prototype,"mode");st([D({attribute:!1})],De.prototype,"getLocateUrl");st([A()],De.prototype,"_dims");st([A()],De.prototype,"_copied");const nt=W`
  .btn,
  .btn-ghost,
  .btn-primary,
  .btn-sec,
  .btn-retry,
  .btn-upload,
  .btn-danger {
    height: 36px;
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .btn svg,
  .btn-ghost svg,
  .btn-primary svg,
  .btn-sec svg,
  .btn-retry svg,
  .btn-upload svg,
  .btn-danger svg {
    width: 14px;
    height: 14px;
  }

  .btn-ghost {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: 1.5px solid var(--sfx-up-border, #e2e8f0);
  }

  .btn-ghost:hover {
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text-secondary, #64748b);
    border-color: var(--sfx-up-border, #d1dff0);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: var(--primary-foreground, #fff);
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,at=W`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Yn=Object.defineProperty,Le=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Yn(e,r,i),i};const Qr=7,Vn=4,Ho=class extends Y{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this._maxThumbs=Qr,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?Vn:Qr;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),r=this.thumbnails.length-this._maxThumbs,o=this.fileCount>0,i=this.failedFiles.length>0,s=i&&!o;return f`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s?"error":i?"warning":""}">
          ${s?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:i?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${s?"Upload failed":i?"Partially uploaded":"Uploaded successfully!"}</div>
        <div class="subtitle">${s?`${this.failedFiles.length===1?"File":"Files"} could not be uploaded`:i?`${this.fileCount} ${this.fileCount===1?"file":"files"} uploaded, ${this.failedFiles.length} failed`:"All files are ready for use"}</div>

        ${e.length>0?f`
              <div class="thumbs">
                ${e.map(n=>f`<img class="thumb" src=${n} alt="" />`)}
                ${r>0?f`<div class="thumb-more">+${r}</div>`:w}
              </div>
            `:w}

        ${o?f`<div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${fe(this.totalSize)} uploaded</div>`:w}

        ${i?f`
            <div class="failed-list">
              ${this.failedFiles.map(n=>f`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${n.name}</div>
                    <div class="failed-reason">${n.error}</div>
                  </div>
                  <button class="failed-retry" title="Retry" @click=${()=>this._retryFile(n.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `:w}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${o||i?f`<button class="btn-ghost" @click=${this._reviewFiles}>Review files (${this.fileCount+this.failedFiles.length})</button>`:w}
          ${i?f`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>`:w}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Ho.styles=[nt,at,W`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
      position: relative;
      overflow-y: auto;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      animation: fadeUp 0.4s ease both;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #f0fdf4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: #22c55e;
      box-shadow: none;
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .icon.warning {
      background: #fffbeb;
      color: #f59e0b;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #0f172a);
      letter-spacing: -0.4px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.6;
      max-width: 320px;
      margin-bottom: 20px;
    }

    /* --- Thumbnail strip --- */
    .thumbs {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 14px;
    }

    .thumb {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .thumb-more {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      border: 1px solid var(--sfx-up-border, #e8eaed);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Summary chip --- */
    .summary {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-surface, #f8fafc);
      border-radius: 8px;
      padding: 6px 14px;
      margin-bottom: 22px;
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    .actions .btn-primary {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      box-shadow: 0 2px 10px rgba(34, 197, 94, 0.28);
    }

    .actions .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #16a34a, #15803d);
      box-shadow: 0 4px 16px rgba(34, 197, 94, 0.38);
    }

    /* --- Failed files list --- */
    .failed-list {
      width: 100%;
      max-width: 400px;
      max-height: 200px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e8eaed);
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.15) transparent;
    }

    .failed-list::-webkit-scrollbar {
      width: 6px;
    }

    .failed-list::-webkit-scrollbar-track {
      background: transparent;
      margin: 6px 0;
    }

    .failed-list::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 3px;
    }

    .failed-list::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.25);
    }

    .failed-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid var(--sfx-up-border, #f1f5f9);
      margin-right: 8px;
    }

    .failed-item:last-child {
      border-bottom: none;
    }

    .failed-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #ef4444;
      margin-top: 1px;
    }

    .failed-info {
      flex: 1;
      min-width: 0;
    }

    .failed-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .failed-reason {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.4;
    }

    .failed-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin-top: -2px;
    }

    .failed-retry svg { width: 14px; height: 14px; }

    .failed-retry:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-primary-hover, #1d4ed8); }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0;
    }

    .close-btn svg { width: 16px; height: 16px; }

    .close-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

    .btn-retry-all {
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: #fff;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .btn-retry-all:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @media (max-width: 768px) {
      :host {
        padding: 16px 12px;
        align-items: flex-start;
      }
      .card {
        width: 100%;
        max-width: 100%;
        padding-top: 8px;
      }
      .icon { width: 56px; height: 56px; margin-bottom: 14px; }
      .icon svg { width: 26px; height: 26px; }
      .title { font-size: 18px; }
      .subtitle { font-size: 13px; max-width: 100%; padding: 0 8px; }
      .thumb, .thumb-more { width: 48px; height: 48px; }
      .failed-list { max-width: 100%; }

      /* Stack action buttons two-up on mobile so labels don't wrap. */
      .actions {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        padding: 0 8px;
        box-sizing: border-box;
      }
      .actions > button {
        flex: 1 1 calc(50% - 8px);
        min-width: 0;
        white-space: nowrap;
      }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 17px; }
      .subtitle { max-width: 90vw; padding: 0 4px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    /* Galaxy Z Fold / S8+ — extra narrow: tighten thumb grid so 5+
       thumbs don't force horizontal overflow. */
    @media (max-width: 380px) {
      .thumbs { gap: 4px; }
      .thumb, .thumb-more { width: 40px; height: 40px; }
      .failed-list { max-width: calc(100vw - 24px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];let _e=Ho;Le([D({type:Number})],_e.prototype,"fileCount");Le([D({type:Number})],_e.prototype,"totalSize");Le([D({type:Array})],_e.prototype,"thumbnails");Le([D({type:String})],_e.prototype,"primaryLabel");Le([D({type:Array})],_e.prototype,"failedFiles");Le([A()],_e.prototype,"_maxThumbs");var Wn=Object.defineProperty,lr=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Wn(e,r,i),i};const qo=class extends Y{constructor(){super(...arguments),this.files=[],this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,r=this.files.length;return f`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title="Back">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <span class="title">Last upload <span class="count">— ${r} ${r===1?"file":"files"}</span></span>
        <div class="filters">
          <button class="chip ${this._filter==="all"?"active":""}" @click=${this._setFilter("all")}>
            All (${r})
          </button>
          <button class="chip ${this._filter==="success"?"active":""}" @click=${this._setFilter("success")}>
            ✓ Uploaded (${this._successCount})
          </button>
          ${this._failedCount>0?f`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ Failed (${this._failedCount})
              </button>`:w}
          <button class="clear-btn" @click=${this._onClear} title="Clear last upload from this browser">Clear</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?f`<div class="empty">No files match this filter.</div>`:f`<sfx-file-list .files=${e} mode="review" .getLocateUrl=${this.getLocateUrl}></sfx-file-list>`}
      </div>
    `}};qo.styles=W`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
      position: relative;
    }

    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 24px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
    }

    .back-btn:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #0f172a);
      margin-right: 8px;
    }

    .count {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 400;
    }

    .filters {
      display: flex;
      gap: 6px;
      margin-left: auto;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .chip:hover {
      background: var(--sfx-up-surface, #f8fafc);
    }

    .chip.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .clear-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-error, #dc2626);
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--sfx-up-error, #dc2626) 30%, transparent);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .clear-btn:hover {
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 8%, transparent);
    }

    .back-btn:focus-visible,
    .chip:focus-visible,
    .clear-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 16px 0 0;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .topbar { padding: 12px 16px; }
    }
  `;let $t=qo;lr([D({attribute:!1})],$t.prototype,"files");lr([D({attribute:!1})],$t.prototype,"getLocateUrl");lr([A()],$t.prototype,"_filter");customElements.define("sfx-last-upload-review",$t);var Xn=Object.defineProperty,se=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Xn(e,r,i),i};const No=class extends Y{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.uploadDisabled=!1,this.uploadDisabledReason="",this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return f`
      ${e?f`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Upload progress"
              >
                <div
                  class="progress-fill"
                  style="width:${this.uploadProgress}%"
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} files</span
              >
            </div>
          `:w}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?f`
                <button class="btn-sec" @click=${this._fillMetadata} aria-label="Fill Metadata">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">Fill Metadata</span>
                </button>
              `:w}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label="Clear">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            <span class="btn-label">Clear</span>
          </button>
          <button class="btn-sec" @click=${this._addMore} aria-label="Add more">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">Add more</span>
          </button>
          ${this.failedCount>0?f`
                <button
                  class="btn-retry"
                  @click=${this._retryAll}
                  aria-label="Retry all (${this.failedCount})"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  <span class="btn-label">Retry all (${this.failedCount})</span>
                </button>
              `:w}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",r=this.uploadState==="done",o=["btn-primary",r?"done-state":""].filter(Boolean).join(" "),i=e?"Uploading":r?"Done":"Upload";return f`
      <button
        class=${o}
        @click=${this._upload}
        ?disabled=${e||this.uploadDisabled}
        title=${this.uploadDisabled?this.uploadDisabledReason:""}
        aria-label=${i}
      >
        ${e?f`<span class="btn-spin"></span
              ><span class="btn-label">Uploading…</span>`:r?f`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="btn-label">Done!</span>
            `:f`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
              <span class="btn-label">Upload</span>
            `}
      </button>
    `}};No.styles=[nt,at,W`
      :host {
        display: flex;
        flex-direction: column;
        background: var(--sfx-up-bg, #ffffff);
        flex-shrink: 0;
        box-shadow: none;
        position: relative;
        animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        container-type: inline-size;
        container-name: actions-bar;
      }

      /* Full-column-width divider above the actions bar.
       The bar sits inside .content which is capped at
       --sfx-up-content-max-width (1600px), so a plain :host border-top
       would leave visible gaps on ultra-wide viewports. Instead we
       draw the line as a pseudo-element on the first child and push
       it 100vw to each side — the outer .inline { overflow: hidden }
       clips it back to the column width. */
      :host > :first-child {
        position: relative;
      }

      :host > :first-child::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100vw;
        right: -100vw;
        height: 1px;
        background: var(--sfx-up-border, #e2e8f0);
        pointer-events: none;
        z-index: 1;
      }

      @keyframes barSlideUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* --- Progress row --- */
      .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 24px 0;
      }

      .progress-track {
        flex: 1;
        height: 4px;
        background: var(--sfx-up-border, #e2e8f0);
        border-radius: 2px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: var(--sfx-up-primary, #2563eb);
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      .progress-label {
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        flex-shrink: 0;
      }

      /* --- Buttons row --- */
      .buttons-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      /* --- Button overrides (base in shared-styles) --- */

      .btn-sec {
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        border: 1.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
      }

      .btn-sec:hover {
        background: var(--sfx-up-primary-bg, #dbeafe);
      }

      .btn-retry {
        background: var(--destructive-10, #fef2f2);
        color: var(--sfx-up-error, #dc2626);
        border: 1.5px solid var(--sfx-up-error, rgba(220, 38, 38, 0.2));
      }

      .btn-retry:hover {
        background: var(--destructive-10, #fee2e2);
        color: var(--destructive-foreground, #b91c1c);
        border-color: var(--sfx-up-error, rgba(220, 38, 38, 0.35));
      }

      .btn-primary {
        min-width: 110px;
      }

      .btn-primary.done-state {
        background: var(--sfx-up-success, #16a34a);
        box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(22, 163, 74, 0.28));
      }

      /* --- Spinner --- */
      .btn-spin {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spinRing 0.7s linear infinite;
      }

      /* --- Count --- */
      .count {
        font-size: 14px;
        font-weight: 700;
        color: var(--sfx-up-text, #1e293b);
      }

      .count span {
        font-weight: 400;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      @keyframes spinRing {
        to {
          transform: rotate(360deg);
        }
      }

      /* Collapse the right group to icon-only when the actions bar
         itself is narrow — not when the viewport is. @container beats
         @media here because inline uploaders can live inside a column
         narrower than the browser window. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right .btn-ghost,
        .right .btn-sec,
        .right .btn-retry,
        .right .btn-primary {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .right .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
      }

      /* Very narrow: also collapse the left Fill Metadata pill. */
      @container actions-bar (max-width: 380px) {
        .left .btn-sec {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .left .btn-label {
          display: none;
        }
        .left svg {
          width: 16px;
          height: 16px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `];let re=No;se([D({type:String})],re.prototype,"uploadState");se([D({type:Number})],re.prototype,"fileCount");se([D({type:Number})],re.prototype,"totalSize");se([D({type:Number})],re.prototype,"failedCount");se([D({type:Boolean})],re.prototype,"showFillMetadata");se([D({type:Boolean})],re.prototype,"uploadDisabled");se([D({type:String})],re.prototype,"uploadDisabledReason");se([D({type:Number})],re.prototype,"completedCount");se([D({type:Number})],re.prototype,"uploadProgress");const Gn='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function dr(t,e){return r=>{if(r.key!=="Tab")return;const o=t();if(!o)return;const i=o.querySelector(e);if(!i)return;const s=Array.from(i.querySelectorAll(Gn));if(s.length===0)return;const n=s[0],a=s[s.length-1],l=o.activeElement;r.shiftKey?(l===n||!i.contains(l))&&(r.preventDefault(),a.focus()):(l===a||!i.contains(l))&&(r.preventDefault(),n.focus())}}var Kn=Object.defineProperty,cr=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Kn(e,r,i),i};const Yo=class extends Y{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=dr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var r;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((r=e.target)==null?void 0:r.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const r=new URL(this._url).pathname.split("/"),o=r[r.length-1];if(o){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");i&&(i.placeholder=o)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let r=this._name.trim();if(!r)try{const o=new URL(e).pathname.split("/");r=o[o.length-1]||"imported-file"}catch{r="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:r},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,r;(r=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||r.focus()})}render(){return f`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">Import from URL</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">File URL</label>
              <input
                id="urlInput"
                type="url"
                placeholder="https://example.com/file.pdf"
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput">File name <span class="optional">(optional)</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder="document.pdf"
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?f`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};Yo.styles=[nt,at,W`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 480px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: translateY(18px) scale(0.97);
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1a1a1a);
      flex: 1;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-border-light, #f0f0f0);
      color: var(--sfx-up-text-muted, #888);
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e4e4e4);
      color: var(--sfx-up-text, #333);
    }

    .body {
      padding: 18px 20px 20px;
    }

    .field {
      margin-bottom: 14px;
    }

    label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #aaa);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    label .optional {
      color: var(--sfx-up-border, #ccc);
      font-weight: 400;
      text-transform: none;
      letter-spacing: 0;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #ebebeb);
      border-radius: 6px;
      padding: 0 14px;
      font-size: 14px;
      font-family: inherit;
      color: var(--sfx-up-text, #1a1a1a);
      background: var(--sfx-up-border-light, #fafafa);
      transition: border-color 0.15s, background 0.15s;
      outline: none;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    input::placeholder {
      color: var(--sfx-up-text-muted, #ccc);
      text-align: center;
    }

    .error {
      font-size: 12px;
      color: var(--sfx-up-error, #dc2626);
      margin-top: -6px;
      margin-bottom: 8px;
    }

    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 18px;
    }



    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(18px) scale(0.97); }
      to { transform: translateY(0) scale(1); }
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    input:focus-visible {
      outline: none;
    }

  `];let St=Yo;cr([A()],St.prototype,"_url");cr([A()],St.prototype,"_name");cr([A()],St.prototype,"_error");var Zn=Object.defineProperty,Ct=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Zn(e,r,i),i};const Vo=class extends Y{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=dr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var e,r;const o=(e=this.shadowRoot)==null?void 0:e.querySelector("video"),i=(r=this.shadowRoot)==null?void 0:r.querySelector("canvas");!o||!i||(i.width=o.videoWidth,i.height=o.videoHeight,i.getContext("2d").drawImage(o,0,0),i.toBlob(s=>{s&&(this._captured=s,this._previewUrl=URL.createObjectURL(s),this._stopStream())},"image/jpeg",.92))},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),r=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:r},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("video");r&&(r.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return f`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">Camera</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?f`<div class="error">${this._error}</div>`:this._captured?f`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `:f`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Vo.styles=[nt,at,W`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 520px;
      height: 520px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; flex: 1; min-height: 0; justify-content: center; }

    video, canvas {
      width: 100%; flex: 1; min-height: 0; border-radius: 12px;
      background: #000; object-fit: cover;
    }

    canvas { display: none; }

    .preview-img {
      width: 100%; max-height: 320px; border-radius: 12px;
      object-fit: contain; background: #000;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-capture {
      width: 52px; height: 52px; border-radius: 50%; padding: 0;
      background: var(--sfx-up-error, #dc2626); border: 4px solid var(--sfx-up-bg, #fff);
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626), 0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
      cursor: pointer; transition: all 0.15s;
    }
    .btn-capture:hover { background: var(--destructive-foreground, #b91c1c); transform: scale(1.05); }

    .close-btn:focus-visible,
    .btn-capture:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
  `];let lt=Vo;Ct([A()],lt.prototype,"_stream");Ct([A()],lt.prototype,"_error");Ct([A()],lt.prototype,"_captured");Ct([A()],lt.prototype,"_previewUrl");var Jn=Object.defineProperty,dt=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Jn(e,r,i),i};const Wo=class extends Y{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=dr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("video");r&&(r.srcObject=this._stream),this._chunks=[];const o=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:o}),this._recorder.ondataavailable=i=>{i.data.size>0&&this._chunks.push(i.data)},this._recorder.onstop=()=>{var i;const s=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=s,this._previewUrl=URL.createObjectURL(s),(i=this._stream)==null||i.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),r=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:r},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,r;(e=this._recorder)==null||e.stop(),this._recorder=null,(r=this._stream)==null||r.getTracks().forEach(o=>o.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return f`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 21h10"/>
              </svg>
            </div>
            <div class="title">Screen cast</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?f`<div class="error">${this._error}</div>`:this._recordedBlob?f`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `:this._recording?f`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `:f`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 21h10"/>
                          </svg>
                        </div>
                        <div class="start-text">Share your screen to record a video that will be added to your uploads.</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>Start recording</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};Wo.styles=[nt,at,W`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 560px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; }

    video {
      width: 100%; max-height: 320px; border-radius: 12px;
      background: #000; object-fit: contain;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .status {
      font-size: 13px; color: var(--sfx-up-text-secondary, #475569);
      display: flex; align-items: center; gap: 8px;
    }

    .rec-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--sfx-up-error, #dc2626); animation: pulse 1s ease-in-out infinite;
    }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-danger {
      background: var(--sfx-up-error, #dc2626); color: var(--primary-foreground, #fff);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
    }
    .btn-danger:hover { background: var(--destructive-foreground, #b91c1c); }

    .start-view {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 30px 20px; text-align: center;
    }

    .start-icon {
      width: 56px; height: 56px; border-radius: 16px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex; align-items: center; justify-content: center;
    }

    .start-icon svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .start-text {
      font-size: 14px; color: var(--sfx-up-text-secondary, #475569); max-width: 300px;
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  `];let Fe=Wo;dt([A()],Fe.prototype,"_stream");dt([A()],Fe.prototype,"_recording");dt([A()],Fe.prototype,"_error");dt([A()],Fe.prototype,"_recordedBlob");dt([A()],Fe.prototype,"_previewUrl");var Qn=Object.defineProperty,Xo=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Qn(e,r,i),i};const Go=class extends Y{constructor(){super(...arguments),this.duration=6e3,this._toasts=[],this._nextId=0}show(e,r="error"){const o=++this._nextId;this._toasts=[...this._toasts,{id:o,message:e,type:r,leaving:!1}],setTimeout(()=>this._dismiss(o),this.duration)}_dismiss(e){const r=this._toasts.findIndex(i=>i.id===e);if(r===-1)return;const o=[...this._toasts];o[r]={...o[r],leaving:!0},this._toasts=o,setTimeout(()=>{this._toasts=this._toasts.filter(i=>i.id!==e)},200)}_iconForType(e){return e==="error"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?f``:f`
      <div class="toast-stack">
        ${this._toasts.map(e=>f`
            <div class="toast toast--${e.type} ${e.leaving?"leaving":""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button class="toast-close" @click=${()=>this._dismiss(e.id)} aria-label="Dismiss">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `)}
      </div>
    `}};Go.styles=W`
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
      from { opacity: 0; transform: translateY(8px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(8px) scale(0.96); }
    }
  `;let pr=Go;Xo([D({type:Number})],pr.prototype,"duration");Xo([A()],pr.prototype,"_toasts");customElements.define("sfx-toast",pr);var ea=Object.defineProperty,H=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&ea(e,r,i),i};const eo=new Set(["unsplash"]),Ee={isTus:!1,tusUploadUrl:null};var te;const I=(te=class extends Y{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._engine=null,this._cachedSources=Ne,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=t=>{this._onPreviewRename(t.detail.fileId,t.detail.name)},this._onPreviewMetadataBlur=t=>{const e=this._previewFileId;if(!e)return;const{key:r,value:o}=t.detail,i=this._store.getState().files.get(e);if(!i)return;const s=new Map(this._store.getState().files);s.set(e,{...i,meta:{...i.meta,[r]:o}}),this._store.setState({files:s})},this._onFilesSelected=t=>{this._processIncomingFiles(t.detail.files)},this._onDropTileSourceClick=t=>{t.stopPropagation(),this._handleSourceActivation(t.detail.source.id)},this._onSourceClick=async t=>{this._handleSourceActivation(t.detail.source)},this._handleSourceActivation=async t=>{var e,r;const o=this._mergedSources.find(i=>i.id===t);if(o!=null&&o.onActivate){try{o.onActivate(this)}catch(i){console.error(`[sfx-uploader] onActivate for custom source "${t}" threw:`,i)}return}if(t==="device"){const i=this.shadowRoot.querySelector("sfx-drop-zone");i==null||i.browse();return}if(t==="url"){this._showUrlDialog=!0;return}if(t==="camera"){this._showCameraDialog=!0;return}if(t==="screen-cast"){this._showScreenCastDialog=!0;return}if((((r=(e=this.config)==null?void 0:e.connectors)==null?void 0:r.providers)??[]).includes(t)){if(eo.has(t)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:i}=await Et(async()=>{const{SfxSearchProviderBrowser:s}=await import("./search-provider-browser-8oKVjic7-DPgtKBqn.js");return{SfxSearchProviderBrowser:s}},__vite__mapDeps([0,1,2]));customElements.define("sfx-search-provider-browser",i)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:i}=await Et(async()=>{const{SfxProviderBrowser:s}=await import("./provider-browser-_2e3p9cw-BhgnF2eh.js");return{SfxProviderBrowser:s}},__vite__mapDeps([3,1,2]));customElements.define("sfx-provider-browser",i)}this._activeConnector=t}},this._onUrlSubmit=t=>{var e,r,o;this._showUrlDialog=!1;const{url:i,name:s}=t.detail,n=(e=this.config)==null?void 0:e.callbacks,a=zn(s),l=a.startsWith("image/"),p=this._store.getState();if([...p.files.values()].some(_=>_.name===s&&_.status!=="rejected"&&_.status!=="cancelled"))return;const h=Wt({name:s,size:0,type:a},p.restrictions,p.files);if(h){const _={id:Ce(),status:"rejected",file:null,remoteUrl:i,name:s,size:0,type:a,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:h,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ee};$e(this._store,_),this._dispatchPublic(F.FILE_REJECTED,{file:_,reason:h}),(r=n==null?void 0:n.onFileRejected)==null||r.call(n,_,h);return}const v={id:Ce(),status:"idle",file:null,remoteUrl:i,name:s,size:0,type:a,previewUrl:l?i:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ee};$e(this._store,v),this._dispatchPublic(F.FILE_ADDED,{file:v}),(o=n==null?void 0:n.onFileAdded)==null||o.call(n,v),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=t=>{this._showCameraDialog=!1,this._processIncomingFiles([t.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=t=>{this._showScreenCastDialog=!1,this._processIncomingFiles([t.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=t=>{this._removeFile(t.detail.fileId)},this._onFilePreview=t=>{var e,r,o;const i=this._store.getState().files.get(t.detail.fileId);i&&(this._previewFileId=i.id,this._dispatchPublic(F.FILE_PREVIEW,{file:i}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onFilePreview)==null||o.call(r,i))},this._onFillMetadata=()=>{var t,e,r,o;const i=[...this._store.getState().files.values()].filter(s=>te._MODIFIABLE_STATUSES.has(s.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataOpen=!0),this._dispatchPublic(F.FILL_METADATA,{files:i}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onFillMetadata)==null||o.call(r,i)},this._onBulkMetadataSaveBatch=t=>{const{changes:e}=t.detail;if(!e.length)return;const r=new Map(this._store.getState().files);for(const{fileId:o,meta:i}of e){const s=r.get(o);s&&r.set(o,{...s,meta:{...s.meta,...i}})}this._store.setState({files:r})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1},this._onFileRetry=t=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryFile(t.detail.fileId)},this._onFilePause=t=>{var e;(e=this._engine)==null||e.pauseFile(t.detail.fileId)},this._onFileResume=t=>{var e;(e=this._engine)==null||e.resumeFile(t.detail.fileId)},this._onRetryAll=()=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryAll()},this._onClearAll=()=>{var t,e,r;const o=(t=this.config)==null?void 0:t.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(e=this._engine)==null||e.cancelAll();const i=[...this._store.getState().files.values()];for(const s of i)s.previewUrl&&URL.revokeObjectURL(s.previewUrl),this._dispatchPublic(F.FILE_REMOVED,{file:s}),(r=o==null?void 0:o.onFileRemoved)==null||r.call(o,s);this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var t;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const r=this.shadowRoot.querySelector("sfx-file-list"),o=(t=r==null?void 0:r.shadowRoot)==null?void 0:t.querySelector('input[type="file"]');o==null||o.click()},this._onUploadStart=()=>{var t;if(this._phase==="complete"){((t=this.config)==null?void 0:t.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const t=[...this._store.getState().files.values()].filter(r=>r.status==="complete"||r.status==="failed"||r.status==="error");if(t.length>0){this._reviewFiles=t,this._isReviewing=!0;return}const e=ut.load();!e||e.length===0||(this._reviewFiles=e,this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{ut.clear(),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=t=>{var e,r,o;const i=(e=this.config)==null?void 0:e.callbacks;for(const s of t.detail.files){const n=this._store.getState();if([...n.files.values()].some(p=>p.name===s.name&&p.size===s.size&&p.status!=="rejected"&&p.status!=="cancelled"))continue;const a=Wt({name:s.name,size:s.size,type:s.mimeType},n.restrictions,n.files);if(a){const p={id:Ce(),status:"rejected",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:a,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Ee};$e(this._store,p),this._dispatchPublic(F.FILE_REJECTED,{file:p,reason:a}),(r=i==null?void 0:i.onFileRejected)==null||r.call(i,p,a);continue}const l={id:Ce(),status:"idle",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Ee};$e(this._store,l),this._dispatchPublic(F.FILE_ADDED,{file:l}),(o=i==null?void 0:i.onFileAdded)==null||o.call(i,l)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=t=>{t.target===t.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,e,r,o,i;this._dispatchPublic(F.COMPLETE_ACTION,{}),(r=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCompleteAction)==null||r.call(e),((o=this.config)==null?void 0:o.mode)==="modal"?this.close():((i=this.config)==null?void 0:i.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var t,e,r;(r=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCancel)==null||r.call(e),this._dispatchPublic(F.CANCEL,{})},this._onSuccessCardClose=()=>{var t,e,r,o;((t=this.config)==null?void 0:t.mode)==="inline"?(this._dispatchPublic(F.COMPLETE_ACTION,{}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCompleteAction)==null||o.call(r),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var t,e,r,o;this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(F.CANCEL,{}),this.close()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var t,e,r,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(F.CANCEL,{}),this.close()},this._onModalBackdropClick=t=>{t.target===t.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=t=>{t.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=t=>{var e;t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const r=Array.from(((e=t.dataTransfer)==null?void 0:e.files)??[]);r.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:r}}))},this._onKeyDown=t=>{var e,r;if(t.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const o=((e=this.config)==null?void 0:e.mode)??"modal",i=((r=this.config)==null?void 0:r.header)??(o==="modal"?"close":!0);(i==="close"||i==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=t=>{var e;t.preventDefault(),this._isResizing=!0;const r=(e=this.shadowRoot)==null?void 0:e.querySelector(".preview-layout");r==null||r.classList.add("resizing"),t.target.setPointerCapture(t.pointerId)},this._onSplitPointerMove=t=>{if(!this._isResizing||this._splitRafId)return;const e=t.clientX;this._splitRafId=requestAnimationFrame(()=>{var r;this._splitRafId=0;const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-layout");if(!o)return;const i=o.getBoundingClientRect(),s=(e-i.left)/i.width*100;this._splitPct=Math.max(25,Math.min(75,s))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=t=>{t==null||t.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=t=>{this._fsDragDidMove||this._onFsToggleZoom(t)},this._fsDragDidMove=!1,this._onFsPanStart=t=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,t.preventDefault())},this._onFsPanMove=t=>{if(!this._fsDragging)return;const e=t.clientX-this._fsDragStartX,r=t.clientY-this._fsDragStartY;(Math.abs(e)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+e,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=t=>{if(!this._fullscreenZoomed||t.touches.length!==1)return;const e=t.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=t=>{if(!this._fsDragging||t.touches.length!==1)return;const e=t.touches[0],r=e.clientX-this._fsDragStartX,o=e.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),t.preventDefault()},this._onFsClose=t=>{t==null||t.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=mi(),this._storeCtrl=new yi(this,this._store)}open(){var t,e,r;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(r=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onOpen)==null||r.call(e),this._dispatchPublic(F.OPEN,{}),this.requestUpdate())}close(){var t,e,r,o;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((t=this.config)==null?void 0:t.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onClose)==null||o.call(r),this._dispatchPublic(F.CLOSE,{}),this.requestUpdate())}upload(){var t,e,r,o,i,s,n;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const a=[...this._store.getState().files.values()].filter(p=>p.status==="idle"||p.status==="queued");if((e=(t=this.config)==null?void 0:t.callbacks)!=null&&e.onBeforeUpload&&this.config.callbacks.onBeforeUpload(a)===!1)return;const l=new CustomEvent(F.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:a}});this.dispatchEvent(l)&&(this._dispatchPublic(F.UPLOAD_STARTED,{files:a}),(i=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onUploadStarted)==null||i.call(o,a),this._engine.uploadAll(),(s=this.config)!=null&&s.minimizeOnUpload&&((n=this.config)==null?void 0:n.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(t){this._processIncomingFiles(t)}resumeUpload(t){var e;if(t&&t.length>0){const r=this._store.getState().files,o=new Map(r);let i=!1;for(const s of t){const n=r.get(s.id);n&&(o.set(s.id,{...n,...s}),i=!0)}i&&this._store.setState({files:o})}this._ensureEngine(),(e=this._engine)==null||e.uploadAll()}cancelUpload(){var t;(t=this._engine)==null||t.cancelAll()}pauseFile(t){var e;(e=this._engine)==null||e.pauseFile(t)}resumeFile(t){var e;(e=this._engine)==null||e.resumeFile(t)}getFiles(){return[...this._store.getState().files.values()]}getFile(t){return this._store.getState().files.get(t)}updateFileMeta(t,e,r){const o=this._store.getState().files,i=o.get(t);if(!i||!te._MODIFIABLE_STATUSES.has(i.status))return;const s=new Map(o);s.set(t,{...i,meta:e!=null?{...i.meta,...e}:i.meta,tags:r??i.tags}),this._store.setState({files:s})}updateFilesMeta(t){const e=this._store.getState().files,r=new Map(e);let o=!1;for(const{fileId:i,meta:s,tags:n}of t){const a=e.get(i);!a||!te._MODIFIABLE_STATUSES.has(a.status)||(r.set(i,{...a,meta:s!=null?{...a.meta,...s}:a.meta,tags:n??a.tags}),o=!0)}o&&this._store.setState({files:r})}updated(t){if(t.has("config")&&this.config&&this._applyConfig(this.config),t.has("_previewFileId")&&this._previewFileId){const e=this._previewFileId,r=this._store.getState().files.get(e);r?this._getImageDimensions(r).then(o=>{this._previewFileId===e&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._applyDefaultPreviewWidth(),this._updateFloatingPortal()}_applyDefaultPreviewWidth(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");if(!e){this._previewDefaultApplied=!1;return}this._previewDefaultApplied||e.getBoundingClientRect().width<=0||(this._splitPct=62.5,this._previewDefaultApplied=!0)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const t=document.createElement("style");t.setAttribute("data-sfx-upload-float-styles",""),t.textContent=`
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:24px; right:24px; z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-title { font-size:13px; font-weight:600; color:#1e293b; }
      [data-sfx-upload-float] .float-subtitle { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-actions button:hover { background:#f8fafc; color:#374151; }
      [data-sfx-upload-float] .float-actions button svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-progress { padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-progress-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
      [data-sfx-upload-float] .float-progress-label { font-size:12px; color:#475569; }
      [data-sfx-upload-float] .float-progress-pct { font-size:12px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-progress-pct.done { color:#22c55e; }
      [data-sfx-upload-float] .float-progress-pct.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-progress-pct.error { color:#ef4444; }
      [data-sfx-upload-float] .float-bar { height:4px; background:#e8edf5; border-radius:2px; overflow:hidden; }
      [data-sfx-upload-float] .float-bar-fill { height:100%; background:#2563eb; border-radius:2px; transition:width .3s ease; }
      [data-sfx-upload-float] .float-bar-fill.done { background:#22c55e; }
      [data-sfx-upload-float] .float-bar-fill.warn { background:#f59e0b; }
      [data-sfx-upload-float] .float-bar-fill.error { background:#ef4444; }
      [data-sfx-upload-float] .float-items { max-height:200px; overflow-y:auto; }
      [data-sfx-upload-float] .float-item { display:flex; align-items:center; gap:10px; padding:8px 14px; border-bottom:1px solid #f1f5f9; overflow:hidden; }
      [data-sfx-upload-float] .float-item:last-child { border-bottom:none; }
      [data-sfx-upload-float] .float-item-thumb { width:32px; height:32px; border-radius:6px; background:#f8fafc; display:flex; align-items:center; justify-content:center; color:#94a3b8; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-thumb svg { width:16px; height:16px; }
      [data-sfx-upload-float] .float-item-info { flex:1; min-width:0; overflow:hidden; }
      [data-sfx-upload-float] .float-item-name { font-size:12px; font-weight:500; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      [data-sfx-upload-float] .float-item-size { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-item-done { width:18px; height:18px; border-radius:50%; background:#f0fdf4; color:#22c55e; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-done svg { width:12px; height:12px; }
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }
      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }
      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }
      [data-sfx-upload-float] .float-collapsed-icon.done { color:#22c55e; }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:#ef4444; }
      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }
      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }
      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }
      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sfxSpin { to{transform:rotate(360deg)} }
    `,document.head.appendChild(t)}_updateFloatingPortal(){const t=[...this._storeCtrl.state.files.values()];this._isMinimized&&t.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),de(this._renderFloatingPill(t),this._portalContainer)):this._portalContainer&&(de(w,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange()),this._hasStoredReview=ut.load()!=null}disconnectedCallback(){var t,e,r,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(e=this._portalContainer)==null||e.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const i of this._rejectedTimers.values())clearTimeout(i);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const i of this._store.getState().files.values())i.previewUrl&&URL.revokeObjectURL(i.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(t){const e={};if(t.targetFolder&&(e.targetFolder=t.targetFolder),t.restrictions&&(e.restrictions={...this._store.getState().restrictions,...t.restrictions}),t.concurrency!=null){const r=this._store.getState().queueConfig;e.queueConfig={...r,concurrency:t.concurrency}}if(t.autoProceed!=null){const r=e.queueConfig??this._store.getState().queueConfig;e.queueConfig={...r,autoProceed:t.autoProceed}}Object.keys(e).length>0&&this._store.setState(e),this._resolveAuthAndEngine(t),(t.mode==="inline"||!t.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(t){var e,r;const o=t.auth;if(o.mode==="sass-key"){this._apiBase=nr(o.container),this._authHeaders=Yt(o),this._ensureEngine(),(e=this._engine)==null||e.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(t);return}const i=++this._authResolveId;try{const s=await _n(o);if(i!==this._authResolveId)return;this._apiBase=s.apiBase,this._authHeaders=s.headers,this._ensureEngine(),(r=this._engine)==null||r.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(t)}catch(s){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",s),this._showToast(this._formatAuthError(s))}}_formatAuthError(t){var e,r;const o=t instanceof Error?t.message:String(t);return(r=(e=this.config)==null?void 0:e.auth)!=null&&r.container?o.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:o.includes("HTTP 401")||o.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":o.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":o.includes("Failed to fetch")||o.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${o}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(t,e="error"){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("sfx-toast");o==null||o.show(t,e)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new yn(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._engine.start())}async _preloadMetadataSchema(t){const e=t.metadataConfig;if(!(!e||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:r,createTagsAutocomplete:o}=await Et(async()=>{const{fetchMetadataSchema:i,createTagsAutocomplete:s}=await import("./index-DMqa8AUM-CwoboYpY.js");return{fetchMetadataSchema:i,createTagsAutocomplete:s}},__vite__mapDeps([4,1,2]));this._metadataSchema=await r(this._apiBase,this._authHeaders,e.projectUuid,e),this._metadataAutocomplete=o(this._apiBase,this._authHeaders)}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(t,e){const r=e.trim();if(!r)return;const o=this._store.getState().files.get(t);if(!o||o.name===r)return;const i=new Map(this._store.getState().files);i.set(t,{...o,name:r}),this._store.setState({files:i})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:e.enforceRequiredBeforeUpload===!0?!0:e.enforceRequiredBeforeUpload==="auto"?this._metadataSchema.forceFillingOnUpload:!1}get _hasUnfilledRequiredMetadata(){if(!this._metadataEnforcing||!this._metadataSchema)return!1;const t=this._metadataSchema.fields.filter(r=>{var o;const i=(o=this.config)==null?void 0:o.metadataConfig;return i!=null&&i.requiredFields?i.requiredFields.includes(r.ckey):r.required===1});if(t.length===0)return!1;const e=[...this._store.getState().files.values()].filter(r=>r.status==="idle"||r.status==="queued"||r.status==="rejected");return t.some(r=>e.some(o=>{const i=o.meta[r.key];return i==null?!0:Array.isArray(i)||typeof i=="string"?i.length===0:!i}))}_dispatchPublic(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}_onStoreChange(){var t,e,r,o,i,s,n,a,l,p;const h=this._store.getState(),v=this._prevStoreState;if(this._prevStoreState=h,!v)return;const _=(t=this.config)==null?void 0:t.callbacks;for(const[U,b]of h.files){const S=v.files.get(U);if(S){if(S.status!==b.status)switch(b.status){case"uploading":S.status==="paused"&&(this._dispatchPublic(F.UPLOAD_RESUMED,{file:b}),(e=_==null?void 0:_.onUploadResumed)==null||e.call(_,b));break;case"complete":b.response&&(this._dispatchPublic(F.UPLOAD_COMPLETE,{file:b,response:b.response}),(r=_==null?void 0:_.onUploadComplete)==null||r.call(_,b,b.response));break;case"error":case"failed":{const z=new Error(b.error??"Upload failed");this._dispatchPublic(F.UPLOAD_ERROR,{file:b,error:z}),(o=_==null?void 0:_.onUploadError)==null||o.call(_,b,z);break}case"retrying":this._dispatchPublic(F.UPLOAD_RETRY,{file:b,attempt:b.retryCount}),(i=_==null?void 0:_.onUploadRetry)==null||i.call(_,b,b.retryCount);break;case"paused":this._dispatchPublic(F.UPLOAD_PAUSED,{file:b}),(s=_==null?void 0:_.onUploadPaused)==null||s.call(_,b);break}b.status==="uploading"&&S.progress!==b.progress&&(this._dispatchPublic(F.UPLOAD_PROGRESS,{file:b,progress:b.progress,speed:b.speed}),(n=_==null?void 0:_.onUploadProgress)==null||n.call(_,b,b.progress,b.speed))}}if(h.totalProgress!==v.totalProgress||h.totalSpeed!==v.totalSpeed){const U=h.totalSpeed>0?(h.totalBytes-h.totalBytesUploaded)/h.totalSpeed:0;this._dispatchPublic(F.TOTAL_PROGRESS,{percentage:h.totalProgress,speed:h.totalSpeed,eta:U}),(a=_==null?void 0:_.onTotalProgress)==null||a.call(_,h.totalProgress,h.totalSpeed,U)}if(v.isUploading&&!h.isUploading){const U=[...h.files.values()];if(!U.some(b=>b.status==="cancelled")){const b=U.filter(y=>y.status==="complete"),S=U.filter(y=>y.status==="failed"||y.status==="error"),z=[...b,...S];z.length>0&&(ut.save(z),this._hasStoredReview=!0),this._dispatchPublic(F.ALL_COMPLETE,{successful:b,failed:S}),(l=_==null?void 0:_.onAllComplete)==null||l.call(_,b,S);const L=(p=this.config)==null?void 0:p.closeOnComplete;if(L){const y=typeof L=="number"?L:1500;this._closeOnCompleteTimer=setTimeout(()=>{var k,x,m;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(F.COMPLETE_ACTION,{}),(m=(x=(k=this.config)==null?void 0:k.callbacks)==null?void 0:x.onCompleteAction)==null||m.call(x),this.close())},y)}}}}get _mergedSources(){var t;const e=(t=this.config)==null?void 0:t.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Ne,this._cachedSources;const r=e.providers.length>0?Rn(e.providers):[],o=e.customSources??[],i=Ne.filter(l=>l.id==="device"||l.id==="url"),s=Ne.filter(l=>l.id!=="device"&&l.id!=="url"),n=new Set,a=[];for(const l of[...i,...r,...s,...o])if(!n.has(l.id)){if(te._RESERVED_IDS.has(l.id)&&l.onActivate){console.warn(`[sfx-uploader] Custom source id "${l.id}" conflicts with a built-in source and was skipped.`);continue}n.add(l.id),a.push(l)}return this._cachedSources=a,this._cachedSources}get _phase(){const t=this._storeCtrl.state,e=[...t.files.values()];if(e.length===0)return"empty";if(t.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return e.every(o=>r.has(o.status))&&e.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(t){var e,r,o,i;const s=(e=this.config)==null?void 0:e.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);for(const n of t){const a=this._store.getState();if([...a.files.values()].some(v=>v.name===n.name&&v.size===n.size&&v.status!=="rejected"&&v.status!=="cancelled"))continue;const l=An(n,a.restrictions,a.files);if(l){const v=n.type.startsWith("image/")?URL.createObjectURL(n):null,_={id:Ce(),status:"rejected",file:n,remoteUrl:null,name:n.name,size:n.size,type:n.type,previewUrl:v,duration:null,progress:0,speed:0,bytesUploaded:0,error:l,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ee};$e(this._store,_),this._dispatchPublic(F.FILE_REJECTED,{file:_,reason:l}),(r=s==null?void 0:s.onFileRejected)==null||r.call(s,_,l);const U=(o=this.config)==null?void 0:o.rejectedFileAutoRemoveDelay,b=U===!1||U===0||U===void 0?0:U;if(b>0){const S=_.id,z=setTimeout(()=>{this._rejectedTimers.delete(S);const L=this._store.getState().files.get(S);L&&L.status==="rejected"&&kr(this._store,S)},b);this._rejectedTimers.set(S,z)}continue}let p=null;n.type.startsWith("image/")&&(p=URL.createObjectURL(n));const h={id:Ce(),status:"idle",file:n,remoteUrl:null,name:n.name,size:n.size,type:n.type,previewUrl:p,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ee};if($e(this._store,h),this._dispatchPublic(F.FILE_ADDED,{file:h}),(i=s==null?void 0:s.onFileAdded)==null||i.call(s,h),n.type.startsWith("video/")){On(n).then(_=>{if(!_)return;const U=this._store.getState(),b=U.files.get(h.id);if(b){const S=new Map(U.files);S.set(h.id,{...b,previewUrl:_}),this._store.setState({files:S})}else URL.revokeObjectURL(_)});const v=document.createElement("video");v.preload="metadata",v.src=URL.createObjectURL(n),v.onerror=()=>{URL.revokeObjectURL(v.src)},v.onloadedmetadata=()=>{const _=v.duration;if(URL.revokeObjectURL(v.src),!isFinite(_))return;const U=this._store.getState(),b=U.files.get(h.id);if(b){const S=new Map(U.files);S.set(h.id,{...b,duration:_}),this._store.setState({files:S})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(t){var e,r,o,i;const s=this._store.getState().files.get(t);if(!s)return;const n={...s};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===s.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===s.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),s.previewUrl&&URL.revokeObjectURL(s.previewUrl),s.file){const l=this._videoBlobUrls.get(s.file);l&&(URL.revokeObjectURL(l),this._videoBlobUrls.delete(s.file))}(s.status==="uploading"||s.status==="queued"||s.status==="retrying"||s.status==="paused")&&((e=this._engine)==null||e.cancelFile(t)),kr(this._store,t),this._dimCache.delete(t);const a=this._rejectedTimers.get(t);if(a&&(clearTimeout(a),this._rejectedTimers.delete(t)),this._previewFileId===t){const l=[...this._store.getState().files.values()];this._previewFileId=l.length>0?l[0].id:null}this._dispatchPublic(F.FILE_REMOVED,{file:n}),(i=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFileRemoved)==null||i.call(o,n)}render(){var t;const e=((t=this.config)==null?void 0:t.mode)??"modal",r=[...this._storeCtrl.state.files.values()];return e==="modal"?f`
        ${this._isOpen&&!this._isMinimized?f`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast></sfx-toast>
                </div>
              </div>
            `:w}
        ${this._renderFsOverlay()}
      `:f`
      <div class="inline ${r.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return w;const t=[...this._store.getState().files.values()].filter(r=>r.previewUrl||r.type.startsWith("video/")&&r.file),e=t.findIndex(r=>r.id===this._previewFileId);return f`
      <div
        class="fs-overlay ${this._fullscreenZoomed?"zoomed":""} ${this._fsDragging?"panning":""}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile?f`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${r=>r.stopPropagation()}></video>`:f`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${r=>r.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
          ${this._fullscreenZoomed?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${e<=0} @click=${r=>{r.stopPropagation(),this._navigateFs(-1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${e>=t.length-1} @click=${r=>{r.stopPropagation(),this._navigateFs(1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `}_renderInlineHeader(t){return f`
      <div class="inline-header">
        <div class="inline-header-top">
          ${t.accent?f`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${t.accent}</span>
                </div>
              `:w}
          ${t.title?f`<h2 class="inline-header-title">${t.title}</h2>`:w}
        </div>
        ${t.description?f`<div class="inline-header-desc">${t.description}</div>`:w}
      </div>
    `}_renderHeader(){var t,e,r;if(this._phase==="complete")return w;const o=((t=this.config)==null?void 0:t.mode)??"modal";if(this._phase==="uploading"){const l=this._storeCtrl.state,p=[...l.files.values()],h=p.filter(_=>_.status==="complete").length,v=l.totalSpeed>0?(l.totalBytes-l.totalBytesUploaded)/l.totalSpeed:0;return f`
        <div class="header upload-header">
          <div class="float-header-left">
            <div class="float-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
            <div>
              <div class="float-title">
                Uploading ${p.length}
                ${p.length===1?"file":"files"}
              </div>
              <div class="float-subtitle">
                ${h} of
                ${p.length}${v>0?` · ~${jt(v)} left`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(o==="inline"&&(e=this.config)!=null&&e.inlineHeader)return w;const i=((r=this.config)==null?void 0:r.header)??(o==="modal"?"close":!0);if(i===!1)return w;const s=o==="modal"?this._onModalDismiss:this._onInlineDismiss,n=i==="back"?f`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
            @click=${s}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>`:w,a=i==="close"?f`<button
            class="header-btn header-btn-close"
            aria-label="Close"
            @click=${s}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>`:w;return f`
      <div class="header">
        ${n}
        ${i!=="back"?f` <div class="header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>`:w}
        <div class="header-title">Upload Files</div>
        ${a}
      </div>
    `}_getImageDimensions(t){return t.previewUrl?this._dimCache.has(t.id)?Promise.resolve(this._dimCache.get(t.id)):new Promise(e=>{const r=new Image;r.onload=()=>{const o={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(t.id,o),e(o)},r.onerror=()=>{this._dimCache.set(t.id,null),e(null)},r.src=t.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(t){var e;const r=this._storeCtrl.state,o=Math.round(r.totalProgress??0),i=t.filter(n=>n.status==="complete").length,s=r.totalSpeed>0?(r.totalBytes-r.totalBytesUploaded)/r.totalSpeed:0;return f`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          Uploading ${t.length} ${t.length===1?"file":"files"}
        </div>
        <div class="upload-overlay-subtitle">
          ${i} of ${t.length}
          complete${s>0?f` · ~${jt(s)} left`:w}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${o}%"></div>
        </div>
        ${(e=this.config)!=null&&e.minimizeOnUpload?f`<button
              class="upload-overlay-minimize"
              @click=${this._onMinimize}
            >
              Minimize & continue in background
            </button>`:w}
      </div>
    `}_renderFloatingPill(t){const e=this._storeCtrl.state,r=Math.round(e.totalProgress??0),o=this._phase==="complete",i=t.filter(a=>a.status==="complete").length,s=t.filter(a=>a.status==="failed").length,n=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:0;return this._isPillExpanded===!1?f`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?s>0?i>0?f`<div class="float-collapsed-icon warn">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>`:f`<div class="float-collapsed-icon error">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>`:f`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>`:f`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${o?s>0?i>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${t.length} ${t.length===1?"file":"files"}`}</span
            >
            ${o?w:f`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            <button title="Open uploader" @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title="Expand" @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button title="Close" @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      `:f`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${o?s>0?i>0?"warn":"error":"done":""}"
            >
              ${o?s>0?i>0?f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>`:f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>`:f`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>`:f`<svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                  </svg>`}
            </div>
            <div>
              <div class="float-title">
                ${o?s>0?i>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${t.length} ${t.length===1?"file":"files"}`}
              </div>
              <div class="float-subtitle">
                ${o?`${i} ${i===1?"file":"files"} uploaded${s>0?`, ${s} failed`:""}`:`${i} of ${t.length}${n>0?` · ~${jt(n)} left`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            <button title="Expand" @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title="Collapse" @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button title="Close" @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">Overall progress</span>
            <span
              class="float-progress-pct ${o?s>0?i>0?"warn":"error":"done":""}"
              >${o?"Done":`${r}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${o?s>0?i>0?"warn":"error":"done":""}"
              style="width:${o?100:r}%"
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${t.map(a=>{const l=a.status==="failed"||a.status==="error";return f`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  style=${a.previewUrl?`background-image:url(${a.previewUrl});background-size:cover;background-position:center`:""}
                >
                  ${a.previewUrl?w:f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>`}
                </div>
                <div class="float-item-info">
                  <div class="float-item-name">${a.name}</div>
                  <div class="float-item-size">${fe(a.size)}</div>
                </div>
                <div class="float-item-status">
                  ${a.status==="complete"?f`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>`:l?f` <div class="float-item-error-wrap">
                          <svg
                            class="float-item-error-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span class="float-item-tooltip"
                            >${a.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var p;this._ensureEngine(),(p=this._engine)==null||p.retryFile(a.id)}}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M21 2v6h-6" />
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                            <path d="M3 22v-6h6" />
                            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                          </svg>
                        </button>`:a.status==="paused"?f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d97706"
                        stroke-width="2"
                        width="16"
                        height="16"
                      >
                        <rect
                          x="6"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                        <rect
                          x="14"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                      </svg>`:f`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(t){var e,r,o,i,s;if(t.length===0)return w;const n=t.find(p=>p.id===this._previewFileId)??t[0],a=((e=n.name.split(".").pop())==null?void 0:e.toUpperCase())||"";new Date(n.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const l=t.reduce((p,h)=>p+(h.size||0),0);return f`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          ${((r=this.config)==null?void 0:r.mode)==="inline"&&(o=this.config)!=null&&o.inlineHeader?this._renderInlineHeader(this.config.inlineHeader):w}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${t.length} ${t.length===1?"asset":"assets"} ·
              ${fe(l)}</span
            >
          </div>
          <sfx-file-list
            .files=${t}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Kr(this._storeCtrl.state.restrictions)}
            ?drag-active=${this._bodyDragOver}
            @source-click=${this._onDropTileSourceClick}
          ></sfx-file-list>
        </div>
        <div
          class="preview-divider"
          @pointerdown=${this._onSplitPointerDown}
          @pointermove=${this._onSplitPointerMove}
          @pointerup=${this._onSplitPointerUp}
          @lostpointercapture=${this._onSplitPointerUp}
        ></div>
        <div class="preview-panel" style="flex:${100-this._splitPct}">
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${()=>{this._previewFileId=null}}
              aria-label="Back to file list"
              title="Back"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <span class="preview-header-name" title=${n.name}
              >${n.name}</span
            >
            <div class="preview-header-actions">
              ${n.previewUrl||n.type.startsWith("video/")&&n.file?f`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=n.previewUrl,this._fullscreenVideoFile=n.type.startsWith("video/")&&n.file?n.file:null,this._fullscreenZoomed=!1,requestAnimationFrame(()=>this.requestUpdate())}}
                      title="Fullscreen"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  `:w}
              <button
                @click=${()=>{this._previewFileId=null}}
                title="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          ${n.type.startsWith("video/")&&n.file?f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(n.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(n)===0}
                    @click=${()=>this._navigatePreview(t,-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${t.indexOf(n)===t.length-1}
                    @click=${()=>this._navigatePreview(t,1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `:n.previewUrl?f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${n.previewUrl}
                      alt=${n.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(n)===0}
                    @click=${()=>this._navigatePreview(t,-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${t.indexOf(n)===t.length-1}
                    @click=${()=>this._navigatePreview(t,1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `:f`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${Ao(n)}">
                    <img
                      class="preview-doc-type-img"
                      src=${jo(a)}
                      alt="${a?`${a} file`:"File"}"
                      @error=${p=>{const h=p.target,v=To();!h.dataset.fallback&&h.src!==v&&(h.dataset.fallback="1",h.src=v)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(n)===0}
                    @click=${()=>this._navigatePreview(t,-1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${t.indexOf(n)===t.length-1}
                    @click=${()=>this._navigatePreview(t,1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `}
          ${this._metadataSchema&&(i=this.config)!=null&&i.metadataConfig?f`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${a}${n.size?` · ${fe(n.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:w}
          ${this._metadataSchema&&(s=this.config)!=null&&s.metadataConfig?f`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${n.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:f`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                    @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                  >
                    <span>File info</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div
                    class="preview-file-info-body ${this._fileInfoOpen?"open":""}"
                  >
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">File name</div>
                      <div class="preview-file-info-val">
                        ${n.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">Type</div>
                      <div class="preview-file-info-val">${a}</div>
                    </div>
                    ${n.size?f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Size</div>
                            <div class="preview-file-info-val">
                              ${fe(n.size)}
                            </div>
                          </div>
                        `:w}
                    ${this._previewDims!=="—"?f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Dimensions</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:w}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_navigatePreview(t,e){var r;const o=t.findIndex(i=>i.id===this._previewFileId)+e;if(o>=0&&o<t.length){const i=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-image[controls]");i&&(i.pause(),i.removeAttribute("src"),i.load()),this._previewFileId=t[o].id}}_renderBody(){var t,e,r,o,i,s,n,a,l;const p=this._storeCtrl.state,h=[...p.files.values()],v=this._phase,_=Kr(p.restrictions),U=h.length>0;return f`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
        @fill-metadata=${this._onFillMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @primary-action=${this._onPrimaryAction}
        @connector-files-selected=${this._onConnectorFilesSelected}
        @connector-close=${this._onConnectorClose}
        @url-submit=${this._onUrlSubmit}
        @url-cancel=${this._onUrlCancel}
        @camera-capture=${this._onCameraCapture}
        @camera-cancel=${this._onCameraCancel}
        @screencast-capture=${this._onScreenCastCapture}
        @screencast-cancel=${this._onScreenCastCancel}
      >
        <div
          class="body ${U?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId?"has-preview":""}"
          @dragenter=${U?this._onBodyDragEnter:w}
          @dragover=${U?this._onBodyDragOver:w}
          @dragleave=${U?this._onBodyDragLeave:w}
          @drop=${U?this._onBodyDrop:w}
        >
          ${((t=this.config)==null?void 0:t.mode)==="inline"&&(e=this.config)!=null&&e.inlineHeader&&!this._previewFileId&&v!=="uploading"&&v!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):w}
          ${this._isReviewing?f`
                <sfx-last-upload-review
                  .files=${this._reviewFiles}
                  .getLocateUrl=${(r=this.config)==null?void 0:r.getLocateUrl}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:v==="complete"?f`
                <sfx-success-card
                  .fileCount=${h.filter(b=>b.status==="complete").length}
                  .totalSize=${h.filter(b=>b.status==="complete").reduce((b,S)=>b+(S.size||0),0)}
                  .thumbnails=${h.filter(b=>b.status==="complete"&&b.previewUrl).map(b=>b.previewUrl)}
                  .failedFiles=${h.filter(b=>b.status==="failed").map(b=>({id:b.id,name:b.name,error:b.error||"Upload failed"}))}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:v==="uploading"?this._renderUploadOverlay(h):f`
                ${U?w:f`<sfx-drop-zone
                        .compact=${U}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${_}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((o=this.config)==null?void 0:o.sourcesLayout)??"pills"}
                        .mode=${((i=this.config)==null?void 0:i.mode)??"modal"}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?f`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title="View last upload batch"
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            View last upload
                          </button>`:w}`}
                ${U?this._previewFileId?this._renderPreviewLayout(h):f`
                        <div class="asset-count">
                          ${h.length}
                          ${h.length===1?"file":"files"} ·
                          ${fe(h.reduce((b,S)=>b+(S.size||0),0))}
                        </div>
                        <sfx-file-list
                          .files=${h}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${_}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:w}
              `}
        </div>

        ${U&&v!=="complete"&&v!=="uploading"?f`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${h.length}
                .totalSize=${h.reduce((b,S)=>b+(S.size||0),0)}
                .failedCount=${h.filter(b=>b.status==="failed"||b.status==="error").length}
                .completedCount=${h.filter(b=>b.status==="complete").length}
                .uploadProgress=${p.totalProgress??0}
                .showFillMetadata=${!!(((s=this.config)==null?void 0:s.showFillMetadata)??((n=this.config)==null?void 0:n.metadataConfig))}
                .uploadDisabled=${this._hasUnfilledRequiredMetadata}
                .uploadDisabledReason=${this._hasUnfilledRequiredMetadata?"Fill required metadata first":""}
              ></sfx-actions-bar>
            `:w}
        ${this._showUrlDialog?f`<sfx-url-dialog></sfx-url-dialog>`:w}
        ${this._showCameraDialog?f`<sfx-camera-dialog></sfx-camera-dialog>`:w}
        ${this._showScreenCastDialog?f`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:w}
        ${this._activeConnector&&(a=this.config)!=null&&a.connectors?f`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${eo.has(this._activeConnector)?f`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `:f`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:w}
        ${this._bulkMetadataOpen&&this._metadataSchema?f`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(b=>te._MODIFIABLE_STATUSES.has(b.status))}
                .config=${((l=this.config)==null?void 0:l.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:w}
      </div>
    `}_navigateFs(t){const e=[...this._store.getState().files.values()].filter(i=>i.previewUrl||i.type.startsWith("video/")&&i.file),r=e.findIndex(i=>i.id===this._previewFileId);if(r===-1)return;const o=r+t;if(o>=0&&o<e.length){const i=e[o];this._fullscreenPreviewUrl=i.previewUrl,this._fullscreenVideoFile=i.type.startsWith("video/")&&i.file?i.file:null,this._previewFileId=i.id,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(t){let e=this._videoBlobUrls.get(t);return e||(e=URL.createObjectURL(t),this._videoBlobUrls.set(t,e)),e}_revokeVideoBlobUrls(){for(const t of this._videoBlobUrls.values())URL.revokeObjectURL(t);this._videoBlobUrls.clear()}},te.styles=W`
    :host {
      display: block;
      height: inherit;
      font-family: var(
        --sfx-up-font,
        "Inter",
        system-ui,
        -apple-system,
        sans-serif
      );
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-error: var(--destructive, #dc2626);
      --sfx-up-text: var(--foreground, #1e293b);
      --sfx-up-text-secondary: var(--secondary-foreground, #475569);
      --sfx-up-text-muted: var(--muted-foreground, #94a3b8);
      --sfx-up-border: var(--border, #e8edf5);
      --sfx-up-border-light: var(--muted, #f1f5f9);
      --sfx-up-bg: var(--background, #ffffff);
      --sfx-up-radius: 16px;
      --sfx-up-font: "Inter", system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
      /* Fullscreen overlay z-index stack — single source of truth so
         mobile overrides don't drift out of sync with base values. */
      --sfx-fs-z: 10000;
      --sfx-fs-controls-z: 10001;
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 1100px;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      animation: modalIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    }

    /* --- Header --- */
    .header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      background: var(--sfx-up-bg, #fff);
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .header-icon-done {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .header-icon svg {
      width: 16px;
      height: 16px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      flex: 1;
    }

    .header-btn {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background 0.15s,
        color 0.15s;
      flex-shrink: 0;
    }

    .header-btn svg {
      width: 16px;
      height: 16px;
    }

    .header-btn:hover {
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .header-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .header-btn-back {
      margin-right: 12px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      width: 32px;
      height: 32px;
      position: relative;
    }

    .header-btn-back:hover {
      background: #dbeafe;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .header-btn-back::after {
      content: "Back to Asset Picker";
      position: absolute;
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: var(--sfx-up-text, #1e293b);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      padding: 6px 12px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      z-index: 10;
    }

    .header-btn-back:hover::after {
      opacity: 1;
    }

    .header-btn-close {
      margin-left: auto;
    }

    /* --- Responsive header buttons --- */
    @media (max-width: 768px) {
      .header-btn {
        width: 28px;
        height: 28px;
      }
      .header-btn svg {
        width: 14px;
        height: 14px;
      }
    }
    @media (max-width: 480px) {
      .header-btn {
        width: 26px;
        height: 26px;
      }
    }

    /* --- Content wrapper (holds body + actions bar) --- */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    /* --- Body --- */
    .body {
      flex: 1;
      overflow: hidden;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      gap: 4px;
      min-height: 0;
      min-width: 0;
      background: var(--sfx-up-bg, #fff);
      position: relative;
    }

    .file-grid-side {
      min-width: 0;
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-radius: 8px;
      position: relative;
    }

    .body.body-drag-over::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    /* In preview mode, keep body blue but mask the preview side white */
    .body.body-drag-over.has-preview::after {
      display: none;
    }

    .body.body-drag-over .file-grid-side {
      position: relative;
    }

    .body.body-drag-over .file-grid-side::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    .body.body-drag-over .file-grid-header {
      background: transparent;
    }

    .body.body-drag-over .preview-divider,
    .body.body-drag-over .preview-panel {
      background: var(--sfx-up-bg, #fff);
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      padding: 0 0 0 8px;
      animation: bodyReveal 0.35s ease both;
    }

    .body.has-files.has-preview {
      padding-right: 0;
    }

    @keyframes bodyReveal {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    /* "View last upload" pill — shown on the drop-zone screen when
       sessionStorage contains a previous batch */
    .last-upload-pill {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
    .last-upload-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }
    .last-upload-pill:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .last-upload-pill svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .asset-count {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      --sfx-inline-pad: 24px;
      border: none;
      border-radius: 0;
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      height: 100%;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: none;
      animation: inlineIn 0.25s ease;
    }

    /* Only scroll inline when showing drop-zone (no files) */
    .inline.no-files {
      overflow-y: auto;
      overflow-x: hidden;
    }

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* On the empty landing state the accent label should start flush
       with the top of the uploader region — no extra whitespace above. */
    .inline.no-files .inline-header {
      padding-top: 0;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 16px var(--sfx-inline-pad) 0;
    }

    /* In the empty landing state the negative margin collapses the
       16px top padding so the dashed card sits right under the
       inline-header description text. */
    .inline.no-files sfx-drop-zone {
      margin-top: -16px;
    }
    .inline-header-top {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .inline-header-accent {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .inline-header-accent .accent-line {
      width: 32px;
      height: 3px;
      border-radius: 2px;
      background: var(--sfx-up-primary);
    }
    .inline-header-accent span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: var(--sfx-up-primary);
    }
    .inline-header-title {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      letter-spacing: -0.4px;
      max-width: 770px;
    }
    .inline-header-desc {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #6b7280);
      line-height: 1.5;
      max-width: 770px;
    }

    .inline .content {
      max-width: var(--sfx-up-content-max-width, 1600px);
      align-self: center;
      width: 100%;
    }

    .inline.no-files .content {
      flex: 1 0 auto;
    }

    /* Inline: let body grow beyond container so .inline can scroll */
    .inline .body {
      flex: 1 0 auto;
      overflow: visible;
    }

    /* Inline horizontal alignment — driven by --sfx-inline-pad */
    .inline .body.has-files {
      padding-left: 0;
      flex: 1;
      overflow: hidden;
    }
    .inline .asset-count {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .file-grid-header {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .body > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
      --sfx-grid-pad-r: var(--sfx-inline-pad);
    }
    .inline .file-grid-side > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
    }

    /* --- Preview split layout --- */
    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 68;
      min-width: 0;
      min-height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      --sfx-up-grid-min: 170px;
    }

    .preview-layout .file-grid-side::after {
      display: none;
    }

    .preview-layout sfx-file-list {
      padding-right: 6px;
      --sfx-scrollbar-w: 14px;
      --sfx-scrollbar-inset-left: 2px;
      --sfx-scrollbar-inset-right: 6px;
    }

    /* NOTE: scrollbar border-radius is hardcoded to 6px in sfx-file-list */

    .file-grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--sfx-up-bg, #fff);
    }

    .file-grid-header-text {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
    }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 0;
    }

    .preview-divider {
      width: 9px;
      flex-shrink: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-divider::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 4px;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: "";
      width: 3px;
      height: 28px;
      border-radius: 2px;
      background: var(--sfx-up-border, #d0d7e2);
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 1;
    }

    .preview-divider:hover::after,
    .preview-layout.resizing .preview-divider::after {
      opacity: 1;
    }

    .preview-layout.resizing {
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-layout.resizing * {
      pointer-events: none;
    }

    .preview-layout.resizing .preview-divider {
      pointer-events: auto;
    }

    .preview-panel {
      flex: 32;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
    }

    .preview-panel::-webkit-scrollbar {
      width: 12px;
    }
    .preview-panel::-webkit-scrollbar-track {
      background: transparent;
    }
    .preview-panel::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 6px;
    }
    .preview-panel::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
      background-clip: padding-box;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 24px 16px 12px;
      flex-shrink: 0;
      box-sizing: border-box;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    /* Mobile back-arrow — hidden by default, shown at <=768px to give
       a clear "return to file list" affordance on small screens.
       Use !important because .preview-panel-header button below has
       higher specificity and would otherwise force display: flex. */
    .preview-panel-header button.preview-back-btn {
      display: none;
    }
    @media (max-width: 768px) {
      .preview-panel-header button.preview-back-btn {
        display: inline-flex;
      }
    }

    .preview-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .preview-header-name {
      flex: 1;
      min-width: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      font-family: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .preview-panel-header button {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition:
        background 0.15s,
        color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f3f4f6);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    .preview-doc-wrap {
      position: relative;
      height: 332px;
      width: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-doc-wrap.pdf {
      background: linear-gradient(135deg, #fef2f2, #fee2e2);
    }
    .preview-doc-wrap.doc {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
    .preview-doc-wrap.vid {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    }
    .preview-doc-wrap.audio {
      background: linear-gradient(135deg, #fdf4ff, #fae8ff);
    }
    .preview-doc-wrap.sheet {
      background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    }
    .preview-doc-wrap.slide {
      background: linear-gradient(135deg, #fff7ed, #ffedd5);
    }
    .preview-doc-wrap.zip {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
    }
    .preview-doc-wrap.code {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    .preview-doc-wrap.markup {
      background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
    }
    .preview-doc-wrap.font {
      background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    }
    .preview-doc-wrap.design {
      background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    }
    .preview-doc-wrap.binary {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }
    .preview-doc-wrap.data {
      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
    }
    .preview-doc-wrap.gen {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }

    .preview-doc-type-img {
      max-width: 120px;
      max-height: 120px;
      object-fit: contain;
    }

    .preview-img-wrap {
      position: relative;
      width: 420px;
      height: 332px;
      max-width: 100%;
      flex-shrink: 0;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--sfx-up-checker-bg);
      background-image: linear-gradient(
          45deg,
          var(--sfx-up-checker-tile) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
    }

    .preview-image {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border: none;
    }

    .preview-media-area {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: #fff;
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.08),
        0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
      color: var(--sfx-up-text, #374151);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 20px;
      height: 20px;
    }

    .preview-nav.prev {
      left: 10px;
    }
    .preview-nav.next {
      right: 10px;
    }

    .preview-nav:disabled {
      opacity: 0.35;
      cursor: default;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-nav:disabled:hover {
      transform: translateY(-50%);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-meta-list {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      padding: 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .preview-metadata {
      padding: 0 0 16px;
    }

    .preview-file-info {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- File info table (no-metadata fallback) --- */
    .preview-file-info-panel {
      padding: 0 16px;
    }

    .preview-file-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
    }

    .preview-file-info-header svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.2s ease;
    }

    .preview-file-info-header.open svg {
      transform: rotate(180deg);
    }

    .preview-file-info-body {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.25s ease;
    }

    .preview-file-info-body.open {
      max-height: 300px;
    }

    .preview-file-info-row {
      display: flex;
      align-items: baseline;
      padding: 10px 0;
    }

    .preview-file-info-key {
      width: 110px;
      flex-shrink: 0;
      font-size: 13px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-file-info-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* --- Upload overlay (in-modal) --- */
    .upload-overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      gap: 8px;
      padding: 32px 24px;
      position: relative;
      animation: fadeUp 0.3s ease both;
    }

    .upload-overlay-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid var(--sfx-up-border, #e2e8f0);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 8px;
    }

    .upload-overlay-percent {
      font-size: 40px;
      font-weight: 700;
      color: var(--sfx-up-primary, #2563eb);
      line-height: 1;
    }

    .upload-overlay-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-subtitle {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
    }

    .upload-overlay-bar {
      width: 240px;
      height: 6px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .upload-overlay-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    .upload-overlay-minimize {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-minimize:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .upload-header {
      justify-content: space-between;
    }

    .upload-header .float-actions button {
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .upload-header .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .upload-header .float-actions button svg {
      width: 16px;
      height: 16px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Floating upload card (Variant 3 style) --- */
    .upload-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      width: 470px;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.12),
        0 2px 8px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      font-family: inherit;
      animation: floatSlideIn 0.3s ease both;
    }

    .float-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .float-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-icon svg {
      width: 14px;
      height: 14px;
    }

    .float-icon.done {
      background: #f0fdf4;
      color: #22c55e;
    }

    .float-icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .float-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .float-subtitle {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-actions {
      display: flex;
      gap: 4px;
    }

    .float-actions button {
      width: 26px;
      height: 26px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .float-actions button svg {
      width: 14px;
      height: 14px;
    }

    .float-progress {
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-progress-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .float-progress-label {
      font-size: 12px;
      color: var(--sfx-up-text-secondary, #475569);
    }

    .float-progress-pct {
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
    }

    .float-progress-pct.done {
      color: #22c55e;
    }
    .float-progress-pct.warn {
      color: #f59e0b;
    }
    .float-progress-pct.error {
      color: #ef4444;
    }

    .float-bar {
      height: 4px;
      background: var(--sfx-up-border, #e8edf5);
      border-radius: 2px;
      overflow: hidden;
    }

    .float-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .float-bar-fill.done {
      background: #22c55e;
    }
    .float-bar-fill.warn {
      background: #f59e0b;
    }
    .float-bar-fill.error {
      background: #ef4444;
    }

    .float-items {
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
    }

    .float-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px;
      border-bottom: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .float-item:last-child {
      border-bottom: none;
    }

    .float-item-thumb {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      flex-shrink: 0;
    }

    .float-item-thumb svg {
      width: 16px;
      height: 16px;
    }

    .float-item-info {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .float-item-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .float-item-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-item-done {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #f0fdf4;
      color: #22c55e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-item-done svg {
      width: 12px;
      height: 12px;
    }

    .float-item-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    .float-item-error-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .float-item-error-icon {
      width: 16px;
      height: 16px;
      color: #ef4444;
      flex-shrink: 0;
      cursor: pointer;
    }

    .float-item-tooltip {
      display: none;
      position: absolute;
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: #1e293b;
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
      box-shadow:
        0 2px 12px rgba(0, 0, 0, 0.12),
        0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .float-item-error-wrap:hover .float-item-tooltip {
      display: block;
    }

    .float-item-status {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .float-item-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .float-item-retry svg {
      width: 16px;
      height: 16px;
    }

    .float-item-retry:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    @keyframes floatSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow:
        0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
        0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 520px;
      height: 75vh;
      max-height: 640px;
      min-height: 400px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes modalIn {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes inlineIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: var(--sfx-fs-z);
      background: rgba(0, 0, 0, 0.92);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s ease;
      cursor: zoom-in;
    }

    .fs-overlay.zoomed {
      cursor: grab;
      overflow: hidden;
    }

    .fs-overlay.zoomed.panning {
      cursor: grabbing;
    }

    .fs-overlay.zoomed .fs-img {
      max-width: none;
      max-height: none;
      width: auto;
      height: auto;
    }

    .fs-img {
      max-width: 92vw;
      max-height: 88vh;
      object-fit: contain;
      border-radius: 4px;
      user-select: none;
      -webkit-user-drag: none;
      transition: transform 0.25s ease;
    }

    .fs-overlay.panning .fs-img {
      transition: none;
    }

    .fs-toolbar {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      gap: 8px;
      z-index: var(--sfx-fs-controls-z);
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
    }

    .fs-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .fs-btn svg {
      width: 20px;
      height: 20px;
    }

    .fs-nav {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--sfx-fs-controls-z);
      transition: background 0.15s;
      padding: 0;
    }

    .fs-nav:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .fs-nav:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .fs-nav:disabled:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .fs-nav svg {
      width: 22px;
      height: 22px;
    }
    .fs-nav.prev {
      left: 20px;
    }
    .fs-nav.next {
      right: 20px;
    }

    .fs-filename {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
      padding: 6px 16px;
      border-radius: 8px;
      white-space: nowrap;
      z-index: 10001;
    }

    .preview-nav:focus-visible,
    .fs-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop {
        animation: none;
      }
      .modal-card {
        animation: none;
      }
      .inline {
        animation: none;
      }
      .fs-overlay {
        animation: none;
      }
      .body.has-files {
        animation: none;
      }
    }

    /* --- Responsive: Tablet & Mobile (≤ 768px) ---
       Take modal-card OUT of backdrop's flex centering and pin it
       directly to viewport. This bypasses any min-width:auto issues
       in the flex layout that were leaving content overflowing. */
    @media (max-width: 768px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-width: 0;
        min-height: 0;
        border-radius: 0;
        overflow: hidden;
      }
      .inline {
        max-width: 100%;
        min-width: 0;
      }
      .connector-modal-backdrop {
        padding: 0;
        display: block;
      }
      .connector-modal {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-height: 0;
        border-radius: 0;
      }
      .header {
        padding: 12px 16px;
      }
      .header-icon {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
      .header-icon svg {
        width: 14px;
        height: 14px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 16px;
      }
      .body.has-files {
        padding: 0 0 12px;
      }
      .body > sfx-file-list,
      .file-grid-side > sfx-file-list {
        --sfx-grid-pad-l: 12px;
        --sfx-grid-pad-r: 12px;
      }

      /* Mobile preview = fullscreen takeover. When a file is selected
         the file grid + divider get hidden and preview-panel fills the
         whole modal. Tapping close (X) in preview-header returns to
         the grid. */
      .preview-layout {
        flex-direction: column;
      }
      .preview-layout .file-grid-side,
      .preview-layout .preview-divider {
        display: none !important;
      }
      .preview-layout .preview-panel {
        flex: 1 1 100% !important;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        padding: 0;
      }

      .preview-topbar {
        padding: 8px 0;
      }

      .inline {
        --sfx-inline-pad: 16px;
        min-height: auto;
      }

      /* Bump fullscreen z-index stack on mobile: modal-card is now
         position:fixed which creates a new stacking context, so the
         overlay + controls must sit above it. */
      :host {
        --sfx-fs-z: 100000;
        --sfx-fs-controls-z: 100001;
      }

      /* Force fs-overlay to viewport-fill on mobile. Without these the
         shadow-DOM stacking + sibling modal-card was clipping it. */
      .fs-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
      }
      .fs-img {
        max-width: 92vw;
        max-height: 80vh;
      }
      /* Brighter, larger, tappable nav arrows + close toolbar on mobile.
         Default styling is too subtle (12% white) and gets lost over the
         dark overlay. */
      .fs-toolbar {
        top: 16px;
      }
      .fs-btn {
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-btn svg {
        width: 22px;
        height: 22px;
      }
      .fs-nav {
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-nav:disabled {
        opacity: 0.18;
        pointer-events: none;
      }
      .fs-nav svg {
        width: 24px;
        height: 24px;
      }
      .fs-nav.prev {
        left: 12px;
      }
      .fs-nav.next {
        right: 12px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) — tighter spacing on top of
       the fullscreen rules already applied at ≤768. */
    @media (max-width: 480px) {
      .header {
        padding: 10px 14px;
      }
      .header-icon {
        width: 26px;
        height: 26px;
        margin-right: 8px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 12px;
      }
      .body.has-files {
        padding: 0 0 8px;
      }

      .inline {
        --sfx-inline-pad: 12px;
        box-shadow: none;
      }
      .inline-header-title {
        font-size: 18px;
      }
    }

    /* --- Responsive: Landscape / short viewports (Nest Hub 1024×600,
       iPad mini landscape, laptops with address bar visible etc) ---
       Modal min-height 660 exceeds viewport; drop the min and expand the
       max so content gets every pixel available. Trim header/body padding
       so the available space is actually usable. */
    @media (max-height: 700px) {
      .modal-card {
        min-height: auto;
        max-height: 96vh;
      }
      .inline {
        min-height: auto;
      }
      .header {
        padding: 10px 20px;
      }
      .body {
        padding: 16px 20px;
      }
      /* Let the preview image scale down instead of forcing a
         340×240 crop — on a 1920×600 kiosk that hardcoded size
         looked tiny; relying on max-width/max-height lets the wrap
         fill whatever vertical space the layout gives it. */
      .preview-img-wrap {
        width: auto;
        height: auto;
        max-width: min(420px, 60vw);
        max-height: min(280px, 55vh);
      }
    }
  `,te._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),te._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),te);H([D({attribute:!1})],I.prototype,"config");H([A()],I.prototype,"_isOpen");H([A()],I.prototype,"_activeConnector");H([A()],I.prototype,"_showUrlDialog");H([A()],I.prototype,"_showCameraDialog");H([A()],I.prototype,"_showScreenCastDialog");H([A()],I.prototype,"_previewFileId");H([A()],I.prototype,"_previewDims");H([A()],I.prototype,"_fileInfoOpen");H([A()],I.prototype,"_splitPct");H([A()],I.prototype,"_fullscreenPreviewUrl");H([A()],I.prototype,"_fullscreenVideoFile");H([A()],I.prototype,"_fullscreenZoomed");H([A()],I.prototype,"_bodyDragOver");H([A()],I.prototype,"_isMinimized");H([A()],I.prototype,"_isPillExpanded");H([A()],I.prototype,"_metadataSchema");H([A()],I.prototype,"_bulkMetadataOpen");H([A()],I.prototype,"_isReviewing");H([A()],I.prototype,"_reviewFiles");H([A()],I.prototype,"_hasStoredReview");let ta=I;const ee=(t,e)=>{typeof customElements<"u"&&!customElements.get(t)&&customElements.define(t,e)};ee("sfx-uploader",ta);ee("sfx-drop-zone",In);ee("sfx-import-divider",Hn);ee("sfx-source-pills",Lo);ee("sfx-file-list",ie);ee("sfx-file-item",De);ee("sfx-success-card",_e);ee("sfx-actions-bar",re);ee("sfx-url-dialog",St);ee("sfx-camera-dialog",lt);ee("sfx-screen-cast-dialog",Fe);const ka=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{w as A,la as B,er as C,ca as H,aa as I,To as K,da as M,jo as X,W as a,f as b,fe as c,ka as d,Rn as g,Y as i,D as n,ve as o,pa as q,A as r,he as w};
