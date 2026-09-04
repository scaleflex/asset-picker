const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/google-picker-view-BhKjBTtL.js","assets/decorate-DzwBp3n0.js","assets/index-DEo6o-Qa.js","assets/thumbnail-Bqk5FnPO.js","assets/directive-BSZPiF1A.js","assets/index-Bk3B7mUx.css","assets/brand-icon-Bf8LJEW8.js","assets/provider-registry-96Csod9w.js","assets/search-provider-browser-BQ-0VklP.js","assets/companion-client-Cmfc-04q.js","assets/provider-browser-WZG-qdDy.js","assets/src-2AAqCogB.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./decorate-DzwBp3n0.js";import{a as f,i as p,n as m,r as h,t as g}from"./thumbnail-Bqk5FnPO.js";import{n as _,r as v,t as y}from"./directive-BSZPiF1A.js";import{a as b,i as x,n as S,o as C,r as w}from"./index-DEo6o-Qa.js";import{n as T,r as ee,t as E}from"./brand-icon-Bf8LJEW8.js";import{t as te}from"./provider-registry-96Csod9w.js";import{d as ne,i as re,n as ie,u as ae}from"./companion-client-Cmfc-04q.js";var oe=Object.create,se=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,le=Object.getOwnPropertyNames,ue=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty,fe=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),pe=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=le(t),a=0,o=i.length,s;a<o;a++)s=i[a],!de.call(e,s)&&s!==n&&se(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=ce(t,s))||r.enumerable});return e},me=(e,t,n)=>(n=e==null?{}:oe(ue(e)),pe(t||!e||!e.__esModule||!de.call(e,`default`)?se(n,`default`,{value:e,enumerable:!0}):n,e));function he(e){if(e==null||!Number.isFinite(e)||e<0)return`—`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=e,r=0;for(;n>=1024&&r<t.length-1;)n/=1024,r++;let i=(e,t)=>{let n=+(t>0&&Math.round(e*10)/10<10),r=e.toFixed(n);return{str:r,rounded:Number(r)}},a=i(n,r),o=a.str;return a.rounded>=1024&&r<t.length-1&&(n/=1024,r++,o=i(n,r).str),`${o} ${t[r]}`}var ge=`f7b2366e-fcb6-4f1a-8f23-8de48422989a`,_e=`https://i18n-fastly.ultrafast.io`,ve=`https://neo.wordplex.io`,ye=`uploader`,be=C({gridUuid:ge,namespace:ye,cdnUrl:_e}),xe=be.initI18n;be.getInstance,be.onChange;var Se=be.t,Ce=be.I18nController,we=p({lsKey:`sfxUploaderTranslationsMissingKeysEnabled`,namespace:ye,gridUuid:ge,prodUrl:ve,logPrefix:`[uploader]`}),{I:Te}=d,Ee=e=>e,De=e=>e.strings===void 0,Oe=()=>document.createComment(``),ke=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Te(r.insertBefore(Oe(),i),r.insertBefore(Oe(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Ee(e).nextSibling;Ee(r).insertBefore(e,i),e=t}}}return n},Ae=(e,t,n=e)=>(e._$AI(t,n),e),je={},Me=(e,t=je)=>e._$AH=t,Ne=e=>e._$AH,Pe=e=>{e._$AR(),e._$AA.remove()},Fe=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Ie=y(class extends _{constructor(e){if(super(e),e.type!==v.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[n,r,i]){let a=Ne(e),{values:o,keys:s}=this.dt(n,r,i);if(!Array.isArray(a))return this.ut=s,o;let c=this.ut??=[],l=[],u,d,f=0,p=a.length-1,m=0,h=o.length-1;for(;f<=p&&m<=h;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(c[f]===s[m])l[m]=Ae(a[f],o[m]),f++,m++;else if(c[p]===s[h])l[h]=Ae(a[p],o[h]),p--,h--;else if(c[f]===s[h])l[h]=Ae(a[f],o[h]),ke(e,l[h+1],a[f]),f++,h--;else if(c[p]===s[m])l[m]=Ae(a[p],o[m]),ke(e,a[f],a[p]),p--,m++;else if(u===void 0&&(u=Fe(s,m,h),d=Fe(c,f,p)),u.has(c[f]))if(u.has(c[p])){let t=d.get(s[m]),n=t===void 0?null:a[t];if(n===null){let t=ke(e,a[f]);Ae(t,o[m]),l[m]=t}else l[m]=Ae(n,o[m]),ke(e,a[f],n),a[t]=null;m++}else Pe(a[p]),p--;else Pe(a[f]),f++;for(;m<=h;){let t=ke(e,l[h+1]);Ae(t,o[m]),l[m++]=t}for(;f<=p;){let e=a[f++];e!==null&&Pe(e)}return this.ut=s,Me(e,l),t}});function Le(e,t){let n=t?.getLocateUrl?.(e);if(n)return n;let r=t?.adminUrl??(typeof window<`u`?window.location.origin:void 0);if(!r)return null;let i=e.response?.file?.uuid;return i?`${r.replace(/\/+$/,``)}/library?lf=${encodeURIComponent(btoa(i))}`:null}var Re=n`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,ze=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${Re}
</svg>`,Be=n`<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />`,Ve=n`<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />`,He=`(hover: none) and (pointer: coarse)`,Ue=new Map,We;function Ge(e){if(typeof window>`u`||typeof window.matchMedia!=`function`)return null;We!==window.matchMedia&&(We=window.matchMedia,Ue=new Map);let t=Ue.get(e);if(t!==void 0)return t;let n;try{n=window.matchMedia(e)}catch{n=null}return Ue.set(e,n),n}function D(){return Ge(He)?.matches??!1}var Ke;function qe(){return typeof document>`u`||D()?!1:(Ke===void 0&&(Ke=`webkitdirectory`in document.createElement(`input`)),Ke)}function Je(){return typeof navigator>`u`||D()?!1:typeof navigator.mediaDevices?.getDisplayMedia==`function`}function Ye(){return D()?!0:typeof navigator>`u`?!1:typeof navigator.mediaDevices?.getUserMedia==`function`}function Xe(){return Ge(`(prefers-reduced-motion: reduce)`)?.matches??!1}function Ze(e){let t=Ge(He);if(!t)return()=>{};let n=()=>e();return typeof t.addEventListener==`function`?(t.addEventListener(`change`,n),()=>t.removeEventListener(`change`,n)):typeof t.addListener==`function`?(t.addListener(n),()=>t.removeListener(n)):()=>{}}var Qe=new Set,O=null;function $e(e){if(typeof document>`u`||!document.body||(Qe.add(e),O))return;let t=document.body,n=document.documentElement,r=window.scrollY||n.scrollTop||0;O={scrollY:r,overflow:t.style.overflow,position:t.style.position,top:t.style.top,left:t.style.left,right:t.style.right,paddingRight:t.style.paddingRight,scrollBehavior:n.style.scrollBehavior};let i=n.clientWidth||0,a=i>0?Math.max(0,(window.innerWidth||0)-i):0;if(t.style.position=`fixed`,t.style.top=`-${r}px`,t.style.left=`0`,t.style.right=`0`,t.style.overflow=`hidden`,a>0){let e=parseFloat(getComputedStyle(t).paddingRight)||0;t.style.paddingRight=`${e+a}px`}}function et(e){if(Qe.delete(e),Qe.size>0||!O)return;if(typeof document>`u`||!document.body){O=null;return}let t=document.body,n=document.documentElement,{scrollY:r}=O;if(t.style.overflow=O.overflow,t.style.position=O.position,t.style.top=O.top,t.style.left=O.left,t.style.right=O.right,t.style.paddingRight=O.paddingRight,r>0){n.style.scrollBehavior=`auto`;try{window.scrollTo(0,r)}catch{}n.style.scrollBehavior=O.scrollBehavior}O=null}var tt=class{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}let t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(e=>e(this.state,t))}finally{this._notifying=!1}if(this._pendingState){let e=this._pendingState;this._pendingState=null,this.setState(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}};function k(e,t,n){let r=e.getState().files,i=r.get(t);if(!i)return;let a=new Map(r);a.set(t,{...i,...n}),e.setState({files:a})}function nt(e,t){let n=new Map(e.getState().files);n.set(t.id,t),e.setState({files:n})}function rt(e,t){let n=e.getState().files;if(!n.has(t))return;let r=new Map(n);r.delete(t),e.setState({files:r})}function it(){return new tt({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},namingConvention:{regex:null,broken:!1},targetFolder:`/`,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:o})}var at=class{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}};function ot(e){return e?.code===`SAME_ASSET_EXISTS_SKIP_UPLOAD`||e?.code===`ERROR_SHA1_CONFLICT`}function st(e,t){return{...e,status:`success`,file:e.file??{uuid:e.existing_file_uuid??``,name:t.name,extension:t.name.split(`.`).pop()??``,type:t.type,size:t.size,url:{public:``,cdn:``},meta:{},tags:[],info:{},created_at:``,modified_at:``}}}function ct(e,t){return e?.info?.msg?.trim()||e?.msg?.trim()||e?.hint?.trim()||e?.message?.trim()||t}function lt(e,t,n=!1){let r=t?.language??`en`,i=e.model??[],a=e.store??{},o=i.find(e=>e.applies_to===`FILES`)?.groups??[];if(Array.isArray(t?.fields)){let e=new Set(t.fields);o=o.map(t=>({...t,fields:t.fields.filter(t=>e.has(t.ckey))})).filter(e=>e.fields.length>0)}o=o.map(e=>({...e,fields:e.fields.filter(e=>!e.hide)})).filter(e=>e.fields.length>0);let s=o.flatMap(e=>e.fields),c=new Map(s.map(e=>[e.key,e])),l=typeof a.force_filling_metadata_on_upload==`boolean`?a.force_filling_metadata_on_upload:void 0,u=a.regional_variants_groups??[];return{groups:o,fields:s,fieldsByKey:c,forceFillingOnUpload:l,regionalVariantsGroups:u,language:r,productsEnabled:n}}var ut=`https://hub.scaleflex.com/api`,dt=`The Hub API uses session-based auth (not the Filerobot SASS key); pass metadataConfig.hubHeaders with x-company-token, x-project-token and x-session-token. If the session token arrives asynchronously, assign a new config object once it is available — in-place mutation is not detected.`,ft=e=>e.replace(/\/+$/,``);function pt(e){return!e||ft(e)===`https://hub.scaleflex.com/api`}function mt(e){let t=e?.hubHeaders;return t&&Object.keys(t).length>0?t:void 0}function ht(e){return Object.keys(e).some(e=>e.toLowerCase()===`x-session-token`)}function gt(e){return mt(e)?!0:!pt(e?.hubApiBase)}var _t=new Map,vt=new Map,yt=new Set,bt=`/v5/settings`,xt=e=>e.replace(/\/+$/,``);function St(e){return e===!0||e===1||e===`1`}function Ct(e,t,n){return`${e??``}|${t}|${n}`}function wt(e,t){if(!e)return _t.get(Ct(void 0,`settings`,t));let n=`${e}|`;for(let[e,t]of _t)if(e.startsWith(n))return t}function Tt(e,t=``){return wt(e,xt(t))!==void 0}function Et(e){return(e?.schemaSource??`auto`)!==`hub`}async function Dt(e,t,n,r){if(r?.rawMetadata)return lt(r.rawMetadata,r,r.productsEnabled===!0);let i=xt(e),a=xt(r?.hubApiBase??`https://hub.scaleflex.com/api`),o;try{o=Ot(i,r)}catch(e){let t=wt(n,i);if(t)return t;throw e}let s=e=>e===`hub`?a:i,c=Ct(n,o,s(o)),l=_t.get(c);if(l)return l;let u=vt.get(c);if(u)return u;let d=kt(o,i,t,n,r).then(e=>(_t.set(Ct(n,e.source,s(e.source)),e.schema),e.schema));vt.set(c,d);try{return await d}finally{vt.delete(c)}}function Ot(e,t){let n=t?.schemaSource??`auto`;if(n===`settings`){if(!e)throw Error(`Cannot fetch the metadata schema from ${bt}: no Filerobot API base is configured.`);return`settings`}let r=!!t?.projectUuid;if(r&&gt(t))return`hub`;if(n===`hub`)throw Error(r?`Cannot fetch the metadata schema: no Hub session headers, and schemaSource is 'hub'. Drop schemaSource to load the schema from ${bt} instead. ${dt}`:`Cannot fetch the metadata schema: schemaSource is 'hub' but no projectUuid is set, and the Hub addresses projects by uuid. Set metadataConfig.projectUuid, or drop schemaSource to load the schema from ${bt} instead.`);if(!e)throw Error(`Cannot fetch the metadata schema: no Hub session headers, and no Filerobot API base for the ${bt} fallback. ${dt}`);return`settings`}async function kt(e,t,n,r,i){if(e===`settings`)return{schema:await jt(t,n,i),source:e};if(!r)throw Error(`Cannot fetch the metadata schema from the Hub without a projectUuid.`);try{return{schema:await At(n,r,i),source:`hub`}}catch(e){if(!((i?.schemaSource??`auto`)===`auto`&&t))throw e;return yt.has(r)||(yt.add(r),console.warn(`[dam-metadata] Hub schema fetch failed — falling back to ${bt}. Dependency rules stay disabled until the Hub is reachable again.`,e)),{schema:await jt(t,n,i),source:`settings`}}}async function At(e,t,n){let r=xt(n?.hubApiBase??`https://hub.scaleflex.com/api`),i=`${r}/project/${encodeURIComponent(t)}`,a=mt(n)??e;if(pt(r)&&!ht(a))throw Error(`Cannot fetch the metadata schema: no Hub session headers. ${dt}`);let o=await fetch(i,{headers:a});if(!o.ok)throw Error(`Failed to fetch metadata schema (HTTP ${o.status})`);let s=await o.json(),c=s.data?.project?.data??s.project?.data;if(!c?.metadata)throw Error(`No metadata in project response`);let l=n?.productsEnabled??c?.airstore?.ui?.products_enabled===!0;return lt(c.metadata,n,l)}async function jt(e,t,n){let r=await fetch(`${e}${bt}`,{headers:t});if(!r.ok)throw Error(`Failed to fetch metadata schema from ${bt} (HTTP ${r.status})`);let i=await r.json();if(!i.metadata?.model)throw Error(`No metadata model in the ${bt} response`);let a=n?.productsEnabled??St(i.settings?._products_enabled);return lt(i.metadata,n,a)}var Mt=new Set([`image`,`video`,`audio`,`document`,`archive`,`design_template`]);function Nt(e){if(!e||Array.isArray(e))return[];let t=e.format_mimetypes;return Array.isArray(t)?t.filter(e=>Mt.has(e)):[]}function Pt(e){let t={type:e.dep_action_type,targetCkey:e.dep_action_target_metadata_or_group_sys_key,targetFieldType:e.dep_action_target_metadata_field_type_key};return e.dep_action_type===`allow_values`&&(t.allowedValues=e.dep_action_target_field_allowed_values_sys_keys??[]),e.dep_action_type===`set_values`&&(t.setValues=e.dep_action_target_field_set_values_sys_keys??e.dep_action_target_field_allowed_set_sys_keys??[]),t}function Ft(e){let t=e.dep_metadata_trigger_values_sys_keys??e.dep_metadata_trigger_values??[];return{uuid:e.dep_uuid,name:e.dep_name,description:e.dep_description,active:e.dep_active,formatMimetypes:Nt(e.dep_scope),triggerCkey:e.dep_metadata_trigger_sys_key,triggerFieldType:e.dep_metadata_trigger_field_type_key,triggerCondition:e.dep_metadata_trigger_condition_key,triggerValues:t,actions:(e.dep_actions??[]).map(Pt)}}function It(e){if(!e)return[];let t=Array.isArray(e)?e:e.dependencies;return Array.isArray(t)?t.filter(e=>e?.dep_active).map(Ft):[]}var Lt=new Set([`application/zip`,`application/x-zip-compressed`,`application/vnd.rar`,`application/x-rar-compressed`]);function Rt(e){let t=new Set;if(!e)return t;let n=e.toLowerCase(),[r]=n.split(`/`);return r===`image`?t.add(`image`):r===`video`?t.add(`video`):r===`audio`?t.add(`audio`):r===`application`&&t.add(`document`),Lt.has(n)&&t.add(`archive`),t}function zt(e,t){if(e.formatMimetypes.length===0)return!0;let n=Rt(t);return e.formatMimetypes.some(e=>n.has(e))}function Bt(e){return e==null?!0:Array.isArray(e)||typeof e==`string`?e.length===0:!1}function Vt(e){return typeof e==`boolean`?e:e===`true`||e!==`false`&&null}function Ht(e){return e==null?[]:Array.isArray(e)?e.map(String):[String(e)]}function Ut(e,t){if(e.length!==t.length)return!1;let n=new Set(e);for(let e of t)if(!n.has(e))return!1;return!0}function Wt(e,t){if(e.length===0||t.length===0)return!1;let n=new Set(e);for(let e of t)if(n.has(e))return!0;return!1}function Gt(e,t){let n=t[e.triggerCkey],r=e.triggerValues;switch(e.triggerCondition){case`is_true`:return Vt(n)===!0;case`is_false`:return Vt(n)===!1;case`is_empty`:return Bt(n);case`is_not_empty`:return!Bt(n);case`is_in`:return Wt(Ht(n),r);case`is_not_in`:return Bt(n)?!0:!Wt(Ht(n),r);case`is`:return Ut(Ht(n),r);case`is_not`:return!Ut(Ht(n),r);default:return!1}}function Kt(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function qt(e,t){let n=e.get(t);return n||(n=Kt(),e.set(t,n)),n}function Jt(e,t){if(e.length===0||t.length===0)return[];let n=new Set(e);return t.filter(e=>n.has(e))}function Yt(e,t){e.contributingDependencyUuids.includes(t)||e.contributingDependencyUuids.push(t)}function Xt(e,t,n){let r=qt(e,n.targetCkey);switch(Yt(r,t.uuid),n.type){case`hide`:r.hidden=!0;break;case`show`:r.shown=!0;break;case`require`:r.required=!0;break;case`allow_values`:{let e=n.allowedValues??[];r.allowedValues=r.allowedValues===void 0?[...e]:Jt(r.allowedValues,e);break}case`set_values`:{let e=n.setValues??[];if(e.length===0)break;r.setValue===void 0&&(r.setValue=e.length===1?e[0]:e);break}default:n.type}}function Zt(e,t){for(let n of t.actions)Xt(e,t,n)}function Qt(e,t){let n=new Map;for(let r of t)r.active&&zt(r,e.mime)&&Gt(r,e.meta)&&Zt(n,r);return n}function $t(e,t,n){let r={},i=new Set;for(let n of t.fields)i.add(n.ckey),n.key in e.meta&&(r[n.ckey]=e.meta[n.key]);let a=n.filter(e=>i.has(e.triggerCkey)),o=Qt({mime:e.mime,meta:r},a);for(let e of t.groups){let t=e.ckey?o.get(e.ckey):void 0;if(t?.hidden)for(let n of e.fields){let e=o.get(n.ckey);if(e){e.hidden=!0;for(let n of t.contributingDependencyUuids)e.contributingDependencyUuids.includes(n)||e.contributingDependencyUuids.push(n)}else o.set(n.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...t.contributingDependencyUuids]})}}return o}function en(e,t){let n=Array.isArray(t)?t:[t];switch(e.type){case`boolean`:{let e=n[0];return e===`true`||e!==`false`&&null}case`select-one`:return n[0]??null;case`multi-select`:return n.length>0?n:null;default:return n.length===1?n[0]:n}}function tn(e,t,n){return!!(n.get(e.ckey)?.hidden||t?.ckey&&n.get(t.ckey)?.hidden)}function nn(e,t,n){return n?!!(n.get(e.ckey)?.shown||t?.ckey&&n.get(t.ckey)?.shown):!1}function rn(e,t,n){if(n.size===0)return e;let r=null;for(let i of t.groups)for(let t of i.fields)tn(t,i,n)&&t.key in e&&(r||={...e},delete r[t.key]);return r??e}function an(e){return e==null?[]:Array.isArray(e)?e.map(String):[String(e)]}function on(e,t){if(e.length!==t.length)return!1;let n=new Set(e);for(let e of t)if(!n.has(e))return!1;return!0}function sn(e,t){let n=[];for(let[r,i]of t){if(i.hidden)continue;let t=an(e[r]);if(t.length!==0){if(i.allowedValues!==void 0){let e=new Set(i.allowedValues),a=t.filter(t=>!e.has(t));a.length>0&&n.push({ckey:r,kind:`allow_values`,conflictingValues:a,dependencyUuids:[...i.contributingDependencyUuids]})}i.setValue!==void 0&&(on(t,Array.isArray(i.setValue)?i.setValue:[i.setValue])||n.push({ckey:r,kind:`set_values`,conflictingValues:t,dependencyUuids:[...i.contributingDependencyUuids]}))}}return n}function cn(e,t,n){if(e.length===0||n.length===0)return new Map;let r=e.map(e=>$t({mime:e.mime,meta:e.meta},t,n)),i=new Map,a=new Set;for(let e of r)for(let t of e.keys())a.add(t);for(let t of a){let n=r.map(e=>e.get(t)),a=n.every(e=>e?.hidden===!0),o=n.some(e=>e?.shown===!0),s=n.some(e=>e?.required===!0),c;if(n.every(e=>Array.isArray(e?.allowedValues))){let e;for(let t of n){let n=t.allowedValues;if(e=e===void 0?[...n]:e.filter(e=>n.includes(e)),e.length===0)break}c=e}let l,u=n.map(e=>e?.setValue).filter(e=>e!==void 0);u.length===e.length&&ln(u)&&(l=u[0]);let d=new Set;for(let e of n)if(e)for(let t of e.contributingDependencyUuids)d.add(t);let f={hidden:a,required:s,contributingDependencyUuids:[...d]};o&&(f.shown=!0),c!==void 0&&(f.allowedValues=c),l!==void 0&&(f.setValue=l),i.set(t,f)}return i}function ln(e){if(e.length<=1)return!0;let t=e[0];if(typeof t==`string`)return e.every(e=>e===t);let n=new Set(t);return e.every(e=>{if(!Array.isArray(e)||e.length!==t.length)return!1;for(let t of e)if(!n.has(t))return!1;return!0})}var un=new Map,dn=new Map;function fn(e){return un.has(e)}async function pn(e,t,n){let r=un.get(e);if(r)return r;let i=dn.get(e);if(i)return i;let a=mn(t,n);dn.set(e,a);try{let t=await a;return un.set(e,t),t}finally{dn.delete(e)}}async function mn(e,t){let n=t?.hubApiBase??`https://hub.scaleflex.com/api`,r=`${n}/metadata/dependencies`,i=mt(t)??e;if(pt(n)&&!ht(i))throw Error(`Cannot fetch metadata dependencies: no Hub session headers. ${dt}`);let a=await fetch(r,{headers:i});if(!a.ok)throw Error(`Failed to fetch metadata dependencies (HTTP ${a.status})`);return It(await a.json())}var hn=new Set([`asset-attachments`,`attachments-assets`,`integer-list`]),gn=new Set([`face_matcher`]);function _n(e){return hn.has(e)}function vn(e){return hn.has(e.type)||gn.has(e.ckey)}function yn(e){if(e==null||e===``)return null;let t=Number(e);return!Number.isFinite(t)||t<0||t>100?null:t}var bn=`regvar:api`,xn={CREATE_ONLY:`create_only`,UPSERT:`upsert`},Sn=e=>typeof e==`string`&&e.startsWith(`#ut`),Cn=e=>`~${e.toUpperCase()}`,wn=(e,t)=>{if(!(!e||!t))return e[t]??e[Cn(t)]},Tn=(e,t,n)=>{let r=e.i18n?.[t];if(r)return{value:r,isFallback:!1,sourceLang:t};let i=e.i18n?.[Cn(t)];if(i)return{value:i,isFallback:!0,sourceLang:Cn(t)};let a=wn(e.i18n,n);return a?{value:a,isFallback:!0,sourceLang:e.i18n?.[n]?n:Cn(n)}:{value:``,isFallback:!1,sourceLang:null}},En=e=>(typeof e==`string`?e:``).toLowerCase().trim().replace(/[^\d\w]/g,`_`).replace(/[\s]/g,`_`).replace(/[_]{2,}/g,`_`).replace(/[_]*$/g,``).replace(/^[_]*/g,``),Dn=e=>{let t={},n={};for(let r of e||[])r.sid&&(t[r.sid]=r),r.slug&&(n[r.slug]=r);return{bySid:t,bySlug:n}},On=(e,t)=>({bySid:{...e.bySid,...t.bySid},bySlug:{...e.bySlug,...t.bySlug}}),kn=e=>{let t=[],n=new Map,r=e=>e.sid||e.slug||``,i=(e,i)=>{if(typeof e==`string`){if(!e||n.has(e))return;n.set(e,t.length),t.push({slug:e});return}if(!e||typeof e!=`object`)return;let a=e,o=r(a);if(!o)return;let s=n.get(o),c=s===void 0?{}:{...t[s]};a.slug&&(c.slug=a.slug),a.sid&&(c.sid=a.sid),a.uuid&&(c.uuid=a.uuid);let l={...c.i18n,...a.i18n||{}};i&&a.label&&(l[i]=a.label),Object.keys(l).length>0&&(c.i18n=l),s===void 0?(n.set(o,t.length),a.slug&&a.slug!==o&&n.set(a.slug,t.length),t.push(c)):t[s]=c};if(Array.isArray(e))for(let t of e)i(t);else if(e&&typeof e==`object`){let t=e;for(let[e,n]of Object.entries(t))if(Array.isArray(n))for(let t of n)i(t,e)}return t},An=e=>typeof e==`string`?[e]:!e||typeof e!=`object`?[]:[e.sid,e.slug,e.uuid].filter(Boolean),jn=(e,t,n)=>{if(n){let n=new Set(t.flatMap(An));return e.filter(e=>!An(e).some(e=>n.has(e)))}let r=new Set(e.flatMap(An)),i=t.filter(e=>!An(e).some(e=>r.has(e)));return[...e,...i]},Mn=(e,t)=>e.map(e=>{let n=e.sid&&t.bySid[e.sid]||e.slug&&t.bySlug[e.slug]||void 0;return n?{slug:e.slug||n.slug,sid:e.sid||n.sid,uuid:e.uuid||n.uuid,i18n:{...n.i18n||{},...e.i18n||{}}}:e});function Nn(e,t,n){let r=t;switch(e.regional_variants_group_uuid&&typeof r==`object`&&r&&!Array.isArray(r)&&(r=r[n??`en`]),e.type){case`geopoint`:return Fn(r);case`focus-point`:return In(r);case`boolean`:return r===!0?`true`:r===!1?`false`:`null`;case`date`:return r?new Date(r):null;case`decimal2`:return r==null?``:String(r);case`tags`:return Array.isArray(r)?r.map(e=>typeof e==`string`?{value:e,label:e}:e):[];case`ultratags`:return kn(t);case`multi-select`:return r||[];default:return r??``}}function Pn(e,t,n,r){let i;switch(e.type){case`geopoint`:{let e=t;i=!e||e.latitude===``||e.latitude==null||e.longitude===``||e.longitude==null?null:`(${e.latitude},${e.longitude})`;break}case`focus-point`:{let e=t,n=e=>{if(e==null||e===``)return;let t=Number(e);return Number.isFinite(t)?Number(t.toFixed(2)):void 0},r=n(e?.horizontal),a=n(e?.vertical);i=r===void 0||a===void 0?null:`${r},${a}`;break}case`boolean`:i=t===`true`||t!==`false`&&null;break;case`date`:if(!t)i=null;else{let e=t instanceof Date?t:new Date(t);i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}break;case`tags`:i=Array.isArray(t)?t.map(e=>e?.label??``):[];break;case`ultratags`:i=Array.isArray(t)?t.map(e=>typeof e==`string`?e:e.slug).filter(e=>!!e):[];break;case`select-one`:i=t===``?null:t;break;case`numeric`:{if(t===``||t==null){i=null;break}let e=Number(t);i=Number.isFinite(e)?Math.round(e):null;break}case`decimal2`:{if(t===``||t==null){i=null;break}let e=Number(t);i=Number.isFinite(e)?e:null;break}default:i=t}if(e.regional_variants_group_uuid&&e.type!==`ultratags`){let t=r??`en`;return{...n?.meta?.[e.key]??{},[t]:i}}return i}function Fn(e){if(typeof e==`string`){let t=/\(([^)]+)\)/.exec(e);if(t){let e=t[1].split(`,`);if(e.length===2)return{latitude:e[0].trim(),longitude:e[1].trim()}}}return{latitude:``,longitude:``}}function In(e){if(typeof e==`string`&&e!==``){let t=(/\(([^)]+)\)/.exec(e)?.[1]??e).split(`,`);if(t.length===2)return{horizontal:t[0].trim(),vertical:t[1].trim()}}if(typeof e==`object`&&e){let t=e;return{horizontal:t.horizontal??``,vertical:t.vertical??``}}return{horizontal:``,vertical:``}}var Ln=`product.ref`,Rn=`product.position`,zn=`__product__`,Bn=new Set([Ln,Rn]);function Vn(e){return Bn.has(e)}function Hn(e){return e===`product.ref`?`ref`:e===`product.position`?`position`:null}function Un(e){return[{key:Ln,ckey:Ln,uuid:`product-ref`,title:e(`productRefLabel`,`Product reference`),type:`text`,placeholder:e(`productRefPlaceholder`,`e.g. SKU-12345`),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:Rn,ckey:Rn,uuid:`product-position`,title:e(`productPositionLabel`,`Position`),type:`numeric`,placeholder:e(`productPositionPlaceholder`,`0`),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Wn(e){return{uuid:zn,isRoot:!1,name:e(`productFieldsLabel`,`Product`),fields:Un(e)}}function Gn(e,t){let n=Wn(t),r=-1;for(let t=0;t<e.groups.length;t++)e.groups[t].isRoot&&(r=t);let i=r+1,a=[...e.groups.slice(0,i),n,...e.groups.slice(i)],o=a.flatMap(e=>e.fields),s=new Map(o.map(e=>[e.key,e]));return{...e,groups:a,fields:o,fieldsByKey:s}}var Kn=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function qn(e){return e==null||e===``?null:typeof e!=`string`||Kn.test(e)?`productRefInvalid`:null}function Jn(e){if(e==null||e===``)return null;let t=typeof e==`number`?e:Number(e);return!Number.isFinite(t)||!Number.isInteger(t)?`productPositionInvalid`:null}function Yn(e){return e?e.ref!=null&&e.ref!==``||e.position!=null:!1}function Xn(e){let t={};return e?.ref!=null&&e.ref!==``&&(t.ref=e.ref),e?.position!=null&&(t.position=e.position),t}function Zn(e,t){let n={...e??{}};for(let e of Object.keys(t)){let r=t[e];r===void 0?delete n[e]:n[e]=r}return n}function Qn(e,t,n){if((n?.requiredFields?.includes(e.ckey)||e.required)&&A(t))return`${e.title} is required`;if(A(t))return null;if(e.key===`product.ref`)return typeof t!=`string`||Kn.test(t)?`Reference contains invalid characters`:null;if(e.key===`product.position`){let e=Number(t);return!Number.isFinite(e)||!Number.isInteger(e)?`Position must be an integer`:null}switch(e.type){case`numeric`:{let e=Number(t);if(!Number.isFinite(e))return`Must be a valid number`;if(!Number.isInteger(e))return`Must be an integer`;if(e<-1999999999||e>1999999999)return`Value out of range (±1,999,999,999)`;break}case`decimal2`:{let e=Number(t);if(!Number.isFinite(e))return`Must be a valid number`;if(!/^\-?\d*\.?\d{0,2}$/.test(String(t)))return`Maximum 2 decimal places`;if(e<-9999999999.99||e>9999999999.99)return`Value out of range (±9,999,999,999.99)`;break}case`geopoint`:{let e=t,n=e.latitude!==``&&e.latitude!=null,r=e.longitude!==``&&e.longitude!=null;if(n!==r)return`Both latitude and longitude are required`;if(n&&r){let t=Number(e.latitude),n=Number(e.longitude);if(!Number.isFinite(t)||t<-90||t>90)return`Latitude must be between -90 and 90`;if(!Number.isFinite(n)||n<-180||n>180)return`Longitude must be between -180 and 180`}break}case`focus-point`:{let e=t,n=e.horizontal!==``&&e.horizontal!=null,r=e.vertical!==``&&e.vertical!=null;if(n!==r)return`Both horizontal and vertical are required`;if(n&&r){for(let t of[e.horizontal,e.vertical])if(yn(t)===null)return`Focus point must be between 0 and 100`}break}case`attachment-uri`:try{let e=new URL(t);if(![`http:`,`https:`].includes(e.protocol))return`Only http and https URLs are allowed`}catch{return`Invalid URI`}}if(e.validation&&typeof t==`string`)try{if(!new RegExp(e.validation).test(t))return`Value does not match expected format`}catch{}return null}function A(e){return e==null?!0:Array.isArray(e)||typeof e==`string`?e.length===0:typeof e==`object`?!Object.values(e).some(e=>e!=null&&e!==``):!e}var $n=new Set([`idle`,`queued`,`rejected`]);function er(e){return!A(e)}function tr(e,t){return vn(e)?!1:t?.requiredFields?.includes(e.ckey)?!0:!!e.required}function nr(e,t,n){return n?.get(e.ckey)?.required?!0:tr(e,t)}function rr(e){return[...e.values()].filter(e=>$n.has(e.status))}function ir(e,t){return t.enforceRequiredBeforeUpload===!1?!1:t.enforceRequiredBeforeUpload===!0?!0:e.forceFillingOnUpload===void 0?t.requiredFields&&t.requiredFields.length>0?!0:e.fields.some(e=>!!e.required):e.forceFillingOnUpload}function ar(e,t,n){if(!t)return tr(e,n);let r=t.get(e.ckey);return r?.hidden?!1:r?.required?!0:tr(e,n)}function or(e,t,n){let r=new Map;if(!n||n.length===0){for(let t of e)r.set(t.id,null);return r}for(let i of e)r.set(i.id,$t({mime:i.type??``,meta:i.meta},t,n));return r}function sr(e,t,n,r){let i=rr(e);if(i.length===0)return{};let a=or(i,t,r),o={};for(let e of t.fields){let t=i.filter(t=>{let r=a.get(t.id)??null;return ar(e,r,n)?!er(t.meta[e.key]):!1});t.length>0&&(o[e.key]=t)}return o}function cr(e,t,n,r){let i=rr(e);if(i.length===0)return new Set;let a=or(i,t,r),o=new Set;for(let e of t.fields)i.some(t=>{let r=a.get(t.id)??null;return ar(e,r,n)})&&o.add(e.key);return o}function lr(e,t,n,r){let i=rr(e);if(i.length===0)return null;let a=or(i,t,r);for(let e of t.fields)if(i.some(t=>{let r=a.get(t.id)??null;return ar(e,r,n)?!er(t.meta[e.key]):!1}))return e.key;return null}function ur(e,t,n){let r=e.get(t.id);return r&&r.has(n)?r.get(n):t.meta?.[n]}function dr(e,t,n){let r=t.get(e.id);if(!r||r.size===0)return e;let i={...e.meta};for(let e of n.fields)r.has(e.key)&&(i[e.key]=r.get(e.key));return{...e,meta:i}}function fr(e,t,n,r,i){let a=new Set,o=rr(t);if(o.length===0)return a;let s=o.map(t=>dr(t,e,n)),c=or(s,n,i);for(let t of n.fields)o.some((n,i)=>{let a=c.get(s[i].id)??null;return ar(t,a,r)?!er(ur(e,n,t.key)):!1})&&a.add(t.key);return a}function pr(e,t,n){if(!n||n.length===0)return null;let r=rr(e);if(r.length===0)return null;let i=or(r,t,n),a=new Map;for(let e of r){let n=i.get(e.id);if(!n||n.size===0)continue;let r={};for(let n of t.fields)n.key in e.meta&&(r[n.ckey]=e.meta[n.key]);let o=sn(r,n);o.length!==0&&a.set(e.id,new Set(o.map(e=>e.ckey)))}if(a.size===0)return null;for(let e of t.fields)for(let t of a.values())if(t.has(e.ckey))return e.key;return null}function mr(e,t,n,r){let i=rr(t);return i.length===0?null:pr(new Map(i.map(t=>[t.id,dr(t,e,n)])),n,r)}function hr(e,t,n=`en`){let r=e.replace(/\/$/,``),i=null,a=null,o=!1,s=null,c=null;async function l(){return s||(c||=fetch(`${r}/tags`,{headers:t}).then(async e=>{if(!e.ok)return;let t=await e.json();s=(t.tags??t.data?.tags??[]).filter(e=>e?.sid).map(e=>{let t=e.tag||e.value||e.label||e.names?.[n]||e.names?.en||e.names&&Object.values(e.names)[0]||``;return{sid:e.sid||void 0,value:t,label:t}})}).catch(()=>{}).finally(()=>{s||(c=null)}),await c,s??[])}return{search(e,n,s){if(i&&clearTimeout(i),a&&a.abort(),o=!1,!n.trim()){s([]);return}i=setTimeout(async()=>{a=new AbortController;try{if(!e){let e=await l();if(o)return;let t=n.trim().toLowerCase();s(e.filter(e=>e.label.toLowerCase().includes(t)).slice(0,20));return}let i=`${r}/v5/metadata/autocomplete?q=${encodeURIComponent(n.trim())}&meta_key=_${encodeURIComponent(e)}&limit=20`,c=await fetch(i,{headers:t,signal:a.signal});if(o)return;if(!c.ok){s([]);return}let u=await c.json();if(o)return;s((u.data?.tags??u.tags??[]).map(e=>({sid:e.sid||void 0,value:e.tag||e.value||e.label||``,label:e.tag||e.label||e.value||``})))}catch{o||s([])}},200)},cancel(){o=!0,i&&clearTimeout(i),a&&a.abort()}}}var gr={base_node:null,nodes:[]};function _r(e,t){let n=e.replace(/\/$/,``),r=null,i=null,a=!1,o=null,s=null;return{fetchTaxonomies(){return s||(s=(async()=>{let e=`${n}/v5/taxonomies`;try{let n=await fetch(e,{headers:t});if(!n.ok)return console.warn(`[sfx-uploader] /v5/taxonomies returned ${n.status}`),[];let r=await n.json(),i=r?.taxonomies??r?.data?.taxonomies??r?.data??r;return Array.isArray(i)?i:(console.warn(`[sfx-uploader] /v5/taxonomies returned unexpected shape`,r),[])}catch(e){return console.warn(`[sfx-uploader] /v5/taxonomies request failed`,e),[]}})(),s.then(e=>{e.length===0&&(s=null)},()=>{s=null}),s)},async fetchNodes(e,r=``,i=10){o&&o.abort(),o=new AbortController;try{let a=new URLSearchParams;r&&a.set(`base`,r),a.set(`limit`,String(i));let s=`${n}/v5/taxonomy/${encodeURIComponent(e)}/nodes?${a.toString()}`,c=await fetch(s,{headers:t,signal:o.signal});if(!c.ok)return gr;let l=await c.json(),u=l?.data??l;return{base_node:u?.base_node??null,nodes:Array.isArray(u?.nodes)?u.nodes:[]}}catch{return gr}},autocomplete(e,o,s){if(r&&clearTimeout(r),i&&i.abort(),a=!1,!o.trim()){s([]);return}r=setTimeout(async()=>{i=new AbortController;try{let r=`${n}/v5/metadata/autocomplete?q=${encodeURIComponent(o.trim())}&meta_key=_${encodeURIComponent(e)}`,c=await fetch(r,{headers:t,signal:i.signal});if(a)return;if(!c.ok){s([]);return}let l=await c.json();if(a)return;s((l?.data?.tags??l?.tags??[]).map(e=>({tag:String(e.tag??e.path??``),path:String(e.path??e.tag??``),suid:String(e.suid??``),uuid:String(e.uuid??``),approx_count:typeof e.approx_count==`number`?e.approx_count:void 0})))}catch{a||s([])}},200)},cancel(){a=!0,r&&clearTimeout(r),i&&i.abort(),o&&o.abort()}}}var vr=`/v5/meta/ultratags`,yr=(e,t)=>{let n=new URLSearchParams;t.meta&&n.set(`meta`,t.meta),t.q&&n.set(`q`,t.q),t.sort&&n.set(`sort`,t.sort),typeof t.limit==`number`&&n.set(`limit`,String(t.limit)),t.after&&n.set(`after`,t.after),t.format&&n.set(`format`,t.format),t.lang&&n.set(`lang`,t.lang);let r=n.toString();return`${e}${vr}${r?`?${r}`:``}`},br=e=>{let t=Array.from(e),n=t.pop();if(n===void 0)return``;let r=t.join(``),i=n.codePointAt(0)??0;return i<=0?r:`${r}${String.fromCodePoint(i-1)}￿`},xr=(e,t)=>{let n=new URLSearchParams;t.format&&n.set(`format`,t.format),t.lang&&n.set(`lang`,t.lang);let r=n.toString();return`${e}${vr}${r?`?${r}`:``}`};function Sr(e,t){let n=null,r=null,i=()=>{n&&=(clearTimeout(n),null),r&&=(r.abort(),null)},a=new Map,o=null,s=(n,r)=>{let i=new Set;return o={keys:i,promise:new Promise((s,c)=>{queueMicrotask(async()=>{o=null;try{let o=xr(e,{format:n,lang:r}),c=await fetch(o,{method:`QUERY`,headers:{...t,"Content-Type":`application/json`},body:JSON.stringify({ultratags_sids:[...i]})});if(!c.ok)throw Error(`ultratags getBySids failed: HTTP ${c.status}`);let l=await c.json(),u=new Map;for(let e of l.items||[])e.sid&&u.set(e.sid,e);for(let[e,t]of u)a.set(e,t);s(u)}catch(e){c(e instanceof Error?e:Error(String(e)))}})})},o},c=(e,t,n)=>{let r=a.get(e);if(r)return Promise.resolve(r);let i=o??s(t,n);return i.keys.add(e),i.promise.then(t=>t.get(e))},l=new Map,u=new Map,d=async(n,r,i,a)=>{let o=yr(e,{meta:r,sort:`slug`,after:br(n),limit:5,format:i,lang:a}),s=await fetch(o,{method:`GET`,headers:t});if(!s.ok)throw Error(`ultratags getBySlugs failed: HTTP ${s.status}`);return((await s.json()).items||[]).find(e=>e.slug===n)},f=(e,t,n,r)=>{let i=`${t??``}::${e}`,a=l.get(i);if(a)return Promise.resolve(a);let o=u.get(i);if(o)return o;let s=d(e,t,n,r).then(e=>(e&&l.set(i,e),e)).finally(()=>{u.get(i)===s&&u.delete(i)});return u.set(i,s),s};return{list(a){return i(),new Promise((i,o)=>{n=setTimeout(async()=>{n=null,r=new AbortController;try{let n=yr(e,a),s=await fetch(n,{method:`GET`,headers:t,signal:r.signal});if(!s.ok){o(Error(`ultratags list failed: HTTP ${s.status}`));return}i(await s.json())}catch(e){o(e)}},300)})},async getBySids(e){let t=[...new Set(e.sids)].filter(Boolean);if(t.length===0)return{items:[],stats:{count:0,total_count:0}};let n=(await Promise.all(t.map(t=>c(t,e.format,e.lang)))).filter(e=>!!e);return{items:n,stats:{count:n.length,total_count:n.length}}},async getBySlugs(e){let t=[...new Set(e.slugs)].filter(Boolean);if(t.length===0)return{items:[],stats:{count:0,total_count:0}};let n=await Promise.allSettled(t.map(t=>f(t,e.meta,e.format,e.lang))),r=[];return n.forEach((e,n)=>{e.status===`fulfilled`?e.value&&r.push(e.value):console.warn(`[sfx-uploader] ultratags getBySlugs failed for "${t[n]}"`,e.reason)}),{items:r,stats:{count:r.length,total_count:r.length}}},async create(n){let r=`${e}${vr}`,i=await fetch(r,{method:`POST`,headers:{...t,"Content-Type":`application/json`},body:JSON.stringify(n)});if(!i.ok)throw Error(`ultratags create failed: HTTP ${i.status}`);return await i.json()},cancel(){i()}}}function Cr(e,t){let n=e.replace(/\/+$/,``),r=new Map,i=new Map;async function a(e){try{let n=await fetch(e,{headers:t});return n.ok?await n.json():(console.warn(`[sfx-uploader] ${e} returned ${n.status}`),null)}catch(t){return console.warn(`[sfx-uploader] ${e} request failed`,t),null}}async function o(e){let t=encodeURIComponent(e),[i,o]=await Promise.all([a(`${n}/v5/meta/model/fields/i18n?lang=${t}&format=object`),a(`${n}/v5/meta/model/fields/options/i18n?lang=${t}&format=object`)]),s={fields:i?.fields??{},options:o?.options??{}};return i!==null&&o!==null&&r.set(e,s),s}return{getTranslations(e){let t=r.get(e);if(t)return Promise.resolve(t);let n=i.get(e);if(n)return n;let a=o(e).finally(()=>i.delete(e));return i.set(e,a),a},peek(e){return r.get(e)}}}function wr(e,t){let n=t.fields[e.ckey],r=!1,i=(e.possible_values??[]).map(e=>{let n=t.options[e.internal_unique_value];return n&&n!==e.label?(r=!0,{...e,label:n}):e}),a=!!n?.name&&n.name!==e.title,o=!!n?.placeholder&&n.placeholder!==e.placeholder,s=!!n?.tooltip&&n.tooltip!==e.hint;return!r&&!a&&!o&&!s?e:{...e,title:a?n.name:e.title,placeholder:o?n.placeholder:e.placeholder,hint:s?n.tooltip:e.hint,possible_values:r?i:e.possible_values}}function Tr(e,t){if(!t||Object.keys(t.fields).length===0&&Object.keys(t.options).length===0)return e;let n=!1,r=e.groups.map(e=>{let r=!1,i=e.fields.map(e=>{let n=wr(e,t);return n!==e&&(r=!0),n});return r?(n=!0,{...e,fields:i}):e});if(!n)return e;let i=r.flatMap(e=>e.fields),a=new Map(i.map(e=>[e.key,e]));return{...e,groups:r,fields:i,fieldsByKey:a}}var Er=`description`,Dr=`system.focusPoint`,Or=`__focus_point__`,kr=`sfx-meta-focus-point-field`;function Ar(e){return e===Dr}function jr(e){return{key:Dr,ckey:Dr,uuid:`system-focus-point`,title:e(`focusPointLabel`,`Focus point`),type:`focus-point`,required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Mr(e,t){let n=jr(t),r=!1,i=e.groups.map(e=>{if(r||!e.isRoot)return e;r=!0;let t=e.fields.findIndex(e=>e.ckey===Er),i=t===-1?e.fields.length:t+1;return{...e,fields:[...e.fields.slice(0,i),n,...e.fields.slice(i)]}});r||(i=[{uuid:Or,isRoot:!0,name:t(`generalFieldsLabel`,`General`),fields:[n]},...i]);let a=i.flatMap(e=>e.fields),o=new Map(a.map(e=>[e.key,e]));return{...e,groups:i,fields:a,fieldsByKey:o}}function Nr(e){if(!e.fields.some(e=>Ar(e.key)))return e;let t=e.groups.map(e=>({...e,fields:e.fields.filter(e=>!Ar(e.key))})).filter(e=>e.fields.length>0),n=t.flatMap(e=>e.fields),r=new Map(n.map(e=>[e.key,e]));return{...e,groups:t,fields:n,fieldsByKey:r}}function Pr(e=2){return a`<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width=${e}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>`}function Fr(e){return e.show===!1}var Ir=C({gridUuid:`f7b2366e-fcb6-4f1a-8f23-8de48422989a`,namespace:`uploader`,cdnUrl:`https://i18n-fastly.ultrafast.io`}),Lr=Ir.initI18n;Ir.getInstance,Ir.onChange;var j=Ir.t,M=Ir.I18nController,Rr=a`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,zr=a`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,Br=a`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,Vr=a`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,N=class extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.focusPointPicking=!1,this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=``}static{this.styles=r`
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
  `}willUpdate(e){e.has(`schema`)&&e.get(`schema`)!==this.schema&&(this._collapsed=new Set,this._filterQuery=``)}_toggleGroup(e){let t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=``}_onFilterKeyDown(e){e.key===`Escape`&&this._filterQuery&&(e.stopPropagation(),this._filterQuery=``)}_isAllCollapsed(e){return e.length!==0&&e.every(e=>this._collapsed.has(e))}_onToggleCollapseAll(e){let t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(let n of e)t.delete(n);else for(let n of e)t.add(n);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;let e={};for(let t of this.schema.fields)t.key in this.meta&&(e[t.ckey]=this.meta[t.key]);let t=sn(e,this.resolvedSchema);return new Map(t.map(e=>[e.ckey,e]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){let n=this.resolvedSchema;if(n&&e.ckey&&n.get(e.ckey)?.hidden)return[];let r=n?e.fields.filter(t=>!tn(t,e,n)):e.fields;return Fr(e)&&(r=r.filter(t=>nr(t,this.config??void 0,n)||nn(t,e,n))),t&&!e.name.toLowerCase().includes(t)&&(r=r.filter(e=>e.title.toLowerCase().includes(t))),r}_renderFilter(e,t,n){if(this.hideFilter||!this.schema||this.schema.fields.length===0)return s;let r=this._filterQuery,i=this._isAllCollapsed(t),o=i?j(`expandAll`,`Expand all`):j(`collapseAll`,`Collapse all`);return a`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${Rr}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${j(`searchFields`,`Search fields...`)}
            .value=${r}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${j(`searchMetadataFields`,`Search metadata fields`)}
          />
          ${r?a`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${j(`clearSearch`,`Clear search`)}
                aria-label=${j(`clearSearch`,`Clear search`)}
                type="button"
              >
                ${zr}
              </button>`:s}
        </div>
        ${e?a`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${n}
              title=${n?j(`disabledWhileSearching`,`Disabled while searching`):o}
              aria-label=${i?j(`expandAllGroups`,`Expand all groups`):j(`collapseAllGroups`,`Collapse all groups`)}
              type="button"
            >
              ${i?Vr:Br}
            </button>`:s}
      </div>
    `}_renderGroup(e,t,n,r,i){let o=i?!0:!this._collapsed.has(e.uuid);return a`
      <div class="group">
        <button
          class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${o}
        >
          <span>${e.name}</span>
          <svg
            class="chevron ${o?`open`:``}"
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
        ${o?a`
              <div class="group-content">
                ${t.map(e=>a`
                    <sfx-metadata-field
                      .field=${e}
                      .value=${this.meta[e.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonodes?.[e.key]??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${this.schema?.regionalVariantsGroups??[]}
                      .resolvedState=${this.resolvedSchema?.get(e.ckey)??null}
                      .conflict=${n.get(e.ckey)??null}
                      .dependencyNames=${r}
                      .focusPointPicking=${this.focusPointPicking}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `)}
              </div>
            `:s}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return a`<div class="empty" role="status" aria-live="polite">
        ${j(`noMetadataFieldsConfigured`,`No metadata fields configured`)}
      </div>`;let e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),n=this._filterQuery.trim(),r=n.toLowerCase(),i=r!==``,o=[];for(let e of this.schema.groups){let t=this._visibleFieldsFor(e,r);t.length!==0&&o.push({group:e,fields:t})}let s=o.map(e=>e.group.uuid),c=this.schema.groups.length>1&&(i||o.length>0),l=this._renderFilter(c,s,i);if(o.length===0){let e=i?j(`noFieldsMatch`,`No fields match "{{query}}"`,{query:n}):j(`allMetadataFieldsHidden`,`All metadata fields are currently hidden`);return a`
        ${l}
        <div class="empty" role="status" aria-live="polite">${e}</div>
      `}return a`
      ${l}
      ${o.map(({group:n,fields:r})=>this._renderGroup(n,r,e,t,i))}
    `}};u([i({attribute:!1})],N.prototype,`schema`,void 0),u([i({attribute:!1})],N.prototype,`meta`,void 0),u([i({attribute:!1})],N.prototype,`config`,void 0),u([i({attribute:!1})],N.prototype,`autocomplete`,void 0),u([i({attribute:!1})],N.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],N.prototype,`ultratags`,void 0),u([i({attribute:!1})],N.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],N.prototype,`taxonodes`,void 0),u([i({attribute:!1})],N.prototype,`resolvedSchema`,void 0),u([i({attribute:!1})],N.prototype,`dependencies`,void 0),u([i({type:Boolean})],N.prototype,`focusPointPicking`,void 0),u([i({type:Boolean})],N.prototype,`disabled`,void 0),u([i({type:Boolean,attribute:`hide-filter`})],N.prototype,`hideFilter`,void 0),u([c()],N.prototype,`_collapsed`,void 0),u([c()],N.prototype,`_filterQuery`,void 0),w(`sfx-metadata-form`,N);var Hr=r`
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

  ${b}
`,Ur=r`
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

  ${b}
`,Wr=r`
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

  ${b}
`;r`
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

  ${b}
`;var Gr=r`
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

  ${b}
`,Kr={LANGUAGES:`FTYPE_LANGUAGES`,CURRENCIES:`FTYPE_CURRENCIES`,CUSTOM:`FTYPE_CUSTOM`};function qr(e,t){if(!e.regional_variants_group_uuid)return;let n=t?.regionalFilters;return n&&e.regional_variants_group_uuid in n?n[e.regional_variants_group_uuid]:t?.language}function Jr(e,t,n,r){if(!e.regional_variants_group_uuid||!t)return;let i=t.find(t=>t.uuid===e.regional_variants_group_uuid);if(!i)return;let a=n?.[i.uuid]??r,o=i.variants.find(e=>e.api_value===a);if(o)return`${i.label}: ${o.label}`}function Yr(e,t){let n={};for(let r of e??[]){if(!r.variants?.length)continue;let e=r.type===Kr.LANGUAGES?Xr(r.variants,t):void 0;n[r.uuid]=e??r.variants[0].api_value}return n}function Xr(e,t){if(!t)return;let n=t.toLowerCase(),r=n.split(`-`)[0],i,a;for(let t of e){let e=t.api_value?.toLowerCase();if(e){if(e===n)return t.api_value;!i&&e===r&&(i=t.api_value),!a&&e.split(`-`)[0]===r&&(a=t.api_value)}}return i??a}var P=class extends e{constructor(...e){super(...e),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.focusPointPicking=!1,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}static{this.styles=[Gr]}get _isRequired(){return this.resolvedState?.required?!0:tr(this.field,this.config??void 0)}_conflictTooltip(){let e=this.conflict;if(!e)return``;let t=e=>this.field?.possible_values?.find(t=>t.internal_unique_value===e)?.label??e,n=this.resolvedState?.allowedValues,r=this.resolvedState?.setValue,i;if(i=e.kind===`allow_values`&&n?`Current value is no longer allowed. Allowed: ${n.map(t).join(`, `)}`:e.kind===`set_values`&&r!==void 0?`Value should be: ${(Array.isArray(r)?r:[r]).map(t).join(`, `)}`:`Value conflicts with a dependency rule`,e.dependencyUuids.length>0&&this.dependencyNames.size>0){let t=e.dependencyUuids.map(e=>this.dependencyNames.get(e)).filter(e=>!!e);if(t.length>0){let e=t.length===1?`dependency`:`dependencies`;i+=`\nControlled by ${e}: ${t.join(`, `)}`}}return i}_onFieldBlur(e){let{key:t,value:n}=e.detail,r=Qn(this.field,n,this.config??void 0);if(r){this._error=r;return}this._error=null;let i={meta:{[this.field.key]:this.value}},a=qr(this.field,this.config),o=Pn(this.field,n,i,a);this._dispatching=!0,this.dispatchEvent(new CustomEvent(`field-blur`,{detail:{key:t,value:o},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener(`field-blur`,this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`field-blur`,this._handleChildBlur)}_emitRow(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}_onRowFocusIn(){this._emitRow(`field-focus`,{focused:!0})}_onRowFocusOut(e){let t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emitRow(`field-focus`,{focused:!1})}_renderField(e,t){let n=this.disabled;if(vn(e))return a`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;let r=this.resolvedState?.allowedValues??null;switch(e.type){case`text`:case`attachment-uri`:return a`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-text-field>`;case`textarea`:return a`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-textarea-field>`;case`select-one`:return a`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${r}
          ?disabled=${n}
        ></sfx-meta-select-field>`;case`multi-select`:return a`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${r}
          ?disabled=${n}
        ></sfx-meta-multi-select-field>`;case`tags`:return a`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${n}
        ></sfx-meta-tags-field>`;case`ultratags`:return a`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.config?.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${n}
        ></sfx-meta-ultratags-field>`;case`taxonomy-node`:return a`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${n}
        ></sfx-meta-taxonomy-node-field>`;case`boolean`:return a`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-boolean-field>`;case`numeric`:case`decimal2`:return a`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-number-field>`;case`date`:return a`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-date-field>`;case`geopoint`:return a`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-geo-point-field>`;case`focus-point`:return a`<sfx-meta-focus-point-field
          .field=${e}
          .value=${t}
          .picking=${this.focusPointPicking}
          ?disabled=${n}
        ></sfx-meta-focus-point-field>`;default:return a`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-text-field>`}}render(){let e=this.field;if(!e)return s;let t=qr(e,this.config),n=Nn(e,this.value,t),r=Jr(e,this.regionalVariantsGroups,this.config?.regionalFilters,this.config?.language),i=e.type===`textarea`?`field-row field-row--top`:`field-row`,o=this.conflict?this._conflictTooltip():``;return a`
      <div
        class=${i}
        aria-required=${this._isRequired?`true`:`false`}
        @focusin=${this._onRowFocusIn}
        @focusout=${this._onRowFocusOut}
      >
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?a`<span class="field-required" aria-hidden="true">*</span>`:s}
          ${this.conflict?a`<span
                class="field-conflict"
                role="img"
                aria-label=${o}
                title=${o}
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
              </span>`:s}
        </div>
        <div class="field-content">
          ${this._renderField(e,n)}
          ${r?a`<div class="field-regional-hint" title=${r}>${r}</div>`:s}
          ${this._error?a`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:s}
        </div>
      </div>
    `}};u([i({attribute:!1})],P.prototype,`field`,void 0),u([i({attribute:!1})],P.prototype,`value`,void 0),u([i({attribute:!1})],P.prototype,`config`,void 0),u([i({attribute:!1})],P.prototype,`autocomplete`,void 0),u([i({attribute:!1})],P.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],P.prototype,`taxonomyEntry`,void 0),u([i({attribute:!1})],P.prototype,`ultratags`,void 0),u([i({attribute:!1})],P.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],P.prototype,`ultratagsRestrictToItems`,void 0),u([i({attribute:!1})],P.prototype,`regionalVariantsGroups`,void 0),u([i({attribute:!1})],P.prototype,`resolvedState`,void 0),u([i({attribute:!1})],P.prototype,`conflict`,void 0),u([i({attribute:!1})],P.prototype,`dependencyNames`,void 0),u([i({type:Boolean})],P.prototype,`focusPointPicking`,void 0),u([i({type:Boolean})],P.prototype,`disabled`,void 0),u([c()],P.prototype,`_error`,void 0),w(`sfx-metadata-field`,P);var F=class extends e{constructor(...e){super(...e),this.value=``,this.disabled=!1,this.i18nController=new M(this)}_selectPlaceholder(e){let t=this.field?.title??``;return t?j(`selectFieldPlaceholder`,`Select {{field}}`,{field:t.toLowerCase()}):e??j(`selectAnOption`,`Select an option`)}_emit(e,t){this._emitDetail(e,t===void 0?{}:{value:t})}_emitDetail(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}};u([i({attribute:!1})],F.prototype,`field`,void 0),u([i({attribute:!1})],F.prototype,`value`,void 0),u([i({type:Boolean})],F.prototype,`disabled`,void 0);var Zr=class extends F{static{this.styles=[Hr]}_onInput(e){this._emit(`field-change`,e.target.value)}_onBlur(e){this._emit(`field-blur`,e.target.value)}_onKeydown(e){e.key===`Escape`&&this._emit(`field-escape`)}render(){let e=this.field?.title??``,t=e?`Enter ${e.toLowerCase()}`:``;return a`
      <input
        type="text"
        .value=${this.value??``}
        placeholder=${this.field?.placeholder||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};w(`sfx-meta-text-field`,Zr);var Qr=class extends F{static{this.styles=[Hr,r`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `]}firstUpdated(){let e=this.renderRoot.querySelector(`textarea`);e&&this._autoResize(e)}_autoResize(e){e.style.height=`auto`,e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){let t=e.target;this._autoResize(t),this._emit(`field-change`,t.value)}_onBlur(e){this._emit(`field-blur`,e.target.value)}_onKeydown(e){e.key===`Escape`&&this._emit(`field-escape`)}render(){let e=this.field?.title??``,t=e?`Enter ${e.toLowerCase()}`:``;return a`
      <textarea
        .value=${this.value??``}
        placeholder=${this.field?.placeholder||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};w(`sfx-meta-textarea-field`,Qr);function $r(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ei=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),ei(e,t);return!0},ti=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},ni=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ai(t)}};function ri(e){this._$AN===void 0?this._$AM=e:(ti(this),this._$AM=e,ni(this))}function ii(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)ei(r[e],!1),ti(r[e]);else r!=null&&(ei(r,!1),ti(r));else ei(this,e)}var ai=e=>{e.type==v.CHILD&&(e._$AP??=ii,e._$AQ??=ri)},oi=class extends _{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),ni(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ei(this,e),ti(this))}setValue(e){if(De(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},si=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}};si.eventName=`rangeChanged`;var ci=class e extends Event{constructor(t){super(e.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}};ci.eventName=`visibilityChanged`;var li=class e extends Event{constructor(){super(e.eventName,{bubbles:!1})}};li.eventName=`unpinned`;var ui=class{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}},di=class extends ui{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;this._scrollTo(n)}scrollBy(e,t){let n=typeof e==`number`&&typeof t==`number`?{left:e,top:t}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,n=null){this._end!==null&&this._end(),e.behavior===`smooth`?(this._setDestination(e),this._retarget=t,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:n}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:n,behavior:`smooth`},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,n){return this._scrollTo(e,t,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){let{scrollTop:e,scrollLeft:t}=this,{top:n,left:r}=this._destination;n=Math.min(n||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);let i=Math.abs(n-e),a=Math.abs(r-t);i<1&&a<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener(`scroll`,this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener(`scroll`,this._checkForArrival))}},fi=typeof window<`u`?window.ResizeObserver:void 0,pi=Symbol(`virtualizerRef`),mi=`virtualizer-sizer`,hi,gi=class{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error(`Virtualizer constructor requires a configuration object`);if(e.hostElement)this._init(e);else throw Error(`Virtualizer configuration requires the "hostElement" property`)}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new fi(()=>this._hostElementSizeChanged()),this._childrenRO=new fi(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[pi]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=xi(this._hostElement,e),this._scrollerController=new di(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener(`scroll`,this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener(`scroll`,this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener(`scroll`,this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise(`disconnected`),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||`block`,e.position=e.position||`relative`,e.contain=e.contain||`size layout`,this._isScroller&&(e.overflow=e.overflow||`auto`,e.minHeight=e.minHeight||`150px`)}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${mi}]`);t||(t=document.createElement(`div`),t.setAttribute(mi,``),e.appendChild(t)),Object.assign(t.style,{position:`absolute`,margin:`-2px 0 0 0`,padding:0,visibility:`hidden`,fontSize:`2px`}),t.textContent=`&nbsp;`,t.setAttribute(mi,``),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||hi;if(typeof t==`function`&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,n;if(typeof e.type==`function`){n=e.type;let r={...e};delete r.type,t=r}else t=e;n===void 0&&(hi=n=(await S(async()=>{let{FlowLayout:e}=await import(`./flow-SthcuBkX.js`);return{FlowLayout:e}},[])).FlowLayout),this._layout=new n(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes==`function`&&(typeof this._layout.measureChildren==`function`&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener(`load`,this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){let e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName(`uv-virtualizing`,`measure`).filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){let e={},t=this._children,n=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let i=t[r],a=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[a]=n.call(this,i,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){let{width:t,height:n}=e.getBoundingClientRect();return Object.assign({width:t,height:n},_i(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:n}=this;this._visibilityChanged&&=(this._notifyVisibility(),!1),(t||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&`mark`in window.performance&&window.performance.mark(`uv-end`))}_handleScrollEvent(){if(this._benchmarkStart&&`mark`in window.performance){try{window.performance.measure(`uv-virtualizing`,`uv-start`,`uv-end`)}catch(e){console.warn(`Error measuring performance data: `,e)}window.performance.mark(`uv-start`)}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case`scroll`:(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn(`event not handled`,e)}}_handleLayoutMessage(e){e.type===`stateChanged`?this._updateDOM(e):e.type===`visibilityChanged`?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type===`unpinned`&&this._hostElement.dispatchEvent(new li)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(mi)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,n=this._layout;if(e&&t&&n){let r,i,a,o,s=e.getBoundingClientRect();r=0,i=0,a=window.innerHeight,o=window.innerWidth;let c=this._clippingAncestors.map(e=>e.getBoundingClientRect());c.unshift(s);for(let e of c)r=Math.max(r,e.top),i=Math.max(i,e.left),a=Math.min(a,e.bottom),o=Math.min(o,e.right);let l=t.getBoundingClientRect(),u={left:s.left-l.left,top:s.top-l.top},d={width:t.scrollWidth,height:t.scrollHeight},f=r-s.top+e.scrollTop,p=i-s.left+e.scrollLeft,m=Math.max(0,a-r);n.viewportSize={width:Math.max(0,o-i),height:m},n.viewportScroll={top:f,left:p},n.totalScrollSize=d,n.offsetWithinScroller=u}}_sizeHostElement(e){let t=82e5,n=e&&e.width!==null?Math.min(t,e.width):0,r=e&&e.height!==null?Math.min(t,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=n?`${n}px`:`100%`,e.minHeight=r?`${r}px`:`100%`}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:n,height:r,xOffset:i,yOffset:a},o)=>{let s=this._children[o-this._first];s&&(s.style.position=`absolute`,s.style.boxSizing=`border-box`,s.style.transform=`translate(${t}px, ${e}px)`,n!==void 0&&(s.style.width=n+`px`),r!==void 0&&(s.style.height=r+`px`),s.style.left=i===void 0?null:i+`px`,s.style.top=a===void 0?null:a+`px`)})}async _adjustRange(e){let{_first:t,_last:n,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:n,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior===`smooth`){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new si({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new ci({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t}),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function _i(e){let t=window.getComputedStyle(e);return{marginTop:vi(t.marginTop),marginRight:vi(t.marginRight),marginBottom:vi(t.marginBottom),marginLeft:vi(t.marginLeft)}}function vi(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function yi(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function bi(e,t=!1){let n=[],r=t?e:yi(e);for(;r!==null;)n.push(r),r=yi(r);return n}function xi(e,t=!1){let n=!1;return bi(e,t).filter(e=>{if(n)return!1;let t=getComputedStyle(e);return n=t.position===`fixed`,t.overflow!==`visible`})}var Si=e=>e,Ci=(e,t)=>a`${t}: ${JSON.stringify(e,null,2)}`,wi=y(class extends oi{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>Ci(e,t+this._first),this._keyFunction=(e,t)=>Si(e,t+this._first),this._items=[],e.type!==v.CHILD)throw Error(`The virtualize directive can only be used in child expressions`)}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return Ie(t,this._keyFunction,this._renderItem)}update(e,[n]){this._setFunctions(n);let r=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(e,n):this._initialize(e,n),r?t:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:n}=e;t&&(this._renderItem=(e,n)=>t(e,n+this._first)),n&&(this._keyFunction=(e,t)=>n(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:n,scroller:r,items:i}=t;this._virtualizer=new gi({hostElement:e,layout:n,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,t){let n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener(`rangeChanged`,e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(n,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}),Ti=class extends e{constructor(){super(...arguments),this.items=[],this.renderItem=Ci,this.keyFunction=Si,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:n,layout:r,scroller:i}=this;return a`${wi({items:e,renderItem:t,keyFunction:n,layout:r,scroller:i})}`}element(e){return this[pi]?.element(e)}get layoutComplete(){return this[pi]?.layoutComplete}scrollToIndex(e,t=`start`){this.element(e)?.scrollIntoView({block:t})}};$r([i({attribute:!1})],Ti.prototype,`items`,void 0),$r([i()],Ti.prototype,`renderItem`,void 0),$r([i()],Ti.prototype,`keyFunction`,void 0),$r([i({attribute:!1})],Ti.prototype,`layout`,void 0),$r([i({reflect:!0,type:Boolean})],Ti.prototype,`scroller`,void 0),customElements.define(`lit-virtualizer`,Ti);function Ei(e,t){let n=e.querySelector(`lit-virtualizer`);if(n){t>=0&&Promise.resolve(n.layoutComplete).then(()=>n.scrollToIndex(t,`nearest`)).catch(()=>{});return}e.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})}var Di=class e extends F{constructor(...e){super(...e),this.allowedValues=null,this._open=!1,this._search=``,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>a` <div
      class="option ${e.value===this.value?`selected`:``} ${t===this._activeIndex?`active`:``}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${t=>{t.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}static{this.styles=[Ur,r`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `]}static{this._EMPTY=[]}get _options(){let t=this.field?.possible_values??e._EMPTY;if(this._optionsCache?.src===t)return this._optionsCache.out;let n=t.map(e=>({id:e.internal_unique_value,label:e.label,value:e.internal_unique_value}));return this._optionsCache={src:t,out:n},n}get _selectableOptions(){let e=this._options,t=this.allowedValues;if(this._selectableCache?.opts===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let n;if(t===null)n=e;else{let r=new Set(t);n=e.filter(e=>r.has(e.value))}return this._selectableCache={opts:e,allowed:t,out:n},n}get _filtered(){let e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){return this._options.find(e=>e.value===this.value)?.label??``}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search=``;let e=this._filtered.findIndex(e=>e.value===this.value);this._activeIndex=e>=0?e:0,document.addEventListener(`mousedown`,this._boundOutsideClick),this.updateComplete.then(()=>{this.renderRoot.querySelector(`.search`)?.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this._emit(`field-blur`,this.value),e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(`.trigger`)?.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit(`field-change`,e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit(`field-change`,null),this._emit(`field-blur`,null)}_scrollActive(){this.updateComplete.then(()=>Ei(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){if(e.key===`Escape`){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this._emit(`field-escape`),this.renderRoot.querySelector(`.trigger`)?.focus();return}if(!this._open){(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._openDropdown());return}let t=this._filtered;if(t.length)switch(e.key){case`ArrowDown`:e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case`ArrowUp`:e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case`Home`:e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case`End`:e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case`Enter`:this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0))}}_renderOptions(e){return e.length?e.length<=50?e.map(this._renderOption):a` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(e,t)=>this._renderOption(e,t)}
    ></lit-virtualizer>`:a`<div class="empty">${j(`noOptions`,`No options`)}</div>`}render(){let t=this._selectPlaceholder(),n=this._open?this._filtered:e._EMPTY;return a`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._selectedLabel?a`<span class="trigger-value">${this._selectedLabel}</span>`:a`<span class="placeholder"
              >${this.field?.placeholder||t}</span
            >`}
        ${this._selectedLabel&&!this.disabled?a`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${j(`clear`,`Clear`)}
                @click=${this._clear}
                @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._clear(e))}}
                >&times;</span
              >
            `:s}
        <span class="trigger-chevron ${this._open?`open`:``}" aria-hidden="true">
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

      ${this._open?a`
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${j(`search`,`Search`)}
                aria-label=${j(`filterOptions`,`Filter options`)}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(n)}</div>
            </div>
          `:s}
    `}};u([i({attribute:!1})],Di.prototype,`allowedValues`,void 0),u([c()],Di.prototype,`_open`,void 0),u([c()],Di.prototype,`_search`,void 0),u([c()],Di.prototype,`_activeIndex`,void 0),w(`sfx-meta-select-field`,Di);var Oi=class e extends F{constructor(...e){super(...e),this.allowedValues=null,this._open=!1,this._search=``,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{let n=this._selected;return a` <div
      class="option ${t===this._activeIndex?`active`:``}"
      role="option"
      aria-selected=${n.includes(e.value)}
      @mousedown=${t=>{t.preventDefault(),this._toggle(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      <span class="check ${n.includes(e.value)?`checked`:``}">
        ${n.includes(e.value)?`✓`:``}
      </span>
      ${e.label}
    </div>`}}static{this.styles=[Ur,Wr,r`
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
    `]}static{this._EMPTY=[]}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){let t=this.field?.possible_values??e._EMPTY;if(this._optionsCache?.src===t)return this._optionsCache.out;let n=t.map(e=>({id:e.internal_unique_value,label:e.label,value:e.internal_unique_value}));return this._optionsCache={src:t,out:n},n}get _selectableOptions(){let e=this._options,t=this.allowedValues;if(this._selectableCache?.opts===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let n;if(t===null)n=e;else{let r=new Set(t);n=e.filter(e=>r.has(e.value))}return this._selectableCache={opts:e,allowed:t,out:n},n}get _filtered(){let e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search=``,this._activeIndex=-1,document.addEventListener(`mousedown`,this._boundOutsideClick),this.updateComplete.then(()=>{this.renderRoot.querySelector(`.search`)?.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this._emit(`field-blur`,this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){let t=this._selected,n=t.includes(e.value)?t.filter(t=>t!==e.value):[...t,e.value];this.value=n,this._emit(`field-change`,n),this._emit(`field-blur`,n)}_remove(e){let t=this._selected.filter(t=>t!==e);this.value=t,this._emit(`field-change`,t),this._emit(`field-blur`,t)}_selectAll(){let e=this._selectableOptions.map(e=>e.value);this.value=e,this._emit(`field-change`,e),this._emit(`field-blur`,e)}_clearAll(){this.value=[],this._emit(`field-change`,[]),this._emit(`field-blur`,[])}_scrollActive(){this.updateComplete.then(()=>Ei(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){if(e.key===`Escape`){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this._emit(`field-escape`),this.renderRoot.querySelector(`.trigger`)?.focus();return}if(!this._open){(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._openDropdown());return}if(e.key===`Backspace`&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}let t=this._filtered;if(t.length)switch(e.key){case`ArrowDown`:e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case`ArrowUp`:e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case`Home`:e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case`End`:e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case`Enter`:this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case` `:this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]))}}_labelFor(e){return this._options.find(t=>t.value===e)?.label??e}_renderOptions(e){return e.length?e.length<=50?e.map(this._renderOption):a` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(e,t)=>this._renderOption(e,t)}
    ></lit-virtualizer>`:a`<div class="empty">${j(`noOptions`,`No options`)}</div>`}render(){let t=this._selected,n=this._selectPlaceholder(),r=this._open?this._filtered:e._EMPTY;return a`
      <div
        class="trigger"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${t.length?t.map(e=>a` <span class="chip">
                  ${this._labelFor(e)}
                  <button
                    class="chip-x"
                    aria-label=${j(`removeItem`,`Remove {{item}}`,{item:this._labelFor(e)})}
                    @click=${t=>{t.stopPropagation(),this._remove(e)}}
                  >
                    &times;
                  </button>
                </span>`):a`<span class="placeholder"
              >${this.field?.placeholder||n}</span
            >`}
        <span class="trigger-chevron ${this._open?`open`:``}" aria-hidden="true">
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

      ${this._open?a`
            <div
              class="dropdown"
              role="listbox"
              aria-multiselectable="true"
              @keydown=${this._onKeydown}
            >
              <input
                class="search"
                type="text"
                placeholder=${j(`search`,`Search`)}
                aria-label=${j(`filterOptions`,`Filter options`)}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(r)}</div>
              ${this._options.length>0?a`
                    <div class="bulk-actions">
                      <button
                        type="button"
                        class="bulk-btn"
                        @mousedown=${e=>{e.preventDefault(),this._selectAll()}}
                      >
                        ${j(`selectAll`,`Select all`)}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${e=>{e.preventDefault(),this._clearAll()}}
                      >
                        ${j(`clearAll`,`Clear all`)}
                      </button>
                    </div>
                  `:s}
            </div>
          `:s}
    `}};u([i({attribute:!1})],Oi.prototype,`allowedValues`,void 0),u([c()],Oi.prototype,`_open`,void 0),u([c()],Oi.prototype,`_search`,void 0),u([c()],Oi.prototype,`_activeIndex`,void 0),w(`sfx-meta-multi-select-field`,Oi);function ki(e,t){return e.label?.trim().toLowerCase()===t.label?.trim().toLowerCase()}function Ai(e){return e.trim().replace(/\s+/g,` `)}function ji(e){return Ai(e).replace(/\s/g,`-`)}function Mi(e){return{label:Ai(e),value:ji(e)}}var Ni=class extends F{constructor(...e){super(...e),this._query=``,this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}static{this.styles=[Wr,r`
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
    `]}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),this.autocomplete?.cancel()}_onInput(e){let t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,this.autocomplete?.cancel();return}this._loading=!0,this.autocomplete?.search(this.field.ckey,t,e=>{this._results=e,this._loading=!1})}_addTag(e){if(this._tags.some(t=>ki(t,e)))return;let t=[...this._tags,e];this.value=t,this._query=``,this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit(`field-change`,t),this.updateComplete.then(()=>{this.renderRoot.querySelector(`.input`)?.focus()})}_removeTag(e){let t=this._tags.filter(t=>!ki(t,e));this.value=t,this._emit(`field-change`,t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(`.dropdown:hover`)||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit(`field-blur`,this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{this.renderRoot.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})})}get _itemCount(){return this._suggestions.length+ +!!this._canCreate}_onKeydown(e){if(e.key===`Escape`){this._dropdownOpen=!1,this._activeIndex=-1,this._emit(`field-escape`);return}if(e.key===`Backspace`&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;let t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),t!==0||e.key===`Enter`)switch(e.key){case`ArrowDown`:e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case`ArrowUp`:e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case`Home`:e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case`End`:e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case`Enter`:{e.preventDefault();let t=this._suggestions;this._activeIndex>=0&&this._activeIndex<t.length?this._addTag(t[this._activeIndex]):this._activeIndex===t.length&&this._canCreate||this._activeIndex===-1&&this._canCreate?this._addTag(Mi(this._query)):this._activeIndex===-1&&t.length&&this._addTag(t[0]);break}}}get _suggestions(){let e=this._query.toLowerCase().trim(),t=this._tags,n=(this.field?.possible_values??[]).map(e=>({value:e.api_value||e.internal_unique_value,label:e.label})).filter(e=>!t.some(t=>ki(t,e))).filter(t=>!e||t.label.toLowerCase().includes(e)),r=this._results.filter(e=>!t.some(t=>ki(t,e))&&!n.some(t=>ki(t,e)));return[...n,...r]}get _canCreate(){let e=this._query.trim();if(!e||this._loading)return!1;let t=Mi(e);return!this._tags.some(e=>ki(e,t))&&!this._suggestions.some(e=>ki(e,t))}render(){let e=this._tags,t=this._suggestions,n=t.length;return a`
      <div
        class="container"
        @click=${()=>this.renderRoot.querySelector(`.input`)?.focus()}
      >
        ${e.map(e=>a` <span class="chip">
              ${e.label}
              <button
                class="chip-x"
                aria-label=${j(`removeItem`,`Remove {{item}}`,{item:e.label})}
                @click=${t=>{t.stopPropagation(),this._removeTag(e)}}
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
          aria-label=${this.field?.title??j(`tags`,`Tags`)}
          placeholder=${e.length?``:this.field?.placeholder||j(`addTags`,`Add tags`)}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?a`
            <div class="dropdown" role="listbox">
              ${this._loading?a`<div class="loading">${j(`loading`,`Loading`)}</div>`:s}
              ${t.map((e,t)=>a` <div
                    class="option ${t===this._activeIndex?`active`:``}"
                    role="option"
                    @mousedown=${t=>{t.preventDefault(),this._addTag(e)}}
                    @mouseenter=${()=>{this._activeIndex=t}}
                  >
                    ${e.label}
                  </div>`)}
              ${this._canCreate?a` <div
                    class="option create ${n===this._activeIndex?`active`:``}"
                    @mousedown=${e=>{e.preventDefault(),this._addTag(Mi(this._query))}}
                    @mouseenter=${()=>{this._activeIndex=n}}
                  >
                    ${j(`createTag`,`Create '{{tag}}'`,{tag:this._query.trim()})}
                  </div>`:s}
              ${!this._loading&&!t.length&&!this._canCreate?a`<div class="empty">${j(`noResults`,`No results`)}</div>`:s}
            </div>
          `:s}
    `}};u([i({attribute:!1})],Ni.prototype,`autocomplete`,void 0),u([c()],Ni.prototype,`_query`,void 0),u([c()],Ni.prototype,`_results`,void 0),u([c()],Ni.prototype,`_loading`,void 0),u([c()],Ni.prototype,`_dropdownOpen`,void 0),u([c()],Ni.prototype,`_activeIndex`,void 0),w(`sfx-meta-tags-field`,Ni);var Pi=()=>[{label:j(`booleanTrue`,`True`),value:`true`},{label:j(`booleanFalse`,`False`),value:`false`}],Fi=class extends F{constructor(...e){super(...e),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}static{this.styles=[Ur]}get _currentLabel(){if(this.value==null)return``;let e=String(this.value);return Pi().find(t=>t.value===e)?.label??``}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._boundOutsideClick)}_openDropdown(){this._open=!0;let e=this.value==null?``:String(this.value);this._activeIndex=Math.max(Pi().findIndex(t=>t.value===e),0),document.addEventListener(`mousedown`,this._boundOutsideClick),this.updateComplete.then(()=>{this.renderRoot.querySelector(`.dropdown`)?.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this._emit(`field-blur`,this.value),e&&this.updateComplete.then(()=>{this.renderRoot.querySelector(`.trigger`)?.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit(`field-change`,e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit(`field-change`,null),this._emit(`field-blur`,null)}_scrollActive(){this.updateComplete.then(()=>{this.renderRoot.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})})}_onKeydown(e){if(e.key===`Escape`){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this._emit(`field-escape`),this.renderRoot.querySelector(`.trigger`)?.focus();return}if(!this._open){(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case`ArrowDown`:e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,Pi().length-1),this._scrollActive();break;case`ArrowUp`:e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case`Home`:e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case`End`:e.preventDefault(),this._activeIndex=Pi().length-1,this._scrollActive();break;case`Enter`:case` `:this._activeIndex>=0&&this._activeIndex<Pi().length&&(e.preventDefault(),this._onSelect(Pi()[this._activeIndex],!0))}}render(){let e=this.value==null?``:String(this.value),t=this._selectPlaceholder();return a`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._currentLabel?a`<span class="trigger-value">${this._currentLabel}</span>`:a`<span class="placeholder"
              >${this.field?.placeholder||t}</span
            >`}
        ${this._currentLabel&&!this.disabled?a`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${j(`clear`,`Clear`)}
                @click=${this._clear}
                @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._clear(e))}}
                >&times;</span
              >
            `:s}
        <span class="trigger-chevron ${this._open?`open`:``}" aria-hidden="true">
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

      ${this._open?a`
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${Pi().map((t,n)=>a` <div
                    class="option ${t.value===e?`selected`:``} ${n===this._activeIndex?`active`:``}"
                    role="option"
                    aria-selected=${t.value===e}
                    @mousedown=${e=>{e.preventDefault(),this._onSelect(t)}}
                    @mouseenter=${()=>{this._activeIndex=n}}
                  >
                    ${t.label}
                  </div>`)}
            </div>
          `:s}
    `}};u([c()],Fi.prototype,`_open`,void 0),u([c()],Fi.prototype,`_activeIndex`,void 0),w(`sfx-meta-boolean-field`,Fi);var Ii=class extends F{static{this.styles=[Hr]}get _step(){return this.field?.type===`decimal2`?`0.01`:`1`}get _inputMode(){return this.field?.type===`decimal2`?`decimal`:`numeric`}_onInput(e){this._emit(`field-change`,e.target.value)}_onBlur(e){this._emit(`field-blur`,e.target.value)}_onKeydown(e){if(e.key===`Escape`){this._emit(`field-escape`);return}(e.key===`e`||e.key===`E`)&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){return a`
      <input
        type="number"
        step=${this._step}
        inputmode=${this._inputMode}
        .value=${String(this.value??``)}
        placeholder=${this.field?.placeholder??``}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};w(`sfx-meta-number-field`,Ii);var Li=class extends F{static{this.styles=[Hr,r`
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
    `]}get _dateStr(){let e=this.value;return e?e instanceof Date?e.toISOString().split(`T`)[0]:String(e):``}_onChange(e){let t=e.target.value;this._emit(`field-change`,t),this._emit(`field-blur`,t)}_onKeydown(e){e.key===`Escape`&&this._emit(`field-escape`)}render(){let e=this._dateStr,t=!e;return a`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?`is-empty`:``}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?a`<span class="date-placeholder">${j(`pickADate`,`Pick a date`)}</span>`:s}
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
    `}};w(`sfx-meta-date-field`,Li);var Ri=class extends F{static{this.styles=[Hr,r`
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
    `]}get _geo(){let e=this.value;return{latitude:e?.latitude??``,longitude:e?.longitude??``}}_onInput(e,t){let n=t.target.value,r={...this._geo,[e]:n};this.value=r,this._emit(`field-change`,r)}_onBlur(e){let t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit(`field-blur`,this._geo)}_onKeydown(e){e.key===`Escape`&&this._emit(`field-escape`)}_renderInput(e,t){return a`
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
          @input=${t=>this._onInput(e,t)}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>
    `}render(){return a`
      <div class="grid">
        ${this._renderInput(`latitude`,j(`latitude`,`Latitude`))}
        ${this._renderInput(`longitude`,j(`longitude`,`Longitude`))}
      </div>
    `}};w(`sfx-meta-geo-point-field`,Ri);var zi={horizontal:`50`,vertical:`50`},Bi=Pr(),Vi=a`<svg
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
</svg>`,Hi=class extends F{constructor(...e){super(...e),this.picking=!1,this._onZoneEnter=()=>this._emitDetail(`field-hover`,{hovering:!0}),this._onZoneLeave=()=>this._emitDetail(`field-hover`,{hovering:!1})}static{this.styles=[Hr,r`
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
    `]}get _point(){let e=this.value;return{horizontal:e?.horizontal??``,vertical:e?.vertical??``}}get _hasValue(){let e=this._point;return e.horizontal!==``||e.vertical!==``}_onInput(e,t){let n=t.target.value,r={...this._point,[e]:n};this.value=r,this._emit(`field-change`,r)}_onBlur(e){let t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit(`field-blur`,this._point)}_onKeydown(e){e.key===`Escape`&&this._emit(`field-escape`)}_onTogglePicking(){this._emitDetail(`focus-point-pick-toggle`,{picking:!this.picking})}_onResetToCenter(){this.value={...zi},this._emit(`field-change`,this.value),this._emit(`field-blur`,this.value)}_renderInput(e,t){return a`
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
            @input=${t=>this._onInput(e,t)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
          <span class="suffix" aria-hidden="true">%</span>
        </div>
      </div>
    `}render(){let e=this.picking?j(`focusPointPicking`,`Picking on image`):this._hasValue?j(`focusPointChange`,`Change the point`):j(`focusPointSet`,`Set focal point`);return a`
      <div class="grid">
        ${this._renderInput(`horizontal`,j(`focusPointHorizontal`,`Horizontal`))}
        ${this._renderInput(`vertical`,j(`focusPointVertical`,`Vertical`))}
      </div>

      <div class="actions">
        <button
          type="button"
          class="action"
          aria-pressed=${this.picking?`true`:`false`}
          ?disabled=${this.disabled}
          @mouseenter=${this._onZoneEnter}
          @mouseleave=${this._onZoneLeave}
          @mousedown=${e=>e.preventDefault()}
          @click=${this._onTogglePicking}
        >
          ${this.picking?Vi:Bi}
          <span class="action-label">${e}</span>
        </button>
        ${this._hasValue?a`<button
              type="button"
              class="action action-muted"
              ?disabled=${this.disabled}
              @mouseenter=${this._onZoneEnter}
              @mouseleave=${this._onZoneLeave}
              @mousedown=${e=>e.preventDefault()}
              @click=${this._onResetToCenter}
            >
              <span class="action-label">${j(`focusPointResetCenter`,`Reset to center`)}</span>
            </button>`:s}
      </div>

      ${this.picking?a`<div class="hint">
            ${j(`focusPointPickingHint`,`Click the image preview to place the focus point.`)}
          </div>`:s}
    `}};u([i({type:Boolean})],Hi.prototype,`picking`,void 0),w(kr,Hi);var Ui={uuid:`__root__`,name:``,ltree:``},I=class extends F{constructor(...e){super(...e),this.entry=null,this._open=!1,this._query=``,this._drillStack=[Ui],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}static{this.styles=[Ur,r`
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
    `]}get _taxonomySuid(){return(this.field?.model?.parameters??void 0)?.taxonomy_suid}async _resolveTaxonomyUuid(){if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;let e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;let t=await this.taxonomyService.fetchTaxonomies(),n=t.find(t=>t.suid===e);return n?(this._resolvedTaxonomyUuid=n.uuid,this._taxonomyResolutionFailed=!1,n.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${this.field?.ckey??this.field?.key}" model:`,this.field?.model,`Available taxonomies:`,t.map(e=>({suid:e.suid,uuid:e.uuid,name:e.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value==`string`?this.value:``}get _displayPath(){return this.entry?.path?this.entry.path:this.entry?.name?this.entry.name:this._selectedScalar}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._boundOutsideClick),this.taxonomyService?.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query=``,this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener(`mousedown`,this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{this.renderRoot.querySelector(`.search`)?.focus()}))}_seedDrillStackFromEntry(){let e=this.entry;if(!e?.lineage)return[Ui];let t=e.lineage.split(`.`).filter(Boolean);if(t.length<=1)return[Ui];let n=t.slice(0,-1),r=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),i=[Ui],a=``;for(let e=0;e<n.length;e++)a=a?`${a}.${n[e]}`:n[e],i.push({uuid:`__seed_${a}`,name:r[e]??n[e],ltree:a});return i}willUpdate(e){e.has(`field`)&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this.taxonomyService?.cancel(),this._emit(`field-blur`,this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;let e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}let n=this._drillStack[this._drillStack.length-1].ltree,r=await this.taxonomyService.fetchNodes(t,n);if(e!==this._searchSeq)return;this._currentNodes=r.nodes,this._loading=!1;let i=this._selectedScalar,a=i?this._currentNodes.findIndex(e=>e.uuid===i||e.slug===i):-1;this._activeIndex=a,a>=0&&this._scrollActive()}_onSearchInput(e){let t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,this.taxonomyService?.cancel();return}this._loading=!0;let n=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,e=>{n===this._searchSeq&&(this._searchResults=e,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){let t=[...this._drillStack.filter(e=>e.uuid!==Ui.uuid).map(e=>e.name),e.name].filter(Boolean).join(` › `);return{uuid:e.uuid,suid:e.slug,name:e.name,path:t||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){let t=e.path||e.tag,n=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:n,path:t,lineage:``}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent(`taxonomy-entry-change`,{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){let t=e.uuid||e.slug,n=this._buildTreeEntry(e);this.value=t,this.entry=n,this._emit(`field-change`,t),this._emitTaxonomyEntry(n),this._close()}_selectAutocomplete(e){let t=e.suid||e.uuid,n=this._buildAutocompleteEntry(e);this.value=t,this.entry=n,this._emit(`field-change`,t),this._emitTaxonomyEntry(n),this._close()}_clear(e){e.stopPropagation(),this.value=``,this.entry=null,this._emit(`field-change`,``),this._emitTaxonomyEntry(null),this._emit(`field-blur`,``)}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{this.renderRoot.querySelector(`.tree-row.active, .ac-row.active`)?.scrollIntoView({block:`nearest`})})}_onKeydown(e){if(e.key===`Escape`){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick),this.taxonomyService?.cancel(),this._emit(`field-escape`),this.renderRoot.querySelector(`.trigger`)?.focus();return}let t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key===`ArrowDown`){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key===`ArrowUp`){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key===`ArrowRight`&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){let t=this._currentNodes[this._activeIndex];t.children.count_direct>0&&(e.preventDefault(),this._drillInto(t))}return}if(e.key===`ArrowLeft`&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key===`Enter`){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){let e=this._searchResults[this._activeIndex];e&&this._selectAutocomplete(e)}else{let e=this._currentNodes[this._activeIndex];e&&this._selectTreeNode(e)}}}_renderBreadcrumb(){let e=this._drillStack;return e.length<=1?s:a`
      <div class="breadcrumb">
        ${e.map((t,n)=>{let r=n===e.length-1,i=t.uuid===Ui.uuid?j(`rootNode`,`Root`):t.name;return a`
            ${n>0?a`<span class="crumb-sep">›</span>`:s}
            <button
              class="crumb ${r?`current`:``}"
              type="button"
              ?disabled=${r}
              @click=${()=>!r&&this._jumpToCrumb(n)}
            >
              ${i}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return a`<div class="empty">${j(`loading`,`Loading`)}</div>`;if(this._taxonomyResolutionFailed)return a`<div class="empty">${j(`taxonomyNotFound`,`Taxonomy not found`)}</div>`;if(this._currentNodes.length===0)return a`<div class="empty">${j(`noNodes`,`No nodes`)}</div>`;let e=this._selectedScalar;return a`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,n)=>{let r=t.children.count_direct>0,i=!!e&&(e===t.uuid||e===t.slug);return a`
            <div
              class="tree-row ${n===this._activeIndex?`active`:``} ${i?`selected`:``}"
              role="option"
              aria-selected=${i}
              @mouseenter=${()=>{this._activeIndex=n}}
              @click=${()=>r?this._drillInto(t):this._selectTreeNode(t)}
            >
              <span
                class="tree-radio ${i?`checked`:``}"
                role="button"
                aria-label=${j(`selectNode`,`Select {{node}}`,{node:t.name})}
                @click=${e=>{e.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${r?a`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:s}
              <span class="tree-chevron ${r?``:`hidden`}" aria-hidden="true">
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
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?a`<div class="empty">${j(`loading`,`Loading`)}</div>`:this._searchResults.length===0?a`<div class="empty">${j(`noResults`,`No results`)}</div>`:a`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>a`
            <div
              class="ac-row ${t===this._activeIndex?`active`:``}"
              role="option"
              @mouseenter=${()=>{this._activeIndex=t}}
              @click=${()=>this._selectAutocomplete(e)}
            >
              <span class="ac-tag">${e.tag}</span>
              ${e.path&&e.path!==e.tag?a`<span class="ac-path">${e.path}</span>`:s}
            </div>
          `)}
      </div>
    `}render(){if(!this._taxonomySuid)return a`<div class="misconfigured" role="alert">
        ${j(`missingTaxonomyConfig`,`Field is missing taxonomy config`)}
      </div>`;let e=this._selectPlaceholder(j(`selectANode`,`Select a node`)),t=this._displayPath,n=!!t;return a`
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${e=>{!this._open&&(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._openDropdown())}}
      >
        ${n?a`<span class="trigger-value" title=${t}>${t}</span>`:a`<span class="placeholder"
              >${this.field?.placeholder||e}</span
            >`}
        ${n&&!this.disabled?a`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${j(`clear`,`Clear`)}
                @click=${this._clear}
                @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._clear(e))}}
                >&times;</span
              >
            `:s}
        <span class="trigger-chevron ${this._open?`open`:``}" aria-hidden="true">
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

      ${this._open?a`
            <div class="dropdown taxo" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                aria-label=${j(`searchTaxonomy`,`Search taxonomy`)}
                placeholder=${j(`search`,`Search`)}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?s:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:s}
    `}};u([i({attribute:!1})],I.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],I.prototype,`entry`,void 0),u([c()],I.prototype,`_open`,void 0),u([c()],I.prototype,`_query`,void 0),u([c()],I.prototype,`_drillStack`,void 0),u([c()],I.prototype,`_currentNodes`,void 0),u([c()],I.prototype,`_searchResults`,void 0),u([c()],I.prototype,`_loading`,void 0),u([c()],I.prototype,`_activeIndex`,void 0),u([c()],I.prototype,`_resolvedTaxonomyUuid`,void 0),u([c()],I.prototype,`_taxonomyResolutionFailed`,void 0),w(`sfx-meta-taxonomy-node-field`,I);var Wi=(e,t)=>!!(t.uuid&&e.uuid===t.uuid||t.sid&&e.sid===t.sid||t.slug&&e.slug===t.slug),L=class extends F{constructor(...e){super(...e),this._query=``,this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set,this._resolvedLookup={bySid:{},bySlug:{}},this._resolvingKeys=new Set}static{this.styles=[Wr,r`
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
    `]}get _items(){return Array.isArray(this.value)?Mn(this.value.map(e=>typeof e==`string`?Sn(e)?{sid:e}:{slug:e}:e),this._resolvedLookup):[]}get _currentLang(){return this.language||`en`}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichMissingLabels()}disconnectedCallback(){super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),this.ultratags?.cancel()}updated(e){e.has(`value`)&&this._maybeEnrichMissingLabels()}async _maybeEnrichMissingLabels(){let e=this.ultratags,t=this.field?.key;if(!e||!t)return;let n=this._items;if(n.length===0)return;let r=[],i=[];for(let e of n)e.i18n||(e.sid?this._enrichmentAttempted.has(e.sid)||r.push(e.sid):e.slug&&!this._enrichmentAttempted.has(e.slug)&&i.push(e.slug));if(r.length===0&&i.length===0)return;let a=[...r,...i];for(let e of a)this._enrichmentAttempted.add(e);this._resolvingKeys=new Set([...this._resolvingKeys,...a]);let o=[];if(r.length>0)try{let t=await e.getBySids({sids:r,format:bn});o.push(...t.items||[])}catch{}if(i.length>0)try{let n=await e.getBySlugs({slugs:i,meta:t,format:bn});o.push(...n.items||[])}catch{}let s=new Set(this._resolvingKeys);for(let e of a)s.delete(e);this._resolvingKeys=s,o.length!==0&&(this._resolvedLookup=On(this._resolvedLookup,Dn(o)))}_selectedKeys(){let e=new Set;for(let t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){let t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){return Tn({i18n:e.i18n,slug:e.slug||``},this._currentLang,this._defaultLang).value||e.slug||e.sid||``}_isResolving(e){return e.i18n?!1:!!e.sid&&this._resolvingKeys.has(e.sid)||!!e.slug&&this._resolvingKeys.has(e.slug)}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||``,sid:e.sid,uuid:e.uuid||``,i18n:e.i18n})):[]}get _dropdownOptions(){let e=this._selectedKeys(),t=t=>!!t.uuid&&e.has(t.uuid)||!!t.sid&&e.has(t.sid)||e.has(t.slug),n=(this._isRestricted?this._restrictedEntries:this._results).filter(e=>!t(e)).map(e=>({entry:e,label:Tn(e,this._currentLang,this._defaultLang).value||e.slug}));if(this._isRestricted){let e=this._query.trim().toLowerCase();return e?n.filter(t=>t.label.toLowerCase().includes(e)):n}return n}get _isSearching(){return this._query.trim().length>=2}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;let e=this._query.trim(),t=En(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(t=>t.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+ +!!this._canCreate}_onInput(e){let t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!this.field?.key){this._results=[],this._loading=!1,this.ultratags?.cancel();return}let n=this.ultratags;if(!n)return;let r=t.trim().toLowerCase();this._loading=!0,n.list({meta:this.field.key,q:r,limit:50,format:bn}).then(e=>{this._query.trim().toLowerCase()===r&&(this._results=e.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===r&&(this._results=[],this._loading=!1)})}_appendResolvedEntry(e){let t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n};this._resolvedLookup=On(this._resolvedLookup,Dn([e]));let n=[...this._items,t];this.value=n,this._query=``,this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit(`field-change`,n),this.updateComplete.then(()=>{this.renderRoot.querySelector(`.input`)?.focus()})}_addEntry(e){this._entryAlreadySelected(e)||this._appendResolvedEntry(e)}async _createFromQuery(){let e=this._query.trim();if(!e)return;let t=this.ultratags;if(!t||!this.field?.key)return;let n=En(e);if(!n)return;let r=this._currentLang;try{let i=(await t.create({meta:this.field.key,mode:xn.UPSERT,items:[{slug:n,i18n:{[r]:e}}]}))?.output?.[0],a={slug:i?.slug||n,sid:i?.sid,uuid:i?.uuid,i18n:i?.i18n||{[r]:e}};if(this._entryAlreadySelected({uuid:a.uuid||``,sid:a.sid,slug:a.slug||n}))return;this._appendResolvedEntry(a)}catch{console.warn(`[sfx-uploader] ultratag create failed`)}}_removeItem(e){let t=this._items.filter(t=>!Wi(t,e));this.value=t,this._emit(`field-change`,t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(`.dropdown:hover`)||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit(`field-blur`,this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{this.renderRoot.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})})}_onKeydown(e){if(e.key===`Escape`){this._dropdownOpen=!1,this._activeIndex=-1,this._emit(`field-escape`);return}if(e.key===`Backspace`&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;let t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),t!==0||e.key===`Enter`)switch(e.key){case`ArrowDown`:e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case`ArrowUp`:e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case`Home`:e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case`End`:e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case`Enter`:{e.preventDefault();let t=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<t.length?this._addEntry(t[this._activeIndex].entry):this._activeIndex===t.length&&this._canCreate||this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&t.length&&this._addEntry(t[0].entry);break}}}render(){let e=this._items,t=this._dropdownOptions,n=t.length,r=this._query.trim(),i=this.field?.placeholder||(this._isRestricted?j(`searchTagsToRemove`,`Search tags to remove`):j(`addCustomTags`,`Add custom tags`));return a`
      <div
        class="container"
        @click=${()=>this.renderRoot.querySelector(`.input`)?.focus()}
      >
        ${e.map(e=>{let t=this._isResolving(e),n=t?``:this._labelForItem(e),r=e.uuid||e.sid||e.slug||n;return a` <span
            class="chip ${t?`chip-loading`:``}"
            title=${t?j(`loading`,`Loading`):n}
            aria-busy=${t}
          >
            ${t?a`<span class="chip-skeleton"></span>`:n}
            <button
              class="chip-x"
              aria-label=${j(`removeItem`,`Remove {{item}}`,{item:t?r:n})}
              @click=${t=>{t.stopPropagation(),this._removeItem(e)}}
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
          aria-label=${this.field?.title??j(`customTags`,`Custom tags`)}
          placeholder=${e.length?``:i}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen?a`
            <div class="dropdown" role="listbox">
              ${!this._isRestricted&&!this._isSearching?a`<div class="hint">
                    ${j(`typeAtLeastNChars`,`Type at least {{count}} characters to search.`,{count:2})}
                  </div>`:s}
              ${!this._isRestricted&&this._isSearching&&this._loading?a`<div class="loading">${j(`loading`,`Loading`)}</div>`:s}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((e,t)=>a` <div
                        class="option ${t===this._activeIndex?`active`:``}"
                        role="option"
                        @mousedown=${t=>{t.preventDefault(),this._addEntry(e.entry)}}
                        @mouseenter=${()=>{this._activeIndex=t}}
                      >
                        ${e.label}
                      </div>`):s}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?a`<div class="empty">${j(`noResults`,`No results`)}</div>`:s}
              ${this._canCreate?a` <div
                    class="option create ${n===this._activeIndex?`active`:``}"
                    @mousedown=${e=>{e.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=n}}
                  >
                    ${j(`createTag`,`Create '{{tag}}'`,{tag:r})}
                  </div>`:s}
            </div>
          `:s}
    `}};u([i({attribute:!1})],L.prototype,`ultratags`,void 0),u([i({attribute:!1})],L.prototype,`language`,void 0),u([i({attribute:!1})],L.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],L.prototype,`restrictToItems`,void 0),u([c()],L.prototype,`_query`,void 0),u([c()],L.prototype,`_results`,void 0),u([c()],L.prototype,`_loading`,void 0),u([c()],L.prototype,`_dropdownOpen`,void 0),u([c()],L.prototype,`_activeIndex`,void 0),u([c()],L.prototype,`_resolvedLookup`,void 0),u([c()],L.prototype,`_resolvingKeys`,void 0),w(`sfx-meta-ultratags-field`,L);var Gi=()=>j(`unsupportedFieldMessage`,`This field is not supported during upload. You can edit it later in the asset library.`),Ki=a`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${n`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,qi=class extends e{constructor(...e){super(...e),this._i18nController=new M(this)}static{this.styles=r`
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
  `}render(){let e=Gi();return a`
      <div class="unsupported" title=${e} aria-label=${e} aria-disabled="true" role="note">
        ${Ki}
        <span class="unsupported-text" aria-hidden="true"
          >${j(`notEditableDuringUpload`,`Not editable during upload`)}</span
        >
      </div>
    `}};w(`sfx-meta-unsupported-field`,qi);var R=class extends e{constructor(...e){super(...e),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}static{this.styles=r`
    :host {
      display: block;
    }
  `}render(){let e=this.field,t=this.value,n=this.disabled;if(vn(e))return a`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case`text`:case`attachment-uri`:return a`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-text-field>`;case`textarea`:return a`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-textarea-field>`;case`select-one`:return a`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${n}
        ></sfx-meta-select-field>`;case`multi-select`:return a`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${n}
        ></sfx-meta-multi-select-field>`;case`tags`:return a`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${n}
        ></sfx-meta-tags-field>`;case`ultratags`:return a`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${n}
        ></sfx-meta-ultratags-field>`;case`taxonomy-node`:return a`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${n}
        ></sfx-meta-taxonomy-node-field>`;case`boolean`:return a`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-boolean-field>`;case`numeric`:case`decimal2`:return a`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-number-field>`;case`date`:return a`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-date-field>`;case`geopoint`:return a`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-geo-point-field>`;case`focus-point`:return a`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;default:return a`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${n}
        ></sfx-meta-text-field>`}}};u([i({attribute:!1})],R.prototype,`field`,void 0),u([i({attribute:!1})],R.prototype,`value`,void 0),u([i({attribute:!1})],R.prototype,`autocomplete`,void 0),u([i({attribute:!1})],R.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],R.prototype,`taxonomyEntry`,void 0),u([i({attribute:!1})],R.prototype,`ultratags`,void 0),u([i({attribute:!1})],R.prototype,`language`,void 0),u([i({attribute:!1})],R.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],R.prototype,`ultratagsRestrictToItems`,void 0),u([i({attribute:!1})],R.prototype,`allowedValues`,void 0),u([i({type:Boolean})],R.prototype,`disabled`,void 0),w(`sfx-metadata-field-edit`,R);var Ji=class extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.taxonomyEntry=null}static{this.styles=r`
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
  `}_formatValue(){let e=this.value,t=this.field?.type;switch(t){case`boolean`:return e===`true`?`True`:e===`false`?`False`:``;case`date`:return e?e instanceof Date?e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):typeof e==`string`&&e.length>0?e:``:``;case`numeric`:case`decimal2`:{if(e==null||e===``)return``;let n=Number(e);return Number.isFinite(n)?n.toLocaleString(void 0,{maximumFractionDigits:t===`decimal2`?2:0}):String(e)}case`select-one`:return e==null||e===``?``:this.field.possible_values?.find(t=>t.internal_unique_value===e||t.api_value===e)?.label??String(e);case`multi-select`:return!Array.isArray(e)||e.length===0?``:e.map(e=>this.field.possible_values?.find(t=>t.internal_unique_value===e||t.api_value===e)?.label??String(e)).join(`, `);case`tags`:return!Array.isArray(e)||e.length===0?``:e.map(e=>e.label||e.value).join(`, `);case`ultratags`:{if(!Array.isArray(e)||e.length===0)return``;let t=this.language||`en`,n=this.defaultLanguage||t;return e.map(e=>typeof e==`string`?e:Tn({i18n:e.i18n,slug:e.slug||``},t,n).value||e.slug||e.sid||``).filter(Boolean).join(`, `)}case`taxonomy-node`:return this.taxonomyEntry?.path?this.taxonomyEntry.path:this.taxonomyEntry?.name?this.taxonomyEntry.name:e==null||e===``?``:String(e);case`geopoint`:{let t=e;return!t||t.latitude===``||t.latitude==null||t.longitude===``||t.longitude==null?``:`(${t.latitude}, ${t.longitude})`}case`focus-point`:{let t=e;return!t||t.horizontal===``||t.horizontal==null||t.vertical===``||t.vertical==null?``:`${t.horizontal}% × ${t.vertical}%`}case`attachment-uri`:return!e||typeof e==`string`&&e.length===0?``:String(e);default:return e==null||e===``?``:String(e)}}render(){if(this.field&&vn(this.field))return a`
        <div class="value empty" title=${Gi()}>
          ${j(`notEditableDuringUpload`,`Not editable during upload`)}
        </div>
      `;let e=this._formatValue(),t=e===``;return this.field?.type===`attachment-uri`&&!t?a`
        <div class="value">
          <a
            class="link"
            href=${e}
            target="_blank"
            rel="noopener noreferrer"
            @click=${e=>e.stopPropagation()}
            >${e}</a
          >
        </div>
      `:a`
      <div class="value ${t?`empty`:``}">${t?`—`:e}</div>
    `}};u([i({attribute:!1})],Ji.prototype,`field`,void 0),u([i({attribute:!1})],Ji.prototype,`value`,void 0),u([i({attribute:!1})],Ji.prototype,`taxonomyEntry`,void 0),u([i({attribute:!1})],Ji.prototype,`language`,void 0),u([i({attribute:!1})],Ji.prototype,`defaultLanguage`,void 0),w(`sfx-metadata-field-view`,Ji);var Yi=class extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}static{this.styles=[Ur,r`
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
    `]}get _filteredGroups(){return(this.groups??[]).filter(e=>e?.variants?.length>1)}get _options(){let e=[];for(let t of this._filteredGroups){let n=!0;for(let r of t.variants)e.push({groupUuid:t.uuid,value:r.api_value,label:r.label,isGroupStart:n,groupLabel:t.label}),n=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;let e=this._options.findIndex(e=>this.selectedFilters[e.groupUuid]===e.value);this._activeIndex=e>=0?e:0,document.addEventListener(`mousedown`,this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener(`mousedown`,this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent(`regional-change`,{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){let e=this.renderRoot.querySelector(`.option.active`);e&&typeof e.scrollIntoView==`function`&&e.scrollIntoView({block:`nearest`})}_onKeydown(e){if(e.key===`Escape`&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._openDropdown());return}let t=this._options;if(t.length)switch(e.key){case`ArrowDown`:e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case`ArrowUp`:e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case`Home`:e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case`End`:e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case`Enter`:this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]))}}_triggerSummary(e){let t=this._filteredGroups;if(t.length===0)return e;let n=[];for(let e of t){let r=this.selectedFilters[e.uuid]??e.variants[0]?.api_value,i=e.variants.find(e=>e.api_value===r);i&&n.push(t.length===1?i.label:`${e.label}: ${i.label}`)}return n.length?n.join(`, `):e}render(){if(this._filteredGroups.length===0)return s;let e=this._options,t=j(`regionalFiltersDropdownLabel`,`Regional settings`),n=this._triggerSummary(t);return a`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${t} — ${n}`}
        title=${n}
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
        <span class="trigger-label">${t}</span>
        <span class="trigger-chevron ${this._open?`open`:``}" aria-hidden="true">
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
      ${this._open?a`
            <div class="dropdown" role="listbox" aria-label=${t}>
              ${e.map((e,t)=>this._renderOption(e,t,e.value===this.selectedFilters[e.groupUuid]))}
            </div>
          `:s}
    `}_renderOption(e,t,n){let r=this._activeIndex===t;return a`
      ${e.isGroupStart?a`<div class="group-header">${e.groupLabel}</div>`:s}
      <div
        class="option ${n?`selected`:``} ${r?`active`:``}"
        role="option"
        aria-selected=${n}
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
    `}};u([i({attribute:!1})],Yi.prototype,`groups`,void 0),u([i({attribute:!1})],Yi.prototype,`selectedFilters`,void 0),u([c()],Yi.prototype,`_open`,void 0),u([c()],Yi.prototype,`_activeIndex`,void 0),w(`sfx-regional-settings`,Yi);var Xi=`system.tags`,Zi=`__tags__`;function Qi(e){return e===Xi}function $i(e){return{key:Xi,ckey:``,uuid:`system-tags`,title:e(`tagsLabel`,`Tags`),type:`tags`,placeholder:e(`addTags`,`Add tags`),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function ea(e,t){let n=$i(t),r=!1,i=e.groups.map(e=>!r&&e.isRoot?(r=!0,{...e,fields:[...e.fields,n]}):e);r||(i=[{uuid:Zi,isRoot:!0,name:t(`generalFieldsLabel`,`General`),fields:[n]},...i]);let a=i.flatMap(e=>e.fields),o=new Map(a.map(e=>[e.key,e]));return{...e,groups:i,fields:a,fieldsByKey:o}}var ta=(e,t)=>typeof t==`string`?t:e,na=class extends e{constructor(...e){super(...e),this.product={},this.disabled=!1,this.t=ta,this._collapsed=!1,this._errors={}}static{this.styles=[Hr,Gr,r`
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
    `]}willUpdate(e){e.has(`product`)&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent(`product-blur`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;let t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError(`ref`)}_onRefBlur(e){let t=e.target.value,n=qn(t);if(n){this._errors={...this._errors,ref:n};return}this._clearError(`ref`),this._emit(`ref`,t===``?void 0:t)}_onPositionInput(){this._clearError(`position`)}_onPositionBlur(e){let t=e.target.value,n=Jn(t);if(n){this._errors={...this._errors,position:n};return}this._clearError(`position`),t===``||t==null?this._emit(`position`,void 0):this._emit(`position`,Number(t))}_onKeydown(e){if(e.key===`Enter`)e.target.blur();else if(e.key===`Escape`){let t=e.target,n=t.dataset.key;n===`ref`&&(t.value=this.product?.ref??``),n===`position`&&(t.value=this.product?.position==null?``:String(this.product.position)),n&&this._clearError(n),t.blur()}}_renderRow(e,t,n){let r=this._errors[e],i=r?this.t(r,r):``;return a`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${n}
          ${r?a`<div class="field-error" role="alert">${i}</div>`:s}
        </div>
      </div>
    `}render(){let e=!this._collapsed,t=this.product?.ref??``,n=this.product?.position==null?``:String(this.product.position);return a`
      <div class="group">
        <button class="group-header" @click=${this._toggle} aria-expanded=${e}>
          <span>${this.t(`productFieldsLabel`,`Product`)}</span>
          <svg
            class="chevron ${e?`open`:``}"
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
        ${e?a`
              <div class="group-content">
                ${this._renderRow(`ref`,this.t(`productRefLabel`,`Product reference`),a`<input
                    type="text"
                    data-key="ref"
                    .value=${t}
                    placeholder=${this.t(`productRefPlaceholder`,`e.g. SKU-12345`)}
                    ?disabled=${this.disabled}
                    @input=${this._onRefInput}
                    @blur=${this._onRefBlur}
                    @keydown=${this._onKeydown}
                  />`)}
                ${this._renderRow(`position`,this.t(`productPositionLabel`,`Position`),a`<input
                    type="number"
                    step="1"
                    inputmode="numeric"
                    data-key="position"
                    .value=${n}
                    placeholder=${this.t(`productPositionPlaceholder`,`0`)}
                    ?disabled=${this.disabled}
                    @input=${this._onPositionInput}
                    @blur=${this._onPositionBlur}
                    @keydown=${this._onKeydown}
                  />`)}
              </div>
            `:s}
      </div>
    `}};u([i({attribute:!1})],na.prototype,`product`,void 0),u([i({type:Boolean})],na.prototype,`disabled`,void 0),u([i({attribute:!1})],na.prototype,`t`,void 0),u([c()],na.prototype,`_collapsed`,void 0),u([c()],na.prototype,`_errors`,void 0),w(`sfx-product-fields-form`,na);var ra={text:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${n`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"focus-point":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><line x1="8" y1="4.5" x2="8" y2="6.5"/><line x1="8" y1="9.5" x2="8" y2="11.5"/><line x1="3.5" y1="8" x2="5.5" y2="8"/><line x1="10.5" y1="8" x2="12.5" y2="8"/><circle cx="8" cy="8" r="1.25"/>`}
  </svg>`,"integer-list":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${n`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${n`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":a`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${n`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function ia(e){return ra[e]??ra.text}function aa(e,t,n){let r=`${e.replace(/\/+$/,``)}/v4/files?folder=${encodeURIComponent(t)}`;if(n)for(let[e,t]of Object.entries(n))t!=null&&(r+=`&${encodeURIComponent(e)}=${encodeURIComponent(t)}`);return r}function oa(e,t){let n=new XMLHttpRequest,r=!1,i=aa(t.apiBase,t.folder,t.extraParams);n.open(`POST`,i);for(let[e,r]of Object.entries(t.authHeaders))n.setRequestHeader(e,r);n.upload.addEventListener(`progress`,e=>{e.lengthComputable&&!r&&t.onProgress(e.loaded,e.total)}),n.addEventListener(`load`,()=>{if(r)return;let i;try{i=JSON.parse(n.responseText)}catch{t.onError(Error(`Invalid JSON response (HTTP ${n.status})`));return}n.status>=200&&n.status<300&&i.status===`success`?t.onComplete(i):ot(i)?t.onComplete(st(i,e)):t.onError(Error(ct(i,`Upload failed (HTTP ${n.status})`)))}),n.addEventListener(`error`,()=>{r||t.onError(Error(`Network error — check your connection`))});let a=new FormData;if(e.file){let t={name:e.name,type:e.type};a.append(`info[files[]]`,JSON.stringify(t)),Object.keys(e.meta).length>0&&a.append(`meta[files[]]`,JSON.stringify(e.meta)),e.tags.length>0&&a.append(`tags[files[]]`,JSON.stringify(e.tags)),Yn(e.product)&&a.append(`product[files[]]`,JSON.stringify(Xn(e.product))),a.append(`files[]`,e.file,e.name)}return n.send(a),{abort(){r=!0,n.abort()}}}function sa(e,t,n){let r=`${e.replace(/\/+$/,``)}/v4/files?folder=${encodeURIComponent(t)}`;if(n)for(let[e,t]of Object.entries(n))t!=null&&(r+=`&${encodeURIComponent(e)}=${encodeURIComponent(t)}`);return r}function ca(e,t){let n={name:e.name,type:e.type,"filerobot-folder":t};return e.meta&&Object.keys(e.meta).length>0&&(n.meta=JSON.stringify(e.meta)),e.tags&&e.tags.length>0&&(n.tags=JSON.stringify(e.tags)),Yn(e.product)&&(n.product=JSON.stringify(Xn(e.product))),n}function la(e){let t=`${re(e.companionUrl)}/api/${e.token}`,n;try{n=new WebSocket(t)}catch{return e.onError(Error(`Failed to connect to upload progress channel`)),null}let r=!1,i=()=>{r=!0,n.onmessage=null,n.onerror=null,n.onclose=null};return n.onmessage=t=>{if(!r)try{let r=JSON.parse(t.data);switch(r.action){case`progress`:{let t=r.payload,n=t.bytesUploaded??0,i=t.bytesTotal??(e.expectedSize||1);e.onProgress(n,i);break}case`success`:{let t=r.payload;if(i(),n.close(),t.response?.responseText)try{let n=JSON.parse(t.response.responseText);if(n.status===`success`){e.onComplete(n);return}if(ot(n)){e.onComplete(st(n,e.uploadFile));return}e.onError(Error(ct(n,`Upload failed`)));return}catch{}e.onError(Error(`Upload completed but no valid response received`));break}case`error`:{let t=r.payload;i(),n.close();let a=t.error?.message||`Upload failed`;if(t.response?.responseText)try{a=ct(JSON.parse(t.response.responseText),a)}catch{}e.onError(Error(a));break}}}catch{}},n.onerror=()=>{r||(i(),e.onError(Error(`Upload progress connection failed`)))},n.onclose=()=>{r||(i(),e.onError(Error(`Upload progress connection closed unexpectedly`)))},n}function ua(e){if(e){e.onmessage=null,e.onerror=null,e.onclose=null;try{e.send(JSON.stringify({action:`cancel`,payload:{}}))}catch{}e.close()}}async function da(e,t,n,r,i,a,o){let s=e.replace(/\/+$/,``),c=await fetch(`${s}/google-picker/get`,{method:`POST`,headers:{Accept:`application/json`,"Content-Type":`application/json`},body:JSON.stringify({accessToken:t,platform:`drive`,fileId:n,endpoint:r,headers:i,size:a,metadata:o})});if(!c.ok){let e=await c.text().catch(()=>``);throw Error(`Google Picker upload failed (${c.status}): ${e}`)}return c.json()}function fa(e,t){let n=e.remoteInfo;if(!n)return t.onError(Error(`remoteInfo is required for companion upload`)),{abort(){}};let r=!1,i=null,a=sa(t.apiBase,t.folder,t.extraParams),o=ca(e,t.folder);return(n.pickerAccessToken?da(n.companionUrl,n.pickerAccessToken,n.fileId,a,t.authHeaders,n.size,o):ne(n.companionUrl,n.provider,n.token,n.requestPath,{fileId:n.fileId,endpoint:a,headers:t.authHeaders,size:n.size,metadata:o},!n.token)).then(a=>{r||(i=la({companionUrl:n.companionUrl,token:a.token,uploadFile:e,expectedSize:n.size,onProgress:(e,n)=>{r||t.onProgress(e,n)},onComplete:e=>{r||t.onComplete(e)},onError:e=>{r||t.onError(e)}}))}).catch(e=>{r||t.onError(e instanceof Error?e:Error(String(e)))}),{abort(){r=!0,ua(i),i=null}}}function pa(e,t){let n=e.remoteUrl;if(!n)return t.onError(Error(`Remote URL is required for URL upload`)),{abort(){}};let r=!1,i=null,a=new AbortController,o=sa(t.apiBase,t.folder,t.extraParams);return ie(t.companionUrl,n,a.signal).then(i=>{if(r)return null;t.onMeta?.({name:i.name,type:i.type,size:i.size});let s=ca(e,t.folder);return i.name&&!e.nameIsUserDefined&&(s.name=i.name),i.type&&(s.type=i.type),ae(t.companionUrl,n,{fileId:e.id,endpoint:o,headers:t.authHeaders,size:i.size,metadata:s},a.signal).then(e=>({result:e,size:i.size}))}).then(n=>{r||!n||(i=la({companionUrl:t.companionUrl,token:n.result.token,uploadFile:e,expectedSize:n.size,onProgress:(e,n)=>{r||t.onProgress(e,n)},onComplete:e=>{r||t.onComplete(e)},onError:e=>{r||t.onError(e)}}))}).catch(e=>{r||e&&e.name===`AbortError`||t.onError(e instanceof Error?e:Error(String(e)))}),{abort(){r=!0,a.abort(),ua(i),i=null}}}function ma(e){"@babel/helpers - typeof";return ma=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ma(e)}function ha(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,_a(r.key),r)}}function ga(e,t,n){return t&&ha(e.prototype,t),n&&ha(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _a(e){var t=va(e,`string`);return ma(t)==`symbol`?t:t+``}function va(e,t){if(ma(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ma(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ya(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ba(e,t,n){return t=ka(t),xa(e,Ea()?Reflect.construct(t,n||[],ka(e).constructor):t.apply(e,n))}function xa(e,t){if(t&&(ma(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return Sa(e)}function Sa(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Ca(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Oa(e,t)}function wa(e){var t=typeof Map==`function`?new Map:void 0;return wa=function(e){if(e===null||!Da(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Ta(e,arguments,ka(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Oa(n,e)},wa(e)}function Ta(e,t,n){if(Ea())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&Oa(i,n.prototype),i}function Ea(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ea=function(){return!!e})()}function Da(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function Oa(e,t){return Oa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Oa(e,t)}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ka(e)}var Aa=function(e){function t(e){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(ya(this,t),n=ba(this,t,[e]),n.originalRequest=i,n.originalResponse=a,n.causingError=r,r!=null&&(e+=`, caused by ${r.toString()}`),i!=null){var o=i.getHeader(`X-Request-ID`)||`n/a`,s=i.getMethod(),c=i.getURL(),l=a?a.getStatus():`n/a`,u=a?a.getBody()||``:`n/a`;e+=`, originated from request (method: ${s}, url: ${c}, response code: ${l}, response text: ${u}, request id: ${o})`}return n.message=e,n}return Ca(t,e),ga(t)}(wa(Error));function ja(e){"@babel/helpers - typeof";return ja=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ja(e)}function Ma(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Na(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Fa(r.key),r)}}function Pa(e,t,n){return t&&Na(e.prototype,t),n&&Na(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fa(e){var t=Ia(e,`string`);return ja(t)==`symbol`?t:t+``}function Ia(e,t){if(ja(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ja(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var La=function(){function e(){Ma(this,e)}return Pa(e,[{key:`listAllUploads`,value:function(){return Promise.resolve([])}},{key:`findUploadsByFingerprint`,value:function(e){return Promise.resolve([])}},{key:`removeUpload`,value:function(e){return Promise.resolve()}},{key:`addUpload`,value:function(e,t){return Promise.resolve(null)}}])}(),Ra=`3.7.8`,za=Ra,Ba=typeof Buffer==`function`,Va=typeof TextDecoder==`function`?new TextDecoder:void 0,Ha=typeof TextEncoder==`function`?new TextEncoder:void 0,Ua=Array.prototype.slice.call(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`),Wa=(e=>{let t={};return e.forEach((e,n)=>t[e]=n),t})(Ua),Ga=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,z=String.fromCharCode.bind(String),Ka=typeof Uint8Array.from==`function`?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),qa=e=>e.replace(/=/g,``).replace(/[+\/]/g,e=>e==`+`?`-`:`_`),Ja=e=>e.replace(/[^A-Za-z0-9\+\/]/g,``),Ya=e=>{let t,n,r,i,a=``,o=e.length%3;for(let o=0;o<e.length;){if((n=e.charCodeAt(o++))>255||(r=e.charCodeAt(o++))>255||(i=e.charCodeAt(o++))>255)throw TypeError(`invalid character found`);t=n<<16|r<<8|i,a+=Ua[t>>18&63]+Ua[t>>12&63]+Ua[t>>6&63]+Ua[t&63]}return o?a.slice(0,o-3)+`===`.substring(o):a},Xa=typeof btoa==`function`?e=>btoa(e):Ba?e=>Buffer.from(e,`binary`).toString(`base64`):Ya,Za=Ba?e=>Buffer.from(e).toString(`base64`):e=>{let t=4096,n=[];for(let r=0,i=e.length;r<i;r+=t)n.push(z.apply(null,e.subarray(r,r+t)));return Xa(n.join(``))},Qa=(e,t=!1)=>t?qa(Za(e)):Za(e),$a=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?z(192|t>>>6)+z(128|t&63):z(224|t>>>12&15)+z(128|t>>>6&63)+z(128|t&63)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return z(240|t>>>18&7)+z(128|t>>>12&63)+z(128|t>>>6&63)+z(128|t&63)},eo=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,to=e=>e.replace(eo,$a),no=Ba?e=>Buffer.from(e,`utf8`).toString(`base64`):Ha?e=>Za(Ha.encode(e)):e=>Xa(to(e)),ro=(e,t=!1)=>t?qa(no(e)):no(e),io=e=>ro(e,!0),ao=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,oo=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return z((t>>>10)+55296)+z((t&1023)+56320);case 3:return z((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return z((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},so=e=>e.replace(ao,oo),co=e=>{if(e=e.replace(/\s+/g,``),!Ga.test(e))throw TypeError(`malformed base64.`);e+=`==`.slice(2-(e.length&3));let t,n,r,i=[];for(let a=0;a<e.length;)t=Wa[e.charAt(a++)]<<18|Wa[e.charAt(a++)]<<12|(n=Wa[e.charAt(a++)])<<6|(r=Wa[e.charAt(a++)]),n===64?i.push(z(t>>16&255)):r===64?i.push(z(t>>16&255,t>>8&255)):i.push(z(t>>16&255,t>>8&255,t&255));return i.join(``)},lo=typeof atob==`function`?e=>atob(Ja(e)):Ba?e=>Buffer.from(e,`base64`).toString(`binary`):co,uo=Ba?e=>Ka(Buffer.from(e,`base64`)):e=>Ka(lo(e).split(``).map(e=>e.charCodeAt(0))),fo=e=>uo(mo(e)),po=Ba?e=>Buffer.from(e,`base64`).toString(`utf8`):Va?e=>Va.decode(uo(e)):e=>so(lo(e)),mo=e=>Ja(e.replace(/[-_]/g,e=>e==`-`?`+`:`/`)),ho=e=>po(mo(e)),go=e=>{if(typeof e!=`string`)return!1;let t=e.replace(/\s+/g,``).replace(/={0,2}$/,``);return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},_o=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),vo=function(){let e=(e,t)=>Object.defineProperty(String.prototype,e,_o(t));e(`fromBase64`,function(){return ho(this)}),e(`toBase64`,function(e){return ro(this,e)}),e(`toBase64URI`,function(){return ro(this,!0)}),e(`toBase64URL`,function(){return ro(this,!0)}),e(`toUint8Array`,function(){return fo(this)})},yo=function(){let e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,_o(t));e(`toBase64`,function(e){return Qa(this,e)}),e(`toBase64URI`,function(){return Qa(this,!0)}),e(`toBase64URL`,function(){return Qa(this,!0)})},bo={version:Ra,VERSION:za,atob:lo,atobPolyfill:co,btoa:Xa,btoaPolyfill:Ya,fromBase64:ho,toBase64:ro,encode:ro,encodeURI:io,encodeURL:io,utob:to,btou:so,decode:ho,isValid:go,fromUint8Array:Qa,toUint8Array:fo,extendString:vo,extendUint8Array:yo,extendBuiltins:()=>{vo(),yo()}},xo=fe(((e,t)=>{t.exports=function(e,t){if(t=t.split(`:`)[0],e=+e,!e)return!1;switch(t){case`http`:case`ws`:return e!==80;case`https`:case`wss`:return e!==443;case`ftp`:return e!==21;case`gopher`:return e!==70;case`file`:return!1}return e!==0}})),So=fe((e=>{var t=Object.prototype.hasOwnProperty,n;function r(e){try{return decodeURIComponent(e.replace(/\+/g,` `))}catch{return null}}function i(e){try{return encodeURIComponent(e)}catch{return null}}function a(e){for(var t=/([^=?#&]+)=?([^&]*)/g,n={},i;i=t.exec(e);){var a=r(i[1]),o=r(i[2]);a===null||o===null||a in n||(n[a]=o)}return n}function o(e,r){r||=``;var a=[],o,s;for(s in typeof r!=`string`&&(r=`?`),e)if(t.call(e,s)){if(o=e[s],!o&&(o===null||o===n||isNaN(o))&&(o=``),s=i(s),o=i(o),s===null||o===null)continue;a.push(s+`=`+o)}return a.length?r+a.join(`&`):``}e.stringify=o,e.parse=a})),Co=me(fe(((e,t)=>{var n=xo(),r=So(),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,a=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,c=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,l=/^[a-zA-Z]:/;function u(e){return(e||``).toString().replace(i,``)}var d=[[`#`,`hash`],[`?`,`query`],function(e,t){return m(t.protocol)?e.replace(/\\/g,`/`):e},[`/`,`pathname`],[`@`,`auth`,1],[NaN,`host`,void 0,1,1],[/:(\d*)$/,`port`,void 0,1],[NaN,`hostname`,void 0,1,1]],f={hash:1,query:1};function p(e){var t=(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{}).location||{};e||=t;var n={},r=typeof e,i;if(e.protocol===`blob:`)n=new _(unescape(e.pathname),{});else if(r===`string`)for(i in n=new _(e,{}),f)delete n[i];else if(r===`object`){for(i in e)i in f||(n[i]=e[i]);n.slashes===void 0&&(n.slashes=o.test(e.href))}return n}function m(e){return e===`file:`||e===`ftp:`||e===`http:`||e===`https:`||e===`ws:`||e===`wss:`}function h(e,t){e=u(e),e=e.replace(a,``),t||={};var n=c.exec(e),r=n[1]?n[1].toLowerCase():``,i=!!n[2],o=!!n[3],s=0,l;return i?o?(l=n[2]+n[3]+n[4],s=n[2].length+n[3].length):(l=n[2]+n[4],s=n[2].length):o?(l=n[3]+n[4],s=n[3].length):l=n[4],r===`file:`?s>=2&&(l=l.slice(2)):m(r)?l=n[4]:r?i&&(l=l.slice(2)):s>=2&&m(t.protocol)&&(l=n[4]),{protocol:r,slashes:i||m(r),slashesCount:s,rest:l}}function g(e,t){if(e===``)return t;for(var n=(t||`/`).split(`/`).slice(0,-1).concat(e.split(`/`)),r=n.length,i=n[r-1],a=!1,o=0;r--;)n[r]===`.`?n.splice(r,1):n[r]===`..`?(n.splice(r,1),o++):o&&(r===0&&(a=!0),n.splice(r,1),o--);return a&&n.unshift(``),(i===`.`||i===`..`)&&n.push(``),n.join(`/`)}function _(e,t,i){if(e=u(e),e=e.replace(a,``),!(this instanceof _))return new _(e,t,i);var o,s,c,f,v,y,b=d.slice(),x=typeof t,S=this,C=0;for(x!==`object`&&x!==`string`&&(i=t,t=null),i&&typeof i!=`function`&&(i=r.parse),t=p(t),s=h(e||``,t),o=!s.protocol&&!s.slashes,S.slashes=s.slashes||o&&t.slashes,S.protocol=s.protocol||t.protocol||``,e=s.rest,(s.protocol===`file:`&&(s.slashesCount!==2||l.test(e))||!s.slashes&&(s.protocol||s.slashesCount<2||!m(S.protocol)))&&(b[3]=[/(.*)/,`pathname`]);C<b.length;C++){if(f=b[C],typeof f==`function`){e=f(e,S);continue}c=f[0],y=f[1],c===c?typeof c==`string`?(v=c===`@`?e.lastIndexOf(c):e.indexOf(c),~v&&(typeof f[2]==`number`?(S[y]=e.slice(0,v),e=e.slice(v+f[2])):(S[y]=e.slice(v),e=e.slice(0,v)))):(v=c.exec(e))&&(S[y]=v[1],e=e.slice(0,v.index)):S[y]=e,S[y]=S[y]||o&&f[3]&&t[y]||``,f[4]&&(S[y]=S[y].toLowerCase())}i&&(S.query=i(S.query)),o&&t.slashes&&S.pathname.charAt(0)!==`/`&&(S.pathname!==``||t.pathname!==``)&&(S.pathname=g(S.pathname,t.pathname)),S.pathname.charAt(0)!==`/`&&m(S.protocol)&&(S.pathname=`/`+S.pathname),n(S.port,S.protocol)||(S.host=S.hostname,S.port=``),S.username=S.password=``,S.auth&&=(v=S.auth.indexOf(`:`),~v?(S.username=S.auth.slice(0,v),S.username=encodeURIComponent(decodeURIComponent(S.username)),S.password=S.auth.slice(v+1),S.password=encodeURIComponent(decodeURIComponent(S.password))):S.username=encodeURIComponent(decodeURIComponent(S.auth)),S.password?S.username+`:`+S.password:S.username),S.origin=S.protocol!==`file:`&&m(S.protocol)&&S.host?S.protocol+`//`+S.host:`null`,S.href=S.toString()}function v(e,t,i){var a=this;switch(e){case`query`:typeof t==`string`&&t.length&&(t=(i||r.parse)(t)),a[e]=t;break;case`port`:a[e]=t,n(t,a.protocol)?t&&(a.host=a.hostname+`:`+t):(a.host=a.hostname,a[e]=``);break;case`hostname`:a[e]=t,a.port&&(t+=`:`+a.port),a.host=t;break;case`host`:a[e]=t,s.test(t)?(t=t.split(`:`),a.port=t.pop(),a.hostname=t.join(`:`)):(a.hostname=t,a.port=``);break;case`protocol`:a.protocol=t.toLowerCase(),a.slashes=!i;break;case`pathname`:case`hash`:if(t){var o=e===`pathname`?`/`:`#`;a[e]=t.charAt(0)===o?t:o+t}else a[e]=t;break;case`username`:case`password`:a[e]=encodeURIComponent(t);break;case`auth`:var c=t.indexOf(`:`);~c?(a.username=t.slice(0,c),a.username=encodeURIComponent(decodeURIComponent(a.username)),a.password=t.slice(c+1),a.password=encodeURIComponent(decodeURIComponent(a.password))):a.username=encodeURIComponent(decodeURIComponent(t))}for(var l=0;l<d.length;l++){var u=d[l];u[4]&&(a[u[1]]=a[u[1]].toLowerCase())}return a.auth=a.password?a.username+`:`+a.password:a.username,a.origin=a.protocol!==`file:`&&m(a.protocol)&&a.host?a.protocol+`//`+a.host:`null`,a.href=a.toString(),a}function y(e){(!e||typeof e!=`function`)&&(e=r.stringify);var t,n=this,i=n.host,a=n.protocol;a&&a.charAt(a.length-1)!==`:`&&(a+=`:`);var o=a+(n.protocol&&n.slashes||m(n.protocol)?`//`:``);return n.username?(o+=n.username,n.password&&(o+=`:`+n.password),o+=`@`):n.password?(o+=`:`+n.password,o+=`@`):n.protocol!==`file:`&&m(n.protocol)&&!i&&n.pathname!==`/`&&(o+=`@`),(i[i.length-1]===`:`||s.test(n.hostname)&&!n.port)&&(i+=`:`),o+=i+n.pathname,t=typeof n.query==`object`?e(n.query):n.query,t&&(o+=t.charAt(0)===`?`?t:`?`+t),n.hash&&(o+=n.hash),o}_.prototype={set:v,toString:y},_.extractProtocol=h,_.location=p,_.trimLeft=u,_.qs=r,t.exports=_}))());function wo(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){var t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)})}function To(){To=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype);return i(o,`_invoke`,{value:ee(e,n,new re(r||[]))}),o}function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}t.wrap=u;var f=`suspendedStart`,p=`suspendedYield`,m=`executing`,h=`completed`,g={};function _(){}function v(){}function y(){}var b={};l(b,o,function(){return this});var x=Object.getPrototypeOf,S=x&&x(x(ie([])));S&&S!==n&&r.call(S,o)&&(b=S);var C=y.prototype=_.prototype=Object.create(b);function w(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function T(e,t){function n(i,a,o,s){var c=d(e[i],e,a);if(c.type!==`throw`){var l=c.arg,u=l.value;return u&&Mo(u)==`object`&&r.call(u,`__await`)?t.resolve(u.__await).then(function(e){n(`next`,e,o,s)},function(e){n(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return n(`throw`,e,o,s)})}s(c.arg)}var a;i(this,`_invoke`,{value:function(e,r){function i(){return new t(function(t,i){n(e,r,t,i)})}return a=a?a.then(i,i):i()}})}function ee(t,n,r){var i=f;return function(a,o){if(i===m)throw Error(`Generator is already running`);if(i===h){if(a===`throw`)throw o;return{value:e,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var c=E(s,r);if(c){if(c===g)continue;return c}}if(r.method===`next`)r.sent=r._sent=r.arg;else if(r.method===`throw`){if(i===f)throw i=h,r.arg;r.dispatchException(r.arg)}else r.method===`return`&&r.abrupt(`return`,r.arg);i=m;var l=d(t,n,r);if(l.type===`normal`){if(i=r.done?h:p,l.arg===g)continue;return{value:l.arg,done:r.done}}l.type===`throw`&&(i=h,r.method=`throw`,r.arg=l.arg)}}}function E(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,r===`throw`&&t.iterator.return&&(n.method=`return`,n.arg=e,E(t,n),n.method===`throw`)||r!==`return`&&(n.method=`throw`,n.arg=TypeError(`The iterator does not provide a '`+r+`' method`)),g;var a=d(i,t.iterator,n.arg);if(a.type===`throw`)return n.method=`throw`,n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,n.method!==`return`&&(n.method=`next`,n.arg=e),n.delegate=null,g):o:(n.method=`throw`,n.arg=TypeError(`iterator result is not an object`),n.delegate=null,g)}function te(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function ne(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function re(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(te,this),this.reset(!0)}function ie(t){if(t||t===``){var n=t[o];if(n)return n.call(t);if(typeof t.next==`function`)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw TypeError(Mo(t)+` is not iterable`)}return v.prototype=y,i(C,`constructor`,{value:y,configurable:!0}),i(y,`constructor`,{value:v,configurable:!0}),v.displayName=l(y,c,`GeneratorFunction`),t.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return!!t&&(t===v||(t.displayName||t.name)===`GeneratorFunction`)},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},w(T.prototype),l(T.prototype,s,function(){return this}),t.AsyncIterator=T,t.async=function(e,n,r,i,a){a===void 0&&(a=Promise);var o=new T(u(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(C),l(C,c,`Generator`),l(C,o,function(){return this}),l(C,`toString`,function(){return`[object Generator]`}),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=ie,re.prototype={constructor:re,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method=`next`,this.arg=e,this.tryEntries.forEach(ne),!t)for(var n in this)n.charAt(0)===`t`&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type=`throw`,s.arg=t,n.next=r,i&&(n.method=`next`,n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return i(`end`);if(o.tryLoc<=this.prev){var c=r.call(o,`catchLoc`),l=r.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw Error(`try statement without catch or finally`);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),ne(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;ne(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(t,n,r){return this.delegate={iterator:ie(t),resultName:n,nextLoc:r},this.method===`next`&&(this.arg=e),g}},t}function Eo(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Do(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Eo(a,r,i,o,s,`next`,e)}function s(e){Eo(a,r,i,o,s,`throw`,e)}o(void 0)})}}function Oo(e,t){return jo(e)||Ao(e,t)||Po(e,t)||ko()}function ko(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ao(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function jo(e){if(Array.isArray(e))return e}function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Mo(e)}function No(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Po(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1,s;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,s=e},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(o)throw s}}}}function Po(e,t){if(e){if(typeof e==`string`)return Fo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fo(e,t)}}function Fo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Lo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Io(Object(n),!0).forEach(function(t){Ro(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Io(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ro(e,t,n){return t=Ho(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zo(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Bo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Ho(r.key),r)}}function Vo(e,t,n){return t&&Bo(e.prototype,t),n&&Bo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ho(e){var t=Uo(e,`string`);return Mo(t)==`symbol`?t:t+``}function Uo(e,t){if(Mo(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Mo(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Wo=`tus-v1`,Go=`ietf-draft-03`,Ko=`ietf-draft-05`,qo={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:ns,chunkSize:1/0,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Wo},Jo=function(){function e(t,n){zo(this,e),`resume`in n&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=n,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=t,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Vo(e,[{key:`findPreviousUploads`,value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then(function(t){return e._urlStorage.findUploadsByFingerprint(t)})}},{key:`resumeFromPreviousUpload`,value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:`start`,value:function(){var e=this,t=this.file;if(!t){this._emitError(Error(`tus: no file or stream to upload provided`));return}if(![Wo,Go,Ko].includes(this.options.protocol)){this._emitError(Error(`tus: unsupported protocol ${this.options.protocol}`));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(Error(`tus: neither an endpoint or an upload URL is provided`));return}var n=this.options.retryDelays;if(n!=null&&Object.prototype.toString.call(n)!==`[object Array]`){this._emitError(Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var r=0,i=[`uploadUrl`,`uploadSize`,`uploadLengthDeferred`];r<i.length;r++){var a=i[r];if(this.options[a]){this._emitError(Error(`tus: cannot use the ${a} option when parallelUploads is enabled`));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(t,this.options).then(function(n){return n==null||`${n}`,e._fingerprint=n,e._source?e._source:e.options.fileReader.openFile(t,e.options.chunkSize)}).then(function(t){if(e._source=t,e.options.uploadLengthDeferred)e._size=null;else if(e.options.uploadSize!=null){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size)){e._emitError(Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(e._size=e._source.size,e._size==null){e._emitError(Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}e.options.parallelUploads>1||e._parallelUploadUrls!=null?e._startParallelUpload():e._startSingleUpload()}).catch(function(t){e._emitError(t)})}},{key:`_startParallelUpload`,value:function(){var t=this,n=this._size,r=0;this._parallelUploads=[];var i=this._parallelUploadUrls==null?this.options.parallelUploads:this._parallelUploadUrls.length,a=this.options.parallelUploadBoundaries??is(this._source.size,i);this._parallelUploadUrls&&a.forEach(function(e,n){e.uploadUrl=t._parallelUploadUrls[n]||null}),this._parallelUploadUrls=Array(a.length);var o=a.map(function(i,o){var s=0;return t._source.slice(i.start,i.end).then(function(c){var l=c.value;return new Promise(function(c,u){var d=new e(l,Lo(Lo({},t.options),{},{uploadUrl:i.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:t.options.metadataForPartialUploads,headers:Lo(Lo({},t.options.headers),{},{"Upload-Concat":`partial`}),onSuccess:c,onError:u,onProgress:function(e){r=r-s+e,s=e,t._emitProgress(r,n)},onUploadUrlAvailable:function(){t._parallelUploadUrls[o]=d.url,t._parallelUploadUrls.filter(function(e){return!!e}).length===a.length&&t._saveUploadInUrlStorage()}}));d.start(),t._parallelUploads.push(d)})})}),s;Promise.all(o).then(function(){s=t._openRequest(`POST`,t.options.endpoint),s.setHeader(`Upload-Concat`,`final;${t._parallelUploadUrls.join(` `)}`);var e=Yo(t.options.metadata);return e!==``&&s.setHeader(`Upload-Metadata`,e),t._sendRequest(s,null)}).then(function(e){if(!Xo(e.getStatus(),200)){t._emitHttpError(s,e,`tus: unexpected response while creating upload`);return}var n=e.getHeader(`Location`);if(n==null){t._emitHttpError(s,e,`tus: invalid or missing Location header`);return}t.url=rs(t.options.endpoint,n),`${t.url}`,t._emitSuccess(e)}).catch(function(e){t._emitError(e)})}},{key:`_startSingleUpload`,value:function(){if(this._aborted=!1,this.url!=null){`${this.url}`,this._resumeUpload();return}if(this.options.uploadUrl!=null){`${this.options.uploadUrl}`,this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:`abort`,value:function(t){var n=this;if(this._parallelUploads!=null){var r=No(this._parallelUploads),i;try{for(r.s();!(i=r.n()).done;)i.value.abort(t)}catch(e){r.e(e)}finally{r.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():e.terminate(this.url,this.options).then(function(){return n._removeFromUrlStorage()})}},{key:`_emitHttpError`,value:function(e,t,n,r){this._emitError(new Aa(n,r,e,t))}},{key:`_emitError`,value:function(e){var t=this;if(!this._aborted){if(this.options.retryDelays!=null&&(this._offset!=null&&this._offset>this._offsetBeforeRetry&&(this._retryAttempt=0),ts(e,this._retryAttempt,this.options))){var n=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){t.start()},n);return}if(typeof this.options.onError==`function`)this.options.onError(e);else throw e}}},{key:`_emitSuccess`,value:function(e){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess==`function`&&this.options.onSuccess({lastResponse:e})}},{key:`_emitProgress`,value:function(e,t){typeof this.options.onProgress==`function`&&this.options.onProgress(e,t)}},{key:`_emitChunkComplete`,value:function(e,t,n){typeof this.options.onChunkComplete==`function`&&this.options.onChunkComplete(e,t,n)}},{key:`_createUpload`,value:function(){var e=this;if(!this.options.endpoint){this._emitError(Error(`tus: unable to create upload because no endpoint is provided`));return}var t=this._openRequest(`POST`,this.options.endpoint);this.options.uploadLengthDeferred?t.setHeader(`Upload-Defer-Length`,`1`):t.setHeader(`Upload-Length`,`${this._size}`);var n=Yo(this.options.metadata);n!==``&&t.setHeader(`Upload-Metadata`,n);var r;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,r=this._addChunkToRequest(t)):((this.options.protocol===Go||this.options.protocol===Ko)&&t.setHeader(`Upload-Complete`,`?0`),r=this._sendRequest(t,null)),r.then(function(n){if(!Xo(n.getStatus(),200)){e._emitHttpError(t,n,`tus: unexpected response while creating upload`);return}var r=n.getHeader(`Location`);if(r==null){e._emitHttpError(t,n,`tus: invalid or missing Location header`);return}if(e.url=rs(e.options.endpoint,r),`${e.url}`,typeof e.options.onUploadUrlAvailable==`function`&&e.options.onUploadUrlAvailable(),e._size===0){e._emitSuccess(n),e._source.close();return}e._saveUploadInUrlStorage().then(function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(t,n):(e._offset=0,e._performUpload())})}).catch(function(n){e._emitHttpError(t,null,`tus: failed to create upload`,n)})}},{key:`_resumeUpload`,value:function(){var e=this,t=this._openRequest(`HEAD`,this.url);this._sendRequest(t,null).then(function(n){var r=n.getStatus();if(!Xo(r,200)){if(r===423){e._emitHttpError(t,n,`tus: upload is currently locked; retry later`);return}if(Xo(r,400)&&e._removeFromUrlStorage(),!e.options.endpoint){e._emitHttpError(t,n,`tus: unable to resume upload (new upload cannot be created without an endpoint)`);return}e.url=null,e._createUpload();return}var i=Number.parseInt(n.getHeader(`Upload-Offset`),10);if(Number.isNaN(i)){e._emitHttpError(t,n,`tus: invalid or missing offset value`);return}var a=Number.parseInt(n.getHeader(`Upload-Length`),10);if(Number.isNaN(a)&&!e.options.uploadLengthDeferred&&e.options.protocol===Wo){e._emitHttpError(t,n,`tus: invalid or missing length value`);return}typeof e.options.onUploadUrlAvailable==`function`&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then(function(){if(i===a){e._emitProgress(a,a),e._emitSuccess(n);return}e._offset=i,e._performUpload()})}).catch(function(n){e._emitHttpError(t,null,`tus: failed to resume upload`,n)})}},{key:`_performUpload`,value:function(){var e=this;if(!this._aborted){var t;this.options.overridePatchMethod?(t=this._openRequest(`POST`,this.url),t.setHeader(`X-HTTP-Method-Override`,`PATCH`)):t=this._openRequest(`PATCH`,this.url),t.setHeader(`Upload-Offset`,`${this._offset}`),this._addChunkToRequest(t).then(function(n){if(!Xo(n.getStatus(),200)){e._emitHttpError(t,n,`tus: unexpected response while uploading chunk`);return}e._handleUploadResponse(t,n)}).catch(function(n){e._aborted||e._emitHttpError(t,null,`tus: failed to upload chunk at offset ${e._offset}`,n)})}}},{key:`_addChunkToRequest`,value:function(e){var t=this,n=this._offset,r=this._offset+this.options.chunkSize;return e.setProgressHandler(function(e){t._emitProgress(n+e,t._size)}),this.options.protocol===Wo?e.setHeader(`Content-Type`,`application/offset+octet-stream`):this.options.protocol===Ko&&e.setHeader(`Content-Type`,`application/partial-upload`),(r===1/0||r>this._size)&&!this.options.uploadLengthDeferred&&(r=this._size),this._source.slice(n,r).then(function(n){var r=n.value,i=n.done,a=r!=null&&r.size?r.size:0;t.options.uploadLengthDeferred&&i&&(t._size=t._offset+a,e.setHeader(`Upload-Length`,`${t._size}`));var o=t._offset+a;return!t.options.uploadLengthDeferred&&i&&o!==t._size?Promise.reject(Error(`upload was configured with a size of ${t._size} bytes, but the source is done after ${o} bytes`)):r===null?t._sendRequest(e):((t.options.protocol===Go||t.options.protocol===Ko)&&e.setHeader(`Upload-Complete`,i?`?1`:`?0`),t._emitProgress(t._offset,t._size),t._sendRequest(e,r))})}},{key:`_handleUploadResponse`,value:function(e,t){var n=Number.parseInt(t.getHeader(`Upload-Offset`),10);if(Number.isNaN(n)){this._emitHttpError(e,t,`tus: invalid or missing offset value`);return}if(this._emitProgress(n,this._size),this._emitChunkComplete(n-this._offset,n,this._size),this._offset=n,n===this._size){this._emitSuccess(t),this._source.close();return}this._performUpload()}},{key:`_openRequest`,value:function(e,t){var n=Zo(e,t,this.options);return this._req=n,n}},{key:`_removeFromUrlStorage`,value:function(){var e=this;this._urlStorageKey&&=(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(t){e._emitError(t)}),null)}},{key:`_saveUploadInUrlStorage`,value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var t={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?t.parallelUploadUrls=this._parallelUploadUrls:t.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,t).then(function(t){e._urlStorageKey=t})}},{key:`_sendRequest`,value:function(e){return Qo(e,arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,this.options)}}],[{key:`terminate`,value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Zo(`DELETE`,t,n);return Qo(r,null,n).then(function(e){if(e.getStatus()!==204)throw new Aa(`tus: unexpected response while terminating upload`,null,r,e)}).catch(function(i){if(i instanceof Aa||(i=new Aa(`tus: failed to terminate upload`,i,r,null)),!ts(i,0,n))throw i;var a=n.retryDelays[0],o=n.retryDelays.slice(1),s=Lo(Lo({},n),{},{retryDelays:o});return new Promise(function(e){return setTimeout(e,a)}).then(function(){return e.terminate(t,s)})})}}])}();function Yo(e){return Object.entries(e).map(function(e){var t=Oo(e,2),n=t[0],r=t[1];return`${n} ${bo.encode(String(r))}`}).join(`,`)}function Xo(e,t){return e>=t&&e<t+100}function Zo(e,t,n){var r=n.httpStack.createRequest(e,t);n.protocol===Go?r.setHeader(`Upload-Draft-Interop-Version`,`5`):n.protocol===Ko?r.setHeader(`Upload-Draft-Interop-Version`,`6`):r.setHeader(`Tus-Resumable`,`1.0.0`);for(var i=n.headers||{},a=0,o=Object.entries(i);a<o.length;a++){var s=Oo(o[a],2),c=s[0],l=s[1];r.setHeader(c,l)}if(n.addRequestId){var u=wo();r.setHeader(`X-Request-ID`,u)}return r}function Qo(e,t,n){return $o.apply(this,arguments)}function $o(){return $o=Do(To().mark(function e(t,n,r){var i;return To().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(typeof r.onBeforeRequest!=`function`){e.next=3;break}return e.next=3,r.onBeforeRequest(t);case 3:return e.next=5,t.send(n);case 5:if(i=e.sent,typeof r.onAfterResponse!=`function`){e.next=9;break}return e.next=9,r.onAfterResponse(t,i);case 9:return e.abrupt(`return`,i);case 10:case`end`:return e.stop()}},e)})),$o.apply(this,arguments)}function es(){var e=!0;return typeof navigator<`u`&&navigator.onLine===!1&&(e=!1),e}function ts(e,t,n){return n.retryDelays==null||t>=n.retryDelays.length||e.originalRequest==null?!1:n&&typeof n.onShouldRetry==`function`?n.onShouldRetry(e,t,n):ns(e)}function ns(e){var t=e.originalResponse?e.originalResponse.getStatus():0;return(!Xo(t,400)||t===409||t===423)&&es()}function rs(e,t){return new Co.default(t,e).toString()}function is(e,t){for(var n=Math.floor(e/t),r=[],i=0;i<t;i++)r.push({start:n*i,end:n*(i+1)});return r[t-1].end=e,r}Jo.defaultOptions=qo;var as=function(){return typeof navigator<`u`&&typeof navigator.product==`string`&&navigator.product.toLowerCase()===`reactnative`};function os(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.responseType=`blob`,r.onload=function(){var e=r.response;t(e)},r.onerror=function(e){n(e)},r.open(`GET`,e),r.send()})}var ss=function(){return typeof window<`u`&&(window.PhoneGap!==void 0||window.Cordova!==void 0||window.cordova!==void 0)};function cs(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){t({value:new Uint8Array(r.result)})},r.onerror=function(e){n(e)},r.readAsArrayBuffer(e)})}function ls(e){"@babel/helpers - typeof";return ls=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ls(e)}function us(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ds(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ps(r.key),r)}}function fs(e,t,n){return t&&ds(e.prototype,t),n&&ds(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ps(e){var t=ms(e,`string`);return ls(t)==`symbol`?t:t+``}function ms(e,t){if(ls(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ls(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var hs=function(){function e(t){us(this,e),this._file=t,this.size=t.size}return fs(e,[{key:`slice`,value:function(e,t){if(ss())return cs(this._file.slice(e,t));var n=this._file.slice(e,t),r=t>=this.size;return Promise.resolve({value:n,done:r})}},{key:`close`,value:function(){}}])}();function gs(e){"@babel/helpers - typeof";return gs=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},gs(e)}function _s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function vs(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,bs(r.key),r)}}function ys(e,t,n){return t&&vs(e.prototype,t),n&&vs(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function bs(e){var t=xs(e,`string`);return gs(t)==`symbol`?t:t+``}function xs(e,t){if(gs(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(gs(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ss(e){return e===void 0?0:e.size===void 0?e.length:e.size}function Cs(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var n=new e.constructor(e.length+t.length);return n.set(e),n.set(t,e.length),n}throw Error(`Unknown data type`)}var ws=function(){function e(t){_s(this,e),this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}return ys(e,[{key:`slice`,value:function(e,t){return e<this._bufferOffset?Promise.reject(Error(`Requested data is before the reader's current offset`)):this._readUntilEnoughDataOrDone(e,t)}},{key:`_readUntilEnoughDataOrDone`,value:function(e,t){var n=this,r=t<=this._bufferOffset+Ss(this._buffer);if(this._done||r){var i=this._getDataFromBuffer(e,t),a=i==null&&this._done;return Promise.resolve({value:i,done:a})}return this._reader.read().then(function(r){var i=r.value;return r.done?n._done=!0:n._buffer=n._buffer===void 0?i:Cs(n._buffer,i),n._readUntilEnoughDataOrDone(e,t)})}},{key:`_getDataFromBuffer`,value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var n=Ss(this._buffer)===0;return this._done&&n?null:this._buffer.slice(0,t-e)}},{key:`close`,value:function(){this._reader.cancel&&this._reader.cancel()}}])}();function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ts(e)}function Es(){Es=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a=typeof Symbol==`function`?Symbol:{},o=a.iterator||`@@iterator`,s=a.asyncIterator||`@@asyncIterator`,c=a.toStringTag||`@@toStringTag`;function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},``)}catch{l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype);return i(o,`_invoke`,{value:ee(e,n,new re(r||[]))}),o}function d(e,t,n){try{return{type:`normal`,arg:e.call(t,n)}}catch(e){return{type:`throw`,arg:e}}}t.wrap=u;var f=`suspendedStart`,p=`suspendedYield`,m=`executing`,h=`completed`,g={};function _(){}function v(){}function y(){}var b={};l(b,o,function(){return this});var x=Object.getPrototypeOf,S=x&&x(x(ie([])));S&&S!==n&&r.call(S,o)&&(b=S);var C=y.prototype=_.prototype=Object.create(b);function w(e){[`next`,`throw`,`return`].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function T(e,t){function n(i,a,o,s){var c=d(e[i],e,a);if(c.type!==`throw`){var l=c.arg,u=l.value;return u&&Ts(u)==`object`&&r.call(u,`__await`)?t.resolve(u.__await).then(function(e){n(`next`,e,o,s)},function(e){n(`throw`,e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return n(`throw`,e,o,s)})}s(c.arg)}var a;i(this,`_invoke`,{value:function(e,r){function i(){return new t(function(t,i){n(e,r,t,i)})}return a=a?a.then(i,i):i()}})}function ee(t,n,r){var i=f;return function(a,o){if(i===m)throw Error(`Generator is already running`);if(i===h){if(a===`throw`)throw o;return{value:e,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var c=E(s,r);if(c){if(c===g)continue;return c}}if(r.method===`next`)r.sent=r._sent=r.arg;else if(r.method===`throw`){if(i===f)throw i=h,r.arg;r.dispatchException(r.arg)}else r.method===`return`&&r.abrupt(`return`,r.arg);i=m;var l=d(t,n,r);if(l.type===`normal`){if(i=r.done?h:p,l.arg===g)continue;return{value:l.arg,done:r.done}}l.type===`throw`&&(i=h,r.method=`throw`,r.arg=l.arg)}}}function E(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,r===`throw`&&t.iterator.return&&(n.method=`return`,n.arg=e,E(t,n),n.method===`throw`)||r!==`return`&&(n.method=`throw`,n.arg=TypeError(`The iterator does not provide a '`+r+`' method`)),g;var a=d(i,t.iterator,n.arg);if(a.type===`throw`)return n.method=`throw`,n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,n.method!==`return`&&(n.method=`next`,n.arg=e),n.delegate=null,g):o:(n.method=`throw`,n.arg=TypeError(`iterator result is not an object`),n.delegate=null,g)}function te(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function ne(e){var t=e.completion||{};t.type=`normal`,delete t.arg,e.completion=t}function re(e){this.tryEntries=[{tryLoc:`root`}],e.forEach(te,this),this.reset(!0)}function ie(t){if(t||t===``){var n=t[o];if(n)return n.call(t);if(typeof t.next==`function`)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw TypeError(Ts(t)+` is not iterable`)}return v.prototype=y,i(C,`constructor`,{value:y,configurable:!0}),i(y,`constructor`,{value:v,configurable:!0}),v.displayName=l(y,c,`GeneratorFunction`),t.isGeneratorFunction=function(e){var t=typeof e==`function`&&e.constructor;return!!t&&(t===v||(t.displayName||t.name)===`GeneratorFunction`)},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,`GeneratorFunction`)),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},w(T.prototype),l(T.prototype,s,function(){return this}),t.AsyncIterator=T,t.async=function(e,n,r,i,a){a===void 0&&(a=Promise);var o=new T(u(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(C),l(C,c,`Generator`),l(C,o,function(){return this}),l(C,`toString`,function(){return`[object Generator]`}),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=ie,re.prototype={constructor:re,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method=`next`,this.arg=e,this.tryEntries.forEach(ne),!t)for(var n in this)n.charAt(0)===`t`&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type===`throw`)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type=`throw`,s.arg=t,n.next=r,i&&(n.method=`next`,n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if(o.tryLoc===`root`)return i(`end`);if(o.tryLoc<=this.prev){var c=r.call(o,`catchLoc`),l=r.call(o,`finallyLoc`);if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw Error(`try statement without catch or finally`);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,`finallyLoc`)&&this.prev<i.finallyLoc){var a=i;break}}a&&(e===`break`||e===`continue`)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method=`next`,this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if(e.type===`throw`)throw e.arg;return e.type===`break`||e.type===`continue`?this.next=e.arg:e.type===`return`?(this.rval=this.arg=e.arg,this.method=`return`,this.next=`end`):e.type===`normal`&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),ne(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if(r.type===`throw`){var i=r.arg;ne(n)}return i}}throw Error(`illegal catch attempt`)},delegateYield:function(t,n,r){return this.delegate={iterator:ie(t),resultName:n,nextLoc:r},this.method===`next`&&(this.arg=e),g}},t}function Ds(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Os(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Ds(a,r,i,o,s,`next`,e)}function s(e){Ds(a,r,i,o,s,`throw`,e)}o(void 0)})}}function ks(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function As(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Ms(r.key),r)}}function js(e,t,n){return t&&As(e.prototype,t),n&&As(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ms(e){var t=Ns(e,`string`);return Ts(t)==`symbol`?t:t+``}function Ns(e,t){if(Ts(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ts(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ps=function(){function e(){ks(this,e)}return js(e,[{key:`openFile`,value:function(){var e=Os(Es().mark(function e(t,n){var r;return Es().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(as()&&t&&t.uri!==void 0)){e.next=11;break}return e.prev=1,e.next=4,os(t.uri);case 4:return r=e.sent,e.abrupt(`return`,new hs(r));case 8:throw e.prev=8,e.t0=e.catch(1),Error(`tus: cannot fetch \`file.uri\` as Blob, make sure the uri is correct and accessible. ${e.t0}`);case 11:if(typeof t.slice!=`function`||t.size===void 0){e.next=13;break}return e.abrupt(`return`,Promise.resolve(new hs(t)));case 13:if(typeof t.read!=`function`){e.next=18;break}if(n=Number(n),Number.isFinite(n)){e.next=17;break}return e.abrupt(`return`,Promise.reject(Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return e.abrupt(`return`,Promise.resolve(new ws(t,n)));case 18:return e.abrupt(`return`,Promise.reject(Error(`source object may only be an instance of File, Blob, or Reader in this environment`)));case 19:case`end`:return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}()}])}();function Fs(e,t){return as()?Promise.resolve(Is(e,t)):Promise.resolve([`tus-br`,e.name,e.type,e.size,e.lastModified,t.endpoint].join(`-`))}function Is(e,t){var n=e.exif?Ls(JSON.stringify(e.exif)):`noexif`;return[`tus-rn`,e.name||`noname`,e.size||`nosize`,n,t.endpoint].join(`/`)}function Ls(e){var t=0;if(e.length===0)return t;for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return t}function Rs(e){"@babel/helpers - typeof";return Rs=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Rs(e)}function zs(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Bs(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Hs(r.key),r)}}function Vs(e,t,n){return t&&Bs(e.prototype,t),n&&Bs(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hs(e){var t=Us(e,`string`);return Rs(t)==`symbol`?t:t+``}function Us(e,t){if(Rs(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Rs(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ws=function(){function e(){zs(this,e)}return Vs(e,[{key:`createRequest`,value:function(e,t){return new Gs(e,t)}},{key:`getName`,value:function(){return`XHRHttpStack`}}])}(),Gs=function(){function e(t,n){zs(this,e),this._xhr=new XMLHttpRequest,this._xhr.open(t,n,!0),this._method=t,this._url=n,this._headers={}}return Vs(e,[{key:`getMethod`,value:function(){return this._method}},{key:`getURL`,value:function(){return this._url}},{key:`setHeader`,value:function(e,t){this._xhr.setRequestHeader(e,t),this._headers[e]=t}},{key:`getHeader`,value:function(e){return this._headers[e]}},{key:`setProgressHandler`,value:function(e){`upload`in this._xhr&&(this._xhr.upload.onprogress=function(t){t.lengthComputable&&e(t.loaded)})}},{key:`send`,value:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(n,r){e._xhr.onload=function(){n(new Ks(e._xhr))},e._xhr.onerror=function(e){r(e)},e._xhr.send(t)})}},{key:`abort`,value:function(){return this._xhr.abort(),Promise.resolve()}},{key:`getUnderlyingObject`,value:function(){return this._xhr}}])}(),Ks=function(){function e(t){zs(this,e),this._xhr=t}return Vs(e,[{key:`getStatus`,value:function(){return this._xhr.status}},{key:`getHeader`,value:function(e){return this._xhr.getResponseHeader(e)}},{key:`getBody`,value:function(){return this._xhr.responseText}},{key:`getUnderlyingObject`,value:function(){return this._xhr}}])}();function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},qs(e)}function Js(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Ys(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Zs(r.key),r)}}function Xs(e,t,n){return t&&Ys(e.prototype,t),n&&Ys(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zs(e){var t=Qs(e,`string`);return qs(t)==`symbol`?t:t+``}function Qs(e,t){if(qs(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(qs(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var $s=!1;try{$s=`localStorage`in window;var ec=`tusSupport`,tc=localStorage.getItem(ec);localStorage.setItem(ec,tc),tc===null&&localStorage.removeItem(ec)}catch(e){if(e.code===e.SECURITY_ERR||e.code===e.QUOTA_EXCEEDED_ERR)$s=!1;else throw e}var nc=$s,rc=function(){function e(){Js(this,e)}return Xs(e,[{key:`findAllUploads`,value:function(){var e=this._findEntries(`tus::`);return Promise.resolve(e)}},{key:`findUploadsByFingerprint`,value:function(e){var t=this._findEntries(`tus::${e}::`);return Promise.resolve(t)}},{key:`removeUpload`,value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:`addUpload`,value:function(e,t){var n=`tus::${e}::${Math.round(Math.random()*0xe8d4a51000)}`;return localStorage.setItem(n,JSON.stringify(t)),Promise.resolve(n)}},{key:`_findEntries`,value:function(e){for(var t=[],n=0;n<localStorage.length;n++){var r=localStorage.key(n);if(r.indexOf(e)===0)try{var i=JSON.parse(localStorage.getItem(r));i.urlStorageKey=r,t.push(i)}catch{}}return t}}])}();function ic(e){"@babel/helpers - typeof";return ic=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ic(e)}function ac(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function oc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,vc(r.key),r)}}function sc(e,t,n){return t&&oc(e.prototype,t),n&&oc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function cc(e,t,n){return t=fc(t),lc(e,dc()?Reflect.construct(t,n||[],fc(e).constructor):t.apply(e,n))}function lc(e,t){if(t&&(ic(t)===`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return uc(e)}function uc(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function dc(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dc=function(){return!!e})()}function fc(e){return fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},fc(e)}function pc(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mc(e,t)}function mc(e,t){return mc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},mc(e,t)}function hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function gc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?hc(Object(n),!0).forEach(function(t){_c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _c(e,t,n){return t=vc(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vc(e){var t=yc(e,`string`);return ic(t)==`symbol`?t:t+``}function yc(e,t){if(ic(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ic(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var bc=gc(gc({},Jo.defaultOptions),{},{httpStack:new Ws,fileReader:new Ps,urlStorage:nc?new rc:new La,fingerprint:Fs}),xc=function(e){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ac(this,t),n=gc(gc({},bc),n),cc(this,t,[e,n])}return pc(t,e),sc(t,null,[{key:`terminate`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return t=gc(gc({},bc),t),Jo.terminate(e,t)}}])}(Jo);typeof XMLHttpRequest==`function`&&typeof Blob==`function`&&Blob.prototype.slice;var Sc=10485760,Cc=5242880,wc=`https://eu-on-24001.connector.filerobot.com/files`,Tc=`https://eu-on-24001.connector.filerobot.com/json`;function Ec(e,t){if(!t||!e.file)return!1;let n=t.sizeThreshold??Sc;return e.size>=n}function Dc(e,t){let{tusConfig:n}=t,r=t.apiBase.replace(/\/+$/,``),i=n.endpoint||wc,a=n.jsonBase||Tc,o=n.chunkSize??Cc,s=n.resumable!==!1,c=n.parallelChunks??1,l=n.retryDelays??[0,1e3,3e3,5e3],u=r.split(`/`).pop()||``,d=!1,f=!1,p=!1,m={name:e.name,type:e.type,"filerobot-folder":t.folder};Yn(e.product)&&(m.product=JSON.stringify(Xn(e.product)));let h=new xc(e.file,{endpoint:i,chunkSize:o,retryDelays:l,parallelUploads:c,storeFingerprintForResuming:s,removeFingerprintOnSuccess:!0,headers:{},metadata:m,fingerprint:async()=>`tus-${e.id}-${i}`,onBeforeRequest(e){let n=t.getAuthHeaders?t.getAuthHeaders():t.authHeaders;for(let[t,r]of Object.entries(n))e.setHeader(t,r);e.setHeader(`X-Filerobot-Token`,u)},onUploadUrlAvailable(){h.url&&t.onUploadUrlAvailable&&!p&&(p=!0,t.onUploadUrlAvailable(h.url))},onProgress(e,n){!f&&!d&&t.onProgress(e,n)},onSuccess(){if(f)return;v();let n=h.url||``,r=n.match(/files\/([^/?]+)/)?.[1];r?kc(a,r,e.size).then(n=>{f||t.onComplete(ot(n)?st(n,e):n)}).catch(e=>{f||t.onError(e)}):t.onComplete({status:`success`,file:{uuid:``,name:e.name,extension:e.name.split(`.`).pop()||``,type:e.type,size:e.size,url:{public:n,cdn:n},meta:e.meta,tags:e.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(e){f||(v(),Oc(e)?t.onError(Error(`Network error during upload — check your connection or firewall settings`)):t.onError(e instanceof Error?e:Error(String(e))))},onShouldRetry(e,t,n){let r=e.originalResponse?.getStatus();return r===429||!(r&&r>400&&r<500&&r!==409)}}),g=null,_=null;typeof window<`u`&&(g=()=>{!d&&!f&&(d=!0,h.abort(!1),t.onPause?.())},_=()=>{d&&!f&&(d=!1,h.start(),t.onResume?.())},window.addEventListener(`offline`,g),window.addEventListener(`online`,_));let v=()=>{g&&window.removeEventListener(`offline`,g),_&&window.removeEventListener(`online`,_)},y=()=>{try{h.start()}catch(e){v(),t.onError(e instanceof Error?e:Error(String(e)))}};return s?h.findPreviousUploads().then(e=>{e.length>0&&!f&&h.resumeFromPreviousUpload(e[0]),f||y()}):y(),{abort(){f=!0,d=!1,v(),h.abort(!0)},pause(){!d&&!f&&(d=!0,h.abort(!1))},resume(){d&&!f&&(d=!1,h.start())},isPaused(){return d}}}function Oc(e){if(e instanceof Aa){let t=e.originalRequest?.getUnderlyingObject();return t&&typeof t.readyState==`number`&&typeof t.status==`number`?t.readyState!==0&&t.readyState!==4||t.status===0:e.originalResponse==null&&e.causingError!=null}return!1}async function kc(e,t,n){let r=`${e.replace(/\/+$/,``)}/${t}`,i=n>1e8?13e3:6e3;for(let e=0;e<=3;e++){e>0&&await new Promise(e=>setTimeout(e,i));let t=await fetch(r);if(t.status===404&&e<3)continue;if(!t.ok)throw Error(`Failed to fetch file record (HTTP ${t.status})`);let n=await t.json();if(ot(n))return n;if(n.file)return{status:`success`,file:n.file};if(n.status===`success`)return n;if(!(e<3))throw Error(ct(n,`File record not available after upload`))}throw Error(`File record not available after upload`)}var Ac=`_sfxRelativePath`,jc=8,Mc=new Set([`node_modules`,`__MACOSX`,`$RECYCLE.BIN`,`System Volume Information`]);function Nc(e){return e?e.startsWith(`.`)?!0:Mc.has(e):!1}function Pc(e,t){if(t){try{Object.defineProperty(e,Ac,{value:t,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(e,Ac,{value:t,configurable:!0,enumerable:!1,writable:!0})}catch{e[Ac]=t}}}function Fc(e){let t=e[Ac];if(typeof t==`string`&&t)return t;let n=e.webkitRelativePath;if(typeof n==`string`&&n)return n;let r=e.relativePath;return typeof r==`string`?r:``}function Ic(e){if(!e)return``;let t=e.replace(/^\/+/,``).replace(/\/+$/,``),n=t.lastIndexOf(`/`);return n===-1?``:t.slice(0,n)}function Lc(e,t){let n=(e??``).replace(/\/+$/,``),r=(t??``).replace(/^\/+/,``).replace(/\/+$/,``);return r?n?`${n}/${r}`:r:e??``}async function Rc(e,t){let n=t?.allowDirectories!==!1,r=e.items;if(!(r&&r.length>0&&typeof r[0].webkitGetAsEntry==`function`))return{files:Array.from(e.files??[]),hadDirectories:!1,rejectedDirectories:!1};let i=[],a=!1,o=!1;for(let e of Array.from(r)){if(e.kind!==`file`)continue;let t=e.webkitGetAsEntry?.();if(t){if(t.isDirectory&&(a=!0,!n)){o=!0;continue}i.push(t)}}if(i.length===0)return o?{files:[],hadDirectories:a,rejectedDirectories:!0}:{files:Array.from(e.files??[]),hadDirectories:!1,rejectedDirectories:!1};let s=[];return await zc(i,``,s),{files:s,hadDirectories:a,rejectedDirectories:o}}async function zc(e,t,n){for(let r=0;r<e.length;r+=jc){let i=e.slice(r,r+jc);await Promise.all(i.map(e=>Bc(e,t,n)))}}async function Bc(e,t,n){try{if(e.isFile){let r=await Vc(e);if(!r)return;Pc(r,t?`${t}/${r.name}`:r.name),n.push(r);return}if(e.isDirectory){if(Nc(e.name))return;let r=t?`${t}/${e.name}`:e.name;await zc(await Hc(e),r,n)}}catch(t){console.warn(`[sfx-uploader] folder traversal skipped an entry:`,e?.name??e,t)}}function Vc(e){return new Promise(t=>{e.file(e=>t(e),()=>t(null))})}function Hc(e){return new Promise(t=>{let n=e.createReader(),r=[],i=()=>{n.readEntries(e=>{if(e.length===0){t(r);return}r.push(...e),i()},n=>{console.warn(`[sfx-uploader] directory read failed for`,e?.name,n),t(r)})};i()})}var Uc=class{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;let e=new Map(this.store.getState().files),t=!1;for(let[n,r]of this.pendingProgress){let i=e.get(n);i&&i.status===`uploading`&&(e.set(n,{...i,...r}),t=!0)}this.pendingProgress.clear(),t&&this.store.setState({files:e,...this.computeTotals(e)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){let{files:e}=this.store.getState(),t=!1;for(let n of e.values())n.status===`idle`?(k(this.store,n.id,{status:`queued`}),t=!0):n.status===`queued`&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){let t=this.store.getState().files.get(e);!t||t.status!==`error`&&t.status!==`failed`||(k(this.store,e,{status:`queued`,error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){let{files:e}=this.store.getState();for(let t of e.values())(t.status===`error`||t.status===`failed`)&&k(this.store,t.id,{status:`queued`,error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){let t=this.activeUploads.get(e);t&&`pause`in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),k(this.store,e,{status:`paused`}),this.processQueue())}resumeFile(e){let t=this.pausedUploads.get(e);if(!t)return;let{concurrency:n}=this.store.getState().queueConfig;this.activeUploads.size<n?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),k(this.store,e,{status:`uploading`})):k(this.store,e,{status:`queued`})}cancelFile(e){let t=this.store.getState().files.get(e);!t||!Wc(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),k(this.store,e,{status:`cancelled`}))}cancelAll(){let{files:e}=this.store.getState();for(let t of e.values())Wc(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),k(this.store,t.id,{status:`cancelled`}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){for(let e of this.activeUploads.keys())this.abortUpload(e);for(let e of[...this.pausedUploads.keys()])this.abortPausedUpload(e);for(let e of this.retryTimers.values())clearTimeout(e);this.retryTimers.clear(),this.cancelProgressFlush(),this.unsubscribe?.(),this.unsubscribe=null}processQueue(){let e=this.store.getState();if(e.isPaused)return;let{concurrency:t}=e.queueConfig,n=t-this.activeUploads.size;if(n<=0)return;let r=[...e.files.values()].filter(e=>e.status===`queued`).sort((e,t)=>e.retryCount===t.retryCount?e.addedAt-t.addedAt:t.retryCount-e.retryCount).slice(0,n);for(let e of r){let t=this.pausedUploads.get(e.id);t?(this.pausedUploads.delete(e.id),t.resume(),this.activeUploads.set(e.id,t),k(this.store,e.id,{status:`uploading`})):this.startUpload(e)}}startUpload(e){this.pendingProgress.delete(e.id);let t=this.config.resolveUploadParams?.(e),n=!!t&&Object.keys(t).length>0,r=!n&&!e.remoteInfo&&!e.remoteUrl&&Ec(e,this.config.tusConfig);k(this.store,e.id,{status:`uploading`,error:null,isTus:r});let i=0,a=Date.now(),o=0,s=Lc(this.store.getState().targetFolder,e.relativeFolder),c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:s,extraParams:n?t:void 0,onComplete:t=>this.handleComplete(e.id,t),onError:t=>this.handleError(e.id,t)},l=(t,n)=>{let r=Date.now(),s=(r-a)/1e3;if(s>0){let e=(t-i)/s;o=o===0?e:.3*e+.7*o}i=t,a=r;let c=n>0?Math.min(t/n*100,100):0;this.pendingProgress.set(e.id,{progress:c,bytesUploaded:t,speed:o}),this.scheduleProgressFlush()},u;if(e.remoteInfo)u=fa(e,{...c,onProgress:l});else if(e.remoteUrl){if(!this.config.companionUrl){k(this.store,e.id,{status:`failed`,error:`URL import requires connectors.companionUrl to be configured`}),this.checkAllComplete(),this.processQueue();return}u=pa(e,{...c,onProgress:l,companionUrl:this.config.companionUrl,onMeta:t=>{k(this.store,e.id,{size:t.size,type:t.type||e.type})}})}else if(r){let t=Dc(e,{...c,onProgress:l,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:t=>{k(this.store,e.id,{tusUploadUrl:t})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,t),this.pendingProgress.delete(e.id),k(this.store,e.id,{status:`paused`}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,t),k(this.store,e.id,{status:`uploading`})}});u=t}else u=oa(e,{...c,onProgress:l});this.activeUploads.set(e.id,u)}handleComplete(e,t){this.activeUploads.delete(e);let n=this.store.getState().files.get(e),r=t.file?.uuid;if(n?.focusPoint&&r&&!ot(t)){let i=()=>this.finalizeComplete(e,t);this.applyFocusPoint(n,r).then(i,i);return}this.finalizeComplete(e,t)}async applyFocusPoint(e,t){try{await new h({apiBase:this.config.apiBase,headers:this.config.authHeaders}).put(`/file/${encodeURIComponent(t)}/focus-point`,{img_focus_point:e.focusPoint})}catch(t){let n=t instanceof Error?t:Error(String(t));console.warn(`[sfx-uploader] Failed to save the focus point for "${e.name}":`,n);try{this.config.onFocusPointError?.(e,n)}catch(e){console.warn(`[sfx-uploader] onFocusPointError threw:`,e)}}}finalizeComplete(e,t){let n=this.store.getState().files.get(e),r=n?.previewUrl?.startsWith(`blob:`)??!1,i=t.file?.url?.cdn??t.file?.url?.cdn_permalink??t.file?.url?.permalink??null,a={status:`complete`,progress:100,response:t,alreadyExisted:ot(t)};if(n&&i&&n.type.startsWith(`image/`)&&!r){let e=this.config.transformPreviewUrl?.(i,t.file?.url)??i;e&&(a.previewUrl=e)}let o=t.file?.size,s=typeof o==`number`?o:o?.bytes;typeof s==`number`&&(a.size=s);let c=this.store.getState().files,l=c.get(e);if(l){let t=new Map(c);t.set(e,{...l,...a}),this.store.setState({files:t,...this.computeTotals(t)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);let n=this.store.getState().files.get(e);if(!n)return;let{retryConfig:r}=this.store.getState().queueConfig,i=n.retryCount+1;if(i<=r.maxRetries){let a=Math.min(r.baseDelay*r.backoffFactor**+n.retryCount,r.maxDelay);k(this.store,e,{status:`retrying`,error:t.message,retryCount:i});let o=setTimeout(()=>{this.retryTimers.delete(e),k(this.store,e,{status:`queued`}),this.processQueue()},a);this.retryTimers.set(e,o)}else k(this.store,e,{status:`failed`,error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){let t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){this.activeUploads.get(e)?.abort(),this.activeUploads.delete(e);let t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;let e=typeof requestAnimationFrame==`function`?requestAnimationFrame:e=>setTimeout(()=>e(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){this.progressFlushHandle!==null&&((typeof cancelAnimationFrame==`function`?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear())}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,n=0,r=0,i=0,a=0;for(let o of e.values())o.status!==`rejected`&&o.status!==`cancelled`&&(a++,t+=o.size,n+=o.status===`complete`?o.size:Math.min(o.bytesUploaded,o.size),i+=o.status===`complete`?100:o.progress,o.status===`uploading`&&(r+=o.speed));return{totalBytes:t,totalBytesUploaded:n,totalSpeed:r,totalProgress:a>0?Math.min(i/a,100):0}}checkAllComplete(){let{files:e}=this.store.getState();![...e.values()].some(e=>e.status===`queued`||e.status===`uploading`||e.status===`retrying`||e.status===`paused`)&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}};function Wc(e){return e===`queued`||e===`uploading`||e===`retrying`||e===`paused`}var Gc=3e4,Kc=2,qc=400;function Jc(e){return e===404||e===408||e===429||e>=500}var Yc=e=>new Promise(t=>setTimeout(t,e));function Xc(e,t){return`${(t||`https://api.filerobot.com`).replace(/\/+$/,``)}/${e}`}async function Zc(e,t,n,r={}){let i=`${Xc(e,n)}/key/${encodeURIComponent(t)}`,a=r.retries??Kc,o=r.retryDelayMs??qc,s=Error(`SASS key exchange failed`);for(let e=0;e<=a;e++){e>0&&await Yc(o*e);let t=new AbortController,n=setTimeout(()=>t.abort(),Gc);try{let r=await fetch(i,{signal:t.signal,cache:`no-store`});if(clearTimeout(n),!r.ok){if(s=Error(`SASS key exchange failed (HTTP ${r.status})`),Jc(r.status)&&e<a)continue;throw s}let o=await r.json();if(o.status===`error`)throw Error(`SASS key exchange failed: ${o.msg||`Unknown error`}`);return o.key}catch(t){if(clearTimeout(n),t instanceof DOMException&&t.name===`AbortError`)throw Error(`SASS key exchange timed out`);if(t instanceof TypeError&&e<a){s=t;continue}throw t}}throw s}function Qc(e,t){let n={};switch(e.mode){case`security-template`:if(!t)throw Error(`[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.`);n[`X-Filerobot-Key`]=t;break;case`sass-key`:n[`X-Filerobot-Key`]=e.sassKey}return e.airboxPuid&&(n[`X-Filerobot-Airbox-Puid`]=e.airboxPuid),n}async function $c(e,t){let n=Xc(e.container,t);if(e.mode===`security-template`){let r=await Zc(e.container,e.securityTemplateId,t);return{apiBase:n,headers:Qc(e,r),sassKey:r}}return{apiBase:n,headers:Qc(e)}}function el(e){if(!e)return null;try{return decodeURIComponent(escape(atob(e)))}catch{return null}}function tl(e){let t=el(e);if(!t)return null;try{return new RegExp(t)}catch(e){return console.error(`[sfx-uploader] Filename naming-convention regex failed to compile in the browser:`,e),null}}function nl(e,t){return t.test(e)}var rl=300,il=.85,al=3e4;function ol(e){return e===`low`?.6:e===`high`?.85:.75}async function sl(e,t){if(e.file)return e.file;let n=e.previewUrl||e.response?.file?.url?.cdn||e.remoteUrl||``;if(!n)throw Error(`No image source for similarity check`);let r=await fetch(n,{signal:t});if(!r.ok)throw Error(`Failed to load image (HTTP ${r.status})`);return r.blob()}function cl(e){return`${(e||`image`).replace(/\.[^./\\]*$/,``)||`image`}.jpg`}async function ll(e){if(typeof createImageBitmap==`function`)try{let t=await createImageBitmap(e);return{source:t,width:t.width,height:t.height,close:()=>t.close()}}catch{}return new Promise((t,n)=>{let r=new Image,i=URL.createObjectURL(e);r.onload=()=>{t({source:r,width:r.naturalWidth,height:r.naturalHeight,close:()=>URL.revokeObjectURL(i)})},r.onerror=()=>{URL.revokeObjectURL(i),n(Error(`Image decode failed`))},r.src=i})}async function ul(e){let t=await ll(e);try{let e=t.width>rl?rl/t.width:1,n=Math.max(1,Math.round(t.width*e)),r=Math.max(1,Math.round(t.height*e)),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(!a)throw Error(`Canvas 2D not supported`);return a.drawImage(t.source,0,0,n,r),await new Promise((e,t)=>{i.toBlob(n=>n?e(n):t(Error(`Canvas toBlob failed`)),`image/jpeg`,il)})}finally{t.close()}}async function dl(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),al),i=()=>n.abort();t.signal?.addEventListener(`abort`,i);let a=n.signal,o=()=>{if(a.aborted)throw new DOMException(`Aborted`,`AbortError`)};try{o();let n=await sl(e,a);o();let r=await ul(n);o();let i=`${(t.endpoint||`https://ai.scaleflex.com`).replace(/\/+$/,``)}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(t.threshold))}`,s=new FormData;s.append(`file`,r,cl(e.name));let c=await fetch(i,{method:`POST`,headers:{"Filerobot-Token":t.container,"Filerobot-Key":t.sassKey},body:s,signal:a});if(!c.ok)throw Error(`Similarity check failed (HTTP ${c.status})`);let l=await c.json();if(l.status===`error`)throw Error(`Similarity check failed: ${l.msg||`Unknown error`}`);return(l.similar_assets??[]).map(([e,t,n])=>({uuid:e,score:t,url:n}))}finally{clearTimeout(r),t.signal?.removeEventListener(`abort`,i)}}var fl=`sfx-uploader:last-upload:`,pl=1;function ml(e){let{file:t,previewUrl:n,...r}=e,i=null;return e.status===`complete`&&(i=e.previewUrl&&!e.previewUrl.startsWith(`blob:`)?e.previewUrl:e.response?.file?.url?.permalink??e.response?.file?.url?.cdn_permalink??e.response?.file?.url?.cdn??null),{...r,previewUrl:i}}function hl(e){try{let t=sessionStorage.getItem(fl+e);if(!t)return null;let n=JSON.parse(t);return n?.__schemaVersion===pl?n:null}catch{return null}}function gl(e,t){try{sessionStorage.setItem(fl+e,JSON.stringify(t))}catch{}}var _l={save(e,t){if(t.length===0){this.clear(e);return}gl(e,{__schemaVersion:pl,savedAt:Date.now(),files:t.map(ml)})},load(e){let t=hl(e);return t?t.files.map(e=>({...e,file:null,previewUrl:e.previewUrl??null})):null},exists(e){try{return sessionStorage.getItem(fl+e)!=null}catch{return!1}},clear(e){try{sessionStorage.removeItem(fl+e)}catch{}}},B={FILE_ADDED:`sfx-file-added`,FILE_REMOVED:`sfx-file-removed`,FILE_REJECTED:`sfx-file-rejected`,UPLOAD_STARTED:`sfx-upload-started`,UPLOAD_PROGRESS:`sfx-upload-progress`,UPLOAD_COMPLETE:`sfx-upload-complete`,UPLOAD_ERROR:`sfx-upload-error`,UPLOAD_RETRY:`sfx-upload-retry`,UPLOAD_PAUSED:`sfx-upload-paused`,UPLOAD_RESUMED:`sfx-upload-resumed`,ALL_COMPLETE:`sfx-all-complete`,FOLDER_COMPLETE:`sfx-folder-complete`,TOTAL_PROGRESS:`sfx-total-progress`,BEFORE_UPLOAD:`sfx-before-upload`,OPEN:`sfx-open`,CLOSE:`sfx-close`,CANCEL:`sfx-cancel`,MINIMIZE:`sfx-minimize`,RESTORE:`sfx-restore`,PANEL_SHOWN:`sfx-panel-shown`,COMPLETE_ACTION:`sfx-complete-action`,FILE_PREVIEW:`sfx-file-preview`,FILL_METADATA:`sfx-fill-metadata`,METADATA_SCHEMA:`sfx-metadata-schema`,FILE_LOCATE:`sfx-file-locate`,FILE_COPY_CDN:`sfx-file-copy-cdn`},vl=0;function yl(){return`file-${Date.now()}-${++vl}`}function bl(e){if(!Number.isFinite(e)||e<=0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1),r=e/1024**n;return`${n===0?r:r.toFixed(1)} ${t[n]}`}function xl(e){if(!isFinite(e)||e<=0)return`0s`;let t=Math.round(e);if(t<60)return`${t}s`;let n=Math.floor(t/60);if(n>99){let e=Math.floor(n/60),t=n%60;return t>0?`${e}h ${t}m`:`${e}h`}let r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function V(e){let t=e.name.split(`.`).pop()?.toLowerCase()??``;return e.type.startsWith(`image/`)?`image`:e.type.startsWith(`video/`)||[`mp4`,`mov`,`avi`,`webm`,`mkv`,`flv`,`wmv`].includes(t)?`vid`:e.type.startsWith(`audio/`)||[`mp3`,`wav`,`ogg`,`flac`,`aac`,`m4a`,`wma`].includes(t)?`audio`:e.type===`application/pdf`||t===`pdf`?`pdf`:[`xls`,`xlsx`,`csv`,`tsv`,`ods`].includes(t)?`sheet`:[`doc`,`docx`,`txt`,`rtf`,`odt`,`pages`].includes(t)?`doc`:[`ppt`,`pptx`,`key`,`odp`].includes(t)?`slide`:[`zip`,`rar`,`7z`,`tar`,`gz`,`bz2`,`xz`,`zst`].includes(t)?`zip`:[`js`,`ts`,`jsx`,`tsx`,`py`,`rb`,`go`,`rs`,`java`,`c`,`cpp`,`h`,`cs`,`php`,`swift`,`kt`,`sh`,`bash`].includes(t)?`code`:[`html`,`css`,`scss`,`xml`,`svg`,`json`,`yaml`,`yml`,`toml`,`md`,`mdx`,`ini`,`env`,`log`].includes(t)?`markup`:[`ttf`,`otf`,`woff`,`woff2`,`eot`].includes(t)?`font`:[`ai`,`psd`,`sketch`,`fig`,`xd`,`indd`,`eps`].includes(t)?`design`:[`exe`,`dmg`,`app`,`msi`,`deb`,`rpm`,`apk`,`ipa`].includes(t)?`binary`:[`sql`,`db`,`sqlite`,`mdb`].includes(t)?`data`:`gen`}function Sl(e){let t=e.lastIndexOf(`.`);return t>=0?e.slice(t+1).toUpperCase():``}var Cl=new Set([`.ds_store`,`thumbs.db`,`desktop.ini`]);function wl(e){let t=(e.split(/[\\/]/).pop()??e).toLowerCase();return t.startsWith(`.ds_store`)?!0:Cl.has(t)}var Tl={jpg:`image/jpeg`,jpeg:`image/jpeg`,png:`image/png`,gif:`image/gif`,webp:`image/webp`,svg:`image/svg+xml`,bmp:`image/bmp`,ico:`image/x-icon`,heic:`image/heic`,heif:`image/heif`,mp4:`video/mp4`,mov:`video/quicktime`,avi:`video/x-msvideo`,webm:`video/webm`,pdf:`application/pdf`,zip:`application/zip`,doc:`application/msword`,docx:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`};function El(e){return Tl[e.split(`.`).pop()?.toLowerCase()??``]||``}function Dl(e){return e===`image/heic`||e===`image/heif`}function Ol(e){return new Promise(t=>{let n=document.createElement(`video`);n.preload=`metadata`,n.muted=!0,n.playsInline=!0;let r=URL.createObjectURL(e),i=!1,a=()=>{i||(i=!0,t(null)),n.removeAttribute(`src`),n.load(),URL.revokeObjectURL(r)};n.addEventListener(`seeked`,()=>{try{let e=document.createElement(`canvas`);e.width=n.videoWidth||320,e.height=n.videoHeight||240;let a=e.getContext(`2d`);if(a){a.drawImage(n,0,0,e.width,e.height),e.toBlob(e=>{i||(i=!0,t(e?URL.createObjectURL(e):null),n.removeAttribute(`src`),n.load(),URL.revokeObjectURL(r))},`image/jpeg`,.7);return}}catch{}a()},{once:!0}),n.addEventListener(`error`,()=>a(),{once:!0}),setTimeout(()=>a(),5e3),n.src=r,n.addEventListener(`loadeddata`,()=>{n.currentTime=.1},{once:!0})})}function kl(e){return e?.code===`max-files`}function Al(e,t,n){if(t.maxFileSize!=null&&e.size>0&&e.size>t.maxFileSize)return{code:`max-file-size`,message:Se(`fileExceedsSizeLimit`,`File exceeds {{limit}} MB limit`,{limit:(t.maxFileSize/1048576).toFixed(1)})};if(t.maxTotalFilesSize!=null&&e.size>0){let r=e.size;for(let e of n.values())e.status!==`rejected`&&e.status!==`cancelled`&&(r+=e.size);if(r>t.maxTotalFilesSize)return{code:`max-total-size`,message:Se(`totalSizeLimitExceeded`,`Total file size limit exceeded`)}}if(t.maxNumberOfFiles!=null){let e=0;for(let t of n.values())t.status!==`rejected`&&t.status!==`cancelled`&&e++;if(e>=t.maxNumberOfFiles)return{code:`max-files`,message:Se(`maxFilesAllowed`,`Maximum {{count}} files allowed`,{count:t.maxNumberOfFiles})}}if(t.allowedFileTypes!=null){let n=t.allowedFileTypes,r=`.`+(e.name.split(`.`).pop()?.toLowerCase()??``);if(!n.some(t=>t.startsWith(`.`)?r===t.toLowerCase():t.endsWith(`/*`)?e.type.startsWith(t.slice(0,-1)):e.type===t))return{code:`type-not-allowed`,message:Se(`fileTypeNotAllowed`,`File type not allowed`)}}if(t.blockedFileTypes!=null){let n=t.blockedFileTypes,r=`.`+(e.name.split(`.`).pop()?.toLowerCase()??``);if(n.some(t=>t.startsWith(`.`)?r===t.toLowerCase():t.endsWith(`/*`)?e.type.startsWith(t.slice(0,-1)):e.type===t))return{code:`type-blocked`,message:Se(`fileTypeBlocked`,`File type is blocked`)}}return null}function jl(e){return e.allowedFileTypes?e.allowedFileTypes.join(`,`):``}function Ml(e){return!e.trim()||e.split(`,`).some(e=>{let t=e.trim().toLowerCase();if(!t)return!1;if(t===`*`||t===`*/*`)return!0;let n=t.startsWith(`.`)?El(`file${t}`):t;return n.startsWith(`image/`)||n.startsWith(`video/`)})}var Nl=class extends ee{};Nl.directiveName=`unsafeSVG`,Nl.resultType=2;var Pl=y(Nl),Fl=`<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,Il=`<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="10.5" y1="18.5" x2="13.5" y2="18.5"/>`,Ll=[{id:`device`,labelKey:`myDevice`,label:`My Device`,icon:Fl,iconColor:`#2563eb`},{id:`url`,labelKey:`urlLink`,label:`URL link`,icon:`<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>`,iconColor:`#16a34a`},{id:`camera`,labelKey:`camera`,label:`Camera`,icon:`<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>`,iconColor:`#7c3aed`},{id:`screen-cast`,labelKey:`screenCapture`,label:`Screen capture`,icon:`<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>`,iconColor:`#ea580c`}],Rl={id:`device`,labelKey:`myDevice`,label:`My Device`,icon:Il,iconColor:`#2563eb`},zl=class extends e{constructor(...e){super(...e),this.t=o,this.sources=Ll}static{this.styles=r`
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
  `}_handleClick(e){this.dispatchEvent(new CustomEvent(`source-click`,{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return a`
      ${this.sources.map(e=>a`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?E(e):n`<svg viewBox="0 0 24 24" class=${e.fillIcon?`fill-icon`:``}>${Pl(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};u([i({attribute:!1})],zl.prototype,`t`,void 0),u([i({type:Array})],zl.prototype,`sources`,void 0);var Bl=new Set([`multi-select`,`tags`,`ultratags`]),Vl=new Set([`text`,`textarea`,`attachment-uri`]);function Hl(e){return _n(e)||e===`focus-point`?[]:Bl.has(e)?[{key:`SET`,label:j(`bulkOpSet`,`Set`)},{key:`ADD`,label:j(`bulkOpAddTo`,`Add to`)},{key:`DELETE`,label:j(`bulkOpRemoveFrom`,`Remove from`)}]:Vl.has(e)?[{key:`SET`,label:j(`bulkOpSet`,`Set`)},{key:`ADD`,label:j(`bulkOpAppend`,`Append`)},{key:`DELETE`,label:j(`bulkOpRemove`,`Remove`)}]:[{key:`SET`,label:j(`bulkOpSet`,`Set`)},{key:`DELETE`,label:j(`bulkOpClear`,`Clear`)}]}function Ul(e,t){return e!==`DELETE`||Bl.has(t)||Vl.has(t)}function Wl(e){if(typeof e==`string`)return e;if(e&&typeof e==`object`){let t=e;return t.sid||t.label||String(e)}return String(e)}function Gl(e,t,n,r){let i=Bl.has(r),a=Vl.has(r);switch(e){case`SET`:return n;case`ADD`:if(i){let e=Array.isArray(t)?t:[],i=Array.isArray(n)?n:[];if(i.length===0)return e;if(r===`ultratags`)return jn(e,i,!1);if(r===`tags`){let t=new Set(e.map(e=>Wl(e))),n=[...e];for(let e of i){let r=Wl(e);t.has(r)||(t.add(r),n.push(e))}return n}let a=new Set(e.map(e=>JSON.stringify(e))),o=[...e];for(let e of i){let t=JSON.stringify(e);a.has(t)||(a.add(t),o.push(e))}return o}if(a){let e=typeof n==`string`?n:``;if(!e)return t??``;let r=typeof t==`string`?t:``;return r?`${r} ${e}`:e}return n;case`DELETE`:if(i){let e=Array.isArray(t)?t:[],i=Array.isArray(n)?n:[];if(i.length===0)return e;if(r===`ultratags`)return jn(e,i,!0);if(r===`tags`){let t=new Set(i.map(e=>Wl(e)));return e.filter(e=>!t.has(Wl(e)))}let a=new Set(i.map(e=>JSON.stringify(e)));return e.filter(e=>!a.has(JSON.stringify(e)))}if(a){let e=typeof n==`string`?n:``;return e?(typeof t==`string`?t:``).replaceAll(e,``).replace(/\s{2,}/g,` `).trim():``}return r===`geopoint`?{latitude:``,longitude:``}:null;default:return n}}function Kl(e,t,n,r,i){let a=i??`en`,o=!!e.regional_variants_group_uuid,s=Pn(e,n,{meta:{[e.key]:t}},i),c=e=>o&&typeof e==`object`&&!!e&&!Array.isArray(e),l=Gl(r,c(t)?t[a]:t,c(s)?s[a]:s,e.type);return o?{...c(t)?t:{},[a]:l}:l}var ql=Symbol(`clamp-drop`);function Jl(e,t,n,r,i){if(e.type!==`select-one`&&e.type!==`multi-select`)return t;let a=new Set(n),o=!!e.regional_variants_group_uuid,s=r??`en`,c=e=>o&&typeof e==`object`&&!!e&&!Array.isArray(e),l=c(t)?t[s]:t,u;if(e.type===`multi-select`){let e=Array.isArray(l)?l:[],t=c(i)?i[s]:i,n=new Set((Array.isArray(t)?t:[]).map(e=>e));u=e.filter(e=>a.has(e)||n.has(e))}else if(l==null||l===``)u=l;else if(a.has(l))u=l;else return ql;return o?{...c(t)?t:{},[s]:u}:u}var Yl=r`
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
`,Xl=r`
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

  ${Yl}

  ${b}
`,Zl=r`
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

  ${b}
`,Ql=r`
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

  ${b}
`,$l=r`
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

  ${Yl}

  ${b}
`,eu=r`
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
`,tu=r`
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
`,H=class t extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this.primaryAction=`save`,this.exitAction=`cancel`,this.operationMode=`full`,this._activeFieldKey=``,this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._confirmAllowApply=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._conflictedFieldKey=null,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onDialogCancel=e=>{e.preventDefault()},this._onKeyDown=async e=>{if(e.key===`Escape`){if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)||await this._onClose()}},this._groupOfFieldCache=null,this._onConfirmOk=()=>{this._confirmVisible=!1,this._confirmResolve?.(!0),this._confirmResolve=null},this._onConfirmApply=()=>{(this._opBarEl?.applyPending()??!1)&&(this._confirmVisible=!1,this._confirmResolve?.(!0),this._confirmResolve=null)},this._onConfirmCancel=()=>{this._confirmVisible=!1,this._confirmResolve?.(!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{if(e.key!==`Tab`)return;let t=this.shadowRoot?.querySelector(`.fm-confirm`);if(!t)return;let n=t.querySelectorAll(`button`);if(n.length===0)return;let r=n[0],i=n[n.length-1],a=this.shadowRoot?.activeElement;e.shiftKey&&a===r?(e.preventDefault(),i.focus()):!e.shiftKey&&a===i&&(e.preventDefault(),r.focus())},this._onPendingChange=e=>{let{operation:t,value:n,taxonomyEntry:r}=e.detail,i=this._activeField;(i?.type===`taxonomy-node`?r==null:A(n))&&(!i||Ul(t,i.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:n,taxonomyEntry:r})},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{let e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e)},this._onBulkApply=e=>{let t=this._activeField;if(!t)return;let{operation:n,value:r,taxonomyEntry:i}=e.detail,{updates:a,appliedIds:o}=this._computeBulkUpdates(t,n,r);this._setStagedBulk(a),t.type===`taxonomy-node`&&i!==void 0&&this._setStagedTaxonodeBulk(o,t.key,i)},this._onRowTaxonomyEntry=e=>{let{fileId:t,fieldKey:n,entry:r}=e.detail;this._setStagedTaxonodeSingle(t,n,r)},this._onRowFieldChange=e=>{let t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{let t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected=this._selected.size===this.files.length?new Set:new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{this._missingRequiredFieldKey==null&&this._conflictedFieldKey==null&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._refreshMissingRequired(),this._refreshConflictedField(),this._missingRequiredFieldKey==null&&this._conflictedFieldKey==null&&(this._commitStagedChanges(),this._emitClose(!0)))},this._onCancel=async()=>{await this._confirmDiscardAll()&&this._emitClose()},this._onBack=async()=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._commitStagedChanges(),this._emitClose(!1))},this._onClose=async()=>{if(this.exitAction===`back`){await this._onBack();return}await this._confirmDiscardAll()&&this._emitClose()}}static{this.styles=[Xl]}static{this._PREVIEW_DEBOUNCE_MS=150}connectedCallback(){super.connectedCallback(),this._normalizeSchema(),this._initStaged(),document.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._onKeyDown),this._confirmResolve?.(!1),this._confirmResolve=null,this._cancelPreviewTimer()}_showModally(){let e=this.shadowRoot?.querySelector(`dialog.fm-overlay`);if(!(!e||e.open||typeof e.showModal!=`function`))try{e.showModal()}catch{}}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},t._PREVIEW_DEBOUNCE_MS)}_initStaged(){let e=new Map,t=new Map,n=new Set,r=new Map,i=this.schema?.productsEnabled===!0;for(let a of this.files){let o=new Map;if(a.meta)for(let[e,t]of Object.entries(a.meta))o.set(e,t);if(i){let e=a.product;e?.ref!==void 0&&o.set(Ln,e.ref),e?.position!==void 0&&o.set(Rn,e.position)}Array.isArray(a.tags)&&a.tags.length>0&&o.set(Xi,[...a.tags]),e.set(a.id,o),a.taxonodes&&t.set(a.id,new Map(Object.entries(a.taxonodes))),n.add(a.id),r.set(a.id,a.status?a:{...a,status:`idle`})}this._staged=e,this._stagedTaxonodes=t,this._selected=n,this._originalFiles=r,this._recomputeResolvedSchemas();let a=this.initialFieldKey;if(a&&this.schema?.fieldsByKey.has(a))this._activeFieldKey=a;else if(this.schema&&this.schema.fields.length>0){let e=this._groupOfFieldMap(),t=this.schema.fields.find(t=>this._isFieldNavigable(t,e));this._activeFieldKey=t?.key??``}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(e,t,n){let r=new Map(this._staged),i=new Map(r.get(e)??new Map);i.set(t,n),r.set(e,i),this._staged=r}_setStagedBulk(e){let t=new Map(this._staged);for(let[n,r,i]of e){let e=new Map(t.get(n)??new Map);e.set(r,i),t.set(n,e)}this._staged=t}_setStagedTaxonodeBulk(e,t,n){let r=new Map(this._stagedTaxonodes);for(let i of e){let e=new Map(r.get(i)??new Map);e.set(t,n),r.set(i,e)}this._stagedTaxonodes=r}_setStagedTaxonodeSingle(e,t,n){let r=new Map(this._stagedTaxonodes),i=new Map(r.get(e)??new Map);i.set(t,n),r.set(e,i),this._stagedTaxonodes=r}_isTaxonodeEntryUnedited(e,t){let n=this._stagedTaxonodes.get(e)?.get(t);if(n===void 0)return!0;if(n===null)return!1;let r=this._originalFiles.get(e)?.taxonodes?.[t];return r?n.uuid===r.uuid||n.suid===r.suid:!1}_syncStagedTaxonodesFromFiles(){let e=!1,t=new Map(this._stagedTaxonodes);for(let n of this.files)if(n.taxonodes)for(let[r,i]of Object.entries(n.taxonodes)){let a=this._isTaxonodeEntryUnedited(n.id,r),o=t.get(n.id)?.get(r),s=o!=null&&i!=null&&(o.uuid===i.uuid||o.suid===i.suid);if(!a||s||o==null&&i==null)continue;let c=new Map(t.get(n.id)??new Map);c.set(r,i??null),t.set(n.id,c),e=!0;let l=this._originalFiles.get(n.id);l&&this._originalFiles.set(n.id,{...l,taxonodes:{...l.taxonodes??{},[r]:i??null}})}e&&(this._stagedTaxonodes=t)}get _activeField(){return this.schema?.fieldsByKey?.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){let e=this._activeField;if(!e||e.type!==`ultratags`)return[];let t=[];for(let n of this._selected){let r=this._originalFiles.get(n),i=this._staged.get(n)?.get(e.key),a=kn(i===void 0?r?.meta?.[e.key]:i);a.length&&(t=jn(t,a,!1))}return t.filter(e=>typeof e!=`string`)}_originalValue(e,t){let n=this._originalFiles.get(e);if(n){if(Vn(t)){let e=Hn(t);return e?n.product?.[e]:void 0}return Qi(t)?Array.isArray(n.tags)?[...n.tags]:[]:n.meta?.[t]}}_stagedWithPendingPreview(){let e=this._previewOp,t=this._activeField;if(!e||!t||A(e.value)||this._selected.size===0)return this._staged;let{updates:n}=this._computeBulkUpdates(t,e.operation,e.value);if(n.length===0)return this._staged;let r=new Map(this._staged);for(let[e,t,i]of n){let n=new Map(r.get(e)??new Map);n.set(t,i),r.set(e,n)}return r}_refreshMissingRequired(){let e=this.schema&&this.config&&ir(this.schema,this.config)?fr(this._stagedWithPendingPreview(),this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set,t=null;if(this.schema&&e.size>0){for(let n of this.schema.fields)if(e.has(n.key)){t=n.key;break}}t!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=t);let n=this._missingRequiredKeys,r=n.size!==e.size;if(!r){for(let t of e)if(!n.has(t)){r=!0;break}}r&&(this._missingRequiredKeys=e)}_refreshConflictedField(){let e=this.schema&&this.dependencies.length>0?mr(this._staged,this._originalFiles,this.schema,this.dependencies):null;e!==this._conflictedFieldKey&&(this._conflictedFieldKey=e)}_selectedFileInputs(){let e=[];for(let t of this.files){if(!this._selected.has(t.id))continue;let n=this._staged.get(t.id),r={...t.meta};if(n)for(let[e,t]of n)r[e]=t;e.push({id:t.id,mime:t.type??``,meta:r})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=cn(this._selectedFileInputs(),this.schema,this.dependencies);let e=new Map;for(let t of this.files){let n=this._staged.get(t.id),r={...t.meta};if(n)for(let[e,t]of n)r[e]=t;e.set(t.id,$t({mime:t.type??``,meta:r},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){if(!this.schema||!this._activeFieldKey)return;let e=this.schema.fieldsByKey?.get(this._activeFieldKey);if(e&&this._cachedBulkResolved.size===0)return;let t=this._groupOfFieldMap();if(e&&this._isFieldNavigable(e,t))return;let n=this.schema.fields.find(e=>this._isFieldNavigable(e,t));this._setPendingOp(null),this._activeFieldKey=n?.key??``}_groupOfFieldMap(){if(this.schema&&this._groupOfFieldCache?.schema===this.schema)return this._groupOfFieldCache.map;let e=new Map;for(let t of this.schema?.groups??[])for(let n of t.fields)e.set(n,t);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return nr(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){let n=t.get(e);return!(tn(e,n,this._cachedBulkResolved)||n&&Fr(n)&&!this._isFieldRequiredBulk(e)&&!nn(e,n,this._cachedBulkResolved))}_recomputeFilledFields(){let e=new Set,t=this._stagedWithPendingPreview();for(let n of this.schema?.fields??[])for(let[r,i]of t){let t=i.get(n.key),a=this._originalValue(r,n.key);if(t!==void 0&&!A(t)&&JSON.stringify(t)!==JSON.stringify(a)){e.add(n.key);break}}let n=this._filledFieldsCache,r=n.size!==e.size;if(!r){for(let t of e)if(!n.has(t)){r=!0;break}}r&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){let e=[...this.files];e.sort((e,t)=>{let n=e.name.localeCompare(t.name)||e.id.localeCompare(t.id);return this._sortAsc?n:-n}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!A(this._pendingOp.value)}get _hasStagedChanges(){for(let[e,t]of this._staged)for(let[n,r]of t)if(JSON.stringify(r)!==JSON.stringify(this._originalValue(e,n)))return!0;for(let[e,t]of this._stagedTaxonodes){let n=this._originalFiles.get(e)?.taxonodes??{};for(let[e,r]of t){let t=n[e]??null;if(JSON.stringify(r??null)!==JSON.stringify(t??null))return!0}}return!1}_confirmDiscardPending(){return this._hasPendingValue?this._openDiscardConfirm(!0):Promise.resolve(!0)}_confirmDiscardAll(){return!this._hasPendingValue&&!this._hasStagedChanges?Promise.resolve(!0):this._openDiscardConfirm(!1)}_openDiscardConfirm(e){return new Promise(t=>{this._confirmResolve=t,this._confirmAllowApply=e,this._confirmVisible=!0})}_normalizeSchema(){if(!this.schema)return;let e=Nr(this.schema);e!==this.schema&&(this.schema=e)}willUpdate(e){e.has(`schema`)&&this._normalizeSchema(),(e.has(`_staged`)||e.has(`_selected`)||e.has(`schema`)||e.has(`dependencies`)||e.has(`files`))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden()),(e.has(`_staged`)||e.has(`schema`)||e.has(`config`)||e.has(`dependencies`)||e.has(`_previewOp`)||e.has(`_selected`))&&(this._refreshMissingRequired(),this._refreshConflictedField()),(e.has(`_staged`)||e.has(`schema`)||e.has(`_previewOp`)||e.has(`_selected`))&&this._recomputeFilledFields(),(e.has(`files`)||e.has(`_sortAsc`))&&this._recomputeSortedFiles(),e.has(`files`)&&this._syncStagedTaxonodesFromFiles()}updated(e){super.updated?.(e),this._showModally(),e.has(`_confirmVisible`)&&this._confirmVisible&&requestAnimationFrame(()=>{let e=this._confirmAllowApply?`.fm-confirm .btn-primary`:`.fm-confirm .fm-confirm-close`;(this.shadowRoot?.querySelector(e))?.focus()})}_computeBulkUpdates(e,t,n){let r=qr(e,this.config),i=[],a=new Set;for(let o of this._selected){let s=this._cachedPerFileResolved.get(o)?.get(e.ckey);if(s?.hidden)continue;let c=this._staged.get(o),l=c?.has(e.key)?c.get(e.key):this._originalValue(o,e.key)??null,u=Kl(e,l,n,t,r);if(s?.allowedValues){let t=Jl(e,u,s.allowedValues,r,l);if(t===ql)continue;u=t}i.push([o,e.key,u]),a.add(o)}return{updates:i,appliedIds:a}}_commitStagedChanges(){let e=[],t=[],n=[];for(let[r,i]of this._staged){if(!this._originalFiles.get(r))continue;let a={},o={};for(let[e,t]of i){let i=this._originalValue(r,e);if(JSON.stringify(t)!==JSON.stringify(i))if(Vn(e)){let n=Hn(e);if(!n)continue;let r=t===``||t==null;n===`position`?o.position=r?void 0:Number(t):o.ref=r?void 0:String(t)}else if(Qi(e)){let e=Array.isArray(t)?t:[];n.push({fileId:r,tags:e})}else a[e]=t}Object.keys(a).length>0&&e.push({fileId:r,meta:a}),Object.keys(o).length>0&&t.push({fileId:r,product:o})}this.dispatchEvent(new CustomEvent(`metadata-save-batch`,{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent(`product-save-batch`,{detail:{changes:t},bubbles:!0,composed:!0})),n.length>0&&this.dispatchEvent(new CustomEvent(`tags-save-batch`,{detail:{changes:n},bubbles:!0,composed:!0}));let r=[];for(let[e,t]of this._stagedTaxonodes){let n=this._originalFiles.get(e);if(!n)continue;let i=n.taxonodes??{},a={};for(let[e,n]of t){let t=i[e]??null;JSON.stringify(n??null)!==JSON.stringify(t??null)&&(a[e]=n??null)}Object.keys(a).length>0&&r.push({fileId:e,taxonodes:a})}r.length>0&&this.dispatchEvent(new CustomEvent(`taxonomy-save-batch`,{detail:{changes:r},bubbles:!0,composed:!0}))}_emitClose(e=!1){this.dispatchEvent(new CustomEvent(`metadata-close`,{detail:{saved:e},bubbles:!0,composed:!0}))}render(){if(!this.schema?.fields?.length)return a`
        <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
          <div class="fm-modal" @click=${e=>e.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title"
                >${j(`fillMultipleAssets`,`Fill multiple assets`)}</span
              >
              <button class="fm-topbar-close" @click=${this._onClose} title=${j(`close`,`Close`)}>
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
              ${j(`noMetadataFieldsConfigured`,`No metadata fields configured`)}
            </div>
          </div>
        </dialog>
      `;let e=this._activeField,t=this._sortedFilesCache,n=this._selected.size===this.files.length&&this.files.length>0,r=this._selected.size>0&&!n,i=this._missingRequiredFieldKey,o=this._cachedBulkResolved,c=this._cachedPerFileResolved,l=e?.ckey,u=l?o.get(l):void 0,d=i!=null&&this._activeFieldKey===i,f=i!=null&&!d,p=this._conflictedFieldKey!=null,m=this.primaryAction===`upload`?this.files.length>1?j(`uploadAll`,`Upload all ({{count}})`,{count:this.files.length}):j(`upload`,`Upload`):j(`save`,`Save`);return a`
      <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
        <div class="fm-modal" @click=${e=>e.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${j(`fillMultipleAssets`,`Fill multiple assets`)}</span>
            ${this.schema.regionalVariantsGroups?.length?a`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${this.config?.regionalFilters??{}}
                ></sfx-regional-settings>`:s}
            <button class="fm-topbar-close" @click=${this._onClose} title=${j(`close`,`Close`)}>
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
              .bulkResolvedSchema=${o}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              ${e?a`
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
                      .allowedValues=${u?.allowedValues??null}
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
                          .checked=${n}
                          .indeterminate=${r}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${j(`name`,`Name`)}
                        <span class="fm-sort-arrow">${this._sortAsc?`↑`:`↓`}</span>
                      </div>
                      <div class="fm-th-size">${j(`size`,`Size`)}</div>
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
                        .perFileResolved=${c}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    </div>
                  `:a`
                    <!-- Every group is hidden by default with no required field
                         to surface — nothing to edit, but the schema isn't empty. -->
                    <div class="fm-empty" role="status" aria-live="polite">
                      ${j(`allMetadataFieldsHidden`,`All metadata fields are currently hidden`)}
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
            ${this.exitAction===`back`?a`
                  <button
                    class="btn-back"
                    @click=${this._onBack}
                    title=${j(`backToFilesHint`,`Back to your files — filled metadata is kept`)}
                  >
                    ← ${j(`backToFiles`,`Back to files`)}
                  </button>
                  <div class="spacer"></div>
                `:a`
                  <div class="spacer"></div>
                  <button class="btn-ghost" @click=${this._onCancel}>
                    ${j(`cancel`,`Cancel`)}
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
              class=${T({"btn-primary":!0,"btn-primary--next":f})}
              @click=${f?this._onJumpToNextRequired:this._onSave}
              ?disabled=${d||!f&&p}
              title=${f?j(`jumpToNextMetadata`,`Jump to next required field`):p?j(`resolveConflictBeforeContinuing`,`Resolve the conflicting value before continuing`):``}
            >
              ${f?a`<span class="btn-primary-label">${j(`nextMetadata`,`Next metadata`)}</span
                    ><span class="btn-primary-arrow" aria-hidden="true">→</span>`:m}
            </button>
          </div>

          ${this._confirmVisible?a`
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
                    @click=${e=>e.stopPropagation()}
                  >
                    <div class="fm-confirm-header">
                      <h3 class="fm-confirm-title" id="fm-confirm-title">
                        ${this._confirmAllowApply?j(`unappliedChangesTitle`,`Unapplied changes`):j(`unsavedChangesTitle`,`Unsaved changes`)}
                      </h3>
                      <button
                        class="fm-confirm-close"
                        aria-label=${j(`cancel`,`Cancel`)}
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
                      ${this._confirmAllowApply?j(`unappliedChangesBody`,`You have unapplied bulk changes for this field. Apply them before switching, or discard to continue without saving.`):j(`discardBulkChanges`,`You have unsaved changes. Discard them?`)}
                    </p>
                    <div class="fm-confirm-actions">
                      ${this._confirmAllowApply?a`
                            <button class="btn-ghost" @click=${this._onConfirmOk}>
                              ${j(`discard`,`Discard`)}
                            </button>
                            <button class="btn-primary" @click=${this._onConfirmApply}>
                              ${j(`apply`,`Apply`)}
                            </button>
                          `:a`<button class="btn-primary" @click=${this._onConfirmOk}>
                            ${j(`discard`,`Discard`)}
                          </button>`}
                    </div>
                  </div>
                </div>
              `:s}
        </div>
      </dialog>
    `}};u([i({attribute:!1})],H.prototype,`schema`,void 0),u([i({attribute:!1})],H.prototype,`files`,void 0),u([i({attribute:!1})],H.prototype,`config`,void 0),u([i({attribute:!1})],H.prototype,`autocomplete`,void 0),u([i({attribute:!1})],H.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],H.prototype,`ultratags`,void 0),u([i({attribute:!1})],H.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],H.prototype,`initialFieldKey`,void 0),u([i({attribute:!1})],H.prototype,`dependencies`,void 0),u([i({type:String})],H.prototype,`primaryAction`,void 0),u([i({type:String})],H.prototype,`exitAction`,void 0),u([i({type:String})],H.prototype,`operationMode`,void 0),u([c()],H.prototype,`_activeFieldKey`,void 0),u([c()],H.prototype,`_staged`,void 0),u([c()],H.prototype,`_stagedTaxonodes`,void 0),u([c()],H.prototype,`_selected`,void 0),u([c()],H.prototype,`_sortAsc`,void 0),u([c()],H.prototype,`_previewOp`,void 0),u([c()],H.prototype,`_confirmVisible`,void 0),u([c()],H.prototype,`_confirmAllowApply`,void 0),u([f(`sfx-bulk-meta-op-bar`)],H.prototype,`_opBarEl`,void 0),u([c()],H.prototype,`_missingRequiredFieldKey`,void 0),u([c()],H.prototype,`_missingRequiredKeys`,void 0),u([c()],H.prototype,`_conflictedFieldKey`,void 0),w(`sfx-bulk-metadata-modal`,H);var U=class extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.activeFieldKey=``,this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query=``,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;let e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}static{this.styles=[Zl]}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener(`resize`,this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this._onResize),this._resizeTimer&&=(clearTimeout(this._resizeTimer),null)}_isRequired(e){return nr(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){let t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){let e=this.schema?.groups??[];return e.length>0&&e.every(e=>this._collapsed.has(e.uuid))}_toggleAll(){this._collapsed=this._allCollapsed?new Set:new Set((this.schema?.groups??[]).map(e=>e.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){this._query=``,(this.renderRoot?.querySelector(`.sb-search-input`))?.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent(`field-select`,{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){super.updated?.(e),!(!e.has(`activeFieldKey`)||!this.activeFieldKey)&&(this.renderRoot?.querySelector(`.field-item.active`))?.scrollIntoView({block:`nearest`})}render(){if(!this.schema)return s;let e=this.bulkResolvedSchema,t=this._isNarrow?``:this._query.trim().toLowerCase(),n=t.length>0,r=0,i=this.schema.groups.map(i=>{let o=this._isNarrow||n||!this._collapsed.has(i.uuid);if(e&&i.ckey&&e.get(i.ckey)?.hidden)return s;let c=e?i.fields.filter(t=>!tn(t,i,e)):i.fields;return Fr(i)&&(c=c.filter(t=>this._isRequired(t)||nn(t,i,e))),n&&!i.name?.toLowerCase().includes(t)&&(c=c.filter(e=>e.title?.toLowerCase().includes(t))),c.length===0?s:(r+=c.length,a`
        <button
          class="group-label"
          @click=${()=>this._toggleGroup(i.uuid)}
          aria-expanded=${o}
        >
          <span class="group-label-text">${i.name}</span>
          <svg
            class="group-chevron ${o?`open`:``}"
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
        ${o?c.map(e=>a`
                <button
                  class="field-item ${this.activeFieldKey===e.key?`active`:``}"
                  @click=${()=>this._onFieldClick(e.key)}
                >
                  <span class="field-icon" aria-hidden="true">${ia(e.type)}</span>
                  <span class="field-name">${e.title}</span>
                  ${this.filledFields.has(e.key)?a`<span class="field-dot"></span>`:s}
                  ${this._isRequired(e)?a`<span
                        class=${T({"field-required":!0,unmet:this.missingRequiredKeys.has(e.key)})}
                        aria-hidden="true"
                        >*</span
                      >`:s}
                </button>
              `):s}
      `)});return a`
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
            placeholder=${j(`searchFields`,`Search fields...`)}
            aria-label=${j(`searchFields`,`Search fields...`)}
            @input=${this._onSearchInput}
          />
          ${this._query?a`<button
                class="sb-search-clear"
                type="button"
                aria-label=${j(`clear`,`Clear`)}
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
              </button>`:s}
        </div>
        <button
          class="sb-collapse-btn"
          type="button"
          aria-label=${this._allCollapsed?j(`expandAll`,`Expand all`):j(`collapseAll`,`Collapse all`)}
          title=${this._allCollapsed?j(`expandAll`,`Expand all`):j(`collapseAll`,`Collapse all`)}
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
      ${n&&r===0?a`<div class="sb-empty">${j(`noFieldsMatch`,`No fields match`)}</div>`:i}
    `}};u([i({attribute:!1})],U.prototype,`schema`,void 0),u([i({attribute:!1})],U.prototype,`activeFieldKey`,void 0),u([i({attribute:!1})],U.prototype,`filledFields`,void 0),u([i({attribute:!1})],U.prototype,`missingRequiredKeys`,void 0),u([i({attribute:!1})],U.prototype,`config`,void 0),u([i({attribute:!1})],U.prototype,`bulkResolvedSchema`,void 0),u([c()],U.prototype,`_collapsed`,void 0),u([c()],U.prototype,`_isNarrow`,void 0),u([c()],U.prototype,`_query`,void 0),w(`sfx-bulk-meta-sidebar`,U);var W=class t extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this.operationMode=`full`,this._operation=`SET`,this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry,this._emitPendingChange()},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;let t=this.renderRoot.querySelector(`.op-dropdown-wrap`);t&&(e.composedPath().includes(t)||(this._opDropdownOpen=!1))},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{if(e.key!==`Enter`)return;let n=this.field?.type;if(!n||!t._ENTER_APPLY_TYPES.has(n)||e.composedPath().find(e=>e instanceof HTMLElement)?.tagName===`TEXTAREA`)return;e.preventDefault();let r=e.composedPath().find(e=>e instanceof HTMLInputElement);r&&r.value!==void 0&&(this._value=r.value),this._onApply()}}static{this.styles=[Ql]}get _availableOps(){return this.field?Hl(this.field.type):[]}static _emptyValueForType(e){switch(e){case`multi-select`:case`tags`:case`ultratags`:return[];case`boolean`:return`null`;case`geopoint`:return{latitude:``,longitude:``};case`asset-attachments`:case`attachments-assets`:case`integer-list`:return null;case`taxonomy-node`:return``;default:return``}}get _effectiveValue(){return this._value??t._emptyValueForType(this.field?.type)}willUpdate(e){e.has(`operationMode`)&&this.operationMode===`set-only`&&(this._operation=`SET`,this._opDropdownOpen=!1),e.has(`field`)&&this.field&&(this._operation=`SET`,this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._onOpDropdownClose,!0)}get _taxonomyEntryForEmit(){if(this.field?.type===`taxonomy-node`)return this._operation===`DELETE`?null:this._pendingTaxonode}_emitPendingChange(){this.dispatchEvent(new CustomEvent(`pending-change`,{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0}))}static{this._ENTER_APPLY_TYPES=new Set([`text`,`numeric`,`decimal2`,`date`,`geopoint`,`attachment-uri`])}applyPending(){return!this._isApplyDisabled&&(this._onApply(),!0)}_onApply(){this._isApplyDisabled||(this.dispatchEvent(new CustomEvent(`bulk-apply`,{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation===`DELETE`&&!Ul(this._operation,this.field?.type)&&(this._operation=`SET`),this._emitPendingChange())}get _isApplyDisabled(){return this.selectedCount===0?!0:this._operation===`DELETE`?Bl.has(this.field?.type)||Vl.has(this.field?.type)?A(this._value):!1:A(this._value)}render(){if(!this.field)return s;if(vn(this.field)){let e=Gi();return a`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${e}">
            ${Ki}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${e}</span>
            </div>
          </div>
        </div>
      `}let e=this._availableOps,t=e.length>1,n=e.find(e=>e.key===this._operation),r=this.operationMode===`set-only`;return a`
      <div class="op-bar">
        ${r?s:a`<div class="op-field op-field--operation">
              <span class="op-field-label">${j(`operation`,`Operation`)}</span>
              ${t?a`
                    <div class="op-dropdown-wrap">
                      <button
                        class="op-trigger ${this._opDropdownOpen?`open`:``}"
                        @click=${this._onOpToggle}
                      >
                        <span class="op-trigger-label"
                          >${n?.label??j(`bulkOpSet`,`Set`)}</span
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
                      ${this._opDropdownOpen?a`
                            <div class="op-menu">
                              ${e.map(e=>a`
                                  <button
                                    class="op-option ${e.key===this._operation?`active`:``}"
                                    @click=${()=>this._onOpSelect(e.key)}
                                  >
                                    ${e.label}
                                  </button>
                                `)}
                            </div>
                          `:s}
                    </div>
                  `:a`
                    <div class="op-trigger op-trigger--static">
                      <span class="op-trigger-label"
                        >${n?.label??j(`bulkOpOverwrite`,`Overwrite`)}</span
                      >
                    </div>
                  `}
            </div>`}
        ${Ul(this._operation,this.field.type)?a`
              <div class="op-field op-field--value">
                ${this.field.type===`geopoint`?s:a`<span class="op-field-label">${this.field.title}</span>`}
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
                    .language=${this.config?.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type===`ultratags`&&this._operation===`DELETE`?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:s}

        <button class="btn-apply" ?disabled=${this._isApplyDisabled} @click=${this._onApply}>
          ${r?j(`applyToSelected`,`Apply to selected`):j(`apply`,`Apply`)}
        </button>
      </div>
    `}};u([i({attribute:!1})],W.prototype,`field`,void 0),u([i({attribute:!1})],W.prototype,`autocomplete`,void 0),u([i({attribute:!1})],W.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],W.prototype,`ultratags`,void 0),u([i({attribute:!1})],W.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],W.prototype,`ultratagsPresentOnSelection`,void 0),u([i({attribute:!1})],W.prototype,`config`,void 0),u([i({type:Number})],W.prototype,`selectedCount`,void 0),u([i({attribute:!1})],W.prototype,`allowedValues`,void 0),u([i({type:String})],W.prototype,`operationMode`,void 0),u([c()],W.prototype,`_operation`,void 0),u([c()],W.prototype,`_value`,void 0),u([c()],W.prototype,`_pendingTaxonode`,void 0),u([c()],W.prototype,`_opDropdownOpen`,void 0),w(`sfx-bulk-meta-op-bar`,W);var nu=new Set([`multi-select`,`tags`,`ultratags`]),ru=new Map;function iu(e,t){return t.sid&&e.get(t.sid)||t.slug&&e.get(t.slug)||t.uuid&&e.get(t.uuid)||void 0}function au(e){return e?.i18n&&Object.keys(e.i18n).length>0?e.i18n:void 0}function ou(e,t){let n=new Map(e??[]);for(let[e,r]of t??[]){let t=au(n.get(e));if(!t){n.set(e,r);continue}n.set(e,{...r,i18n:{...t,...au(r)??{}}})}return n}function su(e,t,n){return!t.regional_variants_group_uuid||typeof e!=`object`||!e||Array.isArray(e)?e:e[n??`en`]}function cu(e){return Array.isArray(e)?e:[]}function lu(e){return e==null||e===``||Array.isArray(e)&&e.length===0?!0:typeof e==`object`&&!Array.isArray(e)&&!Object.values(e).some(e=>e!=null&&e!==``)}function uu(e,t){return e.possible_values?.find(e=>e.internal_unique_value===t||e.api_value===t)?.label??String(t)}function du(e,t){if(t==null||t===``)return``;switch(e.type){case`boolean`:return t===!0?`True`:t===!1?`False`:`None`;case`date`:if(typeof t!=`string`||t.length===0)return``;try{return new Date(t+`T00:00`).toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}catch{return t}case`numeric`:{let e=Number(t);return Number.isFinite(e)?e.toLocaleString(void 0,{maximumFractionDigits:0}):String(t)}case`decimal2`:{let e=Number(t);return Number.isFinite(e)?e.toLocaleString(void 0,{maximumFractionDigits:2}):String(t)}case`select-one`:return uu(e,String(t));case`geopoint`:if(typeof t==`object`&&t&&!Array.isArray(t)){let e=t;return!e.latitude&&!e.longitude?``:`(${e.latitude??``}, ${e.longitude??``})`}if(typeof t==`string`){let e=t.match(/^\((.+),(.+)\)$/);if(e)return`(${e[1].trim()}, ${e[2].trim()})`}return String(t);default:return String(t)}}function fu(e){return typeof e==`string`?e:e&&typeof e==`object`&&`label`in e?String(e.label):String(e)}function pu(e,t){let n=e.map(fu),r=t.map(fu),i=new Set(n),a=new Set(r),o=[];for(let e of n)a.has(e)||o.push({label:e,state:`removed`});for(let e of r)o.push({label:e,state:i.has(e)?`kept`:`added`});return o}function mu(e,t){return!t||t.size===0?e:e.map(e=>{if(e.i18n)return e;let n=iu(t,e);return n?{slug:e.slug||n.slug,sid:e.sid||n.sid,uuid:e.uuid||n.uuid,i18n:n.i18n}:e})}function hu(e,t,n,r,i){let a=kn(e),o=kn(t),s=n||`en`,c=r||s,l=e=>e.sid||e.slug||e.uuid||``,u=e=>{let t=e.i18n?e:iu(i,e)??e;return Tn({i18n:t.i18n,slug:t.slug||e.slug||``},s,c).value||e.slug||e.sid||``},d=new Set(a.map(l).filter(Boolean)),f=new Set(o.map(l).filter(Boolean)),p=[];for(let e of a){let t=l(e);f.has(t)||p.push({label:u(e),state:`removed`})}for(let e of o){let t=l(e);p.push({label:u(e),state:d.has(t)?`kept`:`added`})}return p}function gu(e,t,n){let r=new Set(e.map(e=>JSON.stringify(e))),i=new Set(t.map(e=>JSON.stringify(e))),a=[];for(let t of e){let e=JSON.stringify(t);if(!i.has(e)){let e=typeof t==`string`?uu(n,t):String(t);a.push({label:e,state:`removed`})}}for(let e of t){let t=JSON.stringify(e),i=typeof e==`string`?uu(n,e):String(e);a.push({label:i,state:r.has(t)?`kept`:`added`})}return a}function _u(e,t,n,r,i,a){let o=qr(e,r),s=r?.language,c=su(t,e,o),l=su(n,e,o);if(nu.has(e.type)){if(e.type===`ultratags`)return{kind:`array`,items:hu(t,n,s,i,a??ru)};let r=cu(c),o=cu(l);return e.type===`tags`?{kind:`array`,items:pu(r,o)}:{kind:`array`,items:gu(r,o,e)}}return{kind:`scalar`,oldDisplay:du(e,c),newDisplay:du(e,l),oldEmpty:lu(c),newEmpty:lu(l)}}var G=class t extends e{constructor(...e){super(...e),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._pendingFrontendLookup=ru,this._knownUltratagsLookupByField=new Map,this._knownUltratagsLookup=ru,this._keyForFile=e=>e.id,this._renderRow=e=>{let t=this.perFileResolved.get(e.id)?.get(this.field.ckey),n=t?.allowedValues??null,r=t?.hidden??!1;return a`
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
        .allowedValues=${n}
        .notApplicable=${r}
      ></sfx-bulk-meta-row>
    `}}static{this.styles=[tu]}_recomputePendingFrontendLookup(){if(this._knownUltratagsLookup=this.field?.key&&this._knownUltratagsLookupByField.get(this.field.key)||ru,this.field?.type!==`ultratags`||!this.pendingOp){this._pendingFrontendLookup=ru;return}let e=new Map;for(let t of kn(this.pendingOp.value))t.sid&&e.set(t.sid,t),t.slug&&e.set(t.slug,t),t.uuid&&e.set(t.uuid,t);if(this._pendingFrontendLookup=e,e.size>0&&this.field.key){let t=ou(this._knownUltratagsLookup,e);this._knownUltratagsLookupByField.set(this.field.key,t),this._knownUltratagsLookup=t}}willUpdate(e){(e.has(`pendingOp`)||e.has(`field`))&&this._recomputePendingFrontendLookup()}_getEffectiveValue(e){let t=this.staged.get(e.id);return t?.has(this.field.key)?t.get(this.field.key):Qi(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){let t=this.stagedTaxonodes.get(e.id);return t?.has(this.field.key)?t.get(this.field.key)??null:e.taxonodes?.[this.field.key]??null}static{this.VIRTUALIZE_THRESHOLD=60}render(){return this.files.length<=t.VIRTUALIZE_THRESHOLD?a`${this.files.map(this._renderRow)}`:a`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}};u([i({attribute:!1})],G.prototype,`files`,void 0),u([i({attribute:!1})],G.prototype,`field`,void 0),u([i({attribute:!1})],G.prototype,`staged`,void 0),u([i({attribute:!1})],G.prototype,`stagedTaxonodes`,void 0),u([i({attribute:!1})],G.prototype,`selected`,void 0),u([i({attribute:!1})],G.prototype,`pendingOp`,void 0),u([i({attribute:!1})],G.prototype,`config`,void 0),u([i({attribute:!1})],G.prototype,`autocomplete`,void 0),u([i({attribute:!1})],G.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],G.prototype,`ultratags`,void 0),u([i({attribute:!1})],G.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],G.prototype,`perFileResolved`,void 0),w(`sfx-bulk-meta-table`,G);var K=class t extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._liveStageTimer=null,this._onFieldBlur=e=>{e.stopPropagation(),this._cancelLiveStage(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{e.stopPropagation();let n=e.detail.value,r=this.field?.type;if(this._cancelLiveStage(),t._IMMEDIATE_CHANGE_TYPES.has(r)){this._processFieldValue(n);return}t._LIVE_STAGE_TYPES.has(r)&&(this._liveStageTimer=setTimeout(()=>{this._liveStageTimer=null,this._processFieldValue(n,{silent:!0})},t._LIVE_STAGE_DELAY_MS))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`row-taxonomy-entry`,{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}static{this.styles=[$l]}static{this._PENDING_PREVIEW_ONLY_KEYS=new Set([`pendingOp`,`pendingFrontendLookup`])}static{this._IMMEDIATE_CHANGE_TYPES=new Set([`tags`,`ultratags`,`multi-select`])}static{this._LIVE_STAGE_TYPES=new Set([`text`,`textarea`])}static{this._LIVE_STAGE_DELAY_MS=300}shouldUpdate(e){return!(!this.selected&&e.size>0&&[...e.keys()].every(e=>t._PENDING_PREVIEW_ONLY_KEYS.has(e)))}willUpdate(e){e.has(`field`)&&(this._error=null),(e.has(`field`)||e.has(`file`))&&this._cancelLiveStage()}disconnectedCallback(){super.disconnectedCallback(),this._cancelLiveStage()}_cancelLiveStage(){this._liveStageTimer!==null&&(clearTimeout(this._liveStageTimer),this._liveStageTimer=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent(`row-toggle`,{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e,{silent:t=!1}={}){let n=Qn(this.field,e,this.config??void 0);if(n){t||(this._error=n);return}this._error=null;let r={meta:{...this.file.meta,[this.field.key]:this.value}},i=Pn(this.field,e,r,qr(this.field,this.config));JSON.stringify(i)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent(`row-field-change`,{detail:{fileId:this.file.id,value:i},bubbles:!0,composed:!0}))}_computePreviewValue(){let e=this.pendingOp;return!e||!this.field?this.value:Kl(this.field,this.value,e.value,e.operation,qr(this.field,this.config))}_previewTaxonomyEntry(){let e=this.pendingOp;return e&&e.taxonomyEntry!==void 0?e.taxonomyEntry:this.taxonomyEntry}_valueForEditor(){let e=Nn(this.field,this.value,qr(this.field,this.config));return this.field?.type===`ultratags`?mu(e,this.knownUltratagsLookup):e}_getExtension(e){let t=e.lastIndexOf(`.`);return t>0?e.slice(t+1).toUpperCase():`?`}render(){let e=this.file;return a`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?a`<img class="row-thumb" src=${e.previewUrl} alt="" />`:a`<img
              class="row-thumb row-thumb-fallback"
              src=${m(this._getExtension(e.name))}
              alt=${j(`extFile`,`{{ext}} file`,{ext:this._getExtension(e.name)})}
              @error=${e=>{let t=e.target,n=g();!t.dataset.fallback&&t.src!==n&&(t.dataset.fallback=`1`,t.src=n)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?he(e.size):`—`}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?a`<div
                class="row-field-na"
                title=${j(`fieldNotApplicableHint`,`A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.`)}
              >
                ${j(`fieldNotApplicable`,`Not applicable for this asset`)}
              </div>`:this.pendingOp&&this.selected?a`<sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${this._computePreviewValue()}
                  .oldTaxonomyEntry=${this.taxonomyEntry}
                  .newTaxonomyEntry=${this._previewTaxonomyEntry()}
                  .config=${this.config}
                  .defaultLanguage=${this.defaultLanguage}
                  .pendingFrontendLookup=${this.pendingFrontendLookup}
                  .knownUltratagsLookup=${this.knownUltratagsLookup}
                ></sfx-bulk-meta-diff-view>`:a`<div class="row-field-edit">
                    <sfx-metadata-field-edit
                      .field=${this.field}
                      .value=${this._valueForEditor()}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonomyEntry}
                      .ultratags=${this.ultratags}
                      .language=${this.config?.language}
                      .defaultLanguage=${this.defaultLanguage}
                      .allowedValues=${this.allowedValues}
                    ></sfx-metadata-field-edit>
                  </div>
                  ${this._error?a`<div class="row-error" role="alert">${this._error}</div>`:s}`}
        </div>
      </div>
    `}};u([i({attribute:!1})],K.prototype,`file`,void 0),u([i({attribute:!1})],K.prototype,`field`,void 0),u([i({attribute:!1})],K.prototype,`value`,void 0),u([i({attribute:!1})],K.prototype,`taxonomyEntry`,void 0),u([i({type:Boolean})],K.prototype,`selected`,void 0),u([i({attribute:!1})],K.prototype,`pendingOp`,void 0),u([i({attribute:!1})],K.prototype,`config`,void 0),u([i({attribute:!1})],K.prototype,`autocomplete`,void 0),u([i({attribute:!1})],K.prototype,`taxonomyService`,void 0),u([i({attribute:!1})],K.prototype,`ultratags`,void 0),u([i({attribute:!1})],K.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],K.prototype,`pendingFrontendLookup`,void 0),u([i({attribute:!1})],K.prototype,`knownUltratagsLookup`,void 0),u([i({attribute:!1})],K.prototype,`allowedValues`,void 0),u([i({type:Boolean})],K.prototype,`notApplicable`,void 0),u([c()],K.prototype,`_error`,void 0),w(`sfx-bulk-meta-row`,K);var q=class extends e{constructor(...e){super(...e),this._i18nController=new M(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}static{this.styles=[eu]}_renderChips(e){let t={added:j(`added`,`Added`),removed:j(`removed`,`Removed`),kept:j(`kept`,`Kept`)};return a`
      <div class="diff-wrap" aria-label=${j(`bulkOperationPreview`,`Bulk operation preview`)}>
        ${e.length===0?a`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.map(e=>a`
                <span
                  class="diff-chip diff-chip--${e.state}"
                  aria-label="${t[e.state]??e.state}: ${e.label}"
                >
                  ${e.state===`removed`?a`<s>${e.label}</s>`:e.label}
                </span>
              `)}
      </div>
    `}_renderArrayDiff(e){return this._renderChips(e.items)}_renderScalarDiff(e){let t=j(`willChangeFromTo`,`Will change from {{from}} to {{to}}`,{from:e.oldEmpty?j(`emptyValue`,`empty`):e.oldDisplay,to:e.newEmpty?j(`emptyValue`,`empty`):e.newDisplay});return a`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${j(`bulkOperationPreview`,`Bulk operation preview`)}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?s:a`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyDiff(){let e=this.newTaxonomyEntry?.path??``,t=this.oldTaxonomyEntry?.path??``,n=!t,r=!e,i=this.oldTaxonomyEntry?.suid||this.oldTaxonomyEntry?.uuid,a=this.newTaxonomyEntry?.suid||this.newTaxonomyEntry?.uuid,o=[];return!n&&i===a?o.push({label:t,state:`kept`}):(n||o.push({label:t,state:`removed`}),r||o.push({label:e,state:`added`})),this._renderChips(o)}render(){if(!this.field)return s;if(this.field.type===`taxonomy-node`)return this._renderTaxonomyDiff();let e=this.knownUltratagsLookup?.size||this.pendingFrontendLookup?.size?ou(this.knownUltratagsLookup,this.pendingFrontendLookup):void 0,t=_u(this.field,this.oldValue,this.newValue,this.config,this.defaultLanguage,e);return t.kind===`array`?this._renderArrayDiff(t):this._renderScalarDiff(t)}};u([i({attribute:!1})],q.prototype,`field`,void 0),u([i({attribute:!1})],q.prototype,`oldValue`,void 0),u([i({attribute:!1})],q.prototype,`newValue`,void 0),u([i({attribute:!1})],q.prototype,`oldTaxonomyEntry`,void 0),u([i({attribute:!1})],q.prototype,`newTaxonomyEntry`,void 0),u([i({attribute:!1})],q.prototype,`config`,void 0),u([i({attribute:!1})],q.prototype,`defaultLanguage`,void 0),u([i({attribute:!1})],q.prototype,`pendingFrontendLookup`,void 0),u([i({attribute:!1})],q.prototype,`knownUltratagsLookup`,void 0),w(`sfx-bulk-meta-diff-view`,q);function vu(e){let t=e;for(;t;){if(t instanceof ShadowRoot){t=t.host;continue}if(t instanceof HTMLDialogElement&&t.open)return t;if(t instanceof Element&&t.shadowRoot){let e=t.shadowRoot.querySelector(`dialog[open]`);if(e instanceof HTMLDialogElement)return e}t=t.parentNode}return document.body}var yu=3,bu=`
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
`,xu=260,Su=80,Cu;function wu(){if(Cu!==void 0)return Cu;try{let e=new CSSStyleSheet;e.replaceSync(bu),Cu=e}catch{Cu=null}return Cu}var J=class t extends e{constructor(...e){super(...e),this.t=o,this.compact=!1,this.externalDragOver=!1,this.accept=``,this.multi=!0,this.directory=!1,this.allowFolderDrop=!0,this.sources=[],this.sourcesLayout=`pills`,this.mode=`modal`,this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=yu,this._touch=!1,this._dragCounter=0,this._unsubscribeTouch=null,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;let t=e.dataTransfer;t&&Rc(t,{allowDirectories:this.allowFolderDrop}).then(({files:e,hadDirectories:t,rejectedDirectories:n})=>{n&&this.dispatchEvent(new CustomEvent(`folder-rejected`,{bubbles:!0,composed:!0})),e.length>0?this._emitFiles(e,t):t&&!n&&this.dispatchEvent(new CustomEvent(`folder-empty`,{bubbles:!0,composed:!0}))})},this._onClick=e=>{let t=this.shadowRoot.querySelector(`.dz-content`);if(t&&this._rippleEl){let n=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-n.left}px`,this._rippleEl.style.top=`${e.clientY-n.top}px`,this._rippleEl.classList.remove(`go`),this._rippleEl.offsetWidth,this._rippleEl.classList.add(`go`)}this.browse()},this._onKeyDown=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{let t=e.target,n=Array.from(t.files??[]);for(let e of n){let t=e.webkitRelativePath;t&&Pc(e,t)}n.length>0&&this._emitFiles(n),t.value=``},this._onPaste=e=>{if(!this.isConnected||this.offsetWidth===0)return;let t=e.clipboardData?.items;if(!t)return;let n=[],r=!1;for(let e of t){if(e.kind!==`file`)continue;if(!this.allowFolderDrop&&e.webkitGetAsEntry?.()?.isDirectory){r=!0;continue}let t=e.getAsFile();t&&n.push(t)}r&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`folder-rejected`,{bubbles:!0,composed:!0}))),n.length>0&&(e.preventDefault(),this._emitFiles(n))},this._portalContainer=null,this._returnFocusTo=null,this._inertedSiblings=[],this._lockedScrollHost=null,this._exitingPortal=null,this._onSheetKeyDown=e=>{if(e.key===`Escape`){e.stopPropagation(),this._closeMore();return}if(e.key!==`Tab`)return;let t=e.currentTarget,n=t.querySelectorAll(`button:not([disabled])`);if(n.length===0)return;let r=n[0],i=n[n.length-1],a=t.getRootNode().activeElement;e.shiftKey&&(a===r||a===t)?(e.preventDefault(),i.focus()):!e.shiftKey&&a===i&&(e.preventDefault(),r.focus())},this._sheetDrag=null,this._onSheetPointerDown=e=>{let t=e.currentTarget,n=t.closest(`.sfx-more-sheet`);if(!(!n||this._sheetDrag)){this._sheetDrag={pointerId:e.pointerId,startY:e.clientY,sheet:n,handle:t};try{t.setPointerCapture?.(e.pointerId)}catch{}window.addEventListener(`pointermove`,this._onSheetPointerMove),window.addEventListener(`pointerup`,this._onSheetPointerUp),window.addEventListener(`pointercancel`,this._onSheetPointerUp)}},this._onSheetPointerMove=e=>{let t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;let n=e.clientY-t.startY;if(n<=0){t.sheet.style.transform=``;return}t.sheet.classList.add(`dragging`),t.sheet.style.transform=`translateY(${n}px)`},this._onSheetPointerUp=e=>{let t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;this._endSheetDrag();let n=e.clientY-t.startY;t.sheet.classList.remove(`dragging`),t.sheet.style.transform=``,e.type!==`pointercancel`&&n>Su&&this._closeMore()},this._onDocClick=e=>{this._moreOpen&&(this._portalContainer?.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key===`Escape`&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}static{this.styles=r`
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

    ${b}
  `}static{this._WIDE_THRESHOLD_PX=1200}get _folderEnabled(){return this.directory&&this.multi&&qe()}browse(e=`files`){if(e===`folder`&&this._folderEnabled&&this.folderInput){this.folderInput.click();return}this.fileInput?.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent(`source-click`,{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent(`files-selected`,{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_closeMore(){this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())}_updateDropdownPortal(){if(this._moreOpen){let e=this.sources.slice(this._visiblePills),t=this._portalContainer?.querySelector(`.sfx-more-sheet`)!=null;this._portalContainer||(this._portalContainer=document.createElement(`div`),this._portalContainer.setAttribute(`data-sfx-more-dropdown`,``),vu(this).appendChild(this._portalContainer),this._injectDropdownStyles());let r=e.map(e=>a`
          <button class="sfx-more-item" @click=${t=>this._onMoreItemClick(e,t)}>
            <div class="sfx-more-item-ico">
              ${e.brandHtml?E(e):e.iconColor?a`<svg viewBox="0 0 24 24" ${x({color:e.iconColor})}>
                      ${Pl(e.icon)}
                    </svg>`:n`<svg viewBox="0 0 24 24">${Pl(e.icon)}</svg>`}
            </div>
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `);if(this._touch){let e=this.t(`importFrom`,`Import from`),n=this._backgroundLockable();l(a`
            <div class="sfx-more-backdrop" @click=${()=>this._closeMore()}></div>
            <div
              class="sfx-more-sheet"
              role="dialog"
              aria-modal=${n?`true`:s}
              aria-label=${e}
              tabindex="-1"
              @keydown=${this._onSheetKeyDown}
            >
              <button
                type="button"
                class="sfx-more-handle"
                aria-label=${this.t(`close`,`Close`)}
                @click=${()=>this._closeMore()}
                @pointerdown=${this._onSheetPointerDown}
              >
                <div class="sfx-more-grip"></div>
              </button>
              <div class="sfx-more-sheet-title">${e}</div>
              ${r}
            </div>
          `,this._portalContainer),t||(this._lockBackground(),this._captureReturnFocus()),requestAnimationFrame(()=>{this._portalContainer?.querySelectorAll(`.sfx-more-sheet, .sfx-more-backdrop`).forEach(e=>e.classList.add(`open`)),t||this._focusSheet()})}else this._unlockBackground(),l(a`<div class="sfx-more-dropdown open">${r}</div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._teardownPortal({animate:!0})}_backgroundLockable(){return typeof HTMLElement<`u`&&`inert`in HTMLElement.prototype}_lockBackground(){let e=this._portalContainer;if(!e||this._lockedScrollHost)return;let t=e.parentElement;if(t&&this._backgroundLockable())for(let n of Array.from(t.children))n===e||!(n instanceof HTMLElement)||n.inert||(n.inert=!0,this._inertedSiblings.push(n));let n=t===document.body?document.documentElement:t;n instanceof HTMLElement&&(this._lockedScrollHost={el:n,overflow:n.style.overflow},n.style.overflow=`hidden`)}_unlockBackground(){for(let e of this._inertedSiblings)e.inert=!1;this._inertedSiblings=[],this._lockedScrollHost&&=(this._lockedScrollHost.el.style.overflow=this._lockedScrollHost.overflow,null)}_captureReturnFocus(){let e=this.shadowRoot?.activeElement??document.activeElement;this._returnFocusTo=e&&typeof e.focus==`function`?e:null}_focusSheet(){let e=this._portalContainer?.querySelector(`.sfx-more-sheet`);(e?.querySelector(`.sfx-more-item`)??e)?.focus()}_restoreFocus(){let e=this._returnFocusTo;this._returnFocusTo=null,e?.isConnected&&e.focus()}_teardownPortal({animate:e}){this._unlockBackground(),this._reapExitingPortal();let t=this._portalContainer;if(!t)return;this._portalContainer=null;let n=t.querySelector(`.sfx-more-sheet`);if(!e||!n||Xe()){l(s,t),t.remove(),this._restoreFocus();return}t.querySelectorAll(`.sfx-more-sheet, .sfx-more-backdrop`).forEach(e=>e.classList.remove(`open`)),t.style.pointerEvents=`none`,this._exitingPortal={el:t,timer:setTimeout(()=>this._reapExitingPortal(),xu)},this._restoreFocus()}_reapExitingPortal(){let e=this._exitingPortal;e&&(this._exitingPortal=null,clearTimeout(e.timer),l(s,e.el),e.el.remove())}_endSheetDrag(){let e=this._sheetDrag;if(this._sheetDrag=null,window.removeEventListener(`pointermove`,this._onSheetPointerMove),window.removeEventListener(`pointerup`,this._onSheetPointerUp),window.removeEventListener(`pointercancel`,this._onSheetPointerUp),e)try{e.handle.releasePointerCapture?.(e.pointerId)}catch{}}_injectDropdownStyles(){let e=this._portalContainer?.getRootNode();if(!e)return;let t=wu();if(t&&Array.isArray(e.adoptedStyleSheets)){if(e.adoptedStyleSheets.includes(t))return;e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}let n=e instanceof Document?e.head:e;if(!n||n.querySelector(`style[data-sfx-more-dropdown-styles]`))return;let r=document.createElement(`style`);r.setAttribute(`data-sfx-more-dropdown-styles`,``),r.textContent=bu,n.appendChild(r)}_positionDropdown(){let e=this.shadowRoot?.querySelector(`.more-wrap > button`),t=this._portalContainer?.querySelector(`.sfx-more-dropdown`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.scrollHeight,i=t.offsetWidth,a=n.top,o=window.innerHeight-n.bottom;a>=r+8||a>o?t.style.top=`${n.top-r-8}px`:t.style.top=`${n.bottom+8}px`;let s=n.right-i;s=Math.max(8,Math.min(s,window.innerWidth-i-8)),t.style.left=`${s}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){let e=window.innerWidth;this._visiblePills=this.sourcesLayout===`cards`?e<=480?2:e<=768?3:5:e<=768?1:yu}connectedCallback(){super.connectedCallback(),this._touch=D(),this._unsubscribeTouch=Ze(()=>{this._touch=D(),this._moreOpen&&this._updateDropdownPortal()}),document.addEventListener(`paste`,this._onPaste),document.addEventListener(`click`,this._onDocClick),document.addEventListener(`keydown`,this._onDocKeyDown),window.addEventListener(`scroll`,this._onScrollOrResize,!0),window.addEventListener(`resize`,this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>{let n=(e[0]?.contentRect.width??this.getBoundingClientRect().width)>=t._WIDE_THRESHOLD_PX;n&&!this.hasAttribute(`data-wide`)?this.setAttribute(`data-wide`,``):!n&&this.hasAttribute(`data-wide`)&&this.removeAttribute(`data-wide`)}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has(`sourcesLayout`)&&this._updateVisiblePills(),e.has(`t`)&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeTouch?.(),this._unsubscribeTouch=null,document.removeEventListener(`paste`,this._onPaste),document.removeEventListener(`click`,this._onDocClick),document.removeEventListener(`keydown`,this._onDocKeyDown),window.removeEventListener(`scroll`,this._onScrollOrResize,!0),window.removeEventListener(`resize`,this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&=(this._resizeObserver.disconnect(),null),this._endSheetDrag(),this._moreOpen=!1,this._teardownPortal({animate:!1})}_renderPill(e){return a`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?E(e):a`<span class="pill-ico" ${x(e.iconColor?{color:e.iconColor}:null)}>
              ${n`<svg viewBox="0 0 24 24" class=${e.fillIcon?`fill-icon`:``}>${Pl(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return a`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?a`<span class="card-ico">${E(e)}</span>`:a`<span class="card-ico" ${x(e.iconColor?{color:e.iconColor}:null)}>
              ${n`<svg viewBox="0 0 24 24" class=${e.fillIcon?`fill-icon`:``}>${Pl(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return a`
      <div class="more-wrap ${this._moreOpen?`open`:``}">
        <button class="src-card" @click=${e=>this._toggleMore(e)}>
          <span class="card-ico muted">
            <svg class="fill-icon" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">${this.t(`more`,`More`)}</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return a`
      <div class="more-wrap ${this._moreOpen?`open`:``}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          ${this.t(`more`,`More`)}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}_renderTitle(){return this._touch?a`<div class="title">${this.t(`tapToUploadFiles`,`Tap to upload files`)}</div>`:!this.compact&&this._folderEnabled?a`<div class="title">
        ${this.t(`dragDropClickTo`,`Drag & Drop, click to`)}
        <span>${this.t(`browse`,`browse`)}</span>
        ${this.t(`orUploadFolderPrefix`,`or upload a `)}<button
          type="button"
          @click=${e=>{e.stopPropagation(),this.browse(`folder`)}}
        >
          ${this.t(`uploadFolder`,`folder`)}
        </button>
      </div>`:a`<div class="title">
      ${this.t(`dragAndDrop`,`Drag & Drop or click to`)}
      <span>${this.t(`browse`,`browse`)}</span>
    </div>`}_renderPrimaryCta(){return a`
      <button
        class="primary-cta"
        type="button"
        @click=${e=>{e.stopPropagation(),this.browse()}}
      >
        ${this.multi?this.t(`chooseFiles`,`Choose files`):this.t(`chooseFile`,`Choose file`)}
      </button>
    `}render(){let e=[`drop-zone`,this._dragOver||this.externalDragOver?`drag-over`:``,this.compact?`compact`:``,this._touch?`touch`:``].filter(Boolean).join(` `),t=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills),i=this._touch&&!this.compact;return a`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role=${i?s:`button`}
          tabindex=${i?s:`0`}
          aria-label=${i?s:this.t(`dropFilesHere`,`Drop files here or click to browse`)}
          @click=${this._onClick}
          @keydown=${i?s:this._onKeyDown}
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

          ${i?this._renderPrimaryCta():this._renderTitle()}
          ${!this.compact&&this.sources.length>0?a`
                <div class="import-divider">
                  <span>${this.t(`orImportFrom`,`or import from`)}</span>
                </div>
                ${this.sourcesLayout===`cards`?a`
                      <div class="sources-cards">
                        ${t.map(e=>this._renderCard(e))}
                        ${r.length>0?this._renderMoreCard():s}
                      </div>
                    `:a`
                      <div class="sources-grid">
                        ${t.map(e=>this._renderPill(e))}
                        ${r.length>0?this._renderMoreDropdown():s}
                      </div>
                    `}
              `:s}
          ${this.compact&&this.sources.length>0?a`
                <div class="sources-row">
                  ${this.sources.map(e=>a`
                      <button
                        class="src-ico"
                        ${x(e.iconColor&&!e.brandHtml?{color:e.iconColor}:null)}
                        data-tip=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
                      >
                        ${e.brandHtml?E(e):n`<svg viewBox="0 0 24 24" class=${e.fillIcon?`fill-icon`:``}>${Pl(e.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:s}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||s}
          @change=${this._onFileChange}
        />
        ${this._folderEnabled?a`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:s}
      </div>
    `}};u([i({attribute:!1})],J.prototype,`t`,void 0),u([i({type:Boolean,reflect:!0})],J.prototype,`compact`,void 0),u([i({type:Boolean,attribute:`external-drag-over`})],J.prototype,`externalDragOver`,void 0),u([i({type:String})],J.prototype,`accept`,void 0),u([i({type:Boolean})],J.prototype,`multi`,void 0),u([i({type:Boolean})],J.prototype,`directory`,void 0),u([i({type:Boolean})],J.prototype,`allowFolderDrop`,void 0),u([i({type:Array})],J.prototype,`sources`,void 0),u([i({type:String,attribute:`sources-layout`})],J.prototype,`sourcesLayout`,void 0),u([i({type:String,reflect:!0})],J.prototype,`mode`,void 0),u([c()],J.prototype,`_dragOver`,void 0),u([c()],J.prototype,`_moreOpen`,void 0),u([c()],J.prototype,`_visiblePills`,void 0),u([c()],J.prototype,`_touch`,void 0),u([f(`.ripple`)],J.prototype,`_rippleEl`,void 0),u([f(`input[data-sfx-dz-files]`)],J.prototype,`fileInput`,void 0),u([f(`input[data-sfx-dz-folder]`)],J.prototype,`folderInput`,void 0);var Tu=class extends e{constructor(...e){super(...e),this._i18nController=new Ce(this)}static{this.styles=r`
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
  `}render(){return a`
      <div class="line"></div>
      <div class="label">${Se(`orImportFrom`,`or import from`)}</div>
      <div class="line"></div>
    `}},Eu=new CSSStyleSheet;Eu.replaceSync(`
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
`);var Y=class extends e{constructor(...e){super(...e),this.t=o,this.files=[],this.showDropTile=!1,this.sources=[],this.accept=``,this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode=`upload`,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this.namingViolationIds=new Set,this._moreOpen=!1,this._dropTileMaxVisible=3,this._touch=!1,this._portalContainer=null,this._unsubscribeTouch=null,this._outsideClickHandler=e=>{if(this._portalContainer?.contains(e.target))return;let t=this.renderRoot.querySelector(`.drop-tile-more-wrap`),n=e.composedPath();t&&n.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener(`click`,this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key===`Escape`&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{let e=window.innerWidth<=768?this._touch?2:1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=``}static{this.styles=r`
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

    ${b}
  `}get _folderEnabled(){return this.directory&&this.multi&&qe()}_onDropTileClick(){this.renderRoot.querySelector(`input[data-sfx-fl-files]`)?.click()}_onDropTileFolderClick(e){e.stopPropagation(),this.renderRoot.querySelector(`input[data-sfx-fl-folder]`)?.click()}_onFileInput(e){let t=e.target,n=Array.from(t.files??[]);for(let e of n){let t=e.webkitRelativePath;t&&Pc(e,t)}n.length>0&&this.dispatchEvent(new CustomEvent(`files-selected`,{detail:{files:n},bubbles:!0,composed:!0})),t.value=``}_onSourceClick(e,t){if(e.stopPropagation(),t.id===`device`){this._onDropTileClick();return}this.dispatchEvent(new CustomEvent(`source-click`,{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener(`click`,this._outsideClickHandler,!0)),document.addEventListener(`keydown`,this._onKeyDown),window.addEventListener(`scroll`,this._onScrollOrResize,!0),window.addEventListener(`resize`,this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener(`click`,this._outsideClickHandler,!0),document.removeEventListener(`keydown`,this._onKeyDown),window.removeEventListener(`scroll`,this._onScrollOrResize,!0),window.removeEventListener(`resize`,this._onScrollOrResize)}updated(e){super.updated(e),e.has(`t`)&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){let e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement(`div`),this._portalContainer.setAttribute(`data-sfx-tile-dropdown`,``),vu(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),l(a`<div class="sfx-tile-dropdown">
        ${e.map(e=>a`
            <button
              class="sfx-tile-dropdown-item"
              @click=${t=>this._onMoreSourceClick(t,e)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${x(e.iconColor&&!e.brandHtml?{color:e.iconColor}:null)}
              >
                ${e.brandHtml?E(e):n`<svg viewBox="0 0 24 24" class=${e.fillIcon?`fill-icon`:``}>${Pl(e.icon)}</svg>`}
              </span>
              ${e.labelKey?this.t(e.labelKey,e.label):e.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){let e=this.renderRoot.querySelector(`.drop-tile-more`),t=this._portalContainer?.querySelector(`.sfx-tile-dropdown`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.scrollHeight,i=t.offsetWidth,a=n.top,o=window.innerHeight-n.bottom;a>=r+6||a>o?t.style.top=`${n.top-r-6}px`:t.style.top=`${n.bottom+6}px`;let s=n.right-i;s=Math.max(8,Math.min(s,window.innerWidth-i-8)),t.style.left=`${s}px`}_closePortal(){this._portalContainer&&=(l(s,this._portalContainer),this._portalContainer.remove(),null)}_injectTileDropdownStyles(){let e=this._portalContainer?.getRootNode();e&&(e.adoptedStyleSheets.includes(Eu)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Eu]))}connectedCallback(){super.connectedCallback(),this._touch=D(),this._unsubscribeTouch=Ze(()=>{this._touch=D(),this._updateDropTileMaxVisible()}),this._updateDropTileMaxVisible(),window.addEventListener(`resize`,this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribeTouch?.(),this._unsubscribeTouch=null,this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener(`resize`,this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTileText(){return this._touch?this.t(`addMoreFiles`,`Add more files`):a`${this.t(`dropOrClickTo`,`Drop or click to`)}
      <span>${this.t(`browse`,`browse`)}</span>`}_renderDropTile(){let e=this._dropTileMaxVisible,t=this.sources.slice(0,e),r=this.sources.slice(e);return a`
      <div class="drop-tile ${this._touch?`touch`:``}" @click=${this._onDropTileClick}>
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
          ${this._folderEnabled?a`<div class="drop-tile-folder-pick">
                ${this.t(`orUploadFolderPrefix`,`or upload a `)}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t(`uploadFolder`,`folder`)}
                </button>
              </div>`:s}
          ${t.length>0?a`
                <div class="drop-tile-sources">
                  ${t.map(e=>a`
                      <button
                        class="drop-tile-src"
                        ${x(e.iconColor&&!e.brandHtml?{color:e.iconColor}:null)}
                        title=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
                        @click=${t=>this._onSourceClick(t,e)}
                      >
                        ${e.brandHtml?E(e):n`<svg viewBox="0 0 24 24" class=${e.fillIcon?`fill-icon`:``}>${Pl(e.icon)}</svg>`}
                      </button>
                    `)}
                  ${r.length>0?a`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t(`moreSources`,`More sources`)}
                            aria-label=${this.t(`moreSources`,`More sources`)}
                            @click=${e=>this._toggleMore(e)}
                          >
                            ···
                          </button>
                        </div>
                      `:s}
                </div>
              `:s}
        </div>
        <input
          data-sfx-fl-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||s}
          @change=${this._onFileInput}
        />
        ${this._folderEnabled?a`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:s}
      </div>
    `}_onSelectAll(e){let t=e.target.checked;this.dispatchEvent(new CustomEvent(`similar-select-all`,{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent(`check-similar-search-cancel`,{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?`searching`:this.searchRunIds.includes(e)&&!this.searchResults.has(e)?`queued`:``}shouldUpdate(e){let t=this.files.map(e=>e.id).join(`,`),n=t!==this._fileIdsKey;return this._fileIdsKey=t,!this.store||!(e.size===1&&e.has(`files`)&&!n)}render(){let e=this.searchRunIds.length,t=this.searchRunIds.filter(e=>this.searchResults.has(e)).length,n=e?Math.round(t/e*100):0,r=e>0&&t===e;return a`
      ${e>1&&!this.previewOpen?a`
            <div class="similar-banner search">
              ${r?a`<span class="search-done-ico"
                    ><svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" /></svg
                  ></span>`:a`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b
                  >${r?this.t(`similarCheckDone`,`Similarity check complete`):this.t(`checkingSimilar`,`Checking for similar assets…`)}</b
                >
                <span
                  >${this.t(`similarProgress`,`{{done}} of {{total}} done`,{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${x({width:`${n}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${r?this.t(`done`,`Done`):this.t(`cancel`,`Cancel`)}
              </button>
            </div>
          `:s}
      <div class="grid">
        ${this.showDropTile&&this.mode!==`review`?this._renderDropTile():s}
        ${Ie(this.files,e=>e.id,(e,t)=>{let n=this.searchResults.get(e.id);return a`<sfx-file-item
              .t=${this.t}
              .store=${this.store}
              .fileId=${e.id}
              .file=${e}
              .mode=${this.mode}
              .allowRename=${this.allowRename}
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
              .showCheckSimilar=${this.showCheckSimilar}
              .selectMode=${this.selectMode}
              .isSelected=${this.selectedIds.has(e.id)}
              .selectionActive=${this.selectedIds.size>0}
              .selectionFull=${this.selectionFull}
              .previewOpen=${this.previewOpen}
              .similarStatus=${this._statusFor(e.id)}
              .similarCount=${n?.length??-1}
              .similarResults=${n??[]}
              .namingViolation=${this.namingViolationIds.has(e.id)}
              ${x({"--tile-index":String(t)})}
            ></sfx-file-item>`})}
      </div>
    `}};u([i({attribute:!1})],Y.prototype,`t`,void 0),u([i({attribute:!1})],Y.prototype,`files`,void 0),u([i({attribute:!1})],Y.prototype,`store`,void 0),u([i({type:Boolean})],Y.prototype,`showDropTile`,void 0),u([i({attribute:!1})],Y.prototype,`sources`,void 0),u([i({type:String})],Y.prototype,`accept`,void 0),u([i({type:Boolean})],Y.prototype,`multi`,void 0),u([i({type:Boolean})],Y.prototype,`directory`,void 0),u([i({type:Boolean})],Y.prototype,`allowRename`,void 0),u([i({type:String})],Y.prototype,`mode`,void 0),u([i({type:Boolean})],Y.prototype,`showLocateButton`,void 0),u([i({type:Boolean})],Y.prototype,`showCopyCdnButton`,void 0),u([i({type:Boolean})],Y.prototype,`showCheckSimilar`,void 0),u([i({type:Boolean})],Y.prototype,`selectMode`,void 0),u([i({attribute:!1})],Y.prototype,`selectedIds`,void 0),u([i({type:Boolean})],Y.prototype,`allSelected`,void 0),u([i({type:Boolean})],Y.prototype,`selectionFull`,void 0),u([i({type:Number})],Y.prototype,`maxSelection`,void 0),u([i({type:Boolean})],Y.prototype,`previewOpen`,void 0),u([i({attribute:!1})],Y.prototype,`searchRunIds`,void 0),u([i({attribute:!1})],Y.prototype,`searchActiveIds`,void 0),u([i({attribute:!1})],Y.prototype,`searchResults`,void 0),u([i({attribute:!1})],Y.prototype,`namingViolationIds`,void 0),u([c()],Y.prototype,`_moreOpen`,void 0),u([c()],Y.prototype,`_dropTileMaxVisible`,void 0),u([c()],Y.prototype,`_touch`,void 0);var X=class extends e{constructor(...e){super(...e),this.t=o,this.fileId=``,this.mode=`upload`,this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus=``,this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this.namingViolation=!1,this._dims=``,this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip=``,this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;let e=this.getBoundingClientRect(),t=e.right+12;t+240>window.innerWidth-8&&(t=e.left-240-12),this._simPopLeft=Math.max(8,t),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-280-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&=(clearTimeout(this._simHideTimer),null)},this._simScheduleHide=()=>{this._simPopTimer&&=(clearTimeout(this._simPopTimer),null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&=(clearTimeout(this._simPopTimer),null),this._simHideTimer&&=(clearTimeout(this._simHideTimer),null),this._simPopover&&=!1,this._syncHostZIndex()},this._showTip=(e,t)=>{let n=t.currentTarget.getBoundingClientRect();this._tipLeft=Math.max(148,Math.min(n.left+n.width/2,window.innerWidth-140-8)),this._tipBelow=n.top<60,this._tipTop=this._tipBelow?n.bottom+8:n.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip=``,this._syncHostZIndex())}}static{this.styles=r`
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

    ${b}
  `}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{let t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>`u`){this._tileRendered=!0,this._maybeProbeDims();return}let e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),this._io?.disconnect(),this._io=void 0)},{root:t,rootMargin:`200px`}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){let e=this._file;if(!e)return!1;let t=(e.status===`error`||e.status===`failed`||e.status===`rejected`)&&!!e.error&&this.mode!==`review`,n=e.status===`complete`&&!!e.alreadyExisted;return t||n}_maybeProbeDims(){let e=this._file,t=e?.previewUrl??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims=``,t?.startsWith(`blob:`)){let e=new Image;e.onload=()=>{this._file?.previewUrl===t&&(this._dims=`${e.naturalWidth}\u00D7${e.naturalHeight}`)},e.src=t}else if(e?.response?.file?.info){let t=e.response.file.info;t.img_w&&t.img_h&&(this._dims=`${t.img_w}\u00D7${t.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip=``,this._simPopover=!1,this.style.zIndex=``,this._unsubscribe?.(),this._unsubscribe=void 0,this._io?.disconnect(),this._io=void 0}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this._file?.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit(`file-remove`)}_retry(){this._emit(`file-retry`)}_pause(){this._emit(`file-pause`)}_resume(){this._emit(`file-resume`)}_rename(e){let t=e.target.value.trim();t&&this._emit(`file-rename`,{name:t})}_preview(e){e.stopPropagation(),this._emit(`file-preview`)}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit(`check-similar-single`,{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit(`similar-toggle`)}_reviewSelect(){this._emit(`similar-results-select`,{fileId:this._file?.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit(`similar-open-results`)}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?`50`:``}_locate(e){e.stopPropagation(),this._file&&this._emit(`file-locate`,{file:this._file})}async _copyCdn(e){e.stopPropagation();let t=this._file?.response?.file?.url?.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit(`file-copy-cdn`,{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){let e=this._file;if(!e)return s;let t=V(e),n=e.status===`complete`,r=e.status===`uploading`,i=e.status===`paused`,o=e.status===`error`||e.status===`failed`,c=e.status===`rejected`,l=this.mode===`review`,u=l||this.reviewPick||!this.allowRename,d=Sl(e.name),f=t===`image`&&!Dl(e.type),p=this.selectMode&&f&&!l,h=this.similarCount>=0,_=p&&!h&&!n&&this.similarStatus===``,v=!l&&!n&&!r&&!i&&!o&&e.status!==`rejected`&&this.similarStatus!==`searching`&&!this.reviewPick,y=v,b=[`tile`,n?`done`:``,r?`uploading`:``,i?`paused`:``,c?`rejected`:``,this.namingViolation?`naming-violation`:``,l?`review`:``,_?`selectable`:``,_&&this.isSelected?`selected`:``,this.selectionActive&&!f&&!l?`select-dimmed`:``,y?`cs-overlay`:``,this.similarStatus===`queued`?`sim-queued`:``,this.reviewPick?`review-pick`:``,this.reviewPick&&this.isSelected?`selected`:``].filter(Boolean).join(` `);return a`
      <div
        class=${b}
        tabindex="0"
        title=${this.namingViolation?this.t(`namingConventionMismatchTooltip`,`This filename doesn't match the naming convention required for this project.`):s}
        @click=${this.reviewPick?this._reviewSelect:_?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?a`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:a`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${m(d)}
                    alt="${d?this.t(`extFile`,`{{ext}} file`,{ext:d}):this.t(`file`,`File`)}"
                    @error=${e=>{let t=e.target,n=g();!t.dataset.fallback&&t.src!==n&&(t.dataset.fallback=`1`,t.src=n)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus===`searching`?a`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t(`searching`,`Searching…`)}</div>
                </div>
              `:s}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?a`
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
                    ${this.t(`nSimilar`,`{{count}} similar`,{count:this.similarCount})}
                  </span>
                `:a`<span class="sim-result-badge none"
                  >${this.t(`noSimilar`,`No similar`)}</span
                >`:s}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${_?a`
                <span
                  class="similar-cb ${this.isSelected?`checked`:``} ${this.selectionFull&&!this.isSelected?`disabled`:``}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected?`true`:`false`}
                  aria-disabled=${this.selectionFull&&!this.isSelected?`true`:`false`}
                  aria-label=${this.t(`selectImage`,`Select image`)}
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
              `:s}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${v?a`
                <div class="center-actions">
                  <button
                    class="preview-btn"
                    @click=${this._preview}
                    aria-label=${this.t(`details`,`Details`)}
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
                    <span class="cs-label">${this.t(`details`,`Details`)}</span>
                  </button>
                  ${this.similarCount>0?a`
                        <button
                          class="check-similar-btn"
                          @click=${this._openResults}
                          @mouseenter=${this._simPopoverShow}
                          @mouseleave=${this._simScheduleHide}
                          aria-label=${this.t(`viewSimilar`,`View similar assets`)}
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
                            >${this.t(`viewNSimilar`,`View {{count}} similar`,{count:this.similarCount})}</span
                          >
                        </button>
                      `:this.similarCount===0?a`
                          <button
                            class="check-similar-btn no-similar"
                            @click=${this._openResults}
                            aria-label=${this.t(`noSimilarFound`,`No similar assets found`)}
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
                            <span class="cs-label">${this.t(`noSimilar`,`No similar`)}</span>
                          </button>
                        `:this.showCheckSimilar&&f?a`
                            <button
                              class="check-similar-btn"
                              @click=${this._checkSimilarSingle}
                              aria-label=${this.t(`checkSimilar`,`Check similar`)}
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
                                >${this.t(`checkSimilar`,`Check similar`)}</span
                              >
                            </button>
                          `:s}
                </div>
              `:s}

          <!-- Locate / Copy-CDN hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Shown on any completed tile (the single-view upload list and the
               review screen) that has a response.file and the host enabled the
               feature. Each inner button has its own gate — Locate needs uuid,
               Copy CDN needs url.cdn — so an already-existed-but-missing-uuid
               edge case won't render a dead button. The outer gate mirrors the
               two inner gates so we never render (and hover-reveal) an empty
               overlay when neither button qualifies. -->
          ${n&&e.response?.file&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&e.response.file.url?.cdn)?a`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?a`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t(`locate`,`Locate`)}
                      >
                        <svg viewBox="0 0 24 24">${Re}</svg>
                        ${this.t(`locate`,`Locate`)}
                      </button>`:s}
                  ${this.showCopyCdnButton&&e.response.file.url?.cdn?a`<button
                        class="review-action primary ${this._copied?`copied`:``}"
                        @click=${this._copyCdn}
                        title=${this.t(`copyCdn`,`Copy CDN`)}
                        aria-label=${this.t(`copyCdnLink`,`Copy CDN link to clipboard`)}
                      >
                        ${this._copied?a`<svg viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>`:a`<svg viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>`}
                        ${this._copied?this.t(`copied`,`Copied`):this.t(`copyCdn`,`Copy CDN`)}
                      </button>`:s}
                </div>
              `:s}

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
          ${n?a`<div class="done-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:s}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&o?a`<div
                class="failed-badge"
                title=${e.error||this.t(`uploadFailed`,`Upload failed`)}
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
              </div>`:s}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status===`uploading`||e.status===`paused`)?a`
                <div class="progress">
                  <div
                    class="progress-fill"
                    ${x({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
                  ></div>
                </div>
              `:s}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(o||c)&&e.error&&!l?a`<div
                class="error-badge"
                @mouseenter=${t=>this._showTip(e.error??``,t)}
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
              </div>`:s}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${n&&e.alreadyExisted?a`<div
                class="exists-badge"
                @mouseenter=${e=>this._showTip(this.t(`alreadyUploaded`,`Already uploaded`),e)}
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
                <span>${this.t(`alreadyUploaded`,`Already uploaded`)}</span>
              </div>`:s}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(o||c)&&!(n&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?a`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:s}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l||this.reviewPick?s:a`
              <div class="actions">
                ${r&&e.isTus?a`
                      <button
                        class="act-btn pause"
                        @click=${this._pause}
                        title=${this.t(`pause`,`Pause`)}
                        aria-label=${this.t(`pauseUpload`,`Pause upload`)}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:s}
                ${i?a`
                      <button
                        class="act-btn resume"
                        @click=${this._resume}
                        title=${this.t(`resume`,`Resume`)}
                        aria-label=${this.t(`resumeUpload`,`Resume upload`)}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:s}
                ${o?a`
                      <button
                        class="act-btn retry"
                        @click=${this._retry}
                        title=${this.t(`retry`,`Retry`)}
                        aria-label=${this.t(`retryUpload`,`Retry upload`)}
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
                    `:s}
                <button
                  class="act-btn del"
                  @click=${this._remove}
                  title=${this.t(`remove`,`Remove`)}
                  aria-label=${this.t(`removeFile`,`Remove file`)}
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
            aria-label=${this.t(`fileName`,`File name`)}
            ?readonly=${u}
            @change=${u?s:this._rename}
            @click=${e=>e.stopPropagation()}
          />
          <div class="meta">
            ${d||``}${e.size?` \u00B7 ${bl(e.size)}`:``}${this._dims?` \u00B7 ${this._dims}`:``}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?a`<div
      class="hover-tip ${this._tipBelow?`below`:``}"
      role="tooltip"
      ${x({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:s}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return s;let e=[...this.similarResults].sort((e,t)=>t.score-e.score),t=e[0],n=e.length,r=e.slice(1),i=r.slice(0,3),o=r.length-i.length,c=Math.round(t.score*100);return a`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${x({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?a`<img src=${t.url} alt="" />`:s}
          <span class="pop-best ${t.score>=.85?`high`:``}"
            >${this.t(`bestMatch`,`{{pct}}% best match`,{pct:c})}</span
          >
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t(`closestSimilar`,`Closest similar asset`)}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${r.length?a`<div class="pop-thumbs">
                ${i.map(e=>a`<img src=${e.url} alt="" />`)}
                ${o>0?a`<span class="pop-more">+${o}</span>`:s}
              </div>`:a`<span></span>`}
          <span class="pop-open">
            ${n===1?this.t(`open`,`Open`):this.t(`openAllN`,`Open all {{count}}`,{count:n})}
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
    `}_formatDuration(e){return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`}};u([i({attribute:!1})],X.prototype,`t`,void 0),u([i({attribute:!1})],X.prototype,`store`,void 0),u([i({type:String})],X.prototype,`fileId`,void 0),u([i({attribute:!1})],X.prototype,`file`,void 0),u([i({type:String})],X.prototype,`mode`,void 0),u([i({type:Boolean})],X.prototype,`allowRename`,void 0),u([i({type:Boolean})],X.prototype,`showLocateButton`,void 0),u([i({type:Boolean})],X.prototype,`showCopyCdnButton`,void 0),u([i({type:Boolean})],X.prototype,`showCheckSimilar`,void 0),u([i({type:Boolean})],X.prototype,`selectMode`,void 0),u([i({type:Boolean})],X.prototype,`isSelected`,void 0),u([i({type:Boolean})],X.prototype,`selectionActive`,void 0),u([i({type:Boolean})],X.prototype,`selectionFull`,void 0),u([i({type:Boolean})],X.prototype,`previewOpen`,void 0),u([i({type:String})],X.prototype,`similarStatus`,void 0),u([i({type:Number})],X.prototype,`similarCount`,void 0),u([i({attribute:!1})],X.prototype,`similarResults`,void 0),u([i({type:Boolean})],X.prototype,`reviewPick`,void 0),u([i({type:Boolean})],X.prototype,`namingViolation`,void 0),u([c()],X.prototype,`_dims`,void 0),u([c()],X.prototype,`_simPopover`,void 0),u([c()],X.prototype,`_copied`,void 0),u([c()],X.prototype,`_tip`,void 0);var Du=class extends e{constructor(...e){super(...e),this.t=o,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter=`all`,this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent(`back`,{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent(`clear-history`,{bubbles:!0,composed:!0}))}}static{this.styles=r`
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
  `}get _filtered(){return this._filter===`success`?this.files.filter(e=>e.status===`complete`):this._filter===`failed`?this.files.filter(e=>e.status===`failed`||e.status===`error`):this.files}get _successCount(){return this.files.filter(e=>e.status===`complete`).length}get _failedCount(){return this.files.filter(e=>e.status===`failed`||e.status===`error`).length}render(){let e=this._filtered,t=this.files.length;return a`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t(`back`,`Back`)}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          ${this.t(`back`,`Back`)}
        </button>
        <span class="title"
          >${this.t(`lastUpload`,`Last upload`)}
          <span class="count"
            >—
            ${this.t(`fileCount`,{count:t,defaultValue_one:`{{count}} file`,defaultValue_other:`{{count}} files`})}</span
          ></span
        >
        <div class="filters">
          <button
            class="chip ${this._filter===`all`?`active`:``}"
            @click=${this._setFilter(`all`)}
          >
            ${this.t(`all`,`All`)} (${t})
          </button>
          <button
            class="chip ${this._filter===`success`?`active`:``}"
            @click=${this._setFilter(`success`)}
          >
            ✓ ${this.t(`uploaded`,`Uploaded`)} (${this._successCount})
          </button>
          ${this._failedCount>0?a`<button
                class="chip ${this._filter===`failed`?`active`:``}"
                @click=${this._setFilter(`failed`)}
              >
                ✗ ${this.t(`failed`,`Failed`)} (${this._failedCount})
              </button>`:s}
          <button
            class="clear-btn"
            @click=${this._onClear}
            title=${this.t(`clearLastUpload`,`Clear last upload from this browser`)}
          >
            ${this.t(`clear`,`Clear`)}
          </button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?a`<div class="empty">
              ${this.t(`noFilesMatchFilter`,`No files match this filter.`)}
            </div>`:a`<sfx-file-list
              .t=${this.t}
              .files=${e}
              mode="review"
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
            ></sfx-file-list>`}
      </div>
    `}};u([i({attribute:!1})],Du.prototype,`t`,void 0),u([i({attribute:!1})],Du.prototype,`files`,void 0),u([i({type:Boolean})],Du.prototype,`showLocateButton`,void 0),u([i({type:Boolean})],Du.prototype,`showCopyCdnButton`,void 0),u([c()],Du.prototype,`_filter`,void 0),w(`sfx-last-upload-review`,Du);var Ou=r`
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
`,ku=r`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Z=class extends e{constructor(...e){super(...e),this.t=o,this.uploadState=`idle`,this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.requiredFieldsTotal=0,this.requiredFieldsRemaining=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1,this.blocked=!1}static{this.styles=[Ou,ku,r`
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
    `]}_clear(){this.dispatchEvent(new CustomEvent(`clear-all`,{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent(`add-more`,{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent(`fill-metadata`,{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent(`require-metadata`,{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent(`upload-start`,{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent(`retry-all`,{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent(`cancel-upload`,{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent(`upload-more`,{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent(`primary-action`,{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent(`check-similar-enter`,{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent(`check-similar-cancel`,{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent(`check-similar-run`,{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent(`similar-select-all`,{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState===`uploading`?this._renderUploadingBar():this.uploadState===`done`?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?s:a`
      <button
        class="btn-retry"
        @click=${this._retryAll}
        aria-label=${this.t(`retryAll`,`Retry all ({{count}})`,{count:this.failedCount})}
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
          >${this.t(`retryAll`,`Retry all ({{count}})`,{count:this.failedCount})}</span
        >
      </button>
    `}_renderUploadingBar(){return a`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          <button
            class="btn-ghost"
            @click=${this._cancelUpload}
            aria-label=${this.t(`cancelUpload`,`Cancel upload`)}
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
            <span class="btn-label">${this.t(`cancel`,`Cancel`)}</span>
          </button>
        </div>
      </div>
    `}_renderDoneBar(){return a`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          ${this._renderRetryAllButton()}
          <button
            class="btn-sec"
            @click=${this._uploadMore}
            aria-label=${this.t(`uploadMore`,`Upload more`)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              ${Ve}
            </svg>
            <span class="btn-label">${this.t(`uploadMore`,`Upload more`)}</span>
          </button>
          <button class="btn-primary" @click=${this._close} aria-label=${this.t(`close`,`Close`)}>
            <span class="btn-label">${this.t(`close`,`Close`)}</span>
          </button>
        </div>
      </div>
    `}_renderIdleBar(){return a`
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState===`idle`?a`
                <button
                  class=${this.requireMetadataFirst?`btn-primary`:`btn-sec`}
                  @click=${this._fillMetadata}
                  aria-label=${this.t(`fillMetadata`,`Fill Metadata`)}
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
                  <span class="btn-label">${this.t(`fillMetadata`,`Fill Metadata`)}</span>
                </button>
              `:s}
          ${this.showCheckSimilar&&this.uploadState===`idle`?a`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t(`checkSimilar`,`Check similar`)}
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
                  <span class="btn-label">${this.t(`checkSimilar`,`Check similar`)}</span>
                </button>
              `:s}
        </div>
        <div class="right">
          <button
            class="btn-ghost btn-clear"
            @click=${this._clear}
            aria-label=${this.t(`clear`,`Clear`)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              ${Be}
            </svg>
            <span class="btn-label">${this.t(`clear`,`Clear`)}</span>
          </button>
          <button
            class="btn-sec btn-add-more"
            @click=${this._addMore}
            aria-label=${this.t(`addMore`,`Add more`)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              ${Ve}
            </svg>
            <span class="btn-label">${this.t(`addMore`,`Add more`)}</span>
          </button>
          ${this._renderRetryAllButton()} ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){let e=this.selectedCount,t=this.maxSelection,n=t>0&&e>=t;return a`
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
            <b>${this.t(`selectImagesToCheck`,`Select images to check for similar assets`)}</b>
            <span
              >${t>0?this.t(`selectImagesHintMax`,`Pick up to {{max}}, then click Check`,{max:t}):this.t(`selectImagesHint`,`Pick one or more, then click Check`)}</span
            >
          </div>
        </div>
        <div class="right">
          ${t>0?a`<span
                class="count-pill ${n?`full`:``}"
                aria-label=${this.t(`countSelected`,`{{count}} of {{max}} selected`,{count:e,max:t})}
                >${e}/${t}</span
              >`:s}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected?this.t(`deselectAll`,`Deselect all`):this.t(`selectAll`,`Select all`)}
          </button>
          <button
            class="btn-ghost"
            @click=${this._checkSimilarCancel}
            aria-label=${this.t(`cancel`,`Cancel`)}
          >
            <span class="btn-label">${this.t(`cancel`,`Cancel`)}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${e===0}
            aria-label=${this.t(`checkSimilar`,`Check similar`)}
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
            <span class="btn-label">${this.t(`checkSimilar`,`Check similar`)}</span>
          </button>
        </div>
      </div>
    `}get _uploadLabel(){return this.requiredFieldsTotal>0&&this.requiredFieldsRemaining===this.requiredFieldsTotal?{key:`fillRequiredMetadata`,fallback:`Fill required metadata`}:this.requiredFieldsRemaining>0?{key:`nextMetadata`,fallback:`Next metadata`}:this.fileCount>1?{key:`uploadAll`,fallback:`Upload all ({{count}})`,interpolations:{count:this.fileCount}}:{key:`upload`,fallback:`Upload`}}_renderUploadButton(){let e=this.uploadState===`uploading`,t=this.uploadState===`done`,n=this._uploadLabel,r=e?this.t(`uploading`,`Uploading`):t?this.t(`done`,`Done`):this.t(n.key,n.fallback,n.interpolations);return a`
      <button
        class=${`btn-primary`}
        @click=${this._upload}
        ?disabled=${e||this.blocked||this.fileCount===0&&!t}
        aria-label=${r}
      >
        ${e?a`<span class="btn-spin"></span
              ><span class="btn-label">${this.t(`uploading`,`Uploading`)}…</span>`:t?a`
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="btn-label">${this.t(`done`,`Done`)}!</span>
              `:a`
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
                  >${this.t(n.key,n.fallback,n.interpolations)}</span
                >
              `}
      </button>
    `}};u([i({attribute:!1})],Z.prototype,`t`,void 0),u([i({type:String})],Z.prototype,`uploadState`,void 0),u([i({type:Number})],Z.prototype,`fileCount`,void 0),u([i({type:Number})],Z.prototype,`failedCount`,void 0),u([i({type:Boolean})],Z.prototype,`showFillMetadata`,void 0),u([i({type:Boolean})],Z.prototype,`requireMetadataFirst`,void 0),u([i({type:Number})],Z.prototype,`requiredFieldsTotal`,void 0),u([i({type:Number})],Z.prototype,`requiredFieldsRemaining`,void 0),u([i({type:Boolean})],Z.prototype,`showCheckSimilar`,void 0),u([i({type:Boolean})],Z.prototype,`selectMode`,void 0),u([i({type:Number})],Z.prototype,`selectedCount`,void 0),u([i({type:Number})],Z.prototype,`maxSelection`,void 0),u([i({type:Boolean})],Z.prototype,`allSelected`,void 0),u([i({type:Boolean})],Z.prototype,`blocked`,void 0);var Au=`button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`;function ju(e,t){return n=>{if(n.key!==`Tab`)return;let r=e();if(!r)return;let i=r.querySelector(t);if(!i)return;let a=Array.from(i.querySelectorAll(Au));if(a.length===0)return;let o=a[0],s=a[a.length-1],c=r.activeElement;n.shiftKey?(c===o||!i.contains(c))&&(n.preventDefault(),s.focus()):(c===s||!i.contains(c))&&(n.preventDefault(),o.focus())}}var Mu=class extends e{constructor(...e){super(...e),this.t=o,this._url=``,this._name=``,this._error=``,this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error=``,this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=ju(()=>this.shadowRoot,`.card`),this._onKeyDown=e=>{e.key===`Escape`&&this._cancel(),e.key===`Enter`&&e.target?.tagName===`INPUT`&&this._submit(),this._focusTrap(e)}}static{this.styles=[Ou,ku,b,r`
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
    `]}_autoName(){if(!this._name)try{let e=new URL(this._url).pathname.split(`/`),t=e[e.length-1];if(t){let e=this.shadowRoot?.querySelector(`#nameInput`);e&&(e.placeholder=t)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent(`url-cancel`,{bubbles:!0,composed:!0}))}_submit(){let e=this._url.trim();if(!e){this._error=this.t(`pleaseEnterUrl`,`Please enter a URL`);return}try{new URL(e)}catch{this._error=this.t(`pleaseEnterValidUrl`,`Please enter a valid URL`);return}this._error=``;let t=!!this._name.trim(),n=this._name.trim();if(!n)try{let t=new URL(e).pathname.split(`/`);n=t[t.length-1]||`imported-file`}catch{n=`imported-file`}this.dispatchEvent(new CustomEvent(`url-submit`,{detail:{url:e,name:n,nameIsUserDefined:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(`#urlInput`)?.focus()})}render(){return a`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">${this.t(`importFromUrl`,`Import from URL`)}</div>
            <button class="close-btn" aria-label=${this.t(`close`,`Close`)} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">${this.t(`fileUrl`,`File URL`)}</label>
              <input
                id="urlInput"
                type="url"
                placeholder=${this.t(`fileUrlPlaceholder`,`https://example.com/file.pdf`)}
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput"
                >${this.t(`fileName`,`File name`)}
                <span class="optional">(${this.t(`optional`,`optional`)})</span></label
              >
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t(`fileNamePlaceholder`,`document.pdf`)}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?a`<div class="error">${this._error}</div>`:``}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>
                ${this.t(`cancel`,`Cancel`)}
              </button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t(`importFile`,`Import file`)}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};u([i({attribute:!1})],Mu.prototype,`t`,void 0),u([c()],Mu.prototype,`_url`,void 0),u([c()],Mu.prototype,`_name`,void 0),u([c()],Mu.prototype,`_error`,void 0);var Nu=class extends e{constructor(...e){super(...e),this.t=o,this._stream=null,this._error=``,this._captured=null,this._previewUrl=``,this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ju(()=>this.shadowRoot,`.card`),this._onKeyDown=e=>{e.key===`Escape`&&this._cancel(),this._focusTrap(e)},this._capture=()=>{let e=this.shadowRoot?.querySelector(`video`),t=this.shadowRoot?.querySelector(`canvas`);!e||!t||(t.width=e.videoWidth,t.height=e.videoHeight,t.getContext(`2d`).drawImage(e,0,0),t.toBlob(e=>{e&&(this._captured=e,this._previewUrl=URL.createObjectURL(e),this._stopStream())},`image/jpeg`,.92))},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl=``,this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;let e=new Date().toISOString().replace(/[:.]/g,`-`).slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:`image/jpeg`});this.dispatchEvent(new CustomEvent(`camera-capture`,{detail:{file:t},bubbles:!0,composed:!0}))}}static{this.styles=[Ou,ku,r`
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
    `]}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;let e=this.shadowRoot?.querySelector(`video`);e&&(e.srcObject=this._stream)}catch{this._error=this.t(`cameraAccessError`,`Could not access camera. Please check your permissions.`)}}_stopStream(){this._stream?.getTracks().forEach(e=>e.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent(`camera-cancel`,{bubbles:!0,composed:!0}))}render(){return a`
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
            <div class="title">${this.t(`camera`,`Camera`)}</div>
            <button class="close-btn" aria-label=${this.t(`close`,`Close`)} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            ${this._error?a`<div class="error">${this._error}</div>`:this._captured?a`
                    <img
                      class="preview-img"
                      src=${this._previewUrl}
                      alt=${this.t(`capturedPhoto`,`Captured photo`)}
                    />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>
                        ${this.t(`retake`,`Retake`)}
                      </button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>
                        ${this.t(`usePhoto`,`Use photo`)}
                      </button>
                    </div>
                  `:a`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};u([i({attribute:!1})],Nu.prototype,`t`,void 0),u([c()],Nu.prototype,`_stream`,void 0),u([c()],Nu.prototype,`_error`,void 0),u([c()],Nu.prototype,`_captured`,void 0),u([c()],Nu.prototype,`_previewUrl`,void 0);var Pu=class extends e{constructor(...e){super(...e),this.t=o,this._stream=null,this._recording=!1,this._error=``,this._recordedBlob=null,this._previewUrl=``,this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ju(()=>this.shadowRoot,`.card`),this._onKeyDown=e=>{e.key===`Escape`&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener(`ended`,()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;let e=this.shadowRoot?.querySelector(`video`);e&&(e.srcObject=this._stream),this._chunks=[];let t=MediaRecorder.isTypeSupported(`video/webm;codecs=vp9`)?`video/webm;codecs=vp9`:`video/webm`;this._recorder=new MediaRecorder(this._stream,{mimeType:t}),this._recorder.ondataavailable=e=>{e.data.size>0&&this._chunks.push(e.data)},this._recorder.onstop=()=>{let e=new Blob(this._chunks,{type:`video/webm`});this._recordedBlob=e,this._previewUrl=URL.createObjectURL(e),this._stream?.getTracks().forEach(e=>e.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t(`screenCaptureError`,`Could not start screen capture. Please check your permissions.`)}},this._stopRecording=()=>{this._recording=!1,this._recorder?.state===`recording`&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;let e=new Date().toISOString().replace(/[:.]/g,`-`).slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:`video/webm`});this.dispatchEvent(new CustomEvent(`screencast-capture`,{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=``}}static{this.styles=[Ou,ku,r`
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
    `]}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){this._recorder?.stop(),this._recorder=null,this._stream?.getTracks().forEach(e=>e.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent(`screencast-cancel`,{bubbles:!0,composed:!0}))}render(){return a`
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
            <div class="title">${this.t(`screenCast`,`Screen cast`)}</div>
            <button class="close-btn" aria-label=${this.t(`close`,`Close`)} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            ${this._error?a`<div class="error">${this._error}</div>`:this._recordedBlob?a`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>
                        ${this.t(`discard`,`Discard`)}
                      </button>
                      <button class="btn btn-primary" @click=${this._useRecording}>
                        ${this.t(`useRecording`,`Use recording`)}
                      </button>
                    </div>
                  `:this._recording?a`
                      <video autoplay playsinline muted></video>
                      <div class="status">
                        <div class="rec-dot"></div>
                        ${this.t(`recording`,`Recording`)}...
                      </div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>
                          ${this.t(`stopRecording`,`Stop recording`)}
                        </button>
                      </div>
                    `:a`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M7 21h10" />
                          </svg>
                        </div>
                        <div class="start-text">
                          ${this.t(`screenCastPrompt`,`Share your screen to record a video that will be added to your uploads.`)}
                        </div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>
                            ${this.t(`cancel`,`Cancel`)}
                          </button>
                          <button class="btn btn-primary" @click=${this._startRecording}>
                            ${this.t(`startRecording`,`Start recording`)}
                          </button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};u([i({attribute:!1})],Pu.prototype,`t`,void 0),u([c()],Pu.prototype,`_stream`,void 0),u([c()],Pu.prototype,`_recording`,void 0),u([c()],Pu.prototype,`_error`,void 0),u([c()],Pu.prototype,`_recordedBlob`,void 0),u([c()],Pu.prototype,`_previewUrl`,void 0);var Fu=class extends e{constructor(...e){super(...e),this.t=o,this.duration=6e3,this._toasts=[],this._nextId=0}static{this.styles=r`
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
  `}show(e,t=`error`){let n=++this._nextId;this._toasts=[...this._toasts,{id:n,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(n),this.duration)}_dismiss(e){let t=this._toasts.findIndex(t=>t.id===e);if(t===-1)return;let n=[...this._toasts];n[t]={...n[t],leaving:!0},this._toasts=n,setTimeout(()=>{this._toasts=this._toasts.filter(t=>t.id!==e)},200)}_iconForType(e){return e===`error`?a`<svg
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
      </svg>`:e===`warning`?a`<svg
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
      </svg>`:a`<svg
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
    </svg>`}render(){return this._toasts.length===0?a``:a`
      <div class="toast-stack">
        ${this._toasts.map(e=>a`
            <div class="toast toast--${e.type} ${e.leaving?`leaving`:``}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button
                class="toast-close"
                @click=${()=>this._dismiss(e.id)}
                aria-label=${this.t(`dismiss`,`Dismiss`)}
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
    `}};u([i({attribute:!1})],Fu.prototype,`t`,void 0),u([i({type:Number})],Fu.prototype,`duration`,void 0),u([c()],Fu.prototype,`_toasts`,void 0),w(`sfx-toast`,Fu);var Iu=new Set([`unsplash`]),Lu=10,Ru=3,zu=[`auto`,`mobile`,`tablet`,`desktop`,`hq`,`sample`],Bu=[`hls`],Vu={isTus:!1,tusUploadUrl:null,relativeFolder:``},Hu=new Set([`complete`,`failed`,`error`,`cancelled`,`rejected`]),Q=class t extends e{static{this.styles=r`
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

    ${b}
  `}static{this._FS_ZOOM_LEVELS=[1,2,3,4]}get _lastUploadId(){let e=this.config?.lastUploadReview;if(!e)return null;if(typeof e==`string`)return e;let t=this.config?.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){let e=this._metadataSchema?.regionalVariantsGroups;if(e)return e.find(e=>e.type===Kr.LANGUAGES)?.variants.find(Boolean)?.api_value||void 0}get _effectiveRegionalFilters(){let e=this.config?.metadataConfig?.language??this.config?.locale??void 0;return{...Yr(this._metadataSchema?.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){let e=(this._metadataSchema?.regionalVariantsGroups??[]).find(e=>e.type===Kr.LANGUAGES),t=this._effectiveRegionalFilters;return(e?t[e.uuid]:void 0)??this.config?.metadataConfig?.language}get _effectiveMetadataConfig(){let e=this.config?.metadataConfig;if(!e)return null;let t={...e.regionalFilters??{},...this._effectiveRegionalFilters},n=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:n}}get _localizedMetadataSchema(){let e=this._metadataSchema;if(!e)return null;let t=this._metadataTranslations;if(!t)return e;let n=this._localizedSchemaCache;if(n&&n.base===e&&n.translations===t)return n.result;let r=Tr(e,t);return this._localizedSchemaCache={base:e,translations:t,result:r},r}get _bulkMetadataSchema(){let e=this._localizedMetadataSchema;if(!e)return e;let t=this.config?.metadataConfig?.showTags!==!1,n=this._bulkMetadataSchemaCache;if(n&&n.base===e&&n.showTags===t)return n.result;let r=Nr(e);return t&&(r=ea(r,this._storeCtrl.state.t)),this._bulkMetadataSchemaCache={base:e,showTags:t,result:r},r}_loadMetadataTranslations(){let e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!t.regionalVariantsGroups?.some(e=>e.type===Kr.LANGUAGES))return;let n=this._activeLanguage;if(!n||this._metadataTranslationsLang===n&&this._metadataTranslations)return;this._metadataTranslationsLang=n;let r=++this._translationsRequestId,i=e.peek(n);if(i){this._metadataTranslations=i;return}e.getTranslations(n).then(e=>{r===this._translationsRequestId&&(this._metadataTranslations=e)})}constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab=`details`,this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims=`—`,this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1,this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!1,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution=`auto`,this._setResolutionOpen=!1,this._setProtocol=`hls`,this._setResumable=!1,this._seededSettingsDefaults=null,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._bulkMetadataSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{let{groupUuid:t,value:n}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:n},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Ll,this._cachedSourcesConfig=void 0,this._cachedSourcesTouch=void 0,this._cachedSourcesAccept=void 0,this._cachedTileSources=Ll,this._cachedTileSourcesFrom=null,this._unsubscribeTouch=null,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{let t=this._previewFileId;if(!t)return;let{key:n,value:r}=e.detail;if(Ar(n)){this.updateFileFocusPoint(t,r??null);return}if(Vn(n)){let e=Hn(n);if(!e)return;let i=r===``||r==null,a=e===`position`?{position:i?void 0:Number(r)}:{ref:i?void 0:String(r)};this.updateFileProduct(t,a);return}let i=this._store.getState().files.get(t);if(!i)return;let a=new Map(this._store.getState().files);a.set(t,{...i,meta:{...i.meta,[n]:r}}),this._store.setState({files:a}),this._applyDependencySetValuesPrefill(t)},this._onPreviewMetadataChange=e=>{Ar(e.detail.key)&&(this._focusPointDraft=e.detail.value??null)},this._onFocusPointPickToggle=e=>{this._focusPointPicking=e.detail.picking,e.detail.picking&&this.renderRoot.querySelector(`.preview-img-wrap`)?.scrollIntoView({block:`nearest`,behavior:`smooth`})},this._onPreviewFieldHover=e=>{Ar(e.detail.key)&&(this._focusPointFieldHovered=e.detail.hovering)},this._onPreviewFieldFocus=e=>{let t=Ar(e.detail.key);e.detail.focused?(this._focusPointFieldFocused=t,t||(this._focusPointPicking=!1)):t&&(this._focusPointFieldFocused=!1)},this._onPreviewMetadataEscape=e=>{Ar(e.detail.key)&&(this._focusPointPicking=!1)},this._onFocusPointPick=e=>{let t=this._previewFileId;if(!t)return;let{horizontal:n,vertical:r}=e.detail;this._focusPointDraft=null,this.updateFileFocusPoint(t,`${n},${r}`)},this._onPreviewTaxonomyEntry=e=>{let t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{let n=this.config?.transformRemoteThumbnail;if(!n)return e;try{return n(e,t)||e}catch(t){return console.warn(`[sfx-uploader] transformRemoteThumbnail threw:`,t),e}},this._connectorThumbnailTransform=e=>{let t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:`connector`,providerId:t}):e},this._onFilesSelected=e=>{let{files:t,hadDirectories:n}=e.detail;if(t.length===0&&n){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onFolderRejected=()=>{this._showFolderDisabledToast()},this._onCaptureChange=e=>{let t=e.target,n=Array.from(t.files??[]);t.value=``,n.length>0&&this._processIncomingFiles(n)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{let t=this._mergedSources.find(t=>t.id===e);if(t?.onActivate){try{t.onActivate(this)}catch(t){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,t)}return}if(e===`device`){this.shadowRoot.querySelector(`sfx-drop-zone`)?.browse();return}if(e===`url`){this._showUrlDialog=!0;return}if(e===`camera`){if(D()&&this._captureInput){this._captureInput.click();return}this._showCameraDialog=!0;return}if(e===`screen-cast`){this._showScreenCastDialog=!0;return}if((this.config?.connectors?.providers??[]).includes(e)){if(e===`google-drive`&&this.config?.connectors?.googlePicker){if(!customElements.get(`sfx-google-picker-view`)){let{SfxGooglePickerView:e}=await S(async()=>{let{SfxGooglePickerView:e}=await import(`./google-picker-view-BhKjBTtL.js`);return{SfxGooglePickerView:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]));customElements.define(`sfx-google-picker-view`,e)}}else if(Iu.has(e)){if(!customElements.get(`sfx-search-provider-browser`)){let{SfxSearchProviderBrowser:e}=await S(async()=>{let{SfxSearchProviderBrowser:e}=await import(`./search-provider-browser-BQ-0VklP.js`);return{SfxSearchProviderBrowser:e}},__vite__mapDeps([8,1,2,3,4,5,7,9]));customElements.define(`sfx-search-provider-browser`,e)}}else if(!customElements.get(`sfx-provider-browser`)){let{SfxProviderBrowser:e}=await S(async()=>{let{SfxProviderBrowser:e}=await import(`./provider-browser-WZG-qdDy.js`);return{SfxProviderBrowser:e}},__vite__mapDeps([10,1,2,3,4,5,6,7,9]));customElements.define(`sfx-provider-browser`,e)}this._activeConnector=e}},this._onUrlSubmit=e=>{this._showUrlDialog=!1;let{url:t,name:n,nameIsUserDefined:r}=e.detail,i=this.config?.callbacks,a=El(n),o=a.startsWith(`image/`);if(wl(n))return;let s=this._store.getState();if([...s.files.values()].some(e=>e.name===n&&e.status!==`rejected`&&e.status!==`cancelled`))return;let c=Al({name:n,size:0,type:a},s.restrictions,s.files);if(c){let e={id:yl(),status:`rejected`,file:null,remoteUrl:t,name:n,nameIsUserDefined:r,size:0,type:a,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Vu};nt(this._store,e),this._dispatchPublic(B.FILE_REJECTED,{file:e,reason:c.message}),i?.onFileRejected?.(e,c.message);return}let l={id:yl(),status:`idle`,file:null,remoteUrl:t,name:n,nameIsUserDefined:r,size:0,type:a,previewUrl:o?this._transformRemoteThumbnail(t,{source:`url-import`}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Vu};nt(this._store,l),this._dispatchPublic(B.FILE_ADDED,{file:l}),i?.onFileAdded?.(l),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{let t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab=`details`,this._dispatchPublic(B.FILE_PREVIEW,{file:t}),this.config?.callbacks?.onFilePreview?.(t))},this._onFillMetadata=()=>{this._bulkMetadataHadIssuesOnOpen=this._hasMetadataIssues;let e=[...this._store.getState().files.values()].filter(e=>t._MODIFIABLE_STATUSES.has(e.status));this.config?.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(B.FILL_METADATA,{files:e}),this.config?.callbacks?.onFillMetadata?.(e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{let t=e.detail.fileId,n=new Set(this._similarSelectedIds);if(n.has(t))n.delete(t);else{if(n.size>=Lu)return;n.add(t)}this._similarSelectedIds=n},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,Lu).map(e=>e.id)):new Set},this._onCheckSimilarRun=()=>{let e=this._similarImageFiles().filter(e=>this._similarSelectedIds.has(e.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{let t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab=`similar`},this._onRequireMetadata=()=>{if(!this._firstMissingRequiredFieldKey()){let e=this._storeCtrl.state.t;this._showToast(e(`fillRequiredFieldsFirst`,`Please fill required fields first.`),`warning`)}this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{let t=e.detail.file,n=e.detail.cdnUrl;!t||!n||(this._dispatchPublic(B.FILE_COPY_CDN,{file:t,cdnUrl:n}),this.config?.callbacks?.onFileCopyCdn?.(t,n))},this._onBulkMetadataSaveBatch=e=>{let{changes:t}=e.detail;if(!t.length)return;let n=new Map(this._store.getState().files);for(let{fileId:e,meta:r}of t){let t=n.get(e);t&&n.set(e,{...t,meta:{...t.meta,...r}})}this._store.setState({files:n})},this._onBulkProductSaveBatch=e=>{let{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTagsSaveBatch=e=>{let{changes:t}=e.detail;t.length&&this.updateFilesMeta(t.map(({fileId:e,tags:t})=>({fileId:e,tags:t})))},this._onBulkTaxonomySaveBatch=e=>{let{changes:n}=e.detail;if(!n.length)return;let r=this._store.getState().files,i=new Map(r);for(let{fileId:e,taxonodes:a}of n){let n=r.get(e);if(!n||!t._MODIFIABLE_STATUSES.has(n.status))continue;let o={...n.taxonodes??{}};for(let[e,t]of Object.entries(a))t==null?delete o[e]:o[e]=t;i.set(e,{...n,taxonodes:o})}this._store.setState({files:i})},this._onBulkMetadataClose=e=>{let t=e.detail?.saved===!0&&this._bulkMetadataHadIssuesOnOpen&&!this._hasMetadataIssues;this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,t&&this._onUploadStart()},this._onFileRetry=e=>{this._ensureEngine(),this._engine?.retryFile(e.detail.fileId)},this._onFilePause=e=>{this._engine?.pauseFile(e.detail.fileId)},this._onFileResume=e=>{this._engine?.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{this._ensureEngine(),this._engine?.retryAll()},this._onClearAll=(e=!1)=>{let t=this.config?.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab=`details`,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&=(clearTimeout(this._closeOnCompleteTimer),null),e||this._engine?.cancelAll();let n=[...this._store.getState().files.values()];for(let r of n)r.previewUrl&&URL.revokeObjectURL(r.previewUrl),e||(this._dispatchPublic(B.FILE_REMOVED,{file:r}),t?.onFileRemoved?.(r));this._revokeVideoBlobUrls();for(let e of this._rejectedTimers.values())clearTimeout(e);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{let e=this.shadowRoot.querySelector(`sfx-drop-zone`);if(e){e.browse();return}(this.shadowRoot.querySelector(`sfx-file-list`)?.shadowRoot?.querySelector(`input[type="file"]`))?.click()},this._onUploadStart=()=>{if(this._phase===`complete`){this.config?.clearOnComplete!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{let e=[...this._store.getState().files.values()].filter(e=>e.status===`complete`||e.status===`failed`||e.status===`error`);if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}let t=this._lastUploadId;if(t==null)return;let n=_l.load(t);!n||n.length===0||(this._reviewFiles=[...n].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{let e=this._lastUploadId;e!=null&&_l.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{let t=this.config?.callbacks,n=this.config?.preserveFolderStructure!==!1,r=(e,t,n)=>`${e}\u0000${t}\u0000${n}`,i=new Set;for(let e of this._store.getState().files.values())e.status!==`rejected`&&e.status!==`cancelled`&&i.add(r(e.name,e.size,e.relativeFolder??``));for(let a of e.detail.files){if(wl(a.name))continue;let e=n?a.relativeFolder??``:``,o=this._store.getState(),s=r(a.name,a.size,e);if(i.has(s))continue;let c=a.thumbnail?this._transformRemoteThumbnail(a.thumbnail,{source:`connector`,providerId:a.provider}):null,l=Al({name:a.name,size:a.size,type:a.mimeType},o.restrictions,o.files);if(l){let n={id:yl(),status:`rejected`,file:null,remoteUrl:null,name:a.name,size:a.size,type:a.mimeType,previewUrl:c,duration:null,progress:0,speed:0,bytesUploaded:0,error:l.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:a,...Vu,relativeFolder:e};nt(this._store,n),this._dispatchPublic(B.FILE_REJECTED,{file:n,reason:l.message}),t?.onFileRejected?.(n,l.message);continue}let u={id:yl(),status:`idle`,file:null,remoteUrl:null,name:a.name,size:a.size,type:a.mimeType,previewUrl:c,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:a,...Vu,relativeFolder:e};nt(this._store,u),i.add(s),this._dispatchPublic(B.FILE_ADDED,{file:u}),t?.onFileAdded?.(u)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{this._dispatchPublic(B.COMPLETE_ACTION,{}),this.config?.callbacks?.onCompleteAction?.(),(this.config?.mode??`modal`)===`modal`?this.close():this.config?.clearOnComplete!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{this.config?.callbacks?.onCancel?.(),this._dispatchPublic(B.CANCEL,{})},this._onConfirmDismissOk=()=>{this._confirmDismissVisible=!1,this._confirmDismissResolve?.(!0),this._confirmDismissResolve=null},this._onConfirmDismissCancel=()=>{this._confirmDismissVisible=!1,this._confirmDismissResolve?.(!1),this._confirmDismissResolve=null},this._onModalDismiss=async()=>{await this._confirmDismiss()&&(this._phase===`uploading`&&this._engine?.cancelAll(),this.config?.callbacks?.onCancel?.(),this._dispatchPublic(B.CANCEL,{}),this.close())},this._onCancelUpload=()=>{this._engine?.cancelAll(),this.config?.callbacks?.onCancel?.(),this._dispatchPublic(B.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,this.config?.callbacks?.onMinimize?.(),this._dispatchFloatGeometryEvent(B.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.config?.callbacks?.onRestore?.(),this._dispatchPublic(B.RESTORE,{mode:`modal`}),this.requestUpdate())},this._onPillDismiss=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._phase===`uploading`&&(this._engine?.cancelAll(),this.config?.callbacks?.onCancel?.(),this._dispatchPublic(B.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&(this._phase===`uploading`&&this.config?.minimizeOnUpload?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&=(clearTimeout(this._bodyLeaveTimer),null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&=(clearTimeout(this._bodyLeaveTimer),null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&=(clearTimeout(this._bodyLeaveTimer),null),this._bodyDragOver=!1;let t=e.dataTransfer;t&&Rc(t,{allowDirectories:this._folderDropAllowed}).then(({files:e,hadDirectories:t,rejectedDirectories:n})=>{if(n&&this._showFolderDisabledToast(),e.length===0){t&&!n&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent(`files-selected`,{detail:{files:e,hadDirectories:t}}))})},this._onKeyDown=e=>{if(e.key===`Escape`){if(this._confirmDismissVisible){this._onConfirmDismissCancel();return}if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;let e=this.config?.mode??`modal`,t=this.config?.header??(e!==`modal`||`close`);(t===`close`||t===`back`)&&(e===`modal`&&this._isOpen?this._onModalDismiss():e===`inline`&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{e.preventDefault(),this._isResizing=!0,(this.shadowRoot?.querySelector(`.preview-layout`))?.classList.add(`resizing`),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;let t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{this._splitRafId=0;let e=this.shadowRoot?.querySelector(`.preview-layout`);if(!e)return;let n=e.getBoundingClientRect(),r=(t-n.left)/n.width*100;this._splitPct=Math.max(25,Math.min(75,r))})},this._onSplitPointerUp=()=>{this._isResizing=!1,this._splitRafId&&=(cancelAnimationFrame(this._splitRafId),0),(this.shadowRoot?.querySelector(`.preview-layout`))?.classList.remove(`resizing`)},this._namingViolationIds=new Set,this._namingViolationIdsKey=``,this._onFsToggleZoom=e=>{e?.stopPropagation();let n=t._FS_ZOOM_LEVELS,r=n.indexOf(this._fsZoom),i=r===-1?1:(r+1)%n.length;this._fsZoom=n[i],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;let t=e.clientX-this._fsDragStartX,n=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(n)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+n,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;let t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;let t=e.touches[0],n=t.clientX-this._fsDragStartX,r=t.clientY-this._fsDragStartY;(Math.abs(n)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+n,this._fsPanY=this._fsPanStartY+r,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e?.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=it(),this._storeCtrl=new at(this,this._store)}open(){let e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&(this.config?.callbacks?.onRestore?.(),this._dispatchPublic(B.RESTORE,{mode:`modal`}),this.requestUpdate());return}this._isOpen=!0,this.config?.callbacks?.onOpen?.(),this._dispatchPublic(B.OPEN,{}),e&&(this.config?.callbacks?.onRestore?.(),this._dispatchPublic(B.RESTORE,{mode:`modal`})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){this._phase===`uploading`&&(this._engine?.cancelAll(),this.config?.callbacks?.onCancel?.(),this._dispatchPublic(B.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){this._closeOnCompleteTimer&&=(clearTimeout(this._closeOnCompleteTimer),null),this.config?.clearOnClose!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this.config?.callbacks?.onClose?.(),this._dispatchPublic(B.CLOSE,{}),this.requestUpdate()}upload(){if(this._ensureEngine(),!this._engine){console.warn(`[sfx-uploader] Cannot upload: auth not resolved yet`);return}let e=[...this._store.getState().files.values()].filter(e=>e.status===`idle`||e.status===`queued`);if(this.config?.callbacks?.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;let t=new CustomEvent(B.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();let n=[...this._store.getState().files.values()].filter(e=>e.status===`idle`||e.status===`queued`);this._dispatchPublic(B.UPLOAD_STARTED,{files:n}),this.config?.callbacks?.onUploadStarted?.(n),this._engine.uploadAll(),this.config?.minimizeOnUpload&&this.config?.mode!==`inline`&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,this.config?.callbacks?.onMinimize?.(),this._dispatchFloatGeometryEvent(B.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){if(e&&e.length>0){let t=this._store.getState().files,n=new Map(t),r=!1;for(let i of e){let e=t.get(i.id);e&&(n.set(i.id,{...e,...i}),r=!0)}r&&this._store.setState({files:n})}this._ensureEngine(),this._engine?.uploadAll()}cancelUpload(){this._engine?.cancelAll()}pauseFile(e){this._engine?.pauseFile(e)}resumeFile(e){this._engine?.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}static{this._MODIFIABLE_STATUSES=new Set([`idle`,`queued`,`rejected`])}updateFileMeta(e,n,r){let i=this._store.getState().files,a=i.get(e);if(!a||!t._MODIFIABLE_STATUSES.has(a.status))return;let o=new Map(i);o.set(e,{...a,meta:n==null?a.meta:{...a.meta,...n},tags:r??a.tags}),this._store.setState({files:o})}updateFilesMeta(e){let n=this._store.getState().files,r=new Map(n),i=!1;for(let{fileId:a,meta:o,tags:s}of e){let e=n.get(a);!e||!t._MODIFIABLE_STATUSES.has(e.status)||(r.set(a,{...e,meta:o==null?e.meta:{...e.meta,...o},tags:s??e.tags}),i=!0)}i&&this._store.setState({files:r})}updateFileTaxonode(e,n,r){let i=this._store.getState().files,a=i.get(e);if(!a||!t._MODIFIABLE_STATUSES.has(a.status))return;let o={...a.taxonodes??{}};r==null?delete o[n]:o[n]=r;let s=new Map(i);s.set(e,{...a,taxonodes:o}),this._store.setState({files:s})}updateFilesTaxonode(e,n,r){let i=this._store.getState().files,a=new Map(i),o=!1;for(let s of e){let e=i.get(s);if(!e||!t._MODIFIABLE_STATUSES.has(e.status))continue;let c={...e.taxonodes??{}};r==null?delete c[n]:c[n]=r,a.set(s,{...e,taxonodes:c}),o=!0}o&&this._store.setState({files:a})}updateFileProduct(e,n){let r=this._store.getState().files,i=r.get(e);if(!i||!t._MODIFIABLE_STATUSES.has(i.status))return;let a=new Map(r);a.set(e,{...i,product:Zn(i.product,n)}),this._store.setState({files:a})}updateFileFocusPoint(e,n){let r=this._store.getState().files,i=r.get(e);if(!i||!t._MODIFIABLE_STATUSES.has(i.status)||(i.focusPoint??null)===n)return;let a=new Map(r);a.set(e,{...i,focusPoint:n}),this._store.setState({files:a})}updateFilesProduct(e){let n=this._store.getState().files,r=new Map(n),i=!1;for(let{fileId:a,product:o}of e){let e=n.get(a);!e||!t._MODIFIABLE_STATUSES.has(e.status)||(r.set(a,{...e,product:Zn(e.product,o)}),i=!0)}i&&this._store.setState({files:r})}willUpdate(e){if(e.has(`config`)&&this.config){this._applyConfig(this.config);let e=this.config.uploadSettings;(e===!1||e!=null&&e.enabled===!1)&&this._showSettings&&(this._showSettings=!1)}if(e.has(`_previewFileId`)&&this._resetFocusPointPicking(),e.has(`_previewFileId`)&&this._previewFileId){let e=this._previewFileId,t=this._store.getState().files.get(e);t?this._getImageDimensions(t).then(t=>{this._previewFileId===e&&(this._previewDims=t?`${t.w} × ${t.h}`:`—`)}):this._previewDims=`—`}this._previewFileId?this._previewDefaultApplied||=(this._splitPct=62.5,!0):this._previewDefaultApplied&&=!1}updated(e){this._updateFloatingPortal(),this._syncPageScrollLock()}_syncPageScrollLock(){let e=this.config?.mode??`modal`;this.isConnected&&e===`modal`&&this._isOpen&&!this._isMinimized?$e(this):et(this)}_injectFloatStyles(){if(document.querySelector(`style[data-sfx-upload-float-styles]`))return;let e=document.createElement(`style`);e.setAttribute(`data-sfx-upload-float-styles`,``),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){let e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();let t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement(`div`),this._portalContainer.setAttribute(`data-sfx-upload-float`,``),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),l(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(B.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(l(s,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener(`keydown`,this._onKeyDown),this._unsubscribeTouch=Ze(()=>this.requestUpdate()),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());let e=this._lastUploadId;this._hasStoredReview=e!=null&&_l.exists(e),this._initI18n(typeof navigator<`u`?navigator.language:void 0),typeof MutationObserver<`u`&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:[`style`]}))}async _initI18n(e){try{let{i18n:t,isNew:n}=await xe(e||`en`);Lr(e||`en`).catch(()=>{}),n&&t.on(`missingKey`,(e,t,n,r,i,a)=>{let o=n.match(/_(?:zero|one|two|few|many|other)$/),s=o&&a?.[`defaultValue${o[0]}`]?String(a[`defaultValue${o[0]}`]):r;we.handleMissingKey(n,s,t)}),this._store.setState({t:(e,t,n)=>Se(e,t,n)})}catch{}}disconnectedCallback(){super.disconnectedCallback(),et(this),document.removeEventListener(`keydown`,this._onKeyDown),this._unsubscribeTouch?.(),this._unsubscribeTouch=null,this._hostStyleObserver?.disconnect(),this._hostStyleObserver=null,this._unsubStoreEvents?.(),this._unsubStoreEvents=null,this._prevStoreState=null,this._portalContainer?.remove(),this._portalContainer=null,document.querySelector(`[data-sfx-upload-float]`)||document.querySelector(`style[data-sfx-upload-float-styles]`)?.remove(),this._revokeVideoBlobUrls();for(let e of this._rejectedTimers.values())clearTimeout(e);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&=(clearTimeout(this._closeOnCompleteTimer),null),this._clearSimilarRun();for(let e of this._store.getState().files.values())e.previewUrl&&URL.revokeObjectURL(e.previewUrl);this._engine?.destroy(),this._engine=null}_applyConfig(e){let t={};e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null&&(t.queueConfig={...this._store.getState().queueConfig,concurrency:e.concurrency}),e.autoProceed!=null&&(t.queueConfig={...t.queueConfig??this._store.getState().queueConfig,autoProceed:e.autoProceed}),Object.keys(t).length>0&&this._store.setState(t);let n=e.uploadSettings;if(n&&n.defaults){let e=n.defaults,t=this._seededSettingsDefaults;e.resize!==void 0&&e.resize!==t?.resize&&(this._setResize=e.resize),e.maxWidth!==void 0&&e.maxWidth!==t?.maxWidth&&(this._setMaxW=e.maxWidth),e.maxHeight!==void 0&&e.maxHeight!==t?.maxHeight&&(this._setMaxH=e.maxHeight),e.transcode!==void 0&&e.transcode!==t?.transcode&&(this._setTranscode=e.transcode),e.resolution!==void 0&&e.resolution!==t?.resolution&&(this._setResolution=e.resolution),e.protocol!==void 0&&e.protocol!==t?.protocol&&(this._setProtocol=e.protocol),e.resumable!==void 0&&e.resumable!==t?.resumable&&(this._setResumable=e.resumable),this._seededSettingsDefaults={...e}}let r=this._lastUploadId;this._hasStoredReview=r!=null&&_l.exists(r),this._resolveAuthAndEngine(e),(e.mode===`inline`||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){let t=e.auth;if(t.mode===`sass-key`){this._apiBase=Xc(t.container,e.apiDomain),this._authHeaders=Qc(t),this._ensureEngine(),this._engine?.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:e.connectors?.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e);return}let n=++this._authResolveId;try{let r=await $c(t,e.apiDomain);if(n!==this._authResolveId)return;this._apiBase=r.apiBase,this._authHeaders=r.headers,this._ensureEngine(),this._engine?.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:e.connectors?.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e)}catch(e){if(n!==this._authResolveId)return;console.error(`[sfx-uploader] Auth resolution failed:`,e),this._showToast(this._formatAuthError(e))}}_formatAuthError(e){let t=e instanceof Error?e.message:String(e);return this.config?.auth?.container?t.includes(`HTTP 404`)?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes(`HTTP 401`)||t.includes(`HTTP 403`)?`Authentication failed: invalid security template ID. Check your credentials in the Auth panel.`:t.includes(`timed out`)?`Authentication failed: request timed out. Check your network connection.`:t.includes(`Failed to fetch`)||t.includes(`NetworkError`)?`Authentication failed: network error. Check your internet connection.`:`Authentication failed: ${t}`:`Authentication failed: no container specified. Open the Auth panel and enter your credentials.`}_showToast(e,t=`error`){(this.shadowRoot?.querySelector(`sfx-toast`))?.show(e,t)}_applyNamingConvention(e){let t=e.namingConvention;if(!t?.enabled){this._setNamingConvention(null,!1);return}let n=tl(t.regexB64);this._setNamingConvention(n,n===null)}_setNamingConvention(e,t){this._store.setState({namingConvention:{regex:e,broken:t}})}_normalizeTusConfig(){let e=this.config?.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,n=this.config?.tusConfig,r=n===!0?{}:n||void 0;if(t){if(!this._setResumable)return;r||={}}if(!r)return;let i=this.config?.connectors?.companionUrl;if(!i)return r;let a=i.replace(/\/+$/,``);return{...r,endpoint:r.endpoint??`${a}/files`,jsonBase:r.jsonBase??`${a}/json`}}get _remainingSlots(){let e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(let e of this._storeCtrl.state.files.values())e.status!==`rejected`&&e.status!==`cancelled`&&t++;return Math.max(0,e-t)}get _allowMulti(){if(this.config?.forceName!=null)return!1;let e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){return this.config?.allowFolderUpload===!1||this.config?.preserveFolderStructure===!1?!1:this._allowMulti}get _folderDropAllowed(){return this.config?.allowFolderUpload!==!1}_buildUploadParamsResolver(){let e=this.config;if(!e)return;let{forceName:t,getUploadParams:n}=e;return e=>{let r={},i=V(e);if(this._setResize&&(i===`image`||i===`pdf`)&&this._setMaxW>0&&this._setMaxH>0&&(r.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&i===`vid`&&(r.postprocess=`transcode`,r[`video-resolution`]=this._setResolution,r.video_protocols=this._setProtocol),t!=null){let e=typeof t==`function`?t():t;e&&(r.opt_force_name=e)}let a=n?.(e);return a&&Object.assign(r,a),Object.keys(r).length>0?r:void 0}}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Uc(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:this.config?.connectors?.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(e,t)=>this._transformRemoteThumbnail(e,{source:`cdn-complete`,urls:t}),onFocusPointError:e=>this._showToast(this._storeCtrl.state.t(`focusPointSaveFailed`,`Could not save the focus point for {{name}}`,{name:e.name}),`warning`)}),this._engine.start())}async _preloadMetadataSchema(e){let t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;let n=++this._metadataSchemaResolveId,r=this._storeCtrl.state.t;try{let{fetchMetadataSchema:e,fetchDependencies:i,normalizeDependencies:a,hasCachedSchema:o,hasCachedDependencies:s,canReachHub:c,canUseSettingsSchema:l,HUB_HEADERS_HINT:u,createTagsAutocomplete:d,createTaxonomyService:f,createUltratagsService:p,createFieldI18nService:m}=await S(async()=>{let{fetchMetadataSchema:e,fetchDependencies:t,normalizeDependencies:n,hasCachedSchema:r,hasCachedDependencies:i,canReachHub:a,canUseSettingsSchema:o,HUB_HEADERS_HINT:s,createTagsAutocomplete:c,createTaxonomyService:l,createUltratagsService:u,createFieldI18nService:d}=await import(`./src-2AAqCogB.js`);return{fetchMetadataSchema:e,fetchDependencies:t,normalizeDependencies:n,hasCachedSchema:r,hasCachedDependencies:i,canReachHub:a,canUseSettingsSchema:o,HUB_HEADERS_HINT:s,createTagsAutocomplete:c,createTaxonomyService:l,createUltratagsService:u,createFieldI18nService:d}},__vite__mapDeps([11,1,3,2,4,5]));if(n!==this._metadataSchemaResolveId)return;let h=c(t)&&!!t.projectUuid,g=h||l(t)||!!t.rawMetadata||o(t.projectUuid,this._apiBase),_=h||!!t.projectUuid&&s(t.projectUuid)||!!t.rawDependencies;if(!g){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig sets schemaSource: 'hub' but no usable Hub auth is configured — skipping metadata schema and dependencies. Drop schemaSource to load the schema from /v5/settings instead. ${u}`),this._showToast(r(`metadataUnavailable`,`Metadata is unavailable — missing Hub session headers`),`warning`)),n!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let v;t.rawDependencies?v=Promise.resolve(a(t.rawDependencies)):_&&t.projectUuid?v=i(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(e=>(console.warn(`[sfx-uploader] Failed to load metadata dependencies:`,e),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${u}`)),v=Promise.resolve([]));let[y,b]=await Promise.all([e(this._apiBase,this._authHeaders,t.projectUuid,t),v]);if(n!==this._metadataSchemaResolveId)return;this._metadataDependencies=b,this._metadataAutocomplete=d(this._apiBase,this._authHeaders),this._taxonomyService=f(this._apiBase,this._authHeaders),this._ultratagsService=p(this._apiBase,this._authHeaders),this._fieldI18nService=m(this._apiBase,this._authHeaders);let x=y.productsEnabled?Gn(y,this._storeCtrl.state.t):y;t.focusPointEnabled&&(x=Mr(x,this._storeCtrl.state.t)),this._metadataSchema=x;let C=this._metadataSchema.fields.filter(e=>tr(e,t)).map(e=>e.key);this._dispatchPublic(B.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:C}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(e){console.error(`[sfx-uploader] Failed to load metadata schema:`,e),this._showToast(r(`metadataLoadFailed`,`Failed to load metadata schema`),`warning`)}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;let n=this._metadataSchema,r=this._store.getState().files,i=!1,a=new Map(r),o=e?(()=>{let t=r.get(e);return t?[t]:[]})():r.values();for(let e of o){if(!t._MODIFIABLE_STATUSES.has(e.status))continue;let r=$t({mime:e.type??``,meta:e.meta},n,this._metadataDependencies);if(r.size===0)continue;let o={};for(let t of n.fields){let n=r.get(t.ckey);n?.setValue!==void 0&&(n.hidden||A(e.meta[t.key])&&(o[t.key]=en(t,n.setValue)))}Object.keys(o).length!==0&&(a.set(e.id,{...e,meta:{...e.meta,...o}}),i=!0)}i&&this._store.setState({files:a})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;let e=this._metadataSchema,n=this._store.getState().files,r=!1,i=new Map(n);for(let a of n.values()){if(!t._MODIFIABLE_STATUSES.has(a.status))continue;let n=$t({mime:a.type??``,meta:a.meta},e,this._metadataDependencies),o=rn(a.meta,e,n);o!==a.meta&&(i.set(a.id,{...a,meta:o}),r=!0)}r&&this._store.setState({files:i})}get _renameAllowed(){return(this.config?.allowFileRename??!0)&&this.config?.forceName==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;let n=t.trim();if(!n)return;let r=this._store.getState().files.get(e);if(!r||r.name===n)return;let i=new Map(this._store.getState().files);i.set(e,{...r,name:n,nameIsUserDefined:!0}),this._store.setState({files:i})}_focusPointValueFor(e){if(this._focusPointDraft&&this._previewFileId===e.id)return this._focusPointDraft;if(!e.focusPoint)return null;let t=In(e.focusPoint);return t.horizontal===``||t.vertical===``?null:t}get _focusPointMarkerVisible(){return this._focusPointPicking||this._focusPointFieldHovered||this._focusPointFieldFocused}_resetFocusPointPicking(){this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1}_previewMeta(e){let t=this._metadataSchema?.fieldsByKey.has(Dr);return!this._metadataSchema?.productsEnabled&&!t?e.meta:{...e.meta,...this._metadataSchema?.productsEnabled?{[Ln]:e.product.ref,[Rn]:e.product.position}:{},...t?{[Dr]:this._focusPointDraft!==null&&this._previewFileId===e.id?this._focusPointDraft:e.focusPoint??null}:{}}}_resolvedSchemaFor(e){if(!this._metadataSchema)return null;let t=this._metadataDependencies.length>0?$t({mime:e.type??``,meta:e.meta},this._metadataSchema,this._metadataDependencies):null;if(!(this._metadataSchema.fieldsByKey.has(`system.focusPoint`)&&!(e.type??``).startsWith(`image/`)))return t;let n=new Map(t??[]);return n.set(Dr,{...n.get(Dr),hidden:!0,required:!1,contributingDependencyUuids:[]}),n}_initialFileMeta(){let e=this.config?.metadataConfig?.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){let e=this.config?.metadataConfig;return!e||!this._metadataSchema?!1:ir(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){return!this._metadataEnforcing||!this._metadataSchema?null:lr(this._store.getState().files,this._metadataSchema,this.config?.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?pr(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}get _requiredFieldsTotal(){return!this._metadataEnforcing||!this._metadataSchema?0:cr(this._store.getState().files,this._metadataSchema,this.config?.metadataConfig,this._metadataDependencies).size}get _requiredFieldsRemaining(){return!this._metadataEnforcing||!this._metadataSchema?0:Object.keys(sr(this._store.getState().files,this._metadataSchema,this.config?.metadataConfig,this._metadataDependencies)).length}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){let e=this._isPillExpanded?`card`:`pill`,t=this._portalContainer?.querySelector(`.upload-float`);if(!t)return{width:0,height:0,mode:e};let n=t.getBoundingClientRect();return{width:n.width,height:n.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;let e=getComputedStyle(this),t=e.getPropertyValue(`--sfx-up-float-offset-x`).trim(),n=e.getPropertyValue(`--sfx-up-float-offset-y`).trim();t?this._portalContainer.style.setProperty(`--sfx-up-float-offset-x`,t):this._portalContainer.style.removeProperty(`--sfx-up-float-offset-x`),n?this._portalContainer.style.setProperty(`--sfx-up-float-offset-y`,n):this._portalContainer.style.removeProperty(`--sfx-up-float-offset-y`)}_onStoreChange(){let e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());let n=this.config?.callbacks;for(let[r,i]of e.files){let a=t.files.get(r);if(!a){i.relativeFolder&&this._firedFolders.delete(i.relativeFolder);continue}if(a.status!==i.status)switch(i.status){case`uploading`:a.status===`paused`&&(this._dispatchPublic(B.UPLOAD_RESUMED,{file:i}),n?.onUploadResumed?.(i));break;case`complete`:i.response&&(this._dispatchPublic(B.UPLOAD_COMPLETE,{file:i,response:i.response}),n?.onUploadComplete?.(i,i.response));break;case`error`:case`failed`:{let e=Error(i.error??`Upload failed`);this._dispatchPublic(B.UPLOAD_ERROR,{file:i,error:e}),n?.onUploadError?.(i,e);break}case`retrying`:this._dispatchPublic(B.UPLOAD_RETRY,{file:i,attempt:i.retryCount}),n?.onUploadRetry?.(i,i.retryCount);break;case`paused`:this._dispatchPublic(B.UPLOAD_PAUSED,{file:i}),n?.onUploadPaused?.(i)}i.status===`uploading`&&a.progress!==i.progress&&(this._dispatchPublic(B.UPLOAD_PROGRESS,{file:i,progress:i.progress,speed:i.speed}),n?.onUploadProgress?.(i,i.progress,i.speed)),i.relativeFolder&&a.status!==i.status&&Hu.has(i.status)&&!this._firedFolders.has(i.relativeFolder)&&this._maybeDispatchFolderComplete(i.relativeFolder,e,n)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){let t=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=t),this._dispatchPublic(B.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:t}),n?.onTotalProgress?.(e.totalProgress,e.totalSpeed,t)}if(t.isUploading&&!e.isUploading){let t=[...e.files.values()];if(!t.some(e=>e.status===`cancelled`)){let e=t.filter(e=>e.status===`complete`),r=t.filter(e=>e.status===`failed`||e.status===`error`);if(e.length===0&&r.length===0)return;let i=this._lastUploadId;if(i!=null){let t=[...e,...r];_l.save(i,t),this._hasStoredReview=t.length>0}this._dispatchPublic(B.ALL_COMPLETE,{successful:e,failed:r}),n?.onAllComplete?.(e,r);let a=this.config?.closeOnComplete;if(a!==!1&&a!=null){let e=typeof a==`number`?a:1500;this._closeOnCompleteTimer=setTimeout(()=>{this._closeOnCompleteTimer=null,this._phase===`complete`&&(this._dispatchPublic(B.COMPLETE_ACTION,{}),this.config?.callbacks?.onCompleteAction?.(),this.close())},e)}}}}_maybeDispatchFolderComplete(e,t,n){let r=[...t.files.values()].filter(t=>t.relativeFolder===e);if(r.length===0||r.some(e=>!Hu.has(e.status)))return;let i=r.filter(e=>e.status===`complete`),a=r.filter(e=>e.status===`failed`||e.status===`error`);(i.length!==0||a.length!==0)&&(this._firedFolders.add(e),this._dispatchPublic(B.FOLDER_COMPLETE,{folder:e,successful:i,failed:a}),n?.onFolderComplete?.(e,i,a))}static{this._RESERVED_IDS=new Set([`device`,`camera`,`url`,`screen-cast`])}_filterCoreSources(e,t,n){let r=Je(),i=Ye()&&(!t||Ml(n));return r&&i&&!t?e:e.filter(e=>(r||e.id!==`screen-cast`)&&(i||e.id!==`camera`)&&(!t||e.id!==`device`))}get _mergedSources(){let e=this.config?.connectors,n=D(),r=jl(this._storeCtrl.state.restrictions);if(e===this._cachedSourcesConfig&&n===this._cachedSourcesTouch&&r===this._cachedSourcesAccept)return this._cachedSources;if(this._cachedSourcesConfig=e,this._cachedSourcesTouch=n,this._cachedSourcesAccept=r,!e)return this._cachedSources=this._filterCoreSources(Ll.filter(e=>e.id!==`url`),n,r),this._cachedSources;let i=e.providers.length>0?te(e.providers):[],a=e.customSources??[],o=e.coreSources?new Set(e.coreSources):null,s=o?Ll.filter(e=>o.has(e.id)):Ll,c=this._filterCoreSources(e.companionUrl?s:s.filter(e=>e.id!==`url`),n,r),l=n?[`camera`,`url`]:[`device`,`url`],u=l.map(e=>c.find(t=>t.id===e)).filter(e=>!!e),d=c.filter(e=>!l.includes(e.id)),f=new Set,p=[];for(let e of[...u,...i,...d,...a])if(!f.has(e.id)){if(t._RESERVED_IDS.has(e.id)&&e.onActivate){console.warn(`[sfx-uploader] Custom source id "${e.id}" conflicts with a built-in source and was skipped.`);continue}f.add(e.id),p.push(e)}return this._cachedSources=p,this._cachedSources}get _tileSources(){let e=this._mergedSources;return e===this._cachedTileSourcesFrom?this._cachedTileSources:(this._cachedTileSourcesFrom=e,this._cachedTileSources=this._withTileDeviceSource(e),this._cachedTileSources)}_withTileDeviceSource(e){if(!D()||e.some(e=>e.id===`device`))return e;let t=this.config?.connectors?.coreSources;return t&&!t.includes(`device`)?e:[Rl,...e]}get _phase(){let e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return`empty`;if(e.isUploading)return`uploading`;let n=new Set([`complete`,`rejected`,`cancelled`,`failed`]);return t.every(e=>n.has(e.status))&&t.some(e=>e.status===`complete`||e.status===`failed`)?`complete`:`ready`}_processIncomingFiles(e){let t=this.config?.callbacks;this._phase===`complete`&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);let n=this.config?.preserveFolderStructure!==!1,r=0,i=!1,a=(e,t,n)=>`${e}\u0000${t}\u0000${n}`,o=new Set;for(let e of this._store.getState().files.values())e.status!==`rejected`&&e.status!==`cancelled`&&o.add(a(e.name,e.size,e.relativeFolder??``));for(let s of e){if(wl(s.name))continue;if(i){r++;continue}let e=n?Ic(Fc(s)):``,c=this._store.getState(),l=a(s.name,s.size,e);if(o.has(l))continue;let u=s.type||El(s.name),d=Al({name:s.name,size:s.size,type:u},c.restrictions,c.files);if(d){if(kl(d)){i=!0,r++;continue}let n=u.startsWith(`image/`)&&!Dl(u)?URL.createObjectURL(s):null,a={id:yl(),status:`rejected`,file:s,remoteUrl:null,name:s.name,size:s.size,type:u,previewUrl:n,duration:null,progress:0,speed:0,bytesUploaded:0,error:d.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Vu,relativeFolder:e};nt(this._store,a),this._dispatchPublic(B.FILE_REJECTED,{file:a,reason:d.message}),t?.onFileRejected?.(a,d.message);let o=this.config?.rejectedFileAutoRemoveDelay,c=o===!1||o===0||o===void 0?0:o;if(c>0){let e=a.id,t=setTimeout(()=>{this._rejectedTimers.delete(e);let t=this._store.getState().files.get(e);t&&t.status===`rejected`&&rt(this._store,e)},c);this._rejectedTimers.set(e,t)}continue}let f=null;u.startsWith(`image/`)&&!Dl(u)&&(f=URL.createObjectURL(s));let p={id:yl(),status:`idle`,file:s,remoteUrl:null,name:s.name,size:s.size,type:u,previewUrl:f,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Vu,relativeFolder:e};if(nt(this._store,p),o.add(l),this._dispatchPublic(B.FILE_ADDED,{file:p}),t?.onFileAdded?.(p),s.type.startsWith(`video/`)){Ol(s).then(e=>{if(!e)return;let t=this._store.getState(),n=t.files.get(p.id);if(n){let r=new Map(t.files);r.set(p.id,{...n,previewUrl:e}),this._store.setState({files:r})}else URL.revokeObjectURL(e)});let e=document.createElement(`video`);e.preload=`metadata`,e.src=URL.createObjectURL(s),e.onerror=()=>{URL.revokeObjectURL(e.src)},e.onloadedmetadata=()=>{let t=e.duration;if(URL.revokeObjectURL(e.src),!isFinite(t))return;let n=this._store.getState(),r=n.files.get(p.id);if(r){let e=new Map(n.files);e.set(p.id,{...r,duration:t}),this._store.setState({files:e})}}}}if(r>0){let e=this._storeCtrl.state.t,t=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(e(`tooManyFilesSkipped`,{count:r,max:t,defaultValue_one:`Skipped {{count}} file — limit is {{max}}`,defaultValue_other:`Skipped {{count}} files — limit is {{max}}`}),`warning`)}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}get _captureInput(){return this.shadowRoot?.querySelector(`input[data-sfx-capture]`)??null}_showEmptyFolderToast(){let e=this._storeCtrl.state.t;this._showToast(e(`emptyFolderDrop`,`The dropped folder is empty — no files were added`),`info`)}_showFolderDisabledToast(){let e=this._storeCtrl.state.t;this._showToast(e(`folderUploadDisabled`,`Folder upload is disabled`),`info`)}_removeFile(e){let t=this._store.getState().files.get(e);if(!t)return;let n={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){let e=this._videoBlobUrls.get(t.file);e&&(URL.revokeObjectURL(e),this._videoBlobUrls.delete(t.file))}(t.status===`uploading`||t.status===`queued`||t.status===`retrying`||t.status===`paused`)&&this._engine?.cancelFile(e),rt(this._store,e),this._engine?.recompute(),this._dimCache.delete(e);let r=this._rejectedTimers.get(e);if(r&&(clearTimeout(r),this._rejectedTimers.delete(e)),this._previewFileId===e){let e=[...this._store.getState().files.values()];this._previewFileId=e.length>0?e[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(B.FILE_REMOVED,{file:n}),this.config?.callbacks?.onFileRemoved?.(n)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>V(e)===`image`&&!Dl(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){let e=this.config?.auth?.container,t=this._authHeaders?.[`X-Filerobot-Key`];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){let t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){let n=new Map(this._similarResults);n.set(e,t),this._similarResults=n}_checkSimilarSingleFile(e){if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;let t=this._similarityAuth();if(!t){console.error(`[sfx-uploader] Similarity check requires resolved auth.`);return}let n=ol(this.config?.similarityCheck?.confidence),r=this.config?.similarityCheck?.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),dl(e,{...t,threshold:n,endpoint:r}).then(t=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,t)}).catch(t=>{console.error(`[sfx-uploader] Similarity check failed for`,e.name,t),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){if(this._clearSimilarRun(),!e.length)return;let t=this._similarityAuth();if(!t){console.error(`[sfx-uploader] Similarity check requires resolved auth.`);return}this._similarRunIds=e.map(e=>e.id);let n=ol(this.config?.similarityCheck?.confidence),r=this.config?.similarityCheck?.endpoint,i=new AbortController;this._similarAbort=i;let a=[...e],o=0,s=0,c=e.length,l=()=>{if(!i.signal.aborted){if(!this._previewFileId){let t=e.find(e=>(this._similarResults.get(e.id)?.length??0)>0);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab=`similar`)}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},u=()=>{if(!i.signal.aborted)for(;o<Ru&&a.length>0;){let e=a.shift();o+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),dl(e,{...t,threshold:n,endpoint:r,signal:i.signal}).then(t=>{i.signal.aborted||(this._similarMarkInactive(e.id),this._similarSetResults(e.id,t))}).catch(t=>{i.signal.aborted||(console.error(`[sfx-uploader] Similarity check failed for`,e.name,t),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[]))}).finally(()=>{i.signal.aborted||(--o,s+=1,s===c?l():u())})}};u()}_clearSimilarRun(){this._similarAbort?.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){let t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){let t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){let t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,`_blank`,`noopener,noreferrer`)}_simAssetName(e){let t=``;if(e.url){let n=e.url.split(`?`)[0].split(`/`).pop()||``;try{t=decodeURIComponent(n)}catch{t=n}}return t||e.uuid}_simAssetMeta(e){let t=this._simAssetName(e),n=t.lastIndexOf(`.`),r=n>0?t.slice(n+1).toUpperCase():``;return r&&r.length<=5?r:``}_soleLocatableFile(e){if(!this.config?.showLocateButton)return null;let t=e.filter(e=>e.status===`complete`&&!!e.response?.file?.uuid);return t.length===1?t[0]:null}_locateFile(e){if(!e)return;let t=Le(e,this.config??void 0),n=this.dispatchEvent(new CustomEvent(B.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),r=this.config?.callbacks?.onFileLocate?.(e,t);this._onMinimize(),!(!n||r===!1)&&t&&window.location.assign(t)}get _hasUnsavedUploadWork(){if(this._phase===`uploading`)return!0;if(this.config?.clearOnClose===!1)return!1;for(let e of this._store.getState().files.values())if(e.status===`idle`||e.status===`queued`)return!0;return!1}_confirmDismiss(){return this._hasUnsavedUploadWork?new Promise(e=>{this._confirmDismissResolve=e,this._confirmDismissVisible=!0}):Promise.resolve(!0)}render(){let e=this.config?.mode??`modal`,t=[...this._storeCtrl.state.files.values()],n=this._storeCtrl.state.t;return e===`modal`?a`
        ${this._isOpen&&!this._isMinimized?a`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${n}></sfx-toast>
                </div>
              </div>
            `:s}
        ${this._renderFsOverlay()}
      `:a`
      <div class="inline ${t.length===0?`no-files`:``}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast .t=${n}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return s;let e=this._storeCtrl.state.t,n=this._getFullscreenNavigableFiles(),r=n.findIndex(e=>e.id===this._previewFileId);return a`
      <div
        class="fs-overlay ${this._fsZoom>1?`zoomed`:``} ${this._fsDragging?`panning`:``}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile?a`<video
              class="fs-img"
              src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
              controls
              playsinline
              draggable="false"
              @click=${e=>e.stopPropagation()}
            ></video>`:a`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${x(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${e=>e.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=t._FS_ZOOM_LEVELS[t._FS_ZOOM_LEVELS.length-1]?e(`resetZoom`,`Reset zoom`):e(`zoomIn`,`Zoom in ({{zoom}}×)`,{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=t._FS_ZOOM_LEVELS[t._FS_ZOOM_LEVELS.length-1]?a`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`:a`<svg
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
        <button class="fs-btn" @click=${this._onFsClose} title=${e(`close`,`Close`)}>
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
        ?disabled=${r<=0}
        @click=${e=>{e.stopPropagation(),this._navigateFs(-1)}}
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
        ?disabled=${r>=n.length-1}
        @click=${e=>{e.stopPropagation(),this._navigateFs(1)}}
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
    `}_renderProgressHeaderActions(){let e=this._storeCtrl.state.t,t=this.config?.mode??`modal`,n=this.config?.header??(t!==`modal`||`close`),r=!!this.config?.minimizeOnUpload&&t!==`inline`,i=n===`close`;if(!r&&!i)return s;let o=t===`modal`?this._onModalDismiss:this._onInlineDismiss;return a`
      <div class="header-actions">
        ${r?a`<button
              class="header-btn"
              aria-label=${this._phase===`uploading`?e(`minimizeAndContinue`,`Minimize & continue in background`):e(`minimize`,`Minimize`)}
              title=${e(`minimize`,`Minimize`)}
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
            </button>`:s}
        ${i?a`<button
              class="header-btn"
              aria-label=${e(`close`,`Close`)}
              title=${e(`close`,`Close`)}
              @click=${o}
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
            </button>`:s}
      </div>
    `}_renderInlineHeader(e){return a`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?a`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:s}
          ${e.title?a`<h2 class="inline-header-title">${e.title}</h2>`:s}
        </div>
        ${e.description?a`<div class="inline-header-desc">${e.description}</div>`:s}
      </div>
    `}_renderHeader(){let e=this._storeCtrl.state.t,t=this.config?.mode??`modal`;if(this._phase===`uploading`){let t=this._storeCtrl.state,n=[...t.files.values()].filter(e=>e.status!==`rejected`&&e.status!==`cancelled`),r=n.length,i=n.filter(e=>e.status===`complete`).length,o=t.totalProgress??0;return a`
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
                ${e(`uploadingFiles`,{count:r,defaultValue_one:`Uploading {{count}} file`,defaultValue_other:`Uploading {{count}} files`})}
              </div>
              <div class="float-subtitle">
                ${e(`nOfNComplete`,`{{completed}} of {{total}} complete`,{completed:i,total:r})}${this._lastEta>0?` · ${e(`etaLeft`,`~{{eta}} left`,{eta:xl(this._lastEta)})}`:``}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(o)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e(`uploadProgress`,`Upload progress`)}
            >
              <div class="header-progress-fill" ${x({width:`${o}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase===`complete`){let e=[...this._storeCtrl.state.files.values()].filter(e=>e.status!==`rejected`&&e.status!==`cancelled`),t=this._batchOutcome(e,!0);return a`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon ${t.outcomeClass}">${t.outcomeIcon}</div>
            <div>
              <div class="float-title">${t.title}</div>
              <div class="float-subtitle">${t.doneSummary}</div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          ${t.segTotal>0?a`<div class="header-progress">
                <div class="header-overall-bar" aria-hidden="true">
                  ${t.newCount>0?a`<div
                        class="header-seg ok"
                        ${x({width:t.segPct(t.newCount)})}
                      ></div>`:s}
                  ${t.alreadyExistedCount>0?a`<div
                        class="header-seg dup"
                        ${x({width:t.segPct(t.alreadyExistedCount)})}
                      ></div>`:s}
                  ${t.failed>0?a`<div
                        class="header-seg fail"
                        ${x({width:t.segPct(t.failed)})}
                      ></div>`:s}
                </div>
              </div>`:s}
        </div>
      `}if(t===`inline`&&this.config?.inlineHeader)return s;let n=this.config?.header??(t!==`modal`||`close`);if(n===!1)return s;let r=t===`modal`?this._onModalDismiss:this._onInlineDismiss,i=n===`back`?a`<button
            class="header-btn header-btn-back"
            aria-label=${e(`backToAssetPicker`,`Back to Asset Picker`)}
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
          </button>`:s,o=this.config?.uploadSettings,c=o!==!1&&(o==null||o.enabled!==!1),l=o!==!1&&o!=null&&o.showResumableSwitcher===!0,u=[...this._storeCtrl.state.files.values()],d=u.some(e=>V(e)===`image`&&!Dl(e.type)),f=u.some(e=>V(e)===`pdf`),p=u.some(e=>V(e)===`vid`),m=c&&(d||f||p||l)?a`<button
            class="header-btn header-btn-settings ${this._showSettings?`on`:``}"
            aria-label=${e(`uploadSettings`,`Upload settings`)}
            title=${e(`uploadSettings`,`Upload settings`)}
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
          </button>`:s,h=this._metadataSchema?.regionalVariantsGroups?.length?a`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:s,g=n===`close`?a`<button
            class="header-btn header-btn-close"
            aria-label=${e(`close`,`Close`)}
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
          </button>`:s;return a`
      <div class="header">
        ${i}
        ${n===`back`?s:a` <div class="header-icon">
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
            </div>`}
        <div class="header-title">${e(`uploadFiles`,`Upload Files`)}</div>
        ${h} ${m} ${g}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{let n=new Image;n.onload=()=>{let r={w:n.naturalWidth,h:n.naturalHeight};this._dimCache.set(e.id,r),t(r)},n.onerror=()=>{this._dimCache.set(e.id,null),t(null)},n.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){let n=this._storeCtrl.state.t,r=e.filter(e=>e.status===`complete`).length,i=e.filter(e=>e.status===`failed`||e.status===`error`).length,o=e.filter(e=>e.status===`complete`&&e.alreadyExisted).length,s=Math.max(r-o,0),c=r>0&&i===0&&o>=r,l=t?i>0?`error`:o>0?`warn`:`done`:``,u=a`<svg
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
    </svg>`,d=a`<svg
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
    </svg>`,f=a`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>`,p=i>0?r>0?u:d:o>0?u:f,m=t?i>0?r>0?n(`partiallyUploaded`,`Partially uploaded`):n(`uploadFailed`,`Upload failed`):c?n(`alreadyInLibrary`,{count:o,defaultValue_one:`{{count}} file was already in your library`,defaultValue_other:`{{count}} files were already in your library`}):n(`uploadComplete`,`Upload complete`):n(`uploadingFiles`,{count:e.length,defaultValue_one:`Uploading {{count}} file`,defaultValue_other:`Uploading {{count}} files`}),h=[];s>0&&h.push(n(`nUploaded`,`{{count}} uploaded`,{count:s})),o>0&&h.push(n(`nAlreadyInLibrary`,`{{count}} already in library`,{count:o})),i>0&&h.push(n(`nFailed`,`{{count}} failed`,{count:i}));let g=h.length>0?h.join(` · `):n(`allDone`,`All done`),_=s+o+i;return{completed:r,failed:i,alreadyExistedCount:o,newCount:s,allAlreadyExisted:c,outcomeClass:l,outcomeIcon:p,title:m,doneSummary:g,segTotal:_,segPct:e=>_>0?`${e/_*100}%`:`0%`}}_renderFloatingPill(e){let t=this._storeCtrl.state,n=t.t,r=Math.round(t.totalProgress??0),i=this._phase===`complete`,{completed:o,failed:c,alreadyExistedCount:l,newCount:u,outcomeClass:d,outcomeIcon:f,title:p,doneSummary:m,segPct:h}=this._batchOutcome(e,i),g=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return a`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${i?a`<div class="float-collapsed-icon ${d}">${f}</div>`:a`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${p}</span>
            ${i?s:a`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${i&&g?a`<button
                  class="locate"
                  title=${n(`locate`,`Locate`)}
                  aria-label=${n(`locate`,`Locate`)}
                  @click=${()=>this._locateFile(g)}
                >
                  ${ze}
                </button>`:s}
            <button title=${n(`openUploader`,`Open uploader`)} @click=${this._onPillExpand}>
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
            <button title=${n(`expand`,`Expand`)} @click=${this._onPillClick}>
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
            <button title=${n(`close`,`Close`)} @click=${this._onPillDismiss}>
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
      `;let _=e.filter(e=>e.status===`failed`||e.status===`error`),v=e.filter(e=>e.status===`complete`&&e.alreadyExisted),y=e.filter(e=>e.status!==`failed`&&e.status!==`error`&&e.status!==`complete`),b=e.filter(e=>e.status===`complete`&&!e.alreadyExisted);return a`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${d}">
              ${i?f:a`<svg
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
              <div class="float-title">${p}</div>
              <div class="float-subtitle">
                ${i?m:`${n(`nOfNComplete`,`{{completed}} of {{total}} complete`,{completed:o,total:e.length})}${this._lastEta>0?` · ${n(`etaLeft`,`~{{eta}} left`,{eta:xl(this._lastEta)})}`:``}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${i&&g?a`<button
                  class="locate"
                  title=${n(`locate`,`Locate`)}
                  aria-label=${n(`locate`,`Locate`)}
                  @click=${()=>this._locateFile(g)}
                >
                  ${ze}
                </button>`:s}
            <button title=${n(`expand`,`Expand`)} @click=${this._onPillExpand}>
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
            <button title=${n(`collapse`,`Collapse`)} @click=${this._onPillClick}>
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
            <button title=${n(`close`,`Close`)} @click=${this._onPillDismiss}>
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
            <span class="float-progress-label">${n(`overallProgress`,`Overall progress`)}</span>
            ${i?s:a`<span class="float-progress-pct">${r}%</span>`}
          </div>
          ${i?a`<div class="float-bar segmented" role="img" aria-label=${m}>
                ${u>0?a`<div
                      class="float-bar-seg ok"
                      ${x({width:h(u)})}
                    ></div>`:s}
                ${l>0?a`<div
                      class="float-bar-seg dup"
                      ${x({width:h(l)})}
                    ></div>`:s}
                ${c>0?a`<div
                      class="float-bar-seg fail"
                      ${x({width:h(c)})}
                    ></div>`:s}
              </div>`:a`<div class="float-bar">
                <div class="float-bar-fill" ${x({width:`${r}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${Ie(_,e=>e.id,e=>this._renderFloatItem(e,n))}
          ${Ie(v,e=>e.id,e=>this._renderFloatItem(e,n))}
          ${Ie(y,e=>e.id,e=>this._renderFloatItem(e,n))}
          ${Ie(b,e=>e.id,e=>this._renderFloatItem(e,n))}
        </div>
      </div>
    `}_truncateTooltip(e,t=140){return e.length>t?`${e.slice(0,t).trimEnd()}…`:e}_renderFloatItem(e,t){let n=e.status===`failed`||e.status===`error`;return a`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${x(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":`cover`,"background-position":`center`}:null)}
        >
          ${e.previewUrl?s:a`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${bl(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status===`complete`?a`${this.config?.showLocateButton&&e.response?.file?.uuid?a`<button
                    class="float-item-act locate"
                    title=${t(`locate`,`Locate`)}
                    aria-label=${t(`locate`,`Locate`)}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${ze}
                  </button>`:s}
              ${e.alreadyExisted?a`<div class="float-item-tip">
                    <div
                      class="float-item-done warn"
                      aria-label=${t(`alreadyInYourLibrary`,`Already in your library`)}
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
                      >${this._truncateTooltip(t(`alreadyInYourLibrary`,`Already in your library`),80)}</span
                    >
                  </div>`:a`<div class="float-item-tip">
                    <div class="float-item-done" aria-label=${t(`uploaded`,`Uploaded`)}>
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
                      >${this._truncateTooltip(t(`uploaded`,`Uploaded`),80)}</span
                    >
                  </div>`}`:n?a`<button
                    class="float-item-retry"
                    title=${t(`retry`,`Retry`)}
                    aria-label=${t(`retry`,`Retry`)}
                    @click=${()=>{this._ensureEngine(),this._engine?.retryFile(e.id)}}
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
                      >${this._truncateTooltip(e.error||t(`uploadFailed`,`Upload failed`))}</span
                    >
                  </div>`:e.status===`paused`?a` <button
                      class="float-item-act paused"
                      title=${t(`resume`,`Resume`)}
                      aria-label=${t(`resumeUpload`,`Resume upload`)}
                      @click=${()=>this._engine?.resumeFile(e.id)}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                    <button
                      class="float-item-act del"
                      title=${t(`remove`,`Remove`)}
                      aria-label=${t(`removeFile`,`Remove file`)}
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
                    </button>`:a`
                    ${e.status===`uploading`&&e.isTus?a`<button
                          class="float-item-act"
                          title=${t(`pause`,`Pause`)}
                          aria-label=${t(`pauseUpload`,`Pause upload`)}
                          @click=${()=>this._engine?.pauseFile(e.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </button>`:s}
                    ${e.status===`uploading`||e.status===`queued`||e.status===`retrying`?a`<button
                          class="float-item-act del"
                          title=${t(`remove`,`Remove`)}
                          aria-label=${t(`removeFile`,`Remove file`)}
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
                        </button>`:s}
                    <div class="float-item-spinner"></div>
                  `}
        </div>
      </div>
    `}_renderAssetCount(e,t,n,r){let i=e.reduce((e,t)=>e+(t.size||0),0),o=n!==`uploading`&&n!==`complete`&&!r;return a`
      <div class="asset-count">
        <span class="asset-count-text"
          >${e.length} ${e.length===1?`file`:`files`} ·
          ${bl(i)}</span
        >
        ${o?a`
              <div class="asset-count-actions">
                <button
                  class="asset-count-btn"
                  type="button"
                  @click=${()=>this._onClearAll()}
                  aria-label=${t(`clear`,`Clear`)}
                  title=${t(`clear`,`Clear`)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${Be}</svg>
                </button>
                <button
                  class="asset-count-btn accent"
                  type="button"
                  @click=${this._onAddMore}
                  aria-label=${t(`addMore`,`Add more`)}
                  title=${t(`addMore`,`Add more`)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${Ve}</svg>
                </button>
              </div>
            `:s}
      </div>
    `}_renderPreviewLayout(e){if(e.length===0)return s;let t=this._storeCtrl.state.t,n=e,r=n.find(e=>e.id===this._previewFileId)??n[0],i=r.name.split(`.`).pop()?.toUpperCase()||``;new Date(r.addedAt).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),this._store.getState().targetFolder;let o=n.reduce((e,t)=>e+(t.size||0),0),c=!!this.config?.similarityCheck?.enabled&&this._phase===`ready`,l=c?n.filter(e=>V(e)===`image`&&!Dl(e.type)&&!this._similarResults.has(e.id)).map(e=>e.id):[],u=Math.min(l.length,Lu),d=u>0&&this._similarSelectedIds.size>=u,f=this._similarSelectedIds.size>=Lu,p=this._similarResults.get(r.id),h=p!==void 0,_=h?this._previewPanelTab:`details`;return a`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${x({flex:String(this._splitPct)})}>
          ${this.config?.mode===`inline`&&this.config?.inlineHeader?this._renderInlineHeader(this.config.inlineHeader):s}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${n.length} ${n.length===1?`asset`:`assets`} ·
              ${bl(o)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${n}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._tileSources}
            .accept=${jl(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${this.config?.showLocateButton??!1}
            .showCopyCdnButton=${this.config?.showCopyCdnButton??!1}
            .showCheckSimilar=${c}
            .selectMode=${c}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${d}
            .selectionFull=${f}
            .maxSelection=${Lu}
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
        <div class="preview-panel" ${x({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():a`
                <div class="preview-panel-header">
                  <button
                    class="preview-back-btn"
                    @click=${()=>{this._previewFileId=null}}
                    aria-label=${t(`backToFileList`,`Back to file list`)}
                    title=${t(`back`,`Back`)}
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
                    ${r.previewUrl||r.type.startsWith(`video/`)&&r.file?a`
                          <button
                            @click=${()=>{this._fullscreenPreviewUrl=r.previewUrl,this._fullscreenVideoFile=r.type.startsWith(`video/`)&&r.file?r.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
                            title=${t(`fullscreen`,`Fullscreen`)}
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
                        `:s}
                    <button
                      @click=${()=>{this._previewFileId=null}}
                      title=${t(`close`,`Close`)}
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
                ${h?a`
                      <div class="preview-tabs" role="tablist">
                        <button
                          class="preview-tab ${_===`details`?`active`:``}"
                          role="tab"
                          aria-selected=${_===`details`}
                          @click=${()=>{this._previewPanelTab=`details`}}
                        >
                          ${t(`details`,`Details`)}
                        </button>
                        <button
                          class="preview-tab ${_===`similar`?`active`:``}"
                          role="tab"
                          aria-selected=${_===`similar`}
                          @click=${()=>{this._previewPanelTab=`similar`}}
                        >
                          <span>${t(`similarTab`,`Similar`)}</span>${p&&p.length>0?a`<span class="preview-tab-count">${p.length}</span>`:s}
                        </button>
                      </div>
                    `:s}
                ${_===`similar`?this._renderSimilarPanel(r,p??[]):a`
                      <div class="preview-details-body">
                        ${r.type.startsWith(`video/`)&&r.file?a`
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
                                  ?disabled=${n.indexOf(r)===0}
                                  @click=${()=>this._navigatePreview(n,-1)}
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
                                  ?disabled=${n.indexOf(r)===n.length-1}
                                  @click=${()=>this._navigatePreview(n,1)}
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
                            `:r.previewUrl?a`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${r.previewUrl}
                                      alt=${r.name}
                                    />
                                    ${this._metadataSchema?.fieldsByKey.has(`system.focusPoint`)&&r.type.startsWith(`image/`)?a`<sfx-focus-point-overlay
                                          .picking=${this._focusPointPicking}
                                          .showMarker=${this._focusPointMarkerVisible}
                                          .value=${this._focusPointValueFor(r)}
                                          @focus-point-pick=${this._onFocusPointPick}
                                        ></sfx-focus-point-overlay>`:s}
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${n.indexOf(r)===0}
                                    @click=${()=>this._navigatePreview(n,-1)}
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
                                    ?disabled=${n.indexOf(r)===n.length-1}
                                    @click=${()=>this._navigatePreview(n,1)}
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
                              `:a`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${V(r)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${m(i)}
                                      alt="${i?t(`extFile`,`{{ext}} file`,{ext:i}):t(`file`,`File`)}"
                                      @error=${e=>{let t=e.target,n=g();!t.dataset.fallback&&t.src!==n&&(t.dataset.fallback=`1`,t.src=n)}}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${n.indexOf(r)===0}
                                    @click=${()=>this._navigatePreview(n,-1)}
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
                                    ?disabled=${n.indexOf(r)===n.length-1}
                                    @click=${()=>this._navigatePreview(n,1)}
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
                        ${this._metadataSchema&&this.config?.metadataConfig?a`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${i}${r.size?` \u00B7 ${bl(r.size)}`:``}${this._previewDims===`—`?``:` \u00B7 ${this._previewDims}`}
                              </div>
                            </div>`:s}
                        ${this._metadataSchema&&this.config?.metadataConfig?a`
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
                                  .meta=${this._previewMeta(r)}
                                  .focusPointPicking=${this._focusPointPicking}
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
                            `:a`
                              <div class="preview-file-info-panel">
                                <div
                                  class="preview-file-info-header ${this._fileInfoOpen?`open`:``}"
                                  @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                                >
                                  <span>${t(`fileInfo`,`File info`)}</span>
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
                                  class="preview-file-info-body ${this._fileInfoOpen?`open`:``}"
                                >
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">
                                      ${t(`fileName`,`File name`)}
                                    </div>
                                    <div class="preview-file-info-val">${r.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t(`type`,`Type`)}</div>
                                    <div class="preview-file-info-val">${i}</div>
                                  </div>
                                  ${r.size?a`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t(`size`,`Size`)}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${bl(r.size)}
                                          </div>
                                        </div>
                                      `:s}
                                  ${this._previewDims===`—`?s:a`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t(`dimensions`,`Dimensions`)}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${this._previewDims}
                                          </div>
                                        </div>
                                      `}
                                </div>
                              </div>
                            `}
                      </div>
                    `}
              `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){let n=this._storeCtrl.state.t;return t.length===0?a`
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
          <b>${n(`noSimilarFound`,`No similar assets found`)}</b>
          <span>${n(`noSimilarHint`,`This image looks unique in your library.`)}</span>
        </div>
      `:a`
      <div class="psim-body">
        ${t.map(e=>{let t=Math.round(e.score*100);return a`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${e.score>=.85?`high`:``}">${t}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(e.url)}
                  title=${n(`openInNewWindow`,`Open in new window`)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                ${e.url?a`<img src=${e.url} alt="" />`:s}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(e)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(e)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){let e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],n=t.some(e=>V(e)===`image`&&!Dl(e.type)),r=t.some(e=>V(e)===`pdf`),i=t.some(e=>V(e)===`vid`),o=this.config?.uploadSettings,c=!!o&&o.showResumableSwitcher===!0,l=t=>{switch(t){case`auto`:return e(`resolutionAuto`,`Auto`);case`mobile`:return e(`resolutionMobile`,`Mobile`);case`tablet`:return e(`resolutionTablet`,`Tablet`);case`desktop`:return e(`resolutionDesktop`,`Desktop`);case`hq`:return e(`resolutionHq`,`HQ`);case`sample`:return e(`resolutionSample`,`Sample`)}},u=t=>{if(t===`hls`)return e(`protocolHls`,`HLS`)},d=e=>t=>{let n=parseInt(t.target.value,10);e(Number.isFinite(n)?n:0)};return a`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name">${e(`uploadSettings`,`Upload settings`)}</span>
        <div class="preview-header-actions">
          <button
            @click=${()=>{this._showSettings=!1}}
            title=${e(`close`,`Close`)}
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
        ${n||r?a`
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
                ${e(`imageSettings`,`Image settings`)}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e(`resizeImages`,`Resize Images`)}</span>
                <span
                  class="info-i"
                  data-tip=${e(`resizeImagesInfo`,`Scale down large images to the maximum dimensions below before uploading.`)}
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
                  class="sw-toggle ${this._setResize?`on`:``}"
                  role="switch"
                  aria-checked=${this._setResize}
                  aria-label=${e(`resizeImages`,`Resize Images`)}
                  @click=${()=>{this._setResize=!this._setResize}}
                ></button>
              </div>
              <div class="sfields ${this._setResize?``:`dep-off`}">
                <div class="sfield">
                  <label>${e(`maxWidth`,`Max Width`)}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxW)}
                      @input=${d(e=>this._setMaxW=e)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
                <div class="sfield">
                  <label>${e(`maxHeight`,`Max Height`)}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxH)}
                      @input=${d(e=>this._setMaxH=e)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:s}
        ${i?a`
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
                ${e(`videoSettings`,`Video settings`)}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e(`transcodeVideo`,`Transcode video`)}</span>
                <span
                  class="info-i"
                  data-tip=${e(`transcodeVideoInfo`,`Re-encode videos into adaptive streaming formats for smoother playback.`)}
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
                  class="sw-toggle ${this._setTranscode?`on`:``}"
                  role="switch"
                  aria-checked=${this._setTranscode}
                  aria-label=${e(`transcodeVideo`,`Transcode video`)}
                  @click=${()=>{this._setTranscode=!this._setTranscode,this._setTranscode||(this._setResolutionOpen=!1)}}
                ></button>
              </div>
              <div
                class="sfield sfield-block ${this._setTranscode?``:`dep-off`} ${this._setResolutionOpen?`open`:``}"
              >
                <label>${e(`resolution`,`Resolution`)}</label>
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
                ${this._setResolutionOpen&&this._setTranscode?a`
                      <div class="smenu">
                        ${zu.map(e=>a`
                            <div
                              class="sopt ${e===this._setResolution?`cur`:``}"
                              @click=${()=>{this._setResolution=e,this._setResolutionOpen=!1}}
                            >
                              ${l(e)}
                              ${e===this._setResolution?a`<svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>`:s}
                            </div>
                          `)}
                      </div>
                    `:s}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?``:`dep-off`}">
                <label>${e(`protocols`,`Protocols`)}</label>
                ${Bu.map(e=>a`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=e}}
                    >
                      <span class="sradio ${this._setProtocol===e?`on`:``}"></span>
                      <span class="sradio-lbl">${u(e)}</span>
                    </div>
                  `)}
              </div>
            `:s}
        ${c?a`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${e(`resumeUploads`,`Resume uploads`)}</span>
                <span
                  class="info-i"
                  data-tip=${e(`resumeUploadsInfo`,`Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go`)}
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
                  data-tip=${e(`betaInfo`,`Beta functionality — you may experience performance issues in some cases`)}
                  >${e(`beta`,`Beta`)}</span
                >
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable?`on`:``}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${e(`resumeUploads`,`Resume uploads`)}
                  @click=${()=>{this._setResumable=!this._setResumable,this._engine?.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:s}
      </div>
    `}_navigatePreview(e,t){let n=e.findIndex(e=>e.id===this._previewFileId)+t;if(n>=0&&n<e.length){let t=this.shadowRoot?.querySelector(`.preview-image[controls]`);t&&(t.pause(),t.removeAttribute(`src`),t.load()),this._previewFileId=e[n].id}}_namingConventionGate(e,t){let{regex:n,broken:r}=t;return{hasViolation:!r&&!!n&&e.some(e=>!nl(e.name,n)),broken:r}}_computeNamingViolationIds(e,t,n){if(!t||!n)return this._namingViolationIdsKey!==``&&(this._namingViolationIdsKey=``,this._namingViolationIds=new Set),this._namingViolationIds;let r=e.filter(e=>!nl(e.name,n)).map(e=>e.id),i=r.join(`,`);return i!==this._namingViolationIdsKey&&(this._namingViolationIdsKey=i,this._namingViolationIds=new Set(r)),this._namingViolationIds}_renderNamingConventionBanner(e,t,n){if(!t&&!n)return s;let r=n?e(`filenameNamingConventionMisconfigured`,`Upload can't proceed: the file naming rule configured for this project is invalid. Contact your administrator.`):e(`filenameNamingConventionBlocked`,`Upload can't proceed as file(s) is/are not matching the naming convention enforced.`);return a`
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
        <span class="naming-banner-txt">${r}</span>
      </div>
    `}_renderBody(){let e=this._storeCtrl.state,n=e.t,r=[...e.files.values()],i=r.filter(e=>e.status===`idle`||e.status===`queued`||e.status===`error`||e.status===`failed`),{hasViolation:o,broken:c}=this._namingConventionGate(i,e.namingConvention),l=this._computeNamingViolationIds(i,o,e.namingConvention.regex),u=this._phase,d=jl(e.restrictions),f=r.length>0,p=u===`ready`?this._requiredFieldsRemaining:0,m=!!this.config?.similarityCheck?.enabled&&u===`ready`,h=m?r.filter(e=>V(e)===`image`&&!Dl(e.type)&&!this._similarResults.has(e.id)).map(e=>e.id):[],g=Math.min(h.length,Lu),_=g>0&&this._similarSelectedIds.size>=g,v=this._similarSelectedIds.size>=Lu;return a`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
        @folder-rejected=${this._onFolderRejected}
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
        ${D()?a`<input
              data-sfx-capture
              type="file"
              capture="environment"
              accept=${d||`image/*,video/*`}
              @change=${this._onCaptureChange}
            />`:s}
        <div
          class="body ${f?`has-files`:``} ${this._bodyDragOver?`body-drag-over`:``} ${this._previewFileId||this._showSettings?`has-preview`:``}"
          @dragenter=${f?this._onBodyDragEnter:s}
          @dragover=${f?this._onBodyDragOver:s}
          @dragleave=${f?this._onBodyDragLeave:s}
          @drop=${f?this._onBodyDrop:s}
        >
          ${this.config?.mode===`inline`&&this.config?.inlineHeader&&!this._previewFileId&&u!==`uploading`&&u!==`complete`&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):s}
          ${this._isReviewing?a`
                <sfx-last-upload-review
                  .t=${n}
                  .files=${this._reviewFiles}
                  .showLocateButton=${this.config?.showLocateButton??!1}
                  .showCopyCdnButton=${this.config?.showCopyCdnButton??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:a`
                ${f?s:a`<sfx-drop-zone
                        .t=${n}
                        .compact=${f}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${d}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${this.config?.sourcesLayout??`pills`}
                        .mode=${this.config?.mode??`modal`}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                        .allowFolderDrop=${this._folderDropAllowed}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?a`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${n(`viewLastUploadBatch`,`View last upload batch`)}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${n(`viewLastUpload`,`View last upload`)}
                          </button>`:s}`}
                ${f?this._previewFileId||this._showSettings?this._renderPreviewLayout(r):a`
                        ${u===`ready`?this._renderNamingConventionBanner(n,o,c):s}
                        ${this._renderAssetCount(r,n,u,m&&this._similarSelectedIds.size>0)}
                        <sfx-file-list
                          .t=${n}
                          .files=${r}
                          .store=${this._store}
                          .showDropTile=${u!==`uploading`&&u!==`complete`}
                          .sources=${this._tileSources}
                          .accept=${d}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${this.config?.showLocateButton??!1}
                          .showCopyCdnButton=${this.config?.showCopyCdnButton??!1}
                          .showCheckSimilar=${m}
                          .selectMode=${m}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${_}
                          .selectionFull=${v}
                          .maxSelection=${Lu}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .namingViolationIds=${l}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:s}
              `}
        </div>

        ${f?a`
              <sfx-actions-bar
                .t=${n}
                .uploadState=${u===`uploading`?`uploading`:u===`complete`?`done`:`idle`}
                .fileCount=${u===`uploading`||u===`complete`?r.filter(e=>e.status!==`rejected`&&e.status!==`cancelled`).length:i.length}
                .failedCount=${r.filter(e=>e.status===`failed`||e.status===`error`).length}
                .blocked=${u===`ready`&&(o||c)}
                .showFillMetadata=${!!(this.config?.showFillMetadata??this.config?.metadataConfig)&&p===0}
                .requireMetadataFirst=${u===`ready`&&this._hasMetadataIssues}
                .requiredFieldsTotal=${u===`ready`?this._requiredFieldsTotal:0}
                .requiredFieldsRemaining=${p}
                .showCheckSimilar=${!1}
                .selectMode=${m&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${g}
                .allSelected=${_}
              ></sfx-actions-bar>
            `:s}
        ${this._showUrlDialog?a`<sfx-url-dialog .t=${n}></sfx-url-dialog>`:s}
        ${this._showCameraDialog?a`<sfx-camera-dialog .t=${n}></sfx-camera-dialog>`:s}
        ${this._showScreenCastDialog?a`<sfx-screen-cast-dialog .t=${n}></sfx-screen-cast-dialog>`:s}
        ${this._confirmDismissVisible?a`
              <div class="up-confirm-overlay" @click=${this._onConfirmDismissCancel}>
                <div
                  class="up-confirm"
                  role="alertdialog"
                  aria-modal="true"
                  aria-labelledby="up-confirm-msg"
                  @click=${e=>e.stopPropagation()}
                >
                  <p class="up-confirm-text" id="up-confirm-msg">
                    ${this._phase===`uploading`?n(`discardActiveUpload`,`Upload in progress. Cancel it and close?`):n(`discardQueuedFiles`,`You haven't uploaded these files yet. Discard them?`)}
                  </p>
                  <div class="up-confirm-actions">
                    <button class="btn-ghost" @click=${this._onConfirmDismissCancel}>
                      ${n(`cancel`,`Cancel`)}
                    </button>
                    <button class="btn-primary" @click=${this._onConfirmDismissOk}>
                      ${n(`discard`,`Discard`)}
                    </button>
                  </div>
                </div>
              </div>
            `:s}
        ${this._activeConnector&&this.config?.connectors?a`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${this._activeConnector===`google-drive`&&this.config.connectors.googlePicker?a`
                        <sfx-google-picker-view
                          .t=${n}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:Iu.has(this._activeConnector)?a`
                          <sfx-search-provider-browser
                            .t=${n}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:a`
                          <sfx-provider-browser
                            .t=${n}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-provider-browser>
                        `}
                </div>
              </div>
            `:s}
        ${this._bulkMetadataOpen&&this._metadataSchema?a`
              <sfx-bulk-metadata-modal
                .schema=${this._bulkMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(e=>t._MODIFIABLE_STATUSES.has(e.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                .primaryAction=${this._bulkMetadataHadIssuesOnOpen?`upload`:`save`}
                .operationMode=${`set-only`}
                .exitAction=${`back`}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @tags-save-batch=${this._onBulkTagsSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:s}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith(`video/`)&&e.file).reverse()}_navigateFs(e){let t=this._getFullscreenNavigableFiles(),n=t.findIndex(e=>e.id===this._previewFileId);if(n===-1)return;let r=n+e;if(r>=0&&r<t.length){let e=t[r];this._fullscreenPreviewUrl=e.previewUrl,this._fullscreenVideoFile=e.type.startsWith(`video/`)&&e.file?e.file:null,this._previewFileId=e.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(let e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}};u([i({attribute:!1})],Q.prototype,`config`,void 0),u([c()],Q.prototype,`_isOpen`,void 0),u([c()],Q.prototype,`_activeConnector`,void 0),u([c()],Q.prototype,`_showUrlDialog`,void 0),u([c()],Q.prototype,`_showCameraDialog`,void 0),u([c()],Q.prototype,`_showScreenCastDialog`,void 0),u([c()],Q.prototype,`_confirmDismissVisible`,void 0),u([c()],Q.prototype,`_similarSelectMode`,void 0),u([c()],Q.prototype,`_similarSelectedIds`,void 0),u([c()],Q.prototype,`_similarRunIds`,void 0),u([c()],Q.prototype,`_similarActiveIds`,void 0),u([c()],Q.prototype,`_similarResults`,void 0),u([c()],Q.prototype,`_previewPanelTab`,void 0),u([c()],Q.prototype,`_previewFileId`,void 0),u([c()],Q.prototype,`_previewDims`,void 0),u([c()],Q.prototype,`_focusPointPicking`,void 0),u([c()],Q.prototype,`_focusPointDraft`,void 0),u([c()],Q.prototype,`_focusPointFieldHovered`,void 0),u([c()],Q.prototype,`_focusPointFieldFocused`,void 0),u([c()],Q.prototype,`_fileInfoOpen`,void 0),u([c()],Q.prototype,`_splitPct`,void 0),u([c()],Q.prototype,`_showSettings`,void 0),u([c()],Q.prototype,`_setResize`,void 0),u([c()],Q.prototype,`_setMaxW`,void 0),u([c()],Q.prototype,`_setMaxH`,void 0),u([c()],Q.prototype,`_setTranscode`,void 0),u([c()],Q.prototype,`_setResolution`,void 0),u([c()],Q.prototype,`_setResolutionOpen`,void 0),u([c()],Q.prototype,`_setProtocol`,void 0),u([c()],Q.prototype,`_setResumable`,void 0),u([c()],Q.prototype,`_fullscreenPreviewUrl`,void 0),u([c()],Q.prototype,`_fullscreenVideoFile`,void 0),u([c()],Q.prototype,`_fsZoom`,void 0),u([c()],Q.prototype,`_bodyDragOver`,void 0),u([c()],Q.prototype,`_isMinimized`,void 0),u([c()],Q.prototype,`_isPillExpanded`,void 0),u([c()],Q.prototype,`_metadataSchema`,void 0),u([c()],Q.prototype,`_metadataTranslations`,void 0),u([c()],Q.prototype,`_metadataDependencies`,void 0),u([c()],Q.prototype,`_regionalFilters`,void 0),u([c()],Q.prototype,`_bulkMetadataOpen`,void 0),u([c()],Q.prototype,`_bulkMetadataInitialFieldKey`,void 0),u([c()],Q.prototype,`_bulkMetadataHadIssuesOnOpen`,void 0),u([c()],Q.prototype,`_isReviewing`,void 0),u([c()],Q.prototype,`_reviewFiles`,void 0),u([c()],Q.prototype,`_hasStoredReview`,void 0);var Uu=`img.preview-image`,Wu=class extends e{constructor(...e){super(...e),this.picking=!1,this.showMarker=!0,this.value=null,this._position=null,this._dragging=!1,this._resizeObserver=null,this._observedImg=null,this._dragPointerId=null,this._updatePosition=()=>{this._setPosition(this._measurePosition())},this._onPointerDown=e=>{e.button!==0||this._dragging||(e.preventDefault(),this._dragging=!0,this._dragPointerId=e.pointerId,e.currentTarget.setPointerCapture(e.pointerId),this._pickAt(e.clientX,e.clientY))},this._onPointerMove=e=>{!this._dragging||e.pointerId!==this._dragPointerId||this._pickAt(e.clientX,e.clientY)},this._onPointerUp=e=>{e.pointerId===this._dragPointerId&&this._endDrag()}}static{this.styles=r`
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
  `}get _img(){return this.parentElement?.querySelector(Uu)??null}_paintedRect(){let e=this._img;if(!e||!e.naturalWidth||!e.naturalHeight)return null;let t=e.getBoundingClientRect(),n=this.getBoundingClientRect();if(!t.width||!t.height)return null;let r=e.naturalWidth/e.naturalHeight,i=t.width/t.height,a=r>i?t.width:t.height*r,o=r>i?t.width/r:t.height;return{left:t.left-n.left+(t.width-a)/2,top:t.top-n.top+(t.height-o)/2,width:a,height:o}}_measurePosition(){let e=yn(this.value?.horizontal),t=yn(this.value?.vertical);if(e===null||t===null)return null;let n=this._paintedRect();return n?{left:n.left+e/100*n.width,top:n.top+t/100*n.height}:null}_setPosition(e){let t=this._position;t!==e&&(t&&e&&t.left===e.left&&t.top===e.top||(this._position=e))}_pickAt(e,t){let n=this._paintedRect();if(!n)return;let r=this.getBoundingClientRect(),i=e-r.left,a=t-r.top,o=e=>Math.max(0,Math.min(100,e)),s=o(Math.round((i-n.left)/n.width*100)),c=o(Math.round((a-n.top)/n.height*100));this.dispatchEvent(new CustomEvent(`focus-point-pick`,{detail:{horizontal:s,vertical:c},bubbles:!0,composed:!0}))}_endDrag(){this._dragging=!1,this._dragPointerId=null}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,this._updatePosition),this._syncObservers()}firstUpdated(){this._syncObservers(),this._updatePosition()}updated(e){super.updated(e),(e.has(`value`)||this.showMarker&&e.get(`showMarker`)===!1)&&(this._syncObservers(),this._updatePosition())}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._observedImg?.removeEventListener(`load`,this._updatePosition),this._observedImg=null,window.removeEventListener(`resize`,this._updatePosition),this._endDrag()}_syncObservers(){typeof ResizeObserver<`u`&&!this._resizeObserver&&this.parentElement&&(this._resizeObserver=new ResizeObserver(this._updatePosition),this._resizeObserver.observe(this.parentElement));let e=this._img;e!==this._observedImg&&(this._observedImg?.removeEventListener(`load`,this._updatePosition),this._observedImg=e,e?.addEventListener(`load`,this._updatePosition))}render(){let e=this._position;return a`
      ${this.picking?a`<div
            class="capture ${this._dragging?`dragging`:``}"
            role="presentation"
            @pointerdown=${this._onPointerDown}
            @pointermove=${this._onPointerMove}
            @pointerup=${this._onPointerUp}
            @pointercancel=${this._onPointerUp}
            @lostpointercapture=${this._onPointerUp}
          ></div>`:s}
      ${e&&this.showMarker?a`
            <div class="guide guide-v" ${x({left:`${e.left}px`})}></div>
            <div class="guide guide-h" ${x({top:`${e.top}px`})}></div>
            <div
              class="crosshair"
              ${x({left:`${e.left}px`,top:`${e.top}px`})}
              role="img"
              aria-label="Focus point"
            >
              ${Pr(2.5)}
            </div>
          `:s}
    `}};u([i({type:Boolean})],Wu.prototype,`picking`,void 0),u([i({type:Boolean})],Wu.prototype,`showMarker`,void 0),u([i({attribute:!1})],Wu.prototype,`value`,void 0),u([c()],Wu.prototype,`_position`,void 0),u([c()],Wu.prototype,`_dragging`,void 0);var $=(e,t)=>{typeof customElements<`u`&&!customElements.get(e)&&customElements.define(e,t)};$(`sfx-uploader`,Q),$(`sfx-drop-zone`,J),$(`sfx-import-divider`,Tu),$(`sfx-source-pills`,zl),$(`sfx-file-list`,Y),$(`sfx-file-item`,X),$(`sfx-actions-bar`,Z),$(`sfx-url-dialog`,Mu),$(`sfx-camera-dialog`,Nu),$(`sfx-screen-cast-dialog`,Pu),$(`sfx-focus-point-overlay`,Wu);export{Ln as $,Cr as A,Dt as At,tr as B,kr as C,en as Ct,jr as D,$t as Dt,Ar as E,rn as Et,mr as F,mt as Ft,Qn as G,fr as H,lr as I,ht as It,Yn as J,Kn as K,sr as L,pt as Lt,_r as M,ut as Mt,hr as N,dt as Nt,Nr as O,It as Ot,pr as P,gt as Pt,Rn as Q,cr as R,lt as Rt,Dr as S,cn as St,Mr as T,nn as Tt,ir as U,nr as V,A as W,Jn as X,Zn as Y,qn as Z,M as _,yn as _t,Qi as a,Pn as at,Fr as b,pn as bt,Ki as c,En as ct,qr as d,Sn as dt,Gn as et,Kr as f,jn as ft,Hr as g,bn as gt,Gr as h,xn as ht,ea as i,Nn as it,Sr as j,Tt as jt,Tr as k,Et as kt,Yr as l,Mn as lt,Ur as m,Tn as mt,na as n,Un as nt,$i as o,In as ot,Wr as p,On as pt,Xn as q,Xi as r,Hn as rt,Gi as s,Dn as st,ia as t,Vn as tt,Jr as u,kn as ut,Lr as v,vn as vt,Or as w,tn as wt,Pr as x,fn as xt,j as y,_n as yt,er as z,he as zt};