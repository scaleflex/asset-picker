const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/google-picker-view-DjdBAt7j.js","assets/index-BnI4DLxv.js","assets/index-BkwiWuoo.css","assets/search-provider-browser-BUhXXlAH.js","assets/provider-browser-CWC2LgmB.js","assets/index-CY5tRnW6.js"])))=>i.map(i=>d[i]);
import{c as Mo,a as Bn,j as jn,e as Qt,i as zi,t as ei,E as Li,w as J,d as c,f as Pe,g as G,h as j,A as m,n as f,r as C,k as X,_ as Lt,l as Q,m as Or,o as Ur,D as lt,p as zr}from"./index-BnI4DLxv.js";function Nn(s){if(s==null||!Number.isFinite(s)||s<0)return"—";const e=["B","KB","MB","GB","TB"];let t=s,i=0;for(;t>=1024&&i<e.length-1;)t/=1024,i++;const r=(a,l)=>{const d=l>0&&Math.round(a*10)/10<10?1:0,p=a.toFixed(d);return{str:p,rounded:Number(p)}},o=r(t,i);let n=o.str;return o.rounded>=1024&&i<e.length-1&&(t/=1024,i++,n=r(t,i).str),`${n} ${e[i]}`}const Bo="f7b2366e-fcb6-4f1a-8f23-8de48422989a",qn="https://i18n-fastly.ultrafast.io",Hn="https://neo.wordplex.io",jo="uploader",Lr=Mo({gridUuid:Bo,namespace:jo,cdnUrl:qn}),Vn=Lr.initI18n,nt=Lr.t,Kn=Lr.I18nController,Yn=Bn({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:jo,gridUuid:Bo,prodUrl:Hn,logPrefix:"[uploader]"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Gn}=jn,Us=s=>s,Wn=s=>s.strings===void 0,zs=()=>document.createComment(""),Ut=(s,e,t)=>{var o;const i=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(zs(),r),a=i.insertBefore(zs(),r);t=new Gn(n,a,s,s.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let d;(o=t._$AQ)==null||o.call(t,s),t._$AM=s,t._$AP!==void 0&&(d=s._$AU)!==a._$AU&&t._$AP(d)}if(n!==r||l){let d=t._$AA;for(;d!==n;){const p=Us(d).nextSibling;Us(i).insertBefore(d,r),d=p}}}return t},rt=(s,e,t=s)=>(s._$AI(e,t),s),Xn={},Jn=(s,e=Xn)=>s._$AH=e,Zn=s=>s._$AH,Qi=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=(s,e,t)=>{const i=new Map;for(let r=e;r<=t;r++)i.set(s[r],r);return i},kt=Qt(class extends zi{constructor(s){if(super(s),s.type!==ei.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const r=[],o=[];let n=0;for(const a of s)r[n]=i?i(a,n):n,o[n]=t(a,n),n++;return{values:o,keys:r}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const r=Zn(s),{values:o,keys:n}=this.dt(e,t,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??(this.ut=[]),l=[];let d,p,u=0,h=r.length-1,y=0,S=o.length-1;for(;u<=h&&y<=S;)if(r[u]===null)u++;else if(r[h]===null)h--;else if(a[u]===n[y])l[y]=rt(r[u],o[y]),u++,y++;else if(a[h]===n[S])l[S]=rt(r[h],o[S]),h--,S--;else if(a[u]===n[S])l[S]=rt(r[u],o[S]),Ut(s,l[S+1],r[u]),u++,S--;else if(a[h]===n[y])l[y]=rt(r[h],o[y]),Ut(s,r[u],r[h]),h--,y++;else if(d===void 0&&(d=Ls(n,y,S),p=Ls(a,u,h)),d.has(a[u]))if(d.has(a[h])){const k=p.get(n[y]),R=k!==void 0?r[k]:null;if(R===null){const E=Ut(s,r[u]);rt(E,o[y]),l[y]=E}else l[y]=rt(R,o[y]),Ut(s,r[u],R),r[k]=null;y++}else Qi(r[h]),h--;else Qi(r[u]),u++;for(;y<=S;){const k=Ut(s,l[S+1]);rt(k,o[y]),l[y++]=k}for(;u<=h;){const k=r[u++];k!==null&&Qi(k)}return this.ut=n,Jn(s,l),Li}});function Qn(s,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,s);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const r=(l=(a=s.response)==null?void 0:a.file)==null?void 0:l.uuid;return r?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(r))}`:null}const No=J`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,er=c`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${No}
</svg>`;class ea{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function re(s,e,t){const i=s.getState().files,r=i.get(e);if(!r)return;const o=new Map(i);o.set(e,{...r,...t}),s.setState({files:o})}function mt(s,e){const t=new Map(s.getState().files);t.set(e.id,e),s.setState({files:t})}function Ds(s,e){const t=s.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),s.setState({files:i})}function ta(){return new ea({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:Pe})}class ia{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const ra="SAME_ASSET_EXISTS_SKIP_UPLOAD",sa="ERROR_SHA1_CONFLICT";function ti(s){return(s==null?void 0:s.code)===ra||(s==null?void 0:s.code)===sa}function Dr(s,e){return{...s,status:"success",file:s.file??{uuid:s.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Ti(s,e){var t,i,r,o,n;return((i=(t=s==null?void 0:s.info)==null?void 0:t.msg)==null?void 0:i.trim())||((r=s==null?void 0:s.msg)==null?void 0:r.trim())||((o=s==null?void 0:s.hint)==null?void 0:o.trim())||((n=s==null?void 0:s.message)==null?void 0:n.trim())||e}const oa=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function na(s){const e=new Set;if(!s)return e;const t=s.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),oa.has(t)&&e.add("archive"),e}function aa(s,e){if(s.formatMimetypes.length===0)return!0;const t=na(e);return s.formatMimetypes.some(i=>t.has(i))}function tr(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:!1}function Ms(s){return typeof s=="boolean"?s:s==="true"?!0:s==="false"?!1:null}function fi(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function Bs(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function js(s,e){if(s.length===0||e.length===0)return!1;const t=new Set(s);for(const i of e)if(t.has(i))return!0;return!1}function la(s,e){const t=e[s.triggerCkey],i=s.triggerValues;switch(s.triggerCondition){case"is_true":return Ms(t)===!0;case"is_false":return Ms(t)===!1;case"is_empty":return tr(t);case"is_not_empty":return!tr(t);case"is_in":return js(fi(t),i);case"is_not_in":return tr(t)?!0:!js(fi(t),i);case"is":return Bs(fi(t),i);case"is_not":return!Bs(fi(t),i);default:return!1}}function da(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function ca(s,e){let t=s.get(e);return t||(t=da(),s.set(e,t)),t}function pa(s,e){if(s.length===0||e.length===0)return[];const t=new Set(s);return e.filter(i=>t.has(i))}function ua(s,e){s.contributingDependencyUuids.includes(e)||s.contributingDependencyUuids.push(e)}function ha(s,e,t){const i=ca(s,t.targetCkey);switch(ua(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"show":i.shown=!0;break;case"require":i.required=!0;break;case"allow_values":{const r=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...r]:pa(i.allowedValues,r);break}case"set_values":{const r=t.setValues??[];if(r.length===0)break;i.setValue===void 0&&(i.setValue=r.length===1?r[0]:r);break}default:t.type}}function fa(s,e){for(const t of e.actions)ha(s,e,t)}function ga(s,e){const t=new Map;for(const i of e)i.active&&aa(i,s.mime)&&la(i,s.meta)&&fa(t,i);return t}function St(s,e,t){const i={},r=new Set;for(const a of e.fields)r.add(a.ckey),a.key in s.meta&&(i[a.ckey]=s.meta[a.key]);const o=t.filter(a=>r.has(a.triggerCkey)),n=ga({mime:s.mime,meta:i},o);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const d of a.fields){const p=n.get(d.ckey);if(p){p.hidden=!0;for(const u of l.contributingDependencyUuids)p.contributingDependencyUuids.includes(u)||p.contributingDependencyUuids.push(u)}else n.set(d.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function ma(s,e){const t=Array.isArray(e)?e:[e];switch(s.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function Di(s,e,t){var i,r;return!!((i=t.get(s.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((r=t.get(e.ckey))!=null&&r.hidden))}function Mr(s,e,t){var i,r;return t?!!((i=t.get(s.ckey))!=null&&i.shown||e!=null&&e.ckey&&((r=t.get(e.ckey))!=null&&r.shown)):!1}function va(s,e,t){if(t.size===0)return s;let i=null;for(const r of e.groups)for(const o of r.fields)Di(o,r,t)&&o.key in s&&(i||(i={...s}),delete i[o.key]);return i??s}function ba(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function xa(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function qo(s,e){const t=[];for(const[i,r]of e){if(r.hidden)continue;const o=ba(s[i]);if(o.length!==0){if(r.allowedValues!==void 0){const n=new Set(r.allowedValues),a=o.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...r.contributingDependencyUuids]})}if(r.setValue!==void 0){const n=Array.isArray(r.setValue)?r.setValue:[r.setValue];xa(o,n)||t.push({ckey:i,kind:"set_values",conflictingValues:o,dependencyUuids:[...r.contributingDependencyUuids]})}}}return t}function ya(s,e,t){if(s.length===0||t.length===0)return new Map;const i=s.map(n=>St({mime:n.mime,meta:n.meta},e,t)),r=new Map,o=new Set;for(const n of i)for(const a of n.keys())o.add(a);for(const n of o){const a=i.map(E=>E.get(n)),l=a.every(E=>(E==null?void 0:E.hidden)===!0),d=a.some(E=>(E==null?void 0:E.shown)===!0),p=a.some(E=>(E==null?void 0:E.required)===!0);let u;if(a.every(E=>Array.isArray(E==null?void 0:E.allowedValues))){let E;for(const w of a){const $=w.allowedValues;if(E=E===void 0?[...$]:E.filter(b=>$.includes(b)),E.length===0)break}u=E}let y;const S=a.map(E=>E==null?void 0:E.setValue).filter(E=>E!==void 0);S.length===s.length&&_a(S)&&(y=S[0]);const k=new Set;for(const E of a)if(E)for(const w of E.contributingDependencyUuids)k.add(w);const R={hidden:l,required:p,contributingDependencyUuids:[...k]};d&&(R.shown=!0),u!==void 0&&(R.allowedValues=u),y!==void 0&&(R.setValue=y),r.set(n,R)}return r}function _a(s){if(s.length<=1)return!0;const e=s[0];if(typeof e=="string")return s.every(i=>i===e);const t=new Set(e);return s.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const r of i)if(!t.has(r))return!1;return!0})}const du=300,Ns=2,wa=50,qs="regvar:api",ka="#ut",$a={CREATE_ONLY:"create_only",UPSERT:"upsert"},Sa=/^[a-z0-9_-]+$/,Ca=s=>typeof s=="string"&&s.startsWith(ka),wi=s=>`~${s.toUpperCase()}`,Ea=(s,e)=>{if(!(!s||!e))return s[e]??s[wi(e)]},Ri=(s,e,t)=>{var n,a,l;const i=(n=s.i18n)==null?void 0:n[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const r=(a=s.i18n)==null?void 0:a[wi(e)];if(r)return{value:r,isFallback:!0,sourceLang:wi(e)};const o=Ea(s.i18n,t);if(o){const d=(l=s.i18n)!=null&&l[t]?t:wi(t);return{value:o,isFallback:!0,sourceLang:d}}return{value:"",isFallback:!1,sourceLang:null}},Hs=s=>(typeof s=="string"?s:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),cu=s=>Sa.test(s),Ta=s=>{const e={},t={};for(const i of s||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},pu=(s,e)=>s.bySid[e]||s.bySlug[e],Pi=s=>{const e=[],t=new Map,i=o=>o.sid||o.slug||"",r=(o,n)=>{if(typeof o=="string"){if(!o||t.has(o))return;t.set(o,e.length),e.push({slug:o});return}if(!o||typeof o!="object")return;const a=o,l=i(a);if(!l)return;const d=t.get(l),p=d!==void 0?{...e[d]}:{};a.slug&&(p.slug=a.slug),a.sid&&(p.sid=a.sid),a.uuid&&(p.uuid=a.uuid);const u={...p.i18n,...a.i18n||{}};n&&a.label&&(u[n]=a.label),Object.keys(u).length>0&&(p.i18n=u),d!==void 0?e[d]=p:(t.set(l,e.length),a.slug&&a.slug!==l&&t.set(a.slug,e.length),e.push(p))};if(Array.isArray(s))for(const o of s)r(o);else if(s&&typeof s=="object"){const o=s;for(const[n,a]of Object.entries(o))if(Array.isArray(a))for(const l of a)r(l,n)}return e},gi=s=>typeof s=="string"?[s]:!s||typeof s!="object"?[]:[s.sid,s.slug,s.uuid].filter(Boolean),ar=(s,e,t)=>{if(t){const o=new Set(e.flatMap(gi));return s.filter(n=>!gi(n).some(a=>o.has(a)))}const i=new Set(s.flatMap(gi)),r=e.filter(o=>!gi(o).some(n=>i.has(n)));return[...s,...r]},Ra=(s,e)=>s.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function Ho(s,e,t){let i=e;switch(s.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),s.type){case"geopoint":return Pa(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(r=>typeof r=="string"?{value:r,label:r}:r):[];case"ultratags":return Pi(e);case"multi-select":return i||[];default:return i??""}}function Br(s,e,t,i){var o;let r;switch(s.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?r=null:r=`(${n.latitude},${n.longitude})`;break}case"boolean":e==="true"?r=!0:e==="false"?r=!1:r=null;break;case"date":{if(!e)r=null;else{const n=e instanceof Date?e:new Date(e),a=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),d=String(n.getDate()).padStart(2,"0");r=`${a}-${l}-${d}`}break}case"tags":r=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":r=Array.isArray(e)?e.map(n=>typeof n=="string"?n:n.slug).filter(n=>!!n):[];break;case"select-one":r=e===""?null:e;break;case"numeric":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?n:null;break}default:r=e}if(s.regional_variants_group_uuid&&s.type!=="ultratags"){const n=i??"en";return{...((o=t==null?void 0:t.meta)==null?void 0:o[s.key])??{},[n]:r}}return r}function Pa(s){if(typeof s=="string"){const e=/\(([^)]+)\)/.exec(s);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}const ct="product.ref",pt="product.position",Ia="__product__",Aa=new Set([ct,pt]);function lr(s){return Aa.has(s)}function dr(s){return s===ct?"ref":s===pt?"position":null}function Fa(s){return[{key:ct,ckey:ct,uuid:"product-ref",title:s("productRefLabel","Product reference"),type:"text",placeholder:s("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:pt,ckey:pt,uuid:"product-position",title:s("productPositionLabel","Position"),type:"numeric",placeholder:s("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Oa(s){return{uuid:Ia,isRoot:!1,name:s("productFieldsLabel","Product"),fields:Fa(s)}}function Ua(s,e){const t=Oa(e);let i=-1;for(let l=0;l<s.groups.length;l++)s.groups[l].isRoot&&(i=l);const r=i+1,o=[...s.groups.slice(0,r),t,...s.groups.slice(r)],n=o.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...s,groups:o,fields:n,fieldsByKey:a}}const Vo=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function za(s){return s==null||s===""?null:typeof s!="string"||Vo.test(s)?"productRefInvalid":null}function La(s){if(s==null||s==="")return null;const e=typeof s=="number"?s:Number(s);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function jr(s){return s?s.ref!=null&&s.ref!==""||s.position!=null:!1}function Nr(s){const e={};return(s==null?void 0:s.ref)!=null&&s.ref!==""&&(e.ref=s.ref),(s==null?void 0:s.position)!=null&&(e.position=s.position),e}function Vs(s,e){const t={...s??{}};for(const i of Object.keys(e)){const r=e[i];r===void 0?delete t[i]:t[i]=r}return t}function Ko(s,e,t){var r;if((((r=t==null?void 0:t.requiredFields)==null?void 0:r.includes(s.ckey))||!!s.required)&&Oe(e))return`${s.title} is required`;if(Oe(e))return null;if(s.key===ct)return typeof e!="string"||Vo.test(e)?"Reference contains invalid characters":null;if(s.key===pt){const o=Number(e);return!Number.isFinite(o)||!Number.isInteger(o)?"Position must be an integer":null}switch(s.type){case"numeric":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!Number.isInteger(o))return"Must be an integer";if(o<-1999999999||o>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(o<-999999999999e-2||o>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const o=e,n=o.latitude!==""&&o.latitude!=null,a=o.longitude!==""&&o.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(o.latitude),d=Number(o.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const o=new URL(e);if(!["http:","https:"].includes(o.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(s.validation&&typeof e=="string")try{if(!new RegExp(s.validation).test(e))return"Value does not match expected format"}catch{}return null}function Oe(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:typeof s=="object"?!Object.values(s).some(e=>e!=null&&e!==""):!s}const Yo=new Set(["asset-attachments","attachments-assets","integer-list"]),Da=new Set(["face_matcher"]);function Ma(s){return Yo.has(s)}function ii(s){return Yo.has(s.type)||Da.has(s.ckey)}const Ba=new Set(["idle","queued","rejected"]);function Mi(s){return!Oe(s)}function qt(s,e){var t;return ii(s)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(s.ckey)?!0:!!s.required}function qr(s,e,t){var i;return(i=t==null?void 0:t.get(s.ckey))!=null&&i.required?!0:qt(s,e)}function ri(s){return[...s.values()].filter(e=>Ba.has(e.status))}function Go(s,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:s.forceFillingOnUpload!==void 0?s.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:s.fields.some(t=>!!t.required)}function Bi(s,e,t){if(!e)return qt(s,t);const i=e.get(s.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:qt(s,t)}function si(s,e,t){const i=new Map;if(!t||t.length===0){for(const r of s)i.set(r.id,null);return i}for(const r of s)i.set(r.id,St({mime:r.type??"",meta:r.meta},e,t));return i}function uu(s,e,t,i){const r=ri(s);if(r.length===0)return{};const o=si(r,e,i),n={};for(const a of e.fields){const l=r.filter(d=>{const p=o.get(d.id)??null;return Bi(a,p,t)?!Mi(d.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function ja(s,e,t,i){const r=ri(s);if(r.length===0)return null;const o=si(r,e,i);for(const n of e.fields)if(r.some(l=>{const d=o.get(l.id)??null;return Bi(n,d,t)?!Mi(l.meta[n.key]):!1}))return n.key;return null}function Wo(s,e,t){var r;const i=s.get(e.id);return i&&i.has(t)?i.get(t):(r=e.meta)==null?void 0:r[t]}function Xo(s,e,t){const i=e.get(s.id);if(!i||i.size===0)return s;const r={...s.meta};for(const o of t.fields)i.has(o.key)&&(r[o.key]=i.get(o.key));return{...s,meta:r}}function hu(s,e,t,i,r){const o=ri(e);if(o.length===0)return null;const n=o.map(l=>Xo(l,s,t)),a=si(n,t,r);for(const l of t.fields)if(o.some((p,u)=>{const h=a.get(n[u].id)??null;return Bi(l,h,i)?!Mi(Wo(s,p,l.key)):!1}))return l.key;return null}function Na(s,e,t,i,r){const o=new Set,n=ri(e);if(n.length===0)return o;const a=n.map(d=>Xo(d,s,t)),l=si(a,t,r);for(const d of t.fields)n.some((u,h)=>{const y=l.get(a[h].id)??null;return Bi(d,y,i)?!Mi(Wo(s,u,d.key)):!1})&&o.add(d.key);return o}function qa(s,e,t){if(!t||t.length===0)return null;const i=ri(s);if(i.length===0)return null;const r=si(i,e,t),o=new Map;for(const n of i){const a=r.get(n.id);if(!a||a.size===0)continue;const l={};for(const p of e.fields)p.key in n.meta&&(l[p.ckey]=n.meta[p.key]);const d=qo(l,a);d.length!==0&&o.set(n.id,new Set(d.map(p=>p.ckey)))}if(o.size===0)return null;for(const n of e.fields)for(const a of o.values())if(a.has(n.ckey))return n.key;return null}function fu(s,e){const t={...s};for(const i of Object.keys(e)){const r=e[i];if(r==null||r==="")continue;const o=s[i];if(Array.isArray(r))if(Array.isArray(o)){const n=new Set(o.map(l=>JSON.stringify(l))),a=[...o];for(const l of r){const d=JSON.stringify(l);n.has(d)||(n.add(d),a.push(l))}t[i]=a}else t[i]=r;else t[i]=r}return t}function Ha(s,e){const t=e.fields[s.ckey];let i=!1;const r=(s.possible_values??[]).map(l=>{const d=e.options[l.internal_unique_value];return d&&d!==l.label?(i=!0,{...l,label:d}):l}),o=!!(t!=null&&t.name)&&t.name!==s.title,n=!!(t!=null&&t.placeholder)&&t.placeholder!==s.placeholder,a=!!(t!=null&&t.tooltip)&&t.tooltip!==s.hint;return!i&&!o&&!n&&!a?s:{...s,title:o?t.name:s.title,placeholder:n?t.placeholder:s.placeholder,hint:a?t.tooltip:s.hint,possible_values:i?r:s.possible_values}}function Va(s,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return s;let t=!1;const i=s.groups.map(n=>{let a=!1;const l=n.fields.map(d=>{const p=Ha(d,e);return p!==d&&(a=!0),p});return a?(t=!0,{...n,fields:l}):n});if(!t)return s;const r=i.flatMap(n=>n.fields),o=new Map(r.map(n=>[n.key,n]));return{...s,groups:i,fields:r,fieldsByKey:o}}function Hr(s){return s.show===!1}const Ka="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Ya="https://i18n-fastly.ultrafast.io",Ga="uploader",Jo=Mo({gridUuid:Ka,namespace:Ga,cdnUrl:Ya}),T=Jo.t,Ue=Jo.I18nController;var Wa=Object.defineProperty,be=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Wa(e,t,r),r};const Xa=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,Ja=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,Za=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,Qa=c`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,ns=class ns extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=qo(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var o;const i=this.resolvedSchema;if(i&&e.ckey&&((o=i.get(e.ckey))!=null&&o.hidden))return[];let r=i?e.fields.filter(n=>!Di(n,e,i)):e.fields;return Hr(e)&&(r=r.filter(n=>qr(n,this.config??void 0,i)||Mr(n,e,i))),t&&!e.name.toLowerCase().includes(t)&&(r=r.filter(n=>n.title.toLowerCase().includes(t))),r}_renderFilter(e,t,i){if(this.hideFilter)return m;if(!this.schema||this.schema.fields.length===0)return m;const r=this._filterQuery,o=this._isAllCollapsed(t),n=o?T("expandAll","Expand all"):T("collapseAll","Collapse all");return c`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${Xa}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${T("searchFields","Search fields...")}
            .value=${r}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${T("searchMetadataFields","Search metadata fields")}
          />
          ${r?c`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${T("clearSearch","Clear search")}
                aria-label=${T("clearSearch","Clear search")}
                type="button"
              >
                ${Ja}
              </button>`:m}
        </div>
        ${e?c`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?T("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${o?T("expandAllGroups","Expand all groups"):T("collapseAllGroups","Collapse all groups")}
              type="button"
            >
              ${o?Qa:Za}
            </button>`:m}
      </div>
    `}_renderGroup(e,t,i,r,o){const n=o?!0:!this._collapsed.has(e.uuid);return c`
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
                      .dependencyNames=${r}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:m}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return c`<div class="empty" role="status" aria-live="polite">
        ${T("noMetadataFieldsConfigured","No metadata fields configured")}
      </div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),r=i.toLowerCase(),o=r!=="",n=[];for(const p of this.schema.groups){const u=this._visibleFieldsFor(p,r);u.length!==0&&n.push({group:p,fields:u})}const a=n.map(p=>p.group.uuid),l=this.schema.groups.length>1&&(o||n.length>0),d=this._renderFilter(l,a,o);if(n.length===0){const p=o?T("noFieldsMatch",'No fields match "{{query}}"',{query:i}):T("allMetadataFieldsHidden","All metadata fields are currently hidden");return c`
        ${d}
        <div class="empty" role="status" aria-live="polite">${p}</div>
      `}return c`
      ${d}
      ${n.map(({group:p,fields:u})=>this._renderGroup(p,u,e,t,o))}
    `}};ns.styles=j`
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
  `;let le=ns;be([f({attribute:!1})],le.prototype,"schema");be([f({attribute:!1})],le.prototype,"meta");be([f({attribute:!1})],le.prototype,"config");be([f({attribute:!1})],le.prototype,"autocomplete");be([f({attribute:!1})],le.prototype,"taxonomyService");be([f({attribute:!1})],le.prototype,"ultratags");be([f({attribute:!1})],le.prototype,"defaultLanguage");be([f({attribute:!1})],le.prototype,"taxonodes");be([f({attribute:!1})],le.prototype,"resolvedSchema");be([f({attribute:!1})],le.prototype,"dependencies");be([f({type:Boolean})],le.prototype,"disabled");be([f({type:Boolean,attribute:"hide-filter"})],le.prototype,"hideFilter");be([C()],le.prototype,"_collapsed");be([C()],le.prototype,"_filterQuery");X("sfx-metadata-form",le);const Rt=j`
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
`,oi=j`
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
`,Vr=j`
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
`,gu=j`
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
`,Zo=j`
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
`,ki={LANGUAGES:"FTYPE_LANGUAGES",CURRENCIES:"FTYPE_CURRENCIES",CUSTOM:"FTYPE_CUSTOM"};function dt(s,e){if(!s.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&s.regional_variants_group_uuid in t?t[s.regional_variants_group_uuid]:e==null?void 0:e.language}function el(s,e,t,i){if(!s.regional_variants_group_uuid||!e)return;const r=e.find(a=>a.uuid===s.regional_variants_group_uuid);if(!r)return;const o=(t==null?void 0:t[r.uuid])??i,n=r.variants.find(a=>a.api_value===o);if(n)return`${r.label}: ${n.label}`}function tl(s,e){var i;const t={};for(const r of s??[]){if(!((i=r.variants)!=null&&i.length))continue;const o=r.type===ki.LANGUAGES?il(r.variants,e):void 0;t[r.uuid]=o??r.variants[0].api_value}return t}function il(s,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let r,o;for(const a of s){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!r&&l===i&&(r=a.api_value),!o&&l.split("-")[0]===i&&(o=a.api_value)}}return r??o}var rl=Object.defineProperty,he=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&rl(e,t,r),r};const as=class as extends G{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:qt(this.field,this.config??void 0)}_conflictTooltip(){var n,a;const e=this.conflict;if(!e)return"";const t=l=>{var d,p,u;return((u=(p=(d=this.field)==null?void 0:d.possible_values)==null?void 0:p.find(h=>h.internal_unique_value===l))==null?void 0:u.label)??l},i=(n=this.resolvedState)==null?void 0:n.allowedValues,r=(a=this.resolvedState)==null?void 0:a.setValue;let o;if(e.kind==="allow_values"&&i?o=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&r!==void 0?o=`Value should be: ${(Array.isArray(r)?r:[r]).map(t).join(", ")}`:o="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const l=e.dependencyUuids.map(d=>this.dependencyNames.get(d)).filter(d=>!!d);if(l.length>0){const d=l.length===1?"dependency":"dependencies";o+=`
Controlled by ${d}: ${l.join(", ")}`}}return o}_onFieldBlur(e){const{key:t,value:i}=e.detail,r=Ko(this.field,i,this.config??void 0);if(r){this._error=r;return}this._error=null;const o={meta:{[this.field.key]:this.value}},n=dt(this.field,this.config),a=Br(this.field,i,o,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){var o,n;const i=this.disabled;if(ii(e))return c`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const r=((o=this.resolvedState)==null?void 0:o.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return c`<sfx-meta-text-field
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
          .allowedValues=${r}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return c`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${r}
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
        ></sfx-meta-geo-point-field>`;default:return c`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}render(){var l,d;const e=this.field;if(!e)return m;const t=dt(e,this.config),i=Ho(e,this.value,t),r=el(e,this.regionalVariantsGroups,(l=this.config)==null?void 0:l.regionalFilters,(d=this.config)==null?void 0:d.language),n=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return c`
      <div class=${n} aria-required=${this._isRequired?"true":"false"}>
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
          ${r?c`<div class="field-regional-hint" title=${r}>${r}</div>`:m}
          ${this._error?c`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:m}
        </div>
      </div>
    `}};as.styles=[Zo];let se=as;he([f({attribute:!1})],se.prototype,"field");he([f({attribute:!1})],se.prototype,"value");he([f({attribute:!1})],se.prototype,"config");he([f({attribute:!1})],se.prototype,"autocomplete");he([f({attribute:!1})],se.prototype,"taxonomyService");he([f({attribute:!1})],se.prototype,"taxonomyEntry");he([f({attribute:!1})],se.prototype,"ultratags");he([f({attribute:!1})],se.prototype,"defaultLanguage");he([f({attribute:!1})],se.prototype,"ultratagsRestrictToItems");he([f({attribute:!1})],se.prototype,"regionalVariantsGroups");he([f({attribute:!1})],se.prototype,"resolvedState");he([f({attribute:!1})],se.prototype,"conflict");he([f({attribute:!1})],se.prototype,"dependencyNames");he([f({type:Boolean})],se.prototype,"disabled");he([C()],se.prototype,"_error");X("sfx-metadata-field",se);var sl=Object.defineProperty,Kr=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&sl(e,t,r),r};class xe extends G{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new Ue(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?T("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??T("selectAnOption","Select an option")}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}Kr([f({attribute:!1})],xe.prototype,"field");Kr([f({attribute:!1})],xe.prototype,"value");Kr([f({type:Boolean})],xe.prototype,"disabled");const ls=class ls extends xe{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,r;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return c`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((r=this.field)==null?void 0:r.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};ls.styles=[Rt];let cr=ls;X("sfx-meta-text-field",cr);const ds=class ds extends xe{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,r;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return c`
      <textarea
        .value=${this.value??""}
        placeholder=${((r=this.field)==null?void 0:r.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};ds.styles=[Rt,j`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let pr=ds;X("sfx-meta-textarea-field",pr);function ni(s,e,t,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(e,t,o):n(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),Nt(r,e);return!0},Ii=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Qo=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),al(e)}};function ol(s){this._$AN!==void 0?(Ii(this),this._$AM=s,Qo(this)):this._$AM=s}function nl(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)Nt(i[o],!1),Ii(i[o]);else i!=null&&(Nt(i,!1),Ii(i));else Nt(this,s)}const al=s=>{s.type==ei.CHILD&&(s._$AP??(s._$AP=nl),s._$AQ??(s._$AQ=ol))};class ll extends zi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Qo(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(Nt(this,e),Ii(this))}setValue(e){if(Wn(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ji extends Event{constructor(e){super(ji.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}ji.eventName="rangeChanged";class Ni extends Event{constructor(e){super(Ni.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ni.eventName="visibilityChanged";class qi extends Event{constructor(){super(qi.eventName,{bubbles:!1})}}qi.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class dl{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class cl extends dl{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const o=Math.abs(i-e),n=Math.abs(r-t);o<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Ks=typeof window<"u"?window.ResizeObserver:void 0;const ur=Symbol("virtualizerRef"),mi="virtualizer-sizer";let Ys;class pl{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Ks(()=>this._hostElementSizeChanged()),this._childrenRO=new Ks(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[ur]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=fl(this._hostElement,e),this._scrollerController=new cl(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,i,r;this._scrollEventListeners.forEach(o=>o.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(r=this._childrenRO)==null||r.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${mi}]`);t||(t=document.createElement("div"),t.setAttribute(mi,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(mi,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||Ys;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const r={...e};delete r.type,t=r}else t=e;i===void 0&&(Ys=i=(await Lt(()=>import("./flow-DQ61c9Hr.js"),[])).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,n)=>o+n.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:r}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){const o=t[r],n=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[n]=i.call(this,o,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},ul(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new qi)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(mi)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var r;const e=this._hostElement,t=(r=this._scrollerController)==null?void 0:r.element,i=this._layout;if(e&&t&&i){let o,n,a,l;const d=e.getBoundingClientRect();o=0,n=0,a=window.innerHeight,l=window.innerWidth;const p=this._clippingAncestors.map(w=>w.getBoundingClientRect());p.unshift(d);for(const w of p)o=Math.max(o,w.top),n=Math.max(n,w.left),a=Math.min(a,w.bottom),l=Math.min(l,w.right);const u=t.getBoundingClientRect(),h={left:d.left-u.left,top:d.top-u.top},y={width:t.scrollWidth,height:t.scrollHeight},S=o-d.top+e.scrollTop,k=n-d.left+e.scrollLeft,R=Math.max(0,a-o),E=Math.max(0,l-n);i.viewportSize={width:E,height:R},i.viewportScroll={top:S,left:k},i.totalScrollSize=y,i.offsetWithinScroller=h}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,r=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=r?`${r}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:r,height:o,xOffset:n,yOffset:a},l)=>{const d=this._children[l-this._first];d&&(d.style.position="absolute",d.style.boxSizing="border-box",d.style.transform=`translate(${i}px, ${t}px)`,r!==void 0&&(d.style.width=r+"px"),o!==void 0&&(d.style.height=o+"px"),d.style.left=n===void 0?null:n+"px",d.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:r,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-r})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new ji({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ni({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function ul(s){const e=window.getComputedStyle(s);return{marginTop:vi(e.marginTop),marginRight:vi(e.marginRight),marginBottom:vi(e.marginBottom),marginLeft:vi(e.marginLeft)}}function vi(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function Gs(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function hl(s,e=!1){const t=[];let i=e?s:Gs(s);for(;i!==null;)t.push(i),i=Gs(i);return t}function fl(s,e=!1){let t=!1;return hl(s,e).filter(i=>{if(t)return!1;const r=getComputedStyle(i);return t=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=s=>s,tn=(s,e)=>c`${e}: ${JSON.stringify(s,null,2)}`;class gl extends ll{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>tn(t,i+this._first),this._keyFunction=(t,i)=>en(t,i+this._first),this._items=[],e.type!==ei.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return kt(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?Li:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const r=e.parentNode;this._makeVirtualizer(r,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(r,o)=>t(r,o+this._first)),i&&(this._keyFunction=(r,o)=>i(r,o+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:o}=t;this._virtualizer=new pl({hostElement:e,layout:i,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const ml=Qt(gl);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pt extends G{constructor(){super(...arguments),this.items=[],this.renderItem=tn,this.keyFunction=en,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:i,layout:r,scroller:o}=this;return c`${ml({items:e,renderItem:t,keyFunction:i,layout:r,scroller:o})}`}element(e){var t;return(t=this[ur])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[ur])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var i;(i=this.element(e))==null||i.scrollIntoView({block:t})}}ni([f({attribute:!1})],Pt.prototype,"items",void 0);ni([f()],Pt.prototype,"renderItem",void 0);ni([f()],Pt.prototype,"keyFunction",void 0);ni([f({attribute:!1})],Pt.prototype,"layout",void 0);ni([f({reflect:!0,type:Boolean})],Pt.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",Pt);const rn=50;function sn(s,e){var i;const t=s.querySelector("lit-virtualizer");if(t){e>=0&&Promise.resolve(t.layoutComplete).then(()=>t.scrollToIndex(e,"nearest")).catch(()=>{});return}(i=s.querySelector(".option.active"))==null||i.scrollIntoView({block:"nearest"})}var vl=Object.defineProperty,Hi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&vl(e,t,r),r},De;const ai=(De=class extends xe{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>c` <div
      class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${i=>{i.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}get _options(){var i,r;const e=((i=this.field)==null?void 0:i.possible_values)??De._EMPTY;if(((r=this._optionsCache)==null?void 0:r.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var r;const e=this._options,t=this.allowedValues;if(((r=this._selectableCache)==null?void 0:r.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>sn(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(e){return e.length?e.length<=rn?e.map(this._renderOption):c` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:c`<div class="empty">${T("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:De._EMPTY;return c`
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
                aria-label=${T("clear","Clear")}
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
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${T("search","Search")}
                aria-label=${T("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
            </div>
          `:m}
    `}},De.styles=[oi,j`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],De._EMPTY=[],De);Hi([f({attribute:!1})],ai.prototype,"allowedValues");Hi([C()],ai.prototype,"_open");Hi([C()],ai.prototype,"_search");Hi([C()],ai.prototype,"_activeIndex");let bl=ai;X("sfx-meta-select-field",bl);var xl=Object.defineProperty,Vi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&xl(e,t,r),r},Me;const li=(Me=class extends xe{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{const i=this._selected;return c` <div
      class="option ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${i.includes(e.value)}
      @mousedown=${r=>{r.preventDefault(),this._toggle(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      <span class="check ${i.includes(e.value)?"checked":""}">
        ${i.includes(e.value)?"✓":""}
      </span>
      ${e.label}
    </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,r;const e=((i=this.field)==null?void 0:i.possible_values)??Me._EMPTY;if(((r=this._optionsCache)==null?void 0:r.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var r;const e=this._options,t=this.allowedValues;if(((r=this._selectableCache)==null?void 0:r.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(r=>r!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i),this._emit("field-blur",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t),this._emit("field-blur",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e),this._emit("field-blur",e)}_clearAll(){this.value=[],this._emit("field-change",[]),this._emit("field-blur",[])}_scrollActive(){this.updateComplete.then(()=>sn(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}_renderOptions(e){return e.length?e.length<=rn?e.map(this._renderOption):c` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:c`<div class="empty">${T("noOptions","No options")}</div>`}render(){var r;const e=this._selected,t=this._selectPlaceholder(),i=this._open?this._filtered:Me._EMPTY;return c`
      <div
        class="trigger"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${e.length?e.map(o=>c` <span class="chip">
                  ${this._labelFor(o)}
                  <button
                    class="chip-x"
                    aria-label=${T("removeItem","Remove {{item}}",{item:this._labelFor(o)})}
                    @click=${n=>{n.stopPropagation(),this._remove(o)}}
                  >
                    &times;
                  </button>
                </span>`):c`<span class="placeholder"
              >${((r=this.field)==null?void 0:r.placeholder)||t}</span
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
                placeholder=${T("search","Search")}
                aria-label=${T("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(i)}</div>
              ${this._options.length>0?c`
                    <div class="bulk-actions">
                      <button
                        type="button"
                        class="bulk-btn"
                        @mousedown=${o=>{o.preventDefault(),this._selectAll()}}
                      >
                        ${T("selectAll","Select all")}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${o=>{o.preventDefault(),this._clearAll()}}
                      >
                        ${T("clearAll","Clear all")}
                      </button>
                    </div>
                  `:m}
            </div>
          `:m}
    `}},Me.styles=[oi,Vr,j`
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
    `],Me._EMPTY=[],Me);Vi([f({attribute:!1})],li.prototype,"allowedValues");Vi([C()],li.prototype,"_open");Vi([C()],li.prototype,"_search");Vi([C()],li.prototype,"_activeIndex");let yl=li;X("sfx-meta-multi-select-field",yl);function st(s,e){var t,i;return((t=s.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function on(s){return s.trim().replace(/\s+/g," ")}function _l(s){return on(s).replace(/\s/g,"-")}function bi(s){return{label:on(s),value:_l(s)}}var wl=Object.defineProperty,It=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&wl(e,t,r),r};const cs=class cs extends xe{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,r;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(r=this.autocomplete)==null||r.search(this.field.ckey,t,o=>{this._results=o,this._loading=!1})}_addTag(e){if(this._tags.some(i=>st(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!st(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(bi(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(bi(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var o;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((o=this.field)==null?void 0:o.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!t.some(a=>st(a,n))).filter(n=>!e||n.label.toLowerCase().includes(e)),r=this._results.filter(n=>!t.some(a=>st(a,n))&&!i.some(a=>st(a,n)));return[...i,...r]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=bi(e);return!this._tags.some(i=>st(i,t))&&!this._suggestions.some(i=>st(i,t))}render(){var r,o;const e=this._tags,t=this._suggestions,i=t.length;return c`
      <div
        class="container"
        @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}
      >
        ${e.map(n=>c` <span class="chip">
              ${n.label}
              <button
                class="chip-x"
                aria-label=${T("removeItem","Remove {{item}}",{item:n.label})}
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
          aria-label=${((r=this.field)==null?void 0:r.title)??T("tags","Tags")}
          placeholder=${e.length?"":((o=this.field)==null?void 0:o.placeholder)||T("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?c`
            <div class="dropdown" role="listbox">
              ${this._loading?c`<div class="loading">${T("loading","Loading")}</div>`:m}
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
                    @mousedown=${n=>{n.preventDefault(),this._addTag(bi(this._query))}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${T("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
                  </div>`:m}
              ${!this._loading&&!t.length&&!this._canCreate?c`<div class="empty">${T("noResults","No results")}</div>`:m}
            </div>
          `:m}
    `}};cs.styles=[Vr,j`
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
    `];let je=cs;It([f({attribute:!1})],je.prototype,"autocomplete");It([C()],je.prototype,"_query");It([C()],je.prototype,"_results");It([C()],je.prototype,"_loading");It([C()],je.prototype,"_dropdownOpen");It([C()],je.prototype,"_activeIndex");X("sfx-meta-tags-field",je);var kl=Object.defineProperty,nn=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&kl(e,t,r),r};const ot=()=>[{label:T("booleanTrue","True"),value:"true"},{label:T("booleanFalse","False"),value:"false"}],ps=class ps extends xe{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=ot().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(ot().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,ot().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=ot().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<ot().length&&(e.preventDefault(),this._onSelect(ot()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return c`
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
                aria-label=${T("clear","Clear")}
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
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${ot().map((r,o)=>c` <div
                    class="option ${r.value===e?"selected":""} ${o===this._activeIndex?"active":""}"
                    role="option"
                    aria-selected=${r.value===e}
                    @mousedown=${n=>{n.preventDefault(),this._onSelect(r)}}
                    @mouseenter=${()=>{this._activeIndex=o}}
                  >
                    ${r.label}
                  </div>`)}
            </div>
          `:m}
    `}};ps.styles=[oi];let Ht=ps;nn([C()],Ht.prototype,"_open");nn([C()],Ht.prototype,"_activeIndex");X("sfx-meta-boolean-field",Ht);const us=class us extends xe{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return c`
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
    `}};us.styles=[Rt];let hr=us;X("sfx-meta-number-field",hr);const hs=class hs extends xe{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return c`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?c`<span class="date-placeholder">${T("pickADate","Pick a date")}</span>`:m}
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
    `}};hs.styles=[Rt,j`
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
    `];let fr=hs;X("sfx-meta-date-field",fr);const fs=class fs extends xe{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,r={...this._geo,[e]:i};this.value=r,this._emit("field-change",r)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return c`
      <div class="grid">
        <div>
          <label>${T("latitude","Latitude")}</label>
          <input
            type="number"
            step="any"
            inputmode="decimal"
            .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("latitude",t)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
        </div>
        <div>
          <label>${T("longitude","Longitude")}</label>
          <input
            type="number"
            step="any"
            inputmode="decimal"
            .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("longitude",t)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
        </div>
      </div>
    `}};fs.styles=[Rt,j`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        line-height: 1;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 6px;
      }
    `];let gr=fs;X("sfx-meta-geo-point-field",gr);var $l=Object.defineProperty,Ie=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&$l(e,t,r),r};const vt={uuid:"__root__",name:"",ltree:""},gs=class gs extends xe{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[vt],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var r,o,n;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((r=this.field)==null?void 0:r.ckey)??((o=this.field)==null?void 0:o.key)}" model:`,(n=this.field)==null?void 0:n.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[vt];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[vt];const i=t.slice(0,-1),o=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),n=[vt];let a="";for(let l=0;l<i.length;l++)a=a?`${a}.${i[l]}`:i[l],n.push({uuid:`__seed_${a}`,name:o[l]??i[l],ltree:a});return n}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,r=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=r.nodes,this._loading=!1;const o=this._selectedScalar,n=o?this._currentNodes.findIndex(a=>a.uuid===o||a.slug===o):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){var r;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(r=this.taxonomyService)==null||r.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,o=>{i===this._searchSeq&&(this._searchResults=o,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(r=>r.uuid!==vt.uuid).map(r=>r.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,r;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(r=this.renderRoot.querySelector(".trigger"))==null||r.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const o=this._currentNodes[this._activeIndex];o.children.count_direct>0&&(e.preventDefault(),this._drillInto(o))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const o=this._searchResults[this._activeIndex];o&&this._selectAutocomplete(o)}else{const o=this._currentNodes[this._activeIndex];o&&this._selectTreeNode(o)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?m:c`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const r=i===e.length-1,o=t.uuid===vt.uuid?T("rootNode","Root"):t.name;return c`
            ${i>0?c`<span class="crumb-sep">›</span>`:m}
            <button
              class="crumb ${r?"current":""}"
              type="button"
              ?disabled=${r}
              @click=${()=>!r&&this._jumpToCrumb(i)}
            >
              ${o}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return c`<div class="empty">${T("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return c`<div class="empty">${T("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return c`<div class="empty">${T("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return c`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const r=t.children.count_direct>0,o=!!e&&(e===t.uuid||e===t.slug);return c`
            <div
              class="tree-row ${i===this._activeIndex?"active":""} ${o?"selected":""}"
              role="option"
              aria-selected=${o}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>r?this._drillInto(t):this._selectTreeNode(t)}
            >
              <span
                class="tree-radio ${o?"checked":""}"
                role="button"
                aria-label=${T("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${r?c`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:m}
              <span class="tree-chevron ${r?"":"hidden"}" aria-hidden="true">
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
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?c`<div class="empty">${T("loading","Loading")}</div>`:this._searchResults.length===0?c`<div class="empty">${T("noResults","No results")}</div>`:c`
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
    `}render(){var r;if(!this._taxonomySuid)return c`<div class="misconfigured" role="alert">
        ${T("missingTaxonomyConfig","Field is missing taxonomy config")}
      </div>`;const e=this._selectPlaceholder(T("selectANode","Select a node")),t=this._displayPath,i=!!t;return c`
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${o=>{!this._open&&(o.key==="ArrowDown"||o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._openDropdown())}}
      >
        ${i?c`<span class="trigger-value" title=${t}>${t}</span>`:c`<span class="placeholder"
              >${((r=this.field)==null?void 0:r.placeholder)||e}</span
            >`}
        ${i&&!this.disabled?c`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${T("clear","Clear")}
                @click=${this._clear}
                @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._clear(o))}}
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
                aria-label=${T("searchTaxonomy","Search taxonomy")}
                placeholder=${T("search","Search")}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?m:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:m}
    `}};gs.styles=[oi,j`
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
    `];let ge=gs;Ie([f({attribute:!1})],ge.prototype,"taxonomyService");Ie([f({attribute:!1})],ge.prototype,"entry");Ie([C()],ge.prototype,"_open");Ie([C()],ge.prototype,"_query");Ie([C()],ge.prototype,"_drillStack");Ie([C()],ge.prototype,"_currentNodes");Ie([C()],ge.prototype,"_searchResults");Ie([C()],ge.prototype,"_loading");Ie([C()],ge.prototype,"_activeIndex");Ie([C()],ge.prototype,"_resolvedTaxonomyUuid");Ie([C()],ge.prototype,"_taxonomyResolutionFailed");X("sfx-meta-taxonomy-node-field",ge);var Sl=Object.defineProperty,He=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Sl(e,t,r),r};const Cl=(s,e)=>!!(e.uuid&&s.uuid===e.uuid||e.sid&&s.sid===e.sid||e.slug&&s.slug===e.slug),ms=class ms extends xe{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set}get _items(){return Array.isArray(this.value)?this.value.map(e=>typeof e=="string"?Ca(e)?{sid:e}:{slug:e}:e):[]}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichBySids()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichBySids()}async _maybeEnrichBySids(){const e=this.ultratags;if(!e)return;const t=this._items;if(t.length===0)return;const i=[];for(const r of t)r.sid&&!r.i18n&&!this._enrichmentAttempted.has(r.sid)&&i.push(r.sid);if(i.length!==0){for(const r of i)this._enrichmentAttempted.add(r);try{const r=await e.getBySids({sids:i,format:qs}),o=Ta(r.items||[]),n=Ra(t,o);this.value=n}catch{}}}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return Ri(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=o=>!!o.uuid&&e.has(o.uuid)||!!o.sid&&e.has(o.sid)||e.has(o.slug),r=(this._isRestricted?this._restrictedEntries:this._results).filter(o=>!t(o)).map(o=>({entry:o,label:Ri(o,this._currentLang,this._defaultLang).value||o.slug}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?r.filter(n=>n.label.toLowerCase().includes(o)):r}return r}get _isSearching(){return this._query.trim().length>=Ns}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=Hs(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(r=>r.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var o,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((o=this.field)!=null&&o.key)){this._results=[],this._loading=!1,(n=this.ultratags)==null||n.cancel();return}const i=this.ultratags;if(!i)return;const r=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:r,limit:wa,format:qs}).then(a=>{this._query.trim().toLowerCase()===r&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===r&&(this._results=[],this._loading=!1)})}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var r;(r=this.renderRoot.querySelector(".input"))==null||r.focus()})}async _createFromQuery(){var o,n;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((o=this.field)!=null&&o.key))return;const i=Hs(e);if(!i)return;const r=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:$a.UPSERT,items:[{slug:i,i18n:{[r]:e}}]}),l=(n=a==null?void 0:a.output)==null?void 0:n[0],d={slug:(l==null?void 0:l.slug)||i,sid:l==null?void 0:l.sid,uuid:l==null?void 0:l.uuid,i18n:(l==null?void 0:l.i18n)||{[r]:e}};if(this._entryAlreadySelected({uuid:d.uuid||"",sid:d.sid,slug:d.slug||i}))return;const p=[...this._items,d];this.value=p,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",p),this.updateComplete.then(()=>{var u;(u=this.renderRoot.querySelector(".input"))==null||u.focus()})}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!Cl(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var n,a;const e=this._items,t=this._dropdownOptions,i=t.length,r=this._query.trim(),o=((n=this.field)==null?void 0:n.placeholder)||(this._isRestricted?T("searchTagsToRemove","Search tags to remove"):T("addCustomTags","Add custom tags"));return c`
      <div
        class="container"
        @click=${()=>{var l;return(l=this.renderRoot.querySelector(".input"))==null?void 0:l.focus()}}
      >
        ${e.map(l=>{const d=this._labelForItem(l);return l.uuid||l.sid||l.slug,c` <span class="chip" title=${d}>
            ${d}
            <button
              class="chip-x"
              aria-label=${T("removeItem","Remove {{item}}",{item:d})}
              @click=${p=>{p.stopPropagation(),this._removeItem(l)}}
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
          aria-label=${((a=this.field)==null?void 0:a.title)??T("customTags","Custom tags")}
          placeholder=${e.length?"":o}
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
                    ${T("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:Ns})}
                  </div>`:m}
              ${!this._isRestricted&&this._isSearching&&this._loading?c`<div class="loading">${T("loading","Loading")}</div>`:m}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((l,d)=>c` <div
                        class="option ${d===this._activeIndex?"active":""}"
                        role="option"
                        @mousedown=${p=>{p.preventDefault(),this._addEntry(l.entry)}}
                        @mouseenter=${()=>{this._activeIndex=d}}
                      >
                        ${l.label}
                      </div>`):m}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?c`<div class="empty">${T("noResults","No results")}</div>`:m}
              ${this._canCreate?c` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${l=>{l.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${T("createTag","Create '{{tag}}'",{tag:r})}
                  </div>`:m}
            </div>
          `:m}
    `}};ms.styles=[Vr,j`
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
    `];let Ee=ms;He([f({attribute:!1})],Ee.prototype,"ultratags");He([f({attribute:!1})],Ee.prototype,"language");He([f({attribute:!1})],Ee.prototype,"defaultLanguage");He([f({attribute:!1})],Ee.prototype,"restrictToItems");He([C()],Ee.prototype,"_query");He([C()],Ee.prototype,"_results");He([C()],Ee.prototype,"_loading");He([C()],Ee.prototype,"_dropdownOpen");He([C()],Ee.prototype,"_activeIndex");X("sfx-meta-ultratags-field",Ee);const Yr=()=>T("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),an=c`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${J`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,vs=class vs extends G{constructor(){super(...arguments),this._i18nController=new Ue(this)}render(){const e=Yr();return c`
      <div class="unsupported" title=${e} aria-label=${e} aria-disabled="true" role="note">
        ${an}
        <span class="unsupported-text" aria-hidden="true"
          >${T("notEditableDuringUpload","Not editable during upload")}</span
        >
      </div>
    `}};vs.styles=j`
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
  `;let mr=vs;X("sfx-meta-unsupported-field",mr);var El=Object.defineProperty,Ae=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&El(e,t,r),r};const bs=class bs extends G{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(ii(e))return c`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return c`<sfx-meta-text-field
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
        ></sfx-meta-geo-point-field>`;default:return c`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}};bs.styles=j`
    :host {
      display: block;
    }
  `;let me=bs;Ae([f({attribute:!1})],me.prototype,"field");Ae([f({attribute:!1})],me.prototype,"value");Ae([f({attribute:!1})],me.prototype,"autocomplete");Ae([f({attribute:!1})],me.prototype,"taxonomyService");Ae([f({attribute:!1})],me.prototype,"taxonomyEntry");Ae([f({attribute:!1})],me.prototype,"ultratags");Ae([f({attribute:!1})],me.prototype,"language");Ae([f({attribute:!1})],me.prototype,"defaultLanguage");Ae([f({attribute:!1})],me.prototype,"ultratagsRestrictToItems");Ae([f({attribute:!1})],me.prototype,"allowedValues");Ae([f({type:Boolean})],me.prototype,"disabled");X("sfx-metadata-field-edit",me);var Tl=Object.defineProperty,di=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Tl(e,t,r),r};const xs=class xs extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.taxonomyEntry=null}_formatValue(){var i,r,o,n;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(r=this.field.possible_values)==null?void 0:r.find(l=>l.internal_unique_value===e||l.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var d;const l=(d=this.field.possible_values)==null?void 0:d.find(p=>p.internal_unique_value===a||p.api_value===a);return(l==null?void 0:l.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",l=this.defaultLanguage||a;return e.map(d=>typeof d=="string"?d:Ri({i18n:d.i18n,slug:d.slug||""},a,l).value||d.slug||d.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(o=this.taxonomyEntry)!=null&&o.path?this.taxonomyEntry.path:(n=this.taxonomyEntry)!=null&&n.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&ii(this.field))return c`
        <div class="value empty" title=${Yr()}>
          ${T("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?c`
        <div class="value">
          <a
            class="link"
            href=${e}
            target="_blank"
            rel="noopener noreferrer"
            @click=${r=>r.stopPropagation()}
            >${e}</a
          >
        </div>
      `:c`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};xs.styles=j`
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
  `;let Ze=xs;di([f({attribute:!1})],Ze.prototype,"field");di([f({attribute:!1})],Ze.prototype,"value");di([f({attribute:!1})],Ze.prototype,"taxonomyEntry");di([f({attribute:!1})],Ze.prototype,"language");di([f({attribute:!1})],Ze.prototype,"defaultLanguage");X("sfx-metadata-field-view",Ze);var Rl=Object.defineProperty,Ki=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Rl(e,t,r),r};const ys=class ys extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const r of t.variants)e.push({groupUuid:t.uuid,value:r.api_value,label:r.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var r;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const o of t){const n=this.selectedFilters[o.uuid]??((r=o.variants[0])==null?void 0:r.api_value),a=o.variants.find(l=>l.api_value===n);a&&i.push(t.length===1?a.label:`${o.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return m;const t=this._options,i=T("regionalSettings","Regional settings"),r=this._triggerSummary(i);return c`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${i} — ${r}`}
        title=${r}
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
              ${t.map((o,n)=>this._renderOption(o,n,o.value===this.selectedFilters[o.groupUuid]))}
            </div>
          `:m}
    `}_renderOption(e,t,i){const r=this._activeIndex===t;return c`
      ${e.isGroupStart?c`<div class="group-header">${e.groupLabel}</div>`:m}
      <div
        class="option ${i?"selected":""} ${r?"active":""}"
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
    `}};ys.styles=[oi,j`
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
    `];let ut=ys;Ki([f({attribute:!1})],ut.prototype,"groups");Ki([f({attribute:!1})],ut.prototype,"selectedFilters");Ki([C()],ut.prototype,"_open");Ki([C()],ut.prototype,"_activeIndex");X("sfx-regional-settings",ut);const Gr="system.tags",Pl="__tags__";function vr(s){return s===Gr}function Il(s){return{key:Gr,ckey:"",uuid:"system-tags",title:s("tagsLabel","Tags"),type:"tags",placeholder:s("addTags","Add tags"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function mu(s,e){const t=Il(e);let i=!1,r=s.groups.map(a=>!i&&a.isRoot?(i=!0,{...a,fields:[...a.fields,t]}):a);i||(r=[{uuid:Pl,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...r]);const o=r.flatMap(a=>a.fields),n=new Map(o.map(a=>[a.key,a]));return{...s,groups:r,fields:o,fieldsByKey:n}}var Al=Object.defineProperty,ci=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Al(e,t,r),r};const Fl=(s,e)=>typeof e=="string"?e:s,_s=class _s extends G{constructor(){super(...arguments),this.product={},this.disabled=!1,this.t=Fl,this._collapsed=!1,this._errors={}}willUpdate(e){e.has("product")&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent("product-blur",{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;const t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError("ref")}_onRefBlur(e){const t=e.target.value,i=za(t);if(i){this._errors={...this._errors,ref:i};return}this._clearError("ref"),this._emit("ref",t===""?void 0:t)}_onPositionInput(){this._clearError("position")}_onPositionBlur(e){const t=e.target.value,i=La(t);if(i){this._errors={...this._errors,position:i};return}this._clearError("position"),t===""||t==null?this._emit("position",void 0):this._emit("position",Number(t))}_onKeydown(e){var t,i;if(e.key==="Enter")e.target.blur();else if(e.key==="Escape"){const r=e.target,o=r.dataset.key;o==="ref"&&(r.value=((t=this.product)==null?void 0:t.ref)??""),o==="position"&&(r.value=((i=this.product)==null?void 0:i.position)==null?"":String(this.product.position)),o&&this._clearError(o),r.blur()}}_renderRow(e,t,i){const r=this._errors[e],o=r?this.t(r,r):"";return c`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${i}
          ${r?c`<div class="field-error" role="alert">${o}</div>`:m}
        </div>
      </div>
    `}render(){var r,o;const e=!this._collapsed,t=((r=this.product)==null?void 0:r.ref)??"",i=((o=this.product)==null?void 0:o.position)==null?"":String(this.product.position);return c`
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
    `}};_s.styles=[Rt,Zo,j`
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
    `];let Qe=_s;ci([f({attribute:!1})],Qe.prototype,"product");ci([f({type:Boolean})],Qe.prototype,"disabled");ci([f({attribute:!1})],Qe.prototype,"t");ci([C()],Qe.prototype,"_collapsed");ci([C()],Qe.prototype,"_errors");X("sfx-product-fields-form",Qe);const Ws={text:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${J`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${J`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${J`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":c`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${J`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Ol(s){return Ws[s]??Ws.text}function Ul(s,e,t){let r=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(r+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return r}function zl(s,e){const t=new XMLHttpRequest;let i=!1;const r=Ul(e.apiBase,e.folder,e.extraParams);t.open("POST",r);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):ti(n)?e.onComplete(Dr(n,s)):e.onError(new Error(Ti(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const o=new FormData;if(s.file){const n={name:s.name,type:s.type};o.append("info[files[]]",JSON.stringify(n)),Object.keys(s.meta).length>0&&o.append("meta[files[]]",JSON.stringify(s.meta)),s.tags.length>0&&o.append("tags[files[]]",JSON.stringify(s.tags)),jr(s.product)&&o.append("product[files[]]",JSON.stringify(Nr(s.product))),o.append("files[]",s.file,s.name)}return t.send(o),{abort(){i=!0,t.abort()}}}function Yi(s){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":s}}function it(s){return s.replace(/\/+$/,"")}const Ll={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function pi(s){return Ll[s]??s}function vu(s,e){const t=it(s),i=btoa(JSON.stringify({origin:window.location.origin})),r=pi(e);return`${t}/${r}/connect?state=${encodeURIComponent(i)}`}async function Dl(s,e,t,i="",r){const o=it(s),n=i?`/${i}`:"",a=pi(e),l=await fetch(`${o}/${a}/list${n}`,{method:"GET",headers:Yi(t),credentials:"same-origin",signal:r});if(l.status===401)throw new Wr;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Ml(s,e,t,i){const r=it(s),o=await fetch(`${r}/${t}`,{method:"GET",headers:Yi(e),credentials:"same-origin",signal:i});if(o.status===401)throw new Wr;if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${o.status})`)}return o.json()}async function bu(s,e,t,i,r,o){const n=[];async function a(l,d){let p=null,u=!0;do{if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");const h=u?await Dl(s,e,t,l,o):await Ml(s,t,p,o);u=!1,p=h.nextPagePath;for(const y of h.items){if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");if(y.isFolder){const S=d?`${d}/${y.name}`:y.name;await a(y.requestPath,S)}else n.push({...y,relativeFolder:d})}}while(p)}return await a(i,r),n}async function xu(s,e,t,i){const r=it(s),o=pi(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${r}/search/${o}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function Bl(s,e,t,i,r,o=!1){const n=it(s),a=pi(e),l=o?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,d=o?{Accept:"application/json","Content-Type":"application/json"}:Yi(t),p=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...r,httpMethod:r.httpMethod??"POST",useFormData:r.useFormData??!0,fieldname:r.fieldname??"files[]"})});if(p.status===401)throw new Wr;if(!p.ok){const u=await p.json().catch(()=>null);throw new Error((u==null?void 0:u.message)||`Companion upload failed (HTTP ${p.status})`)}return p.json()}async function jl(s,e,t){const i=it(s),r=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!r.ok){const o=await r.json().catch(()=>null);throw new Error((o==null?void 0:o.message)||`Could not fetch URL metadata (HTTP ${r.status})`)}return r.json()}async function Nl(s,e,t,i){const r=it(s),o=await fetch(`${r}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${o.status})`)}return o.json()}async function yu(s,e,t){const i=it(s),r=pi(e),o=await fetch(`${i}/${r}/logout`,{method:"GET",headers:Yi(t),credentials:"same-origin"});return o.ok?o.json():{ok:!1,revoked:!1}}function ql(s){var r;const t=((r=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(s))==null?void 0:r[1])??s;return`${/^https:\/\//i.test(s)?"wss":"ws"}://${t}`}class Wr extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function ln(s,e,t){let r=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(r+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return r}function dn(s,e){const t={name:s.name,type:s.type,"filerobot-folder":e};return s.meta&&Object.keys(s.meta).length>0&&(t.meta=JSON.stringify(s.meta)),s.tags&&s.tags.length>0&&(t.tags=JSON.stringify(s.tags)),jr(s.product)&&(t.product=JSON.stringify(Nr(s.product))),t}function cn(s){const t=`${ql(s.companionUrl)}/api/${s.token}`;let i;try{i=new WebSocket(t)}catch{return s.onError(new Error("Failed to connect to upload progress channel")),null}let r=!1;const o=()=>{r=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,d;if(!r)try{const p=JSON.parse(n.data);switch(p.action){case"progress":{const u=p.payload,h=u.bytesUploaded??0,y=u.bytesTotal??(s.expectedSize||1);s.onProgress(h,y);break}case"success":{const u=p.payload;if(o(),i.close(),(a=u.response)!=null&&a.responseText)try{const h=JSON.parse(u.response.responseText);if(h.status==="success"){s.onComplete(h);return}if(ti(h)){s.onComplete(Dr(h,s.uploadFile));return}s.onError(new Error(Ti(h,"Upload failed")));return}catch{}s.onError(new Error("Upload completed but no valid response received"));break}case"error":{const u=p.payload;o(),i.close();let h=((l=u.error)==null?void 0:l.message)||"Upload failed";if((d=u.response)!=null&&d.responseText)try{const y=JSON.parse(u.response.responseText);h=Ti(y,h)}catch{}s.onError(new Error(h));break}}}catch{}},i.onerror=()=>{r||(o(),s.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{r||(o(),s.onError(new Error("Upload progress connection closed unexpectedly")))},i}function pn(s){if(s){s.onmessage=null,s.onerror=null,s.onclose=null;try{s.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}s.close()}}async function Hl(s,e,t,i,r,o,n){const a=s.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:r,size:o,metadata:n})});if(!l.ok){const d=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${d}`)}return l.json()}function Vl(s,e){const t=s.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,r=null;const o=ln(e.apiBase,e.folder,e.extraParams),n=dn(s,e.folder);return(t.pickerAccessToken?Hl(t.companionUrl,t.pickerAccessToken,t.fileId,o,e.authHeaders,t.size,n):Bl(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:o,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(l=>{i||(r=cn({companionUrl:t.companionUrl,token:l.token,uploadFile:s,expectedSize:t.size,onProgress:(d,p)=>{i||e.onProgress(d,p)},onComplete:d=>{i||e.onComplete(d)},onError:d=>{i||e.onError(d)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,pn(r),r=null}}}function Kl(s,e){const t=s.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,r=null;const o=new AbortController,n=ln(e.apiBase,e.folder,e.extraParams);return jl(e.companionUrl,t,o.signal).then(a=>{var d;if(i)return null;(d=e.onMeta)==null||d.call(e,{name:a.name,type:a.type,size:a.size});const l=dn(s,e.folder);return a.name&&(l.name=a.name),a.type&&(l.type=a.type),Nl(e.companionUrl,t,{fileId:s.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},o.signal).then(p=>({result:p,size:a.size}))}).then(a=>{i||!a||(r=cn({companionUrl:e.companionUrl,token:a.result.token,uploadFile:s,expectedSize:a.size,onProgress:(l,d)=>{i||e.onProgress(l,d)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,o.abort(),pn(r),r=null}}}function br(s){"@babel/helpers - typeof";return br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},br(s)}function Yl(s,e,t){return Object.defineProperty(s,"prototype",{writable:!1}),s}function Gl(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Wl(s,e,t){return e=Kt(e),Xl(s,Xr()?Reflect.construct(e,t||[],Kt(s).constructor):e.apply(s,t))}function Xl(s,e){if(e&&(br(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jl(s)}function Jl(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Zl(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Vt(s,e)}function xr(s){var e=typeof Map=="function"?new Map:void 0;return xr=function(i){if(i===null||!ed(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Ql(i,arguments,Kt(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Vt(r,i)},xr(s)}function Ql(s,e,t){if(Xr())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(s.bind.apply(s,i));return t&&Vt(r,t.prototype),r}function Xr(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Xr=function(){return!!s})()}function ed(s){try{return Function.toString.call(s).indexOf("[native code]")!==-1}catch{return typeof s=="function"}}function Vt(s,e){return Vt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Vt(s,e)}function Kt(s){return Kt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Kt(s)}var Dt=(function(s){function e(t){var i,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Gl(this,e),i=Wl(this,e,[t]),i.originalRequest=o,i.originalResponse=n,i.causingError=r,r!=null&&(t+=", caused by ".concat(r.toString())),o!=null){var a=o.getHeader("X-Request-ID")||"n/a",l=o.getMethod(),d=o.getURL(),p=n?n.getStatus():"n/a",u=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(p,", response text: ").concat(u,", request id: ").concat(a,")")}return i.message=t,i}return Zl(e,s),Yl(e)})(xr(Error));function Yt(s){"@babel/helpers - typeof";return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt(s)}function td(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function id(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,sd(i.key),i)}}function rd(s,e,t){return e&&id(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function sd(s){var e=od(s,"string");return Yt(e)=="symbol"?e:e+""}function od(s,e){if(Yt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Yt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var nd=(function(){function s(){td(this,s)}return rd(s,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const un="3.7.8",ad=un,At=typeof Buffer=="function",Xs=typeof TextDecoder=="function"?new TextDecoder:void 0,Js=typeof TextEncoder=="function"?new TextEncoder:void 0,ld="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Mt=Array.prototype.slice.call(ld),xi=(s=>{let e={};return s.forEach((t,i)=>e[t]=i),e})(Mt),dd=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,ae=String.fromCharCode.bind(String),Zs=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):s=>new Uint8Array(Array.prototype.slice.call(s,0)),hn=s=>s.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),fn=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),gn=s=>{let e,t,i,r,o="";const n=s.length%3;for(let a=0;a<s.length;){if((t=s.charCodeAt(a++))>255||(i=s.charCodeAt(a++))>255||(r=s.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|r,o+=Mt[e>>18&63]+Mt[e>>12&63]+Mt[e>>6&63]+Mt[e&63]}return n?o.slice(0,n-3)+"===".substring(n):o},Jr=typeof btoa=="function"?s=>btoa(s):At?s=>Buffer.from(s,"binary").toString("base64"):gn,yr=At?s=>Buffer.from(s).toString("base64"):s=>{let t=[];for(let i=0,r=s.length;i<r;i+=4096)t.push(ae.apply(null,s.subarray(i,i+4096)));return Jr(t.join(""))},$i=(s,e=!1)=>e?hn(yr(s)):yr(s),cd=s=>{if(s.length<2){var e=s.charCodeAt(0);return e<128?s:e<2048?ae(192|e>>>6)+ae(128|e&63):ae(224|e>>>12&15)+ae(128|e>>>6&63)+ae(128|e&63)}else{var e=65536+(s.charCodeAt(0)-55296)*1024+(s.charCodeAt(1)-56320);return ae(240|e>>>18&7)+ae(128|e>>>12&63)+ae(128|e>>>6&63)+ae(128|e&63)}},pd=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,mn=s=>s.replace(pd,cd),Qs=At?s=>Buffer.from(s,"utf8").toString("base64"):Js?s=>yr(Js.encode(s)):s=>Jr(mn(s)),Ct=(s,e=!1)=>e?hn(Qs(s)):Qs(s),eo=s=>Ct(s,!0),ud=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,hd=s=>{switch(s.length){case 4:var e=(7&s.charCodeAt(0))<<18|(63&s.charCodeAt(1))<<12|(63&s.charCodeAt(2))<<6|63&s.charCodeAt(3),t=e-65536;return ae((t>>>10)+55296)+ae((t&1023)+56320);case 3:return ae((15&s.charCodeAt(0))<<12|(63&s.charCodeAt(1))<<6|63&s.charCodeAt(2));default:return ae((31&s.charCodeAt(0))<<6|63&s.charCodeAt(1))}},vn=s=>s.replace(ud,hd),bn=s=>{if(s=s.replace(/\s+/g,""),!dd.test(s))throw new TypeError("malformed base64.");s+="==".slice(2-(s.length&3));let e,t,i,r=[];for(let o=0;o<s.length;)e=xi[s.charAt(o++)]<<18|xi[s.charAt(o++)]<<12|(t=xi[s.charAt(o++)])<<6|(i=xi[s.charAt(o++)]),t===64?r.push(ae(e>>16&255)):i===64?r.push(ae(e>>16&255,e>>8&255)):r.push(ae(e>>16&255,e>>8&255,e&255));return r.join("")},Zr=typeof atob=="function"?s=>atob(fn(s)):At?s=>Buffer.from(s,"base64").toString("binary"):bn,xn=At?s=>Zs(Buffer.from(s,"base64")):s=>Zs(Zr(s).split("").map(e=>e.charCodeAt(0))),yn=s=>xn(_n(s)),fd=At?s=>Buffer.from(s,"base64").toString("utf8"):Xs?s=>Xs.decode(xn(s)):s=>vn(Zr(s)),_n=s=>fn(s.replace(/[-_]/g,e=>e=="-"?"+":"/")),_r=s=>fd(_n(s)),gd=s=>{if(typeof s!="string")return!1;const e=s.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},wn=s=>({value:s,enumerable:!1,writable:!0,configurable:!0}),kn=function(){const s=(e,t)=>Object.defineProperty(String.prototype,e,wn(t));s("fromBase64",function(){return _r(this)}),s("toBase64",function(e){return Ct(this,e)}),s("toBase64URI",function(){return Ct(this,!0)}),s("toBase64URL",function(){return Ct(this,!0)}),s("toUint8Array",function(){return yn(this)})},$n=function(){const s=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,wn(t));s("toBase64",function(e){return $i(this,e)}),s("toBase64URI",function(){return $i(this,!0)}),s("toBase64URL",function(){return $i(this,!0)})},md=()=>{kn(),$n()},vd={version:un,VERSION:ad,atob:Zr,atobPolyfill:bn,btoa:Jr,btoaPolyfill:gn,fromBase64:_r,toBase64:Ct,encode:Ct,encodeURI:eo,encodeURL:eo,utob:mn,btou:vn,decode:_r,isValid:gd,fromUint8Array:$i,toUint8Array:yn,extendString:kn,extendUint8Array:$n,extendBuiltins:md};var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ir,io;function xd(){return io||(io=1,ir=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),ir}var yi={},ro;function yd(){if(ro)return yi;ro=1;var s=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function r(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(n);){var p=t(d[1]),u=t(d[2]);p===null||u===null||p in l||(l[p]=u)}return l}function o(n,a){a=a||"";var l=[],d,p;typeof a!="string"&&(a="?");for(p in n)if(s.call(n,p)){if(d=n[p],!d&&(d===null||d===e||isNaN(d))&&(d=""),p=i(p),d=i(d),p===null||d===null)continue;l.push(p+"="+d)}return l.length?a+l.join("&"):""}return yi.stringify=o,yi.parse=r,yi}var rr,so;function _d(){if(so)return rr;so=1;var s=xd(),e=yd(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,o=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(w){return(w||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function($,b){return h(b.protocol)?$.replace(/\\/g,"/"):$},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function u(w){var $;typeof window<"u"?$=window:typeof to<"u"?$=to:typeof self<"u"?$=self:$={};var b=$.location||{};w=w||b;var x={},F=typeof w,P;if(w.protocol==="blob:")x=new k(unescape(w.pathname),{});else if(F==="string"){x=new k(w,{});for(P in p)delete x[P]}else if(F==="object"){for(P in w)P in p||(x[P]=w[P]);x.slashes===void 0&&(x.slashes=r.test(w.href))}return x}function h(w){return w==="file:"||w==="ftp:"||w==="http:"||w==="https:"||w==="ws:"||w==="wss:"}function y(w,$){w=l(w),w=w.replace(i,""),$=$||{};var b=n.exec(w),x=b[1]?b[1].toLowerCase():"",F=!!b[2],P=!!b[3],U=0,z;return F?P?(z=b[2]+b[3]+b[4],U=b[2].length+b[3].length):(z=b[2]+b[4],U=b[2].length):P?(z=b[3]+b[4],U=b[3].length):z=b[4],x==="file:"?U>=2&&(z=z.slice(2)):h(x)?z=b[4]:x?F&&(z=z.slice(2)):U>=2&&h($.protocol)&&(z=b[4]),{protocol:x,slashes:F||h(x),slashesCount:U,rest:z}}function S(w,$){if(w==="")return $;for(var b=($||"/").split("/").slice(0,-1).concat(w.split("/")),x=b.length,F=b[x-1],P=!1,U=0;x--;)b[x]==="."?b.splice(x,1):b[x]===".."?(b.splice(x,1),U++):U&&(x===0&&(P=!0),b.splice(x,1),U--);return P&&b.unshift(""),(F==="."||F==="..")&&b.push(""),b.join("/")}function k(w,$,b){if(w=l(w),w=w.replace(i,""),!(this instanceof k))return new k(w,$,b);var x,F,P,U,z,H,B=d.slice(),we=typeof $,L=this,ke=0;for(we!=="object"&&we!=="string"&&(b=$,$=null),b&&typeof b!="function"&&(b=e.parse),$=u($),F=y(w||"",$),x=!F.protocol&&!F.slashes,L.slashes=F.slashes||x&&$.slashes,L.protocol=F.protocol||$.protocol||"",w=F.rest,(F.protocol==="file:"&&(F.slashesCount!==2||a.test(w))||!F.slashes&&(F.protocol||F.slashesCount<2||!h(L.protocol)))&&(B[3]=[/(.*)/,"pathname"]);ke<B.length;ke++){if(U=B[ke],typeof U=="function"){w=U(w,L);continue}P=U[0],H=U[1],P!==P?L[H]=w:typeof P=="string"?(z=P==="@"?w.lastIndexOf(P):w.indexOf(P),~z&&(typeof U[2]=="number"?(L[H]=w.slice(0,z),w=w.slice(z+U[2])):(L[H]=w.slice(z),w=w.slice(0,z)))):(z=P.exec(w))&&(L[H]=z[1],w=w.slice(0,z.index)),L[H]=L[H]||x&&U[3]&&$[H]||"",U[4]&&(L[H]=L[H].toLowerCase())}b&&(L.query=b(L.query)),x&&$.slashes&&L.pathname.charAt(0)!=="/"&&(L.pathname!==""||$.pathname!=="")&&(L.pathname=S(L.pathname,$.pathname)),L.pathname.charAt(0)!=="/"&&h(L.protocol)&&(L.pathname="/"+L.pathname),s(L.port,L.protocol)||(L.host=L.hostname,L.port=""),L.username=L.password="",L.auth&&(z=L.auth.indexOf(":"),~z?(L.username=L.auth.slice(0,z),L.username=encodeURIComponent(decodeURIComponent(L.username)),L.password=L.auth.slice(z+1),L.password=encodeURIComponent(decodeURIComponent(L.password))):L.username=encodeURIComponent(decodeURIComponent(L.auth)),L.auth=L.password?L.username+":"+L.password:L.username),L.origin=L.protocol!=="file:"&&h(L.protocol)&&L.host?L.protocol+"//"+L.host:"null",L.href=L.toString()}function R(w,$,b){var x=this;switch(w){case"query":typeof $=="string"&&$.length&&($=(b||e.parse)($)),x[w]=$;break;case"port":x[w]=$,s($,x.protocol)?$&&(x.host=x.hostname+":"+$):(x.host=x.hostname,x[w]="");break;case"hostname":x[w]=$,x.port&&($+=":"+x.port),x.host=$;break;case"host":x[w]=$,o.test($)?($=$.split(":"),x.port=$.pop(),x.hostname=$.join(":")):(x.hostname=$,x.port="");break;case"protocol":x.protocol=$.toLowerCase(),x.slashes=!b;break;case"pathname":case"hash":if($){var F=w==="pathname"?"/":"#";x[w]=$.charAt(0)!==F?F+$:$}else x[w]=$;break;case"username":case"password":x[w]=encodeURIComponent($);break;case"auth":var P=$.indexOf(":");~P?(x.username=$.slice(0,P),x.username=encodeURIComponent(decodeURIComponent(x.username)),x.password=$.slice(P+1),x.password=encodeURIComponent(decodeURIComponent(x.password))):x.username=encodeURIComponent(decodeURIComponent($))}for(var U=0;U<d.length;U++){var z=d[U];z[4]&&(x[z[1]]=x[z[1]].toLowerCase())}return x.auth=x.password?x.username+":"+x.password:x.username,x.origin=x.protocol!=="file:"&&h(x.protocol)&&x.host?x.protocol+"//"+x.host:"null",x.href=x.toString(),x}function E(w){(!w||typeof w!="function")&&(w=e.stringify);var $,b=this,x=b.host,F=b.protocol;F&&F.charAt(F.length-1)!==":"&&(F+=":");var P=F+(b.protocol&&b.slashes||h(b.protocol)?"//":"");return b.username?(P+=b.username,b.password&&(P+=":"+b.password),P+="@"):b.password?(P+=":"+b.password,P+="@"):b.protocol!=="file:"&&h(b.protocol)&&!x&&b.pathname!=="/"&&(P+="@"),(x[x.length-1]===":"||o.test(b.hostname)&&!b.port)&&(x+=":"),P+=x+b.pathname,$=typeof b.query=="object"?w(b.query):b.query,$&&(P+=$.charAt(0)!=="?"?"?"+$:$),b.hash&&(P+=b.hash),P}return k.prototype={set:R,toString:E},k.extractProtocol=y,k.location=u,k.trimLeft=l,k.qs=e,rr=k,rr}var wd=_d();const kd=bd(wd);function $d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){var e=Math.random()*16|0,t=s==="x"?e:e&3|8;return t.toString(16)})}function wr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */wr=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function(_,g,v){_[g]=v.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(_,g,v){return Object.defineProperty(_,g,{value:v,enumerable:!0,configurable:!0,writable:!0}),_[g]}try{d({},"")}catch{d=function(v,I,O){return v[I]=O}}function p(_,g,v,I){var O=g&&g.prototype instanceof E?g:E,A=Object.create(O.prototype),D=new ke(I||[]);return r(A,"_invoke",{value:H(_,v,D)}),A}function u(_,g,v){try{return{type:"normal",arg:_.call(g,v)}}catch(I){return{type:"throw",arg:I}}}e.wrap=p;var h="suspendedStart",y="suspendedYield",S="executing",k="completed",R={};function E(){}function w(){}function $(){}var b={};d(b,n,function(){return this});var x=Object.getPrototypeOf,F=x&&x(x(Le([])));F&&F!==t&&i.call(F,n)&&(b=F);var P=$.prototype=E.prototype=Object.create(b);function U(_){["next","throw","return"].forEach(function(g){d(_,g,function(v){return this._invoke(g,v)})})}function z(_,g){function v(O,A,D,V){var K=u(_[O],_,A);if(K.type!=="throw"){var pe=K.arg,ne=pe.value;return ne&&ht(ne)=="object"&&i.call(ne,"__await")?g.resolve(ne.__await).then(function(ue){v("next",ue,D,V)},function(ue){v("throw",ue,D,V)}):g.resolve(ne).then(function(ue){pe.value=ue,D(pe)},function(ue){return v("throw",ue,D,V)})}V(K.arg)}var I;r(this,"_invoke",{value:function(A,D){function V(){return new g(function(K,pe){v(A,D,K,pe)})}return I=I?I.then(V,V):V()}})}function H(_,g,v){var I=h;return function(O,A){if(I===S)throw Error("Generator is already running");if(I===k){if(O==="throw")throw A;return{value:s,done:!0}}for(v.method=O,v.arg=A;;){var D=v.delegate;if(D){var V=B(D,v);if(V){if(V===R)continue;return V}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(I===h)throw I=k,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);I=S;var K=u(_,g,v);if(K.type==="normal"){if(I=v.done?k:y,K.arg===R)continue;return{value:K.arg,done:v.done}}K.type==="throw"&&(I=k,v.method="throw",v.arg=K.arg)}}}function B(_,g){var v=g.method,I=_.iterator[v];if(I===s)return g.delegate=null,v==="throw"&&_.iterator.return&&(g.method="return",g.arg=s,B(_,g),g.method==="throw")||v!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+v+"' method")),R;var O=u(I,_.iterator,g.arg);if(O.type==="throw")return g.method="throw",g.arg=O.arg,g.delegate=null,R;var A=O.arg;return A?A.done?(g[_.resultName]=A.value,g.next=_.nextLoc,g.method!=="return"&&(g.method="next",g.arg=s),g.delegate=null,R):A:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,R)}function we(_){var g={tryLoc:_[0]};1 in _&&(g.catchLoc=_[1]),2 in _&&(g.finallyLoc=_[2],g.afterLoc=_[3]),this.tryEntries.push(g)}function L(_){var g=_.completion||{};g.type="normal",delete g.arg,_.completion=g}function ke(_){this.tryEntries=[{tryLoc:"root"}],_.forEach(we,this),this.reset(!0)}function Le(_){if(_||_===""){var g=_[n];if(g)return g.call(_);if(typeof _.next=="function")return _;if(!isNaN(_.length)){var v=-1,I=function O(){for(;++v<_.length;)if(i.call(_,v))return O.value=_[v],O.done=!1,O;return O.value=s,O.done=!0,O};return I.next=I}}throw new TypeError(ht(_)+" is not iterable")}return w.prototype=$,r(P,"constructor",{value:$,configurable:!0}),r($,"constructor",{value:w,configurable:!0}),w.displayName=d($,l,"GeneratorFunction"),e.isGeneratorFunction=function(_){var g=typeof _=="function"&&_.constructor;return!!g&&(g===w||(g.displayName||g.name)==="GeneratorFunction")},e.mark=function(_){return Object.setPrototypeOf?Object.setPrototypeOf(_,$):(_.__proto__=$,d(_,l,"GeneratorFunction")),_.prototype=Object.create(P),_},e.awrap=function(_){return{__await:_}},U(z.prototype),d(z.prototype,a,function(){return this}),e.AsyncIterator=z,e.async=function(_,g,v,I,O){O===void 0&&(O=Promise);var A=new z(p(_,g,v,I),O);return e.isGeneratorFunction(g)?A:A.next().then(function(D){return D.done?D.value:A.next()})},U(P),d(P,l,"Generator"),d(P,n,function(){return this}),d(P,"toString",function(){return"[object Generator]"}),e.keys=function(_){var g=Object(_),v=[];for(var I in g)v.push(I);return v.reverse(),function O(){for(;v.length;){var A=v.pop();if(A in g)return O.value=A,O.done=!1,O}return O.done=!0,O}},e.values=Le,ke.prototype={constructor:ke,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(L),!g)for(var v in this)v.charAt(0)==="t"&&i.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=s)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var v=this;function I(pe,ne){return D.type="throw",D.arg=g,v.next=pe,ne&&(v.method="next",v.arg=s),!!ne}for(var O=this.tryEntries.length-1;O>=0;--O){var A=this.tryEntries[O],D=A.completion;if(A.tryLoc==="root")return I("end");if(A.tryLoc<=this.prev){var V=i.call(A,"catchLoc"),K=i.call(A,"finallyLoc");if(V&&K){if(this.prev<A.catchLoc)return I(A.catchLoc,!0);if(this.prev<A.finallyLoc)return I(A.finallyLoc)}else if(V){if(this.prev<A.catchLoc)return I(A.catchLoc,!0)}else{if(!K)throw Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return I(A.finallyLoc)}}}},abrupt:function(g,v){for(var I=this.tryEntries.length-1;I>=0;--I){var O=this.tryEntries[I];if(O.tryLoc<=this.prev&&i.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var A=O;break}}A&&(g==="break"||g==="continue")&&A.tryLoc<=v&&v<=A.finallyLoc&&(A=null);var D=A?A.completion:{};return D.type=g,D.arg=v,A?(this.method="next",this.next=A.finallyLoc,R):this.complete(D)},complete:function(g,v){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&v&&(this.next=v),R},finish:function(g){for(var v=this.tryEntries.length-1;v>=0;--v){var I=this.tryEntries[v];if(I.finallyLoc===g)return this.complete(I.completion,I.afterLoc),L(I),R}},catch:function(g){for(var v=this.tryEntries.length-1;v>=0;--v){var I=this.tryEntries[v];if(I.tryLoc===g){var O=I.completion;if(O.type==="throw"){var A=O.arg;L(I)}return A}}throw Error("illegal catch attempt")},delegateYield:function(g,v,I){return this.delegate={iterator:Le(g),resultName:v,nextLoc:I},this.method==="next"&&(this.arg=s),R}},e}function oo(s,e,t,i,r,o,n){try{var a=s[o](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,r)}function Sd(s){return function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function n(l){oo(o,i,r,n,a,"next",l)}function a(l){oo(o,i,r,n,a,"throw",l)}n(void 0)})}}function Sn(s,e){return Td(s)||Ed(s,e)||Cn(s,e)||Cd()}function Cd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ed(s,e){var t=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var i,r,o,n,a=[],l=!0,d=!1;try{if(o=(t=t.call(s)).next,e!==0)for(;!(l=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(p){d=!0,r=p}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(d)throw r}}return a}}function Td(s){if(Array.isArray(s))return s}function ht(s){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ht(s)}function Rd(s,e){var t=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!t){if(Array.isArray(s)||(t=Cn(s))||e){t&&(s=t);var i=0,r=function(){};return{s:r,n:function(){return i>=s.length?{done:!0}:{done:!1,value:s[i++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,n=!1,a;return{s:function(){t=t.call(s)},n:function(){var d=t.next();return o=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function Cn(s,e){if(s){if(typeof s=="string")return no(s,e);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return no(s,e)}}function no(s,e){(e==null||e>s.length)&&(e=s.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=s[t];return i}function ao(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function bt(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ao(Object(t),!0).forEach(function(i){Pd(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):ao(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function Pd(s,e,t){return e=En(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Id(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function lo(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,En(i.key),i)}}function Ad(s,e,t){return e&&lo(s.prototype,e),t&&lo(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function En(s){var e=Fd(s,"string");return ht(e)=="symbol"?e:e+""}function Fd(s,e){if(ht(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(ht(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var Si="tus-v1",Ci="ietf-draft-03",Bt="ietf-draft-05",Od={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Tn,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Si},Ai=(function(){function s(e,t){Id(this,s),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Ad(s,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Si,Ci,Bt].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var r=this.options.retryDelays;if(r!=null&&Object.prototype.toString.call(r)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var o=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];o<n.length;o++){var a=n[o];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,r=this._size,o=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:zd(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(p,u){p.uploadUrl=i._parallelUploadUrls[u]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(p,u){var h=0;return i._source.slice(p.start,p.end).then(function(y){var S=y.value;return new Promise(function(k,R){var E=bt(bt({},i.options),{},{uploadUrl:p.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:bt(bt({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:k,onError:R,onProgress:function(b){o=o-h+b,h=b,i._emitProgress(o,r)},onUploadUrlAvailable:function(){i._parallelUploadUrls[u]=w.url,i._parallelUploadUrls.filter(function(b){return!!b}).length===a.length&&i._saveUploadInUrlStorage()}}),w=new s(S,E);w.start(),i._parallelUploads.push(w)})})}),d;Promise.all(l).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var p=co(i.options.metadata);return p!==""&&d.setHeader("Upload-Metadata",p),i._sendRequest(d,null)}).then(function(p){if(!_t(p.getStatus(),200)){i._emitHttpError(d,p,"tus: unexpected response while creating upload");return}var u=p.getHeader("Location");if(u==null){i._emitHttpError(d,p,"tus: invalid or missing Location header");return}i.url=fo(i.options.endpoint,u),"Created upload at ".concat(i.url),i._emitSuccess(p)}).catch(function(p){i._emitError(p)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var r=Rd(this._parallelUploads),o;try{for(r.s();!(o=r.n()).done;){var n=o.value;n.abort(t)}}catch(a){r.e(a)}finally{r.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():s.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,r,o){this._emitError(new Dt(r,o,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var r=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(r&&(this._retryAttempt=0),ho(t,this._retryAttempt,this.options)){var o=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},o);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,r){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,r)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var r=co(this.options.metadata);r!==""&&i.setHeader("Upload-Metadata",r);var o;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,o=this._addChunkToRequest(i)):((this.options.protocol===Ci||this.options.protocol===Bt)&&i.setHeader("Upload-Complete","?0"),o=this._sendRequest(i,null)),o.then(function(n){if(!_t(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=fo(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),r=this._sendRequest(i,null);r.then(function(o){var n=o.getStatus();if(!_t(n,200)){if(n===423){t._emitHttpError(i,o,"tus: upload is currently locked; retry later");return}if(_t(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,o,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(o.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,o,"tus: invalid or missing offset value");return}var l=Number.parseInt(o.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===Si){t._emitHttpError(i,o,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(o);return}t._offset=a,t._performUpload()})}).catch(function(o){t._emitHttpError(i,null,"tus: failed to resume upload",o)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var r=this._addChunkToRequest(i);r.then(function(o){if(!_t(o.getStatus(),200)){t._emitHttpError(i,o,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,o)}).catch(function(o){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),o)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,r=this._offset,o=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(r+n,i._size)}),this.options.protocol===Si?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Bt&&t.setHeader("Content-Type","application/partial-upload"),(o===Number.POSITIVE_INFINITY||o>this._size)&&!this.options.uploadLengthDeferred&&(o=this._size),this._source.slice(r,o).then(function(n){var a=n.value,l=n.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var p=i._offset+d;return!i.options.uploadLengthDeferred&&l&&p!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(p," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===Ci||i.options.protocol===Bt)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var r=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(r)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(r,this._size),this._emitChunkComplete(r-this._offset,r,this._size),this._offset=r,r===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var r=po(t,i,this.options);return this._req=r,r}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(r){t._urlStorageKey=r})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return uo(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=po("DELETE",t,i);return uo(r,null,i).then(function(o){if(o.getStatus()!==204)throw new Dt("tus: unexpected response while terminating upload",null,r,o)}).catch(function(o){if(o instanceof Dt||(o=new Dt("tus: failed to terminate upload",o,r,null)),!ho(o,0,i))throw o;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=bt(bt({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,n)}).then(function(){return s.terminate(t,l)})})}}])})();function co(s){return Object.entries(s).map(function(e){var t=Sn(e,2),i=t[0],r=t[1];return"".concat(i," ").concat(vd.encode(String(r)))}).join(",")}function _t(s,e){return s>=e&&s<e+100}function po(s,e,t){var i=t.httpStack.createRequest(s,e);t.protocol===Ci?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Bt?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var r=t.headers||{},o=0,n=Object.entries(r);o<n.length;o++){var a=Sn(n[o],2),l=a[0],d=a[1];i.setHeader(l,d)}if(t.addRequestId){var p=$d();i.setHeader("X-Request-ID",p)}return i}function uo(s,e,t){return kr.apply(this,arguments)}function kr(){return kr=Sd(wr().mark(function s(e,t,i){var r;return wr().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(r=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,r);case 9:return n.abrupt("return",r);case 10:case"end":return n.stop()}},s)})),kr.apply(this,arguments)}function Ud(){var s=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(s=!1),s}function ho(s,e,t){return t.retryDelays==null||e>=t.retryDelays.length||s.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(s,e,t):Tn(s)}function Tn(s){var e=s.originalResponse?s.originalResponse.getStatus():0;return(!_t(e,400)||e===409||e===423)&&Ud()}function fo(s,e){return new kd(e,s).toString()}function zd(s,e){for(var t=Math.floor(s/e),i=[],r=0;r<e;r++)i.push({start:t*r,end:t*(r+1)});return i[e-1].end=s,i}Ai.defaultOptions=Od;var Rn=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Ld(s){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var r=i.response;e(r)},i.onerror=function(r){t(r)},i.open("GET",s),i.send()})}var Dd=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Md(s){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var r=new Uint8Array(i.result);e({value:r})},i.onerror=function(r){t(r)},i.readAsArrayBuffer(s)})}function Gt(s){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt(s)}function Bd(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function jd(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,qd(i.key),i)}}function Nd(s,e,t){return e&&jd(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function qd(s){var e=Hd(s,"string");return Gt(e)=="symbol"?e:e+""}function Hd(s,e){if(Gt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Gt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var go=(function(){function s(e){Bd(this,s),this._file=e,this.size=e.size}return Nd(s,[{key:"slice",value:function(t,i){if(Dd())return Md(this._file.slice(t,i));var r=this._file.slice(t,i),o=i>=this.size;return Promise.resolve({value:r,done:o})}},{key:"close",value:function(){}}])})();function Wt(s){"@babel/helpers - typeof";return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wt(s)}function Vd(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Kd(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Gd(i.key),i)}}function Yd(s,e,t){return e&&Kd(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Gd(s){var e=Wd(s,"string");return Wt(e)=="symbol"?e:e+""}function Wd(s,e){if(Wt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Wt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}function mo(s){return s===void 0?0:s.size!==void 0?s.size:s.length}function Xd(s,e){if(s.concat)return s.concat(e);if(s instanceof Blob)return new Blob([s,e],{type:s.type});if(s.set){var t=new s.constructor(s.length+e.length);return t.set(s),t.set(e,s.length),t}throw new Error("Unknown data type")}var Jd=(function(){function s(e){Vd(this,s),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Yd(s,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var r=this,o=i<=this._bufferOffset+mo(this._buffer);if(this._done||o){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var d=l.value,p=l.done;return p?r._done=!0:r._buffer===void 0?r._buffer=d:r._buffer=Xd(r._buffer,d),r._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var r=mo(this._buffer)===0;return this._done&&r?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function ft(s){"@babel/helpers - typeof";return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ft(s)}function $r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */$r=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function(_,g,v){_[g]=v.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(_,g,v){return Object.defineProperty(_,g,{value:v,enumerable:!0,configurable:!0,writable:!0}),_[g]}try{d({},"")}catch{d=function(v,I,O){return v[I]=O}}function p(_,g,v,I){var O=g&&g.prototype instanceof E?g:E,A=Object.create(O.prototype),D=new ke(I||[]);return r(A,"_invoke",{value:H(_,v,D)}),A}function u(_,g,v){try{return{type:"normal",arg:_.call(g,v)}}catch(I){return{type:"throw",arg:I}}}e.wrap=p;var h="suspendedStart",y="suspendedYield",S="executing",k="completed",R={};function E(){}function w(){}function $(){}var b={};d(b,n,function(){return this});var x=Object.getPrototypeOf,F=x&&x(x(Le([])));F&&F!==t&&i.call(F,n)&&(b=F);var P=$.prototype=E.prototype=Object.create(b);function U(_){["next","throw","return"].forEach(function(g){d(_,g,function(v){return this._invoke(g,v)})})}function z(_,g){function v(O,A,D,V){var K=u(_[O],_,A);if(K.type!=="throw"){var pe=K.arg,ne=pe.value;return ne&&ft(ne)=="object"&&i.call(ne,"__await")?g.resolve(ne.__await).then(function(ue){v("next",ue,D,V)},function(ue){v("throw",ue,D,V)}):g.resolve(ne).then(function(ue){pe.value=ue,D(pe)},function(ue){return v("throw",ue,D,V)})}V(K.arg)}var I;r(this,"_invoke",{value:function(A,D){function V(){return new g(function(K,pe){v(A,D,K,pe)})}return I=I?I.then(V,V):V()}})}function H(_,g,v){var I=h;return function(O,A){if(I===S)throw Error("Generator is already running");if(I===k){if(O==="throw")throw A;return{value:s,done:!0}}for(v.method=O,v.arg=A;;){var D=v.delegate;if(D){var V=B(D,v);if(V){if(V===R)continue;return V}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(I===h)throw I=k,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);I=S;var K=u(_,g,v);if(K.type==="normal"){if(I=v.done?k:y,K.arg===R)continue;return{value:K.arg,done:v.done}}K.type==="throw"&&(I=k,v.method="throw",v.arg=K.arg)}}}function B(_,g){var v=g.method,I=_.iterator[v];if(I===s)return g.delegate=null,v==="throw"&&_.iterator.return&&(g.method="return",g.arg=s,B(_,g),g.method==="throw")||v!=="return"&&(g.method="throw",g.arg=new TypeError("The iterator does not provide a '"+v+"' method")),R;var O=u(I,_.iterator,g.arg);if(O.type==="throw")return g.method="throw",g.arg=O.arg,g.delegate=null,R;var A=O.arg;return A?A.done?(g[_.resultName]=A.value,g.next=_.nextLoc,g.method!=="return"&&(g.method="next",g.arg=s),g.delegate=null,R):A:(g.method="throw",g.arg=new TypeError("iterator result is not an object"),g.delegate=null,R)}function we(_){var g={tryLoc:_[0]};1 in _&&(g.catchLoc=_[1]),2 in _&&(g.finallyLoc=_[2],g.afterLoc=_[3]),this.tryEntries.push(g)}function L(_){var g=_.completion||{};g.type="normal",delete g.arg,_.completion=g}function ke(_){this.tryEntries=[{tryLoc:"root"}],_.forEach(we,this),this.reset(!0)}function Le(_){if(_||_===""){var g=_[n];if(g)return g.call(_);if(typeof _.next=="function")return _;if(!isNaN(_.length)){var v=-1,I=function O(){for(;++v<_.length;)if(i.call(_,v))return O.value=_[v],O.done=!1,O;return O.value=s,O.done=!0,O};return I.next=I}}throw new TypeError(ft(_)+" is not iterable")}return w.prototype=$,r(P,"constructor",{value:$,configurable:!0}),r($,"constructor",{value:w,configurable:!0}),w.displayName=d($,l,"GeneratorFunction"),e.isGeneratorFunction=function(_){var g=typeof _=="function"&&_.constructor;return!!g&&(g===w||(g.displayName||g.name)==="GeneratorFunction")},e.mark=function(_){return Object.setPrototypeOf?Object.setPrototypeOf(_,$):(_.__proto__=$,d(_,l,"GeneratorFunction")),_.prototype=Object.create(P),_},e.awrap=function(_){return{__await:_}},U(z.prototype),d(z.prototype,a,function(){return this}),e.AsyncIterator=z,e.async=function(_,g,v,I,O){O===void 0&&(O=Promise);var A=new z(p(_,g,v,I),O);return e.isGeneratorFunction(g)?A:A.next().then(function(D){return D.done?D.value:A.next()})},U(P),d(P,l,"Generator"),d(P,n,function(){return this}),d(P,"toString",function(){return"[object Generator]"}),e.keys=function(_){var g=Object(_),v=[];for(var I in g)v.push(I);return v.reverse(),function O(){for(;v.length;){var A=v.pop();if(A in g)return O.value=A,O.done=!1,O}return O.done=!0,O}},e.values=Le,ke.prototype={constructor:ke,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(L),!g)for(var v in this)v.charAt(0)==="t"&&i.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=s)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var v=this;function I(pe,ne){return D.type="throw",D.arg=g,v.next=pe,ne&&(v.method="next",v.arg=s),!!ne}for(var O=this.tryEntries.length-1;O>=0;--O){var A=this.tryEntries[O],D=A.completion;if(A.tryLoc==="root")return I("end");if(A.tryLoc<=this.prev){var V=i.call(A,"catchLoc"),K=i.call(A,"finallyLoc");if(V&&K){if(this.prev<A.catchLoc)return I(A.catchLoc,!0);if(this.prev<A.finallyLoc)return I(A.finallyLoc)}else if(V){if(this.prev<A.catchLoc)return I(A.catchLoc,!0)}else{if(!K)throw Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return I(A.finallyLoc)}}}},abrupt:function(g,v){for(var I=this.tryEntries.length-1;I>=0;--I){var O=this.tryEntries[I];if(O.tryLoc<=this.prev&&i.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var A=O;break}}A&&(g==="break"||g==="continue")&&A.tryLoc<=v&&v<=A.finallyLoc&&(A=null);var D=A?A.completion:{};return D.type=g,D.arg=v,A?(this.method="next",this.next=A.finallyLoc,R):this.complete(D)},complete:function(g,v){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&v&&(this.next=v),R},finish:function(g){for(var v=this.tryEntries.length-1;v>=0;--v){var I=this.tryEntries[v];if(I.finallyLoc===g)return this.complete(I.completion,I.afterLoc),L(I),R}},catch:function(g){for(var v=this.tryEntries.length-1;v>=0;--v){var I=this.tryEntries[v];if(I.tryLoc===g){var O=I.completion;if(O.type==="throw"){var A=O.arg;L(I)}return A}}throw Error("illegal catch attempt")},delegateYield:function(g,v,I){return this.delegate={iterator:Le(g),resultName:v,nextLoc:I},this.method==="next"&&(this.arg=s),R}},e}function vo(s,e,t,i,r,o,n){try{var a=s[o](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,r)}function Zd(s){return function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function n(l){vo(o,i,r,n,a,"next",l)}function a(l){vo(o,i,r,n,a,"throw",l)}n(void 0)})}}function Qd(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function ec(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,ic(i.key),i)}}function tc(s,e,t){return e&&ec(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function ic(s){var e=rc(s,"string");return ft(e)=="symbol"?e:e+""}function rc(s,e){if(ft(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(ft(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var sc=(function(){function s(){Qd(this,s)}return tc(s,[{key:"openFile",value:(function(){var e=Zd($r().mark(function i(r,o){var n;return $r().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(Rn()&&r&&typeof r.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Ld(r.uri);case 4:return n=l.sent,l.abrupt("return",new go(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof r.slice=="function"&&typeof r.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new go(r)));case 13:if(typeof r.read!="function"){l.next=18;break}if(o=Number(o),Number.isFinite(o)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new Jd(r,o)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,r){return e.apply(this,arguments)}return t})()}])})();function oc(s,e){return Rn()?Promise.resolve(nc(s,e)):Promise.resolve(["tus-br",s.name,s.type,s.size,s.lastModified,e.endpoint].join("-"))}function nc(s,e){var t=s.exif?ac(JSON.stringify(s.exif)):"noexif";return["tus-rn",s.name||"noname",s.size||"nosize",t,e.endpoint].join("/")}function ac(s){var e=0;if(s.length===0)return e;for(var t=0;t<s.length;t++){var i=s.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Xt(s){"@babel/helpers - typeof";return Xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xt(s)}function Qr(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function lc(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,dc(i.key),i)}}function es(s,e,t){return e&&lc(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function dc(s){var e=cc(s,"string");return Xt(e)=="symbol"?e:e+""}function cc(s,e){if(Xt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Xt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var pc=(function(){function s(){Qr(this,s)}return es(s,[{key:"createRequest",value:function(t,i){return new uc(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),uc=(function(){function s(e,t){Qr(this,s),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return es(s,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(r,o){t._xhr.onload=function(){r(new hc(t._xhr))},t._xhr.onerror=function(n){o(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),hc=(function(){function s(e){Qr(this,s),this._xhr=e}return es(s,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Jt(s){"@babel/helpers - typeof";return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt(s)}function fc(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function gc(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,vc(i.key),i)}}function mc(s,e,t){return e&&gc(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function vc(s){var e=bc(s,"string");return Jt(e)=="symbol"?e:e+""}function bc(s,e){if(Jt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Jt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var Sr=!1;try{Sr="localStorage"in window;var sr="tusSupport",bo=localStorage.getItem(sr);localStorage.setItem(sr,bo),bo===null&&localStorage.removeItem(sr)}catch(s){if(s.code===s.SECURITY_ERR||s.code===s.QUOTA_EXCEEDED_ERR)Sr=!1;else throw s}var xc=Sr,yc=(function(){function s(){fc(this,s)}return mc(s,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var r=Math.round(Math.random()*1e12),o="tus::".concat(t,"::").concat(r);return localStorage.setItem(o,JSON.stringify(i)),Promise.resolve(o)}},{key:"_findEntries",value:function(t){for(var i=[],r=0;r<localStorage.length;r++){var o=localStorage.key(r);if(o.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(o));n.urlStorageKey=o,i.push(n)}catch{}}return i}}])})();function Et(s){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(s)}function _c(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function wc(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,In(i.key),i)}}function kc(s,e,t){return t&&wc(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function $c(s,e,t){return e=Fi(e),Sc(s,Pn()?Reflect.construct(e,t||[],Fi(s).constructor):e.apply(s,t))}function Sc(s,e){if(e&&(Et(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cc(s)}function Cc(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pn(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Pn=function(){return!!s})()}function Fi(s){return Fi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fi(s)}function Ec(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Cr(s,e)}function Cr(s,e){return Cr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Cr(s,e)}function xo(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function $t(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?xo(Object(t),!0).forEach(function(i){Tc(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):xo(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function Tc(s,e,t){return e=In(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function In(s){var e=Rc(s,"string");return Et(e)=="symbol"?e:e+""}function Rc(s,e){if(Et(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Et(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var yo=$t($t({},Ai.defaultOptions),{},{httpStack:new pc,fileReader:new sc,urlStorage:xc?new yc:new nd,fingerprint:oc}),Pc=(function(s){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return _c(this,e),i=$t($t({},yo),i),$c(this,e,[t,i])}return Ec(e,s),kc(e,null,[{key:"terminate",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return r=$t($t({},yo),r),Ai.terminate(i,r)}}])})(Ai);const Ic=10*1024*1024,Ac=5*1024*1024,Fc="https://eu-on-24001.connector.filerobot.com/files",Oc="https://eu-on-24001.connector.filerobot.com/json";function Uc(s,e){if(!e||!s.file)return!1;const t=e.sizeThreshold??Ic;return s.size>=t}function zc(s,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),r=t.endpoint||Fc,o=t.jsonBase||Oc,n=t.chunkSize??Ac,a=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],p=i.split("/").pop()||"";let u=!1,h=!1,y=!1;const S={name:s.name,type:s.type,"filerobot-folder":e.folder};jr(s.product)&&(S.product=JSON.stringify(Nr(s.product)));const k=async()=>`tus-${s.id}-${r}`,R=new Pc(s.file,{endpoint:r,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:S,fingerprint:k,onBeforeRequest(x){const F=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[P,U]of Object.entries(F))x.setHeader(P,U);x.setHeader("X-Filerobot-Token",p)},onUploadUrlAvailable(){R.url&&e.onUploadUrlAvailable&&!y&&(y=!0,e.onUploadUrlAvailable(R.url))},onProgress(x,F){!h&&!u&&e.onProgress(x,F)},onSuccess(){var P;if(h)return;$();const x=R.url||"",F=(P=x.match(/files\/([^/?]+)/))==null?void 0:P[1];F?Dc(o,F,s.size).then(U=>{h||e.onComplete(ti(U)?Dr(U,s):U)}).catch(U=>{h||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:s.name,extension:s.name.split(".").pop()||"",type:s.type,size:s.size,url:{public:x,cdn:x},meta:s.meta,tags:s.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(x){h||($(),Lc(x)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(x instanceof Error?x:new Error(String(x))))},onShouldRetry(x,F,P){var z;const U=(z=x.originalResponse)==null?void 0:z.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let E=null,w=null;typeof window<"u"&&(E=()=>{var x;!u&&!h&&(u=!0,R.abort(!1),(x=e.onPause)==null||x.call(e))},w=()=>{var x;u&&!h&&(u=!1,R.start(),(x=e.onResume)==null||x.call(e))},window.addEventListener("offline",E),window.addEventListener("online",w));const $=()=>{E&&window.removeEventListener("offline",E),w&&window.removeEventListener("online",w)},b=()=>{try{R.start()}catch(x){$(),e.onError(x instanceof Error?x:new Error(String(x)))}};return a?R.findPreviousUploads().then(x=>{x.length>0&&!h&&R.resumeFromPreviousUpload(x[0]),h||b()}):b(),{abort(){h=!0,u=!1,$(),R.abort(!0)},pause(){!u&&!h&&(u=!0,R.abort(!1))},resume(){u&&!h&&(u=!1,R.start())},isPaused(){return u}}}function Lc(s){var e;if(s instanceof Dt){const t=(e=s.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:s.originalResponse==null&&s.causingError!=null}return!1}async function Dc(s,e,t){const i=`${s.replace(/\/+$/,"")}/${e}`,r=t>1e8?13e3:6e3,o=3;for(let n=0;n<=o;n++){n>0&&await new Promise(d=>setTimeout(d,r));const a=await fetch(i);if(a.status===404&&n<o)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(ti(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<o))throw new Error(Ti(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const Ei="_sfxRelativePath",_o=8,Mc=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function Bc(s){return s?s.startsWith(".")?!0:Mc.has(s):!1}function ts(s,e){if(e){try{Object.defineProperty(s,Ei,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(s,Ei,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{s[Ei]=e}}}function jc(s){const e=s[Ei];if(typeof e=="string"&&e)return e;const t=s.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=s.relativePath;return typeof i=="string"?i:""}function Nc(s){if(!s)return"";const e=s.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qc(s,e){const t=(s??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:s??""}async function An(s){var n;const e=s.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(s.files??[]),hadDirectories:!1};const i=[];let r=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(r=!0),i.push(l))}if(i.length===0)return{files:Array.from(s.files??[]),hadDirectories:!1};const o=[];return await Fn(i,"",o),{files:o,hadDirectories:r}}async function Fn(s,e,t){for(let i=0;i<s.length;i+=_o){const r=s.slice(i,i+_o);await Promise.all(r.map(o=>Hc(o,e,t)))}}async function Hc(s,e,t){try{if(s.isFile){const i=await Vc(s);if(!i)return;const r=e?`${e}/${i.name}`:i.name;ts(i,r),t.push(i);return}if(s.isDirectory){if(Bc(s.name))return;const i=e?`${e}/${s.name}`:s.name,r=await Kc(s);await Fn(r,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(s==null?void 0:s.name)??s,i)}}function Vc(s){return new Promise(e=>{s.file(t=>e(t),()=>e(null))})}function Kc(s){return new Promise(e=>{const t=s.createReader(),i=[],r=()=>{t.readEntries(o=>{if(o.length===0){e(i);return}i.push(...o),r()},o=>{console.warn("[sfx-uploader] directory read failed for",s==null?void 0:s.name,o),e(i)})};r()})}class Yc{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let r=!1;for(const[o,n]of this.pendingProgress){const a=i.get(o);a&&a.status==="uploading"&&(i.set(o,{...a,...n}),r=!0)}this.pendingProgress.clear(),r&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(re(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(re(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&re(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),re(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),re(this.store,e,{status:"uploading"})):re(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!wo(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),re(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())wo(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),re(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,r=t-i;if(r<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,r);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),re(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var h,y;this.pendingProgress.delete(e.id);const t=(y=(h=this.config).resolveUploadParams)==null?void 0:y.call(h,e),i=!!t&&Object.keys(t).length>0,r=!i&&!e.remoteInfo&&!e.remoteUrl&&Uc(e,this.config.tusConfig);re(this.store,e.id,{status:"uploading",error:null,isTus:r});let o=0,n=Date.now(),a=0;const l=qc(this.store.getState().targetFolder,e.relativeFolder),d={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:S=>this.handleComplete(e.id,S),onError:S=>this.handleError(e.id,S)},p=(S,k)=>{const R=Date.now(),E=(R-n)/1e3;if(E>0){const $=(S-o)/E;a=a===0?$:.3*$+.7*a}o=S,n=R;const w=k>0?Math.min(S/k*100,100):0;this.pendingProgress.set(e.id,{progress:w,bytesUploaded:S,speed:a}),this.scheduleProgressFlush()};let u;if(e.remoteInfo)u=Vl(e,{...d,onProgress:p});else if(e.remoteUrl){if(!this.config.companionUrl){re(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}u=Kl(e,{...d,onProgress:p,companionUrl:this.config.companionUrl,onMeta:S=>{re(this.store,e.id,{size:S.size,type:S.type||e.type})}})}else if(r){const S=zc(e,{...d,onProgress:p,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:k=>{re(this.store,e.id,{tusUploadUrl:k})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,S),this.pendingProgress.delete(e.id),re(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,S),re(this.store,e.id,{status:"uploading"})}});u=S}else u=zl(e,{...d,onProgress:p});this.activeUploads.set(e.id,u)}handleComplete(e,t){var u,h,y,S,k,R,E,w,$,b,x;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),r=((u=i==null?void 0:i.previewUrl)==null?void 0:u.startsWith("blob:"))??!1,o=((y=(h=t.file)==null?void 0:h.url)==null?void 0:y.cdn)??((k=(S=t.file)==null?void 0:S.url)==null?void 0:k.cdn_permalink)??((E=(R=t.file)==null?void 0:R.url)==null?void 0:E.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:ti(t)};if(i&&o&&i.type.startsWith("image/")&&!r){const F=((b=($=this.config).transformPreviewUrl)==null?void 0:b.call($,o,(w=t.file)==null?void 0:w.url))??o;F&&(n.previewUrl=F)}const a=(x=t.file)==null?void 0:x.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l);const d=this.store.getState().files,p=d.get(e);if(p){const F=new Map(d);F.set(e,{...p,...n}),this.store.setState({files:F,...this.computeTotals(F)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:r}=this.store.getState().queueConfig,o=i.retryCount+1;if(o<=r.maxRetries){const n=Math.min(r.baseDelay*Math.pow(r.backoffFactor,i.retryCount),r.maxDelay);re(this.store,e,{status:"retrying",error:t.message,retryCount:o});const a=setTimeout(()=>{this.retryTimers.delete(e),re(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else re(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,r=0,o=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),o+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(r+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:r,totalProgress:n>0?Math.min(o/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function wo(s){return s==="queued"||s==="uploading"||s==="retrying"||s==="paused"}const Gc=3e4,Wc=2,Xc=400;function Jc(s){return s===404||s===408||s===429||s>=500}const Zc=s=>new Promise(e=>setTimeout(e,s));function is(s,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${s}`}async function Qc(s,e,t,i={}){const r=`${is(s,t)}/key/${encodeURIComponent(e)}`,o=i.retries??Wc,n=i.retryDelayMs??Xc;let a=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await Zc(n*l);const d=new AbortController,p=setTimeout(()=>d.abort(),Gc);try{const u=await fetch(r,{signal:d.signal,cache:"no-store"});if(clearTimeout(p),!u.ok){if(a=new Error(`SASS key exchange failed (HTTP ${u.status})`),Jc(u.status)&&l<o)continue;throw a}const h=await u.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(u){if(clearTimeout(p),u instanceof DOMException&&u.name==="AbortError")throw new Error("SASS key exchange timed out");if(u instanceof TypeError&&l<o){a=u;continue}throw u}}throw a}function Er(s,e){const t={};switch(s.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=s.sassKey;break}return s.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=s.airboxPuid),t}async function ep(s,e){const t=is(s.container,e);if(s.mode==="security-template"){const i=await Qc(s.container,s.securityTemplateId,e);return{apiBase:t,headers:Er(s,i),sassKey:i}}return{apiBase:t,headers:Er(s)}}const tp="https://ai.scaleflex.com",ko=300,ip=.85,rp=3e4;function $o(s){return s==="low"?.6:s==="high"?.85:.75}async function sp(s,e){var r,o,n;if(s.file)return s.file;const t=s.previewUrl||((n=(o=(r=s.response)==null?void 0:r.file)==null?void 0:o.url)==null?void 0:n.cdn)||s.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function op(s){return`${(s||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function np(s){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(s);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,r=URL.createObjectURL(s);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(r)})},i.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Image decode failed"))},i.src=r})}async function ap(s){const e=await np(s);try{const t=e.width>ko?ko/e.width:1,i=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),o=document.createElement("canvas");o.width=i,o.height=r;const n=o.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,r),await new Promise((a,l)=>{o.toBlob(d=>d?a(d):l(new Error("Canvas toBlob failed")),"image/jpeg",ip)})}finally{e.close()}}async function So(s,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),rp),r=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",r);const o=t.signal,n=()=>{if(o.aborted)throw new DOMException("Aborted","AbortError")};try{n();const d=await sp(s,o);n();const p=await ap(d);n();const h=`${(e.endpoint||tp).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,y=new FormData;y.append("file",p,op(s.name));const S=await fetch(h,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:y,signal:o});if(!S.ok)throw new Error(`Similarity check failed (HTTP ${S.status})`);const k=await S.json();if(k.status==="error")throw new Error(`Similarity check failed: ${k.msg||"Unknown error"}`);return(k.similar_assets??[]).map(([R,E,w])=>({uuid:R,score:E,url:w}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",r)}}const Oi="sfx-uploader:last-upload:",On=1;function lp(s){var o,n,a,l,d,p,u,h,y;const{file:e,previewUrl:t,...i}=s;let r=null;return s.status==="complete"&&(s.previewUrl&&!s.previewUrl.startsWith("blob:")?r=s.previewUrl:r=((a=(n=(o=s.response)==null?void 0:o.file)==null?void 0:n.url)==null?void 0:a.permalink)??((p=(d=(l=s.response)==null?void 0:l.file)==null?void 0:d.url)==null?void 0:p.cdn_permalink)??((y=(h=(u=s.response)==null?void 0:u.file)==null?void 0:h.url)==null?void 0:y.cdn)??null),{...i,previewUrl:r}}function dp(s){try{const e=sessionStorage.getItem(Oi+s);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==On?null:t}catch{return null}}function cp(s,e){try{sessionStorage.setItem(Oi+s,JSON.stringify(e))}catch{}}const zt={save(s,e){if(e.length===0){this.clear(s);return}const t={__schemaVersion:On,savedAt:Date.now(),files:e.map(lp)};cp(s,t)},load(s){const e=dp(s);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(s){try{return sessionStorage.getItem(Oi+s)!=null}catch{return!1}},clear(s){try{sessionStorage.removeItem(Oi+s)}catch{}}},q={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let pp=0;function xt(){return`file-${Date.now()}-${++pp}`}function wt(s){if(!Number.isFinite(s)||s<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(s)/Math.log(1024)),e.length-1),i=s/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function Co(s){if(!isFinite(s)||s<=0)return"0s";const e=Math.round(s);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const r=Math.floor(t/60),o=t%60;return o>0?`${r}h ${o}m`:`${r}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function Ce(s){var t;const e=((t=s.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return s.type.startsWith("image/")?"image":s.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":s.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":s.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function up(s){const e=s.lastIndexOf(".");return e>=0?s.slice(e+1).toUpperCase():""}const hp=new Set([".ds_store","thumbs.db","desktop.ini"]);function or(s){const e=(s.split(/[\\/]/).pop()??s).toLowerCase();return e.startsWith(".ds_store")?!0:hp.has(e)}const fp={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Eo(s){var t;const e=((t=s.split(".").pop())==null?void 0:t.toLowerCase())??"";return fp[e]||""}function Ye(s){return s==="image/heic"||s==="image/heif"}function gp(s){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(s);let r=!1;const o=()=>{r||(r=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{r||(r=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}o()},{once:!0}),t.addEventListener("error",()=>o(),{once:!0}),setTimeout(()=>o(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function mp(s){return(s==null?void 0:s.code)==="max-files"}function nr(s,e,t){var i,r;if(e.maxFileSize!=null&&s.size>0&&s.size>e.maxFileSize){const o=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:nt("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:o})}}if(e.maxTotalFilesSize!=null&&s.size>0){let o=s.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(o+=n.size);if(o>e.maxTotalFilesSize)return{code:"max-total-size",message:nt("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let o=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&o++;if(o>=e.maxNumberOfFiles)return{code:"max-files",message:nt("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const o=e.allowedFileTypes,n="."+(((i=s.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-not-allowed",message:nt("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const o=e.blockedFileTypes,n="."+(((r=s.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-blocked",message:nt("fileTypeBlocked","File type is blocked")}}return null}function To(s){return s.allowedFileTypes?s.allowedFileTypes.join(","):""}const Ro={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function vp(s){return s.filter(e=>e in Ro).map(e=>Ro[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ui=class extends zi{constructor(e){if(super(e),this.it=m,e.type!==ei.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===Li)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ui.directiveName="unsafeHTML",Ui.resultType=1;const Po=Qt(Ui);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tr extends Ui{}Tr.directiveName="unsafeSVG",Tr.resultType=2;const Ge=Qt(Tr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=Qt(class extends zi{constructor(s){var e;if(super(s),s.type!==ei.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var i,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const t=s.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(n?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return Li}});function at(s){return s.brandStyle?c`<span
    class=${rs({"brand-ico":!0,"brand-ico--transparent":s.brandStyle.background==="transparent"})}
    ${Q(s.brandStyle)}
    >${Po(s.brandHtml)}</span
  >`:Po(s.brandHtml)}var bp=Object.defineProperty,Un=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&bp(e,t,r),r};const xp='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',yp='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',_p='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',wp='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',jt=[{id:"device",labelKey:"myDevice",label:"My Device",icon:xp,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:yp,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:_p,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:wp,iconColor:"#ea580c"}],ws=class ws extends G{constructor(){super(...arguments),this.t=Pe,this.sources=jt}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return c`
      ${this.sources.map(e=>c`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?at(e):J`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${Ge(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};ws.styles=j`
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
  `;let Zt=ws;Un([f({attribute:!1})],Zt.prototype,"t");Un([f({type:Array})],Zt.prototype,"sources");const Gi=new Set(["multi-select","tags","ultratags"]),Wi=new Set(["text","textarea","attachment-uri"]);function kp(s){return Ma(s)?[]:Gi.has(s)?[{key:"SET",label:T("bulkOpSet","Set")},{key:"ADD",label:T("bulkOpAddTo","Add to")},{key:"DELETE",label:T("bulkOpRemoveFrom","Remove from")}]:Wi.has(s)?[{key:"SET",label:T("bulkOpSet","Set")},{key:"ADD",label:T("bulkOpAppend","Append")},{key:"DELETE",label:T("bulkOpRemove","Remove")}]:[{key:"SET",label:T("bulkOpSet","Set")},{key:"DELETE",label:T("bulkOpClear","Clear")}]}function Rr(s,e){return s==="DELETE"?Gi.has(e)||Wi.has(e):!0}function _i(s){if(typeof s=="string")return s;if(s&&typeof s=="object"){const e=s;return e.sid||e.label||String(s)}return String(s)}function $p(s,e,t,i){const r=Gi.has(i),o=Wi.has(i);switch(s){case"SET":return t;case"ADD":{if(r){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return ar(n,a,!1);if(i==="tags"){const p=new Set(n.map(h=>_i(h))),u=[...n];for(const h of a){const y=_i(h);p.has(y)||(p.add(y),u.push(h))}return u}const l=new Set(n.map(p=>JSON.stringify(p))),d=[...n];for(const p of a){const u=JSON.stringify(p);l.has(u)||(l.add(u),d.push(p))}return d}if(o){const n=typeof t=="string"?t:"";if(!n)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${n}`:n}return t}case"DELETE":{if(r){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return ar(n,a,!0);if(i==="tags"){const d=new Set(a.map(p=>_i(p)));return n.filter(p=>!d.has(_i(p)))}const l=new Set(a.map(d=>JSON.stringify(d)));return n.filter(d=>!l.has(JSON.stringify(d)))}if(o){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function zn(s,e,t,i,r){const o=r??"en",n=!!s.regional_variants_group_uuid,a={meta:{[s.key]:e}},l=Br(s,t,a,r),d=y=>n&&y!==null&&typeof y=="object"&&!Array.isArray(y),p=d(e)?e[o]:e,u=d(l)?l[o]:l,h=$p(i,p,u,s.type);return n?{...d(e)?e:{},[o]:h}:h}const Ln=Symbol("clamp-drop");function Sp(s,e,t,i,r){if(s.type!=="select-one"&&s.type!=="multi-select")return e;const o=new Set(t),n=!!s.regional_variants_group_uuid,a=i??"en",l=u=>n&&u!==null&&typeof u=="object"&&!Array.isArray(u),d=l(e)?e[a]:e;let p;if(s.type==="multi-select"){const u=Array.isArray(d)?d:[],h=l(r)?r[a]:r,y=new Set((Array.isArray(h)?h:[]).map(S=>S));p=u.filter(S=>o.has(S)||y.has(S))}else if(d==null||d==="")p=d;else if(o.has(d))p=d;else return Ln;return n?{...l(e)?e:{},[a]:p}:p}const Dn=j`
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
`,Cp=j`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
  }

  .fm-overlay {
    position: fixed;
    inset: 0;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 24, 39, 0.5);
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
    max-width: 340px;
    width: 100%;
  }
  .fm-confirm-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
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
    max-width: calc(100vw - 40px);
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
    .fm-overlay {
      padding: 0;
    }
    .fm-modal {
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
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

  ${Dn}
`,Ep=j`
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
`,Tp=j`
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
`,Rp=j`
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

  ${Dn}
`,Pp=j`
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
`,Ip=j`
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
`;var Ap=Object.defineProperty,oe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Ap(e,t,r),r},We;const ie=(We=class extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(r=>r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,l;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const r=i[0],o=i[i.length-1],n=(l=this.shadowRoot)==null?void 0:l.activeElement;e.shiftKey&&n===r?(e.preventDefault(),o.focus()):!e.shiftKey&&n===o&&(e.preventDefault(),r.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,r=this._activeField;Oe(i)&&(!r||Rr(t,r.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:i})},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e)},this._onBulkApply=e=>{var d;const t=this._activeField;if(!t)return;const{operation:i,value:r,taxonomyEntry:o}=e.detail,n=dt(t,this.config),a=[],l=new Set;for(const p of this._selected){const u=(d=this._cachedPerFileResolved.get(p))==null?void 0:d.get(t.ckey);if(u!=null&&u.hidden)continue;const h=this._staged.get(p),y=h!=null&&h.has(t.key)?h.get(t.key):this._originalValue(p,t.key)??null;let S=zn(t,y,r,i,n);if(u!=null&&u.allowedValues){const k=Sp(t,S,u.allowedValues,n,y);if(k===Ln)continue;S=k}a.push([p,t.key,S]),l.add(p)}this._setStagedBulk(a),t.type==="taxonomy-node"&&o!==void 0&&this._setStagedTaxonodeBulk(l,t.key,o)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:r}=e.detail;this._setStagedTaxonodeSingle(t,i,r)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||!await this._confirmDiscardPending())return;const e=[],t=[],i=[];for(const[o,n]of this._staged){if(!this._originalFiles.get(o))continue;const l={},d={};for(const[p,u]of n){const h=this._originalValue(o,p);if(JSON.stringify(u)!==JSON.stringify(h))if(lr(p)){const y=dr(p);if(!y)continue;const S=u===""||u==null;y==="position"?d.position=S?void 0:Number(u):d.ref=S?void 0:String(u)}else if(vr(p)){const y=Array.isArray(u)?u:[];i.push({fileId:o,tags:y})}else l[p]=u}Object.keys(l).length>0&&e.push({fileId:o,meta:l}),Object.keys(d).length>0&&t.push({fileId:o,product:d})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),i.length>0&&this.dispatchEvent(new CustomEvent("tags-save-batch",{detail:{changes:i},bubbles:!0,composed:!0}));const r=[];for(const[o,n]of this._stagedTaxonodes){const a=this._originalFiles.get(o);if(!a)continue;const l=a.taxonodes??{},d={};for(const[p,u]of n){const h=l[p]??null;JSON.stringify(u??null)!==JSON.stringify(h??null)&&(d[p]=u??null)}Object.keys(d).length>0&&r.push({fileId:o,taxonodes:d})}r.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:r},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},We._PREVIEW_DEBOUNCE_MS)}_initStaged(){var a,l;const e=new Map,t=new Map,i=new Set,r=new Map,o=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const d of this.files){const p=new Map;if(d.meta)for(const[u,h]of Object.entries(d.meta))p.set(u,h);if(o){const u=d.product;(u==null?void 0:u.ref)!==void 0&&p.set(ct,u.ref),(u==null?void 0:u.position)!==void 0&&p.set(pt,u.position)}Array.isArray(d.tags)&&d.tags.length>0&&p.set(Gr,[...d.tags]),e.set(d.id,p),d.taxonodes&&t.set(d.id,new Map(Object.entries(d.taxonodes))),i.add(d.id),r.set(d.id,d.status?d:{...d,status:"idle"})}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=r,this._recomputeResolvedSchemas();const n=this.initialFieldKey;if(n&&((l=this.schema)!=null&&l.fieldsByKey.has(n)))this._activeFieldKey=n;else if(this.schema&&this.schema.fields.length>0){const d=this._groupOfFieldMap(),p=this.schema.fields.find(u=>this._isFieldNavigable(u,d));this._activeFieldKey=(p==null?void 0:p.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(e,t,i){const r=new Map(this._staged),o=new Map(r.get(e)??new Map);o.set(t,i),r.set(e,o),this._staged=r}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,r,o]of e){const n=new Map(t.get(i)??new Map);n.set(r,o),t.set(i,n)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const r=new Map(this._stagedTaxonodes);for(const o of e){const n=new Map(r.get(o)??new Map);n.set(t,i),r.set(o,n)}this._stagedTaxonodes=r}_setStagedTaxonodeSingle(e,t,i){const r=new Map(this._stagedTaxonodes),o=new Map(r.get(e)??new Map);o.set(t,i),r.set(e,o),this._stagedTaxonodes=r}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,r;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const o of this._selected){const n=this._originalFiles.get(o),a=(i=this._staged.get(o))==null?void 0:i.get(e.key),l=a!==void 0?a:(r=n==null?void 0:n.meta)==null?void 0:r[e.key],d=Pi(l);d.length&&(t=ar(t,d,!1))}return t.filter(o=>typeof o!="string")}_originalValue(e,t){var r,o;const i=this._originalFiles.get(e);if(i){if(lr(t)){const n=dr(t);return n?(r=i.product)==null?void 0:r[n]:void 0}return vr(t)?Array.isArray(i.tags)?[...i.tags]:[]:(o=i.meta)==null?void 0:o[t]}}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&Go(this.schema,this.config)?Na(this._staged,this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const n of this.schema.fields)if(t.has(n.key)){i=n.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const r=this._missingRequiredKeys;let o=r.size!==t.size;if(!o){for(const n of t)if(!r.has(n)){o=!0;break}}o&&(this._missingRequiredKeys=t)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),r={...t.meta};if(i)for(const[o,n]of i)r[o]=n;e.push({id:t.id,mime:t.type??"",meta:r})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=ya(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),r={...t.meta};if(i)for(const[o,n]of i)r[o]=n;e.set(t.id,St({mime:t.type??"",meta:r},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var r;if(!this.schema||this._cachedBulkResolved.size===0)return;const e=(r=this.schema.fieldsByKey)==null?void 0:r.get(this._activeFieldKey);if(!e)return;const t=this._groupOfFieldMap();if(this._isFieldNavigable(e,t))return;const i=this.schema.fields.find(o=>this._isFieldNavigable(o,t));this._activeFieldKey=(i==null?void 0:i.key)??""}_groupOfFieldMap(){var t,i;if(this.schema&&((t=this._groupOfFieldCache)==null?void 0:t.schema)===this.schema)return this._groupOfFieldCache.map;const e=new Map;for(const r of((i=this.schema)==null?void 0:i.groups)??[])for(const o of r.fields)e.set(o,r);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return qr(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){const i=t.get(e);return!(Di(e,i,this._cachedBulkResolved)||i&&Hr(i)&&!this._isFieldRequiredBulk(e)&&!Mr(e,i,this._cachedBulkResolved))}_recomputeFilledFields(){var r;const e=new Set;for(const o of((r=this.schema)==null?void 0:r.fields)??[])for(const[n,a]of this._staged){const l=a.get(o.key),d=this._originalValue(n,o.key);if(l!==void 0&&!Oe(l)&&JSON.stringify(l)!==JSON.stringify(d)){e.add(o.key);break}}const t=this._filledFieldsCache;let i=t.size!==e.size;if(!i){for(const o of e)if(!t.has(o)){i=!0;break}}i&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const e=[...this.files];e.sort((t,i)=>{const r=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?r:-r}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!Oe(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0}):Promise.resolve(!0)}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies"))&&this._refreshMissingRequired(),(e.has("_staged")||e.has("schema"))&&this._recomputeFilledFields(),(e.has("files")||e.has("_sortAsc"))&&this._recomputeSortedFiles(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden())}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector(".fm-confirm .btn-ghost");i==null||i.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}render(){var y,S,k,R,E;if(!((S=(y=this.schema)==null?void 0:y.fields)!=null&&S.length))return c`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${w=>w.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title"
                >${T("fillMultipleAssets","Fill multiple assets")}</span
              >
              <button class="fm-topbar-close" @click=${this._onClose} title=${T("close","Close")}>
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
              ${T("noMetadataFieldsConfigured","No metadata fields configured")}
            </div>
          </div>
        </div>
      `;const e=this._activeField,t=this._sortedFilesCache,i=this._selected.size===this.files.length&&this.files.length>0,r=this._selected.size>0&&!i,o=this._missingRequiredFieldKey,n=this._cachedBulkResolved,a=this._cachedPerFileResolved,l=e==null?void 0:e.ckey,d=l?n.get(l):void 0,p=o?((k=this.schema.fieldsByKey.get(o))==null?void 0:k.title)||o:"",u=o!=null&&this._activeFieldKey===o,h=o!=null&&!u;return c`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${w=>w.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${T("fillMultipleAssets","Fill multiple assets")}</span>
            ${(R=this.schema.regionalVariantsGroups)!=null&&R.length?c`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((E=this.config)==null?void 0:E.regionalFilters)??{}}
                ></sfx-regional-settings>`:m}
            <button class="fm-topbar-close" @click=${this._onClose} title=${T("close","Close")}>
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
                          .indeterminate=${r}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${T("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${T("size","Size")}</div>
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
                      ${T("allMetadataFieldsHidden","All metadata fields are currently hidden")}
                    </div>
                  `}
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>← ${T("back","Back")}</button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>${T("cancel","Cancel")}</button>
            <!-- Single primary button so transitions between Save and "Next
                 required" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Three states:
                   1. No required field missing      → "Save" (enabled)
                   2. Missing field is NOT active    → "Next required: X →"
                   3. Missing field IS active        → "Save" (disabled) -->
            <button
              class=${rs({"btn-primary":!0,"btn-primary--next":h})}
              @click=${h?this._onJumpToNextRequired:this._onSave}
              ?disabled=${u}
              title=${h?T("jumpToField","Jump to {{field}}",{field:p}):""}
            >
              ${h?c`<span class="btn-primary-label"
                      >${T("nextRequired","Next required: {{field}}",{field:p})}</span
                    ><span class="btn-primary-arrow" aria-hidden="true">→</span>`:T("save","Save")}
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
                    aria-labelledby="fm-confirm-msg"
                    @click=${w=>w.stopPropagation()}
                  >
                    <p class="fm-confirm-text" id="fm-confirm-msg">
                      ${T("discardBulkChanges","You have unapplied bulk changes. Discard them?")}
                    </p>
                    <div class="fm-confirm-actions">
                      <button class="btn-ghost" @click=${this._onConfirmCancel}>
                        ${T("cancel","Cancel")}
                      </button>
                      <button class="btn-primary" @click=${this._onConfirmOk}>
                        ${T("discard","Discard")}
                      </button>
                    </div>
                  </div>
                </div>
              `:m}
        </div>
      </div>
    `}},We.styles=[Cp],We._PREVIEW_DEBOUNCE_MS=150,We);oe([f({attribute:!1})],ie.prototype,"schema");oe([f({attribute:!1})],ie.prototype,"files");oe([f({attribute:!1})],ie.prototype,"config");oe([f({attribute:!1})],ie.prototype,"autocomplete");oe([f({attribute:!1})],ie.prototype,"taxonomyService");oe([f({attribute:!1})],ie.prototype,"ultratags");oe([f({attribute:!1})],ie.prototype,"defaultLanguage");oe([f({attribute:!1})],ie.prototype,"initialFieldKey");oe([f({attribute:!1})],ie.prototype,"dependencies");oe([C()],ie.prototype,"_activeFieldKey");oe([C()],ie.prototype,"_staged");oe([C()],ie.prototype,"_stagedTaxonodes");oe([C()],ie.prototype,"_selected");oe([C()],ie.prototype,"_sortAsc");oe([C()],ie.prototype,"_previewOp");oe([C()],ie.prototype,"_confirmVisible");oe([C()],ie.prototype,"_missingRequiredFieldKey");oe([C()],ie.prototype,"_missingRequiredKeys");let Fp=ie;X("sfx-bulk-metadata-modal",Fp);var Op=Object.defineProperty,Ve=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Op(e,t,r),r};const ks=class ks extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return qr(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var t;const e=((t=this.schema)==null?void 0:t.groups)??[];return e.length>0&&e.every(i=>this._collapsed.has(i.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var t;this._query="";const e=(t=this.renderRoot)==null?void 0:t.querySelector(".sb-search-input");e==null||e.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,r;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(r=this.renderRoot)==null?void 0:r.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return m;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),i=t.length>0;let r=0;const o=this.schema.groups.map(n=>{var d,p;const a=this._isNarrow||i||!this._collapsed.has(n.uuid);if(e&&n.ckey&&((d=e.get(n.ckey))!=null&&d.hidden))return m;let l=e?n.fields.filter(u=>!Di(u,n,e)):n.fields;return Hr(n)&&(l=l.filter(u=>this._isRequired(u)||Mr(u,n,e))),i&&!((p=n.name)!=null&&p.toLowerCase().includes(t))&&(l=l.filter(u=>{var h;return(h=u.title)==null?void 0:h.toLowerCase().includes(t)})),l.length===0?m:(r+=l.length,c`
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
                  <span class="field-icon" aria-hidden="true">${Ol(u.type)}</span>
                  <span class="field-name">${u.title}</span>
                  ${this.filledFields.has(u.key)?c`<span class="field-dot"></span>`:m}
                  ${this._isRequired(u)?c`<span
                        class=${rs({"field-required":!0,unmet:this.missingRequiredKeys.has(u.key)})}
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
            placeholder=${T("searchFields","Search fields...")}
            aria-label=${T("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?c`<button
                class="sb-search-clear"
                type="button"
                aria-label=${T("clear","Clear")}
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
          aria-label=${this._allCollapsed?T("expandAll","Expand all"):T("collapseAll","Collapse all")}
          title=${this._allCollapsed?T("expandAll","Expand all"):T("collapseAll","Collapse all")}
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
      ${i&&r===0?c`<div class="sb-empty">${T("noFieldsMatch","No fields match")}</div>`:o}
    `}};ks.styles=[Ep];let Te=ks;Ve([f({attribute:!1})],Te.prototype,"schema");Ve([f({attribute:!1})],Te.prototype,"activeFieldKey");Ve([f({attribute:!1})],Te.prototype,"filledFields");Ve([f({attribute:!1})],Te.prototype,"missingRequiredKeys");Ve([f({attribute:!1})],Te.prototype,"config");Ve([f({attribute:!1})],Te.prototype,"bulkResolvedSchema");Ve([C()],Te.prototype,"_collapsed");Ve([C()],Te.prototype,"_isNarrow");Ve([C()],Te.prototype,"_query");X("sfx-bulk-meta-sidebar",Te);var Up=Object.defineProperty,$e=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Up(e,t,r),r},Be;const ye=(Be=class extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var o;if(e.key!=="Enter")return;const t=(o=this.field)==null?void 0:o.type;if(!t||!Be._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(n=>n instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const r=e.composedPath().find(n=>n instanceof HTMLInputElement);r&&r.value!==void 0&&(this._value=r.value),this._onApply()}}get _availableOps(){return this.field?kp(this.field.type):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??Be._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((e=this.field)==null?void 0:e.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!Rr(this._operation,(t=this.field)==null?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?Gi.has((e=this.field)==null?void 0:e.type)?Oe(this._value):Wi.has((t=this.field)==null?void 0:t.type)?Oe(this._value):!1:Oe(this._value)}render(){var r;if(!this.field)return m;if(ii(this.field)){const o=Yr();return c`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${o}">
            ${an}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${o}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,i=e.find(o=>o.key===this._operation);return c`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">${T("operation","Operation")}</span>
          ${t?c`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label"
                      >${(i==null?void 0:i.label)??T("bulkOpSet","Set")}</span
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
                          ${e.map(o=>c`
                              <button
                                class="op-option ${o.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(o.key)}
                              >
                                ${o.label}
                              </button>
                            `)}
                        </div>
                      `:m}
                </div>
              `:c`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label"
                    >${(i==null?void 0:i.label)??T("bulkOpOverwrite","Overwrite")}</span
                  >
                </div>
              `}
        </div>

        ${Rr(this._operation,this.field.type)?c`
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
          Apply
        </button>
      </div>
    `}},Be.styles=[Tp],Be._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),Be);$e([f({attribute:!1})],ye.prototype,"field");$e([f({attribute:!1})],ye.prototype,"autocomplete");$e([f({attribute:!1})],ye.prototype,"taxonomyService");$e([f({attribute:!1})],ye.prototype,"ultratags");$e([f({attribute:!1})],ye.prototype,"defaultLanguage");$e([f({attribute:!1})],ye.prototype,"ultratagsPresentOnSelection");$e([f({attribute:!1})],ye.prototype,"config");$e([f({type:Number})],ye.prototype,"selectedCount");$e([f({attribute:!1})],ye.prototype,"allowedValues");$e([C()],ye.prototype,"_operation");$e([C()],ye.prototype,"_value");$e([C()],ye.prototype,"_pendingTaxonode");$e([C()],ye.prototype,"_opDropdownOpen");let zp=ye;X("sfx-bulk-meta-op-bar",zp);var Lp=Object.defineProperty,Re=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Lp(e,t,r),r},Xe;const Se=(Xe=class extends G{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._keyForFile=e=>e.id,this._renderRow=e=>{const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),r=(i==null?void 0:i.allowedValues)??null,o=(i==null?void 0:i.hidden)??!1;return c`
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
        .allowedValues=${r}
        .notApplicable=${o}
      ></sfx-bulk-meta-row>
    `}}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):vr(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return this.files.length<=Xe.VIRTUALIZE_THRESHOLD?c`${this.files.map(this._renderRow)}`:c`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}},Xe.styles=[Ip],Xe.VIRTUALIZE_THRESHOLD=60,Xe);Re([f({attribute:!1})],Se.prototype,"files");Re([f({attribute:!1})],Se.prototype,"field");Re([f({attribute:!1})],Se.prototype,"staged");Re([f({attribute:!1})],Se.prototype,"stagedTaxonodes");Re([f({attribute:!1})],Se.prototype,"selected");Re([f({attribute:!1})],Se.prototype,"pendingOp");Re([f({attribute:!1})],Se.prototype,"config");Re([f({attribute:!1})],Se.prototype,"autocomplete");Re([f({attribute:!1})],Se.prototype,"taxonomyService");Re([f({attribute:!1})],Se.prototype,"ultratags");Re([f({attribute:!1})],Se.prototype,"defaultLanguage");Re([f({attribute:!1})],Se.prototype,"perFileResolved");let Dp=Se;X("sfx-bulk-meta-table",Dp);var Mp=Object.defineProperty,_e=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Mp(e,t,r),r};const $s=class $s extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._onFieldBlur=e=>{e.stopPropagation(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{var i;e.stopPropagation();const t=(i=this.field)==null?void 0:i.type;(t==="tags"||t==="ultratags"||t==="multi-select")&&this._processFieldValue(e.detail.value)},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}shouldUpdate(e){return!(e.size===1&&e.has("pendingOp")&&!this.selected)}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e){const t=Ko(this.field,e,this.config??void 0);if(t){this._error=t;return}this._error=null;const i={meta:{...this.file.meta,[this.field.key]:this.value}},r=Br(this.field,e,i,dt(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:zn(this.field,this.value,e.value,e.operation,dt(this.field,this.config))}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t,i;const e=this.file;return c`
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
              src=${Or(this._getExtension(e.name))}
              alt=${T("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${r=>{const o=r.target,n=Ur();!o.dataset.fallback&&o.src!==n&&(o.dataset.fallback="1",o.src=n)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?Nn(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?c`<div
                class="row-field-na"
                title=${T("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >
                ${T("fieldNotApplicable","Not applicable for this asset")}
              </div>`:this.pendingOp&&this.selected?c`<sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${this._computePreviewValue()}
                  .oldTaxonomyEntry=${((t=this.file.taxonodes)==null?void 0:t[this.field.key])??null}
                  .newTaxonomyEntry=${this.taxonomyEntry}
                  .config=${this.config}
                ></sfx-bulk-meta-diff-view>`:c`<div class="row-field-edit">
                    <sfx-metadata-field-edit
                      .field=${this.field}
                      .value=${Ho(this.field,this.value,dt(this.field,this.config))}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonomyEntry}
                      .ultratags=${this.ultratags}
                      .language=${(i=this.config)==null?void 0:i.language}
                      .defaultLanguage=${this.defaultLanguage}
                      .allowedValues=${this.allowedValues}
                    ></sfx-metadata-field-edit>
                  </div>
                  ${this._error?c`<div class="row-error" role="alert">${this._error}</div>`:m}`}
        </div>
      </div>
    `}};$s.styles=[Rp];let de=$s;_e([f({attribute:!1})],de.prototype,"file");_e([f({attribute:!1})],de.prototype,"field");_e([f({attribute:!1})],de.prototype,"value");_e([f({attribute:!1})],de.prototype,"taxonomyEntry");_e([f({type:Boolean})],de.prototype,"selected");_e([f({attribute:!1})],de.prototype,"pendingOp");_e([f({attribute:!1})],de.prototype,"config");_e([f({attribute:!1})],de.prototype,"autocomplete");_e([f({attribute:!1})],de.prototype,"taxonomyService");_e([f({attribute:!1})],de.prototype,"ultratags");_e([f({attribute:!1})],de.prototype,"defaultLanguage");_e([f({attribute:!1})],de.prototype,"allowedValues");_e([f({type:Boolean})],de.prototype,"notApplicable");_e([C()],de.prototype,"_error");X("sfx-bulk-meta-row",de);const Bp=new Set(["multi-select","tags","ultratags"]);function Io(s,e,t){return!e.regional_variants_group_uuid||s==null||typeof s!="object"||Array.isArray(s)?s:s[t??"en"]}function Ao(s){return Array.isArray(s)?s:[]}function Fo(s){return s==null||s===""||Array.isArray(s)&&s.length===0?!0:typeof s=="object"&&!Array.isArray(s)?!Object.values(s).some(e=>e!=null&&e!==""):!1}function Pr(s,e){var i;const t=(i=s.possible_values)==null?void 0:i.find(r=>r.internal_unique_value===e||r.api_value===e);return(t==null?void 0:t.label)??String(e)}function Oo(s,e){if(e==null||e==="")return"";switch(s.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Pr(s,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Uo(s){return typeof s=="string"?s:s&&typeof s=="object"&&"label"in s?String(s.label):String(s)}function jp(s,e){const t=s.map(Uo),i=e.map(Uo),r=new Set(t),o=new Set(i),n=[];for(const a of i)n.push({label:a,state:r.has(a)?"kept":"added"});for(const a of t)o.has(a)||n.push({label:a,state:"removed"});return n}function Np(s,e,t){const i=Pi(s),r=Pi(e),o=t||"en",n=u=>u.sid||u.slug||u.uuid||"",a=u=>Ri({i18n:u.i18n,slug:u.slug||""},o,o).value||u.slug||u.sid||"",l=new Set(i.map(n).filter(Boolean)),d=new Set(r.map(n).filter(Boolean)),p=[];for(const u of r){const h=n(u);p.push({label:a(u),state:l.has(h)?"kept":"added"})}for(const u of i){const h=n(u);d.has(h)||p.push({label:a(u),state:"removed"})}return p}function qp(s,e,t){const i=new Set(s.map(n=>JSON.stringify(n))),r=new Set(e.map(n=>JSON.stringify(n))),o=[];for(const n of e){const a=JSON.stringify(n),l=typeof n=="string"?Pr(t,n):String(n);o.push({label:l,state:i.has(a)?"kept":"added"})}for(const n of s){const a=JSON.stringify(n);if(!r.has(a)){const l=typeof n=="string"?Pr(t,n):String(n);o.push({label:l,state:"removed"})}}return o}function Hp(s,e,t,i){const r=dt(s,i),o=i==null?void 0:i.language,n=Io(e,s,r),a=Io(t,s,r);if(Bp.has(s.type)){if(s.type==="ultratags")return{kind:"array",items:Np(e,t,o)};const l=Ao(n),d=Ao(a);return s.type==="tags"?{kind:"array",items:jp(l,d)}:{kind:"array",items:qp(l,d,s)}}return{kind:"scalar",oldDisplay:Oo(s,n),newDisplay:Oo(s,a),oldEmpty:Fo(n),newEmpty:Fo(a)}}var Vp=Object.defineProperty,Ft=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Vp(e,t,r),r};const Ss=class Ss extends G{constructor(){super(...arguments),this._i18nController=new Ue(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:T("added","Added"),removed:T("removed","Removed"),kept:T("kept","Kept")};return c`
      <div class="diff-wrap" aria-label=${T("bulkOperationPreview","Bulk operation preview")}>
        ${e.items.length===0?c`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.items.map(i=>c`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.state==="removed"?c`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=T("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?T("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?T("emptyValue","empty"):e.newDisplay});return c`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${T("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?m:c`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var n,a;const e=((n=this.newTaxonomyEntry)==null?void 0:n.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",i=!t,r=!e,o=T("willChangeFromTo","Will change from {{from}} to {{to}}",{from:i?T("emptyValue","empty"):t,to:r?T("emptyValue","empty"):e});return c`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${T("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${o}</span>
        ${r?m:c`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){if(!this.field)return m;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=Hp(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Ss.styles=[Pp];let Ne=Ss;Ft([f({attribute:!1})],Ne.prototype,"field");Ft([f({attribute:!1})],Ne.prototype,"oldValue");Ft([f({attribute:!1})],Ne.prototype,"newValue");Ft([f({attribute:!1})],Ne.prototype,"oldTaxonomyEntry");Ft([f({attribute:!1})],Ne.prototype,"newTaxonomyEntry");Ft([f({attribute:!1})],Ne.prototype,"config");X("sfx-bulk-meta-diff-view",Ne);function Mn(s){let e=s;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Kp=Object.defineProperty,fe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Kp(e,t,r),r};const zo=3,Ir=new CSSStyleSheet;Ir.replaceSync(`
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
`);var Je;const ce=(Je=class extends G{constructor(){super(...arguments),this.t=Pe,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=zo,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&An(t).then(({files:i,hadDirectories:r})=>{i.length>0?this._emitFiles(i,r):r&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const r of i){const o=r.webkitRelativePath;o&&ts(r,o)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var r;if(!this.isConnected||this.offsetWidth===0)return;const t=(r=e.clipboardData)==null?void 0:r.items;if(!t)return;const i=[];for(const o of t)if(o.kind==="file"){const n=o.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(e="files"){var t,i;if(e==="folder"&&this.directory&&this.multi){(t=this.folderInput)==null||t.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Mn(this).appendChild(this._portalContainer),this._injectDropdownStyles()),lt(c`<div class="sfx-more-dropdown open">
          ${e.map(t=>c`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?at(t):t.iconColor?c`<svg viewBox="0 0 24 24" ${Q({color:t.iconColor})}>
                          ${Ge(t.icon)}
                        </svg>`:J`<svg viewBox="0 0 24 24">${Ge(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(lt(m,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Ir)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Ir]))}_positionDropdown(){var u,h;const e=(u=this.shadowRoot)==null?void 0:u.querySelector(".more-wrap > button"),t=(h=this._portalContainer)==null?void 0:h.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),r=8,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+r||a>l?t.style.top=`${i.top-o-r}px`:t.style.top=`${i.bottom+r}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=zo}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var r;const i=(((r=e[0])==null?void 0:r.contentRect.width)??this.getBoundingClientRect().width)>=Je._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(lt(m,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return c`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?at(e):c`<span class="pill-ico" ${Q(e.iconColor?{color:e.iconColor}:null)}>
              ${J`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${Ge(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return c`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?c`<span class="card-ico">${at(e)}</span>`:c`<span class="card-ico" ${Q(e.iconColor?{color:e.iconColor}:null)}>
              ${J`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${Ge(e.icon)}</svg>`}
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
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return c`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role="button"
          tabindex="0"
          aria-label=${this.t("dropFilesHere","Drop files here or click to browse")}
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

          ${!this.compact&&this.directory&&this.multi?c`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${r=>{r.stopPropagation(),this.browse("folder")}}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:c`<div class="title">
                ${this.t("dragAndDrop","Drag & Drop or click to")}
                <span>${this.t("browse","browse")}</span>
              </div>`}
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
                        ${Q(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        data-tip=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        aria-label=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${o=>{o.stopPropagation(),this._onSourceIconClick(r)}}
                      >
                        ${r.brandHtml?at(r):J`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${Ge(r.icon)}</svg>`}
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
        ${this.directory&&this.multi?c`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:m}
      </div>
    `}},Je.styles=j`
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
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `,Je._WIDE_THRESHOLD_PX=1200,Je);fe([f({attribute:!1})],ce.prototype,"t");fe([f({type:Boolean,reflect:!0})],ce.prototype,"compact");fe([f({type:Boolean,attribute:"external-drag-over"})],ce.prototype,"externalDragOver");fe([f({type:String})],ce.prototype,"accept");fe([f({type:Boolean})],ce.prototype,"multi");fe([f({type:Boolean})],ce.prototype,"directory");fe([f({type:Array})],ce.prototype,"sources");fe([f({type:String,attribute:"sources-layout"})],ce.prototype,"sourcesLayout");fe([f({type:String,reflect:!0})],ce.prototype,"mode");fe([C()],ce.prototype,"_dragOver");fe([C()],ce.prototype,"_moreOpen");fe([C()],ce.prototype,"_visiblePills");fe([zr(".ripple")],ce.prototype,"_rippleEl");fe([zr("input[data-sfx-dz-files]")],ce.prototype,"fileInput");fe([zr("input[data-sfx-dz-folder]")],ce.prototype,"folderInput");let Yp=ce;const Cs=class Cs extends G{constructor(){super(...arguments),this._i18nController=new Kn(this)}render(){return c`
      <div class="line"></div>
      <div class="label">${nt("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Cs.styles=j`
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
  `;let Ar=Cs;var Gp=Object.defineProperty,ee=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Gp(e,t,r),r};const Fr=new CSSStyleSheet;Fr.replaceSync(`
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
`);const Es=class Es extends G{constructor(){super(...arguments),this.t=Pe,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var r;if((r=this._portalContainer)!=null&&r.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const r of i){const o=r.webkitRelativePath;o&&ts(r,o)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Mn(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),lt(c`<div class="sfx-tile-dropdown">
        ${e.map(t=>c`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${Q(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?at(t):J`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${Ge(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var u;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),r=6,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+r||a>l?t.style.top=`${i.top-o-r}px`:t.style.top=`${i.bottom+r}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_closePortal(){this._portalContainer&&(lt(m,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Fr)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Fr]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return c`
      <div class="drop-tile" @click=${this._onDropTileClick}>
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
          <div class="drop-tile-text">
            ${this.t("dropOrClickTo","Drop or click to")}
            <span>${this.t("browse","browse")}</span>
          </div>
          ${this.directory&&this.multi?c`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:m}
          ${t.length>0?c`
                <div class="drop-tile-sources">
                  ${t.map(r=>c`
                      <button
                        class="drop-tile-src"
                        ${Q(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        title=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${o=>this._onSourceClick(o,r)}
                      >
                        ${r.brandHtml?at(r):J`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${Ge(r.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?c`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            @click=${r=>this._toggleMore(r)}
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
        ${this.directory&&this.multi?c`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:m}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(r=>r.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(o=>this.searchResults.has(o)).length,i=e?Math.round(t/e*100):0,r=e>0&&t===e;return c`
      ${e>1&&!this.previewOpen?c`
            <div class="similar-banner search">
              ${r?c`<span class="search-done-ico"
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
                  >${r?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${Q({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${r?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:m}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():m}
        ${kt(this.files,o=>o.id,(o,n)=>{const a=this.searchResults.get(o.id);return c`<sfx-file-item
              .t=${this.t}
              .store=${this.store}
              .fileId=${o.id}
              .file=${o}
              .mode=${this.mode}
              .allowRename=${this.allowRename}
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
              .showCheckSimilar=${this.showCheckSimilar}
              .selectMode=${this.selectMode}
              .isSelected=${this.selectedIds.has(o.id)}
              .selectionActive=${this.selectedIds.size>0}
              .selectionFull=${this.selectionFull}
              .previewOpen=${this.previewOpen}
              .similarStatus=${this._statusFor(o.id)}
              .similarCount=${(a==null?void 0:a.length)??-1}
              .similarResults=${a??[]}
              ${Q({"--tile-index":String(n)})}
            ></sfx-file-item>`})}
      </div>
    `}};Es.styles=j`
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
  `;let Y=Es;ee([f({attribute:!1})],Y.prototype,"t");ee([f({attribute:!1})],Y.prototype,"files");ee([f({attribute:!1})],Y.prototype,"store");ee([f({type:Boolean})],Y.prototype,"showDropTile");ee([f({attribute:!1})],Y.prototype,"sources");ee([f({type:String})],Y.prototype,"accept");ee([f({type:Boolean})],Y.prototype,"multi");ee([f({type:Boolean})],Y.prototype,"directory");ee([f({type:Boolean})],Y.prototype,"allowRename");ee([f({type:String})],Y.prototype,"mode");ee([f({type:Boolean})],Y.prototype,"showLocateButton");ee([f({type:Boolean})],Y.prototype,"showCopyCdnButton");ee([f({type:Boolean})],Y.prototype,"showCheckSimilar");ee([f({type:Boolean})],Y.prototype,"selectMode");ee([f({attribute:!1})],Y.prototype,"selectedIds");ee([f({type:Boolean})],Y.prototype,"allSelected");ee([f({type:Boolean})],Y.prototype,"selectionFull");ee([f({type:Number})],Y.prototype,"maxSelection");ee([f({type:Boolean})],Y.prototype,"previewOpen");ee([f({attribute:!1})],Y.prototype,"searchRunIds");ee([f({attribute:!1})],Y.prototype,"searchActiveIds");ee([f({attribute:!1})],Y.prototype,"searchResults");ee([C()],Y.prototype,"_moreOpen");ee([C()],Y.prototype,"_dropTileMaxVisible");var Wp=Object.defineProperty,te=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Wp(e,t,r),r};const Ts=class Ts extends G{constructor(){super(...arguments),this.t=Pe,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let r=e.right+12;r+t>window.innerWidth-8&&(r=e.left-t-12),this._simPopLeft=Math.max(8,r),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),r=140;this._tipLeft=Math.max(r+8,Math.min(i.left+i.width/2,window.innerWidth-r-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var r;i.some(o=>o.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(r=this._io)==null||r.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",r=e.status==="complete"&&!!e.alreadyExisted;return i||r}_maybeProbeDims(){var i,r;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const o=new Image;o.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${o.naturalWidth}×${o.naturalHeight}`)},o.src=t}else if((r=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&r.info){const o=e.response.file.info;o.img_w&&o.img_h&&(this._dims=`${o.img_w}×${o.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,r,o,n;e.stopPropagation();const t=(n=(o=(r=(i=this._file)==null?void 0:i.response)==null?void 0:r.file)==null?void 0:o.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var w,$,b;const e=this._file;if(!e)return m;const t=Ce(e),i=e.status==="complete",r=e.status==="uploading",o=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",d=l||this.reviewPick||!this.allowRename,p=up(e.name),u=t==="image"&&!Ye(e.type),h=this.selectMode&&u&&!l,y=this.similarCount>=0,S=h&&!y&&!i&&this.similarStatus==="",k=!l&&!i&&!r&&!o&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,R=k,E=["tile",i?"done":"",r?"uploading":"",o?"paused":"",a?"rejected":"",l?"review":"",S?"selectable":"",S&&this.isSelected?"selected":"",this.selectionActive&&!u&&!l?"select-dimmed":"",R?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return c`
      <div
        class=${E}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:S?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?c`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:c`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Or(p)}
                    alt="${p?this.t("extFile","{{ext}} file",{ext:p}):this.t("file","File")}"
                    @error=${x=>{const F=x.target,P=Ur();!F.dataset.fallback&&F.src!==P&&(F.dataset.fallback="1",F.src=P)}}
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
          ${S?c`
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
          ${k?c`
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
          ${i&&((w=e.response)!=null&&w.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&(($=e.response.file.url)!=null&&$.cdn))?c`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?c`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${No}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:m}
                  ${this.showCopyCdnButton&&((b=e.response.file.url)!=null&&b.cdn)?c`<button
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
                    ${Q({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
                  ></div>
                </div>
              `:m}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?c`<div
                class="error-badge"
                @mouseenter=${x=>this._showTip(e.error??"",x)}
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
                @mouseenter=${x=>this._showTip(this.t("alreadyUploaded","Already uploaded"),x)}
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
                ${r&&e.isTus?c`
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
                ${o?c`
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
            @click=${x=>x.stopPropagation()}
          />
          <div class="meta">
            ${p||""}${e.size?` · ${wt(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?c`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${Q({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:m}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return m;const e=[...this.similarResults].sort((l,d)=>d.score-l.score),t=e[0],i=e.length,r=e.slice(1),o=r.slice(0,3),n=r.length-o.length,a=Math.round(t.score*100);return c`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${Q({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
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
          ${r.length?c`<div class="pop-thumbs">
                ${o.map(l=>c`<img src=${l.url} alt="" />`)}
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
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};Ts.styles=j`
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
  `;let Z=Ts;te([f({attribute:!1})],Z.prototype,"t");te([f({attribute:!1})],Z.prototype,"store");te([f({type:String})],Z.prototype,"fileId");te([f({attribute:!1})],Z.prototype,"file");te([f({type:String})],Z.prototype,"mode");te([f({type:Boolean})],Z.prototype,"allowRename");te([f({type:Boolean})],Z.prototype,"showLocateButton");te([f({type:Boolean})],Z.prototype,"showCopyCdnButton");te([f({type:Boolean})],Z.prototype,"showCheckSimilar");te([f({type:Boolean})],Z.prototype,"selectMode");te([f({type:Boolean})],Z.prototype,"isSelected");te([f({type:Boolean})],Z.prototype,"selectionActive");te([f({type:Boolean})],Z.prototype,"selectionFull");te([f({type:Boolean})],Z.prototype,"previewOpen");te([f({type:String})],Z.prototype,"similarStatus");te([f({type:Number})],Z.prototype,"similarCount");te([f({attribute:!1})],Z.prototype,"similarResults");te([f({type:Boolean})],Z.prototype,"reviewPick");te([C()],Z.prototype,"_dims");te([C()],Z.prototype,"_simPopover");te([C()],Z.prototype,"_copied");te([C()],Z.prototype,"_tip");var Xp=Object.defineProperty,ui=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Xp(e,t,r),r};const Rs=class Rs extends G{constructor(){super(...arguments),this.t=Pe,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return c`
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
    `}};Rs.styles=j`
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
  `;let et=Rs;ui([f({attribute:!1})],et.prototype,"t");ui([f({attribute:!1})],et.prototype,"files");ui([f({type:Boolean})],et.prototype,"showLocateButton");ui([f({type:Boolean})],et.prototype,"showCopyCdnButton");ui([C()],et.prototype,"_filter");X("sfx-last-upload-review",et);const Xi=j`
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
`,Ji=j`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Jp=Object.defineProperty,Fe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Jp(e,t,r),r};const Ps=class Ps extends G{constructor(){super(...arguments),this.t=Pe,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?m:c`
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
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
          <button class="btn-ghost" @click=${this._clear} aria-label=${this.t("clear","Clear")}>
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
            <span class="btn-label">${this.t("clear","Clear")}</span>
          </button>
          <button
            class="btn-sec"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
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
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",r=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return c`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
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
                <span class="btn-label">${this.t("upload","Upload")}</span>
              `}
      </button>
    `}};Ps.styles=[Xi,Ji,j`
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
    `];let ve=Ps;Fe([f({attribute:!1})],ve.prototype,"t");Fe([f({type:String})],ve.prototype,"uploadState");Fe([f({type:Number})],ve.prototype,"fileCount");Fe([f({type:Number})],ve.prototype,"failedCount");Fe([f({type:Boolean})],ve.prototype,"showFillMetadata");Fe([f({type:Boolean})],ve.prototype,"requireMetadataFirst");Fe([f({type:Boolean})],ve.prototype,"showCheckSimilar");Fe([f({type:Boolean})],ve.prototype,"selectMode");Fe([f({type:Number})],ve.prototype,"selectedCount");Fe([f({type:Number})],ve.prototype,"maxSelection");Fe([f({type:Boolean})],ve.prototype,"allSelected");const Zp='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function ss(s,e){return t=>{if(t.key!=="Tab")return;const i=s();if(!i)return;const r=i.querySelector(e);if(!r)return;const o=Array.from(r.querySelectorAll(Zp));if(o.length===0)return;const n=o[0],a=o[o.length-1],l=i.activeElement;t.shiftKey?(l===n||!r.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!r.contains(l))&&(t.preventDefault(),n.focus())}}var Qp=Object.defineProperty,Zi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Qp(e,t,r),r};const Is=class Is extends G{constructor(){super(...arguments),this.t=Pe,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=ss(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");r&&(r.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return c`
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
    `}};Is.styles=[Xi,Ji,j`
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
    `];let gt=Is;Zi([f({attribute:!1})],gt.prototype,"t");Zi([C()],gt.prototype,"_url");Zi([C()],gt.prototype,"_name");Zi([C()],gt.prototype,"_error");var eu=Object.defineProperty,hi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&eu(e,t,r),r};const As=class As extends G{constructor(){super(...arguments),this.t=Pe,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ss(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("video"),t=(o=this.shadowRoot)==null?void 0:o.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return c`
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
    `}};As.styles=[Xi,Ji,j`
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
    `];let tt=As;hi([f({attribute:!1})],tt.prototype,"t");hi([C()],tt.prototype,"_stream");hi([C()],tt.prototype,"_error");hi([C()],tt.prototype,"_captured");hi([C()],tt.prototype,"_previewUrl");var tu=Object.defineProperty,Ot=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&tu(e,t,r),r};const Fs=class Fs extends G{constructor(){super(...arguments),this.t=Pe,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ss(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=r=>{r.data.size>0&&this._chunks.push(r.data)},this._recorder.onstop=()=>{var o;const r=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=r,this._previewUrl=URL.createObjectURL(r),(o=this._stream)==null||o.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return c`
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
    `}};Fs.styles=[Xi,Ji,j`
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
    `];let qe=Fs;Ot([f({attribute:!1})],qe.prototype,"t");Ot([C()],qe.prototype,"_stream");Ot([C()],qe.prototype,"_recording");Ot([C()],qe.prototype,"_error");Ot([C()],qe.prototype,"_recordedBlob");Ot([C()],qe.prototype,"_previewUrl");var iu=Object.defineProperty,os=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&iu(e,t,r),r};const Os=class Os extends G{constructor(){super(...arguments),this.t=Pe,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(r=>r.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(r=>r.id!==e)},200)}_iconForType(e){return e==="error"?c`<svg
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
    `}};Os.styles=j`
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
  `;let Tt=Os;os([f({attribute:!1})],Tt.prototype,"t");os([f({type:Number})],Tt.prototype,"duration");os([C()],Tt.prototype,"_toasts");X("sfx-toast",Tt);var ru=Object.defineProperty,N=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&ru(e,t,r),r};const Lo=new Set(["unsplash"]),Ke=10,su=3,ou=["auto","mobile","tablet","desktop","hq","sample"],nu=["hls"],yt={isTus:!1,tusUploadUrl:null,relativeFolder:""},Do=new Set(["complete","failed","error","cancelled","rejected"]);var W;const M=(W=class extends G{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=jt,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:r}=e.detail;if(lr(i)){const a=dr(i);if(!a)return;const l=r===""||r==null,d=a==="position"?{position:l?void 0:Number(r)}:{ref:l?void 0:String(r)};this.updateFileProduct(t,d);return}const o=this._store.getState().files.get(t);if(!o)return;const n=new Map(this._store.getState().files);n.set(t,{...o,meta:{...o.meta,[i]:r}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var r;const i=(r=this.config)==null?void 0:r.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(o){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",o),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var r,o,n,a;const t=this._mergedSources.find(l=>l.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,l)}return}if(e==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((o=(r=this.config)==null?void 0:r.connectors)==null?void 0:o.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:l}=await Lt(async()=>{const{SfxGooglePickerView:d}=await import("./google-picker-view-DjdBAt7j.js");return{SfxGooglePickerView:d}},__vite__mapDeps([0,1,2]));customElements.define("sfx-google-picker-view",l)}}else if(Lo.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await Lt(async()=>{const{SfxSearchProviderBrowser:d}=await import("./search-provider-browser-BUhXXlAH.js");return{SfxSearchProviderBrowser:d}},__vite__mapDeps([3,1,2]));customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await Lt(async()=>{const{SfxProviderBrowser:d}=await import("./provider-browser-CWC2LgmB.js");return{SfxProviderBrowser:d}},__vite__mapDeps([4,1,2]));customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var u,h,y;this._showUrlDialog=!1;const{url:t,name:i}=e.detail,r=(u=this.config)==null?void 0:u.callbacks,o=Eo(i),n=o.startsWith("image/");if(or(i))return;const a=this._store.getState();if([...a.files.values()].some(S=>S.name===i&&S.status!=="rejected"&&S.status!=="cancelled"))return;const d=nr({name:i,size:0,type:o},a.restrictions,a.files);if(d){const S={id:xt(),status:"rejected",file:null,remoteUrl:t,name:i,size:0,type:o,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...yt};mt(this._store,S),this._dispatchPublic(q.FILE_REJECTED,{file:S,reason:d.message}),(h=r==null?void 0:r.onFileRejected)==null||h.call(r,S,d.message);return}const p={id:xt(),status:"idle",file:null,remoteUrl:t,name:i,size:0,type:o,previewUrl:n?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:null,...yt};mt(this._store,p),this._dispatchPublic(q.FILE_ADDED,{file:p}),(y=r==null?void 0:r.onFileAdded)==null||y.call(r,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,r,o;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(q.FILE_PREVIEW,{file:t}),(o=(r=(i=this.config)==null?void 0:i.callbacks)==null?void 0:r.onFilePreview)==null||o.call(r,t))},this._onFillMetadata=()=>{var t,i,r,o;const e=[...this._store.getState().files.values()].filter(n=>W._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(q.FILL_METADATA,{files:e}),(o=(r=(i=this.config)==null?void 0:i.callbacks)==null?void 0:r.onFillMetadata)==null||o.call(r,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=Ke)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,Ke).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var r,o,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(q.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFileCopyCdn)==null||n.call(o,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:r,meta:o}of t){const n=i.get(r);n&&i.set(r,{...n,meta:{...n.meta,...o}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,r=new Map(i);for(const{fileId:o,taxonodes:n}of t){const a=i.get(o);if(!a||!W._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[d,p]of Object.entries(n))p==null?delete l[d]:l[d]=p;r.set(o,{...a,taxonodes:l})}this._store.setState({files:r})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var r,o,n;const t=(r=this.config)==null?void 0:r.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(o=this._engine)==null||o.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(q.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var r;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(r=t==null?void 0:t.shadowRoot)==null?void 0:r.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(r=>r.status==="complete"||r.status==="failed"||r.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=zt.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&zt.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,l,d;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,r=(p,u,h)=>`${p}\0${u}\0${h}`,o=new Set;for(const p of this._store.getState().files.values())p.status!=="rejected"&&p.status!=="cancelled"&&o.add(r(p.name,p.size,p.relativeFolder??""));for(const p of e.detail.files){if(or(p.name))continue;const u=i?p.relativeFolder??"":"",h=this._store.getState(),y=r(p.name,p.size,u);if(o.has(y))continue;const S=p.thumbnail?this._transformRemoteThumbnail(p.thumbnail,{source:"connector",providerId:p.provider}):null,k=nr({name:p.name,size:p.size,type:p.mimeType},h.restrictions,h.files);if(k){const E={id:xt(),status:"rejected",file:null,remoteUrl:null,name:p.name,size:p.size,type:p.mimeType,previewUrl:S,duration:null,progress:0,speed:0,bytesUploaded:0,error:k.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:p,...yt,relativeFolder:u};mt(this._store,E),this._dispatchPublic(q.FILE_REJECTED,{file:E,reason:k.message}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,E,k.message);continue}const R={id:xt(),status:"idle",file:null,remoteUrl:null,name:p.name,size:p.size,type:p.mimeType,previewUrl:S,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:p,...yt,relativeFolder:u};mt(this._store,R),o.add(y),this._dispatchPublic(q.FILE_ADDED,{file:R}),(d=t==null?void 0:t.onFileAdded)==null||d.call(t,R)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,r,o,n;this._dispatchPublic(q.COMPLETE_ACTION,{}),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||r.call(i),(((o=this.config)==null?void 0:o.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(q.CANCEL,{})},this._onModalDismiss=()=>{var e,t,i,r;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(q.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,r;(e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(q.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(q.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(q.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,r;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(q.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&An(t).then(({files:i,hadDirectories:r})=>{if(i.length===0){r&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:r}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const r=((t=this.config)==null?void 0:t.mode)??"modal",o=((i=this.config)==null?void 0:i.header)??(r==="modal"?"close":!0);(o==="close"||o==="back")&&(r==="modal"&&this._isOpen?this._onModalDismiss():r==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const r=i.getBoundingClientRect(),o=(t-r.left)/r.width*100;this._splitPct=Math.max(25,Math.min(75,o))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=W._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),r=i===-1?1:(i+1)%t.length;this._fsZoom=t[r],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,r=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+r,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=ta(),this._storeCtrl=new ia(this,this._store)}get _lastUploadId(){var i,r;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(r=this.config)==null?void 0:r.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,r;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(o=>o.type===ki.LANGUAGES);return((r=t==null?void 0:t.variants.find(Boolean))==null?void 0:r.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,r,o;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((r=this.config)==null?void 0:r.locale)??void 0;return{...tl((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var r,o,n;const t=(((r=this._metadataSchema)==null?void 0:r.regionalVariantsGroups)??[]).find(a=>a.type===ki.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(o=this.config)==null?void 0:o.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var r;const e=(r=this.config)==null?void 0:r.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const r=Va(e,t);return this._localizedSchemaCache={base:e,translations:t,result:r},r}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(l=>l.type===ki.LANGUAGES)))return;const r=this._activeLanguage;if(!r||this._metadataTranslationsLang===r&&this._metadataTranslations)return;this._metadataTranslationsLang=r;const o=++this._translationsRequestId,n=e.peek(r);if(n){this._metadataTranslations=n;return}e.getTranslations(r).then(l=>{o===this._translationsRequestId&&(this._metadataTranslations=l)})}open(){var t,i,r,o,n,a,l,d,p;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||r.call(i),this._dispatchPublic(q.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(q.OPEN,{}),e&&((p=(d=(l=this.config)==null?void 0:l.callbacks)==null?void 0:d.onRestore)==null||p.call(d),this._dispatchPublic(q.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,r;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(q.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,r;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||r.call(i),this._dispatchPublic(q.CLOSE,{}),this.requestUpdate()}upload(){var o,n,a,l,d,p,u,h,y,S;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(k=>k.status==="idle"||k.status==="queued");if((n=(o=this.config)==null?void 0:o.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(q.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const r=[...this._store.getState().files.values()].filter(k=>k.status==="idle"||k.status==="queued");this._dispatchPublic(q.UPLOAD_STARTED,{files:r}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||d.call(l,r),this._engine.uploadAll(),(p=this.config)!=null&&p.minimizeOnUpload&&((u=this.config)==null?void 0:u.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(S=(y=(h=this.config)==null?void 0:h.callbacks)==null?void 0:y.onMinimize)==null||S.call(y),this._dispatchFloatGeometryEvent(q.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,r=new Map(i);let o=!1;for(const n of e){const a=i.get(n.id);a&&(r.set(n.id,{...a,...n}),o=!0)}o&&this._store.setState({files:r})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const r=this._store.getState().files,o=r.get(e);if(!o||!W._MODIFIABLE_STATUSES.has(o.status))return;const n=new Map(r);n.set(e,{...o,meta:t!=null?{...o.meta,...t}:o.meta,tags:i??o.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let r=!1;for(const{fileId:o,meta:n,tags:a}of e){const l=t.get(o);!l||!W._MODIFIABLE_STATUSES.has(l.status)||(i.set(o,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),r=!0)}r&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const r=this._store.getState().files,o=r.get(e);if(!o||!W._MODIFIABLE_STATUSES.has(o.status))return;const n={...o.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(r);a.set(e,{...o,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const r=this._store.getState().files,o=new Map(r);let n=!1;for(const a of e){const l=r.get(a);if(!l||!W._MODIFIABLE_STATUSES.has(l.status))continue;const d={...l.taxonodes??{}};i==null?delete d[t]:d[t]=i,o.set(a,{...l,taxonodes:d}),n=!0}n&&this._store.setState({files:o})}updateFileProduct(e,t){const i=this._store.getState().files,r=i.get(e);if(!r||!W._MODIFIABLE_STATUSES.has(r.status))return;const o=new Map(i);o.set(e,{...r,product:Vs(r.product,t)}),this._store.setState({files:o})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let r=!1;for(const{fileId:o,product:n}of e){const a=t.get(o);!a||!W._MODIFIABLE_STATUSES.has(a.status)||(i.set(o,{...a,product:Vs(a.product,n)}),r=!0)}r&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(r=>{this._previewFileId===t&&(this._previewDims=r?`${r.w} × ${r.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),lt(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(q.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(lt(m,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&zt.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Vn(e||"en");i&&t.on("missingKey",(o,n,a,l,d,p)=>{const u=a.match(/_(?:zero|one|two|few|many|other)$/),h=u&&(p!=null&&p[`defaultValue${u[0]}`])?String(p[`defaultValue${u[0]}`]):l;Yn.handleMissingKey(a,h,n)});const r=(o,n,a)=>nt(o,n,a);this._store.setState({t:r})}catch{}}disconnectedCallback(){var e,t,i,r,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._hostStyleObserver)==null||e.disconnect(),this._hostStyleObserver=null,(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const o=this._store.getState().queueConfig;t.queueConfig={...o,concurrency:e.concurrency}}if(e.autoProceed!=null){const o=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...o,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const o=i.defaults;o.resize!==void 0&&(this._setResize=o.resize),o.maxWidth!==void 0&&(this._setMaxW=o.maxWidth),o.maxHeight!==void 0&&(this._setMaxH=o.maxHeight),o.transcode!==void 0&&(this._setTranscode=o.transcode),o.resolution!==void 0&&(this._setResolution=o.resolution),o.protocol!==void 0&&(this._setProtocol=o.protocol),o.resumable!==void 0&&(this._setResumable=o.resumable)}const r=this._lastUploadId;this._hasStoredReview=r!=null&&zt.exists(r),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var r,o,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=is(t.container,e.apiDomain),this._authHeaders=Er(t),this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(r=e.connectors)==null?void 0:r.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const l=await ep(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,r;const t=e instanceof Error?e.message:String(e);return(r=(i=this.config)==null?void 0:i.auth)!=null&&r.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var a,l,d,p;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let r=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;r||(r={})}if(!r)return;const o=(p=(d=this.config)==null?void 0:d.connectors)==null?void 0:p.companionUrl;if(!o)return r;const n=o.replace(/\/+$/,"");return{...r,endpoint:r.endpoint??`${n}/files`,jsonBase:r.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return r=>{const o={},n=Ce(r);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(o.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(o.postprocess="transcode",o["video-resolution"]=this._setResolution,o.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(o.opt_force_name=l)}const a=i==null?void 0:i(r);return a&&Object.assign(o,a),Object.keys(o).length>0?o:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Yc(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,r)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:r})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,r=this._storeCtrl.state.t;try{const{fetchMetadataSchema:o,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:l,hasCachedDependencies:d,canReachHub:p,HUB_HEADERS_HINT:u,createTagsAutocomplete:h,createTaxonomyService:y,createUltratagsService:S,createFieldI18nService:k}=await Lt(async()=>{const{fetchMetadataSchema:P,fetchDependencies:U,normalizeDependencies:z,hasCachedSchema:H,hasCachedDependencies:B,canReachHub:we,HUB_HEADERS_HINT:L,createTagsAutocomplete:ke,createTaxonomyService:Le,createUltratagsService:_,createFieldI18nService:g}=await import("./index-CY5tRnW6.js");return{fetchMetadataSchema:P,fetchDependencies:U,normalizeDependencies:z,hasCachedSchema:H,hasCachedDependencies:B,canReachHub:we,HUB_HEADERS_HINT:L,createTagsAutocomplete:ke,createTaxonomyService:Le,createUltratagsService:_,createFieldI18nService:g}},__vite__mapDeps([5,1,2]));if(i!==this._metadataSchemaResolveId)return;const R=p(t),E=R||!!t.rawMetadata||l(t.projectUuid),w=R||d(t.projectUuid)||!!t.rawDependencies;if(!E){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig is set but no usable Hub auth is configured — skipping metadata schema and dependencies. ${u}`),this._showToast(r("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let $;t.rawDependencies?$=Promise.resolve(a(t.rawDependencies)):w?$=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(P=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",P),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${u}`)),$=Promise.resolve([]));const[b,x]=await Promise.all([o(this._apiBase,this._authHeaders,t.projectUuid,t),$]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=x,this._metadataAutocomplete=h(this._apiBase,this._authHeaders),this._taxonomyService=y(this._apiBase,this._authHeaders),this._ultratagsService=S(this._apiBase,this._authHeaders),this._fieldI18nService=k(this._apiBase,this._authHeaders),this._metadataSchema=b.productsEnabled?Ua(b,this._storeCtrl.state.t):b;const F=this._metadataSchema.fields.filter(P=>qt(P,t)).map(P=>P.key);this._dispatchPublic(q.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:F}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(o){console.error("[sfx-uploader] Failed to load metadata schema:",o),this._showToast(r("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let r=!1;const o=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!W._MODIFIABLE_STATUSES.has(a.status))continue;const l=St({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const d={};for(const p of t.fields){const u=l.get(p.ckey);(u==null?void 0:u.setValue)!==void 0&&(u.hidden||Oe(a.meta[p.key])&&(d[p.key]=ma(p,u.setValue)))}Object.keys(d).length!==0&&(o.set(a.id,{...a,meta:{...a.meta,...d}}),r=!0)}r&&this._store.setState({files:o})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const r=new Map(t);for(const o of t.values()){if(!W._MODIFIABLE_STATUSES.has(o.status))continue;const n=St({mime:o.type??"",meta:o.meta},e,this._metadataDependencies),a=va(o.meta,e,n);a!==o.meta&&(r.set(o.id,{...o,meta:a}),i=!0)}i&&this._store.setState({files:r})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const r=this._store.getState().files.get(e);if(!r||r.name===i)return;const o=new Map(this._store.getState().files);o.set(e,{...r,name:i}),this._store.setState({files:o})}_previewMeta(e){var t;return(t=this._metadataSchema)!=null&&t.productsEnabled?{...e.meta,[ct]:e.product.ref,[pt]:e.product.position}:e.meta}_resolvedSchemaFor(e){return!this._metadataSchema||this._metadataDependencies.length===0?null:St({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies)}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:Go(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:ja(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?qa(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var r;const e=this._isPillExpanded?"card":"pill",t=(r=this._portalContainer)==null?void 0:r.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var r,o,n,a,l,d,p,u,h,y;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(r=this.config)==null?void 0:r.callbacks;for(const[S,k]of e.files){const R=t.files.get(S);if(!R){k.relativeFolder&&this._firedFolders.delete(k.relativeFolder);continue}if(R.status!==k.status)switch(k.status){case"uploading":R.status==="paused"&&(this._dispatchPublic(q.UPLOAD_RESUMED,{file:k}),(o=i==null?void 0:i.onUploadResumed)==null||o.call(i,k));break;case"complete":k.response&&(this._dispatchPublic(q.UPLOAD_COMPLETE,{file:k,response:k.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,k,k.response));break;case"error":case"failed":{const E=new Error(k.error??"Upload failed");this._dispatchPublic(q.UPLOAD_ERROR,{file:k,error:E}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,k,E);break}case"retrying":this._dispatchPublic(q.UPLOAD_RETRY,{file:k,attempt:k.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,k,k.retryCount);break;case"paused":this._dispatchPublic(q.UPLOAD_PAUSED,{file:k}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,k);break}k.status==="uploading"&&R.progress!==k.progress&&(this._dispatchPublic(q.UPLOAD_PROGRESS,{file:k,progress:k.progress,speed:k.speed}),(p=i==null?void 0:i.onUploadProgress)==null||p.call(i,k,k.progress,k.speed)),k.relativeFolder&&R.status!==k.status&&Do.has(k.status)&&!this._firedFolders.has(k.relativeFolder)&&this._maybeDispatchFolderComplete(k.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const S=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=S),this._dispatchPublic(q.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:S}),(u=i==null?void 0:i.onTotalProgress)==null||u.call(i,e.totalProgress,e.totalSpeed,S)}if(t.isUploading&&!e.isUploading){const S=[...e.files.values()];if(!S.some(R=>R.status==="cancelled")){const R=S.filter(b=>b.status==="complete"),E=S.filter(b=>b.status==="failed"||b.status==="error");if(R.length===0&&E.length===0)return;const w=this._lastUploadId;if(w!=null){const b=[...R,...E];zt.save(w,b),this._hasStoredReview=b.length>0}this._dispatchPublic(q.ALL_COMPLETE,{successful:R,failed:E}),(h=i==null?void 0:i.onAllComplete)==null||h.call(i,R,E);const $=(y=this.config)==null?void 0:y.closeOnComplete;if($!==!1&&$!=null){const b=typeof $=="number"?$:1500;this._closeOnCompleteTimer=setTimeout(()=>{var x,F,P;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(q.COMPLETE_ACTION,{}),(P=(F=(x=this.config)==null?void 0:x.callbacks)==null?void 0:F.onCompleteAction)==null||P.call(F),this.close())},b)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const r=[...t.files.values()].filter(l=>l.relativeFolder===e);if(r.length===0||r.some(l=>!Do.has(l.status)))return;const o=r.filter(l=>l.status==="complete"),n=r.filter(l=>l.status==="failed"||l.status==="error");o.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(q.FOLDER_COMPLETE,{folder:e,successful:o,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,o,n))}get _mergedSources(){var u;const e=(u=this.config)==null?void 0:u.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=jt.filter(h=>h.id!=="url"),this._cachedSources;const t=e.providers.length>0?vp(e.providers):[],i=e.customSources??[],r=e.coreSources?new Set(e.coreSources):null,o=r?jt.filter(h=>r.has(h.id)):jt,n=e.companionUrl?o:o.filter(h=>h.id!=="url"),a=n.filter(h=>h.id==="device"||h.id==="url"),l=n.filter(h=>h.id!=="device"&&h.id!=="url"),d=new Set,p=[];for(const h of[...a,...t,...l,...i])if(!d.has(h.id)){if(W._RESERVED_IDS.has(h.id)&&h.onActivate){console.warn(`[sfx-uploader] Custom source id "${h.id}" conflicts with a built-in source and was skipped.`);continue}d.add(h.id),p.push(h)}return this._cachedSources=p,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(r=>i.has(r.status))&&t.some(r=>r.status==="complete"||r.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var l,d,p,u,h;const t=(l=this.config)==null?void 0:l.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((d=this.config)==null?void 0:d.preserveFolderStructure)!==!1;let r=0,o=!1;const n=(y,S,k)=>`${y}\0${S}\0${k}`,a=new Set;for(const y of this._store.getState().files.values())y.status!=="rejected"&&y.status!=="cancelled"&&a.add(n(y.name,y.size,y.relativeFolder??""));for(const y of e){if(or(y.name))continue;if(o){r++;continue}const S=i?Nc(jc(y)):"",k=this._store.getState(),R=n(y.name,y.size,S);if(a.has(R))continue;const E=y.type||Eo(y.name),w=nr({name:y.name,size:y.size,type:E},k.restrictions,k.files);if(w){if(mp(w)){o=!0,r++;continue}const x=E.startsWith("image/")&&!Ye(E)?URL.createObjectURL(y):null,F={id:xt(),status:"rejected",file:y,remoteUrl:null,name:y.name,size:y.size,type:E,previewUrl:x,duration:null,progress:0,speed:0,bytesUploaded:0,error:w.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...yt,relativeFolder:S};mt(this._store,F),this._dispatchPublic(q.FILE_REJECTED,{file:F,reason:w.message}),(p=t==null?void 0:t.onFileRejected)==null||p.call(t,F,w.message);const P=(u=this.config)==null?void 0:u.rejectedFileAutoRemoveDelay,U=P===!1||P===0||P===void 0?0:P;if(U>0){const z=F.id,H=setTimeout(()=>{this._rejectedTimers.delete(z);const B=this._store.getState().files.get(z);B&&B.status==="rejected"&&Ds(this._store,z)},U);this._rejectedTimers.set(z,H)}continue}let $=null;E.startsWith("image/")&&!Ye(E)&&($=URL.createObjectURL(y));const b={id:xt(),status:"idle",file:y,remoteUrl:null,name:y.name,size:y.size,type:E,previewUrl:$,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:null,...yt,relativeFolder:S};if(mt(this._store,b),a.add(R),this._dispatchPublic(q.FILE_ADDED,{file:b}),(h=t==null?void 0:t.onFileAdded)==null||h.call(t,b),y.type.startsWith("video/")){gp(y).then(F=>{if(!F)return;const P=this._store.getState(),U=P.files.get(b.id);if(U){const z=new Map(P.files);z.set(b.id,{...U,previewUrl:F}),this._store.setState({files:z})}else URL.revokeObjectURL(F)});const x=document.createElement("video");x.preload="metadata",x.src=URL.createObjectURL(y),x.onerror=()=>{URL.revokeObjectURL(x.src)},x.onloadedmetadata=()=>{const F=x.duration;if(URL.revokeObjectURL(x.src),!isFinite(F))return;const P=this._store.getState(),U=P.files.get(b.id);if(U){const z=new Map(P.files);z.set(b.id,{...U,duration:F}),this._store.setState({files:z})}}}}if(r>0){const y=this._storeCtrl.state.t,S=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(y("tooManyFilesSkipped",{count:r,max:S,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var o,n,a,l,d;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const p=this._videoBlobUrls.get(t.file);p&&(URL.revokeObjectURL(p),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((o=this._engine)==null||o.cancelFile(e)),Ds(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const r=this._rejectedTimers.get(e);if(r&&(clearTimeout(r),this._rejectedTimers.delete(e)),this._previewFileId===e){const p=[...this._store.getState().files.values()];this._previewFileId=p.length>0?p[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(q.FILE_REMOVED,{file:i}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>Ce(e)==="image"&&!Ye(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,r,o;const e=(r=(i=this.config)==null?void 0:i.auth)==null?void 0:r.container,t=(o=this._authHeaders)==null?void 0:o["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var o,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=$o((n=(o=this.config)==null?void 0:o.similarityCheck)==null?void 0:n.confidence),r=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),So(e,{...t,threshold:i,endpoint:r}).then(d=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,d)}).catch(d=>{console.error("[sfx-uploader] Similarity check failed for",e.name,d),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var h,y,S,k;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(R=>R.id);const i=$o((y=(h=this.config)==null?void 0:h.similarityCheck)==null?void 0:y.confidence),r=(k=(S=this.config)==null?void 0:S.similarityCheck)==null?void 0:k.endpoint,o=new AbortController;this._similarAbort=o;const n=[...e];let a=0,l=0;const d=e.length,p=()=>{if(!o.signal.aborted){if(!this._previewFileId){const R=e.find(E=>{var w;return(((w=this._similarResults.get(E.id))==null?void 0:w.length)??0)>0});R&&(this._previewFileId=R.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},u=()=>{if(!o.signal.aborted)for(;a<su&&n.length>0;){const R=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(R.id),So(R,{...t,threshold:i,endpoint:r,signal:o.signal}).then(E=>{o.signal.aborted||(this._similarMarkInactive(R.id),this._similarSetResults(R.id,E))}).catch(E=>{o.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",R.name,E),this._similarMarkInactive(R.id),this._similarSetResults(R.id,[]))}).finally(()=>{o.signal.aborted||(a-=1,l+=1,l===d?p():u())})}};u()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),r=i>0?t.slice(i+1).toUpperCase():"";return r&&r.length<=5?r:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(r=>{var o,n;return r.status==="complete"&&!!((n=(o=r.response)==null?void 0:o.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var o,n,a;if(!e)return;const t=Qn(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(q.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),r=(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||r===!1)&&t&&window.location.assign(t)}render(){var r;const e=((r=this.config)==null?void 0:r.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?c`
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
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return m;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(r=>r.id===this._previewFileId);return c`
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
              @click=${r=>r.stopPropagation()}
            ></video>`:c`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${Q(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${r=>r.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=W._FS_ZOOM_LEVELS[W._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=W._FS_ZOOM_LEVELS[W._FS_ZOOM_LEVELS.length-1]?c`<svg
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
        @click=${r=>{r.stopPropagation(),this._navigateFs(-1)}}
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
        @click=${r=>{r.stopPropagation(),this._navigateFs(1)}}
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
    `}_renderProgressHeaderActions(){var a,l,d;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((l=this.config)==null?void 0:l.header)??(t==="modal"?"close":!0),r=!!((d=this.config)!=null&&d.minimizeOnUpload)&&t!=="inline",o=i==="close";if(!r&&!o)return m;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return c`
      <div class="header-actions">
        ${r?c`<button
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
        ${o?c`<button
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
    `}_renderHeader(){var E,w,$,b,x,F;const e=this._storeCtrl.state.t,t=((E=this.config)==null?void 0:E.mode)??"modal";if(this._phase==="uploading"){const P=this._storeCtrl.state,z=[...P.files.values()].filter(L=>L.status!=="rejected"&&L.status!=="cancelled"),H=z.length,B=z.filter(L=>L.status==="complete").length,we=P.totalProgress??0;return c`
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
                ${e("uploadingFiles",{count:H,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:B,total:H})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:Co(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(we)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${Q({width:`${we}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const P=[...this._storeCtrl.state.files.values()].filter(z=>z.status!=="rejected"&&z.status!=="cancelled"),U=this._batchOutcome(P,!0);return c`
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
                        ${Q({width:U.segPct(U.newCount)})}
                      ></div>`:m}
                  ${U.alreadyExistedCount>0?c`<div
                        class="header-seg dup"
                        ${Q({width:U.segPct(U.alreadyExistedCount)})}
                      ></div>`:m}
                  ${U.failed>0?c`<div
                        class="header-seg fail"
                        ${Q({width:U.segPct(U.failed)})}
                      ></div>`:m}
                </div>
              </div>`:m}
        </div>
      `}if(t==="inline"&&((w=this.config)!=null&&w.inlineHeader))return m;const i=(($=this.config)==null?void 0:$.header)??(t==="modal"?"close":!0);if(i===!1)return m;const r=t==="modal"?this._onModalDismiss:this._onInlineDismiss,o=i==="back"?c`<button
            class="header-btn header-btn-back"
            aria-label=${e("backToAssetPicker","Back to Asset Picker")}
            @click=${r}
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
          </button>`:m,n=(b=this.config)==null?void 0:b.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,d=[...this._storeCtrl.state.files.values()],p=d.some(P=>Ce(P)==="image"&&!Ye(P.type)),u=d.some(P=>Ce(P)==="pdf"),h=d.some(P=>Ce(P)==="vid"),S=a&&(p||u||h||l)?c`<button
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
          </button>`:m,k=(F=(x=this._metadataSchema)==null?void 0:x.regionalVariantsGroups)!=null&&F.length?c`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:m,R=i==="close"?c`<button
            class="header-btn header-btn-close"
            aria-label=${e("close","Close")}
            @click=${r}
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
        ${o}
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
        ${k} ${S} ${R}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const r={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,r),t(r)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,r=e.filter($=>$.status==="complete").length,o=e.filter($=>$.status==="failed"||$.status==="error").length,n=e.filter($=>$.status==="complete"&&$.alreadyExisted).length,a=Math.max(r-n,0),l=r>0&&o===0&&n>=r,d=t?o>0?"error":n>0?"warn":"done":"",p=c`<svg
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
    </svg>`,h=c`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>`,y=o>0?r>0?p:u:n>0?p:h,S=t?o>0?r>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):l?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),k=[];a>0&&k.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&k.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),o>0&&k.push(i("nFailed","{{count}} failed",{count:o}));const R=k.length>0?k.join(" · "):i("allDone","All done"),E=a+n+o;return{completed:r,failed:o,alreadyExistedCount:n,newCount:a,allAlreadyExisted:l,outcomeClass:d,outcomeIcon:y,title:S,doneSummary:R,segTotal:E,segPct:$=>E>0?`${$/E*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,r=Math.round(t.totalProgress??0),o=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:l,newCount:d,outcomeClass:p,outcomeIcon:u,title:h,doneSummary:y,segPct:S}=this._batchOutcome(e,o),k=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return c`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?c`<div class="float-collapsed-icon ${p}">${u}</div>`:c`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${h}</span>
            ${o?m:c`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${o&&k?c`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(k)}
                >
                  ${er}
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
      `;const R=e.filter(b=>b.status==="failed"||b.status==="error"),E=e.filter(b=>b.status==="complete"&&b.alreadyExisted),w=e.filter(b=>b.status!=="failed"&&b.status!=="error"&&b.status!=="complete"),$=e.filter(b=>b.status==="complete"&&!b.alreadyExisted);return c`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${p}">
              ${o?u:c`<svg
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
              <div class="float-title">${h}</div>
              <div class="float-subtitle">
                ${o?y:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Co(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${o&&k?c`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(k)}
                >
                  ${er}
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
            ${o?m:c`<span class="float-progress-pct">${r}%</span>`}
          </div>
          ${o?c`<div class="float-bar segmented" role="img" aria-label=${y}>
                ${d>0?c`<div
                      class="float-bar-seg ok"
                      ${Q({width:S(d)})}
                    ></div>`:m}
                ${l>0?c`<div
                      class="float-bar-seg dup"
                      ${Q({width:S(l)})}
                    ></div>`:m}
                ${a>0?c`<div
                      class="float-bar-seg fail"
                      ${Q({width:S(a)})}
                    ></div>`:m}
              </div>`:c`<div class="float-bar">
                <div class="float-bar-fill" ${Q({width:`${r}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${kt(R,b=>b.id,b=>this._renderFloatItem(b,i))}
          ${kt(E,b=>b.id,b=>this._renderFloatItem(b,i))}
          ${kt(w,b=>b.id,b=>this._renderFloatItem(b,i))}
          ${kt($,b=>b.id,b=>this._renderFloatItem(b,i))}
        </div>
      </div>
    `}_renderFloatItem(e,t){var r,o,n;const i=e.status==="failed"||e.status==="error";return c`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${Q(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
        >
          ${e.previewUrl?m:c`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${wt(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status==="complete"?c`${(r=this.config)!=null&&r.showLocateButton&&((n=(o=e.response)==null?void 0:o.file)!=null&&n.uuid)?c`<button
                    class="float-item-act locate"
                    title=${t("locate","Locate")}
                    aria-label=${t("locate","Locate")}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${er}
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
                      >${t("alreadyInYourLibrary","Already in your library")}</span
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
                    <span class="float-item-tooltip">${t("uploaded","Uploaded")}</span>
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
                      >${e.error||t("uploadFailed","Upload failed")}</span
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
    `}_renderPreviewLayout(e){var R,E,w,$,b,x,F,P,U;if(e.length===0)return m;const t=this._storeCtrl.state.t,i=e,r=i.find(z=>z.id===this._previewFileId)??i[0],o=((R=r.name.split(".").pop())==null?void 0:R.toUpperCase())||"";new Date(r.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((z,H)=>z+(H.size||0),0),l=!!((w=(E=this.config)==null?void 0:E.similarityCheck)!=null&&w.enabled)&&this._phase==="ready",d=l?i.filter(z=>Ce(z)==="image"&&!Ye(z.type)&&!this._similarResults.has(z.id)).map(z=>z.id):[],p=Math.min(d.length,Ke),u=p>0&&this._similarSelectedIds.size>=p,h=this._similarSelectedIds.size>=Ke,y=this._similarResults.get(r.id),S=y!==void 0,k=S?this._previewPanelTab:"details";return c`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Q({flex:String(this._splitPct)})}>
          ${(($=this.config)==null?void 0:$.mode)==="inline"&&((b=this.config)!=null&&b.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):m}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${wt(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${To(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((x=this.config)==null?void 0:x.showLocateButton)??!1}
            .showCopyCdnButton=${((F=this.config)==null?void 0:F.showCopyCdnButton)??!1}
            .showCheckSimilar=${l}
            .selectMode=${l}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${u}
            .selectionFull=${h}
            .maxSelection=${Ke}
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
        <div class="preview-panel" ${Q({flex:String(100-this._splitPct)})}>
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
                  <span class="preview-header-name" title=${r.name}
                    >${r.name}</span
                  >
                  <div class="preview-header-actions">
                    ${r.previewUrl||r.type.startsWith("video/")&&r.file?c`
                          <button
                            @click=${()=>{this._fullscreenPreviewUrl=r.previewUrl,this._fullscreenVideoFile=r.type.startsWith("video/")&&r.file?r.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
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
                ${S?c`
                      <div class="preview-tabs" role="tablist">
                        <button
                          class="preview-tab ${k==="details"?"active":""}"
                          role="tab"
                          aria-selected=${k==="details"}
                          @click=${()=>{this._previewPanelTab="details"}}
                        >
                          ${t("details","Details")}
                        </button>
                        <button
                          class="preview-tab ${k==="similar"?"active":""}"
                          role="tab"
                          aria-selected=${k==="similar"}
                          @click=${()=>{this._previewPanelTab="similar"}}
                        >
                          <span>${t("similarTab","Similar")}</span>${y&&y.length>0?c`<span class="preview-tab-count">${y.length}</span>`:m}
                        </button>
                      </div>
                    `:m}
                ${k==="similar"?this._renderSimilarPanel(r,y??[]):c`
                      <div class="preview-details-body">
                        ${r.type.startsWith("video/")&&r.file?c`
                              <div class="preview-media-area">
                                <div class="preview-img-wrap">
                                  <video
                                    class="preview-image"
                                    src=${this._getVideoBlobUrl(r.file)}
                                    controls
                                    playsinline
                                  ></video>
                                </div>
                                <button
                                  class="preview-nav prev"
                                  ?disabled=${i.indexOf(r)===0}
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
                                  ?disabled=${i.indexOf(r)===i.length-1}
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
                            `:r.previewUrl?c`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${r.previewUrl}
                                      alt=${r.name}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(r)===0}
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
                                    ?disabled=${i.indexOf(r)===i.length-1}
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
                                  <div class="preview-doc-wrap ${Ce(r)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${Or(o)}
                                      alt="${o?t("extFile","{{ext}} file",{ext:o}):t("file","File")}"
                                      @error=${z=>{const H=z.target,B=Ur();!H.dataset.fallback&&H.src!==B&&(H.dataset.fallback="1",H.src=B)}}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(r)===0}
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
                                    ?disabled=${i.indexOf(r)===i.length-1}
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
                        ${this._metadataSchema&&((P=this.config)!=null&&P.metadataConfig)?c`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${o}${r.size?` · ${wt(r.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                              </div>
                            </div>`:m}
                        ${this._metadataSchema&&((U=this.config)!=null&&U.metadataConfig)?c`
                              <div
                                class="preview-metadata"
                                @field-blur=${this._onPreviewMetadataBlur}
                                @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                              >
                                <sfx-metadata-form
                                  .schema=${this._localizedMetadataSchema}
                                  .meta=${this._previewMeta(r)}
                                  .config=${this._effectiveMetadataConfig}
                                  .autocomplete=${this._metadataAutocomplete}
                                  .taxonomyService=${this._taxonomyService}
                                  .ultratags=${this._ultratagsService}
                                  .defaultLanguage=${this._metadataDefaultLanguage}
                                  .taxonodes=${r.taxonodes??null}
                                  .resolvedSchema=${this._resolvedSchemaFor(r)}
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
                                    <div class="preview-file-info-val">${r.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${o}</div>
                                  </div>
                                  ${r.size?c`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${wt(r.size)}
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
        ${t.map(r=>{const o=Math.round(r.score*100);return c`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${r.score>=.85?"high":""}">${o}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(r.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                ${r.url?c`<img src=${r.url} alt="" />`:m}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(r)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(r)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var u;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(h=>Ce(h)==="image"&&!Ye(h.type)),r=t.some(h=>Ce(h)==="pdf"),o=t.some(h=>Ce(h)==="vid"),n=(u=this.config)==null?void 0:u.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=h=>{switch(h){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},d=h=>{switch(h){case"hls":return e("protocolHls","HLS")}},p=h=>y=>{const S=parseInt(y.target.value,10);h(Number.isFinite(S)?S:0)};return c`
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
        ${i||r?c`
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
                      @input=${p(h=>this._setMaxW=h)}
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
                      @input=${p(h=>this._setMaxH=h)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:m}
        ${o?c`
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
                        ${ou.map(h=>c`
                            <div
                              class="sopt ${h===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=h,this._setResolutionOpen=!1}}
                            >
                              ${l(h)}
                              ${h===this._setResolution?c`<svg
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
                ${nu.map(h=>c`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=h}}
                    >
                      <span class="sradio ${this._setProtocol===h?"on":""}"></span>
                      <span class="sradio-lbl">${d(h)}</span>
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
                  @click=${()=>{var h;this._setResumable=!this._setResumable,(h=this._engine)==null||h.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:m}
      </div>
    `}_navigatePreview(e,t){var o;const r=e.findIndex(n=>n.id===this._previewFileId)+t;if(r>=0&&r<e.length){const n=(o=this.shadowRoot)==null?void 0:o.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[r].id}}_renderBody(){var S,k,R,E,w,$,b,x,F,P,U,z,H;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],r=i.filter(B=>B.status==="idle"||B.status==="queued"||B.status==="error"||B.status==="failed"),o=this._phase,n=To(e.restrictions),a=i.length>0,d=!!((k=(S=this.config)==null?void 0:S.similarityCheck)!=null&&k.enabled)&&o==="ready",p=d?i.filter(B=>Ce(B)==="image"&&!Ye(B.type)&&!this._similarResults.has(B.id)).map(B=>B.id):[],u=Math.min(p.length,Ke),h=u>0&&this._similarSelectedIds.size>=u,y=this._similarSelectedIds.size>=Ke;return c`
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
        @clear-all=${this._onClearAll}
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
        <div
          class="body ${a?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${a?this._onBodyDragEnter:m}
          @dragover=${a?this._onBodyDragOver:m}
          @dragleave=${a?this._onBodyDragLeave:m}
          @drop=${a?this._onBodyDrop:m}
        >
          ${((R=this.config)==null?void 0:R.mode)==="inline"&&((E=this.config)!=null&&E.inlineHeader)&&!this._previewFileId&&o!=="uploading"&&o!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):m}
          ${this._isReviewing?c`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((w=this.config)==null?void 0:w.showLocateButton)??!1}
                  .showCopyCdnButton=${(($=this.config)==null?void 0:$.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:c`
                ${a?m:c`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((b=this.config)==null?void 0:b.sourcesLayout)??"pills"}
                        .mode=${((x=this.config)==null?void 0:x.mode)??"modal"}
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
                ${a?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):c`
                        <div class="asset-count">
                          ${i.length} ${i.length===1?"file":"files"} ·
                          ${wt(i.reduce((B,we)=>B+(we.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${o!=="uploading"&&o!=="complete"}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((F=this.config)==null?void 0:F.showLocateButton)??!1}
                          .showCopyCdnButton=${((P=this.config)==null?void 0:P.showCopyCdnButton)??!1}
                          .showCheckSimilar=${d}
                          .selectMode=${d}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${h}
                          .selectionFull=${y}
                          .maxSelection=${Ke}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:m}
              `}
        </div>

        ${a?c`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${o==="uploading"?"uploading":o==="complete"?"done":"idle"}
                .fileCount=${o==="uploading"||o==="complete"?i.filter(B=>B.status!=="rejected"&&B.status!=="cancelled").length:r.length}
                .failedCount=${i.filter(B=>B.status==="failed"||B.status==="error").length}
                .showFillMetadata=${!!(((U=this.config)==null?void 0:U.showFillMetadata)??((z=this.config)==null?void 0:z.metadataConfig))}
                .requireMetadataFirst=${o==="ready"?this._hasMetadataIssues:!1}
                .showCheckSimilar=${!1}
                .selectMode=${d&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${u}
                .allSelected=${h}
              ></sfx-actions-bar>
            `:m}
        ${this._showUrlDialog?c`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:m}
        ${this._showCameraDialog?c`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:m}
        ${this._showScreenCastDialog?c`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:m}
        ${this._activeConnector&&((H=this.config)!=null&&H.connectors)?c`
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
                      `:Lo.has(this._activeConnector)?c`
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
                .schema=${this._localizedMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(B=>W._MODIFIABLE_STATUSES.has(B.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:m}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);if(i===-1)return;const r=i+e;if(r>=0&&r<t.length){const o=t[r];this._fullscreenPreviewUrl=o.previewUrl,this._fullscreenVideoFile=o.type.startsWith("video/")&&o.file?o.file:null,this._previewFileId=o.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},W.styles=j`
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
        height: 96vh;
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
  `,W._FS_ZOOM_LEVELS=[1,2,3,4],W._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),W._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),W);N([f({attribute:!1})],M.prototype,"config");N([C()],M.prototype,"_isOpen");N([C()],M.prototype,"_activeConnector");N([C()],M.prototype,"_showUrlDialog");N([C()],M.prototype,"_showCameraDialog");N([C()],M.prototype,"_showScreenCastDialog");N([C()],M.prototype,"_similarSelectMode");N([C()],M.prototype,"_similarSelectedIds");N([C()],M.prototype,"_similarRunIds");N([C()],M.prototype,"_similarActiveIds");N([C()],M.prototype,"_similarResults");N([C()],M.prototype,"_previewPanelTab");N([C()],M.prototype,"_previewFileId");N([C()],M.prototype,"_previewDims");N([C()],M.prototype,"_fileInfoOpen");N([C()],M.prototype,"_splitPct");N([C()],M.prototype,"_showSettings");N([C()],M.prototype,"_setResize");N([C()],M.prototype,"_setMaxW");N([C()],M.prototype,"_setMaxH");N([C()],M.prototype,"_setTranscode");N([C()],M.prototype,"_setResolution");N([C()],M.prototype,"_setResolutionOpen");N([C()],M.prototype,"_setProtocol");N([C()],M.prototype,"_setResumable");N([C()],M.prototype,"_fullscreenPreviewUrl");N([C()],M.prototype,"_fullscreenVideoFile");N([C()],M.prototype,"_fsZoom");N([C()],M.prototype,"_bodyDragOver");N([C()],M.prototype,"_isMinimized");N([C()],M.prototype,"_isPillExpanded");N([C()],M.prototype,"_metadataSchema");N([C()],M.prototype,"_metadataTranslations");N([C()],M.prototype,"_metadataDependencies");N([C()],M.prototype,"_regionalFilters");N([C()],M.prototype,"_bulkMetadataOpen");N([C()],M.prototype,"_bulkMetadataInitialFieldKey");N([C()],M.prototype,"_isReviewing");N([C()],M.prototype,"_reviewFiles");N([C()],M.prototype,"_hasStoredReview");let au=M;const ze=(s,e)=>{typeof customElements<"u"&&!customElements.get(s)&&customElements.define(s,e)};ze("sfx-uploader",au);ze("sfx-drop-zone",Yp);ze("sfx-import-divider",Ar);ze("sfx-source-pills",Zt);ze("sfx-file-list",Y);ze("sfx-file-item",Z);ze("sfx-actions-bar",ve);ze("sfx-url-dialog",gt);ze("sfx-camera-dialog",tt);ze("sfx-screen-cast-dialog",qe);const wu=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{ii as $,Wr as A,pu as B,qa as C,ja as D,hu as E,Nn as F,el as G,uu as H,Ue as I,jr as J,Ua as K,mu as L,Mi as M,Oe as N,Di as O,pt as P,qt as Q,ki as R,Qe as S,Gr as T,du as U,qr as V,Mr as W,Hr as X,lr as Y,vr as Z,Ca as _,vu as a,Ma as a0,cu as a1,Va as a2,Fa as a3,Il as a4,Ho as a5,Br as a6,Vs as a7,ar as a8,Vr as a9,oi as aa,Zo as ab,Rt as ac,gu as ad,Na as ae,dr as af,dt as ag,St as ah,Ri as ai,Go as aj,va as ak,T as al,Yr as am,an,Ko as ao,La as ap,za as aq,wu as ar,at as b,yu as c,Dl as d,Ml as e,ct as f,vp as g,Vo as h,wa as i,$a as j,qs as k,bu as l,Ns as m,Sa as n,ka as o,ya as p,tl as q,Ta as r,xu as s,ma as t,Nr as u,fu as v,Hs as w,Ra as x,Pi as y,Ol as z};
