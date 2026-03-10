"use strict";const n=require("lit"),c=require("lit/decorators.js");class Vt{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(r=>r(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const r=this._pendingState;this._pendingState=null,this.setState(r)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function qt(){return new Vt({config:null,projectToken:"",sassKey:"",brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",sortBy:"created_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map})}class Gt{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}class Ht{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}handleSelect(e,s,r){var p,d;const a=this.store.getState(),o=new Map(a.selectedAssets);if(!(((p=a.config)==null?void 0:p.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o}),this.lastClickedIndex=s;return}if(r.shiftKey&&this.lastClickedIndex>=0){const h=Math.min(this.lastClickedIndex,s),u=Math.max(this.lastClickedIndex,s),f=a.assets;for(let v=h;v<=u;v++)f[v]&&o.set(f[v].uuid,f[v])}else r.metaKey||r.ctrlKey?o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e):(o.clear(),o.set(e.uuid,e));const l=(d=a.config)==null?void 0:d.maxSelections;l&&o.size>l||(this.lastClickedIndex=s,this.store.setState({selectedAssets:o}))}isSelected(e){return this.store.getState().selectedAssets.has(e)}resetRange(){this.lastClickedIndex=-1}clearSelection(){this.store.setState({selectedAssets:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}}class Kt{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(r=>{var a;(a=r[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const dt=5,J=40,ht=15;class Yt{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=r=>this.onMouseDown(r),this.handleMouseMove=r=>this.onMouseMove(r),this.handleMouseUp=()=>this.onMouseUp(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(r=>{if(!(r instanceof HTMLElement))return!1;if(r instanceof HTMLButtonElement||r instanceof HTMLInputElement)return!0;const a=r.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||r.classList.contains("check")||r.classList.contains("check-box"))})}onMouseDown(e){if(e.button!==0||this.isInteractiveTarget(e))return;const s=this.container.getBoundingClientRect();this.startX=e.clientX-s.left+this.container.scrollLeft,this.startY=e.clientY-s.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){if(this.container){if(!this._dragging){const s=Math.abs(e.clientX-this.startClientX),r=Math.abs(e.clientY-this.startClientY);if(s<dt&&r<dt)return;this._dragging=!0,this.isActive=!0,this.preMarqueeSelection=new Map(this.store.getState().selectedAssets)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),r=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;this.rect={x:Math.min(this.startX,r),y:Math.min(this.startY,a),width:Math.abs(r-this.startX),height:Math.abs(a-this.startY)},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),r=e.clientY-s.top,a=s.bottom-e.clientY,o=r<J||a<J;o&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):o||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,r=s.clientY-e.top,a=e.bottom-s.clientY;let o=0;r<J?o=-ht*(1-r/J):a<J&&(o=ht*(1-a/J)),o!==0&&(this.container.scrollTop+=o,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}queryCards(){for(const e of Array.from(this.container.children))if(e.shadowRoot){const s=e.shadowRoot.querySelectorAll("[data-asset-uuid]");if(s.length>0)return s}return this.container.querySelectorAll("[data-asset-uuid]")}selectIntersecting(){var a;if(!this.container)return;const e=this.queryCards(),s=new Map(this.preMarqueeSelection);e.forEach(o=>{const i=o.getBoundingClientRect(),l=this.container.getBoundingClientRect(),p={x:i.left-l.left+this.container.scrollLeft,y:i.top-l.top+this.container.scrollTop,width:i.width,height:i.height},d=this.rect.x<p.x+p.width&&this.rect.x+this.rect.width>p.x&&this.rect.y<p.y+p.height&&this.rect.y+this.rect.height>p.y,h=o.dataset.assetUuid;if(d){const u=this.store.getState().assets.find(f=>f.uuid===h);u&&s.set(h,u)}});const r=(a=this.store.getState().config)==null?void 0:a.maxSelections;if(r&&s.size>r){const o=Array.from(s.entries()).slice(0,r);this.store.setState({selectedAssets:new Map(o)})}else this.store.setState({selectedAssets:s})}}class Xt{constructor(e,s){this.auth=e;const r=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${r}/v5`}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}async request(e,s){const r=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([l,p])=>{p!=null&&(Array.isArray(p)?r.searchParams.set(l,p.join(",")):r.searchParams.set(l,String(p)))});const a={};if(this.auth.mode==="session"){const l=this.auth;a["X-Session-Token"]=l.sessionToken,a["X-Company-Token"]=l.companyToken,a["X-Project-Token"]=l.projectToken}else{const l=this.auth;this.sassKey?a["X-Filerobot-Key"]=this.sassKey:a["X-Filerobot-Key"]=l.securityTemplateKey}const o=new AbortController,i=setTimeout(()=>o.abort(),3e4);try{const l=await fetch(r.toString(),{headers:a,signal:o.signal});if(clearTimeout(i),!l.ok){let d=`API error: ${l.status} ${l.statusText}`;try{const h=await l.json();h.msg&&(d=`API error: ${l.status} - ${h.msg}`)}catch{}throw new Error(d)}const p=await l.json();if(p.status==="error")throw new Error(`API error: ${p.msg||"Unknown error"}`);return p}catch(l){throw clearTimeout(i),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}async post(e,s){const r=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};if(this.auth.mode==="session"){const l=this.auth;a["X-Session-Token"]=l.sessionToken,a["X-Company-Token"]=l.companyToken,a["X-Project-Token"]=l.projectToken}else{const l=this.auth;this.sassKey?a["X-Filerobot-Key"]=this.sassKey:a["X-Filerobot-Key"]=l.securityTemplateKey}const o=new AbortController,i=setTimeout(()=>o.abort(),3e4);try{const l=await fetch(r.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:o.signal});if(clearTimeout(i),!l.ok){let d=`API error: ${l.status} ${l.statusText}`;try{const h=await l.json();h.msg&&(d=`API error: ${l.status} - ${h.msg}`)}catch{}throw new Error(d)}const p=await l.json();if(p.status==="error")throw new Error(`API error: ${p.msg||"Unknown error"}`);return p}catch(l){throw clearTimeout(i),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}}function Qt(t){const e={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1},s=t.sort_by??"created_at",r=t.sort_direction??"desc",a={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};e.sort=`${a[s]||s}:${r}`,t.folder&&(e.folder=t.folder);const o=[];return t.search&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(e.q=o.join(" ")),e}async function Ke(t,e){const s=Qt(e);return t.request("/files",s)}async function Wt(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const r=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",o={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${o[r]||r}:${a}`,await t.request("/folders",s)}async function Zt(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function Jt(t){return await t.request("/labels")}async function es(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");return(await t.request(`/key/${e}`)).key}const g={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},z={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},y={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},ts={AND:"AND"},m={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments_assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},Ze={[m.DATE]:"date_",[m.BOOLEAN]:"bool_",[m.NUMERIC]:"num_",[m.DECIMAL2]:"dec_",[m.ATTACHMENTS_ASSETS]:"attach_",[m.ATTACHMENT_URI]:"uri_",[m.SELECT_ONE]:"one_",[m.MULTI_SELECT]:"multi_",[m.SUPERTAGS]:"tags_",[m.TEXT]:"text_",[m.TEXT_AREA]:"area_",[m.GEO_POINT]:"geo_",[m.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(Ze).map(([t,e])=>[e,t]));const $t=Object.values(Ze),pe={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Je="empty",et="non-empty",$e="specific",ut=10,ft=10,vt=10,St="filters:pinned:",Et="metadata:pinned:",gt=[g.DATE,g.TYPE,g.METADATA],kt=y.IS,ss="20",as="1",rs=0,is=[{key:g.DATE,label:"Date",icon:"calendar-days",type:"date"},{key:g.TYPE,label:"Format",icon:"file-type",type:"string"},{key:g.SIZE,label:"Size",icon:"scaling",type:"string"},{key:g.LICENSE_EXPIRY,label:"License expiry",icon:"history",type:"date"},{key:g.TAGS,label:"Tags",icon:"hash",type:"string"},{key:g.LABELS,label:"Labels",icon:"tag",type:"string"},{key:g.PRODUCT_REF,label:"Products",icon:"box",type:"string"},{key:g.IMAGE,label:"Image",icon:"image",type:"string"},{key:g.COLOR,label:"Color",icon:"swatch-book",type:"string"}],os={key:g.METADATA,label:"Metadata",icon:"file-text",type:"string"},ns={key:g.APPROVAL,label:"Approval",icon:"badge-check",type:"string"},ls=[...is,os,ns],Ct={[g.TYPE]:"Format",[g.DATE]:"Date",[g.SIZE]:"Size",[g.LICENSE_EXPIRY]:"License expiry",[g.TAGS]:"Tags",[g.LABELS]:"Labels",[g.PRODUCT_REF]:"Products",[g.IMAGE]:"Image",[g.COLOR]:"Color",[g.METADATA]:"Metadata",[g.APPROVAL]:"Approval"},j={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},cs=[{value:j.IMAGE,label:"Image",icon:"image"},{value:j.VIDEO,label:"Video",icon:"clapperboard"},{value:j.AUDIO,label:"Audio",icon:"music"},{value:j.DOCUMENT,label:"Document",icon:"document"},{value:j.ARCHIVE,label:"Archive",icon:"archive"},{value:j.DESIGN_TEMPLATE,label:"Design template",icon:"layout-template"},{value:j.FONTS,label:"Fonts",icon:"text"},{value:j.OTHER,label:"Other",icon:"layout-grid"}],Ye={RESOLUTION:0,ORIENTATION:1,FACES:2},ps=[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],ds=[{value:"portrait",label:"Portrait"},{value:"landscape",label:"Landscape"},{value:"square",label:"Square"},{value:"panorama",label:"Panorama"}],hs=[{value:"none",label:"None"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],us=[{value:"created",label:"Created at"},{value:"updated",label:"Updated at"}],tt=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"last_week",label:"Last week"},{value:"after",label:"After date"},{value:"last_month",label:"Last month"},{value:"between",label:"Between dates"},{value:"last_year",label:"Last year"}],fs=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],vs=[{value:"approved",label:"Approved"},{value:"pending",label:"Pending"},{value:"rejected",label:"Rejected"}],gs=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],ms=[{label:"None (Exact)",value:"0"},{label:"Small",value:"1"},{label:"Medium",value:"2"},{label:"Large",value:"4"}],mt=[{label:"Is",value:y.IS},{label:"Contains",value:y.CONTAINS_IN_TEXT}],we=[{label:"Is",value:y.IS},{label:"Is not",value:y.IS_NOT}],de=[{label:"Is",value:y.IS_EXACT},{label:"Contains",value:y.IS},{label:"Does not contain",value:y.IS_NOT}],Xe=[{label:"Is",value:y.IS},{label:"Greater than",value:y.GREATER_THAN_OR_EQUAL},{label:"Is not",value:y.IS_NOT},{label:"Less than",value:y.LESS_THAN_OR_EQUAL},{label:"Between",value:y.RANGE}],Qe=[{label:"Contains",value:y.IS},{label:"Does not contain",value:y.IS_NOT}],Se=[{label:"Empty",value:Je},{label:"Not empty",value:et}],bs=[...Se,{label:"Specific",value:$e}],ys=[{label:"Empty",value:Je},{label:"Not empty",value:et},{label:"True",value:"true"},{label:"False",value:"false"}],_s={[m.TEXT]:"text",[m.TEXT_AREA]:"text",[m.NUMERIC]:"number",[m.DECIMAL2]:"number",[m.BOOLEAN]:"boolean",[m.SELECT_ONE]:"select-one",[m.MULTI_SELECT]:"multi-select",[m.SUPERTAGS]:"tags",[m.DATE]:"date",[m.GEO_POINT]:"geo",[m.ATTACHMENTS_ASSETS]:"attachment",[m.ATTACHMENT_URI]:"attachment",[m.INTEGER_LIST]:"attachment"};async function xs(t){var $,F,C,P;const e=await t.request("/settings"),s=e.settings??e,r=(s==null?void 0:s.metadata)??e.metadata,o=((r==null?void 0:r.model)??[])[rs],i=r==null?void 0:r.store,p=((i==null?void 0:i.regional_variants_groups)??[]).map(_=>({uuid:_.uuid,label:_.label??_.name??"",variants:(_.variants??[]).map(x=>({api_value:x.api_value??x.value??"",internal_unique_value:x.internal_unique_value??x.api_value??"",label:x.label??x.name??""}))})).filter(_=>_.variants.length>1),d={};for(const _ of p)d[_.uuid]=(($=_.variants[0])==null?void 0:$.api_value)??"";const h=(s==null?void 0:s.project_branding)??((F=e.settings)==null?void 0:F.project_branding),u=h==null?void 0:h.brandColor;if(!o)return{fields:[],regionalVariantGroups:p,regionalFilters:d,brandColor:u};const f=o.groups??[],v=[];for(const _ of f){const x=(_.fields??[]).find(w=>w.type==="select-one"||w.type==="multi-select");if(x){console.log("[ap-debug] raw select field:",JSON.stringify(x));break}}for(const _ of f){const x=((C=_.name)==null?void 0:C.toLowerCase())==="products"||((P=_.name)==null?void 0:P.toLowerCase())==="product fields";for(const w of _.fields??[]){const Z=w.possible_values,xe=Z==null?void 0:Z.map(D=>({api_value:D.api_value??D.value??"",internal_unique_value:D.internal_unique_value??D.api_value??"",label:D.label??D.name??D.api_value??""}));v.push({key:w.key??w.ckey,label:w.title??w.label??w.key??"",type:w.type??"text",slug:w.slug,ckey:w.ckey,possible_values:xe,group:x?"product":"root",regionalVariantsGroupUuid:w.regional_variants_group_uuid})}}return{fields:v,regionalVariantGroups:p,regionalFilters:d,brandColor:u}}function At(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function ws(t){const e=At(t),s=e.getDay(),r=s===0?6:s-1;return e.setDate(e.getDate()-r),e}function $s(t){const e=new Date(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Ss(t){const e=new Date(t);return e.setMonth(0,1),e.setHours(0,0,0,0),e}function Tt(t){const e=new Date;switch(t){case"today":return{from:At(e).toISOString(),to:e.toISOString()};case"last_week":{const s=ws(e),r=new Date(s);return r.setDate(r.getDate()-7),{from:r.toISOString(),to:s.toISOString()}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:s.toISOString(),to:e.toISOString()}}case"last_month":{const s=$s(e),r=new Date(s);return r.setMonth(r.getMonth()-1),{from:r.toISOString(),to:s.toISOString()}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:s.toISOString(),to:e.toISOString()}}case"last_year":{const s=Ss(e),r=new Date(s);return r.setFullYear(r.getFullYear()-1),{from:r.toISOString(),to:s.toISOString()}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:s.toISOString(),to:e.toISOString()}}default:return null}}function Es(t,e={}){const s=[];for(const[r,a]of Object.entries(t)){if(!a)continue;const o=ks(r,a);s.push(...o)}for(const[r,a]of Object.entries(e)){if(!a)continue;const o=Os(r,a);s.push(...o)}return s}function ks(t,e){if(e.type==="date")return Ot(t,e);const s=e,{operator:r=kt,values:a=[],logic:o}=s;if(a.length===0)return[];switch(t){case g.SIZE:return Cs(t,a,"..");case g.FACES:return N(t,r,a,",",o);case g.TAGS:return N(t,r,yt(a),",",o);case g.LABELS:return N(t,r,yt(a),",",o);case g.COLOR:return As(r,a,o);case g.TYPE:return bt(t,a,r);case g.MIME_TYPE:return bt(t,a,r);case g.IMAGE:return Ts(s.values??a);case g.PRODUCT_REF:return N(t,"=%",a,",",o);default:return N(t,r,a,",",o)}}function Ot(t,e){const s=e.field||"created";if(e.kind===pe.PRESET&&e.preset){const r=Tt(e.preset);return r?[`${s}:"${r.from}..${r.to}"`]:[]}return e.kind===pe.AFTER&&e.from?[`${s}:>"${e.from}"`]:e.kind===pe.BEFORE&&e.to?[`${s}:<"${e.to}"`]:e.kind===pe.BETWEEN&&e.from&&e.to?[`${s}:"${e.from}..${e.to}"`]:e.kind===pe.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function Cs(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function N(t,e,s,r,a){if(s.length===0)return[];if(a===ts.AND)return s.map(i=>`${t}${e}"${i}"`);const o=s.map(i=>`"${i}"`).join(r);return[`${t}${e}${o}`]}function As(t,e,s){const r=[],a=N("color_search",t,e,",",s);return r.push(...a),r.push('color_operator:"AND"'),r}function bt(t,e,s,r){if(e.length===0)return[];const a=e.map(o=>`"${o}"`).join(",");return[`${t}${s}${a}`]}function Ts(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=t,l=i.resolution,p=i.orientation,d=i.faces;return l!=null&&l.length&&e.push(...l.map(h=>`resolution:"${h}"`)),p!=null&&p.length&&e.push(...p.map(h=>`orientation:"${h}"`)),d!=null&&d.length&&e.push(...d.map(h=>`faces:"${h}"`)),e}const s=t,r=s[Ye.RESOLUTION],a=s[Ye.ORIENTATION],o=s[Ye.FACES];return r&&e.push(`resolution:"${r}"`),a&&e.push(`orientation:"${a}"`),o&&e.push(`faces:"${o}"`),e}function Os(t,e){const s=Fs(t);if(e.type==="date")return Ot(s,e);const r=e,{operator:a=kt,values:o=[],logic:i,metadataType:l}=r;return o.length===0?[]:(l===m.NUMERIC||l===m.DECIMAL2)&&a===y.RANGE?[`${s}${y.IS}"${o.join("..")}"`]:l===m.GEO_POINT?N(s,a+"~",o,",",i):N(s,a,o,",",i)}function Fs(t){for(const e of $t)if(t.startsWith(e))return t.slice(e.length);return t}function yt(t){return t.map(e=>e.replace(/^#/,""))}function Ps(t){const e=localStorage.getItem(St+t),s=localStorage.getItem(Et+t);let r;try{r=e?JSON.parse(e):[...gt]}catch{r=[...gt]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:r,pinnedMetadata:a}}function Ms(t,e){localStorage.setItem(St+t,JSON.stringify(e))}function Is(t,e){localStorage.setItem(Et+t,JSON.stringify(e))}var Ds=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,st=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ls(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ds(e,s,a),a};let he=class extends n.LitElement{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return n.html`
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
    `}};he.styles=n.css`
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
      max-height: var(--ap-modal-max-height, 85vh);
      margin: auto;
      padding: 0;
      border: none;
      border-radius: var(--ap-modal-radius, 12px);
      box-shadow: var(--ap-modal-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
      background: var(--ap-background, #fff);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      color: var(--ap-foreground, #09090b);
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
      max-height: var(--ap-modal-max-height, 85vh);
    }
    .modal-header {
      flex-shrink: 0;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
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
  `;st([c.property({type:Boolean})],he.prototype,"open",2);st([c.query("dialog")],he.prototype,"dialog",2);he=st([c.customElement("ap-modal")],he);function zs(t,e){let s;const r=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return r.cancel=()=>clearTimeout(s),r}var Rs=Object.defineProperty,js=Object.getOwnPropertyDescriptor,Re=(t,e,s,r)=>{for(var a=r>1?void 0:r?js(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Rs(e,s,a),a};let ee=class extends n.LitElement{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return n.html`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label="Regional settings"
        title="Regional settings"
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        <div class="popover-title">Regional settings</div>
        ${t?n.nothing:n.html`
          <div style="padding: 12px 12px; font-size: 0.8125rem; color: var(--ap-muted-foreground, #71717a);">
            No regional settings configured
          </div>
        `}
        ${this.groups.map(e=>n.html`
          <div class="group">
            <div class="group-label">${e.label}</div>
            ${e.variants.map(s=>{const r=this.selectedFilters[e.uuid]===s.api_value;return n.html`
                <button
                  class="variant-option"
                  ?data-selected=${r}
                  @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                >
                  <span class="check-mark">${r?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                  ${s.label}
                </button>
              `})}
          </div>
        `)}
      </div>
    `}};ee.styles=n.css`
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .trigger.active {
      color: var(--ap-primary, oklch(0.65 0.19 258));
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
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
      padding: 8px 0;
    }
    .popover.open {
      display: block;
    }
    .popover-title {
      padding: 8px 12px 4px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--ap-muted-foreground, #71717a);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .group {
      padding: 4px 0;
    }
    .group + .group {
      border-top: 1px solid var(--ap-border, #e4e4e7);
    }
    .group-label {
      padding: 6px 12px 2px;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ap-muted-foreground, #71717a);
    }
    .variant-option {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 6px 12px;
      border: none;
      background: none;
      color: var(--ap-foreground, #09090b);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-option:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .variant-option[data-selected] {
      color: var(--ap-primary, oklch(0.65 0.19 258));
      font-weight: 500;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
  `;Re([c.property({type:Array})],ee.prototype,"groups",2);Re([c.property({type:Object})],ee.prototype,"selectedFilters",2);Re([c.state()],ee.prototype,"_open",2);ee=Re([c.customElement("ap-regional-settings")],ee);var Ns=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,G=(t,e,s,r)=>{for(var a=r>1?void 0:r?Us(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ns(e,s,a),a};const Bs=[{value:"assets",label:"Assets",icon:"gallery-vertical-end"},{value:"folders",label:"Folders",icon:"folder-open"}];let L=class extends n.LitElement{constructor(){super(...arguments),this.activeTab="assets",this.hiddenTabs=[],this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this._localSearch="",this._debouncedSearch=zs(t=>{this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(t){this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const t=Bs.filter(e=>!this.hiddenTabs.includes(e.value));return n.html`
      <div class="header-row">
        <ap-dropdown
          .value=${this.activeTab}
          .options=${t}
          @change=${this._handleTabChange}
        ></ap-dropdown>
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder="Search assets..."
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          ${this._localSearch?n.html`
            <button class="clear-btn" @click=${this._clearSearch} aria-label="Clear search">
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          `:""}
        </div>
        <ap-regional-settings
          .groups=${this.regionalGroups}
          .selectedFilters=${this.regionalFilters}
          @regional-change=${this._handleRegionalChange}
        ></ap-regional-settings>
        <div class="actions">
          <button
            class="icon-btn ${this.viewMode==="grid"?"active":""}"
            @click=${()=>this._toggleView("grid")}
            aria-label="Grid view"
          >
            <ap-icon name="grid" .size=${18}></ap-icon>
          </button>
          <button
            class="icon-btn ${this.viewMode==="list"?"active":""}"
            @click=${()=>this._toggleView("list")}
            aria-label="List view"
          >
            <ap-icon name="list" .size=${18}></ap-icon>
          </button>
        </div>
        <div class="divider"></div>
        <button class="icon-btn" @click=${this._handleClose} aria-label="Close">
          <ap-icon name="close" .size=${18}></ap-icon>
        </button>
      </div>
    `}};L.styles=n.css`
    :host {
      display: block;
      padding: 16px 20px;
    }
    .header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .search-wrapper {
      flex: 1;
      position: relative;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, #71717a);
      pointer-events: none;
    }
    input {
      width: 100%;
      padding: 8px 32px 8px 38px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      box-sizing: border-box;
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }
    input:focus-visible {
      outline: none; /* already has focus ring via border-color + box-shadow */
    }
    input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }
    .clear-btn {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      padding: 0;
    }
    .clear-btn:hover {
      color: var(--ap-foreground, #09090b);
      background: var(--ap-muted, #f4f4f5);
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 4px;
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: -2px;
    }
    .icon-btn.active {
      background: var(--ap-selection-bg, oklch(0.65 0.19 258 / 0.08));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, #e4e4e7);
    }
  `;G([c.property()],L.prototype,"activeTab",2);G([c.property({type:Array})],L.prototype,"hiddenTabs",2);G([c.property()],L.prototype,"viewMode",2);G([c.property()],L.prototype,"searchQuery",2);G([c.property({type:Array})],L.prototype,"regionalGroups",2);G([c.property({type:Object})],L.prototype,"regionalFilters",2);G([c.state()],L.prototype,"_localSearch",2);L=G([c.customElement("ap-header")],L);var Vs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,Ft=(t,e,s,r)=>{for(var a=r>1?void 0:r?qs(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Vs(e,s,a),a};let Ee=class extends n.LitElement{constructor(){super(...arguments),this.items=[]}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?n.html``:n.html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>Root</button>
        ${this.items.map((t,e)=>n.html`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?n.html`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:n.html`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Ee.styles=n.css`
    :host {
      display: block;
      padding: 8px 20px;
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .current {
      color: var(--ap-foreground, #09090b);
      font-weight: 500;
      padding: 4px 6px;
    }
    ap-icon {
      color: var(--ap-muted-foreground, #71717a);
    }
  `;Ft([c.property({type:Array})],Ee.prototype,"items",2);Ee=Ft([c.customElement("ap-breadcrumb")],Ee);var Gs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,at=(t,e,s,r)=>{for(var a=r>1?void 0:r?Hs(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Gs(e,s,a),a};let ue=class extends n.LitElement{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?n.html`
      <div class="popover">
        ${this.title?n.html`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:n.html``}};ue.styles=n.css`
    :host {
      display: block;
    }
    .popover {
      position: absolute;
      top: calc(100% + 8px);
      left: 20px;
      z-index: 50;
      min-width: 280px;
      max-width: 420px;
      max-height: 400px;
      overflow-y: auto;
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
      margin-bottom: 12px;
    }
  `;at([c.property()],ue.prototype,"title",2);at([c.property({type:Boolean})],ue.prototype,"open",2);ue=at([c.customElement("ap-filter-popover")],ue);var Ks=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Pt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ys(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ks(e,s,a),a};let ke=class extends n.LitElement{constructor(){super(...arguments),this.selected=[]}_toggle(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.TYPE,values:e,operator:y.IS},bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="options">
        ${cs.map(t=>n.html`
            <div
              class="option ${this.selected.includes(t.value)?"selected":""}"
              @click=${()=>this._toggle(t.value)}
            >
              <ap-checkbox
                ?checked=${this.selected.includes(t.value)}
              ></ap-checkbox>
              <ap-icon name=${t.icon} size="16"></ap-icon>
              <span class="option-label">${t.label}</span>
            </div>
          `)}
      </div>
    `}};ke.styles=n.css`
    :host {
      display: block;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .option:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
    }

    ap-icon {
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    .option.selected ap-icon {
      color: var(--ap-primary, #3b82f6);
    }
  `;Pt([c.property({type:Array})],ke.prototype,"selected",2);ke=Pt([c.customElement("ap-filter-type")],ke);var Xs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,W=(t,e,s,r)=>{for(var a=r>1?void 0:r?Qs(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Xs(e,s,a),a};function _t(t){return t.toISOString().split("T")[0]}let R=class extends n.LitElement{constructor(){super(...arguments),this.filterKey=g.DATE,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===g.LICENSE_EXPIRY}get _rangeOptions(){return this._isLicenseExpiry?fs:tt}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=Tt(t);s&&(this.from=s.from,this.to=s.to),this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,r=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=r:this.to=r,this.preset==="specific"&&t==="from"&&r){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&r&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&r&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderFieldTabs(){return this._isLicenseExpiry?n.nothing:n.html`
      <div class="field-tabs">
        ${us.map(t=>n.html`
            <button
              class="field-tab ${this.field===t.value?"active":""}"
              @click=${()=>this._selectField(t.value)}
            >
              ${t.label}
            </button>
          `)}
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return n.nothing;const e=this.from?_t(new Date(this.from)):"",s=this.to?_t(new Date(this.to)):"";return t==="specific"?n.html`
        <div class="date-inputs">
          <input
            type="date"
            .value=${e}
            @change=${r=>this._handleDateInput("from",r)}
          />
        </div>
      `:t==="before"?n.html`
        <div class="date-inputs">
          <span class="separator">Before</span>
          <input
            type="date"
            .value=${s}
            @change=${r=>this._handleDateInput("to",r)}
          />
        </div>
      `:t==="after"?n.html`
        <div class="date-inputs">
          <span class="separator">After</span>
          <input
            type="date"
            .value=${e}
            @change=${r=>this._handleDateInput("from",r)}
          />
        </div>
      `:n.html`
      <div class="date-inputs">
        <input
          type="date"
          .value=${e}
          @change=${r=>this._handleDateInput("from",r)}
        />
        <span class="separator">to</span>
        <input
          type="date"
          .value=${s}
          @change=${r=>this._handleDateInput("to",r)}
        />
      </div>
    `}render(){return n.html`
      ${this._renderFieldTabs()}
      <div class="presets">
        ${this._rangeOptions.map(t=>n.html`
            <button
              class="preset ${this.preset===t.value?"active":""}"
              @click=${()=>this._selectPreset(t.value)}
            >
              ${t.label}
            </button>
          `)}
      </div>
      ${this._renderDateInputs()}
    `}};R.styles=n.css`
    :host {
      display: block;
    }

    .field-tabs {
      display: flex;
      gap: 0;
      margin-bottom: 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-tab {
      flex: 1;
      padding: 6px 12px;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      transition: background 150ms, color 150ms;
    }

    .field-tab:not(:last-child) {
      border-right: 1px solid var(--ap-border, #e4e4e7);
    }

    .field-tab:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .field-tab.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }

    .preset {
      padding: 4px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: 9999px;
      background: none;
      font-size: 0.8125rem;
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, border-color 150ms, color 150ms;
    }

    .preset:hover,
    .preset.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .date-inputs {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }

    input[type='date'] {
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, #fff);
    }

    input[type='date']:focus {
      outline: 2px solid var(--ap-primary, oklch(0.65 0.19 258));
      outline-offset: -1px;
    }

    .separator {
      color: var(--ap-muted-foreground, #71717a);
      font-size: 0.8125rem;
    }
  `;W([c.property()],R.prototype,"filterKey",2);W([c.property()],R.prototype,"field",2);W([c.property()],R.prototype,"kind",2);W([c.property()],R.prototype,"preset",2);W([c.property()],R.prototype,"from",2);W([c.property()],R.prototype,"to",2);R=W([c.customElement("ap-filter-date")],R);var Ws=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,be=(t,e,s,r)=>{for(var a=r>1?void 0:r?Zs(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ws(e,s,a),a};let Y=class extends n.LitElement{constructor(){super(...arguments),this.available=[],this.selected=[],this.filterKey=g.TAGS,this._search=""}get _atLimit(){return this.selected.length>=ut}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(r=>r!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:y.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}render(){const t=this.available.filter(e=>e.toLowerCase().includes(this._search.toLowerCase()));return n.html`
      <input
        class="search-input"
        type="text"
        placeholder="Search tags..."
        .value=${this._search}
        @input=${this._onSearchInput}
      />

      ${this.selected.length>0?n.html`
            <div class="limit-indicator ${this._atLimit?"at-limit":""}">
              ${this.selected.length} / ${ut} selected
            </div>
          `:""}

      <div class="tags">
        ${t.length===0?n.html`<span class="empty-message">No tags found</span>`:t.map(e=>{const s=this.selected.includes(e),r=!s&&this._atLimit;return n.html`
                <button
                  class="tag ${s?"selected":""} ${r?"disabled":""}"
                  ?disabled=${r}
                  @click=${()=>this._toggle(e)}
                >
                  ${e}
                </button>
              `})}
      </div>
    `}};Y.styles=n.css`
    :host {
      display: block;
    }

    .search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      margin-bottom: 8px;
      box-sizing: border-box;
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      transition: border-color 150ms;
    }

    .search-input:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    .search-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .limit-indicator {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 8px;
      text-align: right;
    }

    .limit-indicator.at-limit {
      color: var(--ap-destructive, #ef4444);
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 10px;
      border-radius: 9999px;
      font-size: 0.8125rem;
      cursor: pointer;
      border: 1px solid var(--ap-border, #e4e4e7);
      background: none;
      color: var(--ap-foreground, #09090b);
      transition: all 150ms;
      font-family: inherit;
    }

    .tag:hover:not(.disabled) {
      border-color: var(--ap-primary, #3b82f6);
    }

    .tag.selected {
      background: var(--ap-primary-10, oklch(0.623 0.214 259.1 / 0.1));
      border-color: var(--ap-primary, #3b82f6);
      color: var(--ap-primary, #3b82f6);
    }

    .tag.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .empty-message {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding: 8px 0;
    }
  `;be([c.property({type:Array})],Y.prototype,"available",2);be([c.property({type:Array})],Y.prototype,"selected",2);be([c.property()],Y.prototype,"filterKey",2);be([c.state()],Y.prototype,"_search",2);Y=be([c.customElement("ap-filter-tags")],Y);var Js=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,je=(t,e,s,r)=>{for(var a=r>1?void 0:r?ea(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Js(e,s,a),a};let te=class extends n.LitElement{constructor(){super(...arguments),this.labels=[],this.selected=[],this._search=""}get _atLimit(){return this.selected.length>=ft}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(r=>r!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.LABELS,values:s,operator:y.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}render(){const t=this.labels.filter(e=>e.name.toLowerCase().includes(this._search.toLowerCase()));return n.html`
      <input
        class="search-input"
        type="text"
        placeholder="Search labels..."
        .value=${this._search}
        @input=${this._onSearchInput}
      />

      ${this.selected.length>0?n.html`
            <div class="limit-indicator ${this._atLimit?"at-limit":""}">
              ${this.selected.length} / ${ft} selected
            </div>
          `:""}

      <div class="labels">
        ${t.length===0?n.html`<span class="empty-message">No labels found</span>`:t.map(e=>{const s=this.selected.includes(e.uuid),r=!s&&this._atLimit;return n.html`
                <div
                  class="label-item ${r?"disabled":""}"
                  @click=${()=>!r&&this._toggle(e.uuid)}
                >
                  <ap-checkbox ?checked=${s}></ap-checkbox>
                  <div
                    class="color-dot"
                    style="background: ${e.color}"
                  ></div>
                  <span class="label-name">${e.name}</span>
                  <span class="count">${e.assetsCount}</span>
                </div>
              `})}
      </div>
    `}};te.styles=n.css`
    :host {
      display: block;
    }

    .search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      margin-bottom: 8px;
      box-sizing: border-box;
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      transition: border-color 150ms;
    }

    .search-input:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    .search-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .limit-indicator {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 8px;
      text-align: right;
    }

    .limit-indicator.at-limit {
      color: var(--ap-destructive, #ef4444);
    }

    .labels {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .label-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .label-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .label-item.disabled:hover {
      background: none;
    }

    .color-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .label-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    .empty-message {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding: 8px 0;
    }
  `;je([c.property({type:Array})],te.prototype,"labels",2);je([c.property({type:Array})],te.prototype,"selected",2);je([c.state()],te.prototype,"_search",2);te=je([c.customElement("ap-filter-labels")],te);var ta=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Ne=(t,e,s,r)=>{for(var a=r>1?void 0:r?sa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ta(e,s,a),a};let se=class extends n.LitElement{constructor(){super(...arguments),this.selected="",this.tolerance=as,this.coverage=ss}_selectColor(t){this.selected=this.selected===t?"":t,this._dispatchChange()}_selectTolerance(t){this.tolerance=t,this._dispatchChange()}_handleCoverageInput(t){const e=t.target.value,s=parseInt(e,10);!isNaN(s)&&s>=0&&s<=100&&(this.coverage=String(s),this._dispatchChange())}_dispatchChange(){if(!this.selected){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=`${this.selected} ${this.tolerance} ${this.tolerance} ${this.coverage}`;this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="section">
        <div class="palette">
          ${gs.map(t=>n.html`
              <button
                class="swatch ${this.selected===t?"selected":""}"
                style="background:${t};${t==="#ffffff"?" border: 1px solid #e4e4e7;":""}"
                @click=${()=>this._selectColor(t)}
                title=${t}
              ></button>
            `)}
        </div>
      </div>

      <div class="section">
        <div class="section-label">Tolerance</div>
        <div class="tolerance-options">
          ${ms.map(t=>n.html`
              <button
                class="tolerance-btn ${this.tolerance===t.value?"active":""}"
                @click=${()=>this._selectTolerance(t.value)}
              >
                ${t.label}
              </button>
            `)}
        </div>
      </div>

      <div class="section">
        <div class="section-label">Coverage</div>
        <div class="coverage-row">
          <input
            type="number"
            class="coverage-input"
            min="0"
            max="100"
            .value=${this.coverage}
            @change=${this._handleCoverageInput}
          />
          <span class="coverage-unit">%</span>
        </div>
      </div>
    `}};se.styles=n.css`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 12px;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 6px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .palette {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 8px;
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
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }

    .tolerance-options {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .tolerance-btn {
      padding: 4px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: 9999px;
      background: none;
      font-size: 0.8125rem;
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, border-color 150ms, color 150ms;
    }

    .tolerance-btn:hover,
    .tolerance-btn.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .coverage-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .coverage-input {
      width: 64px;
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, #fff);
    }

    .coverage-input:focus {
      outline: 2px solid var(--ap-primary, oklch(0.65 0.19 258));
      outline-offset: -1px;
    }

    .coverage-unit {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
    }
  `;Ne([c.property()],se.prototype,"selected",2);Ne([c.property()],se.prototype,"tolerance",2);Ne([c.property()],se.prototype,"coverage",2);se=Ne([c.customElement("ap-filter-color")],se);var aa=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,oe=(t,e,s,r)=>{for(var a=r>1?void 0:r?ra(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&aa(e,s,a),a};const xt=1e6;let U=class extends n.LitElement{constructor(){super(...arguments),this.min=0,this.max=0,this._minMB="",this._maxMB="",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minMB=String(this.min)),this.max>0&&(this._maxMB=String(this.max)))}_emitChange(){const t=this._minMB!==""?Math.round(parseFloat(this._minMB)*xt):null,e=this._maxMB!==""?Math.round(parseFloat(this._maxMB)*xt):null;let s;if(t!==null&&e!==null)s=`${t}..${e}`;else if(t!==null)s=`${t}..`;else if(e!==null)s=`..${e}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.SIZE,values:[],operator:y.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.SIZE,values:[s],operator:y.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minMB=t.target.value,this._emitChange()}_onMaxInput(t){this._maxMB=t.target.value,this._emitChange()}render(){return n.html`
      <div class="range-inputs">
        <div class="input-group">
          <span class="input-label">Min</span>
          <div class="input-wrapper">
            <input
              type="number"
              placeholder="0"
              min="0"
              step="0.1"
              .value=${this._minMB}
              @change=${this._onMinInput}
            />
            <span class="unit">MB</span>
          </div>
        </div>

        <span class="separator">&ndash;</span>

        <div class="input-group">
          <span class="input-label">Max</span>
          <div class="input-wrapper">
            <input
              type="number"
              placeholder="Any"
              min="0"
              step="0.1"
              .value=${this._maxMB}
              @change=${this._onMaxInput}
            />
            <span class="unit">MB</span>
          </div>
        </div>
      </div>
    `}};U.styles=n.css`
    :host {
      display: block;
    }

    .range-inputs {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }

    .input-label {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      font-weight: 500;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    input[type='number'] {
      width: 100%;
      min-width: 0;
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      transition: border-color 150ms;
      box-sizing: border-box;
      -moz-appearance: textfield;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type='number']:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    input[type='number']::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .unit {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    .separator {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding-top: 18px;
    }
  `;oe([c.property({type:Number})],U.prototype,"min",2);oe([c.property({type:Number})],U.prototype,"max",2);oe([c.state()],U.prototype,"_minMB",2);oe([c.state()],U.prototype,"_maxMB",2);oe([c.state()],U.prototype,"_initialized",2);U=oe([c.customElement("ap-filter-size")],U);var ia=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,Ue=(t,e,s,r)=>{for(var a=r>1?void 0:r?oa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ia(e,s,a),a};let ae=class extends n.LitElement{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[]}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}_renderSection(t,e,s,r){return n.html`
      <div class="section">
        <div class="section-label">${t}</div>
        <div class="options">
          ${e.map(a=>n.html`
              <button
                class="option ${s.includes(a.value)?"selected":""}"
                @click=${()=>r(a.value)}
              >
                ${a.label}
              </button>
            `)}
        </div>
      </div>
    `}render(){return n.html`
      ${this._renderSection("Resolution",ps,this.selectedResolution,t=>this._toggleResolution(t))}
      ${this._renderSection("Orientation",ds,this.selectedOrientation,t=>this._toggleOrientation(t))}
      ${this._renderSection("Faces",hs,this.selectedFaces,t=>this._toggleFaces(t))}
    `}};ae.styles=n.css`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 12px;
    }

    .section:last-child {
      margin-bottom: 0;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 6px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .options {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .option {
      padding: 4px 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, border-color 150ms, color 150ms;
    }

    .option:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .option.selected {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `;Ue([c.property({type:Array})],ae.prototype,"selectedResolution",2);Ue([c.property({type:Array})],ae.prototype,"selectedOrientation",2);Ue([c.property({type:Array})],ae.prototype,"selectedFaces",2);ae=Ue([c.customElement("ap-filter-image")],ae);var na=Object.defineProperty,la=Object.getOwnPropertyDescriptor,M=(t,e,s,r)=>{for(var a=r>1?void 0:r?la(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&na(e,s,a),a};function b(t){return`${Ze[t.type]||""}${t.key}`}let k=class extends n.LitElement{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set}get _atFieldLimit(){return this.visibleFields.length>=vt}_getField(t){return this.fields.find(e=>b(e)===t)}_getUIType(t){return _s[t.type]}_getApplied(t){return this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Je||t[0]===et}_emitFilterChange(t,e,s){const r=b(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:r,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=b(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=b(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const s=e.target.value,a=this._getApplied(b(t)).values||[];this._emitFilterChange(t,s,a)}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(b(t)).operator||mt[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const r=e.target.value,a=b(t),o=this._getApplied(a),i=o.operator||Xe[0].value,l=[...o.values||[]];s===0?l[0]=r:l[1]=r;const p=l.filter(d=>d!==""&&d!==void 0);if(p.length>0){const d=t.type===m.DECIMAL2;if(!p.every(u=>d?!isNaN(parseFloat(u)):/^-?\d+$/.test(u)))return}this._emitFilterChange(t,i,l)}_onBooleanSelect(t,e){var a;const s=this._getApplied(b(t));((a=s.values)==null?void 0:a[0])===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneChange(t,e){const s=e.target.value,a=this._getApplied(b(t)).operator||we[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onMultiSelectToggle(t,e){const s=b(t),r=this._getApplied(s),a=r.operator||de[0].value,o=r.values||[],i=o.includes(e)?o.filter(l=>l!==e):[...o,e];this._emitFilterChange(t,a,i)}_onTagKeydown(t,e){const s=b(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e){const s=e.target.value;if(s.includes(",")){const r=s.replace(/,/g,"").trim();if(r){this._tagInputs={...this._tagInputs,[t]:r};const a=this._getField(t);a&&this._commitTagInput(a,t)}return}this._tagInputs={...this._tagInputs,[t]:s}}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const r=this._getApplied(e),a=r.operator||de[0].value,o=r.values||[];o.includes(s)||this._emitFilterChange(t,a,[...o,s]),this._tagInputs={...this._tagInputs,[e]:""}}_removeTag(t,e){const s=b(t),r=this._getApplied(s),a=r.operator||de[0].value,o=r.values||[];this._emitFilterChange(t,a,o.filter(i=>i!==e))}_onDatePreset(t,e){const s=b(t);if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const r=new Date;let a="",o="";switch(e){case"today":{const i=new Date(r);i.setHours(0,0,0,0),a=i.toISOString(),o=r.toISOString();break}case"last_week":{const i=new Date(r),l=i.getDay();i.setDate(i.getDate()-(l===0?6:l-1)),i.setHours(0,0,0,0);const p=new Date(i);p.setDate(p.getDate()-7),a=p.toISOString(),o=i.toISOString();break}case"last_month":{const i=new Date(r.getFullYear(),r.getMonth(),1),l=new Date(i);l.setMonth(l.getMonth()-1),a=l.toISOString(),o=i.toISOString();break}case"last_year":{const i=new Date(r.getFullYear(),0,1),l=new Date(i);l.setFullYear(l.getFullYear()-1),a=l.toISOString(),o=i.toISOString();break}}a&&o&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:o},this._emitFilterChange(t,"..",[a,o]))}_onDateInput(t,e,s){const r=s.target.value,a=b(t),o=this._datePresets[a]||"",i=r?new Date(r+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:i}:this._dateTos={...this._dateTos,[a]:i};let l=this._dateFroms[a]||"",p=this._dateTos[a]||"";o==="after"&&l&&(p=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:p}),o==="before"&&p&&(l=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:l}),l&&p&&this._emitFilterChange(t,"..",[l,p])}_onGeoInput(t){var d,h,u;const e=b(t),s=(d=this.shadowRoot)==null?void 0:d.querySelector(`[data-geo-lat="${e}"]`),r=(h=this.shadowRoot)==null?void 0:h.querySelector(`[data-geo-lng="${e}"]`),a=(u=this.shadowRoot)==null?void 0:u.querySelector(`[data-geo-radius="${e}"]`),o=(s==null?void 0:s.value)||"",i=(r==null?void 0:r.value)||"",l=(a==null?void 0:a.value)||"";if(!o&&!i){this._emitFilterChange(t,void 0,[]);return}let p=`${o},${i}`;l&&(p+=`..${l}`),this._emitFilterChange(t,y.IS,[p])}_onEmptyOption(t,e){var a;const s=this._getApplied(b(t));((a=s.values)==null?void 0:a[0])===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(o=>o.label.toLowerCase().includes(t)),s=e.filter(o=>!o.group||o.group==="root"),r=e.filter(o=>o.group==="product"),a=(o,i)=>i.length===0?n.nothing:n.html`
        <div class="field-group-label">${o}</div>
        ${i.map(l=>{const p=b(l),d=this.visibleFields.includes(p),h=!d&&this._atFieldLimit;return n.html`
            <div
              class="field-item ${d?"selected":""} ${h?"disabled":""}"
              @click=${()=>!h&&!d&&this._addField(l)}
            >
              ${d?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:n.nothing}
              <span>${l.label}</span>
            </div>
          `})}
      `;return n.html`
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
        <input
          class="field-search"
          type="text"
          placeholder="Search fields..."
          .value=${this._fieldSearch}
          @input=${o=>{this._fieldSearch=o.target.value}}
        />
        <div class="field-list">
          ${e.length===0?n.html`<div class="empty-msg">No fields found</div>`:n.html`
                ${a("Root fields",s)}
                ${a("Product fields",r)}
              `}
        </div>
        ${this.visibleFields.length>0?n.html`
              <div
                class="limit-note ${this._atFieldLimit?"at-limit":""}"
              >
                ${this.visibleFields.length} / ${vt} fields selected
              </div>
            `:n.nothing}
      </div>
    `}_renderOperator(t,e){const r=this._getApplied(b(t)).operator||e[0].value;return n.html`
      <select
        class="operator-select"
        .value=${r}
        @change=${a=>this._onOperatorChange(t,a)}
      >
        ${e.map(a=>n.html`<option value=${a.value} ?selected=${r===a.value}>
              ${a.label}
            </option>`)}
      </select>
    `}_renderEmptyOptions(t){var r;const s=(r=this._getApplied(b(t)).values)==null?void 0:r[0];return n.html`
      <div class="divider"></div>
      <div class="options-list">
        ${Se.map(a=>n.html`
            <div
              class="option-item"
              @click=${()=>this._onEmptyOption(t,a.value)}
            >
              <div class="radio-dot ${s===a.value?"active":""}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${a.label}</span>
            </div>
          `)}
      </div>
    `}_renderTextFilter(t){var a;const e=this._getApplied(b(t)),r=this._isSpecialValue(e.values)?"":((a=e.values)==null?void 0:a[0])||"";return n.html`
      ${this._renderOperator(t,mt)}
      <input
        class="text-input"
        type="text"
        placeholder="Enter value..."
        .value=${r}
        @change=${o=>this._onTextInput(t,o)}
      />
      ${this._renderEmptyOptions(t)}
    `}_renderNumberFilter(t){var u,f;const e=b(t),s=this._getApplied(e),r=s.operator||Xe[0].value,a=this._isSpecialValue(s.values),o=r==="..",i=t.type===m.DECIMAL2,l=i?"0.01":"1",p=i?"0.00":"0",d=a?"":((u=s.values)==null?void 0:u[0])||"",h=a?"":((f=s.values)==null?void 0:f[1])||"";return n.html`
      ${this._renderOperator(t,Xe)}
      ${o?n.html`
            <div class="range-row">
              <input
                class="number-input"
                type="number"
                step=${l}
                placeholder=${p}
                .value=${d}
                @change=${v=>this._onNumberInput(t,v,0)}
              />
              <span class="range-separator">to</span>
              <input
                class="number-input"
                type="number"
                step=${l}
                placeholder=${p}
                .value=${h}
                @change=${v=>this._onNumberInput(t,v,1)}
              />
            </div>
          `:n.html`
            <input
              class="number-input"
              type="number"
              step=${l}
              placeholder=${p}
              .value=${d}
              @change=${v=>this._onNumberInput(t,v,0)}
            />
          `}
      ${this._renderEmptyOptions(t)}
    `}_renderBooleanFilter(t){var r;const s=(r=this._getApplied(b(t)).values)==null?void 0:r[0];return n.html`
      <div class="options-list">
        ${ys.map(a=>n.html`
            <div
              class="option-item"
              @click=${()=>this._onBooleanSelect(t,a.value)}
            >
              <div class="radio-dot ${s===a.value?"active":""}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${a.label}</span>
            </div>
          `)}
      </div>
    `}_renderSelectOneFilter(t){var l;const e=b(t),s=this._getApplied(e),r=this._isSpecialValue(s.values),a=this._specificModeFields.has(e),o=r?"":((l=s.values)==null?void 0:l[0])||"",i=t.possible_values||[];return n.html`
      ${this._renderOperator(t,we)}
      ${a?n.html`
          <input
            class="text-input"
            type="text"
            placeholder="Enter custom value..."
            .value=${o}
            @change=${p=>{const d=p.target.value,h=s.operator||we[0].value;this._emitFilterChange(t,h,d?[d]:[])}}
          />
        `:n.html`
          <select
            class="value-select"
            .value=${o}
            @change=${p=>this._onSelectOneChange(t,p)}
          >
            <option value="">Select...</option>
            ${i.map(p=>n.html`<option value=${p.api_value} ?selected=${o===p.api_value}>
                  ${p.label}
                </option>`)}
          </select>
        `}
      <div class="divider"></div>
      <div class="options-list">
        ${bs.map(p=>{var d;return n.html`
            <div
              class="option-item"
              @click=${()=>{if(p.value===$e){const h=new Set(this._specificModeFields);h.add(e),this._specificModeFields=h}else{if(this._specificModeFields.has(e)){const h=new Set(this._specificModeFields);h.delete(e),this._specificModeFields=h}this._onEmptyOption(t,p.value)}}}
            >
              <div class="radio-dot ${p.value===$e&&a||p.value!==$e&&((d=s.values)==null?void 0:d[0])===p.value?"active":""}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${p.label}</span>
            </div>
          `})}
      </div>
    `}_renderMultiSelectFilter(t){const e=this._getApplied(b(t)),r=this._isSpecialValue(e.values)?[]:e.values||[],a=t.possible_values||[];return n.html`
      ${this._renderOperator(t,de)}
      <div class="multi-options">
        ${a.map(o=>n.html`
            <div
              class="multi-option"
              @click=${()=>this._onMultiSelectToggle(t,o.api_value)}
            >
              <ap-checkbox
                ?checked=${r.includes(o.api_value)}
              ></ap-checkbox>
              <span>${o.label}</span>
            </div>
          `)}
      </div>
      ${this._renderEmptyOptions(t)}
    `}_renderTagsFilter(t){const e=b(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?[]:s.values||[],o=this._tagInputs[e]||"";return n.html`
      ${this._renderOperator(t,de)}
      <div class="tags-container">
        ${a.map(i=>n.html`
            <span class="tag-chip">
              ${i}
              <button
                class="tag-chip-remove"
                @click=${()=>this._removeTag(t,i)}
              >
                <ap-icon name="close" .size=${12}></ap-icon>
              </button>
            </span>
          `)}
        <input
          class="tag-input"
          type="text"
          placeholder=${a.length>0?"Add tag...":"Type and press Enter..."}
          .value=${o}
          @input=${i=>this._onTagInput(e,i)}
          @keydown=${i=>this._onTagKeydown(t,i)}
        />
      </div>
      ${this._renderEmptyOptions(t)}
    `}_renderDateFilter(t){var h;const e=b(t),s=this._datePresets[e]||"",r=this._getApplied(e),o=this._isSpecialValue(r.values)?((h=r.values)==null?void 0:h[0])||"":s,i=[...tt,{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],l=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",p=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",d=["before","after","between"].includes(o);return n.html`
      <div class="presets">
        ${i.map(u=>n.html`
            <button
              class="preset ${o===u.value?"active":""}"
              @click=${()=>this._onDatePreset(t,u.value)}
            >
              ${u.label}
            </button>
          `)}
      </div>
      ${d?n.html`
            <div class="date-inputs">
              ${o==="before"?n.html`
                    <span class="separator">Before</span>
                    <input
                      type="date"
                      .value=${p}
                      @change=${u=>this._onDateInput(t,"to",u)}
                    />
                  `:o==="after"?n.html`
                      <span class="separator">After</span>
                      <input
                        type="date"
                        .value=${l}
                        @change=${u=>this._onDateInput(t,"from",u)}
                      />
                    `:n.html`
                      <input
                        type="date"
                        .value=${l}
                        @change=${u=>this._onDateInput(t,"from",u)}
                      />
                      <span class="separator">to</span>
                      <input
                        type="date"
                        .value=${p}
                        @change=${u=>this._onDateInput(t,"to",u)}
                      />
                    `}
            </div>
          `:n.nothing}
    `}_renderGeoFilter(t){var l;const e=b(t),s=this._getApplied(e),r=this._isSpecialValue(s.values);let a="",o="",i="";if(!r&&((l=s.values)!=null&&l[0])){const p=s.values[0],[d,h]=p.split(".."),[u,f]=d.split(",");a=u||"",o=f||"",i=h||""}return n.html`
      <div class="geo-row">
        <div class="geo-field">
          <span class="geo-label">Latitude</span>
          <input
            class="text-input"
            type="text"
            placeholder="e.g. 48.8566"
            data-geo-lat=${e}
            .value=${a}
            @change=${()=>this._onGeoInput(t)}
          />
        </div>
        <div class="geo-field">
          <span class="geo-label">Longitude</span>
          <input
            class="text-input"
            type="text"
            placeholder="e.g. 2.3522"
            data-geo-lng=${e}
            .value=${o}
            @change=${()=>this._onGeoInput(t)}
          />
        </div>
      </div>
      <div class="geo-field">
        <span class="geo-label">Radius (optional)</span>
        <input
          class="number-input"
          type="number"
          placeholder="km"
          data-geo-radius=${e}
          .value=${i}
          @change=${()=>this._onGeoInput(t)}
        />
      </div>
      ${this._renderEmptyOptions(t)}
    `}_renderAttachmentFilter(t){var r;const s=(r=this._getApplied(b(t)).values)==null?void 0:r[0];return n.html`
      <div class="options-list">
        ${Se.map(a=>n.html`
            <div
              class="option-item"
              @click=${()=>this._onEmptyOption(t,a.value)}
            >
              <div class="radio-dot ${s===a.value?"active":""}">
                <div class="radio-dot-inner"></div>
              </div>
              <span>${a.label}</span>
            </div>
          `)}
      </div>
    `}_renderFaceMatcherFilter(t){const e=b(t),s=this._getApplied(e),r=s.values||[],a=s.operator||y.IS;return n.html`
      <div class="field-filter">
        <ap-dropdown
          variant="borderless"
          .value=${a}
          .options=${we}
          @change=${o=>this._emitFilterChange(t,o.detail.value,r)}
        ></ap-dropdown>
        <input
          class="text-input"
          type="text"
          placeholder="Search faces..."
          .value=${r.join(", ")}
          @change=${o=>{const l=o.target.value.split(",").map(p=>p.trim()).filter(Boolean);this._emitFilterChange(t,a,l)}}
        />
      </div>
      ${this._renderEmptyOptions(t)}
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===m.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return n.nothing}}_renderFieldSection(t){const e=this._getField(t);if(!e)return n.nothing;const s=this._collapsedFields.has(t);return n.html`
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
            <span>${e.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${r=>{r.stopPropagation(),this._removeField(e)}}
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
    `}render(){const t=this.visibleFields.length>0;return n.html`
      ${this._showFieldSelection||!t?this._renderFieldSelection():n.nothing}

      ${t?n.html`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?n.html`
                  <button
                    class="add-field-btn"
                    style="margin-top: 8px"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    Add field
                  </button>
                `:n.nothing}
          `:n.nothing}
    `}};k.styles=n.css`
    :host {
      display: block;
    }

    /* ── Field selection panel ─────────────────────────────── */

    .add-field-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      width: 100%;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: all 150ms;
    }

    .add-field-btn:hover {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .field-selection {
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, #fff);
      margin-bottom: 12px;
    }

    .field-selection-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }

    .field-selection-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
    }

    .field-selection-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, #71717a);
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .field-selection-close:hover {
      color: var(--ap-foreground, #09090b);
    }

    .field-search {
      width: 100%;
      padding: 8px 12px;
      border: none;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: transparent;
      outline: none;
      box-sizing: border-box;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .field-search::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .field-list {
      max-height: 260px;
      overflow-y: auto;
      padding: 4px 0;
    }

    .field-group-label {
      padding: 6px 12px 4px;
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ap-muted-foreground, #71717a);
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      transition: background 100ms;
    }

    .field-item:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .field-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .field-item.selected {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .limit-note {
      padding: 8px 12px;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      text-align: center;
    }

    .limit-note.at-limit {
      color: var(--ap-destructive, #ef4444);
    }

    .empty-msg {
      padding: 16px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      text-align: center;
    }

    /* ── Per-field filter sections ─────────────────────────── */

    .field-filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-section {
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--ap-muted, #f4f4f5);
      cursor: pointer;
      user-select: none;
    }

    .field-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
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
      color: var(--ap-muted-foreground, #71717a);
      padding: 2px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      transition: all 100ms;
    }

    .icon-btn:hover {
      color: var(--ap-foreground, #09090b);
      background: var(--ap-border, #e4e4e7);
    }

    .icon-btn.remove:hover {
      color: var(--ap-destructive, #ef4444);
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

    /* ── Shared controls ───────────────────────────────────── */

    .operator-select {
      padding: 5px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
    }

    .text-input, .number-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      box-sizing: border-box;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: border-color 150ms;
    }

    .text-input:focus, .number-input:focus {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .text-input::placeholder, .number-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .range-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .range-row .number-input {
      flex: 1;
    }

    .range-separator {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    /* ── Options list (boolean, empty/non-empty, etc.) ──── */

    .options-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .option-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
    }

    .radio-dot {
      width: 16px;
      height: 16px;
      border: 2px solid var(--ap-border, #e4e4e7);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: border-color 150ms;
    }

    .radio-dot.active {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .radio-dot-inner {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--ap-primary, oklch(0.65 0.19 258));
      display: none;
    }

    .radio-dot.active .radio-dot-inner {
      display: block;
    }

    /* ── Select dropdown for select-one ─────────────────── */

    .value-select {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      box-sizing: border-box;
      cursor: pointer;
    }

    /* ── Multi-select checkboxes ────────────────────────── */

    .multi-options {
      max-height: 180px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .multi-option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
    }

    /* ── Tags input ─────────────────────────────────────── */

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 6px;
      border: 1px solid var(--ap-border, #e4e4e7);
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
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
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
      color: var(--ap-foreground, #09090b);
      background: transparent;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    /* ── Geo inputs ─────────────────────────────────────── */

    .geo-row {
      display: flex;
      gap: 8px;
    }

    .geo-field {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .geo-label {
      font-size: 0.6875rem;
      color: var(--ap-muted-foreground, #71717a);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* ── Date presets ───────────────────────────────────── */

    .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .preset {
      padding: 4px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: 9999px;
      background: none;
      font-size: 0.8125rem;
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .preset:hover, .preset.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .date-inputs {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 4px;
    }

    input[type="date"] {
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .separator {
      color: var(--ap-muted-foreground, #71717a);
      font-size: 0.8125rem;
    }

    /* ── Divider ────────────────────────────────────────── */

    .divider {
      height: 1px;
      background: var(--ap-border, #e4e4e7);
      margin: 4px 0;
    }

    /* ── Chevron ────────────────────────────────────────── */

    .chevron {
      transition: transform 150ms;
    }

    .chevron.expanded {
      transform: rotate(90deg);
    }
  `;M([c.property({type:Array})],k.prototype,"fields",2);M([c.property({type:Object})],k.prototype,"appliedFilters",2);M([c.property({type:Array})],k.prototype,"visibleFields",2);M([c.state()],k.prototype,"_showFieldSelection",2);M([c.state()],k.prototype,"_fieldSearch",2);M([c.state()],k.prototype,"_collapsedFields",2);M([c.state()],k.prototype,"_tagInputs",2);M([c.state()],k.prototype,"_datePresets",2);M([c.state()],k.prototype,"_dateFroms",2);M([c.state()],k.prototype,"_dateTos",2);M([c.state()],k.prototype,"_specificModeFields",2);k=M([c.customElement("ap-filter-metadata")],k);var ca=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,I=(t,e,s,r)=>{for(var a=r>1?void 0:r?pa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ca(e,s,a),a};let A=class extends n.LitElement{constructor(){super(...arguments),this.selectedStatus=[],this.statusOperator=":",this.approverValue="",this.approverOperator=":",this.requesterValue="",this.requesterOperator=":",this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._expandedSection=null}_toggleSection(t){this._expandedSection=this._expandedSection===t?null:t}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(z.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(z.STATUS,this.selectedStatus,e)}_handleApproverInput(t){const e=t.target.value;this._emitChange(z.APPROVER,e?[e]:[],this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(z.APPROVER,this.approverValue?[this.approverValue]:[],e)}_handleRequesterInput(t){const e=t.target.value;this._emitChange(z.REQUESTOR,e?[e]:[],this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(z.REQUESTOR,this.requesterValue?[this.requesterValue]:[],e)}_handleDueDatePreset(t){const e=this.dueDatePreset===t?"":t;this._emitChange(z.DUE_DATE,e?[e]:[],":")}_handleDueDateFrom(t){const e=t.target.value;this._emitDateChange(e,this.dueDateTo)}_handleDueDateTo(t){const e=t.target.value;this._emitDateChange(this.dueDateFrom,e)}_emitDateChange(t,e){const s=[];t&&s.push(t),e&&s.push(e),this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:z.DUE_DATE,values:s,operator:t&&e?"..":t?">=":"<="},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}render(){return n.html`
      <!-- Approval Status -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Status</span>
        </div>
        <div class="operator-row">
          <ap-dropdown
            variant="borderless"
            .value=${this.statusOperator}
            .options=${Qe}
            @change=${this._handleStatusOperator}
          ></ap-dropdown>
        </div>
        <div class="options">
          ${vs.map(t=>n.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(t.value)}
                @ap-toggle=${()=>this._toggleStatus(t.value)}
              >${t.label}</ap-checkbox>
            `)}
        </div>
      </div>

      <!-- Task Approver -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Approver</span>
        </div>
        <div class="operator-row">
          <ap-dropdown
            variant="borderless"
            .value=${this.approverOperator}
            .options=${Qe}
            @change=${this._handleApproverOperator}
          ></ap-dropdown>
        </div>
        <input
          class="text-input"
          type="text"
          placeholder="Enter approver name..."
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>

      <!-- Task Requester -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Requester</span>
        </div>
        <div class="operator-row">
          <ap-dropdown
            variant="borderless"
            .value=${this.requesterOperator}
            .options=${Qe}
            @change=${this._handleRequesterOperator}
          ></ap-dropdown>
        </div>
        <input
          class="text-input"
          type="text"
          placeholder="Enter requester name..."
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>

      <!-- Task Due Date -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Due date</span>
        </div>
        <div class="date-options">
          ${Se.map(t=>n.html`
              <button
                class="date-option ${this.dueDatePreset===t.value?"selected":""}"
                @click=${()=>this._handleDueDatePreset(t.value)}
              >${t.label}</button>
            `)}
          ${tt.map(t=>n.html`
              <button
                class="date-option ${this.dueDatePreset===t.value?"selected":""}"
                @click=${()=>this._handleDueDatePreset(t.value)}
              >${t.label}</button>
            `)}
        </div>
        ${this.dueDatePreset==="before"||this.dueDatePreset==="after"||this.dueDatePreset==="between"?n.html`
            <div class="date-input-row">
              ${this.dueDatePreset!=="before"?n.html`<input class="date-input" type="date" .value=${this.dueDateFrom} @change=${this._handleDueDateFrom} />`:n.nothing}
              ${this.dueDatePreset!=="after"?n.html`<input class="date-input" type="date" .value=${this.dueDateTo} @change=${this._handleDueDateTo} />`:n.nothing}
            </div>
          `:n.nothing}
      </div>
    `}};A.styles=n.css`
    :host {
      display: block;
    }
    .section {
      margin-bottom: 16px;
    }
    .section:last-child {
      margin-bottom: 0;
    }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .section-title {
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .text-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      outline: none;
      box-sizing: border-box;
    }
    .text-input:focus {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }
    .operator-row {
      margin-bottom: 6px;
    }
    .date-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .date-option {
      display: flex;
      align-items: center;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      transition: all 150ms;
    }
    .date-option:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .date-option.selected {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .date-input-row {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .date-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      outline: none;
    }
    .date-input:focus {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `;I([c.property({type:Array})],A.prototype,"selectedStatus",2);I([c.property()],A.prototype,"statusOperator",2);I([c.property()],A.prototype,"approverValue",2);I([c.property()],A.prototype,"approverOperator",2);I([c.property()],A.prototype,"requesterValue",2);I([c.property()],A.prototype,"requesterOperator",2);I([c.property()],A.prototype,"dueDatePreset",2);I([c.property()],A.prototype,"dueDateFrom",2);I([c.property()],A.prototype,"dueDateTo",2);I([c.state()],A.prototype,"_expandedSection",2);A=I([c.customElement("ap-filter-approval")],A);var da=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,T=(t,e,s,r)=>{for(var a=r>1?void 0:r?ha(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&da(e,s,a),a};let S=class extends n.LitElement{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.sortBy="created_at",this.sortDirection="desc",this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.metadataFields=[],this._showDropdown=!1,this._openFilter=null,this._handleOutsideClick=t=>{const e=t.composedPath();this._showDropdown&&this._filterDropdownEl&&!e.includes(this._filterDropdownEl)&&(this._showDropdown=!1),this._openFilter&&!e.includes(this)&&(this._openFilter=null)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_closeAllDropdowns(){var t;this._showDropdown=!1,this._openFilter=null,(t=this._sortDropdown)==null||t.close()}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_selectFilterKey(t){this._closeAllDropdowns(),this._openFilter=t}_handleSortOpen(){this._showDropdown=!1,this._openFilter=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:r}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:r},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_renderFilterContent(t){var s,r,a,o;const e=this.filters.applied;switch(t){case"type":{const i=e.type;return n.html`<ap-filter-type
          .selected=${(i==null?void 0:i.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const i=e.tags;return n.html`<ap-filter-tags
          .selected=${(i==null?void 0:i.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const i=e.labels;return n.html`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(i==null?void 0:i.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const i=e.color,p=(((s=i==null?void 0:i.values)==null?void 0:s[0])||"").split(" ");return n.html`<ap-filter-color
          .selected=${p[0]||""}
          .tolerance=${p[1]||"1"}
          .coverage=${p[3]||"20"}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const i=e.date;return n.html`<ap-filter-date
          .filterKey=${"date"}
          .field=${(i==null?void 0:i.field)||"created"}
          .kind=${(i==null?void 0:i.kind)||null}
          .from=${(i==null?void 0:i.from)||""}
          .to=${(i==null?void 0:i.to)||""}
          .preset=${(i==null?void 0:i.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const i=e.asset_expiration;return n.html`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${(i==null?void 0:i.field)||"created"}
          .kind=${(i==null?void 0:i.kind)||null}
          .from=${(i==null?void 0:i.from)||""}
          .to=${(i==null?void 0:i.to)||""}
          .preset=${(i==null?void 0:i.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const i=e.size,l=((r=i==null?void 0:i.values)==null?void 0:r[0])||"",[p,d]=l.split(".."),h=p?parseFloat(p)/1e6:0,u=d?parseFloat(d)/1e6:0;return n.html`<ap-filter-size
          .min=${h}
          .max=${u}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const i=e.image,l=i&&"resolution"in i?i:null;return n.html`<ap-filter-image
          .selectedResolution=${(l==null?void 0:l.resolution)||[]}
          .selectedOrientation=${(l==null?void 0:l.orientation)||[]}
          .selectedFaces=${(l==null?void 0:l.faces)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const i=e.approval_status,l=e.task_approver,p=e.task_requester,d=e.task_duedate;return n.html`<ap-filter-approval
          .selectedStatus=${(i==null?void 0:i.values)||[]}
          .statusOperator=${(i==null?void 0:i.operator)||":"}
          .approverValue=${((a=l==null?void 0:l.values)==null?void 0:a[0])||""}
          .approverOperator=${(l==null?void 0:l.operator)||":"}
          .requesterValue=${((o=p==null?void 0:p.values)==null?void 0:o[0])||""}
          .requesterOperator=${(p==null?void 0:p.operator)||":"}
          .dueDatePreset=${(d==null?void 0:d.preset)||""}
          .dueDateFrom=${(d==null?void 0:d.from)||""}
          .dueDateTo=${(d==null?void 0:d.to)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return n.html`<ap-filter-metadata
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
        ></ap-filter-metadata>`;case"product_ref":{const i=e.product_ref;return n.html`<ap-filter-tags
          .selected=${(i==null?void 0:i.values)||[]}
          .filterKey=${"product_ref"}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}default:return n.nothing}}_renderFilterButton(t){const e=this._isFilterActive(t.key);return n.html`
      <button
        class="filter-btn ${e?"active":""}"
        @click=${()=>this._selectFilterKey(t.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${t.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${t.label}
        </span>
      </button>
    `}render(){const t=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return n.html`
      <div class="toolbar-row">
        ${this.isLoading?n.html`<span class="count-skeleton"></span>`:this.totalCount>0||this.totalFolderCount>0?n.html`<span class="count">${this.totalFolderCount>0?`${this.totalFolderCount.toLocaleString()} folder${this.totalFolderCount!==1?"s":""}${this.totalCount>0?", ":""}`:""}${this.totalCount>0?`${this.totalCount.toLocaleString()} asset${this.totalCount!==1?"s":""}`:""}</span>`:n.html`<span class="count"></span>`}
        <span class="spacer"></span>
        <div class="controls">
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown?"open":""}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              Filters
              ${t>0?n.html`<span class="filter-count">${t}</span>`:n.html`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown?n.html`
              <div class="dropdown-menu">
                ${ls.map(e=>this._renderFilterButton(e))}
              </div>
            `:n.nothing}
          </div>
          <div class="divider"></div>
          <ap-dropdown
            variant="borderless"
            label="Sort"
            .value=${this.sortBy}
            .options=${[{value:"name",label:"Name"},{value:"created_at",label:"Date created"},{value:"modified_at",label:"Date modified"},{value:"size",label:"Size"},{value:"type",label:"Type"}]}
            @change=${this._handleSort}
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
        </div>
      </div>
      ${this._openFilter?n.html`
        <div class="popover-wrapper">
          <ap-filter-popover .open=${!0} .title=${Ct[this._openFilter]||this._openFilter}>
            ${this._renderFilterContent(this._openFilter)}
          </ap-filter-popover>
        </div>
      `:n.nothing}
    `}};S.styles=n.css`
    :host {
      display: block;
      padding: 8px 20px 0;
    }
    .toolbar-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--ap-muted, #f4f4f5) 25%, #e8e8ea 50%, var(--ap-muted, #f4f4f5) 75%);
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
      gap: 4px;
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
      padding: 6px 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: none;
      color: var(--ap-primary, oklch(0.65 0.19 258));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
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
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
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
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--ap-muted, #f4f4f5);
      border-color: var(--ap-muted-foreground, #a1a1aa);
    }
    .filter-btn.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
      color: var(--ap-foreground, #09090b);
    }
    .filter-btn.active:hover {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label ap-icon {
      color: var(--ap-muted-foreground, #71717a);
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, #e4e4e7);
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: -2px;
    }

    .popover-wrapper {
      position: relative;
    }
  `;T([c.property({type:Number})],S.prototype,"totalCount",2);T([c.property({type:Number})],S.prototype,"totalFolderCount",2);T([c.property({type:Boolean})],S.prototype,"isLoading",2);T([c.property()],S.prototype,"sortBy",2);T([c.property()],S.prototype,"sortDirection",2);T([c.property({type:Object})],S.prototype,"filters",2);T([c.property({type:Array})],S.prototype,"labels",2);T([c.property({type:Array})],S.prototype,"metadataFields",2);T([c.query("ap-dropdown")],S.prototype,"_sortDropdown",2);T([c.query(".filter-dropdown")],S.prototype,"_filterDropdownEl",2);T([c.state()],S.prototype,"_showDropdown",2);T([c.state()],S.prototype,"_openFilter",2);S=T([c.customElement("ap-content-toolbar")],S);var ua=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ne=(t,e,s,r)=>{for(var a=r>1?void 0:r?fa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ua(e,s,a),a};let B=class extends n.LitElement{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.pinnedFilters=[],this.pinnedMetadata=[],this.metadataFields=[]}_getFilterSummary(t){if(t.type==="string"){const e=t;return e.values.length===0?"":e.values.length===1?e.values[0]:`${e.values[0]} +${e.values.length-1}`}if(t.type==="date"){const e=t;return e.preset?e.preset:e.from&&e.to?`${e.from} - ${e.to}`:e.from?`after ${e.from}`:e.to?`before ${e.to}`:""}if(typeof t=="object"&&"resolution"in t){const e=t,s=[...e.resolution,...e.orientation,...e.faces];return s.length===0?"":s.length===1?s[0]:`${s[0]} +${s.length-1}`}return""}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(r=>r.key===e);return(s==null?void 0:s.label)||e}_stripMetadataPrefix(t){for(const e of $t)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_togglePin(t){const e=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!e},bubbles:!0,composed:!0}))}_toggleMetadataPin(t){const e=this.pinnedMetadata.includes(t);this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:!e},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}render(){const t=Object.entries(this.appliedFilters),e=Object.entries(this.appliedMetadata),s=t.length+e.length;return s===0?n.nothing:n.html`
      <div class="chips-row">
        <div class="chips">
          ${t.map(([r,a])=>{const o=this.pinnedFilters.includes(r),i=this._getFilterSummary(a);return n.html`
              <span class="chip">
                <span class="chip-label">${Ct[r]||r}</span>
                ${i?n.html`<span class="chip-summary">${i}</span>`:n.nothing}
                <span class="chip-actions">
                  <button
                    class="chip-btn ${o?"pinned":""}"
                    @click=${l=>{l.stopPropagation(),this._togglePin(r)}}
                    title=${o?"Unpin filter":"Pin filter"}
                  >
                    <ap-icon name=${o?"pin-off":"pin"} .size=${12}></ap-icon>
                  </button>
                  <button class="chip-btn" @click=${()=>this._removeFilter(r)}>
                    <ap-icon name="close" .size=${12}></ap-icon>
                  </button>
                </span>
              </span>
            `})}
          ${e.map(([r,a])=>{const o=this.pinnedMetadata.includes(r),i=this._getFilterSummary(a),l=this._getMetadataLabel(r);return n.html`
              <span class="chip">
                <span class="chip-label">${l}</span>
                ${i?n.html`<span class="chip-summary">${i}</span>`:n.nothing}
                <span class="chip-actions">
                  <button
                    class="chip-btn ${o?"pinned":""}"
                    @click=${p=>{p.stopPropagation(),this._toggleMetadataPin(r)}}
                    title=${o?"Unpin filter":"Pin filter"}
                  >
                    <ap-icon name=${o?"pin-off":"pin"} .size=${12}></ap-icon>
                  </button>
                  <button class="chip-btn" @click=${()=>this._removeMetadataFilter(r)}>
                    <ap-icon name="close" .size=${12}></ap-icon>
                  </button>
                </span>
              </span>
            `})}
        </div>
        ${s>1?n.html`<button class="clear-all" @click=${this._clearAll}>Clear all</button>`:n.nothing}
      </div>
    `}};B.styles=n.css`
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
      padding: 0 20px 8px;
    }
    .chips {
      display: flex;
      align-items: center;
      gap: 8px;
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
      padding: 4px 12px;
      border: 1px solid var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
      border-radius: 9999px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.15));
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
    .chip-actions {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .chip-btn {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.7;
      transition: opacity 150ms;
    }
    .chip-btn:hover {
      opacity: 1;
    }
    .chip-btn.pinned {
      opacity: 1;
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .clear-all {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border: none;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
  `;ne([c.property({type:Object})],B.prototype,"appliedFilters",2);ne([c.property({type:Object})],B.prototype,"appliedMetadata",2);ne([c.property({type:Array})],B.prototype,"pinnedFilters",2);ne([c.property({type:Array})],B.prototype,"pinnedMetadata",2);ne([c.property({type:Array})],B.prototype,"metadataFields",2);B=ne([c.customElement("ap-filters-bar")],B);var va=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,le=(t,e,s,r)=>{for(var a=r>1?void 0:r?ga(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&va(e,s,a),a};const ma=6;let V=class extends n.LitElement{constructor(){super(...arguments),this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.isLoading=!1,this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){return n.html`
      <div class="grid" role="list" aria-label="Assets">
        ${this.folders.map(t=>n.html`
            <ap-folder-card
              .folder=${t}
              .previews=${this.folderPreviews[t.uuid]||[]}
              @folder-open=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:e.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-card>
          `)}
        ${this.assets.map((t,e)=>{const s=e>=this._prevCount?Math.min(e-this._prevCount,20):Math.min(e,20);return n.html`
              <ap-asset-card
                .asset=${t}
                .index=${e}
                ?selected=${this.selectedIds.includes(t.uuid)}
                style="--ap-stagger-index: ${s}"
                data-asset-uuid=${t.uuid}
                @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:ma},()=>n.html`<div class="ghost-card"></div>`):n.nothing}
      </div>
    `}};V.styles=n.css`
    :host {
      display: block;
      padding: 12px 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px 24px;
    }
    .ghost-card {
      aspect-ratio: 6/4;
      border-radius: var(--ap-radius, 8px);
      background: linear-gradient(
        90deg,
        var(--ap-muted, #f4f4f5) 25%,
        #e8e8ea 50%,
        var(--ap-muted, #f4f4f5) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-card { animation: none; }
    }
  `;le([c.property({type:Array})],V.prototype,"assets",2);le([c.property({type:Array})],V.prototype,"folders",2);le([c.property({type:Object})],V.prototype,"folderPreviews",2);le([c.property({type:Array})],V.prototype,"selectedIds",2);le([c.property({type:Boolean})],V.prototype,"isLoading",2);V=le([c.customElement("ap-grid-view")],V);var ba=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,ye=(t,e,s,r)=>{for(var a=r>1?void 0:r?ya(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ba(e,s,a),a};const _a=5;let X=class extends n.LitElement{constructor(){super(...arguments),this.assets=[],this.folders=[],this.selectedIds=[],this.isLoading=!1}render(){return n.html`
      <div class="list-header" role="row" aria-label="Column headers">
        <span></span>
        <span>Name</span>
        <span>Type</span>
        <span>Size</span>
        <span>Date</span>
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map(t=>n.html`
            <ap-folder-row
              .folder=${t}
              @folder-open=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:e.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((t,e)=>n.html`
            <ap-asset-row
              .asset=${t}
              .index=${e}
              ?selected=${this.selectedIds.includes(t.uuid)}
              data-asset-uuid=${t.uuid}
              @asset-select=${s=>this.dispatchEvent(new CustomEvent("asset-select",{detail:s.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${s=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:s.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:_a},()=>n.html`<div class="ghost-row"></div>`):n.nothing}
      </div>
    `}};X.styles=n.css`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .list-header {
      display: grid;
      grid-template-columns: 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--ap-muted-foreground, #71717a);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }
    .list-body {
      display: flex;
      flex-direction: column;
    }
    .ghost-row {
      height: 56px;
      margin-bottom: 1px;
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--ap-muted, #f4f4f5) 25%,
        #e8e8ea 50%,
        var(--ap-muted, #f4f4f5) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-row { animation: none; }
    }
  `;ye([c.property({type:Array})],X.prototype,"assets",2);ye([c.property({type:Array})],X.prototype,"folders",2);ye([c.property({type:Array})],X.prototype,"selectedIds",2);ye([c.property({type:Boolean})],X.prototype,"isLoading",2);X=ye([c.customElement("ap-list-view")],X);function fe(t){var s;const e=t.info;return e!=null&&e.video_thumbnail?e.video_thumbnail:e!=null&&e.image_thumbnail?e.image_thumbnail:e!=null&&e.thumbnail?e.thumbnail:e!=null&&e.preview?e.preview:Ce(((s=t.url)==null?void 0:s.cdn)||"")}function rt(t){const e=t.info;return e!=null&&e.video_thumbnail?e.video_thumbnail:e!=null&&e.image_thumbnail?e.image_thumbnail:e!=null&&e.thumbnail?e.thumbnail:""}function Be(t){var s,r;let e=Ce(((s=t.url)==null?void 0:s.cdn)||((r=t.url)==null?void 0:r.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Mt(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):""}function Mt(t,e){try{const s=new URL(t);for(const[r,a]of Object.entries(e))s.searchParams.set(r,a);return s.toString()}catch{return t}}const wt=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function Ce(t,e){if(!t)return"";if(t.includes("assets.filerobot.com"))return t;const s=t.match(wt);if(s){const r=s[2];return t.replace(wt,`$1assets.filerobot.com/${r}/`)}if(e)try{const r=new URL(t);return`https://assets.filerobot.com/${e}${r.pathname}${r.search}`}catch{}return t}function it(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,r=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,r)).toFixed(r===0?0:1)} ${e[r]}`}function Ae(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function xa(t,e){return!t||!e?"":`${t} x ${e}`}const wa=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif"]),$a=new Set([...wa,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function K(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function ot(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return $a.has(e)}const It="https://assets.filerobot.com/scaleflex/assets/file-types/v2/",Sa={png:"PNG",jpg:"JPG",jpeg:"JPG",gif:"GIF",bmp:"BMP",webp:"WEBP",svg:"SVG",tiff:"TIFF",tif:"TIFF",heic:"HEIC",avif:"AVIF",ico:"ICO",pdf:"PDF",doc:"DOC",docx:"DOCX",txt:"TXT",rtf:"RTF",xls:"XLS",xlsx:"XLSX",ppt:"PPT",pptx:"PPTX",csv:"CSV",odt:"ODT",ods:"ODS",odp:"ODP",mp4:"MP4",webm:"WEBM",mov:"MOV",avi:"AVI",mkv:"MKV",mpeg:"MPEG",mp3:"MP3",wav:"WAV",aac:"AAC",flac:"FLAC",ogg:"OGG",wma:"WMA",zip:"ZIP",rar:"RAR","7z":"7Z",tar:"TAR",gz:"GZ",ttf:"TTF",otf:"OTF",woff:"WOFF",woff2:"WOFF2",eot:"EOT",psd:"PSD",ai:"AI",dwg:"DWG",js:"JS",ts:"TS",css:"CSS",html:"HTML",json:"JSON",xml:"XML",php:"PHP",sh:"SH",exe:"EXE",iso:"ISO",bin:"BIN"};function _e(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"",s=Sa[e];return`${It}${s||"DEFAULT"}.png`}function Q(){return`${It}DEFAULT.png`}function We(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Ea=new Set(["png","svg","webp","gif","avif"]);function Ve(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Ea.has(e)}var ka=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,qe=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ca(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ka(e,s,a),a};let re=class extends n.LitElement{constructor(){super(...arguments),this.index=0,this.selected=!1}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(r=>r instanceof HTMLElement&&(r.classList.contains("check")||r.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var p,d,h;const t=this.asset;if(!t)return n.html``;const s=K(t.type)==="video",r=((p=t.extension)==null?void 0:p.toLowerCase())==="pdf",a=ot(t.extension||"");let o="";s?o=rt(t):r?o=Be(t):a&&(o=fe(t));const i=_e(t.extension||""),l=Ve(t.extension||"");return n.html`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${l&&o?"chess":""}">
          ${o?n.html`<img
                src=${o}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${l?"transparent-asset":""}"
                @error=${u=>{const f=u.target,v=Q();f.src!==i&&f.src!==v?(f.src=i,f.classList.add("icon-fallback")):f.src!==v&&(f.src=v)}}
              />`:n.html`<img
                src=${i}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${u=>{const f=u.target,v=Q();f.src!==v&&(f.src=v)}}
              />`}
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
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">${(d=t.extension)==null?void 0:d.toUpperCase()} · ${it(((h=t.size)==null?void 0:h.bytes)||0)}</div>
        </div>
      </div>
    `}};re.styles=n.css`
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
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, #fff);
    }
    .card:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: 2px;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
    }
    :host([selected]) .card {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }
    .thumbnail {
      aspect-ratio: 6/4;
      background: var(--ap-muted, #f4f4f5);
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
      background: rgba(255, 255, 255, 0.9);
      color: var(--ap-foreground, #09090b);
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
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
    }
    .info {
      padding: 10px 12px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-top: 2px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 10;
      cursor: pointer;
    }
    .check-box {
      width: 18px;
      height: 18px;
      border: 2px solid var(--ap-border, #e4e4e7);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, #fff);
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, #3b82f6);
      border-color: var(--ap-primary, #3b82f6);
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, #fff);
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
      color: var(--ap-muted-foreground, #71717a);
    }
    @media (prefers-reduced-motion: reduce) {
      :host { animation: none; }
      .overlay { transition: none; }
    }
  `;qe([c.property({type:Object})],re.prototype,"asset",2);qe([c.property({type:Number})],re.prototype,"index",2);qe([c.property({type:Boolean,reflect:!0})],re.prototype,"selected",2);re=qe([c.customElement("ap-asset-card")],re);var Aa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Ge=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ta(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Aa(e,s,a),a};let ie=class extends n.LitElement{constructor(){super(...arguments),this.index=0,this.selected=!1}_handleSelect(t){if(t.composedPath().some(r=>r instanceof HTMLElement&&(r.classList.contains("check")||r.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}render(){var p,d,h;const t=this.asset;if(!t)return n.html``;const s=K(t.type)==="video",r=((p=t.extension)==null?void 0:p.toLowerCase())==="pdf",a=ot(t.extension||"");let o="";s?o=rt(t):r?o=Be(t):a&&(o=fe(t));const i=_e(t.extension||""),l=Ve(t.extension||"");return n.html`
      <div class="row" @click=${this._handleSelect}>
        <div class="check">
          <div class="check-box">
            <svg class="check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </div>
        </div>
        <div class="thumb ${l&&o?"chess":""}">
          ${o?n.html`<img
                src=${o}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${u=>{const f=u.target,v=Q();f.src!==i&&f.src!==v?(f.src=i,f.classList.add("icon-fallback")):f.src!==v&&(f.src=v)}}
              />`:n.html`<img
                src=${i}
                alt=${t.name}
                class="icon-fallback"
                @error=${u=>{const f=u.target,v=Q();f.src!==v&&(f.src=v)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(d=t.extension)==null?void 0:d.toUpperCase()}</div>
        <div class="desc">${it(((h=t.size)==null?void 0:h.bytes)||0)}</div>
        <div class="date">${Ae(t.created_at||"")}</div>
        <div class="actions">
          <button class="icon-btn" @click=${this._handlePreview} aria-label="Preview">
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};ie.styles=n.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 28px 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.65 0.19 258 / 0.08));
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--ap-muted, #f4f4f5);
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
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type, .desc, .date {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
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
      width: 18px;
      height: 18px;
      border: 2px solid var(--ap-border, #e4e4e7);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, #fff);
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, #3b82f6);
      border-color: var(--ap-primary, #3b82f6);
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, #fff);
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;Ge([c.property({type:Object})],ie.prototype,"asset",2);Ge([c.property({type:Number})],ie.prototype,"index",2);Ge([c.property({type:Boolean,reflect:!0})],ie.prototype,"selected",2);ie=Ge([c.customElement("ap-asset-row")],ie);var Oa=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,nt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Fa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Oa(e,s,a),a};let ve=class extends n.LitElement{constructor(){super(...arguments),this.previews=[]}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_isAlternativeDisplay(t){const e=We(t).toLowerCase();return["svg","svg+xml","png"].includes(e)}_getPreviewUrl(t){const e=K(t.file_type),s=t.file_uri_cdn;if(!s)return"";if(e==="video")try{const r=new URL(s);return r.searchParams.set("w","200"),r.searchParams.set("force_format","webp,jpeg"),r.toString()}catch{return s}if(t.file_type==="application/pdf"||We(t.file_type).toLowerCase()==="pdf")try{let r=s.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,"");const a=new URL(r);return a.searchParams.set("w","200"),a.searchParams.set("force_format","webp,jpeg"),a.searchParams.set("doc_page","1"),a.searchParams.set("bypass_process_proxy","1"),a.toString()}catch{return s}return s}_renderPreviewImg(t){const e=this._isAlternativeDisplay(t.file_type),s=this._getPreviewUrl(t),r=_e(We(t.file_type)),a=Q();return n.html`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||r}"
        alt=""
        loading="lazy"
        @error=${o=>{const i=o.target,l=i.parentElement;i.src!==r&&i.src!==a?(i.src=r,i.classList.add("icon-mode"),l==null||l.classList.add("icon-bg")):i.src!==a&&(i.src=a,i.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
        @load=${o=>{const i=o.target,l=i.parentElement;i.src.includes("scaleflex/assets/file-types")&&(i.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return n.html`<div class="empty-preview"><ap-icon name="folder" .size=${48}></ap-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?n.html`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:n.html`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?n.html`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:n.nothing}
        </div>
      </div>
    `}render(){var a,o;const t=this.folder;if(!t)return n.html``;const e=((a=t.count)==null?void 0:a.files_direct)??0,r=(((o=t.count)==null?void 0:o.files_recursive)??0)-e;return n.html`
      <div class="card" @click=${this._handleOpen}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                fill="#E3E8ED" rx="3" ry="3" />
        </svg>
        <!-- Hover overlay with same folder shape -->
        <svg class="hover-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                fill="#F3F7FA" />
        </svg>
        <!-- Preview images -->
        <div class="preview-container">
          ${this._renderPreviews()}
        </div>
      </div>
      <!-- Info section outside the card shape -->
      <div class="info">
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="counts">
          <span>${e} asset${e!==1?"s":""}</span>
          ${r>0?n.html`<span>${r} sub-asset${r!==1?"s":""}</span>`:n.nothing}
        </div>
      </div>
    `}};ve.styles=n.css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      aspect-ratio: 9/7;
      cursor: pointer;
    }
    .card:hover .hover-overlay {
      opacity: 0.9;
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .hover-overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      opacity: 0;
      transition: opacity 200ms;
      pointer-events: none;
    }
    .preview-container {
      position: absolute;
      top: 15%;
      left: 3.5%;
      width: 93%;
      height: 74%;
      display: flex;
      overflow: hidden;
      border-radius: 4px;
      z-index: 1;
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
      background: var(--ap-muted, #f4f4f5);
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, #f3f7fa);
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
      color: var(--ap-muted-foreground, #71717a);
    }
    .info {
      padding: 8px 4px 0;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counts {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-top: 2px;
    }
  `;nt([c.property({type:Object})],ve.prototype,"folder",2);nt([c.property({type:Array})],ve.prototype,"previews",2);ve=nt([c.customElement("ap-folder-card")],ve);var Pa=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Dt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ma(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Pa(e,s,a),a};let Te=class extends n.LitElement{_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?n.html`
      <div class="row" @click=${this._handleOpen}>
        <div class="icon"><ap-icon name="folder" .size=${22}></ap-icon></div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        <div class="meta">${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items</div>
        <div class="meta">${Ae(t.modified_at||t.updated_at||"")}</div>
        <div></div>
      </div>
    `:n.html``}};Te.styles=n.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .icon {
      color: var(--ap-primary, oklch(0.65 0.19 258));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
    }
  `;Dt([c.property({type:Object})],Te.prototype,"folder",2);Te=Dt([c.customElement("ap-folder-row")],Te);var Ia=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Lt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Da(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ia(e,s,a),a};let Oe=class extends n.LitElement{constructor(){super(...arguments),this.variant="grid"}render(){return this.variant==="grid"?n.html`
        <div class="grid-skeleton">
          ${Array.from({length:18},()=>n.html`<div class="skeleton card-skel"></div>`)}
        </div>
      `:n.html`
      ${Array.from({length:7},()=>n.html`<div class="skeleton row-skel"></div>`)}
    `}};Oe.styles=n.css`
    :host {
      display: block;
      padding: 16px 20px;
    }
    .skeleton {
      background: linear-gradient(90deg, var(--ap-muted, #f4f4f5) 25%, #e8e8ea 50%, var(--ap-muted, #f4f4f5) 75%);
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
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px 24px;
    }
    .card-skel {
      aspect-ratio: 6/4;
      border-radius: var(--ap-radius, 8px);
    }
    .row-skel {
      height: 56px;
      margin-bottom: 1px;
      border-radius: 4px;
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `;Lt([c.property()],Oe.prototype,"variant",2);Oe=Lt([c.customElement("ap-skeleton")],Oe);function La(t){var a,o;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(o=e[0])==null?void 0:o.playlists;return s!=null&&s.length&&s[0]||null}var za=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,O=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ra(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&za(e,s,a),a};let E=class extends n.LitElement{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.regionalFilters={},this._isFullscreen=!1,this._fsImageLoaded=!1,this._openSections=new Set(["file-info"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),this._destroyHls()}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){super.updated(t),t.has("asset")&&(this._destroyHls(),this.asset&&K(this.asset.type)==="video"&&this._setupHls(this.asset))}async _setupHls(t){var r,a;const e=La(t);if(!e||(await this.updateComplete,((r=this.asset)==null?void 0:r.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:o}=await Promise.resolve().then(()=>require("./hls.light-C3NKRmfw.cjs"));if(!o.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const i=new o;this._hls=i,i.loadSource(e),i.attachMedia(s),i.on(o.Events.ERROR,(l,p)=>{var d;p.fatal&&(this._destroyHls(),s.src=((d=t.url)==null?void 0:d.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_fullscreen(){var e,s,r,a,o,i;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(r=this.asset)==null?void 0:r.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(i=(o=this.previewArea)==null?void 0:o.requestFullscreen)==null||i.call(o)}_select(){if(this.asset){const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=K(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let r=t+e;r!==s;r+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[r]))return r;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var r;const e=(r=t.url)==null?void 0:r.cdn;if(!e)return fe(t)||"";const s=Ce(e,this.containerToken);return Mt(s,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"})}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagLabels(t){return t?Array.isArray(t)?t:Object.values(t).map(e=>e.label):[]}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderAccordion(t,e,s){if(s.length===0)return n.nothing;const r=this._openSections.has(t);return n.html`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${r?"true":"false"}
          @click=${()=>this._toggleSection(t)}
        >
          <span>${e}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${r?"open":""}">
          ${s.map(a=>n.html`
            <div class="meta-row">
              <span class="meta-label" title=${a.label}>${a.label}</span>
              <span class="meta-value ${a.wrap?"wrap":""}" title=${a.value}>${a.value}</span>
            </div>
          `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,r,a,o,i;const e=[];return e.push({label:"File name",value:t.name}),t.extension&&e.push({label:"Type",value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:"Size",value:it(t.size.bytes)}),(r=t.info)!=null&&r.img_w&&e.push({label:"Dimensions",value:xa(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:"Video resolution",value:`${t.info.video_w} x ${t.info.video_h}`}),(o=t.info)!=null&&o.duration&&e.push({label:"Duration",value:`${Math.round(t.info.duration)}s`}),(i=t.info)!=null&&i.color_space&&e.push({label:"Color space",value:t.info.color_space}),t.created_at&&e.push({label:"Created",value:Ae(t.created_at)}),t.modified_at&&e.push({label:"Modified",value:Ae(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var r;if(!((r=e.possible_values)!=null&&r.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const r=this.regionalFilters[e.regionalVariantsGroupUuid];if(r){const a=t[r];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const r=JSON.stringify(t);return r==="{}"||r==="[]"?"":r}return String(t)}_getAllMetadataRows(t){var o,i,l,p;const e=[],s=this._buildFieldMap(),r=new Set;if(this.metadataFields.length>0){const d=t;for(const h of this.metadataFields){const u=d[h.key]??((i=(o=t.info)==null?void 0:o.metadata)==null?void 0:i[h.key])??((l=t.meta)==null?void 0:l[h.key]),f=this._resolveFieldValue(u,h);if(!f)continue;r.add(h.key),h.slug&&r.add(h.slug);const v=f.length>50;e.push({label:h.label,value:f,wrap:v})}}if(t.meta)for(const[d,h]of Object.entries(t.meta)){if(r.has(d)||h==null||h==="")continue;const u=s.get(d);if(u){const f=this._resolveFieldValue(h,u);if(!f)continue;r.add(d);const v=f.length>50;e.push({label:u.label,value:f,wrap:v})}else{const f=typeof h=="object"?JSON.stringify(h):String(h);if(!f||f==="{}"||f==="[]")continue;r.add(d);const v=d.charAt(0).toUpperCase()+d.slice(1).replace(/_/g," "),$=f.length>50;e.push({label:v,value:f,wrap:$})}}const a=(p=t.info)==null?void 0:p.metadata;if(a&&typeof a=="object")for(const[d,h]of Object.entries(a)){if(r.has(d)||h==null||h==="")continue;const u=s.get(d);if(u){const f=this._resolveFieldValue(h,u);if(!f)continue;r.add(d);const v=f.length>50;e.push({label:u.label,value:f,wrap:v})}else{const f=typeof h=="object"?JSON.stringify(h):String(h);if(!f||f==="{}"||f==="[]")continue;r.add(d);const v=d.charAt(0).toUpperCase()+d.slice(1).replace(/_/g," "),$=f.length>50;e.push({label:v,value:f,wrap:$})}}return e}_renderTags(t){const e=this._getTagLabels(t.tags);if(e.length===0)return n.nothing;const s=this._openSections.has("tags");return n.html`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s?"true":"false"}
          @click=${()=>this._toggleSection("tags")}
        >
          <span>Tags (${e.length})</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${s?"open":""}">
          <div class="tags-list">
            ${e.map(r=>n.html`<ap-badge>${r}</ap-badge>`)}
          </div>
        </div>
      </div>
    `}render(){var _,x,w,Z,xe,D;const t=this.asset;if(!t)return n.nothing;const e=K(t.type),s=e==="image",r=e==="video",a=e==="audio",o=((_=t.extension)==null?void 0:_.toLowerCase())==="pdf",i=_e(t.extension||""),l=Ve(t.extension||""),p=fe(t),d=s?p||Ce(((x=t.url)==null?void 0:x.cdn)||"",this.containerToken):"",h=s?this._getFullscreenImageUrl(t):"",u=r&&((w=t.url)==null?void 0:w.cdn)||"",f=r&&(((Z=t.info)==null?void 0:Z.video_thumbnail)||((xe=t.info)==null?void 0:xe.preview))||"",v=o&&!s?Be(t):"",$=this._getCurrentIndex(),F=$>0&&this._findNavTarget($,-1)>=0,C=$>=0&&this._findNavTarget($,1)>=0,P=this.assets.length>1;return n.html`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!s&&!r&&!a&&!o} aria-label="Fullscreen">
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}" @click=${this._select} aria-label="Select">
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s&&l?"chess":""}">
          ${P?n.html`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!F} aria-label="Previous">
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!C} aria-label="Next">
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:n.nothing}
          ${s?n.html`
            <img
              src=${d}
              alt=${t.name}
              @error=${He=>{const H=He.target;H.src!==i&&(H.src=i,H.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              <img
                class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                src=${d}
                alt=""
              />
              <img
                class="fs-full ${this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?h:""}
                alt=${t.name}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:n.nothing}
          ${r?n.html`<video src=${u} poster=${f||n.nothing} controls></video>`:n.nothing}
          ${a?n.html`<audio src=${((D=t.url)==null?void 0:D.cdn)||""} controls></audio>`:n.nothing}
          ${o&&!s?n.html`
            <img
              src=${v||i}
              alt=${t.name}
              class=${v?"":"icon-fallback"}
              @error=${He=>{const H=He.target;H.src!==i&&(H.src=i,H.classList.add("icon-fallback"))}}
            />
          `:n.nothing}
          ${!s&&!r&&!a&&!o?n.html`<img src=${i} alt=${t.name} class="icon-fallback" />`:n.nothing}
        </div>

        ${this._renderAccordion("file-info","File info",this._getFileInfoRows(t))}
        ${this._renderTags(t)}
        ${this.showMetadata?n.html`
          ${this._renderAccordion("metadata","Metadata",this._getAllMetadataRows(t))}
        `:n.nothing}
      </div>
    `}};E.styles=n.css`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--ap-background, #fff);
      border-left: 1px solid var(--ap-border, #e4e4e7);
      display: flex;
      flex-direction: column;
      animation: ap-panel-in 300ms ease-out;
      overflow-y: auto;
    }
    @keyframes ap-panel-in {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }
    .panel-title {
      font-size: var(--ap-font-size-base, 1rem);
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-actions {
      display: flex;
      gap: 4px;
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--ap-primary, #3b82f6);
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--ap-primary, #3b82f6);
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, #f4f4f5);
      min-height: 200px;
      overflow: hidden;
    }
    .preview-area img {
      max-width: 100%;
      max-height: 300px;
      object-fit: contain;
      border-radius: var(--ap-radius-sm, 6px);
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
      width: 100%;
      height: 300px;
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
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: blur(8px);
      transform: scale(1.02);
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
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--ap-muted, #f4f4f5);
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
      gap: 4px;
    }
    /* Accordion styles */
    .accordion {
      border-top: 1px solid var(--ap-border, #e4e4e7);
    }
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
      color: var(--ap-foreground, #09090b);
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--ap-muted-foreground, #71717a);
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
      justify-content: space-between;
      gap: 12px;
      padding: 6px 0;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }
    .meta-row:last-child {
      border-bottom: none;
    }
    .meta-label {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
      max-width: 40%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--ap-foreground, #09090b);
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .meta-value.wrap {
      white-space: normal;
      word-break: break-word;
      text-align: left;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel { animation: none; }
      .accordion-chevron { transition: none; }
    }
  `;O([c.property({type:Object})],E.prototype,"asset",2);O([c.property({type:Array})],E.prototype,"assets",2);O([c.property({type:Array})],E.prototype,"selectedIds",2);O([c.property()],E.prototype,"containerToken",2);O([c.property({type:Boolean})],E.prototype,"showMetadata",2);O([c.property({type:Array})],E.prototype,"metadataFields",2);O([c.property({type:Object})],E.prototype,"regionalFilters",2);O([c.query(".preview-area")],E.prototype,"previewArea",2);O([c.query("video")],E.prototype,"_videoEl",2);O([c.state()],E.prototype,"_isFullscreen",2);O([c.state()],E.prototype,"_fsImageLoaded",2);O([c.state()],E.prototype,"_openSections",2);E=O([c.customElement("ap-preview-panel")],E);var ja=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,zt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Na(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ja(e,s,a),a};let Fe=class extends n.LitElement{constructor(){super(...arguments),this.selectedAssets=[]}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_deselect(t){this.dispatchEvent(new CustomEvent("selection-deselect",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.selectedAssets.length===0?n.nothing:n.html`
      <div class="bar">
        <span class="count">${this.selectedAssets.length} asset${this.selectedAssets.length>1?"s":""} selected</span>
        <div class="thumbnails">
          ${this.selectedAssets.map(t=>{var p;const s=K(t.type)==="video",r=((p=t.extension)==null?void 0:p.toLowerCase())==="pdf",a=ot(t.extension||"");let o="";s?o=rt(t):r?o=Be(t):a&&(o=fe(t));const i=_e(t.extension||""),l=Ve(t.extension||"");return n.html`
              <div class="thumb ${l&&o?"chess":""}" @click=${()=>this._deselect(t.uuid)} title="Click to deselect ${t.name}">
                ${o?n.html`<img
                      src=${o}
                      alt=${t.name}
                      @error=${d=>{const h=d.target,u=Q();h.src!==i&&h.src!==u?h.src=i:h.src!==u&&(h.src=u)}}
                    />`:n.html`<img
                      src=${i}
                      alt=${t.name}
                      style="object-fit: contain; padding: 6px;"
                      @error=${d=>{const h=d.target,u=Q();h.src!==u&&(h.src=u)}}
                    />`}
              </div>
            `})}
        </div>
        <div class="actions">
          <button class="btn btn-ghost" @click=${this._clear}>Clear</button>
          <button class="btn btn-primary" @click=${this._confirm}>Confirm</button>
        </div>
      </div>
    `}};Fe.styles=n.css`
    :host {
      display: block;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--ap-card, #fff);
      border-top: 1px solid var(--ap-border, #e4e4e7);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
    }
    .thumbnails {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 16px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .thumbnails::-webkit-scrollbar { display: none; }
    .thumb {
      width: 36px;
      height: 36px;
      border-radius: 4px;
      overflow: hidden;
      flex-shrink: 0;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 100ms;
      background: var(--ap-muted, #f4f4f5);
    }
    .thumb:hover {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .thumb.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 10px 10px;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .btn {
      padding: 8px 20px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: opacity 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }
    .btn:hover {
      opacity: 0.9;
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
    }
    .btn-ghost {
      background: none;
      color: var(--ap-muted-foreground, #71717a);
    }
    .btn-ghost:hover {
      color: var(--ap-foreground, #09090b);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `;zt([c.property({type:Array})],Fe.prototype,"selectedAssets",2);Fe=zt([c.customElement("ap-selection-bar")],Fe);var Ua=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,lt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ba(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ua(e,s,a),a};let ge=class extends n.LitElement{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?n.nothing:n.html`
      <div
        class="marquee"
        style="left:${this.rect.x}px;top:${this.rect.y}px;width:${this.rect.width}px;height:${this.rect.height}px"
      ></div>
    `}};ge.styles=n.css`
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
      border: 2px solid var(--ap-primary, oklch(0.65 0.19 258));
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-radius: 2px;
    }
  `;lt([c.property({type:Boolean})],ge.prototype,"active",2);lt([c.property({type:Object})],ge.prototype,"rect",2);ge=lt([c.customElement("ap-marquee-overlay")],ge);var Va=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,ct=(t,e,s,r)=>{for(var a=r>1?void 0:r?qa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Va(e,s,a),a};const Ga={search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5",close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],"calendar-days":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M3 10h18"}},{tag:"path",attrs:{d:"M8 14h.01"}},{tag:"path",attrs:{d:"M12 14h.01"}},{tag:"path",attrs:{d:"M16 14h.01"}},{tag:"path",attrs:{d:"M8 18h.01"}},{tag:"path",attrs:{d:"M12 18h.01"}},{tag:"path",attrs:{d:"M16 18h.01"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let me=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=Ga[this.name];if(!t)return n.nothing;const e=typeof t=="string"?n.svg`<path d=${t}></path>`:t.map(s=>{const{tag:r,attrs:a}=s;return r==="circle"?n.svg`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:r==="rect"?n.svg`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:n.svg`<path d=${a.d}></path>`});return n.html`
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
    `}};me.styles=[n.css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];ct([c.property()],me.prototype,"name",2);ct([c.property({type:Number})],me.prototype,"size",2);me=ct([c.customElement("ap-icon")],me);var Ha=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,Rt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ka(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ha(e,s,a),a};let Pe=class extends n.LitElement{constructor(){super(...arguments),this.size=24}render(){return n.html`<div class="spinner" style="width:${this.size}px;height:${this.size}px"></div>`}};Pe.styles=[n.css`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--ap-border, #e4e4e7);
        border-top-color: var(--ap-primary, #3b82f6);
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `];Rt([c.property({type:Number})],Pe.prototype,"size",2);Pe=Rt([c.customElement("ap-spinner")],Pe);var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,jt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Xa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Ya(e,s,a),a};let Me=class extends n.LitElement{constructor(){super(...arguments),this.checked=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}render(){return n.html`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.5 12.75l6 6 9-13.5"></path>
        </svg>
      </div>
      <span class="label"><slot></slot></span>
    `}};Me.styles=[n.css`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 18px;
        height: 18px;
        border: 2px solid var(--ap-border, #e4e4e7);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--ap-background, #fff);
      }
      :host([checked]) .box {
        background: var(--ap-primary, #3b82f6);
        border-color: var(--ap-primary, #3b82f6);
      }
      .check {
        display: none;
        color: var(--ap-primary-foreground, #fff);
      }
      :host([checked]) .check {
        display: block;
      }
      .label {
        margin-left: 8px;
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, #09090b);
      }
    `];jt([c.property({type:Boolean,reflect:!0})],Me.prototype,"checked",2);Me=jt([c.customElement("ap-checkbox")],Me);var Qa=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,Nt=(t,e,s,r)=>{for(var a=r>1?void 0:r?Wa(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Qa(e,s,a),a};let Ie=class extends n.LitElement{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return n.html`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};Ie.styles=[n.css`
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
        background: var(--ap-card, #fff);
        border: 1px solid var(--ap-border, #e4e4e7);
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.open {
        display: block;
      }
    `];Nt([c.state()],Ie.prototype,"open",2);Ie=Nt([c.customElement("ap-popover")],Ie);var Za=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,ce=(t,e,s,r)=>{for(var a=r>1?void 0:r?Ja(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&Za(e,s,a),a};let q=class extends n.LitElement{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.options=[],this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}close(){this.open=!1}render(){const t=this.options.find(e=>e.value===this.value);return n.html`
      <button @click=${this._toggle}>
        ${t!=null&&t.icon?n.html`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:""}
        ${this.label}${t?`${this.label?": ":""}${t.label}`:""}
        <ap-icon name="chevron-down" .size=${14}></ap-icon>
      </button>
      <div class="menu ${this.open?"open":""}">
        ${this.options.map(e=>n.html`
            <button
              class="option"
              ?data-selected=${e.value===this.value}
              @click=${()=>this._select(e.value)}
            >
              ${e.icon?n.html`<ap-icon name=${e.icon} .size=${16}></ap-icon>`:""}
              ${e.label}
            </button>
          `)}
      </div>
    `}_toggle(){this.open=!this.open,this.open&&this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0}))}_select(t){this.open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};q.styles=[n.css`
      :host {
        position: relative;
        display: inline-block;
      }
      button {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 36px;
        padding: 0 12px;
        border: 1px solid var(--ap-border, #e4e4e7);
        border-radius: var(--ap-radius-sm, 6px);
        background: var(--ap-background, #fff);
        color: var(--ap-foreground, #09090b);
        font-size: var(--ap-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
        box-sizing: border-box;
      }
      button:hover {
        background: var(--ap-muted, #f4f4f5);
      }
      :host([variant="borderless"]) button {
        border-color: transparent;
        background: none;
      }
      :host([variant="borderless"]) button:hover {
        background: var(--ap-muted, #f4f4f5);
      }
      .menu {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        z-index: 50;
        min-width: 160px;
        background: var(--ap-card, #fff);
        border: 1px solid var(--ap-border, #e4e4e7);
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 4px;
      }
      .menu.open {
        display: block;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 12px;
        border: none;
        background: none;
        color: var(--ap-foreground, #09090b);
        font-size: var(--ap-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover {
        background: var(--ap-muted, #f4f4f5);
      }
      .option[data-selected] {
        background: var(--ap-selection-bg, oklch(0.65 0.19 258 / 0.08));
        color: var(--ap-primary, oklch(0.65 0.19 258));
      }
    `];ce([c.property()],q.prototype,"value",2);ce([c.property()],q.prototype,"label",2);ce([c.property({reflect:!0})],q.prototype,"variant",2);ce([c.property({type:Array})],q.prototype,"options",2);ce([c.state()],q.prototype,"open",2);q=ce([c.customElement("ap-dropdown")],q);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Ut=(t,e,s,r)=>{for(var a=r>1?void 0:r?tr(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&er(e,s,a),a};let De=class extends n.LitElement{constructor(){super(...arguments),this.variant="default"}render(){return n.html`<span class="badge"><slot></slot></span>`}};De.styles=[n.css`
      :host {
        display: inline-flex;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        padding: 2px 8px;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 9999px;
        background: var(--ap-muted, #f4f4f5);
        color: var(--ap-muted-foreground, #71717a);
      }
      :host([variant="primary"]) .badge {
        background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
        color: var(--ap-primary, oklch(0.65 0.19 258));
      }
    `];Ut([c.property({reflect:!0})],De.prototype,"variant",2);De=Ut([c.customElement("ap-badge")],De);var sr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,Bt=(t,e,s,r)=>{for(var a=r>1?void 0:r?ar(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&sr(e,s,a),a};let Le=class extends n.LitElement{constructor(){super(...arguments),this.text=""}render(){return n.html`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};Le.styles=[n.css`
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
        background: var(--ap-foreground, #09090b);
        color: var(--ap-background, #fff);
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      :host(:hover) .tip {
        display: block;
      }
    `];Bt([c.property()],Le.prototype,"text",2);Le=Bt([c.customElement("ap-tooltip")],Le);var rr=Object.defineProperty,ir=(t,e,s,r)=>{for(var a=void 0,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=i(e,s,a)||a);return a&&rr(e,s,a),a};const pt=class pt extends n.LitElement{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this.store=qt(),this.storeCtrl=new Gt(this,this.store),this.selectionCtrl=new Ht(this,this.store),this.infiniteScrollCtrl=new Kt(this,()=>this._loadMore()),this.marqueeCtrl=new Yt(this,this.store)}connectedCallback(){super.connectedCallback()}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const r=this.renderRoot.querySelector(".main-content");r&&r!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=r,this.marqueeCtrl.attach(r))}_initConfig(e){this._initFailed=!1,this._initPromise=this._doInit(e).catch(()=>{this._initFailed=!0})}async _doInit(e){this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.defaultViewMode??"grid",sortBy:e.defaultSortBy??"created_at",sortDirection:e.defaultSortDirection??"desc",currentFolder:e.rootFolderUuid??null}),this.apiClient=new Xt(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const l=await es(this.apiClient);this.apiClient.setSassKey(l),this.store.setState({sassKey:l})}const[s,r]=await Promise.allSettled([xs(this.apiClient),Jt(this.apiClient)]);if(s.status==="fulfilled"){const{fields:l,regionalVariantGroups:p,regionalFilters:d,brandColor:h}=s.value;this.store.setState({metadataFields:l,regionalVariantGroups:p,regionalFilters:d,...h?{brandColor:h}:{}})}r.status==="fulfilled"&&this.store.setState({labels:r.value.labels||[]});const{pinnedFilters:a,pinnedMetadata:o}=Ps(e.auth.projectToken??null),i=this.store.getState().filters;this.store.setState({filters:{...i,pinned:a,visible:[...a],metadata:{...i.metadata,pinned:o,visible:[...o]}}})}catch(s){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:s,context:"init"},bubbles:!0,composed:!0})),s}}async open(){var s;const e=this.store.getState();this.store.setState({isOpen:!0,activeTab:"assets",searchQuery:"",filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...e.filters.pinned],applied:{}},offset:0,assets:[],folders:[],currentFolder:((s=this.config)==null?void 0:s.rootFolderUuid)??null,currentFolderPath:"/",breadcrumb:[],selectedAssets:new Map,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0}),this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1})}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var r,a,o,i,l,p,d,h,u,f;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const v=s.activeTab;if(v==="assets"){const $=this._buildSearchNotation(),F=await Ke(this.apiClient,{folder:s.currentFolderPath||"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:$||void 0,recursive:1});if(e!==this._loadId)return;const C=((r=F.files)==null?void 0:r.length)??0,P=C>=s.limit,_=((o=(a=F.base)==null?void 0:a.count)==null?void 0:o.files_recursive)??((l=(i=F.base)==null?void 0:i.count)==null?void 0:l.files_direct)??0,x=P?_:C;this.store.setState({assets:F.files||[],folders:[],totalCount:x,totalFolderCount:0,offset:0,hasMore:P,isLoading:!1})}else if(v==="folders"){const $=this._buildSearchNotation(),[F,C]=await Promise.all([Wt(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),Ke(this.apiClient,{folder:s.currentFolderPath||"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:$||void 0,recursive:0})]);if(e!==this._loadId)return;const P=F.folders||[];let _={};if(P.length>0)try{_=await Zt(this.apiClient,P.map(x=>x.uuid))}catch{}if(e!==this._loadId)return;this.store.setState({assets:C.files||[],folders:P,folderPreviews:_,totalCount:(((p=C.files)==null?void 0:p.length)??0)>=s.limit?((h=(d=C.base)==null?void 0:d.count)==null?void 0:h.files_direct)??0:((u=C.files)==null?void 0:u.length)??0,totalFolderCount:F.total??P.length,offset:0,hasMore:(((f=C.files)==null?void 0:f.length)??0)>=s.limit,isLoading:!1})}}catch(v){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:v,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient)return;const s=++this._loadMoreId,r=e.offset+e.limit;this.store.setState({isLoading:!0});try{const a=this._buildSearchNotation(),o=await Ke(this.apiClient,{folder:e.currentFolderPath||"/",offset:r,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:a||void 0,recursive:1});if(s!==this._loadMoreId)return;const i=this.store.getState().assets,l=o.files||[],p=l.length>=e.limit,d=[...i,...l];this.store.setState({assets:d,offset:r,hasMore:p,isLoading:!1,...p?{}:{totalCount:d.length}})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_handleCancel(e){var r,a;if(this.store.getState().isPreviewOpen){this.store.setState({isPreviewOpen:!1,previewAsset:null});return}this.close(),(a=(r=this.config)==null?void 0:r.onCancel)==null||a.call(r),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){this.store.setState({searchQuery:e.detail.value,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleViewChange(e){this.store.setState({viewMode:e.detail.mode}),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:r}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:r}})}_handleSortChange(e){this.store.setState({sortBy:e.detail.value,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){this.store.setState({sortDirection:e.detail.value,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){this.store.setState({activeTab:e.detail.tab,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}_handleQuickSelect(e){var r,a;const s=e.detail.asset;(a=(r=this.config)==null?void 0:r.onSelect)==null||a.call(r,[s]),this.dispatchEvent(new CustomEvent("ap-select",{detail:{assets:[s]},bubbles:!0,composed:!0})),this.close()}_handleFolderOpen(e){const s=e.detail.folder,r=this.store.getState(),a=s.path||`${r.currentFolderPath}${s.name}/`;this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...r.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){const s=e.detail.uuid,r=this.store.getState(),a=s?r.breadcrumb.findIndex(l=>l.uuid===s):-1,o=s?r.breadcrumb.slice(0,a+1):[],i=o.length>0?o[o.length-1].path:"/";this.store.setState({currentFolder:s||null,currentFolderPath:i,breadcrumb:o,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var r,a;const s=e.detail.assets;(a=(r=this.config)==null?void 0:r.onSelect)==null||a.call(r,s),this.dispatchEvent(new CustomEvent("ap-select",{detail:{assets:s},bubbles:!0,composed:!0})),this.close()}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===g.DATE||e===g.LICENSE_EXPIRY||e===z.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:r,operator:a}=e.detail,i={...this.store.getState().filters};if(r===""||r===null||r===void 0||Array.isArray(r)&&r.length===0||typeof r=="object"&&!Array.isArray(r)&&Object.values(r).every(p=>p==null||p===""||Array.isArray(p)&&p.length===0)){const p={...i.applied};delete p[s],i.applied=p,i.pinned.includes(s)||(i.visible=i.visible.filter(d=>d!==s))}else{const p={...i.applied};this._isDateFilterKey(s)&&typeof r=="object"&&!Array.isArray(r)?p[s]={type:"date",field:r.field||"created",kind:r.kind||null,preset:r.preset||null,from:r.from||null,to:r.to||null}:s===g.IMAGE&&typeof r=="object"&&!Array.isArray(r)?p[s]=r:p[s]={type:"string",values:Array.isArray(r)?r:[r],operator:a||":"},i.applied=p,i.visible.includes(s)||(i.visible=[...i.visible,s])}this.store.setState({filters:i,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleFilterRemove(e){const s=e.detail.key,a={...this.store.getState().filters},o={...a.applied};delete o[s],a.applied=o,a.pinned.includes(s)||(a.visible=a.visible.filter(i=>i!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:r,values:a,metadataType:o}=e.detail,l={...this.store.getState().filters},p={...l.metadata},d={...p.applied};!a||Array.isArray(a)&&a.length===0?(delete d[s],p.applied=d,p.pinned.includes(s)||(p.visible=p.visible.filter(u=>u!==s))):(d[s]={type:"string",values:Array.isArray(a)?a:[a],operator:r||":",metadataType:o},p.applied=d,p.visible.includes(s)||(p.visible=[...p.visible,s])),l.metadata=p,this.store.setState({filters:l,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:r}=e.detail,o={...this.store.getState().filters},i={...o.metadata};if(r)i.visible.includes(s)||(i.visible=[...i.visible,s]);else{i.visible=i.visible.filter(p=>p!==s);const l={...i.applied};delete l[s],i.applied=l}o.metadata=i,this.store.setState({filters:o})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},o={...a.metadata},i={...o.applied};delete i[s],o.applied=i,o.pinned.includes(s)||(o.visible=o.visible.filter(l=>l!==s)),a.metadata=o,this.store.setState({filters:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleFilterPin(e){var l,p;const{key:s,pinned:r}=e.detail,o={...this.store.getState().filters};r?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(d=>d!==s),s in o.applied||(o.visible=o.visible.filter(d=>d!==s))),this.store.setState({filters:o});const i=((p=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:p.projectToken)??null;Ms(i,o.pinned)}_handleMetadataPin(e){var p,d;const{fieldKey:s,pinned:r}=e.detail,o={...this.store.getState().filters},i={...o.metadata};r?i.pinned.includes(s)||(i.pinned=[...i.pinned,s]):(i.pinned=i.pinned.filter(h=>h!==s),s in i.applied||(i.visible=i.visible.filter(h=>h!==s))),o.metadata=i,this.store.setState({filters:o});const l=((d=(p=this.store.getState().config)==null?void 0:p.auth)==null?void 0:d.projectToken)??null;Is(l,i.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_buildSearchNotation(){const e=this.store.getState();return Es(e.filters.applied,e.filters.metadata.applied).join(" ")}render(){var a,o;const e=this.storeCtrl.state,s=Array.from(e.selectedAssets.keys()),r=this.selectionCtrl.getSelectedAssets();return n.html`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${i=>this._handleCancel(i.detail.reason)}
      >
        <div slot="header">
          <ap-header
            .activeTab=${e.activeTab}
            .hiddenTabs=${((a=this.config)==null?void 0:a.hiddenTabs)??[]}
            .viewMode=${e.viewMode}
            .searchQuery=${e.searchQuery}
            .regionalGroups=${e.regionalVariantGroups}
            .regionalFilters=${e.regionalFilters}
            @tab-change=${this._handleTabChange}
            @search-change=${this._handleSearchChange}
            @view-change=${this._handleViewChange}
            @regional-change=${this._handleRegionalChange}
            @ap-close=${()=>this._handleCancel("close-button")}
          ></ap-header>
        </div>

        <div class="content-area">
          <div class="main-content">
            ${e.breadcrumb.length>0?n.html`<ap-breadcrumb
                  .items=${e.breadcrumb}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`:n.nothing}

            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .filters=${e.filters}
              .labels=${e.labels}
              .metadataFields=${e.metadataFields}
              @sort-change=${this._handleSortChange}
              @sort-direction-change=${this._handleSortDirectionChange}
              @filter-update=${this._handleFilterUpdate}
              @metadata-filter-change=${this._handleMetadataFilterChange}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
            ></ap-content-toolbar>

            <ap-filters-bar
              .appliedFilters=${e.filters.applied}
              .appliedMetadata=${e.filters.metadata.applied}
              .pinnedFilters=${e.filters.pinned}
              .pinnedMetadata=${e.filters.metadata.pinned}
              .metadataFields=${e.metadataFields}
              @filter-remove=${this._handleFilterRemove}
              @metadata-filter-remove=${this._handleMetadataFilterRemove}
              @filter-pin=${this._handleFilterPin}
              @metadata-pin=${this._handleMetadataPin}
              @filters-clear-all=${this._handleFiltersClearAll}
            ></ap-filters-bar>

            ${e.isLoading&&e.assets.length===0&&e.folders.length===0?n.html`<ap-skeleton .variant=${e.viewMode}></ap-skeleton>`:this._renderContent(e,s)}

            <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          </div>

          ${e.isPreviewOpen&&e.previewAsset?n.html`<ap-preview-panel
                .asset=${e.previewAsset}
                .assets=${e.assets}
                .selectedIds=${s}
                .containerToken=${e.projectToken}
                .showMetadata=${((o=this.config)==null?void 0:o.showMetadata)!==!1}
                .metadataFields=${e.metadataFields}
                .regionalFilters=${e.regionalFilters}
                @preview-close=${this._handlePreviewClose}
                @preview-navigate=${this._handlePreviewNavigate}
                @asset-select=${this._handleAssetSelect}
              ></ap-preview-panel>`:n.nothing}
        </div>

        <div slot="footer">
          <ap-selection-bar
            .selectedAssets=${r}
            @selection-confirm=${this._handleSelectionConfirm}
            @selection-clear=${this._handleSelectionClear}
            @selection-deselect=${this._handleSelectionDeselect}
          ></ap-selection-bar>
        </div>
      </ap-modal>
    `}_renderContent(e,s){return e.activeTab==="assets"?!e.isLoading&&e.assets.length===0?n.html`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">No assets found</div>
            <div class="empty-desc">Try adjusting your search or filters</div>
          </div>
        `:e.viewMode==="grid"?n.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .isLoading=${e.isLoading}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .isLoading=${e.isLoading}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
        ></ap-list-view>
        <div id="sentinel"></div>
      `:e.activeTab==="folders"?!e.isLoading&&e.folders.length===0&&e.assets.length===0?n.html`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">This folder is empty</div>
            <div class="empty-desc">No folders or files found here</div>
          </div>
        `:e.viewMode==="grid"?n.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .selectedIds=${s}
            .isLoading=${e.isLoading}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .selectedIds=${s}
          .isLoading=${e.isLoading}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
        ></ap-list-view>
        <div id="sentinel"></div>
      `:n.nothing}};pt.styles=[n.css`
      :host {
        display: contents;
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
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
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--ap-muted-foreground, #71717a);
        text-align: center;
      }
      .empty-state ap-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--ap-font-size-base, 1rem);
        font-weight: 500;
        color: var(--ap-foreground, #09090b);
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--ap-font-size-sm, 0.875rem);
      }
      .loading-center {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
      }
    `];let ze=pt;ir([c.property({type:Object})],ze.prototype,"config");exports.AssetPicker=ze;
