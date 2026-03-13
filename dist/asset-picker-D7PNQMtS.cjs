"use strict";const n=require("lit"),c=require("lit/decorators.js");class ns{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function ls(){return new ns({config:null,projectToken:"",sassKey:"",brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",sortBy:"created_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map})}class cs{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}class ds{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}handleSelect(e,s,i){var d,p;const a=this.store.getState(),r=new Map(a.selectedAssets);if(!(((d=a.config)==null?void 0:d.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const u=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),h=a.assets;for(let v=u;v<=f;v++)h[v]&&r.set(h[v].uuid,h[v])}else i.metaKey||i.ctrlKey?r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e):(r.clear(),r.set(e.uuid,e));const l=(p=a.config)==null?void 0:p.maxSelections;l&&r.size>l||(this.lastClickedIndex=s,this.store.setState({selectedAssets:r}))}isSelected(e){return this.store.getState().selectedAssets.has(e)}resetRange(){this.lastClickedIndex=-1}clearSelection(){this.store.setState({selectedAssets:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}}class ps{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(i=>{var a;(a=i[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const Et=5,ce=40,Ct=15;class hs{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const a=i.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||i.classList.contains("check")||i.classList.contains("check-box"))})}onMouseDown(e){if(e.button!==0||this.isInteractiveTarget(e))return;const s=this.container.getBoundingClientRect();this.startX=e.clientX-s.left+this.container.scrollLeft,this.startY=e.clientY-s.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){if(this.container){if(!this._dragging){const s=Math.abs(e.clientX-this.startClientX),i=Math.abs(e.clientY-this.startClientY);if(s<Et&&i<Et)return;this._dragging=!0,this.isActive=!0,this.preMarqueeSelection=new Map(this.store.getState().selectedAssets)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;this.rect={x:Math.min(this.startX,i),y:Math.min(this.startY,a),width:Math.abs(i-this.startX),height:Math.abs(a-this.startY)},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientY-s.top,a=s.bottom-e.clientY,r=i<ce||a<ce;r&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):r||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,i=s.clientY-e.top,a=e.bottom-s.clientY;let r=0;i<ce?r=-Ct*(1-i/ce):a<ce&&(r=Ct*(1-a/ce)),r!==0&&(this.container.scrollTop+=r,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}queryCards(){for(const e of Array.from(this.container.children))if(e.shadowRoot){const s=e.shadowRoot.querySelectorAll("[data-asset-uuid]");if(s.length>0)return s}return this.container.querySelectorAll("[data-asset-uuid]")}selectIntersecting(){var a;if(!this.container)return;const e=this.queryCards(),s=new Map(this.preMarqueeSelection);e.forEach(r=>{const o=r.getBoundingClientRect(),l=this.container.getBoundingClientRect(),d={x:o.left-l.left+this.container.scrollLeft,y:o.top-l.top+this.container.scrollTop,width:o.width,height:o.height},p=this.rect.x<d.x+d.width&&this.rect.x+this.rect.width>d.x&&this.rect.y<d.y+d.height&&this.rect.y+this.rect.height>d.y,u=r.dataset.assetUuid;if(p){const f=this.store.getState().assets.find(h=>h.uuid===u);f&&s.set(u,f)}});const i=(a=this.store.getState().config)==null?void 0:a.maxSelections;if(i&&s.size>i){const r=Array.from(s.entries()).slice(0,i);this.store.setState({selectedAssets:new Map(r)})}else this.store.setState({selectedAssets:s})}}class us{constructor(e,s){this.auth=e;const i=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${i}/v5`}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}async request(e,s){const i=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([l,d])=>{d!=null&&(Array.isArray(d)?i.searchParams.set(l,d.join(",")):i.searchParams.set(l,String(d)))});const a={};if(this.auth.mode==="session"){const l=this.auth;a["X-Session-Token"]=l.sessionToken,a["X-Company-Token"]=l.companyToken,a["X-Project-Token"]=l.projectToken}else{const l=this.auth;this.sassKey?a["X-Filerobot-Key"]=this.sassKey:a["X-Filerobot-Key"]=l.securityTemplateKey}const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const l=await fetch(i.toString(),{headers:a,signal:r.signal});if(clearTimeout(o),!l.ok){let p=`API error: ${l.status} ${l.statusText}`;try{const u=await l.json();u.msg&&(p=`API error: ${l.status} - ${u.msg}`)}catch{}throw new Error(p)}const d=await l.json();if(d.status==="error")throw new Error(`API error: ${d.msg||"Unknown error"}`);return d}catch(l){throw clearTimeout(o),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}async post(e,s){const i=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};if(this.auth.mode==="session"){const l=this.auth;a["X-Session-Token"]=l.sessionToken,a["X-Company-Token"]=l.companyToken,a["X-Project-Token"]=l.projectToken}else{const l=this.auth;this.sassKey?a["X-Filerobot-Key"]=this.sassKey:a["X-Filerobot-Key"]=l.securityTemplateKey}const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const l=await fetch(i.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:r.signal});if(clearTimeout(o),!l.ok){let p=`API error: ${l.status} ${l.statusText}`;try{const u=await l.json();u.msg&&(p=`API error: ${l.status} - ${u.msg}`)}catch{}throw new Error(p)}const d=await l.json();if(d.status==="error")throw new Error(`API error: ${d.msg||"Unknown error"}`);return d}catch(l){throw clearTimeout(o),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}}function fs(t){const e={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1},s=t.sort_by??"created_at",i=t.sort_direction??"desc",a={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};e.sort=`${a[s]||s}:${i}`,t.folder&&(e.folder=t.folder);const r=[];return t.search&&r.push(t.search),t.q&&r.push(t.q),r.length>0&&(e.q=r.join(" ")),e}async function st(t,e){const s=fs(e);return t.request("/files",s)}async function vs(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const i=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",r={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${r[i]||i}:${a}`,await t.request("/folders",s)}async function gs(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function ms(t){return await t.request("/labels")}async function bs(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");return(await t.request(`/key/${e}`)).key}const g={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},I={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},m={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS:"~",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},_s={AND:"AND"},b={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},He={[b.DATE]:"date_",[b.BOOLEAN]:"bool_",[b.NUMERIC]:"num_",[b.DECIMAL2]:"dec_",[b.ATTACHMENTS_ASSETS]:"attach_",[b.ATTACHMENT_URI]:"uri_",[b.SELECT_ONE]:"one_",[b.MULTI_SELECT]:"multi_",[b.SUPERTAGS]:"tags_",[b.TEXT]:"text_",[b.TEXT_AREA]:"area_",[b.GEO_POINT]:"geo_",[b.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(He).map(([t,e])=>[e,t]));const zt=Object.values(He),ye={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},kt={EMPTY:"empty",NOT_EMPTY:"non-empty"},z="empty",N="non-empty",te="specific",at=10,it=10,xe=10,Nt="filters:pinned:",jt="metadata:pinned:",Ft=[g.DATE,g.TYPE,g.METADATA],Vt=m.IS,Tt="30",At="1",ys=0,xs=[{key:g.DATE,label:"Date",icon:"calendar-days",type:"date"},{key:g.TYPE,label:"Format",icon:"file-type",type:"string"},{key:g.SIZE,label:"Size",icon:"scaling",type:"string"},{key:g.LICENSE_EXPIRY,label:"License expiry",icon:"history",type:"date"},{key:g.TAGS,label:"Tags",icon:"hash",type:"string"},{key:g.LABELS,label:"Labels",icon:"tag",type:"string"},{key:g.PRODUCT_REF,label:"Products",icon:"box",type:"string"},{key:g.IMAGE,label:"Image",icon:"image",type:"string"},{key:g.COLOR,label:"Color",icon:"swatch-book",type:"string"}],$s={key:g.METADATA,label:"Metadata",icon:"file-text",type:"string"},ws={key:g.APPROVAL,label:"Approval",icon:"badge-check",type:"string"},Ot=[$s,...xs,ws],ht={[g.TYPE]:"Format",[g.DATE]:"Date",[g.SIZE]:"Size",[g.LICENSE_EXPIRY]:"License expiry",[g.TAGS]:"Tags",[g.LABELS]:"Labels",[g.PRODUCT_REF]:"Products",[g.IMAGE]:"Image",[g.COLOR]:"Color",[g.METADATA]:"Metadata",[g.APPROVAL]:"Approval"},G={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},Bt=[{value:G.IMAGE,label:"Image",icon:"image"},{value:G.VIDEO,label:"Video",icon:"clapperboard"},{value:G.AUDIO,label:"Audio",icon:"music"},{value:G.DOCUMENT,label:"Document",icon:"document"},{value:G.ARCHIVE,label:"Archive",icon:"archive"},{value:G.DESIGN_TEMPLATE,label:"Design template",icon:"layout-template"},{value:G.FONTS,label:"Fonts",icon:"text"},{value:G.OTHER,label:"Other",icon:"layout-grid"}],rt={RESOLUTION:0,ORIENTATION:1,FACES:2},Ss=[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],Es=[{value:"portrait",label:"Portrait"},{value:"landscape",label:"Landscape"},{value:"square",label:"Square"},{value:"panorama",label:"Panorama"}],Cs=[{value:"none",label:"None"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Ut=[{value:"created",label:"Created at"},{value:"updated",label:"Updated at"}],ut=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"last_week",label:"Last week"},{value:"after",label:"After date"},{value:"last_month",label:"Last month"},{value:"between",label:"Between dates"},{value:"last_year",label:"Last year"}],qt=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],ks=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],Fs=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Ts=[{label:"None (Exact)",value:"0"},{label:"Small",value:"1"},{label:"Medium",value:"2"},{label:"Large",value:"4"}],ot=[{label:"Is",value:m.IS},{label:"Contains",value:m.CONTAINS_IN_TEXT}],Me=[{label:"Is",value:m.IS},{label:"Is not",value:m.IS_NOT}],$e=[{label:"Is",value:m.IS_EXACT},{label:"Contains",value:m.IS},{label:"Does not contain",value:m.IS_NOT}],nt=[{label:"Is",value:m.IS},{label:"Greater than",value:m.GREATER_THAN_OR_EQUAL},{label:"Is not",value:m.IS_NOT},{label:"Less than",value:m.LESS_THAN_OR_EQUAL},{label:"Between",value:m.RANGE}],As=[{label:"Is",value:m.IS_EXACT},{label:"Is not",value:m.IS_NOT}],Pt=[{label:"Contains",value:m.CONTAINS},{label:"Does not contain",value:m.IS_NOT}],Os=[{value:"APPROVED",label:"Approved"},{value:"PENDING",label:"Pending"},{value:"REJECTED",label:"Rejected"},{value:"CANCELLED",label:"Cancelled"}],de=[{label:"Empty",value:z},{label:"Not empty",value:N}],lt=[...de,{label:"Specific",value:te}],Ps=[{label:"Empty",value:z},{label:"Not empty",value:N},{label:"True",value:"true"},{label:"False",value:"false"}],Ms={[b.TEXT]:"text",[b.TEXT_AREA]:"text",[b.NUMERIC]:"number",[b.DECIMAL2]:"number",[b.BOOLEAN]:"boolean",[b.SELECT_ONE]:"select-one",[b.MULTI_SELECT]:"multi-select",[b.SUPERTAGS]:"tags",[b.DATE]:"date",[b.GEO_POINT]:"geo",[b.ATTACHMENTS_ASSETS]:"attachment",[b.ATTACHMENT_URI]:"attachment",[b.INTEGER_LIST]:"attachment"};async function Ds(t){var y,C,A,D;const e=await t.request("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,r=((i==null?void 0:i.model)??[])[ys],o=i==null?void 0:i.store,d=((o==null?void 0:o.regional_variants_groups)??[]).map(x=>({uuid:x.uuid,label:x.label??x.name??"",variants:(x.variants??[]).map($=>({api_value:$.api_value??$.value??"",internal_unique_value:$.internal_unique_value??$.api_value??"",label:$.label??$.name??""}))})).filter(x=>x.variants.length>1),p={};for(const x of d)p[x.uuid]=((y=x.variants[0])==null?void 0:y.api_value)??"";const u=(s==null?void 0:s.project_branding)??((C=e.settings)==null?void 0:C.project_branding),f=u==null?void 0:u.brandColor;if(!r)return{fields:[],regionalVariantGroups:d,regionalFilters:p,brandColor:f};const h=r.groups??[],v=[];for(const x of h){const $=(x.fields??[]).find(w=>w.type==="select-one"||w.type==="multi-select");if($){console.log("[ap-debug] raw select field:",JSON.stringify($));break}}for(const x of h){const $=((A=x.name)==null?void 0:A.toLowerCase())==="products"||((D=x.name)==null?void 0:D.toLowerCase())==="product fields";for(const w of x.fields??[]){const P=w.possible_values,Pe=P==null?void 0:P.map(j=>({api_value:j.api_value??j.value??"",internal_unique_value:j.internal_unique_value??j.api_value??"",label:j.label??j.name??j.api_value??""}));v.push({key:w.key??w.ckey,label:w.title??w.label??w.key??"",type:w.type??"text",slug:w.slug,ckey:w.ckey,possible_values:Pe,group:$?"product":"root",regionalVariantsGroupUuid:w.regional_variants_group_uuid})}}return{fields:v,regionalVariantGroups:d,regionalFilters:p,brandColor:f}}function se(t){return t.toLocaleDateString("en-CA")}function De(){return se(new Date)}function Kt(t){const e=new Date;switch(t){case"today":return{from:De(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:se(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:De(),to:se(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:se(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:De(),to:se(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:se(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:De(),to:se(s)}}default:return null}}function Mt(t,e){return e?e.type==="date"?Is(e):e.type==="string"?Ls(e):!0:!1}function Is(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function Ls(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function Rs(t,e={}){const s=[];for(const[i,a]of Object.entries(t)){if(!a||!Mt(i,a))continue;const r=Ns(i,a);s.push(...r)}for(const[i,a]of Object.entries(e)){if(!a||!Mt(i,a))continue;const r=qs(i,a);s.push(...r)}return zs(s)}function zs(t){const e=[],s=[],i=[];for(const a of t)a.startsWith("type:")||a.startsWith("type=")?e.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?s.push(a):i.push(a);if(e.length>0&&s.length>0){const a=[...e,...s].join(" , ");i.push(a)}else i.push(...e,...s);return i}function Ns(t,e){if(e.type==="date")return Gt(t,e);const s=e,{operator:i=Vt,values:a=[],logic:r}=s;if(a.length===0)return[];switch(t){case g.SIZE:return js(t,a,"..");case g.FACES:return Vs(t,i,a);case g.TAGS:return ae(t,i,It(a),",",r);case g.LABELS:return ae(t,i,It(a),",",r);case g.COLOR:return Bs(i,a,r);case g.TYPE:return Dt(t,a,i);case g.MIME_TYPE:return Dt(t,a,i);case g.IMAGE:return Us(s.values??a);case g.PRODUCT_REF:return ae(t,"=%",a,",",r);default:return ae(t,i,a,",",r)}}function Gt(t,e){const s=e.field||"created";if(e.kind===ye.PRESET&&e.preset){if(e.preset===kt.EMPTY)return[`${s}:"empty"`];if(e.preset===kt.NOT_EMPTY)return[`${s}:"non-empty"`];const i=Kt(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===ye.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===ye.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===ye.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===ye.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function js(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Vs(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function ae(t,e,s,i,a){if(s.length===0)return[];if(a===_s.AND)return s.map(o=>`${t}${e}"${o}"`);const r=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${r}`]}function Bs(t,e,s){const i=[],a=ae("color_search",t,e,",",s);return i.push(...a),i.push('color_operator:"AND"'),i}function Dt(t,e,s,i){if(e.length===0)return[];const a=e.map(r=>`"${r}"`).join(",");return[`${t}${s}${a}`]}function Us(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,l=o.resolution,d=o.orientation,p=o.faces;return l!=null&&l.length&&e.push(`resolution:"${l.join(",")}"`),d!=null&&d.length&&e.push(`orientation:"${d.join(",")}"`),p!=null&&p.length&&e.push(`faces:"${p.join(",")}"`),e}const s=t,i=s[rt.RESOLUTION],a=s[rt.ORIENTATION],r=s[rt.FACES];return i&&e.push(`resolution:"${i}"`),a&&e.push(`orientation:"${a}"`),r&&e.push(`faces:"${r}"`),e}function qs(t,e){const s=Hs(t),i=Gs(t);if(e.type==="date")return Ks(s,e,i);const a=e,{operator:r=Vt,values:o=[],logic:l,metadataType:d}=a;return o.length===0?[]:(d===b.NUMERIC||d===b.DECIMAL2)&&r===m.RANGE?[`${s}${m.IS}"${o.join('","')}"`]:d===b.GEO_POINT?ae(s,r+"~",o,",",l):ae(s,r,o,",",l)}function Ks(t,e,s){const i=Gt(t,e);return!s||i.length===0?i:i.map(a=>{const r=a.search(/[^a-zA-Z0-9_]/);if(r===-1)return`"${a}"`;const o=a.slice(0,r),d=a.slice(r).replace(/"/g,"");return`"${o}${d}"`})}function Gs(t){return t.startsWith("date_")}function Hs(t){for(const e of zt)if(t.startsWith(e))return t.slice(e.length);return t}function It(t){return t.map(e=>e.replace(/#/g,""))}function Ys(t){const e=localStorage.getItem(Nt+t),s=localStorage.getItem(jt+t);let i;try{i=e?JSON.parse(e):[...Ft]}catch{i=[...Ft]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:i,pinnedMetadata:a}}function Xs(t,e){localStorage.setItem(Nt+t,JSON.stringify(e))}function Ws(t,e){localStorage.setItem(jt+t,JSON.stringify(e))}const Ht="sort-by",Yt="sort-order";function Lt(t,e){try{localStorage.setItem(Ht,t),localStorage.setItem(Yt,e)}catch{}}function Qs(){try{const t=localStorage.getItem(Ht),e=localStorage.getItem(Yt);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const ft=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"modified_at",label:"Modified"},{value:"size",label:"Size"},{value:"type",label:"Format"}],Zs=[{value:"relevance",label:"Relevance"},...ft],Js=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"modified_at",label:"Modified"},{value:"files_count_recursive",label:"Assets count"},{value:"files_size_recursive",label:"Assets size"}];var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ta(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ea(e,s,a),a};let we=class extends n.LitElement{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return n.html`
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
    `}};we.styles=n.css`
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
  `;vt([c.property({type:Boolean})],we.prototype,"open",2);vt([c.query("dialog")],we.prototype,"dialog",2);we=vt([c.customElement("ap-modal")],we);function sa(t,e){let s;const i=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return i.cancel=()=>clearTimeout(s),i}var aa=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,Ye=(t,e,s,i)=>{for(var a=i>1?void 0:i?ia(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&aa(e,s,a),a};let pe=class extends n.LitElement{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return n.html`
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
            ${e.variants.map(s=>{const i=this.selectedFilters[e.uuid]===s.api_value;return n.html`
                <button
                  class="variant-option"
                  ?data-selected=${i}
                  @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                >
                  <span class="check-mark">${i?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                  ${s.label}
                </button>
              `})}
          </div>
        `)}
      </div>
    `}};pe.styles=n.css`
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
  `;Ye([c.property({type:Array})],pe.prototype,"groups",2);Ye([c.property({type:Object})],pe.prototype,"selectedFilters",2);Ye([c.state()],pe.prototype,"_open",2);pe=Ye([c.customElement("ap-regional-settings")],pe);var ra=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,Q=(t,e,s,i)=>{for(var a=i>1?void 0:i?oa(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ra(e,s,a),a};const na=[{value:"assets",label:"Assets",icon:"gallery-vertical-end"},{value:"folders",label:"Folders",icon:"folder-open"}];let V=class extends n.LitElement{constructor(){super(...arguments),this.activeTab="assets",this.hiddenTabs=[],this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this._localSearch="",this._debouncedSearch=sa(t=>{this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(t){this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const t=na.filter(e=>!this.hiddenTabs.includes(e.value));return n.html`
      <div class="header-row">
        <ap-dropdown
          .value=${this.activeTab}
          .options=${t}
          @ap-change=${this._handleTabChange}
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
    `}};V.styles=n.css`
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
  `;Q([c.property()],V.prototype,"activeTab",2);Q([c.property({type:Array})],V.prototype,"hiddenTabs",2);Q([c.property()],V.prototype,"viewMode",2);Q([c.property()],V.prototype,"searchQuery",2);Q([c.property({type:Array})],V.prototype,"regionalGroups",2);Q([c.property({type:Object})],V.prototype,"regionalFilters",2);Q([c.state()],V.prototype,"_localSearch",2);V=Q([c.customElement("ap-header")],V);var la=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,Xt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ca(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&la(e,s,a),a};let Ie=class extends n.LitElement{constructor(){super(...arguments),this.items=[]}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?n.html``:n.html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>Root</button>
        ${this.items.map((t,e)=>n.html`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?n.html`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:n.html`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Ie.styles=n.css`
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
  `;Xt([c.property({type:Array})],Ie.prototype,"items",2);Ie=Xt([c.customElement("ap-breadcrumb")],Ie);var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var a=i>1?void 0:i?pa(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&da(e,s,a),a};let Se=class extends n.LitElement{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?n.html`
      <div class="popover">
        ${this.title?n.html`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:n.html``}};Se.styles=n.css`
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
      overscroll-behavior: contain;
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
  `;gt([c.property()],Se.prototype,"title",2);gt([c.property({type:Boolean})],Se.prototype,"open",2);Se=gt([c.customElement("ap-filter-popover")],Se);var ha=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,Wt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ua(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ha(e,s,a),a};let Le=class extends n.LitElement{constructor(){super(...arguments),this.selected=[]}_toggle(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.TYPE,values:e,operator:m.IS},bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="options">
        ${Bt.map(t=>n.html`
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
    `}};Le.styles=n.css`
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
  `;Wt([c.property({type:Array})],Le.prototype,"selected",2);Le=Wt([c.customElement("ap-filter-type")],Le);const Z=n.css`
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
    padding: 0;
    border: none;
    background: none;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-primary, oklch(0.65 0.19 258));
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
    font-weight: 600;
    color: var(--ap-foreground, #09090b);
    margin-bottom: 8px;
    cursor: default;
  }

  /* ── Section spacing ── */
  .filter-section {
    margin-bottom: 20px;
  }
  .filter-section:last-child {
    margin-bottom: 0;
  }

  /* ── Separator ── */
  .separator {
    height: 1px;
    background: var(--ap-border, #e4e4e7);
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: var(--ap-muted, #f4f4f5);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--ap-muted-foreground, #71717a);
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert ap-icon {
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--ap-border, #e4e4e7);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, #09090b);
    background: var(--ap-background, #fff);
    box-sizing: border-box;
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--ap-primary, oklch(0.65 0.19 258));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--ap-muted-foreground, #71717a);
  }

  textarea.filter-input {
    min-height: 60px;
    resize: vertical;
  }

  /* ── Input label ── */
  .input-label {
    display: block;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-weight: 500;
    color: var(--ap-foreground, #09090b);
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
    border: 1px solid var(--ap-border, #e4e4e7);
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--ap-foreground, #09090b);
    background: var(--ap-background, #fff);
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
    color: var(--ap-muted-foreground, #71717a);
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--ap-foreground, #09090b);
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--ap-destructive, #ef4444);
    margin-top: 4px;
  }

  /* ── Search input ── */
  .search-wrapper {
    position: relative;
    margin-bottom: 12px;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 10px;
    border: 1px solid var(--ap-border, #e4e4e7);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, #09090b);
    background: var(--ap-background, #fff);
    box-sizing: border-box;
    outline: none;
  }
  .search-input:focus {
    border-color: var(--ap-primary, oklch(0.65 0.19 258));
  }
  .search-input::placeholder {
    color: var(--ap-muted-foreground, #71717a);
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
    color: var(--ap-muted-foreground, #71717a);
    cursor: pointer;
    padding: 0;
  }
  .search-clear:hover {
    color: var(--ap-foreground, #09090b);
  }

  /* ── Options list (checkbox-based) ── */
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 250px;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .options-list.short {
    max-height: none;
  }
  .no-results {
    padding: 12px;
    text-align: center;
    font-size: var(--ap-font-size-sm, 0.875rem);
    color: var(--ap-muted-foreground, #71717a);
  }
`;var fa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ne=(t,e,s,i)=>{for(var a=i>1?void 0:i?va(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fa(e,s,a),a};function ct(t){return t.toISOString().split("T")[0]}let q=class extends n.LitElement{constructor(){super(...arguments),this.filterKey=g.DATE,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===g.LICENSE_EXPIRY}get _rangeOptions(){return this._isLicenseExpiry?qt:ut}get _todayStr(){return ct(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=Kt(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?n.nothing:n.html`
      <div class="filter-section">
        <span class="section-label">Date type</span>
        <ap-radio-group
          .options=${Ut}
          .value=${this.field}
          @ap-change=${t=>this._selectField(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderRangeSection(){return n.html`
      <div class="filter-section">
        <span class="section-label">Range</span>
        <ap-radio-group
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${t=>this._selectPreset(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return n.nothing;const e=this.from?ct(new Date(this.from)):"",s=this.to?ct(new Date(this.to)):"",i=this._todayStr;return t==="specific"?n.html`
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
      `:t==="before"?n.html`
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
      `:t==="after"?n.html`
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
      `:n.html`
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
    `}render(){return n.html`
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
    `}};q.styles=[Z,n.css`
    .date-inputs {
      margin-top: 4px;
    }
  `];ne([c.property()],q.prototype,"filterKey",2);ne([c.property()],q.prototype,"field",2);ne([c.property()],q.prototype,"kind",2);ne([c.property()],q.prototype,"preset",2);ne([c.property()],q.prototype,"from",2);ne([c.property()],q.prototype,"to",2);q=ne([c.customElement("ap-filter-date")],q);var ga=Object.defineProperty,ma=Object.getOwnPropertyDescriptor,ge=(t,e,s,i)=>{for(var a=i>1?void 0:i?ma(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ga(e,s,a),a};let H=class extends n.LitElement{constructor(){super(...arguments),this.available=[],this.selected=[],this.suggested=[],this.filterKey=g.TAGS,this._search=""}get _atLimit(){return this.selected.length>=at}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:m.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:m.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:m.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_renderTagItem(t){const e=this.selected.includes(t),s=!e&&this._atLimit;return n.html`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${at} tags`:n.nothing}
        @click=${()=>!s&&this._toggle(t)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="tag-name">${t}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${this.selected.length===0}
          @click=${this._clearAll}
        >Clear all</button>

        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search tags..."
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?n.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?n.html`
              <div class="filter-section">
                <div class="chips-wrap">
                  ${this.selected.map(e=>n.html`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:n.nothing}

        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?n.html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${at} tags.</span>
              </div>
            `:n.nothing}
      </div>
    `}_renderSearchResults(t){const e=this.available.filter(s=>s.toLowerCase().includes(t));return e.length===0?n.html`<div class="no-results">No tags found</div>`:n.html`
      <div class="options-list">
        ${e.map(s=>this._renderTagItem(s))}
      </div>
    `}_renderSections(){const t=this.suggested.filter(s=>this.available.includes(s)),e=this.available;return n.html`
      ${t.length>0?n.html`
            <div class="filter-section">
              <span class="section-label">Suggested tags</span>
              <div class="options-list short">
                ${t.map(s=>this._renderTagItem(s))}
              </div>
            </div>

            <div class="separator"></div>
          `:n.nothing}

      <div class="filter-section">
        <span class="section-label">All tags</span>
        <div class="options-list">
          ${e.length===0?n.html`<div class="no-results">No tags available</div>`:e.map(s=>this._renderTagItem(s))}
        </div>
      </div>

      <div class="hint-message">Find more tags by using search</div>
    `}};H.styles=[Z,n.css`
    .tag-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .tag-item:hover:not(.disabled) {
      background: var(--ap-muted, #f4f4f5);
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
      color: var(--ap-foreground, #09090b);
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hint-message {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      padding: 8px 0;
    }
  `];ge([c.property({type:Array})],H.prototype,"available",2);ge([c.property({type:Array})],H.prototype,"selected",2);ge([c.property({type:Array})],H.prototype,"suggested",2);ge([c.property()],H.prototype,"filterKey",2);ge([c.state()],H.prototype,"_search",2);H=ge([c.customElement("ap-filter-tags")],H);var ba=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var a=i>1?void 0:i?_a(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ba(e,s,a),a};let he=class extends n.LitElement{constructor(){super(...arguments),this.labels=[],this.selected=[],this._search=""}get _atLimit(){return this.selected.length>=it}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.LABELS,values:s,operator:m.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.LABELS,values:e,operator:m.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.LABELS,values:[],operator:m.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelByUuid(t){return this.labels.find(e=>e.uuid===t)}_renderLabelItem(t){const e=this.selected.includes(t.uuid),s=!e&&this._atLimit;return n.html`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?`You can select up to ${it} labels`:n.nothing}
        @click=${()=>!s&&this._toggle(t.uuid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <div
          class="color-dot"
          style="background: ${t.color}"
        ></div>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assetsCount}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${this.selected.length===0}
          @click=${this._clearAll}
        >Clear all</button>

        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search labels..."
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?n.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?n.html`
              <div class="filter-section">
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelByUuid(s);return i?n.html`
                      <div class="chip">
                        <div
                          class="chip-color-dot"
                          style="background: ${i.color}"
                        ></div>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:n.nothing})}
                </div>
              </div>
            `:n.nothing}

        <!-- Labels list -->
        <div class="filter-section">
          <span class="section-label">All labels</span>
          <div class="options-list">
            ${e.length===0?n.html`<div class="no-results">No labels found</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?n.html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${it} labels.</span>
              </div>
            `:n.nothing}
      </div>
    `}};he.styles=[Z,n.css`
    .label-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover:not(.disabled) {
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

    .color-dot.small {
      width: 8px;
      height: 8px;
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

    .chip-color-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  `];Xe([c.property({type:Array})],he.prototype,"labels",2);Xe([c.property({type:Array})],he.prototype,"selected",2);Xe([c.state()],he.prototype,"_search",2);he=Xe([c.customElement("ap-filter-labels")],he);var ya=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,We=(t,e,s,i)=>{for(var a=i>1?void 0:i?xa(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ya(e,s,a),a};const dt=3;let Y=class extends n.LitElement{constructor(){super(...arguments),this.colors=[],this._advanced=!1,this._showPalette=!1}get _hasSelection(){return this.colors.length>0}get _selectedHexes(){return new Set(this.colors.map(t=>t.hex))}_selectColor(t){if(!Y._HEX_RE.test(t))return;const e=this.colors.findIndex(s=>s.hex===t);if(e>=0){this._removeColor(e);return}this.colors.length>=dt||(this.colors=[...this.colors,{hex:t,tolerance:At,coverage:Tt}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this.colors=this.colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this.colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this.colors.length>0&&this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this.colors];s[t]={...s[t],tolerance:e.detail.value},this.colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const a=[...this.colors];a[t]={...a[t],coverage:String(i)},this.colors=a,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this.colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this.colors.map(e=>{const s=this._advanced?e.tolerance:At,i=this._advanced?e.coverage:Tt;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this.colors.length>=dt;return n.html`
      <div class="palette">
        ${Fs.map(s=>{const i=t.has(s),a=e&&!i;return n.html`
              <button
                class="swatch ${i?"selected":""} ${a?"disabled":""}"
                style="background:${s};${s==="#ffffff"?" border: 1px solid #e4e4e7;":""}"
                @click=${()=>!a&&this._selectColor(s)}
                title=${s}
                ?disabled=${a}
              ></button>
            `})}
      </div>
    `}_renderNormalColorEntry(t,e){return n.html`
      <div class="color-entry">
        <div
          class="color-swatch-small"
          style="background:${t.hex}"
        ></div>
        <span class="color-hex">${t.hex}</span>
        <button
          class="remove-btn"
          title="Remove color"
          @click=${()=>this._removeColor(e)}
        >
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `}_renderAdvancedColorEntry(t,e){return n.html`
      <div class="color-entry-advanced">
        <div
          class="color-swatch-small"
          style="background:${t.hex}"
          title=${t.hex}
        ></div>
        <ap-dropdown
          .value=${t.tolerance}
          .options=${Ts}
          @ap-change=${s=>this._handleToleranceChange(e,s)}
        ></ap-dropdown>
        <div class="coverage-wrap">
          <input
            type="number"
            class="coverage-input"
            min="1"
            max="100"
            .value=${t.coverage}
            @change=${s=>this._handleCoverageInput(e,s)}
          />
          <span class="coverage-unit">%</span>
        </div>
        <button
          class="remove-btn"
          title="Remove color"
          @click=${()=>this._removeColor(e)}
        >
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `}render(){const t=this.colors.length===0||this._showPalette,e=this.colors.length<dt&&!this._showPalette;return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="header-row">
          <span class="section-label">Color</span>
          <label class="advanced-toggle">
            <input
              type="checkbox"
              .checked=${this._advanced}
              @change=${this._toggleAdvanced}
            />
            Advanced
          </label>
        </div>

        <div class="filter-section">
          ${t?this._renderPalette():n.nothing}
        </div>

        ${this.colors.length>0?n.html`
          <div class="filter-section">
            ${this._advanced?n.html`
              <div class="selected-colors">
                ${this.colors.map((s,i)=>this._renderAdvancedColorEntry(s,i))}
              </div>
            `:n.html`
              <div class="selected-colors">
                ${this.colors.map((s,i)=>this._renderNormalColorEntry(s,i))}
              </div>
            `}
          </div>
        `:n.nothing}

        ${e?n.html`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              Add Color
            </button>
          </div>
        `:n.nothing}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Requires image processing to be enabled.</span>
        </div>
      </div>
    `}};Y.styles=[Z,n.css`
    .header-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .advanced-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      margin-right: 60px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      user-select: none;
    }

    .advanced-toggle input {
      accent-color: var(--ap-primary, oklch(0.65 0.19 258));
      width: 14px;
      height: 14px;
      cursor: pointer;
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

    .swatch.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .swatch.disabled:hover {
      transform: none;
    }

    /* ── Selected colors list ── */
    .selected-colors {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .color-entry {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .color-swatch-small {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid var(--ap-border, #e4e4e7);
      flex-shrink: 0;
    }

    .color-hex {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .remove-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      padding: 0;
      margin-left: auto;
      border-radius: 4px;
    }

    .remove-btn:hover {
      color: var(--ap-destructive, #ef4444);
      background: var(--ap-muted, #f4f4f5);
    }

    /* ── Advanced mode grid ── */
    .color-entry-advanced {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
      gap: 8px;
    }

    .field-label {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 2px;
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
      box-sizing: border-box;
    }

    .coverage-input:focus {
      outline: none;
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .coverage-wrap {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .coverage-unit {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
    }

    /* ── Add color button ── */
    .add-color-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      transition: border-color 150ms, color 150ms;
    }

    .add-color-btn:hover {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `];Y._HEX_RE=/^#[0-9A-Fa-f]{6}$/;We([c.state()],Y.prototype,"colors",2);We([c.state()],Y.prototype,"_advanced",2);We([c.state()],Y.prototype,"_showPalette",2);Y=We([c.customElement("ap-filter-color")],Y);var $a=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var a=i>1?void 0:i?wa(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&$a(e,s,a),a};const Sa={KB:1/1e3,MB:1,GB:1e3},Ea=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let K=class extends n.LitElement{constructor(){super(...arguments),this.min=0,this.max=0,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Sa[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.SIZE,values:[],operator:m.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:g.SIZE,values:[i],operator:m.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return n.html`
      <div class="filter-content">
        <span class="section-label">Size</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="grid-3">
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
              .options=${Ea}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
          </div>
        </div>
      </div>
    `}};K.styles=[Z,n.css`
      /* Hide number input spinners */
      .filter-input[type='number']::-webkit-inner-spin-button,
      .filter-input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .filter-input[type='number'] {
        -moz-appearance: textfield;
      }
    `];le([c.property({type:Number})],K.prototype,"min",2);le([c.property({type:Number})],K.prototype,"max",2);le([c.state()],K.prototype,"_minVal",2);le([c.state()],K.prototype,"_maxVal",2);le([c.state()],K.prototype,"_unit",2);le([c.state()],K.prototype,"_initialized",2);K=le([c.customElement("ap-filter-size")],K);var Ca=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var a=i>1?void 0:i?ka(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ca(e,s,a),a};let ue=class extends n.LitElement{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[]}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Resolution</span>
          <div class="grid-2">
            ${Ss.map(t=>n.html`
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
            ${Es.map(t=>n.html`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleOrientation(t.value)}}
                >${t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">Faces</span>
          <div class="grid-2">
            ${Cs.map(t=>n.html`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleFaces(t.value)}}
                >${t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Requires image processing to be enabled.</span>
        </div>
      </div>
    `}};ue.styles=[Z,n.css`
    .options-vertical {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `];Qe([c.property({type:Array})],ue.prototype,"selectedResolution",2);Qe([c.property({type:Array})],ue.prototype,"selectedOrientation",2);Qe([c.property({type:Array})],ue.prototype,"selectedFaces",2);ue=Qe([c.customElement("ap-filter-image")],ue);var Fa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,k=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ta(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Fa(e,s,a),a};function _(t){return`${He[t.type]||""}${t.key}`}let S=class extends n.LitElement{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={}}get _atFieldLimit(){return this.visibleFields.length>=xe}_getField(t){return this.fields.find(e=>_(e)===t)}_getUIType(t){return Ms[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===z||t[0]===N}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===z?z:((i=e.values)==null?void 0:i[0])===N?N:this._specificModeFields.has(t)||e.values&&e.values.length>0?te:""}_emitFilterChange(t,e,s){const i=_(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=_(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=_(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=_(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(_(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=_(t);if(e===te){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const a=this._getApplied(s);this._isSpecialValue(a.values)&&this._emitFilterChange(t,a.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}this._onEmptyOption(t,e)}}_clearFieldFilter(t){const e=_(t);if(this._specificModeFields.has(e)){const h=new Set(this._specificModeFields);h.delete(e),this._specificModeFields=h}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:a,...r}=this._dateFroms;this._dateFroms=r;const{[e]:o,...l}=this._dateTos;this._dateTos=l;const{[e]:d,...p}=this._selectSearches;this._selectSearches=p;const{[e]:u,...f}=this._tagInputs;this._tagInputs=f,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(_(t)).operator||ot[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,a=_(t),r=this._getApplied(a),o=r.operator||nt[0].value,l=[...r.values||[]];s===0?l[0]=i:l[1]=i;const d=l.filter(p=>p!==""&&p!==void 0);if(d.length>0){const p=t.type===b.DECIMAL2;if(!d.every(f=>p?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,o,l)}_onBooleanSelect(t,e){var a;const s=this._getApplied(_(t));((a=s.values)==null?void 0:a[0])===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=_(t),i=this._getApplied(s),a=i.operator||Me[0].value,r=i.values||[];r.length===1&&r[0]===e?this._emitFilterChange(t,a,[]):this._emitFilterChange(t,a,[e])}_onMultiSelectToggle(t,e){const s=_(t),i=this._getApplied(s),a=i.operator||$e[0].value,r=i.values||[],o=r.includes(e)?r.filter(l=>l!==e):[...r,e];this._emitFilterChange(t,a,o)}_onTagKeydown(t,e){const s=_(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e){const s=e.target.value;if(s.includes(",")){const i=s.replace(/,/g,"").trim();if(i){this._tagInputs={...this._tagInputs,[t]:i};const a=this._getField(t);a&&this._commitTagInput(a,t)}return}this._tagInputs={...this._tagInputs,[t]:s}}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),a=i.operator||$e[0].value,r=i.values||[];r.includes(s)||this._emitFilterChange(t,a,[...r,s]),this._tagInputs={...this._tagInputs,[e]:""}}_removeTag(t,e){const s=_(t),i=this._getApplied(s),a=i.operator||$e[0].value,r=i.values||[];this._emitFilterChange(t,a,r.filter(o=>o!==e))}_onDatePreset(t,e){const s=_(t);if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let a="",r="";switch(e){case"today":{const o=new Date(i);o.setHours(0,0,0,0),a=o.toISOString(),r=i.toISOString();break}case"last_week":{const o=new Date(i),l=o.getDay();o.setDate(o.getDate()-(l===0?6:l-1)),o.setHours(0,0,0,0);const d=new Date(o);d.setDate(d.getDate()-7),a=d.toISOString(),r=o.toISOString();break}case"last_month":{const o=new Date(i.getFullYear(),i.getMonth(),1),l=new Date(o);l.setMonth(l.getMonth()-1),a=l.toISOString(),r=o.toISOString();break}case"last_year":{const o=new Date(i.getFullYear(),0,1),l=new Date(o);l.setFullYear(l.getFullYear()-1),a=l.toISOString(),r=o.toISOString();break}}a&&r&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:r},this._emitFilterChange(t,"..",[a,r]))}_onDateInput(t,e,s){const i=s.target.value,a=_(t),r=this._datePresets[a]||"",o=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:o}:this._dateTos={...this._dateTos,[a]:o};let l=this._dateFroms[a]||"",d=this._dateTos[a]||"";r==="after"&&l&&(d=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:d}),r==="before"&&d&&(l=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:l}),l&&d&&this._emitFilterChange(t,"..",[l,d])}_onGeoLocationInput(t,e){var u;const s=e.target.value.trim(),i=_(t),a=(u=this.shadowRoot)==null?void 0:u.querySelector(`[data-geo-radius="${i}"]`),r=(a==null?void 0:a.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(f=>f.trim());if(o.length!==2||o.some(f=>isNaN(Number(f))||f===""))return;const[l,d]=o;let p=`${l},${d}`;r&&(p+=`..${r}`),this._emitFilterChange(t,m.IS,[p])}_onGeoRadiusInput(t,e){var d;const s=e.target.value,i=_(t),a=this._getApplied(i);if(!((d=a.values)!=null&&d[0]))return;const r=a.values[0],[o]=r.split("..");let l=o;s&&(l+=`..${s}`),this._emitFilterChange(t,m.IS,[l])}_onEmptyOption(t,e){var a;const s=this._getApplied(_(t));((a=s.values)==null?void 0:a[0])===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(r=>r.label.toLowerCase().includes(t)),s=e.filter(r=>!r.group||r.group==="root"),i=e.filter(r=>r.group==="product"),a=(r,o)=>o.length===0?n.nothing:n.html`
        <div class="field-group-label">${r}</div>
        ${o.map(l=>{const d=_(l),p=this.visibleFields.includes(d),u=!p&&this._atFieldLimit;return n.html`
            <div
              class="field-item ${p?"selected":""} ${u?"disabled":""}"
              @click=${()=>!u&&!p&&this._addField(l)}
            >
              ${p?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:n.nothing}
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
          @input=${r=>{this._fieldSearch=r.target.value}}
        />
        <div class="field-list">
          ${e.length===0?n.html`<div class="empty-msg">No fields found</div>`:n.html`
                ${a("Root fields",s)}
                ${a("Product fields",i)}
              `}
        </div>
        ${this.visibleFields.length>0?n.html`
              <div
                class="limit-note ${this._atFieldLimit?"at-limit":""}"
              >
                ${this.visibleFields.length} / ${xe} fields selected
              </div>
            `:n.nothing}
      </div>
    `}_renderTextFilter(t){var p,u;const e=_(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?"":((p=s.values)==null?void 0:p[0])||"",r=this._getContentMode(e),o=r===z||r===N,l=s.operator||ot[0].value,d=t.type===b.TEXT_AREA;return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((u=s.values)!=null&&u.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Operator</span>
          <ap-radio-group
            direction="horizontal"
            .options=${ot}
            .value=${l}
            ?disabled=${o}
            @ap-change=${f=>this._onOperatorChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            .options=${lt}
            .value=${r}
            @ap-change=${f=>this._onContentModeChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        ${r===te?n.html`
              <div class="filter-section">
                <span class="section-label">Value</span>
                ${d?n.html`
                      <textarea
                        class="filter-input"
                        placeholder="Enter value..."
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                      ></textarea>
                    `:n.html`
                      <input
                        class="filter-input"
                        type="text"
                        placeholder="Enter value..."
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                        @keydown=${f=>{f.key==="Enter"&&f.preventDefault()}}
                      />
                    `}
              </div>
            `:n.nothing}
      </div>
    `}_renderNumberFilter(t){var x,$,w;const e=_(t),s=this._getApplied(e),i=s.operator||nt[0].value,a=this._isSpecialValue(s.values),r=this._getContentMode(e),o=r===z||r===N,l=i===m.RANGE,d=i===m.GREATER_THAN_OR_EQUAL,p=i===m.LESS_THAN_OR_EQUAL,u=t.type===b.DECIMAL2,f=u?"0.01":"1",h=u?"0.00":"0",v=a?"":((x=s.values)==null?void 0:x[0])||"",y=a?"":(($=s.values)==null?void 0:$[1])||"",C=l||d||p,A=l||d||p?"Min":"Value";return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((w=s.values)!=null&&w.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Condition</span>
          <ap-radio-group
            columns="2"
            .options=${nt}
            .value=${i}
            ?disabled=${o}
            @ap-change=${P=>this._onOperatorChange(t,P.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            .options=${lt}
            .value=${r}
            @ap-change=${P=>this._onContentModeChange(t,P.detail.value)}
          ></ap-radio-group>
        </div>

        ${r===te?n.html`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${p?"true":n.nothing}>${A}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${h}
                      .value=${v}
                      ?disabled=${p}
                      @change=${P=>this._onNumberInput(t,P,0)}
                    />
                  </div>
                  ${C?n.html`
                        <div>
                          <span class="input-label" aria-disabled=${d?"true":n.nothing}>${"Max"}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${h}
                            .value=${y}
                            ?disabled=${d}
                            @change=${P=>this._onNumberInput(t,P,1)}
                          />
                        </div>
                      `:n.nothing}
                </div>
              </div>
            `:n.nothing}
      </div>
    `}_renderBooleanFilter(t){var i,a;const e=this._getApplied(_(t)),s=((i=e.values)==null?void 0:i[0])||"";return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Value</span>
          <ap-radio-group
            .options=${Ps}
            .value=${s}
            @ap-change=${r=>this._onBooleanSelect(t,r.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=_(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||Me[0].value,l=(this._selectSearches[e]||"").toLowerCase(),d=l.length>0,p=a.length>0||i,u=l?r.filter(h=>h.label.toLowerCase().includes(l)):r,f=a.length>=xe;return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!p&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search options..."
            .value=${this._selectSearches[e]||""}
            @input=${h=>{this._selectSearches={...this._selectSearches,[e]:h.target.value}}}
          />
          ${d?n.html`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        ${d?n.nothing:n.html`
              <!-- Operator -->
              <div class="filter-section">
                <span class="section-label">Operator</span>
                <ap-radio-group
                  direction="horizontal"
                  .options=${Me}
                  .value=${o}
                  @ap-change=${h=>this._onOperatorChange(t,h.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n.html`
                    <div class="filter-section">
                      <div class="chips-wrap">
                        ${a.map(h=>{const v=r.find(y=>y.api_value===h);return n.html`
                            <div class="chip">
                              <span class="chip-label">${(v==null?void 0:v.label)||h}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(t,h)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:n.nothing}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${de.map(h=>{var v;return n.html`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,h.value)}
                >
                  <ap-checkbox ?checked=${((v=s.values)==null?void 0:v[0])===h.value}></ap-checkbox>
                  <span>${h.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length===0?n.html`<div class="no-results">No options found</div>`:u.map(h=>{const v=a.includes(h.api_value),y=!v&&f;return n.html`
                    <div
                      class="option-item ${y?"disabled":""}"
                      @click=${()=>!y&&this._onSelectOneToggle(t,h.api_value)}
                    >
                      <ap-checkbox ?checked=${v}></ap-checkbox>
                      <span>${h.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=_(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||$e[0].value,l=(this._selectSearches[e]||"").toLowerCase(),d=l.length>0,p=a.length>0||i,u=l?r.filter(h=>h.label.toLowerCase().includes(l)):r,f=a.length>=xe;return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!p&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search options..."
            .value=${this._selectSearches[e]||""}
            @input=${h=>{this._selectSearches={...this._selectSearches,[e]:h.target.value}}}
          />
          ${d?n.html`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        ${d?n.nothing:n.html`
              <!-- Operator -->
              <div class="filter-section">
                <span class="section-label">Operator</span>
                <ap-radio-group
                  direction="horizontal"
                  .options=${$e}
                  .value=${o}
                  @ap-change=${h=>this._onOperatorChange(t,h.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n.html`
                    <div class="filter-section">
                      <div class="chips-wrap">
                        ${a.map(h=>{const v=r.find(y=>y.api_value===h);return n.html`
                            <div class="chip">
                              <span class="chip-label">${(v==null?void 0:v.label)||h}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(t,h)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:n.nothing}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${de.map(h=>{var v;return n.html`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,h.value)}
                >
                  <ap-checkbox ?checked=${((v=s.values)==null?void 0:v[0])===h.value}></ap-checkbox>
                  <span>${h.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length===0?n.html`<div class="no-results">No options found</div>`:u.map(h=>{const v=a.includes(h.api_value),y=!v&&f;return n.html`
                    <div
                      class="option-item ${y?"disabled":""}"
                      @click=${()=>!y&&this._onMultiSelectToggle(t,h.api_value)}
                    >
                      <ap-checkbox ?checked=${v}></ap-checkbox>
                      <span>${h.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=_(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=this._tagInputs[e]||"";return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${a.length===0&&!i}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <!-- Tag chips -->
        ${a.length>0?n.html`
              <div class="filter-section">
                <div class="chips-wrap">
                  ${a.map(o=>n.html`
                      <div class="chip">
                        <span class="chip-label">${o}</span>
                        <button class="chip-remove" @click=${()=>this._removeTag(t,o)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:n.nothing}

        <!-- Tag input -->
        <div class="filter-section">
          <div class="tags-container">
            <input
              class="tag-input"
              type="text"
              placeholder=${a.length>0?"Add tag...":"Type and press Enter..."}
              .value=${r}
              @input=${o=>this._onTagInput(e,o)}
              @keydown=${o=>this._onTagKeydown(t,o)}
            />
          </div>
        </div>
      </div>
    `}_renderDateFilter(t){var u,f;const e=_(t),s=this._datePresets[e]||"",i=this._getApplied(e),r=this._isSpecialValue(i.values)?((u=i.values)==null?void 0:u[0])||"":s,o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],l=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",d=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",p=["before","after","between"].includes(r);return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!r&&!((f=i.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            .options=${o}
            .value=${r==="empty"||r==="non-empty"?r:""}
            @ap-change=${h=>this._onDatePreset(t,h.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            columns="2"
            .options=${ut}
            .value=${r!=="empty"&&r!=="non-empty"?r:""}
            @ap-change=${h=>this._onDatePreset(t,h.detail.value)}
          ></ap-radio-group>
        </div>

        ${p?n.html`
              <div class="filter-section">
                <div class="grid-2">
                  ${r==="before"?n.html`
                        <div>
                          <span class="input-label">End date</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${d}
                            @change=${h=>this._onDateInput(t,"to",h)}
                          />
                        </div>
                      `:r==="after"?n.html`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${h=>this._onDateInput(t,"from",h)}
                            />
                          </div>
                        `:n.html`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${h=>this._onDateInput(t,"from",h)}
                            />
                          </div>
                          <div>
                            <span class="input-label">End date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${d}
                              @change=${h=>this._onDateInput(t,"to",h)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:n.nothing}
      </div>
    `}_renderGeoFilter(t){var u,f;const e=_(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=this._getContentMode(e);let r="",o="";if(!i&&((u=s.values)!=null&&u[0])){const h=s.values[0],[v,y]=h.split("..");r=v||"",o=y||""}const l=r.length>0,d=r.split(",").map(h=>h.trim()),p=!l||d.length===2&&d.every(h=>!isNaN(Number(h))&&h!=="");return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((f=s.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            .options=${lt}
            .value=${a}
            @ap-change=${h=>this._onContentModeChange(t,h.detail.value)}
          ></ap-radio-group>
        </div>

        ${a===te?n.html`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">Location</span>
                    <input
                      class="filter-input"
                      type="text"
                      placeholder="Latitude, longitude"
                      .value=${r}
                      @change=${h=>this._onGeoLocationInput(t,h)}
                    />
                    ${l&&!p?n.html`<div class="error-text">Enter coordinates as "latitude, longitude"</div>`:n.nothing}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">Max radius (&deg;)</span>
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
            `:n.nothing}
      </div>
    `}_renderAttachmentFilter(t){var i,a;const e=this._getApplied(_(t)),s=((i=e.values)==null?void 0:i[0])||"";return n.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            .options=${de}
            .value=${s}
            @ap-change=${r=>this._onEmptyOption(t,r.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=_(t),s=this._getApplied(e),i=s.values||[],a=s.operator||m.IS;return n.html`
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
            .options=${Me}
            .value=${a}
            @ap-change=${r=>this._emitFilterChange(t,r.detail.value,i)}
          ></ap-radio-group>
          <input
            class="filter-input"
            type="text"
            placeholder="Search faces..."
            .value=${i.join(", ")}
            @change=${r=>{const l=r.target.value.split(",").map(d=>d.trim()).filter(Boolean);this._emitFilterChange(t,a,l)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===b.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return n.nothing}}_renderFieldSection(t){const e=this._getField(t);if(!e)return n.nothing;const s=this._collapsedFields.has(t);return n.html`
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
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(r=>r.label.toLowerCase().includes(t)),s=e.filter(r=>!r.group||r.group==="root"),i=e.filter(r=>r.group==="product"),a=(r,o)=>o.length===0?n.nothing:n.html`
        <div class="field-group-label">${r}</div>
        ${o.map(l=>{const d=_(l),p=this.visibleFields.includes(d),u=!!this.appliedMetadata[d]||!!this.appliedFilters[d],f=this.pinnedFields.includes(d),h=!p&&this._atFieldLimit;return n.html`
            <div
              class="field-item ${u?"has-filter":""} ${h?"disabled":""}"
              @click=${()=>!h&&this._emitFieldSelect(l)}
            >
              <span class="field-item-label">${l.label}</span>
              ${u?n.html`<span class="field-item-dot"></span>`:n.nothing}
              <button
                class="field-item-pin ${f?"pinned":""}"
                @click=${v=>{v.stopPropagation(),this._emitPin(d,!f)}}
                title=${f?"Unpin field":"Pin field"}
              >
                <ap-icon name=${f?"pin-off":"pin"} .size=${12}></ap-icon>
              </button>
            </div>
          `})}
      `;return n.html`
      <input
        class="field-search"
        type="text"
        placeholder="Search fields..."
        .value=${this._fieldSearch}
        @input=${r=>{this._fieldSearch=r.target.value}}
      />
      <div class="field-list">
        ${e.length===0?n.html`<div class="empty-msg">No fields found</div>`:n.html`
              ${a("Root fields",s)}
              ${a("Product fields",i)}
            `}
      </div>
      ${this.visibleFields.length>0?n.html`
            <div
              class="limit-note ${this._atFieldLimit?"at-limit":""}"
            >
              ${this.visibleFields.length} / ${xe} fields selected
            </div>
          `:n.nothing}
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):n.html`<div class="empty-msg">Field not found</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return n.html`
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
    `}};S.styles=[Z,n.css`
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
      overscroll-behavior: contain;
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
      color: var(--ap-foreground, #09090b);
      transition: background 150ms;
    }

    .option-item:hover:not(.disabled) {
      background: var(--ap-muted, #f4f4f5);
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
      background: var(--ap-primary, oklch(0.65 0.19 258));
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
      color: var(--ap-muted-foreground, #71717a);
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
      color: var(--ap-primary, oklch(0.65 0.19 258));
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
    }

    .field-item-pin.pinned {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .field-item.has-filter {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `];k([c.property({type:Array})],S.prototype,"fields",2);k([c.property({type:Object})],S.prototype,"appliedFilters",2);k([c.property({type:Array})],S.prototype,"visibleFields",2);k([c.property()],S.prototype,"mode",2);k([c.property()],S.prototype,"activeFieldKey",2);k([c.property({type:Array})],S.prototype,"pinnedFields",2);k([c.property({type:Object})],S.prototype,"appliedMetadata",2);k([c.state()],S.prototype,"_showFieldSelection",2);k([c.state()],S.prototype,"_fieldSearch",2);k([c.state()],S.prototype,"_collapsedFields",2);k([c.state()],S.prototype,"_tagInputs",2);k([c.state()],S.prototype,"_datePresets",2);k([c.state()],S.prototype,"_dateFroms",2);k([c.state()],S.prototype,"_dateTos",2);k([c.state()],S.prototype,"_specificModeFields",2);k([c.state()],S.prototype,"_selectSearches",2);S=k([c.customElement("ap-filter-metadata")],S);var Aa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,U=(t,e,s,i)=>{for(var a=i>1?void 0:i?Oa(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Aa(e,s,a),a};let R=class extends n.LitElement{constructor(){super(...arguments),this.selectedStatus=[],this.statusOperator=":=",this.approverValue="",this.approverOperator="~",this.requesterValue="",this.requesterOperator="~",this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo=""}get _hasAnySelection(){return this.selectedStatus.length>0||!!this.approverValue||!!this.requesterValue||!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo}get _statusHasEmptyValue(){return this.selectedStatus.includes(z)||this.selectedStatus.includes(N)}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===z||t===N)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(I.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(I.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(I.STATUS,[],this.statusOperator)}_handleApproverInput(t){const e=t.target.value;this._emitChange(I.APPROVER,e?[e]:[],this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(I.APPROVER,this.approverValue?[this.approverValue]:[],e)}_clearApprover(){this._emitChange(I.APPROVER,[],this.approverOperator)}_handleRequesterInput(t){const e=t.target.value;this._emitChange(I.REQUESTOR,e?[e]:[],this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(I.REQUESTOR,this.requesterValue?[this.requesterValue]:[],e)}_clearRequester(){this._emitChange(I.REQUESTOR,[],this.requesterOperator)}_handleDueDatePreset(t){const e=t.detail.value,s=this.dueDatePreset===e?"":e;this._emitChange(I.DUE_DATE,s?[s]:[],":")}_handleDueDateFrom(t){const e=t.target.value;this._emitDateChange(e,this.dueDateTo)}_handleDueDateTo(t){const e=t.target.value;this._emitDateChange(this.dueDateFrom,e)}_clearDueDate(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:I.DUE_DATE,values:[],operator:":"},bubbles:!0,composed:!0}))}_emitDateChange(t,e){const s=[];t&&s.push(t),e&&s.push(e),this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:I.DUE_DATE,values:s,operator:t&&e?"..":t?">=":"<="},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_renderStatusSection(){const t=this.selectedStatus.length>0;return n.html`
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
          .options=${As}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${de.map(e=>n.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${e.label}</ap-checkbox>
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${Os.map(e=>n.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${e.label}</ap-checkbox>
            `)}
        </div>
      </div>
    `}_renderApproverSection(){const t=!!this.approverValue;return n.html`
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
          .options=${Pt}
          .value=${this.approverOperator}
          @ap-change=${this._handleApproverOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter approver name..."
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>
    `}_renderRequesterSection(){const t=!!this.requesterValue;return n.html`
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
          .options=${Pt}
          .value=${this.requesterOperator}
          @ap-change=${this._handleRequesterOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter requester name..."
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>
    `}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return n.html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearDueDate}
        >Clear all</button>

        <span class="section-label">Due date</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          .options=${de}
          .value=${this.dueDatePreset===z||this.dueDatePreset===N?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          columns="2"
          .options=${ks}
          .value=${this.dueDatePreset!==z&&this.dueDatePreset!==N?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?n.html`
            <div class="grid-2 mt-12">
              ${this.dueDatePreset!=="before"?n.html`
                  <div class="date-input-col">
                    <span class="input-label">Start date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateFrom}
                      @change=${this._handleDueDateFrom}
                    />
                  </div>
                `:n.nothing}
              ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?n.html`
                  <div class="date-input-col">
                    <span class="input-label">End date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateTo}
                      @change=${this._handleDueDateTo}
                    />
                  </div>
                `:n.nothing}
            </div>
          `:n.nothing}
      </div>
    `}render(){return n.html`
      <div class="filter-content">
        ${this._renderStatusSection()}
        <div class="separator"></div>
        ${this._renderApproverSection()}
        <div class="separator"></div>
        ${this._renderRequesterSection()}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};R.styles=[Z,n.css`
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
      box-sizing: border-box;
    }
    .condition-label {
      font-weight: 500;
      margin-bottom: 6px;
    }
    .mt-12 {
      margin-top: 12px;
    }
  `];U([c.property({type:Array})],R.prototype,"selectedStatus",2);U([c.property()],R.prototype,"statusOperator",2);U([c.property()],R.prototype,"approverValue",2);U([c.property()],R.prototype,"approverOperator",2);U([c.property()],R.prototype,"requesterValue",2);U([c.property()],R.prototype,"requesterOperator",2);U([c.property()],R.prototype,"dueDatePreset",2);U([c.property()],R.prototype,"dueDateFrom",2);U([c.property()],R.prototype,"dueDateTo",2);R=U([c.customElement("ap-filter-approval")],R);var Pa=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,F=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ma(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Pa(e,s,a),a};let E=class extends n.LitElement{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=ft,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.metadataFields=[],this.pinnedFilters=[],this._showDropdown=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(!(this._externalTrigger&&e.find(i=>i instanceof HTMLElement&&i.tagName==="AP-FILTERS-BAR"))){if(!e.includes(this)){this._closeAllDropdowns();return}if(this._openFilter){const s=this.renderRoot.querySelector(".popover-anchor");s&&!e.includes(s)&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null)}}}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.getBoundingClientRect(),i=window.innerWidth;if(s.right>i-8){const a=s.right-i+8;e.style.left=`${Math.max(8,this._externalLeft-a)}px`}}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,(t=this._sortDropdown)==null||t.close()}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null}openFilterPanel(t,e=!1,s){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}this._showDropdown=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null}_handleSortOpen(){this._showDropdown=!1,this._openFilter=null,this._openMetadataField=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${He[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Ot.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var s,i,a,r;const e=this.filters.applied;switch(t){case"type":{const o=e.type;return n.html`<ap-filter-type
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const o=e.tags;return n.html`<ap-filter-tags
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const o=e.labels;return n.html`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const o=e.color,d=(((s=o==null?void 0:o.values)==null?void 0:s[0])||"").split(" ");return n.html`<ap-filter-color
          .selected=${d[0]||""}
          .tolerance=${d[1]||"1"}
          .coverage=${d[3]||"20"}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const o=e.date;return n.html`<ap-filter-date
          .filterKey=${"date"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const o=e.asset_expiration;return n.html`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const o=e.size,l=((i=o==null?void 0:o.values)==null?void 0:i[0])||"",[d,p]=l.split(".."),u=d?parseFloat(d)/1e6:0,f=p?parseFloat(p)/1e6:0;return n.html`<ap-filter-size
          .min=${u}
          .max=${f}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const o=e.image,l=o&&"resolution"in o?o:null;return n.html`<ap-filter-image
          .selectedResolution=${(l==null?void 0:l.resolution)||[]}
          .selectedOrientation=${(l==null?void 0:l.orientation)||[]}
          .selectedFaces=${(l==null?void 0:l.faces)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const o=e.approval_status,l=e.task_approver,d=e.task_requester,p=e.task_duedate;return n.html`<ap-filter-approval
          .selectedStatus=${(o==null?void 0:o.values)||[]}
          .statusOperator=${(o==null?void 0:o.operator)||":"}
          .approverValue=${((a=l==null?void 0:l.values)==null?void 0:a[0])||""}
          .approverOperator=${(l==null?void 0:l.operator)||":"}
          .requesterValue=${((r=d==null?void 0:d.values)==null?void 0:r[0])||""}
          .requesterOperator=${(d==null?void 0:d.operator)||":"}
          .dueDatePreset=${(p==null?void 0:p.preset)||""}
          .dueDateFrom=${(p==null?void 0:p.from)||""}
          .dueDateTo=${(p==null?void 0:p.to)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?n.html`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>`:n.html`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const o=e.product_ref;return n.html`<ap-filter-tags
          .selected=${(o==null?void 0:o.values)||[]}
          .filterKey=${"product_ref"}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}default:return n.nothing}}_renderFilterButton(t){const e=t.key==="metadata",s=e?Object.keys(this.filters.metadata.applied).length>0:this._isFilterActive(t.key),i=this.pinnedFilters.includes(t.key);return n.html`
      <button
        class="filter-btn ${s?"active":""}"
        @click=${()=>this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${t.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${t.label}
        </span>
        ${e?n.html`<span class="submenu-chevron"><ap-icon name="chevron-right" .size=${14}></ap-icon></span>`:n.html`
              <span
                class="pin-btn ${i?"pinned":""}"
                title=${i?"Unpin filter":"Pin filter"}
                @click=${a=>this._togglePin(t.key,a)}
              >
                <ap-icon name=${i?"pin-off":"pin"} .size=${14}></ap-icon>
              </span>
            `}
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
                ${Ot.map(e=>this._renderFilterButton(e))}
              </div>
            `:n.nothing}
          </div>
          <div class="divider"></div>
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
        </div>
      </div>
      ${this._openFilter?n.html`
        <div class="popover-anchor ${this._externalTrigger?"external":""}">
          ${this._externalTrigger?n.nothing:n.html`
            <div class="anchor-tab">
              ${this._openFilter==="metadata"&&this._openMetadataField?n.html`
                    <button class="anchor-back" @click=${e=>{e.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:n.html`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${ht[this._openFilter]||this._openFilter}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" style=${this._externalTrigger&&this._externalLeft!=null?`left: ${this._externalLeft}px`:""}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:n.nothing}
    `}};E.styles=n.css`
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
      overscroll-behavior: contain;
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
      color: var(--ap-muted-foreground, #71717a);
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
      color: var(--ap-primary, oklch(0.65 0.19 258));
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
    }
    .pin-btn.pinned {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .submenu-chevron {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, #71717a);
      margin-left: auto;
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
      border: 1px solid var(--ap-border, #e4e4e7);
      border-bottom: 1px solid var(--ap-card, #fff);
      border-radius: 8px 8px 0 0;
      background: var(--ap-card, #fff);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ap-primary, oklch(0.65 0.19 258));
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
      color: var(--ap-muted-foreground, #71717a);
      transition: color 150ms;
    }
    .anchor-close:hover {
      color: var(--ap-foreground, #09090b);
    }
    .anchor-back {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, #71717a);
      transition: color 150ms;
    }
    .anchor-back:hover {
      color: var(--ap-foreground, #09090b);
    }
    .popover-panel {
      position: absolute;
      top: 100%;
      left: 20px;
      z-index: 50;
      min-width: 280px;
      max-width: 420px;
      max-height: 400px;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: 0 8px 8px 8px;
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 10px 8px;
    }
    .popover-anchor.external {
      padding: 0;
    }
    .popover-anchor.external .popover-panel {
      border-radius: 8px;
      top: 0;
    }
  `;F([c.property({type:Number})],E.prototype,"totalCount",2);F([c.property({type:Number})],E.prototype,"totalFolderCount",2);F([c.property({type:Boolean})],E.prototype,"isLoading",2);F([c.property()],E.prototype,"sortBy",2);F([c.property()],E.prototype,"sortDirection",2);F([c.property({type:Array})],E.prototype,"sortOptions",2);F([c.property({type:Object})],E.prototype,"filters",2);F([c.property({type:Array})],E.prototype,"labels",2);F([c.property({type:Array})],E.prototype,"metadataFields",2);F([c.property({type:Array})],E.prototype,"pinnedFilters",2);F([c.query("ap-dropdown")],E.prototype,"_sortDropdown",2);F([c.state()],E.prototype,"_showDropdown",2);F([c.state()],E.prototype,"_openFilter",2);F([c.state()],E.prototype,"_openMetadataField",2);F([c.state()],E.prototype,"_externalTrigger",2);F([c.state()],E.prototype,"_externalLeft",2);E=F([c.customElement("ap-content-toolbar")],E);var Da=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ia(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Da(e,s,a),a};let B=class extends n.LitElement{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.activeFilter=null,this.activeMetadataField=null}_mapTypeLabel(t){var e;return((e=Bt.find(s=>s.value===t))==null?void 0:e.label)||t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),a=s?parseFloat(s):null,r=i?parseFloat(i):null,o=l=>l>=1e3?`${(l/1e3).toFixed(l%1e3===0?0:1)} GB`:`${l} MB`;return a!==null&&r!==null?`${o(a)} – ${o(r)}`:a!==null?`> ${o(a)}`:r!==null?`< ${o(r)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===g.SIZE)return this._getSizeSummary(s);const i=e===g.TYPE?a=>this._mapTypeLabel(a):a=>a;return s.values.length===1?i(s.values[0]):`${i(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDateSummary(t){var o,l;const e=((o=Ut.find(d=>d.value===t.field))==null?void 0:o.label)||t.field,s=[...ut,...qt],i=t.preset?((l=s.find(d=>d.value===t.preset))==null?void 0:l.label)||t.preset:"",a=d=>{try{return d.split("T")[0]}catch{return d}};let r="";switch(t.kind){case"preset":r=i;break;case"before":r=t.to?`Before ${a(t.to)}`:i;break;case"after":r=t.from?`After ${a(t.from)}`:i;break;case"between":t.from&&t.to?r=`${a(t.from)} – ${a(t.to)}`:t.from?r=`After ${a(t.from)}`:t.to&&(r=`Before ${a(t.to)}`);break;case"specific":r=t.from?a(t.from):"";break;default:r=i}return r?`${e}: ${r}`:""}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_stripMetadataPrefix(t){for(const e of zt)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}render(){const t=Object.entries(this.appliedFilters),e=Object.entries(this.appliedMetadata),s=this.pinnedFilters.filter(r=>!(r in this.appliedFilters)),i=this.pinnedMetadataFields.filter(r=>!(r in this.appliedMetadata));return t.length+e.length+s.length+i.length===0?n.nothing:n.html`
      <div class="chips-row">
        <div class="chips">
          ${s.map(r=>n.html`
            <span class="chip pinned-empty ${r===this.activeFilter?"active":""}" @click=${o=>this._openFilter(r,o)}>
              <span class="chip-label">${ht[r]||r}</span>
            </span>
          `)}
          ${i.map(r=>{const o=this._getMetadataLabel(r);return n.html`
              <span class="chip pinned-empty ${r===this.activeMetadataField?"active":""}" @click=${l=>this._openMetadataFilter(r,l)}>
                <span class="chip-label">${o}</span>
              </span>
            `})}
          ${t.map(([r,o])=>{const l=this._getFilterSummary(o,r),d=o.type==="date";return n.html`
              <span class="chip ${r===this.activeFilter?"active":""}" @click=${p=>this._openFilter(r,p)}>
                ${(d||r===g.TYPE||r===g.SIZE)&&l?n.html`<span class="chip-label">${l}</span>`:n.html`
                      <span class="chip-label">${ht[r]||r}</span>
                      ${l?n.html`<span class="chip-summary">${l}</span>`:n.nothing}
                    `}
                <button class="chip-remove" @click=${p=>{p.stopPropagation(),this._removeFilter(r)}} title="Remove filter">
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              </span>
            `})}
          ${e.map(([r,o])=>{const l=this._getFilterSummary(o),d=this._getMetadataLabel(r);return n.html`
              <span class="chip ${r===this.activeMetadataField?"active":""}" @click=${p=>this._openMetadataFilter(r,p)}>
                <span class="chip-label">${d}</span>
                ${l?n.html`<span class="chip-summary">${l}</span>`:n.nothing}
                <button class="chip-remove" @click=${p=>{p.stopPropagation(),this._removeMetadataFilter(r)}} title="Remove filter">
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              </span>
            `})}
        </div>
        ${t.length+e.length>1?n.html`<button class="clear-all" @click=${this._clearAll}>Clear all</button>`:n.nothing}
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
    .chip.active {
      background: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.2));
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
    .chip.pinned-empty {
      border-style: dashed;
      background: transparent;
      color: var(--ap-muted-foreground, #71717a);
      border-color: var(--ap-border, #e4e4e7);
    }
    .chip.pinned-empty:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
      border-color: var(--ap-muted-foreground, #a1a1aa);
    }
    .chip.pinned-empty.active {
      border-style: solid;
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      color: var(--ap-primary, oklch(0.65 0.19 258));
      border-color: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
    }
  `;J([c.property({type:Object})],B.prototype,"appliedFilters",2);J([c.property({type:Object})],B.prototype,"appliedMetadata",2);J([c.property({type:Array})],B.prototype,"metadataFields",2);J([c.property({type:Array})],B.prototype,"pinnedFilters",2);J([c.property({type:Array})],B.prototype,"pinnedMetadataFields",2);J([c.property()],B.prototype,"activeFilter",2);J([c.property()],B.prototype,"activeMetadataField",2);B=J([c.customElement("ap-filters-bar")],B);var La=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ra(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&La(e,s,a),a};const za=6;let X=class extends n.LitElement{constructor(){super(...arguments),this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.isLoading=!1,this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){return n.html`
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
                @asset-select=${i=>this.dispatchEvent(new CustomEvent("asset-select",{detail:i.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${i=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:i.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${i=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:i.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:za},()=>n.html`<div class="ghost-card"></div>`):n.nothing}
      </div>
    `}};X.styles=n.css`
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
  `;me([c.property({type:Array})],X.prototype,"assets",2);me([c.property({type:Array})],X.prototype,"folders",2);me([c.property({type:Object})],X.prototype,"folderPreviews",2);me([c.property({type:Array})],X.prototype,"selectedIds",2);me([c.property({type:Boolean})],X.prototype,"isLoading",2);X=me([c.customElement("ap-grid-view")],X);var Na=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Ae=(t,e,s,i)=>{for(var a=i>1?void 0:i?ja(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Na(e,s,a),a};const Va=5;let re=class extends n.LitElement{constructor(){super(...arguments),this.assets=[],this.folders=[],this.selectedIds=[],this.isLoading=!1}render(){return n.html`
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
        ${this.isLoading?Array.from({length:Va},()=>n.html`<div class="ghost-row"></div>`):n.nothing}
      </div>
    `}};re.styles=n.css`
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
  `;Ae([c.property({type:Array})],re.prototype,"assets",2);Ae([c.property({type:Array})],re.prototype,"folders",2);Ae([c.property({type:Array})],re.prototype,"selectedIds",2);Ae([c.property({type:Boolean})],re.prototype,"isLoading",2);re=Ae([c.customElement("ap-list-view")],re);function Ee(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return Ce(s)}function mt(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?Ce(s):""}function Ze(t){var s,i;let e=Ce(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Qt(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):""}function Qt(t,e){try{const s=new URL(t);for(const[i,a]of Object.entries(e))s.searchParams.set(i,a);return s.toString()}catch{return t}}const Rt=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function Ce(t,e){if(!t)return"";if(t.includes("assets.filerobot.com"))return t;const s=t.match(Rt);if(s){const i=s[2];return t.replace(Rt,`$1assets.filerobot.com/${i}/`)}if(e)try{const i=new URL(t);return`https://assets.filerobot.com/${e}${i.pathname}${i.search}`}catch{}return t}function bt(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function Re(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Ba(t,e){return!t||!e?"":`${t} x ${e}`}const Ua=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif"]),qa=new Set([...Ua,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function ie(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function _t(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return qa.has(e)}const Zt="https://assets.filerobot.com/scaleflex/assets/file-types/v2/",Ka={png:"PNG",jpg:"JPG",jpeg:"JPG",gif:"GIF",bmp:"BMP",webp:"WEBP",svg:"SVG",tiff:"TIFF",tif:"TIFF",heic:"HEIC",avif:"AVIF",ico:"ICO",pdf:"PDF",doc:"DOC",docx:"DOCX",txt:"TXT",rtf:"RTF",xls:"XLS",xlsx:"XLSX",ppt:"PPT",pptx:"PPTX",csv:"CSV",odt:"ODT",ods:"ODS",odp:"ODP",mp4:"MP4",webm:"WEBM",mov:"MOV",avi:"AVI",mkv:"MKV",mpeg:"MPEG",mp3:"MP3",wav:"WAV",aac:"AAC",flac:"FLAC",ogg:"OGG",wma:"WMA",zip:"ZIP",rar:"RAR","7z":"7Z",tar:"TAR",gz:"GZ",ttf:"TTF",otf:"OTF",woff:"WOFF",woff2:"WOFF2",eot:"EOT",psd:"PSD",ai:"AI",dwg:"DWG",js:"JS",ts:"TS",css:"CSS",html:"HTML",json:"JSON",xml:"XML",php:"PHP",sh:"SH",exe:"EXE",iso:"ISO",bin:"BIN"};function Oe(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"",s=Ka[e];return`${Zt}${s||"DEFAULT"}.png`}function oe(){return`${Zt}DEFAULT.png`}function pt(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Ga=new Set(["png","svg","webp","gif","avif"]);function Je(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Ga.has(e)}var Ha=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,et=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ya(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ha(e,s,a),a};let fe=class extends n.LitElement{constructor(){super(...arguments),this.index=0,this.selected=!1}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,p,u;const t=this.asset;if(!t)return n.html``;const s=ie(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=_t(t.extension||"");let r="";s?r=mt(t):i?r=Ze(t):a&&(r=Ee(t));const o=Oe(t.extension||""),l=Je(t.extension||"");return n.html`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${l&&r?"chess":""}">
          ${r?n.html`<img
                src=${r}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${l?"transparent-asset":""}"
                @error=${f=>{const h=f.target,v=oe();h.src!==o&&h.src!==v?(h.src=o,h.classList.add("icon-fallback")):h.src!==v&&(h.src=v)}}
              />`:n.html`<img
                src=${o}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${f=>{const h=f.target,v=oe();h.src!==v&&(h.src=v)}}
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
          <div class="meta">${(p=t.extension)==null?void 0:p.toUpperCase()} · ${bt(((u=t.size)==null?void 0:u.bytes)||0)}</div>
        </div>
      </div>
    `}};fe.styles=n.css`
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
  `;et([c.property({type:Object})],fe.prototype,"asset",2);et([c.property({type:Number})],fe.prototype,"index",2);et([c.property({type:Boolean,reflect:!0})],fe.prototype,"selected",2);fe=et([c.customElement("ap-asset-card")],fe);var Xa=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,tt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Wa(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Xa(e,s,a),a};let ve=class extends n.LitElement{constructor(){super(...arguments),this.index=0,this.selected=!1}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,p,u;const t=this.asset;if(!t)return n.html``;const s=ie(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=_t(t.extension||"");let r="";s?r=mt(t):i?r=Ze(t):a&&(r=Ee(t));const o=Oe(t.extension||""),l=Je(t.extension||"");return n.html`
      <div class="row" @click=${this._handleSelect}>
        <div class="check">
          <div class="check-box">
            <svg class="check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 12.75l6 6 9-13.5"></path>
            </svg>
          </div>
        </div>
        <div class="thumb ${l&&r?"chess":""}">
          ${r?n.html`<img
                src=${r}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${f=>{const h=f.target,v=oe();h.src!==o&&h.src!==v?(h.src=o,h.classList.add("icon-fallback")):h.src!==v&&(h.src=v)}}
              />`:n.html`<img
                src=${o}
                alt=${t.name}
                class="icon-fallback"
                @error=${f=>{const h=f.target,v=oe();h.src!==v&&(h.src=v)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(p=t.extension)==null?void 0:p.toUpperCase()}</div>
        <div class="desc">${bt(((u=t.size)==null?void 0:u.bytes)||0)}</div>
        <div class="date">${Re(t.created_at||"")}</div>
        <div class="actions">
          <button class="icon-btn" @click=${this._handlePreview} aria-label="Preview">
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};ve.styles=n.css`
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
  `;tt([c.property({type:Object})],ve.prototype,"asset",2);tt([c.property({type:Number})],ve.prototype,"index",2);tt([c.property({type:Boolean,reflect:!0})],ve.prototype,"selected",2);ve=tt([c.customElement("ap-asset-row")],ve);var Qa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,yt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Za(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Qa(e,s,a),a};let ke=class extends n.LitElement{constructor(){super(...arguments),this.previews=[]}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_isAlternativeDisplay(t){const e=pt(t).toLowerCase();return["svg","svg+xml","png"].includes(e)}_getPreviewUrl(t){const e=ie(t.file_type),s=t.file_uri_cdn;if(!s)return"";if(e==="video")try{const i=new URL(s);return i.searchParams.set("w","200"),i.searchParams.set("force_format","webp,jpeg"),i.toString()}catch{return s}if(t.file_type==="application/pdf"||pt(t.file_type).toLowerCase()==="pdf")try{let i=s.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,"");const a=new URL(i);return a.searchParams.set("w","200"),a.searchParams.set("force_format","webp,jpeg"),a.searchParams.set("doc_page","1"),a.searchParams.set("bypass_process_proxy","1"),a.toString()}catch{return s}return s}_renderPreviewImg(t){const e=this._isAlternativeDisplay(t.file_type),s=this._getPreviewUrl(t),i=Oe(pt(t.file_type)),a=oe();return n.html`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${r=>{const o=r.target,l=o.parentElement;o.src!==i&&o.src!==a?(o.src=i,o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg")):o.src!==a&&(o.src=a,o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
        @load=${r=>{const o=r.target,l=o.parentElement;o.src.includes("scaleflex/assets/file-types")&&(o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return n.html`<div class="empty-preview"><ap-icon name="folder" .size=${48}></ap-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?n.html`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:n.html`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?n.html`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:n.nothing}
        </div>
      </div>
    `}render(){var a,r;const t=this.folder;if(!t)return n.html``;const e=((a=t.count)==null?void 0:a.files_direct)??0,i=(((r=t.count)==null?void 0:r.files_recursive)??0)-e;return n.html`
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
          ${i>0?n.html`<span>${i} sub-asset${i!==1?"s":""}</span>`:n.nothing}
        </div>
      </div>
    `}};ke.styles=n.css`
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
  `;yt([c.property({type:Object})],ke.prototype,"folder",2);yt([c.property({type:Array})],ke.prototype,"previews",2);ke=yt([c.customElement("ap-folder-card")],ke);var Ja=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,Jt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ei(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ja(e,s,a),a};let ze=class extends n.LitElement{_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?n.html`
      <div class="row" @click=${this._handleOpen}>
        <div class="icon"><ap-icon name="folder" .size=${22}></ap-icon></div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        <div class="meta">${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items</div>
        <div class="meta">${Re(t.modified_at||t.updated_at||"")}</div>
        <div></div>
      </div>
    `:n.html``}};ze.styles=n.css`
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
  `;Jt([c.property({type:Object})],ze.prototype,"folder",2);ze=Jt([c.customElement("ap-folder-row")],ze);var ti=Object.defineProperty,si=Object.getOwnPropertyDescriptor,es=(t,e,s,i)=>{for(var a=i>1?void 0:i?si(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ti(e,s,a),a};let Ne=class extends n.LitElement{constructor(){super(...arguments),this.variant="grid"}render(){return this.variant==="grid"?n.html`
        <div class="grid-skeleton">
          ${Array.from({length:18},()=>n.html`<div class="skeleton card-skel"></div>`)}
        </div>
      `:n.html`
      ${Array.from({length:7},()=>n.html`<div class="skeleton row-skel"></div>`)}
    `}};Ne.styles=n.css`
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
  `;es([c.property()],Ne.prototype,"variant",2);Ne=es([c.customElement("ap-skeleton")],Ne);function ai(t){var a,r;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(r=e[0])==null?void 0:r.playlists;return s!=null&&s.length&&s[0]||null}var ii=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,M=(t,e,s,i)=>{for(var a=i>1?void 0:i?ri(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ii(e,s,a),a};let T=class extends n.LitElement{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.regionalFilters={},this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),this._destroyHls()}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=ie(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,a;const e=ai(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:r}=await Promise.resolve().then(()=>require("./hls.light-C3NKRmfw.cjs"));if(!r.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const o=new r;this._hls=o,o.loadSource(e),o.attachMedia(s),o.on(r.Events.ERROR,(l,d)=>{var p;d.fatal&&(this._destroyHls(),s.src=((p=t.url)==null?void 0:p.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_fullscreen(){var e,s,i,a,r,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(i=this.asset)==null?void 0:i.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(r=this.previewArea)==null?void 0:r.requestFullscreen)==null||o.call(r)}_select(){if(this.asset){const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=ie(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var i;const e=(i=t.url)==null?void 0:i.cdn;if(!e)return Ee(t)||"";const s=Ce(e,this.containerToken);return Qt(s,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"})}_getBlurDimensions(t){var o,l;const e=(o=t.info)==null?void 0:o.img_w,s=(l=t.info)==null?void 0:l.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,a=window.innerHeight,r=Math.min(i/e,a/s,1);return{width:`${Math.round(e*r)}px`,height:`${Math.round(s*r)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagLabels(t){return t?Array.isArray(t)?t:Object.values(t).map(e=>e.label):[]}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderAccordion(t,e,s){if(s.length===0)return n.nothing;const i=this._openSections.has(t);return n.html`
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
          ${s.map(a=>n.html`
            <div class="meta-row">
              <span class="meta-label" title=${a.label}>${a.label}</span>
              <span class="meta-value ${a.wrap?"wrap":""}" title=${a.value}>${a.value}</span>
            </div>
          `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,a,r,o;const e=[];return e.push({label:"File name",value:t.name}),t.extension&&e.push({label:"Type",value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:"Size",value:bt(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:"Dimensions",value:Ba(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:"Video resolution",value:`${t.info.video_w} x ${t.info.video_h}`}),(r=t.info)!=null&&r.duration&&e.push({label:"Duration",value:`${Math.round(t.info.duration)}s`}),(o=t.info)!=null&&o.color_space&&e.push({label:"Color space",value:t.info.color_space}),t.created_at&&e.push({label:"Created",value:Re(t.created_at)}),t.modified_at&&e.push({label:"Modified",value:Re(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const a=t[i];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var r,o,l,d;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const p=t;for(const u of this.metadataFields){const f=p[u.key]??((o=(r=t.info)==null?void 0:r.metadata)==null?void 0:o[u.key])??((l=t.meta)==null?void 0:l[u.key]),h=this._resolveFieldValue(f,u);if(!h)continue;i.add(u.key),u.slug&&i.add(u.slug);const v=h.length>50;e.push({label:u.label,value:h,wrap:v})}}if(t.meta)for(const[p,u]of Object.entries(t.meta)){if(i.has(p)||u==null||u==="")continue;const f=s.get(p);if(f){const h=this._resolveFieldValue(u,f);if(!h)continue;i.add(p);const v=h.length>50;e.push({label:f.label,value:h,wrap:v})}else{const h=typeof u=="object"?JSON.stringify(u):String(u);if(!h||h==="{}"||h==="[]")continue;i.add(p);const v=p.charAt(0).toUpperCase()+p.slice(1).replace(/_/g," "),y=h.length>50;e.push({label:v,value:h,wrap:y})}}const a=(d=t.info)==null?void 0:d.metadata;if(a&&typeof a=="object")for(const[p,u]of Object.entries(a)){if(i.has(p)||u==null||u==="")continue;const f=s.get(p);if(f){const h=this._resolveFieldValue(u,f);if(!h)continue;i.add(p);const v=h.length>50;e.push({label:f.label,value:h,wrap:v})}else{const h=typeof u=="object"?JSON.stringify(u):String(u);if(!h||h==="{}"||h==="[]")continue;i.add(p);const v=p.charAt(0).toUpperCase()+p.slice(1).replace(/_/g," "),y=h.length>50;e.push({label:v,value:h,wrap:y})}}return e}_renderTags(t){const e=this._getTagLabels(t.tags);if(e.length===0)return n.nothing;const s=this._openSections.has("tags");return n.html`
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
            ${e.map(i=>n.html`<ap-badge>${i}</ap-badge>`)}
          </div>
        </div>
      </div>
    `}render(){var $,w,P,Pe,j,St;const t=this.asset;if(!t)return n.nothing;const e=ie(t.type),s=e==="image",i=e==="video",a=e==="audio",r=(($=t.extension)==null?void 0:$.toLowerCase())==="pdf",o=Oe(t.extension||""),l=Je(t.extension||""),d=Ee(t),p=s?d||Ce(((w=t.url)==null?void 0:w.cdn)||"",this.containerToken):"",u=s?this._getFullscreenImageUrl(t):"",f=s?this._getBlurDimensions(t):null,h=i&&((P=t.url)==null?void 0:P.cdn)||"",v=i&&(((Pe=t.info)==null?void 0:Pe.video_thumbnail)||((j=t.info)==null?void 0:j.preview))||"",y=r&&!s?Ze(t):"",C=this._getCurrentIndex(),A=C>0&&this._findNavTarget(C,-1)>=0,D=C>=0&&this._findNavTarget(C,1)>=0,x=this.assets.length>1;return n.html`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!s&&!i&&!a&&!r} aria-label="Fullscreen">
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
          ${x?n.html`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!A} aria-label="Previous">
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!D} aria-label="Next">
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:n.nothing}
          ${this._previewLoading?n.html`<div class="preview-loading"><div class="spinner"></div></div>`:n.nothing}
          ${s?n.html`
            <img
              src=${p}
              alt=${t.name}
              @load=${_e=>{_e.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${_e=>{const ee=_e.target;this._previewLoading=!1,ee.src!==o&&(ee.src=o,ee.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              <img
                class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                src=${p}
                alt=""
                style="width:${f.width};height:${f.height}"
              />
              <img
                class="fs-full ${this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?u:""}
                alt=${t.name}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:n.nothing}
          ${i?n.html`<video src=${h} poster=${v||n.nothing} controls @loadeddata=${()=>{this._previewLoading=!1}} @error=${()=>{this._previewLoading=!1}}></video>`:n.nothing}
          ${a?n.html`<audio src=${((St=t.url)==null?void 0:St.cdn)||""} controls></audio>`:n.nothing}
          ${r&&!s?n.html`
            <img
              src=${y||o}
              alt=${t.name}
              class=${y?"":"icon-fallback"}
              @error=${_e=>{const ee=_e.target;ee.src!==o&&(ee.src=o,ee.classList.add("icon-fallback"))}}
            />
          `:n.nothing}
          ${!s&&!i&&!a&&!r?n.html`<img src=${o} alt=${t.name} class="icon-fallback" />`:n.nothing}
        </div>

        ${this._renderAccordion("file-info","File info",this._getFileInfoRows(t))}
        ${this._renderTags(t)}
        ${this.showMetadata?n.html`
          ${this._renderAccordion("metadata","Metadata",this._getAllMetadataRows(t))}
        `:n.nothing}
      </div>
    `}};T.styles=n.css`
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
      user-select: none;
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
      background: var(--ap-muted, #f4f4f5);
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--ap-border, #e4e4e7);
      border-top-color: var(--ap-primary, #3b82f6);
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
      user-select: text;
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
  `;M([c.property({type:Object})],T.prototype,"asset",2);M([c.property({type:Array})],T.prototype,"assets",2);M([c.property({type:Array})],T.prototype,"selectedIds",2);M([c.property()],T.prototype,"containerToken",2);M([c.property({type:Boolean})],T.prototype,"showMetadata",2);M([c.property({type:Array})],T.prototype,"metadataFields",2);M([c.property({type:Object})],T.prototype,"regionalFilters",2);M([c.query(".preview-area")],T.prototype,"previewArea",2);M([c.query("video")],T.prototype,"_videoEl",2);M([c.state()],T.prototype,"_isFullscreen",2);M([c.state()],T.prototype,"_fsImageLoaded",2);M([c.state()],T.prototype,"_previewLoading",2);M([c.state()],T.prototype,"_openSections",2);T=M([c.customElement("ap-preview-panel")],T);var oi=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ts=(t,e,s,i)=>{for(var a=i>1?void 0:i?ni(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&oi(e,s,a),a};let je=class extends n.LitElement{constructor(){super(...arguments),this.selectedAssets=[]}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_deselect(t){this.dispatchEvent(new CustomEvent("selection-deselect",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.selectedAssets.length===0?n.nothing:n.html`
      <div class="bar">
        <span class="count">${this.selectedAssets.length} asset${this.selectedAssets.length>1?"s":""} selected</span>
        <div class="thumbnails">
          ${this.selectedAssets.map(t=>{var d;const s=ie(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=_t(t.extension||"");let r="";s?r=mt(t):i?r=Ze(t):a&&(r=Ee(t));const o=Oe(t.extension||""),l=Je(t.extension||"");return n.html`
              <div class="thumb ${l&&r?"chess":""}" @click=${()=>this._deselect(t.uuid)} title="Click to deselect ${t.name}">
                ${r?n.html`<img
                      src=${r}
                      alt=${t.name}
                      @error=${p=>{const u=p.target,f=oe();u.src!==o&&u.src!==f?u.src=o:u.src!==f&&(u.src=f)}}
                    />`:n.html`<img
                      src=${o}
                      alt=${t.name}
                      style="object-fit: contain; padding: 6px;"
                      @error=${p=>{const u=p.target,f=oe();u.src!==f&&(u.src=f)}}
                    />`}
              </div>
            `})}
        </div>
        <div class="actions">
          <button class="btn btn-ghost" @click=${this._clear}>Clear</button>
          <button class="btn btn-primary" @click=${this._confirm}>Confirm</button>
        </div>
      </div>
    `}};je.styles=n.css`
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
  `;ts([c.property({type:Array})],je.prototype,"selectedAssets",2);je=ts([c.customElement("ap-selection-bar")],je);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,xt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ci(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&li(e,s,a),a};let Fe=class extends n.LitElement{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?n.nothing:n.html`
      <div
        class="marquee"
        style="left:${this.rect.x}px;top:${this.rect.y}px;width:${this.rect.width}px;height:${this.rect.height}px"
      ></div>
    `}};Fe.styles=n.css`
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
  `;xt([c.property({type:Boolean})],Fe.prototype,"active",2);xt([c.property({type:Object})],Fe.prototype,"rect",2);Fe=xt([c.customElement("ap-marquee-overlay")],Fe);var di=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,$t=(t,e,s,i)=>{for(var a=i>1?void 0:i?pi(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&di(e,s,a),a};const hi={search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5",close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],"calendar-days":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M3 10h18"}},{tag:"path",attrs:{d:"M8 14h.01"}},{tag:"path",attrs:{d:"M12 14h.01"}},{tag:"path",attrs:{d:"M16 14h.01"}},{tag:"path",attrs:{d:"M8 18h.01"}},{tag:"path",attrs:{d:"M12 18h.01"}},{tag:"path",attrs:{d:"M16 18h.01"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let Te=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=hi[this.name];if(!t)return n.nothing;const e=typeof t=="string"?n.svg`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:a}=s;return i==="circle"?n.svg`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:i==="rect"?n.svg`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:n.svg`<path d=${a.d}></path>`});return n.html`
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
    `}};Te.styles=[n.css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];$t([c.property()],Te.prototype,"name",2);$t([c.property({type:Number})],Te.prototype,"size",2);Te=$t([c.customElement("ap-icon")],Te);var ui=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,ss=(t,e,s,i)=>{for(var a=i>1?void 0:i?fi(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ui(e,s,a),a};let Ve=class extends n.LitElement{constructor(){super(...arguments),this.size=24}render(){return n.html`<div class="spinner" style="width:${this.size}px;height:${this.size}px"></div>`}};Ve.styles=[n.css`
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
    `];ss([c.property({type:Number})],Ve.prototype,"size",2);Ve=ss([c.customElement("ap-spinner")],Ve);var vi=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,as=(t,e,s,i)=>{for(var a=i>1?void 0:i?gi(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&vi(e,s,a),a};let Be=class extends n.LitElement{constructor(){super(...arguments),this.checked=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}render(){return n.html`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.5 12.75l6 6 9-13.5"></path>
        </svg>
      </div>
      <span class="label"><slot></slot></span>
    `}};Be.styles=[n.css`
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
    `];as([c.property({type:Boolean,reflect:!0})],Be.prototype,"checked",2);Be=as([c.customElement("ap-checkbox")],Be);var mi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,is=(t,e,s,i)=>{for(var a=i>1?void 0:i?bi(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&mi(e,s,a),a};let Ue=class extends n.LitElement{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return n.html`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};Ue.styles=[n.css`
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
    `];is([c.state()],Ue.prototype,"open",2);Ue=is([c.customElement("ap-popover")],Ue);var _i=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,L=(t,e,s,i)=>{for(var a=i>1?void 0:i?yi(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&_i(e,s,a),a};let O=class extends n.LitElement{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="ap-dropdown-menu";return n.html`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?n.html`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:n.nothing}
        ${this.label}${t?`${this.label?": ":""}${t.label}`:""}
        <ap-icon name="chevron-down" .size=${14}></ap-icon>
      </button>
      ${this._open?n.html`
        <div
          id=${e}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          style="
            ${this._menuPosition==="below"?`top: ${this._menuTop}px`:`bottom: ${this._menuBottom}px`};
            ${this._menuAlign==="align-left"?`left: ${this._menuLeft}px`:`right: ${this._menuRight}px`};
          "
          role="listbox"
          @keydown=${this._handleMenuKeydown}
        >
          ${this.options.map((s,i)=>n.html`
              <button
                class="option ${i===this._focusedIndex?"focused":""}"
                role="option"
                aria-selected=${s.value===this.value}
                @click=${()=>this._select(s.value)}
                @mouseenter=${()=>{this._focusedIndex=i}}
              >
                ${s.icon?n.html`<ap-icon name=${s.icon} .size=${16}></ap-icon>`:n.nothing}
                ${s.label}
              </button>
            `)}
        </div>
      `:n.nothing}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect(),e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const a=window.innerWidth-t.left;this._menuAlign=a<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,a;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(a=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};O.styles=[n.css`
      :host {
        position: relative;
        display: inline-block;
      }
      .trigger {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 36px;
        padding: 0 12px;
        border: 1px solid var(--ap-border, #e4e4e7);
        border-radius: var(--ap-radius-sm, 6px);
        background: var(--ap-background, #fff);
        color: var(--ap-foreground, #09090b);
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
        box-sizing: border-box;
      }
      .trigger:hover {
        background: var(--ap-muted, #f4f4f5);
      }
      :host([variant="borderless"]) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant="borderless"]) .trigger:hover {
        background: var(--ap-muted, #f4f4f5);
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--ap-card, #fff);
        border: 1px solid var(--ap-border, #e4e4e7);
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
        gap: 6px;
        width: 100%;
        padding: 6px 12px;
        border: none;
        background: none;
        color: var(--ap-foreground, #09090b);
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover, .option.focused {
        background: var(--ap-muted, #f4f4f5);
      }
      .option[aria-selected="true"] {
        background: var(--ap-selection-bg, oklch(0.65 0.19 258 / 0.08));
        color: var(--ap-primary, oklch(0.65 0.19 258));
      }
    `];L([c.property()],O.prototype,"value",2);L([c.property()],O.prototype,"label",2);L([c.property({reflect:!0})],O.prototype,"variant",2);L([c.property({type:Array})],O.prototype,"options",2);L([c.state()],O.prototype,"_open",2);L([c.state()],O.prototype,"_focusedIndex",2);L([c.state()],O.prototype,"_menuPosition",2);L([c.state()],O.prototype,"_menuAlign",2);L([c.state()],O.prototype,"_menuTop",2);L([c.state()],O.prototype,"_menuBottom",2);L([c.state()],O.prototype,"_menuLeft",2);L([c.state()],O.prototype,"_menuRight",2);O=L([c.customElement("ap-dropdown")],O);var xi=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,rs=(t,e,s,i)=>{for(var a=i>1?void 0:i?$i(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&xi(e,s,a),a};let qe=class extends n.LitElement{constructor(){super(...arguments),this.variant="default"}render(){return n.html`<span class="badge"><slot></slot></span>`}};qe.styles=[n.css`
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
    `];rs([c.property({reflect:!0})],qe.prototype,"variant",2);qe=rs([c.customElement("ap-badge")],qe);var wi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,os=(t,e,s,i)=>{for(var a=i>1?void 0:i?Si(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&wi(e,s,a),a};let Ke=class extends n.LitElement{constructor(){super(...arguments),this.text=""}render(){return n.html`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};Ke.styles=[n.css`
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
    `];os([c.property()],Ke.prototype,"text",2);Ke=os([c.customElement("ap-tooltip")],Ke);var Ei=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,be=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ci(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ei(e,s,a),a};let W=class extends n.LitElement{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(a=>!this.disabled&&!a.disabled);if(e.length===0)return;const s=e.findIndex(a=>a.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return n.html`
      ${this.options.map(t=>n.html`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":n.nothing}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?n.html`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:n.nothing}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){this.disabled||t.disabled||this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t.value},bubbles:!0,composed:!0}))}};W.styles=[n.css`
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
        border: 2px solid var(--ap-border, #e4e4e7);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--ap-background, #fff);
        box-sizing: border-box;
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option[aria-checked="true"] .radio {
        border-color: var(--ap-primary, oklch(0.65 0.19 258));
      }
      .option[aria-checked="true"] .radio .dot {
        background: var(--ap-primary, oklch(0.65 0.19 258));
      }
      .label {
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, #09090b);
        font-family: inherit;
        user-select: none;
      }
    `];be([c.property()],W.prototype,"value",2);be([c.property({type:Array})],W.prototype,"options",2);be([c.property({type:Boolean})],W.prototype,"disabled",2);be([c.property({reflect:!0})],W.prototype,"direction",2);be([c.property({reflect:!0})],W.prototype,"columns",2);W=be([c.customElement("ap-radio-group")],W);var ki=Object.defineProperty,Fi=(t,e,s,i)=>{for(var a=void 0,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=o(e,s,a)||a);return a&&ki(e,s,a),a};const wt=class wt extends n.LitElement{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._loadDataTimer=null,this.store=ls(),this.storeCtrl=new cs(this,this.store),this.selectionCtrl=new ds(this,this.store),this.infiniteScrollCtrl=new ps(this,()=>this._loadMore()),this.marqueeCtrl=new hs(this,this.store)}connectedCallback(){super.connectedCallback()}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){this._initFailed=!1,this._initPromise=this._doInit(e).catch(()=>{this._initFailed=!0})}async _doInit(e){const s=Qs(),i=s.sortBy??e.defaultSortBy??"created_at",a=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.defaultViewMode??"grid",sortBy:i,sortDirection:a,currentFolder:e.rootFolderUuid??null}),this.apiClient=new us(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const u=await bs(this.apiClient);this.apiClient.setSassKey(u),this.store.setState({sassKey:u})}const[r,o]=await Promise.allSettled([Ds(this.apiClient),ms(this.apiClient)]);if(r.status==="fulfilled"){const{fields:u,regionalVariantGroups:f,regionalFilters:h,brandColor:v}=r.value;this.store.setState({metadataFields:u,regionalVariantGroups:f,regionalFilters:h,...v?{brandColor:v}:{}})}o.status==="fulfilled"&&this.store.setState({labels:o.value.labels||[]});const{pinnedFilters:l,pinnedMetadata:d}=Ys(e.auth.projectToken??null),p=this.store.getState().filters;this.store.setState({filters:{...p,pinned:l,visible:[...l],metadata:{...p.metadata,pinned:d,visible:[...d]}}})}catch(r){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r,context:"init"},bubbles:!0,composed:!0})),r}}async open(){var s;const e=this.store.getState();this.store.setState({isOpen:!0,activeTab:"assets",searchQuery:"",filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...e.filters.pinned],applied:{}},offset:0,assets:[],folders:[],currentFolder:((s=this.config)==null?void 0:s.rootFolderUuid)??null,currentFolderPath:"/",breadcrumb:[],selectedAssets:new Map,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0}),this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1})}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,a,r,o,l,d,p,u,f,h;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const v=s.activeTab;if(v==="assets"){const y=this._buildSearchNotation(),C=await st(this.apiClient,{folder:s.currentFolderPath||"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:y||void 0,recursive:1});if(e!==this._loadId)return;const A=((i=C.files)==null?void 0:i.length)??0,D=A>=s.limit,x=((r=(a=C.base)==null?void 0:a.count)==null?void 0:r.files_recursive)??((l=(o=C.base)==null?void 0:o.count)==null?void 0:l.files_direct)??0,$=D?x:A;this.store.setState({assets:C.files||[],folders:[],totalCount:$,totalFolderCount:0,offset:0,hasMore:D,isLoading:!1})}else if(v==="folders"){const y=this._buildSearchNotation(),[C,A]=await Promise.all([vs(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),st(this.apiClient,{folder:s.currentFolderPath||"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:y||void 0,recursive:0})]);if(e!==this._loadId)return;const D=C.folders||[];let x={};if(D.length>0)try{x=await gs(this.apiClient,D.map($=>$.uuid))}catch{}if(e!==this._loadId)return;this.store.setState({assets:A.files||[],folders:D,folderPreviews:x,totalCount:(((d=A.files)==null?void 0:d.length)??0)>=s.limit?((u=(p=A.base)==null?void 0:p.count)==null?void 0:u.files_direct)??0:((f=A.files)==null?void 0:f.length)??0,totalFolderCount:C.total??D.length,offset:0,hasMore:(((h=A.files)==null?void 0:h.length)??0)>=s.limit,isLoading:!1})}}catch(v){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:v,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient)return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const a=this._buildSearchNotation(),r=await st(this.apiClient,{folder:e.currentFolderPath||"/",offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:a||void 0,recursive:1});if(s!==this._loadMoreId)return;const o=this.store.getState().assets,l=r.files||[],d=l.length>=e.limit,p=[...o,...l];this.store.setState({assets:p,offset:i,hasMore:d,isLoading:!1,...d?{}:{totalCount:p.length}})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var i,a;if(this.store.getState().isPreviewOpen){this.store.setState({isPreviewOpen:!1,previewAsset:null});return}this.close(),(a=(i=this.config)==null?void 0:i.onCancel)==null||a.call(i),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){this.store.setState({searchQuery:e.detail.value,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleViewChange(e){this.store.setState({viewMode:e.detail.mode}),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Lt(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Lt(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){this.store.setState({activeTab:e.detail.tab,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}_handleQuickSelect(e){var i,a;const s=e.detail.asset;(a=(i=this.config)==null?void 0:i.onSelect)==null||a.call(i,[s]),this.dispatchEvent(new CustomEvent("ap-select",{detail:{assets:[s]},bubbles:!0,composed:!0})),this.close()}_handleFolderOpen(e){const s=e.detail.folder,i=this.store.getState(),a=s.path||`${i.currentFolderPath}${s.name}/`;this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){const s=e.detail.uuid,i=this.store.getState(),a=s?i.breadcrumb.findIndex(l=>l.uuid===s):-1,r=s?i.breadcrumb.slice(0,a+1):[],o=r.length>0?r[r.length-1].path:"/";this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:r,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var i,a;const s=e.detail.assets;(a=(i=this.config)==null?void 0:i.onSelect)==null||a.call(i,s),this.dispatchEvent(new CustomEvent("ap-select",{detail:{assets:s},bubbles:!0,composed:!0})),this.close()}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===g.DATE||e===g.LICENSE_EXPIRY||e===I.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:a}=e.detail,o={...this.store.getState().filters};let l=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(d=>d==null||d===""||Array.isArray(d)&&d.length===0);if(!l&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:d,preset:p,from:u,to:f}=i;l=!d&&!p&&!u&&!f}if(l){const d={...o.applied};delete d[s],o.applied=d,o.pinned.includes(s)||(o.visible=o.visible.filter(p=>p!==s))}else{const d={...o.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?d[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===g.IMAGE&&typeof i=="object"&&!Array.isArray(i)?d[s]=i:d[s]={type:"string",values:Array.isArray(i)?i:[i],operator:a||":"},o.applied=d,o.visible.includes(s)||(o.visible=[...o.visible,s])}this.store.setState({filters:o,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,a=this.renderRoot.querySelector("ap-content-toolbar");let r;if(i){const o=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(o){const l=o.getBoundingClientRect();r=i.left-l.left}}a==null||a.openFilterPanel(s,!0,r)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,a=this.renderRoot.querySelector("ap-content-toolbar");let r;if(i){const o=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(o){const l=o.getBoundingClientRect();r=i.left-l.left}}a==null||a.openMetadataFieldPanel(s,!0,r)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null)}_handleFilterRemove(e){const s=e.detail.key,a={...this.store.getState().filters},r={...a.applied};delete r[s],a.applied=r,a.pinned.includes(s)||(a.visible=a.visible.filter(o=>o!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:a,metadataType:r}=e.detail,l={...this.store.getState().filters},d={...l.metadata},p={...d.applied};!a||Array.isArray(a)&&a.length===0?(delete p[s],d.applied=p,d.pinned.includes(s)||(d.visible=d.visible.filter(f=>f!==s))):(p[s]={type:"string",values:Array.isArray(a)?a:[a],operator:i||":",metadataType:r},d.applied=p,d.visible.includes(s)||(d.visible=[...d.visible,s])),l.metadata=d,this.store.setState({filters:l,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(l=>l!==s),r.metadata=o,this.store.setState({filters:r})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata},o={...r.applied};delete o[s],r.applied=o,r.pinned.includes(s)||(r.visible=r.visible.filter(l=>l!==s)),a.metadata=r,this.store.setState({filters:a,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var l,d;const{key:s,pinned:i}=e.detail,r={...this.store.getState().filters};i?r.pinned.includes(s)||(r.pinned=[...r.pinned,s]):(r.pinned=r.pinned.filter(p=>p!==s),s in r.applied||(r.visible=r.visible.filter(p=>p!==s))),this.store.setState({filters:r});const o=((d=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:d.projectToken)??null;Xs(o,r.pinned)}_handleMetadataPin(e){var d,p;const{fieldKey:s,pinned:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(u=>u!==s),s in o.applied||(o.visible=o.visible.filter(u=>u!==s))),r.metadata=o,this.store.setState({filters:r});const l=((p=(d=this.store.getState().config)==null?void 0:d.auth)==null?void 0:p.projectToken)??null;Ws(l,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[]});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,a={...this.store.getState().filters};a.visible=a.visible.filter(r=>r!==s),this.store.setState({filters:a})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata};r.visible=r.visible.filter(o=>o!==s),a.metadata=r,this.store.setState({filters:a})}_handleFiltersSet(e){const{applied:s,metadata:i}=e.detail,r={...this.store.getState().filters};r.applied=s;const o=Object.keys(s);if(r.visible=[...new Set([...r.pinned,...o])],i){const l={...r.metadata};l.applied=i.applied;const d=Object.keys(i.applied);l.visible=[...new Set([...l.pinned,...d])],r.metadata=l}this.store.setState({filters:r,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){const e=this.storeCtrl.state;return e.searchQuery?Zs:e.activeTab==="folders"?Js:ft}_buildSearchNotation(){const e=this.store.getState();return Rs(e.filters.applied,e.filters.metadata.applied).join(" ")}render(){var a,r;const e=this.storeCtrl.state,s=Array.from(e.selectedAssets.keys()),i=this.selectionCtrl.getSelectedAssets();return n.html`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${o=>this._handleCancel(o.detail.reason)}
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

            <div class="toolbar-filters-wrapper">
              <ap-content-toolbar
                .isLoading=${e.isLoading}
                .totalCount=${e.totalCount}
                .totalFolderCount=${e.totalFolderCount}
                .sortBy=${e.sortBy}
                .sortDirection=${e.sortDirection}
                .sortOptions=${this._getSortOptions()}
                .filters=${e.filters}
                .labels=${e.labels}
                .metadataFields=${e.metadataFields}
                .pinnedFilters=${e.filters.pinned}
                @sort-change=${this._handleSortChange}
                @sort-direction-change=${this._handleSortDirectionChange}
                @filter-update=${this._handleFilterUpdate}
                @filter-pin=${this._handleFilterPin}
                @metadata-filter-change=${this._handleMetadataFilterChange}
                @metadata-field-toggle=${this._handleMetadataFieldToggle}
                @metadata-pin=${this._handleMetadataPin}
                @filter-panel-change=${this._handleFilterPanelChange}
              ></ap-content-toolbar>

              <ap-filters-bar
                .appliedFilters=${e.filters.applied}
                .appliedMetadata=${e.filters.metadata.applied}
                .metadataFields=${e.metadataFields}
                .pinnedFilters=${e.filters.pinned}
                .pinnedMetadataFields=${e.filters.metadata.pinned}
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
            </div>

            ${e.isLoading&&e.assets.length===0&&e.folders.length===0?n.html`<ap-skeleton .variant=${e.viewMode}></ap-skeleton>`:this._renderContent(e,s)}

            <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          </div>

          ${e.isPreviewOpen&&e.previewAsset?n.html`<ap-preview-panel
                .asset=${e.previewAsset}
                .assets=${e.assets}
                .selectedIds=${s}
                .containerToken=${e.projectToken}
                .showMetadata=${((r=this.config)==null?void 0:r.showMetadata)!==!1}
                .metadataFields=${e.metadataFields}
                .regionalFilters=${e.regionalFilters}
                @preview-close=${this._handlePreviewClose}
                @preview-navigate=${this._handlePreviewNavigate}
                @asset-select=${this._handleAssetSelect}
              ></ap-preview-panel>`:n.nothing}
        </div>

        <div slot="footer">
          <ap-selection-bar
            .selectedAssets=${i}
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
      `:n.nothing}};wt.styles=[n.css`
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
      .toolbar-filters-wrapper {
        position: relative;
        z-index: 10;
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
    `];let Ge=wt;Fi([c.property({type:Object})],Ge.prototype,"config");exports.AssetPicker=Ge;
