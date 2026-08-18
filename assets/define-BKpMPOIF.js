const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/google-picker-view-67wzE5ma.js","assets/index-Df_1wNo8.js","assets/index-BTBj9TIw.css","assets/search-provider-browser-CVskm4nF.js","assets/provider-browser-9svv9nZR.js","assets/index-08TnK9Om.js"])))=>i.map(i=>d[i]);
import{c as fn,a as wa,j as ka,e as ui,i as Gi,t as hi,E as Wi,w as G,d as c,f as De,g as W,h as j,A as m,n as h,r as E,k as J,l as Ee,_ as Wt,D as $a,m as Z,o as Xi,p as Qs,q as eo,s as tt}from"./index-Df_1wNo8.js";function Sa(o){if(o==null||!Number.isFinite(o)||o<0)return"—";const e=["B","KB","MB","GB","TB"];let t=o,i=0;for(;t>=1024&&i<e.length-1;)t/=1024,i++;const s=(a,l)=>{const d=l>0&&Math.round(a*10)/10<10?1:0,p=a.toFixed(d);return{str:p,rounded:Number(p)}},r=s(t,i);let n=r.str;return r.rounded>=1024&&i<e.length-1&&(t/=1024,i++,n=s(t,i).str),`${n} ${e[i]}`}const gn="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Ca="https://i18n-fastly.ultrafast.io",Ea="https://neo.wordplex.io",mn="uploader",to=fn({gridUuid:gn,namespace:mn,cdnUrl:Ca}),Pa=to.initI18n,ft=to.t,Ta=to.I18nController,Ra=wa({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:mn,gridUuid:gn,prodUrl:Ea,logPrefix:"[uploader]"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Fa}=ka,ar=o=>o,Ia=o=>o.strings===void 0,lr=()=>document.createComment(""),Kt=(o,e,t)=>{var r;const i=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(lr(),s),a=i.insertBefore(lr(),s);t=new Fa(n,a,o,o.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==o;if(l){let d;(r=t._$AQ)==null||r.call(t,o),t._$AM=o,t._$AP!==void 0&&(d=o._$AU)!==a._$AU&&t._$AP(d)}if(n!==s||l){let d=t._$AA;for(;d!==n;){const p=ar(d).nextSibling;ar(i).insertBefore(d,s),d=p}}}return t},pt=(o,e,t=o)=>(o._$AI(e,t),o),Aa={},Oa=(o,e=Aa)=>o._$AH=e,Ua=o=>o._$AH,ps=o=>{o._$AR(),o._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr=(o,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(o[s],s);return i},Ot=ui(class extends Gi{constructor(o){if(super(o),o.type!==hi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],r=[];let n=0;for(const a of o)s[n]=i?i(a,n):n,r[n]=t(a,n),n++;return{values:r,keys:s}}render(o,e,t){return this.dt(o,e,t).values}update(o,[e,t,i]){const s=Ua(o),{values:r,keys:n}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=n,r;const a=this.ut??(this.ut=[]),l=[];let d,p,u=0,f=s.length-1,x=0,k=r.length-1;for(;u<=f&&x<=k;)if(s[u]===null)u++;else if(s[f]===null)f--;else if(a[u]===n[x])l[x]=pt(s[u],r[x]),u++,x++;else if(a[f]===n[k])l[k]=pt(s[f],r[k]),f--,k--;else if(a[u]===n[k])l[k]=pt(s[u],r[k]),Kt(o,l[k+1],s[u]),u++,k--;else if(a[f]===n[x])l[x]=pt(s[f],r[x]),Kt(o,s[u],s[f]),f--,x++;else if(d===void 0&&(d=dr(n,x,k),p=dr(a,u,f)),d.has(a[u]))if(d.has(a[f])){const v=p.get(n[x]),P=v!==void 0?s[v]:null;if(P===null){const T=Kt(o,s[u]);pt(T,r[x]),l[x]=T}else l[x]=pt(P,r[x]),Kt(o,s[u],P),s[v]=null;x++}else ps(s[f]),f--;else ps(s[u]),u++;for(;x<=k;){const v=Kt(o,l[k+1]);pt(v,r[x]),l[x++]=v}for(;u<=f;){const v=s[u++];v!==null&&ps(v)}return this.ut=n,Oa(o,l),Wi}});function za(o,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,o);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const s=(l=(a=o.response)==null?void 0:a.file)==null?void 0:l.uuid;return s?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(s))}`:null}const vn=G`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,us=c`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${vn}
</svg>`,bn=G`<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />`,ks=G`<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />`,xn="(hover: none) and (pointer: coarse)";let hs=new Map,cr;function io(o){if(typeof window>"u"||typeof window.matchMedia!="function")return null;cr!==window.matchMedia&&(cr=window.matchMedia,hs=new Map);const e=hs.get(o);if(e!==void 0)return e;let t;try{t=window.matchMedia(o)}catch{t=null}return hs.set(o,t),t}function ze(){var o;return((o=io(xn))==null?void 0:o.matches)??!1}let fs;function yn(){return typeof document>"u"||ze()?!1:(fs===void 0&&(fs="webkitdirectory"in document.createElement("input")),fs)}function La(){var o;return typeof navigator>"u"||ze()?!1:typeof((o=navigator.mediaDevices)==null?void 0:o.getDisplayMedia)=="function"}function Da(){var o;return ze()?!0:typeof navigator>"u"?!1:typeof((o=navigator.mediaDevices)==null?void 0:o.getUserMedia)=="function"}function Ma(){var o;return((o=io("(prefers-reduced-motion: reduce)"))==null?void 0:o.matches)??!1}function so(o){const e=io(xn);if(!e)return()=>{};const t=()=>o();return typeof e.addEventListener=="function"?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):typeof e.addListener=="function"?(e.addListener(t),()=>e.removeListener(t)):()=>{}}const $s=new Set;let Re=null;function Ba(o){if(typeof document>"u"||!document.body||($s.add(o),Re))return;const e=document.body,t=document.documentElement,i=window.scrollY||t.scrollTop||0;Re={scrollY:i,overflow:e.style.overflow,position:e.style.position,top:e.style.top,left:e.style.left,right:e.style.right,paddingRight:e.style.paddingRight,scrollBehavior:t.style.scrollBehavior};const s=t.clientWidth||0,r=s>0?Math.max(0,(window.innerWidth||0)-s):0;if(e.style.position="fixed",e.style.top=`-${i}px`,e.style.left="0",e.style.right="0",e.style.overflow="hidden",r>0){const n=parseFloat(getComputedStyle(e).paddingRight)||0;e.style.paddingRight=`${n+r}px`}}function pr(o){if($s.delete(o),$s.size>0||!Re)return;if(typeof document>"u"||!document.body){Re=null;return}const e=document.body,t=document.documentElement,{scrollY:i}=Re;if(e.style.overflow=Re.overflow,e.style.position=Re.position,e.style.top=Re.top,e.style.left=Re.left,e.style.right=Re.right,e.style.paddingRight=Re.paddingRight,i>0){t.style.scrollBehavior="auto";try{window.scrollTo(0,i)}catch{}t.style.scrollBehavior=Re.scrollBehavior}Re=null}class ja{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function ne(o,e,t){const i=o.getState().files,s=i.get(e);if(!s)return;const r=new Map(i);r.set(e,{...s,...t}),o.setState({files:r})}function Ct(o,e){const t=new Map(o.getState().files);t.set(e.id,e),o.setState({files:t})}function ur(o,e){const t=o.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),o.setState({files:i})}function Na(){return new ja({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},namingConvention:{regex:null,broken:!1},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:De})}class qa{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Ha="SAME_ASSET_EXISTS_SKIP_UPLOAD",Va="ERROR_SHA1_CONFLICT";function Dt(o){return(o==null?void 0:o.code)===Ha||(o==null?void 0:o.code)===Va}function oo(o,e){return{...o,status:"success",file:o.file??{uuid:o.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Bi(o,e){var t,i,s,r,n;return((i=(t=o==null?void 0:o.info)==null?void 0:t.msg)==null?void 0:i.trim())||((s=o==null?void 0:o.msg)==null?void 0:s.trim())||((r=o==null?void 0:o.hint)==null?void 0:r.trim())||((n=o==null?void 0:o.message)==null?void 0:n.trim())||e}const Ka=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function Ya(o){const e=new Set;if(!o)return e;const t=o.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),Ka.has(t)&&e.add("archive"),e}function Ga(o,e){if(o.formatMimetypes.length===0)return!0;const t=Ya(e);return o.formatMimetypes.some(i=>t.has(i))}function gs(o){return o==null?!0:Array.isArray(o)||typeof o=="string"?o.length===0:!1}function hr(o){return typeof o=="boolean"?o:o==="true"?!0:o==="false"?!1:null}function Ci(o){return o==null?[]:Array.isArray(o)?o.map(String):[String(o)]}function fr(o,e){if(o.length!==e.length)return!1;const t=new Set(o);for(const i of e)if(!t.has(i))return!1;return!0}function gr(o,e){if(o.length===0||e.length===0)return!1;const t=new Set(o);for(const i of e)if(t.has(i))return!0;return!1}function Wa(o,e){const t=e[o.triggerCkey],i=o.triggerValues;switch(o.triggerCondition){case"is_true":return hr(t)===!0;case"is_false":return hr(t)===!1;case"is_empty":return gs(t);case"is_not_empty":return!gs(t);case"is_in":return gr(Ci(t),i);case"is_not_in":return gs(t)?!0:!gr(Ci(t),i);case"is":return fr(Ci(t),i);case"is_not":return!fr(Ci(t),i);default:return!1}}function Xa(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function Za(o,e){let t=o.get(e);return t||(t=Xa(),o.set(e,t)),t}function Ja(o,e){if(o.length===0||e.length===0)return[];const t=new Set(o);return e.filter(i=>t.has(i))}function Qa(o,e){o.contributingDependencyUuids.includes(e)||o.contributingDependencyUuids.push(e)}function el(o,e,t){const i=Za(o,t.targetCkey);switch(Qa(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"show":i.shown=!0;break;case"require":i.required=!0;break;case"allow_values":{const s=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...s]:Ja(i.allowedValues,s);break}case"set_values":{const s=t.setValues??[];if(s.length===0)break;i.setValue===void 0&&(i.setValue=s.length===1?s[0]:s);break}default:t.type}}function tl(o,e){for(const t of e.actions)el(o,e,t)}function il(o,e){const t=new Map;for(const i of e)i.active&&Ga(i,o.mime)&&Wa(i,o.meta)&&tl(t,i);return t}function zt(o,e,t){const i={},s=new Set;for(const a of e.fields)s.add(a.ckey),a.key in o.meta&&(i[a.ckey]=o.meta[a.key]);const r=t.filter(a=>s.has(a.triggerCkey)),n=il({mime:o.mime,meta:i},r);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const d of a.fields){const p=n.get(d.ckey);if(p){p.hidden=!0;for(const u of l.contributingDependencyUuids)p.contributingDependencyUuids.includes(u)||p.contributingDependencyUuids.push(u)}else n.set(d.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function sl(o,e){const t=Array.isArray(e)?e:[e];switch(o.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function Zi(o,e,t){var i,s;return!!((i=t.get(o.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((s=t.get(e.ckey))!=null&&s.hidden))}function ro(o,e,t){var i,s;return t?!!((i=t.get(o.ckey))!=null&&i.shown||e!=null&&e.ckey&&((s=t.get(e.ckey))!=null&&s.shown)):!1}function ol(o,e,t){if(t.size===0)return o;let i=null;for(const s of e.groups)for(const r of s.fields)Zi(r,s,t)&&r.key in o&&(i||(i={...o}),delete i[r.key]);return i??o}function rl(o){return o==null?[]:Array.isArray(o)?o.map(String):[String(o)]}function nl(o,e){if(o.length!==e.length)return!1;const t=new Set(o);for(const i of e)if(!t.has(i))return!1;return!0}function _n(o,e){const t=[];for(const[i,s]of e){if(s.hidden)continue;const r=rl(o[i]);if(r.length!==0){if(s.allowedValues!==void 0){const n=new Set(s.allowedValues),a=r.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...s.contributingDependencyUuids]})}if(s.setValue!==void 0){const n=Array.isArray(s.setValue)?s.setValue:[s.setValue];nl(r,n)||t.push({ckey:i,kind:"set_values",conflictingValues:r,dependencyUuids:[...s.contributingDependencyUuids]})}}}return t}function al(o,e,t){if(o.length===0||t.length===0)return new Map;const i=o.map(n=>zt({mime:n.mime,meta:n.meta},e,t)),s=new Map,r=new Set;for(const n of i)for(const a of n.keys())r.add(a);for(const n of r){const a=i.map(T=>T.get(n)),l=a.every(T=>(T==null?void 0:T.hidden)===!0),d=a.some(T=>(T==null?void 0:T.shown)===!0),p=a.some(T=>(T==null?void 0:T.required)===!0);let u;if(a.every(T=>Array.isArray(T==null?void 0:T.allowedValues))){let T;for(const $ of a){const S=$.allowedValues;if(T=T===void 0?[...S]:T.filter(_=>S.includes(_)),T.length===0)break}u=T}let x;const k=a.map(T=>T==null?void 0:T.setValue).filter(T=>T!==void 0);k.length===o.length&&ll(k)&&(x=k[0]);const v=new Set;for(const T of a)if(T)for(const $ of T.contributingDependencyUuids)v.add($);const P={hidden:l,required:p,contributingDependencyUuids:[...v]};d&&(P.shown=!0),u!==void 0&&(P.allowedValues=u),x!==void 0&&(P.setValue=x),s.set(n,P)}return s}function ll(o){if(o.length<=1)return!0;const e=o[0];if(typeof e=="string")return o.every(i=>i===e);const t=new Set(e);return o.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const s of i)if(!t.has(s))return!1;return!0})}const wn=new Set(["asset-attachments","attachments-assets","integer-list"]),dl=new Set(["face_matcher"]);function cl(o){return wn.has(o)}function fi(o){return wn.has(o.type)||dl.has(o.ckey)}const no=0,ao=100,pl=2;function Ss(o){if(o==null||o==="")return null;const e=Number(o);return!Number.isFinite(e)||e<no||e>ao?null:e}const wh=300,mr=2,ul=50,kh=5,ms="regvar:api",hl="#ut",fl={CREATE_ONLY:"create_only",UPSERT:"upsert"},gl=/^[a-z0-9_-]+$/,ml=o=>typeof o=="string"&&o.startsWith(hl),Oi=o=>`~${o.toUpperCase()}`,vl=(o,e)=>{if(!(!o||!e))return o[e]??o[Oi(e)]},ji=(o,e,t)=>{var n,a,l;const i=(n=o.i18n)==null?void 0:n[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const s=(a=o.i18n)==null?void 0:a[Oi(e)];if(s)return{value:s,isFallback:!0,sourceLang:Oi(e)};const r=vl(o.i18n,t);if(r){const d=(l=o.i18n)!=null&&l[t]?t:Oi(t);return{value:r,isFallback:!0,sourceLang:d}}return{value:"",isFallback:!1,sourceLang:null}},vr=o=>(typeof o=="string"?o:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),$h=o=>gl.test(o),br=o=>{const e={},t={};for(const i of o||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},Sh=(o,e)=>o.bySid[e]||o.bySlug[e],xr=(o,e)=>({bySid:{...o.bySid,...e.bySid},bySlug:{...o.bySlug,...e.bySlug}}),ti=o=>{const e=[],t=new Map,i=r=>r.sid||r.slug||"",s=(r,n)=>{if(typeof r=="string"){if(!r||t.has(r))return;t.set(r,e.length),e.push({slug:r});return}if(!r||typeof r!="object")return;const a=r,l=i(a);if(!l)return;const d=t.get(l),p=d!==void 0?{...e[d]}:{};a.slug&&(p.slug=a.slug),a.sid&&(p.sid=a.sid),a.uuid&&(p.uuid=a.uuid);const u={...p.i18n,...a.i18n||{}};n&&a.label&&(u[n]=a.label),Object.keys(u).length>0&&(p.i18n=u),d!==void 0?e[d]=p:(t.set(l,e.length),a.slug&&a.slug!==l&&t.set(a.slug,e.length),e.push(p))};if(Array.isArray(o))for(const r of o)s(r);else if(o&&typeof o=="object"){const r=o;for(const[n,a]of Object.entries(r))if(Array.isArray(a))for(const l of a)s(l,n)}return e},Ei=o=>typeof o=="string"?[o]:!o||typeof o!="object"?[]:[o.sid,o.slug,o.uuid].filter(Boolean),Cs=(o,e,t)=>{if(t){const r=new Set(e.flatMap(Ei));return o.filter(n=>!Ei(n).some(a=>r.has(a)))}const i=new Set(o.flatMap(Ei)),s=e.filter(r=>!Ei(r).some(n=>i.has(n)));return[...o,...s]},bl=(o,e)=>o.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function kn(o,e,t){let i=e;switch(o.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),o.type){case"geopoint":return xl(i);case"focus-point":return $n(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(s=>typeof s=="string"?{value:s,label:s}:s):[];case"ultratags":return ti(e);case"multi-select":return i||[];default:return i??""}}function lo(o,e,t,i){var r;let s;switch(o.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?s=null:s=`(${n.latitude},${n.longitude})`;break}case"focus-point":{const n=e,a=p=>{if(p==null||p==="")return;const u=Number(p);return Number.isFinite(u)?Number(u.toFixed(pl)):void 0},l=a(n==null?void 0:n.horizontal),d=a(n==null?void 0:n.vertical);s=l===void 0||d===void 0?null:`${l},${d}`;break}case"boolean":e==="true"?s=!0:e==="false"?s=!1:s=null;break;case"date":{if(!e)s=null;else{const n=e instanceof Date?e:new Date(e),a=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),d=String(n.getDate()).padStart(2,"0");s=`${a}-${l}-${d}`}break}case"tags":s=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":s=Array.isArray(e)?e.map(n=>typeof n=="string"?n:n.slug).filter(n=>!!n):[];break;case"select-one":s=e===""?null:e;break;case"numeric":{if(e===""||e==null){s=null;break}const n=Number(e);s=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){s=null;break}const n=Number(e);s=Number.isFinite(n)?n:null;break}default:s=e}if(o.regional_variants_group_uuid&&o.type!=="ultratags"){const n=i??"en";return{...((r=t==null?void 0:t.meta)==null?void 0:r[o.key])??{},[n]:s}}return s}function xl(o){if(typeof o=="string"){const e=/\(([^)]+)\)/.exec(o);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function $n(o){var e;if(typeof o=="string"&&o!==""){const i=(((e=/\(([^)]+)\)/.exec(o))==null?void 0:e[1])??o).split(",");if(i.length===2)return{horizontal:i[0].trim(),vertical:i[1].trim()}}if(o!=null&&typeof o=="object"){const t=o;return{horizontal:t.horizontal??"",vertical:t.vertical??""}}return{horizontal:"",vertical:""}}const bt="product.ref",xt="product.position",yl="__product__",_l=new Set([bt,xt]);function Es(o){return _l.has(o)}function Ps(o){return o===bt?"ref":o===xt?"position":null}function wl(o){return[{key:bt,ckey:bt,uuid:"product-ref",title:o("productRefLabel","Product reference"),type:"text",placeholder:o("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:xt,ckey:xt,uuid:"product-position",title:o("productPositionLabel","Position"),type:"numeric",placeholder:o("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function kl(o){return{uuid:yl,isRoot:!1,name:o("productFieldsLabel","Product"),fields:wl(o)}}function $l(o,e){const t=kl(e);let i=-1;for(let l=0;l<o.groups.length;l++)o.groups[l].isRoot&&(i=l);const s=i+1,r=[...o.groups.slice(0,s),t,...o.groups.slice(s)],n=r.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...o,groups:r,fields:n,fieldsByKey:a}}const Sn=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Sl(o){return o==null||o===""?null:typeof o!="string"||Sn.test(o)?"productRefInvalid":null}function Cl(o){if(o==null||o==="")return null;const e=typeof o=="number"?o:Number(o);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function co(o){return o?o.ref!=null&&o.ref!==""||o.position!=null:!1}function po(o){const e={};return(o==null?void 0:o.ref)!=null&&o.ref!==""&&(e.ref=o.ref),(o==null?void 0:o.position)!=null&&(e.position=o.position),e}function yr(o,e){const t={...o??{}};for(const i of Object.keys(e)){const s=e[i];s===void 0?delete t[i]:t[i]=s}return t}function Cn(o,e,t){var s;if((((s=t==null?void 0:t.requiredFields)==null?void 0:s.includes(o.ckey))||!!o.required)&&Le(e))return`${o.title} is required`;if(Le(e))return null;if(o.key===bt)return typeof e!="string"||Sn.test(e)?"Reference contains invalid characters":null;if(o.key===xt){const r=Number(e);return!Number.isFinite(r)||!Number.isInteger(r)?"Position must be an integer":null}switch(o.type){case"numeric":{const r=Number(e);if(!Number.isFinite(r))return"Must be a valid number";if(!Number.isInteger(r))return"Must be an integer";if(r<-1999999999||r>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const r=Number(e);if(!Number.isFinite(r))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(r<-999999999999e-2||r>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const r=e,n=r.latitude!==""&&r.latitude!=null,a=r.longitude!==""&&r.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(r.latitude),d=Number(r.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"focus-point":{const r=e,n=r.horizontal!==""&&r.horizontal!=null,a=r.vertical!==""&&r.vertical!=null;if(n!==a)return"Both horizontal and vertical are required";if(n&&a){for(const l of[r.horizontal,r.vertical])if(Ss(l)===null)return`Focus point must be between ${no} and ${ao}`}break}case"attachment-uri":{try{const r=new URL(e);if(!["http:","https:"].includes(r.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(o.validation&&typeof e=="string")try{if(!new RegExp(o.validation).test(e))return"Value does not match expected format"}catch{}return null}function Le(o){return o==null?!0:Array.isArray(o)||typeof o=="string"?o.length===0:typeof o=="object"?!Object.values(o).some(e=>e!=null&&e!==""):!o}const El=new Set(["idle","queued","rejected"]);function Ji(o){return!Le(o)}function ii(o,e){var t;return fi(o)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(o.ckey)?!0:!!o.required}function uo(o,e,t){var i;return(i=t==null?void 0:t.get(o.ckey))!=null&&i.required?!0:ii(o,e)}function $t(o){return[...o.values()].filter(e=>El.has(e.status))}function En(o,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:o.forceFillingOnUpload!==void 0?o.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:o.fields.some(t=>!!t.required)}function gi(o,e,t){if(!e)return ii(o,t);const i=e.get(o.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:ii(o,t)}function jt(o,e,t){const i=new Map;if(!t||t.length===0){for(const s of o)i.set(s.id,null);return i}for(const s of o)i.set(s.id,zt({mime:s.type??"",meta:s.meta},e,t));return i}function Pl(o,e,t,i){const s=$t(o);if(s.length===0)return{};const r=jt(s,e,i),n={};for(const a of e.fields){const l=s.filter(d=>{const p=r.get(d.id)??null;return gi(a,p,t)?!Ji(d.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function Tl(o,e,t,i){const s=$t(o);if(s.length===0)return new Set;const r=jt(s,e,i),n=new Set;for(const a of e.fields)s.some(d=>{const p=r.get(d.id)??null;return gi(a,p,t)})&&n.add(a.key);return n}function Rl(o,e,t,i){const s=$t(o);if(s.length===0)return null;const r=jt(s,e,i);for(const n of e.fields)if(s.some(l=>{const d=r.get(l.id)??null;return gi(n,d,t)?!Ji(l.meta[n.key]):!1}))return n.key;return null}function Pn(o,e,t){var s;const i=o.get(e.id);return i&&i.has(t)?i.get(t):(s=e.meta)==null?void 0:s[t]}function ho(o,e,t){const i=e.get(o.id);if(!i||i.size===0)return o;const s={...o.meta};for(const r of t.fields)i.has(r.key)&&(s[r.key]=i.get(r.key));return{...o,meta:s}}function Ch(o,e,t,i,s){const r=$t(e);if(r.length===0)return null;const n=r.map(l=>ho(l,o,t)),a=jt(n,t,s);for(const l of t.fields)if(r.some((p,u)=>{const f=a.get(n[u].id)??null;return gi(l,f,i)?!Ji(Pn(o,p,l.key)):!1}))return l.key;return null}function Fl(o,e,t,i,s){const r=new Set,n=$t(e);if(n.length===0)return r;const a=n.map(d=>ho(d,o,t)),l=jt(a,t,s);for(const d of t.fields)n.some((u,f)=>{const x=l.get(a[f].id)??null;return gi(d,x,i)?!Ji(Pn(o,u,d.key)):!1})&&r.add(d.key);return r}function Tn(o,e,t){if(!t||t.length===0)return null;const i=$t(o);if(i.length===0)return null;const s=jt(i,e,t),r=new Map;for(const n of i){const a=s.get(n.id);if(!a||a.size===0)continue;const l={};for(const p of e.fields)p.key in n.meta&&(l[p.ckey]=n.meta[p.key]);const d=_n(l,a);d.length!==0&&r.set(n.id,new Set(d.map(p=>p.ckey)))}if(r.size===0)return null;for(const n of e.fields)for(const a of r.values())if(a.has(n.ckey))return n.key;return null}function Il(o,e,t,i){const s=$t(e);if(s.length===0)return null;const r=new Map(s.map(n=>[n.id,ho(n,o,t)]));return Tn(r,t,i)}function Eh(o,e){const t={...o};for(const i of Object.keys(e)){const s=e[i];if(s==null||s==="")continue;const r=o[i];if(Array.isArray(s))if(Array.isArray(r)){const n=new Set(r.map(l=>JSON.stringify(l))),a=[...r];for(const l of s){const d=JSON.stringify(l);n.has(d)||(n.add(d),a.push(l))}t[i]=a}else t[i]=s;else t[i]=s}return t}function Al(o,e){const t=e.fields[o.ckey];let i=!1;const s=(o.possible_values??[]).map(l=>{const d=e.options[l.internal_unique_value];return d&&d!==l.label?(i=!0,{...l,label:d}):l}),r=!!(t!=null&&t.name)&&t.name!==o.title,n=!!(t!=null&&t.placeholder)&&t.placeholder!==o.placeholder,a=!!(t!=null&&t.tooltip)&&t.tooltip!==o.hint;return!i&&!r&&!n&&!a?o:{...o,title:r?t.name:o.title,placeholder:n?t.placeholder:o.placeholder,hint:a?t.tooltip:o.hint,possible_values:i?s:o.possible_values}}function Ol(o,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return o;let t=!1;const i=o.groups.map(n=>{let a=!1;const l=n.fields.map(d=>{const p=Al(d,e);return p!==d&&(a=!0),p});return a?(t=!0,{...n,fields:l}):n});if(!t)return o;const s=i.flatMap(n=>n.fields),r=new Map(s.map(n=>[n.key,n]));return{...o,groups:i,fields:s,fieldsByKey:r}}const Ul="description",He="system.focusPoint",zl="__focus_point__",Ll="sfx-meta-focus-point-field";function gt(o){return o===He}function Dl(o){return{key:He,ckey:He,uuid:"system-focus-point",title:o("focusPointLabel","Focus point"),type:"focus-point",required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Ml(o,e){const t=Dl(e);let i=!1,s=o.groups.map(a=>{if(i||!a.isRoot)return a;i=!0;const l=a.fields.findIndex(p=>p.ckey===Ul),d=l===-1?a.fields.length:l+1;return{...a,fields:[...a.fields.slice(0,d),t,...a.fields.slice(d)]}});i||(s=[{uuid:zl,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...s]);const r=s.flatMap(a=>a.fields),n=new Map(r.map(a=>[a.key,a]));return{...o,groups:s,fields:r,fieldsByKey:n}}function Rn(o){if(!o.fields.some(s=>gt(s.key)))return o;const e=o.groups.map(s=>({...s,fields:s.fields.filter(r=>!gt(r.key))})).filter(s=>s.fields.length>0),t=e.flatMap(s=>s.fields),i=new Map(t.map(s=>[s.key,s]));return{...o,groups:e,fields:t,fieldsByKey:i}}function Fn(o=2){return c`<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width=${o}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>`}function fo(o){return o.show===!1}const Bl="f7b2366e-fcb6-4f1a-8f23-8de48422989a",jl="https://i18n-fastly.ultrafast.io",Nl="uploader",go=fn({gridUuid:Bl,namespace:Nl,cdnUrl:jl}),ql=go.initI18n,C=go.t,qe=go.I18nController;var Hl=Object.defineProperty,ye=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Hl(e,t,s),s};const Vl=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,Kl=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,Yl=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,Gl=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,Fo=class Fo extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.focusPointPicking=!1,this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=_n(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var r;const i=this.resolvedSchema;if(i&&e.ckey&&((r=i.get(e.ckey))!=null&&r.hidden))return[];let s=i?e.fields.filter(n=>!Zi(n,e,i)):e.fields;return fo(e)&&(s=s.filter(n=>uo(n,this.config??void 0,i)||ro(n,e,i))),t&&!e.name.toLowerCase().includes(t)&&(s=s.filter(n=>n.title.toLowerCase().includes(t))),s}_renderFilter(e,t,i){if(this.hideFilter)return m;if(!this.schema||this.schema.fields.length===0)return m;const s=this._filterQuery,r=this._isAllCollapsed(t),n=r?C("expandAll","Expand all"):C("collapseAll","Collapse all");return c`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${Vl}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${C("searchFields","Search fields...")}
            .value=${s}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${C("searchMetadataFields","Search metadata fields")}
          />
          ${s?c`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${C("clearSearch","Clear search")}
                aria-label=${C("clearSearch","Clear search")}
                type="button"
              >
                ${Kl}
              </button>`:m}
        </div>
        ${e?c`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?C("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${r?C("expandAllGroups","Expand all groups"):C("collapseAllGroups","Collapse all groups")}
              type="button"
            >
              ${r?Gl:Yl}
            </button>`:m}
      </div>
    `}_renderGroup(e,t,i,s,r){const n=r?!0:!this._collapsed.has(e.uuid);return c`
      <div class="group">
        <button
          class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${n}
        >
          <span>${e.name}</span>
          <svg
            class="chevron ${n?"open":""}"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
        ${n?c`
              <div class="group-content">
                ${t.map(a=>{var l,d,p;return c`
                    <sfx-metadata-field
                      .field=${a}
                      .value=${this.meta[a.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((l=this.taxonodes)==null?void 0:l[a.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${((d=this.schema)==null?void 0:d.regionalVariantsGroups)??[]}
                      .resolvedState=${((p=this.resolvedSchema)==null?void 0:p.get(a.ckey))??null}
                      .conflict=${i.get(a.ckey)??null}
                      .dependencyNames=${s}
                      .focusPointPicking=${this.focusPointPicking}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:m}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return c`<div class="empty" role="status" aria-live="polite">
        ${C("noMetadataFieldsConfigured","No metadata fields configured")}
      </div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),s=i.toLowerCase(),r=s!=="",n=[];for(const p of this.schema.groups){const u=this._visibleFieldsFor(p,s);u.length!==0&&n.push({group:p,fields:u})}const a=n.map(p=>p.group.uuid),l=this.schema.groups.length>1&&(r||n.length>0),d=this._renderFilter(l,a,r);if(n.length===0){const p=r?C("noFieldsMatch",'No fields match "{{query}}"',{query:i}):C("allMetadataFieldsHidden","All metadata fields are currently hidden");return c`
        ${d}
        <div class="empty" role="status" aria-live="polite">${p}</div>
      `}return c`
      ${d}
      ${n.map(({group:p,fields:u})=>this._renderGroup(p,u,e,t,r))}
    `}};Fo.styles=j`
    :host {
      display: block;
    }

    .form-filter {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px 12px;
    }
    .filter-input-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
      height: 36px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      transition:
        border-color 0.15s ease,
        box-shadow 0.15s ease;
      box-sizing: border-box;
    }
    .filter-input-wrap:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow:
        0 0 0 2px var(--sfx-up-bg, #fff),
        0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    }
    .filter-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 100%;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .filter-icon svg {
      width: 16px;
      height: 16px;
    }
    .filter-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      padding: 0 4px 0 0;
      border: none;
      background: transparent;
      outline: none;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
    }
    .filter-input::placeholder {
      color: var(--sfx-up-text-muted, #94a3b8);
      opacity: 1;
    }
    .filter-clear {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      margin-right: 4px;
      flex-shrink: 0;
      border-radius: 6px;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      transition:
        background 0.15s ease,
        color 0.15s ease;
    }
    .filter-clear:hover {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .filter-clear:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 1px;
    }
    .filter-clear svg {
      width: 12px;
      height: 12px;
    }
    .filter-collapse {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      transition:
        background 0.15s ease,
        color 0.15s ease,
        border-color 0.15s ease;
      box-sizing: border-box;
    }
    .filter-collapse:hover:not(:disabled) {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .filter-collapse:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .filter-collapse:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .filter-collapse svg {
      width: 16px;
      height: 16px;
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 48px;
      padding: 0 16px;
      box-sizing: border-box;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      transition: background-color 0.12s ease;
    }
    .group-header:hover {
      background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
    }
    .group-header:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
      border-radius: 4px;
    }

    .chevron {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }
    .chevron.open {
      transform: rotate(180deg);
    }

    .group-content {
      padding: 0 16px 8px;
    }

    .empty {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
  `;let ae=Fo;ye([h({attribute:!1})],ae.prototype,"schema");ye([h({attribute:!1})],ae.prototype,"meta");ye([h({attribute:!1})],ae.prototype,"config");ye([h({attribute:!1})],ae.prototype,"autocomplete");ye([h({attribute:!1})],ae.prototype,"taxonomyService");ye([h({attribute:!1})],ae.prototype,"ultratags");ye([h({attribute:!1})],ae.prototype,"defaultLanguage");ye([h({attribute:!1})],ae.prototype,"taxonodes");ye([h({attribute:!1})],ae.prototype,"resolvedSchema");ye([h({attribute:!1})],ae.prototype,"dependencies");ye([h({type:Boolean})],ae.prototype,"focusPointPicking");ye([h({type:Boolean})],ae.prototype,"disabled");ye([h({type:Boolean,attribute:"hide-filter"})],ae.prototype,"hideFilter");ye([E()],ae.prototype,"_collapsed");ye([E()],ae.prototype,"_filterQuery");J("sfx-metadata-form",ae);const St=j`
  input,
  textarea,
  select {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    outline: none;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input::placeholder,
  textarea::placeholder {
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    font-size: 14px;
    color: var(--sfx-up-text-muted, #94a3b8);
    opacity: 1;
  }
  input:focus,
  textarea:focus,
  select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
  }
  input:disabled,
  textarea:disabled,
  select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  ${Ee}
`,mi=j`
  :host {
    display: block;
    position: relative;
  }

  .trigger {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .trigger-clear {
    all: unset;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: pointer;
    transition:
      color 0.15s,
      background 0.15s;
  }
  .trigger-clear:hover {
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-surface, #f1f5f9);
  }
  .trigger-chevron {
    margin-left: auto;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
    pointer-events: none;
  }
  .trigger-chevron svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .trigger-chevron.open {
    transform: rotate(180deg);
  }
  .trigger:focus-visible {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline: none;
  }
  .placeholder,
  .trigger-value {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .placeholder {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 10;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }

  /* Scrollable option region used by the select fields, which override the
     dropdown to a fixed-height flex column so the search stays pinned while
     this region scrolls. Hosts both the plain map() options and, for long
     lists, a lit-virtualizer that uses this element as its scroll container.
     The flex-shrink on .search only takes effect in that flex layout. */
  .options-list {
    flex: 1;
    overflow-y: auto;
  }
  .options-list lit-virtualizer {
    display: block;
  }
  /* The virtualizer positions each option absolutely without setting a width, so
     an option would otherwise shrink to its label and the hover/active highlight
     would not span the dropdown. Force full width to match the plain options. */
  .options-list lit-virtualizer > .option {
    width: 100%;
  }

  .search {
    flex-shrink: 0;
    width: 100%;
    height: 34px;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    font-size: 13px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: transparent;
    outline: none;
    box-sizing: border-box;
  }

  .option {
    padding: 8px 10px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
  }
  .option:hover,
  .option.active {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .option.selected {
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .empty {
    padding: 8px 10px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  ${Ee}
`,mo=j`
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-size: 12px;
    color: var(--sfx-up-text, #1e293b);
    line-height: 1.4;
  }
  .chip-x {
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
  }
  .chip-x:hover {
    color: var(--sfx-up-error, #dc2626);
  }

  ${Ee}
`,Ph=j`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
  }

  .panel-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }

  .panel-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition:
      background 0.15s ease,
      color 0.15s ease;
    flex-shrink: 0;
  }
  .panel-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .panel-close:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  .progress-bar {
    flex-shrink: 0;
    padding: 8px 16px;
    border-bottom: 1px solid var(--sfx-up-border-light, #f8faff);
  }
  .progress-label {
    font-size: 12px;
    color: var(--sfx-up-text-secondary, #64748b);
    margin-bottom: 4px;
  }
  .progress-track {
    height: 3px;
    border-radius: 2px;
    background: var(--sfx-up-border-light, #f8faff);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sfx-up-primary, #2563eb);
    transition: width 0.25s ease;
  }

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0 24px;
  }

  .panel-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .panel-footer .spacer {
    flex: 1;
  }

  .panel-footer .page-counter {
    font-size: 12px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* Shared button styles */
  .btn,
  .btn-ghost,
  .btn-primary {
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
  .btn-primary svg {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary, #2563eb),
      var(--sfx-up-primary-mid, #3b82f6)
    );
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary-hover, #1d4ed8),
      var(--sfx-up-primary, #2563eb)
    );
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
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  ${Ee}
`,In=j`
  :host {
    display: block;
  }

  .field-row {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 8px 0;
  }

  /* Textarea rows: label should top-align with the first line of text */
  .field-row--top {
    align-items: flex-start;
  }
  .field-row--top .field-label {
    padding-top: 6px;
  }

  .field-label {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 144px;
    flex-shrink: 0;
  }
  .field-label-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
  }
  /* Dependency-conflict marker. Surfaces when the field's current value
     violates an allow_values or set_values rule. The native title attribute
     is used as the tooltip so we don't need a separate popover element. */
  .field-conflict {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    color: var(--sfx-up-warning, #f59e0b);
    flex-shrink: 0;
    cursor: help;
  }
  .field-conflict svg {
    width: 14px;
    height: 14px;
  }
  .field-hint {
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: help;
    flex-shrink: 0;
  }
  .field-hint svg {
    width: 12px;
    height: 12px;
  }

  .field-content {
    flex: 1;
    min-width: 0;
  }

  .field-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* Per-field regional-variants hint, e.g. "Languages: English". Mirrors
     admin v5's useFieldRegionalVariantHint description text. */
  .field-regional-hint {
    font-size: 11px;
    color: var(--sfx-up-text-muted, #94a3b8);
    margin-top: 4px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 960px) {
    .field-label {
      width: 125px;
    }
  }

  /* Mobile: stack label above the input full-width. The fixed 144px
     label column gets crushed on narrow viewports. */
  @media (max-width: 768px) {
    .field-row,
    .field-row--top {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
      padding: 10px 0;
    }
    .field-row--top .field-label {
      padding-top: 0;
    }
    .field-label {
      width: auto;
    }
  }

  ${Ee}
`,Ui={LANGUAGES:"FTYPE_LANGUAGES",CURRENCIES:"FTYPE_CURRENCIES",CUSTOM:"FTYPE_CUSTOM"};function vt(o,e){if(!o.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&o.regional_variants_group_uuid in t?t[o.regional_variants_group_uuid]:e==null?void 0:e.language}function Wl(o,e,t,i){if(!o.regional_variants_group_uuid||!e)return;const s=e.find(a=>a.uuid===o.regional_variants_group_uuid);if(!s)return;const r=(t==null?void 0:t[s.uuid])??i,n=s.variants.find(a=>a.api_value===r);if(n)return`${s.label}: ${n.label}`}function Xl(o,e){var i;const t={};for(const s of o??[]){if(!((i=s.variants)!=null&&i.length))continue;const r=s.type===Ui.LANGUAGES?Zl(s.variants,e):void 0;t[s.uuid]=r??s.variants[0].api_value}return t}function Zl(o,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let s,r;for(const a of o){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!s&&l===i&&(s=a.api_value),!r&&l.split("-")[0]===i&&(r=a.api_value)}}return s??r}var Jl=Object.defineProperty,ge=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Jl(e,t,s),s};const Io=class Io extends W{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.focusPointPicking=!1,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:ii(this.field,this.config??void 0)}_conflictTooltip(){var n,a;const e=this.conflict;if(!e)return"";const t=l=>{var d,p,u;return((u=(p=(d=this.field)==null?void 0:d.possible_values)==null?void 0:p.find(f=>f.internal_unique_value===l))==null?void 0:u.label)??l},i=(n=this.resolvedState)==null?void 0:n.allowedValues,s=(a=this.resolvedState)==null?void 0:a.setValue;let r;if(e.kind==="allow_values"&&i?r=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&s!==void 0?r=`Value should be: ${(Array.isArray(s)?s:[s]).map(t).join(", ")}`:r="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const l=e.dependencyUuids.map(d=>this.dependencyNames.get(d)).filter(d=>!!d);if(l.length>0){const d=l.length===1?"dependency":"dependencies";r+=`
Controlled by ${d}: ${l.join(", ")}`}}return r}_onFieldBlur(e){const{key:t,value:i}=e.detail,s=Cn(this.field,i,this.config??void 0);if(s){this._error=s;return}this._error=null;const r={meta:{[this.field.key]:this.value}},n=vt(this.field,this.config),a=lo(this.field,i,r,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_emitRow(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}_onRowFocusIn(){this._emitRow("field-focus",{focused:!0})}_onRowFocusOut(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emitRow("field-focus",{focused:!1})}_renderField(e,t){var r,n;const i=this.disabled;if(fi(e))return c`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const s=((r=this.resolvedState)==null?void 0:r.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return c`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`;case"textarea":return c`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-textarea-field>`;case"select-one":return c`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${s}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return c`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${s}
          ?disabled=${i}
        ></sfx-meta-multi-select-field>`;case"tags":return c`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${i}
        ></sfx-meta-tags-field>`;case"ultratags":return c`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${(n=this.config)==null?void 0:n.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}
        ></sfx-meta-ultratags-field>`;case"taxonomy-node":return c`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${i}
        ></sfx-meta-taxonomy-node-field>`;case"boolean":return c`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return c`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-number-field>`;case"date":return c`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-date-field>`;case"geopoint":return c`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-geo-point-field>`;case"focus-point":return c`<sfx-meta-focus-point-field
          .field=${e}
          .value=${t}
          .picking=${this.focusPointPicking}
          ?disabled=${i}
        ></sfx-meta-focus-point-field>`;default:return c`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}render(){var l,d;const e=this.field;if(!e)return m;const t=vt(e,this.config),i=kn(e,this.value,t),s=Wl(e,this.regionalVariantsGroups,(l=this.config)==null?void 0:l.regionalFilters,(d=this.config)==null?void 0:d.language),n=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return c`
      <div
        class=${n}
        aria-required=${this._isRequired?"true":"false"}
        @focusin=${this._onRowFocusIn}
        @focusout=${this._onRowFocusOut}
      >
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?c`<span class="field-required" aria-hidden="true">*</span>`:m}
          ${this.conflict?c`<span
                class="field-conflict"
                role="img"
                aria-label=${a}
                title=${a}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 2 L14 13 L2 13 Z" />
                  <line x1="8" y1="6.5" x2="8" y2="9.5" />
                  <circle cx="8" cy="11.25" r="0.4" fill="currentColor" />
                </svg>
              </span>`:m}
        </div>
        <div class="field-content">
          ${this._renderField(e,i)}
          ${s?c`<div class="field-regional-hint" title=${s}>${s}</div>`:m}
          ${this._error?c`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:m}
        </div>
      </div>
    `}};Io.styles=[In];let re=Io;ge([h({attribute:!1})],re.prototype,"field");ge([h({attribute:!1})],re.prototype,"value");ge([h({attribute:!1})],re.prototype,"config");ge([h({attribute:!1})],re.prototype,"autocomplete");ge([h({attribute:!1})],re.prototype,"taxonomyService");ge([h({attribute:!1})],re.prototype,"taxonomyEntry");ge([h({attribute:!1})],re.prototype,"ultratags");ge([h({attribute:!1})],re.prototype,"defaultLanguage");ge([h({attribute:!1})],re.prototype,"ultratagsRestrictToItems");ge([h({attribute:!1})],re.prototype,"regionalVariantsGroups");ge([h({attribute:!1})],re.prototype,"resolvedState");ge([h({attribute:!1})],re.prototype,"conflict");ge([h({attribute:!1})],re.prototype,"dependencyNames");ge([h({type:Boolean})],re.prototype,"focusPointPicking");ge([h({type:Boolean})],re.prototype,"disabled");ge([E()],re.prototype,"_error");J("sfx-metadata-field",re);var Ql=Object.defineProperty,vo=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Ql(e,t,s),s};class _e extends W{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new qe(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?C("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??C("selectAnOption","Select an option")}_emit(e,t){this._emitDetail(e,t!==void 0?{value:t}:{})}_emitDetail(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}}vo([h({attribute:!1})],_e.prototype,"field");vo([h({attribute:!1})],_e.prototype,"value");vo([h({type:Boolean})],_e.prototype,"disabled");const Ao=class Ao extends _e{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return c`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Ao.styles=[St];let Ts=Ao;J("sfx-meta-text-field",Ts);const Oo=class Oo extends _e{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return c`
      <textarea
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};Oo.styles=[St,j`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Rs=Oo;J("sfx-meta-textarea-field",Rs);function vi(o,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=(o,e)=>{var i;const t=o._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),ei(s,e);return!0},Ni=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while((t==null?void 0:t.size)===0)},An=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),id(e)}};function ed(o){this._$AN!==void 0?(Ni(this),this._$AM=o,An(this)):this._$AM=o}function td(o,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)ei(i[r],!1),Ni(i[r]);else i!=null&&(ei(i,!1),Ni(i));else ei(this,o)}const id=o=>{o.type==hi.CHILD&&(o._$AP??(o._$AP=td),o._$AQ??(o._$AQ=ed))};class sd extends Gi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),An(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(ei(this,e),Ni(this))}setValue(e){if(Ia(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qi extends Event{constructor(e){super(Qi.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Qi.eventName="rangeChanged";class es extends Event{constructor(e){super(es.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}es.eventName="visibilityChanged";class ts extends Event{constructor(){super(ts.eventName,{bubbles:!1})}}ts.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class od{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class rd extends od{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:s}=this._destination;i=Math.min(i||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const r=Math.abs(i-e),n=Math.abs(s-t);r<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let _r=typeof window<"u"?window.ResizeObserver:void 0;const Fs=Symbol("virtualizerRef"),Pi="virtualizer-sizer";let wr;class nd{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new _r(()=>this._hostElementSizeChanged()),this._childrenRO=new _r(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[Fs]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=dd(this._hostElement,e),this._scrollerController=new rd(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,i,s;this._scrollEventListeners.forEach(r=>r.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(s=this._childrenRO)==null||s.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${Pi}]`);t||(t=document.createElement("div"),t.setAttribute(Pi,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(Pi,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||wr;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const s={...e};delete s.type,t=s}else t=e;i===void 0&&(wr=i=(await Wt(()=>import("./flow-DQ61c9Hr.js"),[])).FlowLayout),this._layout=new i(s=>this._handleLayoutMessage(s),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,n)=>r+n.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:s}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let s=0;s<t.length;s++){const r=t[s],n=this._first+s;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[n]=i.call(this,r,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},ad(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new ts)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(Pi)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var s;const e=this._hostElement,t=(s=this._scrollerController)==null?void 0:s.element,i=this._layout;if(e&&t&&i){let r,n,a,l;const d=e.getBoundingClientRect();r=0,n=0,a=window.innerHeight,l=window.innerWidth;const p=this._clippingAncestors.map($=>$.getBoundingClientRect());p.unshift(d);for(const $ of p)r=Math.max(r,$.top),n=Math.max(n,$.left),a=Math.min(a,$.bottom),l=Math.min(l,$.right);const u=t.getBoundingClientRect(),f={left:d.left-u.left,top:d.top-u.top},x={width:t.scrollWidth,height:t.scrollHeight},k=r-d.top+e.scrollTop,v=n-d.left+e.scrollLeft,P=Math.max(0,a-r),T=Math.max(0,l-n);i.viewportSize={width:T,height:P},i.viewportScroll={top:k,left:v},i.totalScrollSize=x,i.offsetWithinScroller=f}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${s}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:s,height:r,xOffset:n,yOffset:a},l)=>{const d=this._children[l-this._first];d&&(d.style.position="absolute",d.style.boxSizing="border-box",d.style.transform=`translate(${i}px, ${t}px)`,s!==void 0&&(d.style.width=s+"px"),r!==void 0&&(d.style.height=r+"px"),d.style.left=n===void 0?null:n+"px",d.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:s,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-s})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Qi({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new es({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function ad(o){const e=window.getComputedStyle(o);return{marginTop:Ti(e.marginTop),marginRight:Ti(e.marginRight),marginBottom:Ti(e.marginBottom),marginLeft:Ti(e.marginLeft)}}function Ti(o){const e=o?parseFloat(o):NaN;return Number.isNaN(e)?0:e}function kr(o){if(o.assignedSlot!==null)return o.assignedSlot;if(o.parentElement!==null)return o.parentElement;const e=o.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function ld(o,e=!1){const t=[];let i=e?o:kr(o);for(;i!==null;)t.push(i),i=kr(i);return t}function dd(o,e=!1){let t=!1;return ld(o,e).filter(i=>{if(t)return!1;const s=getComputedStyle(i);return t=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=o=>o,Un=(o,e)=>c`${e}: ${JSON.stringify(o,null,2)}`;class cd extends sd{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>Un(t,i+this._first),this._keyFunction=(t,i)=>On(t,i+this._first),this._items=[],e.type!==hi.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return Ot(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?Wi:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(s,r)=>t(s,r+this._first)),i&&(this._keyFunction=(s,r)=>i(s,r+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:s,items:r}=t;this._virtualizer=new nd({hostElement:e,layout:i,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const pd=ui(cd);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nt extends W{constructor(){super(...arguments),this.items=[],this.renderItem=Un,this.keyFunction=On,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:i,layout:s,scroller:r}=this;return c`${pd({items:e,renderItem:t,keyFunction:i,layout:s,scroller:r})}`}element(e){var t;return(t=this[Fs])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[Fs])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var i;(i=this.element(e))==null||i.scrollIntoView({block:t})}}vi([h({attribute:!1})],Nt.prototype,"items",void 0);vi([h()],Nt.prototype,"renderItem",void 0);vi([h()],Nt.prototype,"keyFunction",void 0);vi([h({attribute:!1})],Nt.prototype,"layout",void 0);vi([h({reflect:!0,type:Boolean})],Nt.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",Nt);const zn=50;function Ln(o,e){var i;const t=o.querySelector("lit-virtualizer");if(t){e>=0&&Promise.resolve(t.layoutComplete).then(()=>t.scrollToIndex(e,"nearest")).catch(()=>{});return}(i=o.querySelector(".option.active"))==null||i.scrollIntoView({block:"nearest"})}var ud=Object.defineProperty,is=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&ud(e,t,s),s},Ve;const bi=(Ve=class extends _e{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>c` <div
      class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${i=>{i.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}get _options(){var i,s;const e=((i=this.field)==null?void 0:i.possible_values)??Ve._EMPTY;if(((s=this._optionsCache)==null?void 0:s.src)===e)return this._optionsCache.out;const t=e.map(r=>({id:r.internal_unique_value,label:r.label,value:r.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var s;const e=this._options,t=this.allowedValues;if(((s=this._selectableCache)==null?void 0:s.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const r=new Set(t);i=e.filter(n=>r.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>Ln(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(e){return e.length?e.length<=zn?e.map(this._renderOption):c` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:c`<div class="empty">${C("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:Ve._EMPTY;return c`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._selectedLabel?c`<span class="trigger-value">${this._selectedLabel}</span>`:c`<span class="placeholder"
              >${((i=this.field)==null?void 0:i.placeholder)||e}</span
            >`}
        ${this._selectedLabel&&!this.disabled?c`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${C("clear","Clear")}
                @click=${this._clear}
                @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._clear(s))}}
                >&times;</span
              >
            `:m}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      ${this._open?c`
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${C("search","Search")}
                aria-label=${C("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
            </div>
          `:m}
    `}},Ve.styles=[mi,j`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],Ve._EMPTY=[],Ve);is([h({attribute:!1})],bi.prototype,"allowedValues");is([E()],bi.prototype,"_open");is([E()],bi.prototype,"_search");is([E()],bi.prototype,"_activeIndex");let hd=bi;J("sfx-meta-select-field",hd);var fd=Object.defineProperty,ss=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&fd(e,t,s),s},Ke;const xi=(Ke=class extends _e{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{const i=this._selected;return c` <div
      class="option ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${i.includes(e.value)}
      @mousedown=${s=>{s.preventDefault(),this._toggle(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      <span class="check ${i.includes(e.value)?"checked":""}">
        ${i.includes(e.value)?"✓":""}
      </span>
      ${e.label}
    </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,s;const e=((i=this.field)==null?void 0:i.possible_values)??Ke._EMPTY;if(((s=this._optionsCache)==null?void 0:s.src)===e)return this._optionsCache.out;const t=e.map(r=>({id:r.internal_unique_value,label:r.label,value:r.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var s;const e=this._options,t=this.allowedValues;if(((s=this._selectableCache)==null?void 0:s.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const r=new Set(t);i=e.filter(n=>r.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(s=>s!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i),this._emit("field-blur",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t),this._emit("field-blur",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e),this._emit("field-blur",e)}_clearAll(){this.value=[],this._emit("field-change",[]),this._emit("field-blur",[])}_scrollActive(){this.updateComplete.then(()=>Ln(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}_renderOptions(e){return e.length?e.length<=zn?e.map(this._renderOption):c` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:c`<div class="empty">${C("noOptions","No options")}</div>`}render(){var s;const e=this._selected,t=this._selectPlaceholder(),i=this._open?this._filtered:Ke._EMPTY;return c`
      <div
        class="trigger"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${e.length?e.map(r=>c` <span class="chip">
                  ${this._labelFor(r)}
                  <button
                    class="chip-x"
                    aria-label=${C("removeItem","Remove {{item}}",{item:this._labelFor(r)})}
                    @click=${n=>{n.stopPropagation(),this._remove(r)}}
                  >
                    &times;
                  </button>
                </span>`):c`<span class="placeholder"
              >${((s=this.field)==null?void 0:s.placeholder)||t}</span
            >`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>

      ${this._open?c`
            <div
              class="dropdown"
              role="listbox"
              aria-multiselectable="true"
              @keydown=${this._onKeydown}
            >
              <input
                class="search"
                type="text"
                placeholder=${C("search","Search")}
                aria-label=${C("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(i)}</div>
              ${this._options.length>0?c`
                    <div class="bulk-actions">
                      <button
                        type="button"
                        class="bulk-btn"
                        @mousedown=${r=>{r.preventDefault(),this._selectAll()}}
                      >
                        ${C("selectAll","Select all")}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${r=>{r.preventDefault(),this._clearAll()}}
                      >
                        ${C("clearAll","Clear all")}
                      </button>
                    </div>
                  `:m}
            </div>
          `:m}
    `}},Ke.styles=[mi,mo,j`
      .trigger {
        min-height: 36px;
        height: auto;
        padding: 4px 8px;
        flex-wrap: wrap;
        gap: 4px;
      }
      .check {
        width: 16px;
        height: 16px;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 11px;
      }
      .check.checked {
        background: var(--sfx-up-primary, #2563eb);
        border-color: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 340px;
      }
      .dropdown .search {
        flex-shrink: 0;
        min-height: 34px;
      }
      .options-list {
        flex: 1;
        overflow-y: auto;
      }
      .bulk-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
        flex-shrink: 0;
      }
      .bulk-btn {
        all: unset;
        font-size: 12px;
        font-weight: 500;
        color: var(--sfx-up-primary, #2563eb);
        cursor: pointer;
      }
      .bulk-btn:hover {
        text-decoration: underline;
      }
      .bulk-btn--muted {
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `],Ke._EMPTY=[],Ke);ss([h({attribute:!1})],xi.prototype,"allowedValues");ss([E()],xi.prototype,"_open");ss([E()],xi.prototype,"_search");ss([E()],xi.prototype,"_activeIndex");let gd=xi;J("sfx-meta-multi-select-field",gd);function ut(o,e){var t,i;return((t=o.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Dn(o){return o.trim().replace(/\s+/g," ")}function md(o){return Dn(o).replace(/\s/g,"-")}function Ri(o){return{label:Dn(o),value:md(o)}}var vd=Object.defineProperty,qt=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&vd(e,t,s),s};const Uo=class Uo extends _e{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,s;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(s=this.autocomplete)==null||s.search(this.field.ckey,t,r=>{this._results=r,this._loading=!1})}_addTag(e){if(this._tags.some(i=>ut(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!ut(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(Ri(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(Ri(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var r;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((r=this.field)==null?void 0:r.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!t.some(a=>ut(a,n))).filter(n=>!e||n.label.toLowerCase().includes(e)),s=this._results.filter(n=>!t.some(a=>ut(a,n))&&!i.some(a=>ut(a,n)));return[...i,...s]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=Ri(e);return!this._tags.some(i=>ut(i,t))&&!this._suggestions.some(i=>ut(i,t))}render(){var s,r;const e=this._tags,t=this._suggestions,i=t.length;return c`
      <div
        class="container"
        @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}
      >
        ${e.map(n=>c` <span class="chip">
              ${n.label}
              <button
                class="chip-x"
                aria-label=${C("removeItem","Remove {{item}}",{item:n.label})}
                @click=${a=>{a.stopPropagation(),this._removeTag(n)}}
              >
                &times;
              </button>
            </span>`)}
        <input
          class="input"
          type="text"
          .value=${this._query}
          role="combobox"
          aria-expanded=${this._dropdownOpen}
          aria-haspopup="listbox"
          aria-label=${((s=this.field)==null?void 0:s.title)??C("tags","Tags")}
          placeholder=${e.length?"":((r=this.field)==null?void 0:r.placeholder)||C("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?c`
            <div class="dropdown" role="listbox">
              ${this._loading?c`<div class="loading">${C("loading","Loading")}</div>`:m}
              ${t.map((n,a)=>c` <div
                    class="option ${a===this._activeIndex?"active":""}"
                    role="option"
                    @mousedown=${l=>{l.preventDefault(),this._addTag(n)}}
                    @mouseenter=${()=>{this._activeIndex=a}}
                  >
                    ${n.label}
                  </div>`)}
              ${this._canCreate?c` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${n=>{n.preventDefault(),this._addTag(Ri(this._query))}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${C("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
                  </div>`:m}
              ${!this._loading&&!t.length&&!this._canCreate?c`<div class="empty">${C("noResults","No results")}</div>`:m}
            </div>
          `:m}
    `}};Uo.styles=[mo,j`
      :host {
        display: block;
        position: relative;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover,
      .option.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }

      .loading,
      .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let Ge=Uo;qt([h({attribute:!1})],Ge.prototype,"autocomplete");qt([E()],Ge.prototype,"_query");qt([E()],Ge.prototype,"_results");qt([E()],Ge.prototype,"_loading");qt([E()],Ge.prototype,"_dropdownOpen");qt([E()],Ge.prototype,"_activeIndex");J("sfx-meta-tags-field",Ge);var bd=Object.defineProperty,Mn=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&bd(e,t,s),s};const ht=()=>[{label:C("booleanTrue","True"),value:"true"},{label:C("booleanFalse","False"),value:"false"}],zo=class zo extends _e{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=ht().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(ht().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,ht().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=ht().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<ht().length&&(e.preventDefault(),this._onSelect(ht()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return c`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._currentLabel?c`<span class="trigger-value">${this._currentLabel}</span>`:c`<span class="placeholder"
              >${((i=this.field)==null?void 0:i.placeholder)||t}</span
            >`}
        ${this._currentLabel&&!this.disabled?c`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${C("clear","Clear")}
                @click=${this._clear}
                @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._clear(s))}}
                >&times;</span
              >
            `:m}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      ${this._open?c`
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${ht().map((s,r)=>c` <div
                    class="option ${s.value===e?"selected":""} ${r===this._activeIndex?"active":""}"
                    role="option"
                    aria-selected=${s.value===e}
                    @mousedown=${n=>{n.preventDefault(),this._onSelect(s)}}
                    @mouseenter=${()=>{this._activeIndex=r}}
                  >
                    ${s.label}
                  </div>`)}
            </div>
          `:m}
    `}};zo.styles=[mi];let si=zo;Mn([E()],si.prototype,"_open");Mn([E()],si.prototype,"_activeIndex");J("sfx-meta-boolean-field",si);const Lo=class Lo extends _e{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return c`
      <input
        type="number"
        step=${this._step}
        inputmode=${this._inputMode}
        .value=${String(this.value??"")}
        placeholder=${((e=this.field)==null?void 0:e.placeholder)??""}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Lo.styles=[St];let Is=Lo;J("sfx-meta-number-field",Is);const Do=class Do extends _e{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return c`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?c`<span class="date-placeholder">${C("pickADate","Pick a date")}</span>`:m}
        <span class="date-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};Do.styles=[St,j`
      .date-wrap {
        position: relative;
        width: 100%;
      }

      .date-wrap input[type='date'] {
        padding-right: 32px;
        color: var(--sfx-up-text, #1e293b);
      }

      /* Hide native calendar indicator but keep it clickable across the field */
      .date-wrap input[type='date']::-webkit-calendar-picker-indicator {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      /* Empty state: hide the native dd/mm/yyyy text so the placeholder shows */
      .date-wrap input[type='date'].is-empty::-webkit-datetime-edit {
        opacity: 0;
      }

      .date-placeholder {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      }

      /* Firefox doesn't support ::-webkit-datetime-edit so it can't hide
         the native placeholder — hide the custom one to avoid overlap. */
      @supports (-moz-appearance: none) {
        .date-placeholder {
          display: none;
        }
      }

      .date-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
      }

      .date-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    `];let As=Do;J("sfx-meta-date-field",As);const Mo=class Mo extends _e{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,s={...this._geo,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_renderInput(e,t){return c`
      <div>
        <label for="geo-${e}" title=${t}>${t}</label>
        <input
          id="geo-${e}"
          type="number"
          step="any"
          inputmode="decimal"
          aria-label=${t}
          .value=${this._geo[e]}
          ?disabled=${this.disabled}
          @input=${i=>this._onInput(e,i)}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>
    `}render(){return c`
      <div class="grid">
        ${this._renderInput("latitude",C("latitude","Latitude"))}
        ${this._renderInput("longitude",C("longitude","Longitude"))}
      </div>
    `}};Mo.styles=[St,j`
      :host {
        display: block;
        container-type: inline-size;
        container-name: sfx-geo-point;
      }
      .grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 12px;
      }

      @container sfx-geo-point (max-width: 180px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }
      label {
        display: block;
        font-size: 12px;
        line-height: 1;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `];let Os=Mo;J("sfx-meta-geo-point-field",Os);var xd=Object.defineProperty,yd=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&xd(e,t,s),s};const _d={horizontal:"50",vertical:"50"},wd=Fn(),kd=c`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M12 17v5" />
  <path
    d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
  />
</svg>`,Bo=class Bo extends _e{constructor(){super(...arguments),this.picking=!1,this._onZoneEnter=()=>this._emitDetail("field-hover",{hovering:!0}),this._onZoneLeave=()=>this._emitDetail("field-hover",{hovering:!1})}get _point(){const e=this.value;return{horizontal:(e==null?void 0:e.horizontal)??"",vertical:(e==null?void 0:e.vertical)??""}}get _hasValue(){const e=this._point;return e.horizontal!==""||e.vertical!==""}_onInput(e,t){const i=t.target.value,s={...this._point,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._point)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_onTogglePicking(){this._emitDetail("focus-point-pick-toggle",{picking:!this.picking})}_onResetToCenter(){this.value={..._d},this._emit("field-change",this.value),this._emit("field-blur",this.value)}_renderInput(e,t){return c`
      <div
        class="coord"
        @mouseenter=${this._onZoneEnter}
        @mouseleave=${this._onZoneLeave}
      >
        <label for="fp-${e}" title=${t}>${t}</label>
        <div class="input-wrap">
          <input
            id="fp-${e}"
            type="number"
            step="any"
            min="0"
            inputmode="decimal"
            aria-label=${t}
            .value=${this._point[e]}
            ?disabled=${this.disabled}
            @input=${i=>this._onInput(e,i)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
          <span class="suffix" aria-hidden="true">%</span>
        </div>
      </div>
    `}render(){const e=this.picking?C("focusPointPicking","Picking on image"):this._hasValue?C("focusPointChange","Change the point"):C("focusPointSet","Set focal point");return c`
      <div class="grid">
        ${this._renderInput("horizontal",C("focusPointHorizontal","Horizontal"))}
        ${this._renderInput("vertical",C("focusPointVertical","Vertical"))}
      </div>

      <div class="actions">
        <button
          type="button"
          class="action"
          aria-pressed=${this.picking?"true":"false"}
          ?disabled=${this.disabled}
          @mouseenter=${this._onZoneEnter}
          @mouseleave=${this._onZoneLeave}
          @mousedown=${t=>t.preventDefault()}
          @click=${this._onTogglePicking}
        >
          ${this.picking?kd:wd}
          <span class="action-label">${e}</span>
        </button>
        ${this._hasValue?c`<button
              type="button"
              class="action action-muted"
              ?disabled=${this.disabled}
              @mouseenter=${this._onZoneEnter}
              @mouseleave=${this._onZoneLeave}
              @mousedown=${t=>t.preventDefault()}
              @click=${this._onResetToCenter}
            >
              <span class="action-label">${C("focusPointResetCenter","Reset to center")}</span>
            </button>`:m}
      </div>

      ${this.picking?c`<div class="hint">
            ${C("focusPointPickingHint","Click the image preview to place the focus point.")}
          </div>`:m}
    `}};Bo.styles=[St,j`
      :host {
        display: block;
        container-type: inline-size;
        container-name: sfx-focus-point;
      }
      .grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 12px;
      }

      @container sfx-focus-point (max-width: 180px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }
    
        .input-wrap input {
          -moz-appearance: textfield;
          appearance: textfield;
          padding-right: 26px;
        }
        .suffix {
          right: 10px;
        }
      }
      label {
        display: block;
        font-size: 12px;
        line-height: 1;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .input-wrap {
        position: relative;
      }

      .input-wrap input {
        padding-right: 26px;
      }

      .suffix {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
        background: var(--sfx-up-bg, #fff);
        padding-left: 2px;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px 12px;
        margin-top: 8px;
      }
      .action {
        all: unset;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
        color: var(--sfx-up-primary, #2563eb);
        min-width: 0;
      }
      .action-label {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .action:hover {
        opacity: 0.8;
      }
      .action:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        border-radius: 4px;
      }
      .action[disabled] {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .action svg {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
      }
      .action-muted {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-weight: 400;
      }

      .hint {
        margin-top: 6px;
        font-size: 11px;
        line-height: 1.3;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let qi=Bo;yd([h({type:Boolean})],qi.prototype,"picking");J(Ll,qi);var $d=Object.defineProperty,Me=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&$d(e,t,s),s};const Et={uuid:"__root__",name:"",ltree:""},jo=class jo extends _e{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[Et],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var s,r,n;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((s=this.field)==null?void 0:s.ckey)??((r=this.field)==null?void 0:r.key)}" model:`,(n=this.field)==null?void 0:n.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[Et];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[Et];const i=t.slice(0,-1),r=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),n=[Et];let a="";for(let l=0;l<i.length;l++)a=a?`${a}.${i[l]}`:i[l],n.push({uuid:`__seed_${a}`,name:r[l]??i[l],ltree:a});return n}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,s=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=s.nodes,this._loading=!1;const r=this._selectedScalar,n=r?this._currentNodes.findIndex(a=>a.uuid===r||a.slug===r):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){var s;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(s=this.taxonomyService)==null||s.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,r=>{i===this._searchSeq&&(this._searchResults=r,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(s=>s.uuid!==Et.uuid).map(s=>s.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const r=this._currentNodes[this._activeIndex];r.children.count_direct>0&&(e.preventDefault(),this._drillInto(r))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const r=this._searchResults[this._activeIndex];r&&this._selectAutocomplete(r)}else{const r=this._currentNodes[this._activeIndex];r&&this._selectTreeNode(r)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?m:c`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const s=i===e.length-1,r=t.uuid===Et.uuid?C("rootNode","Root"):t.name;return c`
            ${i>0?c`<span class="crumb-sep">›</span>`:m}
            <button
              class="crumb ${s?"current":""}"
              type="button"
              ?disabled=${s}
              @click=${()=>!s&&this._jumpToCrumb(i)}
            >
              ${r}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return c`<div class="empty">${C("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return c`<div class="empty">${C("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return c`<div class="empty">${C("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return c`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const s=t.children.count_direct>0,r=!!e&&(e===t.uuid||e===t.slug);return c`
            <div
              class="tree-row ${i===this._activeIndex?"active":""} ${r?"selected":""}"
              role="option"
              aria-selected=${r}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>s?this._drillInto(t):this._selectTreeNode(t)}
            >
              <span
                class="tree-radio ${r?"checked":""}"
                role="button"
                aria-label=${C("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${s?c`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:m}
              <span class="tree-chevron ${s?"":"hidden"}" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          `})}
      </div>
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?c`<div class="empty">${C("loading","Loading")}</div>`:this._searchResults.length===0?c`<div class="empty">${C("noResults","No results")}</div>`:c`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>c`
            <div
              class="ac-row ${t===this._activeIndex?"active":""}"
              role="option"
              @mouseenter=${()=>{this._activeIndex=t}}
              @click=${()=>this._selectAutocomplete(e)}
            >
              <span class="ac-tag">${e.tag}</span>
              ${e.path&&e.path!==e.tag?c`<span class="ac-path">${e.path}</span>`:m}
            </div>
          `)}
      </div>
    `}render(){var s;if(!this._taxonomySuid)return c`<div class="misconfigured" role="alert">
        ${C("missingTaxonomyConfig","Field is missing taxonomy config")}
      </div>`;const e=this._selectPlaceholder(C("selectANode","Select a node")),t=this._displayPath,i=!!t;return c`
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${r=>{!this._open&&(r.key==="ArrowDown"||r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._openDropdown())}}
      >
        ${i?c`<span class="trigger-value" title=${t}>${t}</span>`:c`<span class="placeholder"
              >${((s=this.field)==null?void 0:s.placeholder)||e}</span
            >`}
        ${i&&!this.disabled?c`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${C("clear","Clear")}
                @click=${this._clear}
                @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}
                >&times;</span
              >
            `:m}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      ${this._open?c`
            <div class="dropdown taxo" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                aria-label=${C("searchTaxonomy","Search taxonomy")}
                placeholder=${C("search","Search")}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?m:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:m}
    `}};jo.styles=[mi,j`
      .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2px;
        padding: 8px 10px;
        border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .crumb {
        background: none;
        border: none;
        padding: 2px 4px;
        font-family: inherit;
        font-size: 12px;
        color: var(--sfx-up-text-secondary, #64748b);
        cursor: pointer;
        border-radius: 4px;
      }
      .crumb:hover {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .crumb.current {
        color: var(--sfx-up-text, #1e293b);
        font-weight: 500;
        cursor: default;
      }
      .crumb.current:hover {
        background: none;
      }
      .crumb-sep {
        color: var(--sfx-up-text-muted, #94a3b8);
        user-select: none;
      }

      .tree-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        font-size: 14px;
        color: var(--sfx-up-text, #1e293b);
        cursor: pointer;
      }
      .tree-row:hover,
      .tree-row.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .tree-row.selected {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }
      .tree-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tree-count {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 13px;
      }
      .tree-radio {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      .tree-radio.checked {
        border-color: var(--sfx-up-primary, #2563eb);
      }
      .tree-radio.checked::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--sfx-up-primary, #2563eb);
      }
      .tree-chevron {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .tree-chevron svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .tree-chevron.hidden {
        visibility: hidden;
      }

      .ac-row {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .ac-row:hover,
      .ac-row.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .ac-tag {
        font-weight: 500;
      }
      .ac-path {
        font-size: 11px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .dropdown.taxo {
        max-height: 320px;
        display: flex;
        flex-direction: column;
      }
      .dropdown.taxo > .search,
      .dropdown.taxo > .breadcrumb {
        flex-shrink: 0;
      }
      .scroll {
        overflow-y: auto;
      }

      .misconfigured {
        padding: 8px 10px;
        border: 1px dashed var(--sfx-up-error, #dc2626);
        border-radius: 6px;
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
      }
    `];let $e=jo;Me([h({attribute:!1})],$e.prototype,"taxonomyService");Me([h({attribute:!1})],$e.prototype,"entry");Me([E()],$e.prototype,"_open");Me([E()],$e.prototype,"_query");Me([E()],$e.prototype,"_drillStack");Me([E()],$e.prototype,"_currentNodes");Me([E()],$e.prototype,"_searchResults");Me([E()],$e.prototype,"_loading");Me([E()],$e.prototype,"_activeIndex");Me([E()],$e.prototype,"_resolvedTaxonomyUuid");Me([E()],$e.prototype,"_taxonomyResolutionFailed");J("sfx-meta-taxonomy-node-field",$e);var Sd=Object.defineProperty,Be=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Sd(e,t,s),s};const Cd=(o,e)=>!!(e.uuid&&o.uuid===e.uuid||e.sid&&o.sid===e.sid||e.slug&&o.slug===e.slug),No=class No extends _e{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set,this._resolvedLookup={bySid:{},bySlug:{}},this._resolvingKeys=new Set}get _items(){if(!Array.isArray(this.value))return[];const e=this.value.map(t=>typeof t=="string"?ml(t)?{sid:t}:{slug:t}:t);return bl(e,this._resolvedLookup)}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichMissingLabels()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichMissingLabels()}async _maybeEnrichMissingLabels(){var d;const e=this.ultratags,t=(d=this.field)==null?void 0:d.key;if(!e||!t)return;const i=this._items;if(i.length===0)return;const s=[],r=[];for(const p of i)p.i18n||(p.sid?this._enrichmentAttempted.has(p.sid)||s.push(p.sid):p.slug&&!this._enrichmentAttempted.has(p.slug)&&r.push(p.slug));if(s.length===0&&r.length===0)return;const n=[...s,...r];for(const p of n)this._enrichmentAttempted.add(p);this._resolvingKeys=new Set([...this._resolvingKeys,...n]);const a=[];if(s.length>0)try{const p=await e.getBySids({sids:s,format:ms});a.push(...p.items||[])}catch{}if(r.length>0)try{const p=await e.getBySlugs({slugs:r,meta:t,format:ms});a.push(...p.items||[])}catch{}const l=new Set(this._resolvingKeys);for(const p of n)l.delete(p);this._resolvingKeys=l,a.length!==0&&(this._resolvedLookup=xr(this._resolvedLookup,br(a)))}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return ji(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}_isResolving(e){return e.i18n?!1:!!e.sid&&this._resolvingKeys.has(e.sid)||!!e.slug&&this._resolvingKeys.has(e.slug)}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=r=>!!r.uuid&&e.has(r.uuid)||!!r.sid&&e.has(r.sid)||e.has(r.slug),s=(this._isRestricted?this._restrictedEntries:this._results).filter(r=>!t(r)).map(r=>({entry:r,label:ji(r,this._currentLang,this._defaultLang).value||r.slug}));if(this._isRestricted){const r=this._query.trim().toLowerCase();return r?s.filter(n=>n.label.toLowerCase().includes(r)):s}return s}get _isSearching(){return this._query.trim().length>=mr}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=vr(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(s=>s.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var r,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((r=this.field)!=null&&r.key)){this._results=[],this._loading=!1,(n=this.ultratags)==null||n.cancel();return}const i=this.ultratags;if(!i)return;const s=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:s,limit:ul,format:ms}).then(a=>{this._query.trim().toLowerCase()===s&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===s&&(this._results=[],this._loading=!1)})}_appendResolvedEntry(e){const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n};this._resolvedLookup=xr(this._resolvedLookup,br([e]));const i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".input"))==null||s.focus()})}_addEntry(e){this._entryAlreadySelected(e)||this._appendResolvedEntry(e)}async _createFromQuery(){var r,n;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((r=this.field)!=null&&r.key))return;const i=vr(e);if(!i)return;const s=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:fl.UPSERT,items:[{slug:i,i18n:{[s]:e}}]}),l=(n=a==null?void 0:a.output)==null?void 0:n[0],d={slug:(l==null?void 0:l.slug)||i,sid:l==null?void 0:l.sid,uuid:l==null?void 0:l.uuid,i18n:(l==null?void 0:l.i18n)||{[s]:e}};if(this._entryAlreadySelected({uuid:d.uuid||"",sid:d.sid,slug:d.slug||i}))return;this._appendResolvedEntry(d)}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!Cd(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var n,a;const e=this._items,t=this._dropdownOptions,i=t.length,s=this._query.trim(),r=((n=this.field)==null?void 0:n.placeholder)||(this._isRestricted?C("searchTagsToRemove","Search tags to remove"):C("addCustomTags","Add custom tags"));return c`
      <div
        class="container"
        @click=${()=>{var l;return(l=this.renderRoot.querySelector(".input"))==null?void 0:l.focus()}}
      >
        ${e.map(l=>{const d=this._isResolving(l),p=d?"":this._labelForItem(l),u=l.uuid||l.sid||l.slug||p;return c` <span
            class="chip ${d?"chip-loading":""}"
            title=${d?C("loading","Loading"):p}
            aria-busy=${d}
          >
            ${d?c`<span class="chip-skeleton"></span>`:p}
            <button
              class="chip-x"
              aria-label=${C("removeItem","Remove {{item}}",{item:d?u:p})}
              @click=${f=>{f.stopPropagation(),this._removeItem(l)}}
            >
              &times;
            </button>
          </span>`})}
        <input
          class="input"
          type="text"
          .value=${this._query}
          role="combobox"
          aria-expanded=${this._dropdownOpen}
          aria-haspopup="listbox"
          aria-label=${((a=this.field)==null?void 0:a.title)??C("customTags","Custom tags")}
          placeholder=${e.length?"":r}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen?c`
            <div class="dropdown" role="listbox">
              ${!this._isRestricted&&!this._isSearching?c`<div class="hint">
                    ${C("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:mr})}
                  </div>`:m}
              ${!this._isRestricted&&this._isSearching&&this._loading?c`<div class="loading">${C("loading","Loading")}</div>`:m}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((l,d)=>c` <div
                        class="option ${d===this._activeIndex?"active":""}"
                        role="option"
                        @mousedown=${p=>{p.preventDefault(),this._addEntry(l.entry)}}
                        @mouseenter=${()=>{this._activeIndex=d}}
                      >
                        ${l.label}
                      </div>`):m}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?c`<div class="empty">${C("noResults","No results")}</div>`:m}
              ${this._canCreate?c` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${l=>{l.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${C("createTag","Create '{{tag}}'",{tag:s})}
                  </div>`:m}
            </div>
          `:m}
    `}};No.styles=[mo,j`
      :host {
        display: block;
        position: relative;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 240px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover,
      .option.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
        border-top: 1px solid var(--sfx-up-border, #e2e8f0);
      }
      .option .label-fallback {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 12px;
        margin-left: 6px;
      }

      .loading,
      .empty,
      .hint {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .chip-loading {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .chip-skeleton {
        display: inline-block;
        width: 42px;
        height: 10px;
        border-radius: 4px;
        background: var(--sfx-up-text-muted, #94a3b8);
        opacity: 0.35;
        animation: sfx-chip-pulse 1.2s ease-in-out infinite;
      }
      @keyframes sfx-chip-pulse {
        0%,
        100% {
          opacity: 0.25;
        }
        50% {
          opacity: 0.5;
        }
      }
    `];let Se=No;Be([h({attribute:!1})],Se.prototype,"ultratags");Be([h({attribute:!1})],Se.prototype,"language");Be([h({attribute:!1})],Se.prototype,"defaultLanguage");Be([h({attribute:!1})],Se.prototype,"restrictToItems");Be([E()],Se.prototype,"_query");Be([E()],Se.prototype,"_results");Be([E()],Se.prototype,"_loading");Be([E()],Se.prototype,"_dropdownOpen");Be([E()],Se.prototype,"_activeIndex");Be([E()],Se.prototype,"_resolvedLookup");Be([E()],Se.prototype,"_resolvingKeys");J("sfx-meta-ultratags-field",Se);const bo=()=>C("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Bn=c`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${G`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,qo=class qo extends W{constructor(){super(...arguments),this._i18nController=new qe(this)}render(){const e=bo();return c`
      <div class="unsupported" title=${e} aria-label=${e} aria-disabled="true" role="note">
        ${Bn}
        <span class="unsupported-text" aria-hidden="true"
          >${C("notEditableDuringUpload","Not editable during upload")}</span
        >
      </div>
    `}};qo.styles=j`
    :host {
      display: block;
    }
    .unsupported {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 36px;
      padding: 0 10px;
      border: 1px dashed var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-surface, #f8fafc);
      box-sizing: border-box;
      cursor: not-allowed;
      user-select: none;
    }
    .unsupported svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .unsupported-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;let Us=qo;J("sfx-meta-unsupported-field",Us);var Ed=Object.defineProperty,je=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Ed(e,t,s),s};const Ho=class Ho extends W{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(fi(e))return c`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return c`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`;case"textarea":return c`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-textarea-field>`;case"select-one":return c`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return c`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${i}
        ></sfx-meta-multi-select-field>`;case"tags":return c`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${i}
        ></sfx-meta-tags-field>`;case"ultratags":return c`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}
        ></sfx-meta-ultratags-field>`;case"taxonomy-node":return c`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${i}
        ></sfx-meta-taxonomy-node-field>`;case"boolean":return c`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return c`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-number-field>`;case"date":return c`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-date-field>`;case"geopoint":return c`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-geo-point-field>`;case"focus-point":return c`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;default:return c`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}};Ho.styles=j`
    :host {
      display: block;
    }
  `;let Ce=Ho;je([h({attribute:!1})],Ce.prototype,"field");je([h({attribute:!1})],Ce.prototype,"value");je([h({attribute:!1})],Ce.prototype,"autocomplete");je([h({attribute:!1})],Ce.prototype,"taxonomyService");je([h({attribute:!1})],Ce.prototype,"taxonomyEntry");je([h({attribute:!1})],Ce.prototype,"ultratags");je([h({attribute:!1})],Ce.prototype,"language");je([h({attribute:!1})],Ce.prototype,"defaultLanguage");je([h({attribute:!1})],Ce.prototype,"ultratagsRestrictToItems");je([h({attribute:!1})],Ce.prototype,"allowedValues");je([h({type:Boolean})],Ce.prototype,"disabled");J("sfx-metadata-field-edit",Ce);var Pd=Object.defineProperty,yi=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Pd(e,t,s),s};const Vo=class Vo extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.taxonomyEntry=null}_formatValue(){var i,s,r,n;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(s=this.field.possible_values)==null?void 0:s.find(l=>l.internal_unique_value===e||l.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var d;const l=(d=this.field.possible_values)==null?void 0:d.find(p=>p.internal_unique_value===a||p.api_value===a);return(l==null?void 0:l.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",l=this.defaultLanguage||a;return e.map(d=>typeof d=="string"?d:ji({i18n:d.i18n,slug:d.slug||""},a,l).value||d.slug||d.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(r=this.taxonomyEntry)!=null&&r.path?this.taxonomyEntry.path:(n=this.taxonomyEntry)!=null&&n.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"focus-point":{const a=e;return!a||a.horizontal===""||a.horizontal==null||a.vertical===""||a.vertical==null?"":`${a.horizontal}% × ${a.vertical}%`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&fi(this.field))return c`
        <div class="value empty" title=${bo()}>
          ${C("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?c`
        <div class="value">
          <a
            class="link"
            href=${e}
            target="_blank"
            rel="noopener noreferrer"
            @click=${s=>s.stopPropagation()}
            >${e}</a
          >
        </div>
      `:c`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Vo.styles=j`
    :host {
      display: block;
    }
    .value {
      min-height: 28px;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
      word-break: break-word;
      line-height: 1.4;
    }
    .empty {
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .link {
      color: var(--sfx-up-primary, #2563eb);
      text-decoration: none;
      max-width: 100%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link:hover {
      text-decoration: underline;
    }
  `;let rt=Vo;yi([h({attribute:!1})],rt.prototype,"field");yi([h({attribute:!1})],rt.prototype,"value");yi([h({attribute:!1})],rt.prototype,"taxonomyEntry");yi([h({attribute:!1})],rt.prototype,"language");yi([h({attribute:!1})],rt.prototype,"defaultLanguage");J("sfx-metadata-field-view",rt);var Td=Object.defineProperty,os=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Td(e,t,s),s};const Ko=class Ko extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const s of t.variants)e.push({groupUuid:t.uuid,value:s.api_value,label:s.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var s;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const r of t){const n=this.selectedFilters[r.uuid]??((s=r.variants[0])==null?void 0:s.api_value),a=r.variants.find(l=>l.api_value===n);a&&i.push(t.length===1?a.label:`${r.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return m;const t=this._options,i=C("regionalFiltersDropdownLabel","Regional settings"),s=this._triggerSummary(i);return c`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${i} — ${s}`}
        title=${s}
        @click=${this._toggle}
        @keydown=${this._onKeydown}
      >
        <span class="trigger-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            />
          </svg>
        </span>
        <span class="trigger-label">${i}</span>
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      ${this._open?c`
            <div class="dropdown" role="listbox" aria-label=${i}>
              ${t.map((r,n)=>this._renderOption(r,n,r.value===this.selectedFilters[r.groupUuid]))}
            </div>
          `:m}
    `}_renderOption(e,t,i){const s=this._activeIndex===t;return c`
      ${e.isGroupStart?c`<div class="group-header">${e.groupLabel}</div>`:m}
      <div
        class="option ${i?"selected":""} ${s?"active":""}"
        role="option"
        aria-selected=${i}
        @mouseenter=${()=>{this._activeIndex=t}}
        @click=${()=>this._onSelect(e)}
      >
        <span class="option-check" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span>${e.label}</span>
      </div>
    `}};Ko.styles=[mi,j`
      :host {
        display: inline-block;
        position: relative;
      }

      /* Borderless trigger — Globe icon + "Regional settings" label +
         chevron. Sits beside the other header buttons but is wider because
         the label needs room. Filled background only on hover. */
      .trigger {
        /* Use min-height — not a fixed height — so descenders (g, j, p, y)
           in the label aren't clipped at the bottom. Line-height stays
           normal so the line box can fit the full glyph + descender. */
        min-height: 30px;
        padding: 4px 10px;
        border: none;
        border-radius: 8px;
        background: none;
        color: var(--sfx-up-text-secondary, #64748b);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.4;
        cursor: pointer;
        white-space: nowrap;
        transition:
          background 0.15s,
          color 0.15s;
      }
      .trigger:hover {
        background: var(--sfx-up-border, #e2e8f0);
        color: var(--sfx-up-text, #1e293b);
      }
      .trigger:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        box-shadow: none;
      }
      .trigger-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        display: block;
        color: inherit;
      }
      .trigger-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-label {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .trigger-chevron {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .trigger-chevron svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-chevron.open {
        transform: rotate(180deg);
      }

      .dropdown {
        right: 0;
        left: auto;
        min-width: 220px;
        max-height: 320px;
      }
      .group-header {
        padding: 8px 10px 4px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option-check {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-primary, #2563eb);
        opacity: 0;
      }
      .option.selected .option-check {
        opacity: 1;
      }
      .option-check svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      /* Responsive — at narrow widths collapse to the icon only so the
         label doesn't crowd the close button. */
      @media (max-width: 768px) {
        .trigger {
          height: 28px;
          padding: 0 6px;
          gap: 4px;
          font-size: 12px;
        }
        .trigger-icon {
          width: 16px;
          height: 16px;
        }
      }
      @media (max-width: 480px) {
        .trigger {
          padding: 0 6px;
        }
        .trigger-label {
          display: none;
        }
        .trigger-chevron {
          display: none;
        }
      }
    `];let yt=Ko;os([h({attribute:!1})],yt.prototype,"groups");os([h({attribute:!1})],yt.prototype,"selectedFilters");os([E()],yt.prototype,"_open");os([E()],yt.prototype,"_activeIndex");J("sfx-regional-settings",yt);const xo="system.tags",Rd="__tags__";function zs(o){return o===xo}function Fd(o){return{key:xo,ckey:"",uuid:"system-tags",title:o("tagsLabel","Tags"),type:"tags",placeholder:o("addTags","Add tags"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Id(o,e){const t=Fd(e);let i=!1,s=o.groups.map(a=>!i&&a.isRoot?(i=!0,{...a,fields:[...a.fields,t]}):a);i||(s=[{uuid:Rd,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...s]);const r=s.flatMap(a=>a.fields),n=new Map(r.map(a=>[a.key,a]));return{...o,groups:s,fields:r,fieldsByKey:n}}var Ad=Object.defineProperty,_i=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Ad(e,t,s),s};const Od=(o,e)=>typeof e=="string"?e:o,Yo=class Yo extends W{constructor(){super(...arguments),this.product={},this.disabled=!1,this.t=Od,this._collapsed=!1,this._errors={}}willUpdate(e){e.has("product")&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent("product-blur",{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;const t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError("ref")}_onRefBlur(e){const t=e.target.value,i=Sl(t);if(i){this._errors={...this._errors,ref:i};return}this._clearError("ref"),this._emit("ref",t===""?void 0:t)}_onPositionInput(){this._clearError("position")}_onPositionBlur(e){const t=e.target.value,i=Cl(t);if(i){this._errors={...this._errors,position:i};return}this._clearError("position"),t===""||t==null?this._emit("position",void 0):this._emit("position",Number(t))}_onKeydown(e){var t,i;if(e.key==="Enter")e.target.blur();else if(e.key==="Escape"){const s=e.target,r=s.dataset.key;r==="ref"&&(s.value=((t=this.product)==null?void 0:t.ref)??""),r==="position"&&(s.value=((i=this.product)==null?void 0:i.position)==null?"":String(this.product.position)),r&&this._clearError(r),s.blur()}}_renderRow(e,t,i){const s=this._errors[e],r=s?this.t(s,s):"";return c`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${i}
          ${s?c`<div class="field-error" role="alert">${r}</div>`:m}
        </div>
      </div>
    `}render(){var s,r;const e=!this._collapsed,t=((s=this.product)==null?void 0:s.ref)??"",i=((r=this.product)==null?void 0:r.position)==null?"":String(this.product.position);return c`
      <div class="group">
        <button class="group-header" @click=${this._toggle} aria-expanded=${e}>
          <span>${this.t("productFieldsLabel","Product")}</span>
          <svg
            class="chevron ${e?"open":""}"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
        ${e?c`
              <div class="group-content">
                ${this._renderRow("ref",this.t("productRefLabel","Product reference"),c`<input
                    type="text"
                    data-key="ref"
                    .value=${t}
                    placeholder=${this.t("productRefPlaceholder","e.g. SKU-12345")}
                    ?disabled=${this.disabled}
                    @input=${this._onRefInput}
                    @blur=${this._onRefBlur}
                    @keydown=${this._onKeydown}
                  />`)}
                ${this._renderRow("position",this.t("productPositionLabel","Position"),c`<input
                    type="number"
                    step="1"
                    inputmode="numeric"
                    data-key="position"
                    .value=${i}
                    placeholder=${this.t("productPositionPlaceholder","0")}
                    ?disabled=${this.disabled}
                    @input=${this._onPositionInput}
                    @blur=${this._onPositionBlur}
                    @keydown=${this._onKeydown}
                  />`)}
              </div>
            `:m}
      </div>
    `}};Yo.styles=[St,In,j`
      :host {
        display: block;
      }

      .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 48px;
        padding: 0 16px;
        box-sizing: border-box;
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        color: var(--sfx-up-text, #1e293b);
        transition: background-color 0.12s ease;
      }
      .group-header:hover {
        background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
      }
      .group-header:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        border-radius: 4px;
      }
      .chevron {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .chevron.open {
        transform: rotate(180deg);
      }
      .group-content {
        padding: 0 16px 8px;
      }
    `];let nt=Yo;_i([h({attribute:!1})],nt.prototype,"product");_i([h({type:Boolean})],nt.prototype,"disabled");_i([h({attribute:!1})],nt.prototype,"t");_i([E()],nt.prototype,"_collapsed");_i([E()],nt.prototype,"_errors");J("sfx-product-fields-form",nt);const $r={text:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${G`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"focus-point":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><line x1="8" y1="4.5" x2="8" y2="6.5"/><line x1="8" y1="9.5" x2="8" y2="11.5"/><line x1="3.5" y1="8" x2="5.5" y2="8"/><line x1="10.5" y1="8" x2="12.5" y2="8"/><circle cx="8" cy="8" r="1.25"/>`}
  </svg>`,"integer-list":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${G`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${G`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${G`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Ud(o){return $r[o]??$r.text}function zd(o,e,t){let s=`${o.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[r,n]of Object.entries(t))n!=null&&(s+=`&${encodeURIComponent(r)}=${encodeURIComponent(n)}`);return s}function Ld(o,e){const t=new XMLHttpRequest;let i=!1;const s=zd(e.apiBase,e.folder,e.extraParams);t.open("POST",s);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):Dt(n)?e.onComplete(oo(n,o)):e.onError(new Error(Bi(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const r=new FormData;if(o.file){const n={name:o.name,type:o.type};r.append("info[files[]]",JSON.stringify(n)),Object.keys(o.meta).length>0&&r.append("meta[files[]]",JSON.stringify(o.meta)),o.tags.length>0&&r.append("tags[files[]]",JSON.stringify(o.tags)),co(o.product)&&r.append("product[files[]]",JSON.stringify(po(o.product))),r.append("files[]",o.file,o.name)}return t.send(r),{abort(){i=!0,t.abort()}}}function rs(o){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":o}}function ct(o){return o.replace(/\/+$/,"")}const Dd={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function wi(o){return Dd[o]??o}function Th(o,e){const t=ct(o),i=btoa(JSON.stringify({origin:window.location.origin})),s=wi(e);return`${t}/${s}/connect?state=${encodeURIComponent(i)}`}async function Md(o,e,t,i="",s){const r=ct(o),n=i?`/${i}`:"",a=wi(e),l=await fetch(`${r}/${a}/list${n}`,{method:"GET",headers:rs(t),credentials:"same-origin",signal:s});if(l.status===401)throw new yo;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Bd(o,e,t,i){const s=ct(o),r=await fetch(`${s}/${t}`,{method:"GET",headers:rs(e),credentials:"same-origin",signal:i});if(r.status===401)throw new yo;if(!r.ok){const n=await r.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${r.status})`)}return r.json()}async function Rh(o,e,t,i,s,r){const n=[];async function a(l,d){let p=null,u=!0;do{if(r!=null&&r.aborted)throw new DOMException("Aborted","AbortError");const f=u?await Md(o,e,t,l,r):await Bd(o,t,p,r);u=!1,p=f.nextPagePath;for(const x of f.items){if(r!=null&&r.aborted)throw new DOMException("Aborted","AbortError");if(x.isFolder){const k=d?`${d}/${x.name}`:x.name;await a(x.requestPath,k)}else n.push({...x,relativeFolder:d})}}while(p)}return await a(i,s),n}async function Fh(o,e,t,i){const s=ct(o),r=wi(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${s}/search/${r}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function jd(o,e,t,i,s,r=!1){const n=ct(o),a=wi(e),l=r?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,d=r?{Accept:"application/json","Content-Type":"application/json"}:rs(t),p=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...s,httpMethod:s.httpMethod??"POST",useFormData:s.useFormData??!0,fieldname:s.fieldname??"files[]"})});if(p.status===401)throw new yo;if(!p.ok){const u=await p.json().catch(()=>null);throw new Error((u==null?void 0:u.message)||`Companion upload failed (HTTP ${p.status})`)}return p.json()}async function Nd(o,e,t){const i=ct(o),s=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!s.ok){const r=await s.json().catch(()=>null);throw new Error((r==null?void 0:r.message)||`Could not fetch URL metadata (HTTP ${s.status})`)}return s.json()}async function qd(o,e,t,i){const s=ct(o),r=await fetch(`${s}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!r.ok){const n=await r.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${r.status})`)}return r.json()}async function Ih(o,e,t){const i=ct(o),s=wi(e),r=await fetch(`${i}/${s}/logout`,{method:"GET",headers:rs(t),credentials:"same-origin"});return r.ok?r.json():{ok:!1,revoked:!1}}function Hd(o){var s;const t=((s=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(o))==null?void 0:s[1])??o;return`${/^https:\/\//i.test(o)?"wss":"ws"}://${t}`}class yo extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function jn(o,e,t){let s=`${o.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[r,n]of Object.entries(t))n!=null&&(s+=`&${encodeURIComponent(r)}=${encodeURIComponent(n)}`);return s}function Nn(o,e){const t={name:o.name,type:o.type,"filerobot-folder":e};return o.meta&&Object.keys(o.meta).length>0&&(t.meta=JSON.stringify(o.meta)),o.tags&&o.tags.length>0&&(t.tags=JSON.stringify(o.tags)),co(o.product)&&(t.product=JSON.stringify(po(o.product))),t}function qn(o){const t=`${Hd(o.companionUrl)}/api/${o.token}`;let i;try{i=new WebSocket(t)}catch{return o.onError(new Error("Failed to connect to upload progress channel")),null}let s=!1;const r=()=>{s=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,d;if(!s)try{const p=JSON.parse(n.data);switch(p.action){case"progress":{const u=p.payload,f=u.bytesUploaded??0,x=u.bytesTotal??(o.expectedSize||1);o.onProgress(f,x);break}case"success":{const u=p.payload;if(r(),i.close(),(a=u.response)!=null&&a.responseText)try{const f=JSON.parse(u.response.responseText);if(f.status==="success"){o.onComplete(f);return}if(Dt(f)){o.onComplete(oo(f,o.uploadFile));return}o.onError(new Error(Bi(f,"Upload failed")));return}catch{}o.onError(new Error("Upload completed but no valid response received"));break}case"error":{const u=p.payload;r(),i.close();let f=((l=u.error)==null?void 0:l.message)||"Upload failed";if((d=u.response)!=null&&d.responseText)try{const x=JSON.parse(u.response.responseText);f=Bi(x,f)}catch{}o.onError(new Error(f));break}}}catch{}},i.onerror=()=>{s||(r(),o.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{s||(r(),o.onError(new Error("Upload progress connection closed unexpectedly")))},i}function Hn(o){if(o){o.onmessage=null,o.onerror=null,o.onclose=null;try{o.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}o.close()}}async function Vd(o,e,t,i,s,r,n){const a=o.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:s,size:r,metadata:n})});if(!l.ok){const d=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${d}`)}return l.json()}function Kd(o,e){const t=o.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,s=null;const r=jn(e.apiBase,e.folder,e.extraParams),n=Nn(o,e.folder);return(t.pickerAccessToken?Vd(t.companionUrl,t.pickerAccessToken,t.fileId,r,e.authHeaders,t.size,n):jd(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:r,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(l=>{i||(s=qn({companionUrl:t.companionUrl,token:l.token,uploadFile:o,expectedSize:t.size,onProgress:(d,p)=>{i||e.onProgress(d,p)},onComplete:d=>{i||e.onComplete(d)},onError:d=>{i||e.onError(d)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,Hn(s),s=null}}}function Yd(o,e){const t=o.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,s=null;const r=new AbortController,n=jn(e.apiBase,e.folder,e.extraParams);return Nd(e.companionUrl,t,r.signal).then(a=>{var d;if(i)return null;(d=e.onMeta)==null||d.call(e,{name:a.name,type:a.type,size:a.size});const l=Nn(o,e.folder);return a.name&&!o.nameIsUserDefined&&(l.name=a.name),a.type&&(l.type=a.type),qd(e.companionUrl,t,{fileId:o.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},r.signal).then(p=>({result:p,size:a.size}))}).then(a=>{i||!a||(s=qn({companionUrl:e.companionUrl,token:a.result.token,uploadFile:o,expectedSize:a.size,onProgress:(l,d)=>{i||e.onProgress(l,d)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,r.abort(),Hn(s),s=null}}}function Ls(o){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ls(o)}function Gd(o,e,t){return Object.defineProperty(o,"prototype",{writable:!1}),o}function Wd(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Xd(o,e,t){return e=ri(e),Zd(o,_o()?Reflect.construct(e,t||[],ri(o).constructor):e.apply(o,t))}function Zd(o,e){if(e&&(Ls(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jd(o)}function Jd(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Qd(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&oi(o,e)}function Ds(o){var e=typeof Map=="function"?new Map:void 0;return Ds=function(i){if(i===null||!tc(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,s)}function s(){return ec(i,arguments,ri(this).constructor)}return s.prototype=Object.create(i.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),oi(s,i)},Ds(o)}function ec(o,e,t){if(_o())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var s=new(o.bind.apply(o,i));return t&&oi(s,t.prototype),s}function _o(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_o=function(){return!!o})()}function tc(o){try{return Function.toString.call(o).indexOf("[native code]")!==-1}catch{return typeof o=="function"}}function oi(o,e){return oi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},oi(o,e)}function ri(o){return ri=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ri(o)}var Xt=(function(o){function e(t){var i,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Wd(this,e),i=Xd(this,e,[t]),i.originalRequest=r,i.originalResponse=n,i.causingError=s,s!=null&&(t+=", caused by ".concat(s.toString())),r!=null){var a=r.getHeader("X-Request-ID")||"n/a",l=r.getMethod(),d=r.getURL(),p=n?n.getStatus():"n/a",u=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(p,", response text: ").concat(u,", request id: ").concat(a,")")}return i.message=t,i}return Qd(e,o),Gd(e)})(Ds(Error));function ni(o){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ni(o)}function ic(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function sc(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,rc(i.key),i)}}function oc(o,e,t){return e&&sc(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function rc(o){var e=nc(o,"string");return ni(e)=="symbol"?e:e+""}function nc(o,e){if(ni(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(ni(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var ac=(function(){function o(){ic(this,o)}return oc(o,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Vn="3.7.8",lc=Vn,Ht=typeof Buffer=="function",Sr=typeof TextDecoder=="function"?new TextDecoder:void 0,Cr=typeof TextEncoder=="function"?new TextEncoder:void 0,dc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Zt=Array.prototype.slice.call(dc),Fi=(o=>{let e={};return o.forEach((t,i)=>e[t]=i),e})(Zt),cc=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,ce=String.fromCharCode.bind(String),Er=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):o=>new Uint8Array(Array.prototype.slice.call(o,0)),Kn=o=>o.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Yn=o=>o.replace(/[^A-Za-z0-9\+\/]/g,""),Gn=o=>{let e,t,i,s,r="";const n=o.length%3;for(let a=0;a<o.length;){if((t=o.charCodeAt(a++))>255||(i=o.charCodeAt(a++))>255||(s=o.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|s,r+=Zt[e>>18&63]+Zt[e>>12&63]+Zt[e>>6&63]+Zt[e&63]}return n?r.slice(0,n-3)+"===".substring(n):r},wo=typeof btoa=="function"?o=>btoa(o):Ht?o=>Buffer.from(o,"binary").toString("base64"):Gn,Ms=Ht?o=>Buffer.from(o).toString("base64"):o=>{let t=[];for(let i=0,s=o.length;i<s;i+=4096)t.push(ce.apply(null,o.subarray(i,i+4096)));return wo(t.join(""))},zi=(o,e=!1)=>e?Kn(Ms(o)):Ms(o),pc=o=>{if(o.length<2){var e=o.charCodeAt(0);return e<128?o:e<2048?ce(192|e>>>6)+ce(128|e&63):ce(224|e>>>12&15)+ce(128|e>>>6&63)+ce(128|e&63)}else{var e=65536+(o.charCodeAt(0)-55296)*1024+(o.charCodeAt(1)-56320);return ce(240|e>>>18&7)+ce(128|e>>>12&63)+ce(128|e>>>6&63)+ce(128|e&63)}},uc=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Wn=o=>o.replace(uc,pc),Pr=Ht?o=>Buffer.from(o,"utf8").toString("base64"):Cr?o=>Ms(Cr.encode(o)):o=>wo(Wn(o)),Lt=(o,e=!1)=>e?Kn(Pr(o)):Pr(o),Tr=o=>Lt(o,!0),hc=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,fc=o=>{switch(o.length){case 4:var e=(7&o.charCodeAt(0))<<18|(63&o.charCodeAt(1))<<12|(63&o.charCodeAt(2))<<6|63&o.charCodeAt(3),t=e-65536;return ce((t>>>10)+55296)+ce((t&1023)+56320);case 3:return ce((15&o.charCodeAt(0))<<12|(63&o.charCodeAt(1))<<6|63&o.charCodeAt(2));default:return ce((31&o.charCodeAt(0))<<6|63&o.charCodeAt(1))}},Xn=o=>o.replace(hc,fc),Zn=o=>{if(o=o.replace(/\s+/g,""),!cc.test(o))throw new TypeError("malformed base64.");o+="==".slice(2-(o.length&3));let e,t,i,s=[];for(let r=0;r<o.length;)e=Fi[o.charAt(r++)]<<18|Fi[o.charAt(r++)]<<12|(t=Fi[o.charAt(r++)])<<6|(i=Fi[o.charAt(r++)]),t===64?s.push(ce(e>>16&255)):i===64?s.push(ce(e>>16&255,e>>8&255)):s.push(ce(e>>16&255,e>>8&255,e&255));return s.join("")},ko=typeof atob=="function"?o=>atob(Yn(o)):Ht?o=>Buffer.from(o,"base64").toString("binary"):Zn,Jn=Ht?o=>Er(Buffer.from(o,"base64")):o=>Er(ko(o).split("").map(e=>e.charCodeAt(0))),Qn=o=>Jn(ea(o)),gc=Ht?o=>Buffer.from(o,"base64").toString("utf8"):Sr?o=>Sr.decode(Jn(o)):o=>Xn(ko(o)),ea=o=>Yn(o.replace(/[-_]/g,e=>e=="-"?"+":"/")),Bs=o=>gc(ea(o)),mc=o=>{if(typeof o!="string")return!1;const e=o.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},ta=o=>({value:o,enumerable:!1,writable:!0,configurable:!0}),ia=function(){const o=(e,t)=>Object.defineProperty(String.prototype,e,ta(t));o("fromBase64",function(){return Bs(this)}),o("toBase64",function(e){return Lt(this,e)}),o("toBase64URI",function(){return Lt(this,!0)}),o("toBase64URL",function(){return Lt(this,!0)}),o("toUint8Array",function(){return Qn(this)})},sa=function(){const o=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,ta(t));o("toBase64",function(e){return zi(this,e)}),o("toBase64URI",function(){return zi(this,!0)}),o("toBase64URL",function(){return zi(this,!0)})},vc=()=>{ia(),sa()},bc={version:Vn,VERSION:lc,atob:ko,atobPolyfill:Zn,btoa:wo,btoaPolyfill:Gn,fromBase64:Bs,toBase64:Lt,encode:Lt,encodeURI:Tr,encodeURL:Tr,utob:Wn,btou:Xn,decode:Bs,isValid:mc,fromUint8Array:zi,toUint8Array:Qn,extendString:ia,extendUint8Array:sa,extendBuiltins:vc};var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vs,Fr;function yc(){return Fr||(Fr=1,vs=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),vs}var Ii={},Ir;function _c(){if(Ir)return Ii;Ir=1;var o=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function s(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(n);){var p=t(d[1]),u=t(d[2]);p===null||u===null||p in l||(l[p]=u)}return l}function r(n,a){a=a||"";var l=[],d,p;typeof a!="string"&&(a="?");for(p in n)if(o.call(n,p)){if(d=n[p],!d&&(d===null||d===e||isNaN(d))&&(d=""),p=i(p),d=i(d),p===null||d===null)continue;l.push(p+"="+d)}return l.length?a+l.join("&"):""}return Ii.stringify=r,Ii.parse=s,Ii}var bs,Ar;function wc(){if(Ar)return bs;Ar=1;var o=yc(),e=_c(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,s=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l($){return($||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function(S,_){return f(_.protocol)?S.replace(/\\/g,"/"):S},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function u($){var S;typeof window<"u"?S=window:typeof Rr<"u"?S=Rr:typeof self<"u"?S=self:S={};var _=S.location||{};$=$||_;var y={},A=typeof $,F;if($.protocol==="blob:")y=new v(unescape($.pathname),{});else if(A==="string"){y=new v($,{});for(F in p)delete y[F]}else if(A==="object"){for(F in $)F in p||(y[F]=$[F]);y.slashes===void 0&&(y.slashes=s.test($.href))}return y}function f($){return $==="file:"||$==="ftp:"||$==="http:"||$==="https:"||$==="ws:"||$==="wss:"}function x($,S){$=l($),$=$.replace(i,""),S=S||{};var _=n.exec($),y=_[1]?_[1].toLowerCase():"",A=!!_[2],F=!!_[3],U=0,z;return A?F?(z=_[2]+_[3]+_[4],U=_[2].length+_[3].length):(z=_[2]+_[4],U=_[2].length):F?(z=_[3]+_[4],U=_[3].length):z=_[4],y==="file:"?U>=2&&(z=z.slice(2)):f(y)?z=_[4]:y?A&&(z=z.slice(2)):U>=2&&f(S.protocol)&&(z=_[4]),{protocol:y,slashes:A||f(y),slashesCount:U,rest:z}}function k($,S){if($==="")return S;for(var _=(S||"/").split("/").slice(0,-1).concat($.split("/")),y=_.length,A=_[y-1],F=!1,U=0;y--;)_[y]==="."?_.splice(y,1):_[y]===".."?(_.splice(y,1),U++):U&&(y===0&&(F=!0),_.splice(y,1),U--);return F&&_.unshift(""),(A==="."||A==="..")&&_.push(""),_.join("/")}function v($,S,_){if($=l($),$=$.replace(i,""),!(this instanceof v))return new v($,S,_);var y,A,F,U,z,q,Q=d.slice(),le=typeof S,L=this,fe=0;for(le!=="object"&&le!=="string"&&(_=S,S=null),_&&typeof _!="function"&&(_=e.parse),S=u(S),A=x($||"",S),y=!A.protocol&&!A.slashes,L.slashes=A.slashes||y&&S.slashes,L.protocol=A.protocol||S.protocol||"",$=A.rest,(A.protocol==="file:"&&(A.slashesCount!==2||a.test($))||!A.slashes&&(A.protocol||A.slashesCount<2||!f(L.protocol)))&&(Q[3]=[/(.*)/,"pathname"]);fe<Q.length;fe++){if(U=Q[fe],typeof U=="function"){$=U($,L);continue}F=U[0],q=U[1],F!==F?L[q]=$:typeof F=="string"?(z=F==="@"?$.lastIndexOf(F):$.indexOf(F),~z&&(typeof U[2]=="number"?(L[q]=$.slice(0,z),$=$.slice(z+U[2])):(L[q]=$.slice(z),$=$.slice(0,z)))):(z=F.exec($))&&(L[q]=z[1],$=$.slice(0,z.index)),L[q]=L[q]||y&&U[3]&&S[q]||"",U[4]&&(L[q]=L[q].toLowerCase())}_&&(L.query=_(L.query)),y&&S.slashes&&L.pathname.charAt(0)!=="/"&&(L.pathname!==""||S.pathname!=="")&&(L.pathname=k(L.pathname,S.pathname)),L.pathname.charAt(0)!=="/"&&f(L.protocol)&&(L.pathname="/"+L.pathname),o(L.port,L.protocol)||(L.host=L.hostname,L.port=""),L.username=L.password="",L.auth&&(z=L.auth.indexOf(":"),~z?(L.username=L.auth.slice(0,z),L.username=encodeURIComponent(decodeURIComponent(L.username)),L.password=L.auth.slice(z+1),L.password=encodeURIComponent(decodeURIComponent(L.password))):L.username=encodeURIComponent(decodeURIComponent(L.auth)),L.auth=L.password?L.username+":"+L.password:L.username),L.origin=L.protocol!=="file:"&&f(L.protocol)&&L.host?L.protocol+"//"+L.host:"null",L.href=L.toString()}function P($,S,_){var y=this;switch($){case"query":typeof S=="string"&&S.length&&(S=(_||e.parse)(S)),y[$]=S;break;case"port":y[$]=S,o(S,y.protocol)?S&&(y.host=y.hostname+":"+S):(y.host=y.hostname,y[$]="");break;case"hostname":y[$]=S,y.port&&(S+=":"+y.port),y.host=S;break;case"host":y[$]=S,r.test(S)?(S=S.split(":"),y.port=S.pop(),y.hostname=S.join(":")):(y.hostname=S,y.port="");break;case"protocol":y.protocol=S.toLowerCase(),y.slashes=!_;break;case"pathname":case"hash":if(S){var A=$==="pathname"?"/":"#";y[$]=S.charAt(0)!==A?A+S:S}else y[$]=S;break;case"username":case"password":y[$]=encodeURIComponent(S);break;case"auth":var F=S.indexOf(":");~F?(y.username=S.slice(0,F),y.username=encodeURIComponent(decodeURIComponent(y.username)),y.password=S.slice(F+1),y.password=encodeURIComponent(decodeURIComponent(y.password))):y.username=encodeURIComponent(decodeURIComponent(S))}for(var U=0;U<d.length;U++){var z=d[U];z[4]&&(y[z[1]]=y[z[1]].toLowerCase())}return y.auth=y.password?y.username+":"+y.password:y.username,y.origin=y.protocol!=="file:"&&f(y.protocol)&&y.host?y.protocol+"//"+y.host:"null",y.href=y.toString(),y}function T($){(!$||typeof $!="function")&&($=e.stringify);var S,_=this,y=_.host,A=_.protocol;A&&A.charAt(A.length-1)!==":"&&(A+=":");var F=A+(_.protocol&&_.slashes||f(_.protocol)?"//":"");return _.username?(F+=_.username,_.password&&(F+=":"+_.password),F+="@"):_.password?(F+=":"+_.password,F+="@"):_.protocol!=="file:"&&f(_.protocol)&&!y&&_.pathname!=="/"&&(F+="@"),(y[y.length-1]===":"||r.test(_.hostname)&&!_.port)&&(y+=":"),F+=y+_.pathname,S=typeof _.query=="object"?$(_.query):_.query,S&&(F+=S.charAt(0)!=="?"?"?"+S:S),_.hash&&(F+=_.hash),F}return v.prototype={set:P,toString:T},v.extractProtocol=x,v.location=u,v.trimLeft=l,v.qs=e,bs=v,bs}var kc=wc();const $c=xc(kc);function Sc(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var e=Math.random()*16|0,t=o==="x"?e:e&3|8;return t.toString(16)})}function js(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */js=function(){return e};var o,e={},t=Object.prototype,i=t.hasOwnProperty,s=Object.defineProperty||function(w,g,b){w[g]=b.value},r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function d(w,g,b){return Object.defineProperty(w,g,{value:b,enumerable:!0,configurable:!0,writable:!0}),w[g]}try{d({},"")}catch{d=function(b,R,O){return b[R]=O}}function p(w,g,b,R){var O=g&&g.prototype instanceof T?g:T,I=Object.create(O.prototype),B=new fe(R||[]);return s(I,"_invoke",{value:q(w,b,B)}),I}function u(w,g,b){try{return{type:"normal",arg:w.call(g,b)}}catch(R){return{type:"throw",arg:R}}}e.wrap=p;var f="suspendedStart",x="suspendedYield",k="executing",v="completed",P={};function T(){}function $(){}function S(){}var _={};d(_,n,function(){return this});var y=Object.getPrototypeOf,A=y&&y(y(V([])));A&&A!==t&&i.call(A,n)&&(_=A);var F=S.prototype=T.prototype=Object.create(_);function U(w){["next","throw","return"].forEach(function(g){d(w,g,function(b){return this._invoke(g,b)})})}function z(w,g){function b(O,I,B,H){var K=u(w[O],w,I);if(K.type!=="throw"){var be=K.arg,de=be.value;return de&&_t(de)=="object"&&i.call(de,"__await")?g.resolve(de.__await).then(function(xe){b("next",xe,B,H)},function(xe){b("throw",xe,B,H)}):g.resolve(de).then(function(xe){be.value=xe,B(be)},function(xe){return b("throw",xe,B,H)})}H(K.arg)}var R;s(this,"_invoke",{value:function(I,B){function H(){return new g(function(K,be){b(I,B,K,be)})}return R=R?R.then(H,H):H()}})}function q(w,g,b){var R=f;return function(O,I){if(R===k)throw Error("Generator is already running");if(R===v){if(O==="throw")throw I;return{value:o,done:!0}}for(b.method=O,b.arg=I;;){var B=b.delegate;if(B){var H=Q(B,b);if(H){if(H===P)continue;return H}}if(b.method==="next")b.sent=b._sent=b.arg;else if(b.method==="throw"){if(R===f)throw R=v,b.arg;b.dispatchException(b.arg)}else b.method==="return"&&b.abrupt("return",b.arg);R=k;var K=u(w,g,b);if(K.type==="normal"){if(R=b.done?v:x,K.arg===P)continue;return{value:K.arg,done:b.done}}K.type==="throw"&&(R=v,b.method="throw",b.arg=K.arg)}}}function Q(w,g){var b=g.method,R=w.iterator[b];if(R===o)return g.delegate=null,b==="throw"&&w.iterator.return&&(g.method="return",g.arg=o,Q(w,g),g.method==="throw")||b!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+b+"' method")),P;var O=u(R,w.iterator,g.arg);if(O.type==="throw")return g.method="throw",g.arg=O.arg,g.delegate=null,P;var I=O.arg;return I?I.done?(g[w.resultName]=I.value,g.next=w.nextLoc,g.method!=="return"&&(g.method="next",g.arg=o),g.delegate=null,P):I:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,P)}function le(w){var g={tryLoc:w[0]};1 in w&&(g.catchLoc=w[1]),2 in w&&(g.finallyLoc=w[2],g.afterLoc=w[3]),this.tryEntries.push(g)}function L(w){var g=w.completion||{};g.type="normal",delete g.arg,w.completion=g}function fe(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(le,this),this.reset(!0)}function V(w){if(w||w===""){var g=w[n];if(g)return g.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var b=-1,R=function O(){for(;++b<w.length;)if(i.call(w,b))return O.value=w[b],O.done=!1,O;return O.value=o,O.done=!0,O};return R.next=R}}throw new TypeError(_t(w)+" is not iterable")}return $.prototype=S,s(F,"constructor",{value:S,configurable:!0}),s(S,"constructor",{value:$,configurable:!0}),$.displayName=d(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(w){var g=typeof w=="function"&&w.constructor;return!!g&&(g===$||(g.displayName||g.name)==="GeneratorFunction")},e.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,S):(w.__proto__=S,d(w,l,"GeneratorFunction")),w.prototype=Object.create(F),w},e.awrap=function(w){return{__await:w}},U(z.prototype),d(z.prototype,a,function(){return this}),e.AsyncIterator=z,e.async=function(w,g,b,R,O){O===void 0&&(O=Promise);var I=new z(p(w,g,b,R),O);return e.isGeneratorFunction(g)?I:I.next().then(function(B){return B.done?B.value:I.next()})},U(F),d(F,l,"Generator"),d(F,n,function(){return this}),d(F,"toString",function(){return"[object Generator]"}),e.keys=function(w){var g=Object(w),b=[];for(var R in g)b.push(R);return b.reverse(),function O(){for(;b.length;){var I=b.pop();if(I in g)return O.value=I,O.done=!1,O}return O.done=!0,O}},e.values=V,fe.prototype={constructor:fe,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(L),!g)for(var b in this)b.charAt(0)==="t"&&i.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=o)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var b=this;function R(be,de){return B.type="throw",B.arg=g,b.next=be,de&&(b.method="next",b.arg=o),!!de}for(var O=this.tryEntries.length-1;O>=0;--O){var I=this.tryEntries[O],B=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var H=i.call(I,"catchLoc"),K=i.call(I,"finallyLoc");if(H&&K){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(H){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!K)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(g,b){for(var R=this.tryEntries.length-1;R>=0;--R){var O=this.tryEntries[R];if(O.tryLoc<=this.prev&&i.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var I=O;break}}I&&(g==="break"||g==="continue")&&I.tryLoc<=b&&b<=I.finallyLoc&&(I=null);var B=I?I.completion:{};return B.type=g,B.arg=b,I?(this.method="next",this.next=I.finallyLoc,P):this.complete(B)},complete:function(g,b){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&b&&(this.next=b),P},finish:function(g){for(var b=this.tryEntries.length-1;b>=0;--b){var R=this.tryEntries[b];if(R.finallyLoc===g)return this.complete(R.completion,R.afterLoc),L(R),P}},catch:function(g){for(var b=this.tryEntries.length-1;b>=0;--b){var R=this.tryEntries[b];if(R.tryLoc===g){var O=R.completion;if(O.type==="throw"){var I=O.arg;L(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(g,b,R){return this.delegate={iterator:V(g),resultName:b,nextLoc:R},this.method==="next"&&(this.arg=o),P}},e}function Or(o,e,t,i,s,r,n){try{var a=o[r](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,s)}function Cc(o){return function(){var e=this,t=arguments;return new Promise(function(i,s){var r=o.apply(e,t);function n(l){Or(r,i,s,n,a,"next",l)}function a(l){Or(r,i,s,n,a,"throw",l)}n(void 0)})}}function oa(o,e){return Tc(o)||Pc(o,e)||ra(o,e)||Ec()}function Ec(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pc(o,e){var t=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var i,s,r,n,a=[],l=!0,d=!1;try{if(r=(t=t.call(o)).next,e!==0)for(;!(l=(i=r.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(p){d=!0,s=p}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(d)throw s}}return a}}function Tc(o){if(Array.isArray(o))return o}function _t(o){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(o)}function Rc(o,e){var t=typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(!t){if(Array.isArray(o)||(t=ra(o))||e){t&&(o=t);var i=0,s=function(){};return{s,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(d){throw d},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r=!0,n=!1,a;return{s:function(){t=t.call(o)},n:function(){var d=t.next();return r=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!r&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function ra(o,e){if(o){if(typeof o=="string")return Ur(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ur(o,e)}}function Ur(o,e){(e==null||e>o.length)&&(e=o.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=o[t];return i}function zr(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),t.push.apply(t,i)}return t}function Pt(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zr(Object(t),!0).forEach(function(i){Fc(o,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):zr(Object(t)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(t,i))})}return o}function Fc(o,e,t){return e=na(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Ic(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Lr(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,na(i.key),i)}}function Ac(o,e,t){return e&&Lr(o.prototype,e),t&&Lr(o,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function na(o){var e=Oc(o,"string");return _t(e)=="symbol"?e:e+""}function Oc(o,e){if(_t(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(_t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Li="tus-v1",Di="ietf-draft-03",Jt="ietf-draft-05",Uc={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:aa,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Li},Hi=(function(){function o(e,t){Ic(this,o),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Ac(o,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Li,Di,Jt].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var s=this.options.retryDelays;if(s!=null&&Object.prototype.toString.call(s)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var r=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];r<n.length;r++){var a=n[r];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,s=this._size,r=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Lc(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(p,u){p.uploadUrl=i._parallelUploadUrls[u]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(p,u){var f=0;return i._source.slice(p.start,p.end).then(function(x){var k=x.value;return new Promise(function(v,P){var T=Pt(Pt({},i.options),{},{uploadUrl:p.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Pt(Pt({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:v,onError:P,onProgress:function(_){r=r-f+_,f=_,i._emitProgress(r,s)},onUploadUrlAvailable:function(){i._parallelUploadUrls[u]=$.url,i._parallelUploadUrls.filter(function(_){return!!_}).length===a.length&&i._saveUploadInUrlStorage()}}),$=new o(k,T);$.start(),i._parallelUploads.push($)})})}),d;Promise.all(l).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var p=Dr(i.options.metadata);return p!==""&&d.setHeader("Upload-Metadata",p),i._sendRequest(d,null)}).then(function(p){if(!Ft(p.getStatus(),200)){i._emitHttpError(d,p,"tus: unexpected response while creating upload");return}var u=p.getHeader("Location");if(u==null){i._emitHttpError(d,p,"tus: invalid or missing Location header");return}i.url=Nr(i.options.endpoint,u),"Created upload at ".concat(i.url),i._emitSuccess(p)}).catch(function(p){i._emitError(p)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var s=Rc(this._parallelUploads),r;try{for(s.s();!(r=s.n()).done;){var n=r.value;n.abort(t)}}catch(a){s.e(a)}finally{s.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():o.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,s,r){this._emitError(new Xt(s,r,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var s=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(s&&(this._retryAttempt=0),jr(t,this._retryAttempt,this.options)){var r=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},r);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,s){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,s)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var s=Dr(this.options.metadata);s!==""&&i.setHeader("Upload-Metadata",s);var r;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,r=this._addChunkToRequest(i)):((this.options.protocol===Di||this.options.protocol===Jt)&&i.setHeader("Upload-Complete","?0"),r=this._sendRequest(i,null)),r.then(function(n){if(!Ft(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=Nr(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),s=this._sendRequest(i,null);s.then(function(r){var n=r.getStatus();if(!Ft(n,200)){if(n===423){t._emitHttpError(i,r,"tus: upload is currently locked; retry later");return}if(Ft(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,r,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,r,"tus: invalid or missing offset value");return}var l=Number.parseInt(r.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===Li){t._emitHttpError(i,r,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(r);return}t._offset=a,t._performUpload()})}).catch(function(r){t._emitHttpError(i,null,"tus: failed to resume upload",r)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var s=this._addChunkToRequest(i);s.then(function(r){if(!Ft(r.getStatus(),200)){t._emitHttpError(i,r,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,r)}).catch(function(r){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),r)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,s=this._offset,r=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(s+n,i._size)}),this.options.protocol===Li?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Jt&&t.setHeader("Content-Type","application/partial-upload"),(r===Number.POSITIVE_INFINITY||r>this._size)&&!this.options.uploadLengthDeferred&&(r=this._size),this._source.slice(s,r).then(function(n){var a=n.value,l=n.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var p=i._offset+d;return!i.options.uploadLengthDeferred&&l&&p!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(p," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===Di||i.options.protocol===Jt)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var s=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(s)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(s,this._size),this._emitChunkComplete(s-this._offset,s,this._size),this._offset=s,s===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var s=Mr(t,i,this.options);return this._req=s,s}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(s){t._urlStorageKey=s})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return Br(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=Mr("DELETE",t,i);return Br(s,null,i).then(function(r){if(r.getStatus()!==204)throw new Xt("tus: unexpected response while terminating upload",null,s,r)}).catch(function(r){if(r instanceof Xt||(r=new Xt("tus: failed to terminate upload",r,s,null)),!jr(r,0,i))throw r;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Pt(Pt({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,n)}).then(function(){return o.terminate(t,l)})})}}])})();function Dr(o){return Object.entries(o).map(function(e){var t=oa(e,2),i=t[0],s=t[1];return"".concat(i," ").concat(bc.encode(String(s)))}).join(",")}function Ft(o,e){return o>=e&&o<e+100}function Mr(o,e,t){var i=t.httpStack.createRequest(o,e);t.protocol===Di?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Jt?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var s=t.headers||{},r=0,n=Object.entries(s);r<n.length;r++){var a=oa(n[r],2),l=a[0],d=a[1];i.setHeader(l,d)}if(t.addRequestId){var p=Sc();i.setHeader("X-Request-ID",p)}return i}function Br(o,e,t){return Ns.apply(this,arguments)}function Ns(){return Ns=Cc(js().mark(function o(e,t,i){var s;return js().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(s=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,s);case 9:return n.abrupt("return",s);case 10:case"end":return n.stop()}},o)})),Ns.apply(this,arguments)}function zc(){var o=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(o=!1),o}function jr(o,e,t){return t.retryDelays==null||e>=t.retryDelays.length||o.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(o,e,t):aa(o)}function aa(o){var e=o.originalResponse?o.originalResponse.getStatus():0;return(!Ft(e,400)||e===409||e===423)&&zc()}function Nr(o,e){return new $c(e,o).toString()}function Lc(o,e){for(var t=Math.floor(o/e),i=[],s=0;s<e;s++)i.push({start:t*s,end:t*(s+1)});return i[e-1].end=o,i}Hi.defaultOptions=Uc;var la=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Dc(o){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var s=i.response;e(s)},i.onerror=function(s){t(s)},i.open("GET",o),i.send()})}var Mc=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Bc(o){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var s=new Uint8Array(i.result);e({value:s})},i.onerror=function(s){t(s)},i.readAsArrayBuffer(o)})}function ai(o){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ai(o)}function jc(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Nc(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,Hc(i.key),i)}}function qc(o,e,t){return e&&Nc(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Hc(o){var e=Vc(o,"string");return ai(e)=="symbol"?e:e+""}function Vc(o,e){if(ai(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(ai(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var qr=(function(){function o(e){jc(this,o),this._file=e,this.size=e.size}return qc(o,[{key:"slice",value:function(t,i){if(Mc())return Bc(this._file.slice(t,i));var s=this._file.slice(t,i),r=i>=this.size;return Promise.resolve({value:s,done:r})}},{key:"close",value:function(){}}])})();function li(o){"@babel/helpers - typeof";return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},li(o)}function Kc(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Yc(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,Wc(i.key),i)}}function Gc(o,e,t){return e&&Yc(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Wc(o){var e=Xc(o,"string");return li(e)=="symbol"?e:e+""}function Xc(o,e){if(li(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(li(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}function Hr(o){return o===void 0?0:o.size!==void 0?o.size:o.length}function Zc(o,e){if(o.concat)return o.concat(e);if(o instanceof Blob)return new Blob([o,e],{type:o.type});if(o.set){var t=new o.constructor(o.length+e.length);return t.set(o),t.set(e,o.length),t}throw new Error("Unknown data type")}var Jc=(function(){function o(e){Kc(this,o),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Gc(o,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var s=this,r=i<=this._bufferOffset+Hr(this._buffer);if(this._done||r){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var d=l.value,p=l.done;return p?s._done=!0:s._buffer===void 0?s._buffer=d:s._buffer=Zc(s._buffer,d),s._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var s=Hr(this._buffer)===0;return this._done&&s?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function wt(o){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(o)}function qs(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */qs=function(){return e};var o,e={},t=Object.prototype,i=t.hasOwnProperty,s=Object.defineProperty||function(w,g,b){w[g]=b.value},r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function d(w,g,b){return Object.defineProperty(w,g,{value:b,enumerable:!0,configurable:!0,writable:!0}),w[g]}try{d({},"")}catch{d=function(b,R,O){return b[R]=O}}function p(w,g,b,R){var O=g&&g.prototype instanceof T?g:T,I=Object.create(O.prototype),B=new fe(R||[]);return s(I,"_invoke",{value:q(w,b,B)}),I}function u(w,g,b){try{return{type:"normal",arg:w.call(g,b)}}catch(R){return{type:"throw",arg:R}}}e.wrap=p;var f="suspendedStart",x="suspendedYield",k="executing",v="completed",P={};function T(){}function $(){}function S(){}var _={};d(_,n,function(){return this});var y=Object.getPrototypeOf,A=y&&y(y(V([])));A&&A!==t&&i.call(A,n)&&(_=A);var F=S.prototype=T.prototype=Object.create(_);function U(w){["next","throw","return"].forEach(function(g){d(w,g,function(b){return this._invoke(g,b)})})}function z(w,g){function b(O,I,B,H){var K=u(w[O],w,I);if(K.type!=="throw"){var be=K.arg,de=be.value;return de&&wt(de)=="object"&&i.call(de,"__await")?g.resolve(de.__await).then(function(xe){b("next",xe,B,H)},function(xe){b("throw",xe,B,H)}):g.resolve(de).then(function(xe){be.value=xe,B(be)},function(xe){return b("throw",xe,B,H)})}H(K.arg)}var R;s(this,"_invoke",{value:function(I,B){function H(){return new g(function(K,be){b(I,B,K,be)})}return R=R?R.then(H,H):H()}})}function q(w,g,b){var R=f;return function(O,I){if(R===k)throw Error("Generator is already running");if(R===v){if(O==="throw")throw I;return{value:o,done:!0}}for(b.method=O,b.arg=I;;){var B=b.delegate;if(B){var H=Q(B,b);if(H){if(H===P)continue;return H}}if(b.method==="next")b.sent=b._sent=b.arg;else if(b.method==="throw"){if(R===f)throw R=v,b.arg;b.dispatchException(b.arg)}else b.method==="return"&&b.abrupt("return",b.arg);R=k;var K=u(w,g,b);if(K.type==="normal"){if(R=b.done?v:x,K.arg===P)continue;return{value:K.arg,done:b.done}}K.type==="throw"&&(R=v,b.method="throw",b.arg=K.arg)}}}function Q(w,g){var b=g.method,R=w.iterator[b];if(R===o)return g.delegate=null,b==="throw"&&w.iterator.return&&(g.method="return",g.arg=o,Q(w,g),g.method==="throw")||b!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+b+"' method")),P;var O=u(R,w.iterator,g.arg);if(O.type==="throw")return g.method="throw",g.arg=O.arg,g.delegate=null,P;var I=O.arg;return I?I.done?(g[w.resultName]=I.value,g.next=w.nextLoc,g.method!=="return"&&(g.method="next",g.arg=o),g.delegate=null,P):I:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,P)}function le(w){var g={tryLoc:w[0]};1 in w&&(g.catchLoc=w[1]),2 in w&&(g.finallyLoc=w[2],g.afterLoc=w[3]),this.tryEntries.push(g)}function L(w){var g=w.completion||{};g.type="normal",delete g.arg,w.completion=g}function fe(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(le,this),this.reset(!0)}function V(w){if(w||w===""){var g=w[n];if(g)return g.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var b=-1,R=function O(){for(;++b<w.length;)if(i.call(w,b))return O.value=w[b],O.done=!1,O;return O.value=o,O.done=!0,O};return R.next=R}}throw new TypeError(wt(w)+" is not iterable")}return $.prototype=S,s(F,"constructor",{value:S,configurable:!0}),s(S,"constructor",{value:$,configurable:!0}),$.displayName=d(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(w){var g=typeof w=="function"&&w.constructor;return!!g&&(g===$||(g.displayName||g.name)==="GeneratorFunction")},e.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,S):(w.__proto__=S,d(w,l,"GeneratorFunction")),w.prototype=Object.create(F),w},e.awrap=function(w){return{__await:w}},U(z.prototype),d(z.prototype,a,function(){return this}),e.AsyncIterator=z,e.async=function(w,g,b,R,O){O===void 0&&(O=Promise);var I=new z(p(w,g,b,R),O);return e.isGeneratorFunction(g)?I:I.next().then(function(B){return B.done?B.value:I.next()})},U(F),d(F,l,"Generator"),d(F,n,function(){return this}),d(F,"toString",function(){return"[object Generator]"}),e.keys=function(w){var g=Object(w),b=[];for(var R in g)b.push(R);return b.reverse(),function O(){for(;b.length;){var I=b.pop();if(I in g)return O.value=I,O.done=!1,O}return O.done=!0,O}},e.values=V,fe.prototype={constructor:fe,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(L),!g)for(var b in this)b.charAt(0)==="t"&&i.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=o)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var b=this;function R(be,de){return B.type="throw",B.arg=g,b.next=be,de&&(b.method="next",b.arg=o),!!de}for(var O=this.tryEntries.length-1;O>=0;--O){var I=this.tryEntries[O],B=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var H=i.call(I,"catchLoc"),K=i.call(I,"finallyLoc");if(H&&K){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(H){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!K)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(g,b){for(var R=this.tryEntries.length-1;R>=0;--R){var O=this.tryEntries[R];if(O.tryLoc<=this.prev&&i.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var I=O;break}}I&&(g==="break"||g==="continue")&&I.tryLoc<=b&&b<=I.finallyLoc&&(I=null);var B=I?I.completion:{};return B.type=g,B.arg=b,I?(this.method="next",this.next=I.finallyLoc,P):this.complete(B)},complete:function(g,b){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&b&&(this.next=b),P},finish:function(g){for(var b=this.tryEntries.length-1;b>=0;--b){var R=this.tryEntries[b];if(R.finallyLoc===g)return this.complete(R.completion,R.afterLoc),L(R),P}},catch:function(g){for(var b=this.tryEntries.length-1;b>=0;--b){var R=this.tryEntries[b];if(R.tryLoc===g){var O=R.completion;if(O.type==="throw"){var I=O.arg;L(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(g,b,R){return this.delegate={iterator:V(g),resultName:b,nextLoc:R},this.method==="next"&&(this.arg=o),P}},e}function Vr(o,e,t,i,s,r,n){try{var a=o[r](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,s)}function Qc(o){return function(){var e=this,t=arguments;return new Promise(function(i,s){var r=o.apply(e,t);function n(l){Vr(r,i,s,n,a,"next",l)}function a(l){Vr(r,i,s,n,a,"throw",l)}n(void 0)})}}function ep(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function tp(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,sp(i.key),i)}}function ip(o,e,t){return e&&tp(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function sp(o){var e=op(o,"string");return wt(e)=="symbol"?e:e+""}function op(o,e){if(wt(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(wt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var rp=(function(){function o(){ep(this,o)}return ip(o,[{key:"openFile",value:(function(){var e=Qc(qs().mark(function i(s,r){var n;return qs().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(la()&&s&&typeof s.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Dc(s.uri);case 4:return n=l.sent,l.abrupt("return",new qr(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof s.slice=="function"&&typeof s.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new qr(s)));case 13:if(typeof s.read!="function"){l.next=18;break}if(r=Number(r),Number.isFinite(r)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new Jc(s,r)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,s){return e.apply(this,arguments)}return t})()}])})();function np(o,e){return la()?Promise.resolve(ap(o,e)):Promise.resolve(["tus-br",o.name,o.type,o.size,o.lastModified,e.endpoint].join("-"))}function ap(o,e){var t=o.exif?lp(JSON.stringify(o.exif)):"noexif";return["tus-rn",o.name||"noname",o.size||"nosize",t,e.endpoint].join("/")}function lp(o){var e=0;if(o.length===0)return e;for(var t=0;t<o.length;t++){var i=o.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function di(o){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},di(o)}function $o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function dp(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,cp(i.key),i)}}function So(o,e,t){return e&&dp(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function cp(o){var e=pp(o,"string");return di(e)=="symbol"?e:e+""}function pp(o,e){if(di(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(di(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var up=(function(){function o(){$o(this,o)}return So(o,[{key:"createRequest",value:function(t,i){return new hp(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),hp=(function(){function o(e,t){$o(this,o),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return So(o,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(s,r){t._xhr.onload=function(){s(new fp(t._xhr))},t._xhr.onerror=function(n){r(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),fp=(function(){function o(e){$o(this,o),this._xhr=e}return So(o,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function ci(o){"@babel/helpers - typeof";return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ci(o)}function gp(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function mp(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,bp(i.key),i)}}function vp(o,e,t){return e&&mp(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function bp(o){var e=xp(o,"string");return ci(e)=="symbol"?e:e+""}function xp(o,e){if(ci(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(ci(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Hs=!1;try{Hs="localStorage"in window;var xs="tusSupport",Kr=localStorage.getItem(xs);localStorage.setItem(xs,Kr),Kr===null&&localStorage.removeItem(xs)}catch(o){if(o.code===o.SECURITY_ERR||o.code===o.QUOTA_EXCEEDED_ERR)Hs=!1;else throw o}var yp=Hs,_p=(function(){function o(){gp(this,o)}return vp(o,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var s=Math.round(Math.random()*1e12),r="tus::".concat(t,"::").concat(s);return localStorage.setItem(r,JSON.stringify(i)),Promise.resolve(r)}},{key:"_findEntries",value:function(t){for(var i=[],s=0;s<localStorage.length;s++){var r=localStorage.key(s);if(r.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(r));n.urlStorageKey=r,i.push(n)}catch{}}return i}}])})();function Mt(o){"@babel/helpers - typeof";return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt(o)}function wp(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function kp(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,ca(i.key),i)}}function $p(o,e,t){return t&&kp(o,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function Sp(o,e,t){return e=Vi(e),Cp(o,da()?Reflect.construct(e,t||[],Vi(o).constructor):e.apply(o,t))}function Cp(o,e){if(e&&(Mt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ep(o)}function Ep(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function da(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(da=function(){return!!o})()}function Vi(o){return Vi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Vi(o)}function Pp(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&Vs(o,e)}function Vs(o,e){return Vs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Vs(o,e)}function Yr(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),t.push.apply(t,i)}return t}function Ut(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Yr(Object(t),!0).forEach(function(i){Tp(o,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Yr(Object(t)).forEach(function(i){Object.defineProperty(o,i,Object.getOwnPropertyDescriptor(t,i))})}return o}function Tp(o,e,t){return e=ca(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function ca(o){var e=Rp(o,"string");return Mt(e)=="symbol"?e:e+""}function Rp(o,e){if(Mt(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(Mt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}var Gr=Ut(Ut({},Hi.defaultOptions),{},{httpStack:new up,fileReader:new rp,urlStorage:yp?new _p:new ac,fingerprint:np}),Fp=(function(o){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return wp(this,e),i=Ut(Ut({},Gr),i),Sp(this,e,[t,i])}return Pp(e,o),$p(e,null,[{key:"terminate",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s=Ut(Ut({},Gr),s),Hi.terminate(i,s)}}])})(Hi);const Ip=10*1024*1024,Ap=5*1024*1024,Op="https://eu-on-24001.connector.filerobot.com/files",Up="https://eu-on-24001.connector.filerobot.com/json";function zp(o,e){if(!e||!o.file)return!1;const t=e.sizeThreshold??Ip;return o.size>=t}function Lp(o,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),s=t.endpoint||Op,r=t.jsonBase||Up,n=t.chunkSize??Ap,a=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],p=i.split("/").pop()||"";let u=!1,f=!1,x=!1;const k={name:o.name,type:o.type,"filerobot-folder":e.folder};co(o.product)&&(k.product=JSON.stringify(po(o.product)));const v=async()=>`tus-${o.id}-${s}`,P=new Fp(o.file,{endpoint:s,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:k,fingerprint:v,onBeforeRequest(y){const A=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[F,U]of Object.entries(A))y.setHeader(F,U);y.setHeader("X-Filerobot-Token",p)},onUploadUrlAvailable(){P.url&&e.onUploadUrlAvailable&&!x&&(x=!0,e.onUploadUrlAvailable(P.url))},onProgress(y,A){!f&&!u&&e.onProgress(y,A)},onSuccess(){var F;if(f)return;S();const y=P.url||"",A=(F=y.match(/files\/([^/?]+)/))==null?void 0:F[1];A?Mp(r,A,o.size).then(U=>{f||e.onComplete(Dt(U)?oo(U,o):U)}).catch(U=>{f||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:o.name,extension:o.name.split(".").pop()||"",type:o.type,size:o.size,url:{public:y,cdn:y},meta:o.meta,tags:o.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(y){f||(S(),Dp(y)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(y instanceof Error?y:new Error(String(y))))},onShouldRetry(y,A,F){var z;const U=(z=y.originalResponse)==null?void 0:z.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let T=null,$=null;typeof window<"u"&&(T=()=>{var y;!u&&!f&&(u=!0,P.abort(!1),(y=e.onPause)==null||y.call(e))},$=()=>{var y;u&&!f&&(u=!1,P.start(),(y=e.onResume)==null||y.call(e))},window.addEventListener("offline",T),window.addEventListener("online",$));const S=()=>{T&&window.removeEventListener("offline",T),$&&window.removeEventListener("online",$)},_=()=>{try{P.start()}catch(y){S(),e.onError(y instanceof Error?y:new Error(String(y)))}};return a?P.findPreviousUploads().then(y=>{y.length>0&&!f&&P.resumeFromPreviousUpload(y[0]),f||_()}):_(),{abort(){f=!0,u=!1,S(),P.abort(!0)},pause(){!u&&!f&&(u=!0,P.abort(!1))},resume(){u&&!f&&(u=!1,P.start())},isPaused(){return u}}}function Dp(o){var e;if(o instanceof Xt){const t=(e=o.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:o.originalResponse==null&&o.causingError!=null}return!1}async function Mp(o,e,t){const i=`${o.replace(/\/+$/,"")}/${e}`,s=t>1e8?13e3:6e3,r=3;for(let n=0;n<=r;n++){n>0&&await new Promise(d=>setTimeout(d,s));const a=await fetch(i);if(a.status===404&&n<r)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(Dt(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<r))throw new Error(Bi(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const Mi="_sfxRelativePath",Wr=8,Bp=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function jp(o){return o?o.startsWith(".")?!0:Bp.has(o):!1}function Co(o,e){if(e){try{Object.defineProperty(o,Mi,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(o,Mi,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{o[Mi]=e}}}function Np(o){const e=o[Mi];if(typeof e=="string"&&e)return e;const t=o.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=o.relativePath;return typeof i=="string"?i:""}function qp(o){if(!o)return"";const e=o.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Hp(o,e){const t=(o??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:o??""}async function pa(o){var n;const e=o.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(o.files??[]),hadDirectories:!1};const i=[];let s=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(s=!0),i.push(l))}if(i.length===0)return{files:Array.from(o.files??[]),hadDirectories:!1};const r=[];return await ua(i,"",r),{files:r,hadDirectories:s}}async function ua(o,e,t){for(let i=0;i<o.length;i+=Wr){const s=o.slice(i,i+Wr);await Promise.all(s.map(r=>Vp(r,e,t)))}}async function Vp(o,e,t){try{if(o.isFile){const i=await Kp(o);if(!i)return;const s=e?`${e}/${i.name}`:i.name;Co(i,s),t.push(i);return}if(o.isDirectory){if(jp(o.name))return;const i=e?`${e}/${o.name}`:o.name,s=await Yp(o);await ua(s,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(o==null?void 0:o.name)??o,i)}}function Kp(o){return new Promise(e=>{o.file(t=>e(t),()=>e(null))})}function Yp(o){return new Promise(e=>{const t=o.createReader(),i=[],s=()=>{t.readEntries(r=>{if(r.length===0){e(i);return}i.push(...r),s()},r=>{console.warn("[sfx-uploader] directory read failed for",o==null?void 0:o.name,r),e(i)})};s()})}class Gp{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let s=!1;for(const[r,n]of this.pendingProgress){const a=i.get(r);a&&a.status==="uploading"&&(i.set(r,{...a,...n}),s=!0)}this.pendingProgress.clear(),s&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(ne(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(ne(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&ne(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),ne(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),ne(this.store,e,{status:"uploading"})):ne(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Xr(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),ne(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Xr(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),ne(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,s=t-i;if(s<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,s);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),ne(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var f,x;this.pendingProgress.delete(e.id);const t=(x=(f=this.config).resolveUploadParams)==null?void 0:x.call(f,e),i=!!t&&Object.keys(t).length>0,s=!i&&!e.remoteInfo&&!e.remoteUrl&&zp(e,this.config.tusConfig);ne(this.store,e.id,{status:"uploading",error:null,isTus:s});let r=0,n=Date.now(),a=0;const l=Hp(this.store.getState().targetFolder,e.relativeFolder),d={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:k=>this.handleComplete(e.id,k),onError:k=>this.handleError(e.id,k)},p=(k,v)=>{const P=Date.now(),T=(P-n)/1e3;if(T>0){const S=(k-r)/T;a=a===0?S:.3*S+.7*a}r=k,n=P;const $=v>0?Math.min(k/v*100,100):0;this.pendingProgress.set(e.id,{progress:$,bytesUploaded:k,speed:a}),this.scheduleProgressFlush()};let u;if(e.remoteInfo)u=Kd(e,{...d,onProgress:p});else if(e.remoteUrl){if(!this.config.companionUrl){ne(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}u=Yd(e,{...d,onProgress:p,companionUrl:this.config.companionUrl,onMeta:k=>{ne(this.store,e.id,{size:k.size,type:k.type||e.type})}})}else if(s){const k=Lp(e,{...d,onProgress:p,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:v=>{ne(this.store,e.id,{tusUploadUrl:v})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,k),this.pendingProgress.delete(e.id),ne(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,k),ne(this.store,e.id,{status:"uploading"})}});u=k}else u=Ld(e,{...d,onProgress:p});this.activeUploads.set(e.id,u)}handleComplete(e,t){var r;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),s=(r=t.file)==null?void 0:r.uuid;if(i!=null&&i.focusPoint&&s&&!Dt(t)){const n=()=>this.finalizeComplete(e,t);this.applyFocusPoint(i,s).then(n,n);return}this.finalizeComplete(e,t)}async applyFocusPoint(e,t){var i,s;try{await new $a({apiBase:this.config.apiBase,headers:this.config.authHeaders}).put(`/file/${encodeURIComponent(t)}/focus-point`,{img_focus_point:e.focusPoint})}catch(r){const n=r instanceof Error?r:new Error(String(r));console.warn(`[sfx-uploader] Failed to save the focus point for "${e.name}":`,n);try{(s=(i=this.config).onFocusPointError)==null||s.call(i,e,n)}catch(a){console.warn("[sfx-uploader] onFocusPointError threw:",a)}}}finalizeComplete(e,t){var u,f,x,k,v,P,T,$,S,_,y;const i=this.store.getState().files.get(e),s=((u=i==null?void 0:i.previewUrl)==null?void 0:u.startsWith("blob:"))??!1,r=((x=(f=t.file)==null?void 0:f.url)==null?void 0:x.cdn)??((v=(k=t.file)==null?void 0:k.url)==null?void 0:v.cdn_permalink)??((T=(P=t.file)==null?void 0:P.url)==null?void 0:T.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:Dt(t)};if(i&&r&&i.type.startsWith("image/")&&!s){const A=((_=(S=this.config).transformPreviewUrl)==null?void 0:_.call(S,r,($=t.file)==null?void 0:$.url))??r;A&&(n.previewUrl=A)}const a=(y=t.file)==null?void 0:y.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l);const d=this.store.getState().files,p=d.get(e);if(p){const A=new Map(d);A.set(e,{...p,...n}),this.store.setState({files:A,...this.computeTotals(A)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:s}=this.store.getState().queueConfig,r=i.retryCount+1;if(r<=s.maxRetries){const n=Math.min(s.baseDelay*Math.pow(s.backoffFactor,i.retryCount),s.maxDelay);ne(this.store,e,{status:"retrying",error:t.message,retryCount:r});const a=setTimeout(()=>{this.retryTimers.delete(e),ne(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else ne(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,s=0,r=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),r+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(s+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:s,totalProgress:n>0?Math.min(r/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Xr(o){return o==="queued"||o==="uploading"||o==="retrying"||o==="paused"}const Wp=3e4,Xp=2,Zp=400;function Jp(o){return o===404||o===408||o===429||o>=500}const Qp=o=>new Promise(e=>setTimeout(e,o));function Eo(o,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${o}`}async function eu(o,e,t,i={}){const s=`${Eo(o,t)}/key/${encodeURIComponent(e)}`,r=i.retries??Xp,n=i.retryDelayMs??Zp;let a=new Error("SASS key exchange failed");for(let l=0;l<=r;l++){l>0&&await Qp(n*l);const d=new AbortController,p=setTimeout(()=>d.abort(),Wp);try{const u=await fetch(s,{signal:d.signal,cache:"no-store"});if(clearTimeout(p),!u.ok){if(a=new Error(`SASS key exchange failed (HTTP ${u.status})`),Jp(u.status)&&l<r)continue;throw a}const f=await u.json();if(f.status==="error")throw new Error(`SASS key exchange failed: ${f.msg||"Unknown error"}`);return f.key}catch(u){if(clearTimeout(p),u instanceof DOMException&&u.name==="AbortError")throw new Error("SASS key exchange timed out");if(u instanceof TypeError&&l<r){a=u;continue}throw u}}throw a}function Ks(o,e){const t={};switch(o.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=o.sassKey;break}return o.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=o.airboxPuid),t}async function tu(o,e){const t=Eo(o.container,e);if(o.mode==="security-template"){const i=await eu(o.container,o.securityTemplateId,e);return{apiBase:t,headers:Ks(o,i),sassKey:i}}return{apiBase:t,headers:Ks(o)}}function iu(o){if(!o)return null;try{return decodeURIComponent(escape(atob(o)))}catch{return null}}function su(o){const e=iu(o);if(!e)return null;try{return new RegExp(e)}catch(t){return console.error("[sfx-uploader] Filename naming-convention regex failed to compile in the browser:",t),null}}function Zr(o,e){return e.test(o)}const ou="https://ai.scaleflex.com",Jr=300,ru=.85,nu=3e4;function Qr(o){return o==="low"?.6:o==="high"?.85:.75}async function au(o,e){var s,r,n;if(o.file)return o.file;const t=o.previewUrl||((n=(r=(s=o.response)==null?void 0:s.file)==null?void 0:r.url)==null?void 0:n.cdn)||o.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function lu(o){return`${(o||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function du(o){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(o);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,s=URL.createObjectURL(o);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(s)})},i.onerror=()=>{URL.revokeObjectURL(s),t(new Error("Image decode failed"))},i.src=s})}async function cu(o){const e=await du(o);try{const t=e.width>Jr?Jr/e.width:1,i=Math.max(1,Math.round(e.width*t)),s=Math.max(1,Math.round(e.height*t)),r=document.createElement("canvas");r.width=i,r.height=s;const n=r.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,s),await new Promise((a,l)=>{r.toBlob(d=>d?a(d):l(new Error("Canvas toBlob failed")),"image/jpeg",ru)})}finally{e.close()}}async function en(o,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),nu),s=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",s);const r=t.signal,n=()=>{if(r.aborted)throw new DOMException("Aborted","AbortError")};try{n();const d=await au(o,r);n();const p=await cu(d);n();const f=`${(e.endpoint||ou).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,x=new FormData;x.append("file",p,lu(o.name));const k=await fetch(f,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:x,signal:r});if(!k.ok)throw new Error(`Similarity check failed (HTTP ${k.status})`);const v=await k.json();if(v.status==="error")throw new Error(`Similarity check failed: ${v.msg||"Unknown error"}`);return(v.similar_assets??[]).map(([P,T,$])=>({uuid:P,score:T,url:$}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",s)}}const Ki="sfx-uploader:last-upload:",ha=1;function pu(o){var r,n,a,l,d,p,u,f,x;const{file:e,previewUrl:t,...i}=o;let s=null;return o.status==="complete"&&(o.previewUrl&&!o.previewUrl.startsWith("blob:")?s=o.previewUrl:s=((a=(n=(r=o.response)==null?void 0:r.file)==null?void 0:n.url)==null?void 0:a.permalink)??((p=(d=(l=o.response)==null?void 0:l.file)==null?void 0:d.url)==null?void 0:p.cdn_permalink)??((x=(f=(u=o.response)==null?void 0:u.file)==null?void 0:f.url)==null?void 0:x.cdn)??null),{...i,previewUrl:s}}function uu(o){try{const e=sessionStorage.getItem(Ki+o);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==ha?null:t}catch{return null}}function hu(o,e){try{sessionStorage.setItem(Ki+o,JSON.stringify(e))}catch{}}const Yt={save(o,e){if(e.length===0){this.clear(o);return}const t={__schemaVersion:ha,savedAt:Date.now(),files:e.map(pu)};hu(o,t)},load(o){const e=uu(o);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(o){try{return sessionStorage.getItem(Ki+o)!=null}catch{return!1}},clear(o){try{sessionStorage.removeItem(Ki+o)}catch{}}},N={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let fu=0;function Tt(){return`file-${Date.now()}-${++fu}`}function It(o){if(!Number.isFinite(o)||o<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(o)/Math.log(1024)),e.length-1),i=o/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function tn(o){if(!isFinite(o)||o<=0)return"0s";const e=Math.round(o);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const s=Math.floor(t/60),r=t%60;return r>0?`${s}h ${r}m`:`${s}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function Ie(o){var t;const e=((t=o.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return o.type.startsWith("image/")?"image":o.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":o.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":o.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function gu(o){const e=o.lastIndexOf(".");return e>=0?o.slice(e+1).toUpperCase():""}const mu=new Set([".ds_store","thumbs.db","desktop.ini"]);function ys(o){const e=(o.split(/[\\/]/).pop()??o).toLowerCase();return e.startsWith(".ds_store")?!0:mu.has(e)}const vu={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Ys(o){var t;const e=((t=o.split(".").pop())==null?void 0:t.toLowerCase())??"";return vu[e]||""}function Qe(o){return o==="image/heic"||o==="image/heif"}function bu(o){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(o);let s=!1;const r=()=>{s||(s=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{s||(s=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}r()},{once:!0}),t.addEventListener("error",()=>r(),{once:!0}),setTimeout(()=>r(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function xu(o){return(o==null?void 0:o.code)==="max-files"}function _s(o,e,t){var i,s;if(e.maxFileSize!=null&&o.size>0&&o.size>e.maxFileSize){const r=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:ft("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:r})}}if(e.maxTotalFilesSize!=null&&o.size>0){let r=o.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(r+=n.size);if(r>e.maxTotalFilesSize)return{code:"max-total-size",message:ft("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let r=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&r++;if(r>=e.maxNumberOfFiles)return{code:"max-files",message:ft("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const r=e.allowedFileTypes,n="."+(((i=o.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!r.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?o.type.startsWith(l.slice(0,-1)):o.type===l))return{code:"type-not-allowed",message:ft("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const r=e.blockedFileTypes,n="."+(((s=o.name.split(".").pop())==null?void 0:s.toLowerCase())??"");if(r.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?o.type.startsWith(l.slice(0,-1)):o.type===l))return{code:"type-blocked",message:ft("fileTypeBlocked","File type is blocked")}}return null}function ws(o){return o.allowedFileTypes?o.allowedFileTypes.join(","):""}function yu(o){return o.trim()?o.split(",").some(e=>{const t=e.trim().toLowerCase();if(!t)return!1;if(t==="*"||t==="*/*")return!0;const i=t.startsWith(".")?Ys(`file${t}`):t;return i.startsWith("image/")||i.startsWith("video/")}):!0}const sn={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function _u(o){return o.filter(e=>e in sn).map(e=>sn[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yi=class extends Gi{constructor(e){if(super(e),this.it=m,e.type!==hi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===Wi)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Yi.directiveName="unsafeHTML",Yi.resultType=1;const on=ui(Yi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gs extends Yi{}Gs.directiveName="unsafeSVG",Gs.resultType=2;const et=ui(Gs);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=ui(class extends Gi{constructor(o){var e;if(super(o),o.type!==hi.ATTRIBUTE||o.name!=="class"||((e=o.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var i,s;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const t=o.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return Wi}});function mt(o){return o.brandStyle?c`<span
    class=${Po({"brand-ico":!0,"brand-ico--transparent":o.brandStyle.background==="transparent"})}
    ${Z(o.brandStyle)}
    >${on(o.brandHtml)}</span
  >`:on(o.brandHtml)}var wu=Object.defineProperty,fa=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&wu(e,t,s),s};const ku='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',$u='<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="10.5" y1="18.5" x2="13.5" y2="18.5"/>',Su='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Cu='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Eu='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',At=[{id:"device",labelKey:"myDevice",label:"My Device",icon:ku,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:Su,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:Cu,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:Eu,iconColor:"#ea580c"}],Pu={id:"device",labelKey:"myDevice",label:"My Device",icon:$u,iconColor:"#2563eb"},Go=class Go extends W{constructor(){super(...arguments),this.t=De,this.sources=At}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return c`
      ${this.sources.map(e=>c`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?mt(e):G`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${et(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Go.styles=j`
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
  `;let pi=Go;fa([h({attribute:!1})],pi.prototype,"t");fa([h({type:Array})],pi.prototype,"sources");const ns=new Set(["multi-select","tags","ultratags"]),as=new Set(["text","textarea","attachment-uri"]);function Tu(o){return cl(o)?[]:o==="focus-point"?[]:ns.has(o)?[{key:"SET",label:C("bulkOpSet","Set")},{key:"ADD",label:C("bulkOpAddTo","Add to")},{key:"DELETE",label:C("bulkOpRemoveFrom","Remove from")}]:as.has(o)?[{key:"SET",label:C("bulkOpSet","Set")},{key:"ADD",label:C("bulkOpAppend","Append")},{key:"DELETE",label:C("bulkOpRemove","Remove")}]:[{key:"SET",label:C("bulkOpSet","Set")},{key:"DELETE",label:C("bulkOpClear","Clear")}]}function Ws(o,e){return o==="DELETE"?ns.has(e)||as.has(e):!0}function Ai(o){if(typeof o=="string")return o;if(o&&typeof o=="object"){const e=o;return e.sid||e.label||String(o)}return String(o)}function Ru(o,e,t,i){const s=ns.has(i),r=as.has(i);switch(o){case"SET":return t;case"ADD":{if(s){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return Cs(n,a,!1);if(i==="tags"){const p=new Set(n.map(f=>Ai(f))),u=[...n];for(const f of a){const x=Ai(f);p.has(x)||(p.add(x),u.push(f))}return u}const l=new Set(n.map(p=>JSON.stringify(p))),d=[...n];for(const p of a){const u=JSON.stringify(p);l.has(u)||(l.add(u),d.push(p))}return d}if(r){const n=typeof t=="string"?t:"";if(!n)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${n}`:n}return t}case"DELETE":{if(s){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return Cs(n,a,!0);if(i==="tags"){const d=new Set(a.map(p=>Ai(p)));return n.filter(p=>!d.has(Ai(p)))}const l=new Set(a.map(d=>JSON.stringify(d)));return n.filter(d=>!l.has(JSON.stringify(d)))}if(r){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function ga(o,e,t,i,s){const r=s??"en",n=!!o.regional_variants_group_uuid,a={meta:{[o.key]:e}},l=lo(o,t,a,s),d=x=>n&&x!==null&&typeof x=="object"&&!Array.isArray(x),p=d(e)?e[r]:e,u=d(l)?l[r]:l,f=Ru(i,p,u,o.type);return n?{...d(e)?e:{},[r]:f}:f}const ma=Symbol("clamp-drop");function Fu(o,e,t,i,s){if(o.type!=="select-one"&&o.type!=="multi-select")return e;const r=new Set(t),n=!!o.regional_variants_group_uuid,a=i??"en",l=u=>n&&u!==null&&typeof u=="object"&&!Array.isArray(u),d=l(e)?e[a]:e;let p;if(o.type==="multi-select"){const u=Array.isArray(d)?d:[],f=l(s)?s[a]:s,x=new Set((Array.isArray(f)?f:[]).map(k=>k));p=u.filter(k=>r.has(k)||x.has(k))}else if(d==null||d==="")p=d;else if(r.has(d))p=d;else return ma;return n?{...l(e)?e:{},[a]:p}:p}const va=j`
  .fm-checkbox {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 3px;
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      background-color 0.12s ease,
      border-color 0.12s ease;
    flex-shrink: 0;
  }
  .fm-checkbox:hover {
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked,
  .fm-checkbox:indeterminate {
    background: var(--sfx-up-primary, #2563eb);
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>")
      center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>")
      center / contain no-repeat;
  }
  .fm-checkbox:indeterminate::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>")
      center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>")
      center / contain no-repeat;
  }
  .fm-checkbox:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Iu=j`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
  }

  /* The overlay is a <dialog> opened with showModal() so it lives in the top
     layer. A plain fixed-position div resolves against the nearest ancestor
     that establishes a containing block, and a host app only has to put a
     transform / filter / will-change / contain on any wrapper around
     <sfx-uploader> for "inset: 0" to snap onto that wrapper's box instead of
     the viewport — which pins the modal to a random corner, mostly off-screen.
     Top-layer elements are always laid out against the viewport, so no host
     CSS can move us. The explicit 100vw/100dvh sizing is belt-and-braces for
     the same reason: it survives even if the dialog fails to go modal. */
  .fm-overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: 0;
    border: 0;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 24, 39, 0.5);
    color: inherit;
    overflow: hidden;
  }
  /* We paint our own scrim on the dialog itself, so the UA backdrop (which
     would double up the dimming) stays transparent. */
  .fm-overlay::backdrop {
    background: transparent;
  }

  /* ---- Confirm discard dialog ---- */
  .fm-confirm-overlay {
    position: absolute;
    inset: 0;
    background: rgba(17, 24, 39, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    border-radius: 14px;
  }
  .fm-confirm {
    background: var(--sfx-up-bg, #fff);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding: 24px;
    max-width: 380px;
    width: 100%;
  }
  /* Title (short, never wraps) + close button share a row, same
     align-items: center convention as .fm-topbar above — safe here because
     the title is a short heading, not the full sentence (that lives in
     .fm-confirm-text below), so the icon always sits level with it. */
  .fm-confirm-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }
  .fm-confirm-title {
    flex: 1;
    font-size: 18px;
    font-weight: 700;
    color: var(--sfx-up-text, #1e293b);
    margin: 0;
    line-height: 1.3;
  }
  .fm-confirm-close {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
  }
  .fm-confirm-close:hover {
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .fm-confirm-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
    margin: 0 0 20px;
    line-height: 1.5;
  }
  .fm-confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .fm-modal {
    width: var(--sfx-up-bulk-modal-width, 980px);
    max-width: min(calc(100vw - 40px), var(--sfx-up-bulk-modal-max-width, 1600px));
    height: var(--sfx-up-bulk-modal-height, 82vh);
    max-height: calc(100vh - 40px);
    background: var(--sfx-up-bg, #fff);
    border-radius: 14px;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Top bar ---- */
  .fm-topbar {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-topbar-title {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fm-topbar-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition:
      background 0.15s ease,
      color 0.15s ease;
    flex-shrink: 0;
  }
  .fm-topbar-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }

  /* Regional-settings sits to the left of the close button — same 8px gap
     rule as the main header. */
  .fm-topbar-regional {
    margin-right: 8px;
  }

  /* ---- Body ---- */
  .fm-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .fm-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Table header ---- */
  .fm-table-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 24px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    border-left: 3px solid transparent;
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
    flex-shrink: 0;
  }
  .fm-th-check {
    width: 20px;
    flex-shrink: 0;
  }
  .fm-th-name {
    width: 244px; /* row-thumb (52) + row gap (12) + row-name (180) */
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover {
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .fm-th-size {
    width: 70px;
    flex-shrink: 0;
    text-align: left;
  }
  .fm-th-field {
    flex: 1;
    min-width: 0;
  }

  .fm-sort-arrow {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-left: 4px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Table body (scrollable) ---- */
  .fm-table-body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
  .fm-table-body::-webkit-scrollbar {
    width: 10px;
  }
  .fm-table-body::-webkit-scrollbar-track {
    background: transparent;
  }
  .fm-table-body::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  .fm-table-body::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  /* ---- Footer ---- */
  .fm-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-footer .spacer {
    flex: 1;
  }

  /* ---- Shared buttons ---- */
  .btn-ghost,
  .btn-primary,
  .btn-back {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary, #2563eb),
      var(--sfx-up-primary-mid, #3b82f6)
    );
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
    /* Anchor the footer's right edge so Cancel doesn't visibly jump when the
       label flips between "Save" (~60px) and "Next required: <title>" (up to
       320px). The min-width accommodates short labels comfortably without
       forcing extra padding when not needed. */
    min-width: 120px;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary-hover, #1d4ed8),
      var(--sfx-up-primary, #2563eb)
    );
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
  /* "Next required: <field>" variant of the primary button.
     Cap the label width so a long field title can't push the button beyond the
     footer; the field title is allowed to ellipsize, while the trailing arrow
     stays pinned and visible. */
  .btn-primary--next {
    max-width: 320px;
    min-width: 0;
  }
  .btn-primary--next .btn-primary-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .btn-primary--next .btn-primary-arrow {
    flex-shrink: 0;
  }
  .btn-back {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    padding: 0 8px;
  }
  .btn-back:hover {
    color: var(--sfx-up-text-secondary, #64748b);
  }

  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  /* ---- Empty state ---- */
  .fm-empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  /* ---- Mobile / tablet responsive ----
     At <=768px the bulk modal goes fullscreen and restacks: sidebar
     on top as a horizontal scroll bar, table header is hidden (rows
     carry their own labels via stacked layout), footer buttons wrap. */
  @media (max-width: 768px) {
    .fm-modal {
      width: 100vw;
      max-width: 100vw;
      height: 100dvh;
      max-height: 100dvh;
      border-radius: 0;
    }
    .fm-topbar {
      padding: 10px 14px;
    }
    .fm-body {
      flex-direction: column;
    }
    .fm-table-header {
      display: none;
    }
    .fm-th-name,
    .fm-th-size {
      width: auto;
    }
    .fm-footer {
      padding: 10px 12px;
      gap: 6px;
      flex-wrap: wrap;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 12px;
      font-size: 13px;
    }
    .fm-footer .btn-primary {
      /* Tighter anchor on mobile so Save doesn't visually dominate at small
         viewports. The footer also wraps below ~360px which keeps everything
         reachable. */
      min-width: 88px;
    }
    .fm-footer .btn-primary--next {
      /* Squeeze the "Next required" button further on mobile so it still
         fits beside Cancel + Back when the field title is long. */
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    .fm-topbar-title {
      font-size: 13px;
    }
    .fm-footer {
      padding: 8px 10px;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 10px;
      font-size: 12px;
      height: 34px;
    }
  }

  ${va}

  ${Ee}
`,Au=j`
  :host {
    display: block;
    width: 260px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 0 0 12px;
    font-family: var(--sfx-up-font, inherit);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }

  /* Sticky search + collapse-all toolbar pinned to the top of the
     scrollable sidebar. */
  .sb-header {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: var(--sfx-up-bg, #fff);
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .sb-search {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .sb-search-icon {
    position: absolute;
    left: 9px;
    width: 15px;
    height: 15px;
    color: var(--sfx-up-text-muted, #94a3b8);
    pointer-events: none;
  }
  .sb-search-input {
    width: 100%;
    box-sizing: border-box;
    height: 34px;
    padding: 0 28px 0 30px;
    font-family: inherit;
    font-size: 13px;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-surface, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    outline: none;
    transition:
      border-color 0.12s ease,
      box-shadow 0.12s ease;
  }
  .sb-search-input::placeholder {
    color: var(--sfx-up-text-muted, #94a3b8);
  }
  .sb-search-input:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow: 0 0 0 2px var(--sfx-up-primary-bg, #eff6ff);
  }
  .sb-search-clear {
    position: absolute;
    right: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    border-radius: 4px;
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: pointer;
  }
  .sb-search-clear:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .sb-search-clear svg {
    width: 12px;
    height: 12px;
  }
  .sb-collapse-btn {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
    background: var(--sfx-up-surface, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    cursor: pointer;
    transition:
      color 0.12s ease,
      background-color 0.12s ease,
      border-color 0.12s ease;
  }
  .sb-collapse-btn:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .sb-collapse-btn svg {
    width: 16px;
    height: 16px;
  }
  .sb-empty {
    padding: 24px 16px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
    text-align: center;
  }
  :host::-webkit-scrollbar {
    width: 10px;
  }
  :host::-webkit-scrollbar-track {
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  :host::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  .group-label {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px 6px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    transition:
      background-color 0.12s ease,
      color 0.12s ease;
  }
  .group-label:first-child {
    margin-top: 0;
  }
  .group-label:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .group-label-text {
    flex: 1;
  }
  .group-chevron {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    transition: transform 0.18s ease;
  }
  .group-chevron.open {
    transform: rotate(180deg);
  }

  .field-item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 8px 12px 8px 32px;
    box-sizing: border-box;
    /* Keep the auto-scrolled active field clear of the sticky search header
       (≈58px) when scrollIntoView({ block: 'nearest' }) fires in updated(). */
    scroll-margin-top: 60px;
    cursor: pointer;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
    transition: background 0.12s ease;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    font-family: inherit;
  }
  .field-item:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .field-item.active {
    background: var(--sfx-up-primary-bg, #eff6ff);
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .field-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.55;
  }
  .field-icon svg {
    width: 16px;
    height: 16px;
  }
  .field-item.active .field-icon {
    opacity: 0.85;
  }

  .field-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .field-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
  }

  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
    flex-shrink: 0;
  }
  /* Required field currently has at least one modifiable file missing a value —
     amplify (rather than mute its peers) so the user can correlate the footer's
     "Next required: <field>" button with the sidebar entry it points at. */
  .field-required.unmet {
    font-weight: 800;
    font-size: 16px;
    line-height: 1;
    /* The bigger asterisk has more visual weight above the baseline; pull it
       up a hair so the row keeps the same optical center. */
    margin-top: -1px;
  }

  /* ---- Mobile: sidebar becomes a horizontal scrollable tab bar on top,
     since the modal stacks vertically below 768px. Hide group labels and
     flatten all fields into one row. ---- */
  @media (max-width: 768px) {
    :host {
      width: 100%;
      max-height: 56px;
      min-height: 56px;
      border-right: none;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    :host::-webkit-scrollbar {
      height: 4px;
    }
    .sb-header {
      display: none;
    }
    .group-label {
      display: none;
    }
    .field-item {
      height: 40px;
      padding: 8px 14px;
      width: auto;
      flex-shrink: 0;
      border-radius: 999px;
      margin: 0 4px;
      background: var(--sfx-up-border-light, #f1f5f9);
      font-size: 13px;
    }
    .field-item.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }
    .field-name {
      overflow: visible;
      text-overflow: unset;
    }
  }

  ${Ee}
`,Ou=j`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .op-bar {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 24px;
    flex-shrink: 0;
  }

  /* Stacked field (label on top, control below) */
  .op-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }
  .op-field--operation {
    width: 200px;
    flex-shrink: 0;
  }
  .op-field--value {
    flex: 1;
    min-width: 0;
  }
  .op-field-label {
    font-size: 12px;
    font-weight: 400;
    color: var(--sfx-up-text-muted, #94a3b8);
    line-height: 1;
  }

  /* Operation dropdown */
  .op-dropdown-wrap {
    position: relative;
    width: 100%;
  }
  .op-trigger {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    background: var(--sfx-up-bg, #fff);
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    transition:
      border-color 0.12s ease,
      box-shadow 0.12s ease;
  }
  .op-trigger--static {
    cursor: default;
  }
  .op-trigger-label {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .op-chevron {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
  }
  .op-trigger.open .op-chevron {
    transform: rotate(180deg);
  }
  .op-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 20;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .op-option {
    padding: 10px 12px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
    font-family: inherit;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }
  .op-option:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .op-option.active {
    color: var(--sfx-up-primary, #2563eb);
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-weight: 500;
  }

  /* Value input area */
  .op-value {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .op-value > sfx-metadata-field-edit {
    flex: 1;
    min-width: 0;
  }

  /* Apply button — align with the TOP of the input column so it sits
     next to the control (not the bottom of multi-line textareas). The
     op-bar row uses align-items: flex-start, so this sits at the top. */
  .btn-apply {
    height: 36px;
    align-self: flex-start;
    margin-top: 18px; /* tuned to line up with input top edge */
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    background: var(--sfx-up-primary, #2563eb);
    color: #fff;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }
  .btn-apply:hover:not(:disabled) {
    background: var(--sfx-up-primary-hover, #1d4ed8);
  }
  .btn-apply:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* Unsupported field notice (rendered in place of op-bar controls). */
  .op-unsupported {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 14px;
    border: 1px dashed var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    background: var(--sfx-up-surface, #f8fafc);
    font-size: 13px;
    line-height: 1.4;
    flex: 1;
    min-width: 0;
  }
  .op-unsupported svg {
    width: 16px;
    height: 16px;
    margin-top: 1px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
  .op-unsupported-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .op-unsupported-title {
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
  }
  .op-unsupported-msg {
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Mobile: stack op-field rows vertically so the operation
     dropdown, value input, and Apply button each get full width. ---- */
  @media (max-width: 768px) {
    .op-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 12px 14px;
    }
    .op-field--operation {
      width: 100%;
    }
    .btn-apply {
      align-self: stretch;
      margin-top: 0;
      height: 38px;
      font-size: 14px;
    }
  }

  ${Ee}
`,Uu=j`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 24px;
    border-left: 3px solid transparent;
  }

  .row-check {
    width: 20px;
    flex-shrink: 0;
  }

  .row-thumb {
    width: 52px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 6px;
    object-fit: cover;
    background: var(--sfx-up-border-light, #f1f5f9);
  }
  .row-thumb-fallback {
    object-fit: contain;
    padding: 2px;
    box-sizing: border-box;
  }

  .row-name {
    width: 180px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
  }

  .row-size {
    width: 70px;
    flex-shrink: 0;
    text-align: left;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  .row-field {
    flex: 1;
    min-width: 0;
    position: relative;
  }
  .row-field-edit {
    min-width: 0;
  }

  .row-field-na {
    font-size: 12px;
    font-style: italic;
    color: var(--sfx-up-text-muted, #9ca3af);
    padding: 6px 0;
  }

  .row-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* ---- Mobile: stack row contents vertically. Top row has
     checkbox + thumb + name, then size below name, and the field
     editor spans the full row width underneath. ---- */
  @media (max-width: 768px) {
    .row {
      flex-wrap: wrap;
      padding: 10px 14px;
      gap: 10px;
    }
    .row-name {
      flex: 1;
      width: auto;
      min-width: 0;
    }
    .row-size {
      width: auto;
      font-size: 12px;
    }
    .row-field {
      flex-basis: 100%;
      margin-left: 32px;
    }
  }

  @media (max-width: 440px) {
    .row {
      padding: 10px 12px;
    }
    .row-thumb {
      width: 44px;
      height: 32px;
    }
    .row-field {
      margin-left: 0;
    }
  }

  ${va}

  ${Ee}
`,zu=j`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .diff-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    min-height: 28px;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* ---- Chips (array diff) ---- */
  .diff-chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1.4;
  }
  .diff-chip--kept {
    background: var(--sfx-up-border-light, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .diff-chip--empty {
    opacity: 0.5;
  }
  .diff-chip--added {
    background: #dcfce7;
    color: #166534;
    font-weight: 500;
  }
  .diff-chip--removed {
    background: #fee2e2;
    color: #991b1b;
  }
  .diff-chip--removed s {
    text-decoration: line-through;
  }

  /* ---- Scalar diff ---- */
  .diff-old {
    color: #991b1b;
  }
  .diff-old s {
    text-decoration: line-through;
    opacity: 0.7;
  }
  .diff-arrow {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 13px;
    flex-shrink: 0;
  }
  .diff-new {
    color: #166534;
    font-weight: 500;
  }
  .diff-scalar-text {
    font-size: 14px;
  }

  /* ---- Accessibility ---- */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`,Lu=j`
  :host {
    display: block;
  }
  /* The virtualizer scrolls inside the modal's .fm-table-body; keep it a
     block so its content-height sizer lays out correctly. */
  lit-virtualizer {
    display: block;
  }
  /* The virtualizer positions each row absolutely without setting a width, so
     a row would otherwise shrink to its content and the flex:1 field column
     would collapse. Force full width to match the non-virtualized rows. */
  lit-virtualizer > sfx-bulk-meta-row {
    width: 100%;
  }
`;var Du=Object.defineProperty,se=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Du(e,t,s),s},it;const ie=(it=class extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this.primaryAction="save",this.exitAction="cancel",this.operationMode="full",this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._confirmAllowApply=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._conflictedFieldKey=null,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onDialogCancel=e=>{e.preventDefault()},this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement)||await this._onClose()},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmApply=()=>{var t,i;(((t=this._opBarEl)==null?void 0:t.applyPending())??!1)&&(this._confirmVisible=!1,(i=this._confirmResolve)==null||i.call(this,!0),this._confirmResolve=null)},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,l;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const s=i[0],r=i[i.length-1],n=(l=this.shadowRoot)==null?void 0:l.activeElement;e.shiftKey&&n===s?(e.preventDefault(),r.focus()):!e.shiftKey&&n===r&&(e.preventDefault(),s.focus())},this._onPendingChange=e=>{const{operation:t,value:i,taxonomyEntry:s}=e.detail,r=this._activeField;((r==null?void 0:r.type)==="taxonomy-node"?s==null:Le(i))&&(!r||Ws(t,r.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:i,taxonomyEntry:s})},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e)},this._onBulkApply=e=>{const t=this._activeField;if(!t)return;const{operation:i,value:s,taxonomyEntry:r}=e.detail,{updates:n,appliedIds:a}=this._computeBulkUpdates(t,i,s);this._setStagedBulk(n),t.type==="taxonomy-node"&&r!==void 0&&this._setStagedTaxonodeBulk(a,t.key,r)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:s}=e.detail;this._setStagedTaxonodeSingle(t,i,s)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null||await this._confirmDiscardPending()&&(this._setPendingOp(null),this._refreshMissingRequired(),this._refreshConflictedField(),!(this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null)&&(this._commitStagedChanges(),this._emitClose(!0)))},this._onCancel=async()=>{await this._confirmDiscardAll()&&this._emitClose()},this._onBack=async()=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._commitStagedChanges(),this._emitClose(!1))},this._onClose=async()=>{if(this.exitAction==="back"){await this._onBack();return}await this._confirmDiscardAll()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._normalizeSchema(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_showModally(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog.fm-overlay");if(!(!e||e.open||typeof e.showModal!="function"))try{e.showModal()}catch{}}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},it._PREVIEW_DEBOUNCE_MS)}_initStaged(){var a,l;const e=new Map,t=new Map,i=new Set,s=new Map,r=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const d of this.files){const p=new Map;if(d.meta)for(const[u,f]of Object.entries(d.meta))p.set(u,f);if(r){const u=d.product;(u==null?void 0:u.ref)!==void 0&&p.set(bt,u.ref),(u==null?void 0:u.position)!==void 0&&p.set(xt,u.position)}Array.isArray(d.tags)&&d.tags.length>0&&p.set(xo,[...d.tags]),e.set(d.id,p),d.taxonodes&&t.set(d.id,new Map(Object.entries(d.taxonodes))),i.add(d.id),s.set(d.id,d.status?d:{...d,status:"idle"})}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=s,this._recomputeResolvedSchemas();const n=this.initialFieldKey;if(n&&((l=this.schema)!=null&&l.fieldsByKey.has(n)))this._activeFieldKey=n;else if(this.schema&&this.schema.fields.length>0){const d=this._groupOfFieldMap(),p=this.schema.fields.find(u=>this._isFieldNavigable(u,d));this._activeFieldKey=(p==null?void 0:p.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(e,t,i){const s=new Map(this._staged),r=new Map(s.get(e)??new Map);r.set(t,i),s.set(e,r),this._staged=s}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,s,r]of e){const n=new Map(t.get(i)??new Map);n.set(s,r),t.set(i,n)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const s=new Map(this._stagedTaxonodes);for(const r of e){const n=new Map(s.get(r)??new Map);n.set(t,i),s.set(r,n)}this._stagedTaxonodes=s}_setStagedTaxonodeSingle(e,t,i){const s=new Map(this._stagedTaxonodes),r=new Map(s.get(e)??new Map);r.set(t,i),s.set(e,r),this._stagedTaxonodes=s}_isTaxonodeEntryUnedited(e,t){var r,n,a;const i=(r=this._stagedTaxonodes.get(e))==null?void 0:r.get(t);if(i===void 0)return!0;if(i===null)return!1;const s=(a=(n=this._originalFiles.get(e))==null?void 0:n.taxonodes)==null?void 0:a[t];return s?i.uuid===s.uuid||i.suid===s.suid:!1}_syncStagedTaxonodesFromFiles(){var i;let e=!1;const t=new Map(this._stagedTaxonodes);for(const s of this.files)if(s.taxonodes)for(const[r,n]of Object.entries(s.taxonodes)){const a=this._isTaxonodeEntryUnedited(s.id,r),l=(i=t.get(s.id))==null?void 0:i.get(r),d=l!=null&&n!=null&&(l.uuid===n.uuid||l.suid===n.suid),p=l==null&&n==null;if(!a||d||p)continue;const u=new Map(t.get(s.id)??new Map);u.set(r,n??null),t.set(s.id,u),e=!0;const f=this._originalFiles.get(s.id);f&&this._originalFiles.set(s.id,{...f,taxonodes:{...f.taxonodes??{},[r]:n??null}})}e&&(this._stagedTaxonodes=t)}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,s;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const r of this._selected){const n=this._originalFiles.get(r),a=(i=this._staged.get(r))==null?void 0:i.get(e.key),l=a!==void 0?a:(s=n==null?void 0:n.meta)==null?void 0:s[e.key],d=ti(l);d.length&&(t=Cs(t,d,!1))}return t.filter(r=>typeof r!="string")}_originalValue(e,t){var s,r;const i=this._originalFiles.get(e);if(i){if(Es(t)){const n=Ps(t);return n?(s=i.product)==null?void 0:s[n]:void 0}return zs(t)?Array.isArray(i.tags)?[...i.tags]:[]:(r=i.meta)==null?void 0:r[t]}}_stagedWithPendingPreview(){const e=this._previewOp,t=this._activeField;if(!e||!t||Le(e.value)||this._selected.size===0)return this._staged;const{updates:i}=this._computeBulkUpdates(t,e.operation,e.value);if(i.length===0)return this._staged;const s=new Map(this._staged);for(const[r,n,a]of i){const l=new Map(s.get(r)??new Map);l.set(n,a),s.set(r,l)}return s}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&En(this.schema,this.config)?Fl(this._stagedWithPendingPreview(),this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const n of this.schema.fields)if(t.has(n.key)){i=n.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const s=this._missingRequiredKeys;let r=s.size!==t.size;if(!r){for(const n of t)if(!s.has(n)){r=!0;break}}r&&(this._missingRequiredKeys=t)}_refreshConflictedField(){const e=this.schema&&this.dependencies.length>0?Il(this._staged,this._originalFiles,this.schema,this.dependencies):null;e!==this._conflictedFieldKey&&(this._conflictedFieldKey=e)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[r,n]of i)s[r]=n;e.push({id:t.id,mime:t.type??"",meta:s})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=al(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[r,n]of i)s[r]=n;e.set(t.id,zt({mime:t.type??"",meta:s},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var r;if(!this.schema||!this._activeFieldKey)return;const e=(r=this.schema.fieldsByKey)==null?void 0:r.get(this._activeFieldKey);if(!!e&&this._cachedBulkResolved.size===0)return;const i=this._groupOfFieldMap();if(e&&this._isFieldNavigable(e,i))return;const s=this.schema.fields.find(n=>this._isFieldNavigable(n,i));this._setPendingOp(null),this._activeFieldKey=(s==null?void 0:s.key)??""}_groupOfFieldMap(){var t,i;if(this.schema&&((t=this._groupOfFieldCache)==null?void 0:t.schema)===this.schema)return this._groupOfFieldCache.map;const e=new Map;for(const s of((i=this.schema)==null?void 0:i.groups)??[])for(const r of s.fields)e.set(r,s);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return uo(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){const i=t.get(e);return!(Zi(e,i,this._cachedBulkResolved)||i&&fo(i)&&!this._isFieldRequiredBulk(e)&&!ro(e,i,this._cachedBulkResolved))}_recomputeFilledFields(){var r;const e=new Set,t=this._stagedWithPendingPreview();for(const n of((r=this.schema)==null?void 0:r.fields)??[])for(const[a,l]of t){const d=l.get(n.key),p=this._originalValue(a,n.key);if(d!==void 0&&!Le(d)&&JSON.stringify(d)!==JSON.stringify(p)){e.add(n.key);break}}const i=this._filledFieldsCache;let s=i.size!==e.size;if(!s){for(const n of e)if(!i.has(n)){s=!0;break}}s&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const e=[...this.files];e.sort((t,i)=>{const s=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?s:-s}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!Le(this._pendingOp.value)}get _hasStagedChanges(){var e;for(const[t,i]of this._staged)for(const[s,r]of i)if(JSON.stringify(r)!==JSON.stringify(this._originalValue(t,s)))return!0;for(const[t,i]of this._stagedTaxonodes){const s=((e=this._originalFiles.get(t))==null?void 0:e.taxonodes)??{};for(const[r,n]of i){const a=s[r]??null;if(JSON.stringify(n??null)!==JSON.stringify(a??null))return!0}}return!1}_confirmDiscardPending(){return this._hasPendingValue?this._openDiscardConfirm(!0):Promise.resolve(!0)}_confirmDiscardAll(){return!this._hasPendingValue&&!this._hasStagedChanges?Promise.resolve(!0):this._openDiscardConfirm(!1)}_openDiscardConfirm(e){return new Promise(t=>{this._confirmResolve=t,this._confirmAllowApply=e,this._confirmVisible=!0})}_normalizeSchema(){if(!this.schema)return;const e=Rn(this.schema);e!==this.schema&&(this.schema=e)}willUpdate(e){e.has("schema")&&this._normalizeSchema(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden()),(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies")||e.has("_previewOp")||e.has("_selected"))&&(this._refreshMissingRequired(),this._refreshConflictedField()),(e.has("_staged")||e.has("schema")||e.has("_previewOp")||e.has("_selected"))&&this._recomputeFilledFields(),(e.has("files")||e.has("_sortAsc"))&&this._recomputeSortedFiles(),e.has("files")&&this._syncStagedTaxonodesFromFiles()}updated(e){var t;(t=super.updated)==null||t.call(this,e),this._showModally(),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var r;const i=this._confirmAllowApply?".fm-confirm .btn-primary":".fm-confirm .fm-confirm-close",s=(r=this.shadowRoot)==null?void 0:r.querySelector(i);s==null||s.focus()})}_computeBulkUpdates(e,t,i){var a;const s=vt(e,this.config),r=[],n=new Set;for(const l of this._selected){const d=(a=this._cachedPerFileResolved.get(l))==null?void 0:a.get(e.ckey);if(d!=null&&d.hidden)continue;const p=this._staged.get(l),u=p!=null&&p.has(e.key)?p.get(e.key):this._originalValue(l,e.key)??null;let f=ga(e,u,i,t,s);if(d!=null&&d.allowedValues){const x=Fu(e,f,d.allowedValues,s,u);if(x===ma)continue;f=x}r.push([l,e.key,f]),n.add(l)}return{updates:r,appliedIds:n}}_commitStagedChanges(){const e=[],t=[],i=[];for(const[r,n]of this._staged){if(!this._originalFiles.get(r))continue;const l={},d={};for(const[p,u]of n){const f=this._originalValue(r,p);if(JSON.stringify(u)!==JSON.stringify(f))if(Es(p)){const x=Ps(p);if(!x)continue;const k=u===""||u==null;x==="position"?d.position=k?void 0:Number(u):d.ref=k?void 0:String(u)}else if(zs(p)){const x=Array.isArray(u)?u:[];i.push({fileId:r,tags:x})}else l[p]=u}Object.keys(l).length>0&&e.push({fileId:r,meta:l}),Object.keys(d).length>0&&t.push({fileId:r,product:d})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),i.length>0&&this.dispatchEvent(new CustomEvent("tags-save-batch",{detail:{changes:i},bubbles:!0,composed:!0}));const s=[];for(const[r,n]of this._stagedTaxonodes){const a=this._originalFiles.get(r);if(!a)continue;const l=a.taxonodes??{},d={};for(const[p,u]of n){const f=l[p]??null;JSON.stringify(u??null)!==JSON.stringify(f??null)&&(d[p]=u??null)}Object.keys(d).length>0&&s.push({fileId:r,taxonodes:d})}s.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:s},bubbles:!0,composed:!0}))}_emitClose(e=!1){this.dispatchEvent(new CustomEvent("metadata-close",{detail:{saved:e},bubbles:!0,composed:!0}))}render(){var k,v,P,T;if(!((v=(k=this.schema)==null?void 0:k.fields)!=null&&v.length))return c`
        <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
          <div class="fm-modal" @click=${$=>$.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title"
                >${C("fillMultipleAssets","Fill multiple assets")}</span
              >
              <button class="fm-topbar-close" @click=${this._onClose} title=${C("close","Close")}>
                <svg
                  width="18"
                  height="18"
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
            <div class="fm-empty">
              ${C("noMetadataFieldsConfigured","No metadata fields configured")}
            </div>
          </div>
        </dialog>
      `;const e=this._activeField,t=this._sortedFilesCache,i=this._selected.size===this.files.length&&this.files.length>0,s=this._selected.size>0&&!i,r=this._missingRequiredFieldKey,n=this._cachedBulkResolved,a=this._cachedPerFileResolved,l=e==null?void 0:e.ckey,d=l?n.get(l):void 0,p=r!=null&&this._activeFieldKey===r,u=r!=null&&!p,f=this._conflictedFieldKey!=null,x=this.primaryAction==="upload"?this.files.length>1?C("uploadAll","Upload all ({{count}})",{count:this.files.length}):C("upload","Upload"):C("save","Save");return c`
      <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
        <div class="fm-modal" @click=${$=>$.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${C("fillMultipleAssets","Fill multiple assets")}</span>
            ${(P=this.schema.regionalVariantsGroups)!=null&&P.length?c`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((T=this.config)==null?void 0:T.regionalFilters)??{}}
                ></sfx-regional-settings>`:m}
            <button class="fm-topbar-close" @click=${this._onClose} title=${C("close","Close")}>
              <svg
                width="18"
                height="18"
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

          <!-- Body -->
          <div class="fm-body">
            <!-- Sidebar -->
            <sfx-bulk-meta-sidebar
              .schema=${this.schema}
              .activeFieldKey=${this._activeFieldKey}
              .filledFields=${this._filledFieldsCache}
              .missingRequiredKeys=${this._missingRequiredKeys}
              .config=${this.config}
              .bulkResolvedSchema=${n}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              ${e?c`
                    <!-- Op bar -->
                    <sfx-bulk-meta-op-bar
                      .field=${e}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      .allowedValues=${(d==null?void 0:d.allowedValues)??null}
                      .operationMode=${this.operationMode}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>

                    <!-- Table header -->
                    <div class="fm-table-header">
                      <div class="fm-th-check">
                        <input
                          type="checkbox"
                          class="fm-checkbox"
                          .checked=${i}
                          .indeterminate=${s}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${C("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${C("size","Size")}</div>
                      <div class="fm-th-field">${e.title}</div>
                    </div>

                    <!-- Table body -->
                    <div class="fm-table-body">
                      <sfx-bulk-meta-table
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._previewOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        .perFileResolved=${a}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    </div>
                  `:c`
                    <!-- Every group is hidden by default with no required field
                         to surface — nothing to edit, but the schema isn't empty. -->
                    <div class="fm-empty" role="status" aria-live="polite">
                      ${C("allMetadataFieldsHidden","All metadata fields are currently hidden")}
                    </div>
                  `}
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <!-- One exit, and which one depends on what the host is holding.
                 Under 'back' the host still has the staged files, so Back
                 returns there keeping everything filled so far — there is no
                 transaction to cancel, so no Cancel is offered. Under
                 'cancel' the assets already exist and Cancel means what it
                 says. See the exitAction property. -->
            ${this.exitAction==="back"?c`
                  <button
                    class="btn-back"
                    @click=${this._onBack}
                    title=${C("backToFilesHint","Back to your files — filled metadata is kept")}
                  >
                    ← ${C("backToFiles","Back to files")}
                  </button>
                  <div class="spacer"></div>
                `:c`
                  <div class="spacer"></div>
                  <button class="btn-ghost" @click=${this._onCancel}>
                    ${C("cancel","Cancel")}
                  </button>
                `}
            <!-- Single primary button so transitions between Save and "Next
                 metadata" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Four states:
                   1. Nothing missing, no conflict   → "Save"/"Upload" (enabled)
                   2. Missing field is NOT active     → "Next metadata →" (always
                                                         enabled — pure navigation,
                                                         never gated by conflicts)
                   3. Missing field IS active         → "Save"/"Upload" (disabled)
                   4. Nothing missing, unresolved
                      dep conflict                    → "Save"/"Upload" (disabled)
                 The label never names the field itself — some titles are long
                 enough to distort the button. -->
            <button
              class=${Po({"btn-primary":!0,"btn-primary--next":u})}
              @click=${u?this._onJumpToNextRequired:this._onSave}
              ?disabled=${p||!u&&f}
              title=${u?C("jumpToNextMetadata","Jump to next required field"):f?C("resolveConflictBeforeContinuing","Resolve the conflicting value before continuing"):""}
            >
              ${u?c`<span class="btn-primary-label">${C("nextMetadata","Next metadata")}</span
                    ><span class="btn-primary-arrow" aria-hidden="true">→</span>`:x}
            </button>
          </div>

          ${this._confirmVisible?c`
                <div
                  class="fm-confirm-overlay"
                  @click=${this._onConfirmCancel}
                  @keydown=${this._onConfirmKeydown}
                >
                  <div
                    class="fm-confirm"
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="fm-confirm-title"
                    aria-describedby="fm-confirm-desc"
                    @click=${$=>$.stopPropagation()}
                  >
                    <div class="fm-confirm-header">
                      <h3 class="fm-confirm-title" id="fm-confirm-title">
                        ${this._confirmAllowApply?C("unappliedChangesTitle","Unapplied changes"):C("unsavedChangesTitle","Unsaved changes")}
                      </h3>
                      <button
                        class="fm-confirm-close"
                        aria-label=${C("cancel","Cancel")}
                        @click=${this._onConfirmCancel}
                      >
                        <svg
                          width="16"
                          height="16"
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
                    <p class="fm-confirm-text" id="fm-confirm-desc">
                      ${this._confirmAllowApply?C("unappliedChangesBody","You have unapplied bulk changes for this field. Apply them before switching, or discard to continue without saving."):C("discardBulkChanges","You have unsaved changes. Discard them?")}
                    </p>
                    <div class="fm-confirm-actions">
                      ${this._confirmAllowApply?c`
                            <button class="btn-ghost" @click=${this._onConfirmOk}>
                              ${C("discard","Discard")}
                            </button>
                            <button class="btn-primary" @click=${this._onConfirmApply}>
                              ${C("apply","Apply")}
                            </button>
                          `:c`<button class="btn-primary" @click=${this._onConfirmOk}>
                            ${C("discard","Discard")}
                          </button>`}
                    </div>
                  </div>
                </div>
              `:m}
        </div>
      </dialog>
    `}},it.styles=[Iu],it._PREVIEW_DEBOUNCE_MS=150,it);se([h({attribute:!1})],ie.prototype,"schema");se([h({attribute:!1})],ie.prototype,"files");se([h({attribute:!1})],ie.prototype,"config");se([h({attribute:!1})],ie.prototype,"autocomplete");se([h({attribute:!1})],ie.prototype,"taxonomyService");se([h({attribute:!1})],ie.prototype,"ultratags");se([h({attribute:!1})],ie.prototype,"defaultLanguage");se([h({attribute:!1})],ie.prototype,"initialFieldKey");se([h({attribute:!1})],ie.prototype,"dependencies");se([h({type:String})],ie.prototype,"primaryAction");se([h({type:String})],ie.prototype,"exitAction");se([h({type:String})],ie.prototype,"operationMode");se([E()],ie.prototype,"_activeFieldKey");se([E()],ie.prototype,"_staged");se([E()],ie.prototype,"_stagedTaxonodes");se([E()],ie.prototype,"_selected");se([E()],ie.prototype,"_sortAsc");se([E()],ie.prototype,"_previewOp");se([E()],ie.prototype,"_confirmVisible");se([E()],ie.prototype,"_confirmAllowApply");se([Xi("sfx-bulk-meta-op-bar")],ie.prototype,"_opBarEl");se([E()],ie.prototype,"_missingRequiredFieldKey");se([E()],ie.prototype,"_missingRequiredKeys");se([E()],ie.prototype,"_conflictedFieldKey");let Mu=ie;J("sfx-bulk-metadata-modal",Mu);var Bu=Object.defineProperty,Xe=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Bu(e,t,s),s};const Wo=class Wo extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return uo(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var t;const e=((t=this.schema)==null?void 0:t.groups)??[];return e.length>0&&e.every(i=>this._collapsed.has(i.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var t;this._query="";const e=(t=this.renderRoot)==null?void 0:t.querySelector(".sb-search-input");e==null||e.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,s;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(s=this.renderRoot)==null?void 0:s.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return m;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),i=t.length>0;let s=0;const r=this.schema.groups.map(n=>{var d,p;const a=this._isNarrow||i||!this._collapsed.has(n.uuid);if(e&&n.ckey&&((d=e.get(n.ckey))!=null&&d.hidden))return m;let l=e?n.fields.filter(u=>!Zi(u,n,e)):n.fields;return fo(n)&&(l=l.filter(u=>this._isRequired(u)||ro(u,n,e))),i&&!((p=n.name)!=null&&p.toLowerCase().includes(t))&&(l=l.filter(u=>{var f;return(f=u.title)==null?void 0:f.toLowerCase().includes(t)})),l.length===0?m:(s+=l.length,c`
        <button
          class="group-label"
          @click=${()=>this._toggleGroup(n.uuid)}
          aria-expanded=${a}
        >
          <span class="group-label-text">${n.name}</span>
          <svg
            class="group-chevron ${a?"open":""}"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
        ${a?l.map(u=>c`
                <button
                  class="field-item ${this.activeFieldKey===u.key?"active":""}"
                  @click=${()=>this._onFieldClick(u.key)}
                >
                  <span class="field-icon" aria-hidden="true">${Ud(u.type)}</span>
                  <span class="field-name">${u.title}</span>
                  ${this.filledFields.has(u.key)?c`<span class="field-dot"></span>`:m}
                  ${this._isRequired(u)?c`<span
                        class=${Po({"field-required":!0,unmet:this.missingRequiredKeys.has(u.key)})}
                        aria-hidden="true"
                        >*</span
                      >`:m}
                </button>
              `):m}
      `)});return c`
      <div class="sb-header">
        <div class="sb-search">
          <svg
            class="sb-search-icon"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="4.5" />
            <line x1="11" y1="11" x2="14" y2="14" />
          </svg>
          <input
            class="sb-search-input"
            type="text"
            .value=${this._query}
            placeholder=${C("searchFields","Search fields...")}
            aria-label=${C("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?c`<button
                class="sb-search-clear"
                type="button"
                aria-label=${C("clear","Clear")}
                @click=${this._clearSearch}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="4" x2="12" y2="12" />
                  <line x1="12" y1="4" x2="4" y2="12" />
                </svg>
              </button>`:m}
        </div>
        <button
          class="sb-collapse-btn"
          type="button"
          aria-label=${this._allCollapsed?C("expandAll","Expand all"):C("collapseAll","Collapse all")}
          title=${this._allCollapsed?C("expandAll","Expand all"):C("collapseAll","Collapse all")}
          @click=${this._toggleAll}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="5 6 8 3 11 6" />
            <polyline points="5 10 8 13 11 10" />
          </svg>
        </button>
      </div>
      ${i&&s===0?c`<div class="sb-empty">${C("noFieldsMatch","No fields match")}</div>`:r}
    `}};Wo.styles=[Au];let Ae=Wo;Xe([h({attribute:!1})],Ae.prototype,"schema");Xe([h({attribute:!1})],Ae.prototype,"activeFieldKey");Xe([h({attribute:!1})],Ae.prototype,"filledFields");Xe([h({attribute:!1})],Ae.prototype,"missingRequiredKeys");Xe([h({attribute:!1})],Ae.prototype,"config");Xe([h({attribute:!1})],Ae.prototype,"bulkResolvedSchema");Xe([E()],Ae.prototype,"_collapsed");Xe([E()],Ae.prototype,"_isNarrow");Xe([E()],Ae.prototype,"_query");J("sfx-bulk-meta-sidebar",Ae);var ju=Object.defineProperty,Pe=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&ju(e,t,s),s},Ye;const we=(Ye=class extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this.operationMode="full",this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry,this._emitPendingChange()},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var r;if(e.key!=="Enter")return;const t=(r=this.field)==null?void 0:r.type;if(!t||!Ye._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(n=>n instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const s=e.composedPath().find(n=>n instanceof HTMLInputElement);s&&s.value!==void 0&&(this._value=s.value),this._onApply()}}get _availableOps(){return this.field?Tu(this.field.type):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??Ye._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("operationMode")&&this.operationMode==="set-only"&&(this._operation="SET",this._opDropdownOpen=!1),e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}get _taxonomyEntryForEmit(){var e;if(((e=this.field)==null?void 0:e.type)==="taxonomy-node")return this._operation==="DELETE"?null:this._pendingTaxonode}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0}))}applyPending(){return this._isApplyDisabled?!1:(this._onApply(),!0)}_onApply(){var e;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!Ws(this._operation,(e=this.field)==null?void 0:e.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?ns.has((e=this.field)==null?void 0:e.type)?Le(this._value):as.has((t=this.field)==null?void 0:t.type)?Le(this._value):!1:Le(this._value)}render(){var r;if(!this.field)return m;if(fi(this.field)){const n=bo();return c`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${n}">
            ${Bn}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${n}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,i=e.find(n=>n.key===this._operation),s=this.operationMode==="set-only";return c`
      <div class="op-bar">
        ${s?m:c`<div class="op-field op-field--operation">
              <span class="op-field-label">${C("operation","Operation")}</span>
              ${t?c`
                    <div class="op-dropdown-wrap">
                      <button
                        class="op-trigger ${this._opDropdownOpen?"open":""}"
                        @click=${this._onOpToggle}
                      >
                        <span class="op-trigger-label"
                          >${(i==null?void 0:i.label)??C("bulkOpSet","Set")}</span
                        >
                        <svg
                          class="op-chevron"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      ${this._opDropdownOpen?c`
                            <div class="op-menu">
                              ${e.map(n=>c`
                                  <button
                                    class="op-option ${n.key===this._operation?"active":""}"
                                    @click=${()=>this._onOpSelect(n.key)}
                                  >
                                    ${n.label}
                                  </button>
                                `)}
                            </div>
                          `:m}
                    </div>
                  `:c`
                    <div class="op-trigger op-trigger--static">
                      <span class="op-trigger-label"
                        >${(i==null?void 0:i.label)??C("bulkOpOverwrite","Overwrite")}</span
                      >
                    </div>
                  `}
            </div>`}
        ${Ws(this._operation,this.field.type)?c`
              <div class="op-field op-field--value">
                ${this.field.type==="geopoint"?m:c`<span class="op-field-label">${this.field.title}</span>`}
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @taxonomy-entry-change=${this._onTaxonomyEntryChange}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
                    .taxonomyService=${this.taxonomyService}
                    .taxonomyEntry=${this._pendingTaxonode}
                    .ultratags=${this.ultratags}
                    .language=${(r=this.config)==null?void 0:r.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:m}

        <button class="btn-apply" ?disabled=${this._isApplyDisabled} @click=${this._onApply}>
          ${s?C("applyToSelected","Apply to selected"):C("apply","Apply")}
        </button>
      </div>
    `}},Ye.styles=[Ou],Ye._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),Ye);Pe([h({attribute:!1})],we.prototype,"field");Pe([h({attribute:!1})],we.prototype,"autocomplete");Pe([h({attribute:!1})],we.prototype,"taxonomyService");Pe([h({attribute:!1})],we.prototype,"ultratags");Pe([h({attribute:!1})],we.prototype,"defaultLanguage");Pe([h({attribute:!1})],we.prototype,"ultratagsPresentOnSelection");Pe([h({attribute:!1})],we.prototype,"config");Pe([h({type:Number})],we.prototype,"selectedCount");Pe([h({attribute:!1})],we.prototype,"allowedValues");Pe([h({type:String})],we.prototype,"operationMode");Pe([E()],we.prototype,"_operation");Pe([E()],we.prototype,"_value");Pe([E()],we.prototype,"_pendingTaxonode");Pe([E()],we.prototype,"_opDropdownOpen");let Nu=we;J("sfx-bulk-meta-op-bar",Nu);const qu=new Set(["multi-select","tags","ultratags"]),Qt=new Map;function ba(o,e){return e.sid&&o.get(e.sid)||e.slug&&o.get(e.slug)||e.uuid&&o.get(e.uuid)||void 0}function rn(o){return o!=null&&o.i18n&&Object.keys(o.i18n).length>0?o.i18n:void 0}function xa(o,e){const t=new Map(o??[]);for(const[i,s]of e??[]){const r=rn(t.get(i));if(!r){t.set(i,s);continue}t.set(i,{...s,i18n:{...r,...rn(s)??{}}})}return t}function nn(o,e,t){return!e.regional_variants_group_uuid||o==null||typeof o!="object"||Array.isArray(o)?o:o[t??"en"]}function an(o){return Array.isArray(o)?o:[]}function ln(o){return o==null||o===""||Array.isArray(o)&&o.length===0?!0:typeof o=="object"&&!Array.isArray(o)?!Object.values(o).some(e=>e!=null&&e!==""):!1}function Xs(o,e){var i;const t=(i=o.possible_values)==null?void 0:i.find(s=>s.internal_unique_value===e||s.api_value===e);return(t==null?void 0:t.label)??String(e)}function dn(o,e){if(e==null||e==="")return"";switch(o.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Xs(o,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function cn(o){return typeof o=="string"?o:o&&typeof o=="object"&&"label"in o?String(o.label):String(o)}function Hu(o,e){const t=o.map(cn),i=e.map(cn),s=new Set(t),r=new Set(i),n=[];for(const a of i)n.push({label:a,state:s.has(a)?"kept":"added"});for(const a of t)r.has(a)||n.push({label:a,state:"removed"});return n}function Vu(o,e){return!e||e.size===0?o:o.map(t=>{if(t.i18n)return t;const i=ba(e,t);return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:i.i18n}:t})}function Ku(o,e,t,i,s){const r=ti(o),n=ti(e),a=t||"en",l=i||a,d=k=>k.sid||k.slug||k.uuid||"",p=k=>{const v=k.i18n?k:ba(s,k)??k;return ji({i18n:v.i18n,slug:v.slug||k.slug||""},a,l).value||k.slug||k.sid||""},u=new Set(r.map(d).filter(Boolean)),f=new Set(n.map(d).filter(Boolean)),x=[];for(const k of n){const v=d(k);x.push({label:p(k),state:u.has(v)?"kept":"added"})}for(const k of r){const v=d(k);f.has(v)||x.push({label:p(k),state:"removed"})}return x}function Yu(o,e,t){const i=new Set(o.map(n=>JSON.stringify(n))),s=new Set(e.map(n=>JSON.stringify(n))),r=[];for(const n of e){const a=JSON.stringify(n),l=typeof n=="string"?Xs(t,n):String(n);r.push({label:l,state:i.has(a)?"kept":"added"})}for(const n of o){const a=JSON.stringify(n);if(!s.has(a)){const l=typeof n=="string"?Xs(t,n):String(n);r.push({label:l,state:"removed"})}}return r}function Gu(o,e,t,i,s,r){const n=vt(o,i),a=i==null?void 0:i.language,l=nn(e,o,n),d=nn(t,o,n);if(qu.has(o.type)){if(o.type==="ultratags")return{kind:"array",items:Ku(e,t,a,s,r??Qt)};const p=an(l),u=an(d);return o.type==="tags"?{kind:"array",items:Hu(p,u)}:{kind:"array",items:Yu(p,u,o)}}return{kind:"scalar",oldDisplay:dn(o,l),newDisplay:dn(o,d),oldEmpty:ln(l),newEmpty:ln(d)}}var Wu=Object.defineProperty,Ue=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Wu(e,t,s),s},st;const Fe=(st=class extends W{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._pendingFrontendLookup=Qt,this._knownUltratagsLookupByField=new Map,this._knownUltratagsLookup=Qt,this._keyForFile=e=>e.id,this._renderRow=e=>{const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),s=(i==null?void 0:i.allowedValues)??null,r=(i==null?void 0:i.hidden)??!1;return c`
      <sfx-bulk-meta-row
        .file=${e}
        .field=${this.field}
        .value=${this._getEffectiveValue(e)}
        .taxonomyEntry=${this._getTaxonodeEntry(e)}
        .selected=${this.selected.has(e.id)}
        .pendingOp=${this.pendingOp}
        .config=${this.config}
        .autocomplete=${this.autocomplete}
        .taxonomyService=${this.taxonomyService}
        .ultratags=${this.ultratags}
        .defaultLanguage=${this.defaultLanguage}
        .pendingFrontendLookup=${this._pendingFrontendLookup}
        .knownUltratagsLookup=${this._knownUltratagsLookup}
        .allowedValues=${s}
        .notApplicable=${r}
      ></sfx-bulk-meta-row>
    `}}_recomputePendingFrontendLookup(){var t,i;if(this._knownUltratagsLookup=((t=this.field)==null?void 0:t.key)&&this._knownUltratagsLookupByField.get(this.field.key)||Qt,((i=this.field)==null?void 0:i.type)!=="ultratags"||!this.pendingOp){this._pendingFrontendLookup=Qt;return}const e=new Map;for(const s of ti(this.pendingOp.value))s.sid&&e.set(s.sid,s),s.slug&&e.set(s.slug,s),s.uuid&&e.set(s.uuid,s);if(this._pendingFrontendLookup=e,e.size>0&&this.field.key){const s=xa(this._knownUltratagsLookup,e);this._knownUltratagsLookupByField.set(this.field.key,s),this._knownUltratagsLookup=s}}willUpdate(e){(e.has("pendingOp")||e.has("field"))&&this._recomputePendingFrontendLookup()}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):zs(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return this.files.length<=st.VIRTUALIZE_THRESHOLD?c`${this.files.map(this._renderRow)}`:c`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}},st.styles=[Lu],st.VIRTUALIZE_THRESHOLD=60,st);Ue([h({attribute:!1})],Fe.prototype,"files");Ue([h({attribute:!1})],Fe.prototype,"field");Ue([h({attribute:!1})],Fe.prototype,"staged");Ue([h({attribute:!1})],Fe.prototype,"stagedTaxonodes");Ue([h({attribute:!1})],Fe.prototype,"selected");Ue([h({attribute:!1})],Fe.prototype,"pendingOp");Ue([h({attribute:!1})],Fe.prototype,"config");Ue([h({attribute:!1})],Fe.prototype,"autocomplete");Ue([h({attribute:!1})],Fe.prototype,"taxonomyService");Ue([h({attribute:!1})],Fe.prototype,"ultratags");Ue([h({attribute:!1})],Fe.prototype,"defaultLanguage");Ue([h({attribute:!1})],Fe.prototype,"perFileResolved");let Xu=Fe;J("sfx-bulk-meta-table",Xu);var Zu=Object.defineProperty,me=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Zu(e,t,s),s},ke;const ue=(ke=class extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._liveStageTimer=null,this._onFieldBlur=e=>{e.stopPropagation(),this._cancelLiveStage(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{var s;e.stopPropagation();const t=e.detail.value,i=(s=this.field)==null?void 0:s.type;if(this._cancelLiveStage(),ke._IMMEDIATE_CHANGE_TYPES.has(i)){this._processFieldValue(t);return}ke._LIVE_STAGE_TYPES.has(i)&&(this._liveStageTimer=setTimeout(()=>{this._liveStageTimer=null,this._processFieldValue(t,{silent:!0})},ke._LIVE_STAGE_DELAY_MS))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}shouldUpdate(e){return!(!this.selected&&e.size>0&&[...e.keys()].every(t=>ke._PENDING_PREVIEW_ONLY_KEYS.has(t)))}willUpdate(e){e.has("field")&&(this._error=null),(e.has("field")||e.has("file"))&&this._cancelLiveStage()}disconnectedCallback(){super.disconnectedCallback(),this._cancelLiveStage()}_cancelLiveStage(){this._liveStageTimer!==null&&(clearTimeout(this._liveStageTimer),this._liveStageTimer=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e,{silent:t=!1}={}){const i=Cn(this.field,e,this.config??void 0);if(i){t||(this._error=i);return}this._error=null;const s={meta:{...this.file.meta,[this.field.key]:this.value}},r=lo(this.field,e,s,vt(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:ga(this.field,this.value,e.value,e.operation,vt(this.field,this.config))}_previewTaxonomyEntry(){const e=this.pendingOp;return e&&e.taxonomyEntry!==void 0?e.taxonomyEntry:this.taxonomyEntry}_valueForEditor(){var t;const e=kn(this.field,this.value,vt(this.field,this.config));return((t=this.field)==null?void 0:t.type)!=="ultratags"?e:Vu(e,this.knownUltratagsLookup)}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t;const e=this.file;return c`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?c`<img class="row-thumb" src=${e.previewUrl} alt="" />`:c`<img
              class="row-thumb row-thumb-fallback"
              src=${Qs(this._getExtension(e.name))}
              alt=${C("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${i=>{const s=i.target,r=eo();!s.dataset.fallback&&s.src!==r&&(s.dataset.fallback="1",s.src=r)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?Sa(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?c`<div
                class="row-field-na"
                title=${C("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >
                ${C("fieldNotApplicable","Not applicable for this asset")}
              </div>`:this.pendingOp&&this.selected?c`<sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${this._computePreviewValue()}
                  .oldTaxonomyEntry=${this.taxonomyEntry}
                  .newTaxonomyEntry=${this._previewTaxonomyEntry()}
                  .config=${this.config}
                  .defaultLanguage=${this.defaultLanguage}
                  .pendingFrontendLookup=${this.pendingFrontendLookup}
                  .knownUltratagsLookup=${this.knownUltratagsLookup}
                ></sfx-bulk-meta-diff-view>`:c`<div class="row-field-edit">
                    <sfx-metadata-field-edit
                      .field=${this.field}
                      .value=${this._valueForEditor()}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonomyEntry}
                      .ultratags=${this.ultratags}
                      .language=${(t=this.config)==null?void 0:t.language}
                      .defaultLanguage=${this.defaultLanguage}
                      .allowedValues=${this.allowedValues}
                    ></sfx-metadata-field-edit>
                  </div>
                  ${this._error?c`<div class="row-error" role="alert">${this._error}</div>`:m}`}
        </div>
      </div>
    `}},ke.styles=[Uu],ke._PENDING_PREVIEW_ONLY_KEYS=new Set(["pendingOp","pendingFrontendLookup"]),ke._IMMEDIATE_CHANGE_TYPES=new Set(["tags","ultratags","multi-select"]),ke._LIVE_STAGE_TYPES=new Set(["text","textarea"]),ke._LIVE_STAGE_DELAY_MS=300,ke);me([h({attribute:!1})],ue.prototype,"file");me([h({attribute:!1})],ue.prototype,"field");me([h({attribute:!1})],ue.prototype,"value");me([h({attribute:!1})],ue.prototype,"taxonomyEntry");me([h({type:Boolean})],ue.prototype,"selected");me([h({attribute:!1})],ue.prototype,"pendingOp");me([h({attribute:!1})],ue.prototype,"config");me([h({attribute:!1})],ue.prototype,"autocomplete");me([h({attribute:!1})],ue.prototype,"taxonomyService");me([h({attribute:!1})],ue.prototype,"ultratags");me([h({attribute:!1})],ue.prototype,"defaultLanguage");me([h({attribute:!1})],ue.prototype,"pendingFrontendLookup");me([h({attribute:!1})],ue.prototype,"knownUltratagsLookup");me([h({attribute:!1})],ue.prototype,"allowedValues");me([h({type:Boolean})],ue.prototype,"notApplicable");me([E()],ue.prototype,"_error");let Ju=ue;J("sfx-bulk-meta-row",Ju);var Qu=Object.defineProperty,Ze=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&Qu(e,t,s),s};const Xo=class Xo extends W{constructor(){super(...arguments),this._i18nController=new qe(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:C("added","Added"),removed:C("removed","Removed"),kept:C("kept","Kept")};return c`
      <div class="diff-wrap" aria-label=${C("bulkOperationPreview","Bulk operation preview")}>
        ${e.items.length===0?c`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.items.map(i=>c`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.state==="removed"?c`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=C("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?C("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?C("emptyValue","empty"):e.newDisplay});return c`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${C("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?m:c`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var n,a;const e=((n=this.newTaxonomyEntry)==null?void 0:n.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",i=!t,s=!e,r=C("willChangeFromTo","Will change from {{from}} to {{to}}",{from:i?C("emptyValue","empty"):t,to:s?C("emptyValue","empty"):e});return c`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${C("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${r}</span>
        ${s?m:c`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){var i,s;if(!this.field)return m;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=(i=this.knownUltratagsLookup)!=null&&i.size||(s=this.pendingFrontendLookup)!=null&&s.size?xa(this.knownUltratagsLookup,this.pendingFrontendLookup):void 0,t=Gu(this.field,this.oldValue,this.newValue,this.config,this.defaultLanguage,e);return t.kind==="array"?this._renderArrayDiff(t):this._renderScalarDiff(t)}};Xo.styles=[zu];let Oe=Xo;Ze([h({attribute:!1})],Oe.prototype,"field");Ze([h({attribute:!1})],Oe.prototype,"oldValue");Ze([h({attribute:!1})],Oe.prototype,"newValue");Ze([h({attribute:!1})],Oe.prototype,"oldTaxonomyEntry");Ze([h({attribute:!1})],Oe.prototype,"newTaxonomyEntry");Ze([h({attribute:!1})],Oe.prototype,"config");Ze([h({attribute:!1})],Oe.prototype,"defaultLanguage");Ze([h({attribute:!1})],Oe.prototype,"pendingFrontendLookup");Ze([h({attribute:!1})],Oe.prototype,"knownUltratagsLookup");J("sfx-bulk-meta-diff-view",Oe);function ya(o){let e=o;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var eh=Object.defineProperty,ve=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&eh(e,t,s),s};const pn=3,_a=`
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

  /* --- Mobile bottom sheet ---
     On touch the same overflow sources render as a sheet anchored to the
     bottom of the viewport instead of a menu anchored to the "More" pill: a
     small floating dropdown next to a pill is a mouse-sized target, and on a
     tall phone it can also land under the thumb-unreachable top half. Rows are
     full-width and >=52px so they clear the 44px minimum comfortably. */
  [data-sfx-more-dropdown] .sfx-more-backdrop { position:fixed; inset:0; background:rgba(15,23,42,0.45); z-index:99998; opacity:0; transition:opacity .22s ease; pointer-events:all; }
  [data-sfx-more-dropdown] .sfx-more-backdrop.open { opacity:1; }
  [data-sfx-more-dropdown] .sfx-more-sheet { position:fixed; left:0; right:0; bottom:0; background:#fff; border-radius:18px 18px 0 0; box-shadow:0 -8px 40px rgba(0,0,0,0.18); padding:8px 8px calc(8px + env(safe-area-inset-bottom, 0px)); max-height:72vh; overflow-y:auto; -webkit-overflow-scrolling:touch; z-index:99999; pointer-events:all; transform:translateY(100%); transition:transform .26s cubic-bezier(0.32,0.72,0,1); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
  [data-sfx-more-dropdown] .sfx-more-sheet.open { transform:translateY(0); }
  [data-sfx-more-dropdown] .sfx-more-sheet.dragging { transition:none; }
  [data-sfx-more-dropdown] .sfx-more-sheet:focus { outline:none; }
  /* The grip is a real drag handle, not decoration — see _onSheetPointerDown.
     touch-action:none hands the vertical gesture to us instead of letting the
     sheet's own overflow scrolling eat it. */
  [data-sfx-more-dropdown] .sfx-more-handle { display:block; width:100%; padding:0; border:none; background:none; cursor:grab; touch-action:none; -webkit-tap-highlight-color:transparent; }
  [data-sfx-more-dropdown] .sfx-more-handle:active { cursor:grabbing; }
  [data-sfx-more-dropdown] .sfx-more-grip { width:36px; height:4px; border-radius:2px; background:#cbd5e1; margin:6px auto 10px; }
  [data-sfx-more-dropdown] .sfx-more-sheet-title { font-size:13px; font-weight:600; color:#64748b; padding:0 14px 8px; text-align:left; font-family:inherit; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item { min-height:52px; padding:12px 14px; font-size:15px; gap:14px; border-radius:10px; white-space:normal; text-align:left; }
  /* Touch devices have no hover; the persistent highlight a :hover rule leaves
     behind after a tap reads as a stuck selection. Use :active instead. */
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item:hover { background:none; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item:active { background:#f1f5f9; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item-ico { width:38px; height:38px; border-radius:10px; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item-ico svg { width:19px; height:19px; }

  @media (prefers-reduced-motion: reduce) {
    [data-sfx-more-dropdown] .sfx-more-sheet { transition:none; transform:translateY(0); }
    [data-sfx-more-dropdown] .sfx-more-backdrop { transition:none; opacity:1; }
  }
`,th=260,ih=80;let Gt;function sh(){if(Gt!==void 0)return Gt;try{const o=new CSSStyleSheet;o.replaceSync(_a),Gt=o}catch{Gt=null}return Gt}var ot;const he=(ot=class extends W{constructor(){super(...arguments),this.t=De,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=pn,this._touch=!1,this._dragCounter=0,this._unsubscribeTouch=null,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&pa(t).then(({files:i,hadDirectories:s})=>{i.length>0?this._emitFiles(i,s):s&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const s of i){const r=s.webkitRelativePath;r&&Co(s,r)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var s;if(!this.isConnected||this.offsetWidth===0)return;const t=(s=e.clipboardData)==null?void 0:s.items;if(!t)return;const i=[];for(const r of t)if(r.kind==="file"){const n=r.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._returnFocusTo=null,this._inertedSiblings=[],this._lockedScrollHost=null,this._exitingPortal=null,this._onSheetKeyDown=e=>{if(e.key==="Escape"){e.stopPropagation(),this._closeMore();return}if(e.key!=="Tab")return;const t=e.currentTarget,i=t.querySelectorAll("button:not([disabled])");if(i.length===0)return;const s=i[0],r=i[i.length-1],n=t.getRootNode().activeElement;e.shiftKey&&(n===s||n===t)?(e.preventDefault(),r.focus()):!e.shiftKey&&n===r&&(e.preventDefault(),s.focus())},this._sheetDrag=null,this._onSheetPointerDown=e=>{var s;const t=e.currentTarget,i=t.closest(".sfx-more-sheet");if(!(!i||this._sheetDrag)){this._sheetDrag={pointerId:e.pointerId,startY:e.clientY,sheet:i,handle:t};try{(s=t.setPointerCapture)==null||s.call(t,e.pointerId)}catch{}window.addEventListener("pointermove",this._onSheetPointerMove),window.addEventListener("pointerup",this._onSheetPointerUp),window.addEventListener("pointercancel",this._onSheetPointerUp)}},this._onSheetPointerMove=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;const i=e.clientY-t.startY;if(i<=0){t.sheet.style.transform="";return}t.sheet.classList.add("dragging"),t.sheet.style.transform=`translateY(${i}px)`},this._onSheetPointerUp=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;this._endSheetDrag();const i=e.clientY-t.startY;t.sheet.classList.remove("dragging"),t.sheet.style.transform="",e.type!=="pointercancel"&&i>ih&&this._closeMore()},this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}get _folderEnabled(){return this.directory&&this.multi&&yn()}browse(e="files"){var t;if(e==="folder"&&this._folderEnabled&&this.folderInput){this.folderInput.click();return}(t=this.fileInput)==null||t.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_closeMore(){this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())}_updateDropdownPortal(){var e;if(this._moreOpen){const t=this.sources.slice(this._visiblePills),i=((e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-sheet"))!=null;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),ya(this).appendChild(this._portalContainer),this._injectDropdownStyles());const s=t.map(r=>c`
          <button class="sfx-more-item" @click=${n=>this._onMoreItemClick(r,n)}>
            <div class="sfx-more-item-ico">
              ${r.brandHtml?mt(r):r.iconColor?c`<svg viewBox="0 0 24 24" ${Z({color:r.iconColor})}>
                      ${et(r.icon)}
                    </svg>`:G`<svg viewBox="0 0 24 24">${et(r.icon)}</svg>`}
            </div>
            ${r.labelKey?this.t(r.labelKey,r.label):r.label}
          </button>
        `);if(this._touch){const r=this.t("importFrom","Import from"),n=this._backgroundLockable();tt(c`
            <div class="sfx-more-backdrop" @click=${()=>this._closeMore()}></div>
            <div
              class="sfx-more-sheet"
              role="dialog"
              aria-modal=${n?"true":m}
              aria-label=${r}
              tabindex="-1"
              @keydown=${this._onSheetKeyDown}
            >
              <button
                type="button"
                class="sfx-more-handle"
                aria-label=${this.t("close","Close")}
                @click=${()=>this._closeMore()}
                @pointerdown=${this._onSheetPointerDown}
              >
                <div class="sfx-more-grip"></div>
              </button>
              <div class="sfx-more-sheet-title">${r}</div>
              ${s}
            </div>
          `,this._portalContainer),i||(this._lockBackground(),this._captureReturnFocus()),requestAnimationFrame(()=>{var a;(a=this._portalContainer)==null||a.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(l=>l.classList.add("open")),i||this._focusSheet()})}else this._unlockBackground(),tt(c`<div class="sfx-more-dropdown open">${s}</div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._teardownPortal({animate:!0})}_backgroundLockable(){return typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype}_lockBackground(){const e=this._portalContainer;if(!e||this._lockedScrollHost)return;const t=e.parentElement;if(t&&this._backgroundLockable())for(const s of Array.from(t.children))s===e||!(s instanceof HTMLElement)||s.inert||(s.inert=!0,this._inertedSiblings.push(s));const i=t===document.body?document.documentElement:t;i instanceof HTMLElement&&(this._lockedScrollHost={el:i,overflow:i.style.overflow},i.style.overflow="hidden")}_unlockBackground(){for(const e of this._inertedSiblings)e.inert=!1;this._inertedSiblings=[],this._lockedScrollHost&&(this._lockedScrollHost.el.style.overflow=this._lockedScrollHost.overflow,this._lockedScrollHost=null)}_captureReturnFocus(){var t;const e=((t=this.shadowRoot)==null?void 0:t.activeElement)??document.activeElement;this._returnFocusTo=e&&typeof e.focus=="function"?e:null}_focusSheet(){var i,s;const e=(i=this._portalContainer)==null?void 0:i.querySelector(".sfx-more-sheet");(s=(e==null?void 0:e.querySelector(".sfx-more-item"))??e)==null||s.focus()}_restoreFocus(){const e=this._returnFocusTo;this._returnFocusTo=null,e!=null&&e.isConnected&&e.focus()}_teardownPortal({animate:e}){this._unlockBackground(),this._reapExitingPortal();const t=this._portalContainer;if(!t)return;this._portalContainer=null;const i=t.querySelector(".sfx-more-sheet");if(!e||!i||Ma()){tt(m,t),t.remove(),this._restoreFocus();return}t.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(s=>s.classList.remove("open")),t.style.pointerEvents="none",this._exitingPortal={el:t,timer:setTimeout(()=>this._reapExitingPortal(),th)},this._restoreFocus()}_reapExitingPortal(){const e=this._exitingPortal;e&&(this._exitingPortal=null,clearTimeout(e.timer),tt(m,e.el),e.el.remove())}_endSheetDrag(){var t,i;const e=this._sheetDrag;if(this._sheetDrag=null,window.removeEventListener("pointermove",this._onSheetPointerMove),window.removeEventListener("pointerup",this._onSheetPointerUp),window.removeEventListener("pointercancel",this._onSheetPointerUp),!!e)try{(i=(t=e.handle).releasePointerCapture)==null||i.call(t,e.pointerId)}catch{}}_injectDropdownStyles(){var r;const e=(r=this._portalContainer)==null?void 0:r.getRootNode();if(!e)return;const t=sh();if(t&&Array.isArray(e.adoptedStyleSheets)){if(e.adoptedStyleSheets.includes(t))return;e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}const i=e instanceof Document?e.head:e;if(!i||i.querySelector("style[data-sfx-more-dropdown-styles]"))return;const s=document.createElement("style");s.setAttribute("data-sfx-more-dropdown-styles",""),s.textContent=_a,i.appendChild(s)}_positionDropdown(){var u,f;const e=(u=this.shadowRoot)==null?void 0:u.querySelector(".more-wrap > button"),t=(f=this._portalContainer)==null?void 0:f.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),s=8,r=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=r+s||a>l?t.style.top=`${i.top-r-s}px`:t.style.top=`${i.bottom+s}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=pn}connectedCallback(){super.connectedCallback(),this._touch=ze(),this._unsubscribeTouch=so(()=>{this._touch=ze(),this._moreOpen&&this._updateDropdownPortal()}),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var s;const i=(((s=e[0])==null?void 0:s.contentRect.width)??this.getBoundingClientRect().width)>=ot._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._endSheetDrag(),this._moreOpen=!1,this._teardownPortal({animate:!1})}_renderPill(e){return c`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?mt(e):c`<span class="pill-ico" ${Z(e.iconColor?{color:e.iconColor}:null)}>
              ${G`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${et(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return c`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?c`<span class="card-ico">${mt(e)}</span>`:c`<span class="card-ico" ${Z(e.iconColor?{color:e.iconColor}:null)}>
              ${G`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${et(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return c`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="src-card" @click=${e=>this._toggleMore(e)}>
          <span class="card-ico muted">
            <svg class="fill-icon" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">${this.t("more","More")}</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return c`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}_renderTitle(){return this._touch?c`<div class="title">${this.t("tapToUploadFiles","Tap to upload files")}</div>`:!this.compact&&this._folderEnabled?c`<div class="title">
        ${this.t("dragDropClickTo","Drag & Drop, click to")}
        <span>${this.t("browse","browse")}</span>
        ${this.t("orUploadFolderPrefix","or upload a ")}<button
          type="button"
          @click=${e=>{e.stopPropagation(),this.browse("folder")}}
        >
          ${this.t("uploadFolder","folder")}
        </button>
      </div>`:c`<div class="title">
      ${this.t("dragAndDrop","Drag & Drop or click to")}
      <span>${this.t("browse","browse")}</span>
    </div>`}_renderPrimaryCta(){return c`
      <button
        class="primary-cta"
        type="button"
        @click=${e=>{e.stopPropagation(),this.browse()}}
      >
        ${this.multi?this.t("chooseFiles","Choose files"):this.t("chooseFile","Choose file")}
      </button>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":"",this._touch?"touch":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills),s=this._touch&&!this.compact;return c`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role=${s?m:"button"}
          tabindex=${s?m:"0"}
          aria-label=${s?m:this.t("dropFilesHere","Drop files here or click to browse")}
          @click=${this._onClick}
          @keydown=${s?m:this._onKeyDown}
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

          ${s?this._renderPrimaryCta():this._renderTitle()}
          ${!this.compact&&this.sources.length>0?c`
                <div class="import-divider">
                  <span>${this.t("orImportFrom","or import from")}</span>
                </div>
                ${this.sourcesLayout==="cards"?c`
                      <div class="sources-cards">
                        ${t.map(r=>this._renderCard(r))}
                        ${i.length>0?this._renderMoreCard():m}
                      </div>
                    `:c`
                      <div class="sources-grid">
                        ${t.map(r=>this._renderPill(r))}
                        ${i.length>0?this._renderMoreDropdown():m}
                      </div>
                    `}
              `:m}
          ${this.compact&&this.sources.length>0?c`
                <div class="sources-row">
                  ${this.sources.map(r=>c`
                      <button
                        class="src-ico"
                        ${Z(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        data-tip=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        aria-label=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${n=>{n.stopPropagation(),this._onSourceIconClick(r)}}
                      >
                        ${r.brandHtml?mt(r):G`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${et(r.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:m}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||m}
          @change=${this._onFileChange}
        />
        ${this._folderEnabled?c`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:m}
      </div>
    `}},ot.styles=j`
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: auto;
      transition: background 0.22s;
      flex: 1;
    }

    :host([mode='inline']) .drop-zone {
      height: 100%;
    }

    /* Inner clickable content area — only this triggers file browse on click */
    .dz-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      padding: 50px 40px;
      /* The card is a centred (not stretched) flex item, so without these it is
         sized by its content *plus* 80px of horizontal padding — which is wider
         than the zone holding it once the viewport drops to ~320px, and the
         overflow lands in .drop-zone's scroller. Capping at the parent's width
         with border-box makes the padding shrink the content instead. */
      max-width: 100%;
      box-sizing: border-box;
      border-radius: 12px;
      user-select: none;
      background: var(--sfx-up-bg, #fff);
      position: relative;
      outline: none;
      transition: background 0.22s;
    }

    .dz-content:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over .dz-content {
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
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
      animation: compactIn 0.3s ease both;
    }

    .drop-zone.compact .dz-content {
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      background: none;
      border-radius: 0;
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
      overflow: visible;
    }

    .drop-zone:not(.compact) .rings::before {
      content: '';
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

    .dz-content:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      /* Match the icon's 24px bottom margin so the title has equal breathing
         room above (icon → title) and below (title → divider). */
      margin-bottom: 24px;
      transition:
        font-size 0.3s,
        margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    /* "folder" link merged into the title — styled like the "browse" span. */
    .title button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }
    .title button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    .folder-pick {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
      transition: opacity 0.15s;
    }
    .folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }
    .compact .folder-pick {
      display: none;
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
      content: '';
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
      background: #fff;
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
      max-width: 760px;
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
      max-width: 140px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 8px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 140px;
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

    .src-card .card-ico.muted {
      color: var(--sfx-up-text-muted, #94a3b8);
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
      font-size: 10px;
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
    .src-card .brand-ico--transparent {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico--transparent svg {
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
      background: #fff;
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
    input[type='file'] {
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
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) {
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
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .rings {
      width: 140px;
      height: 140px;
      margin-bottom: 28px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .core {
      width: 68px;
      height: 68px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .core svg {
      width: 30px;
      height: 30px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .title {
      font-size: 22px;
      margin-bottom: 8px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .subtitle {
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
      /* 50px/40px is most of a 320px viewport's width and a third of its
         height. Applies to a narrow desktop window too, not just touch — the
         .touch block further down tightens it again for phones. */
      .drop-zone:not(.compact) .dz-content {
        padding: 28px 16px;
      }
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }

    /* --- Touch-primary overrides ---
       Keyed on the .touch class (set from the (hover:none) and (pointer:coarse)
       media query), not on width: a narrow desktop window is still a mouse, and
       a tablet is still a finger. Last in the sheet so these win over the
       width-based blocks above. */
    .drop-zone.touch:not(.compact) {
      padding: 16px 12px;
    }
    /* Top-align the content in inline mode. The zone stretches to fill its
       host and centres what is inside it, which reads well when the zone IS
       the surface — but inline mode stacks it under a host-supplied header
       (title, description), and there all the leftover height collects above
       the icon, pushing the real controls toward the middle of the screen
       behind a band of empty space. On desktop there is enough height for
       that to look deliberate; on a phone it just looks broken. Inline only:
       in modal mode the zone is the whole sheet, where centring is right. */
    :host([mode='inline']) .drop-zone.touch:not(.compact) {
      justify-content: flex-start;
    }
    /* Fill the zone rather than hugging the content, and drop the roomy desktop
       padding: 100px of vertical padding is most of a small phone's screen.
       (The overflow itself is handled by max-width/box-sizing on the base
       .dz-content rule, which a narrow desktop window needs just as much.) */
    .drop-zone.touch:not(.compact) .dz-content {
      width: 100%;
      padding: 20px 16px;
    }
    /* The outer dotted ring reads as "drop target", which means nothing without
       a pointer — and the whole illustration costs vertical space that a phone
       needs for the actual controls. Drop the ring, shrink the rest. */
    .drop-zone.touch:not(.compact) .ring {
      display: none;
    }
    .drop-zone.touch:not(.compact) .rings {
      width: 72px;
      height: 72px;
      margin-bottom: 16px;
    }
    .drop-zone.touch:not(.compact) .core {
      width: 56px;
      height: 56px;
    }
    .drop-zone.touch:not(.compact) .core svg {
      width: 24px;
      height: 24px;
    }
    .drop-zone.touch:not(.compact) .title {
      font-size: 17px;
      margin-bottom: 4px;
    }
    /* Filled primary CTA — the one control on the touch layout that must read
       as the main action. Deliberately heavier than the outline source pills
       below it so the hierarchy is legible at a glance. */
    .drop-zone.touch:not(.compact) .primary-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      /* Matches .import-divider's cap. Touch-primary is not phone-only — an
         iPad Pro in landscape is 1194px, where an uncapped 100% button renders
         ~670px wide and visibly overhangs the 420px divider beneath it. */
      max-width: 420px;
      min-height: 48px;
      margin-bottom: 16px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: none;
      border-radius: 50px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-family: inherit;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.2;
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
      transition: background 0.15s ease;
    }
    /* No hover on touch — :active is the only state that can actually fire.
       Falls through to --sfx-up-primary-hover, the theme's darkened shade: it
       is derived from --sfx-up-primary via color-mix (see the @supports block
       in sfx-uploader), so a host that themes --primary gets a pressed state
       in its own hue instead of a blue flash. --sfx-up-primary-active is not
       defined by the theme — it exists purely as an override hook for a host
       that wants the pressed shade to differ from the hover one. */
    .drop-zone.touch:not(.compact) .primary-cta:active {
      background: var(--sfx-up-primary-active, var(--sfx-up-primary-hover, #1d4ed8));
    }
    .drop-zone.touch:not(.compact) .primary-cta:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    /* The divider's own 420px cap is lifted to 100% by the @media (max-width:
       768px) block above, which predates the CTA. Without restoring it here
       the three stacked elements disagree between ~477px and 768px — an iPad
       mini in portrait (744px) draws a 688px rule across a 420px button and a
       420px grid. Re-cap it so the column lines up at every touch width. */
    .drop-zone.touch:not(.compact) .import-divider {
      max-width: 420px;
    }
    /* Two-up grid instead of centred wrapping. Free-flowing flex-wrap breaks
       to one pill per row as soon as the row overflows by a few pixels — on a
       390px phone "My Device / Camera / More" misses by ~20px and stacks into
       three full-height rows. A fixed two-column grid is predictable at every
       width, and an odd trailing item spans the full row instead of sitting
       lonely at 50%. */
    .drop-zone.touch:not(.compact) .sources-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      width: 100%;
      /* Same cap as the CTA and the divider — see the note on .primary-cta. */
      max-width: 420px;
    }
    .drop-zone.touch:not(.compact) .sources-grid > *:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
    .drop-zone.touch:not(.compact) .more-wrap {
      width: 100%;
    }
    /* >=44px tap targets; the width-based rules above shrink pills to ~35px. */
    .drop-zone.touch .src-pill,
    .drop-zone.touch .more-pill {
      width: 100%;
      justify-content: center;
      padding: 12px 18px;
      font-size: 14px;
      height: auto;
      min-height: 44px;
    }
    /* Touch has no hover — a :hover rule leaves the last-tapped pill stuck in
       the highlighted state until something else steals focus. */
    .drop-zone.touch .src-pill:hover,
    .drop-zone.touch .more-pill:hover {
      border-color: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text-secondary, #475569);
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      transform: none;
    }
    .drop-zone.touch .src-pill:active,
    .drop-zone.touch .more-pill:active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    ${Ee}
  `,ot._WIDE_THRESHOLD_PX=1200,ot);ve([h({attribute:!1})],he.prototype,"t");ve([h({type:Boolean,reflect:!0})],he.prototype,"compact");ve([h({type:Boolean,attribute:"external-drag-over"})],he.prototype,"externalDragOver");ve([h({type:String})],he.prototype,"accept");ve([h({type:Boolean})],he.prototype,"multi");ve([h({type:Boolean})],he.prototype,"directory");ve([h({type:Array})],he.prototype,"sources");ve([h({type:String,attribute:"sources-layout"})],he.prototype,"sourcesLayout");ve([h({type:String,reflect:!0})],he.prototype,"mode");ve([E()],he.prototype,"_dragOver");ve([E()],he.prototype,"_moreOpen");ve([E()],he.prototype,"_visiblePills");ve([E()],he.prototype,"_touch");ve([Xi(".ripple")],he.prototype,"_rippleEl");ve([Xi("input[data-sfx-dz-files]")],he.prototype,"fileInput");ve([Xi("input[data-sfx-dz-folder]")],he.prototype,"folderInput");let oh=he;const Zo=class Zo extends W{constructor(){super(...arguments),this._i18nController=new Ta(this)}render(){return c`
      <div class="line"></div>
      <div class="label">${ft("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Zo.styles=j`
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
  `;let Zs=Zo;var rh=Object.defineProperty,te=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&rh(e,t,s),s};const Js=new CSSStyleSheet;Js.replaceSync(`
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
`);const Jo=class Jo extends W{constructor(){super(...arguments),this.t=De,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this.namingViolationIds=new Set,this._moreOpen=!1,this._dropTileMaxVisible=3,this._touch=!1,this._portalContainer=null,this._unsubscribeTouch=null,this._outsideClickHandler=e=>{var s;if((s=this._portalContainer)!=null&&s.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?this._touch?2:1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}get _folderEnabled(){return this.directory&&this.multi&&yn()}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const s of i){const r=s.webkitRelativePath;r&&Co(s,r)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){this._onDropTileClick();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),ya(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),tt(c`<div class="sfx-tile-dropdown">
        ${e.map(t=>c`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${Z(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?mt(t):G`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${et(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var u;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),s=6,r=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=r+s||a>l?t.style.top=`${i.top-r-s}px`:t.style.top=`${i.bottom+s}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_closePortal(){this._portalContainer&&(tt(m,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Js)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Js]))}connectedCallback(){super.connectedCallback(),this._touch=ze(),this._unsubscribeTouch=so(()=>{this._touch=ze(),this._updateDropTileMaxVisible()}),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTileText(){return this._touch?this.t("addMoreFiles","Add more files"):c`${this.t("dropOrClickTo","Drop or click to")}
      <span>${this.t("browse","browse")}</span>`}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return c`
      <div class="drop-tile ${this._touch?"touch":""}" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
          <div class="drop-tile-rings">
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-core">
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
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">${this._renderDropTileText()}</div>
          ${this._folderEnabled?c`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:m}
          ${t.length>0?c`
                <div class="drop-tile-sources">
                  ${t.map(s=>c`
                      <button
                        class="drop-tile-src"
                        ${Z(s.iconColor&&!s.brandHtml?{color:s.iconColor}:null)}
                        title=${s.labelKey?this.t(s.labelKey,s.label):s.label}
                        aria-label=${s.labelKey?this.t(s.labelKey,s.label):s.label}
                        @click=${r=>this._onSourceClick(r,s)}
                      >
                        ${s.brandHtml?mt(s):G`<svg viewBox="0 0 24 24" class=${s.fillIcon?"fill-icon":""}>${et(s.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?c`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            aria-label=${this.t("moreSources","More sources")}
                            @click=${s=>this._toggleMore(s)}
                          >
                            ···
                          </button>
                        </div>
                      `:m}
                </div>
              `:m}
        </div>
        <input
          data-sfx-fl-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||m}
          @change=${this._onFileInput}
        />
        ${this._folderEnabled?c`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:m}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(s=>s.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(r=>this.searchResults.has(r)).length,i=e?Math.round(t/e*100):0,s=e>0&&t===e;return c`
      ${e>1&&!this.previewOpen?c`
            <div class="similar-banner search">
              ${s?c`<span class="search-done-ico"
                    ><svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" /></svg
                  ></span>`:c`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b
                  >${s?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${Z({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${s?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:m}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():m}
        ${Ot(this.files,r=>r.id,(r,n)=>{const a=this.searchResults.get(r.id);return c`<sfx-file-item
              .t=${this.t}
              .store=${this.store}
              .fileId=${r.id}
              .file=${r}
              .mode=${this.mode}
              .allowRename=${this.allowRename}
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
              .showCheckSimilar=${this.showCheckSimilar}
              .selectMode=${this.selectMode}
              .isSelected=${this.selectedIds.has(r.id)}
              .selectionActive=${this.selectedIds.size>0}
              .selectionFull=${this.selectionFull}
              .previewOpen=${this.previewOpen}
              .similarStatus=${this._statusFor(r.id)}
              .similarCount=${(a==null?void 0:a.length)??-1}
              .similarResults=${a??[]}
              .namingViolation=${this.namingViolationIds.has(r.id)}
              ${Z({"--tile-index":String(n)})}
            ></sfx-file-item>`})}
      </div>
    `}};Jo.styles=j`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      /* Keep a flick that runs past the end of the list inside the list.
         Without this the scroll chains to the host page behind the modal,
         which on touch drags the page under a full-screen modal and briefly
         exposes it. */
      overscroll-behavior: contain;
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
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 224px), 1fr));
      gap: 12px;
      padding: 4px var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    /* Instruction / progress banner. Sticky to the top of the scrolling grid so
       it stays reachable (Select all / Check / Cancel / progress) when there are
       many assets and the list is long. Two-layer background so the banner
       stays fully opaque even when the host project sets --accent to a
       translucent colour: solid bg underneath, primary tint on top. z-index
       must clear in-tile overlays (max z-index inside a tile is 11). */
    .similar-banner {
      position: sticky;
      top: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 var(--sfx-grid-pad-r, 8px) 12px var(--sfx-grid-pad-l, 16px);
      padding: 8px 16px;
      border-radius: 10px;
      background-color: var(--sfx-up-bg, #fff);
      background-image: linear-gradient(
        var(--sfx-up-primary-bg, #eff6ff),
        var(--sfx-up-primary-bg, #eff6ff)
      );
      border: 1px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .similar-banner-ico {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .similar-banner-ico svg {
      width: 16px;
      height: 16px;
    }

    .similar-banner-txt {
      flex: 1;
      min-width: 0;
    }
    .similar-banner-txt b {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #37414b;
    }
    .similar-banner-txt span {
      font-size: 12px;
      font-weight: 400;
      color: #5b6e82;
    }

    .similar-select-count {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 24px;
      padding: 0 8px;
      border-radius: 999px;
      background: var(--sfx-up-surface, #eef2ff);
      color: var(--sfx-up-primary, #2563eb);
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
    }
    .similar-select-count.full {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .similar-select-all {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
    }

    .similar-select-all input {
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      margin: 0;
      border: none;
      border-radius: 6px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: inset 0 0 0 1.5px #ccd6de;
      cursor: pointer;
      position: relative;
      top: 1px;
      transition:
        background-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .similar-select-all input:checked {
      background: var(--sfx-up-primary, #2563eb);
      box-shadow: inset 0 0 0 1.5px var(--sfx-up-primary, #2563eb);
    }

    .similar-select-all input:checked::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 3.5px;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* --- Similarity search progress banner --- */
    .search-ring {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      border-top-color: var(--sfx-up-primary, #2563eb);
      animation: simBannerSpin 0.7s linear infinite;
    }

    @keyframes simBannerSpin {
      to {
        transform: rotate(360deg);
      }
    }

    .search-done-ico {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--sfx-up-success, #16a34a);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .search-done-ico svg {
      width: 14px;
      height: 14px;
    }

    .search-bar {
      height: 6px;
      border-radius: 3px;
      background: var(--sfx-up-bg, #fff);
      overflow: hidden;
      margin-top: 7px;
    }
    .search-bar-fill {
      height: 100%;
      border-radius: 3px;
      background: var(--sfx-up-primary, #2563eb);
      transition: width 0.3s ease;
    }

    .search-cancel {
      flex: 0 0 auto;
      height: 32px;
      padding: 0 14px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-secondary, #475569);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .search-cancel:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
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
        padding: 4px 12px 16px;
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
       container-type lets the inner rings/icon scale with tile width via cqi.
       Padding-block gives the rings breathing room so they never hug the
       top edge even when the cell is short. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 14px 8px 6px;
      box-sizing: border-box;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — natural height stays close to the file-card .info area.
       Bottom padding is trimmed so the preview has more room for the rings
       when the cell is short. */
    .drop-tile-info {
      padding: 8px 12px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    /* Rings scale with tile width (cqi) and shrink if the preview area is
       too short — that's why we drop flex-shrink and use max-height. */
    .drop-tile-rings {
      width: clamp(40px, 22cqi, 100px);
      height: clamp(40px, 22cqi, 100px);
      max-height: 100%;
      aspect-ratio: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
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
      to {
        transform: rotate(360deg);
      }
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

    .drop-tile-folder-pick {
      font-size: clamp(11px, 3cqi, 13px);
      color: var(--sfx-up-text-muted, #94a3b8);
      text-align: center;
      margin-top: 2px;
    }
    .drop-tile-folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color 0.15s;
    }
    .drop-tile-folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
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
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
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

    input[type='file'] {
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

    /* --- Touch-primary drop tile ---
       Keyed on the .touch class (set from the (hover:none) and (pointer:coarse)
       probe), not on width: a narrow desktop window is still a mouse. Last in
       the sheet so it wins over the width-based blocks above.

       The spinning rings illustration says "drop target", which means nothing
       without a pointer, and it is the single most expensive thing on the tile
       vertically — ~120px of a phone screen spent on decoration, pushing the
       real file cards below the fold. Drop it and let the source buttons (My
       Device leading) be the affordance. */
    .drop-tile.touch .drop-tile-preview {
      display: none;
    }
    /* No preview to absorb the leftover height any more, so centre the info
       block: at <=440px the grid is one column and the tile is exactly as tall
       as its content, but at 441-768px it sits beside a file card and stretches
       to that row's height. */
    .drop-tile.touch {
      justify-content: center;
    }
    .drop-tile.touch .drop-tile-info {
      padding: 14px 12px 16px;
      gap: 10px;
    }
    .drop-tile.touch .drop-tile-text {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }
    .drop-tile.touch .drop-tile-sources {
      margin-top: 0;
    }
    /* >=44px tap targets even above 440px, where the width-based block above
       does not apply but the finger is the same size. */
    .drop-tile.touch .drop-tile-src,
    .drop-tile.touch .drop-tile-more {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }
    /* Touch has no hover — the highlight a :hover rule leaves behind after a
       tap reads as a stuck selection. */
    .drop-tile.touch .drop-tile-src:hover,
    .drop-tile.touch .drop-tile-more:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      transform: none;
      box-shadow: none;
    }
    .drop-tile.touch .drop-tile-src:active,
    .drop-tile.touch .drop-tile-more:active {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    ${Ee}
  `;let Y=Jo;te([h({attribute:!1})],Y.prototype,"t");te([h({attribute:!1})],Y.prototype,"files");te([h({attribute:!1})],Y.prototype,"store");te([h({type:Boolean})],Y.prototype,"showDropTile");te([h({attribute:!1})],Y.prototype,"sources");te([h({type:String})],Y.prototype,"accept");te([h({type:Boolean})],Y.prototype,"multi");te([h({type:Boolean})],Y.prototype,"directory");te([h({type:Boolean})],Y.prototype,"allowRename");te([h({type:String})],Y.prototype,"mode");te([h({type:Boolean})],Y.prototype,"showLocateButton");te([h({type:Boolean})],Y.prototype,"showCopyCdnButton");te([h({type:Boolean})],Y.prototype,"showCheckSimilar");te([h({type:Boolean})],Y.prototype,"selectMode");te([h({attribute:!1})],Y.prototype,"selectedIds");te([h({type:Boolean})],Y.prototype,"allSelected");te([h({type:Boolean})],Y.prototype,"selectionFull");te([h({type:Number})],Y.prototype,"maxSelection");te([h({type:Boolean})],Y.prototype,"previewOpen");te([h({attribute:!1})],Y.prototype,"searchRunIds");te([h({attribute:!1})],Y.prototype,"searchActiveIds");te([h({attribute:!1})],Y.prototype,"searchResults");te([h({attribute:!1})],Y.prototype,"namingViolationIds");te([E()],Y.prototype,"_moreOpen");te([E()],Y.prototype,"_dropTileMaxVisible");te([E()],Y.prototype,"_touch");var nh=Object.defineProperty,oe=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&nh(e,t,s),s};const Qo=class Qo extends W{constructor(){super(...arguments),this.t=De,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this.namingViolation=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let s=e.right+12;s+t>window.innerWidth-8&&(s=e.left-t-12),this._simPopLeft=Math.max(8,s),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),s=140;this._tipLeft=Math.max(s+8,Math.min(i.left+i.width/2,window.innerWidth-s-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var s;i.some(r=>r.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(s=this._io)==null||s.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",s=e.status==="complete"&&!!e.alreadyExisted;return i||s}_maybeProbeDims(){var i,s;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const r=new Image;r.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${r.naturalWidth}×${r.naturalHeight}`)},r.src=t}else if((s=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&s.info){const r=e.response.file.info;r.img_w&&r.img_h&&(this._dims=`${r.img_w}×${r.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,s,r,n;e.stopPropagation();const t=(n=(r=(s=(i=this._file)==null?void 0:i.response)==null?void 0:s.file)==null?void 0:r.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var $,S,_;const e=this._file;if(!e)return m;const t=Ie(e),i=e.status==="complete",s=e.status==="uploading",r=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",d=l||this.reviewPick||!this.allowRename,p=gu(e.name),u=t==="image"&&!Qe(e.type),f=this.selectMode&&u&&!l,x=this.similarCount>=0,k=f&&!x&&!i&&this.similarStatus==="",v=!l&&!i&&!s&&!r&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,P=v,T=["tile",i?"done":"",s?"uploading":"",r?"paused":"",a?"rejected":"",this.namingViolation?"naming-violation":"",l?"review":"",k?"selectable":"",k&&this.isSelected?"selected":"",this.selectionActive&&!u&&!l?"select-dimmed":"",P?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return c`
      <div
        class=${T}
        tabindex="0"
        title=${this.namingViolation?this.t("namingConventionMismatchTooltip","This filename doesn't match the naming convention required for this project."):m}
        @click=${this.reviewPick?this._reviewSelect:k?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?c`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:c`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Qs(p)}
                    alt="${p?this.t("extFile","{{ext}} file",{ext:p}):this.t("file","File")}"
                    @error=${y=>{const A=y.target,F=eo();!A.dataset.fallback&&A.src!==F&&(A.dataset.fallback="1",A.src=F)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?c`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:m}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?c`
                  <span class="sim-result-badge">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar","{{count}} similar",{count:this.similarCount})}
                  </span>
                `:c`<span class="sim-result-badge none"
                  >${this.t("noSimilar","No similar")}</span
                >`:m}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${k?c`
                <span
                  class="similar-cb ${this.isSelected?"checked":""} ${this.selectionFull&&!this.isSelected?"disabled":""}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected?"true":"false"}
                  aria-disabled=${this.selectionFull&&!this.isSelected?"true":"false"}
                  aria-label=${this.t("selectImage","Select image")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              `:m}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${v?c`
                <div class="center-actions">
                  <button
                    class="preview-btn"
                    @click=${this._preview}
                    aria-label=${this.t("details","Details")}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span class="cs-label">${this.t("details","Details")}</span>
                  </button>
                  ${this.similarCount>0?c`
                        <button
                          class="check-similar-btn"
                          @click=${this._openResults}
                          @mouseenter=${this._simPopoverShow}
                          @mouseleave=${this._simScheduleHide}
                          aria-label=${this.t("viewSimilar","View similar assets")}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.2"
                            stroke-linecap="round"
                          >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          <span class="cs-label"
                            >${this.t("viewNSimilar","View {{count}} similar",{count:this.similarCount})}</span
                          >
                        </button>
                      `:this.similarCount===0?c`
                          <button
                            class="check-similar-btn no-similar"
                            @click=${this._openResults}
                            aria-label=${this.t("noSimilarFound","No similar assets found")}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            >
                              <circle cx="11" cy="11" r="7" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <span class="cs-label">${this.t("noSimilar","No similar")}</span>
                          </button>
                        `:this.showCheckSimilar&&u?c`
                            <button
                              class="check-similar-btn"
                              @click=${this._checkSimilarSingle}
                              aria-label=${this.t("checkSimilar","Check similar")}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.2"
                                stroke-linecap="round"
                              >
                                <circle cx="11" cy="11" r="7" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              </svg>
                              <span class="cs-label"
                                >${this.t("checkSimilar","Check similar")}</span
                              >
                            </button>
                          `:m}
                </div>
              `:m}

          <!-- Locate / Copy-CDN hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Shown on any completed tile (the single-view upload list and the
               review screen) that has a response.file and the host enabled the
               feature. Each inner button has its own gate — Locate needs uuid,
               Copy CDN needs url.cdn — so an already-existed-but-missing-uuid
               edge case won't render a dead button. The outer gate mirrors the
               two inner gates so we never render (and hover-reveal) an empty
               overlay when neither button qualifies. -->
          ${i&&(($=e.response)!=null&&$.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&((S=e.response.file.url)!=null&&S.cdn))?c`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?c`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${vn}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:m}
                  ${this.showCopyCdnButton&&((_=e.response.file.url)!=null&&_.cdn)?c`<button
                        class="review-action primary ${this._copied?"copied":""}"
                        @click=${this._copyCdn}
                        title=${this.t("copyCdn","Copy CDN")}
                        aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}
                      >
                        ${this._copied?c`<svg viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>`:c`<svg viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:m}
                </div>
              `:m}

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
          ${i?c`<div class="done-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:m}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&n?c`<div
                class="failed-badge"
                title=${e.error||this.t("uploadFailed","Upload failed")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </div>`:m}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?c`
                <div class="progress">
                  <div
                    class="progress-fill"
                    ${Z({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
                  ></div>
                </div>
              `:m}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?c`<div
                class="error-badge"
                @mouseenter=${y=>this._showTip(e.error??"",y)}
                @mouseleave=${this._hideTip}
              >
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
                <span class="error-badge-text">${e.error}</span>
              </div>`:m}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?c`<div
                class="exists-badge"
                @mouseenter=${y=>this._showTip(this.t("alreadyUploaded","Already uploaded"),y)}
                @mouseleave=${this._hideTip}
              >
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
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:m}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?c`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:m}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l||this.reviewPick?m:c`
              <div class="actions">
                ${s&&e.isTus?c`
                      <button
                        class="act-btn pause"
                        @click=${this._pause}
                        title=${this.t("pause","Pause")}
                        aria-label=${this.t("pauseUpload","Pause upload")}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:m}
                ${r?c`
                      <button
                        class="act-btn resume"
                        @click=${this._resume}
                        title=${this.t("resume","Resume")}
                        aria-label=${this.t("resumeUpload","Resume upload")}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:m}
                ${n?c`
                      <button
                        class="act-btn retry"
                        @click=${this._retry}
                        title=${this.t("retry","Retry")}
                        aria-label=${this.t("retryUpload","Retry upload")}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="23 4 23 10 17 10" />
                          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                        </svg>
                      </button>
                    `:m}
                <button
                  class="act-btn del"
                  @click=${this._remove}
                  title=${this.t("remove","Remove")}
                  aria-label=${this.t("removeFile","Remove file")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
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
          <input
            class="name-input"
            type="text"
            .value=${e.name}
            title=${e.name}
            aria-label=${this.t("fileName","File name")}
            ?readonly=${d}
            @change=${d?m:this._rename}
            @click=${y=>y.stopPropagation()}
          />
          <div class="meta">
            ${p||""}${e.size?` · ${It(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?c`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${Z({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:m}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return m;const e=[...this.similarResults].sort((l,d)=>d.score-l.score),t=e[0],i=e.length,s=e.slice(1),r=s.slice(0,3),n=s.length-r.length,a=Math.round(t.score*100);return c`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${Z({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?c`<img src=${t.url} alt="" />`:m}
          <span class="pop-best ${t.score>=.85?"high":""}"
            >${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span
          >
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${s.length?c`<div class="pop-thumbs">
                ${r.map(l=>c`<img src=${l.url} alt="" />`)}
                ${n>0?c`<span class="pop-more">+${n}</span>`:m}
              </div>`:c`<span></span>`}
          <span class="pop-open">
            ${i===1?this.t("open","Open"):this.t("openAllN","Open all {{count}}",{count:i})}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};Qo.styles=j`
    :host {
      display: block;
    }

    .tile {
      /* Large-batch perf: the tile is the heavy part of each grid item, so let
         the browser skip its layout/style/paint while scrolled out of view
         (500+ assets render only what's near the viewport). Applied to .tile,
         NOT :host, on purpose — content-visibility:auto also turns on
         layout+paint containment while the tile is on-screen, which would make
         the element a containing block for (and clip) position:fixed
         descendants. The .sim-popover (position:fixed) is a SIBLING of .tile,
         not a descendant, so keeping containment on .tile leaves the popover
         free to position against the viewport. contain-intrinsic-size supplies
         a placeholder block size for skipped tiles; its "auto" keyword makes
         the browser remember each tile's real size after first render so
         scrollbar sizing stays accurate. ~260px ≈ a 16:10 preview at the
         default 224px column plus the body (name / meta / progress). */
      content-visibility: auto;
      contain-intrinsic-size: auto 260px;
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      transition:
        box-shadow 0.15s,
        transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 0;
      overflow: hidden;
    }

    .tile:hover {
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.06),
        0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      /* Query container so the hover actions can adapt to the TILE width (not
         the viewport). On .preview — never on .tile — because container-type
         makes the element a containing block for fixed-positioned descendants,
         which would break the .sim-popover (position: fixed) living on .tile. */
      container-type: inline-size;
      container-name: sfx-tile-media;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
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

    .preview-bg.pdf {
      background: linear-gradient(135deg, #fef2f2, #fee2e2);
    }
    .preview-bg.doc {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
    .preview-bg.vid {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    }
    .preview-bg.audio {
      background: linear-gradient(135deg, #fdf4ff, #fae8ff);
    }
    .preview-bg.sheet {
      background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    }
    .preview-bg.slide {
      background: linear-gradient(135deg, #fff7ed, #ffedd5);
    }
    .preview-bg.zip {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
    }
    .preview-bg.code {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    .preview-bg.markup {
      background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
    }
    .preview-bg.font {
      background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    }
    .preview-bg.design {
      background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    }
    .preview-bg.binary {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }
    .preview-bg.data {
      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
    }
    .preview-bg.gen {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }

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
      transition:
        border-color 0.15s,
        background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input[readonly] {
      cursor: default;
    }
    .name-input[readonly]:hover,
    .name-input[readonly]:focus {
      border-color: transparent;
      background: transparent;
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 5px;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* In review mode every tile is complete — the per-tile blue ring would
       turn the whole grid into a wall of borders, so suppress it. The status
       badge in the corner already conveys "uploaded successfully". */
    .tile.review.done {
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
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

    /* Reveal on hover or KEYBOARD focus only (:has(:focus-visible)) — a mouse
       click sets :focus but not :focus-visible, so actions don't linger/stick
       after clicking the tile. */
    .tile:hover .actions,
    .tile:focus-visible .actions,
    .tile:has(:focus-visible) .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions {
        opacity: 1;
      }
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
      transition:
        background 0.15s,
        transform 0.15s;
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
    /* Centered hover actions wrapper (Details + optional Check similar).
       Flex column with stretch so both buttons share one width. */
    .center-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: stretch;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 5;
    }

    .tile:hover .center-actions,
    .tile:focus-visible .center-actions,
    .tile:has(:focus-visible) .center-actions {
      opacity: 1;
    }

    @media (hover: none) {
      .center-actions {
        opacity: 1;
      }
    }

    .preview-btn,
    .check-similar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      box-sizing: border-box;
      /* Fixed height so both buttons match regardless of border width. */
      height: 32px;
      padding: 0 16px;
      /* Fixed width so every button is identical across ALL tiles, regardless
         of how short the label is ("No similar" / "Details") — extra empty
         space is intentional, by design. Sized to fit the longest label
         ("View N similar"). max-width keeps it inside genuinely narrow tiles,
         where the container query below collapses it to an icon. */
      width: 160px;
      max-width: 100%;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      transition:
        background-color 0.15s ease,
        color 0.15s ease,
        border-color 0.15s ease,
        transform 0.15s ease,
        box-shadow 0.15s ease;
    }

    .cs-label {
      /* Don't grow: keep the label at its natural width so the icon + text sit
         together as one group, centered in the button (rather than the icon
         pinned left with the text floating). Still shrinks + ellipsizes in
         narrow tiles. */
      flex: 0 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* In narrow tiles the fixed 160px button can be wider than the media area.
       Let the button shrink to the container width minus a small inset so it
       doesn't reach the tile edges and the label can still ellipsize. */
    @container sfx-tile-media (max-width: 208px) {
      .preview-btn,
      .check-similar-btn {
        width: calc(100% - 24px);
        padding: 0 8px;
      }
    }

    /* Details — white, borderless (transparent border keeps the same box
       height as Check similar), blue text. On hover it stays white and scales
       up slightly (no blue fill, no darkening). Same look in both modes. */
    .preview-btn {
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
    }

    /* Hover feedback via shadow, NOT scale — scaling one button would make it
       wider than its sibling; both must stay the same width. */
    .preview-btn:hover {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-primary, #2563eb);
    }

    /* Check similar — filled primary, visually distinct from Details */
    .check-similar-btn {
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    /* Hover feedback via a stronger glow, NOT scale, so width stays identical
       to the Details button. */
    .check-similar-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 12px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.45));
    }

    /* "No similar found" — muted/neutral, NOT an action to re-run; clicking it
       just opens the panel's empty-state message. */
    .check-similar-btn.no-similar,
    .check-similar-btn.no-similar:hover {
      background: var(--sfx-up-bg, #fff);
      border-color: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text-muted, #94a3b8);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .preview-btn svg,
    .check-similar-btn svg {
      width: 13px;
      height: 13px;
    }

    /* Asset-picker style: on hover a dark semi-transparent overlay covers the
       preview, with the Details / Check similar buttons sitting on top. Only
       when the feature is enabled (cs-overlay) — normal mode is untouched. */
    .tile.cs-overlay .preview::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s ease;
      pointer-events: none;
      z-index: 2;
    }

    .tile.cs-overlay:hover .preview::after {
      background: rgba(0, 0, 0, 0.45);
    }

    /* --- Similar-image selection mode (asset-picker look) --- */
    .tile.selectable {
      cursor: pointer;
    }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed {
      opacity: 0.5;
    }

    /* Checkbox: hidden by default, revealed on tile hover/keyboard focus so the
       UI stays clean until the user is ready to pick. Always visible once
       checked — selected state must remain glanceable. */
    .similar-cb {
      position: absolute;
      top: 8px;
      left: 8px;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 1.5px solid #cbd5e1;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;
      opacity: 0;
      transition:
        background-color 0.15s ease,
        border-color 0.15s ease,
        opacity 0.15s ease;
    }

    .tile:hover .similar-cb,
    .tile:focus-visible .similar-cb,
    .tile:has(:focus-visible) .similar-cb,
    .similar-cb.checked {
      opacity: 1;
    }

    /* Touch devices have no hover — always reveal so picking remains possible. */
    @media (hover: none) {
      .similar-cb {
        opacity: 1;
      }
    }

    .similar-cb svg {
      width: 16px;
      height: 16px;
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg {
      opacity: 1;
    }

    /* Selection cap reached: unselected checkboxes are muted on hover and not
       clickable. Stays hidden when not hovered like the rest. */
    .similar-cb.disabled {
      cursor: not-allowed;
    }
    .tile:hover .similar-cb.disabled,
    .tile:focus-visible .similar-cb.disabled,
    .tile:has(:focus-visible) .similar-cb.disabled {
      opacity: 0.4;
    }
    @media (hover: none) {
      .similar-cb.disabled {
        opacity: 0.4;
      }
    }

    /* --- Similarity search loading states --- */
    /* Queued (waiting its turn): just dimmed, no badge. */
    .tile.sim-queued {
      opacity: 0.55;
      transition: opacity 0.15s ease;
    }
    /* On hover a queued tile un-dims so its Details button is clearly visible. */
    .tile.sim-queued:hover {
      opacity: 1;
    }

    /* Searching: dark overlay + spinner over the preview. */
    .sim-search-overlay {
      position: absolute;
      inset: 0;
      z-index: 8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: rgba(15, 23, 42, 0.55);
      color: #fff;
    }
    .sim-search-overlay .sim-spinner {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      animation: spinRing 0.7s linear infinite;
    }
    .sim-search-overlay .sim-label {
      font-size: 11px;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Checked: result badge "N similar" / "No similar" (top-left). Doubles as
       the "checked" indicator — no separate green check. */
    .sim-result-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 8;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 24px;
      padding: 0 10px;
      border-radius: 999px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      box-shadow: 0 2px 6px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.22));
      pointer-events: none;
      transition: opacity 0.15s ease;
    }
    .sim-result-badge svg {
      width: 12px;
      height: 12px;
    }
    .sim-result-badge.none {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      box-shadow: none;
    }
    /* Hide the resting badge whenever the centered Details / View-similar
       buttons show (hover OR keyboard focus) so they never overlap. */
    .tile:hover .sim-result-badge,
    .tile:focus-visible .sim-result-badge,
    .tile:has(:focus-visible) .sim-result-badge {
      opacity: 0;
    }

    /* Review-pick tile (results modal left list): plain selectable card. */
    .tile.review-pick {
      cursor: pointer;
    }
    .tile.review-pick:hover .sim-result-badge {
      opacity: 1;
    }
    .tile.review-pick .name-input {
      pointer-events: none;
    }

    /* --- Hover preview popover (best match) --- */
    .sim-popover {
      position: fixed;
      width: 240px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
      z-index: 10000;
      overflow: hidden;
      cursor: pointer;
      animation: simPopIn 0.12s ease;
    }
    @keyframes simPopIn {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    /* Styled hover tooltip for the status badges (replaces the native title).
       Fixed-position bubble whose coords are set in JS; the arrow points at the
       badge — down when above it, up when flipped below (.below). */
    .hover-tip {
      position: fixed;
      z-index: 10001;
      transform: translate(-50%, -100%);
      max-width: 280px;
      padding: 6px 9px;
      border-radius: 6px;
      background: var(--sfx-up-tooltip-bg, #1e293b);
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      text-align: center;
      white-space: normal;
      overflow-wrap: anywhere;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      animation: tipIn 0.12s ease both;
    }
    .hover-tip.below {
      transform: translate(-50%, 0);
    }
    .hover-tip::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border: 5px solid transparent;
      border-top-color: var(--sfx-up-tooltip-bg, #1e293b);
    }
    .hover-tip.below::after {
      top: auto;
      bottom: 100%;
      border-top-color: transparent;
      border-bottom-color: var(--sfx-up-tooltip-bg, #1e293b);
    }
    @keyframes tipIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .sim-popover .pop-hero {
      position: relative;
      aspect-ratio: 16 / 10;
      background: var(--sfx-up-surface, #eef);
    }
    .sim-popover .pop-hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .sim-popover .pop-best {
      position: absolute;
      top: 8px;
      left: 8px;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-best.high {
      color: var(--sfx-up-success, #16a34a);
    }
    .sim-popover .pop-body {
      padding: 11px 13px 8px;
    }
    .sim-popover .pop-t {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }
    .sim-popover .pop-s {
      font-size: 11.5px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sim-popover .pop-foot {
      padding: 0 13px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sim-popover .pop-thumbs {
      display: inline-flex;
    }
    .sim-popover .pop-thumbs img {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      border: 2px solid #fff;
      object-fit: cover;
      margin-left: -8px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-thumbs img:first-child {
      margin-left: 0;
    }
    .sim-popover .pop-more {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      border: 2px solid #fff;
      margin-left: -8px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 9.5px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-open {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .sim-popover .pop-open svg {
      width: 12px;
      height: 12px;
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

    /* Reveal on hover/focus for completed tiles in BOTH the dedicated review
       screen (.tile.review) and the single-screen upload flow (.tile.done) —
       the latter renders the actions inline once a file finishes uploading. */
    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions,
    .tile.done:hover .review-actions,
    .tile.done:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions,
      .tile.done .review-actions {
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
      transition:
        transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
        box-shadow 0.18s ease,
        background 0.15s ease;
      box-shadow:
        0 4px 12px rgba(15, 23, 42, 0.18),
        0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow:
        0 6px 18px rgba(15, 23, 42, 0.22),
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
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .error-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }

    /* Truncate long error messages to a single line with an ellipsis; the full
       text is shown in the styled hover tooltip (.hover-tip). */
    .error-badge-text {
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- Naming-convention violation (matches the .naming-banner color) ---
       Unlike .rejected, the file is still active/editable — no opacity
       dimming, just a ring so it's easy to spot amongst many staged tiles. */
    .tile.naming-violation {
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- "Already uploaded" note (warning, not an error — content was a
       duplicate already on the server) --- */
    .exists-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.3;
      color: #fff;
      /* Deepened amber (#e07b00) so white text stays legible, with the same
         85% transparency the error chip uses so the thumbnail shows through. */
      background: color-mix(in srgb, #e07b00 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .exists-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }

    .exists-badge span {
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring {
      display: none;
    }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon {
      display: flex;
    }

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
      to {
        transform: rotate(360deg);
      }
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
      .tile {
        animation: none;
      }
      .spin-ring {
        animation: none;
      }
    }

    ${Ee}
  `;let ee=Qo;oe([h({attribute:!1})],ee.prototype,"t");oe([h({attribute:!1})],ee.prototype,"store");oe([h({type:String})],ee.prototype,"fileId");oe([h({attribute:!1})],ee.prototype,"file");oe([h({type:String})],ee.prototype,"mode");oe([h({type:Boolean})],ee.prototype,"allowRename");oe([h({type:Boolean})],ee.prototype,"showLocateButton");oe([h({type:Boolean})],ee.prototype,"showCopyCdnButton");oe([h({type:Boolean})],ee.prototype,"showCheckSimilar");oe([h({type:Boolean})],ee.prototype,"selectMode");oe([h({type:Boolean})],ee.prototype,"isSelected");oe([h({type:Boolean})],ee.prototype,"selectionActive");oe([h({type:Boolean})],ee.prototype,"selectionFull");oe([h({type:Boolean})],ee.prototype,"previewOpen");oe([h({type:String})],ee.prototype,"similarStatus");oe([h({type:Number})],ee.prototype,"similarCount");oe([h({attribute:!1})],ee.prototype,"similarResults");oe([h({type:Boolean})],ee.prototype,"reviewPick");oe([h({type:Boolean})],ee.prototype,"namingViolation");oe([E()],ee.prototype,"_dims");oe([E()],ee.prototype,"_simPopover");oe([E()],ee.prototype,"_copied");oe([E()],ee.prototype,"_tip");var ah=Object.defineProperty,ki=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&ah(e,t,s),s};const er=class er extends W{constructor(){super(...arguments),this.t=De,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return c`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t("back","Back")}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          ${this.t("back","Back")}
        </button>
        <span class="title"
          >${this.t("lastUpload","Last upload")}
          <span class="count"
            >—
            ${this.t("fileCount",{count:t,defaultValue_one:"{{count}} file",defaultValue_other:"{{count}} files"})}</span
          ></span
        >
        <div class="filters">
          <button
            class="chip ${this._filter==="all"?"active":""}"
            @click=${this._setFilter("all")}
          >
            ${this.t("all","All")} (${t})
          </button>
          <button
            class="chip ${this._filter==="success"?"active":""}"
            @click=${this._setFilter("success")}
          >
            ✓ ${this.t("uploaded","Uploaded")} (${this._successCount})
          </button>
          ${this._failedCount>0?c`<button
                class="chip ${this._filter==="failed"?"active":""}"
                @click=${this._setFilter("failed")}
              >
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:m}
          <button
            class="clear-btn"
            @click=${this._onClear}
            title=${this.t("clearLastUpload","Clear last upload from this browser")}
          >
            ${this.t("clear","Clear")}
          </button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?c`<div class="empty">
              ${this.t("noFilesMatchFilter","No files match this filter.")}
            </div>`:c`<sfx-file-list
              .t=${this.t}
              .files=${e}
              mode="review"
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
            ></sfx-file-list>`}
      </div>
    `}};er.styles=j`
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
      .topbar {
        padding: 12px 16px;
      }
    }
  `;let at=er;ki([h({attribute:!1})],at.prototype,"t");ki([h({attribute:!1})],at.prototype,"files");ki([h({type:Boolean})],at.prototype,"showLocateButton");ki([h({type:Boolean})],at.prototype,"showCopyCdnButton");ki([E()],at.prototype,"_filter");J("sfx-last-upload-review",at);const ls=j`
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
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary, #2563eb),
      var(--sfx-up-primary-mid, #3b82f6)
    );
    color: var(--primary-foreground, #fff);
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary-hover, #1d4ed8),
      var(--sfx-up-primary, #2563eb)
    );
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
`,ds=j`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var lh=Object.defineProperty,Te=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&lh(e,t,s),s};const tr=class tr extends W{constructor(){super(...arguments),this.t=De,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.requiredFieldsTotal=0,this.requiredFieldsRemaining=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1,this.blocked=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?m:c`
      <button
        class="btn-retry"
        @click=${this._retryAll}
        aria-label=${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}
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
        <span class="btn-label"
          >${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}</span
        >
      </button>
    `}_renderUploadingBar(){return c`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          <button
            class="btn-ghost"
            @click=${this._cancelUpload}
            aria-label=${this.t("cancelUpload","Cancel upload")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
        </div>
      </div>
    `}_renderDoneBar(){return c`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          ${this._renderRetryAllButton()}
          <button
            class="btn-sec"
            @click=${this._uploadMore}
            aria-label=${this.t("uploadMore","Upload more")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              ${ks}
            </svg>
            <span class="btn-label">${this.t("uploadMore","Upload more")}</span>
          </button>
          <button class="btn-primary" @click=${this._close} aria-label=${this.t("close","Close")}>
            <span class="btn-label">${this.t("close","Close")}</span>
          </button>
        </div>
      </div>
    `}_renderIdleBar(){return c`
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?c`
                <button
                  class=${this.requireMetadataFirst?"btn-primary":"btn-sec"}
                  @click=${this._fillMetadata}
                  aria-label=${this.t("fillMetadata","Fill Metadata")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">${this.t("fillMetadata","Fill Metadata")}</span>
                </button>
              `:m}
          ${this.showCheckSimilar&&this.uploadState==="idle"?c`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t("checkSimilar","Check similar")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
                </button>
              `:m}
        </div>
        <div class="right">
          <button
            class="btn-ghost btn-clear"
            @click=${this._clear}
            aria-label=${this.t("clear","Clear")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              ${bn}
            </svg>
            <span class="btn-label">${this.t("clear","Clear")}</span>
          </button>
          <button
            class="btn-sec btn-add-more"
            @click=${this._addMore}
            aria-label=${this.t("addMore","Add more")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              ${ks}
            </svg>
            <span class="btn-label">${this.t("addMore","Add more")}</span>
          </button>
          ${this._renderRetryAllButton()} ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return c`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t("selectImagesToCheck","Select images to check for similar assets")}</b>
            <span
              >${t>0?this.t("selectImagesHintMax","Pick up to {{max}}, then click Check",{max:t}):this.t("selectImagesHint","Pick one or more, then click Check")}</span
            >
          </div>
        </div>
        <div class="right">
          ${t>0?c`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
                >${e}/${t}</span
              >`:m}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
          </button>
          <button
            class="btn-ghost"
            @click=${this._checkSimilarCancel}
            aria-label=${this.t("cancel","Cancel")}
          >
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${e===0}
            aria-label=${this.t("checkSimilar","Check similar")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
          </button>
        </div>
      </div>
    `}get _uploadLabel(){return this.requiredFieldsTotal>0&&this.requiredFieldsRemaining===this.requiredFieldsTotal?{key:"fillRequiredMetadata",fallback:"Fill required metadata"}:this.requiredFieldsRemaining>0?{key:"nextMetadata",fallback:"Next metadata"}:this.fileCount>1?{key:"uploadAll",fallback:"Upload all ({{count}})",interpolations:{count:this.fileCount}}:{key:"upload",fallback:"Upload"}}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",s=this._uploadLabel,r=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t(s.key,s.fallback,s.interpolations);return c`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.blocked||this.fileCount===0&&!t}
        aria-label=${r}
      >
        ${e?c`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?c`
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="btn-label">${this.t("done","Done")}!</span>
              `:c`
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
                <span class="btn-label"
                  >${this.t(s.key,s.fallback,s.interpolations)}</span
                >
              `}
      </button>
    `}};tr.styles=[ls,ds,j`
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
        content: '';
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

      /* --- Buttons row --- */
      .buttons-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
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

      /* --- Always-on similarity selection toolbar --- */
      .sim-ico {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sim-ico svg {
        width: 16px;
        height: 16px;
      }

      .sim-text {
        min-width: 0;
        display: flex;
        flex-direction: column;
        line-height: 1.25;
      }
      .sim-text b {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .sim-text span {
        font-size: 12px;
        font-weight: 400;
        color: var(--sfx-up-text-muted, #64748b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .count-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--sfx-up-surface, #eef2ff);
        color: var(--sfx-up-primary, #2563eb);
        font-size: 13px;
        font-weight: 700;
      }
      .count-pill.full {
        background: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }

      .select-all {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-primary, #2563eb);
        padding: 0 6px;
        height: 28px;
        border-radius: 6px;
        transition: background 0.15s ease;
      }
      .select-all:hover {
        background: var(--sfx-up-primary-bg, #eff6ff);
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

      /* --- Spinner --- */
      .btn-spin {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spinRing 0.7s linear infinite;
      }

      @keyframes spinRing {
        to {
          transform: rotate(360deg);
        }
      }

      /* Collapse the right group to icon-only when the actions bar
         itself is narrow — not when the viewport is. @container beats
         @media here because inline uploaders can live inside a column
         narrower than the browser window.

         Two exceptions keep the bar readable:
         - the primary CTA keeps its label, because its icon alone cannot
           say whether it uploads or opens the required-metadata step;
         - a button with no icon (the :has(svg) test fails) keeps its label
           too, otherwise collapsing it leaves an empty 36px box. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
          min-width: 0;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right button:has(svg):not(.btn-primary) {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
          flex: 0 0 36px;
        }
        .right button:has(svg):not(.btn-primary) .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
        /* The labelled CTA absorbs whatever width is left and ellipsises
           rather than pushing the icon buttons off the bar. */
        .right .btn-primary {
          min-width: 0;
          flex: 0 1 auto;
          padding: 0 12px;
        }
        .right .btn-primary svg {
          flex: 0 0 auto;
        }
        .right .btn-primary .btn-label {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
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

      /* Opt-out hook for the two batch actions. On a phone the host renders
         its own copy of Clear / Add more in the "N files · N MB" summary row
         and switches these off, keeping the bottom bar down to the decisions
         that matter there: fill metadata, or upload.

         The host owns the switch rather than a @media query here, because the
         condition is not "is the viewport narrow" but "did the host actually
         render the other copy" — the summary row is gone in the mobile
         preview takeover, and there the bar has to keep the buttons. */
      .btn-clear,
      .btn-add-more {
        display: var(--sfx-up-bar-batch-display, inline-flex);
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `];let pe=tr;Te([h({attribute:!1})],pe.prototype,"t");Te([h({type:String})],pe.prototype,"uploadState");Te([h({type:Number})],pe.prototype,"fileCount");Te([h({type:Number})],pe.prototype,"failedCount");Te([h({type:Boolean})],pe.prototype,"showFillMetadata");Te([h({type:Boolean})],pe.prototype,"requireMetadataFirst");Te([h({type:Number})],pe.prototype,"requiredFieldsTotal");Te([h({type:Number})],pe.prototype,"requiredFieldsRemaining");Te([h({type:Boolean})],pe.prototype,"showCheckSimilar");Te([h({type:Boolean})],pe.prototype,"selectMode");Te([h({type:Number})],pe.prototype,"selectedCount");Te([h({type:Number})],pe.prototype,"maxSelection");Te([h({type:Boolean})],pe.prototype,"allSelected");Te([h({type:Boolean})],pe.prototype,"blocked");const dh='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function To(o,e){return t=>{if(t.key!=="Tab")return;const i=o();if(!i)return;const s=i.querySelector(e);if(!s)return;const r=Array.from(s.querySelectorAll(dh));if(r.length===0)return;const n=r[0],a=r[r.length-1],l=i.activeElement;t.shiftKey?(l===n||!s.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!s.contains(l))&&(t.preventDefault(),n.focus())}}var ch=Object.defineProperty,cs=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&ch(e,t,s),s};const ir=class ir extends W{constructor(){super(...arguments),this.t=De,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=To(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");s&&(s.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";const t=!!this._name.trim();let i=this._name.trim();if(!i)try{const s=new URL(e).pathname.split("/");i=s[s.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i,nameIsUserDefined:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return c`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">${this.t("importFromUrl","Import from URL")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">${this.t("fileUrl","File URL")}</label>
              <input
                id="urlInput"
                type="url"
                placeholder=${this.t("fileUrlPlaceholder","https://example.com/file.pdf")}
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput"
                >${this.t("fileName","File name")}
                <span class="optional">(${this.t("optional","optional")})</span></label
              >
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t("fileNamePlaceholder","document.pdf")}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?c`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>
                ${this.t("cancel","Cancel")}
              </button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};ir.styles=[ls,ds,Ee,j`
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.18s ease both;
      }

      .card {
        background: var(--sfx-up-bg, #fff);
        border-radius: 12px;
        box-shadow:
          0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
          0 4px 16px rgba(0, 0, 0, 0.06);
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
        transition:
          background 0.15s,
          color 0.15s;
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
        transition:
          border-color 0.15s,
          background 0.15s;
        outline: none;
        box-sizing: border-box;
      }

      input:focus {
        border-color: var(--sfx-up-primary, #2563eb);
        background: var(--sfx-up-bg, #fff);
      }

      input::placeholder {
        color: var(--sfx-up-text-muted, #ccc);
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
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideUp {
        from {
          transform: translateY(18px) scale(0.97);
        }
        to {
          transform: translateY(0) scale(1);
        }
      }

      .close-btn:focus-visible {
        outline: 2px solid var(--sfx-up-primary, #2563eb);
        outline-offset: 2px;
      }

      input:focus-visible {
        outline: none;
      }
    `];let kt=ir;cs([h({attribute:!1})],kt.prototype,"t");cs([E()],kt.prototype,"_url");cs([E()],kt.prototype,"_name");cs([E()],kt.prototype,"_error");var ph=Object.defineProperty,$i=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&ph(e,t,s),s};const sr=class sr extends W{constructor(){super(...arguments),this.t=De,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=To(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var s,r;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("video"),t=(r=this.shadowRoot)==null?void 0:r.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return c`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div class="title">${this.t("camera","Camera")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            ${this._error?c`<div class="error">${this._error}</div>`:this._captured?c`
                    <img
                      class="preview-img"
                      src=${this._previewUrl}
                      alt=${this.t("capturedPhoto","Captured photo")}
                    />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>
                        ${this.t("retake","Retake")}
                      </button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>
                        ${this.t("usePhoto","Use photo")}
                      </button>
                    </div>
                  `:c`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};sr.styles=[ls,ds,j`
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.18s ease both;
      }

      .card {
        background: var(--sfx-up-bg, #fff);
        border-radius: 12px;
        box-shadow:
          0 28px 80px rgba(0, 0, 0, 0.18),
          0 4px 16px rgba(0, 0, 0, 0.06);
        width: 100%;
        max-width: 520px;
        height: 520px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
        transition:
          background 0.15s,
          color 0.15s;
        flex-shrink: 0;
        line-height: 1;
      }
      .close-btn:hover {
        background: var(--sfx-up-border, #e4e4e4);
        color: var(--sfx-up-text, #333);
      }

      .body {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        flex: 1;
        min-height: 0;
        justify-content: center;
      }

      video,
      canvas {
        width: 100%;
        flex: 1;
        min-height: 0;
        border-radius: 12px;
        background: #000;
        object-fit: cover;
      }

      canvas {
        display: none;
      }

      .preview-img {
        width: 100%;
        max-height: 320px;
        border-radius: 12px;
        object-fit: contain;
        background: #000;
      }

      .error {
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
        text-align: center;
        padding: 40px 20px;
      }

      .actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        width: 100%;
      }

      .btn-capture {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        padding: 0;
        background: var(--sfx-up-error, #dc2626);
        border: 4px solid var(--sfx-up-bg, #fff);
        box-shadow:
          0 0 0 2px var(--sfx-up-error, #dc2626),
          0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
        cursor: pointer;
        transition: all 0.15s;
      }
      .btn-capture:hover {
        background: var(--destructive-foreground, #b91c1c);
        transform: scale(1.05);
      }

      .close-btn:focus-visible,
      .btn-capture:focus-visible {
        outline: 2px solid var(--sfx-up-primary, #2563eb);
        outline-offset: 2px;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translateY(18px) scale(0.97);
        }
        to {
          transform: translateY(0) scale(1);
        }
      }
    `];let lt=sr;$i([h({attribute:!1})],lt.prototype,"t");$i([E()],lt.prototype,"_stream");$i([E()],lt.prototype,"_error");$i([E()],lt.prototype,"_captured");$i([E()],lt.prototype,"_previewUrl");var uh=Object.defineProperty,Vt=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&uh(e,t,s),s};const or=class or extends W{constructor(){super(...arguments),this.t=De,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=To(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=s=>{s.data.size>0&&this._chunks.push(s.data)},this._recorder.onstop=()=>{var r;const s=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=s,this._previewUrl=URL.createObjectURL(s),(r=this._stream)==null||r.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return c`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 21h10" />
              </svg>
            </div>
            <div class="title">${this.t("screenCast","Screen cast")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            ${this._error?c`<div class="error">${this._error}</div>`:this._recordedBlob?c`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>
                        ${this.t("discard","Discard")}
                      </button>
                      <button class="btn btn-primary" @click=${this._useRecording}>
                        ${this.t("useRecording","Use recording")}
                      </button>
                    </div>
                  `:this._recording?c`
                      <video autoplay playsinline muted></video>
                      <div class="status">
                        <div class="rec-dot"></div>
                        ${this.t("recording","Recording")}...
                      </div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>
                          ${this.t("stopRecording","Stop recording")}
                        </button>
                      </div>
                    `:c`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M7 21h10" />
                          </svg>
                        </div>
                        <div class="start-text">
                          ${this.t("screenCastPrompt","Share your screen to record a video that will be added to your uploads.")}
                        </div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>
                            ${this.t("cancel","Cancel")}
                          </button>
                          <button class="btn btn-primary" @click=${this._startRecording}>
                            ${this.t("startRecording","Start recording")}
                          </button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};or.styles=[ls,ds,j`
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.18s ease both;
      }

      .card {
        background: var(--sfx-up-bg, #fff);
        border-radius: 12px;
        box-shadow:
          0 28px 80px rgba(0, 0, 0, 0.18),
          0 4px 16px rgba(0, 0, 0, 0.06);
        width: 100%;
        max-width: 560px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
        transition:
          background 0.15s,
          color 0.15s;
        flex-shrink: 0;
        line-height: 1;
      }
      .close-btn:hover {
        background: var(--sfx-up-border, #e4e4e4);
        color: var(--sfx-up-text, #333);
      }

      .body {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }

      video {
        width: 100%;
        max-height: 320px;
        border-radius: 12px;
        background: #000;
        object-fit: contain;
      }

      .error {
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
        text-align: center;
        padding: 40px 20px;
      }

      .status {
        font-size: 13px;
        color: var(--sfx-up-text-secondary, #475569);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .rec-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--sfx-up-error, #dc2626);
        animation: pulse 1s ease-in-out infinite;
      }

      .actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        width: 100%;
      }

      .btn-danger {
        background: var(--sfx-up-error, #dc2626);
        color: var(--primary-foreground, #fff);
        box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
      }
      .btn-danger:hover {
        background: var(--destructive-foreground, #b91c1c);
      }

      .start-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 30px 20px;
        text-align: center;
      }

      .start-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .start-icon svg {
        width: 28px;
        height: 28px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
      }

      .start-text {
        font-size: 14px;
        color: var(--sfx-up-text-secondary, #475569);
        max-width: 300px;
      }

      .close-btn:focus-visible {
        outline: 2px solid var(--sfx-up-primary, #2563eb);
        outline-offset: 2px;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translateY(18px) scale(0.97);
        }
        to {
          transform: translateY(0) scale(1);
        }
      }
      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
      }
    `];let We=or;Vt([h({attribute:!1})],We.prototype,"t");Vt([E()],We.prototype,"_stream");Vt([E()],We.prototype,"_recording");Vt([E()],We.prototype,"_error");Vt([E()],We.prototype,"_recordedBlob");Vt([E()],We.prototype,"_previewUrl");var hh=Object.defineProperty,Ro=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&hh(e,t,s),s};const rr=class rr extends W{constructor(){super(...arguments),this.t=De,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(s=>s.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(s=>s.id!==e)},200)}_iconForType(e){return e==="error"?c`<svg
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
    `}};rr.styles=j`
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
  `;let Bt=rr;Ro([h({attribute:!1})],Bt.prototype,"t");Ro([h({type:Number})],Bt.prototype,"duration");Ro([E()],Bt.prototype,"_toasts");J("sfx-toast",Bt);var fh=Object.defineProperty,M=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&fh(e,t,s),s};const un=new Set(["unsplash"]),Je=10,gh=3,mh=["auto","mobile","tablet","desktop","hq","sample"],vh=["hls"],Rt={isTus:!1,tusUploadUrl:null,relativeFolder:""},hn=new Set(["complete","failed","error","cancelled","rejected"]);var X;const D=(X=class extends W{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1,this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!1,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._seededSettingsDefaults=null,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._bulkMetadataSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=At,this._cachedSourcesConfig=void 0,this._cachedSourcesTouch=void 0,this._cachedSourcesAccept=void 0,this._cachedTileSources=At,this._cachedTileSourcesFrom=null,this._unsubscribeTouch=null,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:s}=e.detail;if(gt(i)){this.updateFileFocusPoint(t,s??null);return}if(Es(i)){const a=Ps(i);if(!a)return;const l=s===""||s==null,d=a==="position"?{position:l?void 0:Number(s)}:{ref:l?void 0:String(s)};this.updateFileProduct(t,d);return}const r=this._store.getState().files.get(t);if(!r)return;const n=new Map(this._store.getState().files);n.set(t,{...r,meta:{...r.meta,[i]:s}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewMetadataChange=e=>{gt(e.detail.key)&&(this._focusPointDraft=e.detail.value??null)},this._onFocusPointPickToggle=e=>{var t;this._focusPointPicking=e.detail.picking,e.detail.picking&&((t=this.renderRoot.querySelector(".preview-img-wrap"))==null||t.scrollIntoView({block:"nearest",behavior:"smooth"}))},this._onPreviewFieldHover=e=>{gt(e.detail.key)&&(this._focusPointFieldHovered=e.detail.hovering)},this._onPreviewFieldFocus=e=>{const t=gt(e.detail.key);e.detail.focused?(this._focusPointFieldFocused=t,t||(this._focusPointPicking=!1)):t&&(this._focusPointFieldFocused=!1)},this._onPreviewMetadataEscape=e=>{gt(e.detail.key)&&(this._focusPointPicking=!1)},this._onFocusPointPick=e=>{const t=this._previewFileId;if(!t)return;const{horizontal:i,vertical:s}=e.detail;this._focusPointDraft=null,this.updateFileFocusPoint(t,`${i},${s}`)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var s;const i=(s=this.config)==null?void 0:s.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(r){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",r),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onCaptureChange=e=>{const t=e.target,i=Array.from(t.files??[]);t.value="",i.length>0&&this._processIncomingFiles(i)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var s,r,n,a;const t=this._mergedSources.find(l=>l.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,l)}return}if(e==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){if(ze()&&this._captureInput){this._captureInput.click();return}this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((r=(s=this.config)==null?void 0:s.connectors)==null?void 0:r.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:l}=await Wt(async()=>{const{SfxGooglePickerView:d}=await import("./google-picker-view-67wzE5ma.js");return{SfxGooglePickerView:d}},__vite__mapDeps([0,1,2]));customElements.define("sfx-google-picker-view",l)}}else if(un.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await Wt(async()=>{const{SfxSearchProviderBrowser:d}=await import("./search-provider-browser-CVskm4nF.js");return{SfxSearchProviderBrowser:d}},__vite__mapDeps([3,1,2]));customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await Wt(async()=>{const{SfxProviderBrowser:d}=await import("./provider-browser-9svv9nZR.js");return{SfxProviderBrowser:d}},__vite__mapDeps([4,1,2]));customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var f,x,k;this._showUrlDialog=!1;const{url:t,name:i,nameIsUserDefined:s}=e.detail,r=(f=this.config)==null?void 0:f.callbacks,n=Ys(i),a=n.startsWith("image/");if(ys(i))return;const l=this._store.getState();if([...l.files.values()].some(v=>v.name===i&&v.status!=="rejected"&&v.status!=="cancelled"))return;const p=_s({name:i,size:0,type:n},l.restrictions,l.files);if(p){const v={id:Tt(),status:"rejected",file:null,remoteUrl:t,name:i,nameIsUserDefined:s,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:p.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Rt};Ct(this._store,v),this._dispatchPublic(N.FILE_REJECTED,{file:v,reason:p.message}),(x=r==null?void 0:r.onFileRejected)==null||x.call(r,v,p.message);return}const u={id:Tt(),status:"idle",file:null,remoteUrl:t,name:i,nameIsUserDefined:s,size:0,type:n,previewUrl:a?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Rt};Ct(this._store,u),this._dispatchPublic(N.FILE_ADDED,{file:u}),(k=r==null?void 0:r.onFileAdded)==null||k.call(r,u),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,s,r;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(N.FILE_PREVIEW,{file:t}),(r=(s=(i=this.config)==null?void 0:i.callbacks)==null?void 0:s.onFilePreview)==null||r.call(s,t))},this._onFillMetadata=()=>{var t,i,s,r;this._bulkMetadataHadIssuesOnOpen=this._hasMetadataIssues;const e=[...this._store.getState().files.values()].filter(n=>X._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(N.FILL_METADATA,{files:e}),(r=(s=(i=this.config)==null?void 0:i.callbacks)==null?void 0:s.onFillMetadata)==null||r.call(s,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=Je)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,Je).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{if(!this._firstMissingRequiredFieldKey()){const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning")}this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var s,r,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(N.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(r=(s=this.config)==null?void 0:s.callbacks)==null?void 0:r.onFileCopyCdn)==null||n.call(r,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:s,meta:r}of t){const n=i.get(s);n&&i.set(s,{...n,meta:{...n.meta,...r}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTagsSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesMeta(t.map(({fileId:i,tags:s})=>({fileId:i,tags:s})))},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,s=new Map(i);for(const{fileId:r,taxonodes:n}of t){const a=i.get(r);if(!a||!X._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[d,p]of Object.entries(n))p==null?delete l[d]:l[d]=p;s.set(r,{...a,taxonodes:l})}this._store.setState({files:s})},this._onBulkMetadataClose=e=>{var s;const i=((s=e.detail)==null?void 0:s.saved)===!0&&this._bulkMetadataHadIssuesOnOpen&&!this._hasMetadataIssues;this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,i&&this._onUploadStart()},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var s,r,n;const t=(s=this.config)==null?void 0:s.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(r=this._engine)==null||r.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(N.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var s;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(s=t==null?void 0:t.shadowRoot)==null?void 0:s.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(s=>s.status==="complete"||s.status==="failed"||s.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=Yt.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&Yt.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,l,d;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,s=(p,u,f)=>`${p}\0${u}\0${f}`,r=new Set;for(const p of this._store.getState().files.values())p.status!=="rejected"&&p.status!=="cancelled"&&r.add(s(p.name,p.size,p.relativeFolder??""));for(const p of e.detail.files){if(ys(p.name))continue;const u=i?p.relativeFolder??"":"",f=this._store.getState(),x=s(p.name,p.size,u);if(r.has(x))continue;const k=p.thumbnail?this._transformRemoteThumbnail(p.thumbnail,{source:"connector",providerId:p.provider}):null,v=_s({name:p.name,size:p.size,type:p.mimeType},f.restrictions,f.files);if(v){const T={id:Tt(),status:"rejected",file:null,remoteUrl:null,name:p.name,size:p.size,type:p.mimeType,previewUrl:k,duration:null,progress:0,speed:0,bytesUploaded:0,error:v.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:p,...Rt,relativeFolder:u};Ct(this._store,T),this._dispatchPublic(N.FILE_REJECTED,{file:T,reason:v.message}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,T,v.message);continue}const P={id:Tt(),status:"idle",file:null,remoteUrl:null,name:p.name,size:p.size,type:p.mimeType,previewUrl:k,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:p,...Rt,relativeFolder:u};Ct(this._store,P),r.add(x),this._dispatchPublic(N.FILE_ADDED,{file:P}),(d=t==null?void 0:t.onFileAdded)==null||d.call(t,P)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,s,r,n;this._dispatchPublic(N.COMPLETE_ACTION,{}),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||s.call(i),(((r=this.config)==null?void 0:r.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(N.CANCEL,{})},this._onConfirmDismissOk=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!0),this._confirmDismissResolve=null},this._onConfirmDismissCancel=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!1),this._confirmDismissResolve=null},this._onModalDismiss=async()=>{var e,t,i,s;await this._confirmDismiss()&&(this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(N.CANCEL,{}),this.close())},this._onCancelUpload=()=>{var e,t,i,s;(e=this._engine)==null||e.cancelAll(),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(N.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(N.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(N.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,s;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(N.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&pa(t).then(({files:i,hadDirectories:s})=>{if(i.length===0){s&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:s}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._confirmDismissVisible){this._onConfirmDismissCancel();return}if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const s=((t=this.config)==null?void 0:t.mode)??"modal",r=((i=this.config)==null?void 0:i.header)??(s==="modal"?"close":!0);(r==="close"||r==="back")&&(s==="modal"&&this._isOpen?this._onModalDismiss():s==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const s=i.getBoundingClientRect(),r=(t-s.left)/s.width*100;this._splitPct=Math.max(25,Math.min(75,r))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._namingViolationIds=new Set,this._namingViolationIdsKey="",this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=X._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),s=i===-1?1:(i+1)%t.length;this._fsZoom=t[s],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,s=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(s)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+s,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Na(),this._storeCtrl=new qa(this,this._store)}get _lastUploadId(){var i,s;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(s=this.config)==null?void 0:s.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,s;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(r=>r.type===Ui.LANGUAGES);return((s=t==null?void 0:t.variants.find(Boolean))==null?void 0:s.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,s,r;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((s=this.config)==null?void 0:s.locale)??void 0;return{...Xl((r=this._metadataSchema)==null?void 0:r.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var s,r,n;const t=(((s=this._metadataSchema)==null?void 0:s.regionalVariantsGroups)??[]).find(a=>a.type===Ui.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(r=this.config)==null?void 0:r.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var s;const e=(s=this.config)==null?void 0:s.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const s=Ol(e,t);return this._localizedSchemaCache={base:e,translations:t,result:s},s}get _bulkMetadataSchema(){var r,n;const e=this._localizedMetadataSchema;if(!e)return e;const t=((n=(r=this.config)==null?void 0:r.metadataConfig)==null?void 0:n.showTags)!==!1,i=this._bulkMetadataSchemaCache;if(i&&i.base===e&&i.showTags===t)return i.result;let s=Rn(e);return t&&(s=Id(s,this._storeCtrl.state.t)),this._bulkMetadataSchemaCache={base:e,showTags:t,result:s},s}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(l=>l.type===Ui.LANGUAGES)))return;const s=this._activeLanguage;if(!s||this._metadataTranslationsLang===s&&this._metadataTranslations)return;this._metadataTranslationsLang=s;const r=++this._translationsRequestId,n=e.peek(s);if(n){this._metadataTranslations=n;return}e.getTranslations(s).then(l=>{r===this._translationsRequestId&&(this._metadataTranslations=l)})}open(){var t,i,s,r,n,a,l,d,p;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||s.call(i),this._dispatchPublic(N.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(r=this.config)==null?void 0:r.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(N.OPEN,{}),e&&((p=(d=(l=this.config)==null?void 0:l.callbacks)==null?void 0:d.onRestore)==null||p.call(d),this._dispatchPublic(N.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,s;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(N.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,s;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||s.call(i),this._dispatchPublic(N.CLOSE,{}),this.requestUpdate()}upload(){var r,n,a,l,d,p,u,f,x,k;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(v=>v.status==="idle"||v.status==="queued");if((n=(r=this.config)==null?void 0:r.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(N.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const s=[...this._store.getState().files.values()].filter(v=>v.status==="idle"||v.status==="queued");this._dispatchPublic(N.UPLOAD_STARTED,{files:s}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||d.call(l,s),this._engine.uploadAll(),(p=this.config)!=null&&p.minimizeOnUpload&&((u=this.config)==null?void 0:u.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(k=(x=(f=this.config)==null?void 0:f.callbacks)==null?void 0:x.onMinimize)==null||k.call(x),this._dispatchFloatGeometryEvent(N.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,s=new Map(i);let r=!1;for(const n of e){const a=i.get(n.id);a&&(s.set(n.id,{...a,...n}),r=!0)}r&&this._store.setState({files:s})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const s=this._store.getState().files,r=s.get(e);if(!r||!X._MODIFIABLE_STATUSES.has(r.status))return;const n=new Map(s);n.set(e,{...r,meta:t!=null?{...r.meta,...t}:r.meta,tags:i??r.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let s=!1;for(const{fileId:r,meta:n,tags:a}of e){const l=t.get(r);!l||!X._MODIFIABLE_STATUSES.has(l.status)||(i.set(r,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),s=!0)}s&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const s=this._store.getState().files,r=s.get(e);if(!r||!X._MODIFIABLE_STATUSES.has(r.status))return;const n={...r.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(s);a.set(e,{...r,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const s=this._store.getState().files,r=new Map(s);let n=!1;for(const a of e){const l=s.get(a);if(!l||!X._MODIFIABLE_STATUSES.has(l.status))continue;const d={...l.taxonodes??{}};i==null?delete d[t]:d[t]=i,r.set(a,{...l,taxonodes:d}),n=!0}n&&this._store.setState({files:r})}updateFileProduct(e,t){const i=this._store.getState().files,s=i.get(e);if(!s||!X._MODIFIABLE_STATUSES.has(s.status))return;const r=new Map(i);r.set(e,{...s,product:yr(s.product,t)}),this._store.setState({files:r})}updateFileFocusPoint(e,t){const i=this._store.getState().files,s=i.get(e);if(!s||!X._MODIFIABLE_STATUSES.has(s.status)||(s.focusPoint??null)===t)return;const r=new Map(i);r.set(e,{...s,focusPoint:t}),this._store.setState({files:r})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let s=!1;for(const{fileId:r,product:n}of e){const a=t.get(r);!a||!X._MODIFIABLE_STATUSES.has(a.status)||(i.set(r,{...a,product:yr(a.product,n)}),s=!0)}s&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._resetFocusPointPicking(),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(s=>{this._previewFileId===t&&(this._previewDims=s?`${s.w} × ${s.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal(),this._syncPageScrollLock()}_syncPageScrollLock(){var i;const e=((i=this.config)==null?void 0:i.mode)??"modal";this.isConnected&&e==="modal"&&this._isOpen&&!this._isMinimized?Ba(this):pr(this)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:calc(24px + var(--sfx-up-float-offset-y, 0px)); right:calc(24px + var(--sfx-up-float-offset-x, 0px)); z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; transition:bottom .25s ease, right .25s ease; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-title { font-size:13px; font-weight:600; color:#1e293b; }
      [data-sfx-upload-float] .float-subtitle { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-actions button:hover { background:#f8fafc; color:#374151; }
      [data-sfx-upload-float] .float-actions button svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-progress { padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-progress-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
      [data-sfx-upload-float] .float-progress-label { font-size:12px; color:#475569; }
      [data-sfx-upload-float] .float-progress-pct { font-size:12px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-bar { height:4px; background:#e8edf5; border-radius:2px; overflow:hidden; }
      [data-sfx-upload-float] .float-bar-fill { height:100%; background:#2563eb; border-radius:2px; transition:width .3s ease; }
      [data-sfx-upload-float] .float-bar.segmented { display:flex; }
      [data-sfx-upload-float] .float-bar-seg { height:100%; min-width:2px; }
      [data-sfx-upload-float] .float-bar-seg.ok { background:#22c55e; }
      [data-sfx-upload-float] .float-bar-seg.dup { background:#f59e0b; }
      [data-sfx-upload-float] .float-bar-seg.fail { background:#ef4444; }
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
      [data-sfx-upload-float] .float-item-done.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-item-done.warn svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; line-height:15px; padding:6px 10px; border-radius:6px; white-space:normal; width:max-content; max-width:400px; word-break:break-word; max-height:36px; overflow:hidden; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-tip { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-tip:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }
      [data-sfx-upload-float] .float-item-act { width:24px; height:24px; border:none; background:none; color:#64748b; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-act svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-act:hover { background:#f1f5f9; color:#1e293b; }
      [data-sfx-upload-float] .float-item-act.del:hover { color:#ef4444; }
      [data-sfx-upload-float] .float-item-act.paused { color:#d97706; }
      [data-sfx-upload-float] .float-item-act.paused:hover { color:#d97706; background:#fef3c7; }
      [data-sfx-upload-float] .float-item-act.locate { color:#2563eb; }
      [data-sfx-upload-float] .float-item-act.locate:hover { color:#1d4ed8; background:#eff6ff; }
      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }
      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }
      [data-sfx-upload-float] .float-collapsed-icon.done { color:var(--success, #22c55e); }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:var(--warning, #f59e0b); }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:var(--destructive, #ef4444); }
      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }
      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }
      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }
      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sfxSpin { to{transform:rotate(360deg)} }
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),tt(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(N.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(tt(m,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._unsubscribeTouch=so(()=>this.requestUpdate()),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&Yt.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Pa(e||"en");ql(e||"en").catch(()=>{}),i&&t.on("missingKey",(r,n,a,l,d,p)=>{const u=a.match(/_(?:zero|one|two|few|many|other)$/),f=u&&(p!=null&&p[`defaultValue${u[0]}`])?String(p[`defaultValue${u[0]}`]):l;Ra.handleMissingKey(a,f,n)});const s=(r,n,a)=>ft(r,n,a);this._store.setState({t:s})}catch{}}disconnectedCallback(){var e,t,i,s,r,n;super.disconnectedCallback(),pr(this),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,(t=this._hostStyleObserver)==null||t.disconnect(),this._hostStyleObserver=null,(i=this._unsubStoreEvents)==null||i.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(s=this._portalContainer)==null||s.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const a of this._store.getState().files.values())a.previewUrl&&URL.revokeObjectURL(a.previewUrl);(n=this._engine)==null||n.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const r=i.defaults,n=this._seededSettingsDefaults;r.resize!==void 0&&r.resize!==(n==null?void 0:n.resize)&&(this._setResize=r.resize),r.maxWidth!==void 0&&r.maxWidth!==(n==null?void 0:n.maxWidth)&&(this._setMaxW=r.maxWidth),r.maxHeight!==void 0&&r.maxHeight!==(n==null?void 0:n.maxHeight)&&(this._setMaxH=r.maxHeight),r.transcode!==void 0&&r.transcode!==(n==null?void 0:n.transcode)&&(this._setTranscode=r.transcode),r.resolution!==void 0&&r.resolution!==(n==null?void 0:n.resolution)&&(this._setResolution=r.resolution),r.protocol!==void 0&&r.protocol!==(n==null?void 0:n.protocol)&&(this._setProtocol=r.protocol),r.resumable!==void 0&&r.resumable!==(n==null?void 0:n.resumable)&&(this._setResumable=r.resumable),this._seededSettingsDefaults={...r}}const s=this._lastUploadId;this._hasStoredReview=s!=null&&Yt.exists(s),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var s,r,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=Eo(t.container,e.apiDomain),this._authHeaders=Ks(t),this._ensureEngine(),(r=this._engine)==null||r.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(s=e.connectors)==null?void 0:s.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e);return}const i=++this._authResolveId;try{const l=await tu(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,s;const t=e instanceof Error?e.message:String(e);return(s=(i=this.config)==null?void 0:i.auth)!=null&&s.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var s;const i=(s=this.shadowRoot)==null?void 0:s.querySelector("sfx-toast");i==null||i.show(e,t)}_applyNamingConvention(e){const t=e.namingConvention;if(!(t!=null&&t.enabled)){this._setNamingConvention(null,!1);return}const i=su(t.regexB64);this._setNamingConvention(i,i===null)}_setNamingConvention(e,t){this._store.setState({namingConvention:{regex:e,broken:t}})}_normalizeTusConfig(){var a,l,d,p;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let s=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;s||(s={})}if(!s)return;const r=(p=(d=this.config)==null?void 0:d.connectors)==null?void 0:p.companionUrl;if(!r)return s;const n=r.replace(/\/+$/,"");return{...s,endpoint:s.endpoint??`${n}/files`,jsonBase:s.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return s=>{const r={},n=Ie(s);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(r.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(r.postprocess="transcode",r["video-resolution"]=this._setResolution,r.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(r.opt_force_name=l)}const a=i==null?void 0:i(s);return a&&Object.assign(r,a),Object.keys(r).length>0?r:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Gp(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,s)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:s}),onFocusPointError:i=>this._showToast(this._storeCtrl.state.t("focusPointSaveFailed","Could not save the focus point for {{name}}",{name:i.name}),"warning")}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,s=this._storeCtrl.state.t;try{const{fetchMetadataSchema:r,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:l,hasCachedDependencies:d,canReachHub:p,canUseSettingsSchema:u,HUB_HEADERS_HINT:f,createTagsAutocomplete:x,createTaxonomyService:k,createUltratagsService:v,createFieldI18nService:P}=await Wt(async()=>{const{fetchMetadataSchema:z,fetchDependencies:q,normalizeDependencies:Q,hasCachedSchema:le,hasCachedDependencies:L,canReachHub:fe,canUseSettingsSchema:V,HUB_HEADERS_HINT:w,createTagsAutocomplete:g,createTaxonomyService:b,createUltratagsService:R,createFieldI18nService:O}=await import("./index-08TnK9Om.js");return{fetchMetadataSchema:z,fetchDependencies:q,normalizeDependencies:Q,hasCachedSchema:le,hasCachedDependencies:L,canReachHub:fe,canUseSettingsSchema:V,HUB_HEADERS_HINT:w,createTagsAutocomplete:g,createTaxonomyService:b,createUltratagsService:R,createFieldI18nService:O}},__vite__mapDeps([5,1,2]));if(i!==this._metadataSchemaResolveId)return;const T=p(t)&&!!t.projectUuid,$=T||u(t)||!!t.rawMetadata||l(t.projectUuid,this._apiBase),S=T||!!t.projectUuid&&d(t.projectUuid)||!!t.rawDependencies;if(!$){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig sets schemaSource: 'hub' but no usable Hub auth is configured — skipping metadata schema and dependencies. Drop schemaSource to load the schema from /v5/settings instead. ${f}`),this._showToast(s("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let _;t.rawDependencies?_=Promise.resolve(a(t.rawDependencies)):S&&t.projectUuid?_=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(z=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",z),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${f}`)),_=Promise.resolve([]));const[y,A]=await Promise.all([r(this._apiBase,this._authHeaders,t.projectUuid,t),_]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=A,this._metadataAutocomplete=x(this._apiBase,this._authHeaders),this._taxonomyService=k(this._apiBase,this._authHeaders),this._ultratagsService=v(this._apiBase,this._authHeaders),this._fieldI18nService=P(this._apiBase,this._authHeaders);let F=y.productsEnabled?$l(y,this._storeCtrl.state.t):y;t.focusPointEnabled&&(F=Ml(F,this._storeCtrl.state.t)),this._metadataSchema=F;const U=this._metadataSchema.fields.filter(z=>ii(z,t)).map(z=>z.key);this._dispatchPublic(N.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:U}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast(s("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let s=!1;const r=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!X._MODIFIABLE_STATUSES.has(a.status))continue;const l=zt({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const d={};for(const p of t.fields){const u=l.get(p.ckey);(u==null?void 0:u.setValue)!==void 0&&(u.hidden||Le(a.meta[p.key])&&(d[p.key]=sl(p,u.setValue)))}Object.keys(d).length!==0&&(r.set(a.id,{...a,meta:{...a.meta,...d}}),s=!0)}s&&this._store.setState({files:r})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const s=new Map(t);for(const r of t.values()){if(!X._MODIFIABLE_STATUSES.has(r.status))continue;const n=zt({mime:r.type??"",meta:r.meta},e,this._metadataDependencies),a=ol(r.meta,e,n);a!==r.meta&&(s.set(r.id,{...r,meta:a}),i=!0)}i&&this._store.setState({files:s})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const s=this._store.getState().files.get(e);if(!s||s.name===i)return;const r=new Map(this._store.getState().files);r.set(e,{...s,name:i,nameIsUserDefined:!0}),this._store.setState({files:r})}_focusPointValueFor(e){if(this._focusPointDraft&&this._previewFileId===e.id)return this._focusPointDraft;if(!e.focusPoint)return null;const t=$n(e.focusPoint);return t.horizontal===""||t.vertical===""?null:t}get _focusPointMarkerVisible(){return this._focusPointPicking||this._focusPointFieldHovered||this._focusPointFieldFocused}_resetFocusPointPicking(){this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1}_previewMeta(e){var i,s,r;const t=(i=this._metadataSchema)==null?void 0:i.fieldsByKey.has(He);return!((s=this._metadataSchema)!=null&&s.productsEnabled)&&!t?e.meta:{...e.meta,...(r=this._metadataSchema)!=null&&r.productsEnabled?{[bt]:e.product.ref,[xt]:e.product.position}:{},...t?{[He]:this._focusPointDraft!==null&&this._previewFileId===e.id?this._focusPointDraft:e.focusPoint??null}:{}}}_resolvedSchemaFor(e){if(!this._metadataSchema)return null;const t=this._metadataDependencies.length>0?zt({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies):null;if(!(this._metadataSchema.fieldsByKey.has(He)&&!(e.type??"").startsWith("image/")))return t;const s=new Map(t??[]);return s.set(He,{...s.get(He),hidden:!0,required:!1,contributingDependencyUuids:[]}),s}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:En(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Rl(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?Tn(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}get _requiredFieldsTotal(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Tl(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies).size}get _requiredFieldsRemaining(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Object.keys(Pl(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)).length}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var s;const e=this._isPillExpanded?"card":"pill",t=(s=this._portalContainer)==null?void 0:s.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var s,r,n,a,l,d,p,u,f,x;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(s=this.config)==null?void 0:s.callbacks;for(const[k,v]of e.files){const P=t.files.get(k);if(!P){v.relativeFolder&&this._firedFolders.delete(v.relativeFolder);continue}if(P.status!==v.status)switch(v.status){case"uploading":P.status==="paused"&&(this._dispatchPublic(N.UPLOAD_RESUMED,{file:v}),(r=i==null?void 0:i.onUploadResumed)==null||r.call(i,v));break;case"complete":v.response&&(this._dispatchPublic(N.UPLOAD_COMPLETE,{file:v,response:v.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,v,v.response));break;case"error":case"failed":{const T=new Error(v.error??"Upload failed");this._dispatchPublic(N.UPLOAD_ERROR,{file:v,error:T}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,v,T);break}case"retrying":this._dispatchPublic(N.UPLOAD_RETRY,{file:v,attempt:v.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,v,v.retryCount);break;case"paused":this._dispatchPublic(N.UPLOAD_PAUSED,{file:v}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,v);break}v.status==="uploading"&&P.progress!==v.progress&&(this._dispatchPublic(N.UPLOAD_PROGRESS,{file:v,progress:v.progress,speed:v.speed}),(p=i==null?void 0:i.onUploadProgress)==null||p.call(i,v,v.progress,v.speed)),v.relativeFolder&&P.status!==v.status&&hn.has(v.status)&&!this._firedFolders.has(v.relativeFolder)&&this._maybeDispatchFolderComplete(v.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const k=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=k),this._dispatchPublic(N.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:k}),(u=i==null?void 0:i.onTotalProgress)==null||u.call(i,e.totalProgress,e.totalSpeed,k)}if(t.isUploading&&!e.isUploading){const k=[...e.files.values()];if(!k.some(P=>P.status==="cancelled")){const P=k.filter(_=>_.status==="complete"),T=k.filter(_=>_.status==="failed"||_.status==="error");if(P.length===0&&T.length===0)return;const $=this._lastUploadId;if($!=null){const _=[...P,...T];Yt.save($,_),this._hasStoredReview=_.length>0}this._dispatchPublic(N.ALL_COMPLETE,{successful:P,failed:T}),(f=i==null?void 0:i.onAllComplete)==null||f.call(i,P,T);const S=(x=this.config)==null?void 0:x.closeOnComplete;if(S!==!1&&S!=null){const _=typeof S=="number"?S:1500;this._closeOnCompleteTimer=setTimeout(()=>{var y,A,F;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(N.COMPLETE_ACTION,{}),(F=(A=(y=this.config)==null?void 0:y.callbacks)==null?void 0:A.onCompleteAction)==null||F.call(A),this.close())},_)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const s=[...t.files.values()].filter(l=>l.relativeFolder===e);if(s.length===0||s.some(l=>!hn.has(l.status)))return;const r=s.filter(l=>l.status==="complete"),n=s.filter(l=>l.status==="failed"||l.status==="error");r.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(N.FOLDER_COMPLETE,{folder:e,successful:r,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,r,n))}_filterCoreSources(e,t,i){const s=La(),r=Da()&&(!t||yu(i));return s&&r&&!t?e:e.filter(n=>(s||n.id!=="screen-cast")&&(r||n.id!=="camera")&&(!t||n.id!=="device"))}get _mergedSources(){var k;const e=(k=this.config)==null?void 0:k.connectors,t=ze(),i=ws(this._storeCtrl.state.restrictions);if(e===this._cachedSourcesConfig&&t===this._cachedSourcesTouch&&i===this._cachedSourcesAccept)return this._cachedSources;if(this._cachedSourcesConfig=e,this._cachedSourcesTouch=t,this._cachedSourcesAccept=i,!e)return this._cachedSources=this._filterCoreSources(At.filter(v=>v.id!=="url"),t,i),this._cachedSources;const s=e.providers.length>0?_u(e.providers):[],r=e.customSources??[],n=e.coreSources?new Set(e.coreSources):null,a=n?At.filter(v=>n.has(v.id)):At,l=this._filterCoreSources(e.companionUrl?a:a.filter(v=>v.id!=="url"),t,i),d=t?["camera","url"]:["device","url"],p=d.map(v=>l.find(P=>P.id===v)).filter(v=>!!v),u=l.filter(v=>!d.includes(v.id)),f=new Set,x=[];for(const v of[...p,...s,...u,...r])if(!f.has(v.id)){if(X._RESERVED_IDS.has(v.id)&&v.onActivate){console.warn(`[sfx-uploader] Custom source id "${v.id}" conflicts with a built-in source and was skipped.`);continue}f.add(v.id),x.push(v)}return this._cachedSources=x,this._cachedSources}get _tileSources(){const e=this._mergedSources;return e===this._cachedTileSourcesFrom?this._cachedTileSources:(this._cachedTileSourcesFrom=e,this._cachedTileSources=this._withTileDeviceSource(e),this._cachedTileSources)}_withTileDeviceSource(e){var i,s;if(!ze()||e.some(r=>r.id==="device"))return e;const t=(s=(i=this.config)==null?void 0:i.connectors)==null?void 0:s.coreSources;return t&&!t.includes("device")?e:[Pu,...e]}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(s=>i.has(s.status))&&t.some(s=>s.status==="complete"||s.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var l,d,p,u,f;const t=(l=this.config)==null?void 0:l.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((d=this.config)==null?void 0:d.preserveFolderStructure)!==!1;let s=0,r=!1;const n=(x,k,v)=>`${x}\0${k}\0${v}`,a=new Set;for(const x of this._store.getState().files.values())x.status!=="rejected"&&x.status!=="cancelled"&&a.add(n(x.name,x.size,x.relativeFolder??""));for(const x of e){if(ys(x.name))continue;if(r){s++;continue}const k=i?qp(Np(x)):"",v=this._store.getState(),P=n(x.name,x.size,k);if(a.has(P))continue;const T=x.type||Ys(x.name),$=_s({name:x.name,size:x.size,type:T},v.restrictions,v.files);if($){if(xu($)){r=!0,s++;continue}const y=T.startsWith("image/")&&!Qe(T)?URL.createObjectURL(x):null,A={id:Tt(),status:"rejected",file:x,remoteUrl:null,name:x.name,size:x.size,type:T,previewUrl:y,duration:null,progress:0,speed:0,bytesUploaded:0,error:$.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Rt,relativeFolder:k};Ct(this._store,A),this._dispatchPublic(N.FILE_REJECTED,{file:A,reason:$.message}),(p=t==null?void 0:t.onFileRejected)==null||p.call(t,A,$.message);const F=(u=this.config)==null?void 0:u.rejectedFileAutoRemoveDelay,U=F===!1||F===0||F===void 0?0:F;if(U>0){const z=A.id,q=setTimeout(()=>{this._rejectedTimers.delete(z);const Q=this._store.getState().files.get(z);Q&&Q.status==="rejected"&&ur(this._store,z)},U);this._rejectedTimers.set(z,q)}continue}let S=null;T.startsWith("image/")&&!Qe(T)&&(S=URL.createObjectURL(x));const _={id:Tt(),status:"idle",file:x,remoteUrl:null,name:x.name,size:x.size,type:T,previewUrl:S,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Rt,relativeFolder:k};if(Ct(this._store,_),a.add(P),this._dispatchPublic(N.FILE_ADDED,{file:_}),(f=t==null?void 0:t.onFileAdded)==null||f.call(t,_),x.type.startsWith("video/")){bu(x).then(A=>{if(!A)return;const F=this._store.getState(),U=F.files.get(_.id);if(U){const z=new Map(F.files);z.set(_.id,{...U,previewUrl:A}),this._store.setState({files:z})}else URL.revokeObjectURL(A)});const y=document.createElement("video");y.preload="metadata",y.src=URL.createObjectURL(x),y.onerror=()=>{URL.revokeObjectURL(y.src)},y.onloadedmetadata=()=>{const A=y.duration;if(URL.revokeObjectURL(y.src),!isFinite(A))return;const F=this._store.getState(),U=F.files.get(_.id);if(U){const z=new Map(F.files);z.set(_.id,{...U,duration:A}),this._store.setState({files:z})}}}}if(s>0){const x=this._storeCtrl.state.t,k=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(x("tooManyFilesSkipped",{count:s,max:k,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}get _captureInput(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector("input[data-sfx-capture]"))??null}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var r,n,a,l,d;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const p=this._videoBlobUrls.get(t.file);p&&(URL.revokeObjectURL(p),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((r=this._engine)==null||r.cancelFile(e)),ur(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const s=this._rejectedTimers.get(e);if(s&&(clearTimeout(s),this._rejectedTimers.delete(e)),this._previewFileId===e){const p=[...this._store.getState().files.values()];this._previewFileId=p.length>0?p[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(N.FILE_REMOVED,{file:i}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>Ie(e)==="image"&&!Qe(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,s,r;const e=(s=(i=this.config)==null?void 0:i.auth)==null?void 0:s.container,t=(r=this._authHeaders)==null?void 0:r["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var r,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Qr((n=(r=this.config)==null?void 0:r.similarityCheck)==null?void 0:n.confidence),s=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),en(e,{...t,threshold:i,endpoint:s}).then(d=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,d)}).catch(d=>{console.error("[sfx-uploader] Similarity check failed for",e.name,d),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var f,x,k,v;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(P=>P.id);const i=Qr((x=(f=this.config)==null?void 0:f.similarityCheck)==null?void 0:x.confidence),s=(v=(k=this.config)==null?void 0:k.similarityCheck)==null?void 0:v.endpoint,r=new AbortController;this._similarAbort=r;const n=[...e];let a=0,l=0;const d=e.length,p=()=>{if(!r.signal.aborted){if(!this._previewFileId){const P=e.find(T=>{var $;return((($=this._similarResults.get(T.id))==null?void 0:$.length)??0)>0});P&&(this._previewFileId=P.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},u=()=>{if(!r.signal.aborted)for(;a<gh&&n.length>0;){const P=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(P.id),en(P,{...t,threshold:i,endpoint:s,signal:r.signal}).then(T=>{r.signal.aborted||(this._similarMarkInactive(P.id),this._similarSetResults(P.id,T))}).catch(T=>{r.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",P.name,T),this._similarMarkInactive(P.id),this._similarSetResults(P.id,[]))}).finally(()=>{r.signal.aborted||(a-=1,l+=1,l===d?p():u())})}};u()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),s=i>0?t.slice(i+1).toUpperCase():"";return s&&s.length<=5?s:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(s=>{var r,n;return s.status==="complete"&&!!((n=(r=s.response)==null?void 0:r.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var r,n,a;if(!e)return;const t=za(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(N.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),s=(a=(n=(r=this.config)==null?void 0:r.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||s===!1)&&t&&window.location.assign(t)}get _hasUnsavedUploadWork(){var e;if(this._phase==="uploading")return!0;if(((e=this.config)==null?void 0:e.clearOnClose)===!1)return!1;for(const t of this._store.getState().files.values())if(t.status==="idle"||t.status==="queued")return!0;return!1}_confirmDismiss(){return this._hasUnsavedUploadWork?new Promise(e=>{this._confirmDismissResolve=e,this._confirmDismissVisible=!0}):Promise.resolve(!0)}render(){var s;const e=((s=this.config)==null?void 0:s.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?c`
        ${this._isOpen&&!this._isMinimized?c`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:m}
        ${this._renderFsOverlay()}
      `:c`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return m;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(s=>s.id===this._previewFileId);return c`
      <div
        class="fs-overlay ${this._fsZoom>1?"zoomed":""} ${this._fsDragging?"panning":""}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile?c`<video
              class="fs-img"
              src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
              controls
              playsinline
              draggable="false"
              @click=${s=>s.stopPropagation()}
            ></video>`:c`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${Z(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${s=>s.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=X._FS_ZOOM_LEVELS[X._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=X._FS_ZOOM_LEVELS[X._FS_ZOOM_LEVELS.length-1]?c`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`:c`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${e("close","Close")}>
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
      <button
        class="fs-nav prev"
        ?disabled=${i<=0}
        @click=${s=>{s.stopPropagation(),this._navigateFs(-1)}}
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
        class="fs-nav next"
        ?disabled=${i>=t.length-1}
        @click=${s=>{s.stopPropagation(),this._navigateFs(1)}}
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
    `}_renderProgressHeaderActions(){var a,l,d;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((l=this.config)==null?void 0:l.header)??(t==="modal"?"close":!0),s=!!((d=this.config)!=null&&d.minimizeOnUpload)&&t!=="inline",r=i==="close";if(!s&&!r)return m;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return c`
      <div class="header-actions">
        ${s?c`<button
              class="header-btn"
              aria-label=${this._phase==="uploading"?e("minimizeAndContinue","Minimize & continue in background"):e("minimize","Minimize")}
              title=${e("minimize","Minimize")}
              @click=${this._onMinimize}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>`:m}
        ${r?c`<button
              class="header-btn"
              aria-label=${e("close","Close")}
              title=${e("close","Close")}
              @click=${n}
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
            </button>`:m}
      </div>
    `}_renderInlineHeader(e){return c`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?c`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:m}
          ${e.title?c`<h2 class="inline-header-title">${e.title}</h2>`:m}
        </div>
        ${e.description?c`<div class="inline-header-desc">${e.description}</div>`:m}
      </div>
    `}_renderHeader(){var T,$,S,_,y,A;const e=this._storeCtrl.state.t,t=((T=this.config)==null?void 0:T.mode)??"modal";if(this._phase==="uploading"){const F=this._storeCtrl.state,z=[...F.files.values()].filter(L=>L.status!=="rejected"&&L.status!=="cancelled"),q=z.length,Q=z.filter(L=>L.status==="complete").length,le=F.totalProgress??0;return c`
        <div class="header upload-header has-progress">
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
                ${e("uploadingFiles",{count:q,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:Q,total:q})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:tn(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(le)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${Z({width:`${le}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const F=[...this._storeCtrl.state.files.values()].filter(z=>z.status!=="rejected"&&z.status!=="cancelled"),U=this._batchOutcome(F,!0);return c`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon ${U.outcomeClass}">${U.outcomeIcon}</div>
            <div>
              <div class="float-title">${U.title}</div>
              <div class="float-subtitle">${U.doneSummary}</div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          ${U.segTotal>0?c`<div class="header-progress">
                <div class="header-overall-bar" aria-hidden="true">
                  ${U.newCount>0?c`<div
                        class="header-seg ok"
                        ${Z({width:U.segPct(U.newCount)})}
                      ></div>`:m}
                  ${U.alreadyExistedCount>0?c`<div
                        class="header-seg dup"
                        ${Z({width:U.segPct(U.alreadyExistedCount)})}
                      ></div>`:m}
                  ${U.failed>0?c`<div
                        class="header-seg fail"
                        ${Z({width:U.segPct(U.failed)})}
                      ></div>`:m}
                </div>
              </div>`:m}
        </div>
      `}if(t==="inline"&&(($=this.config)!=null&&$.inlineHeader))return m;const i=((S=this.config)==null?void 0:S.header)??(t==="modal"?"close":!0);if(i===!1)return m;const s=t==="modal"?this._onModalDismiss:this._onInlineDismiss,r=i==="back"?c`<button
            class="header-btn header-btn-back"
            aria-label=${e("backToAssetPicker","Back to Asset Picker")}
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
          </button>`:m,n=(_=this.config)==null?void 0:_.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,d=[...this._storeCtrl.state.files.values()],p=d.some(F=>Ie(F)==="image"&&!Qe(F.type)),u=d.some(F=>Ie(F)==="pdf"),f=d.some(F=>Ie(F)==="vid"),k=a&&(p||u||f||l)?c`<button
            class="header-btn header-btn-settings ${this._showSettings?"on":""}"
            aria-label=${e("uploadSettings","Upload settings")}
            title=${e("uploadSettings","Upload settings")}
            @click=${()=>{this._showSettings=!this._showSettings}}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </button>`:m,v=(A=(y=this._metadataSchema)==null?void 0:y.regionalVariantsGroups)!=null&&A.length?c`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:m,P=i==="close"?c`<button
            class="header-btn header-btn-close"
            aria-label=${e("close","Close")}
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
          </button>`:m;return c`
      <div class="header">
        ${r}
        ${i!=="back"?c` <div class="header-icon">
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
            </div>`:m}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${v} ${k} ${P}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const s={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,s),t(s)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,s=e.filter(S=>S.status==="complete").length,r=e.filter(S=>S.status==="failed"||S.status==="error").length,n=e.filter(S=>S.status==="complete"&&S.alreadyExisted).length,a=Math.max(s-n,0),l=s>0&&r===0&&n>=s,d=t?r>0?"error":n>0?"warn":"done":"",p=c`<svg
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
    </svg>`,u=c`<svg
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
    </svg>`,f=c`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>`,x=r>0?s>0?p:u:n>0?p:f,k=t?r>0?s>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):l?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),v=[];a>0&&v.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&v.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),r>0&&v.push(i("nFailed","{{count}} failed",{count:r}));const P=v.length>0?v.join(" · "):i("allDone","All done"),T=a+n+r;return{completed:s,failed:r,alreadyExistedCount:n,newCount:a,allAlreadyExisted:l,outcomeClass:d,outcomeIcon:x,title:k,doneSummary:P,segTotal:T,segPct:S=>T>0?`${S/T*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,s=Math.round(t.totalProgress??0),r=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:l,newCount:d,outcomeClass:p,outcomeIcon:u,title:f,doneSummary:x,segPct:k}=this._batchOutcome(e,r),v=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return c`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${r?c`<div class="float-collapsed-icon ${p}">${u}</div>`:c`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${f}</span>
            ${r?m:c`<span class="float-collapsed-pct">${s}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${r&&v?c`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(v)}
                >
                  ${us}
                </button>`:m}
            <button title=${i("openUploader","Open uploader")} @click=${this._onPillExpand}>
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
            <button title=${i("expand","Expand")} @click=${this._onPillClick}>
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
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
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
      `;const P=e.filter(_=>_.status==="failed"||_.status==="error"),T=e.filter(_=>_.status==="complete"&&_.alreadyExisted),$=e.filter(_=>_.status!=="failed"&&_.status!=="error"&&_.status!=="complete"),S=e.filter(_=>_.status==="complete"&&!_.alreadyExisted);return c`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${p}">
              ${r?u:c`<svg
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
              <div class="float-title">${f}</div>
              <div class="float-subtitle">
                ${r?x:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:tn(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${r&&v?c`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(v)}
                >
                  ${us}
                </button>`:m}
            <button title=${i("expand","Expand")} @click=${this._onPillExpand}>
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
            <button title=${i("collapse","Collapse")} @click=${this._onPillClick}>
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
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
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
            <span class="float-progress-label">${i("overallProgress","Overall progress")}</span>
            ${r?m:c`<span class="float-progress-pct">${s}%</span>`}
          </div>
          ${r?c`<div class="float-bar segmented" role="img" aria-label=${x}>
                ${d>0?c`<div
                      class="float-bar-seg ok"
                      ${Z({width:k(d)})}
                    ></div>`:m}
                ${l>0?c`<div
                      class="float-bar-seg dup"
                      ${Z({width:k(l)})}
                    ></div>`:m}
                ${a>0?c`<div
                      class="float-bar-seg fail"
                      ${Z({width:k(a)})}
                    ></div>`:m}
              </div>`:c`<div class="float-bar">
                <div class="float-bar-fill" ${Z({width:`${s}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${Ot(P,_=>_.id,_=>this._renderFloatItem(_,i))}
          ${Ot(T,_=>_.id,_=>this._renderFloatItem(_,i))}
          ${Ot($,_=>_.id,_=>this._renderFloatItem(_,i))}
          ${Ot(S,_=>_.id,_=>this._renderFloatItem(_,i))}
        </div>
      </div>
    `}_truncateTooltip(e,t=140){return e.length>t?`${e.slice(0,t).trimEnd()}…`:e}_renderFloatItem(e,t){var s,r,n;const i=e.status==="failed"||e.status==="error";return c`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${Z(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
        >
          ${e.previewUrl?m:c`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${It(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status==="complete"?c`${(s=this.config)!=null&&s.showLocateButton&&((n=(r=e.response)==null?void 0:r.file)!=null&&n.uuid)?c`<button
                    class="float-item-act locate"
                    title=${t("locate","Locate")}
                    aria-label=${t("locate","Locate")}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${us}
                  </button>`:m}
              ${e.alreadyExisted?c`<div class="float-item-tip">
                    <div
                      class="float-item-done warn"
                      aria-label=${t("alreadyInYourLibrary","Already in your library")}
                    >
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
                    </div>
                    <span class="float-item-tooltip"
                      >${this._truncateTooltip(t("alreadyInYourLibrary","Already in your library"),80)}</span
                    >
                  </div>`:c`<div class="float-item-tip">
                    <div class="float-item-done" aria-label=${t("uploaded","Uploaded")}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span class="float-item-tooltip"
                      >${this._truncateTooltip(t("uploaded","Uploaded"),80)}</span
                    >
                  </div>`}`:i?c`<button
                    class="float-item-retry"
                    title=${t("retry","Retry")}
                    aria-label=${t("retry","Retry")}
                    @click=${()=>{var a;this._ensureEngine(),(a=this._engine)==null||a.retryFile(e.id)}}
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
                  </button>
                  <div class="float-item-error-wrap">
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
                      >${this._truncateTooltip(e.error||t("uploadFailed","Upload failed"))}</span
                    >
                  </div>`:e.status==="paused"?c` <button
                      class="float-item-act paused"
                      title=${t("resume","Resume")}
                      aria-label=${t("resumeUpload","Resume upload")}
                      @click=${()=>{var a;return(a=this._engine)==null?void 0:a.resumeFile(e.id)}}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                    <button
                      class="float-item-act del"
                      title=${t("remove","Remove")}
                      aria-label=${t("removeFile","Remove file")}
                      @click=${()=>this._removeFile(e.id)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>`:c`
                    ${e.status==="uploading"&&e.isTus?c`<button
                          class="float-item-act"
                          title=${t("pause","Pause")}
                          aria-label=${t("pauseUpload","Pause upload")}
                          @click=${()=>{var a;return(a=this._engine)==null?void 0:a.pauseFile(e.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </button>`:m}
                    ${e.status==="uploading"||e.status==="queued"||e.status==="retrying"?c`<button
                          class="float-item-act del"
                          title=${t("remove","Remove")}
                          aria-label=${t("removeFile","Remove file")}
                          @click=${()=>this._removeFile(e.id)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:m}
                    <div class="float-item-spinner"></div>
                  `}
        </div>
      </div>
    `}_renderAssetCount(e,t,i,s){const r=e.reduce((a,l)=>a+(l.size||0),0),n=i!=="uploading"&&i!=="complete"&&!s;return c`
      <div class="asset-count">
        <span class="asset-count-text"
          >${e.length} ${e.length===1?"file":"files"} ·
          ${It(r)}</span
        >
        ${n?c`
              <div class="asset-count-actions">
                <button
                  class="asset-count-btn"
                  type="button"
                  @click=${()=>this._onClearAll()}
                  aria-label=${t("clear","Clear")}
                  title=${t("clear","Clear")}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${bn}</svg>
                </button>
                <button
                  class="asset-count-btn accent"
                  type="button"
                  @click=${this._onAddMore}
                  aria-label=${t("addMore","Add more")}
                  title=${t("addMore","Add more")}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${ks}</svg>
                </button>
              </div>
            `:m}
      </div>
    `}_renderPreviewLayout(e){var P,T,$,S,_,y,A,F,U,z;if(e.length===0)return m;const t=this._storeCtrl.state.t,i=e,s=i.find(q=>q.id===this._previewFileId)??i[0],r=((P=s.name.split(".").pop())==null?void 0:P.toUpperCase())||"";new Date(s.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((q,Q)=>q+(Q.size||0),0),l=!!(($=(T=this.config)==null?void 0:T.similarityCheck)!=null&&$.enabled)&&this._phase==="ready",d=l?i.filter(q=>Ie(q)==="image"&&!Qe(q.type)&&!this._similarResults.has(q.id)).map(q=>q.id):[],p=Math.min(d.length,Je),u=p>0&&this._similarSelectedIds.size>=p,f=this._similarSelectedIds.size>=Je,x=this._similarResults.get(s.id),k=x!==void 0,v=k?this._previewPanelTab:"details";return c`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Z({flex:String(this._splitPct)})}>
          ${((S=this.config)==null?void 0:S.mode)==="inline"&&((_=this.config)!=null&&_.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):m}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${It(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._tileSources}
            .accept=${ws(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((y=this.config)==null?void 0:y.showLocateButton)??!1}
            .showCopyCdnButton=${((A=this.config)==null?void 0:A.showCopyCdnButton)??!1}
            .showCheckSimilar=${l}
            .selectMode=${l}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${u}
            .selectionFull=${f}
            .maxSelection=${Je}
            .previewOpen=${!0}
            .searchRunIds=${this._similarRunIds}
            .searchActiveIds=${this._similarActiveIds}
            .searchResults=${this._similarResults}
            .directory=${this._allowFolderUpload}
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
        <div class="preview-panel" ${Z({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():c`
                <div class="preview-panel-header">
                  <button
                    class="preview-back-btn"
                    @click=${()=>{this._previewFileId=null}}
                    aria-label=${t("backToFileList","Back to file list")}
                    title=${t("back","Back")}
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
                  <span class="preview-header-name" title=${s.name}
                    >${s.name}</span
                  >
                  <div class="preview-header-actions">
                    ${s.previewUrl||s.type.startsWith("video/")&&s.file?c`
                          <button
                            @click=${()=>{this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
                            title=${t("fullscreen","Fullscreen")}
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
                        `:m}
                    <button
                      @click=${()=>{this._previewFileId=null}}
                      title=${t("close","Close")}
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
                ${k?c`
                      <div class="preview-tabs" role="tablist">
                        <button
                          class="preview-tab ${v==="details"?"active":""}"
                          role="tab"
                          aria-selected=${v==="details"}
                          @click=${()=>{this._previewPanelTab="details"}}
                        >
                          ${t("details","Details")}
                        </button>
                        <button
                          class="preview-tab ${v==="similar"?"active":""}"
                          role="tab"
                          aria-selected=${v==="similar"}
                          @click=${()=>{this._previewPanelTab="similar"}}
                        >
                          <span>${t("similarTab","Similar")}</span>${x&&x.length>0?c`<span class="preview-tab-count">${x.length}</span>`:m}
                        </button>
                      </div>
                    `:m}
                ${v==="similar"?this._renderSimilarPanel(s,x??[]):c`
                      <div class="preview-details-body">
                        ${s.type.startsWith("video/")&&s.file?c`
                              <div class="preview-media-area">
                                <div class="preview-img-wrap">
                                  <video
                                    class="preview-image"
                                    src=${this._getVideoBlobUrl(s.file)}
                                    controls
                                    playsinline
                                  ></video>
                                </div>
                                <button
                                  class="preview-nav prev"
                                  ?disabled=${i.indexOf(s)===0}
                                  @click=${()=>this._navigatePreview(i,-1)}
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
                                  ?disabled=${i.indexOf(s)===i.length-1}
                                  @click=${()=>this._navigatePreview(i,1)}
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
                            `:s.previewUrl?c`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${s.previewUrl}
                                      alt=${s.name}
                                    />
                                    ${(F=this._metadataSchema)!=null&&F.fieldsByKey.has(He)&&s.type.startsWith("image/")?c`<sfx-focus-point-overlay
                                          .picking=${this._focusPointPicking}
                                          .showMarker=${this._focusPointMarkerVisible}
                                          .value=${this._focusPointValueFor(s)}
                                          @focus-point-pick=${this._onFocusPointPick}
                                        ></sfx-focus-point-overlay>`:m}
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(s)===0}
                                    @click=${()=>this._navigatePreview(i,-1)}
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
                                    ?disabled=${i.indexOf(s)===i.length-1}
                                    @click=${()=>this._navigatePreview(i,1)}
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
                              `:c`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${Ie(s)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${Qs(r)}
                                      alt="${r?t("extFile","{{ext}} file",{ext:r}):t("file","File")}"
                                      @error=${q=>{const Q=q.target,le=eo();!Q.dataset.fallback&&Q.src!==le&&(Q.dataset.fallback="1",Q.src=le)}}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(s)===0}
                                    @click=${()=>this._navigatePreview(i,-1)}
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
                                    ?disabled=${i.indexOf(s)===i.length-1}
                                    @click=${()=>this._navigatePreview(i,1)}
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
                        ${this._metadataSchema&&((U=this.config)!=null&&U.metadataConfig)?c`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${r}${s.size?` · ${It(s.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                              </div>
                            </div>`:m}
                        ${this._metadataSchema&&((z=this.config)!=null&&z.metadataConfig)?c`
                              <div
                                class="preview-metadata"
                                @field-blur=${this._onPreviewMetadataBlur}
                                @field-change=${this._onPreviewMetadataChange}
                                @field-escape=${this._onPreviewMetadataEscape}
                                @field-hover=${this._onPreviewFieldHover}
                                @field-focus=${this._onPreviewFieldFocus}
                                @focus-point-pick-toggle=${this._onFocusPointPickToggle}
                                @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                              >
                                <sfx-metadata-form
                                  .schema=${this._localizedMetadataSchema}
                                  .meta=${this._previewMeta(s)}
                                  .focusPointPicking=${this._focusPointPicking}
                                  .config=${this._effectiveMetadataConfig}
                                  .autocomplete=${this._metadataAutocomplete}
                                  .taxonomyService=${this._taxonomyService}
                                  .ultratags=${this._ultratagsService}
                                  .defaultLanguage=${this._metadataDefaultLanguage}
                                  .taxonodes=${s.taxonodes??null}
                                  .resolvedSchema=${this._resolvedSchemaFor(s)}
                                  .dependencies=${this._metadataDependencies}
                                ></sfx-metadata-form>
                              </div>
                            `:c`
                              <div class="preview-file-info-panel">
                                <div
                                  class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                                  @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                                >
                                  <span>${t("fileInfo","File info")}</span>
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
                                    <div class="preview-file-info-key">
                                      ${t("fileName","File name")}
                                    </div>
                                    <div class="preview-file-info-val">${s.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${r}</div>
                                  </div>
                                  ${s.size?c`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${It(s.size)}
                                          </div>
                                        </div>
                                      `:m}
                                  ${this._previewDims!=="—"?c`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("dimensions","Dimensions")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${this._previewDims}
                                          </div>
                                        </div>
                                      `:m}
                                </div>
                              </div>
                            `}
                      </div>
                    `}
              `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return t.length===0?c`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound","No similar assets found")}</b>
          <span>${i("noSimilarHint","This image looks unique in your library.")}</span>
        </div>
      `:c`
      <div class="psim-body">
        ${t.map(s=>{const r=Math.round(s.score*100);return c`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${s.score>=.85?"high":""}">${r}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(s.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                ${s.url?c`<img src=${s.url} alt="" />`:m}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(s)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(s)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var u;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(f=>Ie(f)==="image"&&!Qe(f.type)),s=t.some(f=>Ie(f)==="pdf"),r=t.some(f=>Ie(f)==="vid"),n=(u=this.config)==null?void 0:u.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=f=>{switch(f){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},d=f=>{switch(f){case"hls":return e("protocolHls","HLS")}},p=f=>x=>{const k=parseInt(x.target.value,10);f(Number.isFinite(k)?k:0)};return c`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name">${e("uploadSettings","Upload settings")}</span>
        <div class="preview-header-actions">
          <button
            @click=${()=>{this._showSettings=!1}}
            title=${e("close","Close")}
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
      <div class="settings-body">
        ${i||s?c`
              <!-- Image settings (only when the queue contains an image or PDF) -->
              <div class="sgroup-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
                </svg>
                ${e("imageSettings","Image settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("resizeImages","Resize Images")}</span>
                <span
                  class="info-i"
                  data-tip=${e("resizeImagesInfo","Scale down large images to the maximum dimensions below before uploading.")}
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" /></svg
                ></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResize?"on":""}"
                  role="switch"
                  aria-checked=${this._setResize}
                  aria-label=${e("resizeImages","Resize Images")}
                  @click=${()=>{this._setResize=!this._setResize}}
                ></button>
              </div>
              <div class="sfields ${this._setResize?"":"dep-off"}">
                <div class="sfield">
                  <label>${e("maxWidth","Max Width")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxW)}
                      @input=${p(f=>this._setMaxW=f)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
                <div class="sfield">
                  <label>${e("maxHeight","Max Height")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxH)}
                      @input=${p(f=>this._setMaxH=f)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:m}
        ${r?c`
              <!-- Video settings (only when the queue contains a video) -->
              <div class="sgroup-title sgroup-title-spaced">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m22 8-6 4 6 4V8Z" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
                ${e("videoSettings","Video settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("transcodeVideo","Transcode video")}</span>
                <span
                  class="info-i"
                  data-tip=${e("transcodeVideoInfo","Re-encode videos into adaptive streaming formats for smoother playback.")}
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" /></svg
                ></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setTranscode?"on":""}"
                  role="switch"
                  aria-checked=${this._setTranscode}
                  aria-label=${e("transcodeVideo","Transcode video")}
                  @click=${()=>{this._setTranscode=!this._setTranscode,this._setTranscode||(this._setResolutionOpen=!1)}}
                ></button>
              </div>
              <div
                class="sfield sfield-block ${this._setTranscode?"":"dep-off"} ${this._setResolutionOpen?"open":""}"
              >
                <label>${e("resolution","Resolution")}</label>
                <div
                  class="ssel"
                  @click=${()=>{this._setResolutionOpen=!this._setResolutionOpen}}
                >
                  <span>${l(this._setResolution)}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                ${this._setResolutionOpen&&this._setTranscode?c`
                      <div class="smenu">
                        ${mh.map(f=>c`
                            <div
                              class="sopt ${f===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=f,this._setResolutionOpen=!1}}
                            >
                              ${l(f)}
                              ${f===this._setResolution?c`<svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>`:m}
                            </div>
                          `)}
                      </div>
                    `:m}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${vh.map(f=>c`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=f}}
                    >
                      <span class="sradio ${this._setProtocol===f?"on":""}"></span>
                      <span class="sradio-lbl">${d(f)}</span>
                    </div>
                  `)}
              </div>
            `:m}
        ${a?c`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${e("resumeUploads","Resume uploads")}</span>
                <span
                  class="info-i"
                  data-tip=${e("resumeUploadsInfo","Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go")}
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" /></svg
                ></span>
                <span
                  class="sbeta"
                  data-tip=${e("betaInfo","Beta functionality — you may experience performance issues in some cases")}
                  >${e("beta","Beta")}</span
                >
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable?"on":""}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${e("resumeUploads","Resume uploads")}
                  @click=${()=>{var f;this._setResumable=!this._setResumable,(f=this._engine)==null||f.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:m}
      </div>
    `}_navigatePreview(e,t){var r;const s=e.findIndex(n=>n.id===this._previewFileId)+t;if(s>=0&&s<e.length){const n=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[s].id}}_namingConventionGate(e,t){const{regex:i,broken:s}=t;return{hasViolation:!s&&!!i&&e.some(n=>!Zr(n.name,i)),broken:s}}_computeNamingViolationIds(e,t,i){if(!t||!i)return this._namingViolationIdsKey!==""&&(this._namingViolationIdsKey="",this._namingViolationIds=new Set),this._namingViolationIds;const s=e.filter(n=>!Zr(n.name,i)).map(n=>n.id),r=s.join(",");return r!==this._namingViolationIdsKey&&(this._namingViolationIdsKey=r,this._namingViolationIds=new Set(s)),this._namingViolationIds}_renderNamingConventionBanner(e,t,i){if(!t&&!i)return m;const s=i?e("filenameNamingConventionMisconfigured","Upload can't proceed: the file naming rule configured for this project is invalid. Contact your administrator."):e("filenameNamingConventionBlocked","Upload can't proceed as file(s) is/are not matching the naming convention enforced.");return c`
      <div class="naming-banner">
        <span class="naming-banner-ico">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <span class="naming-banner-txt">${s}</span>
      </div>
    `}_renderBody(){var $,S,_,y,A,F,U,z,q,Q,le,L,fe;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],s=i.filter(V=>V.status==="idle"||V.status==="queued"||V.status==="error"||V.status==="failed"),{hasViolation:r,broken:n}=this._namingConventionGate(s,e.namingConvention),a=this._computeNamingViolationIds(s,r,e.namingConvention.regex),l=this._phase,d=ws(e.restrictions),p=i.length>0,u=l==="ready"?this._requiredFieldsRemaining:0,x=!!((S=($=this.config)==null?void 0:$.similarityCheck)!=null&&S.enabled)&&l==="ready",k=x?i.filter(V=>Ie(V)==="image"&&!Qe(V.type)&&!this._similarResults.has(V.id)).map(V=>V.id):[],v=Math.min(k.length,Je),P=v>0&&this._similarSelectedIds.size>=v,T=this._similarSelectedIds.size>=Je;return c`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-locate=${this._onFileLocate}
        @file-copy-cdn=${this._onFileCopyCdn}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
        @fill-metadata=${this._onFillMetadata}
        @require-metadata=${this._onRequireMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${()=>this._onClearAll()}
        @add-more=${this._onAddMore}
        @check-similar-enter=${this._onCheckSimilarEnter}
        @check-similar-cancel=${this._onCheckSimilarCancel}
        @check-similar-run=${this._onCheckSimilarRun}
        @check-similar-single=${this._onCheckSimilarSingle}
        @similar-toggle=${this._onSimilarToggle}
        @similar-select-all=${this._onSimilarSelectAll}
        @check-similar-search-cancel=${this._onSimilarSearchCancel}
        @similar-open-results=${this._onSimilarOpenResults}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @cancel-upload=${this._onCancelUpload}
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
        ${ze()?c`<input
              data-sfx-capture
              type="file"
              capture="environment"
              accept=${d||"image/*,video/*"}
              @change=${this._onCaptureChange}
            />`:m}
        <div
          class="body ${p?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${p?this._onBodyDragEnter:m}
          @dragover=${p?this._onBodyDragOver:m}
          @dragleave=${p?this._onBodyDragLeave:m}
          @drop=${p?this._onBodyDrop:m}
        >
          ${((_=this.config)==null?void 0:_.mode)==="inline"&&((y=this.config)!=null&&y.inlineHeader)&&!this._previewFileId&&l!=="uploading"&&l!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):m}
          ${this._isReviewing?c`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((A=this.config)==null?void 0:A.showLocateButton)??!1}
                  .showCopyCdnButton=${((F=this.config)==null?void 0:F.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:c`
                ${p?m:c`<sfx-drop-zone
                        .t=${t}
                        .compact=${p}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${d}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((U=this.config)==null?void 0:U.sourcesLayout)??"pills"}
                        .mode=${((z=this.config)==null?void 0:z.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?c`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:m}`}
                ${p?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):c`
                        ${l==="ready"?this._renderNamingConventionBanner(t,r,n):m}
                        ${this._renderAssetCount(i,t,l,x&&this._similarSelectedIds.size>0)}
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${l!=="uploading"&&l!=="complete"}
                          .sources=${this._tileSources}
                          .accept=${d}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((q=this.config)==null?void 0:q.showLocateButton)??!1}
                          .showCopyCdnButton=${((Q=this.config)==null?void 0:Q.showCopyCdnButton)??!1}
                          .showCheckSimilar=${x}
                          .selectMode=${x}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${P}
                          .selectionFull=${T}
                          .maxSelection=${Je}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .namingViolationIds=${a}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:m}
              `}
        </div>

        ${p?c`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${l==="uploading"?"uploading":l==="complete"?"done":"idle"}
                .fileCount=${l==="uploading"||l==="complete"?i.filter(V=>V.status!=="rejected"&&V.status!=="cancelled").length:s.length}
                .failedCount=${i.filter(V=>V.status==="failed"||V.status==="error").length}
                .blocked=${l==="ready"&&(r||n)}
                .showFillMetadata=${!!(((le=this.config)==null?void 0:le.showFillMetadata)??((L=this.config)==null?void 0:L.metadataConfig))&&u===0}
                .requireMetadataFirst=${l==="ready"?this._hasMetadataIssues:!1}
                .requiredFieldsTotal=${l==="ready"?this._requiredFieldsTotal:0}
                .requiredFieldsRemaining=${u}
                .showCheckSimilar=${!1}
                .selectMode=${x&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${v}
                .allSelected=${P}
              ></sfx-actions-bar>
            `:m}
        ${this._showUrlDialog?c`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:m}
        ${this._showCameraDialog?c`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:m}
        ${this._showScreenCastDialog?c`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:m}
        ${this._confirmDismissVisible?c`
              <div class="up-confirm-overlay" @click=${this._onConfirmDismissCancel}>
                <div
                  class="up-confirm"
                  role="alertdialog"
                  aria-modal="true"
                  aria-labelledby="up-confirm-msg"
                  @click=${V=>V.stopPropagation()}
                >
                  <p class="up-confirm-text" id="up-confirm-msg">
                    ${this._phase==="uploading"?t("discardActiveUpload","Upload in progress. Cancel it and close?"):t("discardQueuedFiles","You haven't uploaded these files yet. Discard them?")}
                  </p>
                  <div class="up-confirm-actions">
                    <button class="btn-ghost" @click=${this._onConfirmDismissCancel}>
                      ${t("cancel","Cancel")}
                    </button>
                    <button class="btn-primary" @click=${this._onConfirmDismissOk}>
                      ${t("discard","Discard")}
                    </button>
                  </div>
                </div>
              </div>
            `:m}
        ${this._activeConnector&&((fe=this.config)!=null&&fe.connectors)?c`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${this._activeConnector==="google-drive"&&this.config.connectors.googlePicker?c`
                        <sfx-google-picker-view
                          .t=${t}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:un.has(this._activeConnector)?c`
                          <sfx-search-provider-browser
                            .t=${t}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:c`
                          <sfx-provider-browser
                            .t=${t}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-provider-browser>
                        `}
                </div>
              </div>
            `:m}
        ${this._bulkMetadataOpen&&this._metadataSchema?c`
              <sfx-bulk-metadata-modal
                .schema=${this._bulkMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(V=>X._MODIFIABLE_STATUSES.has(V.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                .primaryAction=${this._bulkMetadataHadIssuesOnOpen?"upload":"save"}
                .operationMode=${"set-only"}
                .exitAction=${"back"}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @tags-save-batch=${this._onBulkTagsSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:m}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(r=>r.id===this._previewFileId);if(i===-1)return;const s=i+e;if(s>=0&&s<t.length){const r=t[s];this._fullscreenPreviewUrl=r.previewUrl,this._fullscreenVideoFile=r.type.startsWith("video/")&&r.file?r.file:null,this._previewFileId=r.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},X.styles=j`
    :host {
      display: block;
      height: inherit;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      /* Literal blue defaults first: browsers without color-mix keep a valid
         gradient/glow (a var() fallback would NOT kick in here, since these
         custom props are defined). The @supports block below upgrades them to
         shades derived from --sfx-up-primary so a host that sets only --primary
         (or --sfx-up-primary) gets a cohesive single-hue button. Hosts can
         still override --primary-hover/--primary-mid/--accent explicitly. */
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-warning: var(--warning, #f59e0b);
      --sfx-up-error: var(--destructive, #dc2626);
      --sfx-up-text: var(--foreground, #1e293b);
      --sfx-up-text-secondary: var(--secondary-foreground, #475569);
      --sfx-up-text-muted: var(--muted-foreground, #94a3b8);
      --sfx-up-border: var(--border, #e8edf5);
      --sfx-up-border-light: var(--muted, #f1f5f9);
      --sfx-up-bg: var(--background, #ffffff);
      --sfx-up-radius: 16px;
      --sfx-up-font: 'Inter', system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-modal-max-width: 1100px;
      --sfx-up-bulk-modal-width: 980px;
      --sfx-up-bulk-modal-height: 82vh;
      --sfx-up-bulk-modal-max-width: 1600px;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
      /* Fullscreen overlay z-index stack — single source of truth so
         mobile overrides don't drift out of sync with base values. */
      --sfx-fs-z: 10000;
      --sfx-fs-controls-z: 10001;
    }

    /* Derive the hover/mid/bg/glow shades from --sfx-up-primary so a single
       custom --primary produces a cohesive button. Gated on color-mix support
       so the literal-blue defaults above stay intact on older browsers. Hosts
       that set --primary-hover/--primary-mid/--accent still win via the var()
       fallbacks. */
    @supports (color: color-mix(in srgb, red, blue)) {
      :host {
        --sfx-up-primary-hover: var(
          --primary-hover,
          color-mix(in srgb, var(--sfx-up-primary) 82%, #000)
        );
        --sfx-up-primary-mid: var(
          --primary-mid,
          color-mix(in srgb, var(--sfx-up-primary) 80%, #fff)
        );
        --sfx-up-primary-bg: var(--accent, color-mix(in srgb, var(--sfx-up-primary) 10%, #fff));
        --sfx-up-primary-glow: color-mix(in srgb, var(--sfx-up-primary) 28%, transparent);
      }
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      overflow: hidden;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: var(--sfx-up-modal-max-width, 1100px);
      height: var(--sfx-up-max-height, 88vh);
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
      /* Lift the header (and its overflowing children, e.g. the regional
         settings dropdown) above the body. The body is position:relative,
         so without this its subtree — including the "View last upload" pill
         — would paint on top of the dropdown regardless of the dropdown's
         own z-index. */
      position: relative;
      z-index: 2;
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
      /* Transparent by default — the filled background appears only on hover. */
      background: none;
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
      content: 'Back to Asset Picker';
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
      /* 8px gap from the settings gear to its left (when present). The button
         group is right-aligned by .header-title's flex:1, not by an auto
         margin — so this fixed margin only adds the gap, keeping the close
         button flush to the right padding edge. */
      margin-left: 8px;
    }

    /* Regional-settings sits to the left of the gear; same 8px gap rule. */
    .header-regional {
      margin-right: 8px;
    }

    /* Settings gear sits just left of the close button (title's flex:1 pushes
       the button group to the right). No right margin so that in inline mode —
       where there is no close button — the gear lines up with the right padding
       edge, matching the preview panel's close button below it. The gap to the
       close button (when present) comes from .header-btn-close's margin-left. */
    .header-btn-settings {
      margin-right: 0;
    }
    /* Active (settings open): only the icon turns brand-blue — no persistent
       background fill. The fill still appears on hover, like every other icon. */
    .header-btn-settings.on {
      background: none;
      color: var(--sfx-up-primary, #2563eb);
    }
    .header-btn-settings.on:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
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

    /* Native-camera handoff input — triggered from the camera source, never
       shown. See _handleSourceActivation. */
    input[data-sfx-capture] {
      display: none;
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
      /* Establish a stacking context so descendants like the
         .last-upload-pill (z-index: 10) stay contained beneath the
         header (z-index: 2) instead of leaking into the modal-level
         stack and painting over the regional-settings dropdown. */
      position: relative;
      z-index: 0;
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
      content: '';
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
      content: '';
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
      top: 16px;
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
      justify-content: space-between;
      gap: 12px;
      flex-shrink: 0;
    }

    .asset-count-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Clear / Add more are duplicated here and in the actions bar, and exactly
       one copy is ever shown: the bar owns them from 769px up, this row owns
       them below. Both halves of that switch live in the ≤768px block further
       down — this row turns on, and the same rule sets the bar's
       --sfx-up-bar-batch-display to none — so the two can never disagree the
       way a pair of breakpoints in two shadow roots eventually would. */
    .asset-count-actions {
      display: none;
    }

    .asset-count-btn {
      flex: 0 0 36px;
      width: 36px;
      height: 36px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      font-family: inherit;
      background: var(--sfx-up-bg, #fff);
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text-secondary, #64748b);
      transition:
        background 0.15s ease,
        border-color 0.15s ease;
    }

    .asset-count-btn svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .asset-count-btn.accent {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
      color: var(--sfx-up-primary, #2563eb);
    }

    .asset-count-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    /* Filename naming-convention warning — persistent (not a toast) since it
       reflects a standing block on the whole staged batch, not a one-off
       event. Files stay directly editable (rename inline) while this shows. */
    .naming-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 16px 0;
      padding: 10px 16px;
      border-radius: 10px;
      background-color: var(--sfx-up-bg, #fff);
      background-image: linear-gradient(
        var(--destructive-10, #fef2f2),
        var(--destructive-10, #fef2f2)
      );
      border: 1px solid var(--sfx-up-error, rgba(220, 38, 38, 0.25));
      flex-shrink: 0;
    }

    .naming-banner-ico {
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
      color: var(--sfx-up-error, #dc2626);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .naming-banner-ico svg {
      width: 18px;
      height: 18px;
    }

    .naming-banner-txt {
      flex: 1;
      min-width: 0;
      font-size: 13.5px;
      font-weight: 500;
      color: var(--sfx-up-error, #b91c1c);
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

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 24px;
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

    /* When the preview sidebar is open, let the layout use the full
       browser width so the panel sits flush against the right edge. */
    .inline .content:has(.has-preview) {
      max-width: none;
    }

    .inline.no-files .content {
      flex: 1;
      min-height: 0;
    }

    /* Inline: body fits within the remaining space after the header;
       padding: 0 in both states so the header never jumps;
       children use --sfx-inline-pad for horizontal spacing. */
    .inline .body {
      flex: 1;
      overflow: hidden;
      padding: 0;
      min-height: 0;
    }
    .inline .body.has-files {
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
    /* Modal grid view: bigger tiles (≈4 per row at the 1100px modal width) so
       the Details / Check similar buttons fit with their text labels instead of
       collapsing to icons (a tile must stay wider than the 208px icon cutoff in
       file-item.ts). Scoped to the non-preview modal grid only — inline mode and
       the preview split layout keep their own grid-min, and the file-list
       ≤768/≤440 column breakpoints override grid-template-columns entirely, so
       they're unaffected. */
    .modal-card .body > sfx-file-list {
      --sfx-up-grid-min: 220px;
    }

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
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      /* Sit flush against the panel's left edge so the header's
         border-bottom continues from this line without a gap. */
      right: 0;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: '';
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

    .preview-panel::-webkit-scrollbar,
    .preview-details-body::-webkit-scrollbar {
      width: 12px;
    }
    .preview-panel::-webkit-scrollbar-track,
    .preview-details-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .preview-panel::-webkit-scrollbar-thumb,
    .preview-details-body::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 6px;
    }
    .preview-panel::-webkit-scrollbar-thumb:hover,
    .preview-details-body::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
      background-clip: padding-box;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      /* Symmetric vertical padding so the row is evenly centered; right
         padding matches the main header's (24px) so the panel's close
         button lines up vertically with the header's close-all button. */
      padding: 12px 24px 12px 16px;
      flex-shrink: 0;
      box-sizing: border-box;
      min-height: 54px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }
    /* Settings panel only: right padding 16px so the close ✕ lines up with the
       toggles below it (settings-body padding is 16px). The file-preview header
       keeps 24px. */
    .preview-panel-header.settings-header {
      padding-right: 16px;
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
      /* 8px to match the header's gear↔close gap, so the second icon
         (fullscreen) lines up vertically with the header's gear. */
      gap: 8px;
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

    /* Mirror the main header's close-all button (.header-btn) so the panel's
       close button matches it exactly and aligns on the same vertical line. */
    .preview-panel-header button {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      /* Transparent by default — filled background appears only on hover. */
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
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    /* --- Details / Similar tab switcher (preview side-panel) --- */
    .preview-tabs {
      display: flex;
      align-items: center;
      gap: 4px;
      /* Symmetric vertical padding so the row is evenly centered. */
      padding: 8px 16px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
    }
    .preview-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 30px;
      padding: 0 12px;
      border: none;
      background: none;
      border-bottom: 2px solid transparent;
      color: var(--sfx-up-text-muted, #5b6e82);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition:
        color 0.15s,
        border-color 0.15s;
    }
    .preview-tab:hover {
      color: var(--sfx-up-text, #37414b);
    }
    .preview-tab.active {
      color: var(--sfx-up-primary, #2563eb);
      border-bottom-color: var(--sfx-up-primary, #2563eb);
    }
    .preview-tab-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* Equal width + height so single-digit counts render as a perfect
         circle. Padding stays out of the way; for ≥4-digit counts the
         min-width grows but the radius keeps the ends rounded. */
      box-sizing: border-box;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 999px;
      /* Filled chip: brand-blue background with white text. Stays the same
         on the active tab — only the underline and tab text colour change. */
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 10.5px;
      font-weight: 600;
      line-height: 1;
    }

    /* --- Details tab body --- */
    /* Mirrors .psim-body's layout role: takes the remaining height in the
       .preview-panel flex column and scrolls internally, so the header +
       tabs stay pinned. Keeps Details and Similar behaviour identical.
       Scrollbar styling is shared with .preview-panel above. */
    .preview-details-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      /* Explicit, like .preview-panel: with overflow-y set, the x axis would
         otherwise compute to auto and any stray wide descendant would put a
         horizontal scrollbar under the whole details panel. */
      overflow-x: hidden;
    }

    /* --- Similar-assets panel body --- */
    /* Always exactly 2 cards per row, regardless of how many similar there are
       or how wide the panel is dragged — consistent, never a lone ballooned
       card or a single column. minmax(0, 1fr) lets columns shrink cleanly. */
    .psim-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 4px 16px 16px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: max-content;
      gap: 12px;
      align-content: start;
    }
    /* Identical to .tile in file-item.ts. */
    .psim-card {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: box-shadow 0.15s;
    }
    .psim-card:hover {
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.06),
        0 6px 16px rgba(0, 0, 0, 0.08);
    }
    /* Identical to .preview in file-item.ts (checker bg + 16/10). */
    .psim-iw {
      position: relative;
      aspect-ratio: 16 / 10;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 10px 10px 0 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
    }
    .psim-iw img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .psim-score {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 2;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .psim-score.high {
      color: var(--sfx-up-success, #15803d);
    }
    .psim-open {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 2;
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* Revealed on card hover (keyboard focus also reveals it). */
      opacity: 0;
      transform: scale(0.92);
      transition:
        opacity 0.15s ease,
        transform 0.15s ease;
    }
    .psim-card:hover .psim-open,
    .psim-open:focus-visible {
      opacity: 1;
      transform: scale(1);
    }
    .psim-open svg {
      width: 13px;
      height: 13px;
    }
    /* Identical to .info in file-item.ts. */
    .psim-foot {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }
    .psim-foot-name {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text, #111827);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .psim-foot-meta {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #5b6e82);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }
    .psim-empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: var(--sfx-up-text-muted, #94a3b8);
      padding: 40px;
      text-align: center;
    }
    .psim-empty-ic {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .psim-empty-ic svg {
      width: 22px;
      height: 22px;
    }
    .psim-empty b {
      color: var(--sfx-up-text-secondary, #475569);
      font-size: 16px;
      font-weight: 500;
    }
    .psim-empty span {
      font-size: 14px;
    }

    /* --- Upload settings panel (global) --- */
    /* overflow:visible (not auto) so a first-row [data-tip] tooltip can extend
       above the row without being clipped — vertical scrolling, when the
       content is taller than the panel, is handled by the parent .preview-panel
       (which already scrolls). Horizontal overflow is bounded by the tooltip's
       own max-width (≤ row width), so nothing escapes the panel sideways. */
    .settings-body {
      flex: 1;
      min-height: 0;
      overflow: visible;
      padding: 8px 16px 16px 16px;
    }
    .sgroup-title {
      display: flex;
      align-items: center;
      gap: 8px;
      /* Design token: font-medium · 16/24, color main/foreground. */
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      margin: 12px 0 16px;
    }
    .sgroup-title-spaced {
      margin-top: 28px;
    }
    .sgroup-title svg {
      width: 20px;
      height: 20px;
      color: #8b9cae;
    }
    .srow {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      /* Positioning context for the [data-tip] tooltip so it centres inside the
         row (never wider than the row → never clipped by the panel edges). */
      position: relative;
    }
    .srow-spaced {
      margin-top: 24px;
    }
    .srow-lbl {
      font-size: 16px;
      color: var(--sfx-up-text, #1e293b);
    }
    .srow-spacer {
      flex: 1;
    }
    /* Info icon (circle-"i" SVG) — hover shows a styled tooltip (see [data-tip]
       below). Per design: 18.33×18.33, fill #8B9CAE. */
    .info-i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18.33px;
      height: 18.33px;
      color: #8b9cae;
      cursor: help;
      flex-shrink: 0;
    }
    .info-i svg {
      width: 100%;
      height: 100%;
    }
    /* "Beta" badge next to the Resume uploads label — per design-system specs
       (corner-radius-15, status-success-15 border, emerald-100 bg, spacers
       05/2 padding). Token fallbacks are hardcoded since those CSS vars aren't
       defined in this project. */
    .sbeta {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 24px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid rgba(0, 167, 82, 0.15);
      background: #d0fae5;
      color: #00a752;
      /* Design token: font-normal · 14/20. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      cursor: help;
      flex-shrink: 0;
    }
    /* Styled hover tooltip for any [data-tip] in the settings panel (info "i"
       chips and the Beta pill). Matches the design-system tooltip: light
       "main/secondary" surface, dark "main/foreground" text, shadow-sm — a
       plain rounded rectangle (no arrow). Wraps long text. Replaces the native
       title so it shows instantly and reads the same everywhere there's an info
       icon. */
    .settings-body [data-tip]::after {
      content: attr(data-tip);
      position: absolute;
      bottom: calc(100% + 8px);
      /* Anchored to the row (not the icon) and centred within it, capped at the
         row width — so it can never overflow the panel's left/right edges and
         get clipped by the scroll container. */
      left: 0;
      right: 0;
      margin-inline: auto;
      width: max-content;
      max-width: min(100%, 320px);
      white-space: normal;
      text-align: left;
      line-height: 1.5;
      background: var(--sfx-up-surface, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      font-size: 11.5px;
      font-weight: 500;
      font-style: normal;
      padding: 9px 12px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.15s,
        visibility 0.15s;
      pointer-events: none;
      z-index: 60;
    }
    .settings-body [data-tip]:hover::after {
      opacity: 1;
      visibility: visible;
    }
    /* Switch toggle (matches the global brand primary). */
    .sw-toggle {
      width: 42px;
      height: 24px;
      border: none;
      padding: 0;
      border-radius: 999px;
      background: var(--sfx-up-border, #cbd5e1);
      position: relative;
      cursor: pointer;
      transition: background 0.15s;
      flex: 0 0 42px;
    }
    .sw-toggle::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: left 0.15s;
    }
    .sw-toggle.on {
      background: var(--sfx-up-primary, #2563eb);
    }
    .sw-toggle.on::after {
      left: 21px;
    }
    /* Dependent fields fade + disable when their parent toggle is off. */
    .dep-off {
      opacity: 0.45;
      pointer-events: none;
    }
    /* Input controls stay a fixed width, left-aligned (the toggles, by contrast,
       span the full width and pin to the right edge). */
    .sfields {
      display: flex;
      gap: 16px;
      margin: 4px 0;
      max-width: 520px;
    }
    .sfield {
      flex: 1;
      min-width: 0;
      position: relative;
    }
    .sfield-block {
      margin-bottom: 24px;
      max-width: 520px;
    }
    .sfield label {
      display: block;
      /* Design token: font-normal · 14/20, color main/secondary-foreground. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #475569);
      margin-bottom: 6px;
    }
    /* The Protocols label sits 16px above its radio list (matches the 16px gap
       between the radio rows); all other field labels use the 6px base above. */
    .sfield-radios label {
      margin-bottom: 16px;
    }
    .sinp {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      transition: border-color 0.12s;
    }
    .sinp:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sinp input {
      border: none;
      background: none;
      outline: none;
      font: inherit;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      width: 100%;
      min-width: 0;
    }
    .sinp .sfx {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 600;
    }
    .ssel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
      transition: border-color 0.12s;
    }
    .ssel svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.15s;
    }
    .sfield.open .ssel {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sfield.open .ssel svg {
      transform: rotate(180deg);
    }
    .smenu {
      position: absolute;
      left: 0;
      right: 0;
      margin-top: 6px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      z-index: 10;
    }
    .sopt {
      padding: 10px 14px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--sfx-up-text, #1e293b);
    }
    .sopt:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
    }
    .sopt.cur {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }
    .sopt svg {
      width: 15px;
      height: 15px;
    }
    .sradio-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .sradio {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1.5px solid var(--sfx-up-border, #cbd5e1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 20px;
      transition: border-color 0.12s;
    }
    .sradio.on {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sradio.on::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
    }
    .sradio-lbl {
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
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
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
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

    .upload-header {
      justify-content: space-between;
    }

    /* Right-aligned Minimize / Close controls in the progress headers. */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    /* When the header carries a progress bar, the bar IS the bottom edge —
       drop the 1px border so the two don't stack into a faint double line.
       Transparent (not removed) keeps the box height stable. */
    .header.has-progress {
      border-bottom-color: transparent;
    }

    /* Progress bar pinned to the header's bottom edge — a full-bleed line that
       sits over the header's bottom border. Used during the uploading phase
       (determinate blue fill) and the complete phase (segmented ok/dup/fail).
       The header is position:relative, so the bar anchors to it. */
    .header-progress {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      height: 4px;
    }

    .header-progress-track {
      flex: 1;
      height: 100%;
      background: var(--sfx-up-border, #e2e8f0);
      overflow: hidden;
    }

    .header-progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transition: width 0.3s ease;
    }

    .header-overall-bar {
      flex: 1;
      display: flex;
      height: 100%;
      background: var(--sfx-up-border, #e2e8f0);
      overflow: hidden;
    }

    .header-overall-bar .header-seg {
      height: 100%;
      min-width: 2px;
    }

    .header-seg.ok {
      background: var(--sfx-up-success, #16a34a);
    }

    .header-seg.dup {
      background: var(--sfx-up-warning, #f59e0b);
    }

    .header-seg.fail {
      background: var(--sfx-up-error, #dc2626);
    }

    /* --- Floating upload card (Variant 3 style) --- */
    .upload-float {
      position: fixed;
      bottom: calc(24px + var(--sfx-up-float-offset-y, 0px));
      right: calc(24px + var(--sfx-up-float-offset-x, 0px));
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
      transition:
        bottom 0.25s ease,
        right 0.25s ease;
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

    /* Outcome tints for the complete-state header icon (green = clean upload,
       amber = duplicates, red = failures). Mirrors the floating pill's portal
       stylesheet; needed here too because the dialog header lives in the
       shadow DOM, which the portal rules don't reach. */
    .float-icon.done {
      background: var(--sfx-up-success-bg, #f0fdf4);
      color: var(--sfx-up-success, #16a34a);
    }
    .float-icon.warn {
      background: var(--sfx-up-warning-bg, #fffbeb);
      color: var(--sfx-up-warning, #f59e0b);
    }
    .float-icon.error {
      background: var(--sfx-up-error-bg, #fef2f2);
      color: var(--sfx-up-error, #dc2626);
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
      max-width: 760px;
      height: 78vh;
      max-height: 720px;
      min-height: 420px;
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
       in the flex layout that were leaving content overflowing.

       Sizing is inset:0 and nothing else — deliberately no vw/vh
       measurements. A fixed box with all four insets at 0 is stretched to
       fill its containing block, which *is* the area the browser reserves
       for fixed content, whatever that currently measures. Adding
       height:100vh over-constrains the box, so bottom:0 is dropped and the
       height wins — and on mobile Safari 100vh is the toolbars-hidden
       height, which does not match the pinned area while the toolbars are
       up or while a momentum scroll is settling. That mismatch is what left
       a strip of the host page visible below the actions bar, and what let a
       pinch-zoom pan past the modal's edge onto the page underneath. The
       same applies to 100vw against a page with a visible scrollbar. */
    @media (max-width: 768px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: auto;
        max-width: none;
        height: auto;
        max-height: none;
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
        width: auto;
        max-width: none;
        height: auto;
        max-height: none;
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

      /* Clear / Add more move up off the actions bar into the summary row.
         The bar's own copy is switched off by the custom property below —
         and only when this row is really on screen, so the mobile preview
         takeover (which replaces the summary row entirely) still gets them
         from the bar. */
      .asset-count {
        padding: 8px 16px;
        min-height: 52px;
      }
      .asset-count-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }
      .content:has(.asset-count-actions) sfx-actions-bar {
        --sfx-up-bar-batch-display: none;
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
         shadow-DOM stacking + sibling modal-card was clipping it. Sized by
         insets only, for the same reason as .modal-card above. */
      .fs-overlay {
        position: fixed;
        inset: 0;
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
    /* Width-gated on purpose: below 769px the modal is already pinned
       edge-to-edge by the block above, and an unqualified height:96vh
       here would win on source order and shrink it back — leaving a strip of
       the host page showing on every phone held in landscape. */
    @media (max-height: 700px) and (min-width: 769px) {
      .modal-card {
        height: 96vh;
        max-height: 96vh;
      }
    }

    @media (max-height: 700px) {
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
         looked tiny. Use a definite height so the inner image's
         max-height: 100% actually resolves; otherwise tall images
         (e.g. 52×984) render at intrinsic height and escape the
         panel. */
      .preview-img-wrap {
        width: min(420px, 60vw);
        height: min(280px, 55vh);
        max-width: 100%;
      }
    }

    /* --- A phone held in landscape ---
       It is ~930px wide, so the ≤768px block above misses it entirely and it
       lands on the short-viewport rule instead: a 96vh card inside a padded
       backdrop. Those few dozen pixels of gap are exactly what a pinch-zoom
       pans onto, which is the whole problem the edge-to-edge sizing solves —
       so pin it here too. Capability-gated (touch-primary), not width-gated:
       a 930×420 *desktop* window is a deliberately small window and should
       keep the framed modal, while nothing but a phone is that shape with a
       finger as its only pointer. Sizing only — the spacing and the preview
       takeover of the ≤768px block stay off, since the width really is there
       to use. */
    @media (hover: none) and (pointer: coarse) and (max-height: 500px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: auto;
        max-width: none;
        height: auto;
        max-height: none;
        min-width: 0;
        min-height: 0;
        border-radius: 0;
        overflow: hidden;
      }
    }

    /* --- Discard-confirmation overlay (closing with queued/uploading work) --- */
    .up-confirm-overlay {
      position: fixed;
      inset: 0;
      z-index: 10500;
      background: rgba(15, 23, 42, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .up-confirm {
      background: #fff;
      border-radius: 12px;
      padding: 20px 22px;
      max-width: 360px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    }
    .up-confirm-text {
      margin: 0 0 16px;
      font-size: 14px;
      line-height: 1.5;
      color: var(--sfx-up-text, #1e293b);
    }
    .up-confirm-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .up-confirm-actions .btn-ghost,
    .up-confirm-actions .btn-primary {
      height: 36px;
      padding: 0 16px;
      border-radius: 6px;
      border: none;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
    .up-confirm-actions .btn-ghost {
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
    }
    .up-confirm-actions .btn-ghost:hover {
      background: var(--sfx-up-border-light, #f8faff);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .up-confirm-actions .btn-primary {
      background: linear-gradient(
        135deg,
        var(--sfx-up-primary, #2563eb),
        var(--sfx-up-primary-mid, #3b82f6)
      );
      color: var(--primary-foreground, #fff);
    }
    .up-confirm-actions .btn-primary:hover {
      background: linear-gradient(
        135deg,
        var(--sfx-up-primary-hover, #1d4ed8),
        var(--sfx-up-primary, #2563eb)
      );
    }

    ${Ee}
  `,X._FS_ZOOM_LEVELS=[1,2,3,4],X._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),X._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),X);M([h({attribute:!1})],D.prototype,"config");M([E()],D.prototype,"_isOpen");M([E()],D.prototype,"_activeConnector");M([E()],D.prototype,"_showUrlDialog");M([E()],D.prototype,"_showCameraDialog");M([E()],D.prototype,"_showScreenCastDialog");M([E()],D.prototype,"_confirmDismissVisible");M([E()],D.prototype,"_similarSelectMode");M([E()],D.prototype,"_similarSelectedIds");M([E()],D.prototype,"_similarRunIds");M([E()],D.prototype,"_similarActiveIds");M([E()],D.prototype,"_similarResults");M([E()],D.prototype,"_previewPanelTab");M([E()],D.prototype,"_previewFileId");M([E()],D.prototype,"_previewDims");M([E()],D.prototype,"_focusPointPicking");M([E()],D.prototype,"_focusPointDraft");M([E()],D.prototype,"_focusPointFieldHovered");M([E()],D.prototype,"_focusPointFieldFocused");M([E()],D.prototype,"_fileInfoOpen");M([E()],D.prototype,"_splitPct");M([E()],D.prototype,"_showSettings");M([E()],D.prototype,"_setResize");M([E()],D.prototype,"_setMaxW");M([E()],D.prototype,"_setMaxH");M([E()],D.prototype,"_setTranscode");M([E()],D.prototype,"_setResolution");M([E()],D.prototype,"_setResolutionOpen");M([E()],D.prototype,"_setProtocol");M([E()],D.prototype,"_setResumable");M([E()],D.prototype,"_fullscreenPreviewUrl");M([E()],D.prototype,"_fullscreenVideoFile");M([E()],D.prototype,"_fsZoom");M([E()],D.prototype,"_bodyDragOver");M([E()],D.prototype,"_isMinimized");M([E()],D.prototype,"_isPillExpanded");M([E()],D.prototype,"_metadataSchema");M([E()],D.prototype,"_metadataTranslations");M([E()],D.prototype,"_metadataDependencies");M([E()],D.prototype,"_regionalFilters");M([E()],D.prototype,"_bulkMetadataOpen");M([E()],D.prototype,"_bulkMetadataInitialFieldKey");M([E()],D.prototype,"_bulkMetadataHadIssuesOnOpen");M([E()],D.prototype,"_isReviewing");M([E()],D.prototype,"_reviewFiles");M([E()],D.prototype,"_hasStoredReview");let bh=D;var xh=Object.defineProperty,Si=(o,e,t,i)=>{for(var s=void 0,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(e,t,s)||s);return s&&xh(e,t,s),s};const yh="img.preview-image",nr=class nr extends W{constructor(){super(...arguments),this.picking=!1,this.showMarker=!0,this.value=null,this._position=null,this._dragging=!1,this._resizeObserver=null,this._observedImg=null,this._dragPointerId=null,this._updatePosition=()=>{this._setPosition(this._measurePosition())},this._onPointerDown=e=>{e.button!==0||this._dragging||(e.preventDefault(),this._dragging=!0,this._dragPointerId=e.pointerId,e.currentTarget.setPointerCapture(e.pointerId),this._pickAt(e.clientX,e.clientY))},this._onPointerMove=e=>{!this._dragging||e.pointerId!==this._dragPointerId||this._pickAt(e.clientX,e.clientY)},this._onPointerUp=e=>{e.pointerId===this._dragPointerId&&this._endDrag()}}get _img(){var e;return((e=this.parentElement)==null?void 0:e.querySelector(yh))??null}_paintedRect(){const e=this._img;if(!e||!e.naturalWidth||!e.naturalHeight)return null;const t=e.getBoundingClientRect(),i=this.getBoundingClientRect();if(!t.width||!t.height)return null;const s=e.naturalWidth/e.naturalHeight,r=t.width/t.height,n=s>r?t.width:t.height*s,a=s>r?t.width/s:t.height;return{left:t.left-i.left+(t.width-n)/2,top:t.top-i.top+(t.height-a)/2,width:n,height:a}}_measurePosition(){var s,r;const e=Ss((s=this.value)==null?void 0:s.horizontal),t=Ss((r=this.value)==null?void 0:r.vertical);if(e===null||t===null)return null;const i=this._paintedRect();return i?{left:i.left+e/100*i.width,top:i.top+t/100*i.height}:null}_setPosition(e){const t=this._position;t!==e&&(t&&e&&t.left===e.left&&t.top===e.top||(this._position=e))}_pickAt(e,t){const i=this._paintedRect();if(!i)return;const s=this.getBoundingClientRect(),r=e-s.left,n=t-s.top,a=p=>Math.max(no,Math.min(ao,p)),l=a(Math.round((r-i.left)/i.width*100)),d=a(Math.round((n-i.top)/i.height*100));this.dispatchEvent(new CustomEvent("focus-point-pick",{detail:{horizontal:l,vertical:d},bubbles:!0,composed:!0}))}_endDrag(){this._dragging=!1,this._dragPointerId=null}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._updatePosition),this._syncObservers()}firstUpdated(){this._syncObservers(),this._updatePosition()}updated(e){super.updated(e),(e.has("value")||this.showMarker&&e.get("showMarker")===!1)&&(this._syncObservers(),this._updatePosition())}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null,(t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=null,window.removeEventListener("resize",this._updatePosition),this._endDrag()}_syncObservers(){var t;typeof ResizeObserver<"u"&&!this._resizeObserver&&this.parentElement&&(this._resizeObserver=new ResizeObserver(this._updatePosition),this._resizeObserver.observe(this.parentElement));const e=this._img;e!==this._observedImg&&((t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=e,e==null||e.addEventListener("load",this._updatePosition))}render(){const e=this._position;return c`
      ${this.picking?c`<div
            class="capture ${this._dragging?"dragging":""}"
            role="presentation"
            @pointerdown=${this._onPointerDown}
            @pointermove=${this._onPointerMove}
            @pointerup=${this._onPointerUp}
            @pointercancel=${this._onPointerUp}
            @lostpointercapture=${this._onPointerUp}
          ></div>`:m}
      ${e&&this.showMarker?c`
            <div class="guide guide-v" ${Z({left:`${e.left}px`})}></div>
            <div class="guide guide-h" ${Z({top:`${e.top}px`})}></div>
            <div
              class="crosshair"
              ${Z({left:`${e.left}px`,top:`${e.top}px`})}
              role="img"
              aria-label="Focus point"
            >
              ${Fn(2.5)}
            </div>
          `:m}
    `}};nr.styles=j`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
    }

    /* Click/drag capture layer — only present while picking. */
    .capture {
      position: absolute;
      inset: 0;
      pointer-events: auto;
      cursor: crosshair;
      touch-action: none;
    }
    /* Suppress text selection for the duration of a drag, the way the preview
       splitter and the marquee controller do — without touching the host page. */
    .capture.dragging {
      user-select: none;
      -webkit-user-select: none;
    }

    .guide {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    }
    .guide-v {
      top: 0;
      bottom: 0;
      width: 2px;
      transform: translateX(-50%);
    }
    .guide-h {
      left: 0;
      right: 0;
      height: 2px;
      transform: translateY(-50%);
    }

    .crosshair {
      position: absolute;
      width: 24px;
      height: 24px;
      transform: translate(-50%, -50%);
      color: var(--sfx-up-primary, #2563eb);
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.6));
    }
    .crosshair svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;let dt=nr;Si([h({type:Boolean})],dt.prototype,"picking");Si([h({type:Boolean})],dt.prototype,"showMarker");Si([h({attribute:!1})],dt.prototype,"value");Si([E()],dt.prototype,"_position");Si([E()],dt.prototype,"_dragging");const Ne=(o,e)=>{typeof customElements<"u"&&!customElements.get(o)&&customElements.define(o,e)};Ne("sfx-uploader",bh);Ne("sfx-drop-zone",oh);Ne("sfx-import-divider",Zs);Ne("sfx-source-pills",pi);Ne("sfx-file-list",Y);Ne("sfx-file-item",ee);Ne("sfx-actions-bar",pe);Ne("sfx-url-dialog",kt);Ne("sfx-camera-dialog",lt);Ne("sfx-screen-cast-dialog",We);Ne("sfx-focus-point-overlay",dt);const Oh=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Ml as $,yo as A,Eh as B,vr as C,bl as D,ti as E,He as F,Ud as G,Sh as H,qe as I,Tn as J,Il as K,Rl as L,ao as M,Ch as N,Ss as O,xt as P,Fn as Q,Ui as R,nt as S,xo as T,wh as U,Sa as V,Wl as W,Pl as X,Tl as Y,co as Z,ql as _,Th as a,$l as a0,Id as a1,Ji as a2,Le as a3,Zi as a4,ii as a5,uo as a6,ro as a7,gt as a8,fo as a9,En as aA,Rn as aB,ol as aC,C as aD,bo as aE,Bn as aF,Cn as aG,Cl as aH,Sl as aI,Oh as aJ,Es as aa,zs as ab,ml as ac,fi as ad,cl as ae,$h as af,Ol as ag,Dl as ah,wl as ai,Fd as aj,kn as ak,lo as al,yr as am,Cs as an,xr as ao,mo as ap,mi as aq,In as ar,St as as,Ph as at,Fl as au,$n as av,Ps as aw,vt as ax,zt as ay,ji as az,mt as b,Ih as c,Md as d,Bd as e,kh as f,_u as g,Ll as h,zl as i,pl as j,no as k,Rh as l,bt as m,Sn as n,ul as o,fl as p,ms as q,mr as r,Fh as s,gl as t,hl as u,al as v,Xl as w,br as x,sl as y,po as z};
