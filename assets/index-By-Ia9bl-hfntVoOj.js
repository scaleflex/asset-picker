import{i as ti,t as vt,f as I,a,A as m,c as y,n as h,r as v,w as S,e as ii,E as si,_ as oi}from"./index-BZ9dNCUM.js";import{r as ri,a as N,z as oe,A as Q,j as st,b as ni,q as li,t as ai,B as di,c as xt,M as Ke,d as Ue,L as He,e as p,f as _t,g as ot,Q as ci,D as ui,I as bt,X as Oe,h as hi,i as pi,k as fi,l as gi,m as mi,n as vi}from"./define-CMPy5nMe.js";import{o as To,p as Ao,s as Io,w as Oo}from"./define-CMPy5nMe.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(i,e)=>{var s;const t=i._$AN;if(t===void 0)return!1;for(const o of t)(s=o._$AO)==null||s.call(o,e,!1),pe(o,e);return!0},Te=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},yt=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),bi(e)}};function xi(i){this._$AN!==void 0?(Te(this),this._$AM=i,yt(this)):this._$AM=i}function _i(i,e=!1,t=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let r=t;r<s.length;r++)pe(s[r],!1),Te(s[r]);else s!=null&&(pe(s,!1),Te(s));else pe(this,i)}const bi=i=>{i.type==vt.CHILD&&(i._$AP??(i._$AP=_i),i._$AQ??(i._$AQ=xi))};class yi extends ti{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),yt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,o;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(o=this.disconnected)==null||o.call(this)),t&&(pe(this,e),Te(this))}setValue(e){if(ri(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}function wt(i,e,t=!1){const s=(e==null?void 0:e.language)??"en",o=i.model??[],r=i.store??{},n=o.find(g=>g.applies_to==="FILES");let l=(n==null?void 0:n.groups)??[];if(Array.isArray(e==null?void 0:e.fields)){const g=new Set(e.fields);l=l.map(x=>({...x,fields:x.fields.filter(b=>g.has(b.ckey))})).filter(x=>x.fields.length>0)}l=l.map(g=>({...g,fields:g.fields.filter(x=>!x.hide)})).filter(g=>g.fields.length>0);const d=l.flatMap(g=>g.fields),c=new Map(d.map(g=>[g.key,g])),u=typeof r.force_filling_metadata_on_upload=="boolean"?r.force_filling_metadata_on_upload:void 0,f=r.regional_variants_groups??[];return{groups:l,fields:d,fieldsByKey:c,forceFillingOnUpload:u,regionalVariantsGroups:f,language:s,productsEnabled:t}}const Ge="https://hub.scaleflex.com/api",kt="The Hub API uses session-based auth (not the Filerobot SASS key); pass metadataConfig.hubHeaders with x-company-token, x-project-token and x-session-token. If the session token arrives asynchronously, assign a new config object once it is available — in-place mutation is not detected.",wi=i=>i.replace(/\/+$/,"");function Je(i){return!i||wi(i)===Ge}function Ye(i){const e=i==null?void 0:i.hubHeaders;return e&&Object.keys(e).length>0?e:void 0}function $t(i){return Object.keys(i).some(e=>e.toLowerCase()==="x-session-token")}function Ws(i){return Ye(i)?!0:!Je(i==null?void 0:i.hubApiBase)}const fe=new Map,re=new Map;function Qs(i){return fe.has(i)}async function Xs(i,e,t,s){if(s!=null&&s.rawMetadata)return wt(s.rawMetadata,s,s.productsEnabled===!0);const o=fe.get(t);if(o)return o;const r=re.get(t);if(r)return r;const n=ki(e,t,s);re.set(t,n);try{const l=await n;return fe.set(t,l),l}finally{re.delete(t)}}async function ki(i,e,t){var s,o,r,n,l;const d=(t==null?void 0:t.hubApiBase)??Ge,c=`${d}/project/${encodeURIComponent(e)}`,u=Ye(t)??i;if(Je(d)&&!$t(u))throw new Error(`Cannot fetch the metadata schema: no Hub session headers. ${kt}`);const f=await fetch(c,{headers:u});if(!f.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${f.status})`);const g=await f.json(),x=((o=(s=g.data)==null?void 0:s.project)==null?void 0:o.data)??((r=g.project)==null?void 0:r.data);if(!(x!=null&&x.metadata))throw new Error("No metadata in project response");const b=(t==null?void 0:t.productsEnabled)??((l=(n=x==null?void 0:x.airstore)==null?void 0:n.ui)==null?void 0:l.products_enabled)===!0;return wt(x.metadata,t,b)}function Zs(i){var e;i?(fe.delete(i),(e=re.get(i))==null||e.catch(()=>{}),re.delete(i)):(fe.clear(),re.clear())}const $i=new Set(["image","video","audio","document","archive","design_template"]);function Si(i){if(!i||Array.isArray(i))return[];const e=i.format_mimetypes;return Array.isArray(e)?e.filter(t=>$i.has(t)):[]}function Ci(i){const e={type:i.dep_action_type,targetCkey:i.dep_action_target_metadata_or_group_sys_key,targetFieldType:i.dep_action_target_metadata_field_type_key};return i.dep_action_type==="allow_values"&&(e.allowedValues=i.dep_action_target_field_allowed_values_sys_keys??[]),i.dep_action_type==="set_values"&&(e.setValues=i.dep_action_target_field_set_values_sys_keys??i.dep_action_target_field_allowed_set_sys_keys??[]),e}function Ei(i){const e=i.dep_metadata_trigger_values_sys_keys??i.dep_metadata_trigger_values??[];return{uuid:i.dep_uuid,name:i.dep_name,description:i.dep_description,active:i.dep_active,formatMimetypes:Si(i.dep_scope),triggerCkey:i.dep_metadata_trigger_sys_key,triggerFieldType:i.dep_metadata_trigger_field_type_key,triggerCondition:i.dep_metadata_trigger_condition_key,triggerValues:e,actions:(i.dep_actions??[]).map(Ci)}}function Ti(i){if(!i)return[];const e=Array.isArray(i)?i:i.dependencies;return Array.isArray(e)?e.filter(t=>t==null?void 0:t.dep_active).map(Ei):[]}function Ai(i,e,t){if(i.length===0||t.length===0)return new Map;const s=i.map(n=>xt({mime:n.mime,meta:n.meta},e,t)),o=new Map,r=new Set;for(const n of s)for(const l of n.keys())r.add(l);for(const n of r){const l=s.map(_=>_.get(n)),d=l.every(_=>(_==null?void 0:_.hidden)===!0),c=l.some(_=>(_==null?void 0:_.shown)===!0),u=l.some(_=>(_==null?void 0:_.required)===!0);let f;if(l.every(_=>Array.isArray(_==null?void 0:_.allowedValues))){let _;for(const q of l){const H=q.allowedValues;if(_=_===void 0?[...H]:_.filter(ei=>H.includes(ei)),_.length===0)break}f=_}let g;const x=l.map(_=>_==null?void 0:_.setValue).filter(_=>_!==void 0);x.length===i.length&&Ii(x)&&(g=x[0]);const b=new Set;for(const _ of l)if(_)for(const q of _.contributingDependencyUuids)b.add(q);const $={hidden:d,required:u,contributingDependencyUuids:[...b]};c&&($.shown=!0),f!==void 0&&($.allowedValues=f),g!==void 0&&($.setValue=g),o.set(n,$)}return o}function Ii(i){if(i.length<=1)return!0;const e=i[0];if(typeof e=="string")return i.every(s=>s===e);const t=new Set(e);return i.every(s=>{if(!Array.isArray(s)||s.length!==e.length)return!1;for(const o of s)if(!t.has(o))return!1;return!0})}const ge=new Map,ne=new Map;function eo(i){return ge.has(i)}async function to(i,e,t){const s=ge.get(i);if(s)return s;const o=ne.get(i);if(o)return o;const r=Oi(e,t);ne.set(i,r);try{const n=await r;return ge.set(i,n),n}finally{ne.delete(i)}}async function Oi(i,e){const t=(e==null?void 0:e.hubApiBase)??Ge,s=`${t}/metadata/dependencies`,o=Ye(e)??i;if(Je(t)&&!$t(o))throw new Error(`Cannot fetch metadata dependencies: no Hub session headers. ${kt}`);const r=await fetch(s,{headers:o});if(!r.ok)throw new Error(`Failed to fetch metadata dependencies (HTTP ${r.status})`);const n=await r.json();return Ti(n)}function io(i){var e;i?(ge.delete(i),(e=ne.get(i))==null||e.catch(()=>{}),ne.delete(i)):(ge.clear(),ne.clear())}const Fi=300,rt=2,zi=50,nt="regvar:api",Ri="#ut",Li={CREATE_ONLY:"create_only",UPSERT:"upsert"},Di=i=>typeof i=="string"&&i.startsWith(Ri),Ee=i=>`~${i.toUpperCase()}`,Mi=(i,e)=>{if(!(!i||!e))return i[e]??i[Ee(e)]},Ae=(i,e,t)=>{var s,o,r;const n=(s=i.i18n)==null?void 0:s[e];if(n)return{value:n,isFallback:!1,sourceLang:e};const l=(o=i.i18n)==null?void 0:o[Ee(e)];if(l)return{value:l,isFallback:!0,sourceLang:Ee(e)};const d=Mi(i.i18n,t);if(d){const c=(r=i.i18n)!=null&&r[t]?t:Ee(t);return{value:d,isFallback:!0,sourceLang:c}}return{value:"",isFallback:!1,sourceLang:null}},lt=i=>(typeof i=="string"?i:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),Bi=i=>{const e={},t={};for(const s of i||[])s.sid&&(e[s.sid]=s),s.slug&&(t[s.slug]=s);return{bySid:e,bySlug:t}},Ie=i=>{const e=[],t=new Map,s=r=>r.sid||r.slug||"",o=(r,n)=>{if(typeof r=="string"){if(!r||t.has(r))return;t.set(r,e.length),e.push({slug:r});return}if(!r||typeof r!="object")return;const l=r,d=s(l);if(!d)return;const c=t.get(d),u=c!==void 0?{...e[c]}:{};l.slug&&(u.slug=l.slug),l.sid&&(u.sid=l.sid),l.uuid&&(u.uuid=l.uuid);const f={...u.i18n,...l.i18n||{}};n&&l.label&&(f[n]=l.label),Object.keys(f).length>0&&(u.i18n=f),c!==void 0?e[c]=u:(t.set(d,e.length),l.slug&&l.slug!==d&&t.set(l.slug,e.length),e.push(u))};if(Array.isArray(i))for(const r of i)o(r);else if(i&&typeof i=="object"){const r=i;for(const[n,l]of Object.entries(r))if(Array.isArray(l))for(const d of l)o(d,n)}return e},ke=i=>typeof i=="string"?[i]:!i||typeof i!="object"?[]:[i.sid,i.slug,i.uuid].filter(Boolean),qe=(i,e,t)=>{if(t){const r=new Set(e.flatMap(ke));return i.filter(n=>!ke(n).some(l=>r.has(l)))}const s=new Set(i.flatMap(ke)),o=e.filter(r=>!ke(r).some(n=>s.has(n)));return[...i,...o]},Vi=(i,e)=>i.map(t=>{const s=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return s?{slug:t.slug||s.slug,sid:t.sid||s.sid,uuid:t.uuid||s.uuid,i18n:{...s.i18n||{},...t.i18n||{}}}:t});function St(i,e,t){let s=e;switch(i.regional_variants_group_uuid&&s!=null&&typeof s=="object"&&!Array.isArray(s)&&(s=s[t??"en"]),i.type){case"geopoint":return qi(s);case"boolean":return s===!0?"true":s===!1?"false":"null";case"date":return s?new Date(s):null;case"decimal2":return s!=null?String(s):"";case"tags":return Array.isArray(s)?s.map(o=>typeof o=="string"?{value:o,label:o}:o):[];case"ultratags":return Ie(e);case"multi-select":return s||[];default:return s??""}}function We(i,e,t,s){var o;let r;switch(i.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?r=null:r=`(${n.latitude},${n.longitude})`;break}case"boolean":e==="true"?r=!0:e==="false"?r=!1:r=null;break;case"date":{if(!e)r=null;else{const n=e instanceof Date?e:new Date(e),l=n.getFullYear(),d=String(n.getMonth()+1).padStart(2,"0"),c=String(n.getDate()).padStart(2,"0");r=`${l}-${d}-${c}`}break}case"tags":r=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":r=Array.isArray(e)?e.map(n=>typeof n=="string"?n:n.slug).filter(n=>!!n):[];break;case"select-one":r=e===""?null:e;break;case"numeric":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?n:null;break}default:r=e}if(i.regional_variants_group_uuid&&i.type!=="ultratags"){const n=s??"en";return{...((o=t==null?void 0:t.meta)==null?void 0:o[i.key])??{},[n]:r}}return r}function qi(i){if(typeof i=="string"){const e=/\(([^)]+)\)/.exec(i);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function so(i,e){const t=i.replace(/\/$/,"");let s=null,o=null,r=!1;return{search(n,l,d){if(s&&clearTimeout(s),o&&o.abort(),r=!1,!l.trim()){d([]);return}s=setTimeout(async()=>{var c;o=new AbortController;try{const u=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(l.trim())}&meta_key=_${encodeURIComponent(n)}&limit=20`,f=await fetch(u,{headers:e,signal:o.signal});if(r)return;if(!f.ok){d([]);return}const g=await f.json();if(r)return;const x=((c=g.data)==null?void 0:c.tags)??g.tags??[];d(x.map(b=>({sid:b.sid||void 0,value:b.tag||b.value||b.label||"",label:b.tag||b.label||b.value||""})))}catch{r||d([])}},200)},cancel(){r=!0,s&&clearTimeout(s),o&&o.abort()}}}const at={base_node:null,nodes:[]};function oo(i,e){const t=i.replace(/\/$/,"");let s=null,o=null,r=!1,n=null,l=null;return{fetchTaxonomies(){return l||(l=(async()=>{var d;const c=`${t}/v5/taxonomies`;try{const u=await fetch(c,{headers:e});if(!u.ok)return console.warn(`[sfx-uploader] /v5/taxonomies returned ${u.status}`),[];const f=await u.json(),g=(f==null?void 0:f.taxonomies)??((d=f==null?void 0:f.data)==null?void 0:d.taxonomies)??(f==null?void 0:f.data)??f;return Array.isArray(g)?g:(console.warn("[sfx-uploader] /v5/taxonomies returned unexpected shape",f),[])}catch(u){return console.warn("[sfx-uploader] /v5/taxonomies request failed",u),[]}})(),l.then(d=>{d.length===0&&(l=null)},()=>{l=null}),l)},async fetchNodes(d,c="",u=10){n&&n.abort(),n=new AbortController;try{const f=new URLSearchParams;c&&f.set("base",c),f.set("limit",String(u));const g=`${t}/v5/taxonomy/${encodeURIComponent(d)}/nodes?${f.toString()}`,x=await fetch(g,{headers:e,signal:n.signal});if(!x.ok)return at;const b=await x.json(),$=(b==null?void 0:b.data)??b;return{base_node:($==null?void 0:$.base_node)??null,nodes:Array.isArray($==null?void 0:$.nodes)?$.nodes:[]}}catch{return at}},autocomplete(d,c,u){if(s&&clearTimeout(s),o&&o.abort(),r=!1,!c.trim()){u([]);return}s=setTimeout(async()=>{var f;o=new AbortController;try{const g=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(c.trim())}&meta_key=_${encodeURIComponent(d)}`,x=await fetch(g,{headers:e,signal:o.signal});if(r)return;if(!x.ok){u([]);return}const b=await x.json();if(r)return;const $=((f=b==null?void 0:b.data)==null?void 0:f.tags)??(b==null?void 0:b.tags)??[];u($.map(_=>({tag:String(_.tag??_.path??""),path:String(_.path??_.tag??""),suid:String(_.suid??""),uuid:String(_.uuid??""),approx_count:typeof _.approx_count=="number"?_.approx_count:void 0})))}catch{r||u([])}},200)},cancel(){r=!0,s&&clearTimeout(s),o&&o.abort(),n&&n.abort()}}}const Qe="/v5/meta/ultratags",Pi=(i,e)=>{const t=new URLSearchParams;e.meta&&t.set("meta",e.meta),e.q&&t.set("q",e.q),e.sort&&t.set("sort",e.sort),typeof e.limit=="number"&&t.set("limit",String(e.limit)),e.after&&t.set("after",e.after),e.format&&t.set("format",e.format),e.lang&&t.set("lang",e.lang);const s=t.toString();return`${i}${Qe}${s?`?${s}`:""}`},ji=(i,e)=>{const t=new URLSearchParams;e.format&&t.set("format",e.format),e.lang&&t.set("lang",e.lang);const s=t.toString();return`${i}${Qe}${s?`?${s}`:""}`};function ro(i,e){let t=null,s=null;const o=()=>{t&&(clearTimeout(t),t=null),s&&(s.abort(),s=null)};return{list(r){return o(),new Promise((n,l)=>{t=setTimeout(async()=>{t=null,s=new AbortController;try{const d=Pi(i,r),c=await fetch(d,{method:"GET",headers:e,signal:s.signal});if(!c.ok){l(new Error(`ultratags list failed: HTTP ${c.status}`));return}const u=await c.json();n(u)}catch(d){l(d)}},Fi)})},async getBySids(r){if(!r.sids||r.sids.length===0)return{items:[],stats:{count:0,total_count:0}};const n=ji(i,r),l=await fetch(n,{method:"QUERY",headers:{...e,"Content-Type":"application/json"},body:JSON.stringify({ultratags_sids:r.sids})});if(!l.ok)throw new Error(`ultratags getBySids failed: HTTP ${l.status}`);return await l.json()},async create(r){const n=`${i}${Qe}`,l=await fetch(n,{method:"POST",headers:{...e,"Content-Type":"application/json"},body:JSON.stringify(r)});if(!l.ok)throw new Error(`ultratags create failed: HTTP ${l.status}`);return await l.json()},cancel(){o()}}}function no(i,e){const t=i.replace(/\/+$/,""),s=new Map,o=new Map;async function r(l){try{const d=await fetch(l,{headers:e});return d.ok?await d.json():(console.warn(`[sfx-uploader] ${l} returned ${d.status}`),null)}catch(d){return console.warn(`[sfx-uploader] ${l} request failed`,d),null}}async function n(l){const d=encodeURIComponent(l),[c,u]=await Promise.all([r(`${t}/v5/meta/model/fields/i18n?lang=${d}&format=object`),r(`${t}/v5/meta/model/fields/options/i18n?lang=${d}&format=object`)]),f={fields:(c==null?void 0:c.fields)??{},options:(u==null?void 0:u.options)??{}};return c!==null&&u!==null&&s.set(l,f),f}return{getTranslations(l){const d=s.get(l);if(d)return Promise.resolve(d);const c=o.get(l);if(c)return c;const u=n(l).finally(()=>o.delete(l));return o.set(l,u),u},peek(l){return s.get(l)}}}function Xe(i){return i.show===!1}var Ni=Object.defineProperty,O=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Ni(e,t,o),o};const Ki=a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7" cy="7" r="4.5"/><line x1="13.5" y1="13.5" x2="10.5" y2="10.5"/>
</svg>`,Ui=a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
</svg>`,Hi=a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 6 8 2 12 6"/><polyline points="4 10 8 14 12 10"/>
</svg>`,Gi=a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 3 8 7 12 3"/><polyline points="4 9 8 13 12 9"/>
</svg>`,Ct=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const s of e)t.delete(s);else for(const s of e)t.add(s);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const s of this.schema.fields)s.key in this.meta&&(e[s.ckey]=this.meta[s.key]);const t=ci(e,this.resolvedSchema);return new Map(t.map(s=>[s.ckey,s]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var s;const o=this.resolvedSchema;if(o&&e.ckey&&(s=o.get(e.ckey))!=null&&s.hidden)return[];let r=o?e.fields.filter(n=>!Ue(n,e,o)):e.fields;return Xe(e)&&(r=r.filter(n=>Ke(n,this.config??void 0,o)||He(n,e,o))),t&&!e.name.toLowerCase().includes(t)&&(r=r.filter(n=>n.title.toLowerCase().includes(t))),r}_renderFilter(e,t,s){if(this.hideFilter)return m;if(!this.schema||this.schema.fields.length===0)return m;const o=this._filterQuery,r=this._isAllCollapsed(t),n=r?p("expandAll","Expand all"):p("collapseAll","Collapse all");return a`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${Ki}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${p("searchFields","Search fields...")}
            .value=${o}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${p("searchMetadataFields","Search metadata fields")}
          />
          ${o?a`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${p("clearSearch","Clear search")}
                aria-label=${p("clearSearch","Clear search")}
                type="button"
              >${Ui}</button>`:m}
        </div>
        ${e?a`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${s}
              title=${s?p("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${r?p("expandAllGroups","Expand all groups"):p("collapseAllGroups","Collapse all groups")}
              type="button"
            >${r?Gi:Hi}</button>`:m}
      </div>
    `}_renderGroup(e,t,s,o,r){const n=r?!0:!this._collapsed.has(e.uuid);return a`
      <div class="group">
        <button class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${n}>
          <span>${e.name}</span>
          <svg class="chevron ${n?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${n?a`
              <div class="group-content">
                ${t.map(l=>{var d,c,u;return a`
                    <sfx-metadata-field
                      .field=${l}
                      .value=${this.meta[l.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((d=this.taxonodes)==null?void 0:d[l.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${((c=this.schema)==null?void 0:c.regionalVariantsGroups)??[]}
                      .resolvedState=${((u=this.resolvedSchema)==null?void 0:u.get(l.ckey))??null}
                      .conflict=${s.get(l.ckey)??null}
                      .dependencyNames=${o}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:m}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return a`<div class="empty" role="status" aria-live="polite">${p("noMetadataFieldsConfigured","No metadata fields configured")}</div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),s=this._filterQuery.trim(),o=s.toLowerCase(),r=o!=="",n=[];for(const u of this.schema.groups){const f=this._visibleFieldsFor(u,o);f.length!==0&&n.push({group:u,fields:f})}const l=n.map(u=>u.group.uuid),d=this.schema.groups.length>1&&(r||n.length>0),c=this._renderFilter(d,l,r);if(n.length===0){const u=r?p("noFieldsMatch",'No fields match "{{query}}"',{query:s}):p("allMetadataFieldsHidden","All metadata fields are currently hidden");return a`
        ${c}
        <div class="empty" role="status" aria-live="polite">${u}</div>
      `}return a`
      ${c}
      ${n.map(({group:u,fields:f})=>this._renderGroup(u,f,e,t,r))}
    `}};Ct.styles=y`
    :host { display: block; }

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
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
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
      transition: background 0.15s ease, color 0.15s ease;
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
      transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
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
  `;let E=Ct;O([h({attribute:!1})],E.prototype,"schema");O([h({attribute:!1})],E.prototype,"meta");O([h({attribute:!1})],E.prototype,"config");O([h({attribute:!1})],E.prototype,"autocomplete");O([h({attribute:!1})],E.prototype,"taxonomyService");O([h({attribute:!1})],E.prototype,"ultratags");O([h({attribute:!1})],E.prototype,"defaultLanguage");O([h({attribute:!1})],E.prototype,"taxonodes");O([h({attribute:!1})],E.prototype,"resolvedSchema");O([h({attribute:!1})],E.prototype,"dependencies");O([h({type:Boolean})],E.prototype,"disabled");O([h({type:Boolean,attribute:"hide-filter"})],E.prototype,"hideFilter");O([v()],E.prototype,"_collapsed");O([v()],E.prototype,"_filterQuery");customElements.define("sfx-metadata-form",E);const me=y`
  input, textarea, select {
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
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input::placeholder, textarea::placeholder {
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    font-size: 14px;
    color: var(--sfx-up-text-muted, #94a3b8);
    opacity: 1;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
  }
  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,ve=y`
  :host { display: block; position: relative; }

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
    transition: color 0.15s, background 0.15s;
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
  .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
  .option.selected {
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .empty {
    padding: 8px 10px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
`,Ze=y`
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
  .chip-x:hover { color: var(--sfx-up-error, #dc2626); }
`;y`
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
    transition: background 0.15s ease, color 0.15s ease;
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
  .panel-footer .spacer { flex: 1; }

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
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;const Ji=y`
  :host { display: block; }

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
`;var Yi=Object.defineProperty,T=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Yi(e,t,o),o};const Et=class extends I{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:ui(this.field,this.config??void 0)}_conflictTooltip(){var e,t;const s=this.conflict;if(!s)return"";const o=d=>{var c,u,f;return((f=(u=(c=this.field)==null?void 0:c.possible_values)==null?void 0:u.find(g=>g.internal_unique_value===d))==null?void 0:f.label)??d},r=(e=this.resolvedState)==null?void 0:e.allowedValues,n=(t=this.resolvedState)==null?void 0:t.setValue;let l;if(s.kind==="allow_values"&&r?l=`Current value is no longer allowed. Allowed: ${r.map(o).join(", ")}`:s.kind==="set_values"&&n!==void 0?l=`Value should be: ${(Array.isArray(n)?n:[n]).map(o).join(", ")}`:l="Value conflicts with a dependency rule",s.dependencyUuids.length>0&&this.dependencyNames.size>0){const d=s.dependencyUuids.map(c=>this.dependencyNames.get(c)).filter(c=>!!c);if(d.length>0){const c=d.length===1?"dependency":"dependencies";l+=`
Controlled by ${c}: ${d.join(", ")}`}}return l}_onFieldBlur(e){const{key:t,value:s}=e.detail,o=bt(this.field,s,this.config??void 0);if(o){this._error=o;return}this._error=null;const r={meta:{[this.field.key]:this.value}},n=Q(this.field,this.config),l=We(this.field,s,r,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:l},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){var s,o;const r=this.disabled;if(Oe(e))return a`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const n=((s=this.resolvedState)==null?void 0:s.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-text-field>`;case"textarea":return a`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-textarea-field>`;case"select-one":return a`<sfx-meta-select-field .field=${e} .value=${t} .allowedValues=${n} ?disabled=${r}></sfx-meta-select-field>`;case"multi-select":return a`<sfx-meta-multi-select-field .field=${e} .value=${t} .allowedValues=${n} ?disabled=${r}></sfx-meta-multi-select-field>`;case"tags":return a`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${r}></sfx-meta-tags-field>`;case"ultratags":return a`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${(o=this.config)==null?void 0:o.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${r}></sfx-meta-ultratags-field>`;case"taxonomy-node":return a`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${r}></sfx-meta-taxonomy-node-field>`;case"boolean":return a`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return a`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-number-field>`;case"date":return a`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-date-field>`;case"geopoint":return a`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-geo-point-field>`;default:return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${r}></sfx-meta-text-field>`}}render(){var e,t;const s=this.field;if(!s)return m;const o=Q(s,this.config),r=St(s,this.value,o),n=hi(s,this.regionalVariantsGroups,(e=this.config)==null?void 0:e.regionalFilters,(t=this.config)==null?void 0:t.language),l=s.type==="textarea"?"field-row field-row--top":"field-row",d=this.conflict?this._conflictTooltip():"";return a`
      <div class=${l} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${s.key}">
          <span class="field-label-text">${s.title}</span>
          ${this._isRequired?a`<span class="field-required" aria-hidden="true">*</span>`:m}
          ${this.conflict?a`<span class="field-conflict" role="img" aria-label=${d} title=${d}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 2 L14 13 L2 13 Z"/>
                  <line x1="8" y1="6.5" x2="8" y2="9.5"/>
                  <circle cx="8" cy="11.25" r="0.4" fill="currentColor"/>
                </svg>
              </span>`:m}
        </div>
        <div class="field-content">
          ${this._renderField(s,r)}
          ${n?a`<div class="field-regional-hint" title=${n}>${n}</div>`:m}
          ${this._error?a`<div class="field-error" id="error-${s.key}" role="alert">${this._error}</div>`:m}
        </div>
      </div>
    `}};Et.styles=[Ji];let C=Et;T([h({attribute:!1})],C.prototype,"field");T([h({attribute:!1})],C.prototype,"value");T([h({attribute:!1})],C.prototype,"config");T([h({attribute:!1})],C.prototype,"autocomplete");T([h({attribute:!1})],C.prototype,"taxonomyService");T([h({attribute:!1})],C.prototype,"taxonomyEntry");T([h({attribute:!1})],C.prototype,"ultratags");T([h({attribute:!1})],C.prototype,"defaultLanguage");T([h({attribute:!1})],C.prototype,"ultratagsRestrictToItems");T([h({attribute:!1})],C.prototype,"regionalVariantsGroups");T([h({attribute:!1})],C.prototype,"resolvedState");T([h({attribute:!1})],C.prototype,"conflict");T([h({attribute:!1})],C.prototype,"dependencyNames");T([h({type:Boolean})],C.prototype,"disabled");T([v()],C.prototype,"_error");customElements.define("sfx-metadata-field",C);var Wi=Object.defineProperty,et=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Wi(e,t,o),o};class F extends I{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new N(this)}_selectPlaceholder(e){var t;const s=((t=this.field)==null?void 0:t.title)??"";return s?p("selectFieldPlaceholder","Select {{field}}",{field:s.toLowerCase()}):e??p("selectAnOption","Select an option")}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}et([h({attribute:!1})],F.prototype,"field");et([h({attribute:!1})],F.prototype,"value");et([h({type:Boolean})],F.prototype,"disabled");const Tt=class extends F{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var e,t;const s=((e=this.field)==null?void 0:e.title)??"",o=s?`Enter ${s.toLowerCase()}`:"";return a`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((t=this.field)==null?void 0:t.placeholder)||o}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Tt.styles=[me];let Qi=Tt;customElements.define("sfx-meta-text-field",Qi);const At=class extends F{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var e,t;const s=((e=this.field)==null?void 0:e.title)??"",o=s?`Enter ${s.toLowerCase()}`:"";return a`
      <textarea
        .value=${this.value??""}
        placeholder=${((t=this.field)==null?void 0:t.placeholder)||o}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};At.styles=[me,y`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Xi=At;customElements.define("sfx-meta-textarea-field",Xi);function xe(i,e,t,s){var o=arguments.length,r=o<3?e:s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(n=i[l])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fe extends Event{constructor(e){super(Fe.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Fe.eventName="rangeChanged";class ze extends Event{constructor(e){super(ze.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}ze.eventName="visibilityChanged";class Re extends Event{constructor(){super(Re.eventName,{bubbles:!1})}}Re.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zi{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class es extends Zi{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const s=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(s)}scrollBy(e,t){const s=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,s=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=s):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:s}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,s){return this._scrollTo(e,t,s),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:s,left:o}=this._destination;s=Math.min(s||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const r=Math.abs(s-e),n=Math.abs(o-t);r<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dt=typeof window<"u"?window.ResizeObserver:void 0;const Pe=Symbol("virtualizerRef"),$e="virtualizer-sizer";let ct;class ts{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new dt(()=>this._hostElementSizeChanged()),this._childrenRO=new dt(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[Pe]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=os(this._hostElement,e),this._scrollerController=new es(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,s,o;this._scrollEventListeners.forEach(r=>r.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(s=this._hostElementRO)==null||s.disconnect(),this._hostElementRO=null,(o=this._childrenRO)==null||o.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${$e}]`);t||(t=document.createElement("div"),t.setAttribute($e,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute($e,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||ct;if(typeof t=="function"&&this._layout instanceof t){const s={...e};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(e){let t,s;if(typeof e.type=="function"){s=e.type;const o={...e};delete o.type,t=o}else t=e;s===void 0&&(ct=s=(await oi(async()=>{const{FlowLayout:o}=await import("./flow-D-0MTYCm-Dt6vzxJr.js");return{FlowLayout:o}},[])).FlowLayout),this._layout=new s(o=>this._handleLayoutMessage(o),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:s}}return null}_measureChildren(){const e={},t=this._children,s=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){const r=t[o],n=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[n]=s.call(this,r,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:s}=e.getBoundingClientRect();return Object.assign({width:t,height:s},is(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Re)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute($e)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var e;const t=this._hostElement,s=(e=this._scrollerController)==null?void 0:e.element,o=this._layout;if(t&&s&&o){let r,n,l,d;const c=t.getBoundingClientRect();r=0,n=0,l=window.innerHeight,d=window.innerWidth;const u=this._clippingAncestors.map(H=>H.getBoundingClientRect());u.unshift(c);for(const H of u)r=Math.max(r,H.top),n=Math.max(n,H.left),l=Math.min(l,H.bottom),d=Math.min(d,H.right);const f=s.getBoundingClientRect(),g={left:c.left-f.left,top:c.top-f.top},x={width:s.scrollWidth,height:s.scrollHeight},b=r-c.top+t.scrollTop,$=n-c.left+t.scrollLeft,_=Math.max(0,l-r),q=Math.max(0,d-n);o.viewportSize={width:q,height:_},o.viewportScroll={top:b,left:$},o.totalScrollSize=x,o.offsetWithinScroller=g}}_sizeHostElement(e){const t=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${s}px)`;else{const o=this._hostElement.style;o.minWidth=t?`${t}px`:"100%",o.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:s,width:o,height:r,xOffset:n,yOffset:l},d)=>{const c=this._children[d-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${s}px, ${t}px)`,o!==void 0&&(c.style.width=o+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=n===void 0?null:n+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(e){const{_first:t,_last:s,_firstVisible:o,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:s,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-s,left:t-o})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(s={})=>this._scrollElementIntoView({...s,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:s}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&e!=null&&e.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Fe({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new ze({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const s of e)this._toBeMeasured.set(s.target,s.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function is(i){const e=window.getComputedStyle(i);return{marginTop:Se(e.marginTop),marginRight:Se(e.marginRight),marginBottom:Se(e.marginBottom),marginLeft:Se(e.marginLeft)}}function Se(i){const e=i?parseFloat(i):NaN;return Number.isNaN(e)?0:e}function ut(i){if(i.assignedSlot!==null)return i.assignedSlot;if(i.parentElement!==null)return i.parentElement;const e=i.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function ss(i,e=!1){const t=[];let s=e?i:ut(i);for(;s!==null;)t.push(s),s=ut(s);return t}function os(i,e=!1){let t=!1;return ss(i,e).filter(s=>{if(t)return!1;const o=getComputedStyle(s);return t=o.position==="fixed",o.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=i=>i,Ot=(i,e)=>a`${e}: ${JSON.stringify(i,null,2)}`;class rs extends yi{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,s)=>Ot(t,s+this._first),this._keyFunction=(t,s)=>It(t,s+this._first),this._items=[],e.type!==vt.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)t.push(this._items[s]);return vi(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const s=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),s?si:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:s}=e;t&&(this._renderItem=(o,r)=>t(o,r+this._first)),s&&(this._keyFunction=(o,r)=>s(o,r+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:o,items:r}=t;this._virtualizer=new ts({hostElement:e,layout:s,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){const s=e.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(s,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const ns=ii(rs);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le extends I{constructor(){super(...arguments),this.items=[],this.renderItem=Ot,this.keyFunction=It,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:s,layout:o,scroller:r}=this;return a`${ns({items:e,renderItem:t,keyFunction:s,layout:o,scroller:r})}`}element(e){var t;return(t=this[Pe])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[Pe])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var s;(s=this.element(e))==null||s.scrollIntoView({block:t})}}xe([h({attribute:!1})],le.prototype,"items",void 0);xe([h()],le.prototype,"renderItem",void 0);xe([h()],le.prototype,"keyFunction",void 0);xe([h({attribute:!1})],le.prototype,"layout",void 0);xe([h({reflect:!0,type:Boolean})],le.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",le);const Ft=50;function zt(i,e){var t;const s=i.querySelector("lit-virtualizer");if(s){e>=0&&Promise.resolve(s.layoutComplete).then(()=>s.scrollToIndex(e,"nearest")).catch(()=>{});return}(t=i.querySelector(".option.active"))==null||t.scrollIntoView({block:"nearest"})}var ls=Object.defineProperty,Le=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&ls(e,t,o),o},ee;const _e=(ee=class extends F{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(i,e)=>a`
    <div class="option ${i.value===this.value?"selected":""} ${e===this._activeIndex?"active":""}"
      role="option" aria-selected=${i.value===this.value}
      @mousedown=${t=>{t.preventDefault(),this._onSelect(i)}}
      @mouseenter=${()=>{this._activeIndex=e}}>
      ${i.label}
    </div>`}get _options(){var i,e;const t=((i=this.field)==null?void 0:i.possible_values)??ee._EMPTY;if(((e=this._optionsCache)==null?void 0:e.src)===t)return this._optionsCache.out;const s=t.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:t,out:s},s}get _selectableOptions(){var i;const e=this._options,t=this.allowedValues;if(((i=this._selectableCache)==null?void 0:i.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let s;if(t===null)s=e;else{const o=new Set(t);s=e.filter(r=>o.has(r.value))}return this._selectableCache={opts:e,allowed:t,out:s},s}get _filtered(){const i=this._search.toLowerCase();return i?this._selectableOptions.filter(e=>e.label.toLowerCase().includes(i)):this._selectableOptions}get _selectedLabel(){var i;return((i=this._options.find(e=>e.value===this.value))==null?void 0:i.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const i=this._filtered.findIndex(e=>e.value===this.value);this._activeIndex=i>=0?i:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus(),this._scrollActive()})}_closeAndSubmit(i=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),i&&this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".trigger"))==null||e.focus()})}_onOutsideClick(i){i.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(i,e=!1){this._emit("field-change",i.value),this.value=i.value,this._closeAndSubmit(e)}_clear(i){i.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>zt(this.renderRoot,this._activeIndex))}_onSearchInput(i){this._search=i.target.value,this._activeIndex=0}_onKeydown(i){var e;if(i.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(e=this.renderRoot.querySelector(".trigger"))==null||e.focus();return}if(!this._open){(i.key==="ArrowDown"||i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(i.key){case"ArrowDown":i.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":i.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":i.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":i.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(i.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(i){return i.length?i.length<=Ft?i.map(this._renderOption):a`
      <lit-virtualizer
        role="presentation"
        .items=${i}
        .renderItem=${(e,t)=>this._renderOption(e,t)}
      ></lit-virtualizer>`:a`<div class="empty">${p("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:ee._EMPTY;return a`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?a`<span class="trigger-value">${this._selectedLabel}</span>`:a`<span class="placeholder">${((i=this.field)==null?void 0:i.placeholder)||e}</span>`}
        ${this._selectedLabel&&!this.disabled?a`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${p("clear","Clear")}
            @click=${this._clear}
            @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._clear(s))}}>&times;</span>
        `:m}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?a`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder=${p("search","Search")}
            aria-label=${p("filterOptions","Filter options")}
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
        </div>
      `:m}
    `}},ee.styles=[ve,y`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],ee._EMPTY=[],ee);Le([h({attribute:!1})],_e.prototype,"allowedValues");Le([v()],_e.prototype,"_open");Le([v()],_e.prototype,"_search");Le([v()],_e.prototype,"_activeIndex");let as=_e;customElements.define("sfx-meta-select-field",as);var ds=Object.defineProperty,De=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&ds(e,t,o),o},te;const be=(te=class extends F{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(i,e)=>{const t=this._selected;return a`
      <div class="option ${e===this._activeIndex?"active":""}" role="option" aria-selected=${t.includes(i.value)}
        @mousedown=${s=>{s.preventDefault(),this._toggle(i)}}
        @mouseenter=${()=>{this._activeIndex=e}}>
        <span class="check ${t.includes(i.value)?"checked":""}">
          ${t.includes(i.value)?"✓":""}
        </span>
        ${i.label}
      </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,e;const t=((i=this.field)==null?void 0:i.possible_values)??te._EMPTY;if(((e=this._optionsCache)==null?void 0:e.src)===t)return this._optionsCache.out;const s=t.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:t,out:s},s}get _selectableOptions(){var i;const e=this._options,t=this.allowedValues;if(((i=this._selectableCache)==null?void 0:i.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let s;if(t===null)s=e;else{const o=new Set(t);s=e.filter(r=>o.has(r.value))}return this._selectableCache={opts:e,allowed:t,out:s},s}get _filtered(){const i=this._search.toLowerCase();return i?this._selectableOptions.filter(e=>e.label.toLowerCase().includes(i)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(i){i.composedPath().includes(this)||this._closeAndSubmit()}_toggle(i){const e=this._selected,t=e.includes(i.value)?e.filter(s=>s!==i.value):[...e,i.value];this.value=t,this._emit("field-change",t)}_remove(i){const e=this._selected.filter(t=>t!==i);this.value=e,this._emit("field-change",e)}_selectAll(){const i=this._selectableOptions.map(e=>e.value);this.value=i,this._emit("field-change",i)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then(()=>zt(this.renderRoot,this._activeIndex))}_onSearchInput(i){this._search=i.target.value,this._activeIndex=-1}_onKeydown(i){var e;if(i.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(e=this.renderRoot.querySelector(".trigger"))==null||e.focus();return}if(!this._open){(i.key==="ArrowDown"||i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this._openDropdown());return}if(i.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(i.key){case"ArrowDown":i.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":i.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":i.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":i.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(i.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(i.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(i){var e;return((e=this._options.find(t=>t.value===i))==null?void 0:e.label)??i}_renderOptions(i){return i.length?i.length<=Ft?i.map(this._renderOption):a`
      <lit-virtualizer
        role="presentation"
        .items=${i}
        .renderItem=${(e,t)=>this._renderOption(e,t)}
      ></lit-virtualizer>`:a`<div class="empty">${p("noOptions","No options")}</div>`}render(){var i;const e=this._selected,t=this._selectPlaceholder(),s=this._open?this._filtered:te._EMPTY;return a`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length?e.map(o=>a`
              <span class="chip">
                ${this._labelFor(o)}
                <button class="chip-x" aria-label=${p("removeItem","Remove {{item}}",{item:this._labelFor(o)})} @click=${r=>{r.stopPropagation(),this._remove(o)}}>&times;</button>
              </span>`):a`<span class="placeholder">${((i=this.field)==null?void 0:i.placeholder)||t}</span>`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open?a`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder=${p("search","Search")}
            aria-label=${p("filterOptions","Filter options")}
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list" role="presentation">${this._renderOptions(s)}</div>
          ${this._options.length>0?a`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${o=>{o.preventDefault(),this._selectAll()}}>${p("selectAll","Select all")}</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${o=>{o.preventDefault(),this._clearAll()}}>${p("clearAll","Clear all")}</button>
            </div>
          `:m}
        </div>
      `:m}
    `}},te.styles=[ve,Ze,y`
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
      .option { display: flex; align-items: center; gap: 8px; }
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
    `],te._EMPTY=[],te);De([h({attribute:!1})],be.prototype,"allowedValues");De([v()],be.prototype,"_open");De([v()],be.prototype,"_search");De([v()],be.prototype,"_activeIndex");let cs=be;customElements.define("sfx-meta-multi-select-field",cs);function Y(i,e){var t,s;return((t=i.label)==null?void 0:t.trim().toLowerCase())===((s=e.label)==null?void 0:s.trim().toLowerCase())}function Rt(i){return i.trim().replace(/\s+/g," ")}function us(i){return Rt(i).replace(/\s/g,"-")}function Ce(i){return{label:Rt(i),value:us(i)}}var hs=Object.defineProperty,ae=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&hs(e,t,o),o};const Lt=class extends F{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var t,s,o;const r=e.target.value;if(this._query=r,this._dropdownOpen=!0,this._activeIndex=-1,!r.trim()||!((t=this.field)!=null&&t.ckey)){this._results=[],this._loading=!1,(s=this.autocomplete)==null||s.cancel();return}this._loading=!0,(o=this.autocomplete)==null||o.search(this.field.ckey,r,n=>{this._results=n,this._loading=!1})}_addTag(e){if(this._tags.some(s=>Y(s,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".input"))==null||s.focus()})}_removeTag(e){const t=this._tags.filter(s=>!Y(s,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const s=this._suggestions;this._activeIndex>=0&&this._activeIndex<s.length?this._addTag(s[this._activeIndex]):this._activeIndex===s.length&&this._canCreate?this._addTag(Ce(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(Ce(this._query)):this._activeIndex===-1&&s.length&&this._addTag(s[0]);break}}}get _suggestions(){var e;const t=this._query.toLowerCase().trim(),s=this._tags,o=(((e=this.field)==null?void 0:e.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!s.some(l=>Y(l,n))).filter(n=>!t||n.label.toLowerCase().includes(t)),r=this._results.filter(n=>!s.some(l=>Y(l,n))&&!o.some(l=>Y(l,n)));return[...o,...r]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=Ce(e);return!this._tags.some(s=>Y(s,t))&&!this._suggestions.some(s=>Y(s,t))}render(){var e,t;const s=this._tags,o=this._suggestions,r=o.length;return a`
      <div class="container" @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}>
        ${s.map(n=>a`
          <span class="chip">
            ${n.label}
            <button class="chip-x" aria-label=${p("removeItem","Remove {{item}}",{item:n.label})} @click=${l=>{l.stopPropagation(),this._removeTag(n)}}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((e=this.field)==null?void 0:e.title)??p("tags","Tags")}
          placeholder=${s.length?"":((t=this.field)==null?void 0:t.placeholder)||p("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||o.length)?a`
        <div class="dropdown" role="listbox">
          ${this._loading?a`<div class="loading">${p("loading","Loading")}</div>`:m}
          ${o.map((n,l)=>a`
            <div class="option ${l===this._activeIndex?"active":""}" role="option"
              @mousedown=${d=>{d.preventDefault(),this._addTag(n)}}
              @mouseenter=${()=>{this._activeIndex=l}}>
              ${n.label}
            </div>`)}
          ${this._canCreate?a`
            <div class="option create ${r===this._activeIndex?"active":""}"
              @mousedown=${n=>{n.preventDefault(),this._addTag(Ce(this._query))}}
              @mouseenter=${()=>{this._activeIndex=r}}>
              ${p("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
            </div>`:m}
          ${!this._loading&&!o.length&&!this._canCreate?a`<div class="empty">${p("noResults","No results")}</div>`:m}
        </div>
      `:m}
    `}};Lt.styles=[Ze,y`
      :host { display: block; position: relative; }

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
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }

      .loading, .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let X=Lt;ae([h({attribute:!1})],X.prototype,"autocomplete");ae([v()],X.prototype,"_query");ae([v()],X.prototype,"_results");ae([v()],X.prototype,"_loading");ae([v()],X.prototype,"_dropdownOpen");ae([v()],X.prototype,"_activeIndex");customElements.define("sfx-meta-tags-field",X);var ps=Object.defineProperty,Dt=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&ps(e,t,o),o};const W=()=>[{label:p("booleanTrue","True"),value:"true"},{label:p("booleanFalse","False"),value:"false"}],Mt=class extends F{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var e;if(this.value==null)return"";const t=String(this.value);return((e=W().find(s=>s.value===t))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(W().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,W().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=W().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<W().length&&(e.preventDefault(),this._onSelect(W()[this._activeIndex],!0));break}}render(){var e;const t=this.value==null?"":String(this.value),s=this._selectPlaceholder();return a`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?a`<span class="trigger-value">${this._currentLabel}</span>`:a`<span class="placeholder">${((e=this.field)==null?void 0:e.placeholder)||s}</span>`}
        ${this._currentLabel&&!this.disabled?a`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${p("clear","Clear")}
            @click=${this._clear}
            @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._clear(o))}}>&times;</span>
        `:m}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?a`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${W().map((o,r)=>a`
            <div class="option ${o.value===t?"selected":""} ${r===this._activeIndex?"active":""}"
              role="option" aria-selected=${o.value===t}
              @mousedown=${n=>{n.preventDefault(),this._onSelect(o)}}
              @mouseenter=${()=>{this._activeIndex=r}}>
              ${o.label}
            </div>`)}
        </div>
      `:m}
    `}};Mt.styles=[ve];let tt=Mt;Dt([v()],tt.prototype,"_open");Dt([v()],tt.prototype,"_activeIndex");customElements.define("sfx-meta-boolean-field",tt);const Bt=class extends F{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return a`
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
    `}};Bt.styles=[me];let fs=Bt;customElements.define("sfx-meta-number-field",fs);const Vt=class extends F{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return a`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?a`<span class="date-placeholder">${p("pickADate","Pick a date")}</span>`:m}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};Vt.styles=[me,y`
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
    `];let gs=Vt;customElements.define("sfx-meta-date-field",gs);const qt=class extends F{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const s=t.target.value,o={...this._geo,[e]:s};this.value=o,this._emit("field-change",o)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return a`
      <div class="grid">
        <div>
          <label>${p("latitude","Latitude")}</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("latitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>${p("longitude","Longitude")}</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("longitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `}};qt.styles=[me,y`
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
    `];let ms=qt;customElements.define("sfx-meta-geo-point-field",ms);var vs=Object.defineProperty,P=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&vs(e,t,o),o};const ie={uuid:"__root__",name:"",ltree:""},Pt=class extends F{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[ie],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var e,t;const s=((t=(e=this.field)==null?void 0:e.model)==null?void 0:t.parameters)??void 0;return s==null?void 0:s.taxonomy_suid}async _resolveTaxonomyUuid(){var e,t,s;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const o=this._taxonomySuid;if(!o||!this.taxonomyService)return null;const r=await this.taxonomyService.fetchTaxonomies(),n=r.find(l=>l.suid===o);return n?(this._resolvedTaxonomyUuid=n.uuid,this._taxonomyResolutionFailed=!1,n.uuid):(console.warn(`[sfx-uploader] taxonomy '${o}' not found in catalogue. Field "${((e=this.field)==null?void 0:e.ckey)??((t=this.field)==null?void 0:t.key)}" model:`,(s=this.field)==null?void 0:s.model,"Available taxonomies:",r.map(l=>({suid:l.suid,uuid:l.uuid,name:l.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[ie];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[ie];const s=t.slice(0,-1),o=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),r=[ie];let n="";for(let l=0;l<s.length;l++)n=n?`${n}.${s[l]}`:s[l],r.push({uuid:`__seed_${n}`,name:o[l]??s[l],ltree:n});return r}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const s=this._drillStack[this._drillStack.length-1].ltree,o=await this.taxonomyService.fetchNodes(t,s);if(e!==this._searchSeq)return;this._currentNodes=o.nodes,this._loading=!1;const r=this._selectedScalar,n=r?this._currentNodes.findIndex(l=>l.uuid===r||l.slug===r):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){var t;const s=e.target.value;if(this._query=s,this._activeIndex=-1,!s.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(t=this.taxonomyService)==null||t.cancel();return}this._loading=!0;const o=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,s,r=>{o===this._searchSeq&&(this._searchResults=r,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const t=[...this._drillStack.filter(s=>s.uuid!==ie.uuid).map(s=>s.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:t||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,s=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:s,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,s=this._buildTreeEntry(e);this.value=t,this.entry=s,this._emit("field-change",t),this._emitTaxonomyEntry(s),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,s=this._buildAutocompleteEntry(e);this.value=t,this.entry=s,this._emit("field-change",t),this._emitTaxonomyEntry(s),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t,s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(t=this.taxonomyService)==null||t.cancel(),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}const o=this._navigableCount;if(this._activeIndex>=o&&(this._activeIndex=Math.max(o-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,o-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const r=this._currentNodes[this._activeIndex];r.children.count_direct>0&&(e.preventDefault(),this._drillInto(r))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const r=this._searchResults[this._activeIndex];r&&this._selectAutocomplete(r)}else{const r=this._currentNodes[this._activeIndex];r&&this._selectTreeNode(r)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?m:a`
      <div class="breadcrumb">
        ${e.map((t,s)=>{const o=s===e.length-1,r=t.uuid===ie.uuid?p("rootNode","Root"):t.name;return a`
            ${s>0?a`<span class="crumb-sep">›</span>`:m}
            <button class="crumb ${o?"current":""}" type="button"
              ?disabled=${o}
              @click=${()=>!o&&this._jumpToCrumb(s)}>
              ${r}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return a`<div class="empty">${p("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return a`<div class="empty">${p("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return a`<div class="empty">${p("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return a`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,s)=>{const o=t.children.count_direct>0,r=!!e&&(e===t.uuid||e===t.slug);return a`
            <div class="tree-row ${s===this._activeIndex?"active":""} ${r?"selected":""}"
              role="option" aria-selected=${r}
              @mouseenter=${()=>{this._activeIndex=s}}
              @click=${()=>o?this._drillInto(t):this._selectTreeNode(t)}>
              <span class="tree-radio ${r?"checked":""}" role="button"
                aria-label=${p("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${o?a`<span class="tree-count" aria-hidden="true">(${t.children.count_direct})</span>`:m}
              <span class="tree-chevron ${o?"":"hidden"}" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
          `})}
      </div>
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?a`<div class="empty">${p("loading","Loading")}</div>`:this._searchResults.length===0?a`<div class="empty">${p("noResults","No results")}</div>`:a`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>a`
          <div class="ac-row ${t===this._activeIndex?"active":""}"
            role="option"
            @mouseenter=${()=>{this._activeIndex=t}}
            @click=${()=>this._selectAutocomplete(e)}>
            <span class="ac-tag">${e.tag}</span>
            ${e.path&&e.path!==e.tag?a`<span class="ac-path">${e.path}</span>`:m}
          </div>
        `)}
      </div>
    `}render(){var e;if(!this._taxonomySuid)return a`<div class="misconfigured" role="alert">${p("missingTaxonomyConfig","Field is missing taxonomy config")}</div>`;const t=this._selectPlaceholder(p("selectANode","Select a node")),s=this._displayPath,o=!!s;return a`
      <button class="trigger" type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${r=>{!this._open&&(r.key==="ArrowDown"||r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._openDropdown())}}>
        ${o?a`<span class="trigger-value" title=${s}>${s}</span>`:a`<span class="placeholder">${((e=this.field)==null?void 0:e.placeholder)||t}</span>`}
        ${o&&!this.disabled?a`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${p("clear","Clear")}
            @click=${this._clear}
            @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}>&times;</span>
        `:m}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?a`
        <div class="dropdown taxo" @keydown=${this._onKeydown}>
          <input class="search" type="text"
            aria-label=${p("searchTaxonomy","Search taxonomy")}
            placeholder=${p("search","Search")}
            .value=${this._query}
            @input=${this._onSearchInput} />
          ${this._isSearchMode?m:this._renderBreadcrumb()}
          ${this._isSearchMode?this._renderSearch():this._renderTree()}
        </div>
      `:m}
    `}};Pt.styles=[ve,y`
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
      .crumb:hover { background: var(--sfx-up-hover, #f1f5f9); }
      .crumb.current {
        color: var(--sfx-up-text, #1e293b);
        font-weight: 500;
        cursor: default;
      }
      .crumb.current:hover { background: none; }
      .crumb-sep { color: var(--sfx-up-text-muted, #94a3b8); user-select: none; }

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
      .tree-row.active { background: var(--sfx-up-hover, #f1f5f9); }
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
      .tree-chevron svg { width: 100%; height: 100%; display: block; }
      .tree-chevron.hidden { visibility: hidden; }

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
      .ac-row.active { background: var(--sfx-up-hover, #f1f5f9); }
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
    `];let M=Pt;P([h({attribute:!1})],M.prototype,"taxonomyService");P([h({attribute:!1})],M.prototype,"entry");P([v()],M.prototype,"_open");P([v()],M.prototype,"_query");P([v()],M.prototype,"_drillStack");P([v()],M.prototype,"_currentNodes");P([v()],M.prototype,"_searchResults");P([v()],M.prototype,"_loading");P([v()],M.prototype,"_activeIndex");P([v()],M.prototype,"_resolvedTaxonomyUuid");P([v()],M.prototype,"_taxonomyResolutionFailed");customElements.define("sfx-meta-taxonomy-node-field",M);var xs=Object.defineProperty,G=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&xs(e,t,o),o};const _s=(i,e)=>!!(e.uuid&&i.uuid===e.uuid||e.sid&&i.sid===e.sid||e.slug&&i.slug===e.slug),jt=class extends F{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set}get _items(){return Array.isArray(this.value)?this.value.map(e=>typeof e=="string"?Di(e)?{sid:e}:{slug:e}:e):[]}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichBySids()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichBySids()}async _maybeEnrichBySids(){const e=this.ultratags;if(!e)return;const t=this._items;if(t.length===0)return;const s=[];for(const o of t)o.sid&&!o.i18n&&!this._enrichmentAttempted.has(o.sid)&&s.push(o.sid);if(s.length!==0){for(const o of s)this._enrichmentAttempted.add(o);try{const o=await e.getBySids({sids:s,format:nt}),r=Bi(o.items||[]),n=Vi(t,r);this.value=n}catch{}}}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return Ae(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=o=>!!o.uuid&&e.has(o.uuid)||!!o.sid&&e.has(o.sid)||e.has(o.slug),s=(this._isRestricted?this._restrictedEntries:this._results).filter(o=>!t(o)).map(o=>({entry:o,label:Ae(o,this._currentLang,this._defaultLang).value||o.slug}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?s.filter(r=>r.label.toLowerCase().includes(o)):s}return s}get _isSearching(){return this._query.trim().length>=rt}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=lt(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(s=>s.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var t,s;const o=e.target.value;if(this._query=o,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((t=this.field)!=null&&t.key)){this._results=[],this._loading=!1,(s=this.ultratags)==null||s.cancel();return}const r=this.ultratags;if(!r)return;const n=o.trim().toLowerCase();this._loading=!0,r.list({meta:this.field.key,q:n,limit:zi,format:nt}).then(l=>{this._query.trim().toLowerCase()===n&&(this._results=l.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===n&&(this._results=[],this._loading=!1)})}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},s=[...this._items,t];this.value=s,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",s),this.updateComplete.then(()=>{var o;(o=this.renderRoot.querySelector(".input"))==null||o.focus()})}async _createFromQuery(){var e,t;const s=this._query.trim();if(!s)return;const o=this.ultratags;if(!o||!((e=this.field)!=null&&e.key))return;const r=lt(s);if(!r)return;const n=this._currentLang;try{const l=await o.create({meta:this.field.key,mode:Li.UPSERT,items:[{slug:r,i18n:{[n]:s}}]}),d=(t=l==null?void 0:l.output)==null?void 0:t[0],c={slug:(d==null?void 0:d.slug)||r,sid:d==null?void 0:d.sid,uuid:d==null?void 0:d.uuid,i18n:(d==null?void 0:d.i18n)||{[n]:s}};if(this._entryAlreadySelected({uuid:c.uuid||"",sid:c.sid,slug:c.slug||r}))return;const u=[...this._items,c];this.value=u,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",u),this.updateComplete.then(()=>{var f;(f=this.renderRoot.querySelector(".input"))==null||f.focus()})}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(s=>!_s(s,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const s=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<s.length?this._addEntry(s[this._activeIndex].entry):this._activeIndex===s.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&s.length&&this._addEntry(s[0].entry);break}}}render(){var e,t;const s=this._items,o=this._dropdownOptions,r=o.length,n=this._query.trim(),l=((e=this.field)==null?void 0:e.placeholder)||(this._isRestricted?p("searchTagsToRemove","Search tags to remove"):p("addCustomTags","Add custom tags"));return a`
      <div class="container" @click=${()=>{var d;return(d=this.renderRoot.querySelector(".input"))==null?void 0:d.focus()}}>
        ${s.map(d=>{const c=this._labelForItem(d);return d.uuid||d.sid||d.slug,a`
            <span class="chip" title=${c}>
              ${c}
              <button class="chip-x" aria-label=${p("removeItem","Remove {{item}}",{item:c})}
                @click=${u=>{u.stopPropagation(),this._removeItem(d)}}>&times;</button>
            </span>`})}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((t=this.field)==null?void 0:t.title)??p("customTags","Custom tags")}
          placeholder=${s.length?"":l}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen?a`
        <div class="dropdown" role="listbox">
          ${!this._isRestricted&&!this._isSearching?a`<div class="hint">${p("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:rt})}</div>`:m}
          ${!this._isRestricted&&this._isSearching&&this._loading?a`<div class="loading">${p("loading","Loading")}</div>`:m}
          ${this._isRestricted||this._isSearching&&!this._loading?o.map((d,c)=>a`
                <div class="option ${c===this._activeIndex?"active":""}" role="option"
                  @mousedown=${u=>{u.preventDefault(),this._addEntry(d.entry)}}
                  @mouseenter=${()=>{this._activeIndex=c}}>
                  ${d.label}
                </div>`):m}
          ${(this._isRestricted||this._isSearching&&!this._loading)&&o.length===0&&!this._canCreate?a`<div class="empty">${p("noResults","No results")}</div>`:m}
          ${this._canCreate?a`
              <div class="option create ${r===this._activeIndex?"active":""}"
                @mousedown=${d=>{d.preventDefault(),this._createFromQuery()}}
                @mouseenter=${()=>{this._activeIndex=r}}>
                ${p("createTag","Create '{{tag}}'",{tag:n})}
              </div>`:m}
        </div>
      `:m}
    `}};jt.styles=[Ze,y`
      :host { display: block; position: relative; }

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
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
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

      .loading, .empty, .hint {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let K=jt;G([h({attribute:!1})],K.prototype,"ultratags");G([h({attribute:!1})],K.prototype,"language");G([h({attribute:!1})],K.prototype,"defaultLanguage");G([h({attribute:!1})],K.prototype,"restrictToItems");G([v()],K.prototype,"_query");G([v()],K.prototype,"_results");G([v()],K.prototype,"_loading");G([v()],K.prototype,"_dropdownOpen");G([v()],K.prototype,"_activeIndex");customElements.define("sfx-meta-ultratags-field",K);const it=()=>p("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Nt=a`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${S`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,Kt=class extends I{constructor(){super(...arguments),this._i18nController=new N(this)}render(){const e=it();return a`
      <div
        class="unsupported"
        title=${e}
        aria-label=${e}
        aria-disabled="true"
        role="note"
      >
        ${Nt}
        <span class="unsupported-text" aria-hidden="true">${p("notEditableDuringUpload","Not editable during upload")}</span>
      </div>
    `}};Kt.styles=y`
    :host { display: block; }
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
  `;let bs=Kt;customElements.define("sfx-meta-unsupported-field",bs);var ys=Object.defineProperty,j=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&ys(e,t,o),o};const Ut=class extends I{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,s=this.disabled;if(Oe(e))return a`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;case"textarea":return a`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;case"select-one":return a`<sfx-meta-select-field .field=${e} .value=${t} .allowedValues=${this.allowedValues} ?disabled=${s}></sfx-meta-select-field>`;case"multi-select":return a`<sfx-meta-multi-select-field .field=${e} .value=${t} .allowedValues=${this.allowedValues} ?disabled=${s}></sfx-meta-multi-select-field>`;case"tags":return a`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;case"ultratags":return a`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${s}></sfx-meta-ultratags-field>`;case"taxonomy-node":return a`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${s}></sfx-meta-taxonomy-node-field>`;case"boolean":return a`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return a`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;case"date":return a`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;case"geopoint":return a`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;default:return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`}}};Ut.styles=y`
    :host { display: block; }
  `;let B=Ut;j([h({attribute:!1})],B.prototype,"field");j([h({attribute:!1})],B.prototype,"value");j([h({attribute:!1})],B.prototype,"autocomplete");j([h({attribute:!1})],B.prototype,"taxonomyService");j([h({attribute:!1})],B.prototype,"taxonomyEntry");j([h({attribute:!1})],B.prototype,"ultratags");j([h({attribute:!1})],B.prototype,"language");j([h({attribute:!1})],B.prototype,"defaultLanguage");j([h({attribute:!1})],B.prototype,"ultratagsRestrictToItems");j([h({attribute:!1})],B.prototype,"allowedValues");j([h({type:Boolean})],B.prototype,"disabled");customElements.define("sfx-metadata-field-edit",B);var ws=Object.defineProperty,ye=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&ws(e,t,o),o};const Ht=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.taxonomyEntry=null}_formatValue(){var e,t,s,o;const r=this.value,n=(e=this.field)==null?void 0:e.type;switch(n){case"boolean":return r==="true"?"True":r==="false"?"False":"";case"date":return r?r instanceof Date?r.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof r=="string"&&r.length>0?r:"":"";case"numeric":case"decimal2":{if(r==null||r==="")return"";const l=Number(r);return Number.isFinite(l)?l.toLocaleString(void 0,{maximumFractionDigits:n==="decimal2"?2:0}):String(r)}case"select-one":{if(r==null||r==="")return"";const l=(t=this.field.possible_values)==null?void 0:t.find(d=>d.internal_unique_value===r||d.api_value===r);return(l==null?void 0:l.label)??String(r)}case"multi-select":return!Array.isArray(r)||r.length===0?"":r.map(l=>{var d;const c=(d=this.field.possible_values)==null?void 0:d.find(u=>u.internal_unique_value===l||u.api_value===l);return(c==null?void 0:c.label)??String(l)}).join(", ");case"tags":return!Array.isArray(r)||r.length===0?"":r.map(l=>l.label||l.value).join(", ");case"ultratags":{if(!Array.isArray(r)||r.length===0)return"";const l=this.language||"en",d=this.defaultLanguage||l;return r.map(c=>typeof c=="string"?c:Ae({i18n:c.i18n,slug:c.slug||""},l,d).value||c.slug||c.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(s=this.taxonomyEntry)!=null&&s.path?this.taxonomyEntry.path:(o=this.taxonomyEntry)!=null&&o.name?this.taxonomyEntry.name:r==null||r===""?"":String(r);case"geopoint":{const l=r;return!l||l.latitude===""||l.latitude==null||l.longitude===""||l.longitude==null?"":`(${l.latitude}, ${l.longitude})`}case"attachment-uri":return!r||typeof r=="string"&&r.length===0?"":String(r);case"text":case"textarea":default:return r==null||r===""?"":String(r)}}render(){var e;if(this.field&&Oe(this.field))return a`
        <div class="value empty" title=${it()}>
          ${p("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const t=this._formatValue(),s=t==="";return((e=this.field)==null?void 0:e.type)==="attachment-uri"&&!s?a`
        <div class="value">
          <a class="link" href=${t} target="_blank" rel="noopener noreferrer"
            @click=${o=>o.stopPropagation()}
          >${t}</a>
        </div>
      `:a`
      <div class="value ${s?"empty":""}">${s?"—":t}</div>
    `}};Ht.styles=y`
    :host { display: block; }
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
  `;let de=Ht;ye([h({attribute:!1})],de.prototype,"field");ye([h({attribute:!1})],de.prototype,"value");ye([h({attribute:!1})],de.prototype,"taxonomyEntry");ye([h({attribute:!1})],de.prototype,"language");ye([h({attribute:!1})],de.prototype,"defaultLanguage");customElements.define("sfx-metadata-field-view",de);var ks=Object.defineProperty,Me=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&ks(e,t,o),o};const Gt=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let s=!0;for(const o of t.variants)e.push({groupUuid:t.uuid,value:o.api_value,label:o.label,isGroupStart:s,groupLabel:t.label}),s=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const e=this._options.findIndex(t=>this.selectedFilters[t.groupUuid]===t.value);this._activeIndex=e>=0?e:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var t;const s=this._filteredGroups;if(s.length===0)return e;const o=[];for(const r of s){const n=this.selectedFilters[r.uuid]??((t=r.variants[0])==null?void 0:t.api_value),l=r.variants.find(d=>d.api_value===n);l&&o.push(s.length===1?l.label:`${r.label}: ${l.label}`)}return o.length?o.join(", "):e}render(){if(this._filteredGroups.length===0)return m;const e=this._options,t=p("regionalSettings","Regional settings"),s=this._triggerSummary(t);return a`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${t} — ${s}`}
        title=${s}
        @click=${this._toggle}
        @keydown=${this._onKeydown}
      >
        <span class="trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </span>
        <span class="trigger-label">${t}</span>
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      ${this._open?a`
            <div class="dropdown" role="listbox" aria-label=${t}>
              ${e.map((o,r)=>this._renderOption(o,r,o.value===this.selectedFilters[o.groupUuid]))}
            </div>
          `:m}
    `}_renderOption(e,t,s){const o=this._activeIndex===t;return a`
      ${e.isGroupStart?a`<div class="group-header">${e.groupLabel}</div>`:m}
      <div
        class="option ${s?"selected":""} ${o?"active":""}"
        role="option"
        aria-selected=${s}
        @mouseenter=${()=>{this._activeIndex=t}}
        @click=${()=>this._onSelect(e)}
      >
        <span class="option-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>${e.label}</span>
      </div>
    `}};Gt.styles=[ve,y`
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
        transition: background 0.15s, color 0.15s;
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
      .trigger-chevron.open { transform: rotate(180deg); }

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
        .trigger { height: 28px; padding: 0 6px; gap: 4px; font-size: 12px; }
        .trigger-icon { width: 16px; height: 16px; }
      }
      @media (max-width: 480px) {
        .trigger { padding: 0 6px; }
        .trigger-label { display: none; }
        .trigger-chevron { display: none; }
      }
    `];let we=Gt;Me([h({attribute:!1})],we.prototype,"groups");Me([h({attribute:!1})],we.prototype,"selectedFilters");Me([v()],we.prototype,"_open");Me([v()],we.prototype,"_activeIndex");customElements.define("sfx-regional-settings",we);const Be=new Set(["multi-select","tags","ultratags"]),Ve=new Set(["text","textarea","attachment-uri"]);function $s(i){return mi(i)?[]:Be.has(i)?[{key:"SET",label:p("bulkOpSet","Set")},{key:"ADD",label:p("bulkOpAddTo","Add to")},{key:"DELETE",label:p("bulkOpRemoveFrom","Remove from")}]:Ve.has(i)?[{key:"SET",label:p("bulkOpSet","Set")},{key:"ADD",label:p("bulkOpAppend","Append")},{key:"DELETE",label:p("bulkOpRemove","Remove")}]:[{key:"SET",label:p("bulkOpSet","Set")},{key:"DELETE",label:p("bulkOpClear","Clear")}]}function je(i,e){return i==="DELETE"?Be.has(e)||Ve.has(e):!0}function Ss(i,e,t,s){const o=Be.has(s),r=Ve.has(s);switch(i){case"SET":return t;case"ADD":{if(o){const n=Array.isArray(e)?e:[],l=Array.isArray(t)?t:[];if(l.length===0)return n;if(s==="ultratags")return qe(n,l,!1);if(s==="tags"){const u=new Set(n.map(g=>g)),f=[...n];for(const g of l){const x=typeof g=="string"?g:String(g);u.has(x)||(u.add(x),f.push(x))}return f}const d=new Set(n.map(u=>JSON.stringify(u))),c=[...n];for(const u of l){const f=JSON.stringify(u);d.has(f)||(d.add(f),c.push(u))}return c}if(r){const n=typeof t=="string"?t:"";if(!n)return e??"";const l=typeof e=="string"?e:"";return l?`${l} ${n}`:n}return t}case"DELETE":{if(o){const n=Array.isArray(e)?e:[],l=Array.isArray(t)?t:[];if(l.length===0)return n;if(s==="ultratags")return qe(n,l,!0);if(s==="tags"){const c=new Set(l.map(u=>typeof u=="string"?u:String(u)));return n.filter(u=>!c.has(typeof u=="string"?u:String(u)))}const d=new Set(l.map(c=>JSON.stringify(c)));return n.filter(c=>!d.has(JSON.stringify(c)))}if(r){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return s==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function Jt(i,e,t,s,o){const r=o??"en",n=!!i.regional_variants_group_uuid,l={meta:{[i.key]:e}},d=We(i,t,l,o),c=x=>n&&x!==null&&typeof x=="object"&&!Array.isArray(x),u=c(e)?e[r]:e,f=c(d)?d[r]:d,g=Ss(s,u,f,i.type);return n?{...c(e)?e:{},[r]:g}:g}const Yt=Symbol("clamp-drop");function Cs(i,e,t,s,o){if(i.type!=="select-one"&&i.type!=="multi-select")return e;const r=new Set(t),n=!!i.regional_variants_group_uuid,l=s??"en",d=f=>n&&f!==null&&typeof f=="object"&&!Array.isArray(f),c=d(e)?e[l]:e;let u;if(i.type==="multi-select"){const f=Array.isArray(c)?c:[],g=d(o)?o[l]:o,x=new Set((Array.isArray(g)?g:[]).map(b=>b));u=f.filter(b=>r.has(b)||x.has(b))}else if(c==null||c==="")u=c;else if(r.has(c))u=c;else return Yt;return n?{...d(e)?e:{},[l]:u}:u}const Wt=y`
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
    transition: background-color 0.12s ease, border-color 0.12s ease;
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
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:indeterminate::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Es=y`
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
    transition: background 0.15s ease, color 0.15s ease;
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
  .fm-th-check { width: 20px; flex-shrink: 0; }
  .fm-th-name {
    width: 244px; /* row-thumb (52) + row gap (12) + row-name (180) */
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover { color: var(--sfx-up-text-secondary, #64748b); }
  .fm-th-size { width: 70px; flex-shrink: 0; text-align: left; }
  .fm-th-field { flex: 1; min-width: 0; }

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
  .fm-footer .spacer { flex: 1; }

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
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
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
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
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

  ${Wt}
`,Ts=y`
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
    transition: border-color 0.12s ease, box-shadow 0.12s ease;
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
    transition: color 0.12s ease, background-color 0.12s ease, border-color 0.12s ease;
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
    transition: background-color 0.12s ease, color 0.12s ease;
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
`,As=y`
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
    transition: border-color 0.12s ease, box-shadow 0.12s ease;
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
`,Is=y`
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

  .row-check { width: 20px; flex-shrink: 0; }

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

  ${Wt}
`,Os=y`
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
`,Fs=y`
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
`;var zs=Object.defineProperty,k=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&zs(e,t,o),o},ue;const w=(ue=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onKeyDown=async i=>{if(i.key==="Escape"){if(this._confirmVisible){i.stopPropagation(),this._onConfirmCancel();return}i.composedPath().some(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()}},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var i;this._confirmVisible=!1,(i=this._confirmResolve)==null||i.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var i;this._confirmVisible=!1,(i=this._confirmResolve)==null||i.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=i=>{var e,t;if(i.key!=="Tab")return;const s=(e=this.shadowRoot)==null?void 0:e.querySelector(".fm-confirm");if(!s)return;const o=s.querySelectorAll("button");if(o.length===0)return;const r=o[0],n=o[o.length-1],l=(t=this.shadowRoot)==null?void 0:t.activeElement;i.shiftKey&&l===r?(i.preventDefault(),n.focus()):!i.shiftKey&&l===n&&(i.preventDefault(),r.focus())},this._onPendingChange=i=>{const{operation:e,value:t}=i.detail,s=this._activeField;oe(t)&&(!s||je(e,s.type))?this._setPendingOp(null):this._setPendingOp({operation:e,value:t})},this._onFieldSelect=async i=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=i.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const i=this._missingRequiredFieldKey;i&&this._activeFieldKey!==i&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=i)},this._onBulkApply=i=>{var e;const t=this._activeField;if(!t)return;const{operation:s,value:o,taxonomyEntry:r}=i.detail,n=Q(t,this.config),l=[],d=new Set;for(const c of this._selected){const u=(e=this._cachedPerFileResolved.get(c))==null?void 0:e.get(t.ckey);if(u!=null&&u.hidden)continue;const f=this._staged.get(c),g=f!=null&&f.has(t.key)?f.get(t.key):this._originalValue(c,t.key)??null;let x=Jt(t,g,o,s,n);if(u!=null&&u.allowedValues){const b=Cs(t,x,u.allowedValues,n,g);if(b===Yt)continue;x=b}l.push([c,t.key,x]),d.add(c)}this._setStagedBulk(l),t.type==="taxonomy-node"&&r!==void 0&&this._setStagedTaxonodeBulk(d,t.key,r)},this._onRowTaxonomyEntry=i=>{const{fileId:e,fieldKey:t,entry:s}=i.detail;this._setStagedTaxonodeSingle(e,t,s)},this._onRowFieldChange=i=>{const e=this._activeField;e&&this._setStagedValue(i.detail.fileId,e.key,i.detail.value)},this._onRowToggle=i=>{const e=new Set(this._selected);e.has(i.detail.fileId)?e.delete(i.detail.fileId):e.add(i.detail.fileId),this._selected=e},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(i=>i.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||!await this._confirmDiscardPending())return;const i=[],e=[];for(const[s,o]of this._staged){if(!this._originalFiles.get(s))continue;const r={},n={};for(const[l,d]of o){const c=this._originalValue(s,l);if(JSON.stringify(d)!==JSON.stringify(c))if(st(l)){const u=ot(l);if(!u)continue;const f=d===""||d==null;u==="position"?n.position=f?void 0:Number(d):n.ref=f?void 0:String(d)}else r[l]=d}Object.keys(r).length>0&&i.push({fileId:s,meta:r}),Object.keys(n).length>0&&e.push({fileId:s,product:n})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:i},bubbles:!0,composed:!0})),e.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:e},bubbles:!0,composed:!0}));const t=[];for(const[s,o]of this._stagedTaxonodes){const r=this._originalFiles.get(s);if(!r)continue;const n=r.taxonodes??{},l={};for(const[d,c]of o){const u=n[d]??null;JSON.stringify(c??null)!==JSON.stringify(u??null)&&(l[d]=c??null)}Object.keys(l).length>0&&t.push({fileId:s,taxonodes:l})}t.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var i;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(i=this._confirmResolve)==null||i.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(i){if(this._pendingOp=i,i===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},ue._PREVIEW_DEBOUNCE_MS)}_initStaged(){var i,e;const t=new Map,s=new Map,o=new Set,r=new Map,n=((i=this.schema)==null?void 0:i.productsEnabled)===!0;for(const d of this.files){const c=new Map;if(d.meta)for(const[u,f]of Object.entries(d.meta))c.set(u,f);if(n){const u=d.product;u.ref!==void 0&&c.set(ni,u.ref),u.position!==void 0&&c.set(li,u.position)}t.set(d.id,c),d.taxonodes&&s.set(d.id,new Map(Object.entries(d.taxonodes))),o.add(d.id),r.set(d.id,d)}this._staged=t,this._stagedTaxonodes=s,this._selected=o,this._originalFiles=r,this._recomputeResolvedSchemas();const l=this.initialFieldKey;if(l&&(e=this.schema)!=null&&e.fieldsByKey.has(l))this._activeFieldKey=l;else if(this.schema&&this.schema.fields.length>0){const d=this._groupOfFieldMap(),c=this.schema.fields.find(u=>this._isFieldNavigable(u,d));this._activeFieldKey=(c==null?void 0:c.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(i,e,t){const s=new Map(this._staged),o=new Map(s.get(i)??new Map);o.set(e,t),s.set(i,o),this._staged=s}_setStagedBulk(i){const e=new Map(this._staged);for(const[t,s,o]of i){const r=new Map(e.get(t)??new Map);r.set(s,o),e.set(t,r)}this._staged=e}_setStagedTaxonodeBulk(i,e,t){const s=new Map(this._stagedTaxonodes);for(const o of i){const r=new Map(s.get(o)??new Map);r.set(e,t),s.set(o,r)}this._stagedTaxonodes=s}_setStagedTaxonodeSingle(i,e,t){const s=new Map(this._stagedTaxonodes),o=new Map(s.get(i)??new Map);o.set(e,t),s.set(i,o),this._stagedTaxonodes=s}get _activeField(){var i,e;return(e=(i=this.schema)==null?void 0:i.fieldsByKey)==null?void 0:e.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,e;const t=this._activeField;if(!t||t.type!=="ultratags")return[];let s=[];for(const o of this._selected){const r=this._originalFiles.get(o),n=(i=this._staged.get(o))==null?void 0:i.get(t.key),l=n!==void 0?n:(e=r==null?void 0:r.meta)==null?void 0:e[t.key],d=Ie(l);d.length&&(s=qe(s,d,!1))}return s.filter(o=>typeof o!="string")}_originalValue(i,e){var t,s;const o=this._originalFiles.get(i);if(o){if(st(e)){const r=ot(e);return r?(t=o.product)==null?void 0:t[r]:void 0}return(s=o.meta)==null?void 0:s[e]}}_refreshMissingRequired(){const i=this.schema&&this.config&&ai(this.schema,this.config)?di(this._staged,this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let e=null;if(this.schema&&i.size>0){for(const o of this.schema.fields)if(i.has(o.key)){e=o.key;break}}e!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=e);const t=this._missingRequiredKeys;let s=t.size!==i.size;if(!s){for(const o of i)if(!t.has(o)){s=!0;break}}s&&(this._missingRequiredKeys=i)}_selectedFileInputs(){const i=[];for(const e of this.files){if(!this._selected.has(e.id))continue;const t=this._staged.get(e.id),s={...e.meta};if(t)for(const[o,r]of t)s[o]=r;i.push({id:e.id,mime:e.type??"",meta:s})}return i}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=Ai(this._selectedFileInputs(),this.schema,this.dependencies);const i=new Map;for(const e of this.files){const t=this._staged.get(e.id),s={...e.meta};if(t)for(const[o,r]of t)s[o]=r;i.set(e.id,xt({mime:e.type??"",meta:s},this.schema,this.dependencies))}this._cachedPerFileResolved=i}_advanceActiveFieldIfHidden(){var i;if(!this.schema||this._cachedBulkResolved.size===0)return;const e=(i=this.schema.fieldsByKey)==null?void 0:i.get(this._activeFieldKey);if(!e)return;const t=this._groupOfFieldMap();if(this._isFieldNavigable(e,t))return;const s=this.schema.fields.find(o=>this._isFieldNavigable(o,t));this._activeFieldKey=(s==null?void 0:s.key)??""}_groupOfFieldMap(){var i,e;if(this.schema&&((i=this._groupOfFieldCache)==null?void 0:i.schema)===this.schema)return this._groupOfFieldCache.map;const t=new Map;for(const s of((e=this.schema)==null?void 0:e.groups)??[])for(const o of s.fields)t.set(o,s);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:t}),t}_isFieldRequiredBulk(i){return Ke(i,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(i,e){const t=e.get(i);return!(Ue(i,t,this._cachedBulkResolved)||t&&Xe(t)&&!this._isFieldRequiredBulk(i)&&!He(i,t,this._cachedBulkResolved))}_recomputeFilledFields(){var i;const e=new Set;for(const o of((i=this.schema)==null?void 0:i.fields)??[])for(const[r,n]of this._staged){const l=n.get(o.key),d=this._originalValue(r,o.key);if(l!==void 0&&!oe(l)&&JSON.stringify(l)!==JSON.stringify(d)){e.add(o.key);break}}const t=this._filledFieldsCache;let s=t.size!==e.size;if(!s){for(const o of e)if(!t.has(o)){s=!0;break}}s&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const i=[...this.files];i.sort((e,t)=>{const s=e.name.localeCompare(t.name)||e.id.localeCompare(t.id);return this._sortAsc?s:-s}),this._sortedFilesCache=i}get _hasPendingValue(){return this._pendingOp!=null&&!oe(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(i=>{this._confirmResolve=i,this._confirmVisible=!0}):Promise.resolve(!0)}willUpdate(i){(i.has("_staged")||i.has("schema")||i.has("config")||i.has("dependencies"))&&this._refreshMissingRequired(),(i.has("_staged")||i.has("schema"))&&this._recomputeFilledFields(),(i.has("files")||i.has("_sortAsc"))&&this._recomputeSortedFiles(),(i.has("_staged")||i.has("_selected")||i.has("schema")||i.has("dependencies")||i.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden())}updated(i){var e;(e=super.updated)==null||e.call(this,i),i.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var t;const s=(t=this.shadowRoot)==null?void 0:t.querySelector(".fm-confirm .btn-ghost");s==null||s.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}render(){var i,e,t,s,o;if(!((e=(i=this.schema)==null?void 0:i.fields)!=null&&e.length))return a`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${q=>q.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">${p("fillMultipleAssets","Fill multiple assets")}</span>
              <button class="fm-topbar-close" @click=${this._onClose} title=${p("close","Close")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">${p("noMetadataFieldsConfigured","No metadata fields configured")}</div>
          </div>
        </div>
      `;const r=this._activeField,n=this._sortedFilesCache,l=this._selected.size===this.files.length&&this.files.length>0,d=this._selected.size>0&&!l,c=this._missingRequiredFieldKey,u=this._cachedBulkResolved,f=this._cachedPerFileResolved,g=r==null?void 0:r.ckey,x=g?u.get(g):void 0,b=c?((t=this.schema.fieldsByKey.get(c))==null?void 0:t.title)||c:"",$=c!=null&&this._activeFieldKey===c,_=c!=null&&!$;return a`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${q=>q.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${p("fillMultipleAssets","Fill multiple assets")}</span>
            ${(s=this.schema.regionalVariantsGroups)!=null&&s.length?a`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((o=this.config)==null?void 0:o.regionalFilters)??{}}
                ></sfx-regional-settings>`:m}
            <button class="fm-topbar-close" @click=${this._onClose} title=${p("close","Close")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
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
              .bulkResolvedSchema=${u}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              ${r?a`
                    <!-- Op bar -->
                    <sfx-bulk-meta-op-bar
                      .field=${r}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      .allowedValues=${(x==null?void 0:x.allowedValues)??null}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>

                    <!-- Table header -->
                    <div class="fm-table-header">
                      <div class="fm-th-check">
                        <input
                          type="checkbox"
                          class="fm-checkbox"
                          .checked=${l}
                          .indeterminate=${d}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${p("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${p("size","Size")}</div>
                      <div class="fm-th-field">${r.title}</div>
                    </div>

                    <!-- Table body -->
                    <div class="fm-table-body">
                      <sfx-bulk-meta-table
                        .files=${n}
                        .field=${r}
                        .staged=${this._staged}
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._previewOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        .perFileResolved=${f}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    </div>
                  `:a`
                    <!-- Every group is hidden by default with no required field
                         to surface \u2014 nothing to edit, but the schema isn't empty. -->
                    <div class="fm-empty" role="status" aria-live="polite">
                      ${p("allMetadataFieldsHidden","All metadata fields are currently hidden")}
                    </div>
                  `}
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 ${p("back","Back")}
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>${p("cancel","Cancel")}</button>
            <!-- Single primary button so transitions between Save and "Next
                 required" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Three states:
                   1. No required field missing      → "Save" (enabled)
                   2. Missing field is NOT active    → "Next required: X →"
                   3. Missing field IS active        → "Save" (disabled) -->
            <button
              class=${_t({"btn-primary":!0,"btn-primary--next":_})}
              @click=${_?this._onJumpToNextRequired:this._onSave}
              ?disabled=${$}
              title=${_?p("jumpToField","Jump to {{field}}",{field:b}):""}
            >
              ${_?a`<span class="btn-primary-label">${p("nextRequired","Next required: {{field}}",{field:b})}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`:p("save","Save")}
            </button>
          </div>

          ${this._confirmVisible?a`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${q=>q.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">${p("discardBulkChanges","You have unapplied bulk changes. Discard them?")}</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>${p("cancel","Cancel")}</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>${p("discard","Discard")}</button>
                </div>
              </div>
            </div>
          `:m}
        </div>
      </div>
    `}},ue.styles=[Es],ue._PREVIEW_DEBOUNCE_MS=150,ue);k([h({attribute:!1})],w.prototype,"schema");k([h({attribute:!1})],w.prototype,"files");k([h({attribute:!1})],w.prototype,"config");k([h({attribute:!1})],w.prototype,"autocomplete");k([h({attribute:!1})],w.prototype,"taxonomyService");k([h({attribute:!1})],w.prototype,"ultratags");k([h({attribute:!1})],w.prototype,"defaultLanguage");k([h({attribute:!1})],w.prototype,"initialFieldKey");k([h({attribute:!1})],w.prototype,"dependencies");k([v()],w.prototype,"_activeFieldKey");k([v()],w.prototype,"_staged");k([v()],w.prototype,"_stagedTaxonodes");k([v()],w.prototype,"_selected");k([v()],w.prototype,"_sortAsc");k([v()],w.prototype,"_previewOp");k([v()],w.prototype,"_confirmVisible");k([v()],w.prototype,"_missingRequiredFieldKey");k([v()],w.prototype,"_missingRequiredKeys");let Rs=w;customElements.define("sfx-bulk-metadata-modal",Rs);const ht={text:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${S`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${S`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${S`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Ls(i){return ht[i]??ht.text}var Ds=Object.defineProperty,J=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Ds(e,t,o),o};const Qt=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return Ke(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var e;const t=((e=this.schema)==null?void 0:e.groups)??[];return t.length>0&&t.every(s=>this._collapsed.has(s.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var e;this._query="";const t=(e=this.renderRoot)==null?void 0:e.querySelector(".sb-search-input");t==null||t.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var t,s;if((t=super.updated)==null||t.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const o=(s=this.renderRoot)==null?void 0:s.querySelector(".field-item.active");o==null||o.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return m;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),s=t.length>0;let o=0;const r=this.schema.groups.map(n=>{var l,d;const c=this._isNarrow||s||!this._collapsed.has(n.uuid);if(e&&n.ckey&&(l=e.get(n.ckey))!=null&&l.hidden)return m;let u=e?n.fields.filter(f=>!Ue(f,n,e)):n.fields;return Xe(n)&&(u=u.filter(f=>this._isRequired(f)||He(f,n,e))),s&&!((d=n.name)!=null&&d.toLowerCase().includes(t))&&(u=u.filter(f=>{var g;return(g=f.title)==null?void 0:g.toLowerCase().includes(t)})),u.length===0?m:(o+=u.length,a`
          <button
            class="group-label"
            @click=${()=>this._toggleGroup(n.uuid)}
            aria-expanded=${c}
          >
            <span class="group-label-text">${n.name}</span>
            <svg class="group-chevron ${c?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${c?u.map(f=>a`
                  <button
                    class="field-item ${this.activeFieldKey===f.key?"active":""}"
                    @click=${()=>this._onFieldClick(f.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${Ls(f.type)}</span>
                    <span class="field-name">${f.title}</span>
                    ${this.filledFields.has(f.key)?a`<span class="field-dot"></span>`:m}
                    ${this._isRequired(f)?a`<span
                          class=${_t({"field-required":!0,unmet:this.missingRequiredKeys.has(f.key)})}
                          aria-hidden="true"
                        >*</span>`:m}
                  </button>
                `):m}
        `)});return a`
      <div class="sb-header">
        <div class="sb-search">
          <svg class="sb-search-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="7" cy="7" r="4.5"/>
            <line x1="11" y1="11" x2="14" y2="14"/>
          </svg>
          <input
            class="sb-search-input"
            type="text"
            .value=${this._query}
            placeholder=${p("searchFields","Search fields...")}
            aria-label=${p("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?a`<button
                class="sb-search-clear"
                type="button"
                aria-label=${p("clear","Clear")}
                @click=${this._clearSearch}
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
                  <line x1="4" y1="4" x2="12" y2="12"/>
                  <line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>`:m}
        </div>
        <button
          class="sb-collapse-btn"
          type="button"
          aria-label=${this._allCollapsed?p("expandAll","Expand all"):p("collapseAll","Collapse all")}
          title=${this._allCollapsed?p("expandAll","Expand all"):p("collapseAll","Collapse all")}
          @click=${this._toggleAll}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="5 6 8 3 11 6"/>
            <polyline points="5 10 8 13 11 10"/>
          </svg>
        </button>
      </div>
      ${s&&o===0?a`<div class="sb-empty">${p("noFieldsMatch","No fields match")}</div>`:r}
    `}};Qt.styles=[Ts];let U=Qt;J([h({attribute:!1})],U.prototype,"schema");J([h({attribute:!1})],U.prototype,"activeFieldKey");J([h({attribute:!1})],U.prototype,"filledFields");J([h({attribute:!1})],U.prototype,"missingRequiredKeys");J([h({attribute:!1})],U.prototype,"config");J([h({attribute:!1})],U.prototype,"bulkResolvedSchema");J([v()],U.prototype,"_collapsed");J([v()],U.prototype,"_isNarrow");J([v()],U.prototype,"_query");customElements.define("sfx-bulk-meta-sidebar",U);var Ms=Object.defineProperty,L=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Ms(e,t,o),o},se;const z=(se=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=i=>{i.stopPropagation(),this._pendingTaxonode=i.detail.entry},this._onOpDropdownClose=i=>{if(!this._opDropdownOpen)return;const e=this.renderRoot.querySelector(".op-dropdown-wrap");e&&(i.composedPath().includes(e)||(this._opDropdownOpen=!1))},this._onFieldBlur=i=>{i.stopPropagation(),this._value=i.detail.value,this._emitPendingChange()},this._onFieldChange=i=>{i.stopPropagation(),this._value=i.detail.value,this._emitPendingChange()},this._onFieldEscape=i=>{i.stopPropagation()},this._onValueKeydown=i=>{var e;if(i.key!=="Enter")return;const t=(e=this.field)==null?void 0:e.type;if(!t||!se._ENTER_APPLY_TYPES.has(t))return;const s=i.composedPath().find(r=>r instanceof HTMLElement);if((s==null?void 0:s.tagName)==="TEXTAREA")return;i.preventDefault();const o=i.composedPath().find(r=>r instanceof HTMLInputElement);o&&o.value!==void 0&&(this._value=o.value),this._onApply()}}get _availableOps(){return this.field?$s(this.field.type):[]}static _emptyValueForType(i){switch(i){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var i;return this._value??se._emptyValueForType((i=this.field)==null?void 0:i.type)}willUpdate(i){i.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(i){this._operation=i,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var i,e;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((i=this.field)==null?void 0:i.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!je(this._operation,(e=this.field)==null?void 0:e.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var i,e;return this.selectedCount===0?!0:this._operation==="DELETE"?Be.has((i=this.field)==null?void 0:i.type)?oe(this._value):Ve.has((e=this.field)==null?void 0:e.type)?oe(this._value):!1:oe(this._value)}render(){var i;if(!this.field)return m;if(Oe(this.field)){const o=it();return a`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${o}">
            ${Nt}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${o}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,s=e.find(o=>o.key===this._operation);return a`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">${p("operation","Operation")}</span>
          ${t?a`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${(s==null?void 0:s.label)??p("bulkOpSet","Set")}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  ${this._opDropdownOpen?a`
                        <div class="op-menu">
                          ${e.map(o=>a`
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
              `:a`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(s==null?void 0:s.label)??p("bulkOpOverwrite","Overwrite")}</span>
                </div>
              `}
        </div>

        ${je(this._operation,this.field.type)?a`
              <div class="op-field op-field--value">
                ${this.field.type==="geopoint"?m:a`<span class="op-field-label">${this.field.title}</span>`}
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
                    .language=${(i=this.config)==null?void 0:i.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:m}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `}},se.styles=[As],se._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),se);L([h({attribute:!1})],z.prototype,"field");L([h({attribute:!1})],z.prototype,"autocomplete");L([h({attribute:!1})],z.prototype,"taxonomyService");L([h({attribute:!1})],z.prototype,"ultratags");L([h({attribute:!1})],z.prototype,"defaultLanguage");L([h({attribute:!1})],z.prototype,"ultratagsPresentOnSelection");L([h({attribute:!1})],z.prototype,"config");L([h({type:Number})],z.prototype,"selectedCount");L([h({attribute:!1})],z.prototype,"allowedValues");L([v()],z.prototype,"_operation");L([v()],z.prototype,"_value");L([v()],z.prototype,"_pendingTaxonode");L([v()],z.prototype,"_opDropdownOpen");let Bs=z;customElements.define("sfx-bulk-meta-op-bar",Bs);var Vs=Object.defineProperty,V=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Vs(e,t,o),o},he;const D=(he=class extends I{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._keyForFile=i=>i.id,this._renderRow=i=>{const e=this.perFileResolved.get(i.id),t=e==null?void 0:e.get(this.field.ckey),s=(t==null?void 0:t.allowedValues)??null,o=(t==null?void 0:t.hidden)??!1;return a`
      <sfx-bulk-meta-row
        .file=${i}
        .field=${this.field}
        .value=${this._getEffectiveValue(i)}
        .taxonomyEntry=${this._getTaxonodeEntry(i)}
        .selected=${this.selected.has(i.id)}
        .pendingOp=${this.pendingOp}
        .config=${this.config}
        .autocomplete=${this.autocomplete}
        .taxonomyService=${this.taxonomyService}
        .ultratags=${this.ultratags}
        .defaultLanguage=${this.defaultLanguage}
        .allowedValues=${s}
        .notApplicable=${o}
      ></sfx-bulk-meta-row>
    `}}_getEffectiveValue(i){const e=this.staged.get(i.id);return e!=null&&e.has(this.field.key)?e.get(this.field.key):i.meta[this.field.key]}_getTaxonodeEntry(i){var e;const t=this.stagedTaxonodes.get(i.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((e=i.taxonodes)==null?void 0:e[this.field.key])??null}render(){return this.files.length<=he.VIRTUALIZE_THRESHOLD?a`${this.files.map(this._renderRow)}`:a`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${i=>this._renderRow(i)}
      ></lit-virtualizer>
    `}},he.styles=[Fs],he.VIRTUALIZE_THRESHOLD=60,he);V([h({attribute:!1})],D.prototype,"files");V([h({attribute:!1})],D.prototype,"field");V([h({attribute:!1})],D.prototype,"staged");V([h({attribute:!1})],D.prototype,"stagedTaxonodes");V([h({attribute:!1})],D.prototype,"selected");V([h({attribute:!1})],D.prototype,"pendingOp");V([h({attribute:!1})],D.prototype,"config");V([h({attribute:!1})],D.prototype,"autocomplete");V([h({attribute:!1})],D.prototype,"taxonomyService");V([h({attribute:!1})],D.prototype,"ultratags");V([h({attribute:!1})],D.prototype,"defaultLanguage");V([h({attribute:!1})],D.prototype,"perFileResolved");let qs=D;customElements.define("sfx-bulk-meta-table",qs);var Ps=Object.defineProperty,R=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Ps(e,t,o),o};const Xt=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._onFieldBlur=e=>{e.stopPropagation();const{value:t}=e.detail,s=bt(this.field,t,this.config??void 0);if(s){this._error=s;return}this._error=null;const o={meta:{...this.file.meta,[this.field.key]:this.value}},r=We(this.field,t,o,Q(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}shouldUpdate(e){return!(e.size===1&&e.has("pendingOp")&&!this.selected)}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:Jt(this.field,this.value,e.value,e.operation,Q(this.field,this.config))}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var e,t;const s=this.file;return a`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${s.previewUrl?a`<img class="row-thumb" src=${s.previewUrl} alt="" />`:a`<img class="row-thumb row-thumb-fallback"
              src=${pi(this._getExtension(s.name))}
              alt=${p("extFile","{{ext}} file",{ext:this._getExtension(s.name)})}
              @error=${o=>{const r=o.target,n=fi();!r.dataset.fallback&&r.src!==n&&(r.dataset.fallback="1",r.src=n)}}
            />`}

        <div class="row-name" title=${s.name}>${s.name}</div>
        <div class="row-size">${s.size?gi(s.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?a`<div
                class="row-field-na"
                title=${p("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >${p("fieldNotApplicable","Not applicable for this asset")}</div>`:this.pendingOp&&this.selected?a`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .oldTaxonomyEntry=${((e=this.file.taxonodes)==null?void 0:e[this.field.key])??null}
                .newTaxonomyEntry=${this.taxonomyEntry}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:a`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${St(this.field,this.value,Q(this.field,this.config))}
                  .autocomplete=${this.autocomplete}
                  .taxonomyService=${this.taxonomyService}
                  .taxonomyEntry=${this.taxonomyEntry}
                  .ultratags=${this.ultratags}
                  .language=${(t=this.config)==null?void 0:t.language}
                  .defaultLanguage=${this.defaultLanguage}
                  .allowedValues=${this.allowedValues}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?a`<div class="row-error" role="alert">${this._error}</div>`:m}`}
        </div>
      </div>
    `}};Xt.styles=[Is];let A=Xt;R([h({attribute:!1})],A.prototype,"file");R([h({attribute:!1})],A.prototype,"field");R([h({attribute:!1})],A.prototype,"value");R([h({attribute:!1})],A.prototype,"taxonomyEntry");R([h({type:Boolean})],A.prototype,"selected");R([h({attribute:!1})],A.prototype,"pendingOp");R([h({attribute:!1})],A.prototype,"config");R([h({attribute:!1})],A.prototype,"autocomplete");R([h({attribute:!1})],A.prototype,"taxonomyService");R([h({attribute:!1})],A.prototype,"ultratags");R([h({attribute:!1})],A.prototype,"defaultLanguage");R([h({attribute:!1})],A.prototype,"allowedValues");R([h({type:Boolean})],A.prototype,"notApplicable");R([v()],A.prototype,"_error");customElements.define("sfx-bulk-meta-row",A);const js=new Set(["multi-select","tags","ultratags"]);function pt(i,e,t){return!e.regional_variants_group_uuid||i==null||typeof i!="object"||Array.isArray(i)?i:i[t??"en"]}function ft(i){return Array.isArray(i)?i:[]}function gt(i){return i==null||i===""||Array.isArray(i)&&i.length===0?!0:typeof i=="object"&&!Array.isArray(i)?!Object.values(i).some(e=>e!=null&&e!==""):!1}function Ne(i,e){var t;const s=(t=i.possible_values)==null?void 0:t.find(o=>o.internal_unique_value===e||o.api_value===e);return(s==null?void 0:s.label)??String(e)}function mt(i,e){if(e==null||e==="")return"";switch(i.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Ne(i,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Ns(i,e){const t=i.map(l=>typeof l=="string"?l:String(l)),s=e.map(l=>typeof l=="string"?l:String(l)),o=new Set(t),r=new Set(s),n=[];for(const l of s)n.push({label:l,state:o.has(l)?"kept":"added"});for(const l of t)r.has(l)||n.push({label:l,state:"removed"});return n}function Ks(i,e,t){const s=Ie(i),o=Ie(e),r=t||"en",n=f=>f.sid||f.slug||f.uuid||"",l=f=>Ae({i18n:f.i18n,slug:f.slug||""},r,r).value||f.slug||f.sid||"",d=new Set(s.map(n).filter(Boolean)),c=new Set(o.map(n).filter(Boolean)),u=[];for(const f of o){const g=n(f);u.push({label:l(f),state:d.has(g)?"kept":"added"})}for(const f of s){const g=n(f);c.has(g)||u.push({label:l(f),state:"removed"})}return u}function Us(i,e,t){const s=new Set(i.map(n=>JSON.stringify(n))),o=new Set(e.map(n=>JSON.stringify(n))),r=[];for(const n of e){const l=JSON.stringify(n),d=typeof n=="string"?Ne(t,n):String(n);r.push({label:d,state:s.has(l)?"kept":"added"})}for(const n of i){const l=JSON.stringify(n);if(!o.has(l)){const d=typeof n=="string"?Ne(t,n):String(n);r.push({label:d,state:"removed"})}}return r}function Hs(i,e,t,s){const o=Q(i,s),r=s==null?void 0:s.language,n=pt(e,i,o),l=pt(t,i,o);if(js.has(i.type)){if(i.type==="ultratags")return{kind:"array",items:Ks(e,t,r)};const d=ft(n),c=ft(l);return i.type==="tags"?{kind:"array",items:Ns(d,c)}:{kind:"array",items:Us(d,c,i)}}return{kind:"scalar",oldDisplay:mt(i,n),newDisplay:mt(i,l),oldEmpty:gt(n),newEmpty:gt(l)}}var Gs=Object.defineProperty,ce=(i,e,t,s)=>{for(var o=void 0,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=n(e,t,o)||o);return o&&Gs(e,t,o),o};const Zt=class extends I{constructor(){super(...arguments),this._i18nController=new N(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:p("added","Added"),removed:p("removed","Removed"),kept:p("kept","Kept")};return a`
      <div class="diff-wrap" aria-label=${p("bulkOperationPreview","Bulk operation preview")}>
        ${e.items.length===0?a`<span class="diff-chip diff-chip--kept diff-chip--empty">\u2014</span>`:e.items.map(s=>a`
                <span
                  class="diff-chip diff-chip--${s.state}"
                  aria-label="${t[s.state]??s.state}: ${s.label}"
                >
                  ${s.state==="removed"?a`<s>${s.label}</s>`:s.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=p("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?p("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?p("emptyValue","empty"):e.newDisplay});return a`
      <div class="diff-wrap diff-scalar-text" aria-label=${p("bulkOperationPreview","Bulk operation preview")}>
        <span class="sr-only">${t}</span>
        ${e.newEmpty?m:a`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var e,t;const s=((e=this.newTaxonomyEntry)==null?void 0:e.path)??"",o=((t=this.oldTaxonomyEntry)==null?void 0:t.path)??"",r=!o,n=!s,l=p("willChangeFromTo","Will change from {{from}} to {{to}}",{from:r?p("emptyValue","empty"):o,to:n?p("emptyValue","empty"):s});return a`
      <div class="diff-wrap diff-scalar-text" aria-label=${p("bulkOperationPreview","Bulk operation preview")}>
        <span class="sr-only">${l}</span>
        ${n?m:a`<span class="diff-new" aria-hidden="true">${s}</span>`}
      </div>
    `}render(){if(!this.field)return m;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=Hs(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Zt.styles=[Os];let Z=Zt;ce([h({attribute:!1})],Z.prototype,"field");ce([h({attribute:!1})],Z.prototype,"oldValue");ce([h({attribute:!1})],Z.prototype,"newValue");ce([h({attribute:!1})],Z.prototype,"oldTaxonomyEntry");ce([h({attribute:!1})],Z.prototype,"newTaxonomyEntry");ce([h({attribute:!1})],Z.prototype,"config");customElements.define("sfx-bulk-meta-diff-view",Z);export{Ge as DEFAULT_HUB_API_BASE,kt as HUB_HEADERS_HINT,Rs as SfxBulkMetadataModal,Ws as canReachHub,io as clearDependenciesCache,Zs as clearSchemaCache,no as createFieldI18nService,so as createTagsAutocomplete,oo as createTaxonomyService,ro as createUltratagsService,To as deepMergeMeta,Ye as effectiveHubHeaders,to as fetchDependencies,Xs as fetchMetadataSchema,Ao as getFilesWithMissingRequired,eo as hasCachedDependencies,Qs as hasCachedSchema,$t as hasSessionToken,Io as isAssetHasMetadataValue,Je as isDefaultHubBase,oe as isEmpty,Oo as localizeSchema,St as mapValueFromBackend,We as mapValueToBackend,Ti as normalizeDependencies,wt as parseMetadataSchema,xt as resolveForFileWithSchema,bt as validateField};
